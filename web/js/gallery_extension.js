import { api as ee } from "/scripts/api.js";
import { app as Zi } from "/scripts/app.js";
function rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ec = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr = Symbol.for("react.element"), lf = Symbol.for("react.portal"), sf = Symbol.for("react.fragment"), af = Symbol.for("react.strict_mode"), of = Symbol.for("react.profiler"), cf = Symbol.for("react.provider"), uf = Symbol.for("react.context"), df = Symbol.for("react.forward_ref"), ff = Symbol.for("react.suspense"), pf = Symbol.for("react.memo"), mf = Symbol.for("react.lazy"), Wo = Symbol.iterator;
function hf(e) {
  return e === null || typeof e != "object" ? null : (e = Wo && e[Wo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var tc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nc = Object.assign, rc = {};
function Xn(e, t, n) {
  this.props = e, this.context = t, this.refs = rc, this.updater = n || tc;
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {
}
lc.prototype = Xn.prototype;
function Oa(e, t, n) {
  this.props = e, this.context = t, this.refs = rc, this.updater = n || tc;
}
var Fa = Oa.prototype = new lc();
Fa.constructor = Oa;
nc(Fa, Xn.prototype);
Fa.isPureReactComponent = !0;
var $o = Array.isArray, sc = Object.prototype.hasOwnProperty, Wa = { current: null }, ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) sc.call(t, r) && !ac.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), u = 0; u < i; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Fr, type: e, key: a, ref: o, props: l, _owner: Wa.current };
}
function gf(e, t) {
  return { $$typeof: Fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function $a(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fr;
}
function yf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Uo = /\/+/g;
function ms(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? yf("" + e.key) : t.toString(36);
}
function ul(e, t, n, r, l) {
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
        case Fr:
        case lf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + ms(o, 0) : r, $o(l) ? (n = "", e != null && (n = e.replace(Uo, "$&/") + "/"), ul(l, t, n, "", function(u) {
    return u;
  })) : l != null && ($a(l) && (l = gf(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Uo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", $o(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + ms(a, i);
    o += ul(a, t, n, c, l);
  }
  else if (c = hf(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + ms(a, i++), o += ul(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Br(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return ul(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function vf(e) {
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
var He = { current: null }, dl = { transition: null }, wf = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: dl, ReactCurrentOwner: Wa };
function ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: Br, forEach: function(e, t, n) {
  Br(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Br(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Br(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!$a(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = Xn;
le.Fragment = sf;
le.Profiler = of;
le.PureComponent = Oa;
le.StrictMode = af;
le.Suspense = ff;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wf;
le.act = ic;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Wa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) sc.call(t, c) && !ac.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var u = 0; u < c; u++) i[u] = arguments[u + 2];
    r.children = i;
  }
  return { $$typeof: Fr, type: e.type, key: l, ref: a, props: r, _owner: o };
};
le.createContext = function(e) {
  return e = { $$typeof: uf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cf, _context: e }, e.Consumer = e;
};
le.createElement = oc;
le.createFactory = function(e) {
  var t = oc.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: df, render: e };
};
le.isValidElement = $a;
le.lazy = function(e) {
  return { $$typeof: mf, _payload: { _status: -1, _result: e }, _init: vf };
};
le.memo = function(e, t) {
  return { $$typeof: pf, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = dl.transition;
  dl.transition = {};
  try {
    e();
  } finally {
    dl.transition = t;
  }
};
le.unstable_act = ic;
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
ec.exports = le;
var m = ec.exports;
const Sl = /* @__PURE__ */ rf(m);
var cc = { exports: {} }, at = {}, uc = { exports: {} }, dc = {};
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
  function t(M, O) {
    var V = M.length;
    M.push(O);
    e: for (; 0 < V; ) {
      var L = V - 1 >>> 1, Z = M[L];
      if (0 < l(Z, O)) M[L] = O, M[V] = Z, V = L;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var O = M[0], V = M.pop();
    if (V !== O) {
      M[0] = V;
      e: for (var L = 0, Z = M.length, de = Z >>> 1; L < de; ) {
        var $ = 2 * (L + 1) - 1, P = M[$], I = $ + 1, J = M[I];
        if (0 > l(P, V)) I < Z && 0 > l(J, P) ? (M[L] = J, M[I] = V, L = I) : (M[L] = P, M[$] = V, L = $);
        else if (I < Z && 0 > l(J, V)) M[L] = J, M[I] = V, L = I;
        else break e;
      }
    }
    return O;
  }
  function l(M, O) {
    var V = M.sortIndex - O.sortIndex;
    return V !== 0 ? V : M.id - O.id;
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
  var c = [], u = [], g = 1, v = null, w = 3, k = !1, y = !1, x = !1, E = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= M) r(u), O.sortIndex = O.expirationTime, t(c, O);
      else break;
      O = n(u);
    }
  }
  function h(M) {
    if (x = !1, p(M), !y) if (n(c) !== null) y = !0, A(S);
    else {
      var O = n(u);
      O !== null && F(h, O.startTime - M);
    }
  }
  function S(M, O) {
    y = !1, x && (x = !1, d(N), N = -1), k = !0;
    var V = w;
    try {
      for (p(O), v = n(c); v !== null && (!(v.expirationTime > O) || M && !z()); ) {
        var L = v.callback;
        if (typeof L == "function") {
          v.callback = null, w = v.priorityLevel;
          var Z = L(v.expirationTime <= O);
          O = e.unstable_now(), typeof Z == "function" ? v.callback = Z : v === n(c) && r(c), p(O);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var de = !0;
      else {
        var $ = n(u);
        $ !== null && F(h, $.startTime - O), de = !1;
      }
      return de;
    } finally {
      v = null, w = V, k = !1;
    }
  }
  var j = !1, _ = null, N = -1, W = 5, b = -1;
  function z() {
    return !(e.unstable_now() - b < W);
  }
  function H() {
    if (_ !== null) {
      var M = e.unstable_now();
      b = M;
      var O = !0;
      try {
        O = _(!0, M);
      } finally {
        O ? q() : (j = !1, _ = null);
      }
    } else j = !1;
  }
  var q;
  if (typeof f == "function") q = function() {
    f(H);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), X = C.port2;
    C.port1.onmessage = H, q = function() {
      X.postMessage(null);
    };
  } else q = function() {
    E(H, 0);
  };
  function A(M) {
    _ = M, j || (j = !0, q());
  }
  function F(M, O) {
    N = E(function() {
      M(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    y || k || (y = !0, A(S));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(M) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = w;
    }
    var V = w;
    w = O;
    try {
      return M();
    } finally {
      w = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, O) {
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
    var V = w;
    w = M;
    try {
      return O();
    } finally {
      w = V;
    }
  }, e.unstable_scheduleCallback = function(M, O, V) {
    var L = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? L + V : L) : V = L, M) {
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
    return Z = V + Z, M = { id: g++, callback: O, priorityLevel: M, startTime: V, expirationTime: Z, sortIndex: -1 }, V > L ? (M.sortIndex = V, t(u, M), n(c) === null && M === n(u) && (x ? (d(N), N = -1) : x = !0, F(h, V - L))) : (M.sortIndex = Z, t(c, M), y || k || (y = !0, A(S))), M;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(M) {
    var O = w;
    return function() {
      var V = w;
      w = O;
      try {
        return M.apply(this, arguments);
      } finally {
        w = V;
      }
    };
  };
})(dc);
uc.exports = dc;
var xf = uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f = m, st = xf;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fc = /* @__PURE__ */ new Set(), _r = {};
function _n(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) fc.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Us = Object.prototype.hasOwnProperty, kf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vo = {}, Qo = {};
function Sf(e) {
  return Us.call(Qo, e) ? !0 : Us.call(Vo, e) ? !1 : kf.test(e) ? Qo[e] = !0 : (Vo[e] = !0, !1);
}
function jf(e, t, n, r) {
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
function Ef(e, t, n, r) {
  if (t === null || typeof t > "u" || jf(e, t, n, r)) return !0;
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
function Be(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
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
var Ua = /[\-:]([a-z])/g;
function Va(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ua,
    Va
  );
  Ae[t] = new Be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ua, Va);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ua, Va);
  Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qa(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ef(t, n, l, r) && (n = null), r || l === null ? Sf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = _f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kr = Symbol.for("react.element"), jn = Symbol.for("react.portal"), En = Symbol.for("react.fragment"), Ha = Symbol.for("react.strict_mode"), Vs = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), mc = Symbol.for("react.context"), Ba = Symbol.for("react.forward_ref"), Qs = Symbol.for("react.suspense"), Hs = Symbol.for("react.suspense_list"), Ka = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), hc = Symbol.for("react.offscreen"), Ho = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = Ho && e[Ho] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Se = Object.assign, hs;
function ir(e) {
  if (hs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    hs = t && t[1] || "";
  }
  return `
` + hs + e;
}
var gs = !1;
function ys(e, t) {
  if (!e || gs) return "";
  gs = !0;
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
      for (var l = u.stack.split(`
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
    gs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function Cf(e) {
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
      return e = ys(e.type, !1), e;
    case 11:
      return e = ys(e.type.render, !1), e;
    case 1:
      return e = ys(e.type, !0), e;
    default:
      return "";
  }
}
function Bs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case jn:
      return "Portal";
    case Vs:
      return "Profiler";
    case Ha:
      return "StrictMode";
    case Qs:
      return "Suspense";
    case Hs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case mc:
      return (e.displayName || "Context") + ".Consumer";
    case pc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ba:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ka:
      return t = e.displayName || null, t !== null ? t : Bs(e.type) || "Memo";
    case Ut:
      t = e._payload, e = e._init;
      try {
        return Bs(e(t));
      } catch {
      }
  }
  return null;
}
function Nf(e) {
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
      return Bs(t);
    case 8:
      return t === Ha ? "StrictMode" : "Mode";
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
function gc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mf(e) {
  var t = gc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Gr(e) {
  e._valueTracker || (e._valueTracker = Mf(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function jl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ks(e, t) {
  var n = t.checked;
  return Se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Bo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = nn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && Qa(e, "checked", t, !1);
}
function Gs(e, t) {
  vc(e, t);
  var n = nn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ys(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ys(e, t.type, nn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ko(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ys(e, t, n) {
  (t !== "number" || jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function zn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Go(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(D(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: nn(n) };
}
function wc(e, t) {
  var n = nn(t.value), r = nn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Yo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yr, _c = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, bf = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function(e) {
  bf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = kc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var If = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Js(e, t) {
  if (t) {
    if (If[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Zs(e, t) {
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
var ea = null;
function Ga(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ta = null, An = null, On = null;
function qo(e) {
  if (e = Ur(e)) {
    if (typeof ta != "function") throw Error(D(280));
    var t = e.stateNode;
    t && (t = Zl(t), ta(e.stateNode, e.type, t));
  }
}
function jc(e) {
  An ? On ? On.push(e) : On = [e] : An = e;
}
function Ec() {
  if (An) {
    var e = An, t = On;
    if (On = An = null, qo(e), t) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function Cc(e, t) {
  return e(t);
}
function Nc() {
}
var vs = !1;
function Mc(e, t, n) {
  if (vs) return e(t, n);
  vs = !0;
  try {
    return Cc(e, t, n);
  } finally {
    vs = !1, (An !== null || On !== null) && (Nc(), Ec());
  }
}
function Sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zl(n);
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
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var na = !1;
if (Rt) try {
  var tr = {};
  Object.defineProperty(tr, "passive", { get: function() {
    na = !0;
  } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
} catch {
  na = !1;
}
function Lf(e, t, n, r, l, a, o, i, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (g) {
    this.onError(g);
  }
}
var pr = !1, El = null, Cl = !1, ra = null, Tf = { onError: function(e) {
  pr = !0, El = e;
} };
function Pf(e, t, n, r, l, a, o, i, c) {
  pr = !1, El = null, Lf.apply(Tf, arguments);
}
function Df(e, t, n, r, l, a, o, i, c) {
  if (Pf.apply(this, arguments), pr) {
    if (pr) {
      var u = El;
      pr = !1, El = null;
    } else throw Error(D(198));
    Cl || (Cl = !0, ra = u);
  }
}
function kn(e) {
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
function bc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (kn(e) !== e) throw Error(D(188));
}
function Rf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = kn(e), t === null) throw Error(D(188));
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
        if (a === n) return Xo(l), e;
        if (a === r) return Xo(l), t;
        a = a.sibling;
      }
      throw Error(D(188));
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
        if (!o) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Ic(e) {
  return e = Rf(e), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tc = st.unstable_scheduleCallback, Jo = st.unstable_cancelCallback, zf = st.unstable_shouldYield, Af = st.unstable_requestPaint, Ce = st.unstable_now, Of = st.unstable_getCurrentPriorityLevel, Ya = st.unstable_ImmediatePriority, Pc = st.unstable_UserBlockingPriority, Nl = st.unstable_NormalPriority, Ff = st.unstable_LowPriority, Dc = st.unstable_IdlePriority, Yl = null, Nt = null;
function Wf(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(Yl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var xt = Math.clz32 ? Math.clz32 : Vf, $f = Math.log, Uf = Math.LN2;
function Vf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - ($f(e) / Uf | 0) | 0;
}
var qr = 64, Xr = 4194304;
function ur(e) {
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
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = ur(i) : (a &= o, a !== 0 && (r = ur(a)));
  } else o = n & ~l, o !== 0 ? r = ur(o) : a !== 0 && (r = ur(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Qf(e, t) {
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
function Hf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - xt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Qf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function la(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rc() {
  var e = qr;
  return qr <<= 1, !(qr & 4194240) && (qr = 64), e;
}
function ws(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
}
function Bf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - xt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function qa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function zc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ac, Xa, Oc, Fc, Wc, sa = !1, Jr = [], Gt = null, Yt = null, qt = null, jr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Qt = [], Kf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zo(e, t) {
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
function nr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = Ur(t), t !== null && Xa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Gf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Gt = nr(Gt, e, t, n, r, l), !0;
    case "dragenter":
      return Yt = nr(Yt, e, t, n, r, l), !0;
    case "mouseover":
      return qt = nr(qt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return jr.set(a, nr(jr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Er.set(a, nr(Er.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function $c(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = bc(n), t !== null) {
          e.blockedOn = t, Wc(e.priority, function() {
            Oc(n);
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
function fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ea = r, n.target.dispatchEvent(r), ea = null;
    } else return t = Ur(n), t !== null && Xa(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ei(e, t, n) {
  fl(e) && n.delete(t);
}
function Yf() {
  sa = !1, Gt !== null && fl(Gt) && (Gt = null), Yt !== null && fl(Yt) && (Yt = null), qt !== null && fl(qt) && (qt = null), jr.forEach(ei), Er.forEach(ei);
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sa || (sa = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Yf)));
}
function Cr(e) {
  function t(l) {
    return rr(l, e);
  }
  if (0 < Jr.length) {
    rr(Jr[0], e);
    for (var n = 1; n < Jr.length; n++) {
      var r = Jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Gt !== null && rr(Gt, e), Yt !== null && rr(Yt, e), qt !== null && rr(qt, e), jr.forEach(t), Er.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null); ) $c(n), n.blockedOn === null && Qt.shift();
}
var Fn = Ft.ReactCurrentBatchConfig, bl = !0;
function qf(e, t, n, r) {
  var l = ce, a = Fn.transition;
  Fn.transition = null;
  try {
    ce = 1, Ja(e, t, n, r);
  } finally {
    ce = l, Fn.transition = a;
  }
}
function Xf(e, t, n, r) {
  var l = ce, a = Fn.transition;
  Fn.transition = null;
  try {
    ce = 4, Ja(e, t, n, r);
  } finally {
    ce = l, Fn.transition = a;
  }
}
function Ja(e, t, n, r) {
  if (bl) {
    var l = aa(e, t, n, r);
    if (l === null) bs(e, t, r, Il, n), Zo(e, r);
    else if (Gf(l, e, t, n, r)) r.stopPropagation();
    else if (Zo(e, r), t & 4 && -1 < Kf.indexOf(e)) {
      for (; l !== null; ) {
        var a = Ur(l);
        if (a !== null && Ac(a), a = aa(e, t, n, r), a === null && bs(e, t, r, Il, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else bs(e, t, r, null, n);
  }
}
var Il = null;
function aa(e, t, n, r) {
  if (Il = null, e = Ga(r), e = dn(e), e !== null) if (t = kn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = bc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Il = e, null;
}
function Uc(e) {
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
      switch (Of()) {
        case Ya:
          return 1;
        case Pc:
          return 4;
        case Nl:
        case Ff:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null, Za = null, pl = null;
function Vc() {
  if (pl) return pl;
  var e, t = Za, n = t.length, r, l = "value" in Bt ? Bt.value : Bt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return pl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function ml(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zr() {
  return !0;
}
function ti() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Zr : ti, this.isPropagationStopped = ti, this;
  }
  return Se(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zr);
  }, persist: function() {
  }, isPersistent: Zr }), t;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, eo = ot(Jn), $r = Se({}, Jn, { view: 0, detail: 0 }), Jf = ot($r), xs, _s, lr, ql = Se({}, $r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: to, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (xs = e.screenX - lr.screenX, _s = e.screenY - lr.screenY) : _s = xs = 0, lr = e), xs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _s;
} }), ni = ot(ql), Zf = Se({}, ql, { dataTransfer: 0 }), ep = ot(Zf), tp = Se({}, $r, { relatedTarget: 0 }), ks = ot(tp), np = Se({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rp = ot(np), lp = Se({}, Jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sp = ot(lp), ap = Se({}, Jn, { data: 0 }), ri = ot(ap), op = {
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
}, ip = {
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
}, cp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cp[e]) ? !!t[e] : !1;
}
function to() {
  return up;
}
var dp = Se({}, $r, { key: function(e) {
  if (e.key) {
    var t = op[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ip[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: to, charCode: function(e) {
  return e.type === "keypress" ? ml(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), fp = ot(dp), pp = Se({}, ql, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), li = ot(pp), mp = Se({}, $r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: to }), hp = ot(mp), gp = Se({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yp = ot(gp), vp = Se({}, ql, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), wp = ot(vp), xp = [9, 13, 27, 32], no = Rt && "CompositionEvent" in window, mr = null;
Rt && "documentMode" in document && (mr = document.documentMode);
var _p = Rt && "TextEvent" in window && !mr, Qc = Rt && (!no || mr && 8 < mr && 11 >= mr), si = " ", ai = !1;
function Hc(e, t) {
  switch (e) {
    case "keyup":
      return xp.indexOf(t.keyCode) !== -1;
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
function Bc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return Bc(t);
    case "keypress":
      return t.which !== 32 ? null : (ai = !0, si);
    case "textInput":
      return e = t.data, e === si && ai ? null : e;
    default:
      return null;
  }
}
function Sp(e, t) {
  if (Cn) return e === "compositionend" || !no && Hc(e, t) ? (e = Vc(), pl = Za = Bt = null, Cn = !1, e) : null;
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
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function oi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jp[e.type] : t === "textarea";
}
function Kc(e, t, n, r) {
  jc(r), t = Ll(t, "onChange"), 0 < t.length && (n = new eo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, Nr = null;
function Ep(e) {
  lu(e, 0);
}
function Xl(e) {
  var t = bn(e);
  if (yc(t)) return e;
}
function Cp(e, t) {
  if (e === "change") return t;
}
var Gc = !1;
if (Rt) {
  var Ss;
  if (Rt) {
    var js = "oninput" in document;
    if (!js) {
      var ii = document.createElement("div");
      ii.setAttribute("oninput", "return;"), js = typeof ii.oninput == "function";
    }
    Ss = js;
  } else Ss = !1;
  Gc = Ss && (!document.documentMode || 9 < document.documentMode);
}
function ci() {
  hr && (hr.detachEvent("onpropertychange", Yc), Nr = hr = null);
}
function Yc(e) {
  if (e.propertyName === "value" && Xl(Nr)) {
    var t = [];
    Kc(t, Nr, e, Ga(e)), Mc(Ep, t);
  }
}
function Np(e, t, n) {
  e === "focusin" ? (ci(), hr = t, Nr = n, hr.attachEvent("onpropertychange", Yc)) : e === "focusout" && ci();
}
function Mp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xl(Nr);
}
function bp(e, t) {
  if (e === "click") return Xl(t);
}
function Ip(e, t) {
  if (e === "input" || e === "change") return Xl(t);
}
function Lp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var kt = typeof Object.is == "function" ? Object.is : Lp;
function Mr(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Us.call(t, l) || !kt(e[l], t[l])) return !1;
  }
  return !0;
}
function ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function di(e, t) {
  var n = ui(e);
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
    n = ui(n);
  }
}
function qc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xc() {
  for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jl(e.document);
  }
  return t;
}
function ro(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Tp(e) {
  var t = Xc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ro(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = di(n, a);
        var o = di(
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
var Pp = Rt && "documentMode" in document && 11 >= document.documentMode, Nn = null, oa = null, gr = null, ia = !1;
function fi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ia || Nn == null || Nn !== jl(r) || (r = Nn, "selectionStart" in r && ro(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gr && Mr(gr, r) || (gr = r, r = Ll(oa, "onSelect"), 0 < r.length && (t = new eo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Nn)));
}
function el(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mn = { animationend: el("Animation", "AnimationEnd"), animationiteration: el("Animation", "AnimationIteration"), animationstart: el("Animation", "AnimationStart"), transitionend: el("Transition", "TransitionEnd") }, Es = {}, Jc = {};
Rt && (Jc = document.createElement("div").style, "AnimationEvent" in window || (delete Mn.animationend.animation, delete Mn.animationiteration.animation, delete Mn.animationstart.animation), "TransitionEvent" in window || delete Mn.transitionend.transition);
function Jl(e) {
  if (Es[e]) return Es[e];
  if (!Mn[e]) return e;
  var t = Mn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jc) return Es[e] = t[n];
  return e;
}
var Zc = Jl("animationend"), eu = Jl("animationiteration"), tu = Jl("animationstart"), nu = Jl("transitionend"), ru = /* @__PURE__ */ new Map(), pi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function sn(e, t) {
  ru.set(e, t), _n(t, [e]);
}
for (var Cs = 0; Cs < pi.length; Cs++) {
  var Ns = pi[Cs], Dp = Ns.toLowerCase(), Rp = Ns[0].toUpperCase() + Ns.slice(1);
  sn(Dp, "on" + Rp);
}
sn(Zc, "onAnimationEnd");
sn(eu, "onAnimationIteration");
sn(tu, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(nu, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function mi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Df(r, t, void 0, e), e.currentTarget = null;
}
function lu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, u = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        mi(l, i, u), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, u = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        mi(l, i, u), a = c;
      }
    }
  }
  if (Cl) throw e = ra, Cl = !1, ra = null, e;
}
function ge(e, t) {
  var n = t[pa];
  n === void 0 && (n = t[pa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (su(t, e, 2, !1), n.add(r));
}
function Ms(e, t, n) {
  var r = 0;
  t && (r |= 4), su(n, e, r, t);
}
var tl = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[tl]) {
    e[tl] = !0, fc.forEach(function(n) {
      n !== "selectionchange" && (zp.has(n) || Ms(n, !1, e), Ms(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[tl] || (t[tl] = !0, Ms("selectionchange", !1, t));
  }
}
function su(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var l = qf;
      break;
    case 4:
      l = Xf;
      break;
    default:
      l = Ja;
  }
  n = l.bind(null, t, n, e), l = void 0, !na || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function bs(e, t, n, r, l) {
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
        if (o = dn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Mc(function() {
    var u = a, g = Ga(n), v = [];
    e: {
      var w = ru.get(e);
      if (w !== void 0) {
        var k = eo, y = e;
        switch (e) {
          case "keypress":
            if (ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = fp;
            break;
          case "focusin":
            y = "focus", k = ks;
            break;
          case "focusout":
            y = "blur", k = ks;
            break;
          case "beforeblur":
          case "afterblur":
            k = ks;
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
            k = ni;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = hp;
            break;
          case Zc:
          case eu:
          case tu:
            k = rp;
            break;
          case nu:
            k = yp;
            break;
          case "scroll":
            k = Jf;
            break;
          case "wheel":
            k = wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = li;
        }
        var x = (t & 4) !== 0, E = !x && e === "scroll", d = x ? w !== null ? w + "Capture" : null : w;
        x = [];
        for (var f = u, p; f !== null; ) {
          p = f;
          var h = p.stateNode;
          if (p.tag === 5 && h !== null && (p = h, d !== null && (h = Sr(f, d), h != null && x.push(Ir(f, h, p)))), E) break;
          f = f.return;
        }
        0 < x.length && (w = new k(w, y, null, n, g), v.push({ event: w, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", w && n !== ea && (y = n.relatedTarget || n.fromElement) && (dn(y) || y[zt])) break e;
        if ((k || w) && (w = g.window === g ? g : (w = g.ownerDocument) ? w.defaultView || w.parentWindow : window, k ? (y = n.relatedTarget || n.toElement, k = u, y = y ? dn(y) : null, y !== null && (E = kn(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (k = null, y = u), k !== y)) {
          if (x = ni, h = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (x = li, h = "onPointerLeave", d = "onPointerEnter", f = "pointer"), E = k == null ? w : bn(k), p = y == null ? w : bn(y), w = new x(h, f + "leave", k, n, g), w.target = E, w.relatedTarget = p, h = null, dn(g) === u && (x = new x(d, f + "enter", y, n, g), x.target = p, x.relatedTarget = E, h = x), E = h, k && y) t: {
            for (x = k, d = y, f = 0, p = x; p; p = Sn(p)) f++;
            for (p = 0, h = d; h; h = Sn(h)) p++;
            for (; 0 < f - p; ) x = Sn(x), f--;
            for (; 0 < p - f; ) d = Sn(d), p--;
            for (; f--; ) {
              if (x === d || d !== null && x === d.alternate) break t;
              x = Sn(x), d = Sn(d);
            }
            x = null;
          }
          else x = null;
          k !== null && hi(v, w, k, x, !1), y !== null && E !== null && hi(v, E, y, x, !0);
        }
      }
      e: {
        if (w = u ? bn(u) : window, k = w.nodeName && w.nodeName.toLowerCase(), k === "select" || k === "input" && w.type === "file") var S = Cp;
        else if (oi(w)) if (Gc) S = Ip;
        else {
          S = Mp;
          var j = Np;
        }
        else (k = w.nodeName) && k.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (S = bp);
        if (S && (S = S(e, u))) {
          Kc(v, S, n, g);
          break e;
        }
        j && j(e, w, u), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && Ys(w, "number", w.value);
      }
      switch (j = u ? bn(u) : window, e) {
        case "focusin":
          (oi(j) || j.contentEditable === "true") && (Nn = j, oa = u, gr = null);
          break;
        case "focusout":
          gr = oa = Nn = null;
          break;
        case "mousedown":
          ia = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ia = !1, fi(v, n, g);
          break;
        case "selectionchange":
          if (Pp) break;
        case "keydown":
        case "keyup":
          fi(v, n, g);
      }
      var _;
      if (no) e: {
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
      else Cn ? Hc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Qc && n.locale !== "ko" && (Cn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Cn && (_ = Vc()) : (Bt = g, Za = "value" in Bt ? Bt.value : Bt.textContent, Cn = !0)), j = Ll(u, N), 0 < j.length && (N = new ri(N, e, null, n, g), v.push({ event: N, listeners: j }), _ ? N.data = _ : (_ = Bc(n), _ !== null && (N.data = _)))), (_ = _p ? kp(e, n) : Sp(e, n)) && (u = Ll(u, "onBeforeInput"), 0 < u.length && (g = new ri("onBeforeInput", "beforeinput", null, n, g), v.push({ event: g, listeners: u }), g.data = _));
    }
    lu(v, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Sr(e, n), a != null && r.unshift(Ir(e, a, l)), a = Sr(e, t), a != null && r.push(Ir(e, a, l))), e = e.return;
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, u = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && u !== null && (i = u, l ? (c = Sr(n, a), c != null && o.unshift(Ir(n, c, i))) : l || (c = Sr(n, a), c != null && o.push(Ir(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ap = /\r\n?/g, Op = /\u0000|\uFFFD/g;
function gi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ap, `
`).replace(Op, "");
}
function nl(e, t, n) {
  if (t = gi(t), gi(e) !== t && n) throw Error(D(425));
}
function Tl() {
}
var ca = null, ua = null;
function da(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fa = typeof setTimeout == "function" ? setTimeout : void 0, Fp = typeof clearTimeout == "function" ? clearTimeout : void 0, yi = typeof Promise == "function" ? Promise : void 0, Wp = typeof queueMicrotask == "function" ? queueMicrotask : typeof yi < "u" ? function(e) {
  return yi.resolve(null).then(e).catch($p);
} : fa;
function $p(e) {
  setTimeout(function() {
    throw e;
  });
}
function Is(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Cr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Cr(t);
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
function vi(e) {
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
var Zn = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Zn, Lr = "__reactProps$" + Zn, zt = "__reactContainer$" + Zn, pa = "__reactEvents$" + Zn, Up = "__reactListeners$" + Zn, Vp = "__reactHandles$" + Zn;
function dn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vi(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = vi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ur(e) {
  return e = e[Ct] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Zl(e) {
  return e[Lr] || null;
}
var ma = [], In = -1;
function an(e) {
  return { current: e };
}
function ye(e) {
  0 > In || (e.current = ma[In], ma[In] = null, In--);
}
function me(e, t) {
  In++, ma[In] = e.current, e.current = t;
}
var rn = {}, Ue = an(rn), Xe = an(!1), gn = rn;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Pl() {
  ye(Xe), ye(Ue);
}
function wi(e, t, n) {
  if (Ue.current !== rn) throw Error(D(168));
  me(Ue, t), me(Xe, n);
}
function au(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, Nf(e) || "Unknown", l));
  return Se({}, n, r);
}
function Dl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, gn = Ue.current, me(Ue, e), me(Xe, Xe.current), !0;
}
function xi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n ? (e = au(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, ye(Xe), ye(Ue), me(Ue, e)) : ye(Xe), me(Xe, n);
}
var Lt = null, es = !1, Ls = !1;
function ou(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Qp(e) {
  es = !0, ou(e);
}
function on() {
  if (!Ls && Lt !== null) {
    Ls = !0;
    var e = 0, t = ce;
    try {
      var n = Lt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Lt = null, es = !1;
    } catch (l) {
      throw Lt !== null && (Lt = Lt.slice(e + 1)), Tc(Ya, on), l;
    } finally {
      ce = t, Ls = !1;
    }
  }
  return null;
}
var Ln = [], Tn = 0, Rl = null, zl = 0, it = [], ct = 0, yn = null, Tt = 1, Pt = "";
function cn(e, t) {
  Ln[Tn++] = zl, Ln[Tn++] = Rl, Rl = e, zl = t;
}
function iu(e, t, n) {
  it[ct++] = Tt, it[ct++] = Pt, it[ct++] = yn, yn = e;
  var r = Tt;
  e = Pt;
  var l = 32 - xt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - xt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Tt = 1 << 32 - xt(t) + l | n << l | r, Pt = a + e;
  } else Tt = 1 << a | n << l | r, Pt = e;
}
function lo(e) {
  e.return !== null && (cn(e, 1), iu(e, 1, 0));
}
function so(e) {
  for (; e === Rl; ) Rl = Ln[--Tn], Ln[Tn] = null, zl = Ln[--Tn], Ln[Tn] = null;
  for (; e === yn; ) yn = it[--ct], it[ct] = null, Pt = it[--ct], it[ct] = null, Tt = it[--ct], it[ct] = null;
}
var lt = null, rt = null, we = !1, vt = null;
function cu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _i(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = Xt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yn !== null ? { id: Tt, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ga(e) {
  if (we) {
    var t = rt;
    if (t) {
      var n = t;
      if (!_i(e, t)) {
        if (ha(e)) throw Error(D(418));
        t = Xt(n.nextSibling);
        var r = lt;
        t && _i(e, t) ? cu(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, lt = e);
      }
    } else {
      if (ha(e)) throw Error(D(418));
      e.flags = e.flags & -4097 | 2, we = !1, lt = e;
    }
  }
}
function ki(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function rl(e) {
  if (e !== lt) return !1;
  if (!we) return ki(e), we = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !da(e.type, e.memoizedProps)), t && (t = rt)) {
    if (ha(e)) throw uu(), Error(D(418));
    for (; t; ) cu(e, t), t = Xt(t.nextSibling);
  }
  if (ki(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(D(317));
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
function uu() {
  for (var e = rt; e; ) e = Xt(e.nextSibling);
}
function Qn() {
  rt = lt = null, we = !1;
}
function ao(e) {
  vt === null ? vt = [e] : vt.push(e);
}
var Hp = Ft.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function ll(e, t) {
  throw e = Object.prototype.toString.call(t), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Si(e) {
  var t = e._init;
  return t(e._payload);
}
function du(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [f], d.flags |= 16) : p.push(f);
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
    return d = tn(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, f, p, h) {
    return f === null || f.tag !== 6 ? (f = Os(p, d.mode, h), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function c(d, f, p, h) {
    var S = p.type;
    return S === En ? g(d, f, p.props.children, h, p.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ut && Si(S) === f.type) ? (h = l(f, p.props), h.ref = sr(d, f, p), h.return = d, h) : (h = _l(p.type, p.key, p.props, null, d.mode, h), h.ref = sr(d, f, p), h.return = d, h);
  }
  function u(d, f, p, h) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Fs(p, d.mode, h), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function g(d, f, p, h, S) {
    return f === null || f.tag !== 7 ? (f = hn(p, d.mode, h, S), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function v(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Os("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Kr:
          return p = _l(f.type, f.key, f.props, null, d.mode, p), p.ref = sr(d, null, f), p.return = d, p;
        case jn:
          return f = Fs(f, d.mode, p), f.return = d, f;
        case Ut:
          var h = f._init;
          return v(d, h(f._payload), p);
      }
      if (cr(f) || er(f)) return f = hn(f, d.mode, p, null), f.return = d, f;
      ll(d, f);
    }
    return null;
  }
  function w(d, f, p, h) {
    var S = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : i(d, f, "" + p, h);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Kr:
          return p.key === S ? c(d, f, p, h) : null;
        case jn:
          return p.key === S ? u(d, f, p, h) : null;
        case Ut:
          return S = p._init, w(
            d,
            f,
            S(p._payload),
            h
          );
      }
      if (cr(p) || er(p)) return S !== null ? null : g(d, f, p, h, null);
      ll(d, p);
    }
    return null;
  }
  function k(d, f, p, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return d = d.get(p) || null, i(f, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Kr:
          return d = d.get(h.key === null ? p : h.key) || null, c(f, d, h, S);
        case jn:
          return d = d.get(h.key === null ? p : h.key) || null, u(f, d, h, S);
        case Ut:
          var j = h._init;
          return k(d, f, p, j(h._payload), S);
      }
      if (cr(h) || er(h)) return d = d.get(p) || null, g(f, d, h, S, null);
      ll(f, h);
    }
    return null;
  }
  function y(d, f, p, h) {
    for (var S = null, j = null, _ = f, N = f = 0, W = null; _ !== null && N < p.length; N++) {
      _.index > N ? (W = _, _ = null) : W = _.sibling;
      var b = w(d, _, p[N], h);
      if (b === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && b.alternate === null && t(d, _), f = a(b, f, N), j === null ? S = b : j.sibling = b, j = b, _ = W;
    }
    if (N === p.length) return n(d, _), we && cn(d, N), S;
    if (_ === null) {
      for (; N < p.length; N++) _ = v(d, p[N], h), _ !== null && (f = a(_, f, N), j === null ? S = _ : j.sibling = _, j = _);
      return we && cn(d, N), S;
    }
    for (_ = r(d, _); N < p.length; N++) W = k(_, d, N, p[N], h), W !== null && (e && W.alternate !== null && _.delete(W.key === null ? N : W.key), f = a(W, f, N), j === null ? S = W : j.sibling = W, j = W);
    return e && _.forEach(function(z) {
      return t(d, z);
    }), we && cn(d, N), S;
  }
  function x(d, f, p, h) {
    var S = er(p);
    if (typeof S != "function") throw Error(D(150));
    if (p = S.call(p), p == null) throw Error(D(151));
    for (var j = S = null, _ = f, N = f = 0, W = null, b = p.next(); _ !== null && !b.done; N++, b = p.next()) {
      _.index > N ? (W = _, _ = null) : W = _.sibling;
      var z = w(d, _, b.value, h);
      if (z === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && z.alternate === null && t(d, _), f = a(z, f, N), j === null ? S = z : j.sibling = z, j = z, _ = W;
    }
    if (b.done) return n(
      d,
      _
    ), we && cn(d, N), S;
    if (_ === null) {
      for (; !b.done; N++, b = p.next()) b = v(d, b.value, h), b !== null && (f = a(b, f, N), j === null ? S = b : j.sibling = b, j = b);
      return we && cn(d, N), S;
    }
    for (_ = r(d, _); !b.done; N++, b = p.next()) b = k(_, d, N, b.value, h), b !== null && (e && b.alternate !== null && _.delete(b.key === null ? N : b.key), f = a(b, f, N), j === null ? S = b : j.sibling = b, j = b);
    return e && _.forEach(function(H) {
      return t(d, H);
    }), we && cn(d, N), S;
  }
  function E(d, f, p, h) {
    if (typeof p == "object" && p !== null && p.type === En && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Kr:
          e: {
            for (var S = p.key, j = f; j !== null; ) {
              if (j.key === S) {
                if (S = p.type, S === En) {
                  if (j.tag === 7) {
                    n(d, j.sibling), f = l(j, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (j.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ut && Si(S) === j.type) {
                  n(d, j.sibling), f = l(j, p.props), f.ref = sr(d, j, p), f.return = d, d = f;
                  break e;
                }
                n(d, j);
                break;
              } else t(d, j);
              j = j.sibling;
            }
            p.type === En ? (f = hn(p.props.children, d.mode, h, p.key), f.return = d, d = f) : (h = _l(p.type, p.key, p.props, null, d.mode, h), h.ref = sr(d, f, p), h.return = d, d = h);
          }
          return o(d);
        case jn:
          e: {
            for (j = p.key; f !== null; ) {
              if (f.key === j) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Fs(p, d.mode, h), f.return = d, d = f;
          }
          return o(d);
        case Ut:
          return j = p._init, E(d, f, j(p._payload), h);
      }
      if (cr(p)) return y(d, f, p, h);
      if (er(p)) return x(d, f, p, h);
      ll(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = Os(p, d.mode, h), f.return = d, d = f), o(d)) : n(d, f);
  }
  return E;
}
var Hn = du(!0), fu = du(!1), Al = an(null), Ol = null, Pn = null, oo = null;
function io() {
  oo = Pn = Ol = null;
}
function co(e) {
  var t = Al.current;
  ye(Al), e._currentValue = t;
}
function ya(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Wn(e, t) {
  Ol = e, oo = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function ft(e) {
  var t = e._currentValue;
  if (oo !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (Ol === null) throw Error(D(308));
    Pn = e, Ol.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var fn = null;
function uo(e) {
  fn === null ? fn = [e] : fn.push(e);
}
function pu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, uo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, At(e, r);
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function fo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, At(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, uo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, At(e, n);
}
function hl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n);
  }
}
function ji(e, t) {
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
function Fl(e, t, n, r) {
  var l = e.updateQueue;
  Vt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, u = c.next;
    c.next = null, o === null ? a = u : o.next = u, o = c;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== o && (i === null ? g.firstBaseUpdate = u : i.next = u, g.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, g = u = c = null, i = a;
    do {
      var w = i.lane, k = i.eventTime;
      if ((r & w) === w) {
        g !== null && (g = g.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var y = e, x = i;
          switch (w = t, k = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                v = y.call(k, v, w);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, w = typeof y == "function" ? y.call(k, v, w) : y, w == null) break e;
              v = Se({}, v, w);
              break e;
            case 2:
              Vt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [i] : w.push(i));
      } else k = { eventTime: k, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, g === null ? (u = g = k, c = v) : g = g.next = k, o |= w;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (c = v), l.baseState = c, l.firstBaseUpdate = u, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    wn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Ei(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(D(191, l));
      l.call(r);
    }
  }
}
var Vr = {}, Mt = an(Vr), Tr = an(Vr), Pr = an(Vr);
function pn(e) {
  if (e === Vr) throw Error(D(174));
  return e;
}
function po(e, t) {
  switch (me(Pr, t), me(Tr, e), me(Mt, Vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xs(t, e);
  }
  ye(Mt), me(Mt, t);
}
function Bn() {
  ye(Mt), ye(Tr), ye(Pr);
}
function hu(e) {
  pn(Pr.current);
  var t = pn(Mt.current), n = Xs(t, e.type);
  t !== n && (me(Tr, e), me(Mt, n));
}
function mo(e) {
  Tr.current === e && (ye(Mt), ye(Tr));
}
var _e = an(0);
function Wl(e) {
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
var Ts = [];
function ho() {
  for (var e = 0; e < Ts.length; e++) Ts[e]._workInProgressVersionPrimary = null;
  Ts.length = 0;
}
var gl = Ft.ReactCurrentDispatcher, Ps = Ft.ReactCurrentBatchConfig, vn = 0, ke = null, Le = null, Pe = null, $l = !1, yr = !1, Dr = 0, Bp = 0;
function Fe() {
  throw Error(D(321));
}
function go(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
  return !0;
}
function yo(e, t, n, r, l, a) {
  if (vn = a, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gl.current = e === null || e.memoizedState === null ? qp : Xp, e = n(r, l), yr) {
    a = 0;
    do {
      if (yr = !1, Dr = 0, 25 <= a) throw Error(D(301));
      a += 1, Pe = Le = null, t.updateQueue = null, gl.current = Jp, e = n(r, l);
    } while (yr);
  }
  if (gl.current = Ul, t = Le !== null && Le.next !== null, vn = 0, Pe = Le = ke = null, $l = !1, t) throw Error(D(300));
  return e;
}
function vo() {
  var e = Dr !== 0;
  return Dr = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Pe === null ? ke.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
}
function pt() {
  if (Le === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Pe === null ? ke.memoizedState : Pe.next;
  if (t !== null) Pe = t, Le = e;
  else {
    if (e === null) throw Error(D(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Pe === null ? ke.memoizedState = Pe = e : Pe = Pe.next = e;
  }
  return Pe;
}
function Rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ds(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Le, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, c = null, u = a;
    do {
      var g = u.lane;
      if ((vn & g) === g) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var v = {
          lane: g,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, ke.lanes |= g, wn |= g;
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? o = r : c.next = i, kt(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, ke.lanes |= a, wn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rs(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    kt(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function gu() {
}
function yu(e, t) {
  var n = ke, r = pt(), l = t(), a = !kt(r.memoizedState, l);
  if (a && (r.memoizedState = l, qe = !0), r = r.queue, wo(xu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Pe !== null && Pe.memoizedState.tag & 1) {
    if (n.flags |= 2048, zr(9, wu.bind(null, n, r, l, t), void 0, null), De === null) throw Error(D(349));
    vn & 30 || vu(n, t, l);
  }
  return l;
}
function vu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _u(t) && ku(e);
}
function xu(e, t, n) {
  return n(function() {
    _u(t) && ku(e);
  });
}
function _u(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function ku(e) {
  var t = At(e, 1);
  t !== null && _t(t, e, 1, -1);
}
function Ci(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Yp.bind(null, ke, e), [t.memoizedState, e];
}
function zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Su() {
  return pt().memoizedState;
}
function yl(e, t, n, r) {
  var l = Et();
  ke.flags |= e, l.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ts(e, t, n, r) {
  var l = pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && go(r, o.deps)) {
      l.memoizedState = zr(t, n, a, r);
      return;
    }
  }
  ke.flags |= e, l.memoizedState = zr(1 | t, n, a, r);
}
function Ni(e, t) {
  return yl(8390656, 8, e, t);
}
function wo(e, t) {
  return ts(2048, 8, e, t);
}
function ju(e, t) {
  return ts(4, 2, e, t);
}
function Eu(e, t) {
  return ts(4, 4, e, t);
}
function Cu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Nu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ts(4, 4, Cu.bind(null, t, e), n);
}
function xo() {
}
function Mu(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && go(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function bu(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && go(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Iu(e, t, n) {
  return vn & 21 ? (kt(n, t) || (n = Rc(), ke.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Kp(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ps.transition;
  Ps.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, Ps.transition = r;
  }
}
function Lu() {
  return pt().memoizedState;
}
function Gp(e, t, n) {
  var r = en(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tu(e)) Pu(t, n);
  else if (n = pu(e, t, n, r), n !== null) {
    var l = Qe();
    _t(n, e, r, l), Du(n, t, r);
  }
}
function Yp(e, t, n) {
  var r = en(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tu(e)) Pu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, kt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, uo(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pu(e, t, l, r), n !== null && (l = Qe(), _t(n, e, r, l), Du(n, t, r));
  }
}
function Tu(e) {
  var t = e.alternate;
  return e === ke || t !== null && t === ke;
}
function Pu(e, t) {
  yr = $l = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Du(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n);
  }
}
var Ul = { readContext: ft, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, qp = { readContext: ft, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ft, useEffect: Ni, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yl(
    4194308,
    4,
    Cu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return yl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return yl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gp.bind(null, ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ci, useDebugValue: xo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = Ci(!1), t = e[0];
  return e = Kp.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ke, l = Et();
  if (we) {
    if (n === void 0) throw Error(D(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(D(349));
    vn & 30 || vu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Ni(xu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, zr(9, wu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = De.identifierPrefix;
  if (we) {
    var n = Pt, r = Tt;
    n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Bp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Xp = {
  readContext: ft,
  useCallback: Mu,
  useContext: ft,
  useEffect: wo,
  useImperativeHandle: Nu,
  useInsertionEffect: ju,
  useLayoutEffect: Eu,
  useMemo: bu,
  useReducer: Ds,
  useRef: Su,
  useState: function() {
    return Ds(Rr);
  },
  useDebugValue: xo,
  useDeferredValue: function(e) {
    var t = pt();
    return Iu(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = Ds(Rr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: gu,
  useSyncExternalStore: yu,
  useId: Lu,
  unstable_isNewReconciler: !1
}, Jp = { readContext: ft, useCallback: Mu, useContext: ft, useEffect: wo, useImperativeHandle: Nu, useInsertionEffect: ju, useLayoutEffect: Eu, useMemo: bu, useReducer: Rs, useRef: Su, useState: function() {
  return Rs(Rr);
}, useDebugValue: xo, useDeferredValue: function(e) {
  var t = pt();
  return Le === null ? t.memoizedState = e : Iu(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = Rs(Rr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: gu, useSyncExternalStore: yu, useId: Lu, unstable_isNewReconciler: !1 };
function gt(e, t) {
  if (e && e.defaultProps) {
    t = Se({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function va(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ns = { isMounted: function(e) {
  return (e = e._reactInternals) ? kn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = en(e), a = Dt(r, l);
  a.payload = t, n != null && (a.callback = n), t = Jt(e, a, l), t !== null && (_t(t, e, l, r), hl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = en(e), a = Dt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Jt(e, a, l), t !== null && (_t(t, e, l, r), hl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = en(e), l = Dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Jt(e, l, r), t !== null && (_t(t, e, r, n), hl(t, e, r));
} };
function Mi(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(l, a) : !0;
}
function Ru(e, t, n) {
  var r = !1, l = rn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ft(a) : (l = Je(t) ? gn : Ue.current, r = t.contextTypes, a = (r = r != null) ? Vn(e, l) : rn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ns, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function bi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ns.enqueueReplaceState(t, t.state, null);
}
function wa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, fo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ft(a) : (a = Je(t) ? gn : Ue.current, l.context = Vn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (va(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ns.enqueueReplaceState(l, l.state, null), Fl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Cf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function zs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Zp = typeof WeakMap == "function" ? WeakMap : Map;
function zu(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ql || (Ql = !0, Ia = r), xa(e, t);
  }, n;
}
function Au(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      xa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    xa(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ii(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
}
function Li(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ti(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, Jt(n, t, 1))), n.lanes |= 1), e);
}
var em = Ft.ReactCurrentOwner, qe = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? fu(t, null, n, r) : Hn(t, e.child, n, r);
}
function Pi(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Wn(t, l), r = yo(e, t, n, r, a, l), n = vo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (we && n && lo(t), t.flags |= 1, Ve(e, t, r, l), t.child);
}
function Di(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Mo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ou(e, t, a, r, l)) : (e = _l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mr, n(o, r) && e.ref === t.ref) return Ot(e, t, l);
  }
  return t.flags |= 1, e = tn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ou(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Mr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Ot(e, t, l);
  }
  return _a(e, t, n, r, l);
}
function Fu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(Rn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(Rn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, me(Rn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, me(Rn, nt), nt |= r;
  return Ve(e, t, l, n), t.child;
}
function Wu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _a(e, t, n, r, l) {
  var a = Je(n) ? gn : Ue.current;
  return a = Vn(t, a), Wn(t, l), n = yo(e, t, n, r, a, l), r = vo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (we && r && lo(t), t.flags |= 1, Ve(e, t, n, l), t.child);
}
function Ri(e, t, n, r, l) {
  if (Je(n)) {
    var a = !0;
    Dl(t);
  } else a = !1;
  if (Wn(t, l), t.stateNode === null) vl(e, t), Ru(t, n, r), wa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ft(u) : (u = Je(n) ? gn : Ue.current, u = Vn(t, u));
    var g = n.getDerivedStateFromProps, v = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== u) && bi(t, o, r, u), Vt = !1;
    var w = t.memoizedState;
    o.state = w, Fl(t, r, o, l), c = t.memoizedState, i !== r || w !== c || Xe.current || Vt ? (typeof g == "function" && (va(t, n, g, r), c = t.memoizedState), (i = Vt || Mi(t, n, i, r, w, c, u)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = u, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, mu(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : gt(t.type, i), o.props = u, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ft(c) : (c = Je(n) ? gn : Ue.current, c = Vn(t, c));
    var k = n.getDerivedStateFromProps;
    (g = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && bi(t, o, r, c), Vt = !1, w = t.memoizedState, o.state = w, Fl(t, r, o, l);
    var y = t.memoizedState;
    i !== v || w !== y || Xe.current || Vt ? (typeof k == "function" && (va(t, n, k, r), y = t.memoizedState), (u = Vt || Mi(t, n, u, r, w, y, c) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = c, r = u) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ka(e, t, n, r, a, l);
}
function ka(e, t, n, r, l, a) {
  Wu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xi(t, n, !1), Ot(e, t, a);
  r = t.stateNode, em.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Hn(t, e.child, null, a), t.child = Hn(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, l && xi(t, n, !0), t.child;
}
function $u(e) {
  var t = e.stateNode;
  t.pendingContext ? wi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wi(e, t.context, !1), po(e, t.containerInfo);
}
function zi(e, t, n, r, l) {
  return Qn(), ao(l), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Sa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uu(e, t, n) {
  var r = t.pendingProps, l = _e.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), me(_e, l & 1), e === null)
    return ga(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = ss(o, r, 0, null), e = hn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ja(n), t.memoizedState = Sa, e) : _o(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return tm(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = tn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = tn(i, a) : (a = hn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ja(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Sa, r;
  }
  return a = e.child, e = a.sibling, r = tn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _o(e, t) {
  return t = ss({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function sl(e, t, n, r) {
  return r !== null && ao(r), Hn(t, e.child, null, n), e = _o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tm(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = zs(Error(D(422))), sl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = ss({ mode: "visible", children: r.children }, l, 0, null), a = hn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Hn(t, e.child, null, o), t.child.memoizedState = ja(o), t.memoizedState = Sa, a);
  if (!(t.mode & 1)) return sl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(D(419)), r = zs(a, r, void 0), sl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, At(e, l), _t(r, e, l, -1));
    }
    return No(), r = zs(Error(D(421))), sl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mm.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = Xt(l.nextSibling), lt = t, we = !0, vt = null, e !== null && (it[ct++] = Tt, it[ct++] = Pt, it[ct++] = yn, Tt = e.id, Pt = e.overflow, yn = t), t = _o(t, r.children), t.flags |= 4096, t);
}
function Ai(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ya(e.return, t, n);
}
function As(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Vu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = _e.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ai(e, n, t);
      else if (e.tag === 19) Ai(e, n, t);
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
  if (me(_e, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Wl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), As(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Wl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      As(t, !0, n, null, a);
      break;
    case "together":
      As(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function vl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function nm(e, t, n) {
  switch (t.tag) {
    case 3:
      $u(t), Qn();
      break;
    case 5:
      hu(t);
      break;
    case 1:
      Je(t.type) && Dl(t);
      break;
    case 4:
      po(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      me(Al, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(_e, _e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Uu(e, t, n) : (me(_e, _e.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
      me(_e, _e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Vu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), me(_e, _e.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fu(e, t, n);
  }
  return Ot(e, t, n);
}
var Qu, Ea, Hu, Bu;
Qu = function(e, t) {
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
Ea = function() {
};
Hu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, pn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Ks(e, l), r = Ks(e, r), a = [];
        break;
      case "select":
        l = Se({}, l, { value: void 0 }), r = Se({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = qs(e, l), r = qs(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tl);
    }
    Js(n, r);
    var o;
    n = null;
    for (u in l) if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null) if (u === "style") {
      var i = l[u];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_r.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (i = l != null ? l[u] : void 0, r.hasOwnProperty(u) && c !== i && (c != null || i != null)) if (u === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (_r.hasOwnProperty(u) ? (c != null && u === "onScroll" && ge("scroll", e), a || i === c || (a = [])) : (a = a || []).push(u, c));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bu = function(e, t, n, r) {
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
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function rm(e, t, n) {
  var r = t.pendingProps;
  switch (so(t), t.tag) {
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
      return Je(t.type) && Pl(), We(t), null;
    case 3:
      return r = t.stateNode, Bn(), ye(Xe), ye(Ue), ho(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, vt !== null && (Pa(vt), vt = null))), Ea(e, t), We(t), null;
    case 5:
      mo(t);
      var l = pn(Pr.current);
      if (n = t.type, e !== null && t.stateNode != null) Hu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return We(t), null;
        }
        if (e = pn(Mt.current), rl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ct] = t, r[Lr] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < dr.length; l++) ge(dr[l], r);
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
              Bo(r, a), ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ge("invalid", r);
              break;
            case "textarea":
              Go(r, a), ge("invalid", r);
          }
          Js(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && nl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && nl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : _r.hasOwnProperty(o) && i != null && o === "onScroll" && ge("scroll", r);
          }
          switch (n) {
            case "input":
              Gr(r), Ko(r, a, !0);
              break;
            case "textarea":
              Gr(r), Yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Lr] = r, Qu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Zs(n, r), n) {
              case "dialog":
                ge("cancel", e), ge("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) ge(dr[l], e);
                l = r;
                break;
              case "source":
                ge("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  e
                ), ge("load", e), l = r;
                break;
              case "details":
                ge("toggle", e), l = r;
                break;
              case "input":
                Bo(e, r), l = Ks(e, r), ge("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Se({}, r, { value: void 0 }), ge("invalid", e);
                break;
              case "textarea":
                Go(e, r), l = qs(e, r), ge("invalid", e);
                break;
              default:
                l = r;
            }
            Js(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Sc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && _c(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && kr(e, c) : typeof c == "number" && kr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (_r.hasOwnProperty(a) ? c != null && a === "onScroll" && ge("scroll", e) : c != null && Qa(e, a, c, o));
            }
            switch (n) {
              case "input":
                Gr(e), Ko(e, r, !1);
                break;
              case "textarea":
                Gr(e), Yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? zn(e, !!r.multiple, a, !1) : r.defaultValue != null && zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Tl);
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
      if (e && t.stateNode != null) Bu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (n = pn(Pr.current), pn(Mt.current), rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              nl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && nl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return We(t), null;
    case 13:
      if (ye(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (we && rt !== null && t.mode & 1 && !(t.flags & 128)) uu(), Qn(), t.flags |= 98560, a = !1;
        else if (a = rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(D(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(D(317));
            a[Ct] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          We(t), a = !1;
        } else vt !== null && (Pa(vt), vt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? Te === 0 && (Te = 3) : No())), t.updateQueue !== null && (t.flags |= 4), We(t), null);
    case 4:
      return Bn(), Ea(e, t), e === null && br(t.stateNode.containerInfo), We(t), null;
    case 10:
      return co(t.type._context), We(t), null;
    case 17:
      return Je(t.type) && Pl(), We(t), null;
    case 19:
      if (ye(_e), a = t.memoizedState, a === null) return We(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) ar(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Wl(e), o !== null) {
            for (t.flags |= 128, ar(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(_e, _e.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > Gn && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Wl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !we) return We(t), null;
        } else 2 * Ce() - a.renderingStartTime > Gn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = _e.current, me(_e, r ? n & 1 | 2 : n & 1), t) : (We(t), null);
    case 22:
    case 23:
      return Co(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function lm(e, t) {
  switch (so(t), t.tag) {
    case 1:
      return Je(t.type) && Pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Bn(), ye(Xe), ye(Ue), ho(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return mo(t), null;
    case 13:
      if (ye(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(D(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(_e), null;
    case 4:
      return Bn(), null;
    case 10:
      return co(t.type._context), null;
    case 22:
    case 23:
      return Co(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var al = !1, $e = !1, sm = typeof WeakSet == "function" ? WeakSet : Set, U = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    je(e, t, r);
  }
  else n.current = null;
}
function Ca(e, t, n) {
  try {
    n();
  } catch (r) {
    je(e, t, r);
  }
}
var Oi = !1;
function am(e, t) {
  if (ca = bl, e = Xc(), ro(e)) {
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
        var o = 0, i = -1, c = -1, u = 0, g = 0, v = e, w = null;
        t: for (; ; ) {
          for (var k; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            w = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++u === l && (i = o), w === a && ++g === r && (c = o), (k = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = k;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ua = { focusedElem: e, selectionRange: n }, bl = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
  else for (; U !== null; ) {
    t = U;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, E = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : gt(t.type, x), E);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(D(163));
      }
    } catch (h) {
      je(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, U = e;
      break;
    }
    U = t.return;
  }
  return y = Oi, Oi = !1, y;
}
function vr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ca(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function rs(e, t) {
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
function Na(e) {
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
function Ku(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ku(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Lr], delete t[pa], delete t[Up], delete t[Vp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), e = e.sibling;
}
function ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ba(e, t, n), e = e.sibling; e !== null; ) ba(e, t, n), e = e.sibling;
}
var Re = null, yt = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Yu(e, t, n), n = n.sibling;
}
function Yu(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(Yl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      $e || Dn(n, t);
    case 6:
      var r = Re, l = yt;
      Re = null, $t(e, t, n), Re = r, yt = l, Re !== null && (yt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null && (yt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Is(e.parentNode, n) : e.nodeType === 1 && Is(e, n), Cr(e)) : Is(Re, n.stateNode));
      break;
    case 4:
      r = Re, l = yt, Re = n.stateNode.containerInfo, yt = !0, $t(e, t, n), Re = r, yt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ca(n, t, o), l = l.next;
        } while (l !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!$e && (Dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        je(n, t, i);
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
function Wi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sm()), t.forEach(function(r) {
      var l = hm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Re = i.stateNode, yt = !1;
            break e;
          case 3:
            Re = i.stateNode.containerInfo, yt = !0;
            break e;
          case 4:
            Re = i.stateNode.containerInfo, yt = !0;
            break e;
        }
        i = i.return;
      }
      if (Re === null) throw Error(D(160));
      Yu(a, o, l), Re = null, yt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (u) {
      je(l, t, u);
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
      if (mt(t, e), jt(e), r & 4) {
        try {
          vr(3, e, e.return), rs(3, e);
        } catch (x) {
          je(e, e.return, x);
        }
        try {
          vr(5, e, e.return);
        } catch (x) {
          je(e, e.return, x);
        }
      }
      break;
    case 1:
      mt(t, e), jt(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (mt(t, e), jt(e), r & 512 && n !== null && Dn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          kr(l, "");
        } catch (x) {
          je(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && vc(l, a), Zs(i, o);
          var u = Zs(i, a);
          for (o = 0; o < c.length; o += 2) {
            var g = c[o], v = c[o + 1];
            g === "style" ? Sc(l, v) : g === "dangerouslySetInnerHTML" ? _c(l, v) : g === "children" ? kr(l, v) : Qa(l, g, v, u);
          }
          switch (i) {
            case "input":
              Gs(l, a);
              break;
            case "textarea":
              wc(l, a);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var k = a.value;
              k != null ? zn(l, !!a.multiple, k, !1) : w !== !!a.multiple && (a.defaultValue != null ? zn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : zn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Lr] = a;
        } catch (x) {
          je(e, e.return, x);
        }
      }
      break;
    case 6:
      if (mt(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(D(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (x) {
          je(e, e.return, x);
        }
      }
      break;
    case 3:
      if (mt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Cr(t.containerInfo);
      } catch (x) {
        je(e, e.return, x);
      }
      break;
    case 4:
      mt(t, e), jt(e);
      break;
    case 13:
      mt(t, e), jt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (jo = Ce())), r & 4 && Wi(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? ($e = (u = $e) || g, mt(t, e), $e = u) : mt(t, e), jt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !g && e.mode & 1) for (U = e, g = e.child; g !== null; ) {
          for (v = U = g; U !== null; ) {
            switch (w = U, k = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vr(4, w, w.return);
                break;
              case 1:
                Dn(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    je(r, n, x);
                  }
                }
                break;
              case 5:
                Dn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  Ui(v);
                  continue;
                }
            }
            k !== null ? (k.return = w, U = k) : Ui(v);
          }
          g = g.sibling;
        }
        e: for (g = null, v = e; ; ) {
          if (v.tag === 5) {
            if (g === null) {
              g = v;
              try {
                l = v.stateNode, u ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = kc("display", o));
              } catch (x) {
                je(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (g === null) try {
              v.stateNode.nodeValue = u ? "" : v.memoizedProps;
            } catch (x) {
              je(e, e.return, x);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            g === v && (g = null), v = v.return;
          }
          g === v && (g = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      mt(t, e), jt(e), r & 4 && Wi(e);
      break;
    case 21:
      break;
    default:
      mt(
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
          if (Gu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (kr(l, ""), r.flags &= -33);
          var a = Fi(e);
          ba(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Fi(e);
          Ma(e, i, o);
          break;
        default:
          throw Error(D(161));
      }
    } catch (c) {
      je(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function om(e, t, n) {
  U = e, Xu(e);
}
function Xu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var l = U, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || al;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || $e;
        i = al;
        var u = $e;
        if (al = o, ($e = c) && !u) for (U = l; U !== null; ) o = U, c = o.child, o.tag === 22 && o.memoizedState !== null ? Vi(l) : c !== null ? (c.return = o, U = c) : Vi(l);
        for (; a !== null; ) U = a, Xu(a), a = a.sibling;
        U = l, al = i, $e = u;
      }
      $i(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, U = a) : $i(e);
  }
}
function $i(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $e || rs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$e) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Ei(t, a, r);
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
              Ei(t, o, n);
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
                var g = u.memoizedState;
                if (g !== null) {
                  var v = g.dehydrated;
                  v !== null && Cr(v);
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
            throw Error(D(163));
        }
        $e || t.flags & 512 && Na(t);
      } catch (w) {
        je(t, t.return, w);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Ui(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Vi(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rs(4, t);
          } catch (c) {
            je(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              je(t, l, c);
            }
          }
          var a = t.return;
          try {
            Na(t);
          } catch (c) {
            je(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Na(t);
          } catch (c) {
            je(t, o, c);
          }
      }
    } catch (c) {
      je(t, t.return, c);
    }
    if (t === e) {
      U = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, U = i;
      break;
    }
    U = t.return;
  }
}
var im = Math.ceil, Vl = Ft.ReactCurrentDispatcher, ko = Ft.ReactCurrentOwner, dt = Ft.ReactCurrentBatchConfig, ie = 0, De = null, be = null, ze = 0, nt = 0, Rn = an(0), Te = 0, Ar = null, wn = 0, ls = 0, So = 0, wr = null, Ye = null, jo = 0, Gn = 1 / 0, It = null, Ql = !1, Ia = null, Zt = null, ol = !1, Kt = null, Hl = 0, xr = 0, La = null, wl = -1, xl = 0;
function Qe() {
  return ie & 6 ? Ce() : wl !== -1 ? wl : wl = Ce();
}
function en(e) {
  return e.mode & 1 ? ie & 2 && ze !== 0 ? ze & -ze : Hp.transition !== null ? (xl === 0 && (xl = Rc()), xl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function _t(e, t, n, r) {
  if (50 < xr) throw xr = 0, La = null, Error(D(185));
  Wr(e, n, r), (!(ie & 2) || e !== De) && (e === De && (!(ie & 2) && (ls |= n), Te === 4 && Ht(e, ze)), Ze(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Gn = Ce() + 500, es && on()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Hf(e, t);
  var r = Ml(e, e === De ? ze : 0);
  if (r === 0) n !== null && Jo(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Jo(n), t === 1) e.tag === 0 ? Qp(Qi.bind(null, e)) : ou(Qi.bind(null, e)), Wp(function() {
      !(ie & 6) && on();
    }), n = null;
    else {
      switch (zc(r)) {
        case 1:
          n = Ya;
          break;
        case 4:
          n = Pc;
          break;
        case 16:
          n = Nl;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Nl;
      }
      n = sd(n, Ju.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ju(e, t) {
  if (wl = -1, xl = 0, ie & 6) throw Error(D(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = Ml(e, e === De ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bl(e, r);
  else {
    t = r;
    var l = ie;
    ie |= 2;
    var a = ed();
    (De !== e || ze !== t) && (It = null, Gn = Ce() + 500, mn(e, t));
    do
      try {
        dm();
        break;
      } catch (i) {
        Zu(e, i);
      }
    while (!0);
    io(), Vl.current = a, ie = l, be !== null ? t = 0 : (De = null, ze = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = la(e), l !== 0 && (r = l, t = Ta(e, l))), t === 1) throw n = Ar, mn(e, 0), Ht(e, r), Ze(e, Ce()), n;
    if (t === 6) Ht(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !cm(l) && (t = Bl(e, r), t === 2 && (a = la(e), a !== 0 && (r = a, t = Ta(e, a))), t === 1)) throw n = Ar, mn(e, 0), Ht(e, r), Ze(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          un(e, Ye, It);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = jo + 500 - Ce(), 10 < t)) {
            if (Ml(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = fa(un.bind(null, e, Ye, It), t);
            break;
          }
          un(e, Ye, It);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - xt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * im(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fa(un.bind(null, e, Ye, It), r);
            break;
          }
          un(e, Ye, It);
          break;
        case 5:
          un(e, Ye, It);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Ze(e, Ce()), e.callbackNode === n ? Ju.bind(null, e) : null;
}
function Ta(e, t) {
  var n = wr;
  return e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && Pa(t)), e;
}
function Pa(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!kt(a(), l)) return !1;
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
  for (t &= ~So, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Qi(e) {
  if (ie & 6) throw Error(D(327));
  $n();
  var t = Ml(e, 0);
  if (!(t & 1)) return Ze(e, Ce()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = la(e);
    r !== 0 && (t = r, n = Ta(e, r));
  }
  if (n === 1) throw n = Ar, mn(e, 0), Ht(e, t), Ze(e, Ce()), n;
  if (n === 6) throw Error(D(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, Ye, It), Ze(e, Ce()), null;
}
function Eo(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Gn = Ce() + 500, es && on());
  }
}
function xn(e) {
  Kt !== null && Kt.tag === 0 && !(ie & 6) && $n();
  var t = ie;
  ie |= 1;
  var n = dt.transition, r = ce;
  try {
    if (dt.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, dt.transition = n, ie = t, !(ie & 6) && on();
  }
}
function Co() {
  nt = Rn.current, ye(Rn);
}
function mn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fp(n)), be !== null) for (n = be.return; n !== null; ) {
    var r = n;
    switch (so(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Pl();
        break;
      case 3:
        Bn(), ye(Xe), ye(Ue), ho();
        break;
      case 5:
        mo(r);
        break;
      case 4:
        Bn();
        break;
      case 13:
        ye(_e);
        break;
      case 19:
        ye(_e);
        break;
      case 10:
        co(r.type._context);
        break;
      case 22:
      case 23:
        Co();
    }
    n = n.return;
  }
  if (De = e, be = e = tn(e.current, null), ze = nt = t, Te = 0, Ar = null, So = ls = wn = 0, Ye = wr = null, fn !== null) {
    for (t = 0; t < fn.length; t++) if (n = fn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    fn = null;
  }
  return e;
}
function Zu(e, t) {
  do {
    var n = be;
    try {
      if (io(), gl.current = Ul, $l) {
        for (var r = ke.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        $l = !1;
      }
      if (vn = 0, Pe = Le = ke = null, yr = !1, Dr = 0, ko.current = null, n === null || n.return === null) {
        Te = 1, Ar = t, be = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, g = i, v = g.tag;
          if (!(g.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = g.alternate;
            w ? (g.updateQueue = w.updateQueue, g.memoizedState = w.memoizedState, g.lanes = w.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var k = Li(o);
          if (k !== null) {
            k.flags &= -257, Ti(k, o, i, a, t), k.mode & 1 && Ii(a, u, t), t = k, c = u;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ii(a, u, t), No();
              break e;
            }
            c = Error(D(426));
          }
        } else if (we && i.mode & 1) {
          var E = Li(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Ti(E, o, i, a, t), ao(Kn(c, i));
            break e;
          }
        }
        a = c = Kn(c, i), Te !== 4 && (Te = 2), wr === null ? wr = [a] : wr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = zu(a, c, t);
              ji(a, d);
              break e;
            case 1:
              i = c;
              var f = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Zt === null || !Zt.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var h = Au(a, i, t);
                ji(a, h);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      nd(n);
    } catch (S) {
      t = S, be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ed() {
  var e = Vl.current;
  return Vl.current = Ul, e === null ? Ul : e;
}
function No() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || !(wn & 268435455) && !(ls & 268435455) || Ht(De, ze);
}
function Bl(e, t) {
  var n = ie;
  ie |= 2;
  var r = ed();
  (De !== e || ze !== t) && (It = null, mn(e, t));
  do
    try {
      um();
      break;
    } catch (l) {
      Zu(e, l);
    }
  while (!0);
  if (io(), ie = n, Vl.current = r, be !== null) throw Error(D(261));
  return De = null, ze = 0, Te;
}
function um() {
  for (; be !== null; ) td(be);
}
function dm() {
  for (; be !== null && !zf(); ) td(be);
}
function td(e) {
  var t = ld(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? nd(e) : be = t, ko.current = null;
}
function nd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lm(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, be = null;
        return;
      }
    } else if (n = rm(n, t, nt), n !== null) {
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
function un(e, t, n) {
  var r = ce, l = dt.transition;
  try {
    dt.transition = null, ce = 1, fm(e, t, n, r);
  } finally {
    dt.transition = l, ce = r;
  }
  return null;
}
function fm(e, t, n, r) {
  do
    $n();
  while (Kt !== null);
  if (ie & 6) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(D(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Bf(e, a), e === De && (be = De = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ol || (ol = !0, sd(Nl, function() {
    return $n(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = dt.transition, dt.transition = null;
    var o = ce;
    ce = 1;
    var i = ie;
    ie |= 4, ko.current = null, am(e, n), qu(n, e), Tp(ua), bl = !!ca, ua = ca = null, e.current = n, om(n), Af(), ie = i, ce = o, dt.transition = a;
  } else e.current = n;
  if (ol && (ol = !1, Kt = e, Hl = l), a = e.pendingLanes, a === 0 && (Zt = null), Wf(n.stateNode), Ze(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ql) throw Ql = !1, e = Ia, Ia = null, e;
  return Hl & 1 && e.tag !== 0 && $n(), a = e.pendingLanes, a & 1 ? e === La ? xr++ : (xr = 0, La = e) : xr = 0, on(), null;
}
function $n() {
  if (Kt !== null) {
    var e = zc(Hl), t = dt.transition, n = ce;
    try {
      if (dt.transition = null, ce = 16 > e ? 16 : e, Kt === null) var r = !1;
      else {
        if (e = Kt, Kt = null, Hl = 0, ie & 6) throw Error(D(331));
        var l = ie;
        for (ie |= 4, U = e.current; U !== null; ) {
          var a = U, o = a.child;
          if (U.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var u = i[c];
                for (U = u; U !== null; ) {
                  var g = U;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, g, a);
                  }
                  var v = g.child;
                  if (v !== null) v.return = g, U = v;
                  else for (; U !== null; ) {
                    g = U;
                    var w = g.sibling, k = g.return;
                    if (Ku(g), g === u) {
                      U = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = k, U = w;
                      break;
                    }
                    U = k;
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
              U = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, U = o;
          else e: for (; U !== null; ) {
            if (a = U, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                vr(9, a, a.return);
            }
            var d = a.sibling;
            if (d !== null) {
              d.return = a.return, U = d;
              break e;
            }
            U = a.return;
          }
        }
        var f = e.current;
        for (U = f; U !== null; ) {
          o = U;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, U = p;
          else e: for (o = f; U !== null; ) {
            if (i = U, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  rs(9, i);
              }
            } catch (S) {
              je(i, i.return, S);
            }
            if (i === o) {
              U = null;
              break e;
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, U = h;
              break e;
            }
            U = i.return;
          }
        }
        if (ie = l, on(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(Yl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, dt.transition = t;
    }
  }
  return !1;
}
function Hi(e, t, n) {
  t = Kn(n, t), t = zu(e, t, 1), e = Jt(e, t, 1), t = Qe(), e !== null && (Wr(e, 1, t), Ze(e, t));
}
function je(e, t, n) {
  if (e.tag === 3) Hi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Hi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = Kn(n, e), e = Au(t, e, 1), t = Jt(t, e, 1), e = Qe(), t !== null && (Wr(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, De === e && (ze & n) === n && (Te === 4 || Te === 3 && (ze & 130023424) === ze && 500 > Ce() - jo ? mn(e, 0) : So |= n), Ze(e, t);
}
function rd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = Qe();
  e = At(e, t), e !== null && (Wr(e, t, n), Ze(e, n));
}
function mm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rd(e, n);
}
function hm(e, t) {
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
      throw Error(D(314));
  }
  r !== null && r.delete(t), rd(e, n);
}
var ld;
ld = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, nm(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, we && t.flags & 1048576 && iu(t, zl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      vl(e, t), e = t.pendingProps;
      var l = Vn(t, Ue.current);
      Wn(t, n), l = yo(null, t, r, e, l, n);
      var a = vo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, Dl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, fo(t), l.updater = ns, t.stateNode = l, l._reactInternals = t, wa(t, r, e, n), t = ka(null, t, r, !0, a, n)) : (t.tag = 0, we && a && lo(t), Ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (vl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = ym(r), e = gt(r, e), l) {
          case 0:
            t = _a(null, t, r, e, n);
            break e;
          case 1:
            t = Ri(null, t, r, e, n);
            break e;
          case 11:
            t = Pi(null, t, r, e, n);
            break e;
          case 14:
            t = Di(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(D(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), _a(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), Ri(e, t, r, l, n);
    case 3:
      e: {
        if ($u(t), e === null) throw Error(D(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, mu(e, t), Fl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Kn(Error(D(423)), t), t = zi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Kn(Error(D(424)), t), t = zi(e, t, r, n, l);
          break e;
        } else for (rt = Xt(t.stateNode.containerInfo.firstChild), lt = t, we = !0, vt = null, n = fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === l) {
            t = Ot(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return hu(t), e === null && ga(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, da(r, l) ? o = null : a !== null && da(r, a) && (t.flags |= 32), Wu(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && ga(t), null;
    case 13:
      return Uu(e, t, n);
    case 4:
      return po(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hn(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), Pi(e, t, r, l, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, me(Al, r._currentValue), r._currentValue = o, a !== null) if (kt(a.value, o)) {
          if (a.children === l.children && !Xe.current) {
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
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var g = u.pending;
                    g === null ? c.next = c : (c.next = g.next, g.next = c), u.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), ya(
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
            if (o = a.return, o === null) throw Error(D(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), ya(o, n, t), o = a.sibling;
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
      return l = t.type, r = t.pendingProps.children, Wn(t, n), l = ft(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = gt(r, t.pendingProps), l = gt(r.type, l), Di(e, t, r, l, n);
    case 15:
      return Ou(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), vl(e, t), t.tag = 1, Je(r) ? (e = !0, Dl(t)) : e = !1, Wn(t, n), Ru(t, r, l), wa(t, r, l, n), ka(null, t, r, !0, e, n);
    case 19:
      return Vu(e, t, n);
    case 22:
      return Fu(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function sd(e, t) {
  return Tc(e, t);
}
function gm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new gm(e, t, n, r);
}
function Mo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ym(e) {
  if (typeof e == "function") return Mo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ba) return 11;
    if (e === Ka) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function _l(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") Mo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case En:
      return hn(n.children, l, a, t);
    case Ha:
      o = 8, l |= 8;
      break;
    case Vs:
      return e = ut(12, n, t, l | 2), e.elementType = Vs, e.lanes = a, e;
    case Qs:
      return e = ut(13, n, t, l), e.elementType = Qs, e.lanes = a, e;
    case Hs:
      return e = ut(19, n, t, l), e.elementType = Hs, e.lanes = a, e;
    case hc:
      return ss(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pc:
          o = 10;
          break e;
        case mc:
          o = 9;
          break e;
        case Ba:
          o = 11;
          break e;
        case Ka:
          o = 14;
          break e;
        case Ut:
          o = 16, r = null;
          break e;
      }
      throw Error(D(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function hn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function ss(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = hc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Os(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function Fs(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function vm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ws(0), this.expirationTimes = ws(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ws(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function bo(e, t, n, r, l, a, o, i, c) {
  return e = new vm(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fo(a), e;
}
function wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ad(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(D(170));
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
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return au(e, n, t);
  }
  return t;
}
function od(e, t, n, r, l, a, o, i, c) {
  return e = bo(n, r, !0, e, l, a, o, i, c), e.context = ad(null), n = e.current, r = Qe(), l = en(n), a = Dt(r, l), a.callback = t ?? null, Jt(n, a, l), e.current.lanes = l, Wr(e, l, r), Ze(e, r), e;
}
function as(e, t, n, r) {
  var l = t.current, a = Qe(), o = en(l);
  return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jt(l, t, o), e !== null && (_t(e, l, o, a), hl(e, l, o)), o;
}
function Kl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Io(e, t) {
  Bi(e, t), (e = e.alternate) && Bi(e, t);
}
function xm() {
  return null;
}
var id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Lo(e) {
  this._internalRoot = e;
}
os.prototype.render = Lo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  as(e, t, null, null);
};
os.prototype.unmount = Lo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function() {
      as(null, e, null, null);
    }), t[zt] = null;
  }
};
function os(e) {
  this._internalRoot = e;
}
os.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++) ;
    Qt.splice(n, 0, e), n === 0 && $c(e);
  }
};
function To(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function is(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ki() {
}
function _m(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Kl(o);
        a.call(u);
      };
    }
    var o = od(t, r, e, 0, null, !1, !1, "", Ki);
    return e._reactRootContainer = o, e[zt] = o.current, br(e.nodeType === 8 ? e.parentNode : e), xn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var u = Kl(c);
      i.call(u);
    };
  }
  var c = bo(e, 0, !1, null, null, !1, !1, "", Ki);
  return e._reactRootContainer = c, e[zt] = c.current, br(e.nodeType === 8 ? e.parentNode : e), xn(function() {
    as(t, c, n, r);
  }), c;
}
function cs(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = Kl(o);
        i.call(c);
      };
    }
    as(t, o, e, l);
  } else o = _m(n, t, e, l, r);
  return Kl(o);
}
Ac = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (qa(t, n | 1), Ze(t, Ce()), !(ie & 6) && (Gn = Ce() + 500, on()));
      }
      break;
    case 13:
      xn(function() {
        var r = At(e, 1);
        if (r !== null) {
          var l = Qe();
          _t(r, e, 1, l);
        }
      }), Io(e, 1);
  }
};
Xa = function(e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Qe();
      _t(t, e, 134217728, n);
    }
    Io(e, 134217728);
  }
};
Oc = function(e) {
  if (e.tag === 13) {
    var t = en(e), n = At(e, t);
    if (n !== null) {
      var r = Qe();
      _t(n, e, t, r);
    }
    Io(e, t);
  }
};
Fc = function() {
  return ce;
};
Wc = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
ta = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Zl(r);
            if (!l) throw Error(D(90));
            yc(r), Gs(r, l);
          }
        }
      }
      break;
    case "textarea":
      wc(e, n);
      break;
    case "select":
      t = n.value, t != null && zn(e, !!n.multiple, t, !1);
  }
};
Cc = Eo;
Nc = xn;
var km = { usingClientEntryPoint: !1, Events: [Ur, bn, Zl, jc, Ec, Eo] }, or = { findFiberByHostInstance: dn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: or.bundleType, version: or.version, rendererPackageName: or.rendererPackageName, rendererConfig: or.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ic(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: or.findFiberByHostInstance || xm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!il.isDisabled && il.supportsFiber) try {
    Yl = il.inject(Sm), Nt = il;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!To(t)) throw Error(D(200));
  return wm(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!To(e)) throw Error(D(299));
  var n = !1, r = "", l = id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = bo(e, 1, !1, null, null, n, !1, r, l), e[zt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Lo(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e)));
  return e = Ic(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return xn(e);
};
at.hydrate = function(e, t, n) {
  if (!is(t)) throw Error(D(200));
  return cs(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!To(e)) throw Error(D(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = id;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, l, !1, a, o), e[zt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new os(t);
};
at.render = function(e, t, n) {
  if (!is(t)) throw Error(D(200));
  return cs(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!is(e)) throw Error(D(40));
  return e._reactRootContainer ? (xn(function() {
    cs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Eo;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!is(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return cs(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function cd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd);
    } catch (e) {
      console.error(e);
    }
}
cd(), cc.exports = at;
var Me = cc.exports, ud, Gi = Me;
ud = Gi.createRoot, Gi.hydrateRoot;
var dd = { exports: {} }, us = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm = m, Em = Symbol.for("react.element"), Cm = Symbol.for("react.fragment"), Nm = Object.prototype.hasOwnProperty, Mm = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Nm.call(t, r) && !bm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Em, type: e, key: a, ref: o, props: l, _owner: Mm.current };
}
us.Fragment = Cm;
us.jsx = fd;
us.jsxs = fd;
dd.exports = us;
var s = dd.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Im = {
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
const Lm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), re = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...u
    }, g) => m.createElement(
      "svg",
      {
        ref: g,
        ...Im,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Lm(e)}`, i].join(" "),
        ...u
      },
      [
        ...t.map(([v, w]) => m.createElement(v, w)),
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
const pd = re("AlertCircle", [
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
const Tm = re("AlertTriangle", [
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
const md = re("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = re("ArrowUpDown", [
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
const hd = re("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = re("Box", [
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
const Rm = re("Calendar", [
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
const zm = re("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = re("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = re("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = re("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = re("Download", [
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
const vd = re("FileJson", [
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
const Wm = re("Folder", [
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
const $m = re("Info", [
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
const Um = re("Lasso", [
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
const wd = re("LayoutGrid", [
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
const Vm = re("LayoutList", [
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
const Qm = re("Link2Off", [
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
const Hm = re("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = re("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = re("Maximize", [
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
const Km = re("Minimize", [
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
const Gm = re("MoreVertical", [
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
const xd = re("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = re("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = re("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = re("RefreshCw", [
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
const Yn = re("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = re("Settings", [
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
const _d = re("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = re("Star", [
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
const qm = re("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = re("Tag", [
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
const ln = re("Trash2", [
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
const Xm = re("Type", [
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
const Jm = re("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = re("Upload", [
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
const Ee = re("X", [
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
const eh = async () => {
  const e = await ee.fetchApi("/meld/home-dir");
  return (await oe(e)).home;
}, St = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  m.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let Gl = !1;
const th = (e) => {
  Gl = e, Gl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, nh = (...e) => {
  Gl && console.log("[Meld]", ...e);
}, rh = (...e) => {
  Gl && console.warn("[Meld]", ...e);
}, lh = (...e) => {
  console.error("[Meld]", ...e);
}, Y = {
  log: nh,
  warn: rh,
  error: lh,
  init: th
}, kl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await ee.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return oe(a);
}, kd = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/details`);
  return oe(t);
}, Da = async (e, t = !1) => {
  const n = await ee.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await oe(n);
}, zo = async (e) => {
  const t = await ee.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return oe(t);
}, Sd = async (e) => {
  const t = await ee.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return oe(t);
}, qi = async (e, t) => {
  const n = await ee.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await oe(n);
}, sh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await ee.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await oe(r);
  } catch {
    return [];
  }
}, Ra = async (e) => {
  const t = await ee.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await oe(t);
  } catch {
    return [];
  }
}, ah = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await oe(n);
}, oh = async (e, t) => {
  const n = await ee.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return oe(n);
}, za = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await oe(r);
}, ih = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/workflow`);
  return oe(t);
}, ch = async (e) => {
  const t = await ee.fetchApi(`/meld/image/${e}/snapshot_data`);
  return oe(t);
}, uh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await ee.fetchApi(n);
  return oe(r);
}, dh = async () => {
  const e = await ee.fetchApi("/meld/search-suggestions");
  return oe(e);
}, fh = async () => {
  const e = await ee.fetchApi("/meld/search-keywords");
  return oe(e);
}, ph = async () => {
  const e = await ee.fetchApi("/meld/search-config");
  return oe(e);
}, mh = async () => {
  const e = await ee.fetchApi("/meld/favorites");
  return oe(e);
}, hh = async (e, t) => {
  const n = await ee.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await oe(n);
}, Xi = async (e) => {
  const t = await ee.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await oe(t);
}, gh = async (e, t, n) => {
  const r = await ee.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await oe(r);
}, yh = {
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
}, jd = async () => {
  let e;
  try {
    const t = await ee.fetchApi("/meld/settings");
    e = await oe(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), yh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, vh = async (e, t) => {
  const n = await ee.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await oe(n);
}, wh = {
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
function xh(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), a = e.images.filter((i) => !l.has(i.id)), o = new Set(e.selectedIds);
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
      const l = t.payload, a = [...e.images, ...l], o = Array.from(
        new Map(a.map((i) => [i.id, i])).values()
      ).sort((i, c) => c.created_at - i.created_at);
      return {
        ...e,
        images: o,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, a = e.images.map(
        (i) => i.id === l.id ? l : i
      ), o = e.lineageImages.map(
        (i) => i.id === l.id ? l : i
      );
      return {
        ...e,
        images: a,
        lineageImages: o
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: a, offset: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !l.some((c) => c.id === i) && (i = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        pagination: {
          total: a,
          offset: o,
          limit: e.pagination.limit,
          hasMore: o + l.length < a
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: a, offset: o } = t.payload, i = [...e.images, ...l], c = Array.from(
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
          hasMore: o + l.length < a
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
        const u = new Set(e.selectedIds);
        return u.add(t.payload), {
          ...e,
          selectedIds: u,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (u) => u.id === e.lastSelectedId
      ), a = e.images.findIndex(
        (u) => u.id === t.payload
      );
      if (l === -1 || a === -1) return e;
      const [o, i] = [
        Math.min(l, a),
        Math.max(l, a)
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
      const l = t.payload, a = typeof l == "number" ? l : l.id, o = typeof l == "number" ? "gallery" : l.mode;
      let i = !1;
      if (typeof l != "number" && l.initialMaskMode && (typeof l.initialMaskMode == "string" ? i = l.initialMaskMode : i = "run"), i)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: i
          }
        };
      const c = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((u) => u.id === a);
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
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (g) => g.id === e.viewerImageId
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
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), i = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || o)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (g) => g.id === e.viewerImageId
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
const Ed = m.createContext(void 0), _h = ({
  children: e
}) => {
  const [t, n] = m.useReducer(xh, wh), r = m.useRef(t.images.length), l = m.useRef(0), a = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = m.useCallback(
    async (y, x, E) => {
      const d = t.settings["gallery.max_load_count"], f = 200;
      let p = y;
      for (; p < Math.min(x, d) && E === l.current; )
        try {
          const h = Math.min(f, d - p);
          Y.log("Background fetch: starting chunk", {
            offset: p,
            limit: h
          });
          const S = await kl(
            p,
            h,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (E !== l.current || (n({ type: "APPEND_IMAGES", payload: S }), p += S.images.length, S.images.length === 0 || p >= S.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (h) {
          Y.error("Background fetch failed", h);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), x = ++l.current;
    try {
      const E = t.searchQuery.trim() !== "", d = t.settings["gallery.initial_load_count"];
      Y.log("refreshImages: starting initial fetch", {
        isSearch: E,
        fetchLimit: d,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await kl(
        0,
        d,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - y;
      Y.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > d && o(d, f.total, x);
    } catch (E) {
      Y.error("refreshImages: fetch failed", E), n({
        type: "SET_ERROR",
        payload: E instanceof Error ? E.message : String(E)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const x = r.current, E = t.searchQuery.trim() !== "", d = t.pagination.limit;
      Y.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: d,
        isSearch: E
      });
      const f = await kl(
        x,
        d,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - y;
      Y.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (x) {
      Y.error("loadMoreImages: fetch failed", x), n({
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
  ]), u = m.useCallback(async () => {
    try {
      const y = await mh();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      Y.error("Failed to load favorites", y);
    }
  }, []), g = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), E = t.images.filter(
      (d) => t.selectedIds.has(d.id)
    ).some(
      (d) => d.parent_id || d.has_children
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
  }, [t.selectedIds, t.images, t.viewScope]), v = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const E = (await zo(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: E }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = m.useCallback(
    async (y, x) => {
      try {
        await vh(y, x), n({ type: "SET_SETTINGS", payload: { [y]: x } });
      } catch (E) {
        n({
          type: "SET_ERROR",
          payload: E instanceof Error ? E.message : String(E)
        });
      }
    },
    []
  ), k = m.useCallback(
    async (y) => {
      const x = t.images.find((p) => p.id === y);
      if (x && !x.is_minimal)
        return x;
      const E = t.lineageImages.find((p) => p.id === y);
      if (E && !E.is_minimal)
        return E;
      const d = a.current.get(y);
      if (d)
        return d;
      const f = (async () => {
        try {
          Y.log("fetchFullImageDetails: fetching full data", { id: y });
          const p = await kd(y);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(y);
        }
      })();
      return a.current.set(y, f), f;
    },
    [t.images, t.lineageImages]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const x = await jd();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        Y.error("Failed to load settings", x);
      }
    })();
  }, []), m.useEffect(() => {
    u();
  }, [u]), m.useEffect(() => {
    const y = () => {
      i();
    }, x = (d) => {
      const f = d.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, E = (d) => {
      const f = d.detail;
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
      }), i();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", E), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", E);
    };
  }, [i, t.scanStatus.progress.total]), m.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Ed.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: u,
        deleteSelected: g,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: k
      },
      children: e
    }
  );
}, Ne = () => {
  const e = m.useContext(Ed);
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
}, Ao = async () => {
  const e = await ee.fetchApi("/meld/tags");
  return oe(e);
}, kh = async (e) => {
  const t = await ee.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return oe(t);
}, Sh = async (e) => {
  const t = await ee.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await oe(t);
}, jh = async (e, t) => {
  const n = await ee.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await oe(n);
}, Eh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await ee.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Ch = async (e, t, n = !1, r) => {
  const l = await ee.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await oe(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Nh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await ee.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await oe(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Mh = async (e, t, n) => {
  const r = await ee.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await oe(r)).count;
  } catch {
    return 0;
  }
}, bh = async (e) => {
  const t = await ee.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await oe(t);
}, Ih = async () => {
  const e = await ee.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await oe(e);
}, Cd = () => {
  const { dispatch: e } = Ne(), [t, n] = m.useState(() => {
    const C = localStorage.getItem("meld-import-config"), X = {
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
        const A = JSON.parse(C);
        return { ...X, ...A, tags: [] };
      } catch {
        return X;
      }
    return X;
  });
  m.useEffect(() => {
    const { tags: C, ...X } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(X));
  }, [t]);
  const [r, l] = m.useState([]), [a, o] = m.useState([]), [i, c] = m.useState(0), [u, g] = m.useState(!1), [v, w] = m.useState([]), [k, y] = m.useState(""), [x, E] = m.useState(!1), [d, f] = m.useState(null), p = m.useRef(!1), h = (C) => {
    C.target === C.currentTarget && (p.current = !0);
  }, S = (C) => {
    C.target === C.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const X = await eh();
        n((A) => A.custom_path ? A : { ...A, custom_path: X });
      } catch (X) {
        Y.error("Failed to fetch home directory:", X);
      }
    })();
  }, []), m.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const A = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Y.log(
        `loadFolders started. Path: "${A}", Type: "${t.type}"`
      ), t.type === "custom" && !A) {
        Y.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      g(!0);
      const F = A, M = t.type;
      try {
        Y.log("Step 1: Fast load starting...");
        const O = await Ch(
          t.type,
          A,
          !0,
          C.signal
        );
        if (C.signal.aborted) {
          Y.log("Step 1: Aborted.");
          return;
        }
        Y.log(
          `Step 1 complete. Found ${O.folders.length} folders, ${O.images.length} images.`
        ), l(O.folders), o(O.images), c(null);
        const V = O.folders.map((L) => L.name);
        V.length > 0 && (Y.log(
          `Step 2: Metadata fetch starting for ${V.length} folders...`
        ), Nh(
          M,
          F,
          V,
          C.signal
        ).then((L) => {
          if (C.signal.aborted) {
            Y.log("Step 2: Aborted.");
            return;
          }
          Y.log("Step 2: Metadata fetch complete."), l(
            (Z) => Z.map((de) => {
              const $ = L[de.name];
              return $ ? { ...de, count: $.count, preview: $.preview } : de;
            })
          );
        }).catch((L) => {
          L.name !== "AbortError" && Y.error("Step 2: Metadata fetch failed:", L);
        })), Y.log("Step 3: Path image count starting..."), Mh(M, F, C.signal).then((L) => {
          if (C.signal.aborted) {
            Y.log("Step 3: Aborted.");
            return;
          }
          Y.log(`Step 3: Path image count complete: ${L}`), c(L);
        }).catch((L) => {
          L.name !== "AbortError" && Y.error("Step 3: Path image count failed:", L);
        });
      } catch (O) {
        if (O.name === "AbortError") {
          Y.log("Request aborted.");
          return;
        }
        Y.error("Failed to load folders:", O), l([]), o([]), c(0);
      } finally {
        C.signal.aborted || g(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = m.useCallback(async () => {
    E(!0);
    try {
      const C = await Ao();
      w(C);
    } catch (C) {
      Y.error("Failed to fetch tags:", C);
    } finally {
      E(!1);
    }
  }, []);
  m.useEffect(() => {
    j();
  }, [j]), St({
    onEscape: m.useCallback(() => {
      d ? f(null) : e({ type: "CLOSE_MODAL" });
    }, [d, e])
  });
  const _ = m.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(k.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, k, t.tags]), N = (C) => {
    const X = C.trim();
    X && !t.tags.includes(X) && (n({ ...t, tags: [...t.tags, X] }), y(""));
  }, W = (C) => {
    n({ ...t, tags: t.tags.filter((X) => X !== C) });
  }, b = (C) => {
    C.key === "Enter" && k.trim() && (C.preventDefault(), N(k.trim()));
  }, z = async () => {
    try {
      await bh(t), e({
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
      Y.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, H = (C) => {
    if (t.type === "custom") {
      const X = t.custom_path.includes("\\") ? "\\" : "/", A = t.custom_path.endsWith(X) ? `${t.custom_path}${C}` : `${t.custom_path}${X}${C}`;
      n({ ...t, custom_path: A });
    } else {
      const X = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: X });
    }
  }, q = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", X = t.custom_path.split(C);
      if (X.length > 1) {
        X.pop();
        let A = X.join(C);
        A === "" && C === "/" && (A = "/"), n({ ...t, custom_path: A });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return Me.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: S,
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
                      children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                            onClick: () => W(C),
                            children: /* @__PURE__ */ s.jsx(Ee, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Yn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: k,
                            onChange: (C) => y(C.target.value),
                            onKeyDown: b
                          }
                        ),
                        k.trim() && !t.tags.includes(k.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(k),
                            children: /* @__PURE__ */ s.jsx(Ro, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : _.length === 0 ? k && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        k
                      ] }) : _.map((C) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(C.name),
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
                        onClick: z,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Do, { size: 16 }),
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
                          onClick: q,
                          children: [
                            /* @__PURE__ */ s.jsx(gd, { size: 16 }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: u ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((C) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => H(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: et(C.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Wm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(yd, { size: 14 })
                          ]
                        },
                        C.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((C) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(C),
                          children: /* @__PURE__ */ s.jsx(
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
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (C) => {
                C.stopPropagation(), f(null);
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
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(Ee, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: et(d),
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
};
function Lh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Nd(e) {
  var o, i;
  const t = window.app;
  if (!(t != null && t.graph))
    return { ok: !1, reason: "no_app_graph" };
  const n = Lh(e), r = t.graph._nodes.filter(
    (c) => c.type === "MeldImageLoader" || c.type === "LoadImage" || c.type === "Load Image"
  );
  if (r.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  const a = r[0].widgets.find(
    (c) => c.name === "image"
  );
  return a && (a.value = n, typeof a.callback == "function" && a.callback(n)), (i = (o = t.graph).afterChange) == null || i.call(o), t.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Th = () => {
  const { dispatch: e } = Ne();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var g, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Nd(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
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
      return u && (u.value = "red", typeof u.callback == "function" && u.callback("red")), (v = (g = l.graph).afterChange) == null || v.call(g), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Ws(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Ph(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Aa(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), u = new Uint8ClampedArray(r * l);
  for (let g = 0; g < r * l; g++)
    u[g] = c.data[g * 4] > 128 ? 255 : 0;
  return { ...e, data: u };
}
function Aa(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const u = r[c], g = c * 4;
    u > 0 ? (i[g] = t[0], i[g + 1] = t[1], i[g + 2] = t[2], i[g + 3] = n) : (i[g] = 0, i[g + 1] = 0, i[g + 2] = 0, i[g + 3] = 0);
  }
  return o;
}
function Dh(e) {
  return e.data.every((t) => t === 0);
}
const Md = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = Ne(), a = r.images.find((P) => P.id === e), { injectMaskToGraph: o } = Th();
  St({ onEscape: n });
  const i = m.useRef(null), c = m.useRef(null), u = m.useRef(null), g = m.useRef(null), [v, w] = m.useState(!1), [k, y] = m.useState("rect"), [x, E] = m.useState({ x: 0, y: 0 }), [d, f] = m.useState({ x: 0, y: 0 }), [p, h] = m.useState([]), [S, j] = m.useState(null), [_, N] = m.useState(!1), W = m.useCallback(() => {
    const P = u.current, I = c.current;
    if (!P || !I) return null;
    const J = I.getBoundingClientRect(), R = P.getBoundingClientRect(), se = P.naturalWidth, Q = P.naturalHeight;
    if (!se || !Q) return null;
    const fe = se / Q, ue = R.width / R.height;
    let ve, pe, Ke = 0, tt = 0;
    return fe > ue ? (ve = R.width, pe = R.width / fe, tt = (R.height - pe) / 2) : (pe = R.height, ve = R.height * fe, Ke = (R.width - ve) / 2), {
      left: R.left - J.left + Ke,
      top: R.top - J.top + tt,
      width: ve,
      height: pe
    };
  }, []), b = m.useCallback(() => {
    const P = i.current;
    if (!P) return;
    const I = P.getContext("2d");
    if (!I) return;
    I.clearRect(0, 0, P.width, P.height);
    const J = getComputedStyle(document.documentElement), R = J.getPropertyValue("--comfy-input-bg-active") || J.getPropertyValue("--comfy-input-bg") || J.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", se = W();
    if (g.current && se && (I.save(), I.globalAlpha = 0.5, I.drawImage(
      g.current,
      se.left,
      se.top,
      se.width,
      se.height
    ), I.restore()), v) {
      const Q = Math.min(x.x, d.x), fe = Math.min(x.y, d.y), ue = Math.abs(x.x - d.x), ve = Math.abs(x.y - d.y);
      if (I.save(), I.globalAlpha = 0.3, I.fillStyle = R, I.strokeStyle = "white", I.lineWidth = 2, I.setLineDash([5, 5]), I.beginPath(), k === "rect")
        I.rect(Q, fe, ue, ve);
      else if (k === "ellipse") {
        const pe = Q + ue / 2, Ke = fe + ve / 2;
        I.ellipse(pe, Ke, ue / 2, ve / 2, 0, 0, 2 * Math.PI);
      } else if (k === "lasso" && p.length > 1) {
        I.moveTo(p[0].x, p[0].y);
        for (let pe = 1; pe < p.length; pe++)
          I.lineTo(p[pe].x, p[pe].y);
        I.closePath();
      }
      I.fill(), I.globalAlpha = 1, I.stroke(), I.restore();
    }
  }, [v, x, d, k, p, W]), [z, H] = m.useState([]), q = m.useMemo(() => z.length > 0 ? z[z.length - 1] : u.current ? Ws(
    u.current.naturalWidth,
    u.current.naturalHeight
  ) : null, [z]);
  m.useEffect(() => {
    var P;
    (P = u.current) != null && P.naturalWidth && z.length === 0 && H([
      Ws(
        u.current.naturalWidth,
        u.current.naturalHeight
      )
    ]);
  }, [z.length]);
  const C = m.useRef(!1), X = m.useRef(0), A = (P) => {
    P.target === P.currentTarget && (C.current = !0);
  }, F = (P) => {
    P.target === P.currentTarget && C.current && !v && n(), C.current = !1;
  };
  m.useEffect(() => {
    if (!q) return;
    g.current || (g.current = document.createElement("canvas"));
    const P = g.current;
    P.width = q.width, P.height = q.height;
    const I = P.getContext("2d");
    if (!I) return;
    const J = Aa(q, [255, 255, 255], 255);
    I.putImageData(J, 0, 0), b();
  }, [q, b]), m.useEffect(() => {
    const P = () => {
      c.current && i.current && (i.current.width = c.current.clientWidth, i.current.height = c.current.clientHeight, b());
    }, I = new ResizeObserver(P);
    return c.current && I.observe(c.current), P(), () => I.disconnect();
  }, [b]);
  const M = (P) => {
    var Q;
    if (P.button !== 0 || v || _ || Date.now() - X.current < 100)
      return;
    P.preventDefault();
    const I = W(), J = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
    if (!I || !J) return;
    w(!0);
    const R = Math.max(
      I.left,
      Math.min(P.clientX - J.left, I.left + I.width)
    ), se = Math.max(
      I.top,
      Math.min(P.clientY - J.top, I.top + I.height)
    );
    E({ x: R, y: se }), f({ x: R, y: se }), h(k === "lasso" ? [{ x: R, y: se }] : []), j(null);
  };
  m.useEffect(() => {
    if (!v) return;
    const P = (J) => {
      var ue;
      const R = W(), se = (ue = c.current) == null ? void 0 : ue.getBoundingClientRect();
      if (!R || !se) return;
      const Q = Math.max(
        R.left,
        Math.min(J.clientX - se.left, R.left + R.width)
      ), fe = Math.max(
        R.top,
        Math.min(J.clientY - se.top, R.top + R.height)
      );
      f({ x: Q, y: fe }), k === "lasso" && h((ve) => [...ve, { x: Q, y: fe }]);
    }, I = (J) => {
      var Q;
      const R = W(), se = (Q = c.current) == null ? void 0 : Q.getBoundingClientRect();
      if (R && se && q && u.current) {
        const fe = Math.max(
          R.left,
          Math.min(J.clientX - se.left, R.left + R.width)
        ), ue = Math.max(
          R.top,
          Math.min(J.clientY - se.top, R.top + R.height)
        ), ve = Math.min(x.x, fe), pe = Math.min(x.y, ue), Ke = Math.abs(x.x - fe), tt = Math.abs(x.y - ue), Hr = k === "lasso";
        if (Ke > 5 || tt > 5 || Hr && p.length > 2) {
          const fs = u.current.naturalWidth, K = u.current.naturalHeight, te = fs / R.width, T = K / R.height, ae = Ph(q, (G) => {
            if (k === "rect") {
              const ne = (ve - R.left) * te, he = (pe - R.top) * T, Oe = Ke * te, Ge = tt * T;
              G.rect(ne, he, Oe, Ge);
            } else if (k === "ellipse") {
              const ne = (ve - R.left) * te, he = (pe - R.top) * T, Oe = Ke * te, Ge = tt * T, Ie = ne + Oe / 2, xe = he + Ge / 2;
              G.ellipse(
                Ie,
                xe,
                Oe / 2,
                Ge / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (k === "lasso" && p.length > 2) {
              const ne = p[0];
              G.moveTo(
                (ne.x - R.left) * te,
                (ne.y - R.top) * T
              );
              for (let he = 1; he < p.length; he++)
                G.lineTo(
                  (p[he].x - R.left) * te,
                  (p[he].y - R.top) * T
                );
              G.closePath();
            }
          });
          H((G) => [...G, ae]);
        }
      }
      X.current = Date.now(), w(!1), h([]);
    };
    return window.addEventListener("mousemove", P), window.addEventListener("mouseup", I), () => {
      window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", I);
    };
  }, [
    v,
    x.x,
    x.y,
    W,
    q,
    k,
    p
  ]);
  const O = m.useCallback(() => {
    z.length > 1 && H((P) => P.slice(0, -1));
  }, [z.length]);
  m.useEffect(() => {
    const P = (I) => {
      (I.metaKey || I.ctrlKey) && I.key === "z" ? (I.preventDefault(), O()) : I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", P, { capture: !0 }), () => window.removeEventListener("keydown", P, { capture: !0 });
  }, [O, n]);
  const V = () => {
    if (u.current) {
      const P = Ws(
        u.current.naturalWidth,
        u.current.naturalHeight
      );
      H((I) => [...I, P]);
    }
  }, L = async () => {
    if (!q || !u.current) return null;
    N(!0);
    try {
      const { width: P, height: I } = q, J = document.createElement("canvas");
      J.width = P, J.height = I;
      const R = J.getContext("2d");
      if (!R) return null;
      const se = Aa(q, [255, 255, 255], 255);
      R.putImageData(se, 0, 0);
      const Q = await new Promise(
        (tt) => J.toBlob(tt, "image/png")
      );
      if (!Q) return null;
      const ue = `meld_mask_${Date.now()}.png`, ve = new File([Q], ue, { type: "image/png" }), pe = new FormData();
      pe.append("image", ve), pe.append("type", "temp"), pe.append("overwrite", "true");
      const Ke = await ee.fetchApi("/upload/image", {
        method: "POST",
        body: pe
      });
      return Ke.ok ? (await Ke.json()).name : null;
    } catch (P) {
      return console.error("[Meld] Error uploading mask:", P), null;
    } finally {
      N(!1);
    }
  }, Z = async () => {
    if (!a) return;
    const P = await L();
    P && o(a, P) && (n(), l({ type: "CLOSE_VIEWER" }));
  }, de = async () => {
    if (!a) return;
    const P = await L();
    P && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: P
      }
    });
  }, $ = m.useMemo(
    () => q && !Dh(q),
    [q]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: A,
      onMouseUp: F,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (P) => P.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(Ee, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${k === "rect" ? "active" : ""}`,
                    onClick: () => y("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(_d, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${k === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Am, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${k === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Um, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  ref: c,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: M,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        ref: u,
                        src: et(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (P) => P.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: i,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (P) => P.preventDefault()
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
                      onClick: Z,
                      disabled: !$ || _,
                      type: "button",
                      children: [
                        _ ? /* @__PURE__ */ s.jsx(Yi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Po, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: de,
                      disabled: !$ || _,
                      type: "button",
                      children: [
                        _ ? /* @__PURE__ */ s.jsx(Yi, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Do, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: O,
                      disabled: z.length <= 1 || _,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Jm, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: V,
                      disabled: !$ || _,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(Ee, { size: 16 }),
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
}, Rh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ne(), [r, l] = m.useState("Gallery"), [a, o] = m.useState({
    ...e.settings
  }), [i, c] = m.useState(
    {}
  ), [u, g] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [k, y] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, E] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [p, h] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [S, j] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [_, N] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [W, b] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    z,
    H
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    q,
    C
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [X, A] = m.useState(
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
      const $ = Object.keys(a).filter(
        (P) => a[P] !== e.settings[P] && !i[P]
      );
      if ($.length > 0)
        for (const P of $)
          await n(P, a[P]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: ($, P) => {
      o((I) => ({
        ...I,
        [$]: !P
      }));
    },
    handleNumberChange: ($, P, I, J) => {
      $ === "gallery.initial_load_count" ? g(P) : $ === "gallery.max_load_count" ? w(P) : $ === "gallery.lineage_max_depth" ? y(P) : $ === "viewer.thumbnail_window_size" ? E(P) : $ === "gallery.trash_retention_days" ? f(P) : $ === "gallery.auto_link_phash_threshold" ? h(P) : $ === "gallery.suggest_phash_threshold" ? j(P) : $ === "viewer.details.max_positive_prompt_lines" ? N(P) : $ === "viewer.details.max_negative_prompt_lines" ? b(P) : $ === "fullscreen.details.max_positive_prompt_lines" ? H(P) : $ === "fullscreen.details.max_negative_prompt_lines" ? C(P) : $ === "sidebar.thumbnail_size" && A(P);
      const R = Number.parseInt(P, 10);
      if (!Number.isNaN(R)) {
        let se = R;
        I !== void 0 && se < I && (se = I), J !== void 0 && se > J && (se = J), o((Q) => ({
          ...Q,
          [$]: se
        }));
      }
    },
    handleNumberBlur: ($) => {
      $.key === "gallery.initial_load_count" ? g(
        a["gallery.initial_load_count"].toString()
      ) : $.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : $.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : $.key === "viewer.thumbnail_window_size" ? E(
        a["viewer.thumbnail_window_size"].toString()
      ) : $.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : $.key === "gallery.auto_link_phash_threshold" ? h(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : $.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : $.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : $.key === "viewer.details.max_negative_prompt_lines" ? b(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : $.key === "fullscreen.details.max_positive_prompt_lines" ? H(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : $.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : $.key === "sidebar.thumbnail_size" && A(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o(($) => ({
        ...$,
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
    validateShortcut: ($) => $.trim() ? $.trim().split(/\s+/).every((I) => !!(I === "next" || I === "prev" || I === "delete" || I.startsWith("tag:") && I.length > 4 || I.startsWith("-tag:") && I.length > 5 || I.startsWith("tag-toggle:") && I.length > 11)) : !0,
    // Input states
    initialLoadCountInput: u,
    maxLoadCountInput: v,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: S,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: W,
    fullscreenMaxPositivePromptLinesInput: z,
    fullscreenMaxNegativePromptLinesInput: q,
    thumbnailSizeInput: X
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
] }), zh = ({
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
      B,
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
function bt({
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
function bd() {
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
function Id(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Ld(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Td(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Pd(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(bd, {})
  ] });
}
function Dd(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Rd(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(bd, {})
  ] });
}
function zd(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Ad(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Od(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Fd(e) {
  return /* @__PURE__ */ s.jsxs(bt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Wd = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Id
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Dd
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Rd
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Td },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Pd
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Ld
  },
  { id: "edit_tags", label: "Edit Tags", icon: Ad },
  { id: "edit_notes", label: "Edit Notes", icon: Od },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: zd
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Fd
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: ln }
], Ah = ({
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
      B,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((u) => ({
              ...u,
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
    /* @__PURE__ */ s.jsx(
      B,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((u) => ({
              ...u,
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
      B,
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
      B,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (u) => t((g) => ({
              ...g,
              [`gallery.quick_shortcut.${c}`]: u.target.value
            })),
            children: Wd.map((u) => /* @__PURE__ */ s.jsx("option", { value: u.id, children: u.label }, u.id))
          }
        )
      },
      c
    ))
  ] })
] }), Oh = ({
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
      i.map((c, u) => /* @__PURE__ */ s.jsx(
        B,
        {
          label: `Shortcut ${u === 9 ? 0 : u + 1} (Key: ${u === 9 ? 0 : u + 1})`,
          description: `Command to execute when pressing '${u === 9 ? 0 : u + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (g) => {
                t((v) => ({
                  ...v,
                  [c]: g.target.value
                }));
              },
              onBlur: () => {
                const g = l(
                  e[c] || ""
                );
                r((v) => ({
                  ...v,
                  [c]: !g
                }));
              }
            }
          )
        },
        c
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
            onClick: o,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, Fh = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: i,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: u
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
            onChange: (g) => l((v) => ({
              ...v,
              "gallery.matching_strategy": g.target.value
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
            value: c,
            min: 0,
            max: 100,
            onChange: (g) => t(
              "gallery.auto_link_phash_threshold",
              g.target.value,
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
            value: u,
            min: 0,
            max: 100,
            onChange: (g) => t(
              "gallery.suggest_phash_threshold",
              g.target.value,
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
            value: o,
            min: 1,
            max: 10,
            onChange: (g) => t(
              "gallery.lineage_max_depth",
              g.target.value,
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
            value: i,
            min: 0,
            max: 365,
            onChange: (g) => t(
              "gallery.trash_retention_days",
              g.target.value,
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
] }), Wh = ({
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
            onChange: (c) => t((u) => ({
              ...u,
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
      B,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((u) => ({
              ...u,
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
            onChange: (c) => t((u) => ({
              ...u,
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
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((u) => ({
              ...u,
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
      B,
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
] }), $d = () => {
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
    handleNumberBlur: u,
    handleResetShortcuts: g,
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: k,
    maxLoadCountInput: y,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: E,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: h,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: _,
    thumbnailSizeInput: N
  } = Rh();
  St({ onEscape: o });
  const W = m.useRef(!1), b = (C) => {
    C.target === C.currentTarget && (W.current = !0);
  }, z = (C) => {
    C.target === C.currentTarget && W.current && o(), W.current = !1;
  }, H = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], q = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Fh,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: u,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: x,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Ah,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailSizeInput: N,
            initialLoadCountInput: k,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Wh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailWindowSizeInput: E,
            maxPositivePromptLinesInput: h,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          zh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: u,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: _
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Oh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: g
          }
        );
      default:
        return null;
    }
  };
  return Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: b,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (C) => C.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: H.map((C) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === C.id ? "active" : ""}`,
                    onClick: () => t(C.id),
                    children: C.label
                  },
                  C.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: q() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, wt = "none", Ud = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Ne(), [a, o] = m.useState([]), [i, c] = m.useState(t), [u, g] = m.useState(""), [v, w] = m.useState(!0), [k, y] = m.useState(!1), x = m.useRef(null), E = e.length > 1, d = m.useRef(!1), f = (b) => {
    b.target === b.currentTarget && (d.current = !0);
  }, p = (b) => {
    b.target === b.currentTarget && d.current && n(), d.current = !1;
  }, h = m.useCallback(async () => {
    w(!0);
    try {
      const b = await Ao();
      o(b);
    } catch (b) {
      console.error("Failed to fetch tags:", b);
    } finally {
      w(!1);
    }
  }, []);
  m.useEffect(() => {
    h();
  }, [h]), m.useEffect(() => {
    x.current && x.current.focus();
  }, []), St({ onEscape: n });
  const S = m.useMemo(() => a.filter(
    (b) => b.name.toLowerCase().includes(u.toLowerCase()) && !i.includes(b.name)
  ), [a, u, i]), j = (b) => {
    const z = b.trim();
    if (z.toLowerCase() === wt) {
      alert(
        `Tag name '${wt}' is reserved for search and cannot be used.`
      );
      return;
    }
    z && !i.includes(z) && (c([...i, z]), g(""));
  }, _ = (b) => {
    c(i.filter((z) => z !== b));
  }, N = async () => {
    y(!0);
    try {
      if (E) {
        const b = i.filter((H) => !t.includes(H)), z = t.filter(
          (H) => !i.includes(H)
        );
        await za(e, b, z);
      } else
        await ah(e[0], i);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (b) {
      console.error("Failed to update tags:", b), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, W = (b) => {
    b.key === "Enter" && u.trim() && (b.preventDefault(), b.stopPropagation(), j(u.trim()));
  };
  return Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (b) => b.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Qr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: E ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Ee, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            E && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: E ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((b) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                b,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => _(b),
                    children: /* @__PURE__ */ s.jsx(Ee, { size: 12 })
                  }
                )
              ] }, b)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Yn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: x,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: u,
                    onChange: (b) => g(b.target.value),
                    onKeyDown: W
                  }
                ),
                u.trim() && !i.includes(u.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(u),
                    children: [
                      /* @__PURE__ */ s.jsx(Ro, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? u ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((b) => /* @__PURE__ */ s.jsx(
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
}, Vd = async () => {
  const e = await ee.fetchApi("/meld/workflows");
  return oe(e);
}, $h = async (e) => {
  const t = await ee.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return oe(t);
}, ds = (e, t) => {
  const n = m.useCallback(async (k) => {
    try {
      const y = await ih(k.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), Y.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return Y.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = m.useCallback(async (k) => {
    try {
      const y = await ch(k.id), x = "MeldUnifiedLoader", E = window.app, f = window.LiteGraph.createNode(x);
      if (!f)
        return console.error(`Node type ${x} not found.`), alert(
          `Node type ${x} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = {
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
      if (f.widgets) {
        for (const [_, N] of Object.entries(p)) {
          const W = y[_];
          if (W != null) {
            const b = f.widgets.find(
              (z) => z.name === N
            );
            b && (b.value = W);
          }
        }
        const j = f.widgets.find(
          (_) => _.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const h = E.canvas.ds.offset, S = E.canvas.ds.scale;
      return f.pos = [(-h[0] + 400) / S, (-h[1] + 300) / S], E.graph.add(f), E.canvas.selectNode(f), E.canvas.centerOnNode(f), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), l = m.useCallback(
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
  ), a = m.useCallback(
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
  ), o = m.useCallback(
    (k) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: k.id }
      });
    },
    [t]
  ), i = m.useCallback(
    (k) => {
      const y = Nd(k);
      return y.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: y.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = m.useCallback(
    (k) => {
      const y = Array.isArray(k) ? k : [k];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), u = m.useCallback(
    async (k, y = "run") => {
      var x;
      if (console.log("[Meld] handleRunWithMask called", k, y), y === "apply") {
        const E = window.app, d = ((x = E == null ? void 0 : E.graph) == null ? void 0 : x._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          d.map((h) => ({
            id: h.id,
            type: h.type
          }))
        );
        const f = d.some(
          (h) => h.type === "LoadImageMask"
        ), p = d.some(
          (h) => h.type === "MeldImageLoader" || h.type === "LoadImage" || h.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: f, hasLoaderNode: p }), !f || !p) {
          const h = [];
          p || h.push("'Meld Image Loader'"), f || h.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${h.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await Vd()).some(
            (f) => f.valid && f.mask_count === 1
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
        payload: { type: "mask_editor", imageId: k.id, mode: y }
      });
    },
    [t]
  ), g = m.useCallback(
    async (k, y) => {
      try {
        const x = k.id, d = (await zo([x])).restored_ids || [x];
        t({ type: "REMOVE_IMAGES", payload: d }), y == null || y();
      } catch (x) {
        t({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    [t]
  ), v = m.useCallback(
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
  ), w = m.useCallback(
    async (k, y) => {
      try {
        const x = await oh(
          k,
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
    handleEditTags: l,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: u,
    handleRestore: g,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, Qd = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = Ne(), { handleUpdateUserNotes: a } = ds(r, l), [o, i] = m.useState(t), [c, u] = m.useState(!1), g = m.useRef(null), v = m.useRef(!1), w = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, k = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  m.useEffect(() => {
    g.current && g.current.focus();
  }, []);
  const y = m.useCallback(async () => {
    u(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      console.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      u(!1);
    }
  }, [a, e, o, n]);
  return m.useEffect(() => {
    const x = (E) => {
      E.key === "Enter" && (E.ctrlKey || E.metaKey) && E.target === g.current && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [y]), St({ onEscape: n }), Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(qm, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Ee, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: g,
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
}, Hd = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var p;
  const { dispatch: r } = Ne(), [l, a] = m.useState([]), [o, i] = m.useState(!0), [c, u] = m.useState(null), [g, v] = m.useState(!1), w = m.useMemo(() => l.map((h) => {
    let S = h.valid, j = h.reason;
    return n && (h.mask_count === 0 ? (S = !1, j = "No 'Load Image (as Mask)' node found.") : h.mask_count > 1 && (S = !1, j = `Multiple 'Load Image (as Mask)' nodes found (${h.mask_count}).`)), { ...h, valid: S, reason: j };
  }).sort((h, S) => h.valid !== S.valid ? h.valid ? -1 : 1 : h.name.localeCompare(S.name)), [l, n]), k = m.useCallback(async () => {
    try {
      i(!0);
      const h = await Vd();
      a(h), u(null);
    } catch (h) {
      u(h instanceof Error ? h.message : String(h));
    } finally {
      i(!1);
    }
  }, []);
  m.useEffect(() => {
    k();
  }, [k]);
  const y = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  St({ onEscape: y });
  const x = m.useRef(!1), E = m.useCallback((h) => {
    h.target === h.currentTarget && (x.current = !0);
  }, []), d = m.useCallback(
    (h) => {
      h.target === h.currentTarget && x.current && y(), x.current = !1;
    },
    [y]
  ), f = async (h) => {
    if (!g)
      try {
        v(!0), await t(h), y();
      } catch (S) {
        u(S instanceof Error ? S.message : String(S)), v(!1);
      }
  };
  return Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: E,
        onMouseUp: d,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (h) => h.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(vd, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: y,
                    children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: o ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : c ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(pd, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: c })
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (p = e[0]) == null ? void 0 : p.filename }),
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
                w.map((h) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${h.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => h.valid && !g && f(h.name),
                    title: h.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: h.name }),
                        !h.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: h.reason }),
                        h.valid && /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__supports", children: [
                          "Supports:",
                          " ",
                          h.loader_count > 0 ? "Meld Loader" : "Load Image"
                        ] })
                      ] }),
                      h.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: g,
                          onClick: (S) => {
                            S.stopPropagation(), f(h.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(Do, { size: 14 }),
                            g ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  h.name
                ))
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: y,
                  disabled: g,
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
}, Bd = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r) => {
    var v, w, k, y, x, E;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await $h(t);
    console.log("[Meld] Workflow fetched:", t);
    let a = null, o = null, i = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      i = !0;
      const d = l.nodes.find(
        (p) => p.type === "MeldImageLoader" || p.type === "LoadImage" || p.type === "Load Image"
      );
      d && (a = String(d.id));
      const f = l.nodes.find(
        (p) => p.type === "LoadImageMask"
      );
      f && (o = String(f.id));
    } else
      for (const d in l) {
        const f = l[d];
        f.class_type === "MeldImageLoader" || f.class_type === "LoadImage" || f.class_type === "Load Image" ? a = d : f.class_type === "LoadImageMask" && (o = d);
      }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: a,
      maskNodeId: o,
      isUIFormat: i
    }), !a)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
      );
    if (r && !o)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let c = n.filename;
    if (n.subfolder && (c = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (c = `${c} [${n.type}]`), i) {
      const d = window.app, f = t.replace(/\.json$/i, "");
      let p = !1;
      const h = document.querySelectorAll(".workflow-tab");
      for (const _ of Array.from(h)) {
        const N = _.querySelector(".workflow-label"), W = ((v = N == null ? void 0 : N.textContent) == null ? void 0 : v.trim()) || ((w = _.textContent) == null ? void 0 : w.trim()) || "";
        if (W === f || W === t || W.startsWith(`${f} `) || W.startsWith(`${f}•`)) {
          _.click(), p = !0;
          break;
        }
      }
      p || await d.loadGraphData(l, !0, !0, t), await new Promise((_) => setTimeout(_, 200));
      const S = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", S.length);
      const j = S.find(
        (_) => String(_.id) === a || _.type === "MeldImageLoader" || _.type === "LoadImage" || _.type === "Load Image"
      );
      if (j) {
        const _ = (k = j.widgets) == null ? void 0 : k.find((N) => N.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: j.id,
          type: j.type,
          imagePath: c
        }), _ && (_.value = c, typeof _.callback == "function" && _.callback(c));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const _ = S.find(
          (N) => String(N.id) === o || N.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: _ == null ? void 0 : _.id,
          maskFilename: r
        }), _) {
          const N = (y = _.widgets) == null ? void 0 : y.find(
            (b) => b.name === "image"
          );
          N && (N.value = `${r} [temp]`);
          const W = (x = _.widgets) == null ? void 0 : x.find(
            (b) => b.name === "channel"
          );
          W && (W.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (_) {
        throw console.error("Failed to queue workflow:", _), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const u = JSON.parse(JSON.stringify(l));
    u[a].inputs.image = c, r && o && (u[o].inputs.image = `${r} [temp]`, u[o].inputs.channel = "red");
    const g = await ee.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: u,
        client_id: ee.clientId
      })
    });
    if (!g.ok) {
      const d = await g.json();
      throw new Error(((E = d.error) == null ? void 0 : E.message) || "Failed to queue workflow");
    }
    return await g.json();
  },
  []
) }), Kd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = Ne(), o = m.useRef(!0);
  m.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = m.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = m.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children || i)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  ), u = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    u.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const g = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  St({ onEscape: g });
  const v = m.useRef(!1), w = m.useCallback((d) => {
    d.target === d.currentTarget && (v.current = !0);
  }, []), k = m.useCallback(
    (d) => {
      d.target === d.currentTarget && v.current && g(), v.current = !1;
    },
    [g]
  ), y = m.useCallback(
    (d) => {
      if (!o.current) return;
      const f = u.current;
      if (f === null || !d.has(f))
        return;
      const p = c.findIndex(
        (S) => S.id === f
      );
      if (p === -1) return;
      let h = !1;
      for (let S = p + 1; S < c.length; S++)
        if (!d.has(c[S].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[S].id, mode: l.viewerMode }
          }), h = !0;
          break;
        }
      if (!h) {
        for (let S = p - 1; S >= 0; S--)
          if (!d.has(c[S].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[S].id, mode: l.viewerMode }
            }), h = !0;
            break;
          }
      }
      h || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, c, a]
  ), x = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = c.filter(
        (p) => d.has(p.id)
      );
      if (y(d), await Da(e, n), !o.current) return;
      !n && r && r(f), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, E = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const p of e) {
        const h = await Ra(p);
        if (!o.current) return;
        for (const S of h)
          d.add(S.id);
      }
      const f = c.filter(
        (p) => d.has(p.id)
      );
      if (y(d), await Da(Array.from(d), n), !o.current) return;
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
  return Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ln, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: g,
                    children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                            Tm,
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
                    onClick: g,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: x,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
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
}, Gd = ({ message: e }) => {
  const { dispatch: t } = Ne(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return St({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(pd, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
}, Yd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ne(), [l, a] = m.useState([]), [o, i] = m.useState(!0), [c, u] = m.useState(!1), g = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  St({ onEscape: g });
  const v = m.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (v.current = !0);
  }, k = (j) => {
    j.target === j.currentTarget && v.current && g(), v.current = !1;
  }, y = t.images.find((j) => j.id === e), x = m.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], _ = await sh(e, j);
      a(_);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    x();
  }, [x]);
  const E = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || j === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await qi(e, j), await kd(e), await r(), g();
      } catch (_) {
        console.error("Failed to link parent:", _);
      }
  }, d = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await qi(e, null), await r(), g();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, f = async (j) => {
    i(!0);
    try {
      const _ = await Eh(j), { id: N } = await Sd({
        filename: _.name,
        subfolder: _.subfolder || "",
        type: _.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await E(N);
    } catch (_) {
      console.error("Failed to upload/register image:", _);
    } finally {
      i(!1);
    }
  }, p = (j) => {
    j.preventDefault(), j.stopPropagation(), u(!1);
    const _ = j.dataTransfer.files[0];
    _ != null && _.type.startsWith("image/") && f(_);
  };
  if (!y) return null;
  const h = l.filter((j) => j.is_source_match), S = l.filter((j) => !j.is_source_match);
  return Me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
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
                onClick: g,
                children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                        /* @__PURE__ */ s.jsx(Hm, { size: 16, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ s.jsx(Qm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
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
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx(Zm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              h.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: h.map((j) => {
                  const _ = j.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${_ ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !_ && E(j.id),
                      style: {
                        cursor: _ ? "default" : "pointer",
                        ..._ ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: et(j), alt: j.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          _ && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                S.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: S.map((j) => {
                  const _ = j.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${_ ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !_ && E(j.id),
                      style: {
                        cursor: _ ? "default" : "pointer",
                        ..._ ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: et(j), alt: j.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
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
                                  Math.round((64 - j.distance) / 64 * 100),
                                  "%"
                                ] }),
                                _ && /* @__PURE__ */ s.jsx(
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
                }) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Uh = () => {
  const { state: e, dispatch: t } = Ne(), { executeWorkflow: n } = Bd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Hd,
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
    e.activeModal.type === "parent_selection" && Me.createPortal(
      /* @__PURE__ */ s.jsx(Yd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Me.createPortal(/* @__PURE__ */ s.jsx(Cd, {}), document.body),
    e.activeModal.type === "settings" && Me.createPortal(/* @__PURE__ */ s.jsx($d, {}), document.body),
    e.activeModal.type === "tag_edit" && Me.createPortal(
      /* @__PURE__ */ s.jsx(
        Ud,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Me.createPortal(
      /* @__PURE__ */ s.jsx(Gd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Me.createPortal(
      /* @__PURE__ */ s.jsx(
        Kd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && Me.createPortal(
      /* @__PURE__ */ s.jsx(
        Md,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && Me.createPortal(
      /* @__PURE__ */ s.jsx(
        Qd,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, qd = (e, t) => {
  const n = m.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((u) => ({
          id: u.id,
          imgSrc: et(u)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((u) => u.id === a);
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
      if (o && l > 1) {
        const u = n(o);
        return [c, ...u].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, Xd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ne(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: u,
    handleSendToWorkflow: g,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: k,
    handleDelete: y,
    handleEditNotes: x,
    handleUpdateUserNotes: E
  } = ds(t, n), { getParentChain: d } = qd(t.images, t.settings), [f, p] = m.useState(null), [h, S] = m.useState(!1), [j, _] = m.useState(null), [N, W] = m.useState(!1), b = m.useRef(null), z = async (Q, fe, ue = !1) => {
    try {
      await navigator.clipboard.writeText(Q), ue ? (W(!0), setTimeout(() => W(!1), 2e3)) : (_(fe), setTimeout(() => _(null), 2e3));
    } catch (ve) {
      console.error("Failed to copy text: ", ve);
    }
  };
  m.useEffect(() => {
    const Q = (ue) => {
      ue.key === "Escape" && (f ? p(null) : S(!1));
    }, fe = (ue) => {
      b.current && !b.current.contains(ue.target) && S(!1);
    };
    return window.addEventListener("keydown", Q), h && document.addEventListener("mousedown", fe), () => {
      window.removeEventListener("keydown", Q), document.removeEventListener("mousedown", fe);
    };
  }, [h, f]);
  const H = d(e), C = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, X = et(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: f,
    setPopupContent: p,
    isMenuOpen: h,
    setIsMenuOpen: S,
    copiedLabel: j,
    popupCopied: N,
    menuRef: b,
    parentChain: H,
    displayFilename: C,
    imgSrc: X,
    handleCopy: z,
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
      var ue, ve, pe;
      ((ue = document.activeElement) == null ? void 0 : ue.tagName) === "INPUT" || ((ve = document.activeElement) == null ? void 0 : ve.tagName) === "TEXTAREA" || (pe = document.activeElement) != null && pe.isContentEditable || (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      x(e);
    },
    handleSendToWorkflow: () => {
      g(e);
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
    handleUpdateUserNotes: (Q) => E(e.id, Q),
    fetchFullImageDetails: r
  };
}, Oo = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: u,
  onEditTags: g,
  onEditNotes: v,
  onDelete: w,
  onRestore: k,
  showRestore: y,
  deleteLabel: x,
  showQuickShortcuts: E = !0,
  variant: d = "default",
  iconSize: f = 16,
  buttonClassName: p = ""
}) => {
  const h = (_) => {
    switch (_) {
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
        return u;
      case "edit_tags":
        return g;
      case "edit_notes":
        return v;
      case "restore_image":
        return k;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, S = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((_) => _ && _ !== ""), j = [
    "meld-image-card__menu-container",
    d === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: j, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (_) => {
          _.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Gm, { size: f })
      }
    ),
    E && S.map((_, N) => {
      const W = Wd.find((H) => H.id === _);
      if (!W || !W.icon) return null;
      const b = W.icon, z = h(_);
      return !z || _ === "restore_image" && !y ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (H) => {
            H.stopPropagation(), z();
          },
          title: W.label,
          children: /* @__PURE__ */ s.jsx(b, { size: f })
        },
        `${_}-${N}`
      );
    }),
    e && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Id,
        handler: l
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Dd,
        handler: o
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Rd,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Td,
        handler: i
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Pd,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Ld,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Ad,
        handler: g
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Od,
        handler: v
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: zd,
        handler: u
      },
      ...y ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Fd,
          handler: k,
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
    ].map((_) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${_.className || ""}`,
        onMouseDown: (N) => N.stopPropagation(),
        onClick: (N) => {
          N.preventDefault(), N.stopPropagation(), t(!1), setTimeout(() => _.handler(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(_.icon, { size: 14, color: _.color }),
          /* @__PURE__ */ s.jsx("span", { children: _.label })
        ]
      },
      _.id
    )) })
  ] });
}, Vh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Me.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(Po, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Om,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Ee,
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
), Jd = Sl.memo(
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
      popupCopied: u,
      menuRef: g,
      parentChain: v,
      displayFilename: w,
      imgSrc: k,
      handleCopy: y,
      handleClick: x,
      handleSelectToggle: E,
      handleContainerClick: d,
      handleMouseDown: f,
      handleKeyDown: p,
      handleRestoreWorkflow: h,
      handleAddUnifiedLoader: S,
      handleEditSource: j,
      handleEditTags: _,
      handleEditNotes: N,
      handleSendToWorkflow: W,
      handleRestore: b,
      handleDelete: z,
      handleRunWithWorkflow: H,
      handleRunWithMask: q,
      fetchFullImageDetails: C
    } = Xd(e), [X, A] = m.useState("idle");
    return m.useEffect(() => {
      e.user_notes && X === "saving" && A("idle");
    }, [e.user_notes, X]), /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: d,
        onMouseDown: f,
        onKeyDown: p,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: E,
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
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: f,
                onClick: (F) => {
                  F.stopPropagation(), x(F);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
                (F, M) => F.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: F.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (O) => {
                      O.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: F.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: M === 0 ? "Source" : M === 1 ? "Grand-Source" : `Ancestor (S${M + 1})`,
                    alt: "source thumb"
                  },
                  F.id || M
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
                onClick: async (F) => {
                  F.stopPropagation();
                  const M = await C(e.id);
                  a({
                    title: "Model",
                    text: M.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (F) => {
                        F.stopPropagation();
                        const M = await C(e.id);
                        y(M.model_name || "-", "Model");
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
                onClick: async (F) => {
                  F.stopPropagation();
                  const M = await C(e.id);
                  a({
                    title: "Positive Prompt",
                    text: M.positive_prompt || M.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (F) => {
                        F.stopPropagation();
                        const M = await C(e.id);
                        y(
                          M.positive_prompt || M.positive || "-",
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
                onClick: async (F) => {
                  F.stopPropagation();
                  const M = await C(e.id);
                  a({
                    title: "Negative Prompt",
                    text: M.negative_prompt || M.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (F) => {
                        F.stopPropagation();
                        const M = await C(e.id);
                        y(
                          M.negative_prompt || M.negative || "-",
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
                onClick: (F) => {
                  F.stopPropagation(), _();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((F, M) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: F
                    },
                    `${F}-${M}`
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
                X === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (F) => {
                    F.stopPropagation(), N();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            Oo,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: g,
              settings: t.settings,
              onAddUnifiedLoader: S,
              onRestoreWorkflow: h,
              onSendToWorkflow: W,
              onRunWithWorkflow: H,
              onRunWithMask: (F) => q(F),
              onEditSource: j,
              onEditTags: _,
              onEditNotes: N,
              onRestore: b,
              showRestore: t.viewScope === "trash",
              onDelete: z,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Vh,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (F) => y(F, "", !0),
              isCopied: u
            }
          )
        ]
      }
    );
  }
);
Jd.displayName = "DetailedImageCard";
const Zd = Sl.memo(
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
      setIsMenuOpen: u,
      menuRef: g,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: k,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: x,
      handleRunWithMask: E,
      handleEditSource: d,
      handleEditTags: f,
      handleEditNotes: p,
      handleDelete: h,
      handleRestore: S
    } = Xd(e), j = v.viewScope === "trash", _ = j ? "Delete Permanently" : "Move to Trash";
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
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
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: l,
                onClick: (N) => {
                  N.stopPropagation(), o(N);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            Oo,
            {
              isMenuOpen: c,
              setIsMenuOpen: u,
              menuRef: g,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: k,
              onSendToWorkflow: y,
              onRunWithWorkflow: x,
              onRunWithMask: E,
              onEditSource: d,
              onEditTags: f,
              onEditNotes: p,
              onDelete: h,
              onRestore: S,
              showRestore: j,
              deleteLabel: _,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
Zd.displayName = "SimpleImageCard";
const Qh = ({ image: e }) => {
  const { state: t } = Ne();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Zd, { image: e }) : /* @__PURE__ */ s.jsx(Jd, { image: e });
}, Hh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [a, o] = m.useState(!1), i = m.useRef(null);
  return m.useEffect(() => {
    const c = new IntersectionObserver(
      ([g]) => {
        g.isIntersecting && o(!0);
      },
      { rootMargin: n }
    ), u = i.current;
    return u && c.observe(u), () => {
      u && c.unobserve(u);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: i,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: a ? e : null
    }
  );
}, Bh = () => {
  const { state: e, dispatch: t } = Ne(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Ih(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (g) {
      console.error("Failed to cancel scan:", g);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, u = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
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
        style: { width: `${u}%` }
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
        children: /* @__PURE__ */ s.jsx(_d, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(zm, { size: 14, className: "meld-success-icon" }),
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
}, ef = () => {
  const { state: e, refreshFavorites: t } = Ne(), [n, r] = m.useState(!1), [l, a] = m.useState(null), [o, i] = m.useState(null), [c, u] = m.useState(""), [g, v] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const E = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [l]);
  const w = m.useCallback(
    async (E, d, f) => {
      E.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(p))
        try {
          await Xi(d), await t();
        } catch (h) {
          Y.error("Failed to delete favorite", h);
        }
    },
    [t]
  ), k = m.useCallback(
    (E, d) => {
      E.stopPropagation(), i(d), u(d.name), v(d.query);
    },
    []
  ), y = m.useCallback(async () => {
    if (!(!o || !c.trim() || !g.trim()))
      try {
        r(!0), await gh(
          o.id,
          c,
          g
        ), await t(), i(null);
      } catch (E) {
        Y.error("Failed to update favorite", E), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, g, t]), x = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Xi(d.id), await t();
        } catch (f) {
          Y.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await hh(e.searchQuery, e.searchQuery), await t();
    } catch (d) {
      Y.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: u,
    editFavoriteQuery: g,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: k,
    handleSaveEditFavorite: y,
    handleSaveFavorite: x,
    setToastMessage: a
  };
}, tf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = m.useState(!1), [o, i] = m.useState(!1), [c, u] = m.useState(!1);
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
                  onClick: (g) => n(g, e),
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
                  children: /* @__PURE__ */ s.jsx(xd, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (g) => r(g, e.id, e.name),
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
                  children: /* @__PURE__ */ s.jsx(ln, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Kh = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = Ne(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: u,
    editFavoriteQuery: g,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: k,
    handleSaveEditFavorite: y
  } = ef(), [x, E] = m.useState({ top: 0, left: 0 }), d = m.useRef(null), f = m.useRef(null);
  if (St({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), m.useEffect(() => {
    if (e) {
      let _ = e.left;
      const N = e.bottom + 5;
      _ + 300 > window.innerWidth - 10 && (_ = window.innerWidth - 300 - 10), _ < 10 && (_ = 10), E({ top: N, left: _ });
    }
  }, [e]), m.useEffect(() => {
    o && f.current && f.current.focus();
  }, [o]), !e) return null;
  const p = (S) => {
    S.stopPropagation(), S.preventDefault();
  }, h = (S) => {
    S.stopPropagation();
  };
  return Me.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
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
          onMouseDown: (S) => S.stopPropagation()
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: d,
          onClick: p,
          onMouseDown: h,
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
            /* @__PURE__ */ s.jsxs(
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
                  /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(
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
                  /* @__PURE__ */ s.jsxs(
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
            /* @__PURE__ */ s.jsx(
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
                children: r.favorites.map((S) => /* @__PURE__ */ s.jsx(
                  tf,
                  {
                    fav: S,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: k,
                    onDelete: w
                  },
                  S.id
                ))
              }
            ),
            a && /* @__PURE__ */ s.jsx(
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
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (S) => {
            S.target === S.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (S) => S.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ s.jsx(qn, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                                htmlFor: "edit-favorite-name-ctx",
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
                                id: "edit-favorite-name-ctx",
                                ref: f,
                                type: "text",
                                value: c,
                                onChange: (S) => u(S.target.value),
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
                                onKeyDown: (S) => {
                                  S.key === "Enter" && y(), S.key === "Escape" && i(null);
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
                                htmlFor: "edit-favorite-query-ctx",
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
                                id: "edit-favorite-query-ctx",
                                value: g,
                                onChange: (S) => v(S.target.value),
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
                                onKeyDown: (S) => {
                                  S.key === "Enter" && !S.shiftKey && (S.preventDefault(), y()), S.key === "Escape" && i(null);
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
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: y,
                      disabled: l || !c.trim() || !g.trim(),
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
  );
}, $s = (e) => {
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
}, Gh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ne(), [r, l] = m.useState(e.searchQuery), [a, o] = m.useState([]), [i, c] = m.useState(!1), [u, g] = m.useState([]), [v, w] = m.useState([]), k = e.settings["search.show_all_keywords"], [y, x] = m.useState(-1), [E, d] = m.useState(null), f = m.useRef(null), p = m.useRef(e.searchQuery), h = m.useCallback(async () => {
    if (v.length > 0) return;
    const A = await fh();
    w(A);
  }, [v.length]);
  m.useEffect(() => {
    ph().then((A) => {
      d(A);
    }), k && h();
  }, [h, k]);
  const S = m.useMemo(() => {
    if (!E) return null;
    const A = E.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${A}):(.*)$`, "i");
  }, [E]), j = m.useCallback(() => {
    const A = !k;
    A && h(), n("search.show_all_keywords", A);
  }, [k, h, n]), _ = r !== p.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    dh().then((A) => {
      g(A);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var A;
    (A = f.current) == null || A.focus();
  }, []);
  const N = m.useCallback(
    (A, F = !0) => {
      p.current !== A && (Y.log("SearchBar: triggering search", { query: A }), t({ type: "SET_SEARCH_QUERY", payload: A }), F && c(!1), p.current = A);
    },
    [t]
  );
  m.useEffect(() => {
    const A = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !S) {
        o([]), c(!1);
        return;
      }
      const F = $s(r), M = F[F.length - 1];
      if (M) {
        const O = M.match(S);
        if (O) {
          const V = O[1].toLowerCase();
          let L = O[2];
          L.startsWith('"') && (L = L.substring(1)), L.endsWith('"') && (L = L.substring(0, L.length - 1));
          const Z = await uh(L, V);
          o(Z), c(Z.length > 0), x(-1);
        } else {
          const V = M.replace(/^([-!])/, "").toLowerCase();
          if (V && E) {
            const L = E.all_prefixes.filter((Z) => Z.startsWith(V)).map((Z) => ({
              type: Z,
              value: "",
              count: 0
            }));
            if (L.length > 0) {
              o(L), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(A);
  }, [
    r,
    e.settings["search.input_suggest"],
    S,
    E
  ]);
  const W = m.useCallback(
    (A) => {
      var de;
      const F = $s(r), O = (F.pop() || "").match(/^([-!])/), V = O ? O[1] : "", Z = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(A.type);
      if (A.value === "") {
        const $ = `${[...F, `${V}${A.type}:`].join(" ").trim()}`;
        l($);
      } else {
        const $ = Z ? A.value : `"${A.value}"`, P = `${[
          ...F,
          `${V}${A.type}:${$}`
        ].join(" ").trim()} `;
        l(P), o([]), c(!1);
      }
      (de = f.current) == null || de.focus();
    },
    [r, E]
  ), b = (A) => {
    A.key === "Enter" ? N(r) : A.key === "Tab" ? i && y >= 0 && (W(a[y]), A.preventDefault()) : A.key === "ArrowDown" ? i && (x((F) => Math.min(F + 1, a.length - 1)), A.preventDefault()) : A.key === "ArrowUp" ? i && (x((F) => Math.max(F - 1, -1)), A.preventDefault()) : A.key === "Escape" && c(!1);
  }, z = m.useCallback(() => {
    l(""), N("");
  }, [N]), H = m.useCallback(
    (A, F, M = !1) => {
      var de;
      if (M) {
        const $ = `${A}:`;
        l($), (de = f.current) == null || de.focus();
        return;
      }
      const L = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(A) ? F : `"${F}"`, Z = `${A}:${L}`;
      l(Z), N(Z);
    },
    [N, E]
  ), q = m.useCallback(
    (A) => {
      l(A), A || N("");
    },
    [N]
  ), C = m.useCallback(() => {
    if (r === p.current || !S)
      return;
    const A = $s(r), F = A[A.length - 1];
    if (!F) return;
    const M = !!F.match(S), O = F.replace(/^([-!])/, "").toLowerCase(), V = O && (E == null ? void 0 : E.all_prefixes.some((L) => L.startsWith(O)));
    (M || V) && c(!0);
  }, [r, S, E]), X = m.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: u,
    allKeywords: v,
    showAllKeywords: k,
    toggleShowAllKeywords: j,
    selectedIndex: y,
    setSelectedIndex: x,
    inputRef: f,
    isQueryChanged: _,
    handleSearch: N,
    handleKeyDown: b,
    applySuggestion: W,
    clearSearch: z,
    applySearchSuggestion: H,
    handleInputChange: q,
    handleInputFocus: C,
    handleInputBlur: X
  };
}, Ji = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(Qr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Dm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Xm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Rm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(hd, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(md, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Pm, { size: 12 });
    default:
      return null;
  }
}, Yh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: u,
  toggleShowAllKeywords: g,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: k,
  onEditFavorite: y,
  onDeleteFavorite: x
}) => {
  const E = (h, S, j) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(h.type, h.value, j === "all"),
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
      onMouseEnter: (_) => {
        _.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", _.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", _.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (_) => {
        _.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", _.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", _.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Ji(h.type)
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
            children: h.type
          }
        ),
        j !== "all" && /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: h.value
          }
        )
      ]
    },
    `${j}-${h.type}:${h.value}:${S}`
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
      children: t.map((h, S) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), l(h);
          },
          onMouseEnter: () => r(S),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: S === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: Ji(h.type)
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
                  width: h.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  h.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: h.value === wt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: h.value === wt ? "bold" : "normal"
                },
                children: h.value === wt ? h.type === "tag" ? `Untagged (${wt})` : `No ${h.type} (${wt})` : h.value
              }
            )
          ] })
        },
        `${h.type}:${h.value}`
      ))
    }
  ), f = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              (h, S) => E(h, S, "quick")
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
                        onClick: g,
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
              u && /* @__PURE__ */ s.jsx(
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
                  children: Array.from(new Set(c.map((h) => h.type))).map(
                    (h, S) => E({ type: h, value: "" }, S, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(qn, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((h) => /* @__PURE__ */ s.jsx(
              tf,
              {
                fav: h,
                onSelect: k,
                onEdit: y,
                onDelete: x
              },
              h.id
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
      onMouseDown: (h) => {
        h.preventDefault();
      },
      children: [
        d(),
        f(),
        p()
      ]
    }
  );
}, qh = () => {
  const { state: e } = Ne(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: u,
    setSelectedIndex: g,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: k,
    handleKeyDown: y,
    applySuggestion: x,
    clearSearch: E,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: p,
    handleInputBlur: h
  } = Gh(), {
    isSaving: S,
    toastMessage: j,
    editingFavorite: _,
    setEditingFavorite: N,
    editFavoriteName: W,
    setEditFavoriteName: b,
    editFavoriteQuery: z,
    setEditFavoriteQuery: H,
    handleDeleteFavorite: q,
    handleEditFavorite: C,
    handleSaveEditFavorite: X,
    handleSaveFavorite: A
  } = ef();
  St({
    onEscape: () => N(null),
    enabled: !!_
  });
  const F = m.useRef(null), M = m.useRef(!1);
  m.useEffect(() => {
    _ && F.current && F.current.focus();
  }, [_]);
  const O = (L) => {
    L.target === L.currentTarget && (M.current = !0);
  }, V = (L) => {
    L.target === L.currentTarget && M.current && N(null), M.current = !1;
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
              j && /* @__PURE__ */ s.jsx(
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
                          /* @__PURE__ */ s.jsx(
                            Yn,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ s.jsx(
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
                        onChange: (L) => f(L.target.value),
                        onKeyDown: y,
                        onBlur: h,
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
                        onClick: A,
                        disabled: S,
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
                        children: /* @__PURE__ */ s.jsx(
                          qn,
                          {
                            size: 16,
                            color: e.favorites.some((L) => L.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((L) => L.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
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
                        children: /* @__PURE__ */ s.jsx(Ee, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                Yh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: u,
                  setSelectedIndex: g,
                  applySuggestion: x,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (L) => {
                    n(L), k(L);
                  },
                  onEditFavorite: C,
                  onDeleteFavorite: q
                }
              )
            ]
          }
        ),
        _ && Me.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: O,
              onMouseUp: V,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (L) => L.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(qn, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
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
                                    value: W,
                                    onChange: (L) => b(L.target.value),
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
                                      L.key === "Enter" && X(), L.key === "Escape" && N(null);
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
                                    onChange: (L) => H(L.target.value),
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
                                      L.key === "Enter" && !L.shiftKey && (L.preventDefault(), X()), L.key === "Escape" && N(null);
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
                          onClick: X,
                          disabled: S || !W.trim() || !z.trim(),
                          children: S ? "Saving..." : "Save Changes"
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
}, Xh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, a] = m.useState(!0), [o, i] = m.useState(""), [c, u] = m.useState(""), [g, v] = m.useState(!1), [w, k] = m.useState(null), [y, x] = m.useState(""), [E, d] = m.useState(!1), f = m.useRef(null), p = m.useCallback(async () => {
    a(!0);
    try {
      const z = await Ao();
      r(z);
    } catch (z) {
      console.error("Failed to fetch tags:", z);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    p();
  }, [p]), m.useEffect(() => {
    w !== null && f.current && (f.current.focus(), f.current.select());
  }, [w]);
  const h = async (z) => {
    z.preventDefault();
    const H = c.trim();
    if (!(!H || g)) {
      if (H.toLowerCase() === wt) {
        alert(
          `Tag name '${wt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((q) => q.name.toLowerCase() === H.toLowerCase())) {
        alert(`Tag "${H}" already exists.`);
        return;
      }
      v(!0);
      try {
        await kh(H), u(""), await p();
      } catch (q) {
        console.error("Failed to add tag:", q);
      } finally {
        v(!1);
      }
    }
  }, S = async (z, H) => {
    if (confirm(`Are you sure you want to delete tag "${H}"?`))
      try {
        await Sh(z), await p();
      } catch (q) {
        console.error("Failed to delete tag:", q);
      }
  }, j = (z) => {
    k(z.id), x(z.name);
  }, _ = () => {
    k(null), x("");
  }, N = async (z) => {
    z.preventDefault();
    const H = y.trim();
    if (!H || w === null || E) return;
    if (H.toLowerCase() === wt) {
      alert(
        `Tag name '${wt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const q = n.find((C) => C.id === w);
    if (q && q.name === H) {
      _();
      return;
    }
    if (n.some(
      (C) => C.id !== w && C.name.toLowerCase() === H.toLowerCase()
    )) {
      alert(`Tag "${H}" already exists.`);
      return;
    }
    d(!0);
    try {
      await jh(w, H), _(), await p();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, W = (z) => {
    t(`tag:${z}`);
  }, b = m.useMemo(() => n.filter(
    (z) => z.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Qr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Ee, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: h, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (z) => u(z.target.value),
            disabled: g
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || g,
            children: [
              /* @__PURE__ */ s.jsx(Ro, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (z) => i(z.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: b.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : b.map((z) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === z.id ? /* @__PURE__ */ s.jsxs(
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
                onChange: (H) => x(H.target.value),
                onKeyDown: (H) => H.key === "Escape" && _()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: E || !y.trim(),
                children: /* @__PURE__ */ s.jsx(Po, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: _,
                disabled: E,
                children: /* @__PURE__ */ s.jsx(Ee, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: z.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => W(z.name),
              children: /* @__PURE__ */ s.jsx(Yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(z),
              children: /* @__PURE__ */ s.jsx(xd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => S(z.id, z.name),
              children: /* @__PURE__ */ s.jsx(ln, { size: 14 })
            }
          )
        ] })
      ] }) }, z.id)) })
    ] })
  ] });
};
function Jh(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Zh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: u,
    handleEditNotes: g,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: E,
    handleRunWithMask: d,
    handleEditSource: f
  } = ds(e, t), { getParentChain: p } = qd(a, c), [h, S] = m.useState(!1), [j, _] = m.useState(!1), [N, W] = m.useState(
    c["viewer.show_details_by_default"]
  ), [b, z] = m.useState(null), H = b ?? c["viewer.show_thumbnails"], [q, C] = m.useState(!1), [X, A] = m.useState(!1), [F, M] = m.useState(null), [O, V] = m.useState(null), [L, Z] = m.useState(
    null
  ), de = m.useRef(null), $ = m.useRef(!0);
  m.useEffect(() => ($.current = !0, () => {
    $.current = !1;
  }), []);
  const P = m.useRef(l);
  m.useEffect(() => {
    P.current = l;
  }, [l]);
  const I = m.useMemo(() => {
    const K = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lineage" ? i : a.filter(
      (te) => te.exists !== !1 && (c["gallery.show_parent_images"] || !te.has_children || K)
    );
  }, [o, i, a, c, e.searchQuery]), J = l === null ? -1 : I.findIndex((K) => K.id === l), R = (o === "lineage" && i.length > 0 ? i : a).find((K) => K.id === l), se = m.useCallback(
    async (K = !1) => {
      if (!R) return;
      const te = h ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!K && te === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [R.id],
            hasLineage: !!(R.parent_id || R.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const T = e.viewScope === "trash", ae = /* @__PURE__ */ new Set([R.id]);
        if (te === "lineage") {
          const G = await Ra(R.id);
          for (const ne of G)
            ae.add(ne.id);
        }
        if (!$.current || P.current === null) return;
        if (I.length > ae.size) {
          let G = !1;
          for (let ne = J + 1; ne < I.length; ne++)
            if (!ae.has(I[ne].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: I[ne].id, mode: o }
              }), G = !0;
              break;
            }
          if (!G) {
            for (let ne = J - 1; ne >= 0; ne--)
              if (!ae.has(I[ne].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: I[ne].id, mode: o }
                }), G = !0;
                break;
              }
          }
          G || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Da(Array.from(ae), T), !T) {
          const G = I.filter(
            (ne) => ae.has(ne.id)
          );
          M(G), V(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ae) });
      } catch (T) {
        t({
          type: "SET_ERROR",
          payload: T instanceof Error ? T.message : String(T)
        });
      }
    },
    [
      R,
      h,
      c,
      e.viewScope,
      I,
      J,
      o,
      t
    ]
  ), Q = m.useCallback(() => {
    R && u(R);
  }, [R, u]), fe = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: h } });
  }, [t, h]), ue = m.useCallback(async () => {
    const K = h ? c["fullscreen.loop"] : c["viewer.loop"];
    if (J === 0 && o === "gallery" && e.pagination.hasMore && !X && K) {
      A(!0);
      try {
        const te = e.pagination.limit, T = e.pagination.total, ae = Math.max(0, T - te), G = await kl(
          ae,
          te,
          e.searchQuery
        );
        if (!$.current || (t({ type: "APPEND_IMAGES", payload: G }), P.current === null)) return;
        if (G.images.length > 0) {
          const ne = G.images[G.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ne.id, mode: "gallery" }
          });
        }
      } catch (te) {
        console.error("Failed to jump to end:", te);
      } finally {
        A(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: h } });
  }, [
    J,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    X,
    h
  ]), ve = m.useCallback(
    (K) => {
      K && "stopPropagation" in K && K.stopPropagation();
      const te = de.current;
      te && (document.fullscreenElement ? document.exitFullscreen() : te.requestFullscreen().catch((T) => {
        console.error(
          `Error attempting to enable full-screen mode: ${T.message}`
        );
      }));
    },
    []
  ), pe = m.useCallback(async () => {
    R && (I.length > 1 ? fe() : t({ type: "CLOSE_VIEWER" }), await v(R));
  }, [R, I.length, fe, v, t]), Ke = m.useCallback(async () => {
    if (!F || F.length === 0) return;
    const K = F.map((T) => T.id), te = K[0];
    try {
      const T = await zo(K);
      if (!$.current) return;
      if (t({ type: "ADD_IMAGES", payload: F }), e.viewScope === "trash") {
        const ae = T.restored_ids || K;
        t({ type: "REMOVE_IMAGES", payload: ae });
      }
      if (M(null), !$.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: te, mode: o }
      });
    } catch (T) {
      t({
        type: "SET_ERROR",
        payload: T instanceof Error ? T.message : String(T)
      });
    }
  }, [F, t, o, e.viewScope]), tt = m.useCallback(async () => {
    if (F && F.length > 0)
      await Ke();
    else if (O && O.type === "tags") {
      const { imageId: K, addTags: te, removeTags: T } = O;
      try {
        await za([K], te, T);
        const ae = (o === "lineage" ? i : a).find((G) => G.id === K);
        if (ae) {
          const G = [...ae.tags];
          for (const he of te)
            G.includes(he) || G.push(he);
          const ne = G.filter((he) => !T.includes(he));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ae, tags: ne }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: K, mode: o }
          });
        }
        V(null);
      } catch (ae) {
        t({
          type: "SET_ERROR",
          payload: ae instanceof Error ? ae.message : String(ae)
        });
      }
    }
  }, [
    F,
    O,
    Ke,
    a,
    i,
    o,
    t
  ]), Hr = m.useCallback(
    async (K) => {
      if (!K || !R) return;
      const te = R.id, T = [...R.tags], ae = K.split(/\s+/), G = [], ne = [];
      let he = !1, Oe = !1, Ge = !1;
      for (const Ie of ae)
        if (Ie.startsWith("tag:")) {
          const xe = Ie.substring(4);
          xe && !T.includes(xe) && !G.includes(xe) && G.push(xe);
        } else if (Ie.startsWith("-tag:")) {
          const xe = Ie.substring(5);
          xe && T.includes(xe) && !ne.includes(xe) && ne.push(xe);
        } else if (Ie.startsWith("tag-toggle:")) {
          const xe = Ie.substring(11);
          xe && (T.includes(xe) ? ne.includes(xe) || ne.push(xe) : G.includes(xe) || G.push(xe));
        } else Ie === "next" ? he = !0 : Ie === "prev" ? Oe = !0 : Ie === "delete" && (Ge = !0);
      if (G.length > 0 || ne.length > 0)
        try {
          await za(
            [te],
            G,
            ne
          );
          const Ie = [...T];
          for (const Wt of G)
            Ie.includes(Wt) || Ie.push(Wt);
          const xe = Ie.filter((Wt) => !ne.includes(Wt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...R, id: te, tags: xe }
          }), V({
            type: "tags",
            imageId: te,
            addTags: [...ne],
            removeTags: [...G]
          }), M(null);
        } catch (Ie) {
          console.error("Failed to update tags via shortcut:", Ie);
        }
      Ge ? se(!0) : he ? fe() : Oe && ue();
    },
    [R, t, fe, ue, se]
  );
  m.useEffect(() => {
    const K = (T) => {
      const ae = T.target, G = ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable;
      if (G && T.key !== "Escape") {
        T.key === "Enter" && (T.ctrlKey || T.metaKey) && T.preventDefault();
        return;
      }
      if (l === null) return;
      const ne = T.key === "Delete" || T.key === "Backspace", he = T.key === "ArrowRight" || T.key === "ArrowLeft", Oe = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        T.key
      ), Ge = T.key === "Escape", Ie = (T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z" || T.code === "KeyZ"), xe = /^[0-9]$/.test(T.key) && !T.ctrlKey && !T.metaKey && !T.altKey && T.code !== "KeyZ";
      if (ne || he || Oe || Ge || Ie || xe)
        if (G)
          if (Ge) {
            if (e.activeModal.type !== "none") {
              T.preventDefault(), T.stopPropagation();
              return;
            }
            T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
          } else
            return;
        else {
          if (Ge && e.activeModal.type !== "none") {
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
        fe();
      else if (T.key === "ArrowLeft")
        ue();
      else if (T.key === "f" || T.key === "F")
        ve(T);
      else if (T.key === "i" || T.key === "I")
        W((Wt) => !Wt);
      else if (T.key === "t" || T.key === "T")
        Q();
      else if ((T.key === "r" || T.key === "R") && e.viewScope === "trash")
        pe();
      else if (T.key === "Delete")
        se();
      else if ((T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z"))
        tt();
      else if (xe && !G) {
        const Wt = `viewer.shortcut.${T.key}`, ps = c[Wt];
        typeof ps == "string" && ps && (Z(T.key), setTimeout(() => {
          $.current && Z(null);
        }, 500), Hr(ps));
      }
    };
    window.addEventListener("keydown", K, { capture: !0 });
    const te = () => {
      const T = !!document.fullscreenElement;
      S(T), W(T ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", te), () => {
      window.removeEventListener("keydown", K, { capture: !0 }), document.removeEventListener("fullscreenchange", te);
    };
  }, [
    l,
    t,
    ve,
    fe,
    ue,
    c,
    se,
    e.activeModal.type,
    tt,
    Q,
    pe,
    e.viewScope,
    Hr
  ]), m.useEffect(() => {
    l !== null && r(l).catch((K) => {
      console.error("Failed to fetch full image details for viewer:", K);
    });
  }, [l, r]), m.useEffect(() => {
    o === "lineage" && l !== null && i.length === 0 && (C(!0), Ra(l).then((K) => {
      $.current && t({ type: "SET_LINEAGE", payload: K });
    }).catch((K) => {
      console.error("Failed to fetch lineage:", K);
    }).finally(() => {
      $.current && C(!1);
    }));
  }, [o, l, i.length, t]), m.useEffect(() => {
    o !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || J !== -1 && J >= I.length - 15 && n();
  }, [
    l,
    I.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    J
  ]);
  const Fo = m.useMemo(() => {
    if (!H || J === -1) return [];
    const K = c["viewer.thumbnail_window_size"], te = Math.floor(K / 2);
    let T = Math.max(0, J - te);
    const ae = Math.min(I.length, T + K);
    return ae === I.length && (T = Math.max(0, ae - K)), I.slice(T, ae).map((G, ne) => ({
      img: G,
      absIndex: T + ne
    }));
  }, [I, J, c, H]), fs = m.useMemo(() => R ? p(R) : [], [R, p]);
  return m.useEffect(() => {
    var K, te;
    if (l !== null) {
      if (H) {
        const T = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((K = document.activeElement) == null ? void 0 : K.tagName) === "CANVAS" && document.activeElement.blur(), (te = de.current) == null || te.focus();
    }
  }, [l, H]), m.useEffect(() => {
    if (l === null || I.length === 0) return;
    const K = I.map((he) => he.id), te = K.indexOf(l);
    if (te === -1) return;
    const T = h ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: ae, nextId: G } = Jh({
      ids: K,
      index: te,
      loopEnabled: T,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), ne = setTimeout(() => {
      const he = [ae, G].filter(
        (Oe) => Oe !== null && Oe !== l
      );
      he.length !== 0 && Promise.allSettled(he.map((Oe) => r(Oe))).then(
        (Oe) => {
          for (const Ge of Oe)
            Ge.status === "rejected" && Y.warn(
              "Prefetching adjacent image details failed",
              Ge.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(ne);
  }, [
    l,
    I,
    h,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), m.useEffect(() => {
    if (l === null || I.length === 0) return;
    const K = I.findIndex(
      (G) => G.id === l
    );
    if (K === -1) return;
    const te = (G) => et(G), T = [
      K + 1,
      K + 2,
      K - 1
    ], ae = setTimeout(() => {
      for (const G of T)
        if (G >= 0 && G < I.length) {
          const ne = I[G], he = new Image();
          he.src = te(ne);
        }
    }, 150);
    return () => clearTimeout(ae);
  }, [l, I]), {
    isFullscreen: h,
    showDetails: N,
    setShowDetails: W,
    showThumbnails: H,
    setShowThumbnailsOverride: z,
    isLoadingLineage: q,
    isJumping: X,
    isMenuOpen: j,
    setIsMenuOpen: _,
    activeShortcutKey: L,
    lastDeletedImages: F,
    setLastDeletedImages: M,
    overlayRef: de,
    handleNext: fe,
    handlePrevious: ue,
    handleDelete: se,
    handleUpdateUserNotes: w,
    handleEditNotes: () => R && g(R),
    handleTagEdit: Q,
    handleRestore: pe,
    handleUndo: tt,
    handleRestoreWorkflow: async () => {
      if (!R) return;
      await k(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!R) return;
      await y(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!R) return;
      x(R) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => R && E(R),
    handleRunWithMask: (K) => R && d(R, K),
    handleEditSource: () => R && f(R),
    toggleFullscreen: ve,
    currentIndex: J,
    currentThumbnails: I,
    image: R,
    windowedThumbnails: Fo,
    parentChain: fs
  };
}, eg = ({
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
}) }) : null, tg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = m.useState("idle");
  m.useEffect(() => {
    c("idle");
  }, []);
  const u = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], g = u === "always" || u === "if_present" && e.user_notes;
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
            (v, w) => v.imgSrc && /* @__PURE__ */ s.jsx(
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
        g && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
}, nf = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = et(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${o ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: i, alt: e.filename }),
          (a || o) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ s.jsx(hd, { size: 12 }) : /* @__PURE__ */ s.jsx(md, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
nf.displayName = "ThumbnailItem";
const ng = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o
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
  ) : e.map(({ img: i }) => /* @__PURE__ */ s.jsx(
    nf,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Or, { className: "animate-spin", size: 20 }) })
] }) });
function rg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ne(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: u,
    isJumping: g,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: k,
    setLastDeletedImages: y,
    overlayRef: x,
    handleNext: E,
    handlePrevious: d,
    handleTagEdit: f,
    handleEditNotes: p,
    handleRestore: h,
    handleRestoreWorkflow: S,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: N,
    handleRunWithMask: W,
    handleEditSource: b,
    handleDelete: z,
    toggleFullscreen: H,
    image: q,
    windowedThumbnails: C,
    parentChain: X
  } = Zh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), A = m.useRef(null), F = m.useRef(null), { executeWorkflow: M } = Bd(), O = m.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!q) return null;
  const { viewerImageId: V, viewerMode: L } = e, Z = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Me.createPortal(
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
              onClick: (de) => de.stopPropagation(),
              children: [
                Z && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: h,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Or, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(wd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx($m, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: H,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(Km, { size: 20 }) : /* @__PURE__ */ s.jsx(Bm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    Oo,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: F,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: S,
                      onSendToWorkflow: _,
                      onRunWithWorkflow: N,
                      onRunWithMask: W,
                      onEditSource: b,
                      onEditTags: f,
                      onEditNotes: p,
                      onDelete: z,
                      deleteLabel: O,
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
                      children: /* @__PURE__ */ s.jsx(Ee, { size: 20 })
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: d,
                    type: "button",
                    disabled: g,
                    children: /* @__PURE__ */ s.jsx(gd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  g && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Or, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: A,
                      src: et(q),
                      alt: q.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${g ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: E,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(yd, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  tg,
                  {
                    image: q,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: Z,
                    parentChain: X,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  ng,
                  {
                    windowedThumbnails: C,
                    viewerImageId: V,
                    currentImage: q,
                    dispatch: t,
                    isLoadingLineage: u,
                    isLoading: e.isLoading,
                    viewerMode: L
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  eg,
                  {
                    settings: e.settings,
                    activeShortcutKey: k
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Hd,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (de) => {
                if (e.activeModal.type === "workflow_selection") {
                  const $ = e.activeModal.maskFilename;
                  for (const P of e.activeModal.images)
                    await M(de, P, $);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Gd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Kd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Yd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Cd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx($d, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Ud,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            Md,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Qd,
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
const lg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ne(), [a, o] = m.useState("gallery"), [i, c] = m.useState(""), [u, g] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    g(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = m.useRef(null), k = m.useRef(null), y = m.useMemo(() => {
    const E = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || E));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), x = m.useMemo(
    () => y.slice(0, u),
    [y, u]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (Y.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), m.useEffect(() => {
    const E = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const E = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            Y.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          u < y.length ? (Y.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: u,
              newLimit: Math.min(
                u + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), g((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (Y.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Y.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: y.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = w.current;
    return d && E.observe(d), () => {
      d && E.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    u,
    y.length,
    e.pagination.limit,
    e.images.length
  ]), m.useEffect(() => {
    const E = e.viewerImageId ?? k.current;
    if (E !== null && y.some((f) => f.id === E)) {
      const f = y.findIndex((h) => h.id === E);
      if (f >= u) {
        g(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${E}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (k.current = null));
    }
    e.viewerImageId !== null && (k.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    y,
    u,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: u,
    displayedImages: y,
    visibleImages: x,
    isSearchActive: v,
    loadMoreRef: w
  };
}, sg = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ne(), { handleRunWithWorkflow: l } = ds(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const o = e.viewScope === "trash", i = () => {
    const u = e.images.filter(
      (v) => e.selectedIds.has(v.id)
    ), g = /* @__PURE__ */ new Set();
    for (const v of u)
      if (v.tags)
        for (const w of v.tags)
          g.add(w);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(g)
      }
    });
  }, c = () => {
    const u = e.images.filter(
      (g) => e.selectedIds.has(g.id)
    );
    l(u);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${o ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          a,
          " items selected"
        ] }),
        o ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ s.jsx(
                  Or,
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
        ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: i,
              children: [
                /* @__PURE__ */ s.jsx(
                  Qr,
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
              onClick: c,
              children: [
                /* @__PURE__ */ s.jsx(
                  vd,
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
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ s.jsx(Ee, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, ag = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    localLimit: c,
    displayedImages: u,
    visibleImages: g,
    isSearchActive: v,
    loadMoreRef: w
  } = lg(), [k, y] = m.useState(!1), [x, E] = m.useState(null), d = m.useRef(null), f = m.useCallback(() => {
    d.current && (E(
      d.current.getBoundingClientRect()
    ), y(!0));
  }, []), p = m.useCallback(
    (h) => {
      t({ type: "SET_SEARCH_QUERY", payload: h }), i(h), a("search"), y(!1);
    },
    [t, i, a]
  );
  return Y.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: u.length,
    visibleCount: g.length,
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
              /* @__PURE__ */ s.jsx(ln, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (h) => r("gallery.trash.show_missing", h.target.checked)
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
                  /* @__PURE__ */ s.jsx(Ee, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__actions", children: [
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: d,
                type: "button",
                onClick: f,
                style: {
                  background: "none",
                  border: "none",
                  color: k ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  qn,
                  {
                    size: 14,
                    fill: k ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
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
                  color: v ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: v ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Yn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const S = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", S);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Vm, { size: 14 }) : /* @__PURE__ */ s.jsx(wd, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Qr, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Fm, { size: 14 })
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
                  Or,
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
                children: /* @__PURE__ */ s.jsx(Ym, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(qh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Bh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          Xh,
          {
            onClose: () => a("gallery"),
            onSearch: (h) => {
              t({ type: "SET_SEARCH_QUERY", payload: h }), a("search");
            }
          }
        ) : e.isLoading && u.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : g.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: g.map((h) => {
                const S = e.settings["sidebar.thumbnail_size"] || 100, j = e.settings["gallery.view_mode"] === "grid_only", _ = j && h.width && h.height ? Math.min(
                  S,
                  S * h.width / h.height
                ) + 10 : j ? S + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": h.id,
                    style: {
                      width: j ? "auto" : "100%",
                      flexShrink: 0,
                      display: j ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      Hh,
                      {
                        height: j ? S + 10 : Math.max(S, 150),
                        style: {
                          width: typeof _ == "number" ? `${_}px` : _,
                          minWidth: typeof _ == "number" ? `${_}px` : _,
                          display: j ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(Qh, { image: h })
                      }
                    )
                  },
                  h.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: w,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                c >= u.length && !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(sg, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(rg, {}),
        /* @__PURE__ */ s.jsx(Uh, {}),
        k && /* @__PURE__ */ s.jsx(
          Kh,
          {
            anchorRect: x,
            onClose: () => y(!1),
            onSelect: p
          }
        )
      ]
    }
  );
};
Zi.registerExtension({
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
const og = document.getElementById(
  "meld-gallery-style"
);
if (!og) {
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
let cl = null, ht = null;
Zi.registerExtension({
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
      const n = await jd();
      Y.init(n.dev_mode), Y.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), Y.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), Y.log("Import completed.");
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
                  await Sd({
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
            Y.log("render called", {
              el: n,
              galleryRoot: cl,
              galleryContainer: ht
            }), ht || (Y.log("galleryContainer not found, creating new one"), ht = document.createElement("div"), ht.id = "meld-gallery-container", ht.style.height = "100%", ht.style.width = "100%", ht.style.display = "flex", ht.style.flexDirection = "column"), n.contains(ht) || (Y.log("Appending galleryContainer to el"), n.appendChild(ht)), cl ? Y.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (Y.log("Creating new gallery root"), cl = ud(ht), cl.render(
              Sl.createElement(
                _h,
                null,
                Sl.createElement(ag)
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
