import { api as te } from "/scripts/api.js";
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
function Ua(e, t, n) {
  this.props = e, this.context = t, this.refs = ic, this.updater = n || ac;
}
var Va = Ua.prototype = new cc();
Va.constructor = Ua;
oc(Va, tr.prototype);
Va.isPureReactComponent = !0;
var Bo = Array.isArray, dc = Object.prototype.hasOwnProperty, Qa = { current: null }, uc = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return { $$typeof: Qr, type: e, key: a, ref: o, props: s, _owner: Qa.current };
}
function kf(e, t) {
  return { $$typeof: Qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ba(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function Sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ho = /\/+/g;
function vs(e, t) {
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
  if (o) return o = e, s = s(o), e = r === "" ? "." + vs(o, 0) : r, Bo(s) ? (n = "", e != null && (n = e.replace(Ho, "$&/") + "/"), hl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (Ba(s) && (s = kf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ho, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Bo(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + vs(a, i);
    o += hl(a, t, n, c, s);
  }
  else if (c = _f(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + vs(a, i++), o += hl(a, t, n, c, s);
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
var Be = { current: null }, gl = { transition: null }, Ef = { ReactCurrentDispatcher: Be, ReactCurrentBatchConfig: gl, ReactCurrentOwner: Qa };
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
  if (!Ba(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
se.Component = tr;
se.Fragment = ff;
se.Profiler = mf;
se.PureComponent = Ua;
se.StrictMode = pf;
se.Suspense = vf;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
se.act = pc;
se.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = oc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Qa.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
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
se.isValidElement = Ba;
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
  return Be.current.useCallback(e, t);
};
se.useContext = function(e) {
  return Be.current.useContext(e);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(e) {
  return Be.current.useDeferredValue(e);
};
se.useEffect = function(e, t) {
  return Be.current.useEffect(e, t);
};
se.useId = function() {
  return Be.current.useId();
};
se.useImperativeHandle = function(e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function(e, t) {
  return Be.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function(e, t) {
  return Be.current.useLayoutEffect(e, t);
};
se.useMemo = function(e, t) {
  return Be.current.useMemo(e, t);
};
se.useReducer = function(e, t, n) {
  return Be.current.useReducer(e, t, n);
};
se.useRef = function(e) {
  return Be.current.useRef(e);
};
se.useState = function(e) {
  return Be.current.useState(e);
};
se.useSyncExternalStore = function(e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function() {
  return Be.current.useTransition();
};
se.version = "18.3.1";
sc.exports = se;
var p = sc.exports;
const Gt = /* @__PURE__ */ df(p);
var mc = { exports: {} }, at = {}, hc = { exports: {} }, gc = {};
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
  function t(M, L) {
    var F = M.length;
    M.push(L);
    e: for (; 0 < F; ) {
      var T = F - 1 >>> 1, ee = M[T];
      if (0 < s(ee, L)) M[T] = L, M[F] = ee, F = T;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var L = M[0], F = M.pop();
    if (F !== L) {
      M[0] = F;
      e: for (var T = 0, ee = M.length, ce = ee >>> 1; T < ce; ) {
        var V = 2 * (T + 1) - 1, A = M[V], D = V + 1, J = M[D];
        if (0 > s(A, F)) D < ee && 0 > s(J, A) ? (M[T] = J, M[D] = F, T = D) : (M[T] = A, M[V] = F, T = V);
        else if (D < ee && 0 > s(J, F)) M[T] = J, M[D] = F, T = D;
        else break e;
      }
    }
    return L;
  }
  function s(M, L) {
    var F = M.sortIndex - L.sortIndex;
    return F !== 0 ? F : M.id - L.id;
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
  var c = [], d = [], m = 1, v = null, w = 3, k = !1, y = !1, _ = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= M) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function g(M) {
    if (_ = !1, h(M), !y) if (n(c) !== null) y = !0, N(E);
    else {
      var L = n(d);
      L !== null && U(g, L.startTime - M);
    }
  }
  function E(M, L) {
    y = !1, _ && (_ = !1, f(C), C = -1), k = !0;
    var F = w;
    try {
      for (h(L), v = n(c); v !== null && (!(v.expirationTime > L) || M && !R()); ) {
        var T = v.callback;
        if (typeof T == "function") {
          v.callback = null, w = v.priorityLevel;
          var ee = T(v.expirationTime <= L);
          L = e.unstable_now(), typeof ee == "function" ? v.callback = ee : v === n(c) && r(c), h(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var ce = !0;
      else {
        var V = n(d);
        V !== null && U(g, V.startTime - L), ce = !1;
      }
      return ce;
    } finally {
      v = null, w = F, k = !1;
    }
  }
  var j = !1, x = null, C = -1, z = 5, b = -1;
  function R() {
    return !(e.unstable_now() - b < z);
  }
  function $() {
    if (x !== null) {
      var M = e.unstable_now();
      b = M;
      var L = !0;
      try {
        L = x(!0, M);
      } finally {
        L ? K() : (j = !1, x = null);
      }
    } else j = !1;
  }
  var K;
  if (typeof u == "function") K = function() {
    u($);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), Y = I.port2;
    I.port1.onmessage = $, K = function() {
      Y.postMessage(null);
    };
  } else K = function() {
    S($, 0);
  };
  function N(M) {
    x = M, j || (j = !0, K());
  }
  function U(M, L) {
    C = S(function() {
      M(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    y || k || (y = !0, N(E));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(M) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = w;
    }
    var F = w;
    w = L;
    try {
      return M();
    } finally {
      w = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, L) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var F = w;
    w = M;
    try {
      return L();
    } finally {
      w = F;
    }
  }, e.unstable_scheduleCallback = function(M, L, F) {
    var T = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? T + F : T) : F = T, M) {
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
    return ee = F + ee, M = { id: m++, callback: L, priorityLevel: M, startTime: F, expirationTime: ee, sortIndex: -1 }, F > T ? (M.sortIndex = F, t(d, M), n(c) === null && M === n(d) && (_ ? (f(C), C = -1) : _ = !0, U(g, F - T))) : (M.sortIndex = ee, t(c, M), y || k || (y = !0, N(E))), M;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(M) {
    var L = w;
    return function() {
      var F = w;
      w = L;
      try {
        return M.apply(this, arguments);
      } finally {
        w = F;
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
var Cf = p, st = Nf;
function O(e) {
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
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bs = Object.prototype.hasOwnProperty, bf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ko = {}, Go = {};
function Mf(e) {
  return Bs.call(Go, e) ? !0 : Bs.call(Ko, e) ? !1 : bf.test(e) ? Go[e] = !0 : (Ko[e] = !0, !1);
}
function If(e, t, n, r) {
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
  if (t === null || typeof t > "u" || If(e, t, n, r)) return !0;
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
function He(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ha = /[\-:]([a-z])/g;
function Ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ha,
    Ka
  );
  ze[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ha, Ka);
  ze[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ha, Ka);
  ze[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ga(e, t, n, r) {
  var s = ze.hasOwnProperty(t) ? ze[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tf(t, n, s, r) && (n = null), r || s === null ? Mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xr = Symbol.for("react.element"), Mn = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), qa = Symbol.for("react.strict_mode"), Hs = Symbol.for("react.profiler"), vc = Symbol.for("react.provider"), wc = Symbol.for("react.context"), Ya = Symbol.for("react.forward_ref"), Ks = Symbol.for("react.suspense"), Gs = Symbol.for("react.suspense_list"), Xa = Symbol.for("react.memo"), Qt = Symbol.for("react.lazy"), xc = Symbol.for("react.offscreen"), qo = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object" ? null : (e = qo && e[qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, ws;
function fr(e) {
  if (ws === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ws = t && t[1] || "";
  }
  return `
` + ws + e;
}
var xs = !1;
function _s(e, t) {
  if (!e || xs) return "";
  xs = !0;
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
    xs = !1, Error.prepareStackTrace = n;
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
      return e = _s(e.type, !1), e;
    case 11:
      return e = _s(e.type.render, !1), e;
    case 1:
      return e = _s(e.type, !0), e;
    default:
      return "";
  }
}
function qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Mn:
      return "Portal";
    case Hs:
      return "Profiler";
    case qa:
      return "StrictMode";
    case Ks:
      return "Suspense";
    case Gs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wc:
      return (e.displayName || "Context") + ".Consumer";
    case vc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ya:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Xa:
      return t = e.displayName || null, t !== null ? t : qs(e.type) || "Memo";
    case Qt:
      t = e._payload, e = e._init;
      try {
        return qs(e(t));
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
      return qs(t);
    case 8:
      return t === qa ? "StrictMode" : "Mode";
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
function Ys(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sc(e, t) {
  t = t.checked, t != null && Ga(e, "checked", t, !1);
}
function Xs(e, t) {
  Sc(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Js(e, t.type, n) : t.hasOwnProperty("defaultValue") && Js(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Js(e, t, n) {
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
function Zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(O(93));
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
function ea(e, t) {
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
function ta(e, t) {
  if (t) {
    if (Af[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function na(e, t) {
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
var ra = null;
function Ja(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var la = null, Un = null, Vn = null;
function ei(e) {
  if (e = Kr(e)) {
    if (typeof la != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = rs(t), la(e.stateNode, e.type, t));
  }
}
function Mc(e) {
  Un ? Vn ? Vn.push(e) : Vn = [e] : Un = e;
}
function Ic() {
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
var ks = !1;
function Dc(e, t, n) {
  if (ks) return e(t, n);
  ks = !0;
  try {
    return Tc(e, t, n);
  } finally {
    ks = !1, (Un !== null || Vn !== null) && (Lc(), Ic());
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var sa = !1;
if (zt) try {
  var sr = {};
  Object.defineProperty(sr, "passive", { get: function() {
    sa = !0;
  } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
} catch {
  sa = !1;
}
function zf(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var yr = !1, Ml = null, Il = !1, aa = null, Of = { onError: function(e) {
  yr = !0, Ml = e;
} };
function Ff(e, t, n, r, s, a, o, i, c) {
  yr = !1, Ml = null, zf.apply(Of, arguments);
}
function Wf(e, t, n, r, s, a, o, i, c) {
  if (Ff.apply(this, arguments), yr) {
    if (yr) {
      var d = Ml;
      yr = !1, Ml = null;
    } else throw Error(O(198));
    Il || (Il = !0, aa = d);
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
  if (Nn(e) !== e) throw Error(O(188));
}
function $f(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(O(188));
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
      throw Error(O(188));
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
        if (!o) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
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
var zc = st.unstable_scheduleCallback, ni = st.unstable_cancelCallback, Uf = st.unstable_shouldYield, Vf = st.unstable_requestPaint, be = st.unstable_now, Qf = st.unstable_getCurrentPriorityLevel, Za = st.unstable_ImmediatePriority, Oc = st.unstable_UserBlockingPriority, Tl = st.unstable_NormalPriority, Bf = st.unstable_LowPriority, Fc = st.unstable_IdlePriority, Zl = null, bt = null;
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
function oa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Wc() {
  var e = el;
  return el <<= 1, !(el & 4194240) && (el = 64), e;
}
function Ss(e) {
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
function eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var ue = 0;
function $c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uc, to, Vc, Qc, Bc, ia = !1, nl = [], Xt = null, Jt = null, Zt = null, br = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Ht = [], Zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      Mr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Kr(t), t !== null && to(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
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
      return a = s.pointerId, Mr.set(a, ar(Mr.get(a) || null, e, t, n, r, s)), !0;
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
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ra = r, n.target.dispatchEvent(r), ra = null;
    } else return t = Kr(n), t !== null && to(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function li(e, t, n) {
  yl(e) && n.delete(t);
}
function tp() {
  ia = !1, Xt !== null && yl(Xt) && (Xt = null), Jt !== null && yl(Jt) && (Jt = null), Zt !== null && yl(Zt) && (Zt = null), br.forEach(li), Mr.forEach(li);
}
function or(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ia || (ia = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, tp)));
}
function Ir(e) {
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
  for (Xt !== null && or(Xt, e), Jt !== null && or(Jt, e), Zt !== null && or(Zt, e), br.forEach(t), Mr.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) Hc(n), n.blockedOn === null && Ht.shift();
}
var Qn = $t.ReactCurrentBatchConfig, Dl = !0;
function np(e, t, n, r) {
  var s = ue, a = Qn.transition;
  Qn.transition = null;
  try {
    ue = 1, no(e, t, n, r);
  } finally {
    ue = s, Qn.transition = a;
  }
}
function rp(e, t, n, r) {
  var s = ue, a = Qn.transition;
  Qn.transition = null;
  try {
    ue = 4, no(e, t, n, r);
  } finally {
    ue = s, Qn.transition = a;
  }
}
function no(e, t, n, r) {
  if (Dl) {
    var s = ca(e, t, n, r);
    if (s === null) Ds(e, t, r, Pl, n), ri(e, r);
    else if (ep(s, e, t, n, r)) r.stopPropagation();
    else if (ri(e, r), t & 4 && -1 < Zf.indexOf(e)) {
      for (; s !== null; ) {
        var a = Kr(s);
        if (a !== null && Uc(a), a = ca(e, t, n, r), a === null && Ds(e, t, r, Pl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Ds(e, t, r, null, n);
  }
}
var Pl = null;
function ca(e, t, n, r) {
  if (Pl = null, e = Ja(r), e = pn(e), e !== null) if (t = Nn(e), t === null) e = null;
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
        case Za:
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
var qt = null, ro = null, vl = null;
function Gc() {
  if (vl) return vl;
  var e, t = ro, n = t.length, r, s = "value" in qt ? qt.value : qt.textContent, a = s.length;
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
function ot(e) {
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
}, defaultPrevented: 0, isTrusted: 0 }, lo = ot(nr), Hr = Ee({}, nr, { view: 0, detail: 0 }), lp = ot(Hr), js, Es, ir, es = Ee({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: so, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (js = e.screenX - ir.screenX, Es = e.screenY - ir.screenY) : Es = js = 0, ir = e), js);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Es;
} }), ai = ot(es), sp = Ee({}, es, { dataTransfer: 0 }), ap = ot(sp), op = Ee({}, Hr, { relatedTarget: 0 }), Ns = ot(op), ip = Ee({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cp = ot(ip), dp = Ee({}, nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), up = ot(dp), fp = Ee({}, nr, { data: 0 }), oi = ot(fp), pp = {
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
function so() {
  return gp;
}
var yp = Ee({}, Hr, { key: function(e) {
  if (e.key) {
    var t = pp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: so, charCode: function(e) {
  return e.type === "keypress" ? wl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vp = ot(yp), wp = Ee({}, es, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ii = ot(wp), xp = Ee({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: so }), _p = ot(xp), kp = Ee({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sp = ot(kp), jp = Ee({}, es, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ep = ot(jp), Np = [9, 13, 27, 32], ao = zt && "CompositionEvent" in window, vr = null;
zt && "documentMode" in document && (vr = document.documentMode);
var Cp = zt && "TextEvent" in window && !vr, qc = zt && (!ao || vr && 8 < vr && 11 >= vr), ci = " ", di = !1;
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
function Mp(e, t) {
  if (Tn) return e === "compositionend" || !ao && Yc(e, t) ? (e = Gc(), vl = ro = qt = null, Tn = !1, e) : null;
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
var Ip = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ip[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  Mc(r), t = Rl(t, "onChange"), 0 < t.length && (n = new lo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
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
  var Cs;
  if (zt) {
    var bs = "oninput" in document;
    if (!bs) {
      var fi = document.createElement("div");
      fi.setAttribute("oninput", "return;"), bs = typeof fi.oninput == "function";
    }
    Cs = bs;
  } else Cs = !1;
  Zc = Cs && (!document.documentMode || 9 < document.documentMode);
}
function pi() {
  wr && (wr.detachEvent("onpropertychange", ed), Tr = wr = null);
}
function ed(e) {
  if (e.propertyName === "value" && ts(Tr)) {
    var t = [];
    Jc(t, Tr, e, Ja(e)), Dc(Tp, t);
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
    if (!Bs.call(t, s) || !jt(e[s], t[s])) return !1;
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
function oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Op(e) {
  var t = nd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && td(n.ownerDocument.documentElement, n)) {
    if (r !== null && oo(n)) {
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
var Fp = zt && "documentMode" in document && 11 >= document.documentMode, Ln = null, da = null, xr = null, ua = !1;
function gi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ua || Ln == null || Ln !== bl(r) || (r = Ln, "selectionStart" in r && oo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && Lr(xr, r) || (xr = r, r = Rl(da, "onSelect"), 0 < r.length && (t = new lo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ln)));
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
for (var Is = 0; Is < yi.length; Is++) {
  var Ts = yi[Is], Wp = Ts.toLowerCase(), $p = Ts[0].toUpperCase() + Ts.slice(1);
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
  if (Il) throw e = aa, Il = !1, aa = null, e;
}
function ge(e, t) {
  var n = t[ga];
  n === void 0 && (n = t[ga] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dd(t, e, 2, !1), n.add(r));
}
function Ls(e, t, n) {
  var r = 0;
  t && (r |= 4), dd(n, e, r, t);
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[sl]) {
    e[sl] = !0, yc.forEach(function(n) {
      n !== "selectionchange" && (Up.has(n) || Ls(n, !1, e), Ls(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || (t[sl] = !0, Ls("selectionchange", !1, t));
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
      s = no;
  }
  n = s.bind(null, t, n, e), s = void 0, !sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Ds(e, t, n, r, s) {
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
    var d = a, m = Ja(n), v = [];
    e: {
      var w = id.get(e);
      if (w !== void 0) {
        var k = lo, y = e;
        switch (e) {
          case "keypress":
            if (wl(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = vp;
            break;
          case "focusin":
            y = "focus", k = Ns;
            break;
          case "focusout":
            y = "blur", k = Ns;
            break;
          case "beforeblur":
          case "afterblur":
            k = Ns;
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
            k = ai;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = ap;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = _p;
            break;
          case ld:
          case sd:
          case ad:
            k = cp;
            break;
          case od:
            k = Sp;
            break;
          case "scroll":
            k = lp;
            break;
          case "wheel":
            k = Ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = up;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ii;
        }
        var _ = (t & 4) !== 0, S = !_ && e === "scroll", f = _ ? w !== null ? w + "Capture" : null : w;
        _ = [];
        for (var u = d, h; u !== null; ) {
          h = u;
          var g = h.stateNode;
          if (h.tag === 5 && g !== null && (h = g, f !== null && (g = Cr(u, f), g != null && _.push(Pr(u, g, h)))), S) break;
          u = u.return;
        }
        0 < _.length && (w = new k(w, y, null, n, m), v.push({ event: w, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", w && n !== ra && (y = n.relatedTarget || n.fromElement) && (pn(y) || y[Ot])) break e;
        if ((k || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, k ? (y = n.relatedTarget || n.toElement, k = d, y = y ? pn(y) : null, y !== null && (S = Nn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (k = null, y = d), k !== y)) {
          if (_ = ai, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ii, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), S = k == null ? w : Pn(k), h = y == null ? w : Pn(y), w = new _(g, u + "leave", k, n, m), w.target = S, w.relatedTarget = h, g = null, pn(m) === d && (_ = new _(f, u + "enter", y, n, m), _.target = h, _.relatedTarget = S, g = _), S = g, k && y) t: {
            for (_ = k, f = y, u = 0, h = _; h; h = bn(h)) u++;
            for (h = 0, g = f; g; g = bn(g)) h++;
            for (; 0 < u - h; ) _ = bn(_), u--;
            for (; 0 < h - u; ) f = bn(f), h--;
            for (; u--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = bn(_), f = bn(f);
            }
            _ = null;
          }
          else _ = null;
          k !== null && wi(v, w, k, _, !1), y !== null && S !== null && wi(v, S, y, _, !0);
        }
      }
      e: {
        if (w = d ? Pn(d) : window, k = w.nodeName && w.nodeName.toLowerCase(), k === "select" || k === "input" && w.type === "file") var E = Lp;
        else if (ui(w)) if (Zc) E = Ap;
        else {
          E = Pp;
          var j = Dp;
        }
        else (k = w.nodeName) && k.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (E = Rp);
        if (E && (E = E(e, d))) {
          Jc(v, E, n, m);
          break e;
        }
        j && j(e, w, d), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && Js(w, "number", w.value);
      }
      switch (j = d ? Pn(d) : window, e) {
        case "focusin":
          (ui(j) || j.contentEditable === "true") && (Ln = j, da = d, xr = null);
          break;
        case "focusout":
          xr = da = Ln = null;
          break;
        case "mousedown":
          ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ua = !1, gi(v, n, m);
          break;
        case "selectionchange":
          if (Fp) break;
        case "keydown":
        case "keyup":
          gi(v, n, m);
      }
      var x;
      if (ao) e: {
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
      C && (qc && n.locale !== "ko" && (Tn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Tn && (x = Gc()) : (qt = m, ro = "value" in qt ? qt.value : qt.textContent, Tn = !0)), j = Rl(d, C), 0 < j.length && (C = new oi(C, e, null, n, m), v.push({ event: C, listeners: j }), x ? C.data = x : (x = Xc(n), x !== null && (C.data = x)))), (x = Cp ? bp(e, n) : Mp(e, n)) && (d = Rl(d, "onBeforeInput"), 0 < d.length && (m = new oi("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: d }), m.data = x));
    }
    cd(v, t);
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
  if (t = xi(t), xi(e) !== t && n) throw Error(O(425));
}
function Al() {
}
var fa = null, pa = null;
function ma(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ha = typeof setTimeout == "function" ? setTimeout : void 0, Bp = typeof clearTimeout == "function" ? clearTimeout : void 0, _i = typeof Promise == "function" ? Promise : void 0, Hp = typeof queueMicrotask == "function" ? queueMicrotask : typeof _i < "u" ? function(e) {
  return _i.resolve(null).then(e).catch(Kp);
} : ha;
function Kp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ps(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Ir(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Ir(t);
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
var rr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + rr, Rr = "__reactProps$" + rr, Ot = "__reactContainer$" + rr, ga = "__reactEvents$" + rr, Gp = "__reactListeners$" + rr, qp = "__reactHandles$" + rr;
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
  throw Error(O(33));
}
function rs(e) {
  return e[Rr] || null;
}
var ya = [], Rn = -1;
function cn(e) {
  return { current: e };
}
function ye(e) {
  0 > Rn || (e.current = ya[Rn], ya[Rn] = null, Rn--);
}
function me(e, t) {
  Rn++, ya[Rn] = e.current, e.current = t;
}
var an = {}, Ue = cn(an), Xe = cn(!1), vn = an;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function zl() {
  ye(Xe), ye(Ue);
}
function Si(e, t, n) {
  if (Ue.current !== an) throw Error(O(168));
  me(Ue, t), me(Xe, n);
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(O(108, Df(e) || "Unknown", s));
  return Ee({}, n, r);
}
function Ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, vn = Ue.current, me(Ue, e), me(Xe, Xe.current), !0;
}
function ji(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = ud(e, t, vn), r.__reactInternalMemoizedMergedChildContext = e, ye(Xe), ye(Ue), me(Ue, e)) : ye(Xe), me(Xe, n);
}
var Dt = null, ls = !1, Rs = !1;
function fd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Yp(e) {
  ls = !0, fd(e);
}
function dn() {
  if (!Rs && Dt !== null) {
    Rs = !0;
    var e = 0, t = ue;
    try {
      var n = Dt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, ls = !1;
    } catch (s) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), zc(Za, dn), s;
    } finally {
      ue = t, Rs = !1;
    }
  }
  return null;
}
var An = [], zn = 0, Fl = null, Wl = 0, it = [], ct = 0, wn = null, Pt = 1, Rt = "";
function un(e, t) {
  An[zn++] = Wl, An[zn++] = Fl, Fl = e, Wl = t;
}
function pd(e, t, n) {
  it[ct++] = Pt, it[ct++] = Rt, it[ct++] = wn, wn = e;
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
function io(e) {
  e.return !== null && (un(e, 1), pd(e, 1, 0));
}
function co(e) {
  for (; e === Fl; ) Fl = An[--zn], An[zn] = null, Wl = An[--zn], An[zn] = null;
  for (; e === wn; ) wn = it[--ct], it[ct] = null, Rt = it[--ct], it[ct] = null, Pt = it[--ct], it[ct] = null;
}
var lt = null, rt = null, we = !1, xt = null;
function md(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ei(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wa(e) {
  if (we) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Ei(e, t)) {
        if (va(e)) throw Error(O(418));
        t = en(n.nextSibling);
        var r = lt;
        t && Ei(e, t) ? md(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, lt = e);
      }
    } else {
      if (va(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, we = !1, lt = e;
    }
  }
}
function Ni(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function ol(e) {
  if (e !== lt) return !1;
  if (!we) return Ni(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps)), t && (t = rt)) {
    if (va(e)) throw hd(), Error(O(418));
    for (; t; ) md(e, t), t = en(t.nextSibling);
  }
  if (Ni(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function hd() {
  for (var e = rt; e; ) e = en(e.nextSibling);
}
function qn() {
  rt = lt = null, we = !1;
}
function uo(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Xp = $t.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ci(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
  function t(f, u) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [u], f.flags |= 16) : h.push(u);
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
  function a(f, u, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < u ? (f.flags |= 2, u) : h) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, h, g) {
    return u === null || u.tag !== 6 ? (u = Us(h, f.mode, g), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function c(f, u, h, g) {
    var E = h.type;
    return E === In ? m(f, u, h.props.children, g, h.key) : u !== null && (u.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Qt && Ci(E) === u.type) ? (g = s(u, h.props), g.ref = cr(f, u, h), g.return = f, g) : (g = Nl(h.type, h.key, h.props, null, f.mode, g), g.ref = cr(f, u, h), g.return = f, g);
  }
  function d(f, u, h, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== h.containerInfo || u.stateNode.implementation !== h.implementation ? (u = Vs(h, f.mode, g), u.return = f, u) : (u = s(u, h.children || []), u.return = f, u);
  }
  function m(f, u, h, g, E) {
    return u === null || u.tag !== 7 ? (u = yn(h, f.mode, g, E), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function v(f, u, h) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = Us("" + u, f.mode, h), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Xr:
          return h = Nl(u.type, u.key, u.props, null, f.mode, h), h.ref = cr(f, null, u), h.return = f, h;
        case Mn:
          return u = Vs(u, f.mode, h), u.return = f, u;
        case Qt:
          var g = u._init;
          return v(f, g(u._payload), h);
      }
      if (pr(u) || lr(u)) return u = yn(u, f.mode, h, null), u.return = f, u;
      il(f, u);
    }
    return null;
  }
  function w(f, u, h, g) {
    var E = u !== null ? u.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : i(f, u, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xr:
          return h.key === E ? c(f, u, h, g) : null;
        case Mn:
          return h.key === E ? d(f, u, h, g) : null;
        case Qt:
          return E = h._init, w(
            f,
            u,
            E(h._payload),
            g
          );
      }
      if (pr(h) || lr(h)) return E !== null ? null : m(f, u, h, g, null);
      il(f, h);
    }
    return null;
  }
  function k(f, u, h, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(h) || null, i(u, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Xr:
          return f = f.get(g.key === null ? h : g.key) || null, c(u, f, g, E);
        case Mn:
          return f = f.get(g.key === null ? h : g.key) || null, d(u, f, g, E);
        case Qt:
          var j = g._init;
          return k(f, u, h, j(g._payload), E);
      }
      if (pr(g) || lr(g)) return f = f.get(h) || null, m(u, f, g, E, null);
      il(u, g);
    }
    return null;
  }
  function y(f, u, h, g) {
    for (var E = null, j = null, x = u, C = u = 0, z = null; x !== null && C < h.length; C++) {
      x.index > C ? (z = x, x = null) : z = x.sibling;
      var b = w(f, x, h[C], g);
      if (b === null) {
        x === null && (x = z);
        break;
      }
      e && x && b.alternate === null && t(f, x), u = a(b, u, C), j === null ? E = b : j.sibling = b, j = b, x = z;
    }
    if (C === h.length) return n(f, x), we && un(f, C), E;
    if (x === null) {
      for (; C < h.length; C++) x = v(f, h[C], g), x !== null && (u = a(x, u, C), j === null ? E = x : j.sibling = x, j = x);
      return we && un(f, C), E;
    }
    for (x = r(f, x); C < h.length; C++) z = k(x, f, C, h[C], g), z !== null && (e && z.alternate !== null && x.delete(z.key === null ? C : z.key), u = a(z, u, C), j === null ? E = z : j.sibling = z, j = z);
    return e && x.forEach(function(R) {
      return t(f, R);
    }), we && un(f, C), E;
  }
  function _(f, u, h, g) {
    var E = lr(h);
    if (typeof E != "function") throw Error(O(150));
    if (h = E.call(h), h == null) throw Error(O(151));
    for (var j = E = null, x = u, C = u = 0, z = null, b = h.next(); x !== null && !b.done; C++, b = h.next()) {
      x.index > C ? (z = x, x = null) : z = x.sibling;
      var R = w(f, x, b.value, g);
      if (R === null) {
        x === null && (x = z);
        break;
      }
      e && x && R.alternate === null && t(f, x), u = a(R, u, C), j === null ? E = R : j.sibling = R, j = R, x = z;
    }
    if (b.done) return n(
      f,
      x
    ), we && un(f, C), E;
    if (x === null) {
      for (; !b.done; C++, b = h.next()) b = v(f, b.value, g), b !== null && (u = a(b, u, C), j === null ? E = b : j.sibling = b, j = b);
      return we && un(f, C), E;
    }
    for (x = r(f, x); !b.done; C++, b = h.next()) b = k(x, f, C, b.value, g), b !== null && (e && b.alternate !== null && x.delete(b.key === null ? C : b.key), u = a(b, u, C), j === null ? E = b : j.sibling = b, j = b);
    return e && x.forEach(function($) {
      return t(f, $);
    }), we && un(f, C), E;
  }
  function S(f, u, h, g) {
    if (typeof h == "object" && h !== null && h.type === In && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xr:
          e: {
            for (var E = h.key, j = u; j !== null; ) {
              if (j.key === E) {
                if (E = h.type, E === In) {
                  if (j.tag === 7) {
                    n(f, j.sibling), u = s(j, h.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (j.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Qt && Ci(E) === j.type) {
                  n(f, j.sibling), u = s(j, h.props), u.ref = cr(f, j, h), u.return = f, f = u;
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            h.type === In ? (u = yn(h.props.children, f.mode, g, h.key), u.return = f, f = u) : (g = Nl(h.type, h.key, h.props, null, f.mode, g), g.ref = cr(f, u, h), g.return = f, f = g);
          }
          return o(f);
        case Mn:
          e: {
            for (j = h.key; u !== null; ) {
              if (u.key === j) if (u.tag === 4 && u.stateNode.containerInfo === h.containerInfo && u.stateNode.implementation === h.implementation) {
                n(f, u.sibling), u = s(u, h.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = Vs(h, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case Qt:
          return j = h._init, S(f, u, j(h._payload), g);
      }
      if (pr(h)) return y(f, u, h, g);
      if (lr(h)) return _(f, u, h, g);
      il(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, u !== null && u.tag === 6 ? (n(f, u.sibling), u = s(u, h), u.return = f, f = u) : (n(f, u), u = Us(h, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return S;
}
var Yn = gd(!0), yd = gd(!1), $l = cn(null), Ul = null, On = null, fo = null;
function po() {
  fo = On = Ul = null;
}
function mo(e) {
  var t = $l.current;
  ye($l), e._currentValue = t;
}
function xa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  Ul = e, fo = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (fo !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (Ul === null) throw Error(O(308));
    On = e, Ul.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var mn = null;
function ho(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function vd(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, ho(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function go(e) {
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
  return s = r.interleaved, s === null ? (t.next = t, ho(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ft(e, n);
}
function xl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
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
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var w = i.lane, k = i.eventTime;
      if ((r & w) === w) {
        m !== null && (m = m.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var y = e, _ = i;
          switch (w = t, k = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                v = y.call(k, v, w);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, w = typeof y == "function" ? y.call(k, v, w) : y, w == null) break e;
              v = Ee({}, v, w);
              break e;
            case 2:
              Bt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else k = { eventTime: k, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = k, c = v) : m = m.next = k, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = m, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    _n |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Mi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(O(191, s));
      s.call(r);
    }
  }
}
var Gr = {}, Mt = cn(Gr), Ar = cn(Gr), zr = cn(Gr);
function hn(e) {
  if (e === Gr) throw Error(O(174));
  return e;
}
function yo(e, t) {
  switch (me(zr, t), me(Ar, e), me(Mt, Gr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ea(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ea(t, e);
  }
  ye(Mt), me(Mt, t);
}
function Xn() {
  ye(Mt), ye(Ar), ye(zr);
}
function xd(e) {
  hn(zr.current);
  var t = hn(Mt.current), n = ea(t, e.type);
  t !== n && (me(Ar, e), me(Mt, n));
}
function vo(e) {
  Ar.current === e && (ye(Mt), ye(Ar));
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
var As = [];
function wo() {
  for (var e = 0; e < As.length; e++) As[e]._workInProgressVersionPrimary = null;
  As.length = 0;
}
var _l = $t.ReactCurrentDispatcher, zs = $t.ReactCurrentBatchConfig, xn = 0, je = null, Te = null, De = null, Bl = !1, _r = !1, Or = 0, Jp = 0;
function Fe() {
  throw Error(O(321));
}
function xo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function _o(e, t, n, r, s, a) {
  if (xn = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _l.current = e === null || e.memoizedState === null ? nm : rm, e = n(r, s), _r) {
    a = 0;
    do {
      if (_r = !1, Or = 0, 25 <= a) throw Error(O(301));
      a += 1, De = Te = null, t.updateQueue = null, _l.current = lm, e = n(r, s);
    } while (_r);
  }
  if (_l.current = Hl, t = Te !== null && Te.next !== null, xn = 0, De = Te = je = null, Bl = !1, t) throw Error(O(300));
  return e;
}
function ko() {
  var e = Or !== 0;
  return Or = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? je.memoizedState = De = e : De = De.next = e, De;
}
function mt() {
  if (Te === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = De === null ? je.memoizedState : De.next;
  if (t !== null) De = t, Te = e;
  else {
    if (e === null) throw Error(O(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, De === null ? je.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Os(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Te, s = r.baseQueue, a = n.pending;
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
      var m = d.lane;
      if ((xn & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, je.lanes |= m, _n |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, je.lanes |= a, _n |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fs(e) {
  var t = mt(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    jt(a, t.memoizedState) || (Ye = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function _d() {
}
function kd(e, t) {
  var n = je, r = mt(), s = t(), a = !jt(r.memoizedState, s);
  if (a && (r.memoizedState = s, Ye = !0), r = r.queue, So(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, Wr(9, jd.bind(null, n, r, s, t), void 0, null), Pe === null) throw Error(O(349));
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
function Ii(e) {
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
  if (Te !== null) {
    var o = Te.memoizedState;
    if (a = o.destroy, r !== null && xo(r, o.deps)) {
      s.memoizedState = Wr(t, n, a, r);
      return;
    }
  }
  je.flags |= e, s.memoizedState = Wr(1 | t, n, a, r);
}
function Ti(e, t) {
  return kl(8390656, 8, e, t);
}
function So(e, t) {
  return ss(2048, 8, e, t);
}
function Md(e, t) {
  return ss(4, 2, e, t);
}
function Id(e, t) {
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
function jo() {
}
function Dd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Rd(e, t, n) {
  return xn & 21 ? (jt(n, t) || (n = Wc(), je.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function Zp(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = zs.transition;
  zs.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, zs.transition = r;
  }
}
function Ad() {
  return mt().memoizedState;
}
function em(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zd(e)) Od(t, n);
  else if (n = vd(e, t, n, r), n !== null) {
    var s = Qe();
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
        c === null ? (s.next = s, ho(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = vd(e, t, s, r), n !== null && (s = Qe(), St(n, e, r, s), Fd(n, t, r));
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
    r &= e.pendingLanes, n |= r, t.lanes = n, eo(e, n);
  }
}
var Hl = { readContext: pt, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, nm = { readContext: pt, useCallback: function(e, t) {
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
}, useState: Ii, useDebugValue: jo, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = Ii(!1), t = e[0];
  return e = Zp.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, s = Nt();
  if (we) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(O(349));
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
  var e = Nt(), t = Pe.identifierPrefix;
  if (we) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Jp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, rm = {
  readContext: pt,
  useCallback: Dd,
  useContext: pt,
  useEffect: So,
  useImperativeHandle: Ld,
  useInsertionEffect: Md,
  useLayoutEffect: Id,
  useMemo: Pd,
  useReducer: Os,
  useRef: bd,
  useState: function() {
    return Os(Fr);
  },
  useDebugValue: jo,
  useDeferredValue: function(e) {
    var t = mt();
    return Rd(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = Os(Fr)[0], t = mt().memoizedState;
    return [e, t];
  },
  useMutableSource: _d,
  useSyncExternalStore: kd,
  useId: Ad,
  unstable_isNewReconciler: !1
}, lm = { readContext: pt, useCallback: Dd, useContext: pt, useEffect: So, useImperativeHandle: Ld, useInsertionEffect: Md, useLayoutEffect: Id, useMemo: Pd, useReducer: Fs, useRef: bd, useState: function() {
  return Fs(Fr);
}, useDebugValue: jo, useDeferredValue: function(e) {
  var t = mt();
  return Te === null ? t.memoizedState = e : Rd(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = Fs(Fr)[0], t = mt().memoizedState;
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
function _a(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var as = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), s = rn(e), a = At(r, s);
  a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (St(t, e, s, r), xl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), s = rn(e), a = At(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (St(t, e, s, r), xl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = rn(e), s = At(n, r);
  s.tag = 2, t != null && (s.callback = t), t = tn(e, s, r), t !== null && (St(t, e, r, n), xl(t, e, r));
} };
function Li(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(s, a) : !0;
}
function Wd(e, t, n) {
  var r = !1, s = an, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (s = Je(t) ? vn : Ue.current, r = t.contextTypes, a = (r = r != null) ? Gn(e, s) : an), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = as, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Di(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && as.enqueueReplaceState(t, t.state, null);
}
function ka(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, go(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = pt(a) : (a = Je(t) ? vn : Ue.current, s.context = Gn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (_a(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && as.enqueueReplaceState(s, s.state, null), Vl(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
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
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sa(e, t) {
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
    Gl || (Gl = !0, Da = r), Sa(e, t);
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
      Sa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Sa(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
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
var am = $t.ReactCurrentOwner, Ye = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? yd(t, null, n, r) : Yn(t, e.child, n, r);
}
function zi(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Bn(t, s), r = _o(e, t, n, r, a, s), n = ko(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (we && n && io(t), t.flags |= 1, Ve(e, t, r, s), t.child);
}
function Oi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Lo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Vd(e, t, a, r, s)) : (e = Nl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
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
    if (Lr(a, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, Wt(e, t, s);
  }
  return ja(e, t, n, r, s);
}
function Qd(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(Wn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(Wn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, me(Wn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, me(Wn, nt), nt |= r;
  return Ve(e, t, s, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ja(e, t, n, r, s) {
  var a = Je(n) ? vn : Ue.current;
  return a = Gn(t, a), Bn(t, s), n = _o(e, t, n, r, a, s), r = ko(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (we && r && io(t), t.flags |= 1, Ve(e, t, n, s), t.child);
}
function Fi(e, t, n, r, s) {
  if (Je(n)) {
    var a = !0;
    Ol(t);
  } else a = !1;
  if (Bn(t, s), t.stateNode === null) Sl(e, t), Wd(t, n, r), ka(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Je(n) ? vn : Ue.current, d = Gn(t, d));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Di(t, o, r, d), Bt = !1;
    var w = t.memoizedState;
    o.state = w, Vl(t, r, o, s), c = t.memoizedState, i !== r || w !== c || Xe.current || Bt ? (typeof m == "function" && (_a(t, n, m, r), c = t.memoizedState), (i = Bt || Li(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, wd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Je(n) ? vn : Ue.current, c = Gn(t, c));
    var k = n.getDerivedStateFromProps;
    (m = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && Di(t, o, r, c), Bt = !1, w = t.memoizedState, o.state = w, Vl(t, r, o, s);
    var y = t.memoizedState;
    i !== v || w !== y || Xe.current || Bt ? (typeof k == "function" && (_a(t, n, k, r), y = t.memoizedState), (d = Bt || Li(t, n, d, r, w, y, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ea(e, t, n, r, a, s);
}
function Ea(e, t, n, r, s, a) {
  Bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && ji(t, n, !1), Wt(e, t, a);
  r = t.stateNode, am.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Yn(t, e.child, null, a), t.child = Yn(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, s && ji(t, n, !0), t.child;
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext ? Si(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Si(e, t.context, !1), yo(e, t.containerInfo);
}
function Wi(e, t, n, r, s) {
  return qn(), uo(s), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ca(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kd(e, t, n) {
  var r = t.pendingProps, s = Se.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), me(Se, s & 1), e === null)
    return wa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = cs(o, r, 0, null), e = yn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ca(n), t.memoizedState = Na, e) : Eo(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return om(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = ln(i, a) : (a = yn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ca(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Na, r;
  }
  return a = e.child, e = a.sibling, r = ln(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Eo(e, t) {
  return t = cs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function cl(e, t, n, r) {
  return r !== null && uo(r), Yn(t, e.child, null, n), e = Eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function om(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ws(Error(O(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = cs({ mode: "visible", children: r.children }, s, 0, null), a = yn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Yn(t, e.child, null, o), t.child.memoizedState = Ca(o), t.memoizedState = Na, a);
  if (!(t.mode & 1)) return cl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(O(419)), r = Ws(a, r, void 0), cl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ye || i) {
    if (r = Pe, r !== null) {
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
    return To(), r = Ws(Error(O(421))), cl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xm.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, rt = en(s.nextSibling), lt = t, we = !0, xt = null, e !== null && (it[ct++] = Pt, it[ct++] = Rt, it[ct++] = wn, Pt = e.id, Rt = e.overflow, wn = t), t = Eo(t, r.children), t.flags |= 4096, t);
}
function $i(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xa(e.return, t, n);
}
function $s(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Gd(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (me(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Ql(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), $s(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Ql(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      $s(t, !0, n, null, a);
      break;
    case "together":
      $s(t, !1, null, null, void 0);
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
  if (e !== null && t.child !== e.child) throw Error(O(153));
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
      Je(t.type) && Ol(t);
      break;
    case 4:
      yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      me($l, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kd(e, t, n) : (me(Se, Se.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      me(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Gd(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), me(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Qd(e, t, n);
  }
  return Wt(e, t, n);
}
var qd, ba, Yd, Xd;
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
ba = function() {
};
Yd = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, hn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        s = Ys(e, s), r = Ys(e, r), a = [];
        break;
      case "select":
        s = Ee({}, s, { value: void 0 }), r = Ee({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = Zs(e, s), r = Zs(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Al);
    }
    ta(n, r);
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
function cm(e, t, n) {
  var r = t.pendingProps;
  switch (co(t), t.tag) {
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
      return Je(t.type) && zl(), We(t), null;
    case 3:
      return r = t.stateNode, Xn(), ye(Xe), ye(Ue), wo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (Aa(xt), xt = null))), ba(e, t), We(t), null;
    case 5:
      vo(t);
      var s = hn(zr.current);
      if (n = t.type, e !== null && t.stateNode != null) Yd(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return We(t), null;
        }
        if (e = hn(Mt.current), ol(t)) {
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
          ta(n, a), s = null;
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
            switch (o = na(n, r), n) {
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
                Yo(e, r), s = Ys(e, r), ge("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ee({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                Jo(e, r), s = Zs(e, r), ge("invalid", e);
                break;
              default:
                s = r;
            }
            ta(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? bc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Nc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Nr(e, c) : typeof c == "number" && Nr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Er.hasOwnProperty(a) ? c != null && a === "onScroll" && ge("scroll", e) : c != null && Ga(e, a, c, o));
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
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = hn(zr.current), hn(Mt.current), ol(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              al(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && al(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return We(t), null;
    case 13:
      if (ye(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && rt !== null && t.mode & 1 && !(t.flags & 128)) hd(), qn(), t.flags |= 98560, a = !1;
        else if (a = ol(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(O(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(O(317));
            a[Ct] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          We(t), a = !1;
        } else xt !== null && (Aa(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Le === 0 && (Le = 3) : To())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
    case 4:
      return Xn(), ba(e, t), e === null && Dr(t.stateNode.containerInfo), We(t), null;
    case 10:
      return mo(t.type._context), We(t), null;
    case 17:
      return Je(t.type) && zl(), We(t), null;
    case 19:
      if (ye(Se), a = t.memoizedState, a === null) return We(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) dr(a, !1);
      else {
        if (Le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Ql(e), o !== null) {
            for (t.flags |= 128, dr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && be() > Zn && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ql(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !we) return We(t), null;
        } else 2 * be() - a.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = be(), t.sibling = null, n = Se.current, me(Se, r ? n & 1 | 2 : n & 1), t) : (We(t), null);
    case 22:
    case 23:
      return Io(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function dm(e, t) {
  switch (co(t), t.tag) {
    case 1:
      return Je(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), ye(Xe), ye(Ue), wo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vo(t), null;
    case 13:
      if (ye(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(Se), null;
    case 4:
      return Xn(), null;
    case 10:
      return mo(t.type._context), null;
    case 22:
    case 23:
      return Io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1, $e = !1, um = typeof WeakSet == "function" ? WeakSet : Set, B = null;
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
  if (fa = Dl, e = nd(), oo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, m = 0, v = e, w = null;
        t: for (; ; ) {
          for (var k; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            w = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === s && (i = o), w === a && ++m === r && (c = o), (k = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = k;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pa = { focusedElem: e, selectionRange: n }, Dl = !1, B = t; B !== null; ) if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
  else for (; B !== null; ) {
    t = B;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var _ = y.memoizedProps, S = y.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : vt(t.type, _), S);
            f.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(O(163));
      }
    } catch (g) {
      Ne(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, B = e;
      break;
    }
    B = t.return;
  }
  return y = Ui, Ui = !1, y;
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
function Ia(e) {
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
  t !== null && (e.alternate = null, Jd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Rr], delete t[ga], delete t[Gp], delete t[qp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function Ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Al));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ta(e, t, n), e = e.sibling; e !== null; ) Ta(e, t, n), e = e.sibling;
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), e = e.sibling;
}
var Re = null, wt = !1;
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
      $e || Fn(n, t);
    case 6:
      var r = Re, s = wt;
      Re = null, Vt(e, t, n), Re = r, wt = s, Re !== null && (wt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (wt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Ps(e.parentNode, n) : e.nodeType === 1 && Ps(e, n), Ir(e)) : Ps(Re, n.stateNode));
      break;
    case 4:
      r = Re, s = wt, Re = n.stateNode.containerInfo, wt = !0, Vt(e, t, n), Re = r, wt = s;
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
      Vt(e, t, n);
      break;
    case 1:
      if (!$e && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null, Vt(e, t, n), $e = r) : Vt(e, t, n);
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
            Re = i.stateNode, wt = !1;
            break e;
          case 3:
            Re = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Re = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Re === null) throw Error(O(160));
      eu(a, o, s), Re = null, wt = !1;
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
          i === "input" && a.type === "radio" && a.name != null && Sc(s, a), na(i, o);
          var d = na(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], v = c[o + 1];
            m === "style" ? bc(s, v) : m === "dangerouslySetInnerHTML" ? Nc(s, v) : m === "children" ? Nr(s, v) : Ga(s, m, v, d);
          }
          switch (i) {
            case "input":
              Xs(s, a);
              break;
            case "textarea":
              jc(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var k = a.value;
              k != null ? $n(s, !!a.multiple, k, !1) : w !== !!a.multiple && (a.defaultValue != null ? $n(
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
        if (e.stateNode === null) throw Error(O(162));
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
        Ir(t.containerInfo);
      } catch (_) {
        Ne(e, e.return, _);
      }
      break;
    case 4:
      gt(t, e), Et(e);
      break;
    case 13:
      gt(t, e), Et(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (bo = be())), r & 4 && Qi(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (d = $e) || m, gt(t, e), $e = d) : gt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (B = e, m = e.child; m !== null; ) {
          for (v = B = m; B !== null; ) {
            switch (w = B, k = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                kr(4, w, w.return);
                break;
              case 1:
                Fn(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
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
                  Hi(v);
                  continue;
                }
            }
            k !== null ? (k.return = w, B = k) : Hi(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Cc("display", o));
              } catch (_) {
                Ne(e, e.return, _);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (_) {
              Ne(e, e.return, _);
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
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Nr(s, ""), r.flags &= -33);
          var a = Vi(e);
          La(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Vi(e);
          Ta(e, i, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (c) {
      Ne(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  B = e, nu(e);
}
function nu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var s = B, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || dl;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || $e;
        i = dl;
        var d = $e;
        if (dl = o, ($e = c) && !d) for (B = s; B !== null; ) o = B, c = o.child, o.tag === 22 && o.memoizedState !== null ? Ki(s) : c !== null ? (c.return = o, B = c) : Ki(s);
        for (; a !== null; ) B = a, nu(a), a = a.sibling;
        B = s, dl = i, $e = d;
      }
      Bi(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, B = a) : Bi(e);
  }
}
function Bi(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $e || os(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$e) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Mi(t, a, r);
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
              Mi(t, o, n);
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
                  v !== null && Ir(v);
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
            throw Error(O(163));
        }
        $e || t.flags & 512 && Ia(t);
      } catch (w) {
        Ne(t, t.return, w);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function Hi(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function Ki(e) {
  for (; B !== null; ) {
    var t = B;
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
            Ia(t);
          } catch (c) {
            Ne(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ia(t);
          } catch (c) {
            Ne(t, o, c);
          }
      }
    } catch (c) {
      Ne(t, t.return, c);
    }
    if (t === e) {
      B = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, B = i;
      break;
    }
    B = t.return;
  }
}
var mm = Math.ceil, Kl = $t.ReactCurrentDispatcher, No = $t.ReactCurrentOwner, ft = $t.ReactCurrentBatchConfig, ie = 0, Pe = null, Me = null, Ae = 0, nt = 0, Wn = cn(0), Le = 0, $r = null, _n = 0, is = 0, Co = 0, Sr = null, qe = null, bo = 0, Zn = 1 / 0, Lt = null, Gl = !1, Da = null, nn = null, ul = !1, Yt = null, ql = 0, jr = 0, Pa = null, jl = -1, El = 0;
function Qe() {
  return ie & 6 ? be() : jl !== -1 ? jl : jl = be();
}
function rn(e) {
  return e.mode & 1 ? ie & 2 && Ae !== 0 ? Ae & -Ae : Xp.transition !== null ? (El === 0 && (El = Wc()), El) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kc(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < jr) throw jr = 0, Pa = null, Error(O(185));
  Br(e, n, r), (!(ie & 2) || e !== Pe) && (e === Pe && (!(ie & 2) && (is |= n), Le === 4 && Kt(e, Ae)), Ze(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Zn = be() + 500, ls && dn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Xf(e, t);
  var r = Ll(e, e === Pe ? Ae : 0);
  if (r === 0) n !== null && ni(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ni(n), t === 1) e.tag === 0 ? Yp(Gi.bind(null, e)) : fd(Gi.bind(null, e)), Hp(function() {
      !(ie & 6) && dn();
    }), n = null;
    else {
      switch ($c(r)) {
        case 1:
          n = Za;
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
  if (jl = -1, El = 0, ie & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ll(e, e === Pe ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yl(e, r);
  else {
    t = r;
    var s = ie;
    ie |= 2;
    var a = su();
    (Pe !== e || Ae !== t) && (Lt = null, Zn = be() + 500, gn(e, t));
    do
      try {
        ym();
        break;
      } catch (i) {
        lu(e, i);
      }
    while (!0);
    po(), Kl.current = a, ie = s, Me !== null ? t = 0 : (Pe = null, Ae = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (s = oa(e), s !== 0 && (r = s, t = Ra(e, s))), t === 1) throw n = $r, gn(e, 0), Kt(e, r), Ze(e, be()), n;
    if (t === 6) Kt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !hm(s) && (t = Yl(e, r), t === 2 && (a = oa(e), a !== 0 && (r = a, t = Ra(e, a))), t === 1)) throw n = $r, gn(e, 0), Kt(e, r), Ze(e, be()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          fn(e, qe, Lt);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = bo + 500 - be(), 10 < t)) {
            if (Ll(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = ha(fn.bind(null, e, qe, Lt), t);
            break;
          }
          fn(e, qe, Lt);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ha(fn.bind(null, e, qe, Lt), r);
            break;
          }
          fn(e, qe, Lt);
          break;
        case 5:
          fn(e, qe, Lt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ze(e, be()), e.callbackNode === n ? ru.bind(null, e) : null;
}
function Ra(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), e = Yl(e, t), e !== 2 && (t = qe, qe = n, t !== null && Aa(t)), e;
}
function Aa(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
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
  for (t &= ~Co, t &= ~is, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Gi(e) {
  if (ie & 6) throw Error(O(327));
  Hn();
  var t = Ll(e, 0);
  if (!(t & 1)) return Ze(e, be()), null;
  var n = Yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oa(e);
    r !== 0 && (t = r, n = Ra(e, r));
  }
  if (n === 1) throw n = $r, gn(e, 0), Kt(e, t), Ze(e, be()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, qe, Lt), Ze(e, be()), null;
}
function Mo(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Zn = be() + 500, ls && dn());
  }
}
function kn(e) {
  Yt !== null && Yt.tag === 0 && !(ie & 6) && Hn();
  var t = ie;
  ie |= 1;
  var n = ft.transition, r = ue;
  try {
    if (ft.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, ft.transition = n, ie = t, !(ie & 6) && dn();
  }
}
function Io() {
  nt = Wn.current, ye(Wn);
}
function gn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bp(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (co(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && zl();
        break;
      case 3:
        Xn(), ye(Xe), ye(Ue), wo();
        break;
      case 5:
        vo(r);
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
        mo(r.type._context);
        break;
      case 22:
      case 23:
        Io();
    }
    n = n.return;
  }
  if (Pe = e, Me = e = ln(e.current, null), Ae = nt = t, Le = 0, $r = null, Co = is = _n = 0, qe = Sr = null, mn !== null) {
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
      if (po(), _l.current = Hl, Bl) {
        for (var r = je.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        Bl = !1;
      }
      if (xn = 0, De = Te = je = null, _r = !1, Or = 0, No.current = null, n === null || n.return === null) {
        Le = 1, $r = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Ae, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = m.alternate;
            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var k = Ri(o);
          if (k !== null) {
            k.flags &= -257, Ai(k, o, i, a, t), k.mode & 1 && Pi(a, d, t), t = k, c = d;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Pi(a, d, t), To();
              break e;
            }
            c = Error(O(426));
          }
        } else if (we && i.mode & 1) {
          var S = Ri(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Ai(S, o, i, a, t), uo(Jn(c, i));
            break e;
          }
        }
        a = c = Jn(c, i), Le !== 4 && (Le = 2), Sr === null ? Sr = [a] : Sr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = $d(a, c, t);
              bi(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, h = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (nn === null || !nn.has(h)))) {
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
    } catch (E) {
      t = E, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function su() {
  var e = Kl.current;
  return Kl.current = Hl, e === null ? Hl : e;
}
function To() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Pe === null || !(_n & 268435455) && !(is & 268435455) || Kt(Pe, Ae);
}
function Yl(e, t) {
  var n = ie;
  ie |= 2;
  var r = su();
  (Pe !== e || Ae !== t) && (Lt = null, gn(e, t));
  do
    try {
      gm();
      break;
    } catch (s) {
      lu(e, s);
    }
  while (!0);
  if (po(), ie = n, Kl.current = r, Me !== null) throw Error(O(261));
  return Pe = null, Ae = 0, Le;
}
function gm() {
  for (; Me !== null; ) au(Me);
}
function ym() {
  for (; Me !== null && !Uf(); ) au(Me);
}
function au(e) {
  var t = cu(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? ou(e) : Me = t, No.current = null;
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
        Le = 6, Me = null;
        return;
      }
    } else if (n = cm(n, t, nt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function fn(e, t, n) {
  var r = ue, s = ft.transition;
  try {
    ft.transition = null, ue = 1, vm(e, t, n, r);
  } finally {
    ft.transition = s, ue = r;
  }
  return null;
}
function vm(e, t, n, r) {
  do
    Hn();
  while (Yt !== null);
  if (ie & 6) throw Error(O(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Jf(e, a), e === Pe && (Me = Pe = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ul || (ul = !0, du(Tl, function() {
    return Hn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = ue;
    ue = 1;
    var i = ie;
    ie |= 4, No.current = null, fm(e, n), tu(n, e), Op(pa), Dl = !!fa, pa = fa = null, e.current = n, pm(n), Vf(), ie = i, ue = o, ft.transition = a;
  } else e.current = n;
  if (ul && (ul = !1, Yt = e, ql = s), a = e.pendingLanes, a === 0 && (nn = null), Hf(n.stateNode), Ze(e, be()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Gl) throw Gl = !1, e = Da, Da = null, e;
  return ql & 1 && e.tag !== 0 && Hn(), a = e.pendingLanes, a & 1 ? e === Pa ? jr++ : (jr = 0, Pa = e) : jr = 0, dn(), null;
}
function Hn() {
  if (Yt !== null) {
    var e = $c(ql), t = ft.transition, n = ue;
    try {
      if (ft.transition = null, ue = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, ql = 0, ie & 6) throw Error(O(331));
        var s = ie;
        for (ie |= 4, B = e.current; B !== null; ) {
          var a = B, o = a.child;
          if (B.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (B = d; B !== null; ) {
                  var m = B;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, m, a);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, B = v;
                  else for (; B !== null; ) {
                    m = B;
                    var w = m.sibling, k = m.return;
                    if (Jd(m), m === d) {
                      B = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = k, B = w;
                      break;
                    }
                    B = k;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var S = _.sibling;
                    _.sibling = null, _ = S;
                  } while (_ !== null);
                }
              }
              B = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, B = o;
          else e: for (; B !== null; ) {
            if (a = B, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                kr(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, B = f;
              break e;
            }
            B = a.return;
          }
        }
        var u = e.current;
        for (B = u; B !== null; ) {
          o = B;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, B = h;
          else e: for (o = u; B !== null; ) {
            if (i = B, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  os(9, i);
              }
            } catch (E) {
              Ne(i, i.return, E);
            }
            if (i === o) {
              B = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, B = g;
              break e;
            }
            B = i.return;
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
      ue = n, ft.transition = t;
    }
  }
  return !1;
}
function qi(e, t, n) {
  t = Jn(n, t), t = $d(e, t, 1), e = tn(e, t, 1), t = Qe(), e !== null && (Br(e, 1, t), Ze(e, t));
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
        e = Jn(n, e), e = Ud(t, e, 1), t = tn(t, e, 1), e = Qe(), t !== null && (Br(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function wm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Ae & n) === n && (Le === 4 || Le === 3 && (Ae & 130023424) === Ae && 500 > be() - bo ? gn(e, 0) : Co |= n), Ze(e, t);
}
function iu(e, t) {
  t === 0 && (e.mode & 1 ? (t = tl, tl <<= 1, !(tl & 130023424) && (tl = 4194304)) : t = 1);
  var n = Qe();
  e = Ft(e, t), e !== null && (Br(e, t, n), Ze(e, n));
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), iu(e, n);
}
var cu;
cu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, im(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, we && t.flags & 1048576 && pd(t, Wl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Sl(e, t), e = t.pendingProps;
      var s = Gn(t, Ue.current);
      Bn(t, n), s = _o(null, t, r, e, s, n);
      var a = ko();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, Ol(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, go(t), s.updater = as, t.stateNode = s, s._reactInternals = t, ka(t, r, e, n), t = Ea(null, t, r, !0, a, n)) : (t.tag = 0, we && a && io(t), Ve(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Sl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Sm(r), e = vt(r, e), s) {
          case 0:
            t = ja(null, t, r, e, n);
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
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), ja(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Fi(e, t, r, s, n);
    case 3:
      e: {
        if (Hd(t), e === null) throw Error(O(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, wd(e, t), Vl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Jn(Error(O(423)), t), t = Wi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Jn(Error(O(424)), t), t = Wi(e, t, r, n, s);
          break e;
        } else for (rt = en(t.stateNode.containerInfo.firstChild), lt = t, we = !0, xt = null, n = yd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qn(), r === s) {
            t = Wt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xd(t), e === null && wa(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, ma(r, s) ? o = null : a !== null && ma(r, a) && (t.flags |= 32), Bd(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && wa(t), null;
    case 13:
      return Kd(e, t, n);
    case 4:
      return yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yn(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), zi(e, t, r, s, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, me($l, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === s.children && !Xe.current) {
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
                    var m = d.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), xa(
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
            if (o = a.return, o === null) throw Error(O(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), xa(o, n, t), o = a.sibling;
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
      return s = t.type, r = t.pendingProps.children, Bn(t, n), s = pt(s), r = r(s), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = vt(r, t.pendingProps), s = vt(r.type, s), Oi(e, t, r, s, n);
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : vt(r, s), Sl(e, t), t.tag = 1, Je(r) ? (e = !0, Ol(t)) : e = !1, Bn(t, n), Wd(t, r, s), ka(t, r, s, n), Ea(null, t, r, !0, e, n);
    case 19:
      return Gd(e, t, n);
    case 22:
      return Qd(e, t, n);
  }
  throw Error(O(156, t.tag));
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
function Lo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Sm(e) {
  if (typeof e == "function") return Lo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ya) return 11;
    if (e === Xa) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Nl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Lo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case In:
      return yn(n.children, s, a, t);
    case qa:
      o = 8, s |= 8;
      break;
    case Hs:
      return e = ut(12, n, t, s | 2), e.elementType = Hs, e.lanes = a, e;
    case Ks:
      return e = ut(13, n, t, s), e.elementType = Ks, e.lanes = a, e;
    case Gs:
      return e = ut(19, n, t, s), e.elementType = Gs, e.lanes = a, e;
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
        case Ya:
          o = 11;
          break e;
        case Xa:
          o = 14;
          break e;
        case Qt:
          o = 16, r = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function yn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function cs(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = xc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Us(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function Vs(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jm(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ss(0), this.expirationTimes = Ss(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ss(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Do(e, t, n, r, s, a, o, i, c) {
  return e = new jm(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, go(a), e;
}
function Em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function uu(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(O(170));
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
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return ud(e, n, t);
  }
  return t;
}
function fu(e, t, n, r, s, a, o, i, c) {
  return e = Do(n, r, !0, e, s, a, o, i, c), e.context = uu(null), n = e.current, r = Qe(), s = rn(n), a = At(r, s), a.callback = t ?? null, tn(n, a, s), e.current.lanes = s, Br(e, s, r), Ze(e, r), e;
}
function ds(e, t, n, r) {
  var s = t.current, a = Qe(), o = rn(s);
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
function Po(e, t) {
  Yi(e, t), (e = e.alternate) && Yi(e, t);
}
function Nm() {
  return null;
}
var pu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ro(e) {
  this._internalRoot = e;
}
us.prototype.render = Ro.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  ds(e, t, null, null);
};
us.prototype.unmount = Ro.prototype.unmount = function() {
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
function Ao(e) {
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
  var c = Do(e, 0, !1, null, null, !1, !1, "", Xi);
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
        n !== 0 && (eo(t, n | 1), Ze(t, be()), !(ie & 6) && (Zn = be() + 500, dn()));
      }
      break;
    case 13:
      kn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var s = Qe();
          St(r, e, 1, s);
        }
      }), Po(e, 1);
  }
};
to = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Qe();
      St(t, e, 134217728, n);
    }
    Po(e, 134217728);
  }
};
Vc = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = Ft(e, t);
    if (n !== null) {
      var r = Qe();
      St(n, e, t, r);
    }
    Po(e, t);
  }
};
Qc = function() {
  return ue;
};
Bc = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
la = function(e, t, n) {
  switch (t) {
    case "input":
      if (Xs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = rs(r);
            if (!s) throw Error(O(90));
            kc(r), Xs(r, s);
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
var bm = { usingClientEntryPoint: !1, Events: [Kr, Pn, rs, Mc, Ic, Mo] }, ur = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mm = { bundleType: ur.bundleType, version: ur.version, rendererPackageName: ur.rendererPackageName, rendererConfig: ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ur.findFiberByHostInstance || Nm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber) try {
    Zl = fl.inject(Mm), bt = fl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bm;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ao(t)) throw Error(O(200));
  return Em(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!Ao(e)) throw Error(O(299));
  var n = !1, r = "", s = pu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Do(e, 1, !1, null, null, n, !1, r, s), e[Ot] = t.current, Dr(e.nodeType === 8 ? e.parentNode : e), new Ro(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Rc(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return kn(e);
};
at.hydrate = function(e, t, n) {
  if (!fs(t)) throw Error(O(200));
  return ps(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!Ao(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = pu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = fu(t, null, e, 1, n ?? null, s, !1, a, o), e[Ot] = t.current, Dr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new us(t);
};
at.render = function(e, t, n) {
  if (!fs(t)) throw Error(O(200));
  return ps(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!fs(e)) throw Error(O(40));
  return e._reactRootContainer ? (kn(function() {
    ps(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Mo;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fs(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ps(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function mu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mu);
    } catch (e) {
      console.error(e);
    }
}
mu(), mc.exports = at;
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
var Im = p, Tm = Symbol.for("react.element"), Lm = Symbol.for("react.fragment"), Dm = Object.prototype.hasOwnProperty, Pm = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rm = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => p.createElement(
      "svg",
      {
        ref: m,
        ...Am,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${zm(e)}`, i].join(" "),
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
const zo = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
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
const Oo = Z("ChevronRight", [
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
const Fo = Z("Plus", [
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
const It = Z("Trash2", [
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
const xe = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = te;
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
  const e = await te.fetchApi("/meld/home-dir");
  return (await oe(e)).home;
}, ht = ({
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
let Jl = !1;
const fh = (e) => {
  Jl = e, Jl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, ph = (...e) => {
  Jl && console.log("[Meld]", ...e);
}, mh = (...e) => {
  Jl && console.warn("[Meld]", ...e);
}, hh = (...e) => {
  console.error("[Meld]", ...e);
}, q = {
  log: ph,
  warn: mh,
  error: hh,
  init: fh
}, Cl = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return oe(a);
}, Cu = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return oe(t);
}, za = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await oe(n);
}, Wo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return oe(t);
}, bu = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return oe(t);
}, ec = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await oe(n);
}, gh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await oe(r);
  } catch {
    return [];
  }
}, Oa = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await oe(t);
  } catch {
    return [];
  }
}, yh = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await oe(n);
}, vh = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return oe(n);
}, Fa = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await oe(r);
}, wh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return oe(t);
}, xh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return oe(t);
}, _h = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return oe(r);
}, kh = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return oe(e);
}, Sh = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return oe(e);
}, jh = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return oe(e);
}, Eh = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return oe(e);
}, Nh = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await oe(n);
}, tc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await oe(t);
}, Ch = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
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
}, Mu = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await oe(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), bh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Mh = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await oe(n);
}, Ih = {
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
function Th(e, t) {
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
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (m) => m.id === e.viewerImageId
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
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (m) => m.id === e.viewerImageId
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
const Iu = p.createContext(void 0), Lh = ({
  children: e
}) => {
  const [t, n] = p.useReducer(Th, Ih), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (y, _, S) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let h = y;
      for (; h < Math.min(_, f) && S === s.current; )
        try {
          const g = Math.min(u, f - h);
          q.log("Background fetch: starting chunk", {
            offset: h,
            limit: g
          });
          const E = await Cl(
            h,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: E }), h += E.images.length, E.images.length === 0 || h >= E.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (g) {
          q.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), _ = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      q.log("refreshImages: starting initial fetch", {
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
      ), h = performance.now() - y;
      q.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, _);
    } catch (S) {
      q.error("refreshImages: fetch failed", S), n({
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
    const y = performance.now();
    try {
      const _ = r.current, S = t.searchQuery.trim() !== "", f = t.pagination.limit;
      q.log("loadMoreImages: starting fetch", {
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
      ), h = performance.now() - y;
      q.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      q.error("loadMoreImages: fetch failed", _), n({
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
  ]), d = p.useCallback(async () => {
    try {
      const y = await Eh();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      q.error("Failed to load favorites", y);
    }
  }, []), m = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), S = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Wo(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = p.useCallback(
    async (y, _) => {
      try {
        await Mh(y, _), n({ type: "SET_SETTINGS", payload: { [y]: _ } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), k = p.useCallback(
    async (y) => {
      const _ = t.images.find((h) => h.id === y);
      if (_ && !_.is_minimal)
        return _;
      const S = t.lineageImages.find((h) => h.id === y);
      if (S && !S.is_minimal)
        return S;
      const f = a.current.get(y);
      if (f)
        return f;
      const u = (async () => {
        try {
          q.log("fetchFullImageDetails: fetching full data", { id: y });
          const h = await Cu(y);
          return n({ type: "UPDATE_IMAGE", payload: h }), h;
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
        const _ = await Mu();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        q.error("Failed to load settings", _);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const y = () => {
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
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Iu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: k
      },
      children: e
    }
  );
}, _e = () => {
  const e = p.useContext(Iu);
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
}, $o = async () => {
  const e = await te.fetchApi("/meld/tags");
  return oe(e);
}, Dh = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return oe(t);
}, Ph = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await oe(t);
}, Rh = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await oe(n);
}, Ah = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, zh = async (e, t, n = !1, r) => {
  const s = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Oh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Fh = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await oe(r)).count;
  } catch {
    return 0;
  }
}, Wh = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await oe(t);
}, $h = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await oe(e);
}, Tu = () => {
  const { dispatch: e } = _e(), [t, n] = p.useState(() => {
    const I = localStorage.getItem("meld-import-config"), Y = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (I)
      try {
        const N = JSON.parse(I);
        return { ...Y, ...N, tags: [] };
      } catch {
        return Y;
      }
    return Y;
  });
  p.useEffect(() => {
    const { tags: I, ...Y } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Y));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, m] = p.useState(!1), [v, w] = p.useState([]), [k, y] = p.useState(""), [_, S] = p.useState(!1), [f, u] = p.useState(null), h = p.useRef(!1), g = (I) => {
    I.target === I.currentTarget && (h.current = !0);
  }, E = (I) => {
    I.target === I.currentTarget && h.current && e({ type: "CLOSE_MODAL" }), h.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const Y = await uh();
        n((N) => N.custom_path ? N : { ...N, custom_path: Y });
      } catch (Y) {
        q.error("Failed to fetch home directory:", Y);
      }
    })();
  }, []), p.useEffect(() => {
    const I = new AbortController();
    return (async () => {
      const N = t.type === "custom" ? t.custom_path : t.subfolder;
      if (q.log(
        `loadFolders started. Path: "${N}", Type: "${t.type}"`
      ), t.type === "custom" && !N) {
        q.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      m(!0);
      const U = N, M = t.type;
      try {
        q.log("Step 1: Fast load starting...");
        const L = await zh(
          t.type,
          N,
          !0,
          I.signal
        );
        if (I.signal.aborted) {
          q.log("Step 1: Aborted.");
          return;
        }
        q.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), s(L.folders), o(L.images), c(null);
        const F = L.folders.map((T) => T.name);
        F.length > 0 && (q.log(
          `Step 2: Metadata fetch starting for ${F.length} folders...`
        ), Oh(
          M,
          U,
          F,
          I.signal
        ).then((T) => {
          if (I.signal.aborted) {
            q.log("Step 2: Aborted.");
            return;
          }
          q.log("Step 2: Metadata fetch complete."), s(
            (ee) => ee.map((ce) => {
              const V = T[ce.name];
              return V ? { ...ce, count: V.count, preview: V.preview } : ce;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && q.error("Step 2: Metadata fetch failed:", T);
        })), q.log("Step 3: Path image count starting..."), Fh(M, U, I.signal).then((T) => {
          if (I.signal.aborted) {
            q.log("Step 3: Aborted.");
            return;
          }
          q.log(`Step 3: Path image count complete: ${T}`), c(T);
        }).catch((T) => {
          T.name !== "AbortError" && q.error("Step 3: Path image count failed:", T);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          q.log("Request aborted.");
          return;
        }
        q.error("Failed to load folders:", L), s([]), o([]), c(0);
      } finally {
        I.signal.aborted || m(!1);
      }
    })(), () => {
      I.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = p.useCallback(async () => {
    S(!0);
    try {
      const I = await $o();
      w(I);
    } catch (I) {
      q.error("Failed to fetch tags:", I);
    } finally {
      S(!1);
    }
  }, []);
  p.useEffect(() => {
    j();
  }, [j]), ht({
    onEscape: p.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const x = p.useMemo(() => v.filter(
    (I) => I.name.toLowerCase().includes(k.toLowerCase()) && !t.tags.includes(I.name)
  ), [v, k, t.tags]), C = (I) => {
    const Y = I.trim();
    Y && !t.tags.includes(Y) && (n({ ...t, tags: [...t.tags, Y] }), y(""));
  }, z = (I) => {
    n({ ...t, tags: t.tags.filter((Y) => Y !== I) });
  }, b = (I) => {
    I.key === "Enter" && k.trim() && (I.preventDefault(), C(k.trim()));
  }, R = async () => {
    try {
      await Wh(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (I) {
      q.error("Failed to start scan:", I), alert(`Failed to start scan: ${I}`);
    }
  }, $ = (I) => {
    if (t.type === "custom") {
      const Y = t.custom_path.includes("\\") ? "\\" : "/", N = t.custom_path.endsWith(Y) ? `${t.custom_path}${I}` : `${t.custom_path}${Y}${I}`;
      n({ ...t, custom_path: N });
    } else {
      const Y = t.subfolder ? `${t.subfolder}/${I}` : I;
      n({ ...t, subfolder: Y });
    }
  }, K = () => {
    if (t.type === "custom") {
      const I = t.custom_path.includes("\\") ? "\\" : "/", Y = t.custom_path.split(I);
      if (Y.length > 1) {
        Y.pop();
        let N = Y.join(I);
        N === "" && I === "/" && (N = "/"), n({ ...t, custom_path: N });
      }
    } else {
      const I = t.subfolder.split("/");
      I.pop(), n({ ...t, subfolder: I.join("/") });
    }
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: E,
        children: [
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (I) => I.stopPropagation(),
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
                          onChange: (I) => n({
                            ...t,
                            type: I.target.value,
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
                          onChange: (I) => n({ ...t, recursive: I.target.checked })
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
                          onChange: (I) => n({
                            ...t,
                            link_strategy: I.target.value,
                            auto_link_parent: I.target.value !== "none"
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
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((I) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        I,
                        /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => z(I),
                            children: /* @__PURE__ */ l.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, I)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: k,
                            onChange: (I) => y(I.target.value),
                            onKeyDown: b
                          }
                        ),
                        k.trim() && !t.tags.includes(k.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => C(k),
                            children: /* @__PURE__ */ l.jsx(Fo, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : x.length === 0 ? k && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        k
                      ] }) : x.map((I) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => C(I.name),
                          children: I.name
                        },
                        I.id
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
                          onClick: K,
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
                          onChange: (I) => n({ ...t, custom_path: I.target.value }),
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
                      r.map((I) => /* @__PURE__ */ l.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => $(I.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: I.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: et(I.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Ym, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: I.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${I.count === null ? "meld-folder-count--loading" : ""}`,
                                children: I.count !== null ? `${I.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Oo, { size: 14 })
                          ]
                        },
                        I.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((I) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(I),
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: et(I),
                              alt: I.filename,
                              title: I.filename
                            }
                          )
                        },
                        I.filename
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
              onClick: (I) => {
                I.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (I) => I.stopPropagation(),
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
function Uh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Vr(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Uh(e), s = (m) => {
    if (!m) return !1;
    const v = m.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => s(m.type)
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
const Vh = () => {
  const { dispatch: e } = _e();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var m, v;
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
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (m = s.graph).afterChange) == null || v.call(m), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Qs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Qh(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Wa(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let m = 0; m < r * s; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function Wa(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function Bh(e) {
  return e.data.every((t) => t === 0);
}
const Lu = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = _e(), a = r.images.find((A) => A.id === e), { injectMaskToGraph: o } = Vh();
  ht({ onEscape: n });
  const i = p.useRef(null), c = p.useRef(null), d = p.useRef(null), m = p.useRef(null), [v, w] = p.useState(!1), [k, y] = p.useState("rect"), [_, S] = p.useState({ x: 0, y: 0 }), [f, u] = p.useState({ x: 0, y: 0 }), [h, g] = p.useState([]), [E, j] = p.useState(null), [x, C] = p.useState(!1), z = p.useCallback(() => {
    const A = d.current, D = c.current;
    if (!A || !D) return null;
    const J = D.getBoundingClientRect(), W = A.getBoundingClientRect(), le = A.naturalWidth, Q = A.naturalHeight;
    if (!le || !Q) return null;
    const de = le / Q, fe = W.width / W.height;
    let ve, pe, Ke = 0, tt = 0;
    return de > fe ? (ve = W.width, pe = W.width / de, tt = (W.height - pe) / 2) : (pe = W.height, ve = W.height * de, Ke = (W.width - ve) / 2), {
      left: W.left - J.left + Ke,
      top: W.top - J.top + tt,
      width: ve,
      height: pe
    };
  }, []), b = p.useCallback(() => {
    const A = i.current;
    if (!A) return;
    const D = A.getContext("2d");
    if (!D) return;
    D.clearRect(0, 0, A.width, A.height);
    const J = getComputedStyle(document.documentElement), W = J.getPropertyValue("--comfy-input-bg-active") || J.getPropertyValue("--comfy-input-bg") || J.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", le = z();
    if (m.current && le && (D.save(), D.globalAlpha = 0.5, D.drawImage(
      m.current,
      le.left,
      le.top,
      le.width,
      le.height
    ), D.restore()), v) {
      const Q = Math.min(_.x, f.x), de = Math.min(_.y, f.y), fe = Math.abs(_.x - f.x), ve = Math.abs(_.y - f.y);
      if (D.save(), D.globalAlpha = 0.3, D.fillStyle = W, D.strokeStyle = "white", D.lineWidth = 2, D.setLineDash([5, 5]), D.beginPath(), k === "rect")
        D.rect(Q, de, fe, ve);
      else if (k === "ellipse") {
        const pe = Q + fe / 2, Ke = de + ve / 2;
        D.ellipse(pe, Ke, fe / 2, ve / 2, 0, 0, 2 * Math.PI);
      } else if (k === "lasso" && h.length > 1) {
        D.moveTo(h[0].x, h[0].y);
        for (let pe = 1; pe < h.length; pe++)
          D.lineTo(h[pe].x, h[pe].y);
        D.closePath();
      }
      D.fill(), D.globalAlpha = 1, D.stroke(), D.restore();
    }
  }, [v, _, f, k, h, z]), [R, $] = p.useState([]), K = p.useMemo(() => R.length > 0 ? R[R.length - 1] : d.current ? Qs(
    d.current.naturalWidth,
    d.current.naturalHeight
  ) : null, [R]);
  p.useEffect(() => {
    var A;
    (A = d.current) != null && A.naturalWidth && R.length === 0 && $([
      Qs(
        d.current.naturalWidth,
        d.current.naturalHeight
      )
    ]);
  }, [R.length]);
  const I = p.useRef(!1), Y = p.useRef(0), N = (A) => {
    A.target === A.currentTarget && (I.current = !0);
  }, U = (A) => {
    A.target === A.currentTarget && I.current && !v && n(), I.current = !1;
  };
  p.useEffect(() => {
    if (!K) return;
    m.current || (m.current = document.createElement("canvas"));
    const A = m.current;
    A.width = K.width, A.height = K.height;
    const D = A.getContext("2d");
    if (!D) return;
    const J = Wa(K, [255, 255, 255], 255);
    D.putImageData(J, 0, 0), b();
  }, [K, b]), p.useEffect(() => {
    const A = () => {
      c.current && i.current && (i.current.width = c.current.clientWidth, i.current.height = c.current.clientHeight, b());
    }, D = new ResizeObserver(A);
    return c.current && D.observe(c.current), A(), () => D.disconnect();
  }, [b]);
  const M = (A) => {
    var Q;
    if (A.button !== 0 || v || x || Date.now() - Y.current < 100)
      return;
    A.preventDefault();
    const D = z(), J = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
    if (!D || !J) return;
    w(!0);
    const W = Math.max(
      D.left,
      Math.min(A.clientX - J.left, D.left + D.width)
    ), le = Math.max(
      D.top,
      Math.min(A.clientY - J.top, D.top + D.height)
    );
    S({ x: W, y: le }), u({ x: W, y: le }), g(k === "lasso" ? [{ x: W, y: le }] : []), j(null);
  };
  p.useEffect(() => {
    if (!v) return;
    const A = (J) => {
      var fe;
      const W = z(), le = (fe = c.current) == null ? void 0 : fe.getBoundingClientRect();
      if (!W || !le) return;
      const Q = Math.max(
        W.left,
        Math.min(J.clientX - le.left, W.left + W.width)
      ), de = Math.max(
        W.top,
        Math.min(J.clientY - le.top, W.top + W.height)
      );
      u({ x: Q, y: de }), k === "lasso" && g((ve) => [...ve, { x: Q, y: de }]);
    }, D = (J) => {
      var Q;
      const W = z(), le = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
      if (W && le && K && d.current) {
        const de = Math.max(
          W.left,
          Math.min(J.clientX - le.left, W.left + W.width)
        ), fe = Math.max(
          W.top,
          Math.min(J.clientY - le.top, W.top + W.height)
        ), ve = Math.min(_.x, de), pe = Math.min(_.y, fe), Ke = Math.abs(_.x - de), tt = Math.abs(_.y - fe), qr = k === "lasso";
        if (Ke > 5 || tt > 5 || qr && h.length > 2) {
          const gs = d.current.naturalWidth, G = d.current.naturalHeight, ne = gs / W.width, P = G / W.height, ae = Qh(K, (X) => {
            if (k === "rect") {
              const re = (ve - W.left) * ne, he = (pe - W.top) * P, Oe = Ke * ne, Ge = tt * P;
              X.rect(re, he, Oe, Ge);
            } else if (k === "ellipse") {
              const re = (ve - W.left) * ne, he = (pe - W.top) * P, Oe = Ke * ne, Ge = tt * P, Ie = re + Oe / 2, ke = he + Ge / 2;
              X.ellipse(
                Ie,
                ke,
                Oe / 2,
                Ge / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (k === "lasso" && h.length > 2) {
              const re = h[0];
              X.moveTo(
                (re.x - W.left) * ne,
                (re.y - W.top) * P
              );
              for (let he = 1; he < h.length; he++)
                X.lineTo(
                  (h[he].x - W.left) * ne,
                  (h[he].y - W.top) * P
                );
              X.closePath();
            }
          });
          $((X) => [...X, ae]);
        }
      }
      Y.current = Date.now(), w(!1), g([]);
    };
    return window.addEventListener("mousemove", A), window.addEventListener("mouseup", D), () => {
      window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", D);
    };
  }, [
    v,
    _.x,
    _.y,
    z,
    K,
    k,
    h
  ]);
  const L = p.useCallback(() => {
    R.length > 1 && $((A) => A.slice(0, -1));
  }, [R.length]);
  p.useEffect(() => {
    const A = (D) => {
      (D.metaKey || D.ctrlKey) && D.key === "z" ? (D.preventDefault(), L()) : D.key === "Escape" && (D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", A, { capture: !0 }), () => window.removeEventListener("keydown", A, { capture: !0 });
  }, [L, n]);
  const F = () => {
    if (d.current) {
      const A = Qs(
        d.current.naturalWidth,
        d.current.naturalHeight
      );
      $((D) => [...D, A]);
    }
  }, T = async () => {
    if (!K || !d.current) return null;
    C(!0);
    try {
      const { width: A, height: D } = K, J = document.createElement("canvas");
      J.width = A, J.height = D;
      const W = J.getContext("2d");
      if (!W) return null;
      const le = Wa(K, [255, 255, 255], 255);
      W.putImageData(le, 0, 0);
      const Q = await new Promise(
        (tt) => J.toBlob(tt, "image/png")
      );
      if (!Q) return null;
      const fe = `meld_mask_${Date.now()}.png`, ve = new File([Q], fe, { type: "image/png" }), pe = new FormData();
      pe.append("image", ve), pe.append("type", "temp"), pe.append("overwrite", "true");
      const Ke = await te.fetchApi("/upload/image", {
        method: "POST",
        body: pe
      });
      return Ke.ok ? (await Ke.json()).name : null;
    } catch (A) {
      return console.error("[Meld] Error uploading mask:", A), null;
    } finally {
      C(!1);
    }
  }, ee = async () => {
    if (!a) return;
    const A = await T();
    A && o(a, A) && (n(), s({ type: "CLOSE_VIEWER" }));
  }, ce = async () => {
    if (!a) return;
    const A = await T();
    A && s({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: A
      }
    });
  }, V = p.useMemo(
    () => K && !Bh(K),
    [K]
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
          onClick: (A) => A.stopPropagation(),
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
                    className: `meld-mask-tool-btn ${k === "rect" ? "active" : ""}`,
                    onClick: () => y("rect"),
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
                    className: `meld-mask-tool-btn ${k === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
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
                    className: `meld-mask-tool-btn ${k === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
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
                  onMouseDown: M,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "img",
                      {
                        ref: d,
                        src: et(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (A) => A.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "canvas",
                      {
                        ref: i,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (A) => A.preventDefault()
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
                      disabled: !V || x,
                      type: "button",
                      children: [
                        x ? /* @__PURE__ */ l.jsx(Zi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(zo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ce,
                      disabled: !V || x,
                      type: "button",
                      children: [
                        x ? /* @__PURE__ */ l.jsx(Zi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Sn, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: L,
                      disabled: R.length <= 1 || x,
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
                      onClick: F,
                      disabled: !V || x,
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
}, Hh = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, s] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState(
    {}
  ), [d, m] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [k, y] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, S] = p.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = p.useState(e.settings["gallery.trash_retention_days"].toString()), [h, g] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [E, j] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [x, C] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [z, b] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    R,
    $
  ] = p.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    K,
    I
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
        (A) => a[A] !== e.settings[A] && !i[A]
      );
      if (V.length > 0)
        for (const A of V)
          await n(A, a[A]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (V, A) => {
      o((D) => ({
        ...D,
        [V]: !A
      }));
    },
    handleNumberChange: (V, A, D, J) => {
      V === "gallery.initial_load_count" ? m(A) : V === "gallery.max_load_count" ? w(A) : V === "gallery.lineage_max_depth" ? y(A) : V === "viewer.thumbnail_window_size" ? S(A) : V === "gallery.trash_retention_days" ? u(A) : V === "gallery.auto_link_phash_threshold" ? g(A) : V === "gallery.suggest_phash_threshold" ? j(A) : V === "viewer.details.max_positive_prompt_lines" ? C(A) : V === "viewer.details.max_negative_prompt_lines" ? b(A) : V === "fullscreen.details.max_positive_prompt_lines" ? $(A) : V === "fullscreen.details.max_negative_prompt_lines" ? I(A) : V === "sidebar.thumbnail_size" && N(A);
      const W = Number.parseInt(A, 10);
      if (!Number.isNaN(W)) {
        let le = W;
        D !== void 0 && le < D && (le = D), J !== void 0 && le > J && (le = J), o((Q) => ({
          ...Q,
          [V]: le
        }));
      }
    },
    handleNumberBlur: (V) => {
      V.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : V.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : V.key === "gallery.lineage_max_depth" ? y(
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
      ) : V.key === "viewer.details.max_negative_prompt_lines" ? b(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_positive_prompt_lines" ? $(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_negative_prompt_lines" ? I(
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
    validateShortcut: (V) => V.trim() ? V.trim().split(/\s+/).every((D) => !!(D === "next" || D === "prev" || D === "delete" || D.startsWith("tag:") && D.length > 4 || D.startsWith("-tag:") && D.length > 5 || D.startsWith("tag-toggle:") && D.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: h,
    suggestPhashThresholdInput: E,
    maxPositivePromptLinesInput: x,
    maxNegativePromptLinesInput: z,
    fullscreenMaxPositivePromptLinesInput: R,
    fullscreenMaxNegativePromptLinesInput: K,
    thumbnailSizeInput: Y
  };
}, H = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Kh = ({
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
  { id: "delete_or_trash", label: "Delete / Trash", icon: It }
], Gh = ({
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
    /* @__PURE__ */ l.jsx(H, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((m) => ({
              ...m,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Qu.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), qh = ({
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
        H,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
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
                const m = s(
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
      /* @__PURE__ */ l.jsx(
        H,
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
      H,
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
}, Yh = ({
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
      H,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => s((v) => ({
              ...v,
              "gallery.matching_strategy": m.target.value
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
      H,
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
            onChange: (m) => t(
              "gallery.auto_link_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
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
            onChange: (m) => t(
              "gallery.suggest_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
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
      H,
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
            onChange: (m) => t(
              "gallery.lineage_max_depth",
              m.target.value,
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
      H,
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
            onChange: (m) => t(
              "gallery.trash_retention_days",
              m.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      H,
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
] }), Xh = ({
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
    handleResetShortcuts: m,
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: k,
    maxLoadCountInput: y,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: h,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: E,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: x,
    thumbnailSizeInput: C
  } = Hh();
  ht({ onEscape: o });
  const z = p.useRef(!1), b = (I) => {
    I.target === I.currentTarget && (z.current = !0);
  }, R = (I) => {
    I.target === I.currentTarget && z.current && o(), z.current = !1;
  }, $ = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], K = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          Yh,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: h
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Gh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: C,
            initialLoadCountInput: k,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Xh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: E
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          Kh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: x
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          qh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: m
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
        onMouseDown: b,
        onMouseUp: R,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (I) => I.stopPropagation(),
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
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: $.map((I) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === I.id ? "active" : ""}`,
                    onClick: () => t(I.id),
                    children: I.label
                  },
                  I.id
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
}, _t = "none", Hu = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: s } = _e(), [a, o] = p.useState([]), [i, c] = p.useState(t), [d, m] = p.useState(""), [v, w] = p.useState(!0), [k, y] = p.useState(!1), _ = p.useRef(null), S = e.length > 1, f = p.useRef(!1), u = (b) => {
    b.target === b.currentTarget && (f.current = !0);
  }, h = (b) => {
    b.target === b.currentTarget && f.current && n(), f.current = !1;
  }, g = p.useCallback(async () => {
    w(!0);
    try {
      const b = await $o();
      o(b);
    } catch (b) {
      console.error("Failed to fetch tags:", b);
    } finally {
      w(!1);
    }
  }, []);
  p.useEffect(() => {
    g();
  }, [g]), p.useEffect(() => {
    _.current && _.current.focus();
  }, []), ht({ onEscape: n });
  const E = p.useMemo(() => a.filter(
    (b) => b.name.toLowerCase().includes(d.toLowerCase()) && !i.includes(b.name)
  ), [a, d, i]), j = (b) => {
    const R = b.trim();
    if (R.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    R && !i.includes(R) && (c([...i, R]), m(""));
  }, x = (b) => {
    c(i.filter((R) => R !== b));
  }, C = async () => {
    y(!0);
    try {
      if (S) {
        const b = i.filter(($) => !t.includes($)), R = t.filter(
          ($) => !i.includes($)
        );
        await Fa(e, b, R);
      } else
        await yh(e[0], i);
      await s(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (b) {
      console.error("Failed to update tags:", b), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, z = (b) => {
    b.key === "Enter" && d.trim() && (b.preventDefault(), b.stopPropagation(), j(d.trim()));
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: u,
        onMouseUp: h,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (b) => b.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Cn, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: S ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(xe, { size: 20 }) })
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((b) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                b,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => x(b),
                    children: /* @__PURE__ */ l.jsx(xe, { size: 12 })
                  }
                )
              ] }, b)) })
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
                    onChange: (b) => m(b.target.value),
                    onKeyDown: z
                  }
                ),
                d.trim() && !i.includes(d.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(d),
                    children: [
                      /* @__PURE__ */ l.jsx(Fo, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? d ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : E.map((b) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => j(b.name),
                  children: b.name
                },
                b.id
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
                disabled: k,
                children: k ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ku = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return oe(e);
}, Gu = async (e) => {
  const t = await te.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return oe(t);
}, hs = (e, t) => {
  const n = p.useCallback(async (k) => {
    try {
      const y = await wh(k.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), q.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return q.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = p.useCallback(async (k) => {
    try {
      const y = await xh(k.id), _ = y.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const h = y.is_flux ? {
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
        for (const [x, C] of Object.entries(h)) {
          const z = y[x];
          if (z != null && z !== "") {
            const b = u.widgets.find(
              (R) => R.name === C
            );
            b && (b.value = z);
          }
        }
        const j = u.widgets.find(
          (x) => x.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const g = S.canvas.ds.offset, E = S.canvas.ds.scale;
      return u.pos = [(-g[0] + 400) / E, (-g[1] + 300) / E], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), s = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [k.id],
          tags: k.tags || []
        }
      });
    },
    [t]
  ), a = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: k.id,
          notes: k.user_notes || ""
        }
      });
    },
    [t]
  ), o = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: k.id }
      });
    },
    [t]
  ), i = p.useCallback(
    (k) => {
      const y = window.app;
      if (!(y != null && y.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const h = u.replace(/\s+/g, "").toLowerCase();
        return h === "meldimageloader" || h === "loadimage";
      }, S = y.graph._nodes.filter(
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
            image: k,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Vr(k, u);
            }
          }
        }), !0;
      const f = Vr(k);
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
    (k) => {
      const y = Array.isArray(k) ? k : [k];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), d = p.useCallback(
    async (k, y = "run") => {
      var _;
      if (console.log("[Meld] handleRunWithMask called", k, y), y === "apply") {
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
        ), h = f.some(
          (g) => g.type === "MeldImageLoader" || g.type === "LoadImage" || g.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: u, hasLoaderNode: h }), !u || !h) {
          const g = [];
          h || g.push("'Meld Image Loader'"), u || g.push("'Load Image (as Mask)'"), t({
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
        payload: { type: "mask_editor", imageId: k.id, mode: y }
      });
    },
    [t]
  ), m = p.useCallback(
    async (k, y) => {
      try {
        const _ = k.id, f = (await Wo([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: f }), y == null || y();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), v = p.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [k.id],
          hasLineage: !!(k.parent_id || k.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), w = p.useCallback(
    async (k, y) => {
      try {
        const _ = await vh(
          k,
          y
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
    handleRestore: m,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, qu = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = _e(), { handleUpdateUserNotes: a } = hs(r, s), [o, i] = p.useState(t), [c, d] = p.useState(!1), m = p.useRef(null), v = p.useRef(!1), w = (_) => {
    _.target === _.currentTarget && (v.current = !0);
  }, k = (_) => {
    _.target === _.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const y = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const _ = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === m.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [y]), ht({ onEscape: n }), Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ah, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(xe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
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
}, Yu = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = _e(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ht({ onEscape: s });
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
  var Y;
  const { dispatch: r } = _e(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(null), [m, v] = p.useState(!1), [w, k] = p.useState(null), [y, _] = p.useState({}), [S, f] = p.useState({}), [u, h] = p.useState(""), g = p.useRef(null), E = p.useMemo(() => s.map((N) => {
    let U = N.valid, M = N.reason;
    return n && N.mask_count === 0 && (U = !1, M = "No 'Load Image (as Mask)' node found."), { ...N, valid: U, reason: M };
  }).sort((N, U) => N.valid !== U.valid ? N.valid ? -1 : 1 : N.name.localeCompare(U.name)), [s, n]), j = p.useMemo(() => {
    if (!u.trim()) return E;
    const N = u.toLowerCase();
    return E.filter(
      (U) => U.name.toLowerCase().includes(N)
    );
  }, [E, u]), x = p.useCallback(async () => {
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
  p.useEffect(() => {
    x();
  }, [x]), p.useEffect(() => {
    !o && g.current && g.current.focus();
  }, [o]);
  const C = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  ht({ onEscape: C });
  const z = p.useRef(!1), b = p.useCallback((N) => {
    N.target === N.currentTarget && (z.current = !0);
  }, []), R = p.useCallback(
    (N) => {
      N.target === N.currentTarget && z.current && C(), z.current = !1;
    },
    [C]
  ), $ = async (N, U) => {
    if (!m)
      try {
        v(!0), await t(N, U), C();
      } catch (M) {
        d(M instanceof Error ? M.message : String(M)), v(!1);
      }
  }, K = async (N) => {
    if (!(y[N] || S[N]))
      try {
        f((F) => ({ ...F, [N]: !0 }));
        const U = await Gu(N), M = [], L = (F) => {
          if (!F) return !1;
          const T = F.replace(/\s+/g, "").toLowerCase();
          return n ? T === "loadimagemask" : T === "meldimageloader" || T === "loadimage";
        };
        if (U.nodes && Array.isArray(U.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            U.nodes.length
          );
          for (const F of U.nodes)
            L(F.type) && (console.log(
              "[Meld] Found target node (UI):",
              F.id,
              F.type,
              F.title
            ), M.push({
              id: String(F.id),
              type: F.type || "",
              title: F.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const F in U) {
            const T = U[F];
            T && typeof T == "object" && L(T.class_type) && (console.log(
              "[Meld] Found target node (API):",
              F,
              T.class_type
            ), M.push({
              id: F,
              type: T.class_type || ""
            }));
          }
        }
        M.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), _((F) => ({ ...F, [N]: M }));
      } catch (U) {
        console.error("Failed to fetch workflow nodes:", U);
      } finally {
        f((U) => ({ ...U, [N]: !1 }));
      }
  }, I = (N) => {
    if (!N.valid || m) return;
    if ((n ? N.mask_count : N.loader_count + N.load_image_count) <= 1) {
      $(N.name);
      return;
    }
    w === N.name ? k(null) : (k(N.name), K(N.name));
  };
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: b,
        onMouseUp: R,
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
                    children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
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
                      /* @__PURE__ */ l.jsx(jn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          ref: g,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: u,
                          onChange: (N) => h(N.target.value)
                        }
                      ),
                      u && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var N;
                            h(""), (N = g.current) == null || N.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(xe, { size: 14 })
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
                  const U = n ? N.mask_count : N.loader_count + N.load_image_count, M = w === N.name, L = y[N.name] || [], F = S[N.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${N.valid ? "" : "meld-workflow-item--invalid"} ${M ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => I(N),
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
                              disabled: m,
                              onClick: (T) => {
                                T.stopPropagation(), $(N.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Sn, { size: 14 }),
                                m ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          N.valid && U > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: m,
                              onClick: (T) => {
                                T.stopPropagation(), I(N);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                M ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Oo,
                                  {
                                    size: 14,
                                    style: {
                                      transform: M ? "rotate(90deg)" : "rotate(0deg)",
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
                    M && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: F ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: L.map((T) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: m,
                          onClick: () => $(N.name, T.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: T.title || T.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                T.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Sn, { size: 12 })
                          ]
                        },
                        T.id
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
                  disabled: m,
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
}, Ju = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var k, y, _, S, f, u, h;
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
      const E = g.replace(/\s+/g, "");
      return E === "MeldImageLoader" || E === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const E = a.nodes.find(
          (j) => d(j.type)
        );
        E && (o = String(E.id));
      }
      const g = a.nodes.find(
        (E) => {
          var j;
          return ((j = E.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const E = a[g];
          if (d(E.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a)
        if (((k = a[g].class_type) == null ? void 0 : k.replace(/\s+/g, "")) === "LoadImageMask") {
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
    let m = n.filename;
    if (n.subfolder && (m = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (m = `${m} [${n.type}]`), c) {
      const g = window.app, E = t.replace(/\.json$/i, "");
      let j = !1;
      const x = document.querySelectorAll(".workflow-tab");
      for (const b of Array.from(x)) {
        const R = b.querySelector(".workflow-label"), $ = ((y = R == null ? void 0 : R.textContent) == null ? void 0 : y.trim()) || ((_ = b.textContent) == null ? void 0 : _.trim()) || "";
        if ($ === E || $ === t || $.startsWith(`${E} `) || $.startsWith(`${E}•`)) {
          b.click(), j = !0;
          break;
        }
      }
      j || await g.loadGraphData(a, !0, !0, t), await new Promise((b) => setTimeout(b, 200));
      const C = g.graph._nodes;
      console.log("[Meld] Active graph nodes count:", C.length);
      const z = C.find(
        (b) => String(b.id) === o || d(b.type)
      );
      if (z) {
        const b = (S = z.widgets) == null ? void 0 : S.find((R) => R.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: z.id,
          type: z.type,
          imagePath: m
        }), b && (b.value = m, typeof b.callback == "function" && b.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const b = C.find(
          (R) => {
            var $;
            return String(R.id) === i || (($ = R.type) == null ? void 0 : $.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: b == null ? void 0 : b.id,
          maskFilename: r
        }), b) {
          const R = (f = b.widgets) == null ? void 0 : f.find(
            (K) => K.name === "image"
          );
          R && (R.value = `${r} [temp]`);
          const $ = (u = b.widgets) == null ? void 0 : u.find(
            (K) => K.name === "channel"
          );
          $ && ($.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      g.graph.setDirtyCanvas(!0, !0);
      try {
        await g.queuePrompt(0);
        return;
      } catch (b) {
        throw console.error("Failed to queue workflow:", b), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = m, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: te.clientId
      })
    });
    if (!w.ok) {
      const g = await w.json();
      throw new Error(((h = g.error) == null ? void 0 : h.message) || "Failed to queue workflow");
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
  const { state: s, dispatch: a } = _e(), o = p.useRef(!0);
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
  const m = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  ht({ onEscape: m });
  const v = p.useRef(!1), w = p.useCallback((f) => {
    f.target === f.currentTarget && (v.current = !0);
  }, []), k = p.useCallback(
    (f) => {
      f.target === f.currentTarget && v.current && m(), v.current = !1;
    },
    [m]
  ), y = p.useCallback(
    (f) => {
      if (!o.current) return;
      const u = d.current;
      if (u === null || !f.has(u))
        return;
      const h = c.findIndex(
        (E) => E.id === u
      );
      if (h === -1) return;
      let g = !1;
      for (let E = h + 1; E < c.length; E++)
        if (!f.has(c[E].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[E].id, mode: s.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let E = h - 1; E >= 0; E--)
          if (!f.has(c[E].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[E].id, mode: s.viewerMode }
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
        (h) => f.has(h.id)
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
  }, S = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const f = new Set(e);
      for (const h of e) {
        const g = await Oa(h);
        if (!o.current) return;
        for (const E of g)
          f.add(E.id);
      }
      const u = c.filter(
        (h) => f.has(h.id)
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
        onMouseUp: k,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (f) => f.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(It, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: m,
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
                    onClick: m,
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
  const { dispatch: t } = _e(), n = p.useCallback(() => {
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
}, tf = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = _e(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), m = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  ht({ onEscape: m });
  const v = p.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (v.current = !0);
  }, k = (j) => {
    j.target === j.currentTarget && v.current && m(), v.current = !1;
  }, y = t.images.find((j) => j.id === e), _ = p.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], x = await gh(e, j);
      a(x);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    _();
  }, [_]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || j === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await ec(e, j), await Cu(e), await r(), m();
      } catch (x) {
        console.error("Failed to link parent:", x);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await ec(e, null), await r(), m();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, u = async (j) => {
    i(!0);
    try {
      const x = await Ah(j), { id: C } = await bu({
        filename: x.name,
        subfolder: x.subfolder || "",
        type: x.type || "input"
      });
      if (C === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(C);
    } catch (x) {
      console.error("Failed to upload/register image:", x);
    } finally {
      i(!1);
    }
  }, h = (j) => {
    j.preventDefault(), j.stopPropagation(), d(!1);
    const x = j.dataTransfer.files[0];
    x != null && x.type.startsWith("image/") && u(x);
  };
  if (!y) return null;
  const g = s.filter((j) => j.is_source_match), E = s.filter((j) => !j.is_source_match);
  return Ce.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
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
                onClick: m,
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
                onDrop: h,
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
                  const x = j.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${x ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !x && S(j.id),
                      style: {
                        cursor: x ? "default" : "pointer",
                        ...x ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: et(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          x && /* @__PURE__ */ l.jsx(
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
                E.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: E.map((j) => {
                  const x = j.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${x ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !x && S(j.id),
                      style: {
                        cursor: x ? "default" : "pointer",
                        ...x ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: et(j), alt: j.filename }),
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
                                x && /* @__PURE__ */ l.jsx(
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
}, Jh = () => {
  const { state: e, dispatch: t } = _e(), { executeWorkflow: n } = Ju();
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
}, nc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const w = t;
      t = m ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((k) => k(t, w));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, Zh = (e) => e ? nc(e) : nc, eg = (e) => e;
function tg(e, t = eg) {
  const n = Gt.useSyncExternalStore(
    e.subscribe,
    Gt.useCallback(() => t(e.getState()), [e, t]),
    Gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Gt.useDebugValue(n), n;
}
const ng = (e) => {
  const t = Zh(e), n = (r) => tg(t, r);
  return Object.assign(n, t), n;
}, rg = (e) => ng;
function lg(e, t) {
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
}, sg = (e, t) => (n, r, s) => {
  let a = {
    storage: lg(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, f) => ({
      ...f,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = a.storage;
  if (!m)
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
    return m.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = s.setState;
  s.setState = (S, f) => (w(S, f), v());
  const k = e(
    (...S) => (n(...S), v()),
    r,
    s
  );
  s.getInitialState = () => k;
  let y;
  const _ = () => {
    var S, f;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var E;
      return g((E = r()) != null ? E : k);
    });
    const h = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (S = r()) != null ? S : k)) || void 0;
    return $a(m.getItem.bind(m))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const E = a.migrate(
              g.state,
              g.version
            );
            return E instanceof Promise ? E.then((j) => [!0, j]) : [!0, E];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var E;
      if (u !== i)
        return;
      const [j, x] = g;
      if (y = a.merge(
        x,
        (E = r()) != null ? E : k
      ), n(y, !0), j)
        return v();
    }).then(() => {
      u === i && (h == null || h(y, void 0), y = r(), o = !0, d.forEach((g) => g(y)));
    }).catch((g) => {
      u === i && (h == null || h(void 0, g));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (m = S.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(a.name);
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
  }, a.skipHydration || _(), y || k;
}, ag = sg, og = [
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
    color: "var(--brand-red, #ff4c4c)",
    shortcutKey: "3",
    defaultAction: { type: "delete" }
  }
], dt = rg()(
  ag(
    (e) => ({
      isOpen: !1,
      slots: og,
      buckets: {},
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n) => e((r) => {
        const s = { ...r.buckets };
        for (const a in s)
          s[a] = s[a].filter((o) => o !== n);
        return s[t] || (s[t] = []), s[t].includes(n) || (s[t] = [...s[t], n]), { buckets: s };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var s;
        return {
          buckets: {
            ...r.buckets,
            [t]: ((s = r.buckets[t]) == null ? void 0 : s.filter((a) => a !== n)) || []
          }
        };
      }),
      clearBucket: (t) => e((n) => ({
        buckets: {
          ...n.buckets,
          [t]: []
        }
      })),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map(
          (s) => s.id === t ? { ...s, ...n } : s
        )
      }))
    }),
    {
      name: "meld-light-table-storage",
      // Only persist slots configuration, not the temporary buckets
      partialize: (e) => ({ slots: e.slots })
    }
  )
), nf = (e, t) => {
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
}, rf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = _e(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: k,
    handleDelete: y,
    handleEditNotes: _,
    handleUpdateUserNotes: S
  } = hs(t, n), { getParentChain: f } = nf(t.images, t.settings), [u, h] = p.useState(null), [g, E] = p.useState(!1), [j, x] = p.useState(null), [C, z] = p.useState(!1), b = p.useRef(null), R = async (Q, de, fe = !1) => {
    try {
      await navigator.clipboard.writeText(Q), fe ? (z(!0), setTimeout(() => z(!1), 2e3)) : (x(de), setTimeout(() => x(null), 2e3));
    } catch (ve) {
      console.error("Failed to copy text: ", ve);
    }
  };
  p.useEffect(() => {
    const Q = (fe) => {
      fe.key === "Escape" && (u ? h(null) : E(!1));
    }, de = (fe) => {
      b.current && !b.current.contains(fe.target) && E(!1);
    };
    return window.addEventListener("keydown", Q), g && document.addEventListener("mousedown", de), () => {
      window.removeEventListener("keydown", Q), document.removeEventListener("mousedown", de);
    };
  }, [g, u]);
  const $ = f(e), I = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, Y = et(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: h,
    isMenuOpen: g,
    setIsMenuOpen: E,
    copiedLabel: j,
    popupCopied: C,
    menuRef: b,
    parentChain: $,
    displayFilename: I,
    imgSrc: Y,
    handleCopy: R,
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
      (Q.shiftKey || Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0 || !Q.target.closest(
        "img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb, textarea, input, button"
      )) && (Q.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || Q.preventDefault());
    },
    handleKeyDown: (Q) => {
      var fe, ve, pe;
      ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "INPUT" || ((ve = document.activeElement) == null ? void 0 : ve.tagName) === "TEXTAREA" || (pe = document.activeElement) != null && pe.isContentEditable || (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      m(e);
    },
    handleRestore: () => {
      k(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
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
  onEditTags: m,
  onEditNotes: v,
  onDelete: w,
  onRestore: k,
  showRestore: y,
  deleteLabel: _,
  showQuickShortcuts: S = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: h = ""
}) => {
  const g = (x) => {
    switch (x) {
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
        return m;
      case "edit_notes":
        return v;
      case "restore_image":
        return k;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, E = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((x) => x && x !== ""), j = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: j, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${h}`,
        onClick: (x) => {
          x.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(lh, { size: u })
      }
    ),
    S && E.map((x, C) => {
      const z = Qu.find(($) => $.id === x);
      if (!z || !z.icon) return null;
      const b = z.icon, R = g(x);
      return !R || x === "restore_image" && !y ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${h}`,
          onClick: ($) => {
            $.stopPropagation(), R();
          },
          title: z.label,
          children: /* @__PURE__ */ l.jsx(b, { size: u })
        },
        `${x}-${C}`
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
        handler: m
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Uu,
        handler: v
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Wu,
        handler: d
      },
      ...y ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Vu,
          handler: k,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: _,
        icon: It,
        handler: w,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((x) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${x.className || ""}`,
        onMouseDown: (C) => C.stopPropagation(),
        onClick: (C) => {
          C.preventDefault(), C.stopPropagation(), t(!1), setTimeout(() => x.handler(), 0);
        },
        children: [
          /* @__PURE__ */ l.jsx(x.icon, { size: 14, color: x.color }),
          /* @__PURE__ */ l.jsx("span", { children: x.label })
        ]
      },
      x.id
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
                s ? /* @__PURE__ */ l.jsx(zo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  Hm,
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
      menuRef: m,
      parentChain: v,
      displayFilename: w,
      imgSrc: k,
      handleCopy: y,
      handleClick: _,
      handleSelectToggle: S,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: h,
      handleRestoreWorkflow: g,
      handleAddUnifiedLoader: E,
      handleEditSource: j,
      handleEditTags: x,
      handleEditNotes: C,
      handleSendToWorkflow: z,
      handleRestore: b,
      handleDelete: R,
      handleRunWithWorkflow: $,
      handleRunWithMask: K,
      fetchFullImageDetails: I
    } = rf(e), [Y, N] = p.useState("idle");
    p.useEffect(() => {
      e.user_notes && Y === "saving" && N("idle");
    }, [e.user_notes, Y]);
    const U = (M) => {
      M.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), M.dataTransfer.setData("text/plain", L), dt.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: f,
        onMouseDown: u,
        onKeyDown: h,
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
                src: k,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: u,
                onClick: (M) => {
                  M.stopPropagation(), _(M);
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
                (M, L) => M.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: M.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (F) => {
                      F.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: M.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                    alt: "source thumb"
                  },
                  M.id || L
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
                onClick: async (M) => {
                  M.stopPropagation();
                  const L = await I(e.id);
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
                      onClick: async (M) => {
                        M.stopPropagation();
                        const L = await I(e.id);
                        y(L.model_name || "-", "Model");
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
                onClick: async (M) => {
                  M.stopPropagation();
                  const L = await I(e.id);
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
                      onClick: async (M) => {
                        M.stopPropagation();
                        const L = await I(e.id);
                        y(
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
                onClick: async (M) => {
                  M.stopPropagation();
                  const L = await I(e.id);
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
                      onClick: async (M) => {
                        M.stopPropagation();
                        const L = await I(e.id);
                        y(
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
                onClick: (M) => {
                  M.stopPropagation(), x();
                },
                children: [
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((M, L) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: M
                    },
                    `${M}-${L}`
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
                  onClick: (M) => {
                    M.stopPropagation(), C();
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
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: E,
              onRestoreWorkflow: g,
              onSendToWorkflow: z,
              onRunWithWorkflow: $,
              onRunWithMask: (M) => K(M),
              onEditSource: j,
              onEditTags: x,
              onEditNotes: C,
              onRestore: b,
              showRestore: t.viewScope === "trash",
              onDelete: R,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            ig,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (M) => y(M, "", !0),
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
      menuRef: m,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: k,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: _,
      handleRunWithMask: S,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: h,
      handleDelete: g,
      handleRestore: E
    } = rf(e), j = v.viewScope === "trash", x = j ? "Delete Permanently" : "Move to Trash", C = (z) => {
      z.stopPropagation();
      let b = String(e.id);
      t && v.selectedIds.size > 0 && (b = Array.from(v.selectedIds).join(",")), z.dataTransfer.setData("text/plain", b), dt.getState().setIsOpen(!0);
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
                onClick: (z) => {
                  z.stopPropagation(), o(z);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            Uo,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: k,
              onSendToWorkflow: y,
              onRunWithWorkflow: _,
              onRunWithMask: S,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: h,
              onDelete: g,
              onRestore: E,
              showRestore: j,
              deleteLabel: x,
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
  const { state: t } = _e();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(sf, { image: e }) : /* @__PURE__ */ l.jsx(lf, { image: e });
}, dg = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(null);
  return p.useEffect(() => {
    const c = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && o(!0);
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
  const { state: e, dispatch: t } = _e(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await $h(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
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
  const { state: e } = _e(), { slots: t, addToBucket: n } = dt();
  p.useEffect(() => {
    const r = (s) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (m) => m.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((m) => {
        n(o.id, String(m));
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
      return /* @__PURE__ */ l.jsx(It, { size: t });
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
  const { buckets: t } = dt(), { state: n, dispatch: r } = _e(), [s, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(e.label), [m, v] = p.useState(
    e.defaultAction.type
  ), w = p.useRef(null), k = p.useRef(null), y = t[e.id] || [], _ = y.length;
  p.useEffect(() => {
    const x = (C) => {
      w.current && !w.current.contains(C.target) && a(!1), k.current && !k.current.contains(C.target) && i(!1);
    };
    return (s || o) && document.addEventListener("mousedown", x), () => {
      document.removeEventListener("mousedown", x);
    };
  }, [s, o]);
  const S = y.map((x) => n.images.find((C) => C.id === Number(x))).filter(Boolean), f = (x) => {
    x.preventDefault(), x.stopPropagation(), x.currentTarget.classList.add("drag-over");
  }, u = (x) => {
    x.currentTarget.classList.remove("drag-over");
  }, h = (x) => {
    x.preventDefault(), x.stopPropagation(), x.currentTarget.classList.remove("drag-over");
    const C = x.dataTransfer.getData("text/plain");
    C && C.split(",").forEach((b) => {
      b && dt.getState().addToBucket(e.id, b.trim());
    });
  }, g = (x, C) => {
    x.stopPropagation(), x.dataTransfer.setData("text/plain", String(C)), x.dataTransfer.setData("application/meld-lt-source-slot", e.id), x.dataTransfer.effectAllowed = "move";
  }, E = (x, C) => {
    x.dataTransfer.dropEffect === "none" && dt.getState().removeFromBucket(e.id, String(C));
  }, j = (x) => {
    if (_ === 0) return;
    const C = x || e.defaultAction.type, z = {
      type: C,
      value: C === e.defaultAction.type ? e.defaultAction.value : void 0
    }, b = y.map(($) => Number($)), R = b.map(($) => n.images.find((K) => K.id === $)).filter(Boolean);
    pg(z, b, R, r), dt.getState().clearBucket(e.id), a(!1);
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: f,
      onDragLeave: u,
      onDrop: h,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: _ === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : S.map((x) => {
          const C = "type" in x ? x.type : "output", z = `/api/view?filename=${encodeURIComponent(x.filename)}&type=${C}&subfolder=${encodeURIComponent(x.subfolder || "")}`;
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onDragStart: (b) => g(b, x.id),
              onDragEnd: (b) => E(b, x.id),
              children: /* @__PURE__ */ l.jsx("img", { src: z, alt: x.filename, draggable: !1 })
            },
            x.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__action-btn",
              onClick: () => j(),
              disabled: _ === 0,
              children: [
                mg(e.defaultAction.type),
                /* @__PURE__ */ l.jsx("span", { className: "meld-lt-slot__action-label", children: e.defaultAction.type === "delete" ? "Delete" : e.defaultAction.type === "add_tag" ? "Tag" : "Commit" })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__menu-wrapper", ref: w, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => a(!s),
                disabled: _ === 0,
                children: /* @__PURE__ */ l.jsx(Qm, { size: 14 })
              }
            ),
            s && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__dropdown", children: [
              /* @__PURE__ */ l.jsxs("button", { type: "button", onClick: () => j("add_tag"), children: [
                /* @__PURE__ */ l.jsx(Cn, { size: 12 }),
                " Add Tag"
              ] }),
              /* @__PURE__ */ l.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => j("send_to_node"),
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
                  onClick: () => j("delete"),
                  children: [
                    /* @__PURE__ */ l.jsx(It, { size: 12 }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: k, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => i(!o),
                title: "Slot Settings",
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
                    onChange: (x) => d(x.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-action-${e.id}`, children: "Default Action:" }),
                /* @__PURE__ */ l.jsxs(
                  "select",
                  {
                    id: `slot-action-${e.id}`,
                    value: m,
                    onChange: (x) => v(x.target.value),
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
                    dt.getState().updateSlot(e.id, {
                      label: c,
                      defaultAction: {
                        type: m,
                        value: m === "add_tag" ? "favorite" : void 0
                      }
                    }), i(!1);
                  },
                  children: "Save Settings"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}, gg = () => {
  var o;
  fg();
  const { isOpen: e, slots: t } = dt(), [n, r] = p.useState(((o = t[0]) == null ? void 0 : o.id) || "keep"), s = p.useRef(null);
  if (p.useEffect(() => {
    let i = document.getElementById(
      "meld-light-table-portal"
    );
    if (!i) {
      i = document.createElement("div"), i.id = "meld-light-table-portal";
      const c = document.querySelector(".comfyui-body-bottom");
      c ? c.appendChild(i) : document.body.appendChild(i);
    }
    return s.current = i, () => {
    };
  }, []), !e || !s.current) return null;
  const a = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((i) => {
        var c;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${n === i.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => r(i.id),
            style: { "--tab-color": i.color },
            onDragOver: (d) => {
              d.preventDefault(), r(i.id);
            },
            children: [
              i.label,
              "   (",
              ((c = dt.getState().buckets[i.id]) == null ? void 0 : c.length) || 0,
              ")"
            ]
          },
          i.id
        );
      }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => {
            t.forEach((i) => {
              dt.getState().clearBucket(i.id);
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
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((i) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: n === i.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(hg, { config: i })
      },
      i.id
    )) })
  ] });
  return Ce.createPortal(a, s.current);
}, af = () => {
  const { state: e, refreshFavorites: t } = _e(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState(null), [c, d] = p.useState(""), [m, v] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = p.useCallback(
    async (S, f, u) => {
      S.stopPropagation();
      const h = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(h))
        try {
          await tc(f), await t();
        } catch (g) {
          q.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), k = p.useCallback(
    (S, f) => {
      S.stopPropagation(), i(f), d(f.name), v(f.query);
    },
    []
  ), y = p.useCallback(async () => {
    if (!(!o || !c.trim() || !m.trim()))
      try {
        r(!0), await Ch(
          o.id,
          c,
          m
        ), await t(), i(null);
      } catch (S) {
        q.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, m, t]), _ = p.useCallback(async () => {
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
          q.error("Failed to delete favorite:", u);
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
      q.error("Failed to save favorite:", f);
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
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: k,
    handleSaveEditFavorite: y,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, of = ({
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
                  children: /* @__PURE__ */ l.jsx(ju, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
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
                  children: /* @__PURE__ */ l.jsx(It, { size: 14 })
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
  const { state: r } = _e(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: k,
    handleSaveEditFavorite: y
  } = af(), [_, S] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
  if (ht({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), p.useEffect(() => {
    if (e) {
      let x = e.left;
      const C = e.bottom + 5;
      x + 300 > window.innerWidth - 10 && (x = window.innerWidth - 300 - 10), x < 10 && (x = 10), S({ top: C, left: x });
    }
  }, [e]), p.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const h = (E) => {
    E.stopPropagation(), E.preventDefault();
  }, g = (E) => {
    E.stopPropagation();
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
          onMouseDown: (E) => E.stopPropagation()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: f,
          onClick: h,
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
                children: r.favorites.map((E) => /* @__PURE__ */ l.jsx(
                  of,
                  {
                    fav: E,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: k,
                    onDelete: w
                  },
                  E.id
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
          onMouseDown: (E) => {
            E.target === E.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (E) => E.stopPropagation(),
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
                                onChange: (E) => d(E.target.value),
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
                                onKeyDown: (E) => {
                                  E.key === "Enter" && y(), E.key === "Escape" && i(null);
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
                                value: m,
                                onChange: (E) => v(E.target.value),
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
                                onKeyDown: (E) => {
                                  E.key === "Enter" && !E.shiftKey && (E.preventDefault(), y()), E.key === "Escape" && i(null);
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
                      disabled: s || !c.trim() || !m.trim(),
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
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, m] = p.useState([]), [v, w] = p.useState([]), k = e.settings["search.show_all_keywords"], [y, _] = p.useState(-1), [S, f] = p.useState(null), u = p.useRef(null), h = p.useRef(e.searchQuery), g = p.useCallback(async () => {
    if (v.length > 0) return;
    const N = await Sh();
    w(N);
  }, [v.length]);
  p.useEffect(() => {
    jh().then((N) => {
      f(N);
    }), k && g();
  }, [g, k]);
  const E = p.useMemo(() => {
    if (!S) return null;
    const N = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${N}):(.*)$`, "i");
  }, [S]), j = p.useCallback(() => {
    const N = !k;
    N && g(), n("search.show_all_keywords", N);
  }, [k, g, n]), x = r !== h.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    kh().then((N) => {
      m(N);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), h.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var N;
    (N = u.current) == null || N.focus();
  }, []);
  const C = p.useCallback(
    (N, U = !0) => {
      h.current !== N && (q.log("SearchBar: triggering search", { query: N }), t({ type: "SET_SEARCH_QUERY", payload: N }), U && c(!1), h.current = N);
    },
    [t]
  );
  p.useEffect(() => {
    const N = setTimeout(async () => {
      if (r === h.current)
        return;
      if (!e.settings["search.input_suggest"] || !E) {
        o([]), c(!1);
        return;
      }
      const U = pl(r), M = U[U.length - 1];
      if (M) {
        const L = M.match(E);
        if (L) {
          const F = L[1].toLowerCase();
          let T = L[2];
          T.startsWith('"') && (T = T.substring(1)), T.endsWith('"') && (T = T.substring(0, T.length - 1));
          const ee = await _h(T, F);
          o(ee), c(ee.length > 0), _(-1);
        } else {
          const F = M.replace(/^([-!])/, "").toLowerCase();
          if (F && S) {
            const T = S.all_prefixes.filter((ee) => ee.startsWith(F)).map((ee) => ({
              type: ee,
              value: "",
              count: 0
            }));
            if (T.length > 0) {
              o(T), c(!0), _(-1);
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
    E,
    S
  ]);
  const z = p.useCallback(
    (N) => {
      var ce;
      const U = pl(r), L = (U.pop() || "").match(/^([-!])/), F = L ? L[1] : "", ee = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(N.type);
      if (N.value === "") {
        const V = `${[...U, `${F}${N.type}:`].join(" ").trim()}`;
        s(V);
      } else {
        const V = ee ? N.value : `"${N.value}"`, A = `${[
          ...U,
          `${F}${N.type}:${V}`
        ].join(" ").trim()} `;
        s(A), o([]), c(!1);
      }
      (ce = u.current) == null || ce.focus();
    },
    [r, S]
  ), b = (N) => {
    N.key === "Enter" ? C(r) : N.key === "Tab" ? i && y >= 0 && (z(a[y]), N.preventDefault()) : N.key === "ArrowDown" ? i && (_((U) => Math.min(U + 1, a.length - 1)), N.preventDefault()) : N.key === "ArrowUp" ? i && (_((U) => Math.max(U - 1, -1)), N.preventDefault()) : N.key === "Escape" && c(!1);
  }, R = p.useCallback(() => {
    s(""), C("");
  }, [C]), $ = p.useCallback(
    (N, U, M = !1) => {
      var Q;
      const L = pl(r), F = L[L.length - 1] || "";
      let T = !1;
      const ee = F.replace(/^([-!])/, "").toLowerCase();
      ee && N.toLowerCase().startsWith(ee) && (T = !0);
      const ce = F.match(/^([-!])/), V = T && ce ? ce[1] : "";
      if (T && L.pop(), M) {
        const de = [...L, `${V}${N}:`].filter(Boolean).join(" ");
        s(de), (Q = u.current) == null || Q.focus();
        return;
      }
      const J = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(N) ? U : `"${U}"`, W = `${V}${N}:${J}`, le = [...L, W].filter(Boolean).join(" ");
      s(le), C(le);
    },
    [r, C, S]
  ), K = p.useCallback(
    (N) => {
      s(N), N || C("");
    },
    [C]
  ), I = p.useCallback(() => {
    if (r === h.current || !E)
      return;
    const N = pl(r), U = N[N.length - 1];
    if (!U) return;
    const M = !!U.match(E), L = U.replace(/^([-!])/, "").toLowerCase(), F = L && (S == null ? void 0 : S.all_prefixes.some((T) => T.startsWith(L)));
    (M || F) && c(!0);
  }, [r, E, S]), Y = p.useCallback(() => {
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
    showAllKeywords: k,
    toggleShowAllKeywords: j,
    selectedIndex: y,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: x,
    handleSearch: C,
    handleKeyDown: b,
    applySuggestion: z,
    clearSearch: R,
    applySearchSuggestion: $,
    handleInputChange: K,
    handleInputFocus: I,
    handleInputBlur: Y
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
  toggleShowAllKeywords: m,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: k,
  onEditFavorite: y,
  onDeleteFavorite: _
}) => {
  const S = (g, E, j) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, j === "all"),
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
      onMouseEnter: (x) => {
        x.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", x.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", x.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (x) => {
        x.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", x.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", x.currentTarget.style.color = "var(--meld-text-color)";
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
    `${j}-${g.type}:${g.value}:${E}`
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
      children: t.map((g, E) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), s(g);
          },
          onMouseEnter: () => r(E),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: E === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
              (g, E) => S(g, E, "quick")
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
                    (g, E) => S({ type: g, value: "" }, E, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), h = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
                onSelect: k,
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
        h()
      ]
    }
  );
}, xg = () => {
  const { state: e } = _e(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: m,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: k,
    handleKeyDown: y,
    applySuggestion: _,
    clearSearch: S,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: h,
    handleInputBlur: g
  } = vg(), {
    isSaving: E,
    toastMessage: j,
    editingFavorite: x,
    setEditingFavorite: C,
    editFavoriteName: z,
    setEditFavoriteName: b,
    editFavoriteQuery: R,
    setEditFavoriteQuery: $,
    handleDeleteFavorite: K,
    handleEditFavorite: I,
    handleSaveEditFavorite: Y,
    handleSaveFavorite: N
  } = af();
  ht({
    onEscape: () => C(null),
    enabled: !!x
  });
  const U = p.useRef(null), M = p.useRef(!1);
  p.useEffect(() => {
    x && U.current && U.current.focus();
  }, [x]);
  const L = (T) => {
    T.target === T.currentTarget && (M.current = !0);
  }, F = (T) => {
    T.target === T.currentTarget && M.current && C(null), M.current = !1;
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
                        onClick: () => k(t),
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
                        onMouseEnter: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)", w ? (T.currentTarget.style.filter = "brightness(1.15)", T.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (T) => {
                          T.currentTarget.style.transform = "none", w ? (T.currentTarget.style.filter = "none", T.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (T) => {
                          T.currentTarget.style.transform = "translateY(1px)", T.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)";
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
                        ref: v,
                        type: "text",
                        value: t,
                        onChange: (T) => u(T.target.value),
                        onKeyDown: y,
                        onBlur: g,
                        onFocus: h,
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
                        disabled: E,
                        title: e.favorites.some((T) => T.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                            color: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ l.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
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
                  setSelectedIndex: m,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: f,
                  favorites: e.favorites,
                  onSelectFavorite: (T) => {
                    n(T), k(T);
                  },
                  onEditFavorite: I,
                  onDeleteFavorite: K
                }
              )
            ]
          }
        ),
        x && Ce.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: L,
              onMouseUp: F,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (T) => T.stopPropagation(),
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
                                    ref: U,
                                    type: "text",
                                    value: z,
                                    onChange: (T) => b(T.target.value),
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
                                    onKeyDown: (T) => {
                                      T.key === "Enter" && Y(), T.key === "Escape" && C(null);
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
                                    onChange: (T) => $(T.target.value),
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
                                    onKeyDown: (T) => {
                                      T.key === "Enter" && !T.shiftKey && (T.preventDefault(), Y()), T.key === "Escape" && C(null);
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
                          onClick: Y,
                          disabled: E || !z.trim() || !R.trim(),
                          children: E ? "Saving..." : "Save Changes"
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
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [m, v] = p.useState(!1), [w, k] = p.useState(null), [y, _] = p.useState(""), [S, f] = p.useState(!1), u = p.useRef(null), h = p.useCallback(async () => {
    a(!0);
    try {
      const R = await $o();
      r(R);
    } catch (R) {
      console.error("Failed to fetch tags:", R);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    h();
  }, [h]), p.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const g = async (R) => {
    R.preventDefault();
    const $ = c.trim();
    if (!(!$ || m)) {
      if ($.toLowerCase() === _t) {
        alert(
          `Tag name '${_t}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((K) => K.name.toLowerCase() === $.toLowerCase())) {
        alert(`Tag "${$}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Dh($), d(""), await h();
      } catch (K) {
        console.error("Failed to add tag:", K);
      } finally {
        v(!1);
      }
    }
  }, E = async (R, $) => {
    if (confirm(`Are you sure you want to delete tag "${$}"?`))
      try {
        await Ph(R), await h();
      } catch (K) {
        console.error("Failed to delete tag:", K);
      }
  }, j = (R) => {
    k(R.id), _(R.name);
  }, x = () => {
    k(null), _("");
  }, C = async (R) => {
    R.preventDefault();
    const $ = y.trim();
    if (!$ || w === null || S) return;
    if ($.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    const K = n.find((I) => I.id === w);
    if (K && K.name === $) {
      x();
      return;
    }
    if (n.some(
      (I) => I.id !== w && I.name.toLowerCase() === $.toLowerCase()
    )) {
      alert(`Tag "${$}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Rh(w, $), x(), await h();
    } catch (I) {
      console.error("Failed to rename tag:", I), alert(I instanceof Error ? I.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, z = (R) => {
    t(`tag:${R}`);
  }, b = p.useMemo(() => n.filter(
    (R) => R.name.toLowerCase().includes(o.toLowerCase())
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
            disabled: m
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || m,
            children: [
              /* @__PURE__ */ l.jsx(Fo, { size: 14 }),
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
            onChange: (R) => i(R.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: b.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : b.map((R) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === R.id ? /* @__PURE__ */ l.jsxs(
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
                value: y,
                onChange: ($) => _($.target.value),
                onKeyDown: ($) => $.key === "Escape" && x()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !y.trim(),
                children: /* @__PURE__ */ l.jsx(zo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: x,
                disabled: S,
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
              onClick: () => z(R.name),
              children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(R),
              children: /* @__PURE__ */ l.jsx(ju, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => E(R.id, R.name),
              children: /* @__PURE__ */ l.jsx(It, { size: 14 })
            }
          )
        ] })
      ] }) }, R.id)) })
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
    handleEditNotes: m,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: S,
    handleRunWithMask: f,
    handleEditSource: u
  } = hs(e, t), { getParentChain: h } = nf(a, c), [g, E] = p.useState(!1), [j, x] = p.useState(!1), [C, z] = p.useState(
    c["viewer.show_details_by_default"]
  ), [b, R] = p.useState(null), $ = b ?? c["viewer.show_thumbnails"], [K, I] = p.useState(!1), [Y, N] = p.useState(!1), [U, M] = p.useState(null), [L, F] = p.useState(null), [T, ee] = p.useState(
    null
  ), ce = p.useRef(null), V = p.useRef(!0);
  p.useEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const A = p.useRef(s);
  p.useEffect(() => {
    A.current = s;
  }, [s]);
  const D = p.useMemo(() => {
    const G = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lineage" ? i : a.filter(
      (ne) => ne.exists !== !1 && (c["gallery.show_parent_images"] || !ne.has_children || G)
    );
  }, [o, i, a, c, e.searchQuery]), J = s === null ? -1 : D.findIndex((G) => G.id === s), W = (o === "lineage" && i.length > 0 ? i : a).find((G) => G.id === s), le = p.useCallback(
    async (G = !1) => {
      if (!W) return;
      const ne = g ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!G && ne === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [W.id],
            hasLineage: !!(W.parent_id || W.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const P = e.viewScope === "trash", ae = /* @__PURE__ */ new Set([W.id]);
        if (ne === "lineage") {
          const X = await Oa(W.id);
          for (const re of X)
            ae.add(re.id);
        }
        if (!V.current || A.current === null) return;
        if (D.length > ae.size) {
          let X = !1;
          for (let re = J + 1; re < D.length; re++)
            if (!ae.has(D[re].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: D[re].id, mode: o }
              }), X = !0;
              break;
            }
          if (!X) {
            for (let re = J - 1; re >= 0; re--)
              if (!ae.has(D[re].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: D[re].id, mode: o }
                }), X = !0;
                break;
              }
          }
          X || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await za(Array.from(ae), P), !P) {
          const X = D.filter(
            (re) => ae.has(re.id)
          );
          M(X), F(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ae) });
      } catch (P) {
        t({
          type: "SET_ERROR",
          payload: P instanceof Error ? P.message : String(P)
        });
      }
    },
    [
      W,
      g,
      c,
      e.viewScope,
      D,
      J,
      o,
      t
    ]
  ), Q = p.useCallback(() => {
    W && d(W);
  }, [W, d]), de = p.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: g } });
  }, [t, g]), fe = p.useCallback(async () => {
    const G = g ? c["fullscreen.loop"] : c["viewer.loop"];
    if (J === 0 && o === "gallery" && e.pagination.hasMore && !Y && G) {
      N(!0);
      try {
        const ne = e.pagination.limit, P = e.pagination.total, ae = Math.max(0, P - ne), X = await Cl(
          ae,
          ne,
          e.searchQuery
        );
        if (!V.current || (t({ type: "APPEND_IMAGES", payload: X }), A.current === null)) return;
        if (X.images.length > 0) {
          const re = X.images[X.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: re.id, mode: "gallery" }
          });
        }
      } catch (ne) {
        console.error("Failed to jump to end:", ne);
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
      const ne = ce.current;
      ne && (document.fullscreenElement ? document.exitFullscreen() : ne.requestFullscreen().catch((P) => {
        console.error(
          `Error attempting to enable full-screen mode: ${P.message}`
        );
      }));
    },
    []
  ), pe = p.useCallback(async () => {
    W && (D.length > 1 ? de() : t({ type: "CLOSE_VIEWER" }), await v(W));
  }, [W, D.length, de, v, t]), Ke = p.useCallback(async () => {
    if (!U || U.length === 0) return;
    const G = U.map((P) => P.id), ne = G[0];
    try {
      const P = await Wo(G);
      if (!V.current) return;
      if (t({ type: "ADD_IMAGES", payload: U }), e.viewScope === "trash") {
        const ae = P.restored_ids || G;
        t({ type: "REMOVE_IMAGES", payload: ae });
      }
      if (M(null), !V.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: ne, mode: o }
      });
    } catch (P) {
      t({
        type: "SET_ERROR",
        payload: P instanceof Error ? P.message : String(P)
      });
    }
  }, [U, t, o, e.viewScope]), tt = p.useCallback(async () => {
    if (U && U.length > 0)
      await Ke();
    else if (L && L.type === "tags") {
      const { imageId: G, addTags: ne, removeTags: P } = L;
      try {
        await Fa([G], ne, P);
        const ae = (o === "lineage" ? i : a).find((X) => X.id === G);
        if (ae) {
          const X = [...ae.tags];
          for (const he of ne)
            X.includes(he) || X.push(he);
          const re = X.filter((he) => !P.includes(he));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ae, tags: re }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: G, mode: o }
          });
        }
        F(null);
      } catch (ae) {
        t({
          type: "SET_ERROR",
          payload: ae instanceof Error ? ae.message : String(ae)
        });
      }
    }
  }, [
    U,
    L,
    Ke,
    a,
    i,
    o,
    t
  ]), qr = p.useCallback(
    async (G) => {
      if (!G || !W) return;
      const ne = W.id, P = [...W.tags], ae = G.split(/\s+/), X = [], re = [];
      let he = !1, Oe = !1, Ge = !1;
      for (const Ie of ae)
        if (Ie.startsWith("tag:")) {
          const ke = Ie.substring(4);
          ke && !P.includes(ke) && !X.includes(ke) && X.push(ke);
        } else if (Ie.startsWith("-tag:")) {
          const ke = Ie.substring(5);
          ke && P.includes(ke) && !re.includes(ke) && re.push(ke);
        } else if (Ie.startsWith("tag-toggle:")) {
          const ke = Ie.substring(11);
          ke && (P.includes(ke) ? re.includes(ke) || re.push(ke) : X.includes(ke) || X.push(ke));
        } else Ie === "next" ? he = !0 : Ie === "prev" ? Oe = !0 : Ie === "delete" && (Ge = !0);
      if (X.length > 0 || re.length > 0)
        try {
          await Fa(
            [ne],
            X,
            re
          );
          const Ie = [...P];
          for (const Ut of X)
            Ie.includes(Ut) || Ie.push(Ut);
          const ke = Ie.filter((Ut) => !re.includes(Ut));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...W, id: ne, tags: ke }
          }), F({
            type: "tags",
            imageId: ne,
            addTags: [...re],
            removeTags: [...X]
          }), M(null);
        } catch (Ie) {
          console.error("Failed to update tags via shortcut:", Ie);
        }
      Ge ? le(!0) : he ? de() : Oe && fe();
    },
    [W, t, de, fe, le]
  );
  p.useEffect(() => {
    const G = (P) => {
      const ae = P.target, X = ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable;
      if (X && P.key !== "Escape") {
        P.key === "Enter" && (P.ctrlKey || P.metaKey) && P.preventDefault();
        return;
      }
      if (s === null) return;
      const re = P.key === "Delete" || P.key === "Backspace", he = P.key === "ArrowRight" || P.key === "ArrowLeft", Oe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        P.key
      ), Ge = P.key === "Escape", Ie = (P.ctrlKey || P.metaKey) && (P.key === "z" || P.key === "Z" || P.code === "KeyZ"), ke = /^[0-9]$/.test(P.key) && !P.ctrlKey && !P.metaKey && !P.altKey && P.code !== "KeyZ";
      if (re || he || Oe || Ge || Ie || ke)
        if (X)
          if (Ge) {
            if (e.activeModal.type !== "none") {
              P.preventDefault(), P.stopPropagation();
              return;
            }
            P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation();
          } else
            return;
        else {
          if (Ge && e.activeModal.type !== "none") {
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
        de();
      else if (P.key === "ArrowLeft")
        fe();
      else if (P.key === "f" || P.key === "F")
        ve(P);
      else if (P.key === "i" || P.key === "I")
        z((Ut) => !Ut);
      else if (P.key === "t" || P.key === "T")
        Q();
      else if ((P.key === "r" || P.key === "R") && e.viewScope === "trash")
        pe();
      else if (P.key === "Delete")
        le();
      else if ((P.ctrlKey || P.metaKey) && (P.key === "z" || P.key === "Z"))
        tt();
      else if (ke && !X) {
        const Ut = `viewer.shortcut.${P.key}`, ys = c[Ut];
        typeof ys == "string" && ys && (ee(P.key), setTimeout(() => {
          V.current && ee(null);
        }, 500), qr(ys));
      }
    };
    window.addEventListener("keydown", G, { capture: !0 });
    const ne = () => {
      const P = !!document.fullscreenElement;
      E(P), z(P ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", ne), () => {
      window.removeEventListener("keydown", G, { capture: !0 }), document.removeEventListener("fullscreenchange", ne);
    };
  }, [
    s,
    t,
    ve,
    de,
    fe,
    c,
    le,
    e.activeModal.type,
    tt,
    Q,
    pe,
    e.viewScope,
    qr
  ]), p.useEffect(() => {
    s !== null && r(s).catch((G) => {
      console.error("Failed to fetch full image details for viewer:", G);
    });
  }, [s, r]), p.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (I(!0), Oa(s).then((G) => {
      V.current && t({ type: "SET_LINEAGE", payload: G });
    }).catch((G) => {
      console.error("Failed to fetch lineage:", G);
    }).finally(() => {
      V.current && I(!1);
    }));
  }, [o, s, i.length, t]), p.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || J !== -1 && J >= D.length - 15 && n();
  }, [
    s,
    D.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    J
  ]);
  const Vo = p.useMemo(() => {
    if (!$ || J === -1) return [];
    const G = c["viewer.thumbnail_window_size"], ne = Math.floor(G / 2);
    let P = Math.max(0, J - ne);
    const ae = Math.min(D.length, P + G);
    return ae === D.length && (P = Math.max(0, ae - G)), D.slice(P, ae).map((X, re) => ({
      img: X,
      absIndex: P + re
    }));
  }, [D, J, c, $]), gs = p.useMemo(() => W ? h(W) : [], [W, h]);
  return p.useEffect(() => {
    var G, ne;
    if (s !== null) {
      if ($) {
        const P = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        P && P.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((G = document.activeElement) == null ? void 0 : G.tagName) === "CANVAS" && document.activeElement.blur(), (ne = ce.current) == null || ne.focus();
    }
  }, [s, $]), p.useEffect(() => {
    if (s === null || D.length === 0) return;
    const G = D.map((he) => he.id), ne = G.indexOf(s);
    if (ne === -1) return;
    const P = g ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: ae, nextId: X } = kg({
      ids: G,
      index: ne,
      loopEnabled: P,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), re = setTimeout(() => {
      const he = [ae, X].filter(
        (Oe) => Oe !== null && Oe !== s
      );
      he.length !== 0 && Promise.allSettled(he.map((Oe) => r(Oe))).then(
        (Oe) => {
          for (const Ge of Oe)
            Ge.status === "rejected" && q.warn(
              "Prefetching adjacent image details failed",
              Ge.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(re);
  }, [
    s,
    D,
    g,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), p.useEffect(() => {
    if (s === null || D.length === 0) return;
    const G = D.findIndex(
      (X) => X.id === s
    );
    if (G === -1) return;
    const ne = (X) => et(X), P = [
      G + 1,
      G + 2,
      G - 1
    ], ae = setTimeout(() => {
      for (const X of P)
        if (X >= 0 && X < D.length) {
          const re = D[X], he = new Image();
          he.src = ne(re);
        }
    }, 150);
    return () => clearTimeout(ae);
  }, [s, D]), {
    isFullscreen: g,
    showDetails: C,
    setShowDetails: z,
    showThumbnails: $,
    setShowThumbnailsOverride: R,
    isLoadingLineage: K,
    isJumping: Y,
    isMenuOpen: j,
    setIsMenuOpen: x,
    activeShortcutKey: T,
    lastDeletedImages: U,
    setLastDeletedImages: M,
    overlayRef: ce,
    handleNext: de,
    handlePrevious: fe,
    handleDelete: le,
    handleUpdateUserNotes: w,
    handleEditNotes: () => W && m(W),
    handleTagEdit: Q,
    handleRestore: pe,
    handleUndo: tt,
    handleRestoreWorkflow: async () => {
      if (!W) return;
      await k(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!W) return;
      await y(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!W) return;
      _(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => W && S(W),
    handleRunWithMask: (G) => W && f(W, G),
    handleEditSource: () => W && u(W),
    toggleFullscreen: ve,
    currentIndex: J,
    currentThumbnails: D,
    image: W,
    windowedThumbnails: Vo,
    parentChain: gs
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
  const [i, c] = p.useState("idle");
  p.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], m = d === "always" || d === "if_present" && e.user_notes;
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
                onClick: (k) => {
                  k.stopPropagation(), a({
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
        m && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
}, cf = p.memo(
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
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = _e(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: k,
    setLastDeletedImages: y,
    overlayRef: _,
    handleNext: S,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: h,
    handleRestore: g,
    handleRestoreWorkflow: E,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: C,
    handleRunWithMask: z,
    handleEditSource: b,
    handleDelete: R,
    toggleFullscreen: $,
    image: K,
    windowedThumbnails: I,
    parentChain: Y
  } = Sg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), N = p.useRef(null), U = p.useRef(null), { executeWorkflow: M } = Ju(), L = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!K) return null;
  const { viewerImageId: F, viewerMode: T } = e, ee = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
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
                      onClick: $,
                      type: "button",
                      title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: s ? /* @__PURE__ */ l.jsx(rh, { size: 20 }) : /* @__PURE__ */ l.jsx(nh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Uo,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: U,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: E,
                      onSendToWorkflow: x,
                      onRunWithWorkflow: C,
                      onRunWithMask: z,
                      onEditSource: b,
                      onEditTags: u,
                      onEditNotes: h,
                      onDelete: R,
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
                      children: /* @__PURE__ */ l.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                ee && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ l.jsx(_u, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Ur, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: N,
                      src: et(K),
                      alt: K.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
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
                    children: /* @__PURE__ */ l.jsx(Oo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  Eg,
                  {
                    image: K,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: ee,
                    parentChain: Y,
                    dispatch: t,
                    onEditNotes: h
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Ng,
                  {
                    windowedThumbnails: I,
                    viewerImageId: F,
                    currentImage: K,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: T
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  jg,
                  {
                    settings: e.settings,
                    activeShortcutKey: k
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
                  const A = e.activeModal.maskFilename;
                  for (const D of e.activeModal.images)
                    await M(
                      ce,
                      D,
                      A,
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
              onSuccess: y
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
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = _e(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), [d, m] = p.useState(e.pagination.limit);
  p.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = p.useRef(null), k = p.useRef(null), y = p.useMemo(() => {
    const S = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((f) => e.viewScope === "trash" ? f.exists !== !1 || e.settings["gallery.trash.show_missing"] : f.exists !== !1 && (e.settings["gallery.show_parent_images"] || !f.has_children || S));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), _ = p.useMemo(
    () => y.slice(0, d),
    [y, d]
  );
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (q.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), p.useEffect(() => {
    const S = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e.activeModal.type, e.selectedIds.size, t]), p.useEffect(() => {
    const S = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            q.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < y.length ? (q.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), m((h) => h + e.pagination.limit)) : e.pagination.hasMore ? (q.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : q.log(
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
    return f && S.observe(f), () => {
      f && S.unobserve(f);
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
    const S = e.viewerImageId ?? k.current;
    if (S !== null && y.some((u) => u.id === S)) {
      const u = y.findIndex((g) => g.id === S);
      if (u >= d) {
        m(
          Math.ceil((u + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const h = document.querySelector(
        `[data-image-id="${S}"]`
      );
      h && (h.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (k.current = null));
    }
    e.viewerImageId !== null && (k.current = e.viewerImageId);
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
    visibleImages: _,
    isSearchActive: v,
    loadMoreRef: w
  };
}, Mg = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = _e(), { handleRunWithWorkflow: s } = hs(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const o = e.viewScope === "trash", i = () => {
    const d = e.images.filter(
      (v) => e.selectedIds.has(v.id)
    ), m = /* @__PURE__ */ new Set();
    for (const v of d)
      if (v.tags)
        for (const w of v.tags)
          m.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(m)
      }
    });
  }, c = () => {
    const d = e.images.filter(
      (m) => e.selectedIds.has(m.id)
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
                  It,
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
                  It,
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
}, Ig = () => {
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
    visibleImages: m,
    isSearchActive: v,
    loadMoreRef: w
  } = bg(), { isOpen: k, setIsOpen: y } = dt();
  q.log("GalleryPanel: isLightTableOpen =", k);
  const [_, S] = p.useState(!1), [f, u] = p.useState(null), h = p.useRef(null), g = p.useCallback(() => {
    h.current && (u(
      h.current.getBoundingClientRect()
    ), S(!0));
  }, []), E = p.useCallback(
    (j) => {
      t({ type: "SET_SEARCH_QUERY", payload: j }), i(j), a("search"), S(!1);
    },
    [t, i, a]
  );
  return q.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: m.length,
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
              /* @__PURE__ */ l.jsx(It, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => r("gallery.trash.show_missing", j.target.checked)
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
                ref: h,
                type: "button",
                onClick: g,
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
                  er,
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
                  q.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    k,
                    "to",
                    !k
                  ), y(!k);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: k ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ l.jsx(
                  sh,
                  {
                    size: 14,
                    fill: k ? "var(--brand-yellow, #ffd700)" : "none",
                    style: { opacity: k ? 1 : 0.8 }
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
                children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const x = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", x);
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
            onSearch: (j) => {
              t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: m.map((j) => {
                const x = e.settings["sidebar.thumbnail_size"] || 100, C = e.settings["gallery.view_mode"] === "grid_only", z = C && j.width && j.height ? Math.min(
                  x,
                  x * j.width / j.height
                ) + 10 : C ? x + 10 : "100%";
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    "data-image-id": j.id,
                    style: {
                      width: C ? "auto" : "100%",
                      flexShrink: 0,
                      display: C ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ l.jsx(
                      dg,
                      {
                        height: C ? x + 10 : Math.max(x, 150),
                        style: {
                          width: typeof z == "number" ? `${z}px` : z,
                          minWidth: typeof z == "number" ? `${z}px` : z,
                          display: C ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ l.jsx(cg, { image: j })
                      }
                    )
                  },
                  j.id
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
                c >= d.length && !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(Mg, {}),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Cg, {}),
        /* @__PURE__ */ l.jsx(Jh, {}),
        _ && /* @__PURE__ */ l.jsx(
          yg,
          {
            anchorRect: f,
            onClose: () => S(!1),
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
      const n = await Mu();
      q.init(n.dev_mode), q.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), q.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), q.log("Import completed.");
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
            q.log("render called", {
              el: n,
              galleryRoot: ml,
              galleryContainer: yt
            }), yt || (q.log("galleryContainer not found, creating new one"), yt = document.createElement("div"), yt.id = "meld-gallery-container", yt.style.height = "100%", yt.style.width = "100%", yt.style.display = "flex", yt.style.flexDirection = "column"), n.contains(yt) || (q.log("Appending galleryContainer to el"), n.appendChild(yt)), ml ? q.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (q.log("Creating new gallery root"), ml = hu(yt), ml.render(
              Gt.createElement(
                Lh,
                null,
                Gt.createElement(Ig)
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
