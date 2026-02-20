import { api as ne } from "/scripts/api.js";
import { app as lc } from "/scripts/app.js";
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sc = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = Symbol.for("react.element"), uf = Symbol.for("react.portal"), ff = Symbol.for("react.fragment"), pf = Symbol.for("react.strict_mode"), mf = Symbol.for("react.profiler"), hf = Symbol.for("react.provider"), gf = Symbol.for("react.context"), yf = Symbol.for("react.forward_ref"), vf = Symbol.for("react.suspense"), wf = Symbol.for("react.memo"), xf = Symbol.for("react.lazy"), Qo = Symbol.iterator;
function _f(e) {
  return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ac = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, oc = Object.assign, ic = {};
function tr(e, t, n) {
  this.props = e, this.context = t, this.refs = ic, this.updater = n || ac;
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cc() {
}
cc.prototype = tr.prototype;
function Va(e, t, n) {
  this.props = e, this.context = t, this.refs = ic, this.updater = n || ac;
}
var Qa = Va.prototype = new cc();
Qa.constructor = Va;
oc(Qa, tr.prototype);
Qa.isPureReactComponent = !0;
var Bo = Array.isArray, dc = Object.prototype.hasOwnProperty, Ba = { current: null }, uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) dc.call(t, r) && !uc.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: Qr, type: e, key: a, ref: o, props: s, _owner: Ba.current };
}
function kf(e, t) {
  return { $$typeof: Qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function Sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function ws(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sf("" + e.key) : t.toString(36);
}
function hl(e, t, n, r, s) {
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
        case Qr:
        case uf:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + ws(o, 0) : r, Bo(s) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), hl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (Ha(s) && (s = kf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ho, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bo(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + ws(a, i);
    o += hl(a, t, n, c, s);
  }
  else if (c = _f(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + ws(a, i++), o += hl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Yr(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return hl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function jf(e) {
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
var He = { current: null }, gl = { transition: null }, Ef = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: gl, ReactCurrentOwner: Ba };
function pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = { map: Yr, forEach: function(e, t, n) {
  Yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ha(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
se.Component = tr;
se.Fragment = ff;
se.Profiler = mf;
se.PureComponent = Va;
se.StrictMode = pf;
se.Suspense = vf;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
se.act = pc;
se.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = oc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Ba.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) dc.call(t, c) && !uc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Qr, type: e.type, key: s, ref: a, props: r, _owner: o };
};
se.createContext = function(e) {
  return e = { $$typeof: gf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hf, _context: e }, e.Consumer = e;
};
se.createElement = fc;
se.createFactory = function(e) {
  var t = fc.bind(null, e);
  return t.type = e, t;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(e) {
  return { $$typeof: yf, render: e };
};
se.isValidElement = Ha;
se.lazy = function(e) {
  return { $$typeof: xf, _payload: { _status: -1, _result: e }, _init: jf };
};
se.memo = function(e, t) {
  return { $$typeof: wf, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function(e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
se.unstable_act = pc;
se.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
se.useContext = function(e) {
  return He.current.useContext(e);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
se.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
se.useId = function() {
  return He.current.useId();
};
se.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
se.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
se.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
se.useRef = function(e) {
  return He.current.useRef(e);
};
se.useState = function(e) {
  return He.current.useState(e);
};
se.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function() {
  return He.current.useTransition();
};
se.version = "18.3.1";
sc.exports = se;
var h = sc.exports;
const Gt = /* @__PURE__ */ df(h);
var mc = { exports: {} }, ot = {}, hc = { exports: {} }, gc = {};
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
  function t(T, D) {
    var W = T.length;
    T.push(D);
    e: for (; 0 < W; ) {
      var L = W - 1 >>> 1, ee = T[L];
      if (0 < s(ee, D)) T[L] = D, T[W] = ee, W = L;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var D = T[0], W = T.pop();
    if (W !== D) {
      T[0] = W;
      e: for (var L = 0, ee = T.length, ce = ee >>> 1; L < ce; ) {
        var V = 2 * (L + 1) - 1, O = T[V], P = V + 1, J = T[P];
        if (0 > s(O, W)) P < ee && 0 > s(J, O) ? (T[L] = J, T[P] = W, L = P) : (T[L] = O, T[V] = W, L = V);
        else if (P < ee && 0 > s(J, W)) T[L] = J, T[P] = W, L = P;
        else break e;
      }
    }
    return D;
  }
  function s(T, D) {
    var W = T.sortIndex - D.sortIndex;
    return W !== 0 ? W : T.id - D.id;
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
  var c = [], d = [], p = 1, y = null, w = 3, x = !1, v = !1, _ = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var D = n(d); D !== null; ) {
      if (D.callback === null) r(d);
      else if (D.startTime <= T) r(d), D.sortIndex = D.expirationTime, t(c, D);
      else break;
      D = n(d);
    }
  }
  function g(T) {
    if (_ = !1, m(T), !v) if (n(c) !== null) v = !0, N(k);
    else {
      var D = n(d);
      D !== null && U(g, D.startTime - T);
    }
  }
  function k(T, D) {
    v = !1, _ && (_ = !1, f(C), C = -1), x = !0;
    var W = w;
    try {
      for (m(D), y = n(c); y !== null && (!(y.expirationTime > D) || T && !I()); ) {
        var L = y.callback;
        if (typeof L == "function") {
          y.callback = null, w = y.priorityLevel;
          var ee = L(y.expirationTime <= D);
          D = e.unstable_now(), typeof ee == "function" ? y.callback = ee : y === n(c) && r(c), m(D);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var ce = !0;
      else {
        var V = n(d);
        V !== null && U(g, V.startTime - D), ce = !1;
      }
      return ce;
    } finally {
      y = null, w = W, x = !1;
    }
  }
  var j = !1, E = null, C = -1, A = 5, M = -1;
  function I() {
    return !(e.unstable_now() - M < A);
  }
  function z() {
    if (E !== null) {
      var T = e.unstable_now();
      M = T;
      var D = !0;
      try {
        D = E(!0, T);
      } finally {
        D ? B() : (j = !1, E = null);
      }
    } else j = !1;
  }
  var B;
  if (typeof u == "function") B = function() {
    u(z);
  };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(), G = b.port2;
    b.port1.onmessage = z, B = function() {
      G.postMessage(null);
    };
  } else B = function() {
    S(z, 0);
  };
  function N(T) {
    E = T, j || (j = !0, B());
  }
  function U(T, D) {
    C = S(function() {
      T(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    v || x || (v = !0, N(k));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(T) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = w;
    }
    var W = w;
    w = D;
    try {
      return T();
    } finally {
      w = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, D) {
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
    var W = w;
    w = T;
    try {
      return D();
    } finally {
      w = W;
    }
  }, e.unstable_scheduleCallback = function(T, D, W) {
    var L = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? L + W : L) : W = L, T) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = W + ee, T = { id: p++, callback: D, priorityLevel: T, startTime: W, expirationTime: ee, sortIndex: -1 }, W > L ? (T.sortIndex = W, t(d, T), n(c) === null && T === n(d) && (_ ? (f(C), C = -1) : _ = !0, U(g, W - L))) : (T.sortIndex = ee, t(c, T), v || x || (v = !0, N(k))), T;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(T) {
    var D = w;
    return function() {
      var W = w;
      w = D;
      try {
        return T.apply(this, arguments);
      } finally {
        w = W;
      }
    };
  };
})(gc);
hc.exports = gc;
var Nf = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf = h, at = Nf;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yc = /* @__PURE__ */ new Set(), Er = {};
function En(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hs = Object.prototype.hasOwnProperty, bf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ko = {}, Go = {};
function If(e) {
  return Hs.call(Go, e) ? !0 : Hs.call(Ko, e) ? !1 : bf.test(e) ? Go[e] = !0 : (Ko[e] = !0, !1);
}
function Mf(e, t, n, r) {
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
function Tf(e, t, n, r) {
  if (t === null || typeof t > "u" || Mf(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Oe[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Oe[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Oe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Oe[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Oe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Oe[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Oe[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Oe[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Oe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ka = /[\-:]([a-z])/g;
function Ga(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ka,
    Ga
  );
  Oe[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ka, Ga);
  Oe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ka, Ga);
  Oe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Oe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Oe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qa(e, t, n, r) {
  var s = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tf(t, n, s, r) && (n = null), r || s === null ? If(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xr = Symbol.for("react.element"), In = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), Ya = Symbol.for("react.strict_mode"), Ks = Symbol.for("react.profiler"), vc = Symbol.for("react.provider"), wc = Symbol.for("react.context"), Xa = Symbol.for("react.forward_ref"), Gs = Symbol.for("react.suspense"), qs = Symbol.for("react.suspense_list"), Ja = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), xc = Symbol.for("react.offscreen"), qo = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object" ? null : (e = qo && e[qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, xs;
function fr(e) {
  if (xs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    xs = t && t[1] || "";
  }
  return `
` + xs + e;
}
var _s = !1;
function ks(e, t) {
  if (!e || _s) return "";
  _s = !0;
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
      for (var s = d.stack.split(`
`), a = r.stack.split(`
`), o = s.length - 1, i = a.length - 1; 1 <= o && 0 <= i && s[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (s[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || s[o] !== a[i]) {
              var c = `
` + s[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    _s = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Lf(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ks(e.type, !1), e;
    case 11:
      return e = ks(e.type.render, !1), e;
    case 1:
      return e = ks(e.type, !0), e;
    default:
      return "";
  }
}
function Ys(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case In:
      return "Portal";
    case Ks:
      return "Profiler";
    case Ya:
      return "StrictMode";
    case Gs:
      return "Suspense";
    case qs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wc:
      return (e.displayName || "Context") + ".Consumer";
    case vc:
      return (e._context.displayName || "Context") + ".Provider";
    case Xa:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ja:
      return t = e.displayName || null, t !== null ? t : Ys(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return Ys(e(t));
      } catch {
      }
  }
  return null;
}
function Df(e) {
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
      return Ys(t);
    case 8:
      return t === Ya ? "StrictMode" : "Mode";
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
function sn(e) {
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
function _c(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pf(e) {
  var t = _c(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return s.call(this);
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
function Jr(e) {
  e._valueTracker || (e._valueTracker = Pf(e));
}
function kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = _c(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function bl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xs(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sc(e, t) {
  t = t.checked, t != null && qa(e, "checked", t, !1);
}
function Js(e, t) {
  Sc(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Zs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zs(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Zs(e, t, n) {
  (t !== "number" || bl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function $n(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(F(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function jc(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Zo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ec(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zr, Nc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
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
}, Rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function(e) {
  Rf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), gr[t] = gr[e];
  });
});
function Cc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px";
}
function bc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Cc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Af = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function na(e, t) {
  if (t) {
    if (Af[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function ra(e, t) {
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
var la = null;
function Za(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var sa = null, Un = null, Vn = null;
function ei(e) {
  if (e = Kr(e)) {
    if (typeof sa != "function") throw Error(F(280));
    var t = e.stateNode;
    t && (t = rs(t), sa(e.stateNode, e.type, t));
  }
}
function Ic(e) {
  Un ? Vn ? Vn.push(e) : Vn = [e] : Un = e;
}
function Mc() {
  if (Un) {
    var e = Un, t = Vn;
    if (Vn = Un = null, ei(e), t) for (e = 0; e < t.length; e++) ei(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Lc() {
}
var Ss = !1;
function Dc(e, t, n) {
  if (Ss) return e(t, n);
  Ss = !0;
  try {
    return Tc(e, t, n);
  } finally {
    Ss = !1, (Un !== null || Vn !== null) && (Lc(), Mc());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = rs(n);
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
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var aa = !1;
if (zt) try {
  var sr = {};
  Object.defineProperty(sr, "passive", { get: function() {
    aa = !0;
  } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
} catch {
  aa = !1;
}
function zf(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var yr = !1, Il = null, Ml = !1, oa = null, Of = { onError: function(e) {
  yr = !0, Il = e;
} };
function Ff(e, t, n, r, s, a, o, i, c) {
  yr = !1, Il = null, zf.apply(Of, arguments);
}
function Wf(e, t, n, r, s, a, o, i, c) {
  if (Ff.apply(this, arguments), yr) {
    if (yr) {
      var d = Il;
      yr = !1, Il = null;
    } else throw Error(F(198));
    Ml || (Ml = !0, oa = d);
  }
}
function Nn(e) {
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ti(e) {
  if (Nn(e) !== e) throw Error(F(188));
}
function $f(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a; ) {
        if (a === n) return ti(s), e;
        if (a === r) return ti(s), t;
        a = a.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) n = s, r = a;
    else {
      for (var o = !1, i = s.child; i; ) {
        if (i === n) {
          o = !0, n = s, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = s, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = s;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = s;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function Rc(e) {
  return e = $f(e), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zc = at.unstable_scheduleCallback, ni = at.unstable_cancelCallback, Uf = at.unstable_shouldYield, Vf = at.unstable_requestPaint, Ie = at.unstable_now, Qf = at.unstable_getCurrentPriorityLevel, eo = at.unstable_ImmediatePriority, Oc = at.unstable_UserBlockingPriority, Tl = at.unstable_NormalPriority, Bf = at.unstable_LowPriority, Fc = at.unstable_IdlePriority, Zl = null, bt = null;
function Hf(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function") try {
    bt.onCommitFiberRoot(Zl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : qf, Kf = Math.log, Gf = Math.LN2;
function qf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Kf(e) / Gf | 0) | 0;
}
var el = 64, tl = 4194304;
function mr(e) {
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
function Ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = mr(i) : (a &= o, a !== 0 && (r = mr(a)));
  } else o = n & ~s, o !== 0 ? r = mr(o) : a !== 0 && (r = mr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function Yf(e, t) {
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
function Xf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = Yf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function ia(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wc() {
  var e = el;
  return el <<= 1, !(el & 4194240) && (el = 64), e;
}
function js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function Jf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - kt(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function to(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var fe = 0;
function $c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uc, no, Vc, Qc, Bc, ca = !1, nl = [], Xt = null, Jt = null, Zt = null, br = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), Ht = [], Zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ri(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function ar(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Kr(t), t !== null && no(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function ep(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Xt = ar(Xt, e, t, n, r, s), !0;
    case "dragenter":
      return Jt = ar(Jt, e, t, n, r, s), !0;
    case "mouseover":
      return Zt = ar(Zt, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return br.set(a, ar(br.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Ir.set(a, ar(Ir.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Hc(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, Bc(e.priority, function() {
            Vc(n);
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
function yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      la = r, n.target.dispatchEvent(r), la = null;
    } else return t = Kr(n), t !== null && no(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function li(e, t, n) {
  yl(e) && n.delete(t);
}
function tp() {
  ca = !1, Xt !== null && yl(Xt) && (Xt = null), Jt !== null && yl(Jt) && (Jt = null), Zt !== null && yl(Zt) && (Zt = null), br.forEach(li), Ir.forEach(li);
}
function or(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ca || (ca = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, tp)));
}
function Mr(e) {
  function t(s) {
    return or(s, e);
  }
  if (0 < nl.length) {
    or(nl[0], e);
    for (var n = 1; n < nl.length; n++) {
      var r = nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && or(Xt, e), Jt !== null && or(Jt, e), Zt !== null && or(Zt, e), br.forEach(t), Ir.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) Hc(n), n.blockedOn === null && Ht.shift();
}
var Qn = $t.ReactCurrentBatchConfig, Dl = !0;
function np(e, t, n, r) {
  var s = fe, a = Qn.transition;
  Qn.transition = null;
  try {
    fe = 1, ro(e, t, n, r);
  } finally {
    fe = s, Qn.transition = a;
  }
}
function rp(e, t, n, r) {
  var s = fe, a = Qn.transition;
  Qn.transition = null;
  try {
    fe = 4, ro(e, t, n, r);
  } finally {
    fe = s, Qn.transition = a;
  }
}
function ro(e, t, n, r) {
  if (Dl) {
    var s = da(e, t, n, r);
    if (s === null) Ps(e, t, r, Pl, n), ri(e, r);
    else if (ep(s, e, t, n, r)) r.stopPropagation();
    else if (ri(e, r), t & 4 && -1 < Zf.indexOf(e)) {
      for (; s !== null; ) {
        var a = Kr(s);
        if (a !== null && Uc(a), a = da(e, t, n, r), a === null && Ps(e, t, r, Pl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Ps(e, t, r, null, n);
  }
}
var Pl = null;
function da(e, t, n, r) {
  if (Pl = null, e = Za(r), e = pn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Pc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Pl = e, null;
}
function Kc(e) {
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
      switch (Qf()) {
        case eo:
          return 1;
        case Oc:
          return 4;
        case Tl:
        case Bf:
          return 16;
        case Fc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, lo = null, vl = null;
function Gc() {
  if (vl) return vl;
  var e, t = lo, n = t.length, r, s = "value" in qt ? qt.value : qt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return vl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function wl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function rl() {
  return !0;
}
function si() {
  return !1;
}
function it(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? rl : si, this.isPropagationStopped = si, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = rl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = rl);
  }, persist: function() {
  }, isPersistent: rl }), t;
}
var nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, so = it(nr), Hr = Ee({}, nr, { view: 0, detail: 0 }), lp = it(Hr), Es, Ns, ir, es = Ee({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Es = e.screenX - ir.screenX, Ns = e.screenY - ir.screenY) : Ns = Es = 0, ir = e), Es);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ns;
} }), ai = it(es), sp = Ee({}, es, { dataTransfer: 0 }), ap = it(sp), op = Ee({}, Hr, { relatedTarget: 0 }), Cs = it(op), ip = Ee({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cp = it(ip), dp = Ee({}, nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), up = it(dp), fp = Ee({}, nr, { data: 0 }), oi = it(fp), pp = {
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
}, mp = {
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
}, hp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hp[e]) ? !!t[e] : !1;
}
function ao() {
  return gp;
}
var yp = Ee({}, Hr, { key: function(e) {
  if (e.key) {
    var t = pp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? wl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vp = it(yp), wp = Ee({}, es, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ii = it(wp), xp = Ee({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), _p = it(xp), kp = Ee({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sp = it(kp), jp = Ee({}, es, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ep = it(jp), Np = [9, 13, 27, 32], oo = zt && "CompositionEvent" in window, vr = null;
zt && "documentMode" in document && (vr = document.documentMode);
var Cp = zt && "TextEvent" in window && !vr, qc = zt && (!oo || vr && 8 < vr && 11 >= vr), ci = " ", di = !1;
function Yc(e, t) {
  switch (e) {
    case "keyup":
      return Np.indexOf(t.keyCode) !== -1;
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
function Xc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function bp(e, t) {
  switch (e) {
    case "compositionend":
      return Xc(t);
    case "keypress":
      return t.which !== 32 ? null : (di = !0, ci);
    case "textInput":
      return e = t.data, e === ci && di ? null : e;
    default:
      return null;
  }
}
function Ip(e, t) {
  if (Tn) return e === "compositionend" || !oo && Yc(e, t) ? (e = Gc(), vl = lo = qt = null, Tn = !1, e) : null;
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
      return qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mp[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  Ic(r), t = Rl(t, "onChange"), 0 < t.length && (n = new so("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, Tr = null;
function Tp(e) {
  cd(e, 0);
}
function ts(e) {
  var t = Pn(e);
  if (kc(t)) return e;
}
function Lp(e, t) {
  if (e === "change") return t;
}
var Zc = !1;
if (zt) {
  var bs;
  if (zt) {
    var Is = "oninput" in document;
    if (!Is) {
      var fi = document.createElement("div");
      fi.setAttribute("oninput", "return;"), Is = typeof fi.oninput == "function";
    }
    bs = Is;
  } else bs = !1;
  Zc = bs && (!document.documentMode || 9 < document.documentMode);
}
function pi() {
  wr && (wr.detachEvent("onpropertychange", ed), Tr = wr = null);
}
function ed(e) {
  if (e.propertyName === "value" && ts(Tr)) {
    var t = [];
    Jc(t, Tr, e, Za(e)), Dc(Tp, t);
  }
}
function Dp(e, t, n) {
  e === "focusin" ? (pi(), wr = t, Tr = n, wr.attachEvent("onpropertychange", ed)) : e === "focusout" && pi();
}
function Pp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ts(Tr);
}
function Rp(e, t) {
  if (e === "click") return ts(t);
}
function Ap(e, t) {
  if (e === "input" || e === "change") return ts(t);
}
function zp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : zp;
function Lr(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Hs.call(t, s) || !jt(e[s], t[s])) return !1;
  }
  return !0;
}
function mi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hi(e, t) {
  var n = mi(e);
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
    n = mi(n);
  }
}
function td(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? td(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function nd() {
  for (var e = window, t = bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bl(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Op(e) {
  var t = nd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && td(n.ownerDocument.documentElement, n)) {
    if (r !== null && io(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = hi(n, a);
        var o = hi(
          n,
          r
        );
        s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Fp = zt && "documentMode" in document && 11 >= document.documentMode, Ln = null, ua = null, xr = null, fa = !1;
function gi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa || Ln == null || Ln !== bl(r) || (r = Ln, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && Lr(xr, r) || (xr = r, r = Rl(ua, "onSelect"), 0 < r.length && (t = new so("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ln)));
}
function ll(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: ll("Animation", "AnimationEnd"), animationiteration: ll("Animation", "AnimationIteration"), animationstart: ll("Animation", "AnimationStart"), transitionend: ll("Transition", "TransitionEnd") }, Ms = {}, rd = {};
zt && (rd = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function ns(e) {
  if (Ms[e]) return Ms[e];
  if (!Dn[e]) return e;
  var t = Dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in rd) return Ms[e] = t[n];
  return e;
}
var ld = ns("animationend"), sd = ns("animationiteration"), ad = ns("animationstart"), od = ns("transitionend"), id = /* @__PURE__ */ new Map(), yi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function on(e, t) {
  id.set(e, t), En(t, [e]);
}
for (var Ts = 0; Ts < yi.length; Ts++) {
  var Ls = yi[Ts], Wp = Ls.toLowerCase(), $p = Ls[0].toUpperCase() + Ls.slice(1);
  on(Wp, "on" + $p);
}
on(ld, "onAnimationEnd");
on(sd, "onAnimationIteration");
on(ad, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(od, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Up = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function vi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wf(r, t, void 0, e), e.currentTarget = null;
}
function cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        vi(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        vi(s, i, d), a = c;
      }
    }
  }
  if (Ml) throw e = oa, Ml = !1, oa = null, e;
}
function ge(e, t) {
  var n = t[ya];
  n === void 0 && (n = t[ya] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dd(t, e, 2, !1), n.add(r));
}
function Ds(e, t, n) {
  var r = 0;
  t && (r |= 4), dd(n, e, r, t);
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[sl]) {
    e[sl] = !0, yc.forEach(function(n) {
      n !== "selectionchange" && (Up.has(n) || Ds(n, !1, e), Ds(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || (t[sl] = !0, Ds("selectionchange", !1, t));
  }
}
function dd(e, t, n, r) {
  switch (Kc(t)) {
    case 1:
      var s = np;
      break;
    case 4:
      s = rp;
      break;
    default:
      s = ro;
  }
  n = s.bind(null, t, n, e), s = void 0, !aa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Ps(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === s || i.nodeType === 8 && i.parentNode === s) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = pn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Dc(function() {
    var d = a, p = Za(n), y = [];
    e: {
      var w = id.get(e);
      if (w !== void 0) {
        var x = so, v = e;
        switch (e) {
          case "keypress":
            if (wl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = vp;
            break;
          case "focusin":
            v = "focus", x = Cs;
            break;
          case "focusout":
            v = "blur", x = Cs;
            break;
          case "beforeblur":
          case "afterblur":
            x = Cs;
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
            x = ai;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ap;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = _p;
            break;
          case ld:
          case sd:
          case ad:
            x = cp;
            break;
          case od:
            x = Sp;
            break;
          case "scroll":
            x = lp;
            break;
          case "wheel":
            x = Ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = up;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ii;
        }
        var _ = (t & 4) !== 0, S = !_ && e === "scroll", f = _ ? w !== null ? w + "Capture" : null : w;
        _ = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, f !== null && (g = Cr(u, f), g != null && _.push(Pr(u, g, m)))), S) break;
          u = u.return;
        }
        0 < _.length && (w = new x(w, v, null, n, p), y.push({ event: w, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== la && (v = n.relatedTarget || n.fromElement) && (pn(v) || v[Ot])) break e;
        if ((x || w) && (w = p.window === p ? p : (w = p.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = d, v = v ? pn(v) : null, v !== null && (S = Nn(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = d), x !== v)) {
          if (_ = ai, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ii, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), S = x == null ? w : Pn(x), m = v == null ? w : Pn(v), w = new _(g, u + "leave", x, n, p), w.target = S, w.relatedTarget = m, g = null, pn(p) === d && (_ = new _(f, u + "enter", v, n, p), _.target = m, _.relatedTarget = S, g = _), S = g, x && v) t: {
            for (_ = x, f = v, u = 0, m = _; m; m = bn(m)) u++;
            for (m = 0, g = f; g; g = bn(g)) m++;
            for (; 0 < u - m; ) _ = bn(_), u--;
            for (; 0 < m - u; ) f = bn(f), m--;
            for (; u--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = bn(_), f = bn(f);
            }
            _ = null;
          }
          else _ = null;
          x !== null && wi(y, w, x, _, !1), v !== null && S !== null && wi(y, S, v, _, !0);
        }
      }
      e: {
        if (w = d ? Pn(d) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var k = Lp;
        else if (ui(w)) if (Zc) k = Ap;
        else {
          k = Pp;
          var j = Dp;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (k = Rp);
        if (k && (k = k(e, d))) {
          Jc(y, k, n, p);
          break e;
        }
        j && j(e, w, d), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && Zs(w, "number", w.value);
      }
      switch (j = d ? Pn(d) : window, e) {
        case "focusin":
          (ui(j) || j.contentEditable === "true") && (Ln = j, ua = d, xr = null);
          break;
        case "focusout":
          xr = ua = Ln = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fa = !1, gi(y, n, p);
          break;
        case "selectionchange":
          if (Fp) break;
        case "keydown":
        case "keyup":
          gi(y, n, p);
      }
      var E;
      if (oo) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Tn ? Yc(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (qc && n.locale !== "ko" && (Tn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Tn && (E = Gc()) : (qt = p, lo = "value" in qt ? qt.value : qt.textContent, Tn = !0)), j = Rl(d, C), 0 < j.length && (C = new oi(C, e, null, n, p), y.push({ event: C, listeners: j }), E ? C.data = E : (E = Xc(n), E !== null && (C.data = E)))), (E = Cp ? bp(e, n) : Ip(e, n)) && (d = Rl(d, "onBeforeInput"), 0 < d.length && (p = new oi("onBeforeInput", "beforeinput", null, n, p), y.push({ event: p, listeners: d }), p.data = E));
    }
    cd(y, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Cr(e, n), a != null && r.unshift(Pr(e, a, s)), a = Cr(e, t), a != null && r.push(Pr(e, a, s))), e = e.return;
  }
  return r;
}
function bn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wi(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Cr(n, a), c != null && o.unshift(Pr(n, c, i))) : s || (c = Cr(n, a), c != null && o.push(Pr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vp = /\r\n?/g, Qp = /\u0000|\uFFFD/g;
function xi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Vp, `
`).replace(Qp, "");
}
function al(e, t, n) {
  if (t = xi(t), xi(e) !== t && n) throw Error(F(425));
}
function Al() {
}
var pa = null, ma = null;
function ha(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0, Bp = typeof clearTimeout == "function" ? clearTimeout : void 0, _i = typeof Promise == "function" ? Promise : void 0, Hp = typeof queueMicrotask == "function" ? queueMicrotask : typeof _i < "u" ? function(e) {
  return _i.resolve(null).then(e).catch(Kp);
} : ga;
function Kp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Rs(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Mr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Mr(t);
}
function en(e) {
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
function ki(e) {
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
var rr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + rr, Rr = "__reactProps$" + rr, Ot = "__reactContainer$" + rr, ya = "__reactEvents$" + rr, Gp = "__reactListeners$" + rr, qp = "__reactHandles$" + rr;
function pn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ki(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = ki(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Kr(e) {
  return e = e[Ct] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function rs(e) {
  return e[Rr] || null;
}
var va = [], Rn = -1;
function cn(e) {
  return { current: e };
}
function ye(e) {
  0 > Rn || (e.current = va[Rn], va[Rn] = null, Rn--);
}
function he(e, t) {
  Rn++, va[Rn] = e.current, e.current = t;
}
var an = {}, Ve = cn(an), Je = cn(!1), vn = an;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function zl() {
  ye(Je), ye(Ve);
}
function Si(e, t, n) {
  if (Ve.current !== an) throw Error(F(168));
  he(Ve, t), he(Je, n);
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(F(108, Df(e) || "Unknown", s));
  return Ee({}, n, r);
}
function Ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, vn = Ve.current, he(Ve, e), he(Je, Je.current), !0;
}
function ji(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n ? (e = ud(e, t, vn), r.__reactInternalMemoizedMergedChildContext = e, ye(Je), ye(Ve), he(Ve, e)) : ye(Je), he(Je, n);
}
var Dt = null, ls = !1, As = !1;
function fd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Yp(e) {
  ls = !0, fd(e);
}
function dn() {
  if (!As && Dt !== null) {
    As = !0;
    var e = 0, t = fe;
    try {
      var n = Dt;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, ls = !1;
    } catch (s) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), zc(eo, dn), s;
    } finally {
      fe = t, As = !1;
    }
  }
  return null;
}
var An = [], zn = 0, Fl = null, Wl = 0, ct = [], dt = 0, wn = null, Pt = 1, Rt = "";
function un(e, t) {
  An[zn++] = Wl, An[zn++] = Fl, Fl = e, Wl = t;
}
function pd(e, t, n) {
  ct[dt++] = Pt, ct[dt++] = Rt, ct[dt++] = wn, wn = e;
  var r = Pt;
  e = Rt;
  var s = 32 - kt(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - kt(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Pt = 1 << 32 - kt(t) + s | n << s | r, Rt = a + e;
  } else Pt = 1 << a | n << s | r, Rt = e;
}
function co(e) {
  e.return !== null && (un(e, 1), pd(e, 1, 0));
}
function uo(e) {
  for (; e === Fl; ) Fl = An[--zn], An[zn] = null, Wl = An[--zn], An[zn] = null;
  for (; e === wn; ) wn = ct[--dt], ct[dt] = null, Rt = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var st = null, lt = null, xe = !1, xt = null;
function md(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ei(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, lt = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, lt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, lt = null, !0) : !1;
    default:
      return !1;
  }
}
function wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xa(e) {
  if (xe) {
    var t = lt;
    if (t) {
      var n = t;
      if (!Ei(e, t)) {
        if (wa(e)) throw Error(F(418));
        t = en(n.nextSibling);
        var r = st;
        t && Ei(e, t) ? md(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, st = e);
      }
    } else {
      if (wa(e)) throw Error(F(418));
      e.flags = e.flags & -4097 | 2, xe = !1, st = e;
    }
  }
}
function Ni(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  st = e;
}
function ol(e) {
  if (e !== st) return !1;
  if (!xe) return Ni(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps)), t && (t = lt)) {
    if (wa(e)) throw hd(), Error(F(418));
    for (; t; ) md(e, t), t = en(t.nextSibling);
  }
  if (Ni(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              lt = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = st ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function hd() {
  for (var e = lt; e; ) e = en(e.nextSibling);
}
function qn() {
  lt = st = null, xe = !1;
}
function fo(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Xp = $t.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ci(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
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
  function s(f, u) {
    return f = ln(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, g) {
    return u === null || u.tag !== 6 ? (u = Vs(m, f.mode, g), u.return = f, u) : (u = s(u, m), u.return = f, u);
  }
  function c(f, u, m, g) {
    var k = m.type;
    return k === Mn ? p(f, u, m.props.children, g, m.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Ci(k) === u.type) ? (g = s(u, m.props), g.ref = cr(f, u, m), g.return = f, g) : (g = Nl(m.type, m.key, m.props, null, f.mode, g), g.ref = cr(f, u, m), g.return = f, g);
  }
  function d(f, u, m, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = Qs(m, f.mode, g), u.return = f, u) : (u = s(u, m.children || []), u.return = f, u);
  }
  function p(f, u, m, g, k) {
    return u === null || u.tag !== 7 ? (u = yn(m, f.mode, g, k), u.return = f, u) : (u = s(u, m), u.return = f, u);
  }
  function y(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = Vs("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Xr:
          return m = Nl(u.type, u.key, u.props, null, f.mode, m), m.ref = cr(f, null, u), m.return = f, m;
        case In:
          return u = Qs(u, f.mode, m), u.return = f, u;
        case Qt:
          var g = u._init;
          return y(f, g(u._payload), m);
      }
      if (pr(u) || lr(u)) return u = yn(u, f.mode, m, null), u.return = f, u;
      il(f, u);
    }
    return null;
  }
  function w(f, u, m, g) {
    var k = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return k !== null ? null : i(f, u, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xr:
          return m.key === k ? c(f, u, m, g) : null;
        case In:
          return m.key === k ? d(f, u, m, g) : null;
        case Qt:
          return k = m._init, w(
            f,
            u,
            k(m._payload),
            g
          );
      }
      if (pr(m) || lr(m)) return k !== null ? null : p(f, u, m, g, null);
      il(f, m);
    }
    return null;
  }
  function x(f, u, m, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(m) || null, i(u, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Xr:
          return f = f.get(g.key === null ? m : g.key) || null, c(u, f, g, k);
        case In:
          return f = f.get(g.key === null ? m : g.key) || null, d(u, f, g, k);
        case Qt:
          var j = g._init;
          return x(f, u, m, j(g._payload), k);
      }
      if (pr(g) || lr(g)) return f = f.get(m) || null, p(u, f, g, k, null);
      il(u, g);
    }
    return null;
  }
  function v(f, u, m, g) {
    for (var k = null, j = null, E = u, C = u = 0, A = null; E !== null && C < m.length; C++) {
      E.index > C ? (A = E, E = null) : A = E.sibling;
      var M = w(f, E, m[C], g);
      if (M === null) {
        E === null && (E = A);
        break;
      }
      e && E && M.alternate === null && t(f, E), u = a(M, u, C), j === null ? k = M : j.sibling = M, j = M, E = A;
    }
    if (C === m.length) return n(f, E), xe && un(f, C), k;
    if (E === null) {
      for (; C < m.length; C++) E = y(f, m[C], g), E !== null && (u = a(E, u, C), j === null ? k = E : j.sibling = E, j = E);
      return xe && un(f, C), k;
    }
    for (E = r(f, E); C < m.length; C++) A = x(E, f, C, m[C], g), A !== null && (e && A.alternate !== null && E.delete(A.key === null ? C : A.key), u = a(A, u, C), j === null ? k = A : j.sibling = A, j = A);
    return e && E.forEach(function(I) {
      return t(f, I);
    }), xe && un(f, C), k;
  }
  function _(f, u, m, g) {
    var k = lr(m);
    if (typeof k != "function") throw Error(F(150));
    if (m = k.call(m), m == null) throw Error(F(151));
    for (var j = k = null, E = u, C = u = 0, A = null, M = m.next(); E !== null && !M.done; C++, M = m.next()) {
      E.index > C ? (A = E, E = null) : A = E.sibling;
      var I = w(f, E, M.value, g);
      if (I === null) {
        E === null && (E = A);
        break;
      }
      e && E && I.alternate === null && t(f, E), u = a(I, u, C), j === null ? k = I : j.sibling = I, j = I, E = A;
    }
    if (M.done) return n(
      f,
      E
    ), xe && un(f, C), k;
    if (E === null) {
      for (; !M.done; C++, M = m.next()) M = y(f, M.value, g), M !== null && (u = a(M, u, C), j === null ? k = M : j.sibling = M, j = M);
      return xe && un(f, C), k;
    }
    for (E = r(f, E); !M.done; C++, M = m.next()) M = x(E, f, C, M.value, g), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? C : M.key), u = a(M, u, C), j === null ? k = M : j.sibling = M, j = M);
    return e && E.forEach(function(z) {
      return t(f, z);
    }), xe && un(f, C), k;
  }
  function S(f, u, m, g) {
    if (typeof m == "object" && m !== null && m.type === Mn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xr:
          e: {
            for (var k = m.key, j = u; j !== null; ) {
              if (j.key === k) {
                if (k = m.type, k === Mn) {
                  if (j.tag === 7) {
                    n(f, j.sibling), u = s(j, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (j.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Qt && Ci(k) === j.type) {
                  n(f, j.sibling), u = s(j, m.props), u.ref = cr(f, j, m), u.return = f, f = u;
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            m.type === Mn ? (u = yn(m.props.children, f.mode, g, m.key), u.return = f, f = u) : (g = Nl(m.type, m.key, m.props, null, f.mode, g), g.ref = cr(f, u, m), g.return = f, f = g);
          }
          return o(f);
        case In:
          e: {
            for (j = m.key; u !== null; ) {
              if (u.key === j) if (u.tag === 4 && u.stateNode.containerInfo === m.containerInfo && u.stateNode.implementation === m.implementation) {
                n(f, u.sibling), u = s(u, m.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = Qs(m, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case Qt:
          return j = m._init, S(f, u, j(m._payload), g);
      }
      if (pr(m)) return v(f, u, m, g);
      if (lr(m)) return _(f, u, m, g);
      il(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = s(u, m), u.return = f, f = u) : (n(f, u), u = Vs(m, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return S;
}
var Yn = gd(!0), yd = gd(!1), $l = cn(null), Ul = null, On = null, po = null;
function mo() {
  po = On = Ul = null;
}
function ho(e) {
  var t = $l.current;
  ye($l), e._currentValue = t;
}
function _a(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  Ul = e, po = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (po !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (Ul === null) throw Error(F(308));
    On = e, Ul.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var mn = null;
function go(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function vd(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, go(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function yo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function At(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ft(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, go(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ft(e, n);
}
function xl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, to(e, n);
  }
}
function bi(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? s = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? s = a = t : a = a.next = t;
    } else s = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Vl(e, t, n, r) {
  var s = e.updateQueue;
  Bt = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== o && (i === null ? p.firstBaseUpdate = d : i.next = d, p.lastBaseUpdate = c));
  }
  if (a !== null) {
    var y = s.baseState;
    o = 0, p = d = c = null, i = a;
    do {
      var w = i.lane, x = i.eventTime;
      if ((r & w) === w) {
        p !== null && (p = p.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var v = e, _ = i;
          switch (w = t, x = n, _.tag) {
            case 1:
              if (v = _.payload, typeof v == "function") {
                y = v.call(x, y, w);
                break e;
              }
              y = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = _.payload, w = typeof v == "function" ? v.call(x, y, w) : v, w == null) break e;
              y = Ee({}, y, w);
              break e;
            case 2:
              Bt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else x = { eventTime: x, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, p === null ? (d = p = x, c = y) : p = p.next = x, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (p === null && (c = y), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = p, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    _n |= o, e.lanes = o, e.memoizedState = y;
  }
}
function Ii(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(F(191, s));
      s.call(r);
    }
  }
}
var Gr = {}, It = cn(Gr), Ar = cn(Gr), zr = cn(Gr);
function hn(e) {
  if (e === Gr) throw Error(F(174));
  return e;
}
function vo(e, t) {
  switch (he(zr, t), he(Ar, e), he(It, Gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ta(t, e);
  }
  ye(It), he(It, t);
}
function Xn() {
  ye(It), ye(Ar), ye(zr);
}
function xd(e) {
  hn(zr.current);
  var t = hn(It.current), n = ta(t, e.type);
  t !== n && (he(Ar, e), he(It, n));
}
function wo(e) {
  Ar.current === e && (ye(It), ye(Ar));
}
var Se = cn(0);
function Ql(e) {
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
var zs = [];
function xo() {
  for (var e = 0; e < zs.length; e++) zs[e]._workInProgressVersionPrimary = null;
  zs.length = 0;
}
var _l = $t.ReactCurrentDispatcher, Os = $t.ReactCurrentBatchConfig, xn = 0, je = null, Le = null, Pe = null, Bl = !1, _r = !1, Or = 0, Jp = 0;
function We() {
  throw Error(F(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function ko(e, t, n, r, s, a) {
  if (xn = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _l.current = e === null || e.memoizedState === null ? nm : rm, e = n(r, s), _r) {
    a = 0;
    do {
      if (_r = !1, Or = 0, 25 <= a) throw Error(F(301));
      a += 1, Pe = Le = null, t.updateQueue = null, _l.current = lm, e = n(r, s);
    } while (_r);
  }
  if (_l.current = Hl, t = Le !== null && Le.next !== null, xn = 0, Pe = Le = je = null, Bl = !1, t) throw Error(F(300));
  return e;
}
function So() {
  var e = Or !== 0;
  return Or = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
}
function mt() {
  if (Le === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Pe === null ? je.memoizedState : Pe.next;
  if (t !== null) Pe = t, Le = e;
  else {
    if (e === null) throw Error(F(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Pe === null ? je.memoizedState = Pe = e : Pe = Pe.next = e;
  }
  return Pe;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fs(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Le, s = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      s.next = a.next, a.next = o;
    }
    r.baseQueue = s = a, n.pending = null;
  }
  if (s !== null) {
    a = s.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var p = d.lane;
      if ((xn & p) === p) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = y, o = r) : c = c.next = y, je.lanes |= p, _n |= p;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, je.lanes |= a, _n |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ws(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    jt(a, t.memoizedState) || (Xe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function _d() {
}
function kd(e, t) {
  var n = je, r = mt(), s = t(), a = !jt(r.memoizedState, s);
  if (a && (r.memoizedState = s, Xe = !0), r = r.queue, jo(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Pe !== null && Pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Wr(9, jd.bind(null, n, r, s, t), void 0, null), Re === null) throw Error(F(349));
    xn & 30 || Sd(n, t, s);
  }
  return s;
}
function Sd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Nd(t) && Cd(e);
}
function Ed(e, t, n) {
  return n(function() {
    Nd(t) && Cd(e);
  });
}
function Nd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = Ft(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Mi(e) {
  var t = Nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = tm.bind(null, je, e), [t.memoizedState, e];
}
function Wr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bd() {
  return mt().memoizedState;
}
function kl(e, t, n, r) {
  var s = Nt();
  je.flags |= e, s.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ss(e, t, n, r) {
  var s = mt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && _o(r, o.deps)) {
      s.memoizedState = Wr(t, n, a, r);
      return;
    }
  }
  je.flags |= e, s.memoizedState = Wr(1 | t, n, a, r);
}
function Ti(e, t) {
  return kl(8390656, 8, e, t);
}
function jo(e, t) {
  return ss(2048, 8, e, t);
}
function Id(e, t) {
  return ss(4, 2, e, t);
}
function Md(e, t) {
  return ss(4, 4, e, t);
}
function Td(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ld(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ss(4, 4, Td.bind(null, t, e), n);
}
function Eo() {
}
function Dd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Rd(e, t, n) {
  return xn & 21 ? (jt(n, t) || (n = Wc(), je.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function Zp(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Os.transition;
  Os.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, Os.transition = r;
  }
}
function Ad() {
  return mt().memoizedState;
}
function em(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zd(e)) Od(t, n);
  else if (n = vd(e, t, n, r), n !== null) {
    var s = Be();
    St(n, e, r, s), Fd(n, t, r);
  }
}
function tm(e, t, n) {
  var r = rn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zd(e)) Od(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, jt(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, go(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = vd(e, t, s, r), n !== null && (s = Be(), St(n, e, r, s), Fd(n, t, r));
  }
}
function zd(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function Od(e, t) {
  _r = Bl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, to(e, n);
  }
}
var Hl = { readContext: pt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, nm = { readContext: pt, useCallback: function(e, t) {
  return Nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Ti, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, kl(
    4194308,
    4,
    Td.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return kl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return kl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = em.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Mi, useDebugValue: Eo, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = Mi(!1), t = e[0];
  return e = Zp.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, s = Nt();
  if (xe) {
    if (n === void 0) throw Error(F(407));
    n = n();
  } else {
    if (n = t(), Re === null) throw Error(F(349));
    xn & 30 || Sd(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Ti(Ed.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Wr(9, jd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Nt(), t = Re.identifierPrefix;
  if (xe) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Jp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, rm = {
  readContext: pt,
  useCallback: Dd,
  useContext: pt,
  useEffect: jo,
  useImperativeHandle: Ld,
  useInsertionEffect: Id,
  useLayoutEffect: Md,
  useMemo: Pd,
  useReducer: Fs,
  useRef: bd,
  useState: function() {
    return Fs(Fr);
  },
  useDebugValue: Eo,
  useDeferredValue: function(e) {
    var t = mt();
    return Rd(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = Fs(Fr)[0], t = mt().memoizedState;
    return [e, t];
  },
  useMutableSource: _d,
  useSyncExternalStore: kd,
  useId: Ad,
  unstable_isNewReconciler: !1
}, lm = { readContext: pt, useCallback: Dd, useContext: pt, useEffect: jo, useImperativeHandle: Ld, useInsertionEffect: Id, useLayoutEffect: Md, useMemo: Pd, useReducer: Ws, useRef: bd, useState: function() {
  return Ws(Fr);
}, useDebugValue: Eo, useDeferredValue: function(e) {
  var t = mt();
  return Le === null ? t.memoizedState = e : Rd(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = Ws(Fr)[0], t = mt().memoizedState;
  return [e, t];
}, useMutableSource: _d, useSyncExternalStore: kd, useId: Ad, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ka(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var as = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = rn(e), a = At(r, s);
  a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (St(t, e, s, r), xl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = rn(e), a = At(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (St(t, e, s, r), xl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = rn(e), s = At(n, r);
  s.tag = 2, t != null && (s.callback = t), t = tn(e, s, r), t !== null && (St(t, e, r, n), xl(t, e, r));
} };
function Li(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(s, a) : !0;
}
function Wd(e, t, n) {
  var r = !1, s = an, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (s = Ze(t) ? vn : Ve.current, r = t.contextTypes, a = (r = r != null) ? Gn(e, s) : an), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = as, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Di(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && as.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, yo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = pt(a) : (a = Ze(t) ? vn : Ve.current, s.context = Gn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ka(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && as.enqueueReplaceState(s, s.state, null), Vl(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lf(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function $s(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var sm = typeof WeakMap == "function" ? WeakMap : Map;
function $d(e, t, n) {
  n = At(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Gl || (Gl = !0, Pa = r), ja(e, t);
  }, n;
}
function Ud(e, t, n) {
  n = At(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      ja(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ja(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Pi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sm();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = wm.bind(null, e, t, n), t.then(e, e));
}
function Ri(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ai(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var am = $t.ReactCurrentOwner, Xe = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? yd(t, null, n, r) : Yn(t, e.child, n, r);
}
function zi(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Bn(t, s), r = ko(e, t, n, r, a, s), n = So(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (xe && n && co(t), t.flags |= 1, Qe(e, t, r, s), t.child);
}
function Oi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Do(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Vd(e, t, a, r, s)) : (e = Nl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Lr, n(o, r) && e.ref === t.ref) return Wt(e, t, s);
  }
  return t.flags |= 1, e = ln(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vd(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Lr(a, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, Wt(e, t, s);
  }
  return Ea(e, t, n, r, s);
}
function Qd(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(Wn, rt), rt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(Wn, rt), rt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(Wn, rt), rt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(Wn, rt), rt |= r;
  return Qe(e, t, s, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ea(e, t, n, r, s) {
  var a = Ze(n) ? vn : Ve.current;
  return a = Gn(t, a), Bn(t, s), n = ko(e, t, n, r, a, s), r = So(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (xe && r && co(t), t.flags |= 1, Qe(e, t, n, s), t.child);
}
function Fi(e, t, n, r, s) {
  if (Ze(n)) {
    var a = !0;
    Ol(t);
  } else a = !1;
  if (Bn(t, s), t.stateNode === null) Sl(e, t), Wd(t, n, r), Sa(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Ze(n) ? vn : Ve.current, d = Gn(t, d));
    var p = n.getDerivedStateFromProps, y = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Di(t, o, r, d), Bt = !1;
    var w = t.memoizedState;
    o.state = w, Vl(t, r, o, s), c = t.memoizedState, i !== r || w !== c || Je.current || Bt ? (typeof p == "function" && (ka(t, n, p, r), c = t.memoizedState), (i = Bt || Li(t, n, i, r, w, c, d)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, wd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, y = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Ze(n) ? vn : Ve.current, c = Gn(t, c));
    var x = n.getDerivedStateFromProps;
    (p = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== y || w !== c) && Di(t, o, r, c), Bt = !1, w = t.memoizedState, o.state = w, Vl(t, r, o, s);
    var v = t.memoizedState;
    i !== y || w !== v || Je.current || Bt ? (typeof x == "function" && (ka(t, n, x, r), v = t.memoizedState), (d = Bt || Li(t, n, d, r, w, v, c) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Na(e, t, n, r, a, s);
}
function Na(e, t, n, r, s, a) {
  Bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && ji(t, n, !1), Wt(e, t, a);
  r = t.stateNode, am.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Yn(t, e.child, null, a), t.child = Yn(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, s && ji(t, n, !0), t.child;
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext ? Si(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Si(e, t.context, !1), vo(e, t.containerInfo);
}
function Wi(e, t, n, r, s) {
  return qn(), fo(s), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function ba(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kd(e, t, n) {
  var r = t.pendingProps, s = Se.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), he(Se, s & 1), e === null)
    return xa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = cs(o, r, 0, null), e = yn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ba(n), t.memoizedState = Ca, e) : No(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return om(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = ln(i, a) : (a = yn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ba(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ca, r;
  }
  return a = e.child, e = a.sibling, r = ln(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function No(e, t) {
  return t = cs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function cl(e, t, n, r) {
  return r !== null && fo(r), Yn(t, e.child, null, n), e = No(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function om(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = $s(Error(F(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = cs({ mode: "visible", children: r.children }, s, 0, null), a = yn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Yn(t, e.child, null, o), t.child.memoizedState = ba(o), t.memoizedState = Ca, a);
  if (!(t.mode & 1)) return cl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(F(419)), r = $s(a, r, void 0), cl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Xe || i) {
    if (r = Re, r !== null) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ft(e, s), St(r, e, s, -1));
    }
    return Lo(), r = $s(Error(F(421))), cl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xm.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, lt = en(s.nextSibling), st = t, xe = !0, xt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Rt, ct[dt++] = wn, Pt = e.id, Rt = e.overflow, wn = t), t = No(t, r.children), t.flags |= 4096, t);
}
function $i(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _a(e.return, t, n);
}
function Us(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Gd(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && $i(e, n, t);
      else if (e.tag === 19) $i(e, n, t);
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
  if (he(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Ql(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Us(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Ql(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Us(t, !0, n, null, a);
      break;
    case "together":
      Us(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Sl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function im(e, t, n) {
  switch (t.tag) {
    case 3:
      Hd(t), qn();
      break;
    case 5:
      xd(t);
      break;
    case 1:
      Ze(t.type) && Ol(t);
      break;
    case 4:
      vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      he($l, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kd(e, t, n) : (he(Se, Se.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      he(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Gd(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), he(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qd(e, t, n);
  }
  return Wt(e, t, n);
}
var qd, Ia, Yd, Xd;
qd = function(e, t) {
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
Ia = function() {
};
Yd = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, hn(It.current);
    var a = null;
    switch (n) {
      case "input":
        s = Xs(e, s), r = Xs(e, r), a = [];
        break;
      case "select":
        s = Ee({}, s, { value: void 0 }), r = Ee({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = ea(e, s), r = ea(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Al);
    }
    na(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Er.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Er.hasOwnProperty(d) ? (c != null && d === "onScroll" && ge("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Xd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
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
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function cm(e, t, n) {
  var r = t.pendingProps;
  switch (uo(t), t.tag) {
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
      return Ze(t.type) && zl(), $e(t), null;
    case 3:
      return r = t.stateNode, Xn(), ye(Je), ye(Ve), xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (za(xt), xt = null))), Ia(e, t), $e(t), null;
    case 5:
      wo(t);
      var s = hn(zr.current);
      if (n = t.type, e !== null && t.stateNode != null) Yd(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return $e(t), null;
        }
        if (e = hn(It.current), ol(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ct] = t, r[Rr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < hr.length; s++) ge(hr[s], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge(
                "error",
                r
              ), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              Yo(r, a), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ge("invalid", r);
              break;
            case "textarea":
              Jo(r, a), ge("invalid", r);
          }
          na(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && al(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && al(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Er.hasOwnProperty(o) && i != null && o === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              Jr(r), Xo(r, a, !0);
              break;
            case "textarea":
              Jr(r), Zo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Al);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Rr] = r, qd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ra(n, r), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < hr.length; s++) ge(hr[s], e);
                s = r;
                break;
              case "source":
                ge("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  e
                ), ge("load", e), s = r;
                break;
              case "details":
                ge("toggle", e), s = r;
                break;
              case "input":
                Yo(e, r), s = Xs(e, r), ge("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ee({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                Jo(e, r), s = ea(e, r), ge("invalid", e);
                break;
              default:
                s = r;
            }
            na(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? bc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Nc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Nr(e, c) : typeof c == "number" && Nr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Er.hasOwnProperty(a) ? c != null && a === "onScroll" && ge("scroll", e) : c != null && qa(e, a, c, o));
            }
            switch (n) {
              case "input":
                Jr(e), Xo(e, r, !1);
                break;
              case "textarea":
                Jr(e), Zo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? $n(e, !!r.multiple, a, !1) : r.defaultValue != null && $n(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Al);
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
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (n = hn(zr.current), hn(It.current), ol(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
            case 3:
              al(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && al(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (ye(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && lt !== null && t.mode & 1 && !(t.flags & 128)) hd(), qn(), t.flags |= 98560, a = !1;
        else if (a = ol(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(F(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(F(317));
            a[Ct] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else xt !== null && (za(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? De === 0 && (De = 3) : Lo())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return Xn(), Ia(e, t), e === null && Dr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return ho(t.type._context), $e(t), null;
    case 17:
      return Ze(t.type) && zl(), $e(t), null;
    case 19:
      if (ye(Se), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) dr(a, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ql(e), o !== null) {
            for (t.flags |= 128, dr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > Zn && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ql(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return $e(t), null;
        } else 2 * Ie() - a.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = Se.current, he(Se, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return To(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function dm(e, t) {
  switch (uo(t), t.tag) {
    case 1:
      return Ze(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), ye(Je), ye(Ve), xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wo(t), null;
    case 13:
      if (ye(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(F(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(Se), null;
    case 4:
      return Xn(), null;
    case 10:
      return ho(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1, Ue = !1, um = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ne(e, t, r);
  }
  else n.current = null;
}
function Ma(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var Ui = !1;
function fm(e, t) {
  if (pa = Dl, e = nd(), io(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, p = 0, y = e, w = null;
        t: for (; ; ) {
          for (var x; y !== n || s !== 0 && y.nodeType !== 3 || (i = o + s), y !== a || r !== 0 && y.nodeType !== 3 || (c = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (x = y.firstChild) !== null; )
            w = y, y = x;
          for (; ; ) {
            if (y === e) break t;
            if (w === n && ++d === s && (i = o), w === a && ++p === r && (c = o), (x = y.nextSibling) !== null) break;
            y = w, w = y.parentNode;
          }
          y = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ma = { focusedElem: e, selectionRange: n }, Dl = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
  else for (; H !== null; ) {
    t = H;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var _ = v.memoizedProps, S = v.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : vt(t.type, _), S);
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
          throw Error(F(163));
      }
    } catch (g) {
      Ne(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, H = e;
      break;
    }
    H = t.return;
  }
  return v = Ui, Ui = !1, v;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && Ma(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function os(e, t) {
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
function Ta(e) {
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
function Jd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Jd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Rr], delete t[ya], delete t[Gp], delete t[qp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Al));
  else if (r !== 4 && (e = e.child, e !== null)) for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), e = e.sibling;
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Da(e, t, n), e = e.sibling; e !== null; ) Da(e, t, n), e = e.sibling;
}
var Ae = null, wt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) eu(e, t, n), n = n.sibling;
}
function eu(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function") try {
    bt.onCommitFiberUnmount(Zl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Fn(n, t);
    case 6:
      var r = Ae, s = wt;
      Ae = null, Vt(e, t, n), Ae = r, wt = s, Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (wt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Rs(e.parentNode, n) : e.nodeType === 1 && Rs(e, n), Mr(e)) : Rs(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, s = wt, Ae = n.stateNode.containerInfo, wt = !0, Vt(e, t, n), Ae = r, wt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ma(n, t, o), s = s.next;
        } while (s !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (!Ue && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ne(n, t, i);
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Vt(e, t, n), Ue = r) : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function Qi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new um()), t.forEach(function(r) {
      var s = _m.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Ae = i.stateNode, wt = !1;
            break e;
          case 3:
            Ae = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Ae = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Ae === null) throw Error(F(160));
      eu(a, o, s), Ae = null, wt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ne(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) tu(t, e), t = t.sibling;
}
function tu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Et(e), r & 4) {
        try {
          kr(3, e, e.return), os(3, e);
        } catch (_) {
          Ne(e, e.return, _);
        }
        try {
          kr(5, e, e.return);
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 1:
      gt(t, e), Et(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (gt(t, e), Et(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Nr(s, "");
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Sc(s, a), ra(i, o);
          var d = ra(i, a);
          for (o = 0; o < c.length; o += 2) {
            var p = c[o], y = c[o + 1];
            p === "style" ? bc(s, y) : p === "dangerouslySetInnerHTML" ? Nc(s, y) : p === "children" ? Nr(s, y) : qa(s, p, y, d);
          }
          switch (i) {
            case "input":
              Js(s, a);
              break;
            case "textarea":
              jc(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? $n(s, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? $n(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : $n(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Rr] = a;
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 6:
      if (gt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(F(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 3:
      if (gt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Mr(t.containerInfo);
      } catch (_) {
        Ne(e, e.return, _);
      }
      break;
    case 4:
      gt(t, e), Et(e);
      break;
    case 13:
      gt(t, e), Et(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Io = Ie())), r & 4 && Qi(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || p, gt(t, e), Ue = d) : gt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for (H = e, p = e.child; p !== null; ) {
          for (y = H = p; H !== null; ) {
            switch (w = H, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                kr(4, w, w.return);
                break;
              case 1:
                Fn(w, w.return);
                var v = w.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (_) {
                    Ne(r, n, _);
                  }
                }
                break;
              case 5:
                Fn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  Hi(y);
                  continue;
                }
            }
            x !== null ? (x.return = w, H = x) : Hi(y);
          }
          p = p.sibling;
        }
        e: for (p = null, y = e; ; ) {
          if (y.tag === 5) {
            if (p === null) {
              p = y;
              try {
                s = y.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = y.stateNode, c = y.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Cc("display", o));
              } catch (_) {
                Ne(e, e.return, _);
              }
            }
          } else if (y.tag === 6) {
            if (p === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (_) {
              Ne(e, e.return, _);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            p === y && (p = null), y = y.return;
          }
          p === y && (p = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Et(e), r & 4 && Qi(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Nr(s, ""), r.flags &= -33);
          var a = Vi(e);
          Da(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Vi(e);
          La(e, i, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (c) {
      Ne(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  H = e, nu(e);
}
function nu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var s = H, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || dl;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = dl;
        var d = Ue;
        if (dl = o, (Ue = c) && !d) for (H = s; H !== null; ) o = H, c = o.child, o.tag === 22 && o.memoizedState !== null ? Ki(s) : c !== null ? (c.return = o, H = c) : Ki(s);
        for (; a !== null; ) H = a, nu(a), a = a.sibling;
        H = s, dl = i, Ue = d;
      }
      Bi(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, H = a) : Bi(e);
  }
}
function Bi(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || os(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Ii(t, a, r);
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
              Ii(t, o, n);
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
                  var y = p.dehydrated;
                  y !== null && Mr(y);
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
            throw Error(F(163));
        }
        Ue || t.flags & 512 && Ta(t);
      } catch (w) {
        Ne(t, t.return, w);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function Hi(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function Ki(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            os(4, t);
          } catch (c) {
            Ne(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ne(t, s, c);
            }
          }
          var a = t.return;
          try {
            Ta(t);
          } catch (c) {
            Ne(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ta(t);
          } catch (c) {
            Ne(t, o, c);
          }
      }
    } catch (c) {
      Ne(t, t.return, c);
    }
    if (t === e) {
      H = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, H = i;
      break;
    }
    H = t.return;
  }
}
var mm = Math.ceil, Kl = $t.ReactCurrentDispatcher, Co = $t.ReactCurrentOwner, ft = $t.ReactCurrentBatchConfig, ie = 0, Re = null, Me = null, ze = 0, rt = 0, Wn = cn(0), De = 0, $r = null, _n = 0, is = 0, bo = 0, Sr = null, Ye = null, Io = 0, Zn = 1 / 0, Lt = null, Gl = !1, Pa = null, nn = null, ul = !1, Yt = null, ql = 0, jr = 0, Ra = null, jl = -1, El = 0;
function Be() {
  return ie & 6 ? Ie() : jl !== -1 ? jl : jl = Ie();
}
function rn(e) {
  return e.mode & 1 ? ie & 2 && ze !== 0 ? ze & -ze : Xp.transition !== null ? (El === 0 && (El = Wc()), El) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kc(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < jr) throw jr = 0, Ra = null, Error(F(185));
  Br(e, n, r), (!(ie & 2) || e !== Re) && (e === Re && (!(ie & 2) && (is |= n), De === 4 && Kt(e, ze)), et(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Zn = Ie() + 500, ls && dn()));
}
function et(e, t) {
  var n = e.callbackNode;
  Xf(e, t);
  var r = Ll(e, e === Re ? ze : 0);
  if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ni(n), t === 1) e.tag === 0 ? Yp(Gi.bind(null, e)) : fd(Gi.bind(null, e)), Hp(function() {
      !(ie & 6) && dn();
    }), n = null;
    else {
      switch ($c(r)) {
        case 1:
          n = eo;
          break;
        case 4:
          n = Oc;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = Fc;
          break;
        default:
          n = Tl;
      }
      n = du(n, ru.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ru(e, t) {
  if (jl = -1, El = 0, ie & 6) throw Error(F(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ll(e, e === Re ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yl(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var a = su();
    (Re !== e || ze !== t) && (Lt = null, Zn = Ie() + 500, gn(e, t));
    do
      try {
        ym();
        break;
      } catch (i) {
        lu(e, i);
      }
    while (!0);
    mo(), Kl.current = a, ie = s, Me !== null ? t = 0 : (Re = null, ze = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (s = ia(e), s !== 0 && (r = s, t = Aa(e, s))), t === 1) throw n = $r, gn(e, 0), Kt(e, r), et(e, Ie()), n;
    if (t === 6) Kt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !hm(s) && (t = Yl(e, r), t === 2 && (a = ia(e), a !== 0 && (r = a, t = Aa(e, a))), t === 1)) throw n = $r, gn(e, 0), Kt(e, r), et(e, Ie()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          fn(e, Ye, Lt);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = Io + 500 - Ie(), 10 < t)) {
            if (Ll(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = ga(fn.bind(null, e, Ye, Lt), t);
            break;
          }
          fn(e, Ye, Lt);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ga(fn.bind(null, e, Ye, Lt), r);
            break;
          }
          fn(e, Ye, Lt);
          break;
        case 5:
          fn(e, Ye, Lt);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return et(e, Ie()), e.callbackNode === n ? ru.bind(null, e) : null;
}
function Aa(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), e = Yl(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && za(t)), e;
}
function za(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function hm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!jt(a(), s)) return !1;
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
function Kt(e, t) {
  for (t &= ~bo, t &= ~is, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gi(e) {
  if (ie & 6) throw Error(F(327));
  Hn();
  var t = Ll(e, 0);
  if (!(t & 1)) return et(e, Ie()), null;
  var n = Yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ia(e);
    r !== 0 && (t = r, n = Aa(e, r));
  }
  if (n === 1) throw n = $r, gn(e, 0), Kt(e, t), et(e, Ie()), n;
  if (n === 6) throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Ye, Lt), et(e, Ie()), null;
}
function Mo(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Zn = Ie() + 500, ls && dn());
  }
}
function kn(e) {
  Yt !== null && Yt.tag === 0 && !(ie & 6) && Hn();
  var t = ie;
  ie |= 1;
  var n = ft.transition, r = fe;
  try {
    if (ft.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, ft.transition = n, ie = t, !(ie & 6) && dn();
  }
}
function To() {
  rt = Wn.current, ye(Wn);
}
function gn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bp(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (uo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && zl();
        break;
      case 3:
        Xn(), ye(Je), ye(Ve), xo();
        break;
      case 5:
        wo(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        ye(Se);
        break;
      case 19:
        ye(Se);
        break;
      case 10:
        ho(r.type._context);
        break;
      case 22:
      case 23:
        To();
    }
    n = n.return;
  }
  if (Re = e, Me = e = ln(e.current, null), ze = rt = t, De = 0, $r = null, bo = is = _n = 0, Ye = Sr = null, mn !== null) {
    for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    mn = null;
  }
  return e;
}
function lu(e, t) {
  do {
    var n = Me;
    try {
      if (mo(), _l.current = Hl, Bl) {
        for (var r = je.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        Bl = !1;
      }
      if (xn = 0, Pe = Le = je = null, _r = !1, Or = 0, Co.current = null, n === null || n.return === null) {
        De = 1, $r = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, p = i, y = p.tag;
          if (!(p.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var w = p.alternate;
            w ? (p.updateQueue = w.updateQueue, p.memoizedState = w.memoizedState, p.lanes = w.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var x = Ri(o);
          if (x !== null) {
            x.flags &= -257, Ai(x, o, i, a, t), x.mode & 1 && Pi(a, d, t), t = x, c = d;
            var v = t.updateQueue;
            if (v === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Pi(a, d, t), Lo();
              break e;
            }
            c = Error(F(426));
          }
        } else if (xe && i.mode & 1) {
          var S = Ri(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Ai(S, o, i, a, t), fo(Jn(c, i));
            break e;
          }
        }
        a = c = Jn(c, i), De !== 4 && (De = 2), Sr === null ? Sr = [a] : Sr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = $d(a, c, t);
              bi(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (nn === null || !nn.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Ud(a, i, t);
                bi(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ou(n);
    } catch (k) {
      t = k, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function su() {
  var e = Kl.current;
  return Kl.current = Hl, e === null ? Hl : e;
}
function Lo() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Re === null || !(_n & 268435455) && !(is & 268435455) || Kt(Re, ze);
}
function Yl(e, t) {
  var n = ie;
  ie |= 2;
  var r = su();
  (Re !== e || ze !== t) && (Lt = null, gn(e, t));
  do
    try {
      gm();
      break;
    } catch (s) {
      lu(e, s);
    }
  while (!0);
  if (mo(), ie = n, Kl.current = r, Me !== null) throw Error(F(261));
  return Re = null, ze = 0, De;
}
function gm() {
  for (; Me !== null; ) au(Me);
}
function ym() {
  for (; Me !== null && !Uf(); ) au(Me);
}
function au(e) {
  var t = cu(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? ou(e) : Me = t, Co.current = null;
}
function ou(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = dm(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Me = null;
        return;
      }
    } else if (n = cm(n, t, rt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function fn(e, t, n) {
  var r = fe, s = ft.transition;
  try {
    ft.transition = null, fe = 1, vm(e, t, n, r);
  } finally {
    ft.transition = s, fe = r;
  }
  return null;
}
function vm(e, t, n, r) {
  do
    Hn();
  while (Yt !== null);
  if (ie & 6) throw Error(F(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Jf(e, a), e === Re && (Me = Re = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ul || (ul = !0, du(Tl, function() {
    return Hn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = fe;
    fe = 1;
    var i = ie;
    ie |= 4, Co.current = null, fm(e, n), tu(n, e), Op(ma), Dl = !!pa, ma = pa = null, e.current = n, pm(n), Vf(), ie = i, fe = o, ft.transition = a;
  } else e.current = n;
  if (ul && (ul = !1, Yt = e, ql = s), a = e.pendingLanes, a === 0 && (nn = null), Hf(n.stateNode), et(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Gl) throw Gl = !1, e = Pa, Pa = null, e;
  return ql & 1 && e.tag !== 0 && Hn(), a = e.pendingLanes, a & 1 ? e === Ra ? jr++ : (jr = 0, Ra = e) : jr = 0, dn(), null;
}
function Hn() {
  if (Yt !== null) {
    var e = $c(ql), t = ft.transition, n = fe;
    try {
      if (ft.transition = null, fe = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, ql = 0, ie & 6) throw Error(F(331));
        var s = ie;
        for (ie |= 4, H = e.current; H !== null; ) {
          var a = H, o = a.child;
          if (H.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (H = d; H !== null; ) {
                  var p = H;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, p, a);
                  }
                  var y = p.child;
                  if (y !== null) y.return = p, H = y;
                  else for (; H !== null; ) {
                    p = H;
                    var w = p.sibling, x = p.return;
                    if (Jd(p), p === d) {
                      H = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, H = w;
                      break;
                    }
                    H = x;
                  }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var _ = v.child;
                if (_ !== null) {
                  v.child = null;
                  do {
                    var S = _.sibling;
                    _.sibling = null, _ = S;
                  } while (_ !== null);
                }
              }
              H = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, H = o;
          else e: for (; H !== null; ) {
            if (a = H, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                kr(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, H = f;
              break e;
            }
            H = a.return;
          }
        }
        var u = e.current;
        for (H = u; H !== null; ) {
          o = H;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, H = m;
          else e: for (o = u; H !== null; ) {
            if (i = H, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  os(9, i);
              }
            } catch (k) {
              Ne(i, i.return, k);
            }
            if (i === o) {
              H = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, H = g;
              break e;
            }
            H = i.return;
          }
        }
        if (ie = s, dn(), bt && typeof bt.onPostCommitFiberRoot == "function") try {
          bt.onPostCommitFiberRoot(Zl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, ft.transition = t;
    }
  }
  return !1;
}
function qi(e, t, n) {
  t = Jn(n, t), t = $d(e, t, 1), e = tn(e, t, 1), t = Be(), e !== null && (Br(e, 1, t), et(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) qi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      qi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = Jn(n, e), e = Ud(t, e, 1), t = tn(t, e, 1), e = Be(), t !== null && (Br(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function wm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (ze & n) === n && (De === 4 || De === 3 && (ze & 130023424) === ze && 500 > Ie() - Io ? gn(e, 0) : bo |= n), et(e, t);
}
function iu(e, t) {
  t === 0 && (e.mode & 1 ? (t = tl, tl <<= 1, !(tl & 130023424) && (tl = 4194304)) : t = 1);
  var n = Be();
  e = Ft(e, t), e !== null && (Br(e, t, n), et(e, n));
}
function xm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), iu(e, n);
}
function _m(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), iu(e, n);
}
var cu;
cu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, im(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, xe && t.flags & 1048576 && pd(t, Wl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Sl(e, t), e = t.pendingProps;
      var s = Gn(t, Ve.current);
      Bn(t, n), s = ko(null, t, r, e, s, n);
      var a = So();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (a = !0, Ol(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, yo(t), s.updater = as, t.stateNode = s, s._reactInternals = t, Sa(t, r, e, n), t = Na(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && co(t), Qe(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Sl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Sm(r), e = vt(r, e), s) {
          case 0:
            t = Ea(null, t, r, e, n);
            break e;
          case 1:
            t = Fi(null, t, r, e, n);
            break e;
          case 11:
            t = zi(null, t, r, e, n);
            break e;
          case 14:
            t = Oi(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Ea(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Fi(e, t, r, s, n);
    case 3:
      e: {
        if (Hd(t), e === null) throw Error(F(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, wd(e, t), Vl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Jn(Error(F(423)), t), t = Wi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Jn(Error(F(424)), t), t = Wi(e, t, r, n, s);
          break e;
        } else for (lt = en(t.stateNode.containerInfo.firstChild), st = t, xe = !0, xt = null, n = yd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qn(), r === s) {
            t = Wt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xd(t), e === null && xa(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, ha(r, s) ? o = null : a !== null && ha(r, a) && (t.flags |= 32), Bd(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && xa(t), null;
    case 13:
      return Kd(e, t, n);
    case 4:
      return vo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yn(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), zi(e, t, r, s, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, he($l, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === s.children && !Je.current) {
            t = Wt(e, t, n);
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
                    var p = d.pending;
                    p === null ? c.next = c : (c.next = p.next, p.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), _a(
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
            if (o = a.return, o === null) throw Error(F(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), _a(o, n, t), o = a.sibling;
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
        Qe(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Bn(t, n), s = pt(s), r = r(s), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = vt(r, t.pendingProps), s = vt(r.type, s), Oi(e, t, r, s, n);
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Sl(e, t), t.tag = 1, Ze(r) ? (e = !0, Ol(t)) : e = !1, Bn(t, n), Wd(t, r, s), Sa(t, r, s, n), Na(null, t, r, !0, e, n);
    case 19:
      return Gd(e, t, n);
    case 22:
      return Qd(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function du(e, t) {
  return zc(e, t);
}
function km(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new km(e, t, n, r);
}
function Do(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Sm(e) {
  if (typeof e == "function") return Do(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xa) return 11;
    if (e === Ja) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Nl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Do(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Mn:
      return yn(n.children, s, a, t);
    case Ya:
      o = 8, s |= 8;
      break;
    case Ks:
      return e = ut(12, n, t, s | 2), e.elementType = Ks, e.lanes = a, e;
    case Gs:
      return e = ut(13, n, t, s), e.elementType = Gs, e.lanes = a, e;
    case qs:
      return e = ut(19, n, t, s), e.elementType = qs, e.lanes = a, e;
    case xc:
      return cs(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vc:
          o = 10;
          break e;
        case wc:
          o = 9;
          break e;
        case Xa:
          o = 11;
          break e;
        case Ja:
          o = 14;
          break e;
        case Qt:
          o = 16, r = null;
          break e;
      }
      throw Error(F(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function yn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function cs(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = xc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Vs(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function Qs(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jm(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = js(0), this.expirationTimes = js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = js(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Po(e, t, n, r, s, a, o, i, c) {
  return e = new jm(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yo(a), e;
}
function Em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function uu(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(F(170));
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
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return ud(e, n, t);
  }
  return t;
}
function fu(e, t, n, r, s, a, o, i, c) {
  return e = Po(n, r, !0, e, s, a, o, i, c), e.context = uu(null), n = e.current, r = Be(), s = rn(n), a = At(r, s), a.callback = t ?? null, tn(n, a, s), e.current.lanes = s, Br(e, s, r), et(e, r), e;
}
function ds(e, t, n, r) {
  var s = t.current, a = Be(), o = rn(s);
  return n = uu(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(s, t, o), e !== null && (St(e, s, o, a), xl(e, s, o)), o;
}
function Xl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ro(e, t) {
  Yi(e, t), (e = e.alternate) && Yi(e, t);
}
function Nm() {
  return null;
}
var pu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ao(e) {
  this._internalRoot = e;
}
us.prototype.render = Ao.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  ds(e, t, null, null);
};
us.prototype.unmount = Ao.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function() {
      ds(null, e, null, null);
    }), t[Ot] = null;
  }
};
function us(e) {
  this._internalRoot = e;
}
us.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
    Ht.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xi() {
}
function Cm(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Xl(o);
        a.call(d);
      };
    }
    var o = fu(t, r, e, 0, null, !1, !1, "", Xi);
    return e._reactRootContainer = o, e[Ot] = o.current, Dr(e.nodeType === 8 ? e.parentNode : e), kn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Xl(c);
      i.call(d);
    };
  }
  var c = Po(e, 0, !1, null, null, !1, !1, "", Xi);
  return e._reactRootContainer = c, e[Ot] = c.current, Dr(e.nodeType === 8 ? e.parentNode : e), kn(function() {
    ds(t, c, n, r);
  }), c;
}
function ps(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = Xl(o);
        i.call(c);
      };
    }
    ds(t, o, e, s);
  } else o = Cm(n, t, e, s, r);
  return Xl(o);
}
Uc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 && (to(t, n | 1), et(t, Ie()), !(ie & 6) && (Zn = Ie() + 500, dn()));
      }
      break;
    case 13:
      kn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var s = Be();
          St(r, e, 1, s);
        }
      }), Ro(e, 1);
  }
};
no = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Be();
      St(t, e, 134217728, n);
    }
    Ro(e, 134217728);
  }
};
Vc = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = Ft(e, t);
    if (n !== null) {
      var r = Be();
      St(n, e, t, r);
    }
    Ro(e, t);
  }
};
Qc = function() {
  return fe;
};
Bc = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
sa = function(e, t, n) {
  switch (t) {
    case "input":
      if (Js(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = rs(r);
            if (!s) throw Error(F(90));
            kc(r), Js(r, s);
          }
        }
      }
      break;
    case "textarea":
      jc(e, n);
      break;
    case "select":
      t = n.value, t != null && $n(e, !!n.multiple, t, !1);
  }
};
Tc = Mo;
Lc = kn;
var bm = { usingClientEntryPoint: !1, Events: [Kr, Pn, rs, Ic, Mc, Mo] }, ur = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Im = { bundleType: ur.bundleType, version: ur.version, rendererPackageName: ur.rendererPackageName, rendererConfig: ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ur.findFiberByHostInstance || Nm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber) try {
    Zl = fl.inject(Im), bt = fl;
  } catch {
  }
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bm;
ot.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zo(t)) throw Error(F(200));
  return Em(e, t, null, n);
};
ot.createRoot = function(e, t) {
  if (!zo(e)) throw Error(F(299));
  var n = !1, r = "", s = pu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Po(e, 1, !1, null, null, n, !1, r, s), e[Ot] = t.current, Dr(e.nodeType === 8 ? e.parentNode : e), new Ao(t);
};
ot.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = Rc(t), e = e === null ? null : e.stateNode, e;
};
ot.flushSync = function(e) {
  return kn(e);
};
ot.hydrate = function(e, t, n) {
  if (!fs(t)) throw Error(F(200));
  return ps(null, e, t, !0, n);
};
ot.hydrateRoot = function(e, t, n) {
  if (!zo(e)) throw Error(F(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = pu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = fu(t, null, e, 1, n ?? null, s, !1, a, o), e[Ot] = t.current, Dr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new us(t);
};
ot.render = function(e, t, n) {
  if (!fs(t)) throw Error(F(200));
  return ps(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function(e) {
  if (!fs(e)) throw Error(F(40));
  return e._reactRootContainer ? (kn(function() {
    ps(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
ot.unstable_batchedUpdates = Mo;
ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fs(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return ps(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function mu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mu);
    } catch (e) {
      console.error(e);
    }
}
mu(), mc.exports = ot;
var Ce = mc.exports, hu, Ji = Ce;
hu = Ji.createRoot, Ji.hydrateRoot;
var gu = { exports: {} }, ms = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = h, Tm = Symbol.for("react.element"), Lm = Symbol.for("react.fragment"), Dm = Object.prototype.hasOwnProperty, Pm = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function yu(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Dm.call(t, r) && !Rm.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Tm, type: e, key: a, ref: o, props: s, _owner: Pm.current };
}
ms.Fragment = Lm;
ms.jsx = yu;
ms.jsxs = yu;
gu.exports = ms;
var l = gu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Am = {
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
const zm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, p) => h.createElement(
      "svg",
      {
        ref: p,
        ...Am,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${zm(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([y, w]) => h.createElement(y, w)),
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
const vu = Z("AlertCircle", [
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
const Om = Z("AlertTriangle", [
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
const Fm = Z("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wu = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = Z("ArrowUpDown", [
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
const xu = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = Z("Box", [
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
const Um = Z("Calendar", [
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
const Vm = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = Z("Download", [
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
const ku = Z("FileJson", [
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
const Gm = Z("FileText", [
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
const qm = Z("FolderOutput", [
  [
    "path",
    {
      d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
      key: "1yk7aj"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = Z("Folder", [
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
const Xm = Z("Info", [
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
const Jm = Z("Lasso", [
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
const Su = Z("LayoutGrid", [
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
const Zm = Z("LayoutList", [
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
const eh = Z("Link2Off", [
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
const th = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = Z("Maximize", [
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
const rh = Z("Minimize", [
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
const lh = Z("MoreVertical", [
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
const sh = Z("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = Z("RefreshCw", [
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
const jn = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = Z("Settings", [
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
const Nu = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = Z("Star", [
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
const ah = Z("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = Z("Tag", [
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
const Mt = Z("Trash2", [
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
const oh = Z("Trash", [
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
const ih = Z("Type", [
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
const ch = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = Z("Upload", [
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
const _e = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = ne;
async function oe(e) {
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
const uh = async () => {
  const e = await ne.fetchApi("/meld/home-dir");
  return (await oe(e)).home;
}, ht = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  h.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let Jl = !1;
const fh = (e) => {
  Jl = e, Jl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, ph = (...e) => {
  Jl && console.log("[Meld]", ...e);
}, mh = (...e) => {
  Jl && console.warn("[Meld]", ...e);
}, hh = (...e) => {
  console.error("[Meld]", ...e);
}, X = {
  log: ph,
  warn: mh,
  error: hh,
  init: fh
}, Cl = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await ne.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return oe(a);
}, Cu = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/details`);
  return oe(t);
}, Oa = async (e, t = !1) => {
  const n = await ne.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await oe(n);
}, Wo = async (e) => {
  const t = await ne.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return oe(t);
}, bu = async (e) => {
  const t = await ne.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return oe(t);
}, ec = async (e, t) => {
  const n = await ne.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await oe(n);
}, gh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ne.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await oe(r);
  } catch {
    return [];
  }
}, Fa = async (e) => {
  const t = await ne.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await oe(t);
  } catch {
    return [];
  }
}, yh = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await oe(n);
}, vh = async (e, t) => {
  const n = await ne.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return oe(n);
}, Wa = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await oe(r);
}, wh = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/workflow`);
  return oe(t);
}, xh = async (e) => {
  const t = await ne.fetchApi(`/meld/image/${e}/snapshot_data`);
  return oe(t);
}, _h = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ne.fetchApi(n);
  return oe(r);
}, kh = async () => {
  const e = await ne.fetchApi("/meld/search-suggestions");
  return oe(e);
}, Sh = async () => {
  const e = await ne.fetchApi("/meld/search-keywords");
  return oe(e);
}, jh = async () => {
  const e = await ne.fetchApi("/meld/search-config");
  return oe(e);
}, Eh = async () => {
  const e = await ne.fetchApi("/meld/favorites");
  return oe(e);
}, Nh = async (e, t) => {
  const n = await ne.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await oe(n);
}, tc = async (e) => {
  const t = await ne.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await oe(t);
}, Ch = async (e, t, n) => {
  const r = await ne.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await oe(r);
}, bh = {
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
}, Iu = async () => {
  let e;
  try {
    const t = await ne.fetchApi("/meld/settings");
    e = await oe(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), bh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Ih = async (e, t) => {
  const n = await ne.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await oe(n);
}, nc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const y = typeof d == "function" ? d(t) : d;
    if (!Object.is(y, t)) {
      const w = t;
      t = p ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), n.forEach((x) => x(t, w));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, Mh = (e) => e ? nc(e) : nc, Th = (e) => e;
function Lh(e, t = Th) {
  const n = Gt.useSyncExternalStore(
    e.subscribe,
    Gt.useCallback(() => t(e.getState()), [e, t]),
    Gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Gt.useDebugValue(n), n;
}
const Dh = (e) => {
  const t = Mh(e), n = (r) => Lh(t, r);
  return Object.assign(n, t), n;
}, Ph = (e) => Dh;
function Rh(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(s)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (s, a) => n.setItem(s, JSON.stringify(a, void 0)),
    removeItem: (s) => n.removeItem(s)
  };
}
const $a = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return $a(r)(n);
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
        return $a(r)(n);
      }
    };
  }
}, Ah = (e, t) => (n, r, s) => {
  let a = {
    storage: Rh(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, f) => ({
      ...f,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let p = a.storage;
  if (!p)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...S);
      },
      r,
      s
    );
  const y = () => {
    const S = a.partialize({ ...r() });
    return p.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = s.setState;
  s.setState = (S, f) => (w(S, f), y());
  const x = e(
    (...S) => (n(...S), y()),
    r,
    s
  );
  s.getInitialState = () => x;
  let v;
  const _ = () => {
    var S, f;
    if (!p) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var k;
      return g((k = r()) != null ? k : x);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (S = r()) != null ? S : x)) || void 0;
    return $a(p.getItem.bind(p))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              g.state,
              g.version
            );
            return k instanceof Promise ? k.then((j) => [!0, j]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var k;
      if (u !== i)
        return;
      const [j, E] = g;
      if (v = a.merge(
        E,
        (k = r()) != null ? k : x
      ), n(v, !0), j)
        return y();
    }).then(() => {
      u === i && (m == null || m(v, void 0), v = r(), o = !0, d.forEach((g) => g(v)));
    }).catch((g) => {
      u === i && (m == null || m(void 0, g));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (p = S.storage);
    },
    clearStorage: () => {
      p == null || p.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (S) => (c.add(S), () => {
      c.delete(S);
    }),
    onFinishHydration: (S) => (d.add(S), () => {
      d.delete(S);
    })
  }, a.skipHydration || _(), v || x;
}, zh = Ah, Oh = [
  {
    id: "keep",
    label: "Keep",
    color: "var(--meld-success-color, #4ade80)",
    shortcutKey: "1",
    defaultAction: { type: "add_tag", value: "favorite" }
  },
  {
    id: "refine",
    label: "Refine",
    color: "var(--brand-yellow, #ffd700)",
    shortcutKey: "2",
    defaultAction: { type: "send_to_node" }
  },
  {
    id: "trash",
    label: "Trash",
    color: "var(--meld-danger-color, #ff4c4c)",
    shortcutKey: "3",
    defaultAction: { type: "delete" }
  }
], be = Ph()(
  zh(
    (e) => ({
      isOpen: !1,
      slots: Oh,
      buckets: {},
      images: {},
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((s) => {
        const a = { ...s.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...s.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const s = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(s).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
        return a || delete o[n], { buckets: s, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, s = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          s.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map(
          (s) => s.id === t ? { ...s, ...n } : s
        )
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), s = { ...n.buckets };
        delete s[t];
        const a = new Set(Object.values(s).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: s,
          images: o
        };
      })
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
), Fh = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerLightTableSlotId: null,
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
  favorites: []
};
function Wh(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const s = new Set(t.payload), a = e.images.filter((i) => !s.has(i.id)), o = new Set(e.selectedIds);
      for (const i of t.payload)
        o.delete(i);
      return {
        ...e,
        images: a,
        selectedIds: o,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const s = t.payload, a = [...e.images, ...s], o = Array.from(
        new Map(a.map((i) => [i.id, i])).values()
      ).sort((i, c) => c.created_at - i.created_at);
      return {
        ...e,
        images: o,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + s.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const s = t.payload, a = e.images.map(
        (i) => i.id === s.id ? s : i
      ), o = e.lineageImages.map(
        (i) => i.id === s.id ? s : i
      );
      return {
        ...e,
        images: a,
        lineageImages: o
      };
    }
    case "SET_IMAGES": {
      const { images: s, total: a, offset: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !s.some((c) => c.id === i) && (i = null), {
        ...e,
        images: s,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        pagination: {
          total: a,
          offset: o,
          limit: e.pagination.limit,
          hasMore: o + s.length < a
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: s, total: a, offset: o } = t.payload, i = [...e.images, ...s], c = Array.from(
        new Map(i.map((d) => [d.id, d])).values()
      );
      return {
        ...e,
        images: c,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: a,
          offset: o,
          hasMore: o + s.length < a
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
      const s = new Set(e.selectedIds);
      let a = e.lastSelectedId;
      return s.has(t.payload) ? (s.delete(t.payload), a === t.payload && (a = null)) : (s.add(t.payload), a = t.payload), {
        ...e,
        selectedIds: s,
        lastSelectedId: a
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
      const s = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), a = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (s === -1 || a === -1) return e;
      const [o, i] = [
        Math.min(s, a),
        Math.max(s, a)
      ], c = new Set(e.selectedIds);
      for (let d = o; d <= i; d++)
        c.add(e.images[d].id);
      return {
        ...e,
        selectedIds: c,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((s) => s.id)
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
      const s = t.payload, a = typeof s == "number" ? s : s.id, o = typeof s == "number" ? "gallery" : s.mode, i = typeof s != "number" && s.mode === "lighttable" ? s.slotId : null;
      let c = !1;
      if (typeof s != "number" && s.initialMaskMode && (typeof s.initialMaskMode == "string" ? c = s.initialMaskMode : c = "run"), c)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: c
          }
        };
      const d = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((p) => p.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: o,
        viewerLightTableSlotId: i,
        viewerInitialMaskMode: c,
        lineageImages: d ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerLightTableSlotId: null,
        viewerInitialMaskMode: !1,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (be.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((v) => v.id === x) || e.lineageImages.find((v) => v.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (p) => p.exists !== !1 && (e.settings["gallery.show_parent_images"] || !p.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (p) => p.id === e.viewerImageId
      );
      if (c === -1 || c === i.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || c === i.length - 1 && !a)
        return e;
      const d = (c + 1) % i.length;
      return {
        ...e,
        viewerImageId: i[d].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (be.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((v) => v.id === x) || e.lineageImages.find((v) => v.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (p) => p.exists !== !1 && (e.settings["gallery.show_parent_images"] || !p.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (p) => p.id === e.viewerImageId
      );
      if (c === -1 || c === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || c === 0 && !a)
        return e;
      const d = (c - 1 + i.length) % i.length;
      return {
        ...e,
        viewerImageId: i[d].id
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
      const s = {
        ...e.settings,
        ...t.payload
      }, a = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (a.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: s,
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
const Mu = h.createContext(void 0), $h = ({
  children: e
}) => {
  const [t, n] = h.useReducer(Wh, Fh), r = h.useRef(t.images.length), s = h.useRef(0), a = h.useRef(/* @__PURE__ */ new Map());
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = h.useCallback(
    async (v, _, S) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = v;
      for (; m < Math.min(_, f) && S === s.current; )
        try {
          const g = Math.min(u, f - m);
          X.log("Background fetch: starting chunk", {
            offset: m,
            limit: g
          });
          const k = await Cl(
            m,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: k }), m += k.images.length, k.images.length === 0 || m >= k.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (g) {
          X.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), _ = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      X.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Cl(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - v;
      X.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, _);
    } catch (S) {
      X.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
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
    const v = performance.now();
    try {
      const _ = r.current, S = t.searchQuery.trim() !== "", f = t.pagination.limit;
      X.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: f,
        isSearch: S
      });
      const u = await Cl(
        _,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - v;
      X.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      X.error("loadMoreImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
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
      const v = await Eh();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      X.error("Failed to load favorites", v);
    }
  }, []), p = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), S = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), y = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Wo(v)).restored_ids || v;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = h.useCallback(
    async (v, _) => {
      try {
        await Ih(v, _), n({ type: "SET_SETTINGS", payload: { [v]: _ } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), x = h.useCallback(
    async (v) => {
      const _ = t.images.find((m) => m.id === v);
      if (_ && !_.is_minimal)
        return _;
      const S = t.lineageImages.find((m) => m.id === v);
      if (S && !S.is_minimal)
        return S;
      const f = a.current.get(v);
      if (f)
        return f;
      const u = (async () => {
        try {
          X.log("fetchFullImageDetails: fetching full data", { id: v });
          const m = await Cu(v);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(v);
        }
      })();
      return a.current.set(v, u), u;
    },
    [t.images, t.lineageImages]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const _ = await Iu();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        X.error("Failed to load settings", _);
      }
    })();
  }, []), h.useEffect(() => {
    d();
  }, [d]), h.useEffect(() => {
    const v = () => {
      i();
    }, _ = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, S = (f) => {
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
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Mu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: p,
        restoreSelected: y,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, ve = () => {
  const e = h.useContext(Mu);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, tt = (e) => {
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
}, $o = async () => {
  const e = await ne.fetchApi("/meld/tags");
  return oe(e);
}, Uh = async (e) => {
  const t = await ne.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return oe(t);
}, Vh = async (e) => {
  const t = await ne.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await oe(t);
}, Qh = async (e, t) => {
  const n = await ne.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await oe(n);
}, Bh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ne.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Hh = async (e, t, n = !1, r) => {
  const s = await ne.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Kh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await ne.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Gh = async (e, t, n) => {
  const r = await ne.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await oe(r)).count;
  } catch {
    return 0;
  }
}, qh = async (e) => {
  const t = await ne.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await oe(t);
}, Yh = async () => {
  const e = await ne.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await oe(e);
}, Tu = () => {
  const { dispatch: e } = ve(), [t, n] = h.useState(() => {
    const b = localStorage.getItem("meld-import-config"), G = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (b)
      try {
        const N = JSON.parse(b);
        return { ...G, ...N, tags: [] };
      } catch {
        return G;
      }
    return G;
  });
  h.useEffect(() => {
    const { tags: b, ...G } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(G));
  }, [t]);
  const [r, s] = h.useState([]), [a, o] = h.useState([]), [i, c] = h.useState(0), [d, p] = h.useState(!1), [y, w] = h.useState([]), [x, v] = h.useState(""), [_, S] = h.useState(!1), [f, u] = h.useState(null), m = h.useRef(!1), g = (b) => {
    b.target === b.currentTarget && (m.current = !0);
  }, k = (b) => {
    b.target === b.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const G = await uh();
        n((N) => N.custom_path ? N : { ...N, custom_path: G });
      } catch (G) {
        X.error("Failed to fetch home directory:", G);
      }
    })();
  }, []), h.useEffect(() => {
    const b = new AbortController();
    return (async () => {
      const N = t.type === "custom" ? t.custom_path : t.subfolder;
      if (X.log(
        `loadFolders started. Path: "${N}", Type: "${t.type}"`
      ), t.type === "custom" && !N) {
        X.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      p(!0);
      const U = N, T = t.type;
      try {
        X.log("Step 1: Fast load starting...");
        const D = await Hh(
          t.type,
          N,
          !0,
          b.signal
        );
        if (b.signal.aborted) {
          X.log("Step 1: Aborted.");
          return;
        }
        X.log(
          `Step 1 complete. Found ${D.folders.length} folders, ${D.images.length} images.`
        ), s(D.folders), o(D.images), c(null);
        const W = D.folders.map((L) => L.name);
        W.length > 0 && (X.log(
          `Step 2: Metadata fetch starting for ${W.length} folders...`
        ), Kh(
          T,
          U,
          W,
          b.signal
        ).then((L) => {
          if (b.signal.aborted) {
            X.log("Step 2: Aborted.");
            return;
          }
          X.log("Step 2: Metadata fetch complete."), s(
            (ee) => ee.map((ce) => {
              const V = L[ce.name];
              return V ? { ...ce, count: V.count, preview: V.preview } : ce;
            })
          );
        }).catch((L) => {
          L.name !== "AbortError" && X.error("Step 2: Metadata fetch failed:", L);
        })), X.log("Step 3: Path image count starting..."), Gh(T, U, b.signal).then((L) => {
          if (b.signal.aborted) {
            X.log("Step 3: Aborted.");
            return;
          }
          X.log(`Step 3: Path image count complete: ${L}`), c(L);
        }).catch((L) => {
          L.name !== "AbortError" && X.error("Step 3: Path image count failed:", L);
        });
      } catch (D) {
        if (D.name === "AbortError") {
          X.log("Request aborted.");
          return;
        }
        X.error("Failed to load folders:", D), s([]), o([]), c(0);
      } finally {
        b.signal.aborted || p(!1);
      }
    })(), () => {
      b.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = h.useCallback(async () => {
    S(!0);
    try {
      const b = await $o();
      w(b);
    } catch (b) {
      X.error("Failed to fetch tags:", b);
    } finally {
      S(!1);
    }
  }, []);
  h.useEffect(() => {
    j();
  }, [j]), ht({
    onEscape: h.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const E = h.useMemo(() => y.filter(
    (b) => b.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(b.name)
  ), [y, x, t.tags]), C = (b) => {
    const G = b.trim();
    G && !t.tags.includes(G) && (n({ ...t, tags: [...t.tags, G] }), v(""));
  }, A = (b) => {
    n({ ...t, tags: t.tags.filter((G) => G !== b) });
  }, M = (b) => {
    b.key === "Enter" && x.trim() && (b.preventDefault(), C(x.trim()));
  }, I = async () => {
    try {
      await qh(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (b) {
      X.error("Failed to start scan:", b), alert(`Failed to start scan: ${b}`);
    }
  }, z = (b) => {
    if (t.type === "custom") {
      const G = t.custom_path.includes("\\") ? "\\" : "/", N = t.custom_path.endsWith(G) ? `${t.custom_path}${b}` : `${t.custom_path}${G}${b}`;
      n({ ...t, custom_path: N });
    } else {
      const G = t.subfolder ? `${t.subfolder}/${b}` : b;
      n({ ...t, subfolder: G });
    }
  }, B = () => {
    if (t.type === "custom") {
      const b = t.custom_path.includes("\\") ? "\\" : "/", G = t.custom_path.split(b);
      if (G.length > 1) {
        G.pop();
        let N = G.join(b);
        N === "" && b === "/" && (N = "/"), n({ ...t, custom_path: N });
      }
    } else {
      const b = t.subfolder.split("/");
      b.pop(), n({ ...t, subfolder: b.join("/") });
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (b) => b.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ l.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (b) => n({
                            ...t,
                            type: b.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ l.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ l.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ l.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ l.jsxs("label", { children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (b) => n({ ...t, recursive: b.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ l.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (b) => n({
                            ...t,
                            link_strategy: b.target.value,
                            auto_link_parent: b.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ l.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ l.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ l.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ l.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((b) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        b,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => A(b),
                            children: /* @__PURE__ */ l.jsx(_e, { size: 12 })
                          }
                        )
                      ] }, b)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (b) => v(b.target.value),
                            onKeyDown: M
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => C(x),
                            children: /* @__PURE__ */ l.jsx(hs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? x && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : E.map((b) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => C(b.name),
                          children: b.name
                        },
                        b.id
                      )) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(Sn, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ l.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: B,
                          children: [
                            /* @__PURE__ */ l.jsx(_u, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (b) => n({ ...t, custom_path: b.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      r.map((b) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => z(b.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: b.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: tt(b.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Ym, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: b.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${b.count === null ? "meld-folder-count--loading" : ""}`,
                                children: b.count !== null ? `${b.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Fo, { size: 14 })
                          ]
                        },
                        b.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((b) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(b),
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: tt(b),
                              alt: b.filename,
                              title: b.filename
                            }
                          )
                        },
                        b.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (b) => {
                b.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ l.jsx(_e, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: tt(f),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
};
function Xh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Vr(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Xh(e), s = (p) => {
    if (!p) return !1;
    const y = p.replace(/\s+/g, "").toLowerCase();
    return y === "meldimageloader" || y === "loadimage";
  }, a = n.graph._nodes.filter(
    (p) => s(p.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const p = a.find(
      (y) => String(y.id) === t
    );
    p && (o = p);
  }
  const i = o.widgets.find(
    (p) => p.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Jh = () => {
  const { dispatch: e } = ve();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var p, y;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Vr(n);
      const s = window.app;
      if (!(s != null && s.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = s.graph._nodes.filter(
        (w) => w.type === "LoadImageMask"
      );
      if (a.length === 0)
        return console.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0], i = o.widgets.find(
        (w) => w.name === "image"
      ), c = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find(
        (w) => w.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (y = (p = s.graph).afterChange) == null || y.call(p), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Bs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Zh(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Ua(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let p = 0; p < r * s; p++)
    d[p] = c.data[p * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function Ua(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], p = c * 4;
    d > 0 ? (i[p] = t[0], i[p + 1] = t[1], i[p + 2] = t[2], i[p + 3] = n) : (i[p] = 0, i[p + 1] = 0, i[p + 2] = 0, i[p + 3] = 0);
  }
  return o;
}
function eg(e) {
  return e.data.every((t) => t === 0);
}
const Lu = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = ve(), a = r.images.find((O) => O.id === e), { injectMaskToGraph: o } = Jh();
  ht({ onEscape: n });
  const i = h.useRef(null), c = h.useRef(null), d = h.useRef(null), p = h.useRef(null), [y, w] = h.useState(!1), [x, v] = h.useState("rect"), [_, S] = h.useState({ x: 0, y: 0 }), [f, u] = h.useState({ x: 0, y: 0 }), [m, g] = h.useState([]), [k, j] = h.useState(null), [E, C] = h.useState(!1), A = h.useCallback(() => {
    const O = d.current, P = c.current;
    if (!O || !P) return null;
    const J = P.getBoundingClientRect(), $ = O.getBoundingClientRect(), le = O.naturalWidth, Q = O.naturalHeight;
    if (!le || !Q) return null;
    const de = le / Q, pe = $.width / $.height;
    let we, me, Ge = 0, nt = 0;
    return de > pe ? (we = $.width, me = $.width / de, nt = ($.height - me) / 2) : (me = $.height, we = $.height * de, Ge = ($.width - we) / 2), {
      left: $.left - J.left + Ge,
      top: $.top - J.top + nt,
      width: we,
      height: me
    };
  }, []), M = h.useCallback(() => {
    const O = i.current;
    if (!O) return;
    const P = O.getContext("2d");
    if (!P) return;
    P.clearRect(0, 0, O.width, O.height);
    const J = getComputedStyle(document.documentElement), $ = J.getPropertyValue("--comfy-input-bg-active") || J.getPropertyValue("--comfy-input-bg") || J.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", le = A();
    if (p.current && le && (P.save(), P.globalAlpha = 0.5, P.drawImage(
      p.current,
      le.left,
      le.top,
      le.width,
      le.height
    ), P.restore()), y) {
      const Q = Math.min(_.x, f.x), de = Math.min(_.y, f.y), pe = Math.abs(_.x - f.x), we = Math.abs(_.y - f.y);
      if (P.save(), P.globalAlpha = 0.3, P.fillStyle = $, P.strokeStyle = "white", P.lineWidth = 2, P.setLineDash([5, 5]), P.beginPath(), x === "rect")
        P.rect(Q, de, pe, we);
      else if (x === "ellipse") {
        const me = Q + pe / 2, Ge = de + we / 2;
        P.ellipse(me, Ge, pe / 2, we / 2, 0, 0, 2 * Math.PI);
      } else if (x === "lasso" && m.length > 1) {
        P.moveTo(m[0].x, m[0].y);
        for (let me = 1; me < m.length; me++)
          P.lineTo(m[me].x, m[me].y);
        P.closePath();
      }
      P.fill(), P.globalAlpha = 1, P.stroke(), P.restore();
    }
  }, [y, _, f, x, m, A]), [I, z] = h.useState([]), B = h.useMemo(() => I.length > 0 ? I[I.length - 1] : d.current ? Bs(
    d.current.naturalWidth,
    d.current.naturalHeight
  ) : null, [I]);
  h.useEffect(() => {
    var O;
    (O = d.current) != null && O.naturalWidth && I.length === 0 && z([
      Bs(
        d.current.naturalWidth,
        d.current.naturalHeight
      )
    ]);
  }, [I.length]);
  const b = h.useRef(!1), G = h.useRef(0), N = (O) => {
    O.target === O.currentTarget && (b.current = !0);
  }, U = (O) => {
    O.target === O.currentTarget && b.current && !y && n(), b.current = !1;
  };
  h.useEffect(() => {
    if (!B) return;
    p.current || (p.current = document.createElement("canvas"));
    const O = p.current;
    O.width = B.width, O.height = B.height;
    const P = O.getContext("2d");
    if (!P) return;
    const J = Ua(B, [255, 255, 255], 255);
    P.putImageData(J, 0, 0), M();
  }, [B, M]), h.useEffect(() => {
    const O = () => {
      c.current && i.current && (i.current.width = c.current.clientWidth, i.current.height = c.current.clientHeight, M());
    }, P = new ResizeObserver(O);
    return c.current && P.observe(c.current), O(), () => P.disconnect();
  }, [M]);
  const T = (O) => {
    var Q;
    if (O.button !== 0 || y || E || Date.now() - G.current < 100)
      return;
    O.preventDefault();
    const P = A(), J = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
    if (!P || !J) return;
    w(!0);
    const $ = Math.max(
      P.left,
      Math.min(O.clientX - J.left, P.left + P.width)
    ), le = Math.max(
      P.top,
      Math.min(O.clientY - J.top, P.top + P.height)
    );
    S({ x: $, y: le }), u({ x: $, y: le }), g(x === "lasso" ? [{ x: $, y: le }] : []), j(null);
  };
  h.useEffect(() => {
    if (!y) return;
    const O = (J) => {
      var pe;
      const $ = A(), le = (pe = c.current) == null ? void 0 : pe.getBoundingClientRect();
      if (!$ || !le) return;
      const Q = Math.max(
        $.left,
        Math.min(J.clientX - le.left, $.left + $.width)
      ), de = Math.max(
        $.top,
        Math.min(J.clientY - le.top, $.top + $.height)
      );
      u({ x: Q, y: de }), x === "lasso" && g((we) => [...we, { x: Q, y: de }]);
    }, P = (J) => {
      var Q;
      const $ = A(), le = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
      if ($ && le && B && d.current) {
        const de = Math.max(
          $.left,
          Math.min(J.clientX - le.left, $.left + $.width)
        ), pe = Math.max(
          $.top,
          Math.min(J.clientY - le.top, $.top + $.height)
        ), we = Math.min(_.x, de), me = Math.min(_.y, pe), Ge = Math.abs(_.x - de), nt = Math.abs(_.y - pe), qr = x === "lasso";
        if (Ge > 5 || nt > 5 || qr && m.length > 2) {
          const ys = d.current.naturalWidth, Y = d.current.naturalHeight, re = ys / $.width, R = Y / $.height, ae = Zh(B, (q) => {
            if (x === "rect") {
              const te = (we - $.left) * re, ue = (me - $.top) * R, Fe = Ge * re, qe = nt * R;
              q.rect(te, ue, Fe, qe);
            } else if (x === "ellipse") {
              const te = (we - $.left) * re, ue = (me - $.top) * R, Fe = Ge * re, qe = nt * R, Te = te + Fe / 2, ke = ue + qe / 2;
              q.ellipse(
                Te,
                ke,
                Fe / 2,
                qe / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (x === "lasso" && m.length > 2) {
              const te = m[0];
              q.moveTo(
                (te.x - $.left) * re,
                (te.y - $.top) * R
              );
              for (let ue = 1; ue < m.length; ue++)
                q.lineTo(
                  (m[ue].x - $.left) * re,
                  (m[ue].y - $.top) * R
                );
              q.closePath();
            }
          });
          z((q) => [...q, ae]);
        }
      }
      G.current = Date.now(), w(!1), g([]);
    };
    return window.addEventListener("mousemove", O), window.addEventListener("mouseup", P), () => {
      window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", P);
    };
  }, [
    y,
    _.x,
    _.y,
    A,
    B,
    x,
    m
  ]);
  const D = h.useCallback(() => {
    I.length > 1 && z((O) => O.slice(0, -1));
  }, [I.length]);
  h.useEffect(() => {
    const O = (P) => {
      (P.metaKey || P.ctrlKey) && P.key === "z" ? (P.preventDefault(), D()) : P.key === "Escape" && (P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", O, { capture: !0 }), () => window.removeEventListener("keydown", O, { capture: !0 });
  }, [D, n]);
  const W = () => {
    if (d.current) {
      const O = Bs(
        d.current.naturalWidth,
        d.current.naturalHeight
      );
      z((P) => [...P, O]);
    }
  }, L = async () => {
    if (!B || !d.current) return null;
    C(!0);
    try {
      const { width: O, height: P } = B, J = document.createElement("canvas");
      J.width = O, J.height = P;
      const $ = J.getContext("2d");
      if (!$) return null;
      const le = Ua(B, [255, 255, 255], 255);
      $.putImageData(le, 0, 0);
      const Q = await new Promise(
        (nt) => J.toBlob(nt, "image/png")
      );
      if (!Q) return null;
      const pe = `meld_mask_${Date.now()}.png`, we = new File([Q], pe, { type: "image/png" }), me = new FormData();
      me.append("image", we), me.append("type", "temp"), me.append("overwrite", "true");
      const Ge = await ne.fetchApi("/upload/image", {
        method: "POST",
        body: me
      });
      return Ge.ok ? (await Ge.json()).name : null;
    } catch (O) {
      return console.error("[Meld] Error uploading mask:", O), null;
    } finally {
      C(!1);
    }
  }, ee = async () => {
    if (!a) return;
    const O = await L();
    O && o(a, O) && (n(), s({ type: "CLOSE_VIEWER" }));
  }, ce = async () => {
    if (!a) return;
    const O = await L();
    O && s({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: O
      }
    });
  }, V = h.useMemo(
    () => B && !eg(B),
    [B]
  );
  return a ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: N,
      onMouseUp: U,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (O) => O.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ l.jsx(_e, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${x === "rect" ? "active" : ""}`,
                    onClick: () => v("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Nu, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${x === "ellipse" ? "active" : ""}`,
                    onClick: () => v("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Bm, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${x === "lasso" ? "active" : ""}`,
                    onClick: () => v("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Jm, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: c,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: T,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "img",
                      {
                        ref: d,
                        src: tt(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (O) => O.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "canvas",
                      {
                        ref: i,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (O) => O.preventDefault()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: ee,
                      disabled: !V || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ l.jsx(Zi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Oo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ce,
                      disabled: !V || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ l.jsx(Zi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Sn, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: D,
                      disabled: I.length <= 1 || E,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(ch, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: W,
                      disabled: !V || E,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(_e, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Clear" })
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
}, tg = () => {
  const { state: e, dispatch: t, updateSetting: n } = ve(), [r, s] = h.useState("Gallery"), [a, o] = h.useState({
    ...e.settings
  }), [i, c] = h.useState(
    {}
  ), [d, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [y, w] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, v] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, S] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [m, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, j] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [E, C] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [A, M] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    I,
    z
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    B,
    b
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [G, N] = h.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: s,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: i,
    setShortcutErrors: c,
    handleClose: async () => {
      const V = Object.keys(a).filter(
        (O) => a[O] !== e.settings[O] && !i[O]
      );
      if (V.length > 0)
        for (const O of V)
          await n(O, a[O]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (V, O) => {
      o((P) => ({
        ...P,
        [V]: !O
      }));
    },
    handleNumberChange: (V, O, P, J) => {
      V === "gallery.initial_load_count" ? p(O) : V === "gallery.max_load_count" ? w(O) : V === "gallery.lineage_max_depth" ? v(O) : V === "viewer.thumbnail_window_size" ? S(O) : V === "gallery.trash_retention_days" ? u(O) : V === "gallery.auto_link_phash_threshold" ? g(O) : V === "gallery.suggest_phash_threshold" ? j(O) : V === "viewer.details.max_positive_prompt_lines" ? C(O) : V === "viewer.details.max_negative_prompt_lines" ? M(O) : V === "fullscreen.details.max_positive_prompt_lines" ? z(O) : V === "fullscreen.details.max_negative_prompt_lines" ? b(O) : V === "sidebar.thumbnail_size" && N(O);
      const $ = Number.parseInt(O, 10);
      if (!Number.isNaN($)) {
        let le = $;
        P !== void 0 && le < P && (le = P), J !== void 0 && le > J && (le = J), o((Q) => ({
          ...Q,
          [V]: le
        }));
      }
    },
    handleNumberBlur: (V) => {
      V.key === "gallery.initial_load_count" ? p(
        a["gallery.initial_load_count"].toString()
      ) : V.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : V.key === "gallery.lineage_max_depth" ? v(
        a["gallery.lineage_max_depth"].toString()
      ) : V.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : V.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : V.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : V.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : V.key === "viewer.details.max_positive_prompt_lines" ? C(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : V.key === "viewer.details.max_negative_prompt_lines" ? M(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_positive_prompt_lines" ? z(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_negative_prompt_lines" ? b(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : V.key === "sidebar.thumbnail_size" && N(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((V) => ({
        ...V,
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
    validateShortcut: (V) => V.trim() ? V.trim().split(/\s+/).every((P) => !!(P === "next" || P === "prev" || P === "delete" || P.startsWith("tag:") && P.length > 4 || P.startsWith("-tag:") && P.length > 5 || P.startsWith("tag-toggle:") && P.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: y,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: E,
    maxNegativePromptLinesInput: A,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: G
  };
}, K = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), ng = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.delete_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.small_image_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_filename": i.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": i.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] });
function Tt({
  size: e = 24,
  color: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
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
function Du() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M18 16.6v2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M16.6 18h2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Pu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Ru(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Au(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function zu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Du, {})
  ] });
}
function Ou(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Fu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Du, {})
  ] });
}
function Wu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function $u(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Uu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function Vu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Qu = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Pu
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Ou
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Fu
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Au },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: zu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Ru
  },
  { id: "edit_tags", label: "Edit Tags", icon: $u },
  { id: "edit_notes", label: "Edit Notes", icon: Uu },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Wu
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Vu
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Mt }
], rg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(K, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ l.jsx(
      K,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((p) => ({
              ...p,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Qu.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), lg = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: s,
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
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ l.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ l.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ l.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ l.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)"
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ l.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ l.jsxs("ul", { children: [
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ l.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ l.jsxs("li", { children: [
            /* @__PURE__ */ l.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ l.jsx(
        K,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (p) => {
                t((y) => ({
                  ...y,
                  [c]: p.target.value
                }));
              },
              onBlur: () => {
                const p = s(
                  e[c] || ""
                );
                r((y) => ({
                  ...y,
                  [c]: !p
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        K,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ l.jsx(
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
}, sg = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: i,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: d
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (p) => s((y) => ({
              ...y,
              "gallery.matching_strategy": p.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ l.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ l.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
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
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
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
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
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
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
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
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ l.jsx(
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
] }), ag = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ l.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ l.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ l.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ l.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ l.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ l.jsx(
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
            onBlur: () => s({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      K,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), Bu = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: s,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: p,
    handleViewTrash: y,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: v,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: m,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: E,
    thumbnailSizeInput: C
  } = tg();
  ht({ onEscape: o });
  const A = h.useRef(!1), M = (b) => {
    b.target === b.currentTarget && (A.current = !0);
  }, I = (b) => {
    b.target === b.currentTarget && A.current && o(), A.current = !1;
  }, z = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], B = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          sg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: y,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: m
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          rg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: C,
            initialLoadCountInput: x,
            maxLoadCountInput: v
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          ag,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          ng,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: E
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          lg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: p
          }
        );
      default:
        return null;
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: I,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (b) => b.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: z.map((b) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === b.id ? "active" : ""}`,
                    onClick: () => t(b.id),
                    children: b.label
                  },
                  b.id
                )) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: B() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", Hu = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: s } = ve(), [a, o] = h.useState([]), [i, c] = h.useState(t), [d, p] = h.useState(""), [y, w] = h.useState(!0), [x, v] = h.useState(!1), _ = h.useRef(null), S = e.length > 1, f = h.useRef(!1), u = (M) => {
    M.target === M.currentTarget && (f.current = !0);
  }, m = (M) => {
    M.target === M.currentTarget && f.current && n(), f.current = !1;
  }, g = h.useCallback(async () => {
    w(!0);
    try {
      const M = await $o();
      o(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      w(!1);
    }
  }, []);
  h.useEffect(() => {
    g();
  }, [g]), h.useEffect(() => {
    _.current && _.current.focus();
  }, []), ht({ onEscape: n });
  const k = h.useMemo(() => a.filter(
    (M) => M.name.toLowerCase().includes(d.toLowerCase()) && !i.includes(M.name)
  ), [a, d, i]), j = (M) => {
    const I = M.trim();
    if (I.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    I && !i.includes(I) && (c([...i, I]), p(""));
  }, E = (M) => {
    c(i.filter((I) => I !== M));
  }, C = async () => {
    v(!0);
    try {
      if (S) {
        const M = i.filter((z) => !t.includes(z)), I = t.filter(
          (z) => !i.includes(z)
        );
        await Wa(e, M, I);
      } else
        await yh(e[0], i);
      await s(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (M) {
      console.error("Failed to update tags:", M), alert("Failed to update tags.");
    } finally {
      v(!1);
    }
  }, A = (M) => {
    M.key === "Enter" && d.trim() && (M.preventDefault(), M.stopPropagation(), j(d.trim()));
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: m,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (M) => M.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Cn, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: S ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(_e, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            S && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: S ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((M) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                M,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(M),
                    children: /* @__PURE__ */ l.jsx(_e, { size: 12 })
                  }
                )
              ] }, M)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: d,
                    onChange: (M) => p(M.target.value),
                    onKeyDown: A
                  }
                ),
                d.trim() && !i.includes(d.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(d),
                    children: [
                      /* @__PURE__ */ l.jsx(hs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? d ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((M) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => j(M.name),
                  children: M.name
                },
                M.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: C,
                disabled: x,
                children: x ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ku = async () => {
  const e = await ne.fetchApi("/meld/workflows");
  return oe(e);
}, Gu = async (e) => {
  const t = await ne.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return oe(t);
}, gs = (e, t) => {
  const n = h.useCallback(async (x) => {
    try {
      const v = await wh(x.id);
      return v.workflow ? (await window.app.loadGraphData(
        v.workflow
      ), X.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (v) {
      return X.error("Error restoring workflow:", v), alert("Failed to restore workflow."), !1;
    }
  }, []), r = h.useCallback(async (x) => {
    try {
      const v = await xh(x.id), _ = v.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const m = v.is_flux ? {
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
      if (u.widgets) {
        for (const [E, C] of Object.entries(m)) {
          const A = v[E];
          if (A != null && A !== "") {
            const M = u.widgets.find(
              (I) => I.name === C
            );
            M && (M.value = A);
          }
        }
        const j = u.widgets.find(
          (E) => E.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const g = S.canvas.ds.offset, k = S.canvas.ds.scale;
      return u.pos = [(-g[0] + 400) / k, (-g[1] + 300) / k], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (v) {
      return console.error("Error adding Unified Loader:", v), alert("Failed to load settings."), !1;
    }
  }, []), s = h.useCallback(
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
  ), a = h.useCallback(
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
  ), o = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = h.useCallback(
    (x) => {
      const v = window.app;
      if (!(v != null && v.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const m = u.replace(/\s+/g, "").toLowerCase();
        return m === "meldimageloader" || m === "loadimage";
      }, S = v.graph._nodes.filter(
        (u) => _(u.type)
      );
      if (S.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (S.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Vr(x, u);
            }
          }
        }), !0;
      const f = Vr(x);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = h.useCallback(
    (x) => {
      const v = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: v }
      });
    },
    [t]
  ), d = h.useCallback(
    async (x, v = "run") => {
      var _;
      if (console.log("[Meld] handleRunWithMask called", x, v), v === "apply") {
        const S = window.app, f = ((_ = S == null ? void 0 : S.graph) == null ? void 0 : _._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          f.map((g) => ({
            id: g.id,
            type: g.type
          }))
        );
        const u = f.some(
          (g) => g.type === "LoadImageMask"
        ), m = f.some(
          (g) => g.type === "MeldImageLoader" || g.type === "LoadImage" || g.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: u, hasLoaderNode: m }), !u || !m) {
          const g = [];
          m || g.push("'Meld Image Loader'"), u || g.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${g.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await Ku()).some(
            (u) => u.valid && u.mask_count === 1
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
        } catch (S) {
          console.error("[Meld] Error checking workflows:", S);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: x.id, mode: v }
      });
    },
    [t]
  ), p = h.useCallback(
    async (x, v) => {
      try {
        const _ = x.id, f = (await Wo([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: f }), v == null || v();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), y = h.useCallback(
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
    async (x, v) => {
      try {
        const _ = await vh(
          x,
          v
        );
        t({ type: "UPDATE_IMAGE", payload: _ });
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
    handleEditTags: s,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: p,
    handleDelete: y,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, qu = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = ve(), { handleUpdateUserNotes: a } = gs(r, s), [o, i] = h.useState(t), [c, d] = h.useState(!1), p = h.useRef(null), y = h.useRef(!1), w = (_) => {
    _.target === _.currentTarget && (y.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && y.current && n(), y.current = !1;
  };
  h.useEffect(() => {
    p.current && p.current.focus();
  }, []);
  const v = h.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return h.useEffect(() => {
    const _ = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === p.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), v());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [v]), ht({ onEscape: n }), Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ah, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(_e, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
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
                onChange: (_) => i(_.target.value)
              }
            ),
            /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: v,
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
}, Yu = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ve(), s = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ht({ onEscape: s });
  const a = h.useRef(!1), o = h.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = h.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: s,
                    children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
                      /* @__PURE__ */ l.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), s();
                    },
                    children: [
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ l.jsx(Sn, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: s,
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
}, Xu = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var G;
  const { dispatch: r } = ve(), [s, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(null), [p, y] = h.useState(!1), [w, x] = h.useState(null), [v, _] = h.useState({}), [S, f] = h.useState({}), [u, m] = h.useState(""), g = h.useRef(null), k = h.useMemo(() => s.map((N) => {
    let U = N.valid, T = N.reason;
    return n && N.mask_count === 0 && (U = !1, T = "No 'Load Image (as Mask)' node found."), { ...N, valid: U, reason: T };
  }).sort((N, U) => N.valid !== U.valid ? N.valid ? -1 : 1 : N.name.localeCompare(U.name)), [s, n]), j = h.useMemo(() => {
    if (!u.trim()) return k;
    const N = u.toLowerCase();
    return k.filter(
      (U) => U.name.toLowerCase().includes(N)
    );
  }, [k, u]), E = h.useCallback(async () => {
    try {
      i(!0);
      const N = await Ku();
      a(N), d(null);
    } catch (N) {
      d(N instanceof Error ? N.message : String(N));
    } finally {
      i(!1);
    }
  }, []);
  h.useEffect(() => {
    E();
  }, [E]), h.useEffect(() => {
    !o && g.current && g.current.focus();
  }, [o]);
  const C = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ht({ onEscape: C });
  const A = h.useRef(!1), M = h.useCallback((N) => {
    N.target === N.currentTarget && (A.current = !0);
  }, []), I = h.useCallback(
    (N) => {
      N.target === N.currentTarget && A.current && C(), A.current = !1;
    },
    [C]
  ), z = async (N, U) => {
    if (!p)
      try {
        y(!0), await t(N, U), C();
      } catch (T) {
        d(T instanceof Error ? T.message : String(T)), y(!1);
      }
  }, B = async (N) => {
    if (!(v[N] || S[N]))
      try {
        f((W) => ({ ...W, [N]: !0 }));
        const U = await Gu(N), T = [], D = (W) => {
          if (!W) return !1;
          const L = W.replace(/\s+/g, "").toLowerCase();
          return n ? L === "loadimagemask" : L === "meldimageloader" || L === "loadimage";
        };
        if (U.nodes && Array.isArray(U.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            U.nodes.length
          );
          for (const W of U.nodes)
            D(W.type) && (console.log(
              "[Meld] Found target node (UI):",
              W.id,
              W.type,
              W.title
            ), T.push({
              id: String(W.id),
              type: W.type || "",
              title: W.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const W in U) {
            const L = U[W];
            L && typeof L == "object" && D(L.class_type) && (console.log(
              "[Meld] Found target node (API):",
              W,
              L.class_type
            ), T.push({
              id: W,
              type: L.class_type || ""
            }));
          }
        }
        T.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), _((W) => ({ ...W, [N]: T }));
      } catch (U) {
        console.error("Failed to fetch workflow nodes:", U);
      } finally {
        f((U) => ({ ...U, [N]: !1 }));
      }
  }, b = (N) => {
    if (!N.valid || p) return;
    if ((n ? N.mask_count : N.loader_count + N.load_image_count) <= 1) {
      z(N.name);
      return;
    }
    w === N.name ? x(null) : (x(N.name), B(N.name));
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: I,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(ku, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: C,
                    children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: o ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : c ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(vu, { size: 20 }),
                /* @__PURE__ */ l.jsx("span", { children: c })
              ] }) : s.length === 0 ? /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (G = e[0]) == null ? void 0 : G.filename }),
                      ". Workflows must have at least one",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Load Image" }),
                      " node",
                      n && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ l.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ l.jsx(jn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          ref: g,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: u,
                          onChange: (N) => m(N.target.value)
                        }
                      ),
                      u && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var N;
                            m(""), (N = g.current) == null || N.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(_e, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                j.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : j.map((N) => {
                  const U = n ? N.mask_count : N.loader_count + N.load_image_count, T = w === N.name, D = v[N.name] || [], W = S[N.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${N.valid ? "" : "meld-workflow-item--invalid"} ${T ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => b(N),
                        title: N.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: N.name }),
                            !N.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: N.reason }),
                            N.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: U > 1 ? `Multiple loaders found (${U})` : n ? "Supports: Load Image (as Mask)" : `Supports: ${N.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          N.valid && U <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: p,
                              onClick: (L) => {
                                L.stopPropagation(), z(N.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Sn, { size: 14 }),
                                p ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          N.valid && U > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: p,
                              onClick: (L) => {
                                L.stopPropagation(), b(N);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                T ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Fo,
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
                    T && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: W ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: D.map((L) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: p,
                          onClick: () => z(N.name, L.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: L.title || L.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                L.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Sn, { size: 12 })
                          ]
                        },
                        L.id
                      )) })
                    ] }) })
                  ] }, N.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: C,
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
}, Ju = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r, s) => {
    var x, v, _, S, f, u, m;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Gu(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    const d = (g) => {
      if (!g) return !1;
      const k = g.replace(/\s+/g, "");
      return k === "MeldImageLoader" || k === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find(
          (j) => d(j.type)
        );
        k && (o = String(k.id));
      }
      const g = a.nodes.find(
        (k) => {
          var j;
          return ((j = k.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const k = a[g];
          if (d(k.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a)
        if (((x = a[g].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          i = g;
          break;
        }
    }
    if (console.log("[Meld] Node IDs found:", {
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
    let p = n.filename;
    if (n.subfolder && (p = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (p = `${p} [${n.type}]`), c) {
      const g = window.app, k = t.replace(/\.json$/i, "");
      let j = !1;
      const E = document.querySelectorAll(".workflow-tab");
      for (const M of Array.from(E)) {
        const I = M.querySelector(".workflow-label"), z = ((v = I == null ? void 0 : I.textContent) == null ? void 0 : v.trim()) || ((_ = M.textContent) == null ? void 0 : _.trim()) || "";
        if (z === k || z === t || z.startsWith(`${k} `) || z.startsWith(`${k}•`)) {
          M.click(), j = !0;
          break;
        }
      }
      j || await g.loadGraphData(a, !0, !0, t), await new Promise((M) => setTimeout(M, 200));
      const C = g.graph._nodes;
      console.log("[Meld] Active graph nodes count:", C.length);
      const A = C.find(
        (M) => String(M.id) === o || d(M.type)
      );
      if (A) {
        const M = (S = A.widgets) == null ? void 0 : S.find((I) => I.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: A.id,
          type: A.type,
          imagePath: p
        }), M && (M.value = p, typeof M.callback == "function" && M.callback(p));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const M = C.find(
          (I) => {
            var z;
            return String(I.id) === i || ((z = I.type) == null ? void 0 : z.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: M == null ? void 0 : M.id,
          maskFilename: r
        }), M) {
          const I = (f = M.widgets) == null ? void 0 : f.find(
            (B) => B.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const z = (u = M.widgets) == null ? void 0 : u.find(
            (B) => B.name === "channel"
          );
          z && (z.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      g.graph.setDirtyCanvas(!0, !0);
      try {
        await g.queuePrompt(0);
        return;
      } catch (M) {
        throw console.error("Failed to queue workflow:", M), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const y = JSON.parse(JSON.stringify(a));
    y[o].inputs.image = p, r && i && (y[i].inputs.image = `${r} [temp]`, y[i].inputs.channel = "red");
    const w = await ne.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: y,
        client_id: ne.clientId
      })
    });
    if (!w.ok) {
      const g = await w.json();
      throw new Error(((m = g.error) == null ? void 0 : m.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) }), Zu = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = ve(), o = h.useRef(!0);
  h.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = h.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = h.useMemo(
    () => s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
      (f) => f.exists !== !1 && (s.settings["gallery.show_parent_images"] || !f.has_children || i)
    ),
    [
      s.viewerMode,
      s.lineageImages,
      s.images,
      s.settings,
      i
    ]
  ), d = h.useRef(s.viewerImageId);
  h.useEffect(() => {
    d.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const p = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  ht({ onEscape: p });
  const y = h.useRef(!1), w = h.useCallback((f) => {
    f.target === f.currentTarget && (y.current = !0);
  }, []), x = h.useCallback(
    (f) => {
      f.target === f.currentTarget && y.current && p(), y.current = !1;
    },
    [p]
  ), v = h.useCallback(
    (f) => {
      if (!o.current) return;
      const u = d.current;
      if (u === null || !f.has(u))
        return;
      const m = c.findIndex(
        (k) => k.id === u
      );
      if (m === -1) return;
      let g = !1;
      for (let k = m + 1; k < c.length; k++)
        if (!f.has(c[k].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[k].id, mode: s.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let k = m - 1; k >= 0; k--)
          if (!f.has(c[k].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[k].id, mode: s.viewerMode }
            }), g = !0;
            break;
          }
      }
      g || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, c, a]
  ), _ = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e), u = c.filter(
        (m) => f.has(m.id)
      );
      if (v(f), await Oa(e, n), !o.current) return;
      !n && r && r(u), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (f) {
      a({
        type: "SET_ERROR",
        payload: f instanceof Error ? f.message : String(f)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, S = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e);
      for (const m of e) {
        const g = await Fa(m);
        if (!o.current) return;
        for (const k of g)
          f.add(k.id);
      }
      const u = c.filter(
        (m) => f.has(m.id)
      );
      if (v(f), await Oa(Array.from(f), n), !o.current) return;
      !n && r && r(u), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(f)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (f) {
      a({
        type: "SET_ERROR",
        payload: f instanceof Error ? f.message : String(f)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (f) => f.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Mt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: p,
                    children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsxs("p", { children: [
                      "Are you sure you want to",
                      " ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx(
                            Om,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ l.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                            /* @__PURE__ */ l.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ l.jsxs(
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
                          /* @__PURE__ */ l.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: p,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: _,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
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
}, ef = ({ message: e }) => {
  const { dispatch: t } = ve(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return ht({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(vu, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsx(
      "div",
      {
        style: { padding: "20px 0", textAlign: "center", fontSize: "14px" },
        children: e
      }
    ) }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
      "button",
      {
        className: "meld-btn meld-btn-primary",
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, tf = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ve(), [s, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(!1), p = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  ht({ onEscape: p });
  const y = h.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (y.current = !0);
  }, x = (j) => {
    j.target === j.currentTarget && y.current && p(), y.current = !1;
  }, v = t.images.find((j) => j.id === e), _ = h.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], E = await gh(e, j);
      a(E);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    _();
  }, [_]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!v || j === v.parent_id) && !(v.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await ec(e, j), await Cu(e), await r(), p();
      } catch (E) {
        console.error("Failed to link parent:", E);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await ec(e, null), await r(), p();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, u = async (j) => {
    i(!0);
    try {
      const E = await Bh(j), { id: C } = await bu({
        filename: E.name,
        subfolder: E.subfolder || "",
        type: E.type || "input"
      });
      if (C === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(C);
    } catch (E) {
      console.error("Failed to upload/register image:", E);
    } finally {
      i(!1);
    }
  }, m = (j) => {
    j.preventDefault(), j.stopPropagation(), d(!1);
    const E = j.dataTransfer.files[0];
    E != null && E.type.startsWith("image/") && u(E);
  };
  if (!v) return null;
  const g = s.filter((j) => j.is_source_match), k = s.filter((j) => !j.is_source_match);
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("h2", { children: [
              "Select Source for #",
              v.id
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: p,
                children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            v.parent_id && /* @__PURE__ */ l.jsxs(
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
                  /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ l.jsx(th, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ l.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ l.jsx(
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
                              /* @__PURE__ */ l.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    v.parent_filename && /* @__PURE__ */ l.jsx(
                                      "img",
                                      {
                                        src: tt({
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
                                    /* @__PURE__ */ l.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ l.jsx(
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
                                          /* @__PURE__ */ l.jsxs(
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
                  /* @__PURE__ */ l.jsx(
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
                      children: /* @__PURE__ */ l.jsx(eh, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!0);
                },
                onDragOver: (j) => {
                  j.preventDefault(), j.stopPropagation(), j.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!1);
                },
                onDrop: m,
                children: [
                  /* @__PURE__ */ l.jsx(dh, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: g.map((j) => {
                  const E = j.id === v.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${E ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !E && S(j.id),
                      style: {
                        cursor: E ? "default" : "pointer",
                        ...E ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: tt(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          E && /* @__PURE__ */ l.jsx(
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
                    j.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                k.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: k.map((j) => {
                  const E = j.id === v.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${E ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !E && S(j.id),
                      style: {
                        cursor: E ? "default" : "pointer",
                        ...E ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: tt(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - j.distance) / 64 * 100),
                                  "%"
                                ] }),
                                E && /* @__PURE__ */ l.jsx(
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
                    j.id
                  );
                }) }) : /* @__PURE__ */ l.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, og = () => {
  const { state: e, dispatch: t } = ve(), { executeWorkflow: n } = Ju();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      Xu,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename,
        onExecute: async (r, s) => {
          if (e.activeModal.type === "workflow_selection") {
            const a = e.activeModal.maskFilename;
            for (const o of e.activeModal.images)
              await n(
                r,
                o,
                a,
                s
              );
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      Yu,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Vr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(tf, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Ce.createPortal(/* @__PURE__ */ l.jsx(Tu, {}), document.body),
    e.activeModal.type === "settings" && Ce.createPortal(/* @__PURE__ */ l.jsx(Bu, {}), document.body),
    e.activeModal.type === "tag_edit" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        Hu,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(ef, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        Zu,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        Lu,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        qu,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, nf = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const s = t["gallery.lineage_max_depth"];
      if (s === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, s).map((d) => ({
          id: d.id,
          imgSrc: tt(d)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = tt(o) : i = tt({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && s > 1) {
        const d = n(o);
        return [c, ...d].slice(0, s);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, rf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ve(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: p,
    handleRunWithWorkflow: y,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: v,
    handleEditNotes: _,
    handleUpdateUserNotes: S
  } = gs(t, n), { getParentChain: f } = nf(t.images, t.settings), [u, m] = h.useState(null), [g, k] = h.useState(!1), [j, E] = h.useState(null), [C, A] = h.useState(!1), M = h.useRef(null), I = async (Q, de, pe = !1) => {
    try {
      await navigator.clipboard.writeText(Q), pe ? (A(!0), setTimeout(() => A(!1), 2e3)) : (E(de), setTimeout(() => E(null), 2e3));
    } catch (we) {
      console.error("Failed to copy text: ", we);
    }
  };
  h.useEffect(() => {
    const Q = (pe) => {
      pe.key === "Escape" && (u ? m(null) : k(!1));
    }, de = (pe) => {
      M.current && !M.current.contains(pe.target) && k(!1);
    };
    return window.addEventListener("keydown", Q), g && document.addEventListener("mousedown", de), () => {
      window.removeEventListener("keydown", Q), document.removeEventListener("mousedown", de);
    };
  }, [g, u]);
  const z = f(e), b = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, G = tt(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: g,
    setIsMenuOpen: k,
    copiedLabel: j,
    popupCopied: C,
    menuRef: M,
    parentChain: z,
    displayFilename: b,
    imgSrc: G,
    handleCopy: I,
    handleClick: (Q) => {
      Q.shiftKey ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0 ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (Q) => {
      Q.preventDefault(), Q.stopPropagation(), Q.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (Q) => {
      Q.shiftKey ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0 ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (Q) => {
      Q.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !Q.shiftKey && !Q.ctrlKey && !Q.metaKey && s || (Q.shiftKey || Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0) && Q.preventDefault();
    },
    handleKeyDown: (Q) => {
      var pe, we, me;
      ((pe = document.activeElement) == null ? void 0 : pe.tagName) === "INPUT" || ((we = document.activeElement) == null ? void 0 : we.tagName) === "TEXTAREA" || (me = document.activeElement) != null && me.isContentEditable || (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      _(e);
    },
    handleSendToWorkflow: () => {
      p(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      v(e);
    },
    handleRunWithWorkflow: () => {
      y(e);
    },
    handleRunWithMask: (Q = "run") => w(e, Q),
    handleUpdateUserNotes: (Q) => S(e.id, Q),
    fetchFullImageDetails: r
  };
}, Uo = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: s,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: p,
  onEditNotes: y,
  onDelete: w,
  onRestore: x,
  showRestore: v,
  deleteLabel: _,
  showQuickShortcuts: S = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const g = (E) => {
    switch (E) {
      case "add_unified_loader":
        return s;
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
        return y;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, k = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((E) => E && E !== ""), j = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: j, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (E) => {
          E.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(lh, { size: u })
      }
    ),
    S && k.map((E, C) => {
      const A = Qu.find((z) => z.id === E);
      if (!A || !A.icon) return null;
      const M = A.icon, I = g(E);
      return !I || E === "restore_image" && !v ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (z) => {
            z.stopPropagation(), I();
          },
          title: A.label,
          children: /* @__PURE__ */ l.jsx(M, { size: u })
        },
        `${E}-${C}`
      );
    }),
    e && /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Pu,
        handler: s
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Ou,
        handler: o
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Fu,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Au,
        handler: i
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: zu,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Ru,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: $u,
        handler: p
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Uu,
        handler: y
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Wu,
        handler: d
      },
      ...v ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Vu,
          handler: x,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: _,
        icon: Mt,
        handler: w,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((E) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${E.className || ""}`,
        onMouseDown: (C) => C.stopPropagation(),
        onClick: (C) => {
          C.preventDefault(), C.stopPropagation(), t(!1), setTimeout(() => E.handler(), 0);
        },
        children: [
          /* @__PURE__ */ l.jsx(E.icon, { size: 14, color: E.color }),
          /* @__PURE__ */ l.jsx("span", { children: E.label })
        ]
      },
      E.id
    )) })
  ] });
}, ig = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => Ce.createPortal(
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ l.jsx("span", { children: e }),
              /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                s ? /* @__PURE__ */ l.jsx(Oo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  Hm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  _e,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), lf = Gt.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: s,
      setPopupContent: a,
      isMenuOpen: o,
      setIsMenuOpen: i,
      copiedLabel: c,
      popupCopied: d,
      menuRef: p,
      parentChain: y,
      displayFilename: w,
      imgSrc: x,
      handleCopy: v,
      handleClick: _,
      handleSelectToggle: S,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: m,
      handleRestoreWorkflow: g,
      handleAddUnifiedLoader: k,
      handleEditSource: j,
      handleEditTags: E,
      handleEditNotes: C,
      handleSendToWorkflow: A,
      handleRestore: M,
      handleDelete: I,
      handleRunWithWorkflow: z,
      handleRunWithMask: B,
      fetchFullImageDetails: b
    } = rf(e), [G, N] = h.useState("idle");
    h.useEffect(() => {
      e.user_notes && G === "saving" && N("idle");
    }, [e.user_notes, G]);
    const U = (T) => {
      T.stopPropagation();
      let D = String(e.id);
      r && t.selectedIds.size > 0 && (D = Array.from(t.selectedIds).join(",")), T.dataTransfer.setData("text/plain", D), be.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: f,
        onMouseDown: u,
        onKeyDown: m,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: U,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: S,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": r,
                children: r && /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
              "img",
              {
                src: x,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: u,
                onClick: (T) => {
                  T.stopPropagation(), _(T);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && y.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: y.map(
                (T, D) => T.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: T.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (W) => {
                      W.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: T.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: D === 0 ? "Source" : D === 1 ? "Grand-Source" : `Ancestor (S${D + 1})`,
                    alt: "source thumb"
                  },
                  T.id || D
                )
              ) })
            ] }),
            t.settings["sidebar.show_created_at"] && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
            ] }),
            t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
            ] }),
            t.settings["sidebar.show_model_name"] && /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (T) => {
                  T.stopPropagation();
                  const D = await b(e.id);
                  a({
                    title: "Model",
                    text: D.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (T) => {
                        T.stopPropagation();
                        const D = await b(e.id);
                        v(D.model_name || "-", "Model");
                      },
                      children: c === "Model" ? "Copied!" : "Model"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (T) => {
                  T.stopPropagation();
                  const D = await b(e.id);
                  a({
                    title: "Positive Prompt",
                    text: D.positive_prompt || D.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (T) => {
                        T.stopPropagation();
                        const D = await b(e.id);
                        v(
                          D.positive_prompt || D.positive || "-",
                          "Positive"
                        );
                      },
                      children: c === "Positive" ? "Copied!" : "Positive"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (T) => {
                  T.stopPropagation();
                  const D = await b(e.id);
                  a({
                    title: "Negative Prompt",
                    text: D.negative_prompt || D.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (T) => {
                        T.stopPropagation();
                        const D = await b(e.id);
                        v(
                          D.negative_prompt || D.negative || "-",
                          "Negative"
                        );
                      },
                      children: c === "Negative" ? "Copied!" : "Negative"
                    }
                  ),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_tags"] && /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (T) => {
                  T.stopPropagation(), E();
                },
                children: [
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((T, D) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: T
                    },
                    `${T}-${D}`
                  )) : /* @__PURE__ */ l.jsx(
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
            (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__meta-label", children: [
                "Notes",
                G === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (T) => {
                    T.stopPropagation(), C();
                  },
                  children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(
            Uo,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: p,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: g,
              onSendToWorkflow: A,
              onRunWithWorkflow: z,
              onRunWithMask: (T) => B(T),
              onEditSource: j,
              onEditTags: E,
              onEditNotes: C,
              onRestore: M,
              showRestore: t.viewScope === "trash",
              onDelete: I,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            ig,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (T) => v(T, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
lf.displayName = "DetailedImageCard";
const sf = Gt.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: s,
      handleKeyDown: a,
      handleClick: o,
      handleSelectToggle: i,
      isMenuOpen: c,
      setIsMenuOpen: d,
      menuRef: p,
      state: y,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: v,
      handleRunWithWorkflow: _,
      handleRunWithMask: S,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: m,
      handleDelete: g,
      handleRestore: k
    } = rf(e), j = y.viewScope === "trash", E = j ? "Delete Permanently" : "Move to Trash", C = (A) => {
      A.stopPropagation();
      let M = String(e.id);
      t && y.selectedIds.size > 0 && (M = Array.from(y.selectedIds).join(",")), A.dataTransfer.setData("text/plain", M), be.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: s,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: C,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: i,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": t,
                children: t && /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ l.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
              "img",
              {
                src: n,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: s,
                onClick: (A) => {
                  A.stopPropagation(), o(A);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            Uo,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: p,
              settings: y.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: v,
              onRunWithWorkflow: _,
              onRunWithMask: S,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: m,
              onDelete: g,
              onRestore: k,
              showRestore: j,
              deleteLabel: E,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
sf.displayName = "SimpleImageCard";
const cg = ({ image: e }) => {
  const { state: t } = ve();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(sf, { image: e }) : /* @__PURE__ */ l.jsx(lf, { image: e });
}, dg = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = h.useState(!1), i = h.useRef(null);
  return h.useEffect(() => {
    const c = new IntersectionObserver(
      ([p]) => {
        p.isIntersecting && o(!0);
      },
      { rootMargin: n }
    ), d = i.current;
    return d && c.observe(d), () => {
      d && c.unobserve(d);
    };
  }, [n]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: i,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...s
      },
      children: a ? e : null
    }
  );
}, ug = () => {
  const { state: e, dispatch: t } = ve(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Yh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (p) {
      console.error("Failed to cancel scan:", p);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ l.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ l.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ l.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ l.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${d}%` }
      }
    ) }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ l.jsx(Nu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(Vm, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ l.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: s,
        children: "OK"
      }
    )
  ] }) });
}, fg = () => {
  const { state: e } = ve(), { slots: t, addToBucket: n } = be();
  h.useEffect(() => {
    const r = (s) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (p) => p.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((p) => {
        n(o.id, String(p));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, pg = (e, t, n, r) => {
  if (t.length !== 0)
    switch (e.type) {
      case "delete":
        r({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: t,
            hasLineage: n.some((s) => s.parent_id || s.has_children),
            isPermanent: !1
            // To make it simple, standard soft delete
          }
        });
        break;
      case "add_tag":
        r({
          type: "OPEN_MODAL",
          payload: {
            type: "tag_edit",
            imageIds: t,
            tags: e.value ? [e.value] : []
          }
        });
        break;
      case "move_folder":
        console.warn("move_folder action is not yet implemented");
        break;
      case "send_to_node":
        t.length > 0 && (console.warn(
          "send_to_node is complex for batch, delegating to future implementation"
        ), alert(`Would send ${t.length} images to nodes (Feature WIP)`));
        break;
      default:
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, mg = (e, t = 16) => {
  switch (e) {
    case "delete":
      return /* @__PURE__ */ l.jsx(Mt, { size: t });
    case "add_tag":
      return /* @__PURE__ */ l.jsx(Cn, { size: t });
    case "move_folder":
      return /* @__PURE__ */ l.jsx(qm, { size: t });
    case "send_to_node":
      return /* @__PURE__ */ l.jsx(Sn, { size: t });
    default:
      return /* @__PURE__ */ l.jsx(Fm, { size: t });
  }
}, hg = ({ config: e }) => {
  var M;
  const { buckets: t } = be(), { state: n, dispatch: r } = ve(), [s, a] = h.useState(!1), [o, i] = h.useState(!1), [c, d] = h.useState(e.label), [p, y] = h.useState(e.color), [w, x] = h.useState(
    e.defaultAction.type
  ), v = h.useRef(null), _ = h.useRef(null), S = t[e.id] || [], f = S.length;
  h.useEffect(() => {
    const I = (z) => {
      v.current && !v.current.contains(z.target) && a(!1), _.current && !_.current.contains(z.target) && i(!1);
    };
    return (s || o) && document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [s, o]);
  const u = S.map((I) => {
    const z = Number(I);
    let B = n.images.find((b) => b.id === z);
    return B || (B = n.lineageImages.find((b) => b.id === z)), B || (B = be.getState().images[I]), B;
  }).filter(Boolean), m = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.add("drag-over");
  }, g = (I) => {
    I.currentTarget.classList.remove("drag-over");
  }, k = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.remove("drag-over");
    const z = I.dataTransfer.getData("text/plain");
    z && z.split(",").forEach((b) => {
      if (b) {
        const G = b.trim(), N = Number(G);
        let U = n.images.find((T) => T.id === N);
        U || (U = n.lineageImages.find(
          (T) => T.id === N
        )), be.getState().addToBucket(e.id, G, U);
      }
    });
  }, j = (I, z) => {
    I.stopPropagation(), I.dataTransfer.setData("text/plain", String(z)), I.dataTransfer.setData("application/meld-lt-source-slot", e.id), I.dataTransfer.effectAllowed = "move";
  }, E = (I, z) => {
    I.dataTransfer.dropEffect === "none" && be.getState().removeFromBucket(e.id, String(z));
  }, C = (I) => {
    if (f === 0) return;
    const z = I || e.defaultAction.type, B = {
      type: z,
      value: z === e.defaultAction.type ? e.defaultAction.value : void 0
    }, b = S.map((G) => Number(G));
    pg(B, b, u, r), a(!1);
  }, A = () => {
    const I = be.getState();
    I.slots.length <= 1 || window.confirm(
      `Delete tab "${e.label}"?
(Images will return to the gallery)`
    ) && I.removeSlot(e.id);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: m,
      onDragLeave: g,
      onDrop: k,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: f === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : u.map((I) => {
          const z = "type" in I ? I.type : "output", B = `/api/view?filename=${encodeURIComponent(I.filename)}&type=${z}&subfolder=${encodeURIComponent(I.subfolder || "")}`;
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                r({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: I.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (b) => j(b, I.id),
              onDragEnd: (b) => E(b, I.id),
              children: /* @__PURE__ */ l.jsx("img", { src: B, alt: I.filename, draggable: !1 })
            },
            I.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__action-btn",
              onClick: () => C(),
              disabled: f === 0,
              children: [
                mg(e.defaultAction.type),
                /* @__PURE__ */ l.jsx("span", { className: "meld-lt-slot__action-label", children: e.defaultAction.type === "delete" ? "Delete" : e.defaultAction.type === "add_tag" ? "Tag" : "Commit" })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__menu-wrapper", ref: v, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => a(!s),
                disabled: f === 0,
                children: /* @__PURE__ */ l.jsx(Qm, { size: 14 })
              }
            ),
            s && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__dropdown", children: [
              /* @__PURE__ */ l.jsxs("button", { type: "button", onClick: () => C("add_tag"), children: [
                /* @__PURE__ */ l.jsx(Cn, { size: 12 }),
                " Add Tag"
              ] }),
              /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => C("send_to_node"),
                  children: [
                    /* @__PURE__ */ l.jsx(Sn, { size: 12 }),
                    " Send to Node"
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs(
                "button",
                {
                  className: "meld-lt-slot__dropdown-danger",
                  type: "button",
                  onClick: () => C("delete"),
                  children: [
                    /* @__PURE__ */ l.jsx(Mt, { size: 12 }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: _, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => i(!o),
                title: "Tab Setting",
                children: /* @__PURE__ */ l.jsx(Eu, { size: 14 })
              }
            ),
            o && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: c,
                    onChange: (I) => d(I.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: p.startsWith("var") ? ((M = p.match(/#([0-9a-fA-F]{3,6})/)) == null ? void 0 : M[0]) || "var(--meld-text-secondary, #9ca3af)" : /^#[0-9a-fA-F]{6}$/i.test(p) ? p : "var(--meld-text-secondary, #9ca3af)",
                          onChange: (I) => y(I.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: p,
                          onChange: (I) => y(I.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-action-${e.id}`, children: "Default Action:" }),
                /* @__PURE__ */ l.jsxs(
                  "select",
                  {
                    id: `slot-action-${e.id}`,
                    value: w,
                    onChange: (I) => x(I.target.value),
                    children: [
                      /* @__PURE__ */ l.jsx("option", { value: "add_tag", children: "Add Tag" }),
                      /* @__PURE__ */ l.jsx("option", { value: "send_to_node", children: "Send to Node" }),
                      /* @__PURE__ */ l.jsx("option", { value: "delete", children: "Delete" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    be.getState().updateSlot(e.id, {
                      label: c,
                      color: p,
                      defaultAction: {
                        type: w,
                        value: w === "add_tag" ? "favorite" : void 0
                      }
                    }), i(!1);
                  },
                  children: "Save Settings"
                }
              ),
              be.getState().slots.length > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: A,
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
        ] })
      ]
    }
  );
}, gg = () => {
  var c;
  fg();
  const { isOpen: e, slots: t } = be(), { state: n } = ve(), [r, s] = h.useState(((c = t[0]) == null ? void 0 : c.id) || "keep"), a = h.useRef(null);
  if (h.useEffect(() => {
    let d = document.getElementById(
      "meld-light-table-portal"
    );
    if (!d) {
      d = document.createElement("div"), d.id = "meld-light-table-portal";
      const p = document.querySelector(".comfyui-body-bottom");
      p ? p.appendChild(d) : document.body.appendChild(d);
    }
    return a.current = d, () => {
    };
  }, []), !e || !a.current) return null;
  const o = () => {
    const d = `slot_${Date.now().toString(36)}`;
    be.getState().addSlot({
      id: d,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: "",
      defaultAction: { type: "add_tag", value: "favorite" }
    }), s(d);
  }, i = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((d) => {
        var p;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${r === d.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => s(d.id),
            style: { "--tab-color": d.color },
            onDragOver: (y) => {
              y.preventDefault(), s(d.id);
            },
            onDrop: (y) => {
              y.preventDefault();
              const w = y.dataTransfer.getData("text/plain");
              w && w.split(",").forEach((v) => {
                if (v) {
                  const _ = v.trim(), S = n.images.find(
                    (f) => String(f.id) === _
                  );
                  be.getState().addToBucket(d.id, _, S);
                }
              });
            },
            children: [
              d.label,
              "   (",
              ((p = be.getState().buckets[d.id]) == null ? void 0 : p.length) || 0,
              ")"
            ]
          },
          d.id
        );
      }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: o,
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
          children: /* @__PURE__ */ l.jsx(hs, { size: 16 })
        }
      ),
      /* @__PURE__ */ l.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => {
            window.confirm("Clear all items in all tabs?") && t.forEach((d) => {
              be.getState().clearBucket(d.id);
            });
          },
          title: "Clear All Buckets",
          children: [
            /* @__PURE__ */ l.jsx(oh, { size: 14 }),
            /* @__PURE__ */ l.jsx("span", { children: "Clear All" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((d) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: r === d.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(hg, { config: d })
      },
      d.id
    )) })
  ] });
  return Ce.createPortal(i, a.current);
}, af = () => {
  const { state: e, refreshFavorites: t } = ve(), [n, r] = h.useState(!1), [s, a] = h.useState(null), [o, i] = h.useState(null), [c, d] = h.useState(""), [p, y] = h.useState("");
  h.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = h.useCallback(
    async (S, f, u) => {
      S.stopPropagation();
      const m = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(m))
        try {
          await tc(f), await t();
        } catch (g) {
          X.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), x = h.useCallback(
    (S, f) => {
      S.stopPropagation(), i(f), d(f.name), y(f.query);
    },
    []
  ), v = h.useCallback(async () => {
    if (!(!o || !c.trim() || !p.trim()))
      try {
        r(!0), await Ch(
          o.id,
          c,
          p
        ), await t(), i(null);
      } catch (S) {
        X.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, p, t]), _ = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((u) => u.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await tc(f.id), await t();
        } catch (u) {
          X.error("Failed to delete favorite:", u);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Nh(e.searchQuery, e.searchQuery), await t();
    } catch (f) {
      X.error("Failed to save favorite:", f);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: s,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: p,
    setEditFavoriteQuery: y,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: v,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, of = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [s, a] = h.useState(!1), [o, i] = h.useState(!1), [c, d] = h.useState(!1);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: s ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: s ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ l.jsx(
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
              e.name !== e.query && /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx(ju, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx(Mt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, yg = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ve(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: p,
    setEditFavoriteQuery: y,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: v
  } = af(), [_, S] = h.useState({ top: 0, left: 0 }), f = h.useRef(null), u = h.useRef(null);
  if (ht({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), h.useEffect(() => {
    if (e) {
      let E = e.left;
      const C = e.bottom + 5;
      E + 300 > window.innerWidth - 10 && (E = window.innerWidth - 300 - 10), E < 10 && (E = 10), S({ top: C, left: E });
    }
  }, [e]), h.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const m = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, g = (k) => {
    k.stopPropagation();
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1999,
            backgroundColor: "transparent"
          },
          onClick: t,
          onMouseDown: (k) => k.stopPropagation()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: f,
          onClick: m,
          onMouseDown: g,
          style: {
            position: "fixed",
            top: _.top,
            left: _.left,
            width: "300px",
            maxHeight: "400px",
            backgroundColor: "var(--comfy-menu-bg, #222)",
            border: "1px solid var(--comfy-menu-border, #444)",
            borderRadius: "8px",
            boxShadow: "0 8px 24px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
            zIndex: 2e3,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ l.jsxs(
              "div",
              {
                style: {
                  padding: "12px",
                  borderBottom: "1px solid var(--comfy-menu-border, #333)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "var(--comfy-input-bg-active, rgba(255, 255, 255, 0.02))"
                },
                children: [
                  /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "var(--meld-text-color)"
                      },
                      children: [
                        /* @__PURE__ */ l.jsx(
                          er,
                          {
                            size: 14,
                            color: "var(--brand-yellow, #ffd700)",
                            fill: "var(--brand-yellow, #ffd700)"
                          }
                        ),
                        "Favorites"
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: { fontSize: "12px", color: "var(--meld-text-secondary)" },
                      children: [
                        r.favorites.length,
                        " items"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(
              "div",
              {
                style: {
                  overflowY: "auto",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  backgroundColor: "var(--comfy-input-bg, #1a1a1a)"
                },
                children: r.favorites.map((k) => /* @__PURE__ */ l.jsx(
                  of,
                  {
                    fav: k,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: x,
                    onDelete: w
                  },
                  k.id
                ))
              }
            ),
            a && /* @__PURE__ */ l.jsx(
              "div",
              {
                style: {
                  padding: "8px 12px",
                  backgroundColor: "var(--comfy-menu-bg, #333)",
                  borderTop: "1px solid var(--comfy-menu-border, #444)",
                  color: "var(--meld-success-color)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center"
                },
                children: a
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ l.jsx(er, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      padding: "8px 0"
                    },
                    children: [
                      /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "label",
                              {
                                htmlFor: "edit-favorite-name-ctx",
                                style: {
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "var(--meld-text-secondary)"
                                },
                                children: "Name"
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              "input",
                              {
                                id: "edit-favorite-name-ctx",
                                ref: u,
                                type: "text",
                                value: c,
                                onChange: (k) => d(k.target.value),
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
                                onKeyDown: (k) => {
                                  k.key === "Enter" && v(), k.key === "Escape" && i(null);
                                }
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "label",
                              {
                                htmlFor: "edit-favorite-query-ctx",
                                style: {
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  color: "var(--meld-text-secondary)"
                                },
                                children: "Search Query"
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              "textarea",
                              {
                                id: "edit-favorite-query-ctx",
                                value: p,
                                onChange: (k) => y(k.target.value),
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
                                onKeyDown: (k) => {
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), v()), k.key === "Escape" && i(null);
                                }
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: v,
                      disabled: s || !c.trim() || !p.trim(),
                      children: s ? "Saving..." : "Save Changes"
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
  );
}, pl = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; s + 1 < e.length && e[s + 1] === " "; )
        s++;
    else
      n += a;
  }
  return t.push(n), t;
}, vg = () => {
  const { state: e, dispatch: t, updateSetting: n } = ve(), [r, s] = h.useState(e.searchQuery), [a, o] = h.useState([]), [i, c] = h.useState(!1), [d, p] = h.useState([]), [y, w] = h.useState([]), x = e.settings["search.show_all_keywords"], [v, _] = h.useState(-1), [S, f] = h.useState(null), u = h.useRef(null), m = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (y.length > 0) return;
    const N = await Sh();
    w(N);
  }, [y.length]);
  h.useEffect(() => {
    jh().then((N) => {
      f(N);
    }), x && g();
  }, [g, x]);
  const k = h.useMemo(() => {
    if (!S) return null;
    const N = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${N}):(.*)$`, "i");
  }, [S]), j = h.useCallback(() => {
    const N = !x;
    N && g(), n("search.show_all_keywords", N);
  }, [x, g, n]), E = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    kh().then((N) => {
      p(N);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    s(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var N;
    (N = u.current) == null || N.focus();
  }, []);
  const C = h.useCallback(
    (N, U = !0) => {
      m.current !== N && (X.log("SearchBar: triggering search", { query: N }), t({ type: "SET_SEARCH_QUERY", payload: N }), U && c(!1), m.current = N);
    },
    [t]
  );
  h.useEffect(() => {
    const N = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const U = pl(r), T = U[U.length - 1];
      if (T) {
        const D = T.match(k);
        if (D) {
          const W = D[1].toLowerCase();
          let L = D[2];
          L.startsWith('"') && (L = L.substring(1)), L.endsWith('"') && (L = L.substring(0, L.length - 1));
          const ee = await _h(L, W);
          o(ee), c(ee.length > 0), _(-1);
        } else {
          const W = T.replace(/^([-!])/, "").toLowerCase();
          if (W && S) {
            const L = S.all_prefixes.filter((ee) => ee.startsWith(W)).map((ee) => ({
              type: ee,
              value: "",
              count: 0
            }));
            if (L.length > 0) {
              o(L), c(!0), _(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(N);
  }, [
    r,
    e.settings["search.input_suggest"],
    k,
    S
  ]);
  const A = h.useCallback(
    (N) => {
      var ce;
      const U = pl(r), D = (U.pop() || "").match(/^([-!])/), W = D ? D[1] : "", ee = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(N.type);
      if (N.value === "") {
        const V = `${[...U, `${W}${N.type}:`].join(" ").trim()}`;
        s(V);
      } else {
        const V = ee ? N.value : `"${N.value}"`, O = `${[
          ...U,
          `${W}${N.type}:${V}`
        ].join(" ").trim()} `;
        s(O), o([]), c(!1);
      }
      (ce = u.current) == null || ce.focus();
    },
    [r, S]
  ), M = (N) => {
    N.key === "Enter" ? C(r) : N.key === "Tab" ? i && v >= 0 && (A(a[v]), N.preventDefault()) : N.key === "ArrowDown" ? i && (_((U) => Math.min(U + 1, a.length - 1)), N.preventDefault()) : N.key === "ArrowUp" ? i && (_((U) => Math.max(U - 1, -1)), N.preventDefault()) : N.key === "Escape" && c(!1);
  }, I = h.useCallback(() => {
    s(""), C("");
  }, [C]), z = h.useCallback(
    (N, U, T = !1) => {
      var Q;
      const D = pl(r), W = D[D.length - 1] || "";
      let L = !1;
      const ee = W.replace(/^([-!])/, "").toLowerCase();
      ee && N.toLowerCase().startsWith(ee) && (L = !0);
      const ce = W.match(/^([-!])/), V = L && ce ? ce[1] : "";
      if (L && D.pop(), T) {
        const de = [...D, `${V}${N}:`].filter(Boolean).join(" ");
        s(de), (Q = u.current) == null || Q.focus();
        return;
      }
      const J = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(N) ? U : `"${U}"`, $ = `${V}${N}:${J}`, le = [...D, $].filter(Boolean).join(" ");
      s(le), C(le);
    },
    [r, C, S]
  ), B = h.useCallback(
    (N) => {
      s(N), N || C("");
    },
    [C]
  ), b = h.useCallback(() => {
    if (r === m.current || !k)
      return;
    const N = pl(r), U = N[N.length - 1];
    if (!U) return;
    const T = !!U.match(k), D = U.replace(/^([-!])/, "").toLowerCase(), W = D && (S == null ? void 0 : S.all_prefixes.some((L) => L.startsWith(D)));
    (T || W) && c(!0);
  }, [r, k, S]), G = h.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: y,
    showAllKeywords: x,
    toggleShowAllKeywords: j,
    selectedIndex: v,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: E,
    handleSearch: C,
    handleKeyDown: M,
    applySuggestion: A,
    clearSearch: I,
    applySearchSuggestion: z,
    handleInputChange: B,
    handleInputFocus: b,
    handleInputBlur: G
  };
}, rc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(Cn, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx($m, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(ih, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(Um, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(xu, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(wu, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(Gm, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(Wm, { size: 12 });
    default:
      return null;
  }
}, wg = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: s,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: p,
  applySearchSuggestion: y,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: v,
  onDeleteFavorite: _
}) => {
  const S = (g, k, j) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => y(g.type, g.value, j === "all"),
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
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: rc(g.type)
          }
        ),
        /* @__PURE__ */ l.jsx(
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
        j !== "all" && /* @__PURE__ */ l.jsx(
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
    `${j}-${g.type}:${g.value}:${k}`
  ), f = () => !e || t.length === 0 ? null : /* @__PURE__ */ l.jsx(
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
      children: t.map((g, k) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), s(g);
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
          children: /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: rc(g.type)
              }
            ),
            /* @__PURE__ */ l.jsxs(
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
            /* @__PURE__ */ l.jsx(
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
          ] })
        },
        `${g.type}:${g.value}`
      ))
    }
  ), u = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map(
              (g, k) => S(g, k, "quick")
            )
          }
        ),
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ l.jsx(
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
                    /* @__PURE__ */ l.jsx(
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
              d && /* @__PURE__ */ l.jsx(
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
                    (g, k) => S({ type: g, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(er, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: w.map((g) => /* @__PURE__ */ l.jsx(
              of,
              {
                fav: g,
                onSelect: x,
                onEdit: v,
                onDelete: _
              },
              g.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ l.jsxs(
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
}, xg = () => {
  const { state: e } = ve(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: p,
    inputRef: y,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: v,
    applySuggestion: _,
    clearSearch: S,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: g
  } = vg(), {
    isSaving: k,
    toastMessage: j,
    editingFavorite: E,
    setEditingFavorite: C,
    editFavoriteName: A,
    setEditFavoriteName: M,
    editFavoriteQuery: I,
    setEditFavoriteQuery: z,
    handleDeleteFavorite: B,
    handleEditFavorite: b,
    handleSaveEditFavorite: G,
    handleSaveFavorite: N
  } = af();
  ht({
    onEscape: () => C(null),
    enabled: !!E
  });
  const U = h.useRef(null), T = h.useRef(!1);
  h.useEffect(() => {
    E && U.current && U.current.focus();
  }, [E]);
  const D = (L) => {
    L.target === L.currentTarget && (T.current = !0);
  }, W = (L) => {
    L.target === L.currentTarget && T.current && C(null), T.current = !1;
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              j && /* @__PURE__ */ l.jsx(
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
                  children: j
                }
              ),
              /* @__PURE__ */ l.jsxs(
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
                    /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => x(t),
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
                        onMouseEnter: (L) => {
                          L.currentTarget.style.transform = "translateY(-1px)", w ? (L.currentTarget.style.filter = "brightness(1.15)", L.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : L.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (L) => {
                          L.currentTarget.style.transform = "none", w ? (L.currentTarget.style.filter = "none", L.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : L.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (L) => {
                          L.currentTarget.style.transform = "translateY(1px)", L.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (L) => {
                          L.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ l.jsx(
                            jn,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ l.jsx(
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
                    /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        ref: y,
                        type: "text",
                        value: t,
                        onChange: (L) => u(L.target.value),
                        onKeyDown: v,
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
                    e.searchQuery && /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: N,
                        disabled: k,
                        title: e.favorites.some((L) => L.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ l.jsx(
                          er,
                          {
                            size: 16,
                            color: e.favorites.some((L) => L.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((L) => L.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ l.jsx(
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
                        children: /* @__PURE__ */ l.jsx(_e, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                wg,
                {
                  showSuggestions: s,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: p,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: f,
                  favorites: e.favorites,
                  onSelectFavorite: (L) => {
                    n(L), x(L);
                  },
                  onEditFavorite: b,
                  onDeleteFavorite: B
                }
              )
            ]
          }
        ),
        E && Ce.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: D,
              onMouseUp: W,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (L) => L.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(er, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => C(null),
                          children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: U,
                                    type: "text",
                                    value: A,
                                    onChange: (L) => M(L.target.value),
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
                                    onKeyDown: (L) => {
                                      L.key === "Enter" && G(), L.key === "Escape" && C(null);
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ l.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(
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
                                /* @__PURE__ */ l.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: I,
                                    onChange: (L) => z(L.target.value),
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
                                    onKeyDown: (L) => {
                                      L.key === "Enter" && !L.shiftKey && (L.preventDefault(), G()), L.key === "Escape" && C(null);
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => C(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: G,
                          disabled: k || !A.trim() || !I.trim(),
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
}, _g = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [s, a] = h.useState(!0), [o, i] = h.useState(""), [c, d] = h.useState(""), [p, y] = h.useState(!1), [w, x] = h.useState(null), [v, _] = h.useState(""), [S, f] = h.useState(!1), u = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const I = await $o();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const g = async (I) => {
    I.preventDefault();
    const z = c.trim();
    if (!(!z || p)) {
      if (z.toLowerCase() === _t) {
        alert(
          `Tag name '${_t}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === z.toLowerCase())) {
        alert(`Tag "${z}" already exists.`);
        return;
      }
      y(!0);
      try {
        await Uh(z), d(""), await m();
      } catch (B) {
        console.error("Failed to add tag:", B);
      } finally {
        y(!1);
      }
    }
  }, k = async (I, z) => {
    if (confirm(`Are you sure you want to delete tag "${z}"?`))
      try {
        await Vh(I), await m();
      } catch (B) {
        console.error("Failed to delete tag:", B);
      }
  }, j = (I) => {
    x(I.id), _(I.name);
  }, E = () => {
    x(null), _("");
  }, C = async (I) => {
    I.preventDefault();
    const z = v.trim();
    if (!z || w === null || S) return;
    if (z.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    const B = n.find((b) => b.id === w);
    if (B && B.name === z) {
      E();
      return;
    }
    if (n.some(
      (b) => b.id !== w && b.name.toLowerCase() === z.toLowerCase()
    )) {
      alert(`Tag "${z}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Qh(w, z), E(), await m();
    } catch (b) {
      console.error("Failed to rename tag:", b), alert(b instanceof Error ? b.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, A = (I) => {
    t(`tag:${I}`);
  }, M = h.useMemo(() => n.filter(
    (I) => I.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(Cn, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(_e, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: g, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (I) => d(I.target.value),
            disabled: p
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || p,
            children: [
              /* @__PURE__ */ l.jsx(hs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
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
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((I) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === I.id ? /* @__PURE__ */ l.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: C,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: v,
                onChange: (z) => _(z.target.value),
                onKeyDown: (z) => z.key === "Escape" && E()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !v.trim(),
                children: /* @__PURE__ */ l.jsx(Oo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: E,
                disabled: S,
                children: /* @__PURE__ */ l.jsx(_e, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => A(I.name),
              children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(I),
              children: /* @__PURE__ */ l.jsx(ju, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(I.id, I.name),
              children: /* @__PURE__ */ l.jsx(Mt, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
};
function kg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Sg = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: p,
    handleRestore: y,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: v,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: S,
    handleRunWithMask: f,
    handleEditSource: u
  } = gs(e, t), { getParentChain: m } = nf(a, c), [g, k] = h.useState(!1), [j, E] = h.useState(!1), [C, A] = h.useState(
    c["viewer.show_details_by_default"]
  ), [M, I] = h.useState(null), z = M ?? c["viewer.show_thumbnails"], [B, b] = h.useState(!1), [G, N] = h.useState(!1), [U, T] = h.useState(null), [D, W] = h.useState(null), [L, ee] = h.useState(
    null
  ), ce = h.useRef(null), V = h.useRef(!0);
  h.useEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const O = h.useRef(s);
  h.useEffect(() => {
    O.current = s;
  }, [s]);
  const P = h.useMemo(() => {
    const Y = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lighttable" && e.viewerLightTableSlotId ? (be.getState().buckets[e.viewerLightTableSlotId] || []).map((q) => {
      const te = Number.parseInt(q, 10);
      return a.find((ue) => ue.id === te) || i.find((ue) => ue.id === te) || null;
    }).filter((q) => q !== null) : o === "lineage" ? i : a.filter(
      (re) => re.exists !== !1 && (c["gallery.show_parent_images"] || !re.has_children || Y)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), J = s === null ? -1 : P.findIndex((Y) => Y.id === s), $ = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? P : a).find((Y) => Y.id === s), le = h.useCallback(
    async (Y = !1) => {
      if (!$) return;
      const re = g ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!Y && re === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [$.id],
            hasLineage: !!($.parent_id || $.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const R = e.viewScope === "trash", ae = /* @__PURE__ */ new Set([$.id]);
        if (re === "lineage") {
          const q = await Fa($.id);
          for (const te of q)
            ae.add(te.id);
        }
        if (!V.current || O.current === null) return;
        if (P.length > ae.size) {
          let q = !1;
          for (let te = J + 1; te < P.length; te++)
            if (!ae.has(P[te].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: P[te].id, mode: o }
              }), q = !0;
              break;
            }
          if (!q) {
            for (let te = J - 1; te >= 0; te--)
              if (!ae.has(P[te].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: P[te].id, mode: o }
                }), q = !0;
                break;
              }
          }
          q || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Oa(Array.from(ae), R), !R) {
          const q = P.filter(
            (te) => ae.has(te.id)
          );
          T(q), W(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ae) });
      } catch (R) {
        t({
          type: "SET_ERROR",
          payload: R instanceof Error ? R.message : String(R)
        });
      }
    },
    [
      $,
      g,
      c,
      e.viewScope,
      P,
      J,
      o,
      t
    ]
  ), Q = h.useCallback(() => {
    $ && d($);
  }, [$, d]), de = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: g } });
  }, [t, g]), pe = h.useCallback(async () => {
    const Y = g ? c["fullscreen.loop"] : c["viewer.loop"];
    if (J === 0 && o === "gallery" && e.pagination.hasMore && !G && Y) {
      N(!0);
      try {
        const re = e.pagination.limit, R = e.pagination.total, ae = Math.max(0, R - re), q = await Cl(
          ae,
          re,
          e.searchQuery
        );
        if (!V.current || (t({ type: "APPEND_IMAGES", payload: q }), O.current === null)) return;
        if (q.images.length > 0) {
          const te = q.images[q.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: te.id, mode: "gallery" }
          });
        }
      } catch (re) {
        console.error("Failed to jump to end:", re);
      } finally {
        N(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: g } });
  }, [
    J,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    G,
    g
  ]), we = h.useCallback(
    (Y) => {
      Y && "stopPropagation" in Y && Y.stopPropagation();
      const re = ce.current;
      re && (document.fullscreenElement ? document.exitFullscreen() : re.requestFullscreen().catch((R) => {
        console.error(
          `Error attempting to enable full-screen mode: ${R.message}`
        );
      }));
    },
    []
  ), me = h.useCallback(async () => {
    $ && (P.length > 1 ? de() : t({ type: "CLOSE_VIEWER" }), await y($));
  }, [$, P.length, de, y, t]), Ge = h.useCallback(async () => {
    if (!U || U.length === 0) return;
    const Y = U.map((R) => R.id), re = Y[0];
    try {
      const R = await Wo(Y);
      if (!V.current) return;
      if (t({ type: "ADD_IMAGES", payload: U }), e.viewScope === "trash") {
        const ae = R.restored_ids || Y;
        t({ type: "REMOVE_IMAGES", payload: ae });
      }
      if (T(null), !V.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: re, mode: o }
      });
    } catch (R) {
      t({
        type: "SET_ERROR",
        payload: R instanceof Error ? R.message : String(R)
      });
    }
  }, [U, t, o, e.viewScope]), nt = h.useCallback(async () => {
    if (U && U.length > 0)
      await Ge();
    else if (D && D.type === "tags") {
      const { imageId: Y, addTags: re, removeTags: R } = D;
      try {
        await Wa([Y], re, R);
        const ae = (o === "lineage" ? i : a).find((q) => q.id === Y);
        if (ae) {
          const q = [...ae.tags];
          for (const ue of re)
            q.includes(ue) || q.push(ue);
          const te = q.filter((ue) => !R.includes(ue));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ae, tags: te }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: Y, mode: o }
          });
        }
        W(null);
      } catch (ae) {
        t({
          type: "SET_ERROR",
          payload: ae instanceof Error ? ae.message : String(ae)
        });
      }
    }
  }, [
    U,
    D,
    Ge,
    a,
    i,
    o,
    t
  ]), qr = h.useCallback(
    async (Y) => {
      if (!Y || !$) return;
      const re = $.id, R = [...$.tags], ae = Y.split(/\s+/), q = [], te = [];
      let ue = !1, Fe = !1, qe = !1;
      for (const Te of ae)
        if (Te.startsWith("tag:")) {
          const ke = Te.substring(4);
          ke && !R.includes(ke) && !q.includes(ke) && q.push(ke);
        } else if (Te.startsWith("-tag:")) {
          const ke = Te.substring(5);
          ke && R.includes(ke) && !te.includes(ke) && te.push(ke);
        } else if (Te.startsWith("tag-toggle:")) {
          const ke = Te.substring(11);
          ke && (R.includes(ke) ? te.includes(ke) || te.push(ke) : q.includes(ke) || q.push(ke));
        } else Te === "next" ? ue = !0 : Te === "prev" ? Fe = !0 : Te === "delete" && (qe = !0);
      if (q.length > 0 || te.length > 0)
        try {
          await Wa(
            [re],
            q,
            te
          );
          const Te = [...R];
          for (const Ut of q)
            Te.includes(Ut) || Te.push(Ut);
          const ke = Te.filter((Ut) => !te.includes(Ut));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...$, id: re, tags: ke }
          }), W({
            type: "tags",
            imageId: re,
            addTags: [...te],
            removeTags: [...q]
          }), T(null);
        } catch (Te) {
          console.error("Failed to update tags via shortcut:", Te);
        }
      qe ? le(!0) : ue ? de() : Fe && pe();
    },
    [$, t, de, pe, le]
  );
  h.useEffect(() => {
    const Y = (R) => {
      const ae = R.target, q = ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable;
      if (q && R.key !== "Escape") {
        R.key === "Enter" && (R.ctrlKey || R.metaKey) && R.preventDefault();
        return;
      }
      if (s === null) return;
      const te = R.key === "Delete" || R.key === "Backspace", ue = R.key === "ArrowRight" || R.key === "ArrowLeft", Fe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        R.key
      ), qe = R.key === "Escape", Te = (R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z" || R.code === "KeyZ"), ke = /^[0-9]$/.test(R.key) && !R.ctrlKey && !R.metaKey && !R.altKey && R.code !== "KeyZ";
      if (te || ue || Fe || qe || Te || ke)
        if (q)
          if (qe) {
            if (e.activeModal.type !== "none") {
              R.preventDefault(), R.stopPropagation();
              return;
            }
            R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
          } else
            return;
        else {
          if (qe && e.activeModal.type !== "none") {
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
        de();
      else if (R.key === "ArrowLeft")
        pe();
      else if (R.key === "f" || R.key === "F")
        we(R);
      else if (R.key === "i" || R.key === "I")
        A((Ut) => !Ut);
      else if (R.key === "t" || R.key === "T")
        Q();
      else if ((R.key === "r" || R.key === "R") && e.viewScope === "trash")
        me();
      else if (R.key === "Delete")
        le();
      else if ((R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z"))
        nt();
      else if (ke && !q) {
        const Ut = `viewer.shortcut.${R.key}`, vs = c[Ut];
        typeof vs == "string" && vs && (ee(R.key), setTimeout(() => {
          V.current && ee(null);
        }, 500), qr(vs));
      }
    };
    window.addEventListener("keydown", Y, { capture: !0 });
    const re = () => {
      const R = !!document.fullscreenElement;
      k(R), A(R ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", re), () => {
      window.removeEventListener("keydown", Y, { capture: !0 }), document.removeEventListener("fullscreenchange", re);
    };
  }, [
    s,
    t,
    we,
    de,
    pe,
    c,
    le,
    e.activeModal.type,
    nt,
    Q,
    me,
    e.viewScope,
    qr
  ]), h.useEffect(() => {
    s !== null && r(s).catch((Y) => {
      console.error("Failed to fetch full image details for viewer:", Y);
    });
  }, [s, r]), h.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (b(!0), Fa(s).then((Y) => {
      V.current && t({ type: "SET_LINEAGE", payload: Y });
    }).catch((Y) => {
      console.error("Failed to fetch lineage:", Y);
    }).finally(() => {
      V.current && b(!1);
    }));
  }, [o, s, i.length, t]), h.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || J !== -1 && J >= P.length - 15 && n();
  }, [
    s,
    P.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    J
  ]);
  const Vo = h.useMemo(() => {
    if (!z || J === -1) return [];
    const Y = c["viewer.thumbnail_window_size"], re = Math.floor(Y / 2);
    let R = Math.max(0, J - re);
    const ae = Math.min(P.length, R + Y);
    return ae === P.length && (R = Math.max(0, ae - Y)), P.slice(R, ae).map((q, te) => ({
      img: q,
      absIndex: R + te
    }));
  }, [P, J, c, z]), ys = h.useMemo(() => $ ? m($) : [], [$, m]);
  return h.useEffect(() => {
    var Y, re;
    if (s !== null) {
      if (z) {
        const R = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        R && R.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Y = document.activeElement) == null ? void 0 : Y.tagName) === "CANVAS" && document.activeElement.blur(), (re = ce.current) == null || re.focus();
    }
  }, [s, z]), h.useEffect(() => {
    if (s === null || P.length === 0) return;
    const Y = P.map((ue) => ue.id), re = Y.indexOf(s);
    if (re === -1) return;
    const R = g ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: ae, nextId: q } = kg({
      ids: Y,
      index: re,
      loopEnabled: R,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), te = setTimeout(() => {
      const ue = [ae, q].filter(
        (Fe) => Fe !== null && Fe !== s
      );
      ue.length !== 0 && Promise.allSettled(ue.map((Fe) => r(Fe))).then(
        (Fe) => {
          for (const qe of Fe)
            qe.status === "rejected" && X.warn(
              "Prefetching adjacent image details failed",
              qe.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(te);
  }, [
    s,
    P,
    g,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), h.useEffect(() => {
    if (s === null || P.length === 0) return;
    const Y = P.findIndex(
      (q) => q.id === s
    );
    if (Y === -1) return;
    const re = (q) => tt(q), R = [
      Y + 1,
      Y + 2,
      Y - 1
    ], ae = setTimeout(() => {
      for (const q of R)
        if (q >= 0 && q < P.length) {
          const te = P[q], ue = new Image();
          ue.src = re(te);
        }
    }, 150);
    return () => clearTimeout(ae);
  }, [s, P]), {
    isFullscreen: g,
    showDetails: C,
    setShowDetails: A,
    showThumbnails: z,
    setShowThumbnailsOverride: I,
    isLoadingLineage: B,
    isJumping: G,
    isMenuOpen: j,
    setIsMenuOpen: E,
    activeShortcutKey: L,
    lastDeletedImages: U,
    setLastDeletedImages: T,
    overlayRef: ce,
    handleNext: de,
    handlePrevious: pe,
    handleDelete: le,
    handleUpdateUserNotes: w,
    handleEditNotes: () => $ && p($),
    handleTagEdit: Q,
    handleRestore: me,
    handleUndo: nt,
    handleRestoreWorkflow: async () => {
      if (!$) return;
      await x($) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!$) return;
      await v($) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!$) return;
      _($) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => $ && S($),
    handleRunWithMask: (Y) => $ && f($, Y),
    handleEditSource: () => $ && u($),
    toggleFullscreen: we,
    currentIndex: J,
    currentThumbnails: P,
    image: $,
    windowedThumbnails: Vo,
    parentChain: ys
  };
}, jg = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), s = e[`viewer.shortcut.${r}`];
  return typeof s == "string" && s ? /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: s.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, Eg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = h.useState("idle");
  h.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], p = d === "always" || d === "if_present" && e.user_notes;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: s.map(
            (y, w) => y.imgSrc && /* @__PURE__ */ l.jsx(
              "img",
              {
                src: y.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: y.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              y.id || w
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
          /* @__PURE__ */ l.jsx(
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
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
          /* @__PURE__ */ l.jsx(
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
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((y) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: y }, y)) })
        ] }),
        p && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (y) => {
                y.stopPropagation(), o == null || o();
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
              children: e.user_notes || /* @__PURE__ */ l.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, cf = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = tt(e);
    return /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${s ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${o ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ l.jsx("img", { src: i, alt: e.filename }),
          (a || o) && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ l.jsx(xu, { size: 12 }) : /* @__PURE__ */ l.jsx(wu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
cf.displayName = "ThumbnailItem";
const Ng = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: s,
  isLoading: a,
  viewerMode: o
}) => /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  s ? /* @__PURE__ */ l.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: i }) => /* @__PURE__ */ l.jsx(
    cf,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Ur, { className: "animate-spin", size: 20 }) })
] }) });
function Cg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ve(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: p,
    isMenuOpen: y,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: v,
    overlayRef: _,
    handleNext: S,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: g,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: E,
    handleRunWithWorkflow: C,
    handleRunWithMask: A,
    handleEditSource: M,
    handleDelete: I,
    toggleFullscreen: z,
    image: B,
    windowedThumbnails: b,
    parentChain: G
  } = Sg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), N = h.useRef(null), U = h.useRef(null), { executeWorkflow: T } = Ju(), D = h.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: W, viewerMode: L } = e, ee = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ce.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: _,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (ce) => ce.stopPropagation(),
              children: [
                ee && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Ur, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(Su, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(Xm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: z,
                      type: "button",
                      title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: s ? /* @__PURE__ */ l.jsx(rh, { size: 20 }) : /* @__PURE__ */ l.jsx(nh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Uo,
                    {
                      isMenuOpen: y,
                      setIsMenuOpen: w,
                      menuRef: U,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: E,
                      onRunWithWorkflow: C,
                      onRunWithMask: A,
                      onEditSource: M,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: I,
                      deleteLabel: D,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ l.jsx(_e, { size: 20 })
                    }
                  )
                ] }),
                ee && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: p,
                    children: /* @__PURE__ */ l.jsx(_u, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Ur, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: N,
                      src: tt(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                ee && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    children: /* @__PURE__ */ l.jsx(Fo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  Eg,
                  {
                    image: B,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: ee,
                    parentChain: G,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Ng,
                  {
                    windowedThumbnails: b,
                    viewerImageId: W,
                    currentImage: B,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: L
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  jg,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            Xu,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (ce, V) => {
                if (e.activeModal.type === "workflow_selection") {
                  const O = e.activeModal.maskFilename;
                  for (const P of e.activeModal.images)
                    await T(
                      ce,
                      P,
                      O,
                      V
                    );
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            Yu,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (ce) => {
                e.activeModal.type === "node_selection" && Vr(e.activeModal.image, ce);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(ef, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            Zu,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(tf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Tu, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(Bu, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            Hu,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            Lu,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            qu,
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
const bg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = ve(), [a, o] = h.useState("gallery"), [i, c] = h.useState(""), [d, p] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    p(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const y = e.searchQuery.trim() !== "", w = h.useRef(null), x = h.useRef(null), v = be((u) => u.buckets), _ = h.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const m of Object.values(v))
      for (const g of m)
        u.add(Number(g));
    return u;
  }, [v]), S = h.useMemo(() => {
    const u = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((m) => _.has(m.id) ? !1 : e.viewScope === "trash" ? m.exists !== !1 || e.settings["gallery.trash.show_missing"] : m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || u));
  }, [
    e.images,
    e.settings,
    e.viewScope,
    e.searchQuery,
    _
  ]), f = h.useMemo(
    () => S.slice(0, d),
    [S, d]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (X.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    S.length,
    r
  ]), h.useEffect(() => {
    const u = (m) => {
      m.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), m.preventDefault(), m.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), m.preventDefault(), m.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), h.useEffect(() => {
    const u = new IntersectionObserver(
      (g) => {
        if (g[0].isIntersecting) {
          if (e.isLoading) {
            X.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < S.length ? (X.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                S.length
              ),
              totalAvailableLocally: S.length
            }
          ), p((k) => k + e.pagination.limit)) : e.pagination.hasMore ? (X.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : X.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: S.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), m = w.current;
    return m && u.observe(m), () => {
      m && u.unobserve(m);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    S.length,
    e.pagination.limit,
    e.images.length
  ]), h.useEffect(() => {
    const u = e.viewerImageId ?? x.current;
    if (u !== null && S.some((g) => g.id === u)) {
      const g = S.findIndex((j) => j.id === u);
      if (g >= d) {
        p(
          Math.ceil((g + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const k = document.querySelector(
        `[data-image-id="${u}"]`
      );
      k && (k.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    S,
    d,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: s,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: d,
    displayedImages: S,
    visibleImages: f,
    isSearchActive: y,
    loadMoreRef: w
  };
}, Ig = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ve(), { handleRunWithWorkflow: s } = gs(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const o = e.viewScope === "trash", i = () => {
    const d = e.images.filter(
      (y) => e.selectedIds.has(y.id)
    ), p = /* @__PURE__ */ new Set();
    for (const y of d)
      if (y.tags)
        for (const w of y.tags)
          p.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(p)
      }
    });
  }, c = () => {
    const d = e.images.filter(
      (p) => e.selectedIds.has(p.id)
    );
    s(d);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${o ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
          a,
          " items selected"
        ] }),
        o ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ l.jsx(
                  Ur,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ l.jsx(
                  Mt,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: i,
              children: [
                /* @__PURE__ */ l.jsx(
                  Cn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--workflow",
              onClick: c,
              children: [
                /* @__PURE__ */ l.jsx(
                  ku,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ l.jsx(
                  Mt,
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
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ l.jsx(_e, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Mg = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    localLimit: c,
    displayedImages: d,
    visibleImages: p,
    isSearchActive: y,
    loadMoreRef: w
  } = bg(), { isOpen: x, setIsOpen: v } = be(), _ = be((C) => C.buckets), S = Object.values(_).some((C) => C && C.length > 0);
  X.log("GalleryPanel: isLightTableOpen =", x);
  const [f, u] = h.useState(!1), [m, g] = h.useState(null), k = h.useRef(null), j = h.useCallback(() => {
    k.current && (g(
      k.current.getBoundingClientRect()
    ), u(!0));
  }, []), E = h.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), u(!1);
    },
    [t, i, a]
  );
  return X.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: p.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (C) => {
        C.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
      },
      onDrop: (C) => {
        const A = C.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (A) {
          C.preventDefault();
          const M = C.dataTransfer.getData("text/plain");
          M && M.split(",").forEach((z) => {
            z && be.getState().removeFromBucket(A, z.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Mt, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (C) => r("gallery.trash.show_missing", C.target.checked)
                }
              ),
              /* @__PURE__ */ l.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ l.jsx(_e, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: k,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: f ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(
                  er,
                  {
                    size: 14,
                    fill: f ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  X.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), v(!x);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: x ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    sh,
                    {
                      size: 14,
                      fill: x ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: x ? 1 : 0.8 }
                    }
                  ),
                  !x && S && /* @__PURE__ */ l.jsx(
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
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  s === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: y ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: y ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const A = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", A);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(Zm, { size: 14 }) : /* @__PURE__ */ l.jsx(Su, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(s === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: s === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: s === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ l.jsx(Cn, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(Km, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(
                  Ur,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(Eu, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(xg, {}) })
        ] }),
        /* @__PURE__ */ l.jsx(ug, {}),
        e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
        s === "tags" ? /* @__PURE__ */ l.jsx(
          _g,
          {
            onClose: () => a("gallery"),
            onSearch: (C) => {
              t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : p.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: p.map((C) => {
                const A = e.settings["sidebar.thumbnail_size"] || 100, M = e.settings["gallery.view_mode"] === "grid_only", I = M && C.width && C.height ? Math.min(
                  A,
                  A * C.width / C.height
                ) + 10 : M ? A + 10 : "100%";
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    "data-image-id": C.id,
                    style: {
                      width: M ? "auto" : "100%",
                      flexShrink: 0,
                      display: M ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ l.jsx(
                      dg,
                      {
                        height: M ? A + 10 : Math.max(A, 150),
                        style: {
                          width: typeof I == "number" ? `${I}px` : I,
                          minWidth: typeof I == "number" ? `${I}px` : I,
                          display: M ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ l.jsx(cg, { image: C })
                      }
                    )
                  },
                  C.id
                );
              })
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: w,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                c >= d.length && !e.pagination.hasMore && p.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(Ig, {}),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Cg, {}),
        /* @__PURE__ */ l.jsx(og, {}),
        f && /* @__PURE__ */ l.jsx(
          yg,
          {
            anchorRect: m,
            onClose: () => u(!1),
            onSelect: E
          }
        ),
        /* @__PURE__ */ l.jsx(gg, {})
      ]
    }
  );
};
lc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var s, a;
      const n = (s = e.widgets) == null ? void 0 : s.find((o) => o.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((o) => o.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Tg = document.getElementById(
  "meld-gallery-style"
);
if (!Tg) {
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
let ml = null, yt = null;
lc.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...s) {
        r == null || r.apply(this, s);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Iu();
      X.init(n.dev_mode), X.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), X.init(!1);
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
      }, ne.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), ne.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), ne.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), X.log("Import completed.");
      }), ne.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await bu({
                    filename: s.filename,
                    subfolder: s.subfolder,
                    type: s.type
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
            X.log("render called", {
              el: n,
              galleryRoot: ml,
              galleryContainer: yt
            }), yt || (X.log("galleryContainer not found, creating new one"), yt = document.createElement("div"), yt.id = "meld-gallery-container", yt.style.height = "100%", yt.style.width = "100%", yt.style.display = "flex", yt.style.flexDirection = "column"), n.contains(yt) || (X.log("Appending galleryContainer to el"), n.appendChild(yt)), ml ? X.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (X.log("Creating new gallery root"), ml = hu(yt), ml.render(
              Gt.createElement(
                $h,
                null,
                Gt.createElement(Mg)
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
