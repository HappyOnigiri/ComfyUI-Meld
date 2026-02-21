import { api as te } from "/scripts/api.js";
import { app as cc } from "/scripts/app.js";
function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dc = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element"), pm = Symbol.for("react.portal"), hm = Symbol.for("react.fragment"), gm = Symbol.for("react.strict_mode"), ym = Symbol.for("react.profiler"), vm = Symbol.for("react.provider"), wm = Symbol.for("react.context"), xm = Symbol.for("react.forward_ref"), _m = Symbol.for("react.suspense"), km = Symbol.for("react.memo"), Sm = Symbol.for("react.lazy"), qo = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object" ? null : (e = qo && e[qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, mc = Object.assign, fc = {};
function nr(e, t, n) {
  this.props = e, this.context = t, this.refs = fc, this.updater = n || uc;
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pc() {
}
pc.prototype = nr.prototype;
function Ka(e, t, n) {
  this.props = e, this.context = t, this.refs = fc, this.updater = n || uc;
}
var Ga = Ka.prototype = new pc();
Ga.constructor = Ka;
mc(Ga, nr.prototype);
Ga.isPureReactComponent = !0;
var Yo = Array.isArray, hc = Object.prototype.hasOwnProperty, qa = { current: null }, gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function yc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) hc.call(t, r) && !gc.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), u = 0; u < i; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: qr, type: e, key: a, ref: o, props: s, _owner: qa.current };
}
function bm(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ya(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function Nm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Xo = /\/+/g;
function Ss(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Nm("" + e.key) : t.toString(36);
}
function xl(e, t, n, r, s) {
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
        case qr:
        case pm:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Ss(o, 0) : r, Yo(s) ? (n = "", e != null && (n = e.replace(Xo, "$&/") + "/"), xl(s, t, n, "", function(u) {
    return u;
  })) : s != null && (Ya(s) && (s = bm(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Xo, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Yo(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Ss(a, i);
    o += xl(a, t, n, c, s);
  }
  else if (c = jm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Ss(a, i++), o += xl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return xl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Cm(e) {
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
var Ye = { current: null }, _l = { transition: null }, Em = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: _l, ReactCurrentOwner: qa };
function vc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ae.Children = { map: el, forEach: function(e, t, n) {
  el(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return el(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return el(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ya(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ae.Component = nr;
ae.Fragment = hm;
ae.Profiler = ym;
ae.PureComponent = Ka;
ae.StrictMode = gm;
ae.Suspense = _m;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
ae.act = vc;
ae.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = mc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = qa.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) hc.call(t, c) && !gc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var u = 0; u < c; u++) i[u] = arguments[u + 2];
    r.children = i;
  }
  return { $$typeof: qr, type: e.type, key: s, ref: a, props: r, _owner: o };
};
ae.createContext = function(e) {
  return e = { $$typeof: wm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vm, _context: e }, e.Consumer = e;
};
ae.createElement = yc;
ae.createFactory = function(e) {
  var t = yc.bind(null, e);
  return t.type = e, t;
};
ae.createRef = function() {
  return { current: null };
};
ae.forwardRef = function(e) {
  return { $$typeof: xm, render: e };
};
ae.isValidElement = Ya;
ae.lazy = function(e) {
  return { $$typeof: Sm, _payload: { _status: -1, _result: e }, _init: Cm };
};
ae.memo = function(e, t) {
  return { $$typeof: km, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function(e) {
  var t = _l.transition;
  _l.transition = {};
  try {
    e();
  } finally {
    _l.transition = t;
  }
};
ae.unstable_act = vc;
ae.useCallback = function(e, t) {
  return Ye.current.useCallback(e, t);
};
ae.useContext = function(e) {
  return Ye.current.useContext(e);
};
ae.useDebugValue = function() {
};
ae.useDeferredValue = function(e) {
  return Ye.current.useDeferredValue(e);
};
ae.useEffect = function(e, t) {
  return Ye.current.useEffect(e, t);
};
ae.useId = function() {
  return Ye.current.useId();
};
ae.useImperativeHandle = function(e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function(e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function(e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
ae.useMemo = function(e, t) {
  return Ye.current.useMemo(e, t);
};
ae.useReducer = function(e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
ae.useRef = function(e) {
  return Ye.current.useRef(e);
};
ae.useState = function(e) {
  return Ye.current.useState(e);
};
ae.useSyncExternalStore = function(e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function() {
  return Ye.current.useTransition();
};
ae.version = "18.3.1";
dc.exports = ae;
var p = dc.exports;
const Xt = /* @__PURE__ */ fm(p);
var wc = { exports: {} }, ut = {}, xc = { exports: {} }, _c = {};
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
  function t(N, L) {
    var $ = N.length;
    N.push(L);
    e: for (; 0 < $; ) {
      var M = $ - 1 >>> 1, B = N[M];
      if (0 < s(B, L)) N[M] = L, N[$] = B, $ = M;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0], $ = N.pop();
    if ($ !== L) {
      N[0] = $;
      e: for (var M = 0, B = N.length, ce = B >>> 1; M < ce; ) {
        var Q = 2 * (M + 1) - 1, re = N[Q], q = Q + 1, me = N[q];
        if (0 > s(re, $)) q < B && 0 > s(me, re) ? (N[M] = me, N[q] = $, M = q) : (N[M] = re, N[Q] = $, M = Q);
        else if (q < B && 0 > s(me, $)) N[M] = me, N[q] = $, M = q;
        else break e;
      }
    }
    return L;
  }
  function s(N, L) {
    var $ = N.sortIndex - L.sortIndex;
    return $ !== 0 ? $ : N.id - L.id;
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
  var c = [], u = [], h = 1, v = null, w = 3, x = !1, g = !1, k = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N) r(u), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(u);
    }
  }
  function y(N) {
    if (k = !1, f(N), !g) if (n(c) !== null) g = !0, P(_);
    else {
      var L = n(u);
      L !== null && T(y, L.startTime - N);
    }
  }
  function _(N, L) {
    g = !1, k && (k = !1, m(C), C = -1), x = !0;
    var $ = w;
    try {
      for (f(L), v = n(c); v !== null && (!(v.expirationTime > L) || N && !I()); ) {
        var M = v.callback;
        if (typeof M == "function") {
          v.callback = null, w = v.priorityLevel;
          var B = M(v.expirationTime <= L);
          L = e.unstable_now(), typeof B == "function" ? v.callback = B : v === n(c) && r(c), f(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var ce = !0;
      else {
        var Q = n(u);
        Q !== null && T(y, Q.startTime - L), ce = !1;
      }
      return ce;
    } finally {
      v = null, w = $, x = !1;
    }
  }
  var j = !1, b = null, C = -1, A = 5, D = -1;
  function I() {
    return !(e.unstable_now() - D < A);
  }
  function W() {
    if (b !== null) {
      var N = e.unstable_now();
      D = N;
      var L = !0;
      try {
        L = b(!0, N);
      } finally {
        L ? J() : (j = !1, b = null);
      }
    } else j = !1;
  }
  var J;
  if (typeof d == "function") J = function() {
    d(W);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), R = E.port2;
    E.port1.onmessage = W, J = function() {
      R.postMessage(null);
    };
  } else J = function() {
    S(W, 0);
  };
  function P(N) {
    b = N, j || (j = !0, J());
  }
  function T(N, L) {
    C = S(function() {
      N(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    g || x || (g = !0, P(_));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(N) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = w;
    }
    var $ = w;
    w = L;
    try {
      return N();
    } finally {
      w = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, L) {
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
    var $ = w;
    w = N;
    try {
      return L();
    } finally {
      w = $;
    }
  }, e.unstable_scheduleCallback = function(N, L, $) {
    var M = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? M + $ : M) : $ = M, N) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = $ + B, N = { id: h++, callback: L, priorityLevel: N, startTime: $, expirationTime: B, sortIndex: -1 }, $ > M ? (N.sortIndex = $, t(u, N), n(c) === null && N === n(u) && (k ? (m(C), C = -1) : k = !0, T(y, $ - M))) : (N.sortIndex = B, t(c, N), g || x || (g = !0, P(_))), N;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(N) {
    var L = w;
    return function() {
      var $ = w;
      w = L;
      try {
        return N.apply(this, arguments);
      } finally {
        w = $;
      }
    };
  };
})(_c);
xc.exports = _c;
var Mm = xc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im = p, dt = Mm;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var kc = /* @__PURE__ */ new Set(), Er = {};
function Cn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++) kc.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ys = Object.prototype.hasOwnProperty, Tm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Jo = {}, Zo = {};
function Lm(e) {
  return Ys.call(Zo, e) ? !0 : Ys.call(Jo, e) ? !1 : Tm.test(e) ? Zo[e] = !0 : (Jo[e] = !0, !1);
}
function Dm(e, t, n, r) {
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
function Pm(e, t, n, r) {
  if (t === null || typeof t > "u" || Dm(e, t, n, r)) return !0;
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
function Xe(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new Xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xa = /[\-:]([a-z])/g;
function Ja(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xa,
    Ja
  );
  $e[t] = new Xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xa, Ja);
  $e[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xa, Ja);
  $e[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Za(e, t, n, r) {
  var s = $e.hasOwnProperty(t) ? $e[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pm(t, n, s, r) && (n = null), r || s === null ? Lm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tl = Symbol.for("react.element"), In = Symbol.for("react.portal"), Tn = Symbol.for("react.fragment"), eo = Symbol.for("react.strict_mode"), Xs = Symbol.for("react.profiler"), Sc = Symbol.for("react.provider"), jc = Symbol.for("react.context"), to = Symbol.for("react.forward_ref"), Js = Symbol.for("react.suspense"), Zs = Symbol.for("react.suspense_list"), no = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), bc = Symbol.for("react.offscreen"), ei = Symbol.iterator;
function or(e) {
  return e === null || typeof e != "object" ? null : (e = ei && e[ei] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ne = Object.assign, js;
function hr(e) {
  if (js === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    js = t && t[1] || "";
  }
  return `
` + js + e;
}
var bs = !1;
function Ns(e, t) {
  if (!e || bs) return "";
  bs = !0;
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
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var s = u.stack.split(`
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
    bs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Rm(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ns(e.type, !1), e;
    case 11:
      return e = Ns(e.type.render, !1), e;
    case 1:
      return e = Ns(e.type, !0), e;
    default:
      return "";
  }
}
function ea(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case In:
      return "Portal";
    case Xs:
      return "Profiler";
    case eo:
      return "StrictMode";
    case Js:
      return "Suspense";
    case Zs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case jc:
      return (e.displayName || "Context") + ".Consumer";
    case Sc:
      return (e._context.displayName || "Context") + ".Provider";
    case to:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case no:
      return t = e.displayName || null, t !== null ? t : ea(e.type) || "Memo";
    case Kt:
      t = e._payload, e = e._init;
      try {
        return ea(e(t));
      } catch {
      }
  }
  return null;
}
function Om(e) {
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
      return ea(t);
    case 8:
      return t === eo ? "StrictMode" : "Mode";
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
function cn(e) {
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
function Nc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Am(e) {
  var t = Nc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function nl(e) {
  e._valueTracker || (e._valueTracker = Am(e));
}
function Cc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Nc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Dl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, t) {
  var n = t.checked;
  return Ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ti(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ec(e, t) {
  t = t.checked, t != null && Za(e, "checked", t, !1);
}
function na(e, t) {
  Ec(e, t);
  var n = cn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ra(e, t.type, n) : t.hasOwnProperty("defaultValue") && ra(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ni(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ra(e, t, n) {
  (t !== "number" || Dl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Un(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function la(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ri(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(F(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Mc(e, t) {
  var n = cn(t.value), r = cn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function li(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ic(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ic(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rl, Tc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (rl = rl || document.createElement("div"), rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = rl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
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
}, zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function(e) {
  zm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
  });
});
function Lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
}
function Dc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Lc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Fm = Ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function aa(e, t) {
  if (t) {
    if (Fm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function oa(e, t) {
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
var ia = null;
function ro(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ca = null, Qn = null, Vn = null;
function si(e) {
  if (e = Jr(e)) {
    if (typeof ca != "function") throw Error(F(280));
    var t = e.stateNode;
    t && (t = cs(t), ca(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  Qn ? Vn ? Vn.push(e) : Vn = [e] : Qn = e;
}
function Rc() {
  if (Qn) {
    var e = Qn, t = Vn;
    if (Vn = Qn = null, si(e), t) for (e = 0; e < t.length; e++) si(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Ac() {
}
var Cs = !1;
function zc(e, t, n) {
  if (Cs) return e(t, n);
  Cs = !0;
  try {
    return Oc(e, t, n);
  } finally {
    Cs = !1, (Qn !== null || Vn !== null) && (Ac(), Rc());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cs(n);
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
var da = !1;
if (Wt) try {
  var ir = {};
  Object.defineProperty(ir, "passive", { get: function() {
    da = !0;
  } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
} catch {
  da = !1;
}
function Wm(e, t, n, r, s, a, o, i, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var xr = !1, Pl = null, Rl = !1, ua = null, $m = { onError: function(e) {
  xr = !0, Pl = e;
} };
function Um(e, t, n, r, s, a, o, i, c) {
  xr = !1, Pl = null, Wm.apply($m, arguments);
}
function Qm(e, t, n, r, s, a, o, i, c) {
  if (Um.apply(this, arguments), xr) {
    if (xr) {
      var u = Pl;
      xr = !1, Pl = null;
    } else throw Error(F(198));
    Rl || (Rl = !0, ua = u);
  }
}
function En(e) {
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
function Fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ai(e) {
  if (En(e) !== e) throw Error(F(188));
}
function Vm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = En(e), t === null) throw Error(F(188));
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
        if (a === n) return ai(s), e;
        if (a === r) return ai(s), t;
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
function Wc(e) {
  return e = Vm(e), e !== null ? $c(e) : null;
}
function $c(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $c(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uc = dt.unstable_scheduleCallback, oi = dt.unstable_cancelCallback, Bm = dt.unstable_shouldYield, Hm = dt.unstable_requestPaint, Ie = dt.unstable_now, Km = dt.unstable_getCurrentPriorityLevel, lo = dt.unstable_ImmediatePriority, Qc = dt.unstable_UserBlockingPriority, Ol = dt.unstable_NormalPriority, Gm = dt.unstable_LowPriority, Vc = dt.unstable_IdlePriority, ss = null, Lt = null;
function qm(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
    Lt.onCommitFiberRoot(ss, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Nt = Math.clz32 ? Math.clz32 : Jm, Ym = Math.log, Xm = Math.LN2;
function Jm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ym(e) / Xm | 0) | 0;
}
var ll = 64, sl = 4194304;
function yr(e) {
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
function Al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = yr(i) : (a &= o, a !== 0 && (r = yr(a)));
  } else o = n & ~s, o !== 0 ? r = yr(o) : a !== 0 && (r = yr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Nt(t), s = 1 << n, r |= e[n], t &= ~s;
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
function ef(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - Nt(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = Zm(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function ma(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bc() {
  var e = ll;
  return ll <<= 1, !(ll & 4194240) && (ll = 64), e;
}
function Es(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = n;
}
function tf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Nt(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function so(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var ue = 0;
function Hc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Kc, ao, Gc, qc, Yc, fa = !1, al = [], en = null, tn = null, nn = null, Tr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), qt = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ii(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Jr(t), t !== null && ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function rf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return en = cr(en, e, t, n, r, s), !0;
    case "dragenter":
      return tn = cr(tn, e, t, n, r, s), !0;
    case "mouseover":
      return nn = cr(nn, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Tr.set(a, cr(Tr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Lr.set(a, cr(Lr.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Xc(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = En(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fc(n), t !== null) {
          e.blockedOn = t, Yc(e.priority, function() {
            Gc(n);
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
function kl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ia = r, n.target.dispatchEvent(r), ia = null;
    } else return t = Jr(n), t !== null && ao(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ci(e, t, n) {
  kl(e) && n.delete(t);
}
function lf() {
  fa = !1, en !== null && kl(en) && (en = null), tn !== null && kl(tn) && (tn = null), nn !== null && kl(nn) && (nn = null), Tr.forEach(ci), Lr.forEach(ci);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, fa || (fa = !0, dt.unstable_scheduleCallback(dt.unstable_NormalPriority, lf)));
}
function Dr(e) {
  function t(s) {
    return dr(s, e);
  }
  if (0 < al.length) {
    dr(al[0], e);
    for (var n = 1; n < al.length; n++) {
      var r = al[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && dr(en, e), tn !== null && dr(tn, e), nn !== null && dr(nn, e), Tr.forEach(t), Lr.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) Xc(n), n.blockedOn === null && qt.shift();
}
var Bn = Bt.ReactCurrentBatchConfig, zl = !0;
function sf(e, t, n, r) {
  var s = ue, a = Bn.transition;
  Bn.transition = null;
  try {
    ue = 1, oo(e, t, n, r);
  } finally {
    ue = s, Bn.transition = a;
  }
}
function af(e, t, n, r) {
  var s = ue, a = Bn.transition;
  Bn.transition = null;
  try {
    ue = 4, oo(e, t, n, r);
  } finally {
    ue = s, Bn.transition = a;
  }
}
function oo(e, t, n, r) {
  if (zl) {
    var s = pa(e, t, n, r);
    if (s === null) zs(e, t, r, Fl, n), ii(e, r);
    else if (rf(s, e, t, n, r)) r.stopPropagation();
    else if (ii(e, r), t & 4 && -1 < nf.indexOf(e)) {
      for (; s !== null; ) {
        var a = Jr(s);
        if (a !== null && Kc(a), a = pa(e, t, n, r), a === null && zs(e, t, r, Fl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var Fl = null;
function pa(e, t, n, r) {
  if (Fl = null, e = ro(r), e = gn(e), e !== null) if (t = En(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Fl = e, null;
}
function Jc(e) {
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
      switch (Km()) {
        case lo:
          return 1;
        case Qc:
          return 4;
        case Ol:
        case Gm:
          return 16;
        case Vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null, io = null, Sl = null;
function Zc() {
  if (Sl) return Sl;
  var e, t = io, n = t.length, r, s = "value" in Jt ? Jt.value : Jt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Sl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function jl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ol() {
  return !0;
}
function di() {
  return !1;
}
function mt(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ol : di, this.isPropagationStopped = di, this;
  }
  return Ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ol);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ol);
  }, persist: function() {
  }, isPersistent: ol }), t;
}
var rr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, co = mt(rr), Xr = Ne({}, rr, { view: 0, detail: 0 }), of = mt(Xr), Ms, Is, ur, as = Ne({}, Xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? (Ms = e.screenX - ur.screenX, Is = e.screenY - ur.screenY) : Is = Ms = 0, ur = e), Ms);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Is;
} }), ui = mt(as), cf = Ne({}, as, { dataTransfer: 0 }), df = mt(cf), uf = Ne({}, Xr, { relatedTarget: 0 }), Ts = mt(uf), mf = Ne({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = mt(mf), pf = Ne({}, rr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hf = mt(pf), gf = Ne({}, rr, { data: 0 }), mi = mt(gf), yf = {
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
}, vf = {
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
}, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
}
function uo() {
  return xf;
}
var _f = Ne({}, Xr, { key: function(e) {
  if (e.key) {
    var t = yf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = jl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uo, charCode: function(e) {
  return e.type === "keypress" ? jl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kf = mt(_f), Sf = Ne({}, as, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fi = mt(Sf), jf = Ne({}, Xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uo }), bf = mt(jf), Nf = Ne({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = mt(Nf), Ef = Ne({}, as, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Mf = mt(Ef), If = [9, 13, 27, 32], mo = Wt && "CompositionEvent" in window, _r = null;
Wt && "documentMode" in document && (_r = document.documentMode);
var Tf = Wt && "TextEvent" in window && !_r, ed = Wt && (!mo || _r && 8 < _r && 11 >= _r), pi = " ", hi = !1;
function td(e, t) {
  switch (e) {
    case "keyup":
      return If.indexOf(t.keyCode) !== -1;
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
function nd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return nd(t);
    case "keypress":
      return t.which !== 32 ? null : (hi = !0, pi);
    case "textInput":
      return e = t.data, e === pi && hi ? null : e;
    default:
      return null;
  }
}
function Df(e, t) {
  if (Ln) return e === "compositionend" || !mo && td(e, t) ? (e = Zc(), Sl = io = Jt = null, Ln = !1, e) : null;
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
      return ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pf[e.type] : t === "textarea";
}
function rd(e, t, n, r) {
  Pc(r), t = Wl(t, "onChange"), 0 < t.length && (n = new co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var kr = null, Pr = null;
function Rf(e) {
  pd(e, 0);
}
function os(e) {
  var t = Rn(e);
  if (Cc(t)) return e;
}
function Of(e, t) {
  if (e === "change") return t;
}
var ld = !1;
if (Wt) {
  var Ls;
  if (Wt) {
    var Ds = "oninput" in document;
    if (!Ds) {
      var yi = document.createElement("div");
      yi.setAttribute("oninput", "return;"), Ds = typeof yi.oninput == "function";
    }
    Ls = Ds;
  } else Ls = !1;
  ld = Ls && (!document.documentMode || 9 < document.documentMode);
}
function vi() {
  kr && (kr.detachEvent("onpropertychange", sd), Pr = kr = null);
}
function sd(e) {
  if (e.propertyName === "value" && os(Pr)) {
    var t = [];
    rd(t, Pr, e, ro(e)), zc(Rf, t);
  }
}
function Af(e, t, n) {
  e === "focusin" ? (vi(), kr = t, Pr = n, kr.attachEvent("onpropertychange", sd)) : e === "focusout" && vi();
}
function zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return os(Pr);
}
function Ff(e, t) {
  if (e === "click") return os(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change") return os(t);
}
function $f(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Et = typeof Object.is == "function" ? Object.is : $f;
function Rr(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ys.call(t, s) || !Et(e[s], t[s])) return !1;
  }
  return !0;
}
function wi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xi(e, t) {
  var n = wi(e);
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
    n = wi(n);
  }
}
function ad(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ad(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function od() {
  for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dl(e.document);
  }
  return t;
}
function fo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Uf(e) {
  var t = od(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ad(n.ownerDocument.documentElement, n)) {
    if (r !== null && fo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = xi(n, a);
        var o = xi(
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
var Qf = Wt && "documentMode" in document && 11 >= document.documentMode, Dn = null, ha = null, Sr = null, ga = !1;
function _i(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga || Dn == null || Dn !== Dl(r) || (r = Dn, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sr && Rr(Sr, r) || (Sr = r, r = Wl(ha, "onSelect"), 0 < r.length && (t = new co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
}
function il(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: il("Animation", "AnimationEnd"), animationiteration: il("Animation", "AnimationIteration"), animationstart: il("Animation", "AnimationStart"), transitionend: il("Transition", "TransitionEnd") }, Ps = {}, id = {};
Wt && (id = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function is(e) {
  if (Ps[e]) return Ps[e];
  if (!Pn[e]) return e;
  var t = Pn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in id) return Ps[e] = t[n];
  return e;
}
var cd = is("animationend"), dd = is("animationiteration"), ud = is("animationstart"), md = is("transitionend"), fd = /* @__PURE__ */ new Map(), ki = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  fd.set(e, t), Cn(t, [e]);
}
for (var Rs = 0; Rs < ki.length; Rs++) {
  var Os = ki[Rs], Vf = Os.toLowerCase(), Bf = Os[0].toUpperCase() + Os.slice(1);
  un(Vf, "on" + Bf);
}
un(cd, "onAnimationEnd");
un(dd, "onAnimationIteration");
un(ud, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(md, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function Si(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qm(r, t, void 0, e), e.currentTarget = null;
}
function pd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, u = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Si(s, i, u), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, u = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Si(s, i, u), a = c;
      }
    }
  }
  if (Rl) throw e = ua, Rl = !1, ua = null, e;
}
function xe(e, t) {
  var n = t[_a];
  n === void 0 && (n = t[_a] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hd(t, e, 2, !1), n.add(r));
}
function As(e, t, n) {
  var r = 0;
  t && (r |= 4), hd(n, e, r, t);
}
var cl = "_reactListening" + Math.random().toString(36).slice(2);
function Or(e) {
  if (!e[cl]) {
    e[cl] = !0, kc.forEach(function(n) {
      n !== "selectionchange" && (Hf.has(n) || As(n, !1, e), As(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cl] || (t[cl] = !0, As("selectionchange", !1, t));
  }
}
function hd(e, t, n, r) {
  switch (Jc(t)) {
    case 1:
      var s = sf;
      break;
    case 4:
      s = af;
      break;
    default:
      s = oo;
  }
  n = s.bind(null, t, n, e), s = void 0, !da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, s) {
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
        if (o = gn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  zc(function() {
    var u = a, h = ro(n), v = [];
    e: {
      var w = fd.get(e);
      if (w !== void 0) {
        var x = co, g = e;
        switch (e) {
          case "keypress":
            if (jl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = kf;
            break;
          case "focusin":
            g = "focus", x = Ts;
            break;
          case "focusout":
            g = "blur", x = Ts;
            break;
          case "beforeblur":
          case "afterblur":
            x = Ts;
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
            x = ui;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = bf;
            break;
          case cd:
          case dd:
          case ud:
            x = ff;
            break;
          case md:
            x = Cf;
            break;
          case "scroll":
            x = of;
            break;
          case "wheel":
            x = Mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = fi;
        }
        var k = (t & 4) !== 0, S = !k && e === "scroll", m = k ? w !== null ? w + "Capture" : null : w;
        k = [];
        for (var d = u, f; d !== null; ) {
          f = d;
          var y = f.stateNode;
          if (f.tag === 5 && y !== null && (f = y, m !== null && (y = Ir(d, m), y != null && k.push(Ar(d, y, f)))), S) break;
          d = d.return;
        }
        0 < k.length && (w = new x(w, g, null, n, h), v.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== ia && (g = n.relatedTarget || n.fromElement) && (gn(g) || g[$t])) break e;
        if ((x || w) && (w = h.window === h ? h : (w = h.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (g = n.relatedTarget || n.toElement, x = u, g = g ? gn(g) : null, g !== null && (S = En(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (x = null, g = u), x !== g)) {
          if (k = ui, y = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (k = fi, y = "onPointerLeave", m = "onPointerEnter", d = "pointer"), S = x == null ? w : Rn(x), f = g == null ? w : Rn(g), w = new k(y, d + "leave", x, n, h), w.target = S, w.relatedTarget = f, y = null, gn(h) === u && (k = new k(m, d + "enter", g, n, h), k.target = f, k.relatedTarget = S, y = k), S = y, x && g) t: {
            for (k = x, m = g, d = 0, f = k; f; f = Mn(f)) d++;
            for (f = 0, y = m; y; y = Mn(y)) f++;
            for (; 0 < d - f; ) k = Mn(k), d--;
            for (; 0 < f - d; ) m = Mn(m), f--;
            for (; d--; ) {
              if (k === m || m !== null && k === m.alternate) break t;
              k = Mn(k), m = Mn(m);
            }
            k = null;
          }
          else k = null;
          x !== null && ji(v, w, x, k, !1), g !== null && S !== null && ji(v, S, g, k, !0);
        }
      }
      e: {
        if (w = u ? Rn(u) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var _ = Of;
        else if (gi(w)) if (ld) _ = Wf;
        else {
          _ = zf;
          var j = Af;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (_ = Ff);
        if (_ && (_ = _(e, u))) {
          rd(v, _, n, h);
          break e;
        }
        j && j(e, w, u), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && ra(w, "number", w.value);
      }
      switch (j = u ? Rn(u) : window, e) {
        case "focusin":
          (gi(j) || j.contentEditable === "true") && (Dn = j, ha = u, Sr = null);
          break;
        case "focusout":
          Sr = ha = Dn = null;
          break;
        case "mousedown":
          ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ga = !1, _i(v, n, h);
          break;
        case "selectionchange":
          if (Qf) break;
        case "keydown":
        case "keyup":
          _i(v, n, h);
      }
      var b;
      if (mo) e: {
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
      else Ln ? td(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (ed && n.locale !== "ko" && (Ln || C !== "onCompositionStart" ? C === "onCompositionEnd" && Ln && (b = Zc()) : (Jt = h, io = "value" in Jt ? Jt.value : Jt.textContent, Ln = !0)), j = Wl(u, C), 0 < j.length && (C = new mi(C, e, null, n, h), v.push({ event: C, listeners: j }), b ? C.data = b : (b = nd(n), b !== null && (C.data = b)))), (b = Tf ? Lf(e, n) : Df(e, n)) && (u = Wl(u, "onBeforeInput"), 0 < u.length && (h = new mi("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: u }), h.data = b));
    }
    pd(v, t);
  });
}
function Ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Ir(e, n), a != null && r.unshift(Ar(e, a, s)), a = Ir(e, t), a != null && r.push(Ar(e, a, s))), e = e.return;
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ji(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, u = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && u !== null && (i = u, s ? (c = Ir(n, a), c != null && o.unshift(Ar(n, c, i))) : s || (c = Ir(n, a), c != null && o.push(Ar(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Kf = /\r\n?/g, Gf = /\u0000|\uFFFD/g;
function bi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Kf, `
`).replace(Gf, "");
}
function dl(e, t, n) {
  if (t = bi(t), bi(e) !== t && n) throw Error(F(425));
}
function $l() {
}
var ya = null, va = null;
function wa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xa = typeof setTimeout == "function" ? setTimeout : void 0, qf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ni = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ni < "u" ? function(e) {
  return Ni.resolve(null).then(e).catch(Xf);
} : xa;
function Xf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Fs(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Dr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Dr(t);
}
function rn(e) {
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
function Ci(e) {
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
var lr = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + lr, zr = "__reactProps$" + lr, $t = "__reactContainer$" + lr, _a = "__reactEvents$" + lr, Jf = "__reactListeners$" + lr, Zf = "__reactHandles$" + lr;
function gn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[$t] || n[Tt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ci(e); e !== null; ) {
        if (n = e[Tt]) return n;
        e = Ci(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Jr(e) {
  return e = e[Tt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function cs(e) {
  return e[zr] || null;
}
var ka = [], On = -1;
function mn(e) {
  return { current: e };
}
function _e(e) {
  0 > On || (e.current = ka[On], ka[On] = null, On--);
}
function ve(e, t) {
  On++, ka[On] = e.current, e.current = t;
}
var dn = {}, Ke = mn(dn), et = mn(!1), _n = dn;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function tt(e) {
  return e = e.childContextTypes, e != null;
}
function Ul() {
  _e(et), _e(Ke);
}
function Ei(e, t, n) {
  if (Ke.current !== dn) throw Error(F(168));
  ve(Ke, t), ve(et, n);
}
function gd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(F(108, Om(e) || "Unknown", s));
  return Ne({}, n, r);
}
function Ql(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, _n = Ke.current, ve(Ke, e), ve(et, et.current), !0;
}
function Mi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n ? (e = gd(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, _e(et), _e(Ke), ve(Ke, e)) : _e(et), ve(et, n);
}
var Ot = null, ds = !1, Ws = !1;
function yd(e) {
  Ot === null ? Ot = [e] : Ot.push(e);
}
function ep(e) {
  ds = !0, yd(e);
}
function fn() {
  if (!Ws && Ot !== null) {
    Ws = !0;
    var e = 0, t = ue;
    try {
      var n = Ot;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ot = null, ds = !1;
    } catch (s) {
      throw Ot !== null && (Ot = Ot.slice(e + 1)), Uc(lo, fn), s;
    } finally {
      ue = t, Ws = !1;
    }
  }
  return null;
}
var An = [], zn = 0, Vl = null, Bl = 0, ft = [], pt = 0, kn = null, At = 1, zt = "";
function pn(e, t) {
  An[zn++] = Bl, An[zn++] = Vl, Vl = e, Bl = t;
}
function vd(e, t, n) {
  ft[pt++] = At, ft[pt++] = zt, ft[pt++] = kn, kn = e;
  var r = At;
  e = zt;
  var s = 32 - Nt(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - Nt(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, At = 1 << 32 - Nt(t) + s | n << s | r, zt = a + e;
  } else At = 1 << a | n << s | r, zt = e;
}
function po(e) {
  e.return !== null && (pn(e, 1), vd(e, 1, 0));
}
function ho(e) {
  for (; e === Vl; ) Vl = An[--zn], An[zn] = null, Bl = An[--zn], An[zn] = null;
  for (; e === kn; ) kn = ft[--pt], ft[pt] = null, zt = ft[--pt], ft[pt] = null, At = ft[--pt], ft[pt] = null;
}
var ct = null, it = null, Se = !1, jt = null;
function wd(e, t) {
  var n = ht(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ii(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, it = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, it = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kn !== null ? { id: At, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ct = e, it = null, !0) : !1;
    default:
      return !1;
  }
}
function Sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ja(e) {
  if (Se) {
    var t = it;
    if (t) {
      var n = t;
      if (!Ii(e, t)) {
        if (Sa(e)) throw Error(F(418));
        t = rn(n.nextSibling);
        var r = ct;
        t && Ii(e, t) ? wd(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, ct = e);
      }
    } else {
      if (Sa(e)) throw Error(F(418));
      e.flags = e.flags & -4097 | 2, Se = !1, ct = e;
    }
  }
}
function Ti(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ct = e;
}
function ul(e) {
  if (e !== ct) return !1;
  if (!Se) return Ti(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps)), t && (t = it)) {
    if (Sa(e)) throw xd(), Error(F(418));
    for (; t; ) wd(e, t), t = rn(t.nextSibling);
  }
  if (Ti(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ct ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function xd() {
  for (var e = it; e; ) e = rn(e.nextSibling);
}
function Yn() {
  it = ct = null, Se = !1;
}
function go(e) {
  jt === null ? jt = [e] : jt.push(e);
}
var tp = Bt.ReactCurrentBatchConfig;
function mr(e, t, n) {
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
function ml(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Li(e) {
  var t = e._init;
  return t(e._payload);
}
function _d(e) {
  function t(m, d) {
    if (e) {
      var f = m.deletions;
      f === null ? (m.deletions = [d], m.flags |= 16) : f.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), d = d.sibling;
    return null;
  }
  function r(m, d) {
    for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
    return m;
  }
  function s(m, d) {
    return m = on(m, d), m.index = 0, m.sibling = null, m;
  }
  function a(m, d, f) {
    return m.index = f, e ? (f = m.alternate, f !== null ? (f = f.index, f < d ? (m.flags |= 2, d) : f) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, d, f, y) {
    return d === null || d.tag !== 6 ? (d = Ks(f, m.mode, y), d.return = m, d) : (d = s(d, f), d.return = m, d);
  }
  function c(m, d, f, y) {
    var _ = f.type;
    return _ === Tn ? h(m, d, f.props.children, y, f.key) : d !== null && (d.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kt && Li(_) === d.type) ? (y = s(d, f.props), y.ref = mr(m, d, f), y.return = m, y) : (y = Tl(f.type, f.key, f.props, null, m.mode, y), y.ref = mr(m, d, f), y.return = m, y);
  }
  function u(m, d, f, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== f.containerInfo || d.stateNode.implementation !== f.implementation ? (d = Gs(f, m.mode, y), d.return = m, d) : (d = s(d, f.children || []), d.return = m, d);
  }
  function h(m, d, f, y, _) {
    return d === null || d.tag !== 7 ? (d = xn(f, m.mode, y, _), d.return = m, d) : (d = s(d, f), d.return = m, d);
  }
  function v(m, d, f) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ks("" + d, m.mode, f), d.return = m, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tl:
          return f = Tl(d.type, d.key, d.props, null, m.mode, f), f.ref = mr(m, null, d), f.return = m, f;
        case In:
          return d = Gs(d, m.mode, f), d.return = m, d;
        case Kt:
          var y = d._init;
          return v(m, y(d._payload), f);
      }
      if (gr(d) || or(d)) return d = xn(d, m.mode, f, null), d.return = m, d;
      ml(m, d);
    }
    return null;
  }
  function w(m, d, f, y) {
    var _ = d !== null ? d.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return _ !== null ? null : i(m, d, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case tl:
          return f.key === _ ? c(m, d, f, y) : null;
        case In:
          return f.key === _ ? u(m, d, f, y) : null;
        case Kt:
          return _ = f._init, w(
            m,
            d,
            _(f._payload),
            y
          );
      }
      if (gr(f) || or(f)) return _ !== null ? null : h(m, d, f, y, null);
      ml(m, f);
    }
    return null;
  }
  function x(m, d, f, y, _) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return m = m.get(f) || null, i(d, m, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case tl:
          return m = m.get(y.key === null ? f : y.key) || null, c(d, m, y, _);
        case In:
          return m = m.get(y.key === null ? f : y.key) || null, u(d, m, y, _);
        case Kt:
          var j = y._init;
          return x(m, d, f, j(y._payload), _);
      }
      if (gr(y) || or(y)) return m = m.get(f) || null, h(d, m, y, _, null);
      ml(d, y);
    }
    return null;
  }
  function g(m, d, f, y) {
    for (var _ = null, j = null, b = d, C = d = 0, A = null; b !== null && C < f.length; C++) {
      b.index > C ? (A = b, b = null) : A = b.sibling;
      var D = w(m, b, f[C], y);
      if (D === null) {
        b === null && (b = A);
        break;
      }
      e && b && D.alternate === null && t(m, b), d = a(D, d, C), j === null ? _ = D : j.sibling = D, j = D, b = A;
    }
    if (C === f.length) return n(m, b), Se && pn(m, C), _;
    if (b === null) {
      for (; C < f.length; C++) b = v(m, f[C], y), b !== null && (d = a(b, d, C), j === null ? _ = b : j.sibling = b, j = b);
      return Se && pn(m, C), _;
    }
    for (b = r(m, b); C < f.length; C++) A = x(b, m, C, f[C], y), A !== null && (e && A.alternate !== null && b.delete(A.key === null ? C : A.key), d = a(A, d, C), j === null ? _ = A : j.sibling = A, j = A);
    return e && b.forEach(function(I) {
      return t(m, I);
    }), Se && pn(m, C), _;
  }
  function k(m, d, f, y) {
    var _ = or(f);
    if (typeof _ != "function") throw Error(F(150));
    if (f = _.call(f), f == null) throw Error(F(151));
    for (var j = _ = null, b = d, C = d = 0, A = null, D = f.next(); b !== null && !D.done; C++, D = f.next()) {
      b.index > C ? (A = b, b = null) : A = b.sibling;
      var I = w(m, b, D.value, y);
      if (I === null) {
        b === null && (b = A);
        break;
      }
      e && b && I.alternate === null && t(m, b), d = a(I, d, C), j === null ? _ = I : j.sibling = I, j = I, b = A;
    }
    if (D.done) return n(
      m,
      b
    ), Se && pn(m, C), _;
    if (b === null) {
      for (; !D.done; C++, D = f.next()) D = v(m, D.value, y), D !== null && (d = a(D, d, C), j === null ? _ = D : j.sibling = D, j = D);
      return Se && pn(m, C), _;
    }
    for (b = r(m, b); !D.done; C++, D = f.next()) D = x(b, m, C, D.value, y), D !== null && (e && D.alternate !== null && b.delete(D.key === null ? C : D.key), d = a(D, d, C), j === null ? _ = D : j.sibling = D, j = D);
    return e && b.forEach(function(W) {
      return t(m, W);
    }), Se && pn(m, C), _;
  }
  function S(m, d, f, y) {
    if (typeof f == "object" && f !== null && f.type === Tn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case tl:
          e: {
            for (var _ = f.key, j = d; j !== null; ) {
              if (j.key === _) {
                if (_ = f.type, _ === Tn) {
                  if (j.tag === 7) {
                    n(m, j.sibling), d = s(j, f.props.children), d.return = m, m = d;
                    break e;
                  }
                } else if (j.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Kt && Li(_) === j.type) {
                  n(m, j.sibling), d = s(j, f.props), d.ref = mr(m, j, f), d.return = m, m = d;
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            f.type === Tn ? (d = xn(f.props.children, m.mode, y, f.key), d.return = m, m = d) : (y = Tl(f.type, f.key, f.props, null, m.mode, y), y.ref = mr(m, d, f), y.return = m, m = y);
          }
          return o(m);
        case In:
          e: {
            for (j = f.key; d !== null; ) {
              if (d.key === j) if (d.tag === 4 && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                n(m, d.sibling), d = s(d, f.children || []), d.return = m, m = d;
                break e;
              } else {
                n(m, d);
                break;
              }
              else t(m, d);
              d = d.sibling;
            }
            d = Gs(f, m.mode, y), d.return = m, m = d;
          }
          return o(m);
        case Kt:
          return j = f._init, S(m, d, j(f._payload), y);
      }
      if (gr(f)) return g(m, d, f, y);
      if (or(f)) return k(m, d, f, y);
      ml(m, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, d !== null && d.tag === 6 ? (n(m, d.sibling), d = s(d, f), d.return = m, m = d) : (n(m, d), d = Ks(f, m.mode, y), d.return = m, m = d), o(m)) : n(m, d);
  }
  return S;
}
var Xn = _d(!0), kd = _d(!1), Hl = mn(null), Kl = null, Fn = null, yo = null;
function vo() {
  yo = Fn = Kl = null;
}
function wo(e) {
  var t = Hl.current;
  _e(Hl), e._currentValue = t;
}
function ba(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Hn(e, t) {
  Kl = e, yo = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
}
function yt(e) {
  var t = e._currentValue;
  if (yo !== e) if (e = { context: e, memoizedValue: t, next: null }, Fn === null) {
    if (Kl === null) throw Error(F(308));
    Fn = e, Kl.dependencies = { lanes: 0, firstContext: e };
  } else Fn = Fn.next = e;
  return t;
}
var yn = null;
function xo(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function Sd(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, xo(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ut(e, r);
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function _o(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, de & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ut(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, xo(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ut(e, n);
}
function bl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, so(e, n);
  }
}
function Di(e, t) {
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
function Gl(e, t, n, r) {
  var s = e.updateQueue;
  Gt = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, u = c.next;
    c.next = null, o === null ? a = u : o.next = u, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = u : i.next = u, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, h = u = c = null, i = a;
    do {
      var w = i.lane, x = i.eventTime;
      if ((r & w) === w) {
        h !== null && (h = h.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var g = e, k = i;
          switch (w = t, x = n, k.tag) {
            case 1:
              if (g = k.payload, typeof g == "function") {
                v = g.call(x, v, w);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = k.payload, w = typeof g == "function" ? g.call(x, v, w) : g, w == null) break e;
              v = Ne({}, v, w);
              break e;
            case 2:
              Gt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else x = { eventTime: x, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (u = h = x, c = v) : h = h.next = x, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    jn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Pi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(F(191, s));
      s.call(r);
    }
  }
}
var Zr = {}, Dt = mn(Zr), Fr = mn(Zr), Wr = mn(Zr);
function vn(e) {
  if (e === Zr) throw Error(F(174));
  return e;
}
function ko(e, t) {
  switch (ve(Wr, t), ve(Fr, e), ve(Dt, Zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = sa(t, e);
  }
  _e(Dt), ve(Dt, t);
}
function Jn() {
  _e(Dt), _e(Fr), _e(Wr);
}
function bd(e) {
  vn(Wr.current);
  var t = vn(Dt.current), n = sa(t, e.type);
  t !== n && (ve(Fr, e), ve(Dt, n));
}
function So(e) {
  Fr.current === e && (_e(Dt), _e(Fr));
}
var je = mn(0);
function ql(e) {
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
var $s = [];
function jo() {
  for (var e = 0; e < $s.length; e++) $s[e]._workInProgressVersionPrimary = null;
  $s.length = 0;
}
var Nl = Bt.ReactCurrentDispatcher, Us = Bt.ReactCurrentBatchConfig, Sn = 0, be = null, Re = null, Ae = null, Yl = !1, jr = !1, $r = 0, np = 0;
function Ve() {
  throw Error(F(321));
}
function bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, s, a) {
  if (Sn = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nl.current = e === null || e.memoizedState === null ? ap : op, e = n(r, s), jr) {
    a = 0;
    do {
      if (jr = !1, $r = 0, 25 <= a) throw Error(F(301));
      a += 1, Ae = Re = null, t.updateQueue = null, Nl.current = ip, e = n(r, s);
    } while (jr);
  }
  if (Nl.current = Xl, t = Re !== null && Re.next !== null, Sn = 0, Ae = Re = be = null, Yl = !1, t) throw Error(F(300));
  return e;
}
function Co() {
  var e = $r !== 0;
  return $r = 0, e;
}
function It() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ae === null ? be.memoizedState = Ae = e : Ae = Ae.next = e, Ae;
}
function vt() {
  if (Re === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Ae === null ? be.memoizedState : Ae.next;
  if (t !== null) Ae = t, Re = e;
  else {
    if (e === null) throw Error(F(310));
    Re = e, e = { memoizedState: Re.memoizedState, baseState: Re.baseState, baseQueue: Re.baseQueue, queue: Re.queue, next: null }, Ae === null ? be.memoizedState = Ae = e : Ae = Ae.next = e;
  }
  return Ae;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qs(e) {
  var t = vt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Re, s = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      s.next = a.next, a.next = o;
    }
    r.baseQueue = s = a, n.pending = null;
  }
  if (s !== null) {
    a = s.next, r = r.baseState;
    var i = o = null, c = null, u = a;
    do {
      var h = u.lane;
      if ((Sn & h) === h) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var v = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, be.lanes |= h, jn |= h;
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? o = r : c.next = i, Et(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, be.lanes |= a, jn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vs(e) {
  var t = vt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    Et(a, t.memoizedState) || (Ze = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Nd() {
}
function Cd(e, t) {
  var n = be, r = vt(), s = t(), a = !Et(r.memoizedState, s);
  if (a && (r.memoizedState = s, Ze = !0), r = r.queue, Eo(Id.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ae !== null && Ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, Qr(9, Md.bind(null, n, r, s, t), void 0, null), ze === null) throw Error(F(349));
    Sn & 30 || Ed(n, t, s);
  }
  return s;
}
function Ed(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Md(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Td(t) && Ld(e);
}
function Id(e, t, n) {
  return n(function() {
    Td(t) && Ld(e);
  });
}
function Td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function Ld(e) {
  var t = Ut(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Ri(e) {
  var t = It();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ur, lastRenderedState: e }, t.queue = e, e = e.dispatch = sp.bind(null, be, e), [t.memoizedState, e];
}
function Qr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Dd() {
  return vt().memoizedState;
}
function Cl(e, t, n, r) {
  var s = It();
  be.flags |= e, s.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r);
}
function us(e, t, n, r) {
  var s = vt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Re !== null) {
    var o = Re.memoizedState;
    if (a = o.destroy, r !== null && bo(r, o.deps)) {
      s.memoizedState = Qr(t, n, a, r);
      return;
    }
  }
  be.flags |= e, s.memoizedState = Qr(1 | t, n, a, r);
}
function Oi(e, t) {
  return Cl(8390656, 8, e, t);
}
function Eo(e, t) {
  return us(2048, 8, e, t);
}
function Pd(e, t) {
  return us(4, 2, e, t);
}
function Rd(e, t) {
  return us(4, 4, e, t);
}
function Od(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ad(e, t, n) {
  return n = n != null ? n.concat([e]) : null, us(4, 4, Od.bind(null, t, e), n);
}
function Mo() {
}
function zd(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fd(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Wd(e, t, n) {
  return Sn & 21 ? (Et(n, t) || (n = Bc(), be.lanes |= n, jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
}
function rp(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Us.transition;
  Us.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, Us.transition = r;
  }
}
function $d() {
  return vt().memoizedState;
}
function lp(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ud(e)) Qd(t, n);
  else if (n = Sd(e, t, n, r), n !== null) {
    var s = qe();
    Ct(n, e, r, s), Vd(n, t, r);
  }
}
function sp(e, t, n) {
  var r = an(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ud(e)) Qd(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, Et(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, xo(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = Sd(e, t, s, r), n !== null && (s = qe(), Ct(n, e, r, s), Vd(n, t, r));
  }
}
function Ud(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function Qd(e, t) {
  jr = Yl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Vd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, so(e, n);
  }
}
var Xl = { readContext: yt, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useInsertionEffect: Ve, useLayoutEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useMutableSource: Ve, useSyncExternalStore: Ve, useId: Ve, unstable_isNewReconciler: !1 }, ap = { readContext: yt, useCallback: function(e, t) {
  return It().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yt, useEffect: Oi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(
    4194308,
    4,
    Od.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Cl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Cl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = It();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = It();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lp.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = It();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ri, useDebugValue: Mo, useDeferredValue: function(e) {
  return It().memoizedState = e;
}, useTransition: function() {
  var e = Ri(!1), t = e[0];
  return e = rp.bind(null, e[1]), It().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, s = It();
  if (Se) {
    if (n === void 0) throw Error(F(407));
    n = n();
  } else {
    if (n = t(), ze === null) throw Error(F(349));
    Sn & 30 || Ed(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Oi(Id.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Qr(9, Md.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = It(), t = ze.identifierPrefix;
  if (Se) {
    var n = zt, r = At;
    n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = np++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, op = {
  readContext: yt,
  useCallback: zd,
  useContext: yt,
  useEffect: Eo,
  useImperativeHandle: Ad,
  useInsertionEffect: Pd,
  useLayoutEffect: Rd,
  useMemo: Fd,
  useReducer: Qs,
  useRef: Dd,
  useState: function() {
    return Qs(Ur);
  },
  useDebugValue: Mo,
  useDeferredValue: function(e) {
    var t = vt();
    return Wd(t, Re.memoizedState, e);
  },
  useTransition: function() {
    var e = Qs(Ur)[0], t = vt().memoizedState;
    return [e, t];
  },
  useMutableSource: Nd,
  useSyncExternalStore: Cd,
  useId: $d,
  unstable_isNewReconciler: !1
}, ip = { readContext: yt, useCallback: zd, useContext: yt, useEffect: Eo, useImperativeHandle: Ad, useInsertionEffect: Pd, useLayoutEffect: Rd, useMemo: Fd, useReducer: Vs, useRef: Dd, useState: function() {
  return Vs(Ur);
}, useDebugValue: Mo, useDeferredValue: function(e) {
  var t = vt();
  return Re === null ? t.memoizedState = e : Wd(t, Re.memoizedState, e);
}, useTransition: function() {
  var e = Vs(Ur)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: Nd, useSyncExternalStore: Cd, useId: $d, unstable_isNewReconciler: !1 };
function kt(e, t) {
  if (e && e.defaultProps) {
    t = Ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Na(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? En(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), s = an(e), a = Ft(r, s);
  a.payload = t, n != null && (a.callback = n), t = ln(e, a, s), t !== null && (Ct(t, e, s, r), bl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), s = an(e), a = Ft(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = ln(e, a, s), t !== null && (Ct(t, e, s, r), bl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = qe(), r = an(e), s = Ft(n, r);
  s.tag = 2, t != null && (s.callback = t), t = ln(e, s, r), t !== null && (Ct(t, e, r, n), bl(t, e, r));
} };
function Ai(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Rr(n, r) || !Rr(s, a) : !0;
}
function Bd(e, t, n) {
  var r = !1, s = dn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = yt(a) : (s = tt(t) ? _n : Ke.current, r = t.contextTypes, a = (r = r != null) ? qn(e, s) : dn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function zi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ms.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, _o(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = yt(a) : (a = tt(t) ? _n : Ke.current, s.context = qn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Na(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ms.enqueueReplaceState(s, s.state, null), Gl(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Rm(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Bs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cp = typeof WeakMap == "function" ? WeakMap : Map;
function Hd(e, t, n) {
  n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Zl || (Zl = !0, za = r), Ea(e, t);
  }, n;
}
function Kd(e, t, n) {
  n = Ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      Ea(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ea(e, t), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Fi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cp();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Sp.bind(null, e, t, n), t.then(e, e));
}
function Wi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $i(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, ln(n, t, 1))), n.lanes |= 1), e);
}
var dp = Bt.ReactCurrentOwner, Ze = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? kd(t, null, n, r) : Xn(t, e.child, n, r);
}
function Ui(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Hn(t, s), r = No(e, t, n, r, a, s), n = Co(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Qt(e, t, s)) : (Se && n && po(t), t.flags |= 1, Ge(e, t, r, s), t.child);
}
function Qi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Ao(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Gd(e, t, a, r, s)) : (e = Tl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Rr, n(o, r) && e.ref === t.ref) return Qt(e, t, s);
  }
  return t.flags |= 1, e = on(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Gd(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Rr(a, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (Ze = !0);
    else return t.lanes = e.lanes, Qt(e, t, s);
  }
  return Ma(e, t, n, r, s);
}
function qd(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve($n, ot), ot |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve($n, ot), ot |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ve($n, ot), ot |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ve($n, ot), ot |= r;
  return Ge(e, t, s, n), t.child;
}
function Yd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ma(e, t, n, r, s) {
  var a = tt(n) ? _n : Ke.current;
  return a = qn(t, a), Hn(t, s), n = No(e, t, n, r, a, s), r = Co(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Qt(e, t, s)) : (Se && r && po(t), t.flags |= 1, Ge(e, t, n, s), t.child);
}
function Vi(e, t, n, r, s) {
  if (tt(n)) {
    var a = !0;
    Ql(t);
  } else a = !1;
  if (Hn(t, s), t.stateNode === null) El(e, t), Bd(t, n, r), Ca(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yt(u) : (u = tt(n) ? _n : Ke.current, u = qn(t, u));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== u) && zi(t, o, r, u), Gt = !1;
    var w = t.memoizedState;
    o.state = w, Gl(t, r, o, s), c = t.memoizedState, i !== r || w !== c || et.current || Gt ? (typeof h == "function" && (Na(t, n, h, r), c = t.memoizedState), (i = Gt || Ai(t, n, i, r, w, c, u)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = u, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, jd(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : kt(t.type, i), o.props = u, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = yt(c) : (c = tt(n) ? _n : Ke.current, c = qn(t, c));
    var x = n.getDerivedStateFromProps;
    (h = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && zi(t, o, r, c), Gt = !1, w = t.memoizedState, o.state = w, Gl(t, r, o, s);
    var g = t.memoizedState;
    i !== v || w !== g || et.current || Gt ? (typeof x == "function" && (Na(t, n, x, r), g = t.memoizedState), (u = Gt || Ai(t, n, u, r, w, g, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = c, r = u) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ia(e, t, n, r, a, s);
}
function Ia(e, t, n, r, s, a) {
  Yd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Mi(t, n, !1), Qt(e, t, a);
  r = t.stateNode, dp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Xn(t, e.child, null, a), t.child = Xn(t, null, i, a)) : Ge(e, t, i, a), t.memoizedState = r.state, s && Mi(t, n, !0), t.child;
}
function Xd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ei(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ei(e, t.context, !1), ko(e, t.containerInfo);
}
function Bi(e, t, n, r, s) {
  return Yn(), go(s), t.flags |= 256, Ge(e, t, n, r), t.child;
}
var Ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function La(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jd(e, t, n) {
  var r = t.pendingProps, s = je.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ve(je, s & 1), e === null)
    return ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = hs(o, r, 0, null), e = xn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = La(n), t.memoizedState = Ta, e) : Io(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return up(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = on(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = on(i, a) : (a = xn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? La(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ta, r;
  }
  return a = e.child, e = a.sibling, r = on(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Io(e, t) {
  return t = hs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fl(e, t, n, r) {
  return r !== null && go(r), Xn(t, e.child, null, n), e = Io(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function up(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Bs(Error(F(422))), fl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = hs({ mode: "visible", children: r.children }, s, 0, null), a = xn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Xn(t, e.child, null, o), t.child.memoizedState = La(o), t.memoizedState = Ta, a);
  if (!(t.mode & 1)) return fl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(F(419)), r = Bs(a, r, void 0), fl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ze || i) {
    if (r = ze, r !== null) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ut(e, s), Ct(r, e, s, -1));
    }
    return Oo(), r = Bs(Error(F(421))), fl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jp.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, it = rn(s.nextSibling), ct = t, Se = !0, jt = null, e !== null && (ft[pt++] = At, ft[pt++] = zt, ft[pt++] = kn, At = e.id, zt = e.overflow, kn = t), t = Io(t, r.children), t.flags |= 4096, t);
}
function Hi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ba(e.return, t, n);
}
function Hs(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Zd(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Ge(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Hi(e, n, t);
      else if (e.tag === 19) Hi(e, n, t);
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
  if (ve(je, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ql(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Hs(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && ql(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Hs(t, !0, n, null, a);
      break;
    case "together":
      Hs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function El(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mp(e, t, n) {
  switch (t.tag) {
    case 3:
      Xd(t), Yn();
      break;
    case 5:
      bd(t);
      break;
    case 1:
      tt(t.type) && Ql(t);
      break;
    case 4:
      ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ve(Hl, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ve(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jd(e, t, n) : (ve(je, je.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
      ve(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zd(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ve(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qd(e, t, n);
  }
  return Qt(e, t, n);
}
var eu, Da, tu, nu;
eu = function(e, t) {
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
Da = function() {
};
tu = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, vn(Dt.current);
    var a = null;
    switch (n) {
      case "input":
        s = ta(e, s), r = ta(e, r), a = [];
        break;
      case "select":
        s = Ne({}, s, { value: void 0 }), r = Ne({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = la(e, s), r = la(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $l);
    }
    aa(n, r);
    var o;
    n = null;
    for (u in s) if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
      var i = s[u];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Er.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (i = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== i && (c != null || i != null)) if (u === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Er.hasOwnProperty(u) ? (c != null && u === "onScroll" && xe("scroll", e), a || i === c || (a = [])) : (a = a || []).push(u, c));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
nu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!Se) switch (e.tailMode) {
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
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function fp(e, t, n) {
  var r = t.pendingProps;
  switch (ho(t), t.tag) {
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
      return Be(t), null;
    case 1:
      return tt(t.type) && Ul(), Be(t), null;
    case 3:
      return r = t.stateNode, Jn(), _e(et), _e(Ke), jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && ($a(jt), jt = null))), Da(e, t), Be(t), null;
    case 5:
      So(t);
      var s = vn(Wr.current);
      if (n = t.type, e !== null && t.stateNode != null) tu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Be(t), null;
        }
        if (e = vn(Dt.current), ul(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Tt] = t, r[zr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < vr.length; s++) xe(vr[s], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                r
              ), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              ti(r, a), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, xe("invalid", r);
              break;
            case "textarea":
              ri(r, a), xe("invalid", r);
          }
          aa(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && dl(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && dl(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Er.hasOwnProperty(o) && i != null && o === "onScroll" && xe("scroll", r);
          }
          switch (n) {
            case "input":
              nl(r), ni(r, a, !0);
              break;
            case "textarea":
              nl(r), li(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = $l);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ic(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Tt] = t, e[zr] = r, eu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = oa(n, r), n) {
              case "dialog":
                xe("cancel", e), xe("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < vr.length; s++) xe(vr[s], e);
                s = r;
                break;
              case "source":
                xe("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), s = r;
                break;
              case "details":
                xe("toggle", e), s = r;
                break;
              case "input":
                ti(e, r), s = ta(e, r), xe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ne({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                ri(e, r), s = la(e, r), xe("invalid", e);
                break;
              default:
                s = r;
            }
            aa(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Dc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Tc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Mr(e, c) : typeof c == "number" && Mr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Er.hasOwnProperty(a) ? c != null && a === "onScroll" && xe("scroll", e) : c != null && Za(e, a, c, o));
            }
            switch (n) {
              case "input":
                nl(e), ni(e, r, !1);
                break;
              case "textarea":
                nl(e), li(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Un(e, !!r.multiple, a, !1) : r.defaultValue != null && Un(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = $l);
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
      return Be(t), null;
    case 6:
      if (e && t.stateNode != null) nu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (n = vn(Wr.current), vn(Dt.current), ul(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Tt] = t, (a = r.nodeValue !== n) && (e = ct, e !== null)) switch (e.tag) {
            case 3:
              dl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && dl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Tt] = t, t.stateNode = r;
      }
      return Be(t), null;
    case 13:
      if (_e(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && it !== null && t.mode & 1 && !(t.flags & 128)) xd(), Yn(), t.flags |= 98560, a = !1;
        else if (a = ul(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(F(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(F(317));
            a[Tt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Be(t), a = !1;
        } else jt !== null && ($a(jt), jt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Oe === 0 && (Oe = 3) : Oo())), t.updateQueue !== null && (t.flags |= 4), Be(t), null);
    case 4:
      return Jn(), Da(e, t), e === null && Or(t.stateNode.containerInfo), Be(t), null;
    case 10:
      return wo(t.type._context), Be(t), null;
    case 17:
      return tt(t.type) && Ul(), Be(t), null;
    case 19:
      if (_e(je), a = t.memoizedState, a === null) return Be(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) fr(a, !1);
      else {
        if (Oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ql(e), o !== null) {
            for (t.flags |= 128, fr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > er && (t.flags |= 128, r = !0, fr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ql(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Se) return Be(t), null;
        } else 2 * Ie() - a.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, fr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = je.current, ve(je, r ? n & 1 | 2 : n & 1), t) : (Be(t), null);
    case 22:
    case 23:
      return Ro(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function pp(e, t) {
  switch (ho(t), t.tag) {
    case 1:
      return tt(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Jn(), _e(et), _e(Ke), jo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return So(t), null;
    case 13:
      if (_e(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(F(340));
        Yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e(je), null;
    case 4:
      return Jn(), null;
    case 10:
      return wo(t.type._context), null;
    case 22:
    case 23:
      return Ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1, He = !1, hp = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Me(e, t, r);
  }
  else n.current = null;
}
function Pa(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var Ki = !1;
function gp(e, t) {
  if (ya = zl, e = od(), fo(e)) {
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
        var o = 0, i = -1, c = -1, u = 0, h = 0, v = e, w = null;
        t: for (; ; ) {
          for (var x; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (x = v.firstChild) !== null; )
            w = v, v = x;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++u === s && (i = o), w === a && ++h === r && (c = o), (x = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (va = { focusedElem: e, selectionRange: n }, zl = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
  else for (; H !== null; ) {
    t = H;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var k = g.memoizedProps, S = g.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? k : kt(t.type, k), S);
            m.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(F(163));
      }
    } catch (y) {
      Me(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, H = e;
      break;
    }
    H = t.return;
  }
  return g = Ki, Ki = !1, g;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && Pa(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function fs(e, t) {
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
function Ra(e) {
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
function ru(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ru(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[zr], delete t[_a], delete t[Jf], delete t[Zf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function lu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || lu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $l));
  else if (r !== 4 && (e = e.child, e !== null)) for (Oa(e, t, n), e = e.sibling; e !== null; ) Oa(e, t, n), e = e.sibling;
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), e = e.sibling;
}
var Fe = null, St = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) su(e, t, n), n = n.sibling;
}
function su(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
    Lt.onCommitFiberUnmount(ss, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      He || Wn(n, t);
    case 6:
      var r = Fe, s = St;
      Fe = null, Ht(e, t, n), Fe = r, St = s, Fe !== null && (St ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
      break;
    case 18:
      Fe !== null && (St ? (e = Fe, n = n.stateNode, e.nodeType === 8 ? Fs(e.parentNode, n) : e.nodeType === 1 && Fs(e, n), Dr(e)) : Fs(Fe, n.stateNode));
      break;
    case 4:
      r = Fe, s = St, Fe = n.stateNode.containerInfo, St = !0, Ht(e, t, n), Fe = r, St = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Pa(n, t, o), s = s.next;
        } while (s !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (!He && (Wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Me(n, t, i);
      }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, Ht(e, t, n), He = r) : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function qi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hp()), t.forEach(function(r) {
      var s = bp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function xt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Fe = i.stateNode, St = !1;
            break e;
          case 3:
            Fe = i.stateNode.containerInfo, St = !0;
            break e;
          case 4:
            Fe = i.stateNode.containerInfo, St = !0;
            break e;
        }
        i = i.return;
      }
      if (Fe === null) throw Error(F(160));
      su(a, o, s), Fe = null, St = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (u) {
      Me(s, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) au(t, e), t = t.sibling;
}
function au(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (xt(t, e), Mt(e), r & 4) {
        try {
          br(3, e, e.return), fs(3, e);
        } catch (k) {
          Me(e, e.return, k);
        }
        try {
          br(5, e, e.return);
        } catch (k) {
          Me(e, e.return, k);
        }
      }
      break;
    case 1:
      xt(t, e), Mt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (xt(t, e), Mt(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Mr(s, "");
        } catch (k) {
          Me(e, e.return, k);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Ec(s, a), oa(i, o);
          var u = oa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? Dc(s, v) : h === "dangerouslySetInnerHTML" ? Tc(s, v) : h === "children" ? Mr(s, v) : Za(s, h, v, u);
          }
          switch (i) {
            case "input":
              na(s, a);
              break;
            case "textarea":
              Mc(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Un(s, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? Un(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Un(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[zr] = a;
        } catch (k) {
          Me(e, e.return, k);
        }
      }
      break;
    case 6:
      if (xt(t, e), Mt(e), r & 4) {
        if (e.stateNode === null) throw Error(F(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (k) {
          Me(e, e.return, k);
        }
      }
      break;
    case 3:
      if (xt(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Dr(t.containerInfo);
      } catch (k) {
        Me(e, e.return, k);
      }
      break;
    case 4:
      xt(t, e), Mt(e);
      break;
    case 13:
      xt(t, e), Mt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Do = Ie())), r & 4 && qi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (u = He) || h, xt(t, e), He = u) : xt(t, e), Mt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !h && e.mode & 1) for (H = e, h = e.child; h !== null; ) {
          for (v = H = h; H !== null; ) {
            switch (w = H, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                br(4, w, w.return);
                break;
              case 1:
                Wn(w, w.return);
                var g = w.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (k) {
                    Me(r, n, k);
                  }
                }
                break;
              case 5:
                Wn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  Xi(v);
                  continue;
                }
            }
            x !== null ? (x.return = w, H = x) : Xi(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                s = v.stateNode, u ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Lc("display", o));
              } catch (k) {
                Me(e, e.return, k);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = u ? "" : v.memoizedProps;
            } catch (k) {
              Me(e, e.return, k);
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
      xt(t, e), Mt(e), r & 4 && qi(e);
      break;
    case 21:
      break;
    default:
      xt(
        t,
        e
      ), Mt(e);
  }
}
function Mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lu(n)) {
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
          r.flags & 32 && (Mr(s, ""), r.flags &= -33);
          var a = Gi(e);
          Aa(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Gi(e);
          Oa(e, i, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (c) {
      Me(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yp(e, t, n) {
  H = e, ou(e);
}
function ou(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var s = H, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || pl;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || He;
        i = pl;
        var u = He;
        if (pl = o, (He = c) && !u) for (H = s; H !== null; ) o = H, c = o.child, o.tag === 22 && o.memoizedState !== null ? Ji(s) : c !== null ? (c.return = o, H = c) : Ji(s);
        for (; a !== null; ) H = a, ou(a), a = a.sibling;
        H = s, pl = i, He = u;
      }
      Yi(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, H = a) : Yi(e);
  }
}
function Yi(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            He || fs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !He) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Pi(t, a, r);
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
              Pi(t, o, n);
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
              var u = t.alternate;
              if (u !== null) {
                var h = u.memoizedState;
                if (h !== null) {
                  var v = h.dehydrated;
                  v !== null && Dr(v);
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
        He || t.flags & 512 && Ra(t);
      } catch (w) {
        Me(t, t.return, w);
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
function Xi(e) {
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
function Ji(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fs(4, t);
          } catch (c) {
            Me(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Me(t, s, c);
            }
          }
          var a = t.return;
          try {
            Ra(t);
          } catch (c) {
            Me(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ra(t);
          } catch (c) {
            Me(t, o, c);
          }
      }
    } catch (c) {
      Me(t, t.return, c);
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
var vp = Math.ceil, Jl = Bt.ReactCurrentDispatcher, To = Bt.ReactCurrentOwner, gt = Bt.ReactCurrentBatchConfig, de = 0, ze = null, Le = null, We = 0, ot = 0, $n = mn(0), Oe = 0, Vr = null, jn = 0, ps = 0, Lo = 0, Nr = null, Je = null, Do = 0, er = 1 / 0, Rt = null, Zl = !1, za = null, sn = null, hl = !1, Zt = null, es = 0, Cr = 0, Fa = null, Ml = -1, Il = 0;
function qe() {
  return de & 6 ? Ie() : Ml !== -1 ? Ml : Ml = Ie();
}
function an(e) {
  return e.mode & 1 ? de & 2 && We !== 0 ? We & -We : tp.transition !== null ? (Il === 0 && (Il = Bc()), Il) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jc(e.type)), e) : 1;
}
function Ct(e, t, n, r) {
  if (50 < Cr) throw Cr = 0, Fa = null, Error(F(185));
  Yr(e, n, r), (!(de & 2) || e !== ze) && (e === ze && (!(de & 2) && (ps |= n), Oe === 4 && Yt(e, We)), nt(e, r), n === 1 && de === 0 && !(t.mode & 1) && (er = Ie() + 500, ds && fn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  ef(e, t);
  var r = Al(e, e === ze ? We : 0);
  if (r === 0) n !== null && oi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && oi(n), t === 1) e.tag === 0 ? ep(Zi.bind(null, e)) : yd(Zi.bind(null, e)), Yf(function() {
      !(de & 6) && fn();
    }), n = null;
    else {
      switch (Hc(r)) {
        case 1:
          n = lo;
          break;
        case 4:
          n = Qc;
          break;
        case 16:
          n = Ol;
          break;
        case 536870912:
          n = Vc;
          break;
        default:
          n = Ol;
      }
      n = hu(n, iu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function iu(e, t) {
  if (Ml = -1, Il = 0, de & 6) throw Error(F(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Al(e, e === ze ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ts(e, r);
  else {
    t = r;
    var s = de;
    de |= 2;
    var a = du();
    (ze !== e || We !== t) && (Rt = null, er = Ie() + 500, wn(e, t));
    do
      try {
        _p();
        break;
      } catch (i) {
        cu(e, i);
      }
    while (!0);
    vo(), Jl.current = a, de = s, Le !== null ? t = 0 : (ze = null, We = 0, t = Oe);
  }
  if (t !== 0) {
    if (t === 2 && (s = ma(e), s !== 0 && (r = s, t = Wa(e, s))), t === 1) throw n = Vr, wn(e, 0), Yt(e, r), nt(e, Ie()), n;
    if (t === 6) Yt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !wp(s) && (t = ts(e, r), t === 2 && (a = ma(e), a !== 0 && (r = a, t = Wa(e, a))), t === 1)) throw n = Vr, wn(e, 0), Yt(e, r), nt(e, Ie()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          hn(e, Je, Rt);
          break;
        case 3:
          if (Yt(e, r), (r & 130023424) === r && (t = Do + 500 - Ie(), 10 < t)) {
            if (Al(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              qe(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = xa(hn.bind(null, e, Je, Rt), t);
            break;
          }
          hn(e, Je, Rt);
          break;
        case 4:
          if (Yt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - Nt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xa(hn.bind(null, e, Je, Rt), r);
            break;
          }
          hn(e, Je, Rt);
          break;
        case 5:
          hn(e, Je, Rt);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return nt(e, Ie()), e.callbackNode === n ? iu.bind(null, e) : null;
}
function Wa(e, t) {
  var n = Nr;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = ts(e, t), e !== 2 && (t = Je, Je = n, t !== null && $a(t)), e;
}
function $a(e) {
  Je === null ? Je = e : Je.push.apply(Je, e);
}
function wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!Et(a(), s)) return !1;
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
function Yt(e, t) {
  for (t &= ~Lo, t &= ~ps, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Zi(e) {
  if (de & 6) throw Error(F(327));
  Kn();
  var t = Al(e, 0);
  if (!(t & 1)) return nt(e, Ie()), null;
  var n = ts(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ma(e);
    r !== 0 && (t = r, n = Wa(e, r));
  }
  if (n === 1) throw n = Vr, wn(e, 0), Yt(e, t), nt(e, Ie()), n;
  if (n === 6) throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, Je, Rt), nt(e, Ie()), null;
}
function Po(e, t) {
  var n = de;
  de |= 1;
  try {
    return e(t);
  } finally {
    de = n, de === 0 && (er = Ie() + 500, ds && fn());
  }
}
function bn(e) {
  Zt !== null && Zt.tag === 0 && !(de & 6) && Kn();
  var t = de;
  de |= 1;
  var n = gt.transition, r = ue;
  try {
    if (gt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, gt.transition = n, de = t, !(de & 6) && fn();
  }
}
function Ro() {
  ot = $n.current, _e($n);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, qf(n)), Le !== null) for (n = Le.return; n !== null; ) {
    var r = n;
    switch (ho(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ul();
        break;
      case 3:
        Jn(), _e(et), _e(Ke), jo();
        break;
      case 5:
        So(r);
        break;
      case 4:
        Jn();
        break;
      case 13:
        _e(je);
        break;
      case 19:
        _e(je);
        break;
      case 10:
        wo(r.type._context);
        break;
      case 22:
      case 23:
        Ro();
    }
    n = n.return;
  }
  if (ze = e, Le = e = on(e.current, null), We = ot = t, Oe = 0, Vr = null, Lo = ps = jn = 0, Je = Nr = null, yn !== null) {
    for (t = 0; t < yn.length; t++) if (n = yn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    yn = null;
  }
  return e;
}
function cu(e, t) {
  do {
    var n = Le;
    try {
      if (vo(), Nl.current = Xl, Yl) {
        for (var r = be.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        Yl = !1;
      }
      if (Sn = 0, Ae = Re = be = null, jr = !1, $r = 0, To.current = null, n === null || n.return === null) {
        Oe = 1, Vr = t, Le = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = We, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = h.alternate;
            w ? (h.updateQueue = w.updateQueue, h.memoizedState = w.memoizedState, h.lanes = w.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var x = Wi(o);
          if (x !== null) {
            x.flags &= -257, $i(x, o, i, a, t), x.mode & 1 && Fi(a, u, t), t = x, c = u;
            var g = t.updateQueue;
            if (g === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(c), t.updateQueue = k;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Fi(a, u, t), Oo();
              break e;
            }
            c = Error(F(426));
          }
        } else if (Se && i.mode & 1) {
          var S = Wi(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), $i(S, o, i, a, t), go(Zn(c, i));
            break e;
          }
        }
        a = c = Zn(c, i), Oe !== 4 && (Oe = 2), Nr === null ? Nr = [a] : Nr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var m = Hd(a, c, t);
              Di(a, m);
              break e;
            case 1:
              i = c;
              var d = a.type, f = a.stateNode;
              if (!(a.flags & 128) && (typeof d.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (sn === null || !sn.has(f)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = Kd(a, i, t);
                Di(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      mu(n);
    } catch (_) {
      t = _, Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function du() {
  var e = Jl.current;
  return Jl.current = Xl, e === null ? Xl : e;
}
function Oo() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), ze === null || !(jn & 268435455) && !(ps & 268435455) || Yt(ze, We);
}
function ts(e, t) {
  var n = de;
  de |= 2;
  var r = du();
  (ze !== e || We !== t) && (Rt = null, wn(e, t));
  do
    try {
      xp();
      break;
    } catch (s) {
      cu(e, s);
    }
  while (!0);
  if (vo(), de = n, Jl.current = r, Le !== null) throw Error(F(261));
  return ze = null, We = 0, Oe;
}
function xp() {
  for (; Le !== null; ) uu(Le);
}
function _p() {
  for (; Le !== null && !Bm(); ) uu(Le);
}
function uu(e) {
  var t = pu(e.alternate, e, ot);
  e.memoizedProps = e.pendingProps, t === null ? mu(e) : Le = t, To.current = null;
}
function mu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = pp(n, t), n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Oe = 6, Le = null;
        return;
      }
    } else if (n = fp(n, t, ot), n !== null) {
      Le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function hn(e, t, n) {
  var r = ue, s = gt.transition;
  try {
    gt.transition = null, ue = 1, kp(e, t, n, r);
  } finally {
    gt.transition = s, ue = r;
  }
  return null;
}
function kp(e, t, n, r) {
  do
    Kn();
  while (Zt !== null);
  if (de & 6) throw Error(F(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (tf(e, a), e === ze && (Le = ze = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hl || (hl = !0, hu(Ol, function() {
    return Kn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = gt.transition, gt.transition = null;
    var o = ue;
    ue = 1;
    var i = de;
    de |= 4, To.current = null, gp(e, n), au(n, e), Uf(va), zl = !!ya, va = ya = null, e.current = n, yp(n), Hm(), de = i, ue = o, gt.transition = a;
  } else e.current = n;
  if (hl && (hl = !1, Zt = e, es = s), a = e.pendingLanes, a === 0 && (sn = null), qm(n.stateNode), nt(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Zl) throw Zl = !1, e = za, za = null, e;
  return es & 1 && e.tag !== 0 && Kn(), a = e.pendingLanes, a & 1 ? e === Fa ? Cr++ : (Cr = 0, Fa = e) : Cr = 0, fn(), null;
}
function Kn() {
  if (Zt !== null) {
    var e = Hc(es), t = gt.transition, n = ue;
    try {
      if (gt.transition = null, ue = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, es = 0, de & 6) throw Error(F(331));
        var s = de;
        for (de |= 4, H = e.current; H !== null; ) {
          var a = H, o = a.child;
          if (H.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var u = i[c];
                for (H = u; H !== null; ) {
                  var h = H;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, H = v;
                  else for (; H !== null; ) {
                    h = H;
                    var w = h.sibling, x = h.return;
                    if (ru(h), h === u) {
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
              var g = a.alternate;
              if (g !== null) {
                var k = g.child;
                if (k !== null) {
                  g.child = null;
                  do {
                    var S = k.sibling;
                    k.sibling = null, k = S;
                  } while (k !== null);
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
                br(9, a, a.return);
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, H = m;
              break e;
            }
            H = a.return;
          }
        }
        var d = e.current;
        for (H = d; H !== null; ) {
          o = H;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) f.return = o, H = f;
          else e: for (o = d; H !== null; ) {
            if (i = H, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  fs(9, i);
              }
            } catch (_) {
              Me(i, i.return, _);
            }
            if (i === o) {
              H = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, H = y;
              break e;
            }
            H = i.return;
          }
        }
        if (de = s, fn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
          Lt.onPostCommitFiberRoot(ss, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, gt.transition = t;
    }
  }
  return !1;
}
function ec(e, t, n) {
  t = Zn(n, t), t = Hd(e, t, 1), e = ln(e, t, 1), t = qe(), e !== null && (Yr(e, 1, t), nt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) ec(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ec(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
        e = Zn(n, e), e = Kd(t, e, 1), t = ln(t, e, 1), e = qe(), t !== null && (Yr(t, 1, e), nt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (We & n) === n && (Oe === 4 || Oe === 3 && (We & 130023424) === We && 500 > Ie() - Do ? wn(e, 0) : Lo |= n), nt(e, t);
}
function fu(e, t) {
  t === 0 && (e.mode & 1 ? (t = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : t = 1);
  var n = qe();
  e = Ut(e, t), e !== null && (Yr(e, t, n), nt(e, n));
}
function jp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fu(e, n);
}
function bp(e, t) {
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
  r !== null && r.delete(t), fu(e, n);
}
var pu;
pu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, mp(e, t, n);
    Ze = !!(e.flags & 131072);
  }
  else Ze = !1, Se && t.flags & 1048576 && vd(t, Bl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      El(e, t), e = t.pendingProps;
      var s = qn(t, Ke.current);
      Hn(t, n), s = No(null, t, r, e, s, n);
      var a = Co();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (a = !0, Ql(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, _o(t), s.updater = ms, t.stateNode = s, s._reactInternals = t, Ca(t, r, e, n), t = Ia(null, t, r, !0, a, n)) : (t.tag = 0, Se && a && po(t), Ge(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (El(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Cp(r), e = kt(r, e), s) {
          case 0:
            t = Ma(null, t, r, e, n);
            break e;
          case 1:
            t = Vi(null, t, r, e, n);
            break e;
          case 11:
            t = Ui(null, t, r, e, n);
            break e;
          case 14:
            t = Qi(null, t, r, kt(r.type, e), n);
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
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : kt(r, s), Ma(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : kt(r, s), Vi(e, t, r, s, n);
    case 3:
      e: {
        if (Xd(t), e === null) throw Error(F(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, jd(e, t), Gl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Zn(Error(F(423)), t), t = Bi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Zn(Error(F(424)), t), t = Bi(e, t, r, n, s);
          break e;
        } else for (it = rn(t.stateNode.containerInfo.firstChild), ct = t, Se = !0, jt = null, n = kd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yn(), r === s) {
            t = Qt(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bd(t), e === null && ja(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, wa(r, s) ? o = null : a !== null && wa(r, a) && (t.flags |= 32), Yd(e, t), Ge(e, t, o, n), t.child;
    case 6:
      return e === null && ja(t), null;
    case 13:
      return Jd(e, t, n);
    case 4:
      return ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : Ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : kt(r, s), Ui(e, t, r, s, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, ve(Hl, r._currentValue), r._currentValue = o, a !== null) if (Et(a.value, o)) {
          if (a.children === s.children && !et.current) {
            t = Qt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Ft(-1, n & -n), c.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var h = u.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), u.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), ba(
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
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), ba(o, n, t), o = a.sibling;
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
        Ge(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Hn(t, n), s = yt(s), r = r(s), t.flags |= 1, Ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = kt(r, t.pendingProps), s = kt(r.type, s), Qi(e, t, r, s, n);
    case 15:
      return Gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : kt(r, s), El(e, t), t.tag = 1, tt(r) ? (e = !0, Ql(t)) : e = !1, Hn(t, n), Bd(t, r, s), Ca(t, r, s, n), Ia(null, t, r, !0, e, n);
    case 19:
      return Zd(e, t, n);
    case 22:
      return qd(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function hu(e, t) {
  return Uc(e, t);
}
function Np(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ht(e, t, n, r) {
  return new Np(e, t, n, r);
}
function Ao(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Cp(e) {
  if (typeof e == "function") return Ao(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === to) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Tl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Ao(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Tn:
      return xn(n.children, s, a, t);
    case eo:
      o = 8, s |= 8;
      break;
    case Xs:
      return e = ht(12, n, t, s | 2), e.elementType = Xs, e.lanes = a, e;
    case Js:
      return e = ht(13, n, t, s), e.elementType = Js, e.lanes = a, e;
    case Zs:
      return e = ht(19, n, t, s), e.elementType = Zs, e.lanes = a, e;
    case bc:
      return hs(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Sc:
          o = 10;
          break e;
        case jc:
          o = 9;
          break e;
        case to:
          o = 11;
          break e;
        case no:
          o = 14;
          break e;
        case Kt:
          o = 16, r = null;
          break e;
      }
      throw Error(F(130, e == null ? e : typeof e, ""));
  }
  return t = ht(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function xn(e, t, n, r) {
  return e = ht(7, e, r, t), e.lanes = n, e;
}
function hs(e, t, n, r) {
  return e = ht(22, e, r, t), e.elementType = bc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ks(e, t, n) {
  return e = ht(6, e, null, t), e.lanes = n, e;
}
function Gs(e, t, n) {
  return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ep(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Es(0), this.expirationTimes = Es(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Es(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function zo(e, t, n, r, s, a, o, i, c) {
  return e = new Ep(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ht(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _o(a), e;
}
function Mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gu(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (En(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
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
    if (tt(n)) return gd(e, n, t);
  }
  return t;
}
function yu(e, t, n, r, s, a, o, i, c) {
  return e = zo(n, r, !0, e, s, a, o, i, c), e.context = gu(null), n = e.current, r = qe(), s = an(n), a = Ft(r, s), a.callback = t ?? null, ln(n, a, s), e.current.lanes = s, Yr(e, s, r), nt(e, r), e;
}
function gs(e, t, n, r) {
  var s = t.current, a = qe(), o = an(s);
  return n = gu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ln(s, t, o), e !== null && (Ct(e, s, o, a), bl(e, s, o)), o;
}
function ns(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fo(e, t) {
  tc(e, t), (e = e.alternate) && tc(e, t);
}
function Ip() {
  return null;
}
var vu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Wo(e) {
  this._internalRoot = e;
}
ys.prototype.render = Wo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  gs(e, t, null, null);
};
ys.prototype.unmount = Wo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bn(function() {
      gs(null, e, null, null);
    }), t[$t] = null;
  }
};
function ys(e) {
  this._internalRoot = e;
}
ys.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++) ;
    qt.splice(n, 0, e), n === 0 && Xc(e);
  }
};
function $o(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function nc() {
}
function Tp(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = ns(o);
        a.call(u);
      };
    }
    var o = yu(t, r, e, 0, null, !1, !1, "", nc);
    return e._reactRootContainer = o, e[$t] = o.current, Or(e.nodeType === 8 ? e.parentNode : e), bn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var u = ns(c);
      i.call(u);
    };
  }
  var c = zo(e, 0, !1, null, null, !1, !1, "", nc);
  return e._reactRootContainer = c, e[$t] = c.current, Or(e.nodeType === 8 ? e.parentNode : e), bn(function() {
    gs(t, c, n, r);
  }), c;
}
function ws(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = ns(o);
        i.call(c);
      };
    }
    gs(t, o, e, s);
  } else o = Tp(n, t, e, s, r);
  return ns(o);
}
Kc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (so(t, n | 1), nt(t, Ie()), !(de & 6) && (er = Ie() + 500, fn()));
      }
      break;
    case 13:
      bn(function() {
        var r = Ut(e, 1);
        if (r !== null) {
          var s = qe();
          Ct(r, e, 1, s);
        }
      }), Fo(e, 1);
  }
};
ao = function(e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = qe();
      Ct(t, e, 134217728, n);
    }
    Fo(e, 134217728);
  }
};
Gc = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = Ut(e, t);
    if (n !== null) {
      var r = qe();
      Ct(n, e, t, r);
    }
    Fo(e, t);
  }
};
qc = function() {
  return ue;
};
Yc = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
ca = function(e, t, n) {
  switch (t) {
    case "input":
      if (na(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = cs(r);
            if (!s) throw Error(F(90));
            Cc(r), na(r, s);
          }
        }
      }
      break;
    case "textarea":
      Mc(e, n);
      break;
    case "select":
      t = n.value, t != null && Un(e, !!n.multiple, t, !1);
  }
};
Oc = Po;
Ac = bn;
var Lp = { usingClientEntryPoint: !1, Events: [Jr, Rn, cs, Pc, Rc, Po] }, pr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Dp = { bundleType: pr.bundleType, version: pr.version, rendererPackageName: pr.rendererPackageName, rendererConfig: pr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Wc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pr.findFiberByHostInstance || Ip, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gl.isDisabled && gl.supportsFiber) try {
    ss = gl.inject(Dp), Lt = gl;
  } catch {
  }
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
ut.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$o(t)) throw Error(F(200));
  return Mp(e, t, null, n);
};
ut.createRoot = function(e, t) {
  if (!$o(e)) throw Error(F(299));
  var n = !1, r = "", s = vu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = zo(e, 1, !1, null, null, n, !1, r, s), e[$t] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new Wo(t);
};
ut.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = Wc(t), e = e === null ? null : e.stateNode, e;
};
ut.flushSync = function(e) {
  return bn(e);
};
ut.hydrate = function(e, t, n) {
  if (!vs(t)) throw Error(F(200));
  return ws(null, e, t, !0, n);
};
ut.hydrateRoot = function(e, t, n) {
  if (!$o(e)) throw Error(F(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = vu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = yu(t, null, e, 1, n ?? null, s, !1, a, o), e[$t] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new ys(t);
};
ut.render = function(e, t, n) {
  if (!vs(t)) throw Error(F(200));
  return ws(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function(e) {
  if (!vs(e)) throw Error(F(40));
  return e._reactRootContainer ? (bn(function() {
    ws(null, null, e, !1, function() {
      e._reactRootContainer = null, e[$t] = null;
    });
  }), !0) : !1;
};
ut.unstable_batchedUpdates = Po;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vs(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return ws(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function wu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wu);
    } catch (e) {
      console.error(e);
    }
}
wu(), wc.exports = ut;
var ye = wc.exports, xu, rc = ye;
xu = rc.createRoot, rc.hydrateRoot;
var _u = { exports: {} }, xs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = p, Rp = Symbol.for("react.element"), Op = Symbol.for("react.fragment"), Ap = Object.prototype.hasOwnProperty, zp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ku(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ap.call(t, r) && !Fp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Rp, type: e, key: a, ref: o, props: s, _owner: zp.current };
}
xs.Fragment = Op;
xs.jsx = ku;
xs.jsxs = ku;
_u.exports = xs;
var l = _u.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wp = {
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
const $p = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ee = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...u
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...Wp,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${$p(e)}`, i].join(" "),
        ...u
      },
      [
        ...t.map(([v, w]) => p.createElement(v, w)),
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
const Su = ee("AlertCircle", [
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
const Up = ee("AlertTriangle", [
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
const ju = ee("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = ee("ArrowUpDown", [
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
const bu = ee("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = ee("Box", [
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
const Bp = ee("Calendar", [
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
const Hp = ee("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = ee("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = ee("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = ee("Download", [
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
const Yp = ee("Eraser", [
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
const Vo = ee("FileJson", [
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
const Xp = ee("FileText", [
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
const Jp = ee("Folder", [
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
const Zp = ee("Info", [
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
const eh = ee("Lasso", [
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
const Cu = ee("LayoutGrid", [
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
const th = ee("LayoutList", [
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
const nh = ee("Link2Off", [
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
const rh = ee("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = ee("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = ee("Maximize", [
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
const sh = ee("Menu", [
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
const ah = ee("Minimize", [
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
const oh = ee("MoreVertical", [
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
const ih = ee("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = ee("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = ee("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = ee("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = ee("RefreshCw", [
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
const ch = ee("ScanLine", [
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
const Nn = ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = ee("Settings", [
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
const Iu = ee("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = ee("Star", [
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
const dh = ee("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = ee("Tag", [
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
const Vt = ee("Trash2", [
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
const uh = ee("Trash", [
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
const mh = ee("Type", [
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
const fh = ee("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = ee("Upload", [
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
const hh = ee("Workflow", [
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
const we = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = te;
async function ie(e) {
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
const gh = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await ie(e)).home;
}, lt = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  p.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let rs = !1;
const yh = (e) => {
  rs = e, rs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, vh = (...e) => {
  rs && console.log("[Meld]", ...e);
}, wh = (...e) => {
  rs && console.warn("[Meld]", ...e);
}, xh = (...e) => {
  console.error("[Meld]", ...e);
}, Z = {
  log: vh,
  warn: wh,
  error: xh,
  init: yh
}, Ll = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return ie(a);
}, Tu = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return ie(t);
}, _h = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ie(n);
}, Bo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ie(t);
}, Lu = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ie(t);
}, sc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ie(n);
}, kh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ie(r);
  } catch {
    return [];
  }
}, Ua = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ie(t);
  } catch {
    return [];
  }
}, Sh = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ie(n);
}, jh = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ie(n);
}, Qa = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ie(r);
}, bh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return ie(t);
}, Nh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ie(t);
}, Ch = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), s = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = s, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(s), document.body.removeChild(a);
}, Eh = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let s = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (s = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = s, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, Mh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return ie(r);
}, Ih = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return ie(e);
}, Th = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return ie(e);
}, Lh = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return ie(e);
}, Dh = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return ie(e);
}, Ph = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ie(n);
}, ac = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ie(t);
}, Rh = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ie(r);
}, Oh = {
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
}, Du = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await ie(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Oh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Ah = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ie(n);
}, oc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, h) => {
    const v = typeof u == "function" ? u(t) : u;
    if (!Object.is(v, t)) {
      const w = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((x) => x(t, w));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (u) => (n.add(u), () => n.delete(u)) }, c = t = e(r, s, i);
  return i;
}, zh = (e) => e ? oc(e) : oc, Fh = (e) => e;
function Wh(e, t = Fh) {
  const n = Xt.useSyncExternalStore(
    e.subscribe,
    Xt.useCallback(() => t(e.getState()), [e, t]),
    Xt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Xt.useDebugValue(n), n;
}
const $h = (e) => {
  const t = zh(e), n = (r) => Wh(t, r);
  return Object.assign(n, t), n;
}, Uh = (e) => $h;
function Qh(e, t) {
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
const Va = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Va(r)(n);
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
        return Va(r)(n);
      }
    };
  }
}, Vh = (e, t) => (n, r, s) => {
  let a = {
    storage: Qh(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, m) => ({
      ...m,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...S);
      },
      r,
      s
    );
  const v = () => {
    const S = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = s.setState;
  s.setState = (S, m) => (w(S, m), v());
  const x = e(
    (...S) => (n(...S), v()),
    r,
    s
  );
  s.getInitialState = () => x;
  let g;
  const k = () => {
    var S, m;
    if (!h) return;
    const d = ++i;
    o = !1, c.forEach((y) => {
      var _;
      return y((_ = r()) != null ? _ : x);
    });
    const f = ((m = a.onRehydrateStorage) == null ? void 0 : m.call(a, (S = r()) != null ? S : x)) || void 0;
    return Va(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const _ = a.migrate(
              y.state,
              y.version
            );
            return _ instanceof Promise ? _.then((j) => [!0, j]) : [!0, _];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var _;
      if (d !== i)
        return;
      const [j, b] = y;
      if (g = a.merge(
        b,
        (_ = r()) != null ? _ : x
      ), n(g, !0), j)
        return v();
    }).then(() => {
      d === i && (f == null || f(g, void 0), g = r(), o = !0, u.forEach((y) => y(g)));
    }).catch((y) => {
      d === i && (f == null || f(void 0, y));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (h = S.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => k(),
    hasHydrated: () => o,
    onHydrate: (S) => (c.add(S), () => {
      c.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, a.skipHydration || k(), g || x;
}, Bh = Vh, Hh = [
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
let yl = null;
const fe = Uh()(
  Bh(
    (e) => ({
      isOpen: !1,
      slots: Hh,
      buckets: {},
      images: {},
      toastMessage: null,
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
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), s = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, u] of Object.entries(a)) {
          const h = u.filter((v) => !s.has(v));
          h.length !== u.length && (a[c] = h, o = !0);
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
      showToast: (t) => {
        yl && clearTimeout(yl), e({ toastMessage: t }), yl = setTimeout(() => {
          e({ toastMessage: null }), yl = null;
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
), Kh = {
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
function Gh(e, t) {
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
        new Map(i.map((u) => [u.id, u])).values()
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
        const u = new Set(e.selectedIds);
        return u.add(t.payload), {
          ...e,
          selectedIds: u,
          lastSelectedId: t.payload
        };
      }
      const s = e.images.findIndex(
        (u) => u.id === e.lastSelectedId
      ), a = e.images.findIndex(
        (u) => u.id === t.payload
      );
      if (s === -1 || a === -1) return e;
      const [o, i] = [
        Math.min(s, a),
        Math.max(s, a)
      ], c = new Set(e.selectedIds);
      for (let u = o; u <= i; u++)
        c.add(e.images[u].id);
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
      const u = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((h) => h.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: o,
        viewerLightTableSlotId: i,
        viewerInitialMaskMode: c,
        lineageImages: u ? e.lineageImages : []
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
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (fe.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((g) => g.id === x) || e.lineageImages.find((g) => g.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (c === -1 || c === i.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || c === i.length - 1 && !a)
        return e;
      const u = (c + 1) % i.length;
      return {
        ...e,
        viewerImageId: i[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (fe.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((g) => g.id === x) || e.lineageImages.find((g) => g.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
      );
      if (c === -1 || c === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || c === 0 && !a)
        return e;
      const u = (c - 1 + i.length) % i.length;
      return {
        ...e,
        viewerImageId: i[u].id
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
const Pu = p.createContext(void 0), qh = ({
  children: e
}) => {
  const [t, n] = p.useReducer(Gh, Kh), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (g, k, S) => {
      const m = t.settings["gallery.max_load_count"], d = 200;
      let f = g;
      for (; f < Math.min(k, m) && S === s.current; )
        try {
          const y = Math.min(d, m - f);
          Z.log("Background fetch: starting chunk", {
            offset: f,
            limit: y
          });
          const _ = await Ll(
            f,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: _ }), f += _.images.length, _.images.length === 0 || f >= _.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (y) {
          Z.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), k = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", m = t.settings["gallery.initial_load_count"];
      Z.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: m,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await Ll(
        0,
        m,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - g;
      Z.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > m && o(m, d.total, k);
    } catch (S) {
      Z.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now();
    try {
      const k = r.current, S = t.searchQuery.trim() !== "", m = t.pagination.limit;
      Z.log("loadMoreImages: starting fetch", {
        nextOffset: k,
        fetchLimit: m,
        isSearch: S
      });
      const d = await Ll(
        k,
        m,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - g;
      Z.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (k) {
      Z.error("loadMoreImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), u = p.useCallback(async () => {
    try {
      const g = await Dh();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      Z.error("Failed to load favorites", g);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), S = t.images.filter(
      (m) => t.selectedIds.has(m.id)
    ).some(
      (m) => m.parent_id || m.has_children
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
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Bo(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (k) {
      n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = p.useCallback(
    async (g, k) => {
      try {
        await Ah(g, k), n({ type: "SET_SETTINGS", payload: { [g]: k } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), x = p.useCallback(
    async (g) => {
      const k = t.images.find((f) => f.id === g);
      if (k && !k.is_minimal)
        return k;
      const S = t.lineageImages.find((f) => f.id === g);
      if (S && !S.is_minimal)
        return S;
      const m = a.current.get(g);
      if (m)
        return m;
      const d = (async () => {
        try {
          Z.log("fetchFullImageDetails: fetching full data", { id: g });
          const f = await Tu(g);
          return n({ type: "UPDATE_IMAGE", payload: f }), f;
        } finally {
          a.current.delete(g);
        }
      })();
      return a.current.set(g, d), d;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const k = await Du();
        n({ type: "SET_SETTINGS", payload: k });
      } catch (k) {
        Z.error("Failed to load settings", k);
      }
    })();
  }, []), p.useEffect(() => {
    u();
  }, [u]), p.useEffect(() => {
    const g = () => {
      i();
    }, k = (m) => {
      const d = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, S = (m) => {
      const d = m.detail;
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
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", k), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", k), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Pu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: u,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, ke = () => {
  const e = p.useContext(Pu);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, rt = (e) => {
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
}, Ho = async () => {
  const e = await te.fetchApi("/meld/tags");
  return ie(e);
}, Yh = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ie(t);
}, Xh = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ie(t);
}, Jh = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ie(n);
}, Zh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, eg = async (e, t, n = !1, r) => {
  const s = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ie(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, tg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ie(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, ng = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ie(r)).count;
  } catch {
    return 0;
  }
}, rg = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ie(t);
}, lg = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ie(e);
}, Ru = () => {
  const { dispatch: e } = ke(), [t, n] = p.useState(() => {
    const E = localStorage.getItem("meld-import-config"), R = {
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
        const P = JSON.parse(E);
        return { ...R, ...P, tags: [] };
      } catch {
        return R;
      }
    return R;
  });
  p.useEffect(() => {
    const { tags: E, ...R } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(R));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [u, h] = p.useState(!1), [v, w] = p.useState([]), [x, g] = p.useState(""), [k, S] = p.useState(!1), [m, d] = p.useState(null), f = p.useRef(!1), y = (E) => {
    E.target === E.currentTarget && (f.current = !0);
  }, _ = (E) => {
    E.target === E.currentTarget && f.current && e({ type: "CLOSE_MODAL" }), f.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const R = await gh();
        n((P) => P.custom_path ? P : { ...P, custom_path: R });
      } catch (R) {
        Z.error("Failed to fetch home directory:", R);
      }
    })();
  }, []), p.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const P = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Z.log(
        `loadFolders started. Path: "${P}", Type: "${t.type}"`
      ), t.type === "custom" && !P) {
        Z.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      h(!0);
      const T = P, N = t.type;
      try {
        Z.log("Step 1: Fast load starting...");
        const L = await eg(
          t.type,
          P,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          Z.log("Step 1: Aborted.");
          return;
        }
        Z.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), s(L.folders), o(L.images), c(null);
        const $ = L.folders.map((M) => M.name);
        $.length > 0 && (Z.log(
          `Step 2: Metadata fetch starting for ${$.length} folders...`
        ), tg(
          N,
          T,
          $,
          E.signal
        ).then((M) => {
          if (E.signal.aborted) {
            Z.log("Step 2: Aborted.");
            return;
          }
          Z.log("Step 2: Metadata fetch complete."), s(
            (B) => B.map((ce) => {
              const Q = M[ce.name];
              return Q ? { ...ce, count: Q.count, preview: Q.preview } : ce;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && Z.error("Step 2: Metadata fetch failed:", M);
        })), Z.log("Step 3: Path image count starting..."), ng(N, T, E.signal).then((M) => {
          if (E.signal.aborted) {
            Z.log("Step 3: Aborted.");
            return;
          }
          Z.log(`Step 3: Path image count complete: ${M}`), c(M);
        }).catch((M) => {
          M.name !== "AbortError" && Z.error("Step 3: Path image count failed:", M);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          Z.log("Request aborted.");
          return;
        }
        Z.error("Failed to load folders:", L), s([]), o([]), c(0);
      } finally {
        E.signal.aborted || h(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = p.useCallback(async () => {
    S(!0);
    try {
      const E = await Ho();
      w(E);
    } catch (E) {
      Z.error("Failed to fetch tags:", E);
    } finally {
      S(!1);
    }
  }, []);
  p.useEffect(() => {
    j();
  }, [j]), lt({
    onEscape: p.useCallback(() => {
      m ? d(null) : e({ type: "CLOSE_MODAL" });
    }, [m, e])
  });
  const b = p.useMemo(() => v.filter(
    (E) => E.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(E.name)
  ), [v, x, t.tags]), C = (E) => {
    const R = E.trim();
    R && !t.tags.includes(R) && (n({ ...t, tags: [...t.tags, R] }), g(""));
  }, A = (E) => {
    n({ ...t, tags: t.tags.filter((R) => R !== E) });
  }, D = (E) => {
    E.key === "Enter" && x.trim() && (E.preventDefault(), C(x.trim()));
  }, I = async () => {
    try {
      await rg(t), e({
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
      Z.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, W = (E) => {
    if (t.type === "custom") {
      const R = t.custom_path.includes("\\") ? "\\" : "/", P = t.custom_path.endsWith(R) ? `${t.custom_path}${E}` : `${t.custom_path}${R}${E}`;
      n({ ...t, custom_path: P });
    } else {
      const R = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: R });
    }
  }, J = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.split(E);
      if (R.length > 1) {
        R.pop();
        let P = R.join(E);
        P === "" && E === "/" && (P = "/"), n({ ...t, custom_path: P });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: _,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (E) => E.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                          onChange: (E) => n({
                            ...t,
                            type: E.target.value,
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
                          onChange: (E) => n({ ...t, recursive: E.target.checked })
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
                          onChange: (E) => n({
                            ...t,
                            link_strategy: E.target.value,
                            auto_link_parent: E.target.value !== "none"
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
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((E) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        E,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => A(E),
                            children: /* @__PURE__ */ l.jsx(we, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (E) => g(E.target.value),
                            onKeyDown: D
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => C(x),
                            children: /* @__PURE__ */ l.jsx(_s, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? x && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : b.map((E) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => C(E.name),
                          children: E.name
                        },
                        E.id
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
                          /* @__PURE__ */ l.jsx(Hr, { size: 16 }),
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
                          onClick: J,
                          children: [
                            /* @__PURE__ */ l.jsx(Nu, { size: 16 }),
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
                          onChange: (E) => n({ ...t, custom_path: E.target.value }),
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
                    /* @__PURE__ */ l.jsx("div", { className: "meld-folder-list", children: u ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      r.map((E) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => W(E.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: rt(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Jp, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Qo, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((E) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(E),
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: rt(E),
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
          m && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (E) => {
                E.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (E) => E.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ l.jsx(we, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: rt(m),
                          alt: m.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: m.filename })
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
}, sg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, s] = p.useState("zip"), [a, o] = p.useState(!1), [i, c] = p.useState(!1), u = p.useRef(!1), h = (x) => {
    x.target === x.currentTarget && (u.current = !0);
  }, v = (x) => {
    x.target === x.currentTarget && u.current && (i || n()), u.current = !1;
  };
  lt({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await Ch(e, a);
      else
        for (const x of e)
          await Eh(x, a), await new Promise((g) => setTimeout(g, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: v,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Br, { size: 18 }),
              /* @__PURE__ */ l.jsxs("h3", { style: { margin: 0 }, children: [
                "Download (",
                e.length,
                " image",
                e.length > 1 ? "s" : "",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: n,
                disabled: i,
                children: /* @__PURE__ */ l.jsx(we, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
            /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: "20px" }, children: [
              /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                /* @__PURE__ */ l.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "zip",
                          checked: r === "zip",
                          onChange: () => s("zip"),
                          disabled: i
                        }
                      ),
                      "ZIP (Single File)"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "raw",
                          checked: r === "raw",
                          onChange: () => s("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { children: [
              /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsxs(
                "label",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: a,
                        onChange: (x) => o(x.target.checked),
                        disabled: i
                      }
                    ),
                    "Remove metadata (ComfyUI workflow data) from downloaded images"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: w,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  /* @__PURE__ */ l.jsx(Br, { size: 16 }),
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
}, Ou = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return ie(e);
}, Au = async (e) => {
  const t = await te.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ie(t);
}, Ko = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var x, g, k, S, m, d, f;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Au(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    const u = (y) => {
      if (!y) return !1;
      const _ = y.replace(/\s+/g, "");
      return _ === "MeldImageLoader" || _ === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const _ = a.nodes.find(
          (j) => u(j.type)
        );
        _ && (o = String(_.id));
      }
      const y = a.nodes.find(
        (_) => {
          var j;
          return ((j = _.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const _ = a[y];
          if (u(_.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a)
        if (((x = a[y].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          i = y;
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
    let h = n.filename;
    if (n.subfolder && (h = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (h = `${h} [${n.type}]`), c) {
      const y = window.app, _ = t.replace(/\.json$/i, "");
      let j = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const D of Array.from(b)) {
        const I = D.querySelector(".workflow-label"), W = ((g = I == null ? void 0 : I.textContent) == null ? void 0 : g.trim()) || ((k = D.textContent) == null ? void 0 : k.trim()) || "";
        if (W === _ || W === t || W.startsWith(`${_} `) || W.startsWith(`${_}•`)) {
          D.click(), j = !0;
          break;
        }
      }
      j || await y.loadGraphData(a, !0, !0, t), await new Promise((D) => setTimeout(D, 200));
      const C = y.graph._nodes;
      console.log("[Meld] Active graph nodes count:", C.length);
      const A = C.find(
        (D) => String(D.id) === o || u(D.type)
      );
      if (A) {
        const D = (S = A.widgets) == null ? void 0 : S.find((I) => I.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: A.id,
          type: A.type,
          imagePath: h
        }), D && (D.value = h, typeof D.callback == "function" && D.callback(h));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const D = C.find(
          (I) => {
            var W;
            return String(I.id) === i || ((W = I.type) == null ? void 0 : W.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: D == null ? void 0 : D.id,
          maskFilename: r
        }), D) {
          const I = (m = D.widgets) == null ? void 0 : m.find(
            (J) => J.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const W = (d = D.widgets) == null ? void 0 : d.find(
            (J) => J.name === "channel"
          );
          W && (W.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      y.graph.setDirtyCanvas(!0, !0);
      try {
        await y.queuePrompt(0);
        return;
      } catch (D) {
        throw console.error("Failed to queue workflow:", D), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = h, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: te.clientId
      })
    });
    if (!w.ok) {
      const y = await w.json();
      throw new Error(((f = y.error) == null ? void 0 : f.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) });
function ag(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Gr(e, t) {
  var c, u;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = ag(e), s = (h) => {
    if (!h) return !1;
    const v = h.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (h) => s(h.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const h = a.find(
      (v) => String(v.id) === t
    );
    h && (o = h);
  }
  const i = o.widgets.find(
    (h) => h.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (u = (c = n.graph).afterChange) == null || u.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const og = () => {
  const { dispatch: e } = ke();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Gr(n);
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
      const u = o.widgets.find(
        (w) => w.name === "channel"
      );
      return u && (u.value = "red", typeof u.callback == "function" && u.callback("red")), (v = (h = s.graph).afterChange) == null || v.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function qs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function ig(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Ba(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), u = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++)
    u[h] = c.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: u };
}
function Ba(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const u = r[c], h = c * 4;
    u > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function cg(e) {
  return e.data.every((t) => t === 0);
}
const ls = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = ke(), i = a.images.find((O) => O.id === e), { injectMaskToGraph: c } = og(), { executeWorkflow: u } = Ko();
  lt({ onEscape: s });
  const h = p.useRef(null), v = p.useRef(null), w = p.useRef(null), x = p.useRef(null), [g, k] = p.useState(!1), [S, m] = p.useState("rect"), [d, f] = p.useState({ x: 0, y: 0 }), [y, _] = p.useState({ x: 0, y: 0 }), [j, b] = p.useState([]), [C, A] = p.useState(null), [D, I] = p.useState(!1), W = p.useCallback(() => {
    const O = w.current, V = v.current;
    if (!O || !V) return null;
    const U = V.getBoundingClientRect(), K = O.getBoundingClientRect(), le = O.naturalWidth, pe = O.naturalHeight;
    if (!le || !pe) return null;
    const Te = le / pe, Ue = K.width / K.height;
    let De, Ce, st = 0, wt = 0;
    return Te > Ue ? (De = K.width, Ce = K.width / Te, wt = (K.height - Ce) / 2) : (Ce = K.height, De = K.height * Te, st = (K.width - De) / 2), {
      left: K.left - U.left + st,
      top: K.top - U.top + wt,
      width: De,
      height: Ce
    };
  }, []), J = p.useCallback(() => {
    const O = h.current;
    if (!O) return;
    const V = O.getContext("2d");
    if (!V) return;
    V.clearRect(0, 0, O.width, O.height);
    const U = getComputedStyle(document.documentElement), K = U.getPropertyValue("--comfy-input-bg-active") || U.getPropertyValue("--comfy-input-bg") || U.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", le = W();
    if (x.current && le && (V.save(), V.globalAlpha = 0.5, V.drawImage(
      x.current,
      le.left,
      le.top,
      le.width,
      le.height
    ), V.restore()), g) {
      const pe = Math.min(d.x, y.x), Te = Math.min(d.y, y.y), Ue = Math.abs(d.x - y.x), De = Math.abs(d.y - y.y);
      if (V.save(), V.globalAlpha = 0.3, V.fillStyle = K, V.strokeStyle = "white", V.lineWidth = 2, V.setLineDash([5, 5]), V.beginPath(), S === "rect")
        V.rect(pe, Te, Ue, De);
      else if (S === "ellipse") {
        const Ce = pe + Ue / 2, st = Te + De / 2;
        V.ellipse(Ce, st, Ue / 2, De / 2, 0, 0, 2 * Math.PI);
      } else if (S === "lasso" && j.length > 1) {
        V.moveTo(j[0].x, j[0].y);
        for (let Ce = 1; Ce < j.length; Ce++)
          V.lineTo(j[Ce].x, j[Ce].y);
        V.closePath();
      }
      V.fill(), V.globalAlpha = 1, V.stroke(), V.restore();
    }
  }, [g, d, y, S, j, W]), [E, R] = p.useState([]), P = p.useMemo(() => E.length > 0 ? E[E.length - 1] : w.current ? qs(
    w.current.naturalWidth,
    w.current.naturalHeight
  ) : null, [E]);
  p.useEffect(() => {
    var O;
    (O = w.current) != null && O.naturalWidth && E.length === 0 && R([
      qs(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [E.length]);
  const T = p.useRef(!1), N = p.useRef(0), L = (O) => {
    O.target === O.currentTarget && (T.current = !0);
  }, $ = (O) => {
    O.target === O.currentTarget && T.current && !g && s(), T.current = !1;
  };
  p.useEffect(() => {
    if (!P) return;
    x.current || (x.current = document.createElement("canvas"));
    const O = x.current;
    O.width = P.width, O.height = P.height;
    const V = O.getContext("2d");
    if (!V) return;
    const U = Ba(P, [255, 255, 255], 255);
    V.putImageData(U, 0, 0), J();
  }, [P, J]), p.useEffect(() => {
    const O = () => {
      v.current && h.current && (h.current.width = v.current.clientWidth, h.current.height = v.current.clientHeight, J());
    }, V = new ResizeObserver(O);
    return v.current && V.observe(v.current), O(), () => V.disconnect();
  }, [J]);
  const M = (O) => {
    var pe;
    if (O.button !== 0 || g || D || Date.now() - N.current < 100)
      return;
    O.preventDefault();
    const V = W(), U = (pe = v.current) == null ? void 0 : pe.getBoundingClientRect();
    if (!V || !U) return;
    k(!0);
    const K = Math.max(
      V.left,
      Math.min(O.clientX - U.left, V.left + V.width)
    ), le = Math.max(
      V.top,
      Math.min(O.clientY - U.top, V.top + V.height)
    );
    f({ x: K, y: le }), _({ x: K, y: le }), b(S === "lasso" ? [{ x: K, y: le }] : []), A(null);
  };
  p.useEffect(() => {
    if (!g) return;
    const O = (U) => {
      var Ue;
      const K = W(), le = (Ue = v.current) == null ? void 0 : Ue.getBoundingClientRect();
      if (!K || !le) return;
      const pe = Math.max(
        K.left,
        Math.min(U.clientX - le.left, K.left + K.width)
      ), Te = Math.max(
        K.top,
        Math.min(U.clientY - le.top, K.top + K.height)
      );
      _({ x: pe, y: Te }), S === "lasso" && b((De) => [...De, { x: pe, y: Te }]);
    }, V = (U) => {
      var pe;
      const K = W(), le = (pe = v.current) == null ? void 0 : pe.getBoundingClientRect();
      if (K && le && P && w.current) {
        const Te = Math.max(
          K.left,
          Math.min(U.clientX - le.left, K.left + K.width)
        ), Ue = Math.max(
          K.top,
          Math.min(U.clientY - le.top, K.top + K.height)
        ), De = Math.min(d.x, Te), Ce = Math.min(d.y, Ue), st = Math.abs(d.x - Te), wt = Math.abs(d.y - Ue), Y = S === "lasso";
        if (st > 5 || wt > 5 || Y && j.length > 2) {
          const z = w.current.naturalWidth, oe = w.current.naturalHeight, X = z / K.width, ne = oe / K.height, Ee = ig(P, (Pe) => {
            if (S === "rect") {
              const Qe = (De - K.left) * X, he = (Ce - K.top) * ne, ge = st * X, at = wt * ne;
              Pe.rect(Qe, he, ge, at);
            } else if (S === "ellipse") {
              const Qe = (De - K.left) * X, he = (Ce - K.top) * ne, ge = st * X, at = wt * ne, ar = Qe + ge / 2, mm = he + at / 2;
              Pe.ellipse(
                ar,
                mm,
                ge / 2,
                at / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (S === "lasso" && j.length > 2) {
              const Qe = j[0];
              Pe.moveTo(
                (Qe.x - K.left) * X,
                (Qe.y - K.top) * ne
              );
              for (let he = 1; he < j.length; he++)
                Pe.lineTo(
                  (j[he].x - K.left) * X,
                  (j[he].y - K.top) * ne
                );
              Pe.closePath();
            }
          });
          R((Pe) => [...Pe, Ee]);
        }
      }
      N.current = Date.now(), k(!1), b([]);
    };
    return window.addEventListener("mousemove", O), window.addEventListener("mouseup", V), () => {
      window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", V);
    };
  }, [
    g,
    d.x,
    d.y,
    W,
    P,
    S,
    j
  ]);
  const B = p.useCallback(() => {
    E.length > 1 && R((O) => O.slice(0, -1));
  }, [E.length]);
  p.useEffect(() => {
    const O = (V) => {
      (V.metaKey || V.ctrlKey) && V.key === "z" ? (V.preventDefault(), B()) : V.key === "Escape" && (V.preventDefault(), V.stopPropagation(), V.stopImmediatePropagation(), s(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", O, { capture: !0 }), () => window.removeEventListener("keydown", O, { capture: !0 });
  }, [B, s]);
  const ce = () => {
    if (w.current) {
      const O = qs(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      R((V) => [...V, O]);
    }
  }, Q = async () => {
    if (!P || !w.current) return null;
    I(!0);
    try {
      const { width: O, height: V } = P, U = document.createElement("canvas");
      U.width = O, U.height = V;
      const K = U.getContext("2d");
      if (!K) return null;
      const le = Ba(P, [255, 255, 255], 255);
      K.putImageData(le, 0, 0);
      const pe = await new Promise(
        (wt) => U.toBlob(wt, "image/png")
      );
      if (!pe) return null;
      const Ue = `meld_mask_${Date.now()}.png`, De = new File([pe], Ue, { type: "image/png" }), Ce = new FormData();
      Ce.append("image", De), Ce.append("type", "temp"), Ce.append("overwrite", "true");
      const st = await te.fetchApi("/upload/image", {
        method: "POST",
        body: Ce
      });
      return st.ok ? (await st.json()).name : null;
    } catch (O) {
      return console.error("[Meld] Error uploading mask:", O), null;
    } finally {
      I(!1);
    }
  }, re = async () => {
    if (!i) return;
    const O = await Q();
    O && c(i, O) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, q = async () => {
    if (!i) return;
    const O = await Q();
    O && (t === "run_sequence" && n ? (await u(
      n.workflowName,
      i,
      O,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [i],
        maskFilename: O,
        onSuccess: r
      }
    }));
  }, me = p.useMemo(
    () => P && !cg(P),
    [P]
  );
  return i ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: L,
      onMouseUp: $,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (O) => O.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "rect" ? "active" : ""}`,
                    onClick: () => m("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Iu, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "ellipse" ? "active" : ""}`,
                    onClick: () => m("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Gp, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "lasso" ? "active" : ""}`,
                    onClick: () => m("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(eh, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: v,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: M,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "img",
                      {
                        ref: w,
                        src: rt(i),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (O) => O.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "canvas",
                      {
                        ref: h,
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
                      onClick: re,
                      disabled: !me || D,
                      type: "button",
                      children: [
                        D ? /* @__PURE__ */ l.jsx(lc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Uo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: q,
                      disabled: !me || D,
                      type: "button",
                      children: [
                        D ? /* @__PURE__ */ l.jsx(lc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Hr, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: B,
                      disabled: E.length <= 1 || D,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(fh, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: ce,
                      disabled: !me || D,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(we, { size: 16 }),
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
}, dg = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, s] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState(
    {}
  ), [u, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, g] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, S] = p.useState(e.settings["viewer.thumbnail_window_size"].toString()), [m, d] = p.useState(e.settings["gallery.trash_retention_days"].toString()), [f, y] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [_, j] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, C] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [A, D] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    I,
    W
  ] = p.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    J,
    E
  ] = p.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [R, P] = p.useState(
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
      const Q = Object.keys(a).filter(
        (re) => a[re] !== e.settings[re] && !i[re]
      );
      if (Q.length > 0)
        for (const re of Q)
          await n(re, a[re]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (Q, re) => {
      o((q) => ({
        ...q,
        [Q]: !re
      }));
    },
    handleNumberChange: (Q, re, q, me) => {
      Q === "gallery.initial_load_count" ? h(re) : Q === "gallery.max_load_count" ? w(re) : Q === "gallery.lineage_max_depth" ? g(re) : Q === "viewer.thumbnail_window_size" ? S(re) : Q === "gallery.trash_retention_days" ? d(re) : Q === "gallery.auto_link_phash_threshold" ? y(re) : Q === "gallery.suggest_phash_threshold" ? j(re) : Q === "viewer.details.max_positive_prompt_lines" ? C(re) : Q === "viewer.details.max_negative_prompt_lines" ? D(re) : Q === "fullscreen.details.max_positive_prompt_lines" ? W(re) : Q === "fullscreen.details.max_negative_prompt_lines" ? E(re) : Q === "sidebar.thumbnail_size" && P(re);
      const O = Number.parseInt(re, 10);
      if (!Number.isNaN(O)) {
        let V = O;
        q !== void 0 && V < q && (V = q), me !== void 0 && V > me && (V = me), o((U) => ({
          ...U,
          [Q]: V
        }));
      }
    },
    handleNumberBlur: (Q) => {
      Q.key === "gallery.initial_load_count" ? h(
        a["gallery.initial_load_count"].toString()
      ) : Q.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : Q.key === "gallery.lineage_max_depth" ? g(
        a["gallery.lineage_max_depth"].toString()
      ) : Q.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : Q.key === "gallery.trash_retention_days" ? d(
        a["gallery.trash_retention_days"].toString()
      ) : Q.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : Q.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : Q.key === "viewer.details.max_positive_prompt_lines" ? C(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "viewer.details.max_negative_prompt_lines" ? D(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_positive_prompt_lines" ? W(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "sidebar.thumbnail_size" && P(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((Q) => ({
        ...Q,
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
    validateShortcut: (Q) => Q.trim() ? Q.trim().split(/\s+/).every((q) => !!(q === "next" || q === "prev" || q === "delete" || q.startsWith("tag:") && q.length > 4 || q.startsWith("-tag:") && q.length > 5 || q.startsWith("tag-toggle:") && q.length > 11)) : !0,
    // Input states
    initialLoadCountInput: u,
    maxLoadCountInput: v,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: _,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: A,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: J,
    thumbnailSizeInput: R
  };
}, G = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), ug = ({
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
function Pt({
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
function zu() {
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
function Fu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Wu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function $u(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Uu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(zu, {})
  ] });
}
function Qu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Vu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(zu, {})
  ] });
}
function Bu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Hu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Ku(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function Gu(e) {
  return /* @__PURE__ */ l.jsxs(Pt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const qu = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Fu
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Qu
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Vu
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: $u },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Uu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Wu
  },
  { id: "edit_tags", label: "Edit Tags", icon: Hu },
  { id: "edit_notes", label: "Edit Notes", icon: Ku },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Bu
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Gu
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Vt }
], mg = ({
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
      G,
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
      G,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((u) => ({
              ...u,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((u) => ({
              ...u,
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
    /* @__PURE__ */ l.jsx(G, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (u) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: u.target.value
            })),
            children: qu.map((u) => /* @__PURE__ */ l.jsx("option", { value: u.id, children: u.label }, u.id))
          }
        )
      },
      c
    ))
  ] })
] }), fg = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "0.3.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs(
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
] }), pg = ({
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
      i.map((c, u) => /* @__PURE__ */ l.jsx(
        G,
        {
          label: `Shortcut ${u === 9 ? 0 : u + 1} (Key: ${u === 9 ? 0 : u + 1})`,
          description: `Command to execute when pressing '${u === 9 ? 0 : u + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
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
                const h = s(
                  e[c] || ""
                );
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
      /* @__PURE__ */ l.jsx(
        G,
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
      G,
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
}, hg = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: i,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: u
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      G,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (h) => s((v) => ({
              ...v,
              "gallery.matching_strategy": h.target.value
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
      G,
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
            onChange: (h) => t(
              "gallery.auto_link_phash_threshold",
              h.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      G,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 0,
            max: 100,
            onChange: (h) => t(
              "gallery.suggest_phash_threshold",
              h.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      G,
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
      G,
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
            onChange: (h) => t(
              "gallery.lineage_max_depth",
              h.target.value,
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
      G,
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
            onChange: (h) => t(
              "gallery.trash_retention_days",
              h.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      G,
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
] }), gg = ({
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
      G,
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
      G,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((u) => ({
              ...u,
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
      G,
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
      G,
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
      G,
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
      G,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((u) => ({
              ...u,
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
      G,
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
      G,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((u) => ({
              ...u,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
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
      G,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((u) => ({
              ...u,
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
      G,
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
      G,
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
] }), Yu = () => {
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
    handleNumberBlur: u,
    handleResetShortcuts: h,
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: g,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: d,
    suggestPhashThresholdInput: f,
    maxPositivePromptLinesInput: y,
    maxNegativePromptLinesInput: _,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: b,
    thumbnailSizeInput: C
  } = dg();
  lt({ onEscape: o });
  const A = p.useRef(!1), D = (E) => {
    E.target === E.currentTarget && (A.current = !0);
  }, I = (E) => {
    E.target === E.currentTarget && A.current && o(), A.current = !1;
  }, W = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], J = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          hg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: u,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: m,
            autoLinkPhashThresholdInput: d,
            suggestPhashThresholdInput: f
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          mg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailSizeInput: C,
            initialLoadCountInput: x,
            maxLoadCountInput: g
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          gg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: y,
            maxNegativePromptLinesInput: _
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          ug,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: b
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          pg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(fg, {});
      default:
        return null;
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: D,
        onMouseUp: I,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (E) => E.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: W.map((E) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: J() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, bt = "none", Xu = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = ke(), [o, i] = p.useState([]), [c, u] = p.useState(t), [h, v] = p.useState(""), [w, x] = p.useState(!0), [g, k] = p.useState(!1), S = p.useRef(null), m = e.length > 1, d = p.useRef(!1), f = (I) => {
    I.target === I.currentTarget && (d.current = !0);
  }, y = (I) => {
    I.target === I.currentTarget && d.current && n(), d.current = !1;
  }, _ = p.useCallback(async () => {
    x(!0);
    try {
      const I = await Ho();
      i(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      x(!1);
    }
  }, []);
  p.useEffect(() => {
    _();
  }, [_]), p.useEffect(() => {
    S.current && S.current.focus();
  }, []), lt({ onEscape: n });
  const j = p.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(I.name)
  ), [o, h, c]), b = (I) => {
    const W = I.trim();
    if (W.toLowerCase() === bt) {
      alert(
        `Tag name '${bt}' is reserved for search and cannot be used.`
      );
      return;
    }
    W && !c.includes(W) && (u([...c, W]), v(""));
  }, C = (I) => {
    u(c.filter((W) => W !== I));
  }, A = async () => {
    k(!0);
    try {
      if (m) {
        const I = c.filter((J) => !t.includes(J)), W = t.filter(
          (J) => !c.includes(J)
        );
        await Qa(e, I, W);
      } else
        await Sh(e[0], c);
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      console.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      k(!1);
    }
  }, D = (I) => {
    I.key === "Enter" && h.trim() && (I.preventDefault(), I.stopPropagation(), b(h.trim()));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: y,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(sr, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: m ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            m && /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: m ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(I),
                    children: /* @__PURE__ */ l.jsx(we, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: D
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(h),
                    children: [
                      /* @__PURE__ */ l.jsx(_s, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? h ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : j.map((I) => /* @__PURE__ */ l.jsx(
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
                onClick: A,
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
}, ks = (e, t) => {
  const n = p.useCallback(async (x) => {
    try {
      const g = await bh(x.id);
      return g.workflow ? (await window.app.loadGraphData(
        g.workflow
      ), Z.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (g) {
      return Z.error("Error restoring workflow:", g), alert("Failed to restore workflow."), !1;
    }
  }, []), r = p.useCallback(async (x) => {
    try {
      const g = await Nh(x.id), k = g.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, d = window.LiteGraph.createNode(k);
      if (!d)
        return console.error(`Node type ${k} not found.`), alert(
          `Node type ${k} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const f = g.is_flux ? {
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
      if (d.widgets) {
        for (const [b, C] of Object.entries(f)) {
          const A = g[b];
          if (A != null && A !== "") {
            const D = d.widgets.find(
              (I) => I.name === C
            );
            D && (D.value = A);
          }
        }
        const j = d.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const y = S.canvas.ds.offset, _ = S.canvas.ds.scale;
      return d.pos = [(-y[0] + 400) / _, (-y[1] + 300) / _], S.graph.add(d), S.canvas.selectNode(d), S.canvas.centerOnNode(d), !0;
    } catch (g) {
      return console.error("Error adding Unified Loader:", g), alert("Failed to load settings."), !1;
    }
  }, []), s = p.useCallback(
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
  ), a = p.useCallback(
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
  ), o = p.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = p.useCallback(
    (x) => {
      const g = window.app;
      if (!(g != null && g.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const k = (d) => {
        if (!d) return !1;
        const f = d.replace(/\s+/g, "").toLowerCase();
        return f === "meldimageloader" || f === "loadimage";
      }, S = g.graph._nodes.filter(
        (d) => k(d.type)
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
              (d) => ({
                id: String(d.id),
                type: d.type,
                title: d.title
              })
            ),
            onSelect: (d) => {
              Gr(x, d);
            }
          }
        }), !0;
      const m = Gr(x);
      return m.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: m.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = p.useCallback(
    (x) => {
      const g = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: g }
      });
    },
    [t]
  ), u = p.useCallback(
    async (x, g = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", x, g);
      const k = Array.isArray(x) ? x : [x];
      if (g === "apply") {
        const m = window.app, d = ((S = m == null ? void 0 : m.graph) == null ? void 0 : S._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          d.map((_) => ({
            id: _.id,
            type: _.type
          }))
        );
        const f = d.some(
          (_) => _.type === "LoadImageMask"
        ), y = d.some(
          (_) => _.type === "MeldImageLoader" || _.type === "LoadImage" || _.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: f, hasLoaderNode: y }), !f || !y) {
          const _ = [];
          y || _.push("'Meld Image Loader'"), f || _.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${_.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (k.length > 1) {
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
          payload: { type: "mask_editor", imageId: k[0].id, mode: g }
        });
        return;
      }
      try {
        if (!(await Ou()).some(
          (f) => f.valid && f.mask_count >= 1
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
      } catch (m) {
        console.error("[Meld] Error checking workflows:", m);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: k,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), h = p.useCallback(
    async (x, g) => {
      try {
        const k = x.id, m = (await Bo([k])).restored_ids || [k];
        t({ type: "REMOVE_IMAGES", payload: m }), g == null || g();
      } catch (k) {
        t({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    [t]
  ), v = p.useCallback(
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
    async (x, g) => {
      try {
        const k = await jh(
          x,
          g
        );
        t({ type: "UPDATE_IMAGE", payload: k });
      } catch (k) {
        t({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
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
    handleRunWithMask: u,
    handleRestore: h,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, Ju = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = ke(), { handleUpdateUserNotes: a } = ks(r, s), [o, i] = p.useState(t), [c, u] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), w = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, x = (k) => {
    k.target === k.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const g = p.useCallback(async () => {
    u(!0);
    try {
      await a(e, o), n();
    } catch (k) {
      console.error("Failed to update notes:", k), alert("Failed to update notes.");
    } finally {
      u(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const k = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === h.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), g());
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => {
      window.removeEventListener("keydown", k, {
        capture: !0
      });
    };
  }, [g]), lt({ onEscape: n }), ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(dh, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
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
                onChange: (k) => i(k.target.value)
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
                onClick: g,
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
}, Zu = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ke(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  lt({ onEscape: s });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return ye.createPortal(
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
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                      /* @__PURE__ */ l.jsx(Hr, { size: 12 })
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
}, em = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var P;
  const { dispatch: s } = ke(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [u, h] = p.useState(null), [v, w] = p.useState(!1), [x, g] = p.useState(null), [k, S] = p.useState({}), [m, d] = p.useState({}), [f, y] = p.useState(""), _ = p.useRef(null), j = p.useMemo(() => a.map((T) => {
    let N = T.valid, L = T.reason;
    return r && T.mask_count === 0 && (N = !1, L = "No 'Load Image (as Mask)' node found."), { ...T, valid: N, reason: L };
  }).sort((T, N) => T.valid !== N.valid ? T.valid ? -1 : 1 : T.name.localeCompare(N.name)), [a, r]), b = p.useMemo(() => {
    if (!f.trim()) return j;
    const T = f.toLowerCase();
    return j.filter(
      (N) => N.name.toLowerCase().includes(T)
    );
  }, [j, f]), C = p.useCallback(async () => {
    try {
      c(!0);
      const T = await Ou();
      o(T), h(null);
    } catch (T) {
      h(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  p.useEffect(() => {
    C();
  }, [C]), p.useEffect(() => {
    !i && _.current && _.current.focus();
  }, [i]);
  const A = p.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  lt({ onEscape: A });
  const D = p.useRef(!1), I = p.useCallback((T) => {
    T.target === T.currentTarget && (D.current = !0);
  }, []), W = p.useCallback(
    (T) => {
      T.target === T.currentTarget && D.current && A(), D.current = !1;
    },
    [A]
  ), J = async (T, N) => {
    if (!v)
      try {
        w(!0);
        const L = await t(T, N);
        n == null || n(), L !== !1 && A();
      } catch (L) {
        h(L instanceof Error ? L.message : String(L)), w(!1);
      }
  }, E = async (T) => {
    if (!(k[T] || m[T]))
      try {
        d((M) => ({ ...M, [T]: !0 }));
        const N = await Au(T), L = [], $ = (M) => {
          if (!M) return !1;
          const B = M.replace(/\s+/g, "").toLowerCase();
          return r ? B === "loadimagemask" : B === "meldimageloader" || B === "loadimage";
        };
        if (N.nodes && Array.isArray(N.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            N.nodes.length
          );
          for (const M of N.nodes)
            $(M.type) && (console.log(
              "[Meld] Found target node (UI):",
              M.id,
              M.type,
              M.title
            ), L.push({
              id: String(M.id),
              type: M.type || "",
              title: M.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const M in N) {
            const B = N[M];
            B && typeof B == "object" && $(B.class_type) && (console.log(
              "[Meld] Found target node (API):",
              M,
              B.class_type
            ), L.push({
              id: M,
              type: B.class_type || ""
            }));
          }
        }
        L.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((M) => ({ ...M, [T]: L }));
      } catch (N) {
        console.error("Failed to fetch workflow nodes:", N);
      } finally {
        d((N) => ({ ...N, [T]: !1 }));
      }
  }, R = (T) => {
    if (!T.valid || v) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      J(T.name);
      return;
    }
    x === T.name ? g(null) : (g(T.name), E(T.name));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: W,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Vo, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: A,
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(Su, { size: 20 }),
                /* @__PURE__ */ l.jsx("span", { children: u })
              ] }) : a.length === 0 ? /* @__PURE__ */ l.jsx(
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (P = e[0]) == null ? void 0 : P.filename }),
                      ". Workflows must have at least one",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ l.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
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
                      /* @__PURE__ */ l.jsx(Nn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          ref: _,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: f,
                          onChange: (T) => y(T.target.value)
                        }
                      ),
                      f && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            y(""), (T = _.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(we, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                b.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : b.map((T) => {
                  const N = r ? T.mask_count : T.loader_count + T.load_image_count, L = x === T.name, $ = k[T.name] || [], M = m[T.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => R(T),
                        title: T.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: T.name }),
                            !T.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: T.reason }),
                            T.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: N > 1 ? `Multiple loaders found (${N})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${T.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          T.valid && N <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (B) => {
                                B.stopPropagation(), J(T.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Hr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && N > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (B) => {
                                B.stopPropagation(), R(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Qo,
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
                    L && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: M ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: $.map((B) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => J(T.name, B.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: B.title || B.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                B.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Hr, { size: 12 })
                          ]
                        },
                        B.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: A,
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
}, Ha = async (e, t) => {
  await _h(e, t), fe.getState().removeImages(e);
}, tm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = ke(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = p.useMemo(
    () => s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
      (m) => m.exists !== !1 && (s.settings["gallery.show_parent_images"] || !m.has_children || i)
    ),
    [
      s.viewerMode,
      s.lineageImages,
      s.images,
      s.settings,
      i
    ]
  ), u = p.useRef(s.viewerImageId);
  p.useEffect(() => {
    u.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const h = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  lt({ onEscape: h });
  const v = p.useRef(!1), w = p.useCallback((m) => {
    m.target === m.currentTarget && (v.current = !0);
  }, []), x = p.useCallback(
    (m) => {
      m.target === m.currentTarget && v.current && h(), v.current = !1;
    },
    [h]
  ), g = p.useCallback(
    (m) => {
      if (!o.current) return;
      const d = u.current;
      if (d === null || !m.has(d))
        return;
      const f = c.findIndex(
        (_) => _.id === d
      );
      if (f === -1) return;
      let y = !1;
      for (let _ = f + 1; _ < c.length; _++)
        if (!m.has(c[_].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[_].id, mode: s.viewerMode }
          }), y = !0;
          break;
        }
      if (!y) {
        for (let _ = f - 1; _ >= 0; _--)
          if (!m.has(c[_].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[_].id, mode: s.viewerMode }
            }), y = !0;
            break;
          }
      }
      y || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, c, a]
  ), k = async () => {
    var m, d;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e), y = c.filter(
        (_) => f.has(_.id)
      );
      if (g(f), await Ha(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((d = (m = s.activeModal).onSuccess) == null || d.call(m)), !n && r && r(y), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (f) {
      a({
        type: "SET_ERROR",
        payload: f instanceof Error ? f.message : String(f)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, S = async () => {
    var m, d;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e);
      for (const _ of e) {
        const j = await Ua(_);
        if (!o.current) return;
        for (const b of j)
          f.add(b.id);
      }
      const y = c.filter(
        (_) => f.has(_.id)
      );
      if (g(f), await Ha(
        Array.from(f),
        n
      ), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((d = (m = s.activeModal).onSuccess) == null || d.call(m)), !n && r && r(y), a({
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
  return ye.createPortal(
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
            onClick: (m) => m.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Vt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                            Up,
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
                    onClick: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: k,
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
}, nm = ({ message: e }) => {
  const { dispatch: t } = ke(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return lt({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(Su, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
}, rm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ke(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, u] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  lt({ onEscape: h });
  const v = p.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (v.current = !0);
  }, x = (j) => {
    j.target === j.currentTarget && v.current && h(), v.current = !1;
  }, g = t.images.find((j) => j.id === e), k = p.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], b = await kh(e, j);
      a(b);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    k();
  }, [k]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || j === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await sc(e, j), await Tu(e), await r(), h();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, m = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await sc(e, null), await r(), h();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, d = async (j) => {
    i(!0);
    try {
      const b = await Zh(j), { id: C } = await Lu({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (C === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(C);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, f = (j) => {
    j.preventDefault(), j.stopPropagation(), u(!1);
    const b = j.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && d(b);
  };
  if (!g) return null;
  const y = s.filter((j) => j.is_source_match), _ = s.filter((j) => !j.is_source_match);
  return ye.createPortal(
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
              g.id
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: h,
                children: /* @__PURE__ */ l.jsx(we, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            g.parent_id && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(rh, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    g.parent_filename && /* @__PURE__ */ l.jsx(
                                      "img",
                                      {
                                        src: rt({
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
                                              children: g.parent_filename || "Unknown Image"
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
                      onClick: m,
                      title: "Remove Source",
                      children: /* @__PURE__ */ l.jsx(nh, { size: 16 })
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
                  j.preventDefault(), j.stopPropagation(), u(!0);
                },
                onDragOver: (j) => {
                  j.preventDefault(), j.stopPropagation(), j.dataTransfer.dropEffect = "copy", u(!0);
                },
                onDragLeave: (j) => {
                  j.preventDefault(), j.stopPropagation(), u(!1);
                },
                onDrop: f,
                children: [
                  /* @__PURE__ */ l.jsx(ph, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: y.map((j) => {
                  const b = j.id === g.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(j.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: rt(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          b && /* @__PURE__ */ l.jsx(
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
                _.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: _.map((j) => {
                  const b = j.id === g.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(j.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: rt(j), alt: j.filename }),
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
                                b && /* @__PURE__ */ l.jsx(
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
}, yg = () => {
  const { state: e, dispatch: t } = ke(), { executeWorkflow: n } = Ko();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      em,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, s) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: s
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess;
            for (const i of e.activeModal.images)
              await n(
                r,
                i,
                a,
                s
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      Zu,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Gr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && ye.createPortal(
      /* @__PURE__ */ l.jsx(rm, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ye.createPortal(/* @__PURE__ */ l.jsx(Ru, {}), document.body),
    e.activeModal.type === "settings" && ye.createPortal(/* @__PURE__ */ l.jsx(Yu, {}), document.body),
    e.activeModal.type === "tag_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        Xu,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ye.createPortal(
      /* @__PURE__ */ l.jsx(nm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        tm,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, s;
            e.activeModal.type === "delete_confirm" && ((s = (r = e.activeModal).onSuccess) == null || s.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        ls,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        ls,
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
    e.activeModal.type === "note_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        Ju,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        sg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, lm = (e, t) => {
  const n = p.useCallback(
    (r) => {
      const s = t["gallery.lineage_max_depth"];
      if (s === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, s).map((u) => ({
          id: u.id,
          imgSrc: rt(u)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((u) => u.id === a);
      let i = null;
      if (o ? i = rt(o) : i = rt({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && s > 1) {
        const u = n(o);
        return [c, ...u].slice(0, s);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, sm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ke(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: u,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: g,
    handleEditNotes: k,
    handleUpdateUserNotes: S
  } = ks(t, n), { getParentChain: m } = lm(t.images, t.settings), [d, f] = p.useState(null), [y, _] = p.useState(!1), [j, b] = p.useState(null), [C, A] = p.useState(!1), D = p.useRef(null), I = async (U, K, le = !1) => {
    try {
      await navigator.clipboard.writeText(U), le ? (A(!0), setTimeout(() => A(!1), 2e3)) : (b(K), setTimeout(() => b(null), 2e3));
    } catch (pe) {
      console.error("Failed to copy text: ", pe);
    }
  };
  p.useEffect(() => {
    const U = (le) => {
      le.key === "Escape" && (d ? f(null) : _(!1));
    }, K = (le) => {
      D.current && !D.current.contains(le.target) && _(!1);
    };
    return window.addEventListener("keydown", U), y && document.addEventListener("mousedown", K), () => {
      window.removeEventListener("keydown", U), document.removeEventListener("mousedown", K);
    };
  }, [y, d]);
  const W = m(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, R = rt(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: d,
    setPopupContent: f,
    isMenuOpen: y,
    setIsMenuOpen: _,
    copiedLabel: j,
    popupCopied: C,
    menuRef: D,
    parentChain: W,
    displayFilename: E,
    imgSrc: R,
    handleCopy: I,
    handleClick: (U) => {
      U.shiftKey ? (U.preventDefault(), U.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : U.ctrlKey || U.metaKey || t.selectedIds.size > 0 ? (U.preventDefault(), U.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (U) => {
      U.preventDefault(), U.stopPropagation(), U.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (U) => {
      U.shiftKey ? (U.preventDefault(), U.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : U.ctrlKey || U.metaKey || t.selectedIds.size > 0 ? (U.preventDefault(), U.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (U.preventDefault(), U.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (U) => {
      U.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !U.shiftKey && !U.ctrlKey && !U.metaKey && s || (U.shiftKey || U.ctrlKey || U.metaKey || t.selectedIds.size > 0) && U.preventDefault();
    },
    handleKeyDown: (U) => {
      var le, pe, Te;
      ((le = document.activeElement) == null ? void 0 : le.tagName) === "INPUT" || ((pe = document.activeElement) == null ? void 0 : pe.tagName) === "TEXTAREA" || (Te = document.activeElement) != null && Te.isContentEditable || (U.key === "Enter" || U.key === " ") && (U.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      u(e);
    },
    handleEditNotes: () => {
      k(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      g(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (U = "run") => w(e, U),
    handleUpdateUserNotes: (U) => S(e.id, U),
    fetchFullImageDetails: r
  };
}, Go = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: s,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: u,
  onEditTags: h,
  onEditNotes: v,
  onDelete: w,
  onRestore: x,
  showRestore: g,
  deleteLabel: k,
  showQuickShortcuts: S = !0,
  variant: m = "default",
  iconSize: d = 16,
  buttonClassName: f = ""
}) => {
  const y = (b) => {
    switch (b) {
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
        return u;
      case "edit_tags":
        return h;
      case "edit_notes":
        return v;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, _ = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((b) => b && b !== ""), j = [
    "meld-image-card__menu-container",
    m === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: j, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${f}`,
        onClick: (b) => {
          b.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(oh, { size: d })
      }
    ),
    S && _.map((b, C) => {
      const A = qu.find((W) => W.id === b);
      if (!A || !A.icon) return null;
      const D = A.icon, I = y(b);
      return !I || b === "restore_image" && !g ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${f}`,
          onClick: (W) => {
            W.stopPropagation(), I();
          },
          title: A.label,
          children: /* @__PURE__ */ l.jsx(D, { size: d })
        },
        `${b}-${C}`
      );
    }),
    e && /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Fu,
        handler: s
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Qu,
        handler: o
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Vu,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: $u,
        handler: i
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Uu,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Wu,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Hu,
        handler: h
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Ku,
        handler: v
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Bu,
        handler: u
      },
      ...g ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Gu,
          handler: x,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: k,
        icon: Vt,
        handler: w,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((b) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${b.className || ""}`,
        onMouseDown: (C) => C.stopPropagation(),
        onClick: (C) => {
          C.preventDefault(), C.stopPropagation(), t(!1), setTimeout(() => b.handler(), 0);
        },
        children: [
          /* @__PURE__ */ l.jsx(b.icon, { size: 14, color: b.color }),
          /* @__PURE__ */ l.jsx("span", { children: b.label })
        ]
      },
      b.id
    )) })
  ] });
}, vg = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => ye.createPortal(
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
                s ? /* @__PURE__ */ l.jsx(Uo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  qp,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  we,
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
), am = Xt.memo(
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
      popupCopied: u,
      menuRef: h,
      parentChain: v,
      displayFilename: w,
      imgSrc: x,
      handleCopy: g,
      handleClick: k,
      handleSelectToggle: S,
      handleContainerClick: m,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: y,
      handleAddUnifiedLoader: _,
      handleEditSource: j,
      handleEditTags: b,
      handleEditNotes: C,
      handleSendToWorkflow: A,
      handleRestore: D,
      handleDelete: I,
      handleRunWithWorkflow: W,
      handleRunWithMask: J,
      fetchFullImageDetails: E
    } = sm(e), [R, P] = p.useState("idle");
    p.useEffect(() => {
      e.user_notes && R === "saving" && P("idle");
    }, [e.user_notes, R]);
    const T = (N) => {
      N.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), N.dataTransfer.setData("text/plain", L), fe.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: m,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: T,
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
                onMouseDown: d,
                onClick: (N) => {
                  N.stopPropagation(), k(N);
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
            t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
                (N, L) => N.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: N.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: ($) => {
                      $.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: N.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                    alt: "source thumb"
                  },
                  N.id || L
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const L = await E(e.id);
                  a({
                    title: "Model",
                    text: L.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const L = await E(e.id);
                        g(L.model_name || "-", "Model");
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const L = await E(e.id);
                  a({
                    title: "Positive Prompt",
                    text: L.positive_prompt || L.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const L = await E(e.id);
                        g(
                          L.positive_prompt || L.positive || "-",
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const L = await E(e.id);
                  a({
                    title: "Negative Prompt",
                    text: L.negative_prompt || L.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const L = await E(e.id);
                        g(
                          L.negative_prompt || L.negative || "-",
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
                onClick: (N) => {
                  N.stopPropagation(), b();
                },
                children: [
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((N, L) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: N
                    },
                    `${N}-${L}`
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
                R === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (N) => {
                    N.stopPropagation(), C();
                  },
                  children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(
            Go,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: h,
              settings: t.settings,
              onAddUnifiedLoader: _,
              onRestoreWorkflow: y,
              onSendToWorkflow: A,
              onRunWithWorkflow: W,
              onRunWithMask: (N) => J(N),
              onEditSource: j,
              onEditTags: b,
              onEditNotes: C,
              onRestore: D,
              showRestore: t.viewScope === "trash",
              onDelete: I,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            vg,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (N) => g(N, "", !0),
              isCopied: u
            }
          )
        ]
      }
    );
  }
);
am.displayName = "DetailedImageCard";
const om = Xt.memo(
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
      setIsMenuOpen: u,
      menuRef: h,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: g,
      handleRunWithWorkflow: k,
      handleRunWithMask: S,
      handleEditSource: m,
      handleEditTags: d,
      handleEditNotes: f,
      handleDelete: y,
      handleRestore: _
    } = sm(e), j = v.viewScope === "trash", b = j ? "Delete Permanently" : "Move to Trash", C = (A) => {
      A.stopPropagation();
      let D = String(e.id);
      t && v.selectedIds.size > 0 && (D = Array.from(v.selectedIds).join(",")), A.dataTransfer.setData("text/plain", D), fe.getState().setIsOpen(!0);
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
            Go,
            {
              isMenuOpen: c,
              setIsMenuOpen: u,
              menuRef: h,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: g,
              onRunWithWorkflow: k,
              onRunWithMask: S,
              onEditSource: m,
              onEditTags: d,
              onEditNotes: f,
              onDelete: y,
              onRestore: _,
              showRestore: j,
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
om.displayName = "SimpleImageCard";
const wg = ({ image: e }) => {
  const { state: t } = ke();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(om, { image: e }) : /* @__PURE__ */ l.jsx(am, { image: e });
}, xg = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(null);
  return p.useEffect(() => {
    const c = new IntersectionObserver(
      ([h]) => {
        h.isIntersecting && o(!0);
      },
      { rootMargin: n }
    ), u = i.current;
    return u && c.observe(u), () => {
      u && c.unobserve(u);
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
}, _g = () => {
  const { state: e, dispatch: t } = ke(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await lg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, u = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
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
        style: { width: `${u}%` }
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
        children: /* @__PURE__ */ l.jsx(Iu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(Hp, { size: 14, className: "meld-success-icon" }),
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
}, kg = () => {
  const { state: e } = ke(), { slots: t, addToBucket: n } = fe();
  p.useEffect(() => {
    const r = (s) => {
      var i, c, u;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (u = document.activeElement) != null && u.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (h) => h.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((h) => {
        n(o.id, String(h));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, im = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (p.useEffect(() => {
  const r = (s) => {
    s.key === "Escape" && n();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [n]), /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Enter" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ l.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
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
)), Sg = (e, t, n, r, s) => {
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
            onSuccess: s
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
            onSuccess: s
          }
        });
        break;
      }
      case "move_folder":
        console.warn("move_folder action is not yet implemented"), s == null || s();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: s }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: s
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: s }
        });
        break;
      default:
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, jg = ({ config: e }) => {
  var E;
  const { buckets: t, slots: n, images: r } = fe(), s = n.length, { state: a, dispatch: o } = ke(), [i, c] = p.useState(!1), [u, h] = p.useState(!1), [v, w] = p.useState(!1), [x, g] = p.useState(e.label), [k, S] = p.useState(e.color), m = p.useRef(null), d = p.useRef(null), f = t[e.id] || [], y = f.length;
  p.useEffect(() => {
    const R = (P) => {
      d.current && !d.current.contains(P.target) && c(!1), m.current && !m.current.contains(P.target) && w(!1);
    };
    return (i || v) && document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [i, v]);
  const _ = f.map((R) => {
    const P = Number(R);
    let T = a.images.find((N) => N.id === P);
    return T || (T = a.lineageImages.find((N) => N.id === P)), T || (T = r[R]), T;
  }).filter(Boolean), j = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.add("drag-over");
  }, b = (R) => {
    R.currentTarget.classList.remove("drag-over");
  }, C = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.remove("drag-over");
    const P = R.dataTransfer.getData("text/plain");
    P && P.split(",").forEach((N) => {
      if (N) {
        const L = N.trim(), $ = Number(L);
        let M = a.images.find((B) => B.id === $);
        M || (M = a.lineageImages.find(
          (B) => B.id === $
        )), fe.getState().addToBucket(e.id, L, M);
      }
    });
  }, A = (R, P) => {
    R.stopPropagation(), R.dataTransfer.setData("text/plain", String(P)), R.dataTransfer.setData("application/meld-lt-source-slot", e.id), R.dataTransfer.effectAllowed = "move";
  }, D = (R, P) => {
    R.dataTransfer.dropEffect === "none" && fe.getState().removeFromBucket(e.id, String(P));
  }, I = (R) => {
    if (y === 0) return;
    const P = {
      type: R
    }, T = f.map(($) => Number($)), N = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Sg(
      P,
      T,
      _,
      o,
      () => {
        fe.getState().showToast(N[R] ?? "Done");
      }
    );
  }, W = () => {
    fe.getState().clearBucket(e.id), fe.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, J = () => {
    const R = fe.getState();
    R.slots.length <= 1 || (R.removeSlot(e.id), fe.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: j,
      onDragLeave: b,
      onDrop: C,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: y === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : _.map((R) => {
          const P = "type" in R ? R.type : "output", T = `/api/view?filename=${encodeURIComponent(R.filename)}&type=${P}&subfolder=${encodeURIComponent(R.subfolder || "")}`;
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: R.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (N) => A(N, R.id),
              onDragEnd: (N) => D(N, R.id),
              children: /* @__PURE__ */ l.jsx("img", { src: T, alt: R.filename, draggable: !1 })
            },
            R.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: m, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!v),
                disabled: y === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ l.jsx(Kp, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: sr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: Vo
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: hh
              },
              {
                type: "download",
                label: "Download",
                icon: Br
              },
              {
                type: "delete",
                label: "Delete",
                icon: Vt,
                danger: !0
              }
            ].map((R) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${R.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in R && R.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (P) => P.stopPropagation(),
                onClick: () => {
                  "disabled" in R && R.disabled || (w(!1), setTimeout(() => I(R.type), 0));
                },
                children: [
                  /* @__PURE__ */ l.jsx(R.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: R.label })
                ]
              },
              R.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: y === 0,
              children: /* @__PURE__ */ l.jsx(Yp, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: d, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(Mu, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (R) => g(R.target.value),
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
                          value: k.startsWith("var") ? ((E = k.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : E[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(k) ? k : "#9ca3af",
                          onChange: (R) => S(R.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: k,
                          onChange: (R) => S(R.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
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
                    fe.getState().updateSlot(e.id, {
                      label: x,
                      color: k
                    }), c(!1), fe.getState().showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: J,
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
        u && /* @__PURE__ */ l.jsx(
          im,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: W,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, bg = () => {
  const e = fe((t) => t.toastMessage);
  return e ? /* @__PURE__ */ l.jsx("div", { className: "meld-toast", role: "status", "aria-live": "polite", children: e }) : null;
}, Ng = () => {
  var x;
  kg();
  const { isOpen: e, slots: t, buckets: n, setIsOpen: r } = fe(), { state: s } = ke(), [a, o] = p.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = p.useRef(null), [c, u] = p.useState(!1);
  if (p.useEffect(() => {
    let g = document.getElementById(
      "meld-light-table-portal"
    );
    if (!g) {
      g = document.createElement("div"), g.id = "meld-light-table-portal";
      const k = document.querySelector(".comfyui-body-bottom");
      k ? k.appendChild(g) : document.body.appendChild(g);
    }
    return i.current = g, () => {
    };
  }, []), !e || !i.current) return null;
  const h = () => {
    const g = `slot_${Date.now().toString(36)}`;
    fe.getState().addSlot({
      id: g,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(g);
  }, v = () => {
    t.forEach((g) => {
      fe.getState().clearBucket(g.id);
    }), fe.getState().showToast("All tabs cleared"), u(!1);
  }, w = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((g) => {
        var k;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === g.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(g.id),
            style: { "--tab-color": g.color },
            onDragOver: (S) => {
              S.preventDefault(), o(g.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const m = S.dataTransfer.getData("text/plain");
              m && m.split(",").forEach((f) => {
                if (f) {
                  const y = f.trim(), _ = s.images.find(
                    (j) => String(j.id) === y
                  );
                  fe.getState().addToBucket(g.id, y, _);
                }
              });
            },
            children: [
              g.label,
              "  (",
              ((k = n[g.id]) == null ? void 0 : k.length) || 0,
              ")"
            ]
          },
          g.id
        );
      }),
      /* @__PURE__ */ l.jsx(
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
          children: /* @__PURE__ */ l.jsx(_s, { size: 16 })
        }
      ),
      /* @__PURE__ */ l.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => u(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ l.jsx(uh, { size: 14 }),
            /* @__PURE__ */ l.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
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
          children: /* @__PURE__ */ l.jsx(we, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((g) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === g.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(jg, { config: g })
      },
      g.id
    )) }),
    c && /* @__PURE__ */ l.jsx(
      im,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => u(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(bg, {})
  ] });
  return ye.createPortal(w, i.current);
}, cm = () => {
  const { state: e, refreshFavorites: t } = ke(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState(null), [c, u] = p.useState(""), [h, v] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = p.useCallback(
    async (S, m, d) => {
      S.stopPropagation();
      const f = `Are you sure you want to delete the favorite "${d}"?`;
      if (window.confirm(f))
        try {
          await ac(m), await t();
        } catch (y) {
          Z.error("Failed to delete favorite", y);
        }
    },
    [t]
  ), x = p.useCallback(
    (S, m) => {
      S.stopPropagation(), i(m), u(m.name), v(m.query);
    },
    []
  ), g = p.useCallback(async () => {
    if (!(!o || !c.trim() || !h.trim()))
      try {
        r(!0), await Rh(
          o.id,
          c,
          h
        ), await t(), i(null);
      } catch (S) {
        Z.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, h, t]), k = p.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (m) => m.query === e.searchQuery
    )) {
      const m = e.favorites.find((d) => d.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          await ac(m.id), await t();
        } catch (d) {
          Z.error("Failed to delete favorite:", d);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Ph(e.searchQuery, e.searchQuery), await t();
    } catch (m) {
      Z.error("Failed to save favorite:", m);
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
    setEditFavoriteName: u,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: g,
    handleSaveFavorite: k,
    setToastMessage: a
  };
}, dm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [s, a] = p.useState(!1), [o, i] = p.useState(!1), [c, u] = p.useState(!1);
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
                  children: /* @__PURE__ */ l.jsx(Eu, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
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
                  onMouseEnter: () => u(!0),
                  onMouseLeave: () => u(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ l.jsx(Vt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Cg = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ke(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: u,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: g
  } = cm(), [k, S] = p.useState({ top: 0, left: 0 }), m = p.useRef(null), d = p.useRef(null);
  if (lt({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), p.useEffect(() => {
    if (e) {
      let b = e.left;
      const C = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), S({ top: C, left: b });
    }
  }, [e]), p.useEffect(() => {
    o && d.current && d.current.focus();
  }, [o]), !e) return null;
  const f = (_) => {
    _.stopPropagation(), _.preventDefault();
  }, y = (_) => {
    _.stopPropagation();
  };
  return ye.createPortal(
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
          onMouseDown: (_) => _.stopPropagation()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: m,
          onClick: f,
          onMouseDown: y,
          style: {
            position: "fixed",
            top: k.top,
            left: k.left,
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
                          tr,
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
                children: r.favorites.map((_) => /* @__PURE__ */ l.jsx(
                  dm,
                  {
                    fav: _,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: x,
                    onDelete: w
                  },
                  _.id
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
          onMouseDown: (_) => {
            _.target === _.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (_) => _.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ l.jsx(tr, { size: 20, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                                ref: d,
                                type: "text",
                                value: c,
                                onChange: (_) => u(_.target.value),
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
                                onKeyDown: (_) => {
                                  _.key === "Enter" && g(), _.key === "Escape" && i(null);
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
                                value: h,
                                onChange: (_) => v(_.target.value),
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
                                onKeyDown: (_) => {
                                  _.key === "Enter" && !_.shiftKey && (_.preventDefault(), g()), _.key === "Escape" && i(null);
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
                      onClick: g,
                      disabled: s || !c.trim() || !h.trim(),
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
}, vl = (e) => {
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
}, Eg = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [u, h] = p.useState([]), [v, w] = p.useState([]), x = e.settings["search.show_all_keywords"], [g, k] = p.useState(-1), [S, m] = p.useState(null), d = p.useRef(null), f = p.useRef(e.searchQuery), y = p.useCallback(async () => {
    if (v.length > 0) return;
    const P = await Th();
    w(P);
  }, [v.length]);
  p.useEffect(() => {
    Lh().then((P) => {
      m(P);
    }), x && y();
  }, [y, x]);
  const _ = p.useMemo(() => {
    if (!S) return null;
    const P = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${P}):(.*)$`, "i");
  }, [S]), j = p.useCallback(() => {
    const P = !x;
    P && y(), n("search.show_all_keywords", P);
  }, [x, y, n]), b = r !== f.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    Ih().then((P) => {
      h(P);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), f.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var P;
    (P = d.current) == null || P.focus();
  }, []);
  const C = p.useCallback(
    (P, T = !0) => {
      f.current !== P && (Z.log("SearchBar: triggering search", { query: P }), t({ type: "SET_SEARCH_QUERY", payload: P }), T && c(!1), f.current = P);
    },
    [t]
  );
  p.useEffect(() => {
    const P = setTimeout(async () => {
      if (r === f.current)
        return;
      if (!e.settings["search.input_suggest"] || !_) {
        o([]), c(!1);
        return;
      }
      const T = vl(r), N = T[T.length - 1];
      if (N) {
        const L = N.match(_);
        if (L) {
          const $ = L[1].toLowerCase();
          let M = L[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const B = await Mh(M, $);
          o(B), c(B.length > 0), k(-1);
        } else {
          const $ = N.replace(/^([-!])/, "").toLowerCase();
          if ($ && S) {
            const M = S.all_prefixes.filter((B) => B.startsWith($)).map((B) => ({
              type: B,
              value: "",
              count: 0
            }));
            if (M.length > 0) {
              o(M), c(!0), k(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(P);
  }, [
    r,
    e.settings["search.input_suggest"],
    _,
    S
  ]);
  const A = p.useCallback(
    (P) => {
      var ce;
      const T = vl(r), L = (T.pop() || "").match(/^([-!])/), $ = L ? L[1] : "", B = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(P.type);
      if (P.value === "") {
        const Q = `${[...T, `${$}${P.type}:`].join(" ").trim()}`;
        s(Q);
      } else {
        const Q = B ? P.value : `"${P.value}"`, re = `${[
          ...T,
          `${$}${P.type}:${Q}`
        ].join(" ").trim()} `;
        s(re), o([]), c(!1);
      }
      (ce = d.current) == null || ce.focus();
    },
    [r, S]
  ), D = (P) => {
    P.key === "Enter" ? C(r) : P.key === "Tab" ? i && g >= 0 && (A(a[g]), P.preventDefault()) : P.key === "ArrowDown" ? i && (k((T) => Math.min(T + 1, a.length - 1)), P.preventDefault()) : P.key === "ArrowUp" ? i && (k((T) => Math.max(T - 1, -1)), P.preventDefault()) : P.key === "Escape" && c(!1);
  }, I = p.useCallback(() => {
    s(""), C("");
  }, [C]), W = p.useCallback(
    (P, T, N = !1) => {
      var U;
      const L = vl(r), $ = L[L.length - 1] || "";
      let M = !1;
      const B = $.replace(/^([-!])/, "").toLowerCase();
      B && P.toLowerCase().startsWith(B) && (M = !0);
      const ce = $.match(/^([-!])/), Q = M && ce ? ce[1] : "";
      if (M && L.pop(), N) {
        const K = [...L, `${Q}${P}:`].filter(Boolean).join(" ");
        s(K), (U = d.current) == null || U.focus();
        return;
      }
      const me = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(P) ? T : `"${T}"`, O = `${Q}${P}:${me}`, V = [...L, O].filter(Boolean).join(" ");
      s(V), C(V);
    },
    [r, C, S]
  ), J = p.useCallback(
    (P) => {
      s(P), P || C("");
    },
    [C]
  ), E = p.useCallback(() => {
    if (r === f.current || !_)
      return;
    const P = vl(r), T = P[P.length - 1];
    if (!T) return;
    const N = !!T.match(_), L = T.replace(/^([-!])/, "").toLowerCase(), $ = L && (S == null ? void 0 : S.all_prefixes.some((M) => M.startsWith(L)));
    (N || $) && c(!0);
  }, [r, _, S]), R = p.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: u,
    allKeywords: v,
    showAllKeywords: x,
    toggleShowAllKeywords: j,
    selectedIndex: g,
    setSelectedIndex: k,
    inputRef: d,
    isQueryChanged: b,
    handleSearch: C,
    handleKeyDown: D,
    applySuggestion: A,
    clearSearch: I,
    applySearchSuggestion: W,
    handleInputChange: J,
    handleInputFocus: E,
    handleInputBlur: R
  };
}, ic = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(sr, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(Vp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(mh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(Bp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(bu, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(ju, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(Xp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(Qp, { size: 12 });
    default:
      return null;
  }
}, Mg = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: s,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: u,
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: g,
  onDeleteFavorite: k
}) => {
  const S = (y, _, j) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(y.type, y.value, j === "all"),
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
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: ic(y.type)
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
            children: y.type
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
            children: y.value
          }
        )
      ]
    },
    `${j}-${y.type}:${y.value}:${_}`
  ), m = () => !e || t.length === 0 ? null : /* @__PURE__ */ l.jsx(
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
      children: t.map((y, _) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), s(y);
          },
          onMouseEnter: () => r(_),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: _ === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: ic(y.type)
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
                  width: y.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  y.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(
              "span",
              {
                style: {
                  color: y.value === bt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: y.value === bt ? "bold" : "normal"
                },
                children: y.value === bt ? y.type === "tag" ? `Untagged (${bt})` : `No ${y.type} (${bt})` : y.value
              }
            )
          ] })
        },
        `${y.type}:${y.value}`
      ))
    }
  ), d = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
              (y, _) => S(y, _, "quick")
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
                        onClick: h,
                        style: {
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--meld-accent-color, #3b82f6)",
                          fontSize: "11px",
                          cursor: "pointer"
                        },
                        children: u ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              u && /* @__PURE__ */ l.jsx(
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
                    (y, _) => S({ type: y, value: "" }, _, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), f = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(tr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((y) => /* @__PURE__ */ l.jsx(
              dm,
              {
                fav: y,
                onSelect: x,
                onEdit: g,
                onDelete: k
              },
              y.id
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
      onMouseDown: (y) => {
        y.preventDefault();
      },
      children: [
        m(),
        d(),
        f()
      ]
    }
  );
}, Ig = () => {
  const { state: e } = ke(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: u,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: g,
    applySuggestion: k,
    clearSearch: S,
    applySearchSuggestion: m,
    handleInputChange: d,
    handleInputFocus: f,
    handleInputBlur: y
  } = Eg(), {
    isSaving: _,
    toastMessage: j,
    editingFavorite: b,
    setEditingFavorite: C,
    editFavoriteName: A,
    setEditFavoriteName: D,
    editFavoriteQuery: I,
    setEditFavoriteQuery: W,
    handleDeleteFavorite: J,
    handleEditFavorite: E,
    handleSaveEditFavorite: R,
    handleSaveFavorite: P
  } = cm();
  lt({
    onEscape: () => C(null),
    enabled: !!b
  });
  const T = p.useRef(null), N = p.useRef(!1);
  p.useEffect(() => {
    b && T.current && T.current.focus();
  }, [b]);
  const L = (M) => {
    M.target === M.currentTarget && (N.current = !0);
  }, $ = (M) => {
    M.target === M.currentTarget && N.current && C(null), N.current = !1;
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
                          /* @__PURE__ */ l.jsx(
                            Nn,
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
                        ref: v,
                        type: "text",
                        value: t,
                        onChange: (M) => d(M.target.value),
                        onKeyDown: g,
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
                    e.searchQuery && /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: P,
                        disabled: _,
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
                        children: /* @__PURE__ */ l.jsx(
                          tr,
                          {
                            size: 16,
                            color: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ l.jsx(we, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                Mg,
                {
                  showSuggestions: s,
                  suggestions: r,
                  selectedIndex: u,
                  setSelectedIndex: h,
                  applySuggestion: k,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: m,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), x(M);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: J
                }
              )
            ]
          }
        ),
        b && ye.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: L,
              onMouseUp: $,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(tr, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                                    ref: T,
                                    type: "text",
                                    value: A,
                                    onChange: (M) => D(M.target.value),
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
                                      M.key === "Enter" && R(), M.key === "Escape" && C(null);
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
                                    onChange: (M) => W(M.target.value),
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), R()), M.key === "Escape" && C(null);
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
                          onClick: R,
                          disabled: _ || !A.trim() || !I.trim(),
                          children: _ ? "Saving..." : "Save Changes"
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
}, Tg = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, u] = p.useState(""), [h, v] = p.useState(!1), [w, x] = p.useState(null), [g, k] = p.useState(""), [S, m] = p.useState(!1), d = p.useRef(null), f = p.useCallback(async () => {
    a(!0);
    try {
      const I = await Ho();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    f();
  }, [f]), p.useEffect(() => {
    w !== null && d.current && (d.current.focus(), d.current.select());
  }, [w]);
  const y = async (I) => {
    I.preventDefault();
    const W = c.trim();
    if (!(!W || h)) {
      if (W.toLowerCase() === bt) {
        alert(
          `Tag name '${bt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((J) => J.name.toLowerCase() === W.toLowerCase())) {
        alert(`Tag "${W}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Yh(W), u(""), await f();
      } catch (J) {
        console.error("Failed to add tag:", J);
      } finally {
        v(!1);
      }
    }
  }, _ = async (I, W) => {
    if (confirm(`Are you sure you want to delete tag "${W}"?`))
      try {
        await Xh(I), await f();
      } catch (J) {
        console.error("Failed to delete tag:", J);
      }
  }, j = (I) => {
    x(I.id), k(I.name);
  }, b = () => {
    x(null), k("");
  }, C = async (I) => {
    I.preventDefault();
    const W = g.trim();
    if (!W || w === null || S) return;
    if (W.toLowerCase() === bt) {
      alert(
        `Tag name '${bt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const J = n.find((E) => E.id === w);
    if (J && J.name === W) {
      b();
      return;
    }
    if (n.some(
      (E) => E.id !== w && E.name.toLowerCase() === W.toLowerCase()
    )) {
      alert(`Tag "${W}" already exists.`);
      return;
    }
    m(!0);
    try {
      await Jh(w, W), b(), await f();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      m(!1);
    }
  }, A = (I) => {
    t(`tag:${I}`);
  }, D = p.useMemo(() => n.filter(
    (I) => I.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(sr, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(we, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (I) => u(I.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ l.jsx(_s, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(Nn, { size: 14, className: "meld-tag-search-icon" }),
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
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((I) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === I.id ? /* @__PURE__ */ l.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: C,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: g,
                onChange: (W) => k(W.target.value),
                onKeyDown: (W) => W.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !g.trim(),
                children: /* @__PURE__ */ l.jsx(Uo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: S,
                children: /* @__PURE__ */ l.jsx(we, { size: 14 })
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
              children: /* @__PURE__ */ l.jsx(Nn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(I),
              children: /* @__PURE__ */ l.jsx(Eu, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(I.id, I.name),
              children: /* @__PURE__ */ l.jsx(Vt, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
};
function Lg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Dg = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: u,
    handleEditNotes: h,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: g,
    handleSendToWorkflow: k,
    handleRunWithWorkflow: S,
    handleRunWithMask: m,
    handleEditSource: d
  } = ks(e, t), { getParentChain: f } = lm(a, c), [y, _] = p.useState(!1), [j, b] = p.useState(!1), [C, A] = p.useState(
    c["viewer.show_details_by_default"]
  ), [D, I] = p.useState(null), W = D ?? c["viewer.show_thumbnails"], [J, E] = p.useState(!1), [R, P] = p.useState(!1), [T, N] = p.useState(null), [L, $] = p.useState(null), [M, B] = p.useState(
    null
  ), ce = p.useRef(null), Q = p.useRef(!0);
  p.useEffect(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []);
  const re = p.useRef(s);
  p.useEffect(() => {
    re.current = s;
  }, [s]);
  const q = p.useMemo(() => {
    const Y = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lighttable" && e.viewerLightTableSlotId ? (fe.getState().buckets[e.viewerLightTableSlotId] || []).map((X) => {
      const ne = Number.parseInt(X, 10);
      return a.find((Ee) => Ee.id === ne) || i.find((Ee) => Ee.id === ne) || null;
    }).filter((X) => X !== null) : o === "lineage" ? i : a.filter(
      (se) => se.exists !== !1 && (c["gallery.show_parent_images"] || !se.has_children || Y)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), me = s === null ? -1 : q.findIndex((Y) => Y.id === s), O = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? q : a).find((Y) => Y.id === s), V = p.useCallback(
    async (Y = !1) => {
      if (!O) return;
      const se = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!Y && se === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [O.id],
            hasLineage: !!(O.parent_id || O.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const z = e.viewScope === "trash", oe = /* @__PURE__ */ new Set([O.id]);
        if (se === "lineage") {
          const X = await Ua(O.id);
          for (const ne of X)
            oe.add(ne.id);
        }
        if (!Q.current || re.current === null) return;
        if (q.length > oe.size) {
          let X = !1;
          for (let ne = me + 1; ne < q.length; ne++)
            if (!oe.has(q[ne].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: q[ne].id, mode: o }
              }), X = !0;
              break;
            }
          if (!X) {
            for (let ne = me - 1; ne >= 0; ne--)
              if (!oe.has(q[ne].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: q[ne].id, mode: o }
                }), X = !0;
                break;
              }
          }
          X || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Ha(
          Array.from(oe),
          z
        ), !z) {
          const X = q.filter(
            (ne) => oe.has(ne.id)
          );
          N(X), $(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(oe) });
      } catch (z) {
        t({
          type: "SET_ERROR",
          payload: z instanceof Error ? z.message : String(z)
        });
      }
    },
    [
      O,
      y,
      c,
      e.viewScope,
      q,
      me,
      o,
      t
    ]
  ), U = p.useCallback(() => {
    O && u(O);
  }, [O, u]), K = p.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), le = p.useCallback(async () => {
    const Y = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (me === 0 && o === "gallery" && e.pagination.hasMore && !R && Y) {
      P(!0);
      try {
        const se = e.pagination.limit, z = e.pagination.total, oe = Math.max(0, z - se), X = await Ll(
          oe,
          se,
          e.searchQuery
        );
        if (!Q.current || (t({ type: "APPEND_IMAGES", payload: X }), re.current === null)) return;
        if (X.images.length > 0) {
          const ne = X.images[X.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ne.id, mode: "gallery" }
          });
        }
      } catch (se) {
        console.error("Failed to jump to end:", se);
      } finally {
        P(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    me,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    R,
    y
  ]), pe = p.useCallback(
    (Y) => {
      Y && "stopPropagation" in Y && Y.stopPropagation();
      const se = ce.current;
      se && (document.fullscreenElement ? document.exitFullscreen() : se.requestFullscreen().catch((z) => {
        console.error(
          `Error attempting to enable full-screen mode: ${z.message}`
        );
      }));
    },
    []
  ), Te = p.useCallback(async () => {
    O && (q.length > 1 ? K() : t({ type: "CLOSE_VIEWER" }), await v(O));
  }, [O, q.length, K, v, t]), Ue = p.useCallback(async () => {
    if (!T || T.length === 0) return;
    const Y = T.map((z) => z.id), se = Y[0];
    try {
      const z = await Bo(Y);
      if (!Q.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const oe = z.restored_ids || Y;
        t({ type: "REMOVE_IMAGES", payload: oe });
      }
      if (N(null), !Q.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: se, mode: o }
      });
    } catch (z) {
      t({
        type: "SET_ERROR",
        payload: z instanceof Error ? z.message : String(z)
      });
    }
  }, [T, t, o, e.viewScope]), De = p.useCallback(async () => {
    if (T && T.length > 0)
      await Ue();
    else if (L && L.type === "tags") {
      const { imageId: Y, addTags: se, removeTags: z } = L;
      try {
        await Qa([Y], se, z);
        const oe = (o === "lineage" ? i : a).find((X) => X.id === Y);
        if (oe) {
          const X = [...oe.tags];
          for (const Ee of se)
            X.includes(Ee) || X.push(Ee);
          const ne = X.filter((Ee) => !z.includes(Ee));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...oe, tags: ne }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: Y, mode: o }
          });
        }
        $(null);
      } catch (oe) {
        t({
          type: "SET_ERROR",
          payload: oe instanceof Error ? oe.message : String(oe)
        });
      }
    }
  }, [
    T,
    L,
    Ue,
    a,
    i,
    o,
    t
  ]), Ce = p.useCallback(
    async (Y) => {
      if (!Y || !O) return;
      const se = O.id, z = [...O.tags], oe = Y.split(/\s+/), X = [], ne = [];
      let Ee = !1, Pe = !1, Qe = !1;
      for (const he of oe)
        if (he.startsWith("tag:")) {
          const ge = he.substring(4);
          ge && !z.includes(ge) && !X.includes(ge) && X.push(ge);
        } else if (he.startsWith("-tag:")) {
          const ge = he.substring(5);
          ge && z.includes(ge) && !ne.includes(ge) && ne.push(ge);
        } else if (he.startsWith("tag-toggle:")) {
          const ge = he.substring(11);
          ge && (z.includes(ge) ? ne.includes(ge) || ne.push(ge) : X.includes(ge) || X.push(ge));
        } else he === "next" ? Ee = !0 : he === "prev" ? Pe = !0 : he === "delete" && (Qe = !0);
      if (X.length > 0 || ne.length > 0)
        try {
          await Qa(
            [se],
            X,
            ne
          );
          const he = [...z];
          for (const at of X)
            he.includes(at) || he.push(at);
          const ge = he.filter((at) => !ne.includes(at));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...O, id: se, tags: ge }
          }), $({
            type: "tags",
            imageId: se,
            addTags: [...ne],
            removeTags: [...X]
          }), N(null);
        } catch (he) {
          console.error("Failed to update tags via shortcut:", he);
        }
      Qe ? V(!0) : Ee ? K() : Pe && le();
    },
    [O, t, K, le, V]
  );
  p.useEffect(() => {
    const Y = (z) => {
      const oe = z.target, X = oe.tagName === "INPUT" || oe.tagName === "TEXTAREA" || oe.isContentEditable;
      if (X && z.key !== "Escape") {
        z.key === "Enter" && (z.ctrlKey || z.metaKey) && z.preventDefault();
        return;
      }
      if (s === null) return;
      const ne = z.key === "Delete" || z.key === "Backspace", Ee = z.key === "ArrowRight" || z.key === "ArrowLeft" || z.key === "ArrowDown" || z.key === "ArrowUp", Pe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        z.key
      ), Qe = z.key === "Escape", he = (z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z" || z.code === "KeyZ"), ge = /^[0-9]$/.test(z.key) && !z.ctrlKey && !z.metaKey && !z.altKey && z.code !== "KeyZ";
      if (ne || Ee || Pe || Qe || he || ge)
        if (X)
          if (Qe) {
            if (e.activeModal.type !== "none") {
              z.preventDefault(), z.stopPropagation();
              return;
            }
            z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
          } else
            return;
        else {
          if (Qe && e.activeModal.type !== "none") {
            z.preventDefault(), z.stopPropagation();
            return;
          }
          z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation();
        }
      else
        return;
      if (z.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (z.key === "ArrowRight" || z.key === "ArrowDown")
        K();
      else if (z.key === "ArrowLeft" || z.key === "ArrowUp")
        le();
      else if (z.key === "f" || z.key === "F")
        pe(z);
      else if (z.key === "i" || z.key === "I")
        A((at) => !at);
      else if (z.key === "t" || z.key === "T")
        U();
      else if ((z.key === "r" || z.key === "R") && e.viewScope === "trash")
        Te();
      else if (z.key === "Delete")
        V();
      else if ((z.ctrlKey || z.metaKey) && (z.key === "z" || z.key === "Z"))
        De();
      else if (ge && !X) {
        const at = `viewer.shortcut.${z.key}`, ar = c[at];
        typeof ar == "string" && ar && (B(z.key), setTimeout(() => {
          Q.current && B(null);
        }, 500), Ce(ar));
      }
    };
    window.addEventListener("keydown", Y, { capture: !0 });
    const se = () => {
      const z = !!document.fullscreenElement;
      _(z), A(z ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", se), () => {
      window.removeEventListener("keydown", Y, { capture: !0 }), document.removeEventListener("fullscreenchange", se);
    };
  }, [
    s,
    t,
    pe,
    K,
    le,
    c,
    V,
    e.activeModal.type,
    De,
    U,
    Te,
    e.viewScope,
    Ce
  ]), p.useEffect(() => {
    s !== null && r(s).catch((Y) => {
      console.error("Failed to fetch full image details for viewer:", Y);
    });
  }, [s, r]), p.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (E(!0), Ua(s).then((Y) => {
      Q.current && t({ type: "SET_LINEAGE", payload: Y });
    }).catch((Y) => {
      console.error("Failed to fetch lineage:", Y);
    }).finally(() => {
      Q.current && E(!1);
    }));
  }, [o, s, i.length, t]), p.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || me !== -1 && me >= q.length - 15 && n();
  }, [
    s,
    q.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    me
  ]);
  const st = p.useMemo(() => {
    if (!W || me === -1) return [];
    const Y = c["viewer.thumbnail_window_size"], se = Math.floor(Y / 2);
    let z = Math.max(0, me - se);
    const oe = Math.min(q.length, z + Y);
    return oe === q.length && (z = Math.max(0, oe - Y)), q.slice(z, oe).map((X, ne) => ({
      img: X,
      absIndex: z + ne
    }));
  }, [q, me, c, W]), wt = p.useMemo(() => O ? f(O) : [], [O, f]);
  return p.useEffect(() => {
    var Y, se;
    if (s !== null) {
      if (W) {
        const z = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        z && z.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Y = document.activeElement) == null ? void 0 : Y.tagName) === "CANVAS" && document.activeElement.blur(), (se = ce.current) == null || se.focus();
    }
  }, [s, W]), p.useEffect(() => {
    if (s === null || q.length === 0) return;
    const Y = q.map((Ee) => Ee.id), se = Y.indexOf(s);
    if (se === -1) return;
    const z = y ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: oe, nextId: X } = Lg({
      ids: Y,
      index: se,
      loopEnabled: z,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), ne = setTimeout(() => {
      const Ee = [oe, X].filter(
        (Pe) => Pe !== null && Pe !== s
      );
      Ee.length !== 0 && Promise.allSettled(Ee.map((Pe) => r(Pe))).then(
        (Pe) => {
          for (const Qe of Pe)
            Qe.status === "rejected" && Z.warn(
              "Prefetching adjacent image details failed",
              Qe.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(ne);
  }, [
    s,
    q,
    y,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), p.useEffect(() => {
    if (s === null || q.length === 0) return;
    const Y = q.findIndex(
      (X) => X.id === s
    );
    if (Y === -1) return;
    const se = (X) => rt(X), z = [
      Y + 1,
      Y + 2,
      Y - 1
    ], oe = setTimeout(() => {
      for (const X of z)
        if (X >= 0 && X < q.length) {
          const ne = q[X], Ee = new Image();
          Ee.src = se(ne);
        }
    }, 150);
    return () => clearTimeout(oe);
  }, [s, q]), {
    isFullscreen: y,
    showDetails: C,
    setShowDetails: A,
    showThumbnails: W,
    setShowThumbnailsOverride: I,
    isLoadingLineage: J,
    isJumping: R,
    isMenuOpen: j,
    setIsMenuOpen: b,
    activeShortcutKey: M,
    lastDeletedImages: T,
    setLastDeletedImages: N,
    overlayRef: ce,
    handleNext: K,
    handlePrevious: le,
    handleDelete: V,
    handleUpdateUserNotes: w,
    handleEditNotes: () => O && h(O),
    handleTagEdit: U,
    handleRestore: Te,
    handleUndo: De,
    handleRestoreWorkflow: async () => {
      if (!O) return;
      await x(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!O) return;
      await g(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!O) return;
      k(O) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => O && S(O),
    handleRunWithMask: (Y) => O && m(O, Y),
    handleEditSource: () => O && d(O),
    toggleFullscreen: pe,
    currentIndex: me,
    currentThumbnails: q,
    image: O,
    windowedThumbnails: st,
    parentChain: wt
  };
}, Pg = ({
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
}) }) : null, Rg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle");
  p.useEffect(() => {
    c("idle");
  }, []);
  const u = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], h = u === "always" || u === "if_present" && e.user_notes;
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
            (v, w) => v.imgSrc && /* @__PURE__ */ l.jsx(
              "img",
              {
                src: v.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: v.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              v.id || w
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
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((v) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
        ] }),
        h && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ l.jsx(
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
              children: e.user_notes || /* @__PURE__ */ l.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, um = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = rt(e);
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
              children: a ? /* @__PURE__ */ l.jsx(bu, { size: 12 }) : /* @__PURE__ */ l.jsx(ju, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
um.displayName = "ThumbnailItem";
const Og = ({
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
    um,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Kr, { className: "animate-spin", size: 20 }) })
] }) });
function Ag() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ke(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: u,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: g,
    overlayRef: k,
    handleNext: S,
    handlePrevious: m,
    handleTagEdit: d,
    handleEditNotes: f,
    handleRestore: y,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: C,
    handleRunWithMask: A,
    handleEditSource: D,
    handleDelete: I,
    toggleFullscreen: W,
    image: J,
    windowedThumbnails: E,
    parentChain: R
  } = Dg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), P = p.useRef(null), T = p.useRef(null), { executeWorkflow: N } = Ko(), L = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!J) return null;
  const { viewerImageId: $, viewerMode: M } = e, B = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: k,
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
                B && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Kr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(Cu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(Zp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: W,
                      type: "button",
                      title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: s ? /* @__PURE__ */ l.jsx(ah, { size: 20 }) : /* @__PURE__ */ l.jsx(lh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Go,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: _,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: C,
                      onRunWithMask: A,
                      onEditSource: D,
                      onEditTags: d,
                      onEditNotes: f,
                      onDelete: I,
                      deleteLabel: L,
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
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                    }
                  )
                ] }),
                B && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(Nu, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Kr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: P,
                      src: rt(J),
                      alt: J.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                B && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(Qo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  Rg,
                  {
                    image: J,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: B,
                    parentChain: R,
                    dispatch: t,
                    onEditNotes: f
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Og,
                  {
                    windowedThumbnails: E,
                    viewerImageId: $,
                    currentImage: J,
                    dispatch: t,
                    isLoadingLineage: u,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Pg,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            em,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (ce, Q) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: ce,
                        targetLoaderNodeId: Q
                      }
                    }), !1;
                  const re = e.activeModal.maskFilename;
                  for (const q of e.activeModal.images)
                    await N(
                      ce,
                      q,
                      re,
                      Q
                    );
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            Zu,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (ce) => {
                e.activeModal.type === "node_selection" && Gr(e.activeModal.image, ce);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(nm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            tm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: g
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(rm, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Ru, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(Yu, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            Xu,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            ls,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            ls,
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
                  const ce = e.activeModal.currentIndex + 1;
                  ce < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: ce
                    }
                  }) : t({ type: "CLOSE_VIEWER" });
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            Ju,
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
const zg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = ke(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), [u, h] = p.useState(e.pagination.limit);
  p.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = p.useRef(null), x = p.useRef(null), g = fe((d) => d.buckets), k = p.useMemo(() => {
    const d = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const y of f)
        d.add(Number(y));
    return d;
  }, [g]), S = p.useMemo(() => {
    const d = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((f) => k.has(f.id) ? !1 : e.viewScope === "trash" ? f.exists !== !1 || e.settings["gallery.trash.show_missing"] : f.exists !== !1 && (e.settings["gallery.show_parent_images"] || !f.has_children || d));
  }, [
    e.images,
    e.settings,
    e.viewScope,
    e.searchQuery,
    k
  ]), m = p.useMemo(
    () => S.slice(0, u),
    [S, u]
  );
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (Z.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    S.length,
    r
  ]), p.useEffect(() => {
    const d = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [e.activeModal.type, e.selectedIds.size, t]), p.useEffect(() => {
    const d = new IntersectionObserver(
      (y) => {
        if (y[0].isIntersecting) {
          if (e.isLoading) {
            Z.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          u < S.length ? (Z.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: u,
              newLimit: Math.min(
                u + e.pagination.limit,
                S.length
              ),
              totalAvailableLocally: S.length
            }
          ), h((_) => _ + e.pagination.limit)) : e.pagination.hasMore ? (Z.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Z.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: S.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = w.current;
    return f && d.observe(f), () => {
      f && d.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    u,
    S.length,
    e.pagination.limit,
    e.images.length
  ]), p.useEffect(() => {
    const d = e.viewerImageId ?? x.current;
    if (d !== null && S.some((y) => y.id === d)) {
      const y = S.findIndex((j) => j.id === d);
      if (y >= u) {
        h(
          Math.ceil((y + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const _ = document.querySelector(
        `[data-image-id="${d}"]`
      );
      _ && (_.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    S,
    u,
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
    localLimit: u,
    displayedImages: S,
    visibleImages: m,
    isSearchActive: v,
    loadMoreRef: w
  };
}, Fg = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ke(), { handleRunWithWorkflow: s, handleRunWithMask: a } = ks(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = p.useState(!1), [u, h] = p.useState(null), v = p.useRef(null), [w, x] = p.useState(
    null
  );
  if (p.useEffect(() => {
    const b = document.getElementById("meld-bulk-bar-portal");
    let C = b instanceof HTMLDivElement ? b : null;
    if (!C) {
      C = document.createElement("div"), C.id = "meld-bulk-bar-portal", C.dataset.mountCount = "0";
      const D = document.querySelector(".comfyui-body-bottom");
      D ? D.appendChild(C) : document.body.appendChild(C);
    }
    const A = Number.parseInt(C.dataset.mountCount || "0", 10);
    return C.dataset.mountCount = (A + 1).toString(), x(C), () => {
      if (C) {
        const I = Number.parseInt(
          C.dataset.mountCount || "1",
          10
        ) - 1;
        C.dataset.mountCount = I.toString(), I <= 0 && C.remove();
      }
    };
  }, []), lt({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !w) return null;
  const g = e.viewScope === "trash", k = () => e.images.filter((b) => e.selectedIds.has(b.id)), S = () => {
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, m = (b) => {
    b(), c(!1);
  }, d = () => {
    const b = k(), C = /* @__PURE__ */ new Set();
    for (const A of b)
      if (A.tags)
        for (const D of A.tags)
          C.add(D);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(C)
      }
    });
  }, f = () => {
    const b = k();
    s(b);
  }, y = () => {
    const b = k();
    b.length > 0 && a(b, "run");
  }, _ = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, j = /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${g ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: v,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: S,
            children: [
              /* @__PURE__ */ l.jsx(
                sh,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
              "Action"
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ l.jsx(we, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && u && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => c(!1),
              onMouseDown: (b) => b.stopPropagation()
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu",
              style: {
                bottom: window.innerHeight - u.top + 5,
                left: u.left
              },
              onClick: (b) => b.stopPropagation(),
              children: g ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => m(r),
                    children: [
                      /* @__PURE__ */ l.jsx(Kr, { size: 14 }),
                      " Restore"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => m(n),
                    children: [
                      /* @__PURE__ */ l.jsx(Vt, { size: 14 }),
                      " Delete Permanently"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(d),
                    children: [
                      /* @__PURE__ */ l.jsx(sr, { size: 14 }),
                      " Edit Tags"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(f),
                    children: [
                      /* @__PURE__ */ l.jsx(Vo, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(y),
                    children: [
                      /* @__PURE__ */ l.jsx(ch, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(_),
                    children: [
                      /* @__PURE__ */ l.jsx(Br, { size: 14 }),
                      " Download"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => m(n),
                    children: [
                      /* @__PURE__ */ l.jsx(Vt, { size: 14 }),
                      " Move to Trash"
                    ]
                  }
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
  return ye.createPortal(j, w);
}, Wg = () => {
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
    displayedImages: u,
    visibleImages: h,
    isSearchActive: v,
    loadMoreRef: w
  } = zg(), { isOpen: x, setIsOpen: g } = fe(), k = fe((C) => C.buckets), S = Object.values(k).some((C) => C && C.length > 0);
  Z.log("GalleryPanel: isLightTableOpen =", x);
  const [m, d] = p.useState(!1), [f, y] = p.useState(null), _ = p.useRef(null), j = p.useCallback(() => {
    _.current && (y(
      _.current.getBoundingClientRect()
    ), d(!0));
  }, []), b = p.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), d(!1);
    },
    [t, i, a]
  );
  return Z.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: u.length,
    visibleCount: h.length,
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
          const D = C.dataTransfer.getData("text/plain");
          D && D.split(",").forEach((W) => {
            W && fe.getState().removeFromBucket(A, W.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Vt, { size: 14 }),
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
                  /* @__PURE__ */ l.jsx(we, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: _,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: m ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(
                  tr,
                  {
                    size: 14,
                    fill: m ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  Z.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), g(!x);
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
                    ih,
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
                  color: v ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: v ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(Nn, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(th, { size: 14 }) : /* @__PURE__ */ l.jsx(Cu, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(sr, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(Br, { size: 14 })
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
                  Kr,
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
                children: /* @__PURE__ */ l.jsx(Mu, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Ig, {}) })
        ] }),
        /* @__PURE__ */ l.jsx(_g, {}),
        e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
        s === "tags" ? /* @__PURE__ */ l.jsx(
          Tg,
          {
            onClose: () => a("gallery"),
            onSearch: (C) => {
              t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
            }
          }
        ) : e.isLoading && u.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: h.map((C) => {
                const A = e.settings["sidebar.thumbnail_size"] || 100, D = e.settings["gallery.view_mode"] === "grid_only", I = D && C.width && C.height ? Math.min(
                  A,
                  A * C.width / C.height
                ) + 10 : D ? A + 10 : "100%";
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    "data-image-id": C.id,
                    style: {
                      width: D ? "auto" : "100%",
                      flexShrink: 0,
                      display: D ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ l.jsx(
                      xg,
                      {
                        height: D ? A + 10 : Math.max(A, 150),
                        style: {
                          width: typeof I == "number" ? `${I}px` : I,
                          minWidth: typeof I == "number" ? `${I}px` : I,
                          display: D ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ l.jsx(wg, { image: C })
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
                c >= u.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(Fg, {}),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Ag, {}),
        /* @__PURE__ */ l.jsx(yg, {}),
        m && /* @__PURE__ */ l.jsx(
          Cg,
          {
            anchorRect: f,
            onClose: () => d(!1),
            onSelect: b
          }
        ),
        /* @__PURE__ */ l.jsx(Ng, {})
      ]
    }
  );
};
cc.registerExtension({
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
const $g = document.getElementById(
  "meld-gallery-style"
);
if (!$g) {
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
let wl = null, _t = null;
cc.registerExtension({
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
      const n = await Du();
      Z.init(n.dev_mode), Z.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), Z.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), Z.log("Import completed.");
      }), te.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await Lu({
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
            Z.log("render called", {
              el: n,
              galleryRoot: wl,
              galleryContainer: _t
            }), _t || (Z.log("galleryContainer not found, creating new one"), _t = document.createElement("div"), _t.id = "meld-gallery-container", _t.style.height = "100%", _t.style.width = "100%", _t.style.display = "flex", _t.style.flexDirection = "column"), n.contains(_t) || (Z.log("Appending galleryContainer to el"), n.appendChild(_t)), wl ? Z.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (Z.log("Creating new gallery root"), wl = xu(_t), wl.render(
              Xt.createElement(
                qh,
                null,
                Xt.createElement(Wg)
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
