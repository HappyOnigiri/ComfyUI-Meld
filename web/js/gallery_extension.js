import { api as ee } from "/scripts/api.js";
import { app as Ko } from "/scripts/app.js";
function Kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Yd = Symbol.for("react.portal"), qd = Symbol.for("react.fragment"), Xd = Symbol.for("react.strict_mode"), Jd = Symbol.for("react.profiler"), Zd = Symbol.for("react.provider"), ef = Symbol.for("react.context"), tf = Symbol.for("react.forward_ref"), nf = Symbol.for("react.suspense"), rf = Symbol.for("react.memo"), lf = Symbol.for("react.lazy"), Di = Symbol.iterator;
function sf(e) {
  return e === null || typeof e != "object" ? null : (e = Di && e[Di] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xo = Object.assign, Jo = {};
function Bn(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zo() {
}
Zo.prototype = Bn.prototype;
function Da(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
var Ra = Da.prototype = new Zo();
Ra.constructor = Da;
Xo(Ra, Bn.prototype);
Ra.isPureReactComponent = !0;
var Ri = Array.isArray, eu = Object.prototype.hasOwnProperty, za = { current: null }, tu = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return { $$typeof: Ar, type: e, key: a, ref: i, props: l, _owner: za.current };
}
function af(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function of(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zi = /\/+/g;
function us(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? of("" + e.key) : t.toString(36);
}
function ol(e, t, n, r, l) {
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
        case Ar:
        case Yd:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + us(i, 0) : r, Ri(l) ? (n = "", e != null && (n = e.replace(zi, "$&/") + "/"), ol(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Aa(l) && (l = af(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(zi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ri(e)) for (var o = 0; o < e.length; o++) {
    a = e[o];
    var u = r + us(a, o);
    i += ol(a, t, n, u, l);
  }
  else if (u = sf(e), typeof u == "function") for (e = u.call(e), o = 0; !(a = e.next()).done; ) a = a.value, u = r + us(a, o++), i += ol(a, t, n, u, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Qr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return ol(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function uf(e) {
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
var Fe = { current: null }, ul = { transition: null }, cf = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: ul, ReactCurrentOwner: za };
function ru() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: Qr, forEach: function(e, t, n) {
  Qr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Qr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Qr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Aa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = Bn;
le.Fragment = qd;
le.Profiler = Jd;
le.PureComponent = Da;
le.StrictMode = Xd;
le.Suspense = nf;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
le.act = ru;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xo({}, e.props), l = e.key, a = e.ref, i = e._owner;
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
  return { $$typeof: Ar, type: e.type, key: l, ref: a, props: r, _owner: i };
};
le.createContext = function(e) {
  return e = { $$typeof: ef, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Zd, _context: e }, e.Consumer = e;
};
le.createElement = nu;
le.createFactory = function(e) {
  var t = nu.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: tf, render: e };
};
le.isValidElement = Aa;
le.lazy = function(e) {
  return { $$typeof: lf, _payload: { _status: -1, _result: e }, _init: uf };
};
le.memo = function(e, t) {
  return { $$typeof: rf, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = ul.transition;
  ul.transition = {};
  try {
    e();
  } finally {
    ul.transition = t;
  }
};
le.unstable_act = ru;
le.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
le.useContext = function(e) {
  return Fe.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
le.useId = function() {
  return Fe.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return Fe.current.useRef(e);
};
le.useState = function(e) {
  return Fe.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return Fe.current.useTransition();
};
le.version = "18.3.1";
Yo.exports = le;
var h = Yo.exports;
const _l = /* @__PURE__ */ Kd(h);
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
  function t(I, F) {
    var Q = I.length;
    I.push(F);
    e: for (; 0 < Q; ) {
      var M = Q - 1 >>> 1, te = I[M];
      if (0 < l(te, F)) I[M] = F, I[Q] = te, Q = M;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var F = I[0], Q = I.pop();
    if (Q !== F) {
      I[0] = Q;
      e: for (var M = 0, te = I.length, ye = te >>> 1; M < ye; ) {
        var P = 2 * (M + 1) - 1, D = I[P], z = P + 1, re = I[z];
        if (0 > l(D, Q)) z < te && 0 > l(re, D) ? (I[M] = re, I[z] = Q, M = z) : (I[M] = D, I[P] = Q, M = P);
        else if (z < te && 0 > l(re, Q)) I[M] = re, I[z] = Q, M = z;
        else break e;
      }
    }
    return F;
  }
  function l(I, F) {
    var Q = I.sortIndex - F.sortIndex;
    return Q !== 0 ? Q : I.id - F.id;
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
  var u = [], c = [], p = 1, w = null, v = 3, x = !1, y = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(I) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= I) r(c), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(c);
    }
  }
  function g(I) {
    if (_ = !1, m(I), !y) if (n(u) !== null) y = !0, L(C);
    else {
      var F = n(c);
      F !== null && Y(g, F.startTime - I);
    }
  }
  function C(I, F) {
    y = !1, _ && (_ = !1, d(N), N = -1), x = !0;
    var Q = v;
    try {
      for (m(F), w = n(u); w !== null && (!(w.expirationTime > F) || I && !A()); ) {
        var M = w.callback;
        if (typeof M == "function") {
          w.callback = null, v = w.priorityLevel;
          var te = M(w.expirationTime <= F);
          F = e.unstable_now(), typeof te == "function" ? w.callback = te : w === n(u) && r(u), m(F);
        } else r(u);
        w = n(u);
      }
      if (w !== null) var ye = !0;
      else {
        var P = n(c);
        P !== null && Y(g, P.startTime - F), ye = !1;
      }
      return ye;
    } finally {
      w = null, v = Q, x = !1;
    }
  }
  var S = !1, k = null, N = -1, U = 5, b = -1;
  function A() {
    return !(e.unstable_now() - b < U);
  }
  function O() {
    if (k !== null) {
      var I = e.unstable_now();
      b = I;
      var F = !0;
      try {
        F = k(!0, I);
      } finally {
        F ? $() : (S = !1, k = null);
      }
    } else S = !1;
  }
  var $;
  if (typeof f == "function") $ = function() {
    f(O);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), Z = E.port2;
    E.port1.onmessage = O, $ = function() {
      Z.postMessage(null);
    };
  } else $ = function() {
    j(O, 0);
  };
  function L(I) {
    k = I, S || (S = !0, $());
  }
  function Y(I, F) {
    N = j(function() {
      I(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    y || x || (y = !0, L(C));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(I) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = v;
    }
    var Q = v;
    v = F;
    try {
      return I();
    } finally {
      v = Q;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, F) {
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
    var Q = v;
    v = I;
    try {
      return F();
    } finally {
      v = Q;
    }
  }, e.unstable_scheduleCallback = function(I, F, Q) {
    var M = e.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? M + Q : M) : Q = M, I) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = Q + te, I = { id: p++, callback: F, priorityLevel: I, startTime: Q, expirationTime: te, sortIndex: -1 }, Q > M ? (I.sortIndex = Q, t(c, I), n(u) === null && I === n(c) && (_ ? (d(N), N = -1) : _ = !0, Y(g, Q - M))) : (I.sortIndex = te, t(u, I), y || x || (y = !0, L(C))), I;
  }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(I) {
    var F = v;
    return function() {
      var Q = v;
      v = F;
      try {
        return I.apply(this, arguments);
      } finally {
        v = Q;
      }
    };
  };
})(au);
su.exports = au;
var df = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff = h, Xe = df;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var iu = /* @__PURE__ */ new Set(), wr = {};
function gn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) iu.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), As = Object.prototype.hasOwnProperty, pf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ai = {}, Oi = {};
function mf(e) {
  return As.call(Oi, e) ? !0 : As.call(Ai, e) ? !1 : pf.test(e) ? Oi[e] = !0 : (Ai[e] = !0, !1);
}
function hf(e, t, n, r) {
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
function gf(e, t, n, r) {
  if (t === null || typeof t > "u" || hf(e, t, n, r)) return !0;
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
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gf(t, n, l, r) && (n = null), r || l === null ? mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Hr = Symbol.for("react.element"), xn = Symbol.for("react.portal"), _n = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), Os = Symbol.for("react.profiler"), ou = Symbol.for("react.provider"), uu = Symbol.for("react.context"), Ua = Symbol.for("react.forward_ref"), Fs = Symbol.for("react.suspense"), $s = Symbol.for("react.suspense_list"), Va = Symbol.for("react.memo"), zt = Symbol.for("react.lazy"), cu = Symbol.for("react.offscreen"), Fi = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != "object" ? null : (e = Fi && e[Fi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign, cs;
function ar(e) {
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
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function yf(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
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
    case _n:
      return "Fragment";
    case xn:
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
    case zt:
      t = e._payload, e = e._init;
      try {
        return Ws(e(t));
      } catch {
      }
  }
  return null;
}
function vf(e) {
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
function qt(e) {
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
function wf(e) {
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
function Br(e) {
  e._valueTracker || (e._valueTracker = wf(e));
}
function fu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = du(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function kl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return ge({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $i(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pu(e, t) {
  t = t.checked, t != null && $a(e, "checked", t, !1);
}
function Vs(e, t) {
  pu(e, t);
  var n = qt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qs(e, t.type, qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Wi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || kl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, l = 0; l < e.length; l++) {
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
  return ge({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ui(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qt(n) };
}
function mu(e, t) {
  var n = qt(t.value), r = qt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vi(e) {
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
var Gr, gu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cr = {
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
}, xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
  xf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
  });
});
function yu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
}
function vu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = yu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var _f = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Gs(e, t) {
  if (t) {
    if (_f[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
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
var qs = null, Pn = null, Dn = null;
function Qi(e) {
  if (e = $r(e)) {
    if (typeof qs != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Xl(t), qs(e.stateNode, e.type, t));
  }
}
function wu(e) {
  Pn ? Dn ? Dn.push(e) : Dn = [e] : Pn = e;
}
function xu() {
  if (Pn) {
    var e = Pn, t = Dn;
    if (Dn = Pn = null, Qi(e), t) for (e = 0; e < t.length; e++) Qi(t[e]);
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
    ps = !1, (Pn !== null || Dn !== null) && (ku(), xu());
  }
}
function _r(e, t) {
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
var Xs = !1;
if (Nt) try {
  var Zn = {};
  Object.defineProperty(Zn, "passive", { get: function() {
    Xs = !0;
  } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
} catch {
  Xs = !1;
}
function kf(e, t, n, r, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var dr = !1, Sl = null, jl = !1, Js = null, Sf = { onError: function(e) {
  dr = !0, Sl = e;
} };
function jf(e, t, n, r, l, a, i, o, u) {
  dr = !1, Sl = null, kf.apply(Sf, arguments);
}
function Cf(e, t, n, r, l, a, i, o, u) {
  if (jf.apply(this, arguments), dr) {
    if (dr) {
      var c = Sl;
      dr = !1, Sl = null;
    } else throw Error(R(198));
    jl || (jl = !0, Js = c);
  }
}
function yn(e) {
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
function Hi(e) {
  if (yn(e) !== e) throw Error(R(188));
}
function Ef(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yn(e), t === null) throw Error(R(188));
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
        if (a === n) return Hi(l), e;
        if (a === r) return Hi(l), t;
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
function Cu(e) {
  return e = Ef(e), e !== null ? Eu(e) : null;
}
function Eu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nu = Xe.unstable_scheduleCallback, Bi = Xe.unstable_cancelCallback, Nf = Xe.unstable_shouldYield, Mf = Xe.unstable_requestPaint, xe = Xe.unstable_now, If = Xe.unstable_getCurrentPriorityLevel, Ha = Xe.unstable_ImmediatePriority, Mu = Xe.unstable_UserBlockingPriority, Cl = Xe.unstable_NormalPriority, bf = Xe.unstable_LowPriority, Iu = Xe.unstable_IdlePriority, Gl = null, wt = null;
function Lf(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : Df, Tf = Math.log, Pf = Math.LN2;
function Df(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Tf(e) / Pf | 0) | 0;
}
var Kr = 64, Yr = 4194304;
function or(e) {
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
function El(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = or(o) : (a &= i, a !== 0 && (r = or(a)));
  } else i = n & ~l, i !== 0 ? r = or(i) : a !== 0 && (r = or(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Rf(e, t) {
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
function zf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - pt(a), o = 1 << i, u = l[i];
    u === -1 ? (!(o & n) || o & r) && (l[i] = Rf(o, t)) : u <= t && (e.expiredLanes |= o), a &= ~o;
  }
}
function Zs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bu() {
  var e = Kr;
  return Kr <<= 1, !(Kr & 4194240) && (Kr = 64), e;
}
function ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
}
function Af(e, t) {
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
var Tu, Ga, Pu, Du, Ru, ea = !1, qr = [], Ut = null, Vt = null, Qt = null, kr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), Ot = [], Of = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function er(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = $r(t), t !== null && Ga(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ff(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ut = er(Ut, e, t, n, r, l), !0;
    case "dragenter":
      return Vt = er(Vt, e, t, n, r, l), !0;
    case "mouseover":
      return Qt = er(Qt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return kr.set(a, er(kr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Sr.set(a, er(Sr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function zu(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = yn(t);
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
function cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ys = r, n.target.dispatchEvent(r), Ys = null;
    } else return t = $r(n), t !== null && Ga(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ki(e, t, n) {
  cl(e) && n.delete(t);
}
function $f() {
  ea = !1, Ut !== null && cl(Ut) && (Ut = null), Vt !== null && cl(Vt) && (Vt = null), Qt !== null && cl(Qt) && (Qt = null), kr.forEach(Ki), Sr.forEach(Ki);
}
function tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ea || (ea = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, $f)));
}
function jr(e) {
  function t(l) {
    return tr(l, e);
  }
  if (0 < qr.length) {
    tr(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ut !== null && tr(Ut, e), Vt !== null && tr(Vt, e), Qt !== null && tr(Qt, e), kr.forEach(t), Sr.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null); ) zu(n), n.blockedOn === null && Ot.shift();
}
var Rn = Lt.ReactCurrentBatchConfig, Nl = !0;
function Wf(e, t, n, r) {
  var l = oe, a = Rn.transition;
  Rn.transition = null;
  try {
    oe = 1, Ka(e, t, n, r);
  } finally {
    oe = l, Rn.transition = a;
  }
}
function Uf(e, t, n, r) {
  var l = oe, a = Rn.transition;
  Rn.transition = null;
  try {
    oe = 4, Ka(e, t, n, r);
  } finally {
    oe = l, Rn.transition = a;
  }
}
function Ka(e, t, n, r) {
  if (Nl) {
    var l = ta(e, t, n, r);
    if (l === null) js(e, t, r, Ml, n), Gi(e, r);
    else if (Ff(l, e, t, n, r)) r.stopPropagation();
    else if (Gi(e, r), t & 4 && -1 < Of.indexOf(e)) {
      for (; l !== null; ) {
        var a = $r(l);
        if (a !== null && Tu(a), a = ta(e, t, n, r), a === null && js(e, t, r, Ml, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else js(e, t, r, null, n);
  }
}
var Ml = null;
function ta(e, t, n, r) {
  if (Ml = null, e = Qa(r), e = sn(e), e !== null) if (t = yn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ju(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ml = e, null;
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
      switch (If()) {
        case Ha:
          return 1;
        case Mu:
          return 4;
        case Cl:
        case bf:
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
var $t = null, Ya = null, dl = null;
function Ou() {
  if (dl) return dl;
  var e, t = Ya, n = t.length, r, l = "value" in $t ? $t.value : $t.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++) ;
  return dl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xr() {
  return !0;
}
function Yi() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, a, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Xr : Yi, this.isPropagationStopped = Yi, this;
  }
  return ge(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
  }, persist: function() {
  }, isPersistent: Xr }), t;
}
var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qa = Ze(Gn), Fr = ge({}, Gn, { view: 0, detail: 0 }), Vf = Ze(Fr), hs, gs, nr, Kl = ge({}, Fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (hs = e.screenX - nr.screenX, gs = e.screenY - nr.screenY) : gs = hs = 0, nr = e), hs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gs;
} }), qi = Ze(Kl), Qf = ge({}, Kl, { dataTransfer: 0 }), Hf = Ze(Qf), Bf = ge({}, Fr, { relatedTarget: 0 }), ys = Ze(Bf), Gf = ge({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Ze(Gf), Yf = ge({}, Gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), qf = Ze(Yf), Xf = ge({}, Gn, { data: 0 }), Xi = Ze(Xf), Jf = {
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
}, Zf = {
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
}, ep = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ep[e]) ? !!t[e] : !1;
}
function Xa() {
  return tp;
}
var np = ge({}, Fr, { key: function(e) {
  if (e.key) {
    var t = Jf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rp = Ze(np), lp = ge({}, Kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ji = Ze(lp), sp = ge({}, Fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), ap = Ze(sp), ip = ge({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), op = Ze(ip), up = ge({}, Kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cp = Ze(up), dp = [9, 13, 27, 32], Ja = Nt && "CompositionEvent" in window, fr = null;
Nt && "documentMode" in document && (fr = document.documentMode);
var fp = Nt && "TextEvent" in window && !fr, Fu = Nt && (!Ja || fr && 8 < fr && 11 >= fr), Zi = " ", eo = !1;
function $u(e, t) {
  switch (e) {
    case "keyup":
      return dp.indexOf(t.keyCode) !== -1;
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
var kn = !1;
function pp(e, t) {
  switch (e) {
    case "compositionend":
      return Wu(t);
    case "keypress":
      return t.which !== 32 ? null : (eo = !0, Zi);
    case "textInput":
      return e = t.data, e === Zi && eo ? null : e;
    default:
      return null;
  }
}
function mp(e, t) {
  if (kn) return e === "compositionend" || !Ja && $u(e, t) ? (e = Ou(), dl = Ya = $t = null, kn = !1, e) : null;
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
var hp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function to(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hp[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  wu(r), t = Il(t, "onChange"), 0 < t.length && (n = new qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pr = null, Cr = null;
function gp(e) {
  Zu(e, 0);
}
function Yl(e) {
  var t = Cn(e);
  if (fu(t)) return e;
}
function yp(e, t) {
  if (e === "change") return t;
}
var Vu = !1;
if (Nt) {
  var vs;
  if (Nt) {
    var ws = "oninput" in document;
    if (!ws) {
      var no = document.createElement("div");
      no.setAttribute("oninput", "return;"), ws = typeof no.oninput == "function";
    }
    vs = ws;
  } else vs = !1;
  Vu = vs && (!document.documentMode || 9 < document.documentMode);
}
function ro() {
  pr && (pr.detachEvent("onpropertychange", Qu), Cr = pr = null);
}
function Qu(e) {
  if (e.propertyName === "value" && Yl(Cr)) {
    var t = [];
    Uu(t, Cr, e, Qa(e)), Su(gp, t);
  }
}
function vp(e, t, n) {
  e === "focusin" ? (ro(), pr = t, Cr = n, pr.attachEvent("onpropertychange", Qu)) : e === "focusout" && ro();
}
function wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yl(Cr);
}
function xp(e, t) {
  if (e === "click") return Yl(t);
}
function _p(e, t) {
  if (e === "input" || e === "change") return Yl(t);
}
function kp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : kp;
function Er(e, t) {
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
function lo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function so(e, t) {
  var n = lo(e);
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
    n = lo(n);
  }
}
function Hu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bu() {
  for (var e = window, t = kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = kl(e.document);
  }
  return t;
}
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Sp(e) {
  var t = Bu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Za(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = so(n, a);
        var i = so(
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
var jp = Nt && "documentMode" in document && 11 >= document.documentMode, Sn = null, na = null, mr = null, ra = !1;
function ao(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ra || Sn == null || Sn !== kl(r) || (r = Sn, "selectionStart" in r && Za(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Er(mr, r) || (mr = r, r = Il(na, "onSelect"), 0 < r.length && (t = new qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Sn)));
}
function Jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var jn = { animationend: Jr("Animation", "AnimationEnd"), animationiteration: Jr("Animation", "AnimationIteration"), animationstart: Jr("Animation", "AnimationStart"), transitionend: Jr("Transition", "TransitionEnd") }, xs = {}, Gu = {};
Nt && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
function ql(e) {
  if (xs[e]) return xs[e];
  if (!jn[e]) return e;
  var t = jn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gu) return xs[e] = t[n];
  return e;
}
var Ku = ql("animationend"), Yu = ql("animationiteration"), qu = ql("animationstart"), Xu = ql("transitionend"), Ju = /* @__PURE__ */ new Map(), io = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zt(e, t) {
  Ju.set(e, t), gn(t, [e]);
}
for (var _s = 0; _s < io.length; _s++) {
  var ks = io[_s], Cp = ks.toLowerCase(), Ep = ks[0].toUpperCase() + ks.slice(1);
  Zt(Cp, "on" + Ep);
}
Zt(Ku, "onAnimationEnd");
Zt(Yu, "onAnimationIteration");
Zt(qu, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Xu, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Np = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function oo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Cf(r, t, void 0, e), e.currentTarget = null;
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
        oo(l, o, c), a = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], u = o.instance, c = o.currentTarget, o = o.listener, u !== a && l.isPropagationStopped()) break e;
        oo(l, o, c), a = u;
      }
    }
  }
  if (jl) throw e = Js, jl = !1, Js = null, e;
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
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[Zr]) {
    e[Zr] = !0, iu.forEach(function(n) {
      n !== "selectionchange" && (Np.has(n) || Ss(n, !1, e), Ss(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || (t[Zr] = !0, Ss("selectionchange", !1, t));
  }
}
function ec(e, t, n, r) {
  switch (Au(t)) {
    case 1:
      var l = Wf;
      break;
    case 4:
      l = Uf;
      break;
    default:
      l = Ka;
  }
  n = l.bind(null, t, n, e), l = void 0, !Xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
        if (i = sn(o), i === null) return;
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
    var c = a, p = Qa(n), w = [];
    e: {
      var v = Ju.get(e);
      if (v !== void 0) {
        var x = qa, y = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = rp;
            break;
          case "focusin":
            y = "focus", x = ys;
            break;
          case "focusout":
            y = "blur", x = ys;
            break;
          case "beforeblur":
          case "afterblur":
            x = ys;
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
            x = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = ap;
            break;
          case Ku:
          case Yu:
          case qu:
            x = Kf;
            break;
          case Xu:
            x = op;
            break;
          case "scroll":
            x = Vf;
            break;
          case "wheel":
            x = cp;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = qf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ji;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", d = _ ? v !== null ? v + "Capture" : null : v;
        _ = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, d !== null && (g = _r(f, d), g != null && _.push(Mr(f, g, m)))), j) break;
          f = f.return;
        }
        0 < _.length && (v = new x(v, y, null, n, p), w.push({ event: v, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== Ys && (y = n.relatedTarget || n.fromElement) && (sn(y) || y[Mt])) break e;
        if ((x || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = c, y = y ? sn(y) : null, y !== null && (j = yn(y), y !== j || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = c), x !== y)) {
          if (_ = qi, g = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ji, g = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = x == null ? v : Cn(x), m = y == null ? v : Cn(y), v = new _(g, f + "leave", x, n, p), v.target = j, v.relatedTarget = m, g = null, sn(p) === c && (_ = new _(d, f + "enter", y, n, p), _.target = m, _.relatedTarget = j, g = _), j = g, x && y) t: {
            for (_ = x, d = y, f = 0, m = _; m; m = wn(m)) f++;
            for (m = 0, g = d; g; g = wn(g)) m++;
            for (; 0 < f - m; ) _ = wn(_), f--;
            for (; 0 < m - f; ) d = wn(d), m--;
            for (; f--; ) {
              if (_ === d || d !== null && _ === d.alternate) break t;
              _ = wn(_), d = wn(d);
            }
            _ = null;
          }
          else _ = null;
          x !== null && uo(w, v, x, _, !1), y !== null && j !== null && uo(w, j, y, _, !0);
        }
      }
      e: {
        if (v = c ? Cn(c) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var C = yp;
        else if (to(v)) if (Vu) C = _p;
        else {
          C = wp;
          var S = vp;
        }
        else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (C = xp);
        if (C && (C = C(e, c))) {
          Uu(w, C, n, p);
          break e;
        }
        S && S(e, v, c), e === "focusout" && (S = v._wrapperState) && S.controlled && v.type === "number" && Qs(v, "number", v.value);
      }
      switch (S = c ? Cn(c) : window, e) {
        case "focusin":
          (to(S) || S.contentEditable === "true") && (Sn = S, na = c, mr = null);
          break;
        case "focusout":
          mr = na = Sn = null;
          break;
        case "mousedown":
          ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ra = !1, ao(w, n, p);
          break;
        case "selectionchange":
          if (jp) break;
        case "keydown":
        case "keyup":
          ao(w, n, p);
      }
      var k;
      if (Ja) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else kn ? $u(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Fu && n.locale !== "ko" && (kn || N !== "onCompositionStart" ? N === "onCompositionEnd" && kn && (k = Ou()) : ($t = p, Ya = "value" in $t ? $t.value : $t.textContent, kn = !0)), S = Il(c, N), 0 < S.length && (N = new Xi(N, e, null, n, p), w.push({ event: N, listeners: S }), k ? N.data = k : (k = Wu(n), k !== null && (N.data = k)))), (k = fp ? pp(e, n) : mp(e, n)) && (c = Il(c, "onBeforeInput"), 0 < c.length && (p = new Xi("onBeforeInput", "beforeinput", null, n, p), w.push({ event: p, listeners: c }), p.data = k));
    }
    Zu(w, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = _r(e, n), a != null && r.unshift(Mr(e, a, l)), a = _r(e, t), a != null && r.push(Mr(e, a, l))), e = e.return;
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uo(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = _r(n, a), u != null && i.unshift(Mr(n, u, o))) : l || (u = _r(n, a), u != null && i.push(Mr(n, u, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Mp = /\r\n?/g, Ip = /\u0000|\uFFFD/g;
function co(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mp, `
`).replace(Ip, "");
}
function el(e, t, n) {
  if (t = co(t), co(e) !== t && n) throw Error(R(425));
}
function bl() {
}
var la = null, sa = null;
function aa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ia = typeof setTimeout == "function" ? setTimeout : void 0, bp = typeof clearTimeout == "function" ? clearTimeout : void 0, fo = typeof Promise == "function" ? Promise : void 0, Lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof fo < "u" ? function(e) {
  return fo.resolve(null).then(e).catch(Tp);
} : ia;
function Tp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Cs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), jr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  jr(t);
}
function Ht(e) {
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
function po(e) {
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
var Kn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Kn, Ir = "__reactProps$" + Kn, Mt = "__reactContainer$" + Kn, oa = "__reactEvents$" + Kn, Pp = "__reactListeners$" + Kn, Dp = "__reactHandles$" + Kn;
function sn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = po(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = po(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $r(e) {
  return e = e[vt] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Xl(e) {
  return e[Ir] || null;
}
var ua = [], En = -1;
function en(e) {
  return { current: e };
}
function de(e) {
  0 > En || (e.current = ua[En], ua[En] = null, En--);
}
function ue(e, t) {
  En++, ua[En] = e.current, e.current = t;
}
var Xt = {}, ze = en(Xt), Qe = en(!1), dn = Xt;
function Fn(e, t) {
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
function Ll() {
  de(Qe), de(ze);
}
function mo(e, t, n) {
  if (ze.current !== Xt) throw Error(R(168));
  ue(ze, t), ue(Qe, n);
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, vf(e) || "Unknown", l));
  return ge({}, n, r);
}
function Tl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xt, dn = ze.current, ue(ze, e), ue(Qe, Qe.current), !0;
}
function ho(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = tc(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, de(Qe), de(ze), ue(ze, e)) : de(Qe), ue(Qe, n);
}
var St = null, Jl = !1, Es = !1;
function nc(e) {
  St === null ? St = [e] : St.push(e);
}
function Rp(e) {
  Jl = !0, nc(e);
}
function tn() {
  if (!Es && St !== null) {
    Es = !0;
    var e = 0, t = oe;
    try {
      var n = St;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      St = null, Jl = !1;
    } catch (l) {
      throw St !== null && (St = St.slice(e + 1)), Nu(Ha, tn), l;
    } finally {
      oe = t, Es = !1;
    }
  }
  return null;
}
var Nn = [], Mn = 0, Pl = null, Dl = 0, et = [], tt = 0, fn = null, jt = 1, Ct = "";
function rn(e, t) {
  Nn[Mn++] = Dl, Nn[Mn++] = Pl, Pl = e, Dl = t;
}
function rc(e, t, n) {
  et[tt++] = jt, et[tt++] = Ct, et[tt++] = fn, fn = e;
  var r = jt;
  e = Ct;
  var l = 32 - pt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - pt(t) + l;
  if (30 < a) {
    var i = l - l % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, jt = 1 << 32 - pt(t) + l | n << l | r, Ct = a + e;
  } else jt = 1 << a | n << l | r, Ct = e;
}
function ei(e) {
  e.return !== null && (rn(e, 1), rc(e, 1, 0));
}
function ti(e) {
  for (; e === Pl; ) Pl = Nn[--Mn], Nn[Mn] = null, Dl = Nn[--Mn], Nn[Mn] = null;
  for (; e === fn; ) fn = et[--tt], et[tt] = null, Ct = et[--tt], et[tt] = null, jt = et[--tt], et[tt] = null;
}
var qe = null, Ye = null, fe = !1, dt = null;
function lc(e, t) {
  var n = nt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function go(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ye = Ht(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: jt, overflow: Ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ye = null, !0) : !1;
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
      if (!go(e, t)) {
        if (ca(e)) throw Error(R(418));
        t = Ht(n.nextSibling);
        var r = qe;
        t && go(e, t) ? lc(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, qe = e);
      }
    } else {
      if (ca(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, fe = !1, qe = e;
    }
  }
}
function yo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function tl(e) {
  if (e !== qe) return !1;
  if (!fe) return yo(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (ca(e)) throw sc(), Error(R(418));
    for (; t; ) lc(e, t), t = Ht(t.nextSibling);
  }
  if (yo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = qe ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function sc() {
  for (var e = Ye; e; ) e = Ht(e.nextSibling);
}
function $n() {
  Ye = qe = null, fe = !1;
}
function ni(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var zp = Lt.ReactCurrentBatchConfig;
function rr(e, t, n) {
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
function nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function vo(e) {
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
    return d = Yt(d, f), d.index = 0, d.sibling = null, d;
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
    var C = m.type;
    return C === _n ? p(d, f, m.props.children, g, m.key) : f !== null && (f.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && vo(C) === f.type) ? (g = l(f, m.props), g.ref = rr(d, f, m), g.return = d, g) : (g = wl(m.type, m.key, m.props, null, d.mode, g), g.ref = rr(d, f, m), g.return = d, g);
  }
  function c(d, f, m, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Ds(m, d.mode, g), f.return = d, f) : (f = l(f, m.children || []), f.return = d, f);
  }
  function p(d, f, m, g, C) {
    return f === null || f.tag !== 7 ? (f = cn(m, d.mode, g, C), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function w(d, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ps("" + f, d.mode, m), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Hr:
          return m = wl(f.type, f.key, f.props, null, d.mode, m), m.ref = rr(d, null, f), m.return = d, m;
        case xn:
          return f = Ds(f, d.mode, m), f.return = d, f;
        case zt:
          var g = f._init;
          return w(d, g(f._payload), m);
      }
      if (ir(f) || Jn(f)) return f = cn(f, d.mode, m, null), f.return = d, f;
      nl(d, f);
    }
    return null;
  }
  function v(d, f, m, g) {
    var C = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return C !== null ? null : o(d, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Hr:
          return m.key === C ? u(d, f, m, g) : null;
        case xn:
          return m.key === C ? c(d, f, m, g) : null;
        case zt:
          return C = m._init, v(
            d,
            f,
            C(m._payload),
            g
          );
      }
      if (ir(m) || Jn(m)) return C !== null ? null : p(d, f, m, g, null);
      nl(d, m);
    }
    return null;
  }
  function x(d, f, m, g, C) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(m) || null, o(f, d, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Hr:
          return d = d.get(g.key === null ? m : g.key) || null, u(f, d, g, C);
        case xn:
          return d = d.get(g.key === null ? m : g.key) || null, c(f, d, g, C);
        case zt:
          var S = g._init;
          return x(d, f, m, S(g._payload), C);
      }
      if (ir(g) || Jn(g)) return d = d.get(m) || null, p(f, d, g, C, null);
      nl(f, g);
    }
    return null;
  }
  function y(d, f, m, g) {
    for (var C = null, S = null, k = f, N = f = 0, U = null; k !== null && N < m.length; N++) {
      k.index > N ? (U = k, k = null) : U = k.sibling;
      var b = v(d, k, m[N], g);
      if (b === null) {
        k === null && (k = U);
        break;
      }
      e && k && b.alternate === null && t(d, k), f = a(b, f, N), S === null ? C = b : S.sibling = b, S = b, k = U;
    }
    if (N === m.length) return n(d, k), fe && rn(d, N), C;
    if (k === null) {
      for (; N < m.length; N++) k = w(d, m[N], g), k !== null && (f = a(k, f, N), S === null ? C = k : S.sibling = k, S = k);
      return fe && rn(d, N), C;
    }
    for (k = r(d, k); N < m.length; N++) U = x(k, d, N, m[N], g), U !== null && (e && U.alternate !== null && k.delete(U.key === null ? N : U.key), f = a(U, f, N), S === null ? C = U : S.sibling = U, S = U);
    return e && k.forEach(function(A) {
      return t(d, A);
    }), fe && rn(d, N), C;
  }
  function _(d, f, m, g) {
    var C = Jn(m);
    if (typeof C != "function") throw Error(R(150));
    if (m = C.call(m), m == null) throw Error(R(151));
    for (var S = C = null, k = f, N = f = 0, U = null, b = m.next(); k !== null && !b.done; N++, b = m.next()) {
      k.index > N ? (U = k, k = null) : U = k.sibling;
      var A = v(d, k, b.value, g);
      if (A === null) {
        k === null && (k = U);
        break;
      }
      e && k && A.alternate === null && t(d, k), f = a(A, f, N), S === null ? C = A : S.sibling = A, S = A, k = U;
    }
    if (b.done) return n(
      d,
      k
    ), fe && rn(d, N), C;
    if (k === null) {
      for (; !b.done; N++, b = m.next()) b = w(d, b.value, g), b !== null && (f = a(b, f, N), S === null ? C = b : S.sibling = b, S = b);
      return fe && rn(d, N), C;
    }
    for (k = r(d, k); !b.done; N++, b = m.next()) b = x(k, d, N, b.value, g), b !== null && (e && b.alternate !== null && k.delete(b.key === null ? N : b.key), f = a(b, f, N), S === null ? C = b : S.sibling = b, S = b);
    return e && k.forEach(function(O) {
      return t(d, O);
    }), fe && rn(d, N), C;
  }
  function j(d, f, m, g) {
    if (typeof m == "object" && m !== null && m.type === _n && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Hr:
          e: {
            for (var C = m.key, S = f; S !== null; ) {
              if (S.key === C) {
                if (C = m.type, C === _n) {
                  if (S.tag === 7) {
                    n(d, S.sibling), f = l(S, m.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && vo(C) === S.type) {
                  n(d, S.sibling), f = l(S, m.props), f.ref = rr(d, S, m), f.return = d, d = f;
                  break e;
                }
                n(d, S);
                break;
              } else t(d, S);
              S = S.sibling;
            }
            m.type === _n ? (f = cn(m.props.children, d.mode, g, m.key), f.return = d, d = f) : (g = wl(m.type, m.key, m.props, null, d.mode, g), g.ref = rr(d, f, m), g.return = d, d = g);
          }
          return i(d);
        case xn:
          e: {
            for (S = m.key; f !== null; ) {
              if (f.key === S) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
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
        case zt:
          return S = m._init, j(d, f, S(m._payload), g);
      }
      if (ir(m)) return y(d, f, m, g);
      if (Jn(m)) return _(d, f, m, g);
      nl(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, m), f.return = d, d = f) : (n(d, f), f = Ps(m, d.mode, g), f.return = d, d = f), i(d)) : n(d, f);
  }
  return j;
}
var Wn = ac(!0), ic = ac(!1), Rl = en(null), zl = null, In = null, ri = null;
function li() {
  ri = In = zl = null;
}
function si(e) {
  var t = Rl.current;
  de(Rl), e._currentValue = t;
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function zn(e, t) {
  zl = e, ri = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function lt(e) {
  var t = e._currentValue;
  if (ri !== e) if (e = { context: e, memoizedValue: t, next: null }, In === null) {
    if (zl === null) throw Error(R(308));
    In = e, zl.dependencies = { lanes: 0, firstContext: e };
  } else In = In.next = e;
  return t;
}
var an = null;
function ai(e) {
  an === null ? an = [e] : an.push(e);
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
var At = !1;
function ii(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function uc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, It(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ai(r)) : (t.next = l.next, l.next = t), r.interleaved = t, It(e, n);
}
function pl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
  }
}
function wo(e, t) {
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
function Al(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var a = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, i === null ? a = c : i.next = c, i = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, o = p.lastBaseUpdate, o !== i && (o === null ? p.firstBaseUpdate = c : o.next = c, p.lastBaseUpdate = u));
  }
  if (a !== null) {
    var w = l.baseState;
    i = 0, p = c = u = null, o = a;
    do {
      var v = o.lane, x = o.eventTime;
      if ((r & v) === v) {
        p !== null && (p = p.next = {
          eventTime: x,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var y = e, _ = o;
          switch (v = t, x = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                w = y.call(x, w, v);
                break e;
              }
              w = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, v = typeof y == "function" ? y.call(x, w, v) : y, v == null) break e;
              w = ge({}, w, v);
              break e;
            case 2:
              At = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
      } else x = { eventTime: x, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, p === null ? (c = p = x, u = w) : p = p.next = x, i |= v;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = w), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    mn |= i, e.lanes = i, e.memoizedState = w;
  }
}
function xo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(R(191, l));
      l.call(r);
    }
  }
}
var Wr = {}, xt = en(Wr), br = en(Wr), Lr = en(Wr);
function on(e) {
  if (e === Wr) throw Error(R(174));
  return e;
}
function oi(e, t) {
  switch (ue(Lr, t), ue(br, e), ue(xt, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bs(t, e);
  }
  de(xt), ue(xt, t);
}
function Un() {
  de(xt), de(br), de(Lr);
}
function cc(e) {
  on(Lr.current);
  var t = on(xt.current), n = Bs(t, e.type);
  t !== n && (ue(br, e), ue(xt, n));
}
function ui(e) {
  br.current === e && (de(xt), de(br));
}
var me = en(0);
function Ol(e) {
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
var ml = Lt.ReactCurrentDispatcher, Ms = Lt.ReactCurrentBatchConfig, pn = 0, he = null, je = null, Ne = null, Fl = !1, hr = !1, Tr = 0, Ap = 0;
function Pe() {
  throw Error(R(321));
}
function di(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fi(e, t, n, r, l, a) {
  if (pn = a, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ml.current = e === null || e.memoizedState === null ? Wp : Up, e = n(r, l), hr) {
    a = 0;
    do {
      if (hr = !1, Tr = 0, 25 <= a) throw Error(R(301));
      a += 1, Ne = je = null, t.updateQueue = null, ml.current = Vp, e = n(r, l);
    } while (hr);
  }
  if (ml.current = $l, t = je !== null && je.next !== null, pn = 0, Ne = je = he = null, Fl = !1, t) throw Error(R(300));
  return e;
}
function pi() {
  var e = Tr !== 0;
  return Tr = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? he.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function st() {
  if (je === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Ne === null ? he.memoizedState : Ne.next;
  if (t !== null) Ne = t, je = e;
  else {
    if (e === null) throw Error(R(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Ne === null ? he.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function Pr(e, t) {
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
      if ((pn & p) === p) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var w = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = w, i = r) : u = u.next = w, he.lanes |= p, mn |= p;
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? i = r : u.next = o, ht(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, he.lanes |= a, mn |= a, l = l.next;
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
  var n = he, r = st(), l = t(), a = !ht(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ve = !0), r = r.queue, mi(hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, Dr(9, mc.bind(null, n, r, l, t), void 0, null), Me === null) throw Error(R(349));
    pn & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
function _o(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $p.bind(null, he, e), [t.memoizedState, e];
}
function Dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vc() {
  return st().memoizedState;
}
function hl(e, t, n, r) {
  var l = yt();
  he.flags |= e, l.memoizedState = Dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zl(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (je !== null) {
    var i = je.memoizedState;
    if (a = i.destroy, r !== null && di(r, i.deps)) {
      l.memoizedState = Dr(t, n, a, r);
      return;
    }
  }
  he.flags |= e, l.memoizedState = Dr(1 | t, n, a, r);
}
function ko(e, t) {
  return hl(8390656, 8, e, t);
}
function mi(e, t) {
  return Zl(2048, 8, e, t);
}
function wc(e, t) {
  return Zl(4, 2, e, t);
}
function xc(e, t) {
  return Zl(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, Zl(4, 4, _c.bind(null, t, e), n);
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
function Cc(e, t, n) {
  return pn & 21 ? (ht(n, t) || (n = bu(), he.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function Op(e, t) {
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
function Ec() {
  return st().memoizedState;
}
function Fp(e, t, n) {
  var r = Kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Mc(t, n);
  else if (n = oc(e, t, n, r), n !== null) {
    var l = Oe();
    mt(n, e, r, l), Ic(n, t, r);
  }
}
function $p(e, t, n) {
  var r = Kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
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
  return e === he || t !== null && t === he;
}
function Mc(e, t) {
  hr = Fl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
  }
}
var $l = { readContext: lt, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, Wp = { readContext: lt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: lt, useEffect: ko, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hl(
    4194308,
    4,
    _c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fp.bind(null, he, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: _o, useDebugValue: hi, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = _o(!1), t = e[0];
  return e = Op.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = he, l = yt();
  if (fe) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), Me === null) throw Error(R(349));
    pn & 30 || pc(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, ko(hc.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Dr(9, mc.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = Me.identifierPrefix;
  if (fe) {
    var n = Ct, r = jt;
    n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ap++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Up = {
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
    return Is(Pr);
  },
  useDebugValue: hi,
  useDeferredValue: function(e) {
    var t = st();
    return Cc(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Is(Pr)[0], t = st().memoizedState;
    return [e, t];
  },
  useMutableSource: dc,
  useSyncExternalStore: fc,
  useId: Ec,
  unstable_isNewReconciler: !1
}, Vp = { readContext: lt, useCallback: Sc, useContext: lt, useEffect: mi, useImperativeHandle: kc, useInsertionEffect: wc, useLayoutEffect: xc, useMemo: jc, useReducer: bs, useRef: vc, useState: function() {
  return bs(Pr);
}, useDebugValue: hi, useDeferredValue: function(e) {
  var t = st();
  return je === null ? t.memoizedState = e : Cc(t, je.memoizedState, e);
}, useTransition: function() {
  var e = bs(Pr)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: dc, useSyncExternalStore: fc, useId: Ec, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = { isMounted: function(e) {
  return (e = e._reactInternals) ? yn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), l = Kt(e), a = Et(r, l);
  a.payload = t, n != null && (a.callback = n), t = Bt(e, a, l), t !== null && (mt(t, e, l, r), pl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), l = Kt(e), a = Et(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Bt(e, a, l), t !== null && (mt(t, e, l, r), pl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Oe(), r = Kt(e), l = Et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (mt(t, e, r, n), pl(t, e, r));
} };
function So(e, t, n, r, l, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(l, a) : !0;
}
function bc(e, t, n) {
  var r = !1, l = Xt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = lt(a) : (l = He(t) ? dn : ze.current, r = t.contextTypes, a = (r = r != null) ? Fn(e, l) : Xt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function jo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function ma(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ii(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = lt(a) : (a = He(t) ? dn : ze.current, l.context = Fn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (pa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && es.enqueueReplaceState(l, l.state, null), Al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += yf(r), r = r.return;
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
var Qp = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ul || (Ul = !0, Ca = r), ha(e, t);
  }, n;
}
function Tc(e, t, n) {
  n = Et(-1, n), n.tag = 3;
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
    ha(e, t), typeof r != "function" && (Gt === null ? Gt = /* @__PURE__ */ new Set([this]) : Gt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Co(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = lm.bind(null, e, t, n), t.then(e, e));
}
function Eo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function No(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e);
}
var Hp = Lt.ReactCurrentOwner, Ve = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : Wn(t, e.child, n, r);
}
function Mo(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return zn(t, l), r = fi(e, t, n, r, a, l), n = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, bt(e, t, l)) : (fe && n && ei(t), t.flags |= 1, Ae(e, t, r, l), t.child);
}
function Io(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Si(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Pc(e, t, a, r, l)) : (e = wl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var i = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Er, n(i, r) && e.ref === t.ref) return bt(e, t, l);
  }
  return t.flags |= 1, e = Yt(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pc(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Er(a, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, bt(e, t, l);
  }
  return ga(e, t, n, r, l);
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(Ln, Ke), Ke |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(Ln, Ke), Ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ue(Ln, Ke), Ke |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ue(Ln, Ke), Ke |= r;
  return Ae(e, t, l, n), t.child;
}
function Rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ga(e, t, n, r, l) {
  var a = He(n) ? dn : ze.current;
  return a = Fn(t, a), zn(t, l), n = fi(e, t, n, r, a, l), r = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, bt(e, t, l)) : (fe && r && ei(t), t.flags |= 1, Ae(e, t, n, l), t.child);
}
function bo(e, t, n, r, l) {
  if (He(n)) {
    var a = !0;
    Tl(t);
  } else a = !1;
  if (zn(t, l), t.stateNode === null) gl(e, t), bc(t, n, r), ma(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var u = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = lt(c) : (c = He(n) ? dn : ze.current, c = Fn(t, c));
    var p = n.getDerivedStateFromProps, w = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || u !== c) && jo(t, i, r, c), At = !1;
    var v = t.memoizedState;
    i.state = v, Al(t, r, i, l), u = t.memoizedState, o !== r || v !== u || Qe.current || At ? (typeof p == "function" && (pa(t, n, p, r), u = t.memoizedState), (o = At || So(t, n, o, r, v, u, c)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, uc(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : ut(t.type, o), i.props = c, w = t.pendingProps, v = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = lt(u) : (u = He(n) ? dn : ze.current, u = Fn(t, u));
    var x = n.getDerivedStateFromProps;
    (p = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== w || v !== u) && jo(t, i, r, u), At = !1, v = t.memoizedState, i.state = v, Al(t, r, i, l);
    var y = t.memoizedState;
    o !== w || v !== y || Qe.current || At ? (typeof x == "function" && (pa(t, n, x, r), y = t.memoizedState), (c = At || So(t, n, c, r, v, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ya(e, t, n, r, a, l);
}
function ya(e, t, n, r, l, a) {
  Rc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ho(t, n, !1), bt(e, t, a);
  r = t.stateNode, Hp.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Wn(t, e.child, null, a), t.child = Wn(t, null, o, a)) : Ae(e, t, o, a), t.memoizedState = r.state, l && ho(t, n, !0), t.child;
}
function zc(e) {
  var t = e.stateNode;
  t.pendingContext ? mo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mo(e, t.context, !1), oi(e, t.containerInfo);
}
function Lo(e, t, n, r, l) {
  return $n(), ni(l), t.flags |= 256, Ae(e, t, n, r), t.child;
}
var va = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
  var r = t.pendingProps, l = me.current, a = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ue(me, l & 1), e === null)
    return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = rs(i, r, 0, null), e = cn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = wa(n), t.memoizedState = va, e) : gi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Bp(e, t, i, r, o, l, n);
  if (a) {
    a = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Yt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? a = Yt(o, a) : (a = cn(a, i, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, i = e.child.memoizedState, i = i === null ? wa(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~n, t.memoizedState = va, r;
  }
  return a = e.child, e = a.sibling, r = Yt(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gi(e, t) {
  return t = rs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function rl(e, t, n, r) {
  return r !== null && ni(r), Wn(t, e.child, null, n), e = gi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Bp(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ls(Error(R(422))), rl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = rs({ mode: "visible", children: r.children }, l, 0, null), a = cn(a, l, i, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Wn(t, e.child, null, i), t.child.memoizedState = wa(i), t.memoizedState = va, a);
  if (!(t.mode & 1)) return rl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, a = Error(R(419)), r = Ls(a, r, void 0), rl(e, t, i, r);
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
    return ki(), r = Ls(Error(R(421))), rl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sm.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, Ye = Ht(l.nextSibling), qe = t, fe = !0, dt = null, e !== null && (et[tt++] = jt, et[tt++] = Ct, et[tt++] = fn, jt = e.id, Ct = e.overflow, fn = t), t = gi(t, r.children), t.flags |= 4096, t);
}
function To(e, t, n) {
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
  if (Ae(e, t, r.children, n), r = me.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && To(e, n, t);
      else if (e.tag === 19) To(e, n, t);
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
  if (ue(me, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ol(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ts(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Ol(e) === null) {
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
function gl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Gp(e, t, n) {
  switch (t.tag) {
    case 3:
      zc(t), $n();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      He(t.type) && Tl(t);
      break;
    case 4:
      oi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ue(Rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(me, me.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ac(e, t, n) : (ue(me, me.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ue(me, me.current), r) break;
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
    e = t.stateNode, on(xt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Us(e, l), r = Us(e, r), a = [];
        break;
      case "select":
        l = ge({}, l, { value: void 0 }), r = ge({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Hs(e, l), r = Hs(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bl);
    }
    Gs(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (wr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && o[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (a || (a = []), a.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (wr.hasOwnProperty(c) ? (u != null && c === "onScroll" && ce("scroll", e), a || o === u || (a = [])) : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
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
function Kp(e, t, n) {
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
      return He(t.type) && Ll(), De(t), null;
    case 3:
      return r = t.stateNode, Un(), de(Qe), de(ze), ci(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ma(dt), dt = null))), xa(e, t), De(t), null;
    case 5:
      ui(t);
      var l = on(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) $c(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return De(t), null;
        }
        if (e = on(xt.current), tl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[vt] = t, r[Ir] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < ur.length; l++) ce(ur[l], r);
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
              $i(r, a), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Ui(r, a), ce("invalid", r);
          }
          Gs(n, a), l = null;
          for (var i in a) if (a.hasOwnProperty(i)) {
            var o = a[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && el(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && el(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : wr.hasOwnProperty(i) && o != null && i === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Br(r), Wi(r, a, !0);
              break;
            case "textarea":
              Br(r), Vi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = bl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[Ir] = r, Fc(e, t, !1, !1), t.stateNode = e;
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
                for (l = 0; l < ur.length; l++) ce(ur[l], e);
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
                $i(e, r), l = Us(e, r), ce("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ge({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Ui(e, r), l = Hs(e, r), ce("invalid", e);
                break;
              default:
                l = r;
            }
            Gs(n, l), o = l;
            for (a in o) if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "style" ? vu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && gu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && xr(e, u) : typeof u == "number" && xr(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (wr.hasOwnProperty(a) ? u != null && a === "onScroll" && ce("scroll", e) : u != null && $a(e, a, u, i));
            }
            switch (n) {
              case "input":
                Br(e), Wi(e, r, !1);
                break;
              case "textarea":
                Br(e), Vi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Tn(e, !!r.multiple, a, !1) : r.defaultValue != null && Tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = bl);
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
        if (n = on(Lr.current), on(xt.current), tl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (a = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
            case 3:
              el(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && el(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return De(t), null;
    case 13:
      if (de(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && Ye !== null && t.mode & 1 && !(t.flags & 128)) sc(), $n(), t.flags |= 98560, a = !1;
        else if (a = tl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(R(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(R(317));
            a[vt] = t;
          } else $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          De(t), a = !1;
        } else dt !== null && (Ma(dt), dt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || me.current & 1 ? Ce === 0 && (Ce = 3) : ki())), t.updateQueue !== null && (t.flags |= 4), De(t), null);
    case 4:
      return Un(), xa(e, t), e === null && Nr(t.stateNode.containerInfo), De(t), null;
    case 10:
      return si(t.type._context), De(t), null;
    case 17:
      return He(t.type) && Ll(), De(t), null;
    case 19:
      if (de(me), a = t.memoizedState, a === null) return De(t), null;
      if (r = (t.flags & 128) !== 0, i = a.rendering, i === null) if (r) lr(a, !1);
      else {
        if (Ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ol(e), i !== null) {
            for (t.flags |= 128, lr(a, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ue(me, me.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && xe() > Qn && (t.flags |= 128, r = !0, lr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ol(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !fe) return De(t), null;
        } else 2 * xe() - a.renderingStartTime > Qn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (n = a.last, n !== null ? n.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, n = me.current, ue(me, r ? n & 1 | 2 : n & 1), t) : (De(t), null);
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
function Yp(e, t) {
  switch (ti(t), t.tag) {
    case 1:
      return He(t.type) && Ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), de(Qe), de(ze), ci(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ui(t), null;
    case 13:
      if (de(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(me), null;
    case 4:
      return Un(), null;
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
var ll = !1, Re = !1, qp = typeof WeakSet == "function" ? WeakSet : Set, W = null;
function bn(e, t) {
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
var Po = !1;
function Xp(e, t) {
  if (la = Nl, e = Bu(), Za(e)) {
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
        var i = 0, o = -1, u = -1, c = 0, p = 0, w = e, v = null;
        t: for (; ; ) {
          for (var x; w !== n || l !== 0 && w.nodeType !== 3 || (o = i + l), w !== a || r !== 0 && w.nodeType !== 3 || (u = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (x = w.firstChild) !== null; )
            v = w, w = x;
          for (; ; ) {
            if (w === e) break t;
            if (v === n && ++c === l && (o = i), v === a && ++p === r && (u = i), (x = w.nextSibling) !== null) break;
            w = v, v = w.parentNode;
          }
          w = x;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sa = { focusedElem: e, selectionRange: n }, Nl = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
  else for (; W !== null; ) {
    t = W;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var _ = y.memoizedProps, j = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : ut(t.type, _), j);
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
      e.return = t.return, W = e;
      break;
    }
    W = t.return;
  }
  return y = Po, Po = !1, y;
}
function gr(e, t, n) {
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
function ts(e, t) {
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
  t !== null && (e.alternate = null, Uc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Ir], delete t[oa], delete t[Pp], delete t[Dp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Do(e) {
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), e = e.sibling;
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), e = e.sibling;
}
var Ie = null, ct = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), n = n.sibling;
}
function Qc(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Gl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Re || bn(n, t);
    case 6:
      var r = Ie, l = ct;
      Ie = null, Rt(e, t, n), Ie = r, ct = l, Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Cs(e.parentNode, n) : e.nodeType === 1 && Cs(e, n), jr(e)) : Cs(Ie, n.stateNode));
      break;
    case 4:
      r = Ie, l = ct, Ie = n.stateNode.containerInfo, ct = !0, Rt(e, t, n), Ie = r, ct = l;
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
      Rt(e, t, n);
      break;
    case 1:
      if (!Re && (bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ve(n, t, o);
      }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Rt(e, t, n), Re = r) : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Ro(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qp()), t.forEach(function(r) {
      var l = am.bind(null, e, r);
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
          gr(3, e, e.return), ts(3, e);
        } catch (_) {
          ve(e, e.return, _);
        }
        try {
          gr(5, e, e.return);
        } catch (_) {
          ve(e, e.return, _);
        }
      }
      break;
    case 1:
      it(t, e), gt(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (it(t, e), gt(e), r & 512 && n !== null && bn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          xr(l, "");
        } catch (_) {
          ve(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, i = n !== null ? n.memoizedProps : a, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && a.type === "radio" && a.name != null && pu(l, a), Ks(o, i);
          var c = Ks(o, a);
          for (i = 0; i < u.length; i += 2) {
            var p = u[i], w = u[i + 1];
            p === "style" ? vu(l, w) : p === "dangerouslySetInnerHTML" ? gu(l, w) : p === "children" ? xr(l, w) : $a(l, p, w, c);
          }
          switch (o) {
            case "input":
              Vs(l, a);
              break;
            case "textarea":
              mu(l, a);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Tn(l, !!a.multiple, x, !1) : v !== !!a.multiple && (a.defaultValue != null ? Tn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Tn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Ir] = a;
        } catch (_) {
          ve(e, e.return, _);
        }
      }
      break;
    case 6:
      if (it(t, e), gt(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          ve(e, e.return, _);
        }
      }
      break;
    case 3:
      if (it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        jr(t.containerInfo);
      } catch (_) {
        ve(e, e.return, _);
      }
      break;
    case 4:
      it(t, e), gt(e);
      break;
    case 13:
      it(t, e), gt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (wi = xe())), r & 4 && Ro(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (c = Re) || p, it(t, e), Re = c) : it(t, e), gt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (W = e, p = e.child; p !== null; ) {
          for (w = W = p; W !== null; ) {
            switch (v = W, x = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, v, v.return);
                break;
              case 1:
                bn(v, v.return);
                var y = v.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (_) {
                    ve(r, n, _);
                  }
                }
                break;
              case 5:
                bn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ao(w);
                  continue;
                }
            }
            x !== null ? (x.return = v, W = x) : Ao(w);
          }
          p = p.sibling;
        }
        e: for (p = null, w = e; ; ) {
          if (w.tag === 5) {
            if (p === null) {
              p = w;
              try {
                l = w.stateNode, c ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = w.stateNode, u = w.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = yu("display", i));
              } catch (_) {
                ve(e, e.return, _);
              }
            }
          } else if (w.tag === 6) {
            if (p === null) try {
              w.stateNode.nodeValue = c ? "" : w.memoizedProps;
            } catch (_) {
              ve(e, e.return, _);
            }
          } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
            w.child.return = w, w = w.child;
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            p === w && (p = null), w = w.return;
          }
          p === w && (p = null), w.sibling.return = w.return, w = w.sibling;
        }
      }
      break;
    case 19:
      it(t, e), gt(e), r & 4 && Ro(e);
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
          r.flags & 32 && (xr(l, ""), r.flags &= -33);
          var a = Do(e);
          ja(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Do(e);
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
function Jp(e, t, n) {
  W = e, Bc(e);
}
function Bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var l = W, a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || ll;
      if (!i) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Re;
        o = ll;
        var c = Re;
        if (ll = i, (Re = u) && !c) for (W = l; W !== null; ) i = W, u = i.child, i.tag === 22 && i.memoizedState !== null ? Oo(l) : u !== null ? (u.return = i, W = u) : Oo(l);
        for (; a !== null; ) W = a, Bc(a), a = a.sibling;
        W = l, ll = o, Re = c;
      }
      zo(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, W = a) : zo(e);
  }
}
function zo(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Re || ts(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && xo(t, a, r);
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
              xo(t, i, n);
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
                  var w = p.dehydrated;
                  w !== null && jr(w);
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
      } catch (v) {
        ve(t, t.return, v);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function Ao(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, W = n;
      break;
    }
    W = t.return;
  }
}
function Oo(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ts(4, t);
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
      W = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, W = o;
      break;
    }
    W = t.return;
  }
}
var Zp = Math.ceil, Wl = Lt.ReactCurrentDispatcher, yi = Lt.ReactCurrentOwner, rt = Lt.ReactCurrentBatchConfig, ae = 0, Me = null, ke = null, Le = 0, Ke = 0, Ln = en(0), Ce = 0, Rr = null, mn = 0, ns = 0, vi = 0, yr = null, Ue = null, wi = 0, Qn = 1 / 0, kt = null, Ul = !1, Ca = null, Gt = null, sl = !1, Wt = null, Vl = 0, vr = 0, Ea = null, yl = -1, vl = 0;
function Oe() {
  return ae & 6 ? xe() : yl !== -1 ? yl : yl = xe();
}
function Kt(e) {
  return e.mode & 1 ? ae & 2 && Le !== 0 ? Le & -Le : zp.transition !== null ? (vl === 0 && (vl = bu()), vl) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Au(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < vr) throw vr = 0, Ea = null, Error(R(185));
  Or(e, n, r), (!(ae & 2) || e !== Me) && (e === Me && (!(ae & 2) && (ns |= n), Ce === 4 && Ft(e, Le)), Be(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (Qn = xe() + 500, Jl && tn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  zf(e, t);
  var r = El(e, e === Me ? Le : 0);
  if (r === 0) n !== null && Bi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bi(n), t === 1) e.tag === 0 ? Rp(Fo.bind(null, e)) : nc(Fo.bind(null, e)), Lp(function() {
      !(ae & 6) && tn();
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
          n = Cl;
          break;
        case 536870912:
          n = Iu;
          break;
        default:
          n = Cl;
      }
      n = ed(n, Gc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gc(e, t) {
  if (yl = -1, vl = 0, ae & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = El(e, e === Me ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ql(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Yc();
    (Me !== e || Le !== t) && (kt = null, Qn = xe() + 500, un(e, t));
    do
      try {
        nm();
        break;
      } catch (o) {
        Kc(e, o);
      }
    while (!0);
    li(), Wl.current = a, ae = l, ke !== null ? t = 0 : (Me = null, Le = 0, t = Ce);
  }
  if (t !== 0) {
    if (t === 2 && (l = Zs(e), l !== 0 && (r = l, t = Na(e, l))), t === 1) throw n = Rr, un(e, 0), Ft(e, r), Be(e, xe()), n;
    if (t === 6) Ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !em(l) && (t = Ql(e, r), t === 2 && (a = Zs(e), a !== 0 && (r = a, t = Na(e, a))), t === 1)) throw n = Rr, un(e, 0), Ft(e, r), Be(e, xe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          ln(e, Ue, kt);
          break;
        case 3:
          if (Ft(e, r), (r & 130023424) === r && (t = wi + 500 - xe(), 10 < t)) {
            if (El(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ia(ln.bind(null, e, Ue, kt), t);
            break;
          }
          ln(e, Ue, kt);
          break;
        case 4:
          if (Ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            a = 1 << i, i = t[i], i > l && (l = i), r &= ~a;
          }
          if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ia(ln.bind(null, e, Ue, kt), r);
            break;
          }
          ln(e, Ue, kt);
          break;
        case 5:
          ln(e, Ue, kt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Be(e, xe()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function Na(e, t) {
  var n = yr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ma(t)), e;
}
function Ma(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function em(e) {
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
function Ft(e, t) {
  for (t &= ~vi, t &= ~ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Fo(e) {
  if (ae & 6) throw Error(R(327));
  An();
  var t = El(e, 0);
  if (!(t & 1)) return Be(e, xe()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e);
    r !== 0 && (t = r, n = Na(e, r));
  }
  if (n === 1) throw n = Rr, un(e, 0), Ft(e, t), Be(e, xe()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Ue, kt), Be(e, xe()), null;
}
function xi(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (Qn = xe() + 500, Jl && tn());
  }
}
function hn(e) {
  Wt !== null && Wt.tag === 0 && !(ae & 6) && An();
  var t = ae;
  ae |= 1;
  var n = rt.transition, r = oe;
  try {
    if (rt.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, rt.transition = n, ae = t, !(ae & 6) && tn();
  }
}
function _i() {
  Ke = Ln.current, de(Ln);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bp(n)), ke !== null) for (n = ke.return; n !== null; ) {
    var r = n;
    switch (ti(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ll();
        break;
      case 3:
        Un(), de(Qe), de(ze), ci();
        break;
      case 5:
        ui(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        de(me);
        break;
      case 19:
        de(me);
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
  if (Me = e, ke = e = Yt(e.current, null), Le = Ke = t, Ce = 0, Rr = null, vi = ns = mn = 0, Ue = yr = null, an !== null) {
    for (t = 0; t < an.length; t++) if (n = an[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var i = a.next;
        a.next = l, r.next = i;
      }
      n.pending = r;
    }
    an = null;
  }
  return e;
}
function Kc(e, t) {
  do {
    var n = ke;
    try {
      if (li(), ml.current = $l, Fl) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Fl = !1;
      }
      if (pn = 0, Ne = je = he = null, hr = !1, Tr = 0, yi.current = null, n === null || n.return === null) {
        Ce = 1, Rr = t, ke = null;
        break;
      }
      e: {
        var a = e, i = n.return, o = n, u = t;
        if (t = Le, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, p = o, w = p.tag;
          if (!(p.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var v = p.alternate;
            v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var x = Eo(i);
          if (x !== null) {
            x.flags &= -257, No(x, i, o, a, t), x.mode & 1 && Co(a, c, t), t = x, u = c;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(u), t.updateQueue = _;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Co(a, c, t), ki();
              break e;
            }
            u = Error(R(426));
          }
        } else if (fe && o.mode & 1) {
          var j = Eo(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), No(j, i, o, a, t), ni(Vn(u, o));
            break e;
          }
        }
        a = u = Vn(u, o), Ce !== 4 && (Ce = 2), yr === null ? yr = [a] : yr.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = Lc(a, u, t);
              wo(a, d);
              break e;
            case 1:
              o = u;
              var f = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Gt === null || !Gt.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Tc(a, o, t);
                wo(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xc(n);
    } catch (C) {
      t = C, ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yc() {
  var e = Wl.current;
  return Wl.current = $l, e === null ? $l : e;
}
function ki() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Me === null || !(mn & 268435455) && !(ns & 268435455) || Ft(Me, Le);
}
function Ql(e, t) {
  var n = ae;
  ae |= 2;
  var r = Yc();
  (Me !== e || Le !== t) && (kt = null, un(e, t));
  do
    try {
      tm();
      break;
    } catch (l) {
      Kc(e, l);
    }
  while (!0);
  if (li(), ae = n, Wl.current = r, ke !== null) throw Error(R(261));
  return Me = null, Le = 0, Ce;
}
function tm() {
  for (; ke !== null; ) qc(ke);
}
function nm() {
  for (; ke !== null && !Nf(); ) qc(ke);
}
function qc(e) {
  var t = Zc(e.alternate, e, Ke);
  e.memoizedProps = e.pendingProps, t === null ? Xc(e) : ke = t, yi.current = null;
}
function Xc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Yp(n, t), n !== null) {
        n.flags &= 32767, ke = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ce = 6, ke = null;
        return;
      }
    } else if (n = Kp(n, t, Ke), n !== null) {
      ke = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function ln(e, t, n) {
  var r = oe, l = rt.transition;
  try {
    rt.transition = null, oe = 1, rm(e, t, n, r);
  } finally {
    rt.transition = l, oe = r;
  }
  return null;
}
function rm(e, t, n, r) {
  do
    An();
  while (Wt !== null);
  if (ae & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Af(e, a), e === Me && (ke = Me = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sl || (sl = !0, ed(Cl, function() {
    return An(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = rt.transition, rt.transition = null;
    var i = oe;
    oe = 1;
    var o = ae;
    ae |= 4, yi.current = null, Xp(e, n), Hc(n, e), Sp(sa), Nl = !!la, sa = la = null, e.current = n, Jp(n), Mf(), ae = o, oe = i, rt.transition = a;
  } else e.current = n;
  if (sl && (sl = !1, Wt = e, Vl = l), a = e.pendingLanes, a === 0 && (Gt = null), Lf(n.stateNode), Be(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ul) throw Ul = !1, e = Ca, Ca = null, e;
  return Vl & 1 && e.tag !== 0 && An(), a = e.pendingLanes, a & 1 ? e === Ea ? vr++ : (vr = 0, Ea = e) : vr = 0, tn(), null;
}
function An() {
  if (Wt !== null) {
    var e = Lu(Vl), t = rt.transition, n = oe;
    try {
      if (rt.transition = null, oe = 16 > e ? 16 : e, Wt === null) var r = !1;
      else {
        if (e = Wt, Wt = null, Vl = 0, ae & 6) throw Error(R(331));
        var l = ae;
        for (ae |= 4, W = e.current; W !== null; ) {
          var a = W, i = a.child;
          if (W.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (W = c; W !== null; ) {
                  var p = W;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, p, a);
                  }
                  var w = p.child;
                  if (w !== null) w.return = p, W = w;
                  else for (; W !== null; ) {
                    p = W;
                    var v = p.sibling, x = p.return;
                    if (Uc(p), p === c) {
                      W = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = x, W = v;
                      break;
                    }
                    W = x;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var j = _.sibling;
                    _.sibling = null, _ = j;
                  } while (_ !== null);
                }
              }
              W = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) i.return = a, W = i;
          else e: for (; W !== null; ) {
            if (a = W, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, a, a.return);
            }
            var d = a.sibling;
            if (d !== null) {
              d.return = a.return, W = d;
              break e;
            }
            W = a.return;
          }
        }
        var f = e.current;
        for (W = f; W !== null; ) {
          i = W;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) m.return = i, W = m;
          else e: for (i = f; W !== null; ) {
            if (o = W, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ts(9, o);
              }
            } catch (C) {
              ve(o, o.return, C);
            }
            if (o === i) {
              W = null;
              break e;
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, W = g;
              break e;
            }
            W = o.return;
          }
        }
        if (ae = l, tn(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Gl, e);
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
function $o(e, t, n) {
  t = Vn(n, t), t = Lc(e, t, 1), e = Bt(e, t, 1), t = Oe(), e !== null && (Or(e, 1, t), Be(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) $o(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      $o(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
        e = Vn(n, e), e = Tc(t, e, 1), t = Bt(t, e, 1), e = Oe(), t !== null && (Or(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function lm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Me === e && (Le & n) === n && (Ce === 4 || Ce === 3 && (Le & 130023424) === Le && 500 > xe() - wi ? un(e, 0) : vi |= n), Be(e, t);
}
function Jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Yr, Yr <<= 1, !(Yr & 130023424) && (Yr = 4194304)) : t = 1);
  var n = Oe();
  e = It(e, t), e !== null && (Or(e, t, n), Be(e, n));
}
function sm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function am(e, t) {
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
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, Gp(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, fe && t.flags & 1048576 && rc(t, Dl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      gl(e, t), e = t.pendingProps;
      var l = Fn(t, ze.current);
      zn(t, n), l = fi(null, t, r, e, l, n);
      var a = pi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (a = !0, Tl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ii(t), l.updater = es, t.stateNode = l, l._reactInternals = t, ma(t, r, e, n), t = ya(null, t, r, !0, a, n)) : (t.tag = 0, fe && a && ei(t), Ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = om(r), e = ut(r, e), l) {
          case 0:
            t = ga(null, t, r, e, n);
            break e;
          case 1:
            t = bo(null, t, r, e, n);
            break e;
          case 11:
            t = Mo(null, t, r, e, n);
            break e;
          case 14:
            t = Io(null, t, r, ut(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), bo(e, t, r, l, n);
    case 3:
      e: {
        if (zc(t), e === null) throw Error(R(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, uc(e, t), Al(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Vn(Error(R(423)), t), t = Lo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Vn(Error(R(424)), t), t = Lo(e, t, r, n, l);
          break e;
        } else for (Ye = Ht(t.stateNode.containerInfo.firstChild), qe = t, fe = !0, dt = null, n = ic(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === l) {
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
      return oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Mo(e, t, r, l, n);
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, ue(Rl, r._currentValue), r._currentValue = i, a !== null) if (ht(a.value, i)) {
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
                  u = Et(-1, n & -n), u.tag = 2;
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
      return l = t.type, r = t.pendingProps.children, zn(t, n), l = lt(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ut(r, t.pendingProps), l = ut(r.type, l), Io(e, t, r, l, n);
    case 15:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), gl(e, t), t.tag = 1, He(r) ? (e = !0, Tl(t)) : e = !1, zn(t, n), bc(t, r, l), ma(t, r, l, n), ya(null, t, r, !0, e, n);
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
function im(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function nt(e, t, n, r) {
  return new im(e, t, n, r);
}
function Si(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function om(e) {
  if (typeof e == "function") return Si(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ua) return 11;
    if (e === Va) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wl(e, t, n, r, l, a) {
  var i = 2;
  if (r = e, typeof e == "function") Si(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case _n:
      return cn(n.children, l, a, t);
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
      return rs(n, l, a, t);
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
        case zt:
          i = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = nt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function cn(e, t, n, r) {
  return e = nt(7, e, r, t), e.lanes = n, e;
}
function rs(e, t, n, r) {
  return e = nt(22, e, r, t), e.elementType = cu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ps(e, t, n) {
  return e = nt(6, e, null, t), e.lanes = n, e;
}
function Ds(e, t, n) {
  return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function um(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ji(e, t, n, r, l, a, i, o, u) {
  return e = new um(e, t, n, o, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = nt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ii(a), e;
}
function cm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: xn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function td(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(R(170));
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
  return e = ji(n, r, !0, e, l, a, i, o, u), e.context = td(null), n = e.current, r = Oe(), l = Kt(n), a = Et(r, l), a.callback = t ?? null, Bt(n, a, l), e.current.lanes = l, Or(e, l, r), Be(e, r), e;
}
function ls(e, t, n, r) {
  var l = t.current, a = Oe(), i = Kt(l);
  return n = td(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(a, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, i), e !== null && (mt(e, l, i, a), pl(e, l, i)), i;
}
function Hl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ci(e, t) {
  Wo(e, t), (e = e.alternate) && Wo(e, t);
}
function dm() {
  return null;
}
var rd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ei(e) {
  this._internalRoot = e;
}
ss.prototype.render = Ei.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ls(e, t, null, null);
};
ss.prototype.unmount = Ei.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      ls(null, e, null, null);
    }), t[Mt] = null;
  }
};
function ss(e) {
  this._internalRoot = e;
}
ss.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Du();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++) ;
    Ot.splice(n, 0, e), n === 0 && zu(e);
  }
};
function Ni(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function as(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Uo() {
}
function fm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = Hl(i);
        a.call(c);
      };
    }
    var i = nd(t, r, e, 0, null, !1, !1, "", Uo);
    return e._reactRootContainer = i, e[Mt] = i.current, Nr(e.nodeType === 8 ? e.parentNode : e), hn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Hl(u);
      o.call(c);
    };
  }
  var u = ji(e, 0, !1, null, null, !1, !1, "", Uo);
  return e._reactRootContainer = u, e[Mt] = u.current, Nr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    ls(t, u, n, r);
  }), u;
}
function is(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Hl(i);
        o.call(u);
      };
    }
    ls(t, i, e, l);
  } else i = fm(n, t, e, l, r);
  return Hl(i);
}
Tu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (Ba(t, n | 1), Be(t, xe()), !(ae & 6) && (Qn = xe() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var l = Oe();
          mt(r, e, 1, l);
        }
      }), Ci(e, 1);
  }
};
Ga = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Oe();
      mt(t, e, 134217728, n);
    }
    Ci(e, 134217728);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e), n = It(e, t);
    if (n !== null) {
      var r = Oe();
      mt(n, e, t, r);
    }
    Ci(e, t);
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
qs = function(e, t, n) {
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
      t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
  }
};
_u = xi;
ku = hn;
var pm = { usingClientEntryPoint: !1, Events: [$r, Cn, Xl, wu, xu, xi] }, sr = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mm = { bundleType: sr.bundleType, version: sr.version, rendererPackageName: sr.rendererPackageName, rendererConfig: sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sr.findFiberByHostInstance || dm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber) try {
    Gl = al.inject(mm), wt = al;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(R(200));
  return cm(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!Ni(e)) throw Error(R(299));
  var n = !1, r = "", l = rd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, l), e[Mt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new Ei(t);
};
Je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Cu(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return hn(e);
};
Je.hydrate = function(e, t, n) {
  if (!as(t)) throw Error(R(200));
  return is(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!Ni(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", i = rd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = nd(t, null, e, 1, n ?? null, l, !1, a, i), e[Mt] = t.current, Nr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ss(t);
};
Je.render = function(e, t, n) {
  if (!as(t)) throw Error(R(200));
  return is(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!as(e)) throw Error(R(40));
  return e._reactRootContainer ? (hn(function() {
    is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = xi;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!as(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return is(e, t, n, !1, r);
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
var be = lu.exports, sd, Vo = be;
sd = Vo.createRoot, Vo.hydrateRoot;
var ad = { exports: {} }, os = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm = h, gm = Symbol.for("react.element"), ym = Symbol.for("react.fragment"), vm = Object.prototype.hasOwnProperty, wm = hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, l = {}, a = null, i = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) vm.call(t, r) && !xm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: gm, type: e, key: a, ref: i, props: l, _owner: wm.current };
}
os.Fragment = ym;
os.jsx = id;
os.jsxs = id;
ad.exports = os;
var s = ad.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _m = {
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
const km = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
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
        ..._m,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${km(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([w, v]) => h.createElement(w, v)),
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
const Sm = ne("AlertTriangle", [
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
const jm = ne("ArrowUpDown", [
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
const Cm = ne("Box", [
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
const Em = ne("Calendar", [
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
const Nm = ne("CheckCircle", [
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
const Mm = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = ne("Download", [
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
const Lm = ne("Folder", [
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
const Tm = ne("Info", [
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
const Pm = ne("Lasso", [
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
const Dm = ne("LayoutList", [
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
const Rm = ne("Link2Off", [
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
const zm = ne("Link", [
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
const Am = ne("Maximize", [
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
const Om = ne("Minimize", [
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
const Fm = ne("MoreVertical", [
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
const Ii = ne("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = ne("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = ne("RefreshCw", [
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
const Hn = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = ne("Settings", [
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
const gd = ne("Square", [
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
const Yn = ne("Tag", [
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
const Jt = ne("Trash2", [
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
const Wm = ne("Type", [
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
const Um = ne("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = ne("Upload", [
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
window.api = ee;
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
const Qm = async () => {
  const e = await ee.fetchApi("/meld/home-dir");
  return (await se(e)).home;
}, Tt = ({
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
let Bl = !1;
const Hm = (e) => {
  Bl = e, Bl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Bm = (...e) => {
  Bl && console.log("[Meld]", ...e);
}, Gm = (...e) => {
  Bl && console.warn("[Meld]", ...e);
}, Km = (...e) => {
  console.error("[Meld]", ...e);
}, G = {
  log: Bm,
  warn: Gm,
  error: Km,
  init: Hm
}, xl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await ee.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return se(a);
}, yd = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/details`);
  return se(t);
}, ba = async (e, t = !1) => {
  const n = await ee.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await se(n);
}, Li = async (e) => {
  const t = await ee.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return se(t);
}, vd = async (e) => {
  const t = await ee.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return se(t);
}, Ho = async (e, t) => {
  const n = await ee.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await se(n);
}, Ym = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ee.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await se(r);
  } catch {
    return [];
  }
}, La = async (e) => {
  const t = await ee.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await se(t);
  } catch {
    return [];
  }
}, qm = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await se(n);
}, Ta = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await se(r);
}, Xm = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/workflow`);
  return se(t);
}, Jm = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/snapshot_data`);
  return se(t);
}, Zm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ee.fetchApi(n);
  return se(r);
}, eh = async () => {
  const e = await ee.fetchApi("/meld/search-suggestions");
  return se(e);
}, th = async () => {
  const e = await ee.fetchApi("/meld/search-keywords");
  return se(e);
}, nh = async () => {
  const e = await ee.fetchApi("/meld/search-config");
  return se(e);
}, rh = async () => {
  const e = await ee.fetchApi("/meld/favorites");
  return se(e);
}, lh = async (e, t) => {
  const n = await ee.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await se(n);
}, Bo = async (e) => {
  const t = await ee.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await se(t);
}, sh = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await se(r);
}, ah = {
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
  "gallery.quick_shortcut.1": "add_unified_loader",
  "gallery.quick_shortcut.2": "",
  "gallery.quick_shortcut.3": "",
  "search.show_all_keywords": !0
}, wd = async () => {
  let e;
  try {
    const t = await ee.fetchApi("/meld/settings");
    e = await se(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), ah;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ih = async (e, t) => {
  const n = await ee.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await se(n);
}, oh = {
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
function uh(e, t) {
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
const xd = h.createContext(void 0), ch = ({
  children: e
}) => {
  const [t, n] = h.useReducer(uh, oh), r = h.useRef(t.images.length), l = h.useRef(0);
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const a = h.useCallback(
    async (x, y, _) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = x;
      for (; f < Math.min(y, j) && _ === l.current; )
        try {
          const m = Math.min(d, j - f);
          G.log("Background fetch: starting chunk", {
            offset: f,
            limit: m
          });
          const g = await xl(
            f,
            m,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: g }), f += g.images.length, g.images.length === 0 || f >= g.total))
            break;
          await new Promise((C) => setTimeout(C, 300));
        } catch (m) {
          G.error("Background fetch failed", m);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), y = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      G.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await xl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - x;
      G.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && a(j, d.total, y);
    } catch (_) {
      G.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
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
    const x = performance.now();
    try {
      const y = r.current, _ = t.searchQuery.trim() !== "", j = t.pagination.limit;
      G.log("loadMoreImages: starting fetch", {
        nextOffset: y,
        fetchLimit: j,
        isSearch: _
      });
      const d = await xl(
        y,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - x;
      G.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (y) {
      G.error("loadMoreImages: fetch failed", y), n({
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
      const x = await rh();
      n({ type: "SET_FAVORITES", payload: x });
    } catch (x) {
      G.error("Failed to load favorites", x);
    }
  }, []), c = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds), _ = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: x,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), p = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await Li(x)).restored_ids || x;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (y) {
      n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = h.useCallback(
    async (x, y) => {
      try {
        await ih(x, y), n({ type: "SET_SETTINGS", payload: { [x]: y } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), v = h.useCallback(
    async (x) => {
      const y = t.images.find((_) => _.id === x);
      if (y && !y.is_minimal)
        return y;
      try {
        G.log("fetchFullImageDetails: fetching full data", { id: x });
        const _ = await yd(x);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw G.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const y = await wd();
        n({ type: "SET_SETTINGS", payload: y });
      } catch (y) {
        G.error("Failed to load settings", y);
      }
    })();
  }, []), h.useEffect(() => {
    u();
  }, [u]), h.useEffect(() => {
    const x = () => {
      i();
    }, y = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, _ = (j) => {
      const d = j.detail;
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
    return window.addEventListener("meld-refresh", x), window.addEventListener("meld-scan-progress", y), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", x), window.removeEventListener("meld-scan-progress", y), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    xd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: p,
        updateSetting: w,
        fetchFullImageDetails: v
      },
      children: e
    }
  );
}, Ee = () => {
  const e = h.useContext(xd);
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
}, Ti = async () => {
  const e = await ee.fetchApi("/meld/tags");
  return se(e);
}, dh = async (e) => {
  const t = await ee.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return se(t);
}, fh = async (e) => {
  const t = await ee.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await se(t);
}, ph = async (e, t) => {
  const n = await ee.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await se(n);
}, mh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ee.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, hh = async (e, t, n = !1, r) => {
  const l = await ee.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, gh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await ee.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, yh = async (e, t, n) => {
  const r = await ee.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await se(r)).count;
  } catch {
    return 0;
  }
}, vh = async (e) => {
  const t = await ee.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await se(t);
}, wh = async () => {
  const e = await ee.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await se(e);
}, _d = () => {
  const { dispatch: e } = Ee(), [t, n] = h.useState(() => {
    const E = localStorage.getItem("meld-import-config"), Z = {
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
        const L = JSON.parse(E);
        return { ...Z, ...L, tags: [] };
      } catch {
        return Z;
      }
    return Z;
  });
  h.useEffect(() => {
    const { tags: E, ...Z } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Z));
  }, [t]);
  const [r, l] = h.useState([]), [a, i] = h.useState([]), [o, u] = h.useState(0), [c, p] = h.useState(!1), [w, v] = h.useState([]), [x, y] = h.useState(""), [_, j] = h.useState(!1), [d, f] = h.useState(null), m = h.useRef(!1), g = (E) => {
    E.target === E.currentTarget && (m.current = !0);
  }, C = (E) => {
    E.target === E.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const Z = await Qm();
        n((L) => L.custom_path ? L : { ...L, custom_path: Z });
      } catch (Z) {
        G.error("Failed to fetch home directory:", Z);
      }
    })();
  }, []), h.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const L = t.type === "custom" ? t.custom_path : t.subfolder;
      if (G.log(
        `loadFolders started. Path: "${L}", Type: "${t.type}"`
      ), t.type === "custom" && !L) {
        G.log("Custom path is empty, skipping load."), l([]), i([]), u(0);
        return;
      }
      p(!0);
      const Y = L, I = t.type;
      try {
        G.log("Step 1: Fast load starting...");
        const F = await hh(
          t.type,
          L,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          G.log("Step 1: Aborted.");
          return;
        }
        G.log(
          `Step 1 complete. Found ${F.folders.length} folders, ${F.images.length} images.`
        ), l(F.folders), i(F.images), u(null);
        const Q = F.folders.map((M) => M.name);
        Q.length > 0 && (G.log(
          `Step 2: Metadata fetch starting for ${Q.length} folders...`
        ), gh(
          I,
          Y,
          Q,
          E.signal
        ).then((M) => {
          if (E.signal.aborted) {
            G.log("Step 2: Aborted.");
            return;
          }
          G.log("Step 2: Metadata fetch complete."), l(
            (te) => te.map((ye) => {
              const P = M[ye.name];
              return P ? { ...ye, count: P.count, preview: P.preview } : ye;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && G.error("Step 2: Metadata fetch failed:", M);
        })), G.log("Step 3: Path image count starting..."), yh(I, Y, E.signal).then((M) => {
          if (E.signal.aborted) {
            G.log("Step 3: Aborted.");
            return;
          }
          G.log(`Step 3: Path image count complete: ${M}`), u(M);
        }).catch((M) => {
          M.name !== "AbortError" && G.error("Step 3: Path image count failed:", M);
        });
      } catch (F) {
        if (F.name === "AbortError") {
          G.log("Request aborted.");
          return;
        }
        G.error("Failed to load folders:", F), l([]), i([]), u(0);
      } finally {
        E.signal.aborted || p(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = h.useCallback(async () => {
    j(!0);
    try {
      const E = await Ti();
      v(E);
    } catch (E) {
      G.error("Failed to fetch tags:", E);
    } finally {
      j(!1);
    }
  }, []);
  h.useEffect(() => {
    S();
  }, [S]), Tt({
    onEscape: h.useCallback(() => {
      d ? f(null) : e({ type: "CLOSE_MODAL" });
    }, [d, e])
  });
  const k = h.useMemo(() => w.filter(
    (E) => E.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(E.name)
  ), [w, x, t.tags]), N = (E) => {
    const Z = E.trim();
    Z && !t.tags.includes(Z) && (n({ ...t, tags: [...t.tags, Z] }), y(""));
  }, U = (E) => {
    n({ ...t, tags: t.tags.filter((Z) => Z !== E) });
  }, b = (E) => {
    E.key === "Enter" && x.trim() && (E.preventDefault(), N(x.trim()));
  }, A = async () => {
    try {
      await vh(t), e({
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
      G.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, O = (E) => {
    if (t.type === "custom") {
      const Z = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.endsWith(Z) ? `${t.custom_path}${E}` : `${t.custom_path}${Z}${E}`;
      n({ ...t, custom_path: L });
    } else {
      const Z = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: Z });
    }
  }, $ = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", Z = t.custom_path.split(E);
      if (Z.length > 1) {
        Z.pop();
        let L = Z.join(E);
        L === "" && E === "/" && (L = "/"), n({ ...t, custom_path: L });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: C,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (E) => E.stopPropagation(),
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
                          onChange: (E) => n({
                            ...t,
                            type: E.target.value,
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
                          onChange: (E) => n({ ...t, recursive: E.target.checked })
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
                          onChange: (E) => n({
                            ...t,
                            link_strategy: E.target.value,
                            auto_link_parent: E.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((E) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        E,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => U(E),
                            children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Hn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (E) => y(E.target.value),
                            onKeyDown: b
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(x),
                            children: /* @__PURE__ */ s.jsx(bi, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : k.map((E) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(E.name),
                          children: E.name
                        },
                        E.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: A,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Ii, { size: 16 }),
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
                          onClick: $,
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
                          onChange: (E) => n({ ...t, custom_path: E.target.value }),
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
                      r.map((E) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => O(E.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ge(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Lm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(fd, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((E) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(E),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Ge(E),
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
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (E) => {
                E.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (E) => E.stopPropagation(),
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
}, xh = () => {
  const { dispatch: e } = Ee();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var v, x;
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
        const y = i[0], _ = y.widgets.find(
          (j) => j.name === "image"
        );
        _ && (_.value = a, typeof _.callback == "function" && _.callback(a), console.log(
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
      const w = u.widgets.find(
        (y) => y.name === "channel"
      );
      return w && (w.value = "red", typeof w.callback == "function" && w.callback("red")), (x = (v = l.graph).afterChange) == null || x.call(v), l.graph.setDirtyCanvas(!0, !0), !0;
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
function _h(e, t, n = 255) {
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
function kh(e) {
  return e.data.every((t) => t === 0);
}
const kd = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = Ee(), a = r.images.find((D) => D.id === e), { injectMaskToGraph: i } = xh();
  Tt({ onEscape: n });
  const o = h.useRef(null), u = h.useRef(null), c = h.useRef(null), p = h.useRef(null), [w, v] = h.useState(!1), [x, y] = h.useState("rect"), [_, j] = h.useState({ x: 0, y: 0 }), [d, f] = h.useState({ x: 0, y: 0 }), [m, g] = h.useState([]), [C, S] = h.useState(null), [k, N] = h.useState(!1), U = h.useCallback(() => {
    const D = c.current, z = u.current;
    if (!D || !z) return null;
    const re = z.getBoundingClientRect(), K = D.getBoundingClientRect(), ie = D.naturalWidth, V = D.naturalHeight;
    if (!ie || !V) return null;
    const q = ie / V, T = K.width / K.height;
    let X, H, J = 0, we = 0;
    return q > T ? (X = K.width, H = K.width / q, we = (K.height - H) / 2) : (H = K.height, X = K.height * q, J = (K.width - X) / 2), {
      left: K.left - re.left + J,
      top: K.top - re.top + we,
      width: X,
      height: H
    };
  }, []), b = h.useCallback(() => {
    const D = o.current;
    if (!D) return;
    const z = D.getContext("2d");
    if (!z) return;
    z.clearRect(0, 0, D.width, D.height);
    const re = getComputedStyle(document.documentElement), K = re.getPropertyValue("--comfy-input-bg-active") || re.getPropertyValue("--comfy-input-bg") || re.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ie = U();
    if (p.current && ie && (z.save(), z.globalAlpha = 0.5, z.drawImage(
      p.current,
      ie.left,
      ie.top,
      ie.width,
      ie.height
    ), z.restore()), w) {
      const V = Math.min(_.x, d.x), q = Math.min(_.y, d.y), T = Math.abs(_.x - d.x), X = Math.abs(_.y - d.y);
      if (z.save(), z.globalAlpha = 0.3, z.fillStyle = K, z.strokeStyle = "white", z.lineWidth = 2, z.setLineDash([5, 5]), z.beginPath(), x === "rect")
        z.rect(V, q, T, X);
      else if (x === "ellipse") {
        const H = V + T / 2, J = q + X / 2;
        z.ellipse(H, J, T / 2, X / 2, 0, 0, 2 * Math.PI);
      } else if (x === "lasso" && m.length > 1) {
        z.moveTo(m[0].x, m[0].y);
        for (let H = 1; H < m.length; H++)
          z.lineTo(m[H].x, m[H].y);
        z.closePath();
      }
      z.fill(), z.globalAlpha = 1, z.stroke(), z.restore();
    }
  }, [w, _, d, x, m, U]), [A, O] = h.useState([]), $ = h.useMemo(() => A.length > 0 ? A[A.length - 1] : c.current ? Rs(
    c.current.naturalWidth,
    c.current.naturalHeight
  ) : null, [A]);
  h.useEffect(() => {
    var D;
    (D = c.current) != null && D.naturalWidth && A.length === 0 && O([
      Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      )
    ]);
  }, [A.length]);
  const E = h.useRef(!1), Z = h.useRef(0), L = (D) => {
    D.target === D.currentTarget && (E.current = !0);
  }, Y = (D) => {
    D.target === D.currentTarget && E.current && !w && n(), E.current = !1;
  };
  h.useEffect(() => {
    if (!$) return;
    p.current || (p.current = document.createElement("canvas"));
    const D = p.current;
    D.width = $.width, D.height = $.height;
    const z = D.getContext("2d");
    if (!z) return;
    const re = Pa($, [255, 255, 255], 255);
    z.putImageData(re, 0, 0), b();
  }, [$, b]), h.useEffect(() => {
    const D = () => {
      u.current && o.current && (o.current.width = u.current.clientWidth, o.current.height = u.current.clientHeight, b());
    }, z = new ResizeObserver(D);
    return u.current && z.observe(u.current), D(), () => z.disconnect();
  }, [b]);
  const I = (D) => {
    var V;
    if (D.button !== 0 || w || k || Date.now() - Z.current < 100)
      return;
    D.preventDefault();
    const z = U(), re = (V = u.current) == null ? void 0 : V.getBoundingClientRect();
    if (!z || !re) return;
    v(!0);
    const K = Math.max(
      z.left,
      Math.min(D.clientX - re.left, z.left + z.width)
    ), ie = Math.max(
      z.top,
      Math.min(D.clientY - re.top, z.top + z.height)
    );
    j({ x: K, y: ie }), f({ x: K, y: ie }), g(x === "lasso" ? [{ x: K, y: ie }] : []), S(null);
  };
  h.useEffect(() => {
    if (!w) return;
    const D = (re) => {
      var T;
      const K = U(), ie = (T = u.current) == null ? void 0 : T.getBoundingClientRect();
      if (!K || !ie) return;
      const V = Math.max(
        K.left,
        Math.min(re.clientX - ie.left, K.left + K.width)
      ), q = Math.max(
        K.top,
        Math.min(re.clientY - ie.top, K.top + K.height)
      );
      f({ x: V, y: q }), x === "lasso" && g((X) => [...X, { x: V, y: q }]);
    }, z = (re) => {
      var V;
      const K = U(), ie = (V = u.current) == null ? void 0 : V.getBoundingClientRect();
      if (K && ie && $ && c.current) {
        const q = Math.max(
          K.left,
          Math.min(re.clientX - ie.left, K.left + K.width)
        ), T = Math.max(
          K.top,
          Math.min(re.clientY - ie.top, K.top + K.height)
        ), X = Math.min(_.x, q), H = Math.min(_.y, T), J = Math.abs(_.x - q), we = Math.abs(_.y - T), Pt = x === "lasso";
        if (J > 5 || we > 5 || Pt && m.length > 2) {
          const _e = c.current.naturalWidth, pe = c.current.naturalHeight, We = _e / K.width, _t = pe / K.height, Xn = _h($, (at) => {
            if (x === "rect") {
              const vn = (X - K.left) * We, Dt = (H - K.top) * _t, Ur = J * We, Vr = we * _t;
              at.rect(vn, Dt, Ur, Vr);
            } else if (x === "ellipse") {
              const vn = (X - K.left) * We, Dt = (H - K.top) * _t, Ur = J * We, Vr = we * _t, Bd = vn + Ur / 2, Gd = Dt + Vr / 2;
              at.ellipse(
                Bd,
                Gd,
                Ur / 2,
                Vr / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (x === "lasso" && m.length > 2) {
              const vn = m[0];
              at.moveTo(
                (vn.x - K.left) * We,
                (vn.y - K.top) * _t
              );
              for (let Dt = 1; Dt < m.length; Dt++)
                at.lineTo(
                  (m[Dt].x - K.left) * We,
                  (m[Dt].y - K.top) * _t
                );
              at.closePath();
            }
          });
          O((at) => [...at, Xn]);
        }
      }
      Z.current = Date.now(), v(!1), g([]);
    };
    return window.addEventListener("mousemove", D), window.addEventListener("mouseup", z), () => {
      window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", z);
    };
  }, [
    w,
    _.x,
    _.y,
    U,
    $,
    x,
    m
  ]);
  const F = h.useCallback(() => {
    A.length > 1 && O((D) => D.slice(0, -1));
  }, [A.length]);
  h.useEffect(() => {
    const D = (z) => {
      (z.metaKey || z.ctrlKey) && z.key === "z" ? (z.preventDefault(), F()) : z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", D, { capture: !0 }), () => window.removeEventListener("keydown", D, { capture: !0 });
  }, [F, n]);
  const Q = () => {
    if (c.current) {
      const D = Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      );
      O((z) => [...z, D]);
    }
  }, M = async () => {
    if (!$ || !c.current) return null;
    N(!0);
    try {
      const { width: D, height: z } = $, re = document.createElement("canvas");
      re.width = D, re.height = z;
      const K = re.getContext("2d");
      if (!K) return null;
      const ie = Pa($, [255, 255, 255], 255);
      K.putImageData(ie, 0, 0);
      const V = await new Promise(
        (we) => re.toBlob(we, "image/png")
      );
      if (!V) return null;
      const T = `meld_mask_${Date.now()}.png`, X = new File([V], T, { type: "image/png" }), H = new FormData();
      H.append("image", X), H.append("type", "temp"), H.append("overwrite", "true");
      const J = await ee.fetchApi("/upload/image", {
        method: "POST",
        body: H
      });
      return J.ok ? (await J.json()).name : null;
    } catch (D) {
      return console.error("[Meld] Error uploading mask:", D), null;
    } finally {
      N(!1);
    }
  }, te = async () => {
    if (!a) return;
    const D = await M();
    D && i(a, D) && n();
  }, ye = async () => {
    if (!a) return;
    const D = await M();
    D && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: D
      }
    });
  }, P = h.useMemo(
    () => $ && !kh($),
    [$]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: L,
      onMouseUp: Y,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (D) => D.stopPropagation(),
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
                    className: `meld-mask-tool-btn ${x === "rect" ? "active" : ""}`,
                    onClick: () => y("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(gd, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${x === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Mm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${x === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Pm, { size: 18 }),
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
                        onDragStart: (D) => D.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: o,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (D) => D.preventDefault()
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
                      onClick: te,
                      disabled: !P || k,
                      type: "button",
                      children: [
                        k ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Mi, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ye,
                      disabled: !P || k,
                      type: "button",
                      children: [
                        k ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Ii, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: F,
                      disabled: A.length <= 1 || k,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Um, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: Q,
                      disabled: !P || k,
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
}, Sh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ee(), [r, l] = h.useState("Gallery"), [a, i] = h.useState({
    ...e.settings
  }), [o, u] = h.useState(
    {}
  ), [c, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [w, v] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, y] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, j] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [m, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [C, S] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [k, N] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [U, b] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    A,
    O
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    $,
    E
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [Z, L] = h.useState(
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
      const P = Object.keys(a).filter(
        (D) => a[D] !== e.settings[D] && !o[D]
      );
      if (P.length > 0)
        for (const D of P)
          await n(D, a[D]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (P, D) => {
      i((z) => ({
        ...z,
        [P]: !D
      }));
    },
    handleNumberChange: (P, D, z, re) => {
      P === "gallery.initial_load_count" ? p(D) : P === "gallery.max_load_count" ? v(D) : P === "gallery.lineage_max_depth" ? y(D) : P === "viewer.thumbnail_window_size" ? j(D) : P === "gallery.trash_retention_days" ? f(D) : P === "gallery.auto_link_phash_threshold" ? g(D) : P === "gallery.suggest_phash_threshold" ? S(D) : P === "viewer.details.max_positive_prompt_lines" ? N(D) : P === "viewer.details.max_negative_prompt_lines" ? b(D) : P === "fullscreen.details.max_positive_prompt_lines" ? O(D) : P === "fullscreen.details.max_negative_prompt_lines" ? E(D) : P === "sidebar.thumbnail_size" && L(D);
      const K = Number.parseInt(D, 10);
      if (!Number.isNaN(K)) {
        let ie = K;
        z !== void 0 && ie < z && (ie = z), re !== void 0 && ie > re && (ie = re), i((V) => ({
          ...V,
          [P]: ie
        }));
      }
    },
    handleNumberBlur: (P) => {
      P.key === "gallery.initial_load_count" ? p(
        a["gallery.initial_load_count"].toString()
      ) : P.key === "gallery.max_load_count" ? v(a["gallery.max_load_count"].toString()) : P.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : P.key === "viewer.thumbnail_window_size" ? j(
        a["viewer.thumbnail_window_size"].toString()
      ) : P.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : P.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : P.key === "gallery.suggest_phash_threshold" ? S(
        a["gallery.suggest_phash_threshold"].toString()
      ) : P.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : P.key === "viewer.details.max_negative_prompt_lines" ? b(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : P.key === "fullscreen.details.max_positive_prompt_lines" ? O(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : P.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : P.key === "sidebar.thumbnail_size" && L(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      i((P) => ({
        ...P,
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
    validateShortcut: (P) => P.trim() ? P.trim().split(/\s+/).every((z) => !!(z === "next" || z === "prev" || z === "delete" || z.startsWith("tag:") && z.length > 4 || z.startsWith("-tag:") && z.length > 5 || z.startsWith("tag-toggle:") && z.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: w,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: C,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: U,
    fullscreenMaxPositivePromptLinesInput: A,
    fullscreenMaxNegativePromptLinesInput: $,
    thumbnailSizeInput: Z
  };
}, B = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), jh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
function nn({
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
function Sd() {
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
function jd(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Cd(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Ed(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Nd(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Sd, {})
  ] });
}
function Md(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Sd, {})
  ] });
}
function Id(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function bd(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Ld(e) {
  return /* @__PURE__ */ s.jsxs(nn, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Td = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: jd
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Cd
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Ed },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Md
  },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Nd
  },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Id
  },
  { id: "edit_tags", label: "Edit Tags", icon: bd },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Ld
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Jt }
], Ch = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
    /* @__PURE__ */ s.jsx(B, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      B,
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
      B,
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
      B,
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
      B,
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
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((u) => /* @__PURE__ */ s.jsx(
      B,
      {
        label: `Quick Shortcut Slot ${u}`,
        description: `Choose an action for shortcut slot ${u}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${u}`],
            onChange: (c) => t((p) => ({
              ...p,
              [`gallery.quick_shortcut.${u}`]: c.target.value
            })),
            children: Td.map((c) => /* @__PURE__ */ s.jsx("option", { value: c.id, children: c.label }, c.id))
          }
        )
      },
      u
    ))
  ] })
] }), Eh = ({
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
        B,
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
                t((w) => ({
                  ...w,
                  [u]: p.target.value
                }));
              },
              onBlur: () => {
                const p = l(
                  e[u] || ""
                );
                r((w) => ({
                  ...w,
                  [u]: !p
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ s.jsx(
        B,
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
      B,
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
}, Nh = ({
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
      B,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (p) => l((w) => ({
              ...w,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
] }), Mh = ({
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
      B,
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
] }), Pd = () => {
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
    handleViewTrash: w,
    validateShortcut: v,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: y,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: m,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: C,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: k,
    thumbnailSizeInput: N
  } = Sh();
  Tt({ onEscape: i });
  const U = h.useRef(!1), b = (E) => {
    E.target === E.currentTarget && (U.current = !0);
  }, A = (E) => {
    E.target === E.currentTarget && U.current && i(), U.current = !1;
  }, O = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], $ = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Nh,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: w,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: m
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Ch,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: N,
            initialLoadCountInput: x,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Mh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: C
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          jh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: S,
            maxNegativePromptLinesInput: k
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Eh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: v,
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
        onMouseDown: b,
        onMouseUp: A,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (E) => E.stopPropagation(),
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
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: O.map((E) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: $() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ft = "none", Dd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Ee(), [a, i] = h.useState([]), [o, u] = h.useState(t), [c, p] = h.useState(""), [w, v] = h.useState(!0), [x, y] = h.useState(!1), _ = h.useRef(null), j = e.length > 1, d = h.useRef(!1), f = (b) => {
    b.target === b.currentTarget && (d.current = !0);
  }, m = (b) => {
    b.target === b.currentTarget && d.current && n(), d.current = !1;
  }, g = h.useCallback(async () => {
    v(!0);
    try {
      const b = await Ti();
      i(b);
    } catch (b) {
      console.error("Failed to fetch tags:", b);
    } finally {
      v(!1);
    }
  }, []);
  h.useEffect(() => {
    g();
  }, [g]), h.useEffect(() => {
    _.current && _.current.focus();
  }, []), Tt({ onEscape: n });
  const C = h.useMemo(() => a.filter(
    (b) => b.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(b.name)
  ), [a, c, o]), S = (b) => {
    const A = b.trim();
    if (A.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    A && !o.includes(A) && (u([...o, A]), p(""));
  }, k = (b) => {
    u(o.filter((A) => A !== b));
  }, N = async () => {
    y(!0);
    try {
      if (j) {
        const b = o.filter((O) => !t.includes(O)), A = t.filter(
          (O) => !o.includes(O)
        );
        await Ta(e, b, A);
      } else
        await qm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (b) {
      console.error("Failed to update tags:", b), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, U = (b) => {
    b.key === "Enter" && c.trim() && (b.preventDefault(), b.stopPropagation(), S(c.trim()));
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: m,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (b) => b.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Yn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Se, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            j && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((b) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                b,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => k(b),
                    children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                  }
                )
              ] }, b)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Hn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (b) => p(b.target.value),
                    onKeyDown: U
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => S(c),
                    children: [
                      /* @__PURE__ */ s.jsx(bi, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : C.map((b) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => S(b.name),
                  children: b.name
                },
                b.id
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
                onClick: N,
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
}, Rd = async () => {
  const e = await ee.fetchApi("/meld/workflows");
  return se(e);
}, Ih = async (e) => {
  const t = await ee.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return se(t);
}, zd = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var m;
  const { dispatch: r } = Ee(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(null), [p, w] = h.useState(!1), v = h.useMemo(() => l.map((g) => {
    let C = g.valid, S = g.reason;
    return n && (g.mask_count === 0 ? (C = !1, S = "No 'Load Image (as Mask)' node found.") : g.mask_count > 1 && (C = !1, S = `Multiple 'Load Image (as Mask)' nodes found (${g.mask_count}).`)), { ...g, valid: C, reason: S };
  }).sort((g, C) => g.valid !== C.valid ? g.valid ? -1 : 1 : g.name.localeCompare(C.name)), [l, n]), x = h.useCallback(async () => {
    try {
      o(!0);
      const g = await Rd();
      a(g), c(null);
    } catch (g) {
      c(g instanceof Error ? g.message : String(g));
    } finally {
      o(!1);
    }
  }, []);
  h.useEffect(() => {
    x();
  }, [x]);
  const y = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Tt({ onEscape: y });
  const _ = h.useRef(!1), j = h.useCallback((g) => {
    g.target === g.currentTarget && (_.current = !0);
  }, []), d = h.useCallback(
    (g) => {
      g.target === g.currentTarget && _.current && y(), _.current = !1;
    },
    [y]
  ), f = async (g) => {
    if (!p)
      try {
        w(!0), await t(g), y();
      } catch (C) {
        c(C instanceof Error ? C.message : String(C)), w(!1);
      }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: j,
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
                v.map((g) => /* @__PURE__ */ s.jsxs(
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
                          onClick: (C) => {
                            C.stopPropagation(), f(g.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(Ii, { size: 14 }),
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
}, Ad = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r) => {
    var w, v, x, y, _, j;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await Ih(t);
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
      for (const k of Array.from(g)) {
        const N = k.querySelector(".workflow-label"), U = ((w = N == null ? void 0 : N.textContent) == null ? void 0 : w.trim()) || ((v = k.textContent) == null ? void 0 : v.trim()) || "";
        if (U === f || U === t || U.startsWith(`${f} `) || U.startsWith(`${f}•`)) {
          k.click(), m = !0;
          break;
        }
      }
      m || await d.loadGraphData(l, !0, !0, t), await new Promise((k) => setTimeout(k, 200));
      const C = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", C.length);
      const S = C.find(
        (k) => String(k.id) === a || k.type === "MeldImageLoader" || k.type === "LoadImage" || k.type === "Load Image"
      );
      if (S) {
        const k = (x = S.widgets) == null ? void 0 : x.find((N) => N.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: S.id,
          type: S.type,
          imagePath: u
        }), k && (k.value = u, typeof k.callback == "function" && k.callback(u));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const k = C.find(
          (N) => String(N.id) === i || N.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: k == null ? void 0 : k.id,
          maskFilename: r
        }), k) {
          const N = (y = k.widgets) == null ? void 0 : y.find(
            (b) => b.name === "image"
          );
          N && (N.value = `${r} [temp]`);
          const U = (_ = k.widgets) == null ? void 0 : _.find(
            (b) => b.name === "channel"
          );
          U && (U.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (k) {
        throw console.error("Failed to queue workflow:", k), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[a].inputs.image = u, r && i && (c[i].inputs.image = `${r} [temp]`, c[i].inputs.channel = "red");
    const p = await ee.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: ee.clientId
      })
    });
    if (!p.ok) {
      const d = await p.json();
      throw new Error(((j = d.error) == null ? void 0 : j.message) || "Failed to queue workflow");
    }
    return await p.json();
  },
  []
) }), Od = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = Ee(), i = h.useRef(!0);
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
  }, [a]);
  Tt({ onEscape: p });
  const w = h.useRef(!1), v = h.useCallback((d) => {
    d.target === d.currentTarget && (w.current = !0);
  }, []), x = h.useCallback(
    (d) => {
      d.target === d.currentTarget && w.current && p(), w.current = !1;
    },
    [p]
  ), y = h.useCallback(
    (d) => {
      if (!i.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const m = u.findIndex(
        (C) => C.id === f
      );
      if (m === -1) return;
      let g = !1;
      for (let C = m + 1; C < u.length; C++)
        if (!d.has(u[C].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: u[C].id, mode: l.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let C = m - 1; C >= 0; C--)
          if (!d.has(u[C].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: u[C].id, mode: l.viewerMode }
            }), g = !0;
            break;
          }
      }
      g || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, u, a]
  ), _ = async () => {
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
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, j = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const m of e) {
        const g = await La(m);
        if (!i.current) return;
        for (const C of g)
          d.add(C.id);
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
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Jt, { size: 20, color: "var(--meld-danger-color)" }),
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
                            Sm,
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
                      onClick: j,
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
}, Fd = ({ message: e }) => {
  const { dispatch: t } = Ee(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Tt({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(od, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
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
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, $d = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ee(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(!1), p = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Tt({ onEscape: p });
  const w = h.useRef(!1), v = (S) => {
    S.target === S.currentTarget && (w.current = !0);
  }, x = (S) => {
    S.target === S.currentTarget && w.current && p(), w.current = !1;
  }, y = t.images.find((S) => S.id === e), _ = h.useCallback(async () => {
    o(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], k = await Ym(e, S);
      a(k);
    } catch (S) {
      console.error("Failed to load suggestions:", S);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    _();
  }, [_]);
  const j = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || S === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ho(e, S), await yd(e), await r(), p();
      } catch (k) {
        console.error("Failed to link parent:", k);
      }
  }, d = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ho(e, null), await r(), p();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, f = async (S) => {
    o(!0);
    try {
      const k = await mh(S), { id: N } = await vd({
        filename: k.name,
        subfolder: k.subfolder || "",
        type: k.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await j(N);
    } catch (k) {
      console.error("Failed to upload/register image:", k);
    } finally {
      o(!1);
    }
  }, m = (S) => {
    S.preventDefault(), S.stopPropagation(), c(!1);
    const k = S.dataTransfer.files[0];
    k != null && k.type.startsWith("image/") && f(k);
  };
  if (!y) return null;
  const g = l.filter((S) => S.is_source_match), C = l.filter((S) => !S.is_source_match);
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              y.id
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            y.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(zm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    y.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: Ge({
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
                                              children: y.parent_filename || "Unknown Image"
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
                      onClick: d,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Rm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (S) => {
                  S.preventDefault(), S.stopPropagation(), c(!0);
                },
                onDragOver: (S) => {
                  S.preventDefault(), S.stopPropagation(), S.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (S) => {
                  S.preventDefault(), S.stopPropagation(), c(!1);
                },
                onDrop: m,
                children: [
                  /* @__PURE__ */ s.jsx(Vm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((S) => {
                  const k = S.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${k ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !k && j(S.id),
                      style: {
                        cursor: k ? "default" : "pointer",
                        ...k ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(S), alt: S.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          k && /* @__PURE__ */ s.jsx(
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
                C.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: C.map((S) => {
                  const k = S.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${k ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !k && j(S.id),
                      style: {
                        cursor: k ? "default" : "pointer",
                        ...k ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(S), alt: S.filename }),
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
                                  "Match:",
                                  " ",
                                  Math.round((64 - S.distance) / 64 * 100),
                                  "%"
                                ] }),
                                k && /* @__PURE__ */ s.jsx(
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
}, bh = () => {
  const { state: e, dispatch: t } = Ee(), { executeWorkflow: n } = Ad();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      zd,
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
      /* @__PURE__ */ s.jsx($d, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && be.createPortal(/* @__PURE__ */ s.jsx(_d, {}), document.body),
    e.activeModal.type === "settings" && be.createPortal(/* @__PURE__ */ s.jsx(Pd, {}), document.body),
    e.activeModal.type === "tag_edit" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        Dd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && be.createPortal(
      /* @__PURE__ */ s.jsx(Fd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        Od,
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
        kd,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Pi = (e, t) => {
  const n = h.useCallback(async (p) => {
    try {
      const w = await Xm(p.id);
      if (!w.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        w.workflow
      ), G.log("Workflow restored successfully from Meld");
    } catch (w) {
      G.error("Error restoring workflow:", w), alert("Failed to restore workflow.");
    }
  }, []), r = h.useCallback(async (p) => {
    try {
      const w = await Jm(p.id), v = "MeldUnifiedLoader", x = window.app, _ = window.LiteGraph.createNode(v);
      if (!_) {
        console.error(`Node type ${v} not found.`), alert(
          `Node type ${v} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const j = {
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
      if (_.widgets) {
        for (const [g, C] of Object.entries(j)) {
          const S = w[g];
          if (S != null) {
            const k = _.widgets.find(
              (N) => N.name === C
            );
            k && (k.value = S);
          }
        }
        const m = _.widgets.find(
          (g) => g.name === "control_after_generate"
        );
        m && (m.value = "fixed");
      }
      const d = x.canvas.ds.offset, f = x.canvas.ds.scale;
      _.pos = [(-d[0] + 400) / f, (-d[1] + 300) / f], x.graph.add(_), x.canvas.selectNode(_), x.canvas.centerOnNode(_);
    } catch (w) {
      console.error("Error adding Unified Loader:", w), alert("Failed to load settings.");
    }
  }, []), l = h.useCallback(
    (p) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [p.id],
          tags: p.tags || []
        }
      });
    },
    [t]
  ), a = h.useCallback(
    (p) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: p.id }
      });
    },
    [t]
  ), i = h.useCallback(
    (p) => {
      const w = Array.isArray(p) ? p : [p];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: w }
      });
    },
    [t]
  ), o = h.useCallback(
    async (p, w = "run") => {
      var v;
      if (console.log("[Meld] handleRunWithMask called", p, w), w === "apply") {
        const x = window.app, y = ((v = x == null ? void 0 : x.graph) == null ? void 0 : v._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          y.map((d) => ({
            id: d.id,
            type: d.type
          }))
        );
        const _ = y.some(
          (d) => d.type === "LoadImageMask"
        ), j = y.some(
          (d) => d.type === "MeldImageLoader" || d.type === "LoadImage" || d.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: _, hasLoaderNode: j }), !_ || !j) {
          const d = [];
          j || d.push("'Meld Image Loader'"), _ || d.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${d.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await Rd()).some(
            (_) => _.valid && _.mask_count === 1
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
        } catch (x) {
          console.error("[Meld] Error checking workflows:", x);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: p.id, mode: w }
      });
    },
    [t]
  ), u = h.useCallback(
    async (p, w) => {
      try {
        const v = p.id, y = (await Li([v])).restored_ids || [v];
        t({ type: "REMOVE_IMAGES", payload: y }), w == null || w();
      } catch (v) {
        t({
          type: "SET_ERROR",
          payload: v instanceof Error ? v.message : String(v)
        });
      }
    },
    [t]
  ), c = h.useCallback(
    (p) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [p.id],
          hasLineage: !!(p.parent_id || p.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: a,
    handleRunWithWorkflow: i,
    handleRunWithMask: o,
    handleRestore: u,
    handleDelete: c
  };
}, Wd = (e, t) => {
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
}, Ud = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ee(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: i,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: p,
    handleRunWithMask: w,
    handleRestore: v,
    handleDelete: x
  } = Pi(t, n), { getParentChain: y } = Wd(t.images, t.settings), [_, j] = h.useState(null), [d, f] = h.useState(!1), [m, g] = h.useState(null), [C, S] = h.useState(!1), k = h.useRef(null), N = async (P, D, z = !1) => {
    try {
      await navigator.clipboard.writeText(P), z ? (S(!0), setTimeout(() => S(!1), 2e3)) : (g(D), setTimeout(() => g(null), 2e3));
    } catch (re) {
      console.error("Failed to copy text: ", re);
    }
  };
  h.useEffect(() => {
    const P = (z) => {
      z.key === "Escape" && (_ ? j(null) : f(!1));
    }, D = (z) => {
      k.current && !k.current.contains(z.target) && f(!1);
    };
    return window.addEventListener("keydown", P), d && document.addEventListener("mousedown", D), () => {
      window.removeEventListener("keydown", P), document.removeEventListener("mousedown", D);
    };
  }, [d, _]);
  const U = y(e), A = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, O = Ge(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: _,
    setPopupContent: j,
    isMenuOpen: d,
    setIsMenuOpen: f,
    copiedLabel: m,
    popupCopied: C,
    menuRef: k,
    parentChain: U,
    displayFilename: A,
    imgSrc: O,
    handleCopy: N,
    handleClick: (P) => {
      P.shiftKey ? (P.preventDefault(), P.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : P.ctrlKey || P.metaKey || t.selectedIds.size > 0 ? (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (P) => {
      P.shiftKey ? (P.preventDefault(), P.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : P.ctrlKey || P.metaKey || t.selectedIds.size > 0 ? (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (P) => {
      (P.shiftKey || P.ctrlKey || P.metaKey || t.selectedIds.size > 0 || !P.target.closest(
        "img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb"
      )) && P.preventDefault();
    },
    handleKeyDown: (P) => {
      (P.key === "Enter" || P.key === " ") && (P.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
    handleRestore: () => {
      v(e);
    },
    handleDelete: () => {
      x(e);
    },
    handleRunWithWorkflow: () => {
      p(e);
    },
    handleRunWithMask: (P = "run") => w(e, P),
    fetchFullImageDetails: r
  };
}, Lh = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onRunWithWorkflow: i,
  onRunWithMask: o,
  onEditSource: u,
  onEditTags: c,
  onDelete: p,
  onRestore: w,
  showRestore: v,
  deleteLabel: x
}) => {
  const y = (j) => {
    switch (j) {
      case "add_unified_loader":
        return l;
      case "restore_full_workflow":
        return a;
      case "queue_workflow":
        return i;
      case "send_to_workflow_mask":
        return () => o("apply");
      case "queue_workflow_mask":
        return () => o("run");
      case "edit_source_image":
        return u;
      case "edit_tags":
        return c;
      case "restore_image":
        return w;
      case "delete_or_trash":
        return p;
      default:
        return null;
    }
  }, _ = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((j) => j && j !== "");
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-image-card__menu-btn",
        onClick: (j) => {
          j.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Fm, { size: 16 })
      }
    ),
    _.map((j, d) => {
      const f = Td.find((C) => C.id === j);
      if (!f || !f.icon) return null;
      const m = f.icon, g = y(j);
      return !g || j === "restore_image" && !v ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-image-card__menu-btn",
          onClick: (C) => {
            C.stopPropagation(), g();
          },
          title: f.label,
          children: /* @__PURE__ */ s.jsx(m, { size: 16 })
        },
        `${j}-${d}`
      );
    }),
    e && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: jd,
        handler: l
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Cd,
        handler: a
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Ed,
        handler: i
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Md,
        handler: () => o("apply")
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Nd,
        handler: () => o("run")
      },
      {
        id: "edit_source_image",
        label: "Edit source image",
        icon: Id,
        handler: u
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: bd,
        handler: c
      },
      ...v ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Ld,
          handler: w,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: x,
        icon: Jt,
        handler: p,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((j) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${j.className || ""}`,
        onMouseDown: (d) => d.stopPropagation(),
        onClick: (d) => {
          d.preventDefault(), d.stopPropagation(), t(!1), setTimeout(() => j.handler(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(j.icon, { size: 14, color: j.color }),
          /* @__PURE__ */ s.jsx("span", { children: j.label })
        ]
      },
      j.id
    )) })
  ] });
}, Th = ({
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
                  Im,
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
), Vd = _l.memo(
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
      parentChain: w,
      displayFilename: v,
      imgSrc: x,
      handleCopy: y,
      handleClick: _,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: m,
      handleAddUnifiedLoader: g,
      handleEditSource: C,
      handleEditTags: S,
      handleRestore: k,
      handleDelete: N,
      handleRunWithWorkflow: U,
      handleRunWithMask: b,
      fetchFullImageDetails: A
    } = Ud(e);
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
        onClick: j,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: x,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (O) => {
                O.stopPropagation(), _(O);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && w.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: w.map(
                (O, $) => O.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: O.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (E) => {
                      E.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: O.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: $ === 0 ? "Source" : $ === 1 ? "Grand-Source" : `Ancestor (S${$ + 1})`,
                    alt: "source thumb"
                  },
                  O.id || $
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
                onClick: async (O) => {
                  O.stopPropagation();
                  const $ = await A(e.id);
                  a({
                    title: "Model",
                    text: $.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (O) => {
                        O.stopPropagation();
                        const $ = await A(e.id);
                        y($.model_name || "-", "Model");
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
                onClick: async (O) => {
                  O.stopPropagation();
                  const $ = await A(e.id);
                  a({
                    title: "Positive Prompt",
                    text: $.positive_prompt || $.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (O) => {
                        O.stopPropagation();
                        const $ = await A(e.id);
                        y(
                          $.positive_prompt || $.positive || "-",
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
                onClick: async (O) => {
                  O.stopPropagation();
                  const $ = await A(e.id);
                  a({
                    title: "Negative Prompt",
                    text: $.negative_prompt || $.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (O) => {
                        O.stopPropagation();
                        const $ = await A(e.id);
                        y(
                          $.negative_prompt || $.negative || "-",
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
                onClick: (O) => {
                  O.stopPropagation(), S();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((O, $) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: O
                    },
                    `${O}-${$}`
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
            Lh,
            {
              isMenuOpen: i,
              setIsMenuOpen: o,
              menuRef: p,
              settings: t.settings,
              onAddUnifiedLoader: g,
              onRestoreWorkflow: m,
              onRunWithWorkflow: U,
              onRunWithMask: (O) => b(O),
              onEditSource: C,
              onEditTags: S,
              onRestore: k,
              showRestore: t.viewScope === "trash",
              onDelete: N,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Th,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (O) => y(O, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Vd.displayName = "DetailedImageCard";
const Qd = _l.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: i
    } = Ud(e);
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
Qd.displayName = "SimpleImageCard";
const Ph = ({ image: e }) => {
  const { state: t } = Ee();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Qd, { image: e }) : /* @__PURE__ */ s.jsx(Vd, { image: e });
}, Dh = ({
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
}, Rh = () => {
  const { state: e, dispatch: t } = Ee(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await wh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ s.jsx(gd, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Nm, { size: 14, className: "meld-success-icon" }),
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
}, zh = () => {
  const { state: e, refreshFavorites: t } = Ee(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [i, o] = h.useState(null), [u, c] = h.useState(""), [p, w] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const j = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const v = h.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const m = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(m))
        try {
          await Bo(d), await t();
        } catch (g) {
          G.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), x = h.useCallback(
    (j, d) => {
      j.stopPropagation(), o(d), c(d.name), w(d.query);
    },
    []
  ), y = h.useCallback(async () => {
    if (!(!i || !u.trim() || !p.trim()))
      try {
        r(!0), await sh(
          i.id,
          u,
          p
        ), await t(), o(null), a("Favorite updated.");
      } catch (j) {
        G.error("Failed to update favorite", j), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [i, u, p, t]), _ = h.useCallback(async () => {
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
          G.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await lh(e.searchQuery, e.searchQuery), await t(), a(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      G.error("Failed to save favorite:", d);
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
    setEditFavoriteQuery: w,
    handleDeleteFavorite: v,
    handleEditFavorite: x,
    handleSaveEditFavorite: y,
    handleSaveFavorite: _,
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
}, Ah = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ee(), [r, l] = h.useState(e.searchQuery), [a, i] = h.useState([]), [o, u] = h.useState(!1), [c, p] = h.useState([]), [w, v] = h.useState([]), x = e.settings["search.show_all_keywords"], [y, _] = h.useState(-1), [j, d] = h.useState(null), f = h.useRef(null), m = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (w.length > 0) return;
    const L = await th();
    v(L);
  }, [w.length]);
  h.useEffect(() => {
    nh().then((L) => {
      d(L);
    }), x && g();
  }, [g, x]);
  const C = h.useMemo(() => {
    if (!j) return null;
    const L = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${L}):(.*)$`, "i");
  }, [j]), S = h.useCallback(() => {
    const L = !x;
    L && g(), n("search.show_all_keywords", L);
  }, [x, g, n]), k = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    eh().then((L) => {
      p(L);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var L;
    (L = f.current) == null || L.focus();
  }, []);
  const N = h.useCallback(
    (L, Y = !0) => {
      m.current !== L && (G.log("SearchBar: triggering search", { query: L }), t({ type: "SET_SEARCH_QUERY", payload: L }), Y && u(!1), m.current = L);
    },
    [t]
  );
  h.useEffect(() => {
    const L = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !C) {
        i([]), u(!1);
        return;
      }
      const Y = zs(r), I = Y[Y.length - 1];
      if (I) {
        const F = I.match(C);
        if (F) {
          const Q = F[1].toLowerCase();
          let M = F[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const te = await Zm(M, Q);
          i(te), u(te.length > 0), _(-1);
        } else {
          const Q = I.replace(/^([-!])/, "").toLowerCase();
          if (Q && j) {
            const M = j.all_prefixes.filter((te) => te.startsWith(Q)).map((te) => ({
              type: te,
              value: "",
              count: 0
            }));
            if (M.length > 0) {
              i(M), u(!0), _(-1);
              return;
            }
          }
          i([]), u(!1);
        }
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(L);
  }, [
    r,
    e.settings["search.input_suggest"],
    C,
    j
  ]);
  const U = h.useCallback(
    (L) => {
      var ye;
      const Y = zs(r), F = (Y.pop() || "").match(/^([-!])/), Q = F ? F[1] : "", te = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L.type);
      if (L.value === "") {
        const P = `${[...Y, `${Q}${L.type}:`].join(" ").trim()}`;
        l(P);
      } else {
        const P = te ? L.value : `"${L.value}"`, D = `${[
          ...Y,
          `${Q}${L.type}:${P}`
        ].join(" ").trim()} `;
        l(D), i([]), u(!1);
      }
      (ye = f.current) == null || ye.focus();
    },
    [r, j]
  ), b = (L) => {
    L.key === "Enter" ? N(r) : L.key === "Tab" ? o && y >= 0 && (U(a[y]), L.preventDefault()) : L.key === "ArrowDown" ? o && (_((Y) => Math.min(Y + 1, a.length - 1)), L.preventDefault()) : L.key === "ArrowUp" ? o && (_((Y) => Math.max(Y - 1, -1)), L.preventDefault()) : L.key === "Escape" && u(!1);
  }, A = h.useCallback(() => {
    l(""), N("");
  }, [N]), O = h.useCallback(
    (L, Y, I = !1) => {
      var ye;
      if (I) {
        const P = `${L}:`;
        l(P), (ye = f.current) == null || ye.focus();
        return;
      }
      const M = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L) ? Y : `"${Y}"`, te = `${L}:${M}`;
      l(te), N(te);
    },
    [N, j]
  ), $ = h.useCallback(
    (L) => {
      l(L), L || N("");
    },
    [N]
  ), E = h.useCallback(() => {
    if (r === m.current || !C)
      return;
    const L = zs(r), Y = L[L.length - 1];
    if (!Y) return;
    const I = !!Y.match(C), F = Y.replace(/^([-!])/, "").toLowerCase(), Q = F && (j == null ? void 0 : j.all_prefixes.some((M) => M.startsWith(F)));
    (I || Q) && u(!0);
  }, [r, C, j]), Z = h.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: w,
    showAllKeywords: x,
    toggleShowAllKeywords: S,
    selectedIndex: y,
    setSelectedIndex: _,
    inputRef: f,
    isQueryChanged: k,
    handleSearch: N,
    handleKeyDown: b,
    applySuggestion: U,
    clearSearch: A,
    applySearchSuggestion: O,
    handleInputChange: $,
    handleInputFocus: E,
    handleInputBlur: Z
  };
}, Oh = ({
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
                  children: /* @__PURE__ */ s.jsx(Jt, { size: 14 })
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
      return /* @__PURE__ */ s.jsx(Yn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Cm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Wm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Em, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(cd, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(ud, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(jm, { size: 12 });
    default:
      return null;
  }
}, Fh = ({
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
  applySearchSuggestion: w,
  favorites: v,
  onSelectFavorite: x,
  onEditFavorite: y,
  onDeleteFavorite: _
}) => {
  const j = (g, C, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => w(g.type, g.value, S === "all"),
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
      onMouseEnter: (k) => {
        k.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", k.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", k.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (k) => {
        k.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", k.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", k.currentTarget.style.color = "var(--meld-text-color)";
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
    `${S}-${g.type}:${g.value}:${C}`
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
      children: t.map((g, C) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(g);
          },
          onMouseEnter: () => r(C),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: C === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
              (g, C) => j(g, C, "quick")
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
                    (g, C) => j({ type: g, value: "" }, C, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => v.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
            children: v.map((g) => /* @__PURE__ */ s.jsx(
              Oh,
              {
                fav: g,
                onSelect: x,
                onEdit: y,
                onDelete: _
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
}, $h = () => {
  const { state: e } = Ee(), {
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
    inputRef: w,
    isQueryChanged: v,
    handleSearch: x,
    handleKeyDown: y,
    applySuggestion: _,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: m,
    handleInputBlur: g
  } = Ah(), {
    isSaving: C,
    toastMessage: S,
    editingFavorite: k,
    setEditingFavorite: N,
    editFavoriteName: U,
    setEditFavoriteName: b,
    editFavoriteQuery: A,
    setEditFavoriteQuery: O,
    handleDeleteFavorite: $,
    handleEditFavorite: E,
    handleSaveEditFavorite: Z,
    handleSaveFavorite: L
  } = zh();
  Tt({
    onEscape: () => N(null),
    enabled: !!k
  });
  const Y = h.useRef(null), I = h.useRef(!1);
  h.useEffect(() => {
    k && Y.current && Y.current.focus();
  }, [k]);
  const F = (M) => {
    M.target === M.currentTarget && (I.current = !0);
  }, Q = (M) => {
    M.target === M.currentTarget && I.current && N(null), I.current = !1;
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
              S && /* @__PURE__ */ s.jsx(
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
                        onClick: () => x(t),
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
                        onMouseEnter: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)", v ? (M.currentTarget.style.filter = "brightness(1.15)", M.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (M) => {
                          M.currentTarget.style.transform = "none", v ? (M.currentTarget.style.filter = "none", M.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
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
                            Hn,
                            {
                              size: 16,
                              color: v ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: v ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          v && /* @__PURE__ */ s.jsx(
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
                        ref: w,
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
                        onClick: L,
                        disabled: C,
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
                        onClick: j,
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
                Fh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: p,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: i,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), x(M);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: $
                }
              )
            ]
          }
        ),
        k && be.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: F,
              onMouseUp: Q,
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
                          onClick: () => N(null),
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
                                    value: U,
                                    onChange: (M) => b(M.target.value),
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
                                      M.key === "Enter" && Z(), M.key === "Escape" && N(null);
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
                                    onChange: (M) => O(M.target.value),
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), Z()), M.key === "Escape" && N(null);
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
                          onClick: () => N(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: Z,
                          disabled: C || !U.trim() || !A.trim(),
                          children: C ? "Saving..." : "Save Changes"
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
}, Wh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [i, o] = h.useState(""), [u, c] = h.useState(""), [p, w] = h.useState(!1), [v, x] = h.useState(null), [y, _] = h.useState(""), [j, d] = h.useState(!1), f = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const A = await Ti();
      r(A);
    } catch (A) {
      console.error("Failed to fetch tags:", A);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    v !== null && f.current && (f.current.focus(), f.current.select());
  }, [v]);
  const g = async (A) => {
    A.preventDefault();
    const O = u.trim();
    if (!(!O || p)) {
      if (O.toLowerCase() === ft) {
        alert(
          `Tag name '${ft}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some(($) => $.name.toLowerCase() === O.toLowerCase())) {
        alert(`Tag "${O}" already exists.`);
        return;
      }
      w(!0);
      try {
        await dh(O), c(""), await m();
      } catch ($) {
        console.error("Failed to add tag:", $);
      } finally {
        w(!1);
      }
    }
  }, C = async (A, O) => {
    if (confirm(`Are you sure you want to delete tag "${O}"?`))
      try {
        await fh(A), await m();
      } catch ($) {
        console.error("Failed to delete tag:", $);
      }
  }, S = (A) => {
    x(A.id), _(A.name);
  }, k = () => {
    x(null), _("");
  }, N = async (A) => {
    A.preventDefault();
    const O = y.trim();
    if (!O || v === null || j) return;
    if (O.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    const $ = n.find((E) => E.id === v);
    if ($ && $.name === O) {
      k();
      return;
    }
    if (n.some(
      (E) => E.id !== v && E.name.toLowerCase() === O.toLowerCase()
    )) {
      alert(`Tag "${O}" already exists.`);
      return;
    }
    d(!0);
    try {
      await ph(v, O), k(), await m();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, U = (A) => {
    t(`tag:${A}`);
  }, b = h.useMemo(() => n.filter(
    (A) => A.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Yn, { size: 16 }),
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
            onChange: (A) => c(A.target.value),
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
              /* @__PURE__ */ s.jsx(bi, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Hn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (A) => o(A.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: b.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : b.map((A) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: v === A.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: N,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (O) => _(O.target.value),
                onKeyDown: (O) => O.key === "Escape" && k()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !y.trim(),
                children: /* @__PURE__ */ s.jsx(Mi, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: k,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(Se, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: A.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => U(A.name),
              children: /* @__PURE__ */ s.jsx(Hn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(A),
              children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => C(A.id, A.name),
              children: /* @__PURE__ */ s.jsx(Jt, { size: 14 })
            }
          )
        ] })
      ] }) }, A.id)) })
    ] })
  ] });
}, Uh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: i, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: p } = Pi(e, t), { getParentChain: w } = Wd(a, u), [v, x] = h.useState(!1), [y, _] = h.useState(
    u["viewer.show_details_by_default"]
  ), [j, d] = h.useState(null), f = j ?? u["viewer.show_thumbnails"], [m, g] = h.useState(!1), [C, S] = h.useState(!1), [k, N] = h.useState(null), [U, b] = h.useState(null), [A, O] = h.useState(
    null
  ), $ = h.useRef(null), E = h.useRef(!0);
  h.useEffect(() => (E.current = !0, () => {
    E.current = !1;
  }), []);
  const Z = h.useRef(l);
  h.useEffect(() => {
    Z.current = l;
  }, [l]);
  const L = h.useMemo(() => {
    const V = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return i === "lineage" ? o : a.filter(
      (q) => q.exists !== !1 && (u["gallery.show_parent_images"] || !q.has_children || V)
    );
  }, [i, o, a, u, e.searchQuery]), Y = l === null ? -1 : L.findIndex((V) => V.id === l), I = (i === "lineage" && o.length > 0 ? o : a).find((V) => V.id === l), F = h.useCallback(
    async (V = !1) => {
      if (!I) return;
      const q = v ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!V && q === "confirm") {
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
        const T = e.viewScope === "trash", X = /* @__PURE__ */ new Set([I.id]);
        if (q === "lineage") {
          const H = await La(I.id);
          for (const J of H)
            X.add(J.id);
        }
        if (!E.current || Z.current === null) return;
        if (L.length > X.size) {
          let H = !1;
          for (let J = Y + 1; J < L.length; J++)
            if (!X.has(L[J].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: L[J].id, mode: i }
              }), H = !0;
              break;
            }
          if (!H) {
            for (let J = Y - 1; J >= 0; J--)
              if (!X.has(L[J].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: L[J].id, mode: i }
                }), H = !0;
                break;
              }
          }
          H || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ba(Array.from(X), T), !T) {
          const H = L.filter(
            (J) => X.has(J.id)
          );
          N(H), b(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(X) });
      } catch (T) {
        t({
          type: "SET_ERROR",
          payload: T instanceof Error ? T.message : String(T)
        });
      }
    },
    [
      I,
      v,
      u,
      e.viewScope,
      L,
      Y,
      i,
      t
    ]
  ), Q = h.useCallback(() => {
    I && c(I);
  }, [I, c]), M = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: v } });
  }, [t, v]), te = h.useCallback(async () => {
    const V = v ? u["fullscreen.loop"] : u["viewer.loop"];
    if (Y === 0 && i === "gallery" && e.pagination.hasMore && !C && V) {
      S(!0);
      try {
        const q = e.pagination.limit, T = e.pagination.total, X = Math.max(0, T - q), H = await xl(
          X,
          q,
          e.searchQuery
        );
        if (!E.current || (t({ type: "APPEND_IMAGES", payload: H }), Z.current === null)) return;
        if (H.images.length > 0) {
          const J = H.images[H.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: J.id, mode: "gallery" }
          });
        }
      } catch (q) {
        console.error("Failed to jump to end:", q);
      } finally {
        S(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: v } });
  }, [
    Y,
    i,
    e.pagination,
    e.searchQuery,
    u,
    t,
    C,
    v
  ]), ye = h.useCallback(
    (V) => {
      V && "stopPropagation" in V && V.stopPropagation();
      const q = $.current;
      q && (document.fullscreenElement ? document.exitFullscreen() : q.requestFullscreen().catch((T) => {
        console.error(
          `Error attempting to enable full-screen mode: ${T.message}`
        );
      }));
    },
    []
  ), P = h.useCallback(async () => {
    I && (L.length > 1 ? M() : t({ type: "CLOSE_VIEWER" }), await p(I));
  }, [I, L.length, M, p, t]), D = h.useCallback(async () => {
    if (!k || k.length === 0) return;
    const V = k.map((T) => T.id), q = V[0];
    try {
      const T = await Li(V);
      if (!E.current) return;
      if (t({ type: "ADD_IMAGES", payload: k }), e.viewScope === "trash") {
        const X = T.restored_ids || V;
        t({ type: "REMOVE_IMAGES", payload: X });
      }
      if (N(null), !E.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: q, mode: i }
      });
    } catch (T) {
      t({
        type: "SET_ERROR",
        payload: T instanceof Error ? T.message : String(T)
      });
    }
  }, [k, t, i, e.viewScope]), z = h.useCallback(async () => {
    if (k && k.length > 0)
      await D();
    else if (U && U.type === "tags") {
      const { imageId: V, addTags: q, removeTags: T } = U;
      try {
        await Ta([V], q, T);
        const X = (i === "lineage" ? o : a).find((H) => H.id === V);
        if (X) {
          const H = [...X.tags];
          for (const we of q)
            H.includes(we) || H.push(we);
          const J = H.filter((we) => !T.includes(we));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...X, tags: J }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: V, mode: i }
          });
        }
        b(null);
      } catch (X) {
        t({
          type: "SET_ERROR",
          payload: X instanceof Error ? X.message : String(X)
        });
      }
    }
  }, [
    k,
    U,
    D,
    a,
    o,
    i,
    t
  ]), re = h.useCallback(
    async (V) => {
      if (!V || !I) return;
      const q = I.id, T = [...I.tags], X = V.split(/\s+/), H = [], J = [];
      let we = !1, Pt = !1, qn = !1;
      for (const _e of X)
        if (_e.startsWith("tag:")) {
          const pe = _e.substring(4);
          pe && !T.includes(pe) && !H.includes(pe) && H.push(pe);
        } else if (_e.startsWith("-tag:")) {
          const pe = _e.substring(5);
          pe && T.includes(pe) && !J.includes(pe) && J.push(pe);
        } else if (_e.startsWith("tag-toggle:")) {
          const pe = _e.substring(11);
          pe && (T.includes(pe) ? J.includes(pe) || J.push(pe) : H.includes(pe) || H.push(pe));
        } else _e === "next" ? we = !0 : _e === "prev" ? Pt = !0 : _e === "delete" && (qn = !0);
      if (H.length > 0 || J.length > 0)
        try {
          await Ta(
            [q],
            H,
            J
          );
          const _e = [...T];
          for (const We of H)
            _e.includes(We) || _e.push(We);
          const pe = _e.filter((We) => !J.includes(We));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...I, id: q, tags: pe }
          }), b({
            type: "tags",
            imageId: q,
            addTags: [...J],
            removeTags: [...H]
          }), N(null);
        } catch (_e) {
          console.error("Failed to update tags via shortcut:", _e);
        }
      qn ? F(!0) : we ? M() : Pt && te();
    },
    [I, t, M, te, F]
  );
  h.useEffect(() => {
    const V = (T) => {
      var pe, We, _t;
      if (l === null) return;
      const X = ((pe = document.activeElement) == null ? void 0 : pe.tagName) === "INPUT" || ((We = document.activeElement) == null ? void 0 : We.tagName) === "TEXTAREA" || ((_t = document.activeElement) == null ? void 0 : _t.isContentEditable), H = T.key === "Delete" || T.key === "Backspace", J = T.key === "ArrowRight" || T.key === "ArrowLeft", we = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        T.key
      ), Pt = T.key === "Escape", qn = (T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z" || T.code === "KeyZ"), _e = /^[0-9]$/.test(T.key) && !T.ctrlKey && !T.metaKey && !T.altKey && T.code !== "KeyZ";
      if (H || J || we || Pt || qn || _e)
        if (X)
          if (Pt) {
            if (e.activeModal.type !== "none") {
              T.preventDefault(), T.stopPropagation();
              return;
            }
            T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
          } else
            return;
        else {
          if (Pt && e.activeModal.type !== "none") {
            T.preventDefault(), T.stopPropagation();
            return;
          }
          T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
        }
      else
        return;
      if (T.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (T.key === "ArrowRight")
        M();
      else if (T.key === "ArrowLeft")
        te();
      else if (T.key === "f" || T.key === "F")
        ye(T);
      else if (T.key === "i" || T.key === "I")
        _((Xn) => !Xn);
      else if (T.key === "t" || T.key === "T")
        Q();
      else if ((T.key === "r" || T.key === "R") && e.viewScope === "trash")
        P();
      else if (T.key === "Delete")
        F();
      else if ((T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z"))
        z();
      else if (_e && !X) {
        const Xn = `viewer.shortcut.${T.key}`, at = u[Xn];
        typeof at == "string" && at && (O(T.key), setTimeout(() => {
          E.current && O(null);
        }, 500), re(at));
      }
    };
    window.addEventListener("keydown", V, { capture: !0 });
    const q = () => {
      const T = !!document.fullscreenElement;
      x(T), _(T ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", q), () => {
      window.removeEventListener("keydown", V, { capture: !0 }), document.removeEventListener("fullscreenchange", q);
    };
  }, [
    l,
    t,
    ye,
    M,
    te,
    u,
    F,
    e.activeModal.type,
    z,
    Q,
    P,
    e.viewScope,
    re
  ]), h.useEffect(() => {
    l !== null && r(l).catch((V) => {
      console.error("Failed to fetch full image details for viewer:", V);
    });
  }, [l, r]), h.useEffect(() => {
    i === "lineage" && l !== null && o.length === 0 && (g(!0), La(l).then((V) => {
      E.current && t({ type: "SET_LINEAGE", payload: V });
    }).catch((V) => {
      console.error("Failed to fetch lineage:", V);
    }).finally(() => {
      E.current && g(!1);
    }));
  }, [i, l, o.length, t]), h.useEffect(() => {
    i !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || Y !== -1 && Y >= L.length - 15 && n();
  }, [
    l,
    L.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    Y
  ]);
  const K = h.useMemo(() => {
    if (!f || Y === -1) return [];
    const V = u["viewer.thumbnail_window_size"], q = Math.floor(V / 2);
    let T = Math.max(0, Y - q);
    const X = Math.min(L.length, T + V);
    return X === L.length && (T = Math.max(0, X - V)), L.slice(T, X).map((H, J) => ({
      img: H,
      absIndex: T + J
    }));
  }, [L, Y, u, f]), ie = h.useMemo(() => I ? w(I) : [], [I, w]);
  return h.useEffect(() => {
    var V, q;
    if (l !== null) {
      if (f) {
        const T = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((V = document.activeElement) == null ? void 0 : V.tagName) === "CANVAS" && document.activeElement.blur(), (q = $.current) == null || q.focus();
    }
  }, [l, f]), h.useEffect(() => {
    if (l === null || L.length === 0) return;
    const V = L.findIndex(
      (H) => H.id === l
    );
    if (V === -1) return;
    const q = (H) => Ge(H), T = [
      V + 1,
      V + 2,
      V - 1
    ], X = setTimeout(() => {
      for (const H of T)
        if (H >= 0 && H < L.length) {
          const J = L[H], we = new Image();
          we.src = q(J);
        }
    }, 150);
    return () => clearTimeout(X);
  }, [l, L]), {
    isFullscreen: v,
    showDetails: y,
    setShowDetails: _,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: m,
    isJumping: C,
    activeShortcutKey: A,
    lastDeletedImages: k,
    setLastDeletedImages: N,
    overlayRef: $,
    handleNext: M,
    handlePrevious: te,
    handleDelete: F,
    handleTagEdit: Q,
    handleRestore: P,
    handleUndo: z,
    toggleFullscreen: ye,
    currentIndex: Y,
    currentThumbnails: L,
    image: I,
    windowedThumbnails: K,
    parentChain: ie
  };
}, Vh = ({
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
}) }) : null, Qh = ({
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
), Hd = h.memo(
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
Hd.displayName = "ThumbnailItem";
const Hh = ({
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
    Hd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  i === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(zr, { className: "animate-spin", size: 20 }) })
] }) });
function Bh() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ee(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: i,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: p,
    activeShortcutKey: w,
    setLastDeletedImages: v,
    overlayRef: x,
    handleNext: y,
    handlePrevious: _,
    handleTagEdit: j,
    handleRestore: d,
    toggleFullscreen: f,
    image: m,
    windowedThumbnails: g,
    parentChain: C
  } = Uh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), S = h.useRef(null), { executeWorkflow: k } = Ad();
  if (!m) return null;
  const { viewerImageId: N, viewerMode: U } = e, b = Ge(m), A = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return be.createPortal(
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
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (O) => O.stopPropagation(),
              children: [
                A && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(zr, { size: 20 })
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
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(Yn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Tm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(Om, { size: 20 }) : /* @__PURE__ */ s.jsx(Am, { size: 20 })
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
                A && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: _,
                    type: "button",
                    disabled: p,
                    children: /* @__PURE__ */ s.jsx(dd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(zr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: S,
                      src: b,
                      alt: m.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                A && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: y,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(fd, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Qh,
                  {
                    image: m,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: A,
                    parentChain: C,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Hh,
                  {
                    windowedThumbnails: g,
                    viewerImageId: N,
                    currentImage: m,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: U
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vh,
                  {
                    settings: e.settings,
                    activeShortcutKey: w
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            zd,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (O) => {
                if (e.activeModal.type === "workflow_selection") {
                  const $ = e.activeModal.maskFilename;
                  for (const E of e.activeModal.images)
                    await k(O, E, $);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Fd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Od,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx($d, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(_d, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Pd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Dd,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            kd,
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
const Gh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ee(), [a, i] = h.useState("gallery"), [o, u] = h.useState(""), [c, p] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    p(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const w = e.searchQuery.trim() !== "", v = h.useRef(null), x = h.useRef(null), y = h.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), _ = h.useMemo(
    () => y.slice(0, c),
    [y, c]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (G.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), h.useEffect(() => {
    const j = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), h.useEffect(() => {
    const j = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            G.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < y.length ? (G.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), p((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (G.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : G.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: y.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = v.current;
    return d && j.observe(d), () => {
      d && j.unobserve(d);
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
    const j = e.viewerImageId ?? x.current;
    if (j !== null && y.some((f) => f.id === j)) {
      const f = y.findIndex((g) => g.id === j);
      if (f >= c) {
        p(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${j}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
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
    visibleImages: _,
    isSearchActive: w,
    loadMoreRef: v
  };
}, Kh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ee(), { handleRunWithWorkflow: l } = Pi(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const i = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (w) => e.selectedIds.has(w.id)
    ), p = /* @__PURE__ */ new Set();
    for (const w of c)
      if (w.tags)
        for (const v of w.tags)
          p.add(v);
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
                  zr,
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
                  Jt,
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
                  Yn,
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
                  Jt,
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
}, Yh = () => {
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
    isSearchActive: w,
    loadMoreRef: v
  } = Gh();
  return G.log("GalleryPanel: rendering", {
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
              /* @__PURE__ */ s.jsx(Jt, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (x) => r("gallery.trash.show_missing", x.target.checked)
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
                  color: w ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: w ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Hn, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Dm, { size: 14 }) : /* @__PURE__ */ s.jsx(md, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Yn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(bm, { size: 14 })
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
                  zr,
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
                children: /* @__PURE__ */ s.jsx($m, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx($h, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Rh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          Wh,
          {
            onClose: () => a("gallery"),
            onSearch: (x) => {
              t({ type: "SET_SEARCH_QUERY", payload: x }), a("search");
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
              children: p.map((x) => {
                const y = e.settings["sidebar.thumbnail_size"] || 100, _ = e.settings["gallery.view_mode"] === "grid_only", j = _ && x.width && x.height ? Math.min(
                  y,
                  y * x.width / x.height
                ) + 10 : _ ? y + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": x.id,
                    style: {
                      width: _ ? "auto" : "100%",
                      flexShrink: 0,
                      display: _ ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      Dh,
                      {
                        height: _ ? y + 10 : Math.max(y, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: _ ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(Ph, { image: x })
                      }
                    )
                  },
                  x.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: v,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && p.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Kh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Bh, {}),
        /* @__PURE__ */ s.jsx(bh, {})
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
const qh = document.getElementById(
  "meld-gallery-style"
);
if (!qh) {
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
let il = null, ot = null;
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
      const n = await wd();
      G.init(n.dev_mode), G.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), G.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), G.log("Import completed.");
      }), ee.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await vd({
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
            G.log("render called", {
              el: n,
              galleryRoot: il,
              galleryContainer: ot
            }), ot || (G.log("galleryContainer not found, creating new one"), ot = document.createElement("div"), ot.id = "meld-gallery-container", ot.style.height = "100%", ot.style.width = "100%", ot.style.display = "flex", ot.style.flexDirection = "column"), n.contains(ot) || (G.log("Appending galleryContainer to el"), n.appendChild(ot)), il ? G.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (G.log("Creating new gallery root"), il = sd(ot), il.render(
              _l.createElement(
                ch,
                null,
                _l.createElement(Yh)
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
