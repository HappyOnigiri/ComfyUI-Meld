import { api as ee } from "/scripts/api.js";
import { app as tc } from "/scripts/app.js";
function sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nc = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r = Symbol.for("react.element"), af = Symbol.for("react.portal"), of = Symbol.for("react.fragment"), cf = Symbol.for("react.strict_mode"), df = Symbol.for("react.profiler"), uf = Symbol.for("react.provider"), ff = Symbol.for("react.context"), pf = Symbol.for("react.forward_ref"), mf = Symbol.for("react.suspense"), hf = Symbol.for("react.memo"), gf = Symbol.for("react.lazy"), Uo = Symbol.iterator;
function yf(e) {
  return e === null || typeof e != "object" ? null : (e = Uo && e[Uo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lc = Object.assign, sc = {};
function Xn(e, t, n) {
  this.props = e, this.context = t, this.refs = sc, this.updater = n || rc;
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ac() {
}
ac.prototype = Xn.prototype;
function Wa(e, t, n) {
  this.props = e, this.context = t, this.refs = sc, this.updater = n || rc;
}
var $a = Wa.prototype = new ac();
$a.constructor = Wa;
lc($a, Xn.prototype);
$a.isPureReactComponent = !0;
var Vo = Array.isArray, oc = Object.prototype.hasOwnProperty, Ua = { current: null }, ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) oc.call(t, r) && !ic.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: $r, type: e, key: a, ref: o, props: s, _owner: Ua.current };
}
function vf(e, t) {
  return { $$typeof: $r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Va(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $r;
}
function wf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Qo = /\/+/g;
function gs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wf("" + e.key) : t.toString(36);
}
function fl(e, t, n, r, s) {
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
        case $r:
        case af:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + gs(o, 0) : r, Vo(s) ? (n = "", e != null && (n = e.replace(Qo, "$&/") + "/"), fl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (Va(s) && (s = vf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Qo, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Vo(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + gs(a, i);
    o += fl(a, t, n, c, s);
  }
  else if (c = yf(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + gs(a, i++), o += fl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Gr(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return fl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function xf(e) {
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
var He = { current: null }, pl = { transition: null }, _f = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: pl, ReactCurrentOwner: Ua };
function dc() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: Gr, forEach: function(e, t, n) {
  Gr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Gr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Gr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Va(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = Xn;
le.Fragment = of;
le.Profiler = df;
le.PureComponent = Wa;
le.StrictMode = cf;
le.Suspense = mf;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
le.act = dc;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Ua.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) oc.call(t, c) && !ic.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: $r, type: e.type, key: s, ref: a, props: r, _owner: o };
};
le.createContext = function(e) {
  return e = { $$typeof: ff, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: uf, _context: e }, e.Consumer = e;
};
le.createElement = cc;
le.createFactory = function(e) {
  var t = cc.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: pf, render: e };
};
le.isValidElement = Va;
le.lazy = function(e) {
  return { $$typeof: gf, _payload: { _status: -1, _result: e }, _init: xf };
};
le.memo = function(e, t) {
  return { $$typeof: hf, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = pl.transition;
  pl.transition = {};
  try {
    e();
  } finally {
    pl.transition = t;
  }
};
le.unstable_act = dc;
le.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
le.useContext = function(e) {
  return He.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
le.useId = function() {
  return He.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return He.current.useRef(e);
};
le.useState = function(e) {
  return He.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return He.current.useTransition();
};
le.version = "18.3.1";
nc.exports = le;
var p = nc.exports;
const El = /* @__PURE__ */ sf(p);
var uc = { exports: {} }, at = {}, fc = { exports: {} }, pc = {};
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
  function t(b, W) {
    var O = b.length;
    b.push(W);
    e: for (; 0 < O; ) {
      var I = O - 1 >>> 1, Z = b[I];
      if (0 < s(Z, W)) b[I] = W, b[O] = Z, O = I;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var W = b[0], O = b.pop();
    if (O !== W) {
      b[0] = O;
      e: for (var I = 0, Z = b.length, ce = Z >>> 1; I < ce; ) {
        var V = 2 * (I + 1) - 1, z = b[V], T = V + 1, J = b[T];
        if (0 > s(z, O)) T < Z && 0 > s(J, z) ? (b[I] = J, b[T] = O, I = T) : (b[I] = z, b[V] = O, I = V);
        else if (T < Z && 0 > s(J, O)) b[I] = J, b[T] = O, I = T;
        else break e;
      }
    }
    return W;
  }
  function s(b, W) {
    var O = b.sortIndex - W.sortIndex;
    return O !== 0 ? O : b.id - W.id;
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
  var c = [], d = [], h = 1, v = null, w = 3, _ = !1, y = !1, x = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var W = n(d); W !== null; ) {
      if (W.callback === null) r(d);
      else if (W.startTime <= b) r(d), W.sortIndex = W.expirationTime, t(c, W);
      else break;
      W = n(d);
    }
  }
  function g(b) {
    if (x = !1, m(b), !y) if (n(c) !== null) y = !0, N(k);
    else {
      var W = n(d);
      W !== null && P(g, W.startTime - b);
    }
  }
  function k(b, W) {
    y = !1, x && (x = !1, f(L), L = -1), _ = !0;
    var O = w;
    try {
      for (m(W), v = n(c); v !== null && (!(v.expirationTime > W) || b && !R()); ) {
        var I = v.callback;
        if (typeof I == "function") {
          v.callback = null, w = v.priorityLevel;
          var Z = I(v.expirationTime <= W);
          W = e.unstable_now(), typeof Z == "function" ? v.callback = Z : v === n(c) && r(c), m(W);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var ce = !0;
      else {
        var V = n(d);
        V !== null && P(g, V.startTime - W), ce = !1;
      }
      return ce;
    } finally {
      v = null, w = O, _ = !1;
    }
  }
  var S = !1, j = null, L = -1, $ = 5, M = -1;
  function R() {
    return !(e.unstable_now() - M < $);
  }
  function U() {
    if (j !== null) {
      var b = e.unstable_now();
      M = b;
      var W = !0;
      try {
        W = j(!0, b);
      } finally {
        W ? K() : (S = !1, j = null);
      }
    } else S = !1;
  }
  var K;
  if (typeof u == "function") K = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), Y = C.port2;
    C.port1.onmessage = U, K = function() {
      Y.postMessage(null);
    };
  } else K = function() {
    E(U, 0);
  };
  function N(b) {
    j = b, S || (S = !0, K());
  }
  function P(b, W) {
    L = E(function() {
      b(e.unstable_now());
    }, W);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    y || _ || (y = !0, N(k));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(b) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var W = 3;
        break;
      default:
        W = w;
    }
    var O = w;
    w = W;
    try {
      return b();
    } finally {
      w = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, W) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var O = w;
    w = b;
    try {
      return W();
    } finally {
      w = O;
    }
  }, e.unstable_scheduleCallback = function(b, W, O) {
    var I = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? I + O : I) : O = I, b) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = O + Z, b = { id: h++, callback: W, priorityLevel: b, startTime: O, expirationTime: Z, sortIndex: -1 }, O > I ? (b.sortIndex = O, t(d, b), n(c) === null && b === n(d) && (x ? (f(L), L = -1) : x = !0, P(g, O - I))) : (b.sortIndex = Z, t(c, b), y || _ || (y = !0, N(k))), b;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(b) {
    var W = w;
    return function() {
      var O = w;
      w = W;
      try {
        return b.apply(this, arguments);
      } finally {
        w = O;
      }
    };
  };
})(pc);
fc.exports = pc;
var kf = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf = p, st = kf;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mc = /* @__PURE__ */ new Set(), _r = {};
function kn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) mc.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qs = Object.prototype.hasOwnProperty, jf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ho = {}, Bo = {};
function Ef(e) {
  return Qs.call(Bo, e) ? !0 : Qs.call(Ho, e) ? !1 : jf.test(e) ? Bo[e] = !0 : (Ho[e] = !0, !1);
}
function Nf(e, t, n, r) {
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
function Cf(e, t, n, r) {
  if (t === null || typeof t > "u" || Nf(e, t, n, r)) return !0;
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
function Be(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new Be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qa = /[\-:]([a-z])/g;
function Ha(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Qa,
    Ha
  );
  Ae[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Qa, Ha);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Qa, Ha);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ba(e, t, n, r) {
  var s = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Cf(t, n, s, r) && (n = null), r || s === null ? Ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), Hs = Symbol.for("react.profiler"), hc = Symbol.for("react.provider"), gc = Symbol.for("react.context"), Ga = Symbol.for("react.forward_ref"), Bs = Symbol.for("react.suspense"), Ks = Symbol.for("react.suspense_list"), Ya = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), yc = Symbol.for("react.offscreen"), Ko = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = Ko && e[Ko] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, ys;
function ir(e) {
  if (ys === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ys = t && t[1] || "";
  }
  return `
` + ys + e;
}
var vs = !1;
function ws(e, t) {
  if (!e || vs) return "";
  vs = !0;
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
    vs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function Mf(e) {
  switch (e.tag) {
    case 5:
      return ir(e.type);
    case 16:
      return ir("Lazy");
    case 13:
      return ir("Suspense");
    case 19:
      return ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ws(e.type, !1), e;
    case 11:
      return e = ws(e.type.render, !1), e;
    case 1:
      return e = ws(e.type, !0), e;
    default:
      return "";
  }
}
function Gs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case Hs:
      return "Profiler";
    case Ka:
      return "StrictMode";
    case Bs:
      return "Suspense";
    case Ks:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gc:
      return (e.displayName || "Context") + ".Consumer";
    case hc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ga:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ya:
      return t = e.displayName || null, t !== null ? t : Gs(e.type) || "Memo";
    case Ut:
      t = e._payload, e = e._init;
      try {
        return Gs(e(t));
      } catch {
      }
  }
  return null;
}
function bf(e) {
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
      return Gs(t);
    case 8:
      return t === Ka ? "StrictMode" : "Mode";
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
function nn(e) {
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
function vc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function If(e) {
  var t = vc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function qr(e) {
  e._valueTracker || (e._valueTracker = If(e));
}
function wc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Nl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Go(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = nn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function xc(e, t) {
  t = t.checked, t != null && Ba(e, "checked", t, !1);
}
function qs(e, t) {
  xc(e, t);
  var n = nn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xs(e, t.type, nn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Yo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xs(e, t, n) {
  (t !== "number" || Nl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function An(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Js(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: nn(n) };
}
function _c(e, t) {
  var n = nn(t.value), r = nn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? kc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Xr, Sc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
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
}, Lf = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  Lf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function jc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function Ec(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = jc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Tf = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ea(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function ta(e, t) {
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
var na = null;
function qa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ra = null, On = null, Fn = null;
function Jo(e) {
  if (e = Qr(e)) {
    if (typeof ra != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = ts(t), ra(e.stateNode, e.type, t));
  }
}
function Nc(e) {
  On ? Fn ? Fn.push(e) : Fn = [e] : On = e;
}
function Cc() {
  if (On) {
    var e = On, t = Fn;
    if (Fn = On = null, Jo(e), t) for (e = 0; e < t.length; e++) Jo(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function bc() {
}
var xs = !1;
function Ic(e, t, n) {
  if (xs) return e(t, n);
  xs = !0;
  try {
    return Mc(e, t, n);
  } finally {
    xs = !1, (On !== null || Fn !== null) && (bc(), Cc());
  }
}
function Sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ts(n);
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var la = !1;
if (Rt) try {
  var tr = {};
  Object.defineProperty(tr, "passive", { get: function() {
    la = !0;
  } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
} catch {
  la = !1;
}
function Pf(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var pr = !1, Cl = null, Ml = !1, sa = null, Df = { onError: function(e) {
  pr = !0, Cl = e;
} };
function Rf(e, t, n, r, s, a, o, i, c) {
  pr = !1, Cl = null, Pf.apply(Df, arguments);
}
function zf(e, t, n, r, s, a, o, i, c) {
  if (Rf.apply(this, arguments), pr) {
    if (pr) {
      var d = Cl;
      pr = !1, Cl = null;
    } else throw Error(A(198));
    Ml || (Ml = !0, sa = d);
  }
}
function Sn(e) {
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
function Lc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Zo(e) {
  if (Sn(e) !== e) throw Error(A(188));
}
function Af(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Sn(e), t === null) throw Error(A(188));
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
        if (a === n) return Zo(s), e;
        if (a === r) return Zo(s), t;
        a = a.sibling;
      }
      throw Error(A(188));
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
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Tc(e) {
  return e = Af(e), e !== null ? Pc(e) : null;
}
function Pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dc = st.unstable_scheduleCallback, ei = st.unstable_cancelCallback, Of = st.unstable_shouldYield, Ff = st.unstable_requestPaint, Me = st.unstable_now, Wf = st.unstable_getCurrentPriorityLevel, Xa = st.unstable_ImmediatePriority, Rc = st.unstable_UserBlockingPriority, bl = st.unstable_NormalPriority, $f = st.unstable_LowPriority, zc = st.unstable_IdlePriority, Xl = null, Ct = null;
function Uf(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function") try {
    Ct.onCommitFiberRoot(Xl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : Hf, Vf = Math.log, Qf = Math.LN2;
function Hf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vf(e) / Qf | 0) | 0;
}
var Jr = 64, Zr = 4194304;
function dr(e) {
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
function Il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = dr(i) : (a &= o, a !== 0 && (r = dr(a)));
  } else o = n & ~s, o !== 0 ? r = dr(o) : a !== 0 && (r = dr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function Bf(e, t) {
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
function Kf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - _t(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = Bf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function aa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ac() {
  var e = Jr;
  return Jr <<= 1, !(Jr & 4194240) && (Jr = 64), e;
}
function _s(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ur(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
}
function Gf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - _t(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function Ja(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var de = 0;
function Oc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fc, Za, Wc, $c, Uc, oa = !1, el = [], Gt = null, Yt = null, qt = null, jr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Qt = [], Yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ti(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function nr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Qr(t), t !== null && Za(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function qf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Gt = nr(Gt, e, t, n, r, s), !0;
    case "dragenter":
      return Yt = nr(Yt, e, t, n, r, s), !0;
    case "mouseover":
      return qt = nr(qt, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return jr.set(a, nr(jr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Er.set(a, nr(Er.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Vc(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lc(n), t !== null) {
          e.blockedOn = t, Uc(e.priority, function() {
            Wc(n);
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
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      na = r, n.target.dispatchEvent(r), na = null;
    } else return t = Qr(n), t !== null && Za(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ni(e, t, n) {
  ml(e) && n.delete(t);
}
function Xf() {
  oa = !1, Gt !== null && ml(Gt) && (Gt = null), Yt !== null && ml(Yt) && (Yt = null), qt !== null && ml(qt) && (qt = null), jr.forEach(ni), Er.forEach(ni);
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, oa || (oa = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Xf)));
}
function Nr(e) {
  function t(s) {
    return rr(s, e);
  }
  if (0 < el.length) {
    rr(el[0], e);
    for (var n = 1; n < el.length; n++) {
      var r = el[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && rr(Gt, e), Yt !== null && rr(Yt, e), qt !== null && rr(qt, e), jr.forEach(t), Er.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null); ) Vc(n), n.blockedOn === null && Qt.shift();
}
var Wn = Ft.ReactCurrentBatchConfig, Ll = !0;
function Jf(e, t, n, r) {
  var s = de, a = Wn.transition;
  Wn.transition = null;
  try {
    de = 1, eo(e, t, n, r);
  } finally {
    de = s, Wn.transition = a;
  }
}
function Zf(e, t, n, r) {
  var s = de, a = Wn.transition;
  Wn.transition = null;
  try {
    de = 4, eo(e, t, n, r);
  } finally {
    de = s, Wn.transition = a;
  }
}
function eo(e, t, n, r) {
  if (Ll) {
    var s = ia(e, t, n, r);
    if (s === null) Ls(e, t, r, Tl, n), ti(e, r);
    else if (qf(s, e, t, n, r)) r.stopPropagation();
    else if (ti(e, r), t & 4 && -1 < Yf.indexOf(e)) {
      for (; s !== null; ) {
        var a = Qr(s);
        if (a !== null && Fc(a), a = ia(e, t, n, r), a === null && Ls(e, t, r, Tl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Ls(e, t, r, null, n);
  }
}
var Tl = null;
function ia(e, t, n, r) {
  if (Tl = null, e = qa(r), e = un(e), e !== null) if (t = Sn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Lc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Tl = e, null;
}
function Qc(e) {
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
      switch (Wf()) {
        case Xa:
          return 1;
        case Rc:
          return 4;
        case bl:
        case $f:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null, to = null, hl = null;
function Hc() {
  if (hl) return hl;
  var e, t = to, n = t.length, r, s = "value" in Bt ? Bt.value : Bt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return hl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function gl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function tl() {
  return !0;
}
function ri() {
  return !1;
}
function ot(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? tl : ri, this.isPropagationStopped = ri, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = tl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = tl);
  }, persist: function() {
  }, isPersistent: tl }), t;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, no = ot(Jn), Vr = je({}, Jn, { view: 0, detail: 0 }), ep = ot(Vr), ks, Ss, lr, Jl = je({}, Vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ro, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (ks = e.screenX - lr.screenX, Ss = e.screenY - lr.screenY) : Ss = ks = 0, lr = e), ks);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ss;
} }), li = ot(Jl), tp = je({}, Jl, { dataTransfer: 0 }), np = ot(tp), rp = je({}, Vr, { relatedTarget: 0 }), js = ot(rp), lp = je({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sp = ot(lp), ap = je({}, Jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), op = ot(ap), ip = je({}, Jn, { data: 0 }), si = ot(ip), cp = {
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
}, dp = {
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
}, up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function fp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = up[e]) ? !!t[e] : !1;
}
function ro() {
  return fp;
}
var pp = je({}, Vr, { key: function(e) {
  if (e.key) {
    var t = cp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ro, charCode: function(e) {
  return e.type === "keypress" ? gl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), mp = ot(pp), hp = je({}, Jl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ai = ot(hp), gp = je({}, Vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }), yp = ot(gp), vp = je({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wp = ot(vp), xp = je({}, Jl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _p = ot(xp), kp = [9, 13, 27, 32], lo = Rt && "CompositionEvent" in window, mr = null;
Rt && "documentMode" in document && (mr = document.documentMode);
var Sp = Rt && "TextEvent" in window && !mr, Bc = Rt && (!lo || mr && 8 < mr && 11 >= mr), oi = " ", ii = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return kp.indexOf(t.keyCode) !== -1;
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
function Gc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function jp(e, t) {
  switch (e) {
    case "compositionend":
      return Gc(t);
    case "keypress":
      return t.which !== 32 ? null : (ii = !0, oi);
    case "textInput":
      return e = t.data, e === oi && ii ? null : e;
    default:
      return null;
  }
}
function Ep(e, t) {
  if (Cn) return e === "compositionend" || !lo && Kc(e, t) ? (e = Hc(), hl = to = Bt = null, Cn = !1, e) : null;
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
      return Bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Np = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Np[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
  Nc(r), t = Pl(t, "onChange"), 0 < t.length && (n = new no("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, Cr = null;
function Cp(e) {
  ad(e, 0);
}
function Zl(e) {
  var t = In(e);
  if (wc(t)) return e;
}
function Mp(e, t) {
  if (e === "change") return t;
}
var qc = !1;
if (Rt) {
  var Es;
  if (Rt) {
    var Ns = "oninput" in document;
    if (!Ns) {
      var di = document.createElement("div");
      di.setAttribute("oninput", "return;"), Ns = typeof di.oninput == "function";
    }
    Es = Ns;
  } else Es = !1;
  qc = Es && (!document.documentMode || 9 < document.documentMode);
}
function ui() {
  hr && (hr.detachEvent("onpropertychange", Xc), Cr = hr = null);
}
function Xc(e) {
  if (e.propertyName === "value" && Zl(Cr)) {
    var t = [];
    Yc(t, Cr, e, qa(e)), Ic(Cp, t);
  }
}
function bp(e, t, n) {
  e === "focusin" ? (ui(), hr = t, Cr = n, hr.attachEvent("onpropertychange", Xc)) : e === "focusout" && ui();
}
function Ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zl(Cr);
}
function Lp(e, t) {
  if (e === "click") return Zl(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return Zl(t);
}
function Pp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : Pp;
function Mr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Qs.call(t, s) || !St(e[s], t[s])) return !1;
  }
  return !0;
}
function fi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pi(e, t) {
  var n = fi(e);
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
    n = fi(n);
  }
}
function Jc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Zc() {
  for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Nl(e.document);
  }
  return t;
}
function so(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dp(e) {
  var t = Zc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jc(n.ownerDocument.documentElement, n)) {
    if (r !== null && so(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = pi(n, a);
        var o = pi(
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
var Rp = Rt && "documentMode" in document && 11 >= document.documentMode, Mn = null, ca = null, gr = null, da = !1;
function mi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  da || Mn == null || Mn !== Nl(r) || (r = Mn, "selectionStart" in r && so(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gr && Mr(gr, r) || (gr = r, r = Pl(ca, "onSelect"), 0 < r.length && (t = new no("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Mn)));
}
function nl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var bn = { animationend: nl("Animation", "AnimationEnd"), animationiteration: nl("Animation", "AnimationIteration"), animationstart: nl("Animation", "AnimationStart"), transitionend: nl("Transition", "TransitionEnd") }, Cs = {}, ed = {};
Rt && (ed = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
function es(e) {
  if (Cs[e]) return Cs[e];
  if (!bn[e]) return e;
  var t = bn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return Cs[e] = t[n];
  return e;
}
var td = es("animationend"), nd = es("animationiteration"), rd = es("animationstart"), ld = es("transitionend"), sd = /* @__PURE__ */ new Map(), hi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function sn(e, t) {
  sd.set(e, t), kn(t, [e]);
}
for (var Ms = 0; Ms < hi.length; Ms++) {
  var bs = hi[Ms], zp = bs.toLowerCase(), Ap = bs[0].toUpperCase() + bs.slice(1);
  sn(zp, "on" + Ap);
}
sn(td, "onAnimationEnd");
sn(nd, "onAnimationIteration");
sn(rd, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(ld, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function gi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zf(r, t, void 0, e), e.currentTarget = null;
}
function ad(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        gi(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        gi(s, i, d), a = c;
      }
    }
  }
  if (Ml) throw e = sa, Ml = !1, sa = null, e;
}
function ge(e, t) {
  var n = t[ha];
  n === void 0 && (n = t[ha] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (od(t, e, 2, !1), n.add(r));
}
function Is(e, t, n) {
  var r = 0;
  t && (r |= 4), od(n, e, r, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[rl]) {
    e[rl] = !0, mc.forEach(function(n) {
      n !== "selectionchange" && (Op.has(n) || Is(n, !1, e), Is(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || (t[rl] = !0, Is("selectionchange", !1, t));
  }
}
function od(e, t, n, r) {
  switch (Qc(t)) {
    case 1:
      var s = Jf;
      break;
    case 4:
      s = Zf;
      break;
    default:
      s = eo;
  }
  n = s.bind(null, t, n, e), s = void 0, !la || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Ls(e, t, n, r, s) {
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
        if (o = un(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Ic(function() {
    var d = a, h = qa(n), v = [];
    e: {
      var w = sd.get(e);
      if (w !== void 0) {
        var _ = no, y = e;
        switch (e) {
          case "keypress":
            if (gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = mp;
            break;
          case "focusin":
            y = "focus", _ = js;
            break;
          case "focusout":
            y = "blur", _ = js;
            break;
          case "beforeblur":
          case "afterblur":
            _ = js;
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
            _ = li;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = np;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = yp;
            break;
          case td:
          case nd:
          case rd:
            _ = sp;
            break;
          case ld:
            _ = wp;
            break;
          case "scroll":
            _ = ep;
            break;
          case "wheel":
            _ = _p;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = ai;
        }
        var x = (t & 4) !== 0, E = !x && e === "scroll", f = x ? w !== null ? w + "Capture" : null : w;
        x = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, f !== null && (g = Sr(u, f), g != null && x.push(Ir(u, g, m)))), E) break;
          u = u.return;
        }
        0 < x.length && (w = new _(w, y, null, n, h), v.push({ event: w, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", w && n !== na && (y = n.relatedTarget || n.fromElement) && (un(y) || y[zt])) break e;
        if ((_ || w) && (w = h.window === h ? h : (w = h.ownerDocument) ? w.defaultView || w.parentWindow : window, _ ? (y = n.relatedTarget || n.toElement, _ = d, y = y ? un(y) : null, y !== null && (E = Sn(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (_ = null, y = d), _ !== y)) {
          if (x = li, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = ai, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), E = _ == null ? w : In(_), m = y == null ? w : In(y), w = new x(g, u + "leave", _, n, h), w.target = E, w.relatedTarget = m, g = null, un(h) === d && (x = new x(f, u + "enter", y, n, h), x.target = m, x.relatedTarget = E, g = x), E = g, _ && y) t: {
            for (x = _, f = y, u = 0, m = x; m; m = jn(m)) u++;
            for (m = 0, g = f; g; g = jn(g)) m++;
            for (; 0 < u - m; ) x = jn(x), u--;
            for (; 0 < m - u; ) f = jn(f), m--;
            for (; u--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = jn(x), f = jn(f);
            }
            x = null;
          }
          else x = null;
          _ !== null && yi(v, w, _, x, !1), y !== null && E !== null && yi(v, E, y, x, !0);
        }
      }
      e: {
        if (w = d ? In(d) : window, _ = w.nodeName && w.nodeName.toLowerCase(), _ === "select" || _ === "input" && w.type === "file") var k = Mp;
        else if (ci(w)) if (qc) k = Tp;
        else {
          k = Ip;
          var S = bp;
        }
        else (_ = w.nodeName) && _.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (k = Lp);
        if (k && (k = k(e, d))) {
          Yc(v, k, n, h);
          break e;
        }
        S && S(e, w, d), e === "focusout" && (S = w._wrapperState) && S.controlled && w.type === "number" && Xs(w, "number", w.value);
      }
      switch (S = d ? In(d) : window, e) {
        case "focusin":
          (ci(S) || S.contentEditable === "true") && (Mn = S, ca = d, gr = null);
          break;
        case "focusout":
          gr = ca = Mn = null;
          break;
        case "mousedown":
          da = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          da = !1, mi(v, n, h);
          break;
        case "selectionchange":
          if (Rp) break;
        case "keydown":
        case "keyup":
          mi(v, n, h);
      }
      var j;
      if (lo) e: {
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
      else Cn ? Kc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Bc && n.locale !== "ko" && (Cn || L !== "onCompositionStart" ? L === "onCompositionEnd" && Cn && (j = Hc()) : (Bt = h, to = "value" in Bt ? Bt.value : Bt.textContent, Cn = !0)), S = Pl(d, L), 0 < S.length && (L = new si(L, e, null, n, h), v.push({ event: L, listeners: S }), j ? L.data = j : (j = Gc(n), j !== null && (L.data = j)))), (j = Sp ? jp(e, n) : Ep(e, n)) && (d = Pl(d, "onBeforeInput"), 0 < d.length && (h = new si("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = j));
    }
    ad(v, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Sr(e, n), a != null && r.unshift(Ir(e, a, s)), a = Sr(e, t), a != null && r.push(Ir(e, a, s))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yi(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Sr(n, a), c != null && o.unshift(Ir(n, c, i))) : s || (c = Sr(n, a), c != null && o.push(Ir(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Fp = /\r\n?/g, Wp = /\u0000|\uFFFD/g;
function vi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Fp, `
`).replace(Wp, "");
}
function ll(e, t, n) {
  if (t = vi(t), vi(e) !== t && n) throw Error(A(425));
}
function Dl() {
}
var ua = null, fa = null;
function pa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ma = typeof setTimeout == "function" ? setTimeout : void 0, $p = typeof clearTimeout == "function" ? clearTimeout : void 0, wi = typeof Promise == "function" ? Promise : void 0, Up = typeof queueMicrotask == "function" ? queueMicrotask : typeof wi < "u" ? function(e) {
  return wi.resolve(null).then(e).catch(Vp);
} : ma;
function Vp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ts(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Nr(t);
}
function Xt(e) {
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
function xi(e) {
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
var Zn = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + Zn, Lr = "__reactProps$" + Zn, zt = "__reactContainer$" + Zn, ha = "__reactEvents$" + Zn, Qp = "__reactListeners$" + Zn, Hp = "__reactHandles$" + Zn;
function un(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = xi(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = xi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Qr(e) {
  return e = e[Nt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ts(e) {
  return e[Lr] || null;
}
var ga = [], Ln = -1;
function an(e) {
  return { current: e };
}
function ye(e) {
  0 > Ln || (e.current = ga[Ln], ga[Ln] = null, Ln--);
}
function me(e, t) {
  Ln++, ga[Ln] = e.current, e.current = t;
}
var rn = {}, Ue = an(rn), Xe = an(!1), gn = rn;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Rl() {
  ye(Xe), ye(Ue);
}
function _i(e, t, n) {
  if (Ue.current !== rn) throw Error(A(168));
  me(Ue, t), me(Xe, n);
}
function id(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(A(108, bf(e) || "Unknown", s));
  return je({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, gn = Ue.current, me(Ue, e), me(Xe, Xe.current), !0;
}
function ki(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = id(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, ye(Xe), ye(Ue), me(Ue, e)) : ye(Xe), me(Xe, n);
}
var Lt = null, ns = !1, Ps = !1;
function cd(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Bp(e) {
  ns = !0, cd(e);
}
function on() {
  if (!Ps && Lt !== null) {
    Ps = !0;
    var e = 0, t = de;
    try {
      var n = Lt;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Lt = null, ns = !1;
    } catch (s) {
      throw Lt !== null && (Lt = Lt.slice(e + 1)), Dc(Xa, on), s;
    } finally {
      de = t, Ps = !1;
    }
  }
  return null;
}
var Tn = [], Pn = 0, Al = null, Ol = 0, it = [], ct = 0, yn = null, Tt = 1, Pt = "";
function cn(e, t) {
  Tn[Pn++] = Ol, Tn[Pn++] = Al, Al = e, Ol = t;
}
function dd(e, t, n) {
  it[ct++] = Tt, it[ct++] = Pt, it[ct++] = yn, yn = e;
  var r = Tt;
  e = Pt;
  var s = 32 - _t(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - _t(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Tt = 1 << 32 - _t(t) + s | n << s | r, Pt = a + e;
  } else Tt = 1 << a | n << s | r, Pt = e;
}
function ao(e) {
  e.return !== null && (cn(e, 1), dd(e, 1, 0));
}
function oo(e) {
  for (; e === Al; ) Al = Tn[--Pn], Tn[Pn] = null, Ol = Tn[--Pn], Tn[Pn] = null;
  for (; e === yn; ) yn = it[--ct], it[ct] = null, Pt = it[--ct], it[ct] = null, Tt = it[--ct], it[ct] = null;
}
var lt = null, rt = null, we = !1, wt = null;
function ud(e, t) {
  var n = dt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Si(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = Xt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yn !== null ? { id: Tt, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function ya(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function va(e) {
  if (we) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Si(e, t)) {
        if (ya(e)) throw Error(A(418));
        t = Xt(n.nextSibling);
        var r = lt;
        t && Si(e, t) ? ud(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, lt = e);
      }
    } else {
      if (ya(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, we = !1, lt = e;
    }
  }
}
function ji(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function sl(e) {
  if (e !== lt) return !1;
  if (!we) return ji(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !pa(e.type, e.memoizedProps)), t && (t = rt)) {
    if (ya(e)) throw fd(), Error(A(418));
    for (; t; ) ud(e, t), t = Xt(t.nextSibling);
  }
  if (ji(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function fd() {
  for (var e = rt; e; ) e = Xt(e.nextSibling);
}
function Hn() {
  rt = lt = null, we = !1;
}
function io(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var Kp = Ft.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function al(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ei(e) {
  var t = e._init;
  return t(e._payload);
}
function pd(e) {
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
    return f = tn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, g) {
    return u === null || u.tag !== 6 ? (u = Ws(m, f.mode, g), u.return = f, u) : (u = s(u, m), u.return = f, u);
  }
  function c(f, u, m, g) {
    var k = m.type;
    return k === Nn ? h(f, u, m.props.children, g, m.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ut && Ei(k) === u.type) ? (g = s(u, m.props), g.ref = sr(f, u, m), g.return = f, g) : (g = Sl(m.type, m.key, m.props, null, f.mode, g), g.ref = sr(f, u, m), g.return = f, g);
  }
  function d(f, u, m, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = $s(m, f.mode, g), u.return = f, u) : (u = s(u, m.children || []), u.return = f, u);
  }
  function h(f, u, m, g, k) {
    return u === null || u.tag !== 7 ? (u = hn(m, f.mode, g, k), u.return = f, u) : (u = s(u, m), u.return = f, u);
  }
  function v(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = Ws("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Yr:
          return m = Sl(u.type, u.key, u.props, null, f.mode, m), m.ref = sr(f, null, u), m.return = f, m;
        case En:
          return u = $s(u, f.mode, m), u.return = f, u;
        case Ut:
          var g = u._init;
          return v(f, g(u._payload), m);
      }
      if (cr(u) || er(u)) return u = hn(u, f.mode, m, null), u.return = f, u;
      al(f, u);
    }
    return null;
  }
  function w(f, u, m, g) {
    var k = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return k !== null ? null : i(f, u, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yr:
          return m.key === k ? c(f, u, m, g) : null;
        case En:
          return m.key === k ? d(f, u, m, g) : null;
        case Ut:
          return k = m._init, w(
            f,
            u,
            k(m._payload),
            g
          );
      }
      if (cr(m) || er(m)) return k !== null ? null : h(f, u, m, g, null);
      al(f, m);
    }
    return null;
  }
  function _(f, u, m, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(m) || null, i(u, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Yr:
          return f = f.get(g.key === null ? m : g.key) || null, c(u, f, g, k);
        case En:
          return f = f.get(g.key === null ? m : g.key) || null, d(u, f, g, k);
        case Ut:
          var S = g._init;
          return _(f, u, m, S(g._payload), k);
      }
      if (cr(g) || er(g)) return f = f.get(m) || null, h(u, f, g, k, null);
      al(u, g);
    }
    return null;
  }
  function y(f, u, m, g) {
    for (var k = null, S = null, j = u, L = u = 0, $ = null; j !== null && L < m.length; L++) {
      j.index > L ? ($ = j, j = null) : $ = j.sibling;
      var M = w(f, j, m[L], g);
      if (M === null) {
        j === null && (j = $);
        break;
      }
      e && j && M.alternate === null && t(f, j), u = a(M, u, L), S === null ? k = M : S.sibling = M, S = M, j = $;
    }
    if (L === m.length) return n(f, j), we && cn(f, L), k;
    if (j === null) {
      for (; L < m.length; L++) j = v(f, m[L], g), j !== null && (u = a(j, u, L), S === null ? k = j : S.sibling = j, S = j);
      return we && cn(f, L), k;
    }
    for (j = r(f, j); L < m.length; L++) $ = _(j, f, L, m[L], g), $ !== null && (e && $.alternate !== null && j.delete($.key === null ? L : $.key), u = a($, u, L), S === null ? k = $ : S.sibling = $, S = $);
    return e && j.forEach(function(R) {
      return t(f, R);
    }), we && cn(f, L), k;
  }
  function x(f, u, m, g) {
    var k = er(m);
    if (typeof k != "function") throw Error(A(150));
    if (m = k.call(m), m == null) throw Error(A(151));
    for (var S = k = null, j = u, L = u = 0, $ = null, M = m.next(); j !== null && !M.done; L++, M = m.next()) {
      j.index > L ? ($ = j, j = null) : $ = j.sibling;
      var R = w(f, j, M.value, g);
      if (R === null) {
        j === null && (j = $);
        break;
      }
      e && j && R.alternate === null && t(f, j), u = a(R, u, L), S === null ? k = R : S.sibling = R, S = R, j = $;
    }
    if (M.done) return n(
      f,
      j
    ), we && cn(f, L), k;
    if (j === null) {
      for (; !M.done; L++, M = m.next()) M = v(f, M.value, g), M !== null && (u = a(M, u, L), S === null ? k = M : S.sibling = M, S = M);
      return we && cn(f, L), k;
    }
    for (j = r(f, j); !M.done; L++, M = m.next()) M = _(j, f, L, M.value, g), M !== null && (e && M.alternate !== null && j.delete(M.key === null ? L : M.key), u = a(M, u, L), S === null ? k = M : S.sibling = M, S = M);
    return e && j.forEach(function(U) {
      return t(f, U);
    }), we && cn(f, L), k;
  }
  function E(f, u, m, g) {
    if (typeof m == "object" && m !== null && m.type === Nn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yr:
          e: {
            for (var k = m.key, S = u; S !== null; ) {
              if (S.key === k) {
                if (k = m.type, k === Nn) {
                  if (S.tag === 7) {
                    n(f, S.sibling), u = s(S, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ut && Ei(k) === S.type) {
                  n(f, S.sibling), u = s(S, m.props), u.ref = sr(f, S, m), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === Nn ? (u = hn(m.props.children, f.mode, g, m.key), u.return = f, f = u) : (g = Sl(m.type, m.key, m.props, null, f.mode, g), g.ref = sr(f, u, m), g.return = f, f = g);
          }
          return o(f);
        case En:
          e: {
            for (S = m.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === m.containerInfo && u.stateNode.implementation === m.implementation) {
                n(f, u.sibling), u = s(u, m.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = $s(m, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case Ut:
          return S = m._init, E(f, u, S(m._payload), g);
      }
      if (cr(m)) return y(f, u, m, g);
      if (er(m)) return x(f, u, m, g);
      al(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = s(u, m), u.return = f, f = u) : (n(f, u), u = Ws(m, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return E;
}
var Bn = pd(!0), md = pd(!1), Fl = an(null), Wl = null, Dn = null, co = null;
function uo() {
  co = Dn = Wl = null;
}
function fo(e) {
  var t = Fl.current;
  ye(Fl), e._currentValue = t;
}
function wa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  Wl = e, co = Dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function ft(e) {
  var t = e._currentValue;
  if (co !== e) if (e = { context: e, memoizedValue: t, next: null }, Dn === null) {
    if (Wl === null) throw Error(A(308));
    Dn = e, Wl.dependencies = { lanes: 0, firstContext: e };
  } else Dn = Dn.next = e;
  return t;
}
var fn = null;
function po(e) {
  fn === null ? fn = [e] : fn.push(e);
}
function hd(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, po(t)) : (n.next = s.next, s.next = n), t.interleaved = n, At(e, r);
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function mo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, At(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, po(r)) : (t.next = s.next, s.next = t), r.interleaved = t, At(e, n);
}
function yl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ja(e, n);
  }
}
function Ni(e, t) {
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
function $l(e, t, n, r) {
  var s = e.updateQueue;
  Vt = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var w = i.lane, _ = i.eventTime;
      if ((r & w) === w) {
        h !== null && (h = h.next = {
          eventTime: _,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var y = e, x = i;
          switch (w = t, _ = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                v = y.call(_, v, w);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, w = typeof y == "function" ? y.call(_, v, w) : y, w == null) break e;
              v = je({}, v, w);
              break e;
            case 2:
              Vt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else _ = { eventTime: _, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = _, c = v) : h = h.next = _, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    wn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Ci(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(A(191, s));
      s.call(r);
    }
  }
}
var Hr = {}, Mt = an(Hr), Tr = an(Hr), Pr = an(Hr);
function pn(e) {
  if (e === Hr) throw Error(A(174));
  return e;
}
function ho(e, t) {
  switch (me(Pr, t), me(Tr, e), me(Mt, Hr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zs(t, e);
  }
  ye(Mt), me(Mt, t);
}
function Kn() {
  ye(Mt), ye(Tr), ye(Pr);
}
function yd(e) {
  pn(Pr.current);
  var t = pn(Mt.current), n = Zs(t, e.type);
  t !== n && (me(Tr, e), me(Mt, n));
}
function go(e) {
  Tr.current === e && (ye(Mt), ye(Tr));
}
var ke = an(0);
function Ul(e) {
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
var Ds = [];
function yo() {
  for (var e = 0; e < Ds.length; e++) Ds[e]._workInProgressVersionPrimary = null;
  Ds.length = 0;
}
var vl = Ft.ReactCurrentDispatcher, Rs = Ft.ReactCurrentBatchConfig, vn = 0, Se = null, Le = null, Pe = null, Vl = !1, yr = !1, Dr = 0, Gp = 0;
function Fe() {
  throw Error(A(321));
}
function vo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, s, a) {
  if (vn = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, vl.current = e === null || e.memoizedState === null ? Jp : Zp, e = n(r, s), yr) {
    a = 0;
    do {
      if (yr = !1, Dr = 0, 25 <= a) throw Error(A(301));
      a += 1, Pe = Le = null, t.updateQueue = null, vl.current = em, e = n(r, s);
    } while (yr);
  }
  if (vl.current = Ql, t = Le !== null && Le.next !== null, vn = 0, Pe = Le = Se = null, Vl = !1, t) throw Error(A(300));
  return e;
}
function xo() {
  var e = Dr !== 0;
  return Dr = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pe === null ? Se.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
}
function pt() {
  if (Le === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Pe === null ? Se.memoizedState : Pe.next;
  if (t !== null) Pe = t, Le = e;
  else {
    if (e === null) throw Error(A(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Pe === null ? Se.memoizedState = Pe = e : Pe = Pe.next = e;
  }
  return Pe;
}
function Rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zs(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(A(311));
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
      var h = d.lane;
      if ((vn & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Se.lanes |= h, wn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, Se.lanes |= a, wn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function As(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    St(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function vd() {
}
function wd(e, t) {
  var n = Se, r = pt(), s = t(), a = !St(r.memoizedState, s);
  if (a && (r.memoizedState = s, qe = !0), r = r.queue, _o(kd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Pe !== null && Pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, zr(9, _d.bind(null, n, r, s, t), void 0, null), De === null) throw Error(A(349));
    vn & 30 || xd(n, t, s);
  }
  return s;
}
function xd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _d(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sd(t) && jd(e);
}
function kd(e, t, n) {
  return n(function() {
    Sd(t) && jd(e);
  });
}
function Sd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function jd(e) {
  var t = At(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Mi(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xp.bind(null, Se, e), [t.memoizedState, e];
}
function zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ed() {
  return pt().memoizedState;
}
function wl(e, t, n, r) {
  var s = Et();
  Se.flags |= e, s.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function rs(e, t, n, r) {
  var s = pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && vo(r, o.deps)) {
      s.memoizedState = zr(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, s.memoizedState = zr(1 | t, n, a, r);
}
function bi(e, t) {
  return wl(8390656, 8, e, t);
}
function _o(e, t) {
  return rs(2048, 8, e, t);
}
function Nd(e, t) {
  return rs(4, 2, e, t);
}
function Cd(e, t) {
  return rs(4, 4, e, t);
}
function Md(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rs(4, 4, Md.bind(null, t, e), n);
}
function ko() {
}
function Id(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ld(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Td(e, t, n) {
  return vn & 21 ? (St(n, t) || (n = Ac(), Se.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Yp(e, t) {
  var n = de;
  de = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Rs.transition;
  Rs.transition = {};
  try {
    e(!1), t();
  } finally {
    de = n, Rs.transition = r;
  }
}
function Pd() {
  return pt().memoizedState;
}
function qp(e, t, n) {
  var r = en(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dd(e)) Rd(t, n);
  else if (n = hd(e, t, n, r), n !== null) {
    var s = Qe();
    kt(n, e, r, s), zd(n, t, r);
  }
}
function Xp(e, t, n) {
  var r = en(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dd(e)) Rd(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, po(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = hd(e, t, s, r), n !== null && (s = Qe(), kt(n, e, r, s), zd(n, t, r));
  }
}
function Dd(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Rd(e, t) {
  yr = Vl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ja(e, n);
  }
}
var Ql = { readContext: ft, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, Jp = { readContext: ft, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ft, useEffect: bi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wl(
    4194308,
    4,
    Md.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return wl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return wl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qp.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Mi, useDebugValue: ko, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = Mi(!1), t = e[0];
  return e = Yp.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, s = Et();
  if (we) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(A(349));
    vn & 30 || xd(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, bi(kd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, zr(9, _d.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = De.identifierPrefix;
  if (we) {
    var n = Pt, r = Tt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Gp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Zp = {
  readContext: ft,
  useCallback: Id,
  useContext: ft,
  useEffect: _o,
  useImperativeHandle: bd,
  useInsertionEffect: Nd,
  useLayoutEffect: Cd,
  useMemo: Ld,
  useReducer: zs,
  useRef: Ed,
  useState: function() {
    return zs(Rr);
  },
  useDebugValue: ko,
  useDeferredValue: function(e) {
    var t = pt();
    return Td(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = zs(Rr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: vd,
  useSyncExternalStore: wd,
  useId: Pd,
  unstable_isNewReconciler: !1
}, em = { readContext: ft, useCallback: Id, useContext: ft, useEffect: _o, useImperativeHandle: bd, useInsertionEffect: Nd, useLayoutEffect: Cd, useMemo: Ld, useReducer: As, useRef: Ed, useState: function() {
  return As(Rr);
}, useDebugValue: ko, useDeferredValue: function(e) {
  var t = pt();
  return Le === null ? t.memoizedState = e : Td(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = As(Rr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: vd, useSyncExternalStore: wd, useId: Pd, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ls = { isMounted: function(e) {
  return (e = e._reactInternals) ? Sn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), s = en(e), a = Dt(r, s);
  a.payload = t, n != null && (a.callback = n), t = Jt(e, a, s), t !== null && (kt(t, e, s, r), yl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), s = en(e), a = Dt(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Jt(e, a, s), t !== null && (kt(t, e, s, r), yl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = en(e), s = Dt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = Jt(e, s, r), t !== null && (kt(t, e, r, n), yl(t, e, r));
} };
function Ii(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(s, a) : !0;
}
function Ad(e, t, n) {
  var r = !1, s = rn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ft(a) : (s = Je(t) ? gn : Ue.current, r = t.contextTypes, a = (r = r != null) ? Qn(e, s) : rn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ls, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Li(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ls.enqueueReplaceState(t, t.state, null);
}
function _a(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, mo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = ft(a) : (a = Je(t) ? gn : Ue.current, s.context = Qn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (xa(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ls.enqueueReplaceState(s, s.state, null), $l(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Mf(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Os(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var tm = typeof WeakMap == "function" ? WeakMap : Map;
function Od(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Bl || (Bl = !0, Ta = r), ka(e, t);
  }, n;
}
function Fd(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      ka(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ka(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ti(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tm();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = hm.bind(null, e, t, n), t.then(e, e));
}
function Pi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Di(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, Jt(n, t, 1))), n.lanes |= 1), e);
}
var nm = Ft.ReactCurrentOwner, qe = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? md(t, null, n, r) : Bn(t, e.child, n, r);
}
function Ri(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return $n(t, s), r = wo(e, t, n, r, a, s), n = xo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ot(e, t, s)) : (we && n && ao(t), t.flags |= 1, Ve(e, t, r, s), t.child);
}
function zi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Io(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Wd(e, t, a, r, s)) : (e = Sl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mr, n(o, r) && e.ref === t.ref) return Ot(e, t, s);
  }
  return t.flags |= 1, e = tn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wd(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Mr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Ot(e, t, s);
  }
  return Sa(e, t, n, r, s);
}
function $d(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(zn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(zn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, me(zn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, me(zn, nt), nt |= r;
  return Ve(e, t, s, n), t.child;
}
function Ud(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Sa(e, t, n, r, s) {
  var a = Je(n) ? gn : Ue.current;
  return a = Qn(t, a), $n(t, s), n = wo(e, t, n, r, a, s), r = xo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ot(e, t, s)) : (we && r && ao(t), t.flags |= 1, Ve(e, t, n, s), t.child);
}
function Ai(e, t, n, r, s) {
  if (Je(n)) {
    var a = !0;
    zl(t);
  } else a = !1;
  if ($n(t, s), t.stateNode === null) xl(e, t), Ad(t, n, r), _a(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ft(d) : (d = Je(n) ? gn : Ue.current, d = Qn(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Li(t, o, r, d), Vt = !1;
    var w = t.memoizedState;
    o.state = w, $l(t, r, o, s), c = t.memoizedState, i !== r || w !== c || Xe.current || Vt ? (typeof h == "function" && (xa(t, n, h, r), c = t.memoizedState), (i = Vt || Ii(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, gd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : yt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ft(c) : (c = Je(n) ? gn : Ue.current, c = Qn(t, c));
    var _ = n.getDerivedStateFromProps;
    (h = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && Li(t, o, r, c), Vt = !1, w = t.memoizedState, o.state = w, $l(t, r, o, s);
    var y = t.memoizedState;
    i !== v || w !== y || Xe.current || Vt ? (typeof _ == "function" && (xa(t, n, _, r), y = t.memoizedState), (d = Vt || Ii(t, n, d, r, w, y, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ja(e, t, n, r, a, s);
}
function ja(e, t, n, r, s, a) {
  Ud(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && ki(t, n, !1), Ot(e, t, a);
  r = t.stateNode, nm.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Bn(t, e.child, null, a), t.child = Bn(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, s && ki(t, n, !0), t.child;
}
function Vd(e) {
  var t = e.stateNode;
  t.pendingContext ? _i(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _i(e, t.context, !1), ho(e, t.containerInfo);
}
function Oi(e, t, n, r, s) {
  return Hn(), io(s), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Ea = { dehydrated: null, treeContext: null, retryLane: 0 };
function Na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
  var r = t.pendingProps, s = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), me(ke, s & 1), e === null)
    return va(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = os(o, r, 0, null), e = hn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Na(n), t.memoizedState = Ea, e) : So(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return rm(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = tn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = tn(i, a) : (a = hn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Na(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ea, r;
  }
  return a = e.child, e = a.sibling, r = tn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function So(e, t) {
  return t = os({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ol(e, t, n, r) {
  return r !== null && io(r), Bn(t, e.child, null, n), e = So(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function rm(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Os(Error(A(422))), ol(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = os({ mode: "visible", children: r.children }, s, 0, null), a = hn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Bn(t, e.child, null, o), t.child.memoizedState = Na(o), t.memoizedState = Ea, a);
  if (!(t.mode & 1)) return ol(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(A(419)), r = Os(a, r, void 0), ol(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
    if (r = De, r !== null) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, At(e, s), kt(r, e, s, -1));
    }
    return bo(), r = Os(Error(A(421))), ol(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gm.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, rt = Xt(s.nextSibling), lt = t, we = !0, wt = null, e !== null && (it[ct++] = Tt, it[ct++] = Pt, it[ct++] = yn, Tt = e.id, Pt = e.overflow, yn = t), t = So(t, r.children), t.flags |= 4096, t);
}
function Fi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wa(e.return, t, n);
}
function Fs(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Hd(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Fi(e, n, t);
      else if (e.tag === 19) Fi(e, n, t);
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
  if (me(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Ul(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Fs(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Ul(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Fs(t, !0, n, null, a);
      break;
    case "together":
      Fs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      Vd(t), Hn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      Je(t.type) && zl(t);
      break;
    case 4:
      ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      me(Fl, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qd(e, t, n) : (me(ke, ke.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
      me(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Hd(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), me(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $d(e, t, n);
  }
  return Ot(e, t, n);
}
var Bd, Ca, Kd, Gd;
Bd = function(e, t) {
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
Ca = function() {
};
Kd = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, pn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        s = Ys(e, s), r = Ys(e, r), a = [];
        break;
      case "select":
        s = je({}, s, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = Js(e, s), r = Js(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Dl);
    }
    ea(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_r.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (_r.hasOwnProperty(d) ? (c != null && d === "onScroll" && ge("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Gd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!we) switch (e.tailMode) {
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
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function sm(e, t, n) {
  var r = t.pendingProps;
  switch (oo(t), t.tag) {
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
      return We(t), null;
    case 1:
      return Je(t.type) && Rl(), We(t), null;
    case 3:
      return r = t.stateNode, Kn(), ye(Xe), ye(Ue), yo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ra(wt), wt = null))), Ca(e, t), We(t), null;
    case 5:
      go(t);
      var s = pn(Pr.current);
      if (n = t.type, e !== null && t.stateNode != null) Kd(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return We(t), null;
        }
        if (e = pn(Mt.current), sl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Lr] = a, e = (t.mode & 1) !== 0, n) {
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
              for (s = 0; s < ur.length; s++) ge(ur[s], r);
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
              Go(r, a), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ge("invalid", r);
              break;
            case "textarea":
              qo(r, a), ge("invalid", r);
          }
          ea(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && ll(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && ll(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : _r.hasOwnProperty(o) && i != null && o === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              qr(r), Yo(r, a, !0);
              break;
            case "textarea":
              qr(r), Xo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Dl);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Lr] = r, Bd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ta(n, r), n) {
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
                for (s = 0; s < ur.length; s++) ge(ur[s], e);
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
                Go(e, r), s = Ys(e, r), ge("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = je({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                qo(e, r), s = Js(e, r), ge("invalid", e);
                break;
              default:
                s = r;
            }
            ea(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Ec(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Sc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && kr(e, c) : typeof c == "number" && kr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (_r.hasOwnProperty(a) ? c != null && a === "onScroll" && ge("scroll", e) : c != null && Ba(e, a, c, o));
            }
            switch (n) {
              case "input":
                qr(e), Yo(e, r, !1);
                break;
              case "textarea":
                qr(e), Xo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? An(e, !!r.multiple, a, !1) : r.defaultValue != null && An(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Dl);
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
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = pn(Pr.current), pn(Mt.current), sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              ll(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ll(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return We(t), null;
    case 13:
      if (ye(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && rt !== null && t.mode & 1 && !(t.flags & 128)) fd(), Hn(), t.flags |= 98560, a = !1;
        else if (a = sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(A(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(A(317));
            a[Nt] = t;
          } else Hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          We(t), a = !1;
        } else wt !== null && (Ra(wt), wt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : bo())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
    case 4:
      return Kn(), Ca(e, t), e === null && br(t.stateNode.containerInfo), We(t), null;
    case 10:
      return fo(t.type._context), We(t), null;
    case 17:
      return Je(t.type) && Rl(), We(t), null;
    case 19:
      if (ye(ke), a = t.memoizedState, a === null) return We(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) ar(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ul(e), o !== null) {
            for (t.flags |= 128, ar(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Me() > Yn && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ul(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !we) return We(t), null;
        } else 2 * Me() - a.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Me(), t.sibling = null, n = ke.current, me(ke, r ? n & 1 | 2 : n & 1), t) : (We(t), null);
    case 22:
    case 23:
      return Mo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function am(e, t) {
  switch (oo(t), t.tag) {
    case 1:
      return Je(t.type) && Rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Kn(), ye(Xe), ye(Ue), yo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return go(t), null;
    case 13:
      if (ye(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        Hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(ke), null;
    case 4:
      return Kn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var il = !1, $e = !1, om = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function Ma(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Wi = !1;
function im(e, t) {
  if (ua = Ll, e = Zc(), so(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, w = null;
        t: for (; ; ) {
          for (var _; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (_ = v.firstChild) !== null; )
            w = v, v = _;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === s && (i = o), w === a && ++h === r && (c = o), (_ = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = _;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fa = { focusedElem: e, selectionRange: n }, Ll = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
  else for (; Q !== null; ) {
    t = Q;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, E = y.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : yt(t.type, x), E);
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
          throw Error(A(163));
      }
    } catch (g) {
      Ee(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Q = e;
      break;
    }
    Q = t.return;
  }
  return y = Wi, Wi = !1, y;
}
function vr(e, t, n) {
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
function ss(e, t) {
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
function ba(e) {
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
function Yd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Lr], delete t[ha], delete t[Qp], delete t[Hp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $i(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Dl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), e = e.sibling;
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), e = e.sibling;
}
var Re = null, vt = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Xd(e, t, n), n = n.sibling;
}
function Xd(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function") try {
    Ct.onCommitFiberUnmount(Xl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      $e || Rn(n, t);
    case 6:
      var r = Re, s = vt;
      Re = null, $t(e, t, n), Re = r, vt = s, Re !== null && (vt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (vt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Ts(e.parentNode, n) : e.nodeType === 1 && Ts(e, n), Nr(e)) : Ts(Re, n.stateNode));
      break;
    case 4:
      r = Re, s = vt, Re = n.stateNode.containerInfo, vt = !0, $t(e, t, n), Re = r, vt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ma(n, t, o), s = s.next;
        } while (s !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!$e && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
      }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null, $t(e, t, n), $e = r) : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function Ui(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()), t.forEach(function(r) {
      var s = ym.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Re = i.stateNode, vt = !1;
            break e;
          case 3:
            Re = i.stateNode.containerInfo, vt = !0;
            break e;
          case 4:
            Re = i.stateNode.containerInfo, vt = !0;
            break e;
        }
        i = i.return;
      }
      if (Re === null) throw Error(A(160));
      Xd(a, o, s), Re = null, vt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ee(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Jd(t, e), t = t.sibling;
}
function Jd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ht(t, e), jt(e), r & 4) {
        try {
          vr(3, e, e.return), ss(3, e);
        } catch (x) {
          Ee(e, e.return, x);
        }
        try {
          vr(5, e, e.return);
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 1:
      ht(t, e), jt(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (ht(t, e), jt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          kr(s, "");
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && xc(s, a), ta(i, o);
          var d = ta(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? Ec(s, v) : h === "dangerouslySetInnerHTML" ? Sc(s, v) : h === "children" ? kr(s, v) : Ba(s, h, v, d);
          }
          switch (i) {
            case "input":
              qs(s, a);
              break;
            case "textarea":
              _c(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var _ = a.value;
              _ != null ? An(s, !!a.multiple, _, !1) : w !== !!a.multiple && (a.defaultValue != null ? An(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : An(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Lr] = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ht(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ht(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (x) {
        Ee(e, e.return, x);
      }
      break;
    case 4:
      ht(t, e), jt(e);
      break;
    case 13:
      ht(t, e), jt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (No = Me())), r & 4 && Ui(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (d = $e) || h, ht(t, e), $e = d) : ht(t, e), jt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (Q = e, h = e.child; h !== null; ) {
          for (v = Q = h; Q !== null; ) {
            switch (w = Q, _ = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vr(4, w, w.return);
                break;
              case 1:
                Rn(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    Ee(r, n, x);
                  }
                }
                break;
              case 5:
                Rn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  Qi(v);
                  continue;
                }
            }
            _ !== null ? (_.return = w, Q = _) : Qi(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = jc("display", o));
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
      ht(t, e), jt(e), r & 4 && Ui(e);
      break;
    case 21:
      break;
    default:
      ht(
        t,
        e
      ), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (kr(s, ""), r.flags &= -33);
          var a = $i(e);
          La(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = $i(e);
          Ia(e, i, o);
          break;
        default:
          throw Error(A(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cm(e, t, n) {
  Q = e, Zd(e);
}
function Zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var s = Q, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || il;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || $e;
        i = il;
        var d = $e;
        if (il = o, ($e = c) && !d) for (Q = s; Q !== null; ) o = Q, c = o.child, o.tag === 22 && o.memoizedState !== null ? Hi(s) : c !== null ? (c.return = o, Q = c) : Hi(s);
        for (; a !== null; ) Q = a, Zd(a), a = a.sibling;
        Q = s, il = i, $e = d;
      }
      Vi(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, Q = a) : Vi(e);
  }
}
function Vi(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $e || ss(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$e) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Ci(t, a, r);
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
              Ci(t, o, n);
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
                  v !== null && Nr(v);
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
            throw Error(A(163));
        }
        $e || t.flags & 512 && ba(t);
      } catch (w) {
        Ee(t, t.return, w);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function Qi(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function Hi(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ss(4, t);
          } catch (c) {
            Ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ee(t, s, c);
            }
          }
          var a = t.return;
          try {
            ba(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ba(t);
          } catch (c) {
            Ee(t, o, c);
          }
      }
    } catch (c) {
      Ee(t, t.return, c);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, Q = i;
      break;
    }
    Q = t.return;
  }
}
var dm = Math.ceil, Hl = Ft.ReactCurrentDispatcher, jo = Ft.ReactCurrentOwner, ut = Ft.ReactCurrentBatchConfig, ie = 0, De = null, be = null, ze = 0, nt = 0, zn = an(0), Te = 0, Ar = null, wn = 0, as = 0, Eo = 0, wr = null, Ye = null, No = 0, Yn = 1 / 0, It = null, Bl = !1, Ta = null, Zt = null, cl = !1, Kt = null, Kl = 0, xr = 0, Pa = null, _l = -1, kl = 0;
function Qe() {
  return ie & 6 ? Me() : _l !== -1 ? _l : _l = Me();
}
function en(e) {
  return e.mode & 1 ? ie & 2 && ze !== 0 ? ze & -ze : Kp.transition !== null ? (kl === 0 && (kl = Ac()), kl) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qc(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < xr) throw xr = 0, Pa = null, Error(A(185));
  Ur(e, n, r), (!(ie & 2) || e !== De) && (e === De && (!(ie & 2) && (as |= n), Te === 4 && Ht(e, ze)), Ze(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Yn = Me() + 500, ns && on()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Kf(e, t);
  var r = Il(e, e === De ? ze : 0);
  if (r === 0) n !== null && ei(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ei(n), t === 1) e.tag === 0 ? Bp(Bi.bind(null, e)) : cd(Bi.bind(null, e)), Up(function() {
      !(ie & 6) && on();
    }), n = null;
    else {
      switch (Oc(r)) {
        case 1:
          n = Xa;
          break;
        case 4:
          n = Rc;
          break;
        case 16:
          n = bl;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = bl;
      }
      n = ou(n, eu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function eu(e, t) {
  if (_l = -1, kl = 0, ie & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Il(e, e === De ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Gl(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var a = nu();
    (De !== e || ze !== t) && (It = null, Yn = Me() + 500, mn(e, t));
    do
      try {
        pm();
        break;
      } catch (i) {
        tu(e, i);
      }
    while (!0);
    uo(), Hl.current = a, ie = s, be !== null ? t = 0 : (De = null, ze = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (s = aa(e), s !== 0 && (r = s, t = Da(e, s))), t === 1) throw n = Ar, mn(e, 0), Ht(e, r), Ze(e, Me()), n;
    if (t === 6) Ht(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !um(s) && (t = Gl(e, r), t === 2 && (a = aa(e), a !== 0 && (r = a, t = Da(e, a))), t === 1)) throw n = Ar, mn(e, 0), Ht(e, r), Ze(e, Me()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          dn(e, Ye, It);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = No + 500 - Me(), 10 < t)) {
            if (Il(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = ma(dn.bind(null, e, Ye, It), t);
            break;
          }
          dn(e, Ye, It);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - _t(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ma(dn.bind(null, e, Ye, It), r);
            break;
          }
          dn(e, Ye, It);
          break;
        case 5:
          dn(e, Ye, It);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Ze(e, Me()), e.callbackNode === n ? eu.bind(null, e) : null;
}
function Da(e, t) {
  var n = wr;
  return e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256), e = Gl(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && Ra(t)), e;
}
function Ra(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function um(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!St(a(), s)) return !1;
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
function Ht(e, t) {
  for (t &= ~Eo, t &= ~as, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Bi(e) {
  if (ie & 6) throw Error(A(327));
  Un();
  var t = Il(e, 0);
  if (!(t & 1)) return Ze(e, Me()), null;
  var n = Gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = aa(e);
    r !== 0 && (t = r, n = Da(e, r));
  }
  if (n === 1) throw n = Ar, mn(e, 0), Ht(e, t), Ze(e, Me()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Ye, It), Ze(e, Me()), null;
}
function Co(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Yn = Me() + 500, ns && on());
  }
}
function xn(e) {
  Kt !== null && Kt.tag === 0 && !(ie & 6) && Un();
  var t = ie;
  ie |= 1;
  var n = ut.transition, r = de;
  try {
    if (ut.transition = null, de = 1, e) return e();
  } finally {
    de = r, ut.transition = n, ie = t, !(ie & 6) && on();
  }
}
function Mo() {
  nt = zn.current, ye(zn);
}
function mn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $p(n)), be !== null) for (n = be.return; n !== null; ) {
    var r = n;
    switch (oo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Rl();
        break;
      case 3:
        Kn(), ye(Xe), ye(Ue), yo();
        break;
      case 5:
        go(r);
        break;
      case 4:
        Kn();
        break;
      case 13:
        ye(ke);
        break;
      case 19:
        ye(ke);
        break;
      case 10:
        fo(r.type._context);
        break;
      case 22:
      case 23:
        Mo();
    }
    n = n.return;
  }
  if (De = e, be = e = tn(e.current, null), ze = nt = t, Te = 0, Ar = null, Eo = as = wn = 0, Ye = wr = null, fn !== null) {
    for (t = 0; t < fn.length; t++) if (n = fn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    fn = null;
  }
  return e;
}
function tu(e, t) {
  do {
    var n = be;
    try {
      if (uo(), vl.current = Ql, Vl) {
        for (var r = Se.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        Vl = !1;
      }
      if (vn = 0, Pe = Le = Se = null, yr = !1, Dr = 0, jo.current = null, n === null || n.return === null) {
        Te = 1, Ar = t, be = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = h.alternate;
            w ? (h.updateQueue = w.updateQueue, h.memoizedState = w.memoizedState, h.lanes = w.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var _ = Pi(o);
          if (_ !== null) {
            _.flags &= -257, Di(_, o, i, a, t), _.mode & 1 && Ti(a, d, t), t = _, c = d;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ti(a, d, t), bo();
              break e;
            }
            c = Error(A(426));
          }
        } else if (we && i.mode & 1) {
          var E = Pi(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Di(E, o, i, a, t), io(Gn(c, i));
            break e;
          }
        }
        a = c = Gn(c, i), Te !== 4 && (Te = 2), wr === null ? wr = [a] : wr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Od(a, c, t);
              Ni(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Zt === null || !Zt.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Fd(a, i, t);
                Ni(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      lu(n);
    } catch (k) {
      t = k, be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nu() {
  var e = Hl.current;
  return Hl.current = Ql, e === null ? Ql : e;
}
function bo() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || !(wn & 268435455) && !(as & 268435455) || Ht(De, ze);
}
function Gl(e, t) {
  var n = ie;
  ie |= 2;
  var r = nu();
  (De !== e || ze !== t) && (It = null, mn(e, t));
  do
    try {
      fm();
      break;
    } catch (s) {
      tu(e, s);
    }
  while (!0);
  if (uo(), ie = n, Hl.current = r, be !== null) throw Error(A(261));
  return De = null, ze = 0, Te;
}
function fm() {
  for (; be !== null; ) ru(be);
}
function pm() {
  for (; be !== null && !Of(); ) ru(be);
}
function ru(e) {
  var t = au(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? lu(e) : be = t, jo.current = null;
}
function lu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = am(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, be = null;
        return;
      }
    } else if (n = sm(n, t, nt), n !== null) {
      be = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function dn(e, t, n) {
  var r = de, s = ut.transition;
  try {
    ut.transition = null, de = 1, mm(e, t, n, r);
  } finally {
    ut.transition = s, de = r;
  }
  return null;
}
function mm(e, t, n, r) {
  do
    Un();
  while (Kt !== null);
  if (ie & 6) throw Error(A(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Gf(e, a), e === De && (be = De = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || cl || (cl = !0, ou(bl, function() {
    return Un(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ut.transition, ut.transition = null;
    var o = de;
    de = 1;
    var i = ie;
    ie |= 4, jo.current = null, im(e, n), Jd(n, e), Dp(fa), Ll = !!ua, fa = ua = null, e.current = n, cm(n), Ff(), ie = i, de = o, ut.transition = a;
  } else e.current = n;
  if (cl && (cl = !1, Kt = e, Kl = s), a = e.pendingLanes, a === 0 && (Zt = null), Uf(n.stateNode), Ze(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Bl) throw Bl = !1, e = Ta, Ta = null, e;
  return Kl & 1 && e.tag !== 0 && Un(), a = e.pendingLanes, a & 1 ? e === Pa ? xr++ : (xr = 0, Pa = e) : xr = 0, on(), null;
}
function Un() {
  if (Kt !== null) {
    var e = Oc(Kl), t = ut.transition, n = de;
    try {
      if (ut.transition = null, de = 16 > e ? 16 : e, Kt === null) var r = !1;
      else {
        if (e = Kt, Kt = null, Kl = 0, ie & 6) throw Error(A(331));
        var s = ie;
        for (ie |= 4, Q = e.current; Q !== null; ) {
          var a = Q, o = a.child;
          if (Q.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (Q = d; Q !== null; ) {
                  var h = Q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, Q = v;
                  else for (; Q !== null; ) {
                    h = Q;
                    var w = h.sibling, _ = h.return;
                    if (Yd(h), h === d) {
                      Q = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = _, Q = w;
                      break;
                    }
                    Q = _;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var E = x.sibling;
                    x.sibling = null, x = E;
                  } while (x !== null);
                }
              }
              Q = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, Q = o;
          else e: for (; Q !== null; ) {
            if (a = Q, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                vr(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, Q = f;
              break e;
            }
            Q = a.return;
          }
        }
        var u = e.current;
        for (Q = u; Q !== null; ) {
          o = Q;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, Q = m;
          else e: for (o = u; Q !== null; ) {
            if (i = Q, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ss(9, i);
              }
            } catch (k) {
              Ee(i, i.return, k);
            }
            if (i === o) {
              Q = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, Q = g;
              break e;
            }
            Q = i.return;
          }
        }
        if (ie = s, on(), Ct && typeof Ct.onPostCommitFiberRoot == "function") try {
          Ct.onPostCommitFiberRoot(Xl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      de = n, ut.transition = t;
    }
  }
  return !1;
}
function Ki(e, t, n) {
  t = Gn(n, t), t = Od(e, t, 1), e = Jt(e, t, 1), t = Qe(), e !== null && (Ur(e, 1, t), Ze(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Ki(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ki(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = Gn(n, e), e = Fd(t, e, 1), t = Jt(t, e, 1), e = Qe(), t !== null && (Ur(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function hm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, De === e && (ze & n) === n && (Te === 4 || Te === 3 && (ze & 130023424) === ze && 500 > Me() - No ? mn(e, 0) : Eo |= n), Ze(e, t);
}
function su(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = Qe();
  e = At(e, t), e !== null && (Ur(e, t, n), Ze(e, n));
}
function gm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), su(e, n);
}
function ym(e, t) {
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
      throw Error(A(314));
  }
  r !== null && r.delete(t), su(e, n);
}
var au;
au = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, lm(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, we && t.flags & 1048576 && dd(t, Ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      xl(e, t), e = t.pendingProps;
      var s = Qn(t, Ue.current);
      $n(t, n), s = wo(null, t, r, e, s, n);
      var a = xo();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, zl(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, mo(t), s.updater = ls, t.stateNode = s, s._reactInternals = t, _a(t, r, e, n), t = ja(null, t, r, !0, a, n)) : (t.tag = 0, we && a && ao(t), Ve(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (xl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = wm(r), e = yt(r, e), s) {
          case 0:
            t = Sa(null, t, r, e, n);
            break e;
          case 1:
            t = Ai(null, t, r, e, n);
            break e;
          case 11:
            t = Ri(null, t, r, e, n);
            break e;
          case 14:
            t = zi(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Sa(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Ai(e, t, r, s, n);
    case 3:
      e: {
        if (Vd(t), e === null) throw Error(A(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, gd(e, t), $l(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Gn(Error(A(423)), t), t = Oi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Gn(Error(A(424)), t), t = Oi(e, t, r, n, s);
          break e;
        } else for (rt = Xt(t.stateNode.containerInfo.firstChild), lt = t, we = !0, wt = null, n = md(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Hn(), r === s) {
            t = Ot(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yd(t), e === null && va(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, pa(r, s) ? o = null : a !== null && pa(r, a) && (t.flags |= 32), Ud(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && va(t), null;
    case 13:
      return Qd(e, t, n);
    case 4:
      return ho(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bn(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Ri(e, t, r, s, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, me(Fl, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === s.children && !Xe.current) {
            t = Ot(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Dt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), wa(
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
            if (o = a.return, o === null) throw Error(A(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), wa(o, n, t), o = a.sibling;
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
        Ve(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, $n(t, n), s = ft(s), r = r(s), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = yt(r, t.pendingProps), s = yt(r.type, s), zi(e, t, r, s, n);
    case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), xl(e, t), t.tag = 1, Je(r) ? (e = !0, zl(t)) : e = !1, $n(t, n), Ad(t, r, s), _a(t, r, s, n), ja(null, t, r, !0, e, n);
    case 19:
      return Hd(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function ou(e, t) {
  return Dc(e, t);
}
function vm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function dt(e, t, n, r) {
  return new vm(e, t, n, r);
}
function Io(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wm(e) {
  if (typeof e == "function") return Io(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ga) return 11;
    if (e === Ya) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Sl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Io(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return hn(n.children, s, a, t);
    case Ka:
      o = 8, s |= 8;
      break;
    case Hs:
      return e = dt(12, n, t, s | 2), e.elementType = Hs, e.lanes = a, e;
    case Bs:
      return e = dt(13, n, t, s), e.elementType = Bs, e.lanes = a, e;
    case Ks:
      return e = dt(19, n, t, s), e.elementType = Ks, e.lanes = a, e;
    case yc:
      return os(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case hc:
          o = 10;
          break e;
        case gc:
          o = 9;
          break e;
        case Ga:
          o = 11;
          break e;
        case Ya:
          o = 14;
          break e;
        case Ut:
          o = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = dt(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function hn(e, t, n, r) {
  return e = dt(7, e, r, t), e.lanes = n, e;
}
function os(e, t, n, r) {
  return e = dt(22, e, r, t), e.elementType = yc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ws(e, t, n) {
  return e = dt(6, e, null, t), e.lanes = n, e;
}
function $s(e, t, n) {
  return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xm(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _s(0), this.expirationTimes = _s(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _s(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Lo(e, t, n, r, s, a, o, i, c) {
  return e = new xm(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = dt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mo(a), e;
}
function _m(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function iu(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(A(170));
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
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return id(e, n, t);
  }
  return t;
}
function cu(e, t, n, r, s, a, o, i, c) {
  return e = Lo(n, r, !0, e, s, a, o, i, c), e.context = iu(null), n = e.current, r = Qe(), s = en(n), a = Dt(r, s), a.callback = t ?? null, Jt(n, a, s), e.current.lanes = s, Ur(e, s, r), Ze(e, r), e;
}
function is(e, t, n, r) {
  var s = t.current, a = Qe(), o = en(s);
  return n = iu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jt(s, t, o), e !== null && (kt(e, s, o, a), yl(e, s, o)), o;
}
function Yl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function To(e, t) {
  Gi(e, t), (e = e.alternate) && Gi(e, t);
}
function km() {
  return null;
}
var du = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Po(e) {
  this._internalRoot = e;
}
cs.prototype.render = Po.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  is(e, t, null, null);
};
cs.prototype.unmount = Po.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function() {
      is(null, e, null, null);
    }), t[zt] = null;
  }
};
function cs(e) {
  this._internalRoot = e;
}
cs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++) ;
    Qt.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function Do(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yi() {
}
function Sm(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Yl(o);
        a.call(d);
      };
    }
    var o = cu(t, r, e, 0, null, !1, !1, "", Yi);
    return e._reactRootContainer = o, e[zt] = o.current, br(e.nodeType === 8 ? e.parentNode : e), xn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Yl(c);
      i.call(d);
    };
  }
  var c = Lo(e, 0, !1, null, null, !1, !1, "", Yi);
  return e._reactRootContainer = c, e[zt] = c.current, br(e.nodeType === 8 ? e.parentNode : e), xn(function() {
    is(t, c, n, r);
  }), c;
}
function us(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = Yl(o);
        i.call(c);
      };
    }
    is(t, o, e, s);
  } else o = Sm(n, t, e, s, r);
  return Yl(o);
}
Fc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 && (Ja(t, n | 1), Ze(t, Me()), !(ie & 6) && (Yn = Me() + 500, on()));
      }
      break;
    case 13:
      xn(function() {
        var r = At(e, 1);
        if (r !== null) {
          var s = Qe();
          kt(r, e, 1, s);
        }
      }), To(e, 1);
  }
};
Za = function(e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Qe();
      kt(t, e, 134217728, n);
    }
    To(e, 134217728);
  }
};
Wc = function(e) {
  if (e.tag === 13) {
    var t = en(e), n = At(e, t);
    if (n !== null) {
      var r = Qe();
      kt(n, e, t, r);
    }
    To(e, t);
  }
};
$c = function() {
  return de;
};
Uc = function(e, t) {
  var n = de;
  try {
    return de = e, t();
  } finally {
    de = n;
  }
};
ra = function(e, t, n) {
  switch (t) {
    case "input":
      if (qs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = ts(r);
            if (!s) throw Error(A(90));
            wc(r), qs(r, s);
          }
        }
      }
      break;
    case "textarea":
      _c(e, n);
      break;
    case "select":
      t = n.value, t != null && An(e, !!n.multiple, t, !1);
  }
};
Mc = Co;
bc = xn;
var jm = { usingClientEntryPoint: !1, Events: [Qr, In, ts, Nc, Cc, Co] }, or = { findFiberByHostInstance: un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Em = { bundleType: or.bundleType, version: or.version, rendererPackageName: or.rendererPackageName, rendererConfig: or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: or.findFiberByHostInstance || km, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!dl.isDisabled && dl.supportsFiber) try {
    Xl = dl.inject(Em), Ct = dl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Do(t)) throw Error(A(200));
  return _m(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!Do(e)) throw Error(A(299));
  var n = !1, r = "", s = du;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Lo(e, 1, !1, null, null, n, !1, r, s), e[zt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Po(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return xn(e);
};
at.hydrate = function(e, t, n) {
  if (!ds(t)) throw Error(A(200));
  return us(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!Do(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = du;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cu(t, null, e, 1, n ?? null, s, !1, a, o), e[zt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new cs(t);
};
at.render = function(e, t, n) {
  if (!ds(t)) throw Error(A(200));
  return us(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!ds(e)) throw Error(A(40));
  return e._reactRootContainer ? (xn(function() {
    us(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Co;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ds(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return us(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function uu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uu);
    } catch (e) {
      console.error(e);
    }
}
uu(), uc.exports = at;
var Ce = uc.exports, fu, qi = Ce;
fu = qi.createRoot, qi.hydrateRoot;
var pu = { exports: {} }, fs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm = p, Cm = Symbol.for("react.element"), Mm = Symbol.for("react.fragment"), bm = Object.prototype.hasOwnProperty, Im = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function mu(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) bm.call(t, r) && !Lm.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Cm, type: e, key: a, ref: o, props: s, _owner: Im.current };
}
fs.Fragment = Mm;
fs.jsx = mu;
fs.jsxs = mu;
pu.exports = fs;
var l = pu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tm = {
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
const Pm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...Tm,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${Pm(e)}`, i].join(" "),
        ...d
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
const hu = ne("AlertCircle", [
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
const Dm = ne("AlertTriangle", [
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
const gu = ne("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = ne("ArrowUpDown", [
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
const yu = ne("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = ne("Box", [
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
const Am = ne("Calendar", [
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
const Om = ne("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vu = ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = ne("Download", [
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
const wu = ne("FileJson", [
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
const Um = ne("FileText", [
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
const Vm = ne("Folder", [
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
const Qm = ne("Info", [
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
const Hm = ne("Lasso", [
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
const xu = ne("LayoutGrid", [
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
const Bm = ne("LayoutList", [
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
const Km = ne("Link2Off", [
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
const Gm = ne("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = ne("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = ne("Maximize", [
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
const qm = ne("Minimize", [
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
const Xm = ne("MoreVertical", [
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
const _u = ne("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = ne("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = ne("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = ne("RefreshCw", [
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
const _n = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = ne("Settings", [
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
const ku = ne("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = ne("Star", [
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
const Zm = ne("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = ne("Tag", [
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
const ln = ne("Trash2", [
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
const eh = ne("Type", [
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
const th = ne("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = ne("Upload", [
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
const xe = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = ee;
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
const rh = async () => {
  const e = await ee.fetchApi("/meld/home-dir");
  return (await oe(e)).home;
}, mt = ({
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
let ql = !1;
const lh = (e) => {
  ql = e, ql && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, sh = (...e) => {
  ql && console.log("[Meld]", ...e);
}, ah = (...e) => {
  ql && console.warn("[Meld]", ...e);
}, oh = (...e) => {
  console.error("[Meld]", ...e);
}, X = {
  log: sh,
  warn: ah,
  error: oh,
  init: lh
}, jl = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await ee.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return oe(a);
}, Su = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/details`);
  return oe(t);
}, za = async (e, t = !1) => {
  const n = await ee.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await oe(n);
}, Oo = async (e) => {
  const t = await ee.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return oe(t);
}, ju = async (e) => {
  const t = await ee.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return oe(t);
}, Ji = async (e, t) => {
  const n = await ee.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await oe(n);
}, ih = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ee.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await oe(r);
  } catch {
    return [];
  }
}, Aa = async (e) => {
  const t = await ee.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await oe(t);
  } catch {
    return [];
  }
}, ch = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await oe(n);
}, dh = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return oe(n);
}, Oa = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await oe(r);
}, uh = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/workflow`);
  return oe(t);
}, fh = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/snapshot_data`);
  return oe(t);
}, ph = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ee.fetchApi(n);
  return oe(r);
}, mh = async () => {
  const e = await ee.fetchApi("/meld/search-suggestions");
  return oe(e);
}, hh = async () => {
  const e = await ee.fetchApi("/meld/search-keywords");
  return oe(e);
}, gh = async () => {
  const e = await ee.fetchApi("/meld/search-config");
  return oe(e);
}, yh = async () => {
  const e = await ee.fetchApi("/meld/favorites");
  return oe(e);
}, vh = async (e, t) => {
  const n = await ee.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await oe(n);
}, Zi = async (e) => {
  const t = await ee.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await oe(t);
}, wh = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await oe(r);
}, xh = {
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
}, Eu = async () => {
  let e;
  try {
    const t = await ee.fetchApi("/meld/settings");
    e = await oe(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), xh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, _h = async (e, t) => {
  const n = await ee.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await oe(n);
}, kh = {
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
function Sh(e, t) {
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
      const s = t.payload, a = typeof s == "number" ? s : s.id, o = typeof s == "number" ? "gallery" : s.mode;
      let i = !1;
      if (typeof s != "number" && s.initialMaskMode && (typeof s.initialMaskMode == "string" ? i = s.initialMaskMode : i = "run"), i)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: i
          }
        };
      const c = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((d) => d.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: o,
        viewerInitialMaskMode: i,
        lineageImages: c ? e.lineageImages : []
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
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), i = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
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
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), i = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
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
const Nu = p.createContext(void 0), jh = ({
  children: e
}) => {
  const [t, n] = p.useReducer(Sh, kh), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (y, x, E) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = y;
      for (; m < Math.min(x, f) && E === s.current; )
        try {
          const g = Math.min(u, f - m);
          X.log("Background fetch: starting chunk", {
            offset: m,
            limit: g
          });
          const k = await jl(
            m,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (E !== s.current || (n({ type: "APPEND_IMAGES", payload: k }), m += k.images.length, k.images.length === 0 || m >= k.total))
            break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (g) {
          X.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), x = ++s.current;
    try {
      const E = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      X.log("refreshImages: starting initial fetch", {
        isSearch: E,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await jl(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - y;
      X.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, x);
    } catch (E) {
      X.error("refreshImages: fetch failed", E), n({
        type: "SET_ERROR",
        payload: E instanceof Error ? E.message : String(E)
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
    const y = performance.now();
    try {
      const x = r.current, E = t.searchQuery.trim() !== "", f = t.pagination.limit;
      X.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: E
      });
      const u = await jl(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - y;
      X.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      X.error("loadMoreImages: fetch failed", x), n({
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
      const y = await yh();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      X.error("Failed to load favorites", y);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), E = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: E,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const E = (await Oo(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: E }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = p.useCallback(
    async (y, x) => {
      try {
        await _h(y, x), n({ type: "SET_SETTINGS", payload: { [y]: x } });
      } catch (E) {
        n({
          type: "SET_ERROR",
          payload: E instanceof Error ? E.message : String(E)
        });
      }
    },
    []
  ), _ = p.useCallback(
    async (y) => {
      const x = t.images.find((m) => m.id === y);
      if (x && !x.is_minimal)
        return x;
      const E = t.lineageImages.find((m) => m.id === y);
      if (E && !E.is_minimal)
        return E;
      const f = a.current.get(y);
      if (f)
        return f;
      const u = (async () => {
        try {
          X.log("fetchFullImageDetails: fetching full data", { id: y });
          const m = await Su(y);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(y);
        }
      })();
      return a.current.set(y, u), u;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const x = await Eu();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        X.error("Failed to load settings", x);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const y = () => {
      i();
    }, x = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, E = (f) => {
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
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", E), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", E);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Nu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: _
      },
      children: e
    }
  );
}, Ne = () => {
  const e = p.useContext(Nu);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, et = (e) => {
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
}, Fo = async () => {
  const e = await ee.fetchApi("/meld/tags");
  return oe(e);
}, Eh = async (e) => {
  const t = await ee.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return oe(t);
}, Nh = async (e) => {
  const t = await ee.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await oe(t);
}, Ch = async (e, t) => {
  const n = await ee.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await oe(n);
}, Mh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ee.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, bh = async (e, t, n = !1, r) => {
  const s = await ee.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Ih = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await ee.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Lh = async (e, t, n) => {
  const r = await ee.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await oe(r)).count;
  } catch {
    return 0;
  }
}, Th = async (e) => {
  const t = await ee.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await oe(t);
}, Ph = async () => {
  const e = await ee.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await oe(e);
}, Cu = () => {
  const { dispatch: e } = Ne(), [t, n] = p.useState(() => {
    const C = localStorage.getItem("meld-import-config"), Y = {
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
        const N = JSON.parse(C);
        return { ...Y, ...N, tags: [] };
      } catch {
        return Y;
      }
    return Y;
  });
  p.useEffect(() => {
    const { tags: C, ...Y } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Y));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [v, w] = p.useState([]), [_, y] = p.useState(""), [x, E] = p.useState(!1), [f, u] = p.useState(null), m = p.useRef(!1), g = (C) => {
    C.target === C.currentTarget && (m.current = !0);
  }, k = (C) => {
    C.target === C.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const Y = await rh();
        n((N) => N.custom_path ? N : { ...N, custom_path: Y });
      } catch (Y) {
        X.error("Failed to fetch home directory:", Y);
      }
    })();
  }, []), p.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const N = t.type === "custom" ? t.custom_path : t.subfolder;
      if (X.log(
        `loadFolders started. Path: "${N}", Type: "${t.type}"`
      ), t.type === "custom" && !N) {
        X.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      h(!0);
      const P = N, b = t.type;
      try {
        X.log("Step 1: Fast load starting...");
        const W = await bh(
          t.type,
          N,
          !0,
          C.signal
        );
        if (C.signal.aborted) {
          X.log("Step 1: Aborted.");
          return;
        }
        X.log(
          `Step 1 complete. Found ${W.folders.length} folders, ${W.images.length} images.`
        ), s(W.folders), o(W.images), c(null);
        const O = W.folders.map((I) => I.name);
        O.length > 0 && (X.log(
          `Step 2: Metadata fetch starting for ${O.length} folders...`
        ), Ih(
          b,
          P,
          O,
          C.signal
        ).then((I) => {
          if (C.signal.aborted) {
            X.log("Step 2: Aborted.");
            return;
          }
          X.log("Step 2: Metadata fetch complete."), s(
            (Z) => Z.map((ce) => {
              const V = I[ce.name];
              return V ? { ...ce, count: V.count, preview: V.preview } : ce;
            })
          );
        }).catch((I) => {
          I.name !== "AbortError" && X.error("Step 2: Metadata fetch failed:", I);
        })), X.log("Step 3: Path image count starting..."), Lh(b, P, C.signal).then((I) => {
          if (C.signal.aborted) {
            X.log("Step 3: Aborted.");
            return;
          }
          X.log(`Step 3: Path image count complete: ${I}`), c(I);
        }).catch((I) => {
          I.name !== "AbortError" && X.error("Step 3: Path image count failed:", I);
        });
      } catch (W) {
        if (W.name === "AbortError") {
          X.log("Request aborted.");
          return;
        }
        X.error("Failed to load folders:", W), s([]), o([]), c(0);
      } finally {
        C.signal.aborted || h(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = p.useCallback(async () => {
    E(!0);
    try {
      const C = await Fo();
      w(C);
    } catch (C) {
      X.error("Failed to fetch tags:", C);
    } finally {
      E(!1);
    }
  }, []);
  p.useEffect(() => {
    S();
  }, [S]), mt({
    onEscape: p.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const j = p.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(_.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, _, t.tags]), L = (C) => {
    const Y = C.trim();
    Y && !t.tags.includes(Y) && (n({ ...t, tags: [...t.tags, Y] }), y(""));
  }, $ = (C) => {
    n({ ...t, tags: t.tags.filter((Y) => Y !== C) });
  }, M = (C) => {
    C.key === "Enter" && _.trim() && (C.preventDefault(), L(_.trim()));
  }, R = async () => {
    try {
      await Th(t), e({
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
      X.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, U = (C) => {
    if (t.type === "custom") {
      const Y = t.custom_path.includes("\\") ? "\\" : "/", N = t.custom_path.endsWith(Y) ? `${t.custom_path}${C}` : `${t.custom_path}${Y}${C}`;
      n({ ...t, custom_path: N });
    } else {
      const Y = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: Y });
    }
  }, K = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", Y = t.custom_path.split(C);
      if (Y.length > 1) {
        Y.pop();
        let N = Y.join(C);
        N === "" && C === "/" && (N = "/"), n({ ...t, custom_path: N });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
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
              onClick: (C) => C.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                          onChange: (C) => n({
                            ...t,
                            type: C.target.value,
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
                          onChange: (C) => n({ ...t, recursive: C.target.checked })
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
                          onChange: (C) => n({
                            ...t,
                            link_strategy: C.target.value,
                            auto_link_parent: C.target.value !== "none"
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
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((C) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        C,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => $(C),
                            children: /* @__PURE__ */ l.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(_n, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: _,
                            onChange: (C) => y(C.target.value),
                            onKeyDown: M
                          }
                        ),
                        _.trim() && !t.tags.includes(_.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(_),
                            children: /* @__PURE__ */ l.jsx(Ao, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? _ && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        _
                      ] }) : j.map((C) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(C.name),
                          children: C.name
                        },
                        C.id
                      )) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: R,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(Or, { size: 16 }),
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
                          onClick: K,
                          children: [
                            /* @__PURE__ */ l.jsx(vu, { size: 16 }),
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
                          onChange: (C) => n({ ...t, custom_path: C.target.value }),
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
                      r.map((C) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(C.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: et(C.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Vm, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(zo, { size: 14 })
                          ]
                        },
                        C.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((C) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(C),
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: et(C),
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
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (C) => {
                C.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (C) => C.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ l.jsx(xe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: et(f),
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
function Dh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Wr(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Dh(e), s = (h) => {
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
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Rh = () => {
  const { dispatch: e } = Ne();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Wr(n);
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
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = s.graph).afterChange) == null || v.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Us(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function zh(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Fa(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++)
    d[h] = c.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function Fa(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function Ah(e) {
  return e.data.every((t) => t === 0);
}
const Mu = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = Ne(), a = r.images.find((z) => z.id === e), { injectMaskToGraph: o } = Rh();
  mt({ onEscape: n });
  const i = p.useRef(null), c = p.useRef(null), d = p.useRef(null), h = p.useRef(null), [v, w] = p.useState(!1), [_, y] = p.useState("rect"), [x, E] = p.useState({ x: 0, y: 0 }), [f, u] = p.useState({ x: 0, y: 0 }), [m, g] = p.useState([]), [k, S] = p.useState(null), [j, L] = p.useState(!1), $ = p.useCallback(() => {
    const z = d.current, T = c.current;
    if (!z || !T) return null;
    const J = T.getBoundingClientRect(), F = z.getBoundingClientRect(), se = z.naturalWidth, H = z.naturalHeight;
    if (!se || !H) return null;
    const fe = se / H, ue = F.width / F.height;
    let ve, pe, Ke = 0, tt = 0;
    return fe > ue ? (ve = F.width, pe = F.width / fe, tt = (F.height - pe) / 2) : (pe = F.height, ve = F.height * fe, Ke = (F.width - ve) / 2), {
      left: F.left - J.left + Ke,
      top: F.top - J.top + tt,
      width: ve,
      height: pe
    };
  }, []), M = p.useCallback(() => {
    const z = i.current;
    if (!z) return;
    const T = z.getContext("2d");
    if (!T) return;
    T.clearRect(0, 0, z.width, z.height);
    const J = getComputedStyle(document.documentElement), F = J.getPropertyValue("--comfy-input-bg-active") || J.getPropertyValue("--comfy-input-bg") || J.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", se = $();
    if (h.current && se && (T.save(), T.globalAlpha = 0.5, T.drawImage(
      h.current,
      se.left,
      se.top,
      se.width,
      se.height
    ), T.restore()), v) {
      const H = Math.min(x.x, f.x), fe = Math.min(x.y, f.y), ue = Math.abs(x.x - f.x), ve = Math.abs(x.y - f.y);
      if (T.save(), T.globalAlpha = 0.3, T.fillStyle = F, T.strokeStyle = "white", T.lineWidth = 2, T.setLineDash([5, 5]), T.beginPath(), _ === "rect")
        T.rect(H, fe, ue, ve);
      else if (_ === "ellipse") {
        const pe = H + ue / 2, Ke = fe + ve / 2;
        T.ellipse(pe, Ke, ue / 2, ve / 2, 0, 0, 2 * Math.PI);
      } else if (_ === "lasso" && m.length > 1) {
        T.moveTo(m[0].x, m[0].y);
        for (let pe = 1; pe < m.length; pe++)
          T.lineTo(m[pe].x, m[pe].y);
        T.closePath();
      }
      T.fill(), T.globalAlpha = 1, T.stroke(), T.restore();
    }
  }, [v, x, f, _, m, $]), [R, U] = p.useState([]), K = p.useMemo(() => R.length > 0 ? R[R.length - 1] : d.current ? Us(
    d.current.naturalWidth,
    d.current.naturalHeight
  ) : null, [R]);
  p.useEffect(() => {
    var z;
    (z = d.current) != null && z.naturalWidth && R.length === 0 && U([
      Us(
        d.current.naturalWidth,
        d.current.naturalHeight
      )
    ]);
  }, [R.length]);
  const C = p.useRef(!1), Y = p.useRef(0), N = (z) => {
    z.target === z.currentTarget && (C.current = !0);
  }, P = (z) => {
    z.target === z.currentTarget && C.current && !v && n(), C.current = !1;
  };
  p.useEffect(() => {
    if (!K) return;
    h.current || (h.current = document.createElement("canvas"));
    const z = h.current;
    z.width = K.width, z.height = K.height;
    const T = z.getContext("2d");
    if (!T) return;
    const J = Fa(K, [255, 255, 255], 255);
    T.putImageData(J, 0, 0), M();
  }, [K, M]), p.useEffect(() => {
    const z = () => {
      c.current && i.current && (i.current.width = c.current.clientWidth, i.current.height = c.current.clientHeight, M());
    }, T = new ResizeObserver(z);
    return c.current && T.observe(c.current), z(), () => T.disconnect();
  }, [M]);
  const b = (z) => {
    var H;
    if (z.button !== 0 || v || j || Date.now() - Y.current < 100)
      return;
    z.preventDefault();
    const T = $(), J = (H = c.current) == null ? void 0 : H.getBoundingClientRect();
    if (!T || !J) return;
    w(!0);
    const F = Math.max(
      T.left,
      Math.min(z.clientX - J.left, T.left + T.width)
    ), se = Math.max(
      T.top,
      Math.min(z.clientY - J.top, T.top + T.height)
    );
    E({ x: F, y: se }), u({ x: F, y: se }), g(_ === "lasso" ? [{ x: F, y: se }] : []), S(null);
  };
  p.useEffect(() => {
    if (!v) return;
    const z = (J) => {
      var ue;
      const F = $(), se = (ue = c.current) == null ? void 0 : ue.getBoundingClientRect();
      if (!F || !se) return;
      const H = Math.max(
        F.left,
        Math.min(J.clientX - se.left, F.left + F.width)
      ), fe = Math.max(
        F.top,
        Math.min(J.clientY - se.top, F.top + F.height)
      );
      u({ x: H, y: fe }), _ === "lasso" && g((ve) => [...ve, { x: H, y: fe }]);
    }, T = (J) => {
      var H;
      const F = $(), se = (H = c.current) == null ? void 0 : H.getBoundingClientRect();
      if (F && se && K && d.current) {
        const fe = Math.max(
          F.left,
          Math.min(J.clientX - se.left, F.left + F.width)
        ), ue = Math.max(
          F.top,
          Math.min(J.clientY - se.top, F.top + F.height)
        ), ve = Math.min(x.x, fe), pe = Math.min(x.y, ue), Ke = Math.abs(x.x - fe), tt = Math.abs(x.y - ue), Kr = _ === "lasso";
        if (Ke > 5 || tt > 5 || Kr && m.length > 2) {
          const ms = d.current.naturalWidth, G = d.current.naturalHeight, te = ms / F.width, D = G / F.height, ae = zh(K, (q) => {
            if (_ === "rect") {
              const re = (ve - F.left) * te, he = (pe - F.top) * D, Oe = Ke * te, Ge = tt * D;
              q.rect(re, he, Oe, Ge);
            } else if (_ === "ellipse") {
              const re = (ve - F.left) * te, he = (pe - F.top) * D, Oe = Ke * te, Ge = tt * D, Ie = re + Oe / 2, _e = he + Ge / 2;
              q.ellipse(
                Ie,
                _e,
                Oe / 2,
                Ge / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (_ === "lasso" && m.length > 2) {
              const re = m[0];
              q.moveTo(
                (re.x - F.left) * te,
                (re.y - F.top) * D
              );
              for (let he = 1; he < m.length; he++)
                q.lineTo(
                  (m[he].x - F.left) * te,
                  (m[he].y - F.top) * D
                );
              q.closePath();
            }
          });
          U((q) => [...q, ae]);
        }
      }
      Y.current = Date.now(), w(!1), g([]);
    };
    return window.addEventListener("mousemove", z), window.addEventListener("mouseup", T), () => {
      window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", T);
    };
  }, [
    v,
    x.x,
    x.y,
    $,
    K,
    _,
    m
  ]);
  const W = p.useCallback(() => {
    R.length > 1 && U((z) => z.slice(0, -1));
  }, [R.length]);
  p.useEffect(() => {
    const z = (T) => {
      (T.metaKey || T.ctrlKey) && T.key === "z" ? (T.preventDefault(), W()) : T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", z, { capture: !0 }), () => window.removeEventListener("keydown", z, { capture: !0 });
  }, [W, n]);
  const O = () => {
    if (d.current) {
      const z = Us(
        d.current.naturalWidth,
        d.current.naturalHeight
      );
      U((T) => [...T, z]);
    }
  }, I = async () => {
    if (!K || !d.current) return null;
    L(!0);
    try {
      const { width: z, height: T } = K, J = document.createElement("canvas");
      J.width = z, J.height = T;
      const F = J.getContext("2d");
      if (!F) return null;
      const se = Fa(K, [255, 255, 255], 255);
      F.putImageData(se, 0, 0);
      const H = await new Promise(
        (tt) => J.toBlob(tt, "image/png")
      );
      if (!H) return null;
      const ue = `meld_mask_${Date.now()}.png`, ve = new File([H], ue, { type: "image/png" }), pe = new FormData();
      pe.append("image", ve), pe.append("type", "temp"), pe.append("overwrite", "true");
      const Ke = await ee.fetchApi("/upload/image", {
        method: "POST",
        body: pe
      });
      return Ke.ok ? (await Ke.json()).name : null;
    } catch (z) {
      return console.error("[Meld] Error uploading mask:", z), null;
    } finally {
      L(!1);
    }
  }, Z = async () => {
    if (!a) return;
    const z = await I();
    z && o(a, z) && (n(), s({ type: "CLOSE_VIEWER" }));
  }, ce = async () => {
    if (!a) return;
    const z = await I();
    z && s({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: z
      }
    });
  }, V = p.useMemo(
    () => K && !Ah(K),
    [K]
  );
  return a ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: N,
      onMouseUp: P,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (z) => z.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ l.jsx(xe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${_ === "rect" ? "active" : ""}`,
                    onClick: () => y("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(ku, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${_ === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Fm, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${_ === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Hm, { size: 18 }),
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
                  onMouseDown: b,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "img",
                      {
                        ref: d,
                        src: et(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (z) => z.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "canvas",
                      {
                        ref: i,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (z) => z.preventDefault()
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
                      onClick: Z,
                      disabled: !V || j,
                      type: "button",
                      children: [
                        j ? /* @__PURE__ */ l.jsx(Xi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Ro, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ce,
                      disabled: !V || j,
                      type: "button",
                      children: [
                        j ? /* @__PURE__ */ l.jsx(Xi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Or, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: W,
                      disabled: R.length <= 1 || j,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(th, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: O,
                      disabled: !V || j,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(xe, { size: 16 }),
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
}, Oh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ne(), [r, s] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState(
    {}
  ), [d, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [_, y] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, E] = p.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = p.useState(e.settings["gallery.trash_retention_days"].toString()), [m, g] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, S] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [j, L] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [$, M] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    R,
    U
  ] = p.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    K,
    C
  ] = p.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [Y, N] = p.useState(
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
        (z) => a[z] !== e.settings[z] && !i[z]
      );
      if (V.length > 0)
        for (const z of V)
          await n(z, a[z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (V, z) => {
      o((T) => ({
        ...T,
        [V]: !z
      }));
    },
    handleNumberChange: (V, z, T, J) => {
      V === "gallery.initial_load_count" ? h(z) : V === "gallery.max_load_count" ? w(z) : V === "gallery.lineage_max_depth" ? y(z) : V === "viewer.thumbnail_window_size" ? E(z) : V === "gallery.trash_retention_days" ? u(z) : V === "gallery.auto_link_phash_threshold" ? g(z) : V === "gallery.suggest_phash_threshold" ? S(z) : V === "viewer.details.max_positive_prompt_lines" ? L(z) : V === "viewer.details.max_negative_prompt_lines" ? M(z) : V === "fullscreen.details.max_positive_prompt_lines" ? U(z) : V === "fullscreen.details.max_negative_prompt_lines" ? C(z) : V === "sidebar.thumbnail_size" && N(z);
      const F = Number.parseInt(z, 10);
      if (!Number.isNaN(F)) {
        let se = F;
        T !== void 0 && se < T && (se = T), J !== void 0 && se > J && (se = J), o((H) => ({
          ...H,
          [V]: se
        }));
      }
    },
    handleNumberBlur: (V) => {
      V.key === "gallery.initial_load_count" ? h(
        a["gallery.initial_load_count"].toString()
      ) : V.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : V.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : V.key === "viewer.thumbnail_window_size" ? E(
        a["viewer.thumbnail_window_size"].toString()
      ) : V.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : V.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : V.key === "gallery.suggest_phash_threshold" ? S(
        a["gallery.suggest_phash_threshold"].toString()
      ) : V.key === "viewer.details.max_positive_prompt_lines" ? L(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : V.key === "viewer.details.max_negative_prompt_lines" ? M(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_negative_prompt_lines" ? C(
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
    validateShortcut: (V) => V.trim() ? V.trim().split(/\s+/).every((T) => !!(T === "next" || T === "prev" || T === "delete" || T.startsWith("tag:") && T.length > 4 || T.startsWith("-tag:") && T.length > 5 || T.startsWith("tag-toggle:") && T.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: $,
    fullscreenMaxPositivePromptLinesInput: R,
    fullscreenMaxNegativePromptLinesInput: K,
    thumbnailSizeInput: Y
  };
}, B = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Fh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
function bt({
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
function bu() {
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
function Iu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Lu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Tu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Pu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(bu, {})
  ] });
}
function Du(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Ru(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(bu, {})
  ] });
}
function zu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Au(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Ou(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function Fu(e) {
  return /* @__PURE__ */ l.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Wu = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Iu
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Du
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Ru
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Tu },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Pu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Lu
  },
  { id: "edit_tags", label: "Edit Tags", icon: Au },
  { id: "edit_notes", label: "Edit Notes", icon: Ou },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: zu
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Fu
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: ln }
], Wh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
    /* @__PURE__ */ l.jsx(B, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Wu.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), $h = ({
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
        B,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
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
        B,
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
      B,
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
}, Uh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
] }), Vh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
] }), $u = () => {
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
    handleResetShortcuts: h,
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: _,
    maxLoadCountInput: y,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: E,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: m,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: j,
    thumbnailSizeInput: L
  } = Oh();
  mt({ onEscape: o });
  const $ = p.useRef(!1), M = (C) => {
    C.target === C.currentTarget && ($.current = !0);
  }, R = (C) => {
    C.target === C.currentTarget && $.current && o(), $.current = !1;
  }, U = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], K = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          Uh,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: x,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: m
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Wh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: _,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Vh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: E,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          Fh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: S,
            maxNegativePromptLinesInput: j
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          $h,
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
        onMouseUp: R,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (C) => C.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: U.map((C) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === C.id ? "active" : ""}`,
                    onClick: () => t(C.id),
                    children: C.label
                  },
                  C.id
                )) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: K() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, xt = "none", Uu = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: s } = Ne(), [a, o] = p.useState([]), [i, c] = p.useState(t), [d, h] = p.useState(""), [v, w] = p.useState(!0), [_, y] = p.useState(!1), x = p.useRef(null), E = e.length > 1, f = p.useRef(!1), u = (M) => {
    M.target === M.currentTarget && (f.current = !0);
  }, m = (M) => {
    M.target === M.currentTarget && f.current && n(), f.current = !1;
  }, g = p.useCallback(async () => {
    w(!0);
    try {
      const M = await Fo();
      o(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      w(!1);
    }
  }, []);
  p.useEffect(() => {
    g();
  }, [g]), p.useEffect(() => {
    x.current && x.current.focus();
  }, []), mt({ onEscape: n });
  const k = p.useMemo(() => a.filter(
    (M) => M.name.toLowerCase().includes(d.toLowerCase()) && !i.includes(M.name)
  ), [a, d, i]), S = (M) => {
    const R = M.trim();
    if (R.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    R && !i.includes(R) && (c([...i, R]), h(""));
  }, j = (M) => {
    c(i.filter((R) => R !== M));
  }, L = async () => {
    y(!0);
    try {
      if (E) {
        const M = i.filter((U) => !t.includes(U)), R = t.filter(
          (U) => !i.includes(U)
        );
        await Oa(e, M, R);
      } else
        await ch(e[0], i);
      await s(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (M) {
      console.error("Failed to update tags:", M), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, $ = (M) => {
    M.key === "Enter" && d.trim() && (M.preventDefault(), M.stopPropagation(), S(d.trim()));
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
              /* @__PURE__ */ l.jsx(Br, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: E ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(xe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            E && /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: E ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((M) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                M,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => j(M),
                    children: /* @__PURE__ */ l.jsx(xe, { size: 12 })
                  }
                )
              ] }, M)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(_n, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: x,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: d,
                    onChange: (M) => h(M.target.value),
                    onKeyDown: $
                  }
                ),
                d.trim() && !i.includes(d.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => S(d),
                    children: [
                      /* @__PURE__ */ l.jsx(Ao, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? d ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((M) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => S(M.name),
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
                onClick: L,
                disabled: _,
                children: _ ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Vu = async () => {
  const e = await ee.fetchApi("/meld/workflows");
  return oe(e);
}, Qu = async (e) => {
  const t = await ee.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return oe(t);
}, ps = (e, t) => {
  const n = p.useCallback(async (_) => {
    try {
      const y = await uh(_.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), X.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return X.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = p.useCallback(async (_) => {
    try {
      const y = await fh(_.id), x = y.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", E = window.app, u = window.LiteGraph.createNode(x);
      if (!u)
        return console.error(`Node type ${x} not found.`), alert(
          `Node type ${x} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const m = y.is_flux ? {
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
        for (const [j, L] of Object.entries(m)) {
          const $ = y[j];
          if ($ != null && $ !== "") {
            const M = u.widgets.find(
              (R) => R.name === L
            );
            M && (M.value = $);
          }
        }
        const S = u.widgets.find(
          (j) => j.name === "control_after_generate"
        );
        S && (S.value = "fixed");
      }
      const g = E.canvas.ds.offset, k = E.canvas.ds.scale;
      return u.pos = [(-g[0] + 400) / k, (-g[1] + 300) / k], E.graph.add(u), E.canvas.selectNode(u), E.canvas.centerOnNode(u), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), s = p.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [_.id],
          tags: _.tags || []
        }
      });
    },
    [t]
  ), a = p.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: _.id,
          notes: _.user_notes || ""
        }
      });
    },
    [t]
  ), o = p.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: _.id }
      });
    },
    [t]
  ), i = p.useCallback(
    (_) => {
      const y = window.app;
      if (!(y != null && y.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const x = (u) => {
        if (!u) return !1;
        const m = u.replace(/\s+/g, "").toLowerCase();
        return m === "meldimageloader" || m === "loadimage";
      }, E = y.graph._nodes.filter(
        (u) => x(u.type)
      );
      if (E.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (E.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: _,
            nodes: E.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Wr(_, u);
            }
          }
        }), !0;
      const f = Wr(_);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = p.useCallback(
    (_) => {
      const y = Array.isArray(_) ? _ : [_];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), d = p.useCallback(
    async (_, y = "run") => {
      var x;
      if (console.log("[Meld] handleRunWithMask called", _, y), y === "apply") {
        const E = window.app, f = ((x = E == null ? void 0 : E.graph) == null ? void 0 : x._nodes) || [];
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
          if (!(await Vu()).some(
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
        } catch (E) {
          console.error("[Meld] Error checking workflows:", E);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: _.id, mode: y }
      });
    },
    [t]
  ), h = p.useCallback(
    async (_, y) => {
      try {
        const x = _.id, f = (await Oo([x])).restored_ids || [x];
        t({ type: "REMOVE_IMAGES", payload: f }), y == null || y();
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    [t]
  ), v = p.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [_.id],
          hasLineage: !!(_.parent_id || _.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), w = p.useCallback(
    async (_, y) => {
      try {
        const x = await dh(
          _,
          y
        );
        t({ type: "UPDATE_IMAGE", payload: x });
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
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
    handleRestore: h,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, Hu = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = Ne(), { handleUpdateUserNotes: a } = ps(r, s), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), w = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, _ = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const y = p.useCallback(async () => {
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
    const x = (E) => {
      E.key === "Enter" && (E.ctrlKey || E.metaKey) && E.target === h.current && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [y]), mt({ onEscape: n }), Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Zm, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(xe, { size: 20 }) })
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
                onChange: (x) => i(x.target.value)
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
                onClick: y,
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
}, Bu = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = Ne(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  mt({ onEscape: s });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
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
                    children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                      /* @__PURE__ */ l.jsx(Or, { size: 12 })
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
}, Ku = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var Y;
  const { dispatch: r } = Ne(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(null), [h, v] = p.useState(!1), [w, _] = p.useState(null), [y, x] = p.useState({}), [E, f] = p.useState({}), [u, m] = p.useState(""), g = p.useRef(null), k = p.useMemo(() => s.map((N) => {
    let P = N.valid, b = N.reason;
    return n && N.mask_count === 0 && (P = !1, b = "No 'Load Image (as Mask)' node found."), { ...N, valid: P, reason: b };
  }).sort((N, P) => N.valid !== P.valid ? N.valid ? -1 : 1 : N.name.localeCompare(P.name)), [s, n]), S = p.useMemo(() => {
    if (!u.trim()) return k;
    const N = u.toLowerCase();
    return k.filter(
      (P) => P.name.toLowerCase().includes(N)
    );
  }, [k, u]), j = p.useCallback(async () => {
    try {
      i(!0);
      const N = await Vu();
      a(N), d(null);
    } catch (N) {
      d(N instanceof Error ? N.message : String(N));
    } finally {
      i(!1);
    }
  }, []);
  p.useEffect(() => {
    j();
  }, [j]), p.useEffect(() => {
    !o && g.current && g.current.focus();
  }, [o]);
  const L = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  mt({ onEscape: L });
  const $ = p.useRef(!1), M = p.useCallback((N) => {
    N.target === N.currentTarget && ($.current = !0);
  }, []), R = p.useCallback(
    (N) => {
      N.target === N.currentTarget && $.current && L(), $.current = !1;
    },
    [L]
  ), U = async (N, P) => {
    if (!h)
      try {
        v(!0), await t(N, P), L();
      } catch (b) {
        d(b instanceof Error ? b.message : String(b)), v(!1);
      }
  }, K = async (N) => {
    if (!(y[N] || E[N]))
      try {
        f((O) => ({ ...O, [N]: !0 }));
        const P = await Qu(N), b = [], W = (O) => {
          if (!O) return !1;
          const I = O.replace(/\s+/g, "").toLowerCase();
          return n ? I === "loadimagemask" : I === "meldimageloader" || I === "loadimage";
        };
        if (P.nodes && Array.isArray(P.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            P.nodes.length
          );
          for (const O of P.nodes)
            W(O.type) && (console.log(
              "[Meld] Found target node (UI):",
              O.id,
              O.type,
              O.title
            ), b.push({
              id: String(O.id),
              type: O.type || "",
              title: O.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const O in P) {
            const I = P[O];
            I && typeof I == "object" && W(I.class_type) && (console.log(
              "[Meld] Found target node (API):",
              O,
              I.class_type
            ), b.push({
              id: O,
              type: I.class_type || ""
            }));
          }
        }
        b.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), x((O) => ({ ...O, [N]: b }));
      } catch (P) {
        console.error("Failed to fetch workflow nodes:", P);
      } finally {
        f((P) => ({ ...P, [N]: !1 }));
      }
  }, C = (N) => {
    if (!N.valid || h) return;
    if ((n ? N.mask_count : N.loader_count + N.load_image_count) <= 1) {
      U(N.name);
      return;
    }
    w === N.name ? _(null) : (_(N.name), K(N.name));
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: R,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(wu, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: L,
                    children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: o ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : c ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(hu, { size: 20 }),
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (Y = e[0]) == null ? void 0 : Y.filename }),
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
                      /* @__PURE__ */ l.jsx(_n, { className: "meld-tag-search-icon", size: 16 }),
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
                          children: /* @__PURE__ */ l.jsx(xe, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                S.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : S.map((N) => {
                  const P = n ? N.mask_count : N.loader_count + N.load_image_count, b = w === N.name, W = y[N.name] || [], O = E[N.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${N.valid ? "" : "meld-workflow-item--invalid"} ${b ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => C(N),
                        title: N.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: N.name }),
                            !N.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: N.reason }),
                            N.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: P > 1 ? `Multiple loaders found (${P})` : n ? "Supports: Load Image (as Mask)" : `Supports: ${N.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          N.valid && P <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: h,
                              onClick: (I) => {
                                I.stopPropagation(), U(N.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Or, { size: 14 }),
                                h ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          N.valid && P > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: h,
                              onClick: (I) => {
                                I.stopPropagation(), C(N);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                b ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  zo,
                                  {
                                    size: 14,
                                    style: {
                                      transform: b ? "rotate(90deg)" : "rotate(0deg)",
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
                    b && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: O ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: W.map((I) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: h,
                          onClick: () => U(N.name, I.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: I.title || I.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                I.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Or, { size: 12 })
                          ]
                        },
                        I.id
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
                  onClick: L,
                  disabled: h,
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
}, Gu = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var _, y, x, E, f, u, m;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Qu(t);
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
          (S) => d(S.type)
        );
        k && (o = String(k.id));
      }
      const g = a.nodes.find(
        (k) => {
          var S;
          return ((S = k.type) == null ? void 0 : S.replace(/\s+/g, "")) === "LoadImageMask";
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
        if (((_ = a[g].class_type) == null ? void 0 : _.replace(/\s+/g, "")) === "LoadImageMask") {
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
    let h = n.filename;
    if (n.subfolder && (h = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (h = `${h} [${n.type}]`), c) {
      const g = window.app, k = t.replace(/\.json$/i, "");
      let S = !1;
      const j = document.querySelectorAll(".workflow-tab");
      for (const M of Array.from(j)) {
        const R = M.querySelector(".workflow-label"), U = ((y = R == null ? void 0 : R.textContent) == null ? void 0 : y.trim()) || ((x = M.textContent) == null ? void 0 : x.trim()) || "";
        if (U === k || U === t || U.startsWith(`${k} `) || U.startsWith(`${k}•`)) {
          M.click(), S = !0;
          break;
        }
      }
      S || await g.loadGraphData(a, !0, !0, t), await new Promise((M) => setTimeout(M, 200));
      const L = g.graph._nodes;
      console.log("[Meld] Active graph nodes count:", L.length);
      const $ = L.find(
        (M) => String(M.id) === o || d(M.type)
      );
      if ($) {
        const M = (E = $.widgets) == null ? void 0 : E.find((R) => R.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: $.id,
          type: $.type,
          imagePath: h
        }), M && (M.value = h, typeof M.callback == "function" && M.callback(h));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const M = L.find(
          (R) => {
            var U;
            return String(R.id) === i || ((U = R.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: M == null ? void 0 : M.id,
          maskFilename: r
        }), M) {
          const R = (f = M.widgets) == null ? void 0 : f.find(
            (K) => K.name === "image"
          );
          R && (R.value = `${r} [temp]`);
          const U = (u = M.widgets) == null ? void 0 : u.find(
            (K) => K.name === "channel"
          );
          U && (U.value = "red");
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
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = h, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await ee.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: ee.clientId
      })
    });
    if (!w.ok) {
      const g = await w.json();
      throw new Error(((m = g.error) == null ? void 0 : m.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) }), Yu = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = Ne(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = p.useMemo(
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
  ), d = p.useRef(s.viewerImageId);
  p.useEffect(() => {
    d.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const h = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  mt({ onEscape: h });
  const v = p.useRef(!1), w = p.useCallback((f) => {
    f.target === f.currentTarget && (v.current = !0);
  }, []), _ = p.useCallback(
    (f) => {
      f.target === f.currentTarget && v.current && h(), v.current = !1;
    },
    [h]
  ), y = p.useCallback(
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
  ), x = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e), u = c.filter(
        (m) => f.has(m.id)
      );
      if (y(f), await za(e, n), !o.current) return;
      !n && r && r(u), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (f) {
      a({
        type: "SET_ERROR",
        payload: f instanceof Error ? f.message : String(f)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, E = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e);
      for (const m of e) {
        const g = await Aa(m);
        if (!o.current) return;
        for (const k of g)
          f.add(k.id);
      }
      const u = c.filter(
        (m) => f.has(m.id)
      );
      if (y(f), await za(Array.from(f), n), !o.current) return;
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
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (f) => f.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(ln, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                            Dm,
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
                      onClick: x,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: E,
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
}, qu = ({ message: e }) => {
  const { dispatch: t } = Ne(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return mt({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(hu, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
}, Xu = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ne(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  mt({ onEscape: h });
  const v = p.useRef(!1), w = (S) => {
    S.target === S.currentTarget && (v.current = !0);
  }, _ = (S) => {
    S.target === S.currentTarget && v.current && h(), v.current = !1;
  }, y = t.images.find((S) => S.id === e), x = p.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], j = await ih(e, S);
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
  const E = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || S === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ji(e, S), await Su(e), await r(), h();
      } catch (j) {
        console.error("Failed to link parent:", j);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ji(e, null), await r(), h();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const j = await Mh(S), { id: L } = await ju({
        filename: j.name,
        subfolder: j.subfolder || "",
        type: j.type || "input"
      });
      if (L === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await E(L);
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
  if (!y) return null;
  const g = s.filter((S) => S.is_source_match), k = s.filter((S) => !S.is_source_match);
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: h,
                children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            y.parent_id && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(Gm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    y.parent_filename && /* @__PURE__ */ l.jsx(
                                      "img",
                                      {
                                        src: et({
                                          filename: y.parent_filename,
                                          subfolder: y.parent_subfolder || "",
                                          type: y.parent_type || "output"
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
                                              children: y.parent_filename || "Unknown Image"
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
                                                y.parent_id
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
                      children: /* @__PURE__ */ l.jsx(Km, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
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
                  /* @__PURE__ */ l.jsx(nh, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: g.map((S) => {
                  const j = S.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && E(S.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: et(S), alt: S.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          j && /* @__PURE__ */ l.jsx(
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
              /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                k.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: k.map((S) => {
                  const j = S.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && E(S.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: et(S), alt: S.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
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
                                  Math.round((64 - S.distance) / 64 * 100),
                                  "%"
                                ] }),
                                j && /* @__PURE__ */ l.jsx(
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
                }) }) : /* @__PURE__ */ l.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Qh = () => {
  const { state: e, dispatch: t } = Ne(), { executeWorkflow: n } = Gu();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      Ku,
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
      Bu,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Wr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(Xu, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Ce.createPortal(/* @__PURE__ */ l.jsx(Cu, {}), document.body),
    e.activeModal.type === "settings" && Ce.createPortal(/* @__PURE__ */ l.jsx($u, {}), document.body),
    e.activeModal.type === "tag_edit" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        Uu,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(qu, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Ce.createPortal(
      /* @__PURE__ */ l.jsx(
        Yu,
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
        Mu,
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
        Hu,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Ju = (e, t) => {
  const n = p.useCallback(
    (r) => {
      const s = t["gallery.lineage_max_depth"];
      if (s === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, s).map((d) => ({
          id: d.id,
          imgSrc: et(d)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = et(o) : i = et({
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
}, Zu = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ne(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: _,
    handleDelete: y,
    handleEditNotes: x,
    handleUpdateUserNotes: E
  } = ps(t, n), { getParentChain: f } = Ju(t.images, t.settings), [u, m] = p.useState(null), [g, k] = p.useState(!1), [S, j] = p.useState(null), [L, $] = p.useState(!1), M = p.useRef(null), R = async (H, fe, ue = !1) => {
    try {
      await navigator.clipboard.writeText(H), ue ? ($(!0), setTimeout(() => $(!1), 2e3)) : (j(fe), setTimeout(() => j(null), 2e3));
    } catch (ve) {
      console.error("Failed to copy text: ", ve);
    }
  };
  p.useEffect(() => {
    const H = (ue) => {
      ue.key === "Escape" && (u ? m(null) : k(!1));
    }, fe = (ue) => {
      M.current && !M.current.contains(ue.target) && k(!1);
    };
    return window.addEventListener("keydown", H), g && document.addEventListener("mousedown", fe), () => {
      window.removeEventListener("keydown", H), document.removeEventListener("mousedown", fe);
    };
  }, [g, u]);
  const U = f(e), C = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, Y = et(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: g,
    setIsMenuOpen: k,
    copiedLabel: S,
    popupCopied: L,
    menuRef: M,
    parentChain: U,
    displayFilename: C,
    imgSrc: Y,
    handleCopy: R,
    handleClick: (H) => {
      H.shiftKey ? (H.preventDefault(), H.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : H.ctrlKey || H.metaKey || t.selectedIds.size > 0 ? (H.preventDefault(), H.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (H) => {
      H.preventDefault(), H.stopPropagation(), H.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (H) => {
      H.shiftKey ? (H.preventDefault(), H.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : H.ctrlKey || H.metaKey || t.selectedIds.size > 0 ? (H.preventDefault(), H.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (H.preventDefault(), H.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (H) => {
      (H.shiftKey || H.ctrlKey || H.metaKey || t.selectedIds.size > 0 || !H.target.closest(
        "img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb, textarea, input, button"
      )) && (H.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || H.preventDefault());
    },
    handleKeyDown: (H) => {
      var ue, ve, pe;
      ((ue = document.activeElement) == null ? void 0 : ue.tagName) === "INPUT" || ((ve = document.activeElement) == null ? void 0 : ve.tagName) === "TEXTAREA" || (pe = document.activeElement) != null && pe.isContentEditable || (H.key === "Enter" || H.key === " ") && (H.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      _(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (H = "run") => w(e, H),
    handleUpdateUserNotes: (H) => E(e.id, H),
    fetchFullImageDetails: r
  };
}, Wo = ({
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
  onEditTags: h,
  onEditNotes: v,
  onDelete: w,
  onRestore: _,
  showRestore: y,
  deleteLabel: x,
  showQuickShortcuts: E = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const g = (j) => {
    switch (j) {
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
        return h;
      case "edit_notes":
        return v;
      case "restore_image":
        return _;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, k = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((j) => j && j !== ""), S = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: S, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (j) => {
          j.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(Xm, { size: u })
      }
    ),
    E && k.map((j, L) => {
      const $ = Wu.find((U) => U.id === j);
      if (!$ || !$.icon) return null;
      const M = $.icon, R = g(j);
      return !R || j === "restore_image" && !y ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (U) => {
            U.stopPropagation(), R();
          },
          title: $.label,
          children: /* @__PURE__ */ l.jsx(M, { size: u })
        },
        `${j}-${L}`
      );
    }),
    e && /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Iu,
        handler: s
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Du,
        handler: o
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Ru,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Tu,
        handler: i
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Pu,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Lu,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Au,
        handler: h
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Ou,
        handler: v
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: zu,
        handler: d
      },
      ...y ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Fu,
          handler: _,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: x,
        icon: ln,
        handler: w,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((j) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${j.className || ""}`,
        onMouseDown: (L) => L.stopPropagation(),
        onClick: (L) => {
          L.preventDefault(), L.stopPropagation(), t(!1), setTimeout(() => j.handler(), 0);
        },
        children: [
          /* @__PURE__ */ l.jsx(j.icon, { size: 14, color: j.color }),
          /* @__PURE__ */ l.jsx("span", { children: j.label })
        ]
      },
      j.id
    )) })
  ] });
}, Hh = ({
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
                s ? /* @__PURE__ */ l.jsx(Ro, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  Wm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  xe,
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
), ef = El.memo(
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
      menuRef: h,
      parentChain: v,
      displayFilename: w,
      imgSrc: _,
      handleCopy: y,
      handleClick: x,
      handleSelectToggle: E,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: m,
      handleRestoreWorkflow: g,
      handleAddUnifiedLoader: k,
      handleEditSource: S,
      handleEditTags: j,
      handleEditNotes: L,
      handleSendToWorkflow: $,
      handleRestore: M,
      handleDelete: R,
      handleRunWithWorkflow: U,
      handleRunWithMask: K,
      fetchFullImageDetails: C
    } = Zu(e), [Y, N] = p.useState("idle");
    return p.useEffect(() => {
      e.user_notes && Y === "saving" && N("idle");
    }, [e.user_notes, Y]), /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: f,
        onMouseDown: u,
        onKeyDown: m,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: E,
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
                src: _,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: u,
                onClick: (P) => {
                  P.stopPropagation(), x(P);
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
                (P, b) => P.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: P.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (W) => {
                      W.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: P.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: b === 0 ? "Source" : b === 1 ? "Grand-Source" : `Ancestor (S${b + 1})`,
                    alt: "source thumb"
                  },
                  P.id || b
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const b = await C(e.id);
                  a({
                    title: "Model",
                    text: b.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const b = await C(e.id);
                        y(b.model_name || "-", "Model");
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const b = await C(e.id);
                  a({
                    title: "Positive Prompt",
                    text: b.positive_prompt || b.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const b = await C(e.id);
                        y(
                          b.positive_prompt || b.positive || "-",
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const b = await C(e.id);
                  a({
                    title: "Negative Prompt",
                    text: b.negative_prompt || b.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const b = await C(e.id);
                        y(
                          b.negative_prompt || b.negative || "-",
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
                onClick: (P) => {
                  P.stopPropagation(), j();
                },
                children: [
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((P, b) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: P
                    },
                    `${P}-${b}`
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
                Y === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (P) => {
                    P.stopPropagation(), L();
                  },
                  children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(
            Wo,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: h,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: g,
              onSendToWorkflow: $,
              onRunWithWorkflow: U,
              onRunWithMask: (P) => K(P),
              onEditSource: S,
              onEditTags: j,
              onEditNotes: L,
              onRestore: M,
              showRestore: t.viewScope === "trash",
              onDelete: R,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            Hh,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (P) => y(P, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
ef.displayName = "DetailedImageCard";
const tf = El.memo(
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
      menuRef: h,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: _,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: x,
      handleRunWithMask: E,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: m,
      handleDelete: g,
      handleRestore: k
    } = Zu(e), S = v.viewScope === "trash", j = S ? "Delete Permanently" : "Move to Trash";
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: s,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
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
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: s,
                onClick: (L) => {
                  L.stopPropagation(), o(L);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            Wo,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: h,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: _,
              onSendToWorkflow: y,
              onRunWithWorkflow: x,
              onRunWithMask: E,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: m,
              onDelete: g,
              onRestore: k,
              showRestore: S,
              deleteLabel: j,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
tf.displayName = "SimpleImageCard";
const Bh = ({ image: e }) => {
  const { state: t } = Ne();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(tf, { image: e }) : /* @__PURE__ */ l.jsx(ef, { image: e });
}, Kh = ({
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
}, Gh = () => {
  const { state: e, dispatch: t } = Ne(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Ph(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ l.jsx(ku, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(Om, { size: 14, className: "meld-success-icon" }),
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
}, nf = () => {
  const { state: e, refreshFavorites: t } = Ne(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState(null), [c, d] = p.useState(""), [h, v] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const E = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [s]);
  const w = p.useCallback(
    async (E, f, u) => {
      E.stopPropagation();
      const m = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(m))
        try {
          await Zi(f), await t();
        } catch (g) {
          X.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), _ = p.useCallback(
    (E, f) => {
      E.stopPropagation(), i(f), d(f.name), v(f.query);
    },
    []
  ), y = p.useCallback(async () => {
    if (!(!o || !c.trim() || !h.trim()))
      try {
        r(!0), await wh(
          o.id,
          c,
          h
        ), await t(), i(null);
      } catch (E) {
        X.error("Failed to update favorite", E), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, h, t]), x = p.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((u) => u.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await Zi(f.id), await t();
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
      await vh(e.searchQuery, e.searchQuery), await t();
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
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: _,
    handleSaveEditFavorite: y,
    handleSaveFavorite: x,
    setToastMessage: a
  };
}, rf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [s, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(!1);
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
                  children: /* @__PURE__ */ l.jsx(_u, { size: 14 })
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
                  onMouseEnter: () => d(!0),
                  onMouseLeave: () => d(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ l.jsx(ln, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Yh = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = Ne(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: _,
    handleSaveEditFavorite: y
  } = nf(), [x, E] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
  if (mt({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), p.useEffect(() => {
    if (e) {
      let j = e.left;
      const L = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), E({ top: L, left: j });
    }
  }, [e]), p.useEffect(() => {
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
            top: x.top,
            left: x.left,
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
                          qn,
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
                  rf,
                  {
                    fav: k,
                    onSelect: (S) => {
                      n(S), t();
                    },
                    onEdit: _,
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
                        /* @__PURE__ */ l.jsx(qn, { size: 20, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                                  k.key === "Enter" && y(), k.key === "Escape" && i(null);
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
                                onChange: (k) => v(k.target.value),
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
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), y()), k.key === "Escape" && i(null);
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
                      onClick: y,
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
}, Vs = (e) => {
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
}, qh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ne(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [v, w] = p.useState([]), _ = e.settings["search.show_all_keywords"], [y, x] = p.useState(-1), [E, f] = p.useState(null), u = p.useRef(null), m = p.useRef(e.searchQuery), g = p.useCallback(async () => {
    if (v.length > 0) return;
    const N = await hh();
    w(N);
  }, [v.length]);
  p.useEffect(() => {
    gh().then((N) => {
      f(N);
    }), _ && g();
  }, [g, _]);
  const k = p.useMemo(() => {
    if (!E) return null;
    const N = E.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${N}):(.*)$`, "i");
  }, [E]), S = p.useCallback(() => {
    const N = !_;
    N && g(), n("search.show_all_keywords", N);
  }, [_, g, n]), j = r !== m.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    mh().then((N) => {
      h(N);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var N;
    (N = u.current) == null || N.focus();
  }, []);
  const L = p.useCallback(
    (N, P = !0) => {
      m.current !== N && (X.log("SearchBar: triggering search", { query: N }), t({ type: "SET_SEARCH_QUERY", payload: N }), P && c(!1), m.current = N);
    },
    [t]
  );
  p.useEffect(() => {
    const N = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const P = Vs(r), b = P[P.length - 1];
      if (b) {
        const W = b.match(k);
        if (W) {
          const O = W[1].toLowerCase();
          let I = W[2];
          I.startsWith('"') && (I = I.substring(1)), I.endsWith('"') && (I = I.substring(0, I.length - 1));
          const Z = await ph(I, O);
          o(Z), c(Z.length > 0), x(-1);
        } else {
          const O = b.replace(/^([-!])/, "").toLowerCase();
          if (O && E) {
            const I = E.all_prefixes.filter((Z) => Z.startsWith(O)).map((Z) => ({
              type: Z,
              value: "",
              count: 0
            }));
            if (I.length > 0) {
              o(I), c(!0), x(-1);
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
    E
  ]);
  const $ = p.useCallback(
    (N) => {
      var ce;
      const P = Vs(r), W = (P.pop() || "").match(/^([-!])/), O = W ? W[1] : "", Z = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(N.type);
      if (N.value === "") {
        const V = `${[...P, `${O}${N.type}:`].join(" ").trim()}`;
        s(V);
      } else {
        const V = Z ? N.value : `"${N.value}"`, z = `${[
          ...P,
          `${O}${N.type}:${V}`
        ].join(" ").trim()} `;
        s(z), o([]), c(!1);
      }
      (ce = u.current) == null || ce.focus();
    },
    [r, E]
  ), M = (N) => {
    N.key === "Enter" ? L(r) : N.key === "Tab" ? i && y >= 0 && ($(a[y]), N.preventDefault()) : N.key === "ArrowDown" ? i && (x((P) => Math.min(P + 1, a.length - 1)), N.preventDefault()) : N.key === "ArrowUp" ? i && (x((P) => Math.max(P - 1, -1)), N.preventDefault()) : N.key === "Escape" && c(!1);
  }, R = p.useCallback(() => {
    s(""), L("");
  }, [L]), U = p.useCallback(
    (N, P, b = !1) => {
      var ce;
      if (b) {
        const V = `${N}:`;
        s(V), (ce = u.current) == null || ce.focus();
        return;
      }
      const I = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(N) ? P : `"${P}"`, Z = `${N}:${I}`;
      s(Z), L(Z);
    },
    [L, E]
  ), K = p.useCallback(
    (N) => {
      s(N), N || L("");
    },
    [L]
  ), C = p.useCallback(() => {
    if (r === m.current || !k)
      return;
    const N = Vs(r), P = N[N.length - 1];
    if (!P) return;
    const b = !!P.match(k), W = P.replace(/^([-!])/, "").toLowerCase(), O = W && (E == null ? void 0 : E.all_prefixes.some((I) => I.startsWith(W)));
    (b || O) && c(!0);
  }, [r, k, E]), Y = p.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: _,
    toggleShowAllKeywords: S,
    selectedIndex: y,
    setSelectedIndex: x,
    inputRef: u,
    isQueryChanged: j,
    handleSearch: L,
    handleKeyDown: M,
    applySuggestion: $,
    clearSearch: R,
    applySearchSuggestion: U,
    handleInputChange: K,
    handleInputFocus: C,
    handleInputBlur: Y
  };
}, ec = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(Br, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(zm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(eh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(Am, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(yu, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(gu, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(Um, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(Rm, { size: 12 });
    default:
      return null;
  }
}, Xh = ({
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
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: _,
  onEditFavorite: y,
  onDeleteFavorite: x
}) => {
  const E = (g, k, S) => /* @__PURE__ */ l.jsxs(
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
        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: ec(g.type)
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
        S !== "all" && /* @__PURE__ */ l.jsx(
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
    `${S}-${g.type}:${g.value}:${k}`
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
          onMouseDown: (S) => {
            S.preventDefault(), s(g);
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
                children: ec(g.type)
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
                  color: g.value === xt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: g.value === xt ? "bold" : "normal"
                },
                children: g.value === xt ? g.type === "tag" ? `Untagged (${xt})` : `No ${g.type} (${xt})` : g.value
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
              (g, k) => E(g, k, "quick")
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
                    (g, k) => E({ type: g, value: "" }, k, "all")
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
              /* @__PURE__ */ l.jsx(qn, { size: 12, fill: "var(--meld-text-secondary)" }),
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
              rf,
              {
                fav: g,
                onSelect: _,
                onEdit: y,
                onDelete: x
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
}, Jh = () => {
  const { state: e } = Ne(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: _,
    handleKeyDown: y,
    applySuggestion: x,
    clearSearch: E,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: g
  } = qh(), {
    isSaving: k,
    toastMessage: S,
    editingFavorite: j,
    setEditingFavorite: L,
    editFavoriteName: $,
    setEditFavoriteName: M,
    editFavoriteQuery: R,
    setEditFavoriteQuery: U,
    handleDeleteFavorite: K,
    handleEditFavorite: C,
    handleSaveEditFavorite: Y,
    handleSaveFavorite: N
  } = nf();
  mt({
    onEscape: () => L(null),
    enabled: !!j
  });
  const P = p.useRef(null), b = p.useRef(!1);
  p.useEffect(() => {
    j && P.current && P.current.focus();
  }, [j]);
  const W = (I) => {
    I.target === I.currentTarget && (b.current = !0);
  }, O = (I) => {
    I.target === I.currentTarget && b.current && L(null), b.current = !1;
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
              S && /* @__PURE__ */ l.jsx(
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
                  children: S
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
                        onClick: () => _(t),
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
                        onMouseEnter: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)", w ? (I.currentTarget.style.filter = "brightness(1.15)", I.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (I) => {
                          I.currentTarget.style.transform = "none", w ? (I.currentTarget.style.filter = "none", I.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (I) => {
                          I.currentTarget.style.transform = "translateY(1px)", I.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ l.jsx(
                            _n,
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
                        onChange: (I) => u(I.target.value),
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
                    e.searchQuery && /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: N,
                        disabled: k,
                        title: e.favorites.some((I) => I.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          qn,
                          {
                            size: 16,
                            color: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: E,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ l.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                Xh,
                {
                  showSuggestions: s,
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
                  onSelectFavorite: (I) => {
                    n(I), _(I);
                  },
                  onEditFavorite: C,
                  onDeleteFavorite: K
                }
              )
            ]
          }
        ),
        j && Ce.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: W,
              onMouseUp: O,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (I) => I.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(qn, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => L(null),
                          children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                                    ref: P,
                                    type: "text",
                                    value: $,
                                    onChange: (I) => M(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && Y(), I.key === "Escape" && L(null);
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
                                    value: R,
                                    onChange: (I) => U(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && !I.shiftKey && (I.preventDefault(), Y()), I.key === "Escape" && L(null);
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
                          onClick: () => L(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: Y,
                          disabled: k || !$.trim() || !R.trim(),
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
}, Zh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, v] = p.useState(!1), [w, _] = p.useState(null), [y, x] = p.useState(""), [E, f] = p.useState(!1), u = p.useRef(null), m = p.useCallback(async () => {
    a(!0);
    try {
      const R = await Fo();
      r(R);
    } catch (R) {
      console.error("Failed to fetch tags:", R);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    m();
  }, [m]), p.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const g = async (R) => {
    R.preventDefault();
    const U = c.trim();
    if (!(!U || h)) {
      if (U.toLowerCase() === xt) {
        alert(
          `Tag name '${xt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((K) => K.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Eh(U), d(""), await m();
      } catch (K) {
        console.error("Failed to add tag:", K);
      } finally {
        v(!1);
      }
    }
  }, k = async (R, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await Nh(R), await m();
      } catch (K) {
        console.error("Failed to delete tag:", K);
      }
  }, S = (R) => {
    _(R.id), x(R.name);
  }, j = () => {
    _(null), x("");
  }, L = async (R) => {
    R.preventDefault();
    const U = y.trim();
    if (!U || w === null || E) return;
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const K = n.find((C) => C.id === w);
    if (K && K.name === U) {
      j();
      return;
    }
    if (n.some(
      (C) => C.id !== w && C.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Ch(w, U), j(), await m();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, $ = (R) => {
    t(`tag:${R}`);
  }, M = p.useMemo(() => n.filter(
    (R) => R.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(Br, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(xe, { size: 16 })
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
            onChange: (R) => d(R.target.value),
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
              /* @__PURE__ */ l.jsx(Ao, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(_n, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (R) => i(R.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((R) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === R.id ? /* @__PURE__ */ l.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: L,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (U) => x(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && j()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: E || !y.trim(),
                children: /* @__PURE__ */ l.jsx(Ro, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: j,
                disabled: E,
                children: /* @__PURE__ */ l.jsx(xe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: R.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => $(R.name),
              children: /* @__PURE__ */ l.jsx(_n, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(R),
              children: /* @__PURE__ */ l.jsx(_u, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(R.id, R.name),
              children: /* @__PURE__ */ l.jsx(ln, { size: 14 })
            }
          )
        ] })
      ] }) }, R.id)) })
    ] })
  ] });
};
function eg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const tg = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: h,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: E,
    handleRunWithMask: f,
    handleEditSource: u
  } = ps(e, t), { getParentChain: m } = Ju(a, c), [g, k] = p.useState(!1), [S, j] = p.useState(!1), [L, $] = p.useState(
    c["viewer.show_details_by_default"]
  ), [M, R] = p.useState(null), U = M ?? c["viewer.show_thumbnails"], [K, C] = p.useState(!1), [Y, N] = p.useState(!1), [P, b] = p.useState(null), [W, O] = p.useState(null), [I, Z] = p.useState(
    null
  ), ce = p.useRef(null), V = p.useRef(!0);
  p.useEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const z = p.useRef(s);
  p.useEffect(() => {
    z.current = s;
  }, [s]);
  const T = p.useMemo(() => {
    const G = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lineage" ? i : a.filter(
      (te) => te.exists !== !1 && (c["gallery.show_parent_images"] || !te.has_children || G)
    );
  }, [o, i, a, c, e.searchQuery]), J = s === null ? -1 : T.findIndex((G) => G.id === s), F = (o === "lineage" && i.length > 0 ? i : a).find((G) => G.id === s), se = p.useCallback(
    async (G = !1) => {
      if (!F) return;
      const te = g ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!G && te === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [F.id],
            hasLineage: !!(F.parent_id || F.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const D = e.viewScope === "trash", ae = /* @__PURE__ */ new Set([F.id]);
        if (te === "lineage") {
          const q = await Aa(F.id);
          for (const re of q)
            ae.add(re.id);
        }
        if (!V.current || z.current === null) return;
        if (T.length > ae.size) {
          let q = !1;
          for (let re = J + 1; re < T.length; re++)
            if (!ae.has(T[re].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: T[re].id, mode: o }
              }), q = !0;
              break;
            }
          if (!q) {
            for (let re = J - 1; re >= 0; re--)
              if (!ae.has(T[re].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: T[re].id, mode: o }
                }), q = !0;
                break;
              }
          }
          q || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await za(Array.from(ae), D), !D) {
          const q = T.filter(
            (re) => ae.has(re.id)
          );
          b(q), O(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ae) });
      } catch (D) {
        t({
          type: "SET_ERROR",
          payload: D instanceof Error ? D.message : String(D)
        });
      }
    },
    [
      F,
      g,
      c,
      e.viewScope,
      T,
      J,
      o,
      t
    ]
  ), H = p.useCallback(() => {
    F && d(F);
  }, [F, d]), fe = p.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: g } });
  }, [t, g]), ue = p.useCallback(async () => {
    const G = g ? c["fullscreen.loop"] : c["viewer.loop"];
    if (J === 0 && o === "gallery" && e.pagination.hasMore && !Y && G) {
      N(!0);
      try {
        const te = e.pagination.limit, D = e.pagination.total, ae = Math.max(0, D - te), q = await jl(
          ae,
          te,
          e.searchQuery
        );
        if (!V.current || (t({ type: "APPEND_IMAGES", payload: q }), z.current === null)) return;
        if (q.images.length > 0) {
          const re = q.images[q.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: re.id, mode: "gallery" }
          });
        }
      } catch (te) {
        console.error("Failed to jump to end:", te);
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
    Y,
    g
  ]), ve = p.useCallback(
    (G) => {
      G && "stopPropagation" in G && G.stopPropagation();
      const te = ce.current;
      te && (document.fullscreenElement ? document.exitFullscreen() : te.requestFullscreen().catch((D) => {
        console.error(
          `Error attempting to enable full-screen mode: ${D.message}`
        );
      }));
    },
    []
  ), pe = p.useCallback(async () => {
    F && (T.length > 1 ? fe() : t({ type: "CLOSE_VIEWER" }), await v(F));
  }, [F, T.length, fe, v, t]), Ke = p.useCallback(async () => {
    if (!P || P.length === 0) return;
    const G = P.map((D) => D.id), te = G[0];
    try {
      const D = await Oo(G);
      if (!V.current) return;
      if (t({ type: "ADD_IMAGES", payload: P }), e.viewScope === "trash") {
        const ae = D.restored_ids || G;
        t({ type: "REMOVE_IMAGES", payload: ae });
      }
      if (b(null), !V.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: te, mode: o }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [P, t, o, e.viewScope]), tt = p.useCallback(async () => {
    if (P && P.length > 0)
      await Ke();
    else if (W && W.type === "tags") {
      const { imageId: G, addTags: te, removeTags: D } = W;
      try {
        await Oa([G], te, D);
        const ae = (o === "lineage" ? i : a).find((q) => q.id === G);
        if (ae) {
          const q = [...ae.tags];
          for (const he of te)
            q.includes(he) || q.push(he);
          const re = q.filter((he) => !D.includes(he));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ae, tags: re }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: G, mode: o }
          });
        }
        O(null);
      } catch (ae) {
        t({
          type: "SET_ERROR",
          payload: ae instanceof Error ? ae.message : String(ae)
        });
      }
    }
  }, [
    P,
    W,
    Ke,
    a,
    i,
    o,
    t
  ]), Kr = p.useCallback(
    async (G) => {
      if (!G || !F) return;
      const te = F.id, D = [...F.tags], ae = G.split(/\s+/), q = [], re = [];
      let he = !1, Oe = !1, Ge = !1;
      for (const Ie of ae)
        if (Ie.startsWith("tag:")) {
          const _e = Ie.substring(4);
          _e && !D.includes(_e) && !q.includes(_e) && q.push(_e);
        } else if (Ie.startsWith("-tag:")) {
          const _e = Ie.substring(5);
          _e && D.includes(_e) && !re.includes(_e) && re.push(_e);
        } else if (Ie.startsWith("tag-toggle:")) {
          const _e = Ie.substring(11);
          _e && (D.includes(_e) ? re.includes(_e) || re.push(_e) : q.includes(_e) || q.push(_e));
        } else Ie === "next" ? he = !0 : Ie === "prev" ? Oe = !0 : Ie === "delete" && (Ge = !0);
      if (q.length > 0 || re.length > 0)
        try {
          await Oa(
            [te],
            q,
            re
          );
          const Ie = [...D];
          for (const Wt of q)
            Ie.includes(Wt) || Ie.push(Wt);
          const _e = Ie.filter((Wt) => !re.includes(Wt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...F, id: te, tags: _e }
          }), O({
            type: "tags",
            imageId: te,
            addTags: [...re],
            removeTags: [...q]
          }), b(null);
        } catch (Ie) {
          console.error("Failed to update tags via shortcut:", Ie);
        }
      Ge ? se(!0) : he ? fe() : Oe && ue();
    },
    [F, t, fe, ue, se]
  );
  p.useEffect(() => {
    const G = (D) => {
      const ae = D.target, q = ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable;
      if (q && D.key !== "Escape") {
        D.key === "Enter" && (D.ctrlKey || D.metaKey) && D.preventDefault();
        return;
      }
      if (s === null) return;
      const re = D.key === "Delete" || D.key === "Backspace", he = D.key === "ArrowRight" || D.key === "ArrowLeft", Oe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        D.key
      ), Ge = D.key === "Escape", Ie = (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z" || D.code === "KeyZ"), _e = /^[0-9]$/.test(D.key) && !D.ctrlKey && !D.metaKey && !D.altKey && D.code !== "KeyZ";
      if (re || he || Oe || Ge || Ie || _e)
        if (q)
          if (Ge) {
            if (e.activeModal.type !== "none") {
              D.preventDefault(), D.stopPropagation();
              return;
            }
            D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
          } else
            return;
        else {
          if (Ge && e.activeModal.type !== "none") {
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
        fe();
      else if (D.key === "ArrowLeft")
        ue();
      else if (D.key === "f" || D.key === "F")
        ve(D);
      else if (D.key === "i" || D.key === "I")
        $((Wt) => !Wt);
      else if (D.key === "t" || D.key === "T")
        H();
      else if ((D.key === "r" || D.key === "R") && e.viewScope === "trash")
        pe();
      else if (D.key === "Delete")
        se();
      else if ((D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z"))
        tt();
      else if (_e && !q) {
        const Wt = `viewer.shortcut.${D.key}`, hs = c[Wt];
        typeof hs == "string" && hs && (Z(D.key), setTimeout(() => {
          V.current && Z(null);
        }, 500), Kr(hs));
      }
    };
    window.addEventListener("keydown", G, { capture: !0 });
    const te = () => {
      const D = !!document.fullscreenElement;
      k(D), $(D ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", te), () => {
      window.removeEventListener("keydown", G, { capture: !0 }), document.removeEventListener("fullscreenchange", te);
    };
  }, [
    s,
    t,
    ve,
    fe,
    ue,
    c,
    se,
    e.activeModal.type,
    tt,
    H,
    pe,
    e.viewScope,
    Kr
  ]), p.useEffect(() => {
    s !== null && r(s).catch((G) => {
      console.error("Failed to fetch full image details for viewer:", G);
    });
  }, [s, r]), p.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (C(!0), Aa(s).then((G) => {
      V.current && t({ type: "SET_LINEAGE", payload: G });
    }).catch((G) => {
      console.error("Failed to fetch lineage:", G);
    }).finally(() => {
      V.current && C(!1);
    }));
  }, [o, s, i.length, t]), p.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || J !== -1 && J >= T.length - 15 && n();
  }, [
    s,
    T.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    J
  ]);
  const $o = p.useMemo(() => {
    if (!U || J === -1) return [];
    const G = c["viewer.thumbnail_window_size"], te = Math.floor(G / 2);
    let D = Math.max(0, J - te);
    const ae = Math.min(T.length, D + G);
    return ae === T.length && (D = Math.max(0, ae - G)), T.slice(D, ae).map((q, re) => ({
      img: q,
      absIndex: D + re
    }));
  }, [T, J, c, U]), ms = p.useMemo(() => F ? m(F) : [], [F, m]);
  return p.useEffect(() => {
    var G, te;
    if (s !== null) {
      if (U) {
        const D = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        D && D.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((G = document.activeElement) == null ? void 0 : G.tagName) === "CANVAS" && document.activeElement.blur(), (te = ce.current) == null || te.focus();
    }
  }, [s, U]), p.useEffect(() => {
    if (s === null || T.length === 0) return;
    const G = T.map((he) => he.id), te = G.indexOf(s);
    if (te === -1) return;
    const D = g ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: ae, nextId: q } = eg({
      ids: G,
      index: te,
      loopEnabled: D,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), re = setTimeout(() => {
      const he = [ae, q].filter(
        (Oe) => Oe !== null && Oe !== s
      );
      he.length !== 0 && Promise.allSettled(he.map((Oe) => r(Oe))).then(
        (Oe) => {
          for (const Ge of Oe)
            Ge.status === "rejected" && X.warn(
              "Prefetching adjacent image details failed",
              Ge.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(re);
  }, [
    s,
    T,
    g,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), p.useEffect(() => {
    if (s === null || T.length === 0) return;
    const G = T.findIndex(
      (q) => q.id === s
    );
    if (G === -1) return;
    const te = (q) => et(q), D = [
      G + 1,
      G + 2,
      G - 1
    ], ae = setTimeout(() => {
      for (const q of D)
        if (q >= 0 && q < T.length) {
          const re = T[q], he = new Image();
          he.src = te(re);
        }
    }, 150);
    return () => clearTimeout(ae);
  }, [s, T]), {
    isFullscreen: g,
    showDetails: L,
    setShowDetails: $,
    showThumbnails: U,
    setShowThumbnailsOverride: R,
    isLoadingLineage: K,
    isJumping: Y,
    isMenuOpen: S,
    setIsMenuOpen: j,
    activeShortcutKey: I,
    lastDeletedImages: P,
    setLastDeletedImages: b,
    overlayRef: ce,
    handleNext: fe,
    handlePrevious: ue,
    handleDelete: se,
    handleUpdateUserNotes: w,
    handleEditNotes: () => F && h(F),
    handleTagEdit: H,
    handleRestore: pe,
    handleUndo: tt,
    handleRestoreWorkflow: async () => {
      if (!F) return;
      await _(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!F) return;
      await y(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!F) return;
      x(F) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => F && E(F),
    handleRunWithMask: (G) => F && f(F, G),
    handleEditSource: () => F && u(F),
    toggleFullscreen: ve,
    currentIndex: J,
    currentThumbnails: T,
    image: F,
    windowedThumbnails: $o,
    parentChain: ms
  };
}, ng = ({
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
}) }) : null, rg = ({
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
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], h = d === "always" || d === "if_present" && e.user_notes;
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
                onClick: (_) => {
                  _.stopPropagation(), a({
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
}, lf = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = et(e);
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
              children: a ? /* @__PURE__ */ l.jsx(yu, { size: 12 }) : /* @__PURE__ */ l.jsx(gu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
lf.displayName = "ThumbnailItem";
const lg = ({
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
    lf,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Fr, { className: "animate-spin", size: 20 }) })
] }) });
function sg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ne(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: _,
    setLastDeletedImages: y,
    overlayRef: x,
    handleNext: E,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: g,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: j,
    handleRunWithWorkflow: L,
    handleRunWithMask: $,
    handleEditSource: M,
    handleDelete: R,
    toggleFullscreen: U,
    image: K,
    windowedThumbnails: C,
    parentChain: Y
  } = tg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), N = p.useRef(null), P = p.useRef(null), { executeWorkflow: b } = Gu(), W = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!K) return null;
  const { viewerImageId: O, viewerMode: I } = e, Z = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ce.createPortal(
    /* @__PURE__ */ l.jsxs(
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
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (ce) => ce.stopPropagation(),
              children: [
                Z && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Fr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(xu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(Qm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: s ? /* @__PURE__ */ l.jsx(qm, { size: 20 }) : /* @__PURE__ */ l.jsx(Ym, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Wo,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: P,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: j,
                      onRunWithWorkflow: L,
                      onRunWithMask: $,
                      onEditSource: M,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: R,
                      deleteLabel: W,
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
                      children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ l.jsx(vu, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Fr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: N,
                      src: et(K),
                      alt: K.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: E,
                    type: "button",
                    children: /* @__PURE__ */ l.jsx(zo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  rg,
                  {
                    image: K,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: Z,
                    parentChain: Y,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  lg,
                  {
                    windowedThumbnails: C,
                    viewerImageId: O,
                    currentImage: K,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: I
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  ng,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            Ku,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (ce, V) => {
                if (e.activeModal.type === "workflow_selection") {
                  const z = e.activeModal.maskFilename;
                  for (const T of e.activeModal.images)
                    await b(
                      ce,
                      T,
                      z,
                      V
                    );
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            Bu,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (ce) => {
                e.activeModal.type === "node_selection" && Wr(e.activeModal.image, ce);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(qu, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            Yu,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(Xu, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Cu, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx($u, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            Uu,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            Mu,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            Hu,
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
const ag = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = Ne(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), [d, h] = p.useState(e.pagination.limit);
  p.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = p.useRef(null), _ = p.useRef(null), y = p.useMemo(() => {
    const E = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((f) => e.viewScope === "trash" ? f.exists !== !1 || e.settings["gallery.trash.show_missing"] : f.exists !== !1 && (e.settings["gallery.show_parent_images"] || !f.has_children || E));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), x = p.useMemo(
    () => y.slice(0, d),
    [y, d]
  );
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (X.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), p.useEffect(() => {
    const E = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e.activeModal.type, e.selectedIds.size, t]), p.useEffect(() => {
    const E = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            X.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < y.length ? (X.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), h((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (X.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : X.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: y.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = w.current;
    return f && E.observe(f), () => {
      f && E.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    y.length,
    e.pagination.limit,
    e.images.length
  ]), p.useEffect(() => {
    const E = e.viewerImageId ?? _.current;
    if (E !== null && y.some((u) => u.id === E)) {
      const u = y.findIndex((g) => g.id === E);
      if (u >= d) {
        h(
          Math.ceil((u + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${E}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (_.current = null));
    }
    e.viewerImageId !== null && (_.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    y,
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
    displayedImages: y,
    visibleImages: x,
    isSearchActive: v,
    loadMoreRef: w
  };
}, og = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ne(), { handleRunWithWorkflow: s } = ps(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const o = e.viewScope === "trash", i = () => {
    const d = e.images.filter(
      (v) => e.selectedIds.has(v.id)
    ), h = /* @__PURE__ */ new Set();
    for (const v of d)
      if (v.tags)
        for (const w of v.tags)
          h.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(h)
      }
    });
  }, c = () => {
    const d = e.images.filter(
      (h) => e.selectedIds.has(h.id)
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
                  Fr,
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
                  ln,
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
                  Br,
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
                  wu,
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
                  ln,
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
              /* @__PURE__ */ l.jsx(xe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, ig = () => {
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
    visibleImages: h,
    isSearchActive: v,
    loadMoreRef: w
  } = ag(), [_, y] = p.useState(!1), [x, E] = p.useState(null), f = p.useRef(null), u = p.useCallback(() => {
    f.current && (E(
      f.current.getBoundingClientRect()
    ), y(!0));
  }, []), m = p.useCallback(
    (g) => {
      t({ type: "SET_SEARCH_QUERY", payload: g }), i(g), a("search"), y(!1);
    },
    [t, i, a]
  );
  return X.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: h.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(ln, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (g) => r("gallery.trash.show_missing", g.target.checked)
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
                  /* @__PURE__ */ l.jsx(xe, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: f,
                type: "button",
                onClick: u,
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(
                  qn,
                  {
                    size: 14,
                    fill: _ ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
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
                children: /* @__PURE__ */ l.jsx(_n, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const k = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", k);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(Bm, { size: 14 }) : /* @__PURE__ */ l.jsx(xu, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(Br, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx($m, { size: 14 })
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
                  Fr,
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
                children: /* @__PURE__ */ l.jsx(Jm, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Jh, {}) })
        ] }),
        /* @__PURE__ */ l.jsx(Gh, {}),
        e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
        s === "tags" ? /* @__PURE__ */ l.jsx(
          Zh,
          {
            onClose: () => a("gallery"),
            onSearch: (g) => {
              t({ type: "SET_SEARCH_QUERY", payload: g }), a("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: h.map((g) => {
                const k = e.settings["sidebar.thumbnail_size"] || 100, S = e.settings["gallery.view_mode"] === "grid_only", j = S && g.width && g.height ? Math.min(
                  k,
                  k * g.width / g.height
                ) + 10 : S ? k + 10 : "100%";
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    "data-image-id": g.id,
                    style: {
                      width: S ? "auto" : "100%",
                      flexShrink: 0,
                      display: S ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ l.jsx(
                      Kh,
                      {
                        height: S ? k + 10 : Math.max(k, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: S ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ l.jsx(Bh, { image: g })
                      }
                    )
                  },
                  g.id
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
                c >= d.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(og, {}),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(sg, {}),
        /* @__PURE__ */ l.jsx(Qh, {}),
        _ && /* @__PURE__ */ l.jsx(
          Yh,
          {
            anchorRect: x,
            onClose: () => y(!1),
            onSelect: m
          }
        )
      ]
    }
  );
};
tc.registerExtension({
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
const cg = document.getElementById(
  "meld-gallery-style"
);
if (!cg) {
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
let ul = null, gt = null;
tc.registerExtension({
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
      const n = await Eu();
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
      }, ee.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), ee.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), ee.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), X.log("Import completed.");
      }), ee.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await ju({
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
              galleryRoot: ul,
              galleryContainer: gt
            }), gt || (X.log("galleryContainer not found, creating new one"), gt = document.createElement("div"), gt.id = "meld-gallery-container", gt.style.height = "100%", gt.style.width = "100%", gt.style.display = "flex", gt.style.flexDirection = "column"), n.contains(gt) || (X.log("Appending galleryContainer to el"), n.appendChild(gt)), ul ? X.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (X.log("Creating new gallery root"), ul = fu(gt), ul.render(
              El.createElement(
                jh,
                null,
                El.createElement(ig)
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
