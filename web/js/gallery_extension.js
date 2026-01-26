import { api as Z } from "/scripts/api.js";
import { app as Go } from "/scripts/app.js";
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or = Symbol.for("react.element"), nf = Symbol.for("react.portal"), rf = Symbol.for("react.fragment"), lf = Symbol.for("react.strict_mode"), sf = Symbol.for("react.profiler"), af = Symbol.for("react.provider"), of = Symbol.for("react.context"), cf = Symbol.for("react.forward_ref"), uf = Symbol.for("react.suspense"), df = Symbol.for("react.memo"), ff = Symbol.for("react.lazy"), Di = Symbol.iterator;
function pf(e) {
  return e === null || typeof e != "object" ? null : (e = Di && e[Di] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xo = Object.assign, Jo = {};
function Yn(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zo() {
}
Zo.prototype = Yn.prototype;
function Ra(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || qo;
}
var za = Ra.prototype = new Zo();
za.constructor = Ra;
Xo(za, Yn.prototype);
za.isPureReactComponent = !0;
var Ri = Array.isArray, ec = Object.prototype.hasOwnProperty, Aa = { current: null }, tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r, l = {}, a = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t) ec.call(t, r) && !tc.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Or, type: e, key: a, ref: i, props: l, _owner: Aa.current };
}
function mf(e, t) {
  return { $$typeof: Or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Oa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zi = /\/+/g;
function ds(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hf("" + e.key) : t.toString(36);
}
function cl(e, t, n, r, l) {
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
        case Or:
        case nf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + ds(i, 0) : r, Ri(l) ? (n = "", e != null && (n = e.replace(zi, "$&/") + "/"), cl(l, t, n, "", function(u) {
    return u;
  })) : l != null && (Oa(l) && (l = mf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(zi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ri(e)) for (var o = 0; o < e.length; o++) {
    a = e[o];
    var c = r + ds(a, o);
    i += cl(a, t, n, c, l);
  }
  else if (c = pf(e), typeof c == "function") for (e = c.call(e), o = 0; !(a = e.next()).done; ) a = a.value, c = r + ds(a, o++), i += cl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Hr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return cl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function gf(e) {
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
var We = { current: null }, ul = { transition: null }, yf = { ReactCurrentDispatcher: We, ReactCurrentBatchConfig: ul, ReactCurrentOwner: Aa };
function rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: Hr, forEach: function(e, t, n) {
  Hr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Hr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Hr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Oa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = Yn;
re.Fragment = rf;
re.Profiler = sf;
re.PureComponent = Ra;
re.StrictMode = lf;
re.Suspense = uf;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yf;
re.act = rc;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xo({}, e.props), l = e.key, a = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = Aa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (c in t) ec.call(t, c) && !tc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Or, type: e.type, key: l, ref: a, props: r, _owner: i };
};
re.createContext = function(e) {
  return e = { $$typeof: of, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: af, _context: e }, e.Consumer = e;
};
re.createElement = nc;
re.createFactory = function(e) {
  var t = nc.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: cf, render: e };
};
re.isValidElement = Oa;
re.lazy = function(e) {
  return { $$typeof: ff, _payload: { _status: -1, _result: e }, _init: gf };
};
re.memo = function(e, t) {
  return { $$typeof: df, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = ul.transition;
  ul.transition = {};
  try {
    e();
  } finally {
    ul.transition = t;
  }
};
re.unstable_act = rc;
re.useCallback = function(e, t) {
  return We.current.useCallback(e, t);
};
re.useContext = function(e) {
  return We.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return We.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return We.current.useEffect(e, t);
};
re.useId = function() {
  return We.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return We.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return We.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return We.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return We.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return We.current.useRef(e);
};
re.useState = function(e) {
  return We.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return We.current.useTransition();
};
re.version = "18.3.1";
Yo.exports = re;
var m = Yo.exports;
const kl = /* @__PURE__ */ tf(m);
var lc = { exports: {} }, Je = {}, sc = { exports: {} }, ac = {};
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
  function t(N, z) {
    var A = N.length;
    N.push(z);
    e: for (; 0 < A; ) {
      var T = A - 1 >>> 1, ne = N[T];
      if (0 < l(ne, z)) N[T] = z, N[A] = ne, A = T;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0], A = N.pop();
    if (A !== z) {
      N[0] = A;
      e: for (var T = 0, ne = N.length, de = ne >>> 1; T < de; ) {
        var Q = 2 * (T + 1) - 1, L = N[Q], R = Q + 1, le = N[R];
        if (0 > l(L, A)) R < ne && 0 > l(le, L) ? (N[T] = le, N[R] = A, T = R) : (N[T] = L, N[Q] = A, T = Q);
        else if (R < ne && 0 > l(le, A)) N[T] = le, N[R] = A, T = R;
        else break e;
      }
    }
    return z;
  }
  function l(N, z) {
    var A = N.sortIndex - z.sortIndex;
    return A !== 0 ? A : N.id - z.id;
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
  var c = [], u = [], g = 1, w = null, x = 3, v = !1, y = !1, _ = !1, E = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= N) r(u), z.sortIndex = z.expirationTime, t(c, z);
      else break;
      z = n(u);
    }
  }
  function p(N) {
    if (_ = !1, h(N), !y) if (n(c) !== null) y = !0, D(k);
    else {
      var z = n(u);
      z !== null && W(p, z.startTime - N);
    }
  }
  function k(N, z) {
    y = !1, _ && (_ = !1, d(b), b = -1), v = !0;
    var A = x;
    try {
      for (h(z), w = n(c); w !== null && (!(w.expirationTime > z) || N && !O()); ) {
        var T = w.callback;
        if (typeof T == "function") {
          w.callback = null, x = w.priorityLevel;
          var ne = T(w.expirationTime <= z);
          z = e.unstable_now(), typeof ne == "function" ? w.callback = ne : w === n(c) && r(c), h(z);
        } else r(c);
        w = n(c);
      }
      if (w !== null) var de = !0;
      else {
        var Q = n(u);
        Q !== null && W(p, Q.startTime - z), de = !1;
      }
      return de;
    } finally {
      w = null, x = A, v = !1;
    }
  }
  var j = !1, S = null, b = -1, F = 5, M = -1;
  function O() {
    return !(e.unstable_now() - M < F);
  }
  function B() {
    if (S !== null) {
      var N = e.unstable_now();
      M = N;
      var z = !0;
      try {
        z = S(!0, N);
      } finally {
        z ? J() : (j = !1, S = null);
      }
    } else j = !1;
  }
  var J;
  if (typeof f == "function") J = function() {
    f(B);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), X = C.port2;
    C.port1.onmessage = B, J = function() {
      X.postMessage(null);
    };
  } else J = function() {
    E(B, 0);
  };
  function D(N) {
    S = N, j || (j = !0, J());
  }
  function W(N, z) {
    b = E(function() {
      N(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, D(k));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(N) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = x;
    }
    var A = x;
    x = z;
    try {
      return N();
    } finally {
      x = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, z) {
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
    var A = x;
    x = N;
    try {
      return z();
    } finally {
      x = A;
    }
  }, e.unstable_scheduleCallback = function(N, z, A) {
    var T = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? T + A : T) : A = T, N) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = A + ne, N = { id: g++, callback: z, priorityLevel: N, startTime: A, expirationTime: ne, sortIndex: -1 }, A > T ? (N.sortIndex = A, t(u, N), n(c) === null && N === n(u) && (_ ? (d(b), b = -1) : _ = !0, W(p, A - T))) : (N.sortIndex = ne, t(c, N), y || v || (y = !0, D(k))), N;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(N) {
    var z = x;
    return function() {
      var A = x;
      x = z;
      try {
        return N.apply(this, arguments);
      } finally {
        x = A;
      }
    };
  };
})(ac);
sc.exports = ac;
var vf = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf = m, Xe = vf;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ic = /* @__PURE__ */ new Set(), xr = {};
function yn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) ic.add(t[e]);
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fs = Object.prototype.hasOwnProperty, xf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ai = {}, Oi = {};
function _f(e) {
  return Fs.call(Oi, e) ? !0 : Fs.call(Ai, e) ? !1 : xf.test(e) ? Oi[e] = !0 : (Ai[e] = !0, !1);
}
function kf(e, t, n, r) {
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
function Sf(e, t, n, r) {
  if (t === null || typeof t > "u" || kf(e, t, n, r)) return !0;
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
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Pe[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Pe[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Pe[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Pe[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Pe[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Pe[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Pe[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Pe[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Pe[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fa = /[\-:]([a-z])/g;
function Wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fa,
    Wa
  );
  Pe[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fa, Wa);
  Pe[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fa, Wa);
  Pe[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Pe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Pe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $a(e, t, n, r) {
  var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sf(t, n, l, r) && (n = null), r || l === null ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Br = Symbol.for("react.element"), kn = Symbol.for("react.portal"), Sn = Symbol.for("react.fragment"), Ua = Symbol.for("react.strict_mode"), Ws = Symbol.for("react.profiler"), oc = Symbol.for("react.provider"), cc = Symbol.for("react.context"), Qa = Symbol.for("react.forward_ref"), $s = Symbol.for("react.suspense"), Us = Symbol.for("react.suspense_list"), Va = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), uc = Symbol.for("react.offscreen"), Fi = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object" ? null : (e = Fi && e[Fi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var we = Object.assign, fs;
function ir(e) {
  if (fs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    fs = t && t[1] || "";
  }
  return `
` + fs + e;
}
var ps = !1;
function ms(e, t) {
  if (!e || ps) return "";
  ps = !0;
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
`), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o]; ) o--;
      for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== a[o]) {
        if (i !== 1 || o !== 1)
          do
            if (i--, o--, 0 > o || l[i] !== a[o]) {
              var c = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= i && 0 <= o);
        break;
      }
    }
  } finally {
    ps = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
}
function jf(e) {
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
      return e = ms(e.type, !1), e;
    case 11:
      return e = ms(e.type.render, !1), e;
    case 1:
      return e = ms(e.type, !0), e;
    default:
      return "";
  }
}
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case kn:
      return "Portal";
    case Ws:
      return "Profiler";
    case Ua:
      return "StrictMode";
    case $s:
      return "Suspense";
    case Us:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case cc:
      return (e.displayName || "Context") + ".Consumer";
    case oc:
      return (e._context.displayName || "Context") + ".Provider";
    case Qa:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Va:
      return t = e.displayName || null, t !== null ? t : Qs(e.type) || "Memo";
    case Ot:
      t = e._payload, e = e._init;
      try {
        return Qs(e(t));
      } catch {
      }
  }
  return null;
}
function Ef(e) {
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
      return Qs(t);
    case 8:
      return t === Ua ? "StrictMode" : "Mode";
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
function Jt(e) {
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
function dc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cf(e) {
  var t = dc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Kr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function fc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = dc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Sl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vs(e, t) {
  var n = t.checked;
  return we({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pc(e, t) {
  t = t.checked, t != null && $a(e, "checked", t, !1);
}
function Hs(e, t) {
  pc(e, t);
  var n = Jt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bs(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $i(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bs(e, t, n) {
  (t !== "number" || Sl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var or = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ks(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return we({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ui(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (or(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function mc(e, t) {
  var n = Jt(t.value), r = Jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, gc = function(e) {
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
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
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
}, Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
  Nf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e];
  });
});
function yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px";
}
function vc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = yc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var bf = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ys(e, t) {
  if (t) {
    if (bf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function qs(e, t) {
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
var Xs = null;
function Ha(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Js = null, Rn = null, zn = null;
function Vi(e) {
  if (e = $r(e)) {
    if (typeof Js != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Jl(t), Js(e.stateNode, e.type, t));
  }
}
function wc(e) {
  Rn ? zn ? zn.push(e) : zn = [e] : Rn = e;
}
function xc() {
  if (Rn) {
    var e = Rn, t = zn;
    if (zn = Rn = null, Vi(e), t) for (e = 0; e < t.length; e++) Vi(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function kc() {
}
var hs = !1;
function Sc(e, t, n) {
  if (hs) return e(t, n);
  hs = !0;
  try {
    return _c(e, t, n);
  } finally {
    hs = !1, (Rn !== null || zn !== null) && (kc(), xc());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jl(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Zs = !1;
if (It) try {
  var er = {};
  Object.defineProperty(er, "passive", { get: function() {
    Zs = !0;
  } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
} catch {
  Zs = !1;
}
function Mf(e, t, n, r, l, a, i, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (g) {
    this.onError(g);
  }
}
var fr = !1, jl = null, El = !1, ea = null, If = { onError: function(e) {
  fr = !0, jl = e;
} };
function Tf(e, t, n, r, l, a, i, o, c) {
  fr = !1, jl = null, Mf.apply(If, arguments);
}
function Lf(e, t, n, r, l, a, i, o, c) {
  if (Tf.apply(this, arguments), fr) {
    if (fr) {
      var u = jl;
      fr = !1, jl = null;
    } else throw Error(P(198));
    El || (El = !0, ea = u);
  }
}
function vn(e) {
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
function jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Hi(e) {
  if (vn(e) !== e) throw Error(P(188));
}
function Pf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(P(188));
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
      throw Error(P(188));
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
        if (!i) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Ec(e) {
  return e = Pf(e), e !== null ? Cc(e) : null;
}
function Cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nc = Xe.unstable_scheduleCallback, Bi = Xe.unstable_cancelCallback, Df = Xe.unstable_shouldYield, Rf = Xe.unstable_requestPaint, Se = Xe.unstable_now, zf = Xe.unstable_getCurrentPriorityLevel, Ba = Xe.unstable_ImmediatePriority, bc = Xe.unstable_UserBlockingPriority, Cl = Xe.unstable_NormalPriority, Af = Xe.unstable_LowPriority, Mc = Xe.unstable_IdlePriority, Gl = null, kt = null;
function Of(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function") try {
    kt.onCommitFiberRoot(Gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var mt = Math.clz32 ? Math.clz32 : $f, Ff = Math.log, Wf = Math.LN2;
function $f(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ff(e) / Wf | 0) | 0;
}
var Yr = 64, qr = 4194304;
function cr(e) {
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
function Nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = cr(o) : (a &= i, a !== 0 && (r = cr(a)));
  } else i = n & ~l, i !== 0 ? r = cr(i) : a !== 0 && (r = cr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - mt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Uf(e, t) {
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
function Qf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - mt(a), o = 1 << i, c = l[i];
    c === -1 ? (!(o & n) || o & r) && (l[i] = Uf(o, t)) : c <= t && (e.expiredLanes |= o), a &= ~o;
  }
}
function ta(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ic() {
  var e = Yr;
  return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
}
function gs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mt(t), e[t] = n;
}
function Vf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - mt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Ka(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Tc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Lc, Ga, Pc, Dc, Rc, na = !1, Xr = [], Vt = null, Ht = null, Bt = null, Sr = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Wt = [], Hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ki(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(t.pointerId);
  }
}
function tr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = $r(t), t !== null && Ga(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Bf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Vt = tr(Vt, e, t, n, r, l), !0;
    case "dragenter":
      return Ht = tr(Ht, e, t, n, r, l), !0;
    case "mouseover":
      return Bt = tr(Bt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Sr.set(a, tr(Sr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, jr.set(a, tr(jr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function zc(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jc(n), t !== null) {
          e.blockedOn = t, Rc(e.priority, function() {
            Pc(n);
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
function dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Xs = r, n.target.dispatchEvent(r), Xs = null;
    } else return t = $r(n), t !== null && Ga(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  dl(e) && n.delete(t);
}
function Kf() {
  na = !1, Vt !== null && dl(Vt) && (Vt = null), Ht !== null && dl(Ht) && (Ht = null), Bt !== null && dl(Bt) && (Bt = null), Sr.forEach(Gi), jr.forEach(Gi);
}
function nr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, na || (na = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Kf)));
}
function Er(e) {
  function t(l) {
    return nr(l, e);
  }
  if (0 < Xr.length) {
    nr(Xr[0], e);
    for (var n = 1; n < Xr.length; n++) {
      var r = Xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && nr(Vt, e), Ht !== null && nr(Ht, e), Bt !== null && nr(Bt, e), Sr.forEach(t), jr.forEach(t), n = 0; n < Wt.length; n++) r = Wt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && (n = Wt[0], n.blockedOn === null); ) zc(n), n.blockedOn === null && Wt.shift();
}
var An = Dt.ReactCurrentBatchConfig, bl = !0;
function Gf(e, t, n, r) {
  var l = ce, a = An.transition;
  An.transition = null;
  try {
    ce = 1, Ya(e, t, n, r);
  } finally {
    ce = l, An.transition = a;
  }
}
function Yf(e, t, n, r) {
  var l = ce, a = An.transition;
  An.transition = null;
  try {
    ce = 4, Ya(e, t, n, r);
  } finally {
    ce = l, An.transition = a;
  }
}
function Ya(e, t, n, r) {
  if (bl) {
    var l = ra(e, t, n, r);
    if (l === null) Cs(e, t, r, Ml, n), Ki(e, r);
    else if (Bf(l, e, t, n, r)) r.stopPropagation();
    else if (Ki(e, r), t & 4 && -1 < Hf.indexOf(e)) {
      for (; l !== null; ) {
        var a = $r(l);
        if (a !== null && Lc(a), a = ra(e, t, n, r), a === null && Cs(e, t, r, Ml, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else Cs(e, t, r, null, n);
  }
}
var Ml = null;
function ra(e, t, n, r) {
  if (Ml = null, e = Ha(r), e = an(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = jc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ml = e, null;
}
function Ac(e) {
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
      switch (zf()) {
        case Ba:
          return 1;
        case bc:
          return 4;
        case Cl:
        case Af:
          return 16;
        case Mc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null, qa = null, fl = null;
function Oc() {
  if (fl) return fl;
  var e, t = qa, n = t.length, r, l = "value" in Ut ? Ut.value : Ut.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++) ;
  return fl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function pl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jr() {
  return !0;
}
function Yi() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, a, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Jr : Yi, this.isPropagationStopped = Yi, this;
  }
  return we(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
  }, persist: function() {
  }, isPersistent: Jr }), t;
}
var qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xa = Ze(qn), Wr = we({}, qn, { view: 0, detail: 0 }), qf = Ze(Wr), ys, vs, rr, Yl = we({}, Wr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (ys = e.screenX - rr.screenX, vs = e.screenY - rr.screenY) : vs = ys = 0, rr = e), ys);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vs;
} }), qi = Ze(Yl), Xf = we({}, Yl, { dataTransfer: 0 }), Jf = Ze(Xf), Zf = we({}, Wr, { relatedTarget: 0 }), ws = Ze(Zf), ep = we({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tp = Ze(ep), np = we({}, qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rp = Ze(np), lp = we({}, qn, { data: 0 }), Xi = Ze(lp), sp = {
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
}, ap = {
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
}, ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function op(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
}
function Ja() {
  return op;
}
var cp = we({}, Wr, { key: function(e) {
  if (e.key) {
    var t = sp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ap[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(e) {
  return e.type === "keypress" ? pl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), up = Ze(cp), dp = we({}, Yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ji = Ze(dp), fp = we({}, Wr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), pp = Ze(fp), mp = we({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hp = Ze(mp), gp = we({}, Yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yp = Ze(gp), vp = [9, 13, 27, 32], Za = It && "CompositionEvent" in window, pr = null;
It && "documentMode" in document && (pr = document.documentMode);
var wp = It && "TextEvent" in window && !pr, Fc = It && (!Za || pr && 8 < pr && 11 >= pr), Zi = " ", eo = !1;
function Wc(e, t) {
  switch (e) {
    case "keyup":
      return vp.indexOf(t.keyCode) !== -1;
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
function $c(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function xp(e, t) {
  switch (e) {
    case "compositionend":
      return $c(t);
    case "keypress":
      return t.which !== 32 ? null : (eo = !0, Zi);
    case "textInput":
      return e = t.data, e === Zi && eo ? null : e;
    default:
      return null;
  }
}
function _p(e, t) {
  if (jn) return e === "compositionend" || !Za && Wc(e, t) ? (e = Oc(), fl = qa = Ut = null, jn = !1, e) : null;
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
      return Fc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function to(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kp[e.type] : t === "textarea";
}
function Uc(e, t, n, r) {
  wc(r), t = Il(t, "onChange"), 0 < t.length && (n = new Xa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var mr = null, Cr = null;
function Sp(e) {
  Zc(e, 0);
}
function ql(e) {
  var t = Nn(e);
  if (fc(t)) return e;
}
function jp(e, t) {
  if (e === "change") return t;
}
var Qc = !1;
if (It) {
  var xs;
  if (It) {
    var _s = "oninput" in document;
    if (!_s) {
      var no = document.createElement("div");
      no.setAttribute("oninput", "return;"), _s = typeof no.oninput == "function";
    }
    xs = _s;
  } else xs = !1;
  Qc = xs && (!document.documentMode || 9 < document.documentMode);
}
function ro() {
  mr && (mr.detachEvent("onpropertychange", Vc), Cr = mr = null);
}
function Vc(e) {
  if (e.propertyName === "value" && ql(Cr)) {
    var t = [];
    Uc(t, Cr, e, Ha(e)), Sc(Sp, t);
  }
}
function Ep(e, t, n) {
  e === "focusin" ? (ro(), mr = t, Cr = n, mr.attachEvent("onpropertychange", Vc)) : e === "focusout" && ro();
}
function Cp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ql(Cr);
}
function Np(e, t) {
  if (e === "click") return ql(t);
}
function bp(e, t) {
  if (e === "input" || e === "change") return ql(t);
}
function Mp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var gt = typeof Object.is == "function" ? Object.is : Mp;
function Nr(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Fs.call(t, l) || !gt(e[l], t[l])) return !1;
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
function Hc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bc() {
  for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Sl(e.document);
  }
  return t;
}
function ei(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ip(e) {
  var t = Bc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ei(n)) {
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
var Tp = It && "documentMode" in document && 11 >= document.documentMode, En = null, la = null, hr = null, sa = !1;
function ao(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sa || En == null || En !== Sl(r) || (r = En, "selectionStart" in r && ei(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && Nr(hr, r) || (hr = r, r = Il(la, "onSelect"), 0 < r.length && (t = new Xa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = En)));
}
function Zr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Cn = { animationend: Zr("Animation", "AnimationEnd"), animationiteration: Zr("Animation", "AnimationIteration"), animationstart: Zr("Animation", "AnimationStart"), transitionend: Zr("Transition", "TransitionEnd") }, ks = {}, Kc = {};
It && (Kc = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
function Xl(e) {
  if (ks[e]) return ks[e];
  if (!Cn[e]) return e;
  var t = Cn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kc) return ks[e] = t[n];
  return e;
}
var Gc = Xl("animationend"), Yc = Xl("animationiteration"), qc = Xl("animationstart"), Xc = Xl("transitionend"), Jc = /* @__PURE__ */ new Map(), io = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tn(e, t) {
  Jc.set(e, t), yn(t, [e]);
}
for (var Ss = 0; Ss < io.length; Ss++) {
  var js = io[Ss], Lp = js.toLowerCase(), Pp = js[0].toUpperCase() + js.slice(1);
  tn(Lp, "on" + Pp);
}
tn(Gc, "onAnimationEnd");
tn(Yc, "onAnimationIteration");
tn(qc, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(Xc, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function oo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lf(r, t, void 0, e), e.currentTarget = null;
}
function Zc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], c = o.instance, u = o.currentTarget;
        if (o = o.listener, c !== a && l.isPropagationStopped()) break e;
        oo(l, o, u), a = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], c = o.instance, u = o.currentTarget, o = o.listener, c !== a && l.isPropagationStopped()) break e;
        oo(l, o, u), a = c;
      }
    }
  }
  if (El) throw e = ea, El = !1, ea = null, e;
}
function pe(e, t) {
  var n = t[ua];
  n === void 0 && (n = t[ua] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (eu(t, e, 2, !1), n.add(r));
}
function Es(e, t, n) {
  var r = 0;
  t && (r |= 4), eu(n, e, r, t);
}
var el = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[el]) {
    e[el] = !0, ic.forEach(function(n) {
      n !== "selectionchange" && (Dp.has(n) || Es(n, !1, e), Es(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[el] || (t[el] = !0, Es("selectionchange", !1, t));
  }
}
function eu(e, t, n, r) {
  switch (Ac(t)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Yf;
      break;
    default:
      l = Ya;
  }
  n = l.bind(null, t, n, e), l = void 0, !Zs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Cs(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var c = i.tag;
        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        i = i.return;
      }
      for (; o !== null; ) {
        if (i = an(o), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = a = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Sc(function() {
    var u = a, g = Ha(n), w = [];
    e: {
      var x = Jc.get(e);
      if (x !== void 0) {
        var v = Xa, y = e;
        switch (e) {
          case "keypress":
            if (pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = up;
            break;
          case "focusin":
            y = "focus", v = ws;
            break;
          case "focusout":
            y = "blur", v = ws;
            break;
          case "beforeblur":
          case "afterblur":
            v = ws;
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
            v = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = pp;
            break;
          case Gc:
          case Yc:
          case qc:
            v = tp;
            break;
          case Xc:
            v = hp;
            break;
          case "scroll":
            v = qf;
            break;
          case "wheel":
            v = yp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = rp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ji;
        }
        var _ = (t & 4) !== 0, E = !_ && e === "scroll", d = _ ? x !== null ? x + "Capture" : null : x;
        _ = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var p = h.stateNode;
          if (h.tag === 5 && p !== null && (h = p, d !== null && (p = kr(f, d), p != null && _.push(Mr(f, p, h)))), E) break;
          f = f.return;
        }
        0 < _.length && (x = new v(x, y, null, n, g), w.push({ event: x, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", x && n !== Xs && (y = n.relatedTarget || n.fromElement) && (an(y) || y[Tt])) break e;
        if ((v || x) && (x = g.window === g ? g : (x = g.ownerDocument) ? x.defaultView || x.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = u, y = y ? an(y) : null, y !== null && (E = vn(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = u), v !== y)) {
          if (_ = qi, p = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ji, p = "onPointerLeave", d = "onPointerEnter", f = "pointer"), E = v == null ? x : Nn(v), h = y == null ? x : Nn(y), x = new _(p, f + "leave", v, n, g), x.target = E, x.relatedTarget = h, p = null, an(g) === u && (_ = new _(d, f + "enter", y, n, g), _.target = h, _.relatedTarget = E, p = _), E = p, v && y) t: {
            for (_ = v, d = y, f = 0, h = _; h; h = _n(h)) f++;
            for (h = 0, p = d; p; p = _n(p)) h++;
            for (; 0 < f - h; ) _ = _n(_), f--;
            for (; 0 < h - f; ) d = _n(d), h--;
            for (; f--; ) {
              if (_ === d || d !== null && _ === d.alternate) break t;
              _ = _n(_), d = _n(d);
            }
            _ = null;
          }
          else _ = null;
          v !== null && co(w, x, v, _, !1), y !== null && E !== null && co(w, E, y, _, !0);
        }
      }
      e: {
        if (x = u ? Nn(u) : window, v = x.nodeName && x.nodeName.toLowerCase(), v === "select" || v === "input" && x.type === "file") var k = jp;
        else if (to(x)) if (Qc) k = bp;
        else {
          k = Cp;
          var j = Ep;
        }
        else (v = x.nodeName) && v.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (k = Np);
        if (k && (k = k(e, u))) {
          Uc(w, k, n, g);
          break e;
        }
        j && j(e, x, u), e === "focusout" && (j = x._wrapperState) && j.controlled && x.type === "number" && Bs(x, "number", x.value);
      }
      switch (j = u ? Nn(u) : window, e) {
        case "focusin":
          (to(j) || j.contentEditable === "true") && (En = j, la = u, hr = null);
          break;
        case "focusout":
          hr = la = En = null;
          break;
        case "mousedown":
          sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sa = !1, ao(w, n, g);
          break;
        case "selectionchange":
          if (Tp) break;
        case "keydown":
        case "keyup":
          ao(w, n, g);
      }
      var S;
      if (Za) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else jn ? Wc(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Fc && n.locale !== "ko" && (jn || b !== "onCompositionStart" ? b === "onCompositionEnd" && jn && (S = Oc()) : (Ut = g, qa = "value" in Ut ? Ut.value : Ut.textContent, jn = !0)), j = Il(u, b), 0 < j.length && (b = new Xi(b, e, null, n, g), w.push({ event: b, listeners: j }), S ? b.data = S : (S = $c(n), S !== null && (b.data = S)))), (S = wp ? xp(e, n) : _p(e, n)) && (u = Il(u, "onBeforeInput"), 0 < u.length && (g = new Xi("onBeforeInput", "beforeinput", null, n, g), w.push({ event: g, listeners: u }), g.data = S));
    }
    Zc(w, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = kr(e, n), a != null && r.unshift(Mr(e, a, l)), a = kr(e, t), a != null && r.push(Mr(e, a, l))), e = e.return;
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function co(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, c = o.alternate, u = o.stateNode;
    if (c !== null && c === r) break;
    o.tag === 5 && u !== null && (o = u, l ? (c = kr(n, a), c != null && i.unshift(Mr(n, c, o))) : l || (c = kr(n, a), c != null && i.push(Mr(n, c, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Rp = /\r\n?/g, zp = /\u0000|\uFFFD/g;
function uo(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rp, `
`).replace(zp, "");
}
function tl(e, t, n) {
  if (t = uo(t), uo(e) !== t && n) throw Error(P(425));
}
function Tl() {
}
var aa = null, ia = null;
function oa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ca = typeof setTimeout == "function" ? setTimeout : void 0, Ap = typeof clearTimeout == "function" ? clearTimeout : void 0, fo = typeof Promise == "function" ? Promise : void 0, Op = typeof queueMicrotask == "function" ? queueMicrotask : typeof fo < "u" ? function(e) {
  return fo.resolve(null).then(e).catch(Fp);
} : ca;
function Fp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ns(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Er(t);
}
function Kt(e) {
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
var Xn = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Xn, Ir = "__reactProps$" + Xn, Tt = "__reactContainer$" + Xn, ua = "__reactEvents$" + Xn, Wp = "__reactListeners$" + Xn, $p = "__reactHandles$" + Xn;
function an(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[_t]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = po(e); e !== null; ) {
        if (n = e[_t]) return n;
        e = po(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $r(e) {
  return e = e[_t] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Jl(e) {
  return e[Ir] || null;
}
var da = [], bn = -1;
function nn(e) {
  return { current: e };
}
function me(e) {
  0 > bn || (e.current = da[bn], da[bn] = null, bn--);
}
function fe(e, t) {
  bn++, da[bn] = e.current, e.current = t;
}
var Zt = {}, Ae = nn(Zt), Ve = nn(!1), fn = Zt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
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
  me(Ve), me(Ae);
}
function mo(e, t, n) {
  if (Ae.current !== Zt) throw Error(P(168));
  fe(Ae, t), fe(Ve, n);
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Ef(e) || "Unknown", l));
  return we({}, n, r);
}
function Pl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, fn = Ae.current, fe(Ae, e), fe(Ve, Ve.current), !0;
}
function ho(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = tu(e, t, fn), r.__reactInternalMemoizedMergedChildContext = e, me(Ve), me(Ae), fe(Ae, e)) : me(Ve), fe(Ve, n);
}
var Ct = null, Zl = !1, bs = !1;
function nu(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function Up(e) {
  Zl = !0, nu(e);
}
function rn() {
  if (!bs && Ct !== null) {
    bs = !0;
    var e = 0, t = ce;
    try {
      var n = Ct;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ct = null, Zl = !1;
    } catch (l) {
      throw Ct !== null && (Ct = Ct.slice(e + 1)), Nc(Ba, rn), l;
    } finally {
      ce = t, bs = !1;
    }
  }
  return null;
}
var Mn = [], In = 0, Dl = null, Rl = 0, tt = [], nt = 0, pn = null, Nt = 1, bt = "";
function ln(e, t) {
  Mn[In++] = Rl, Mn[In++] = Dl, Dl = e, Rl = t;
}
function ru(e, t, n) {
  tt[nt++] = Nt, tt[nt++] = bt, tt[nt++] = pn, pn = e;
  var r = Nt;
  e = bt;
  var l = 32 - mt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - mt(t) + l;
  if (30 < a) {
    var i = l - l % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Nt = 1 << 32 - mt(t) + l | n << l | r, bt = a + e;
  } else Nt = 1 << a | n << l | r, bt = e;
}
function ti(e) {
  e.return !== null && (ln(e, 1), ru(e, 1, 0));
}
function ni(e) {
  for (; e === Dl; ) Dl = Mn[--In], Mn[In] = null, Rl = Mn[--In], Mn[In] = null;
  for (; e === pn; ) pn = tt[--nt], tt[nt] = null, bt = tt[--nt], tt[nt] = null, Nt = tt[--nt], tt[nt] = null;
}
var qe = null, Ye = null, ge = !1, ft = null;
function lu(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function go(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ye = Kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: Nt, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function fa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pa(e) {
  if (ge) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!go(e, t)) {
        if (fa(e)) throw Error(P(418));
        t = Kt(n.nextSibling);
        var r = qe;
        t && go(e, t) ? lu(r, n) : (e.flags = e.flags & -4097 | 2, ge = !1, qe = e);
      }
    } else {
      if (fa(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, ge = !1, qe = e;
    }
  }
}
function yo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function nl(e) {
  if (e !== qe) return !1;
  if (!ge) return yo(e), ge = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (fa(e)) throw su(), Error(P(418));
    for (; t; ) lu(e, t), t = Kt(t.nextSibling);
  }
  if (yo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = qe ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function su() {
  for (var e = Ye; e; ) e = Kt(e.nextSibling);
}
function Un() {
  Ye = qe = null, ge = !1;
}
function ri(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var Qp = Dt.ReactCurrentBatchConfig;
function lr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var o = l.refs;
        i === null ? delete o[a] : o[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function rl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function vo(e) {
  var t = e._init;
  return t(e._payload);
}
function au(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [f], d.flags |= 16) : h.push(f);
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
    return d = Xt(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < f ? (d.flags |= 2, f) : h) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, h, p) {
    return f === null || f.tag !== 6 ? (f = Rs(h, d.mode, p), f.return = d, f) : (f = l(f, h), f.return = d, f);
  }
  function c(d, f, h, p) {
    var k = h.type;
    return k === Sn ? g(d, f, h.props.children, p, h.key) : f !== null && (f.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ot && vo(k) === f.type) ? (p = l(f, h.props), p.ref = lr(d, f, h), p.return = d, p) : (p = xl(h.type, h.key, h.props, null, d.mode, p), p.ref = lr(d, f, h), p.return = d, p);
  }
  function u(d, f, h, p) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = zs(h, d.mode, p), f.return = d, f) : (f = l(f, h.children || []), f.return = d, f);
  }
  function g(d, f, h, p, k) {
    return f === null || f.tag !== 7 ? (f = dn(h, d.mode, p, k), f.return = d, f) : (f = l(f, h), f.return = d, f);
  }
  function w(d, f, h) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Rs("" + f, d.mode, h), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Br:
          return h = xl(f.type, f.key, f.props, null, d.mode, h), h.ref = lr(d, null, f), h.return = d, h;
        case kn:
          return f = zs(f, d.mode, h), f.return = d, f;
        case Ot:
          var p = f._init;
          return w(d, p(f._payload), h);
      }
      if (or(f) || Zn(f)) return f = dn(f, d.mode, h, null), f.return = d, f;
      rl(d, f);
    }
    return null;
  }
  function x(d, f, h, p) {
    var k = f !== null ? f.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : o(d, f, "" + h, p);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Br:
          return h.key === k ? c(d, f, h, p) : null;
        case kn:
          return h.key === k ? u(d, f, h, p) : null;
        case Ot:
          return k = h._init, x(
            d,
            f,
            k(h._payload),
            p
          );
      }
      if (or(h) || Zn(h)) return k !== null ? null : g(d, f, h, p, null);
      rl(d, h);
    }
    return null;
  }
  function v(d, f, h, p, k) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return d = d.get(h) || null, o(f, d, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Br:
          return d = d.get(p.key === null ? h : p.key) || null, c(f, d, p, k);
        case kn:
          return d = d.get(p.key === null ? h : p.key) || null, u(f, d, p, k);
        case Ot:
          var j = p._init;
          return v(d, f, h, j(p._payload), k);
      }
      if (or(p) || Zn(p)) return d = d.get(h) || null, g(f, d, p, k, null);
      rl(f, p);
    }
    return null;
  }
  function y(d, f, h, p) {
    for (var k = null, j = null, S = f, b = f = 0, F = null; S !== null && b < h.length; b++) {
      S.index > b ? (F = S, S = null) : F = S.sibling;
      var M = x(d, S, h[b], p);
      if (M === null) {
        S === null && (S = F);
        break;
      }
      e && S && M.alternate === null && t(d, S), f = a(M, f, b), j === null ? k = M : j.sibling = M, j = M, S = F;
    }
    if (b === h.length) return n(d, S), ge && ln(d, b), k;
    if (S === null) {
      for (; b < h.length; b++) S = w(d, h[b], p), S !== null && (f = a(S, f, b), j === null ? k = S : j.sibling = S, j = S);
      return ge && ln(d, b), k;
    }
    for (S = r(d, S); b < h.length; b++) F = v(S, d, b, h[b], p), F !== null && (e && F.alternate !== null && S.delete(F.key === null ? b : F.key), f = a(F, f, b), j === null ? k = F : j.sibling = F, j = F);
    return e && S.forEach(function(O) {
      return t(d, O);
    }), ge && ln(d, b), k;
  }
  function _(d, f, h, p) {
    var k = Zn(h);
    if (typeof k != "function") throw Error(P(150));
    if (h = k.call(h), h == null) throw Error(P(151));
    for (var j = k = null, S = f, b = f = 0, F = null, M = h.next(); S !== null && !M.done; b++, M = h.next()) {
      S.index > b ? (F = S, S = null) : F = S.sibling;
      var O = x(d, S, M.value, p);
      if (O === null) {
        S === null && (S = F);
        break;
      }
      e && S && O.alternate === null && t(d, S), f = a(O, f, b), j === null ? k = O : j.sibling = O, j = O, S = F;
    }
    if (M.done) return n(
      d,
      S
    ), ge && ln(d, b), k;
    if (S === null) {
      for (; !M.done; b++, M = h.next()) M = w(d, M.value, p), M !== null && (f = a(M, f, b), j === null ? k = M : j.sibling = M, j = M);
      return ge && ln(d, b), k;
    }
    for (S = r(d, S); !M.done; b++, M = h.next()) M = v(S, d, b, M.value, p), M !== null && (e && M.alternate !== null && S.delete(M.key === null ? b : M.key), f = a(M, f, b), j === null ? k = M : j.sibling = M, j = M);
    return e && S.forEach(function(B) {
      return t(d, B);
    }), ge && ln(d, b), k;
  }
  function E(d, f, h, p) {
    if (typeof h == "object" && h !== null && h.type === Sn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Br:
          e: {
            for (var k = h.key, j = f; j !== null; ) {
              if (j.key === k) {
                if (k = h.type, k === Sn) {
                  if (j.tag === 7) {
                    n(d, j.sibling), f = l(j, h.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (j.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ot && vo(k) === j.type) {
                  n(d, j.sibling), f = l(j, h.props), f.ref = lr(d, j, h), f.return = d, d = f;
                  break e;
                }
                n(d, j);
                break;
              } else t(d, j);
              j = j.sibling;
            }
            h.type === Sn ? (f = dn(h.props.children, d.mode, p, h.key), f.return = d, d = f) : (p = xl(h.type, h.key, h.props, null, d.mode, p), p.ref = lr(d, f, h), p.return = d, d = p);
          }
          return i(d);
        case kn:
          e: {
            for (j = h.key; f !== null; ) {
              if (f.key === j) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                n(d, f.sibling), f = l(f, h.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = zs(h, d.mode, p), f.return = d, d = f;
          }
          return i(d);
        case Ot:
          return j = h._init, E(d, f, j(h._payload), p);
      }
      if (or(h)) return y(d, f, h, p);
      if (Zn(h)) return _(d, f, h, p);
      rl(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, h), f.return = d, d = f) : (n(d, f), f = Rs(h, d.mode, p), f.return = d, d = f), i(d)) : n(d, f);
  }
  return E;
}
var Qn = au(!0), iu = au(!1), zl = nn(null), Al = null, Tn = null, li = null;
function si() {
  li = Tn = Al = null;
}
function ai(e) {
  var t = zl.current;
  me(zl), e._currentValue = t;
}
function ma(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function On(e, t) {
  Al = e, li = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0), e.firstContext = null);
}
function st(e) {
  var t = e._currentValue;
  if (li !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
    if (Al === null) throw Error(P(308));
    Tn = e, Al.dependencies = { lanes: 0, firstContext: e };
  } else Tn = Tn.next = e;
  return t;
}
var on = null;
function ii(e) {
  on === null ? on = [e] : on.push(e);
}
function ou(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ii(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Lt(e, r);
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function oi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function cu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ie & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ii(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Lt(e, n);
}
function ml(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
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
function Ol(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var a = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var c = o, u = c.next;
    c.next = null, i === null ? a = u : i.next = u, i = c;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, o = g.lastBaseUpdate, o !== i && (o === null ? g.firstBaseUpdate = u : o.next = u, g.lastBaseUpdate = c));
  }
  if (a !== null) {
    var w = l.baseState;
    i = 0, g = u = c = null, o = a;
    do {
      var x = o.lane, v = o.eventTime;
      if ((r & x) === x) {
        g !== null && (g = g.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var y = e, _ = o;
          switch (x = t, v = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                w = y.call(v, w, x);
                break e;
              }
              w = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, x = typeof y == "function" ? y.call(v, w, x) : y, x == null) break e;
              w = we({}, w, x);
              break e;
            case 2:
              Ft = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, x = l.effects, x === null ? l.effects = [o] : x.push(o));
      } else v = { eventTime: v, lane: x, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, g === null ? (u = g = v, c = w) : g = g.next = v, i |= x;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        x = o, o = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (c = w), l.baseState = c, l.firstBaseUpdate = u, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    hn |= i, e.lanes = i, e.memoizedState = w;
  }
}
function xo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
      l.call(r);
    }
  }
}
var Ur = {}, St = nn(Ur), Tr = nn(Ur), Lr = nn(Ur);
function cn(e) {
  if (e === Ur) throw Error(P(174));
  return e;
}
function ci(e, t) {
  switch (fe(Lr, t), fe(Tr, e), fe(St, Ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gs(t, e);
  }
  me(St), fe(St, t);
}
function Vn() {
  me(St), me(Tr), me(Lr);
}
function uu(e) {
  cn(Lr.current);
  var t = cn(St.current), n = Gs(t, e.type);
  t !== n && (fe(Tr, e), fe(St, n));
}
function ui(e) {
  Tr.current === e && (me(St), me(Tr));
}
var ye = nn(0);
function Fl(e) {
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
var Ms = [];
function di() {
  for (var e = 0; e < Ms.length; e++) Ms[e]._workInProgressVersionPrimary = null;
  Ms.length = 0;
}
var hl = Dt.ReactCurrentDispatcher, Is = Dt.ReactCurrentBatchConfig, mn = 0, ve = null, Ne = null, Me = null, Wl = !1, gr = !1, Pr = 0, Vp = 0;
function De() {
  throw Error(P(321));
}
function fi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
  return !0;
}
function pi(e, t, n, r, l, a) {
  if (mn = a, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hl.current = e === null || e.memoizedState === null ? Gp : Yp, e = n(r, l), gr) {
    a = 0;
    do {
      if (gr = !1, Pr = 0, 25 <= a) throw Error(P(301));
      a += 1, Me = Ne = null, t.updateQueue = null, hl.current = qp, e = n(r, l);
    } while (gr);
  }
  if (hl.current = $l, t = Ne !== null && Ne.next !== null, mn = 0, Me = Ne = ve = null, Wl = !1, t) throw Error(P(300));
  return e;
}
function mi() {
  var e = Pr !== 0;
  return Pr = 0, e;
}
function xt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? ve.memoizedState = Me = e : Me = Me.next = e, Me;
}
function at() {
  if (Ne === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Me === null ? ve.memoizedState : Me.next;
  if (t !== null) Me = t, Ne = e;
  else {
    if (e === null) throw Error(P(310));
    Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, Me === null ? ve.memoizedState = Me = e : Me = Me.next = e;
  }
  return Me;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ts(e) {
  var t = at(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Ne, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = a.next, a.next = i;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var o = i = null, c = null, u = a;
    do {
      var g = u.lane;
      if ((mn & g) === g) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var w = {
          lane: g,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (o = c = w, i = r) : c = c.next = w, ve.lanes |= g, hn |= g;
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? i = r : c.next = o, gt(r, t.memoizedState) || (Qe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, ve.lanes |= a, hn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ls(e) {
  var t = at(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      a = e(a, i.action), i = i.next;
    while (i !== l);
    gt(a, t.memoizedState) || (Qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function du() {
}
function fu(e, t) {
  var n = ve, r = at(), l = t(), a = !gt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Qe = !0), r = r.queue, hi(hu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Me !== null && Me.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, mu.bind(null, n, r, l, t), void 0, null), Ie === null) throw Error(P(349));
    mn & 30 || pu(n, t, l);
  }
  return l;
}
function pu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function mu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gu(t) && yu(e);
}
function hu(e, t, n) {
  return n(function() {
    gu(t) && yu(e);
  });
}
function gu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function yu(e) {
  var t = Lt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function _o(e) {
  var t = xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kp.bind(null, ve, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vu() {
  return at().memoizedState;
}
function gl(e, t, n, r) {
  var l = xt();
  ve.flags |= e, l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function es(e, t, n, r) {
  var l = at();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ne !== null) {
    var i = Ne.memoizedState;
    if (a = i.destroy, r !== null && fi(r, i.deps)) {
      l.memoizedState = Rr(t, n, a, r);
      return;
    }
  }
  ve.flags |= e, l.memoizedState = Rr(1 | t, n, a, r);
}
function ko(e, t) {
  return gl(8390656, 8, e, t);
}
function hi(e, t) {
  return es(2048, 8, e, t);
}
function wu(e, t) {
  return es(4, 2, e, t);
}
function xu(e, t) {
  return es(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, es(4, 4, _u.bind(null, t, e), n);
}
function gi() {
}
function Su(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ju(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Eu(e, t, n) {
  return mn & 21 ? (gt(n, t) || (n = Ic(), ve.lanes |= n, hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Qe = !0), e.memoizedState = n);
}
function Hp(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Is.transition;
  Is.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, Is.transition = r;
  }
}
function Cu() {
  return at().memoizedState;
}
function Bp(e, t, n) {
  var r = qt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nu(e)) bu(t, n);
  else if (n = ou(e, t, n, r), n !== null) {
    var l = Fe();
    ht(n, e, r, l), Mu(n, t, r);
  }
}
function Kp(e, t, n) {
  var r = qt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nu(e)) bu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var i = t.lastRenderedState, o = a(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, gt(o, i)) {
        var c = t.interleaved;
        c === null ? (l.next = l, ii(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ou(e, t, l, r), n !== null && (l = Fe(), ht(n, e, r, l), Mu(n, t, r));
  }
}
function Nu(e) {
  var t = e.alternate;
  return e === ve || t !== null && t === ve;
}
function bu(e, t) {
  gr = Wl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ka(e, n);
  }
}
var $l = { readContext: st, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, Gp = { readContext: st, useCallback: function(e, t) {
  return xt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: st, useEffect: ko, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gl(
    4194308,
    4,
    _u.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return gl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return gl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = xt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = xt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Bp.bind(null, ve, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = xt();
  return e = { current: e }, t.memoizedState = e;
}, useState: _o, useDebugValue: gi, useDeferredValue: function(e) {
  return xt().memoizedState = e;
}, useTransition: function() {
  var e = _o(!1), t = e[0];
  return e = Hp.bind(null, e[1]), xt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ve, l = xt();
  if (ge) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), Ie === null) throw Error(P(349));
    mn & 30 || pu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, ko(hu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Rr(9, mu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = xt(), t = Ie.identifierPrefix;
  if (ge) {
    var n = bt, r = Nt;
    n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Vp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Yp = {
  readContext: st,
  useCallback: Su,
  useContext: st,
  useEffect: hi,
  useImperativeHandle: ku,
  useInsertionEffect: wu,
  useLayoutEffect: xu,
  useMemo: ju,
  useReducer: Ts,
  useRef: vu,
  useState: function() {
    return Ts(Dr);
  },
  useDebugValue: gi,
  useDeferredValue: function(e) {
    var t = at();
    return Eu(t, Ne.memoizedState, e);
  },
  useTransition: function() {
    var e = Ts(Dr)[0], t = at().memoizedState;
    return [e, t];
  },
  useMutableSource: du,
  useSyncExternalStore: fu,
  useId: Cu,
  unstable_isNewReconciler: !1
}, qp = { readContext: st, useCallback: Su, useContext: st, useEffect: hi, useImperativeHandle: ku, useInsertionEffect: wu, useLayoutEffect: xu, useMemo: ju, useReducer: Ls, useRef: vu, useState: function() {
  return Ls(Dr);
}, useDebugValue: gi, useDeferredValue: function(e) {
  var t = at();
  return Ne === null ? t.memoizedState = e : Eu(t, Ne.memoizedState, e);
}, useTransition: function() {
  var e = Ls(Dr)[0], t = at().memoizedState;
  return [e, t];
}, useMutableSource: du, useSyncExternalStore: fu, useId: Cu, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = we({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ha(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : we({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ts = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), l = qt(e), a = Mt(r, l);
  a.payload = t, n != null && (a.callback = n), t = Gt(e, a, l), t !== null && (ht(t, e, l, r), ml(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), l = qt(e), a = Mt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Gt(e, a, l), t !== null && (ht(t, e, l, r), ml(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Fe(), r = qt(e), l = Mt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Gt(e, l, r), t !== null && (ht(t, e, r, n), ml(t, e, r));
} };
function So(e, t, n, r, l, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(l, a) : !0;
}
function Iu(e, t, n) {
  var r = !1, l = Zt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = st(a) : (l = He(t) ? fn : Ae.current, r = t.contextTypes, a = (r = r != null) ? $n(e, l) : Zt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ts, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function jo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ts.enqueueReplaceState(t, t.state, null);
}
function ga(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, oi(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = st(a) : (a = He(t) ? fn : Ae.current, l.context = $n(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ha(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ts.enqueueReplaceState(l, l.state, null), Ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += jf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ps(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ya(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Xp = typeof WeakMap == "function" ? WeakMap : Map;
function Tu(e, t, n) {
  n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ql || (Ql = !0, Na = r), ya(e, t);
  }, n;
}
function Lu(e, t, n) {
  n = Mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ya(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ya(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Eo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = dm.bind(null, e, t, n), t.then(e, e));
}
function Co(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function No(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e);
}
var Jp = Dt.ReactCurrentOwner, Qe = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? iu(t, null, n, r) : Qn(t, e.child, n, r);
}
function bo(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return On(t, l), r = pi(e, t, n, r, a, l), n = mi(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (ge && n && ti(t), t.flags |= 1, Oe(e, t, r, l), t.child);
}
function Mo(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ji(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Pu(e, t, a, r, l)) : (e = xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var i = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Nr, n(i, r) && e.ref === t.ref) return Pt(e, t, l);
  }
  return t.flags |= 1, e = Xt(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Nr(a, r) && e.ref === t.ref) if (Qe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Qe = !0);
    else return t.lanes = e.lanes, Pt(e, t, l);
  }
  return va(e, t, n, r, l);
}
function Du(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Pn, Ge), Ge |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Pn, Ge), Ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, fe(Pn, Ge), Ge |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, fe(Pn, Ge), Ge |= r;
  return Oe(e, t, l, n), t.child;
}
function Ru(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function va(e, t, n, r, l) {
  var a = He(n) ? fn : Ae.current;
  return a = $n(t, a), On(t, l), n = pi(e, t, n, r, a, l), r = mi(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (ge && r && ti(t), t.flags |= 1, Oe(e, t, n, l), t.child);
}
function Io(e, t, n, r, l) {
  if (He(n)) {
    var a = !0;
    Pl(t);
  } else a = !1;
  if (On(t, l), t.stateNode === null) yl(e, t), Iu(t, n, r), ga(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var c = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = st(u) : (u = He(n) ? fn : Ae.current, u = $n(t, u));
    var g = n.getDerivedStateFromProps, w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || c !== u) && jo(t, i, r, u), Ft = !1;
    var x = t.memoizedState;
    i.state = x, Ol(t, r, i, l), c = t.memoizedState, o !== r || x !== c || Ve.current || Ft ? (typeof g == "function" && (ha(t, n, g, r), c = t.memoizedState), (o = Ft || So(t, n, o, r, x, c, u)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, cu(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : ut(t.type, o), i.props = u, w = t.pendingProps, x = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = st(c) : (c = He(n) ? fn : Ae.current, c = $n(t, c));
    var v = n.getDerivedStateFromProps;
    (g = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== w || x !== c) && jo(t, i, r, c), Ft = !1, x = t.memoizedState, i.state = x, Ol(t, r, i, l);
    var y = t.memoizedState;
    o !== w || x !== y || Ve.current || Ft ? (typeof v == "function" && (ha(t, n, v, r), y = t.memoizedState), (u = Ft || So(t, n, u, r, x, y, c) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return wa(e, t, n, r, a, l);
}
function wa(e, t, n, r, l, a) {
  Ru(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ho(t, n, !1), Pt(e, t, a);
  r = t.stateNode, Jp.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Qn(t, e.child, null, a), t.child = Qn(t, null, o, a)) : Oe(e, t, o, a), t.memoizedState = r.state, l && ho(t, n, !0), t.child;
}
function zu(e) {
  var t = e.stateNode;
  t.pendingContext ? mo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mo(e, t.context, !1), ci(e, t.containerInfo);
}
function To(e, t, n, r, l) {
  return Un(), ri(l), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function _a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Au(e, t, n) {
  var r = t.pendingProps, l = ye.current, a = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), fe(ye, l & 1), e === null)
    return pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = ls(i, r, 0, null), e = dn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = _a(n), t.memoizedState = xa, e) : yi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Zp(e, t, i, r, o, l, n);
  if (a) {
    a = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? a = Xt(o, a) : (a = dn(a, i, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, i = e.child.memoizedState, i = i === null ? _a(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~n, t.memoizedState = xa, r;
  }
  return a = e.child, e = a.sibling, r = Xt(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function yi(e, t) {
  return t = ls({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ll(e, t, n, r) {
  return r !== null && ri(r), Qn(t, e.child, null, n), e = yi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zp(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ps(Error(P(422))), ll(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = ls({ mode: "visible", children: r.children }, l, 0, null), a = dn(a, l, i, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Qn(t, e.child, null, i), t.child.memoizedState = _a(i), t.memoizedState = xa, a);
  if (!(t.mode & 1)) return ll(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, a = Error(P(419)), r = Ps(a, r, void 0), ll(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, Qe || o) {
    if (r = Ie, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Lt(e, l), ht(r, e, l, -1));
    }
    return Si(), r = Ps(Error(P(421))), ll(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fm.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, Ye = Kt(l.nextSibling), qe = t, ge = !0, ft = null, e !== null && (tt[nt++] = Nt, tt[nt++] = bt, tt[nt++] = pn, Nt = e.id, bt = e.overflow, pn = t), t = yi(t, r.children), t.flags |= 4096, t);
}
function Lo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ma(e.return, t, n);
}
function Ds(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Ou(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Oe(e, t, r.children, n), r = ye.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lo(e, n, t);
      else if (e.tag === 19) Lo(e, n, t);
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
  if (fe(ye, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Fl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ds(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Fl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ds(t, !0, n, null, a);
      break;
    case "together":
      Ds(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function yl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function em(e, t, n) {
  switch (t.tag) {
    case 3:
      zu(t), Un();
      break;
    case 5:
      uu(t);
      break;
    case 1:
      He(t.type) && Pl(t);
      break;
    case 4:
      ci(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      fe(zl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(ye, ye.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Au(e, t, n) : (fe(ye, ye.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
      fe(ye, ye.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ou(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), fe(ye, ye.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Du(e, t, n);
  }
  return Pt(e, t, n);
}
var Fu, ka, Wu, $u;
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
ka = function() {
};
Wu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, cn(St.current);
    var a = null;
    switch (n) {
      case "input":
        l = Vs(e, l), r = Vs(e, r), a = [];
        break;
      case "select":
        l = we({}, l, { value: void 0 }), r = we({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Ks(e, l), r = Ks(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tl);
    }
    Ys(n, r);
    var i;
    n = null;
    for (u in l) if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null) if (u === "style") {
      var o = l[u];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (o = l != null ? l[u] : void 0, r.hasOwnProperty(u) && c !== o && (c != null || o != null)) if (u === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && o[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (a || (a = []), a.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, o = o ? o.__html : void 0, c != null && o !== c && (a = a || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xr.hasOwnProperty(u) ? (c != null && u === "onScroll" && pe("scroll", e), a || o === c || (a = [])) : (a = a || []).push(u, c));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$u = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!ge) switch (e.tailMode) {
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
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function tm(e, t, n) {
  var r = t.pendingProps;
  switch (ni(t), t.tag) {
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
      return Re(t), null;
    case 1:
      return He(t.type) && Ll(), Re(t), null;
    case 3:
      return r = t.stateNode, Vn(), me(Ve), me(Ae), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (nl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Ia(ft), ft = null))), ka(e, t), Re(t), null;
    case 5:
      ui(t);
      var l = cn(Lr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Re(t), null;
        }
        if (e = cn(St.current), nl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[_t] = t, r[Ir] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ur.length; l++) pe(ur[l], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe(
                "error",
                r
              ), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              Wi(r, a), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, pe("invalid", r);
              break;
            case "textarea":
              Ui(r, a), pe("invalid", r);
          }
          Ys(n, a), l = null;
          for (var i in a) if (a.hasOwnProperty(i)) {
            var o = a[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && tl(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && tl(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : xr.hasOwnProperty(i) && o != null && i === "onScroll" && pe("scroll", r);
          }
          switch (n) {
            case "input":
              Kr(r), $i(r, a, !0);
              break;
            case "textarea":
              Kr(r), Qi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[_t] = t, e[Ir] = r, Fu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = qs(n, r), n) {
              case "dialog":
                pe("cancel", e), pe("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < ur.length; l++) pe(ur[l], e);
                l = r;
                break;
              case "source":
                pe("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                pe(
                  "error",
                  e
                ), pe("load", e), l = r;
                break;
              case "details":
                pe("toggle", e), l = r;
                break;
              case "input":
                Wi(e, r), l = Vs(e, r), pe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = we({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                Ui(e, r), l = Ks(e, r), pe("invalid", e);
                break;
              default:
                l = r;
            }
            Ys(n, l), o = l;
            for (a in o) if (o.hasOwnProperty(a)) {
              var c = o[a];
              a === "style" ? vc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && gc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && _r(e, c) : typeof c == "number" && _r(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (xr.hasOwnProperty(a) ? c != null && a === "onScroll" && pe("scroll", e) : c != null && $a(e, a, c, i));
            }
            switch (n) {
              case "input":
                Kr(e), $i(e, r, !1);
                break;
              case "textarea":
                Kr(e), Qi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Dn(e, !!r.multiple, a, !1) : r.defaultValue != null && Dn(
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
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = cn(Lr.current), cn(St.current), nl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (a = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
            case 3:
              tl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && tl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
      }
      return Re(t), null;
    case 13:
      if (me(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ge && Ye !== null && t.mode & 1 && !(t.flags & 128)) su(), Un(), t.flags |= 98560, a = !1;
        else if (a = nl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(P(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(P(317));
            a[_t] = t;
          } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Re(t), a = !1;
        } else ft !== null && (Ia(ft), ft = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ye.current & 1 ? be === 0 && (be = 3) : Si())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
    case 4:
      return Vn(), ka(e, t), e === null && br(t.stateNode.containerInfo), Re(t), null;
    case 10:
      return ai(t.type._context), Re(t), null;
    case 17:
      return He(t.type) && Ll(), Re(t), null;
    case 19:
      if (me(ye), a = t.memoizedState, a === null) return Re(t), null;
      if (r = (t.flags & 128) !== 0, i = a.rendering, i === null) if (r) sr(a, !1);
      else {
        if (be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Fl(e), i !== null) {
            for (t.flags |= 128, sr(a, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return fe(ye, ye.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Se() > Bn && (t.flags |= 128, r = !0, sr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Fl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), sr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ge) return Re(t), null;
        } else 2 * Se() - a.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, sr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (n = a.last, n !== null ? n.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Se(), t.sibling = null, n = ye.current, fe(ye, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
    case 22:
    case 23:
      return ki(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function nm(e, t) {
  switch (ni(t), t.tag) {
    case 1:
      return He(t.type) && Ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vn(), me(Ve), me(Ae), di(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ui(t), null;
    case 13:
      if (me(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        Un();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return me(ye), null;
    case 4:
      return Vn(), null;
    case 10:
      return ai(t.type._context), null;
    case 22:
    case 23:
      return ki(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sl = !1, ze = !1, rm = typeof WeakSet == "function" ? WeakSet : Set, U = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    xe(e, t, r);
  }
  else n.current = null;
}
function Sa(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var Po = !1;
function lm(e, t) {
  if (aa = bl, e = Bc(), ei(e)) {
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
        var i = 0, o = -1, c = -1, u = 0, g = 0, w = e, x = null;
        t: for (; ; ) {
          for (var v; w !== n || l !== 0 && w.nodeType !== 3 || (o = i + l), w !== a || r !== 0 && w.nodeType !== 3 || (c = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (v = w.firstChild) !== null; )
            x = w, w = v;
          for (; ; ) {
            if (w === e) break t;
            if (x === n && ++u === l && (o = i), x === a && ++g === r && (c = i), (v = w.nextSibling) !== null) break;
            w = x, x = w.parentNode;
          }
          w = v;
        }
        n = o === -1 || c === -1 ? null : { start: o, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ia = { focusedElem: e, selectionRange: n }, bl = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
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
            var _ = y.memoizedProps, E = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : ut(t.type, _), E);
            d.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(P(163));
      }
    } catch (p) {
      xe(t, t.return, p);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, U = e;
      break;
    }
    U = t.return;
  }
  return y = Po, Po = !1, y;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Sa(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ns(e, t) {
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
function ja(e) {
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
  t !== null && (e.alternate = null, Uu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[Ir], delete t[ua], delete t[Wp], delete t[$p])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Do(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ea(e, t, n), e = e.sibling; e !== null; ) Ea(e, t, n), e = e.sibling;
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), e = e.sibling;
}
var Te = null, dt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Vu(e, t, n), n = n.sibling;
}
function Vu(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function") try {
    kt.onCommitFiberUnmount(Gl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || Ln(n, t);
    case 6:
      var r = Te, l = dt;
      Te = null, At(e, t, n), Te = r, dt = l, Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null && (dt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? Ns(e.parentNode, n) : e.nodeType === 1 && Ns(e, n), Er(e)) : Ns(Te, n.stateNode));
      break;
    case 4:
      r = Te, l = dt, Te = n.stateNode.containerInfo, dt = !0, At(e, t, n), Te = r, dt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && Sa(n, t, i), l = l.next;
        } while (l !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (!ze && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        xe(n, t, o);
      }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, At(e, t, n), ze = r) : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Ro(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rm()), t.forEach(function(r) {
      var l = pm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Te = o.stateNode, dt = !1;
            break e;
          case 3:
            Te = o.stateNode.containerInfo, dt = !0;
            break e;
          case 4:
            Te = o.stateNode.containerInfo, dt = !0;
            break e;
        }
        o = o.return;
      }
      if (Te === null) throw Error(P(160));
      Vu(a, i, l), Te = null, dt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (u) {
      xe(l, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hu(t, e), t = t.sibling;
}
function Hu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), wt(e), r & 4) {
        try {
          yr(3, e, e.return), ns(3, e);
        } catch (_) {
          xe(e, e.return, _);
        }
        try {
          yr(5, e, e.return);
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 1:
      ot(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (ot(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          _r(l, "");
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, i = n !== null ? n.memoizedProps : a, o = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          o === "input" && a.type === "radio" && a.name != null && pc(l, a), qs(o, i);
          var u = qs(o, a);
          for (i = 0; i < c.length; i += 2) {
            var g = c[i], w = c[i + 1];
            g === "style" ? vc(l, w) : g === "dangerouslySetInnerHTML" ? gc(l, w) : g === "children" ? _r(l, w) : $a(l, g, w, u);
          }
          switch (o) {
            case "input":
              Hs(l, a);
              break;
            case "textarea":
              mc(l, a);
              break;
            case "select":
              var x = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var v = a.value;
              v != null ? Dn(l, !!a.multiple, v, !1) : x !== !!a.multiple && (a.defaultValue != null ? Dn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Dn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Ir] = a;
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 6:
      if (ot(t, e), wt(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          xe(e, e.return, _);
        }
      }
      break;
    case 3:
      if (ot(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Er(t.containerInfo);
      } catch (_) {
        xe(e, e.return, _);
      }
      break;
    case 4:
      ot(t, e), wt(e);
      break;
    case 13:
      ot(t, e), wt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (xi = Se())), r & 4 && Ro(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (u = ze) || g, ot(t, e), ze = u) : ot(t, e), wt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !g && e.mode & 1) for (U = e, g = e.child; g !== null; ) {
          for (w = U = g; U !== null; ) {
            switch (x = U, v = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                yr(4, x, x.return);
                break;
              case 1:
                Ln(x, x.return);
                var y = x.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (_) {
                    xe(r, n, _);
                  }
                }
                break;
              case 5:
                Ln(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  Ao(w);
                  continue;
                }
            }
            v !== null ? (v.return = x, U = v) : Ao(w);
          }
          g = g.sibling;
        }
        e: for (g = null, w = e; ; ) {
          if (w.tag === 5) {
            if (g === null) {
              g = w;
              try {
                l = w.stateNode, u ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = w.stateNode, c = w.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, o.style.display = yc("display", i));
              } catch (_) {
                xe(e, e.return, _);
              }
            }
          } else if (w.tag === 6) {
            if (g === null) try {
              w.stateNode.nodeValue = u ? "" : w.memoizedProps;
            } catch (_) {
              xe(e, e.return, _);
            }
          } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
            w.child.return = w, w = w.child;
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            g === w && (g = null), w = w.return;
          }
          g === w && (g = null), w.sibling.return = w.return, w = w.sibling;
        }
      }
      break;
    case 19:
      ot(t, e), wt(e), r & 4 && Ro(e);
      break;
    case 21:
      break;
    default:
      ot(
        t,
        e
      ), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (_r(l, ""), r.flags &= -33);
          var a = Do(e);
          Ca(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Do(e);
          Ea(e, o, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (c) {
      xe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sm(e, t, n) {
  U = e, Bu(e);
}
function Bu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var l = U, a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || sl;
      if (!i) {
        var o = l.alternate, c = o !== null && o.memoizedState !== null || ze;
        o = sl;
        var u = ze;
        if (sl = i, (ze = c) && !u) for (U = l; U !== null; ) i = U, c = i.child, i.tag === 22 && i.memoizedState !== null ? Oo(l) : c !== null ? (c.return = i, U = c) : Oo(l);
        for (; a !== null; ) U = a, Bu(a), a = a.sibling;
        U = l, sl = o, ze = u;
      }
      zo(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, U = a) : zo(e);
  }
}
function zo(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || ns(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
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
                  var w = g.dehydrated;
                  w !== null && Er(w);
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
            throw Error(P(163));
        }
        ze || t.flags & 512 && ja(t);
      } catch (x) {
        xe(t, t.return, x);
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
function Ao(e) {
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
function Oo(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ns(4, t);
          } catch (c) {
            xe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              xe(t, l, c);
            }
          }
          var a = t.return;
          try {
            ja(t);
          } catch (c) {
            xe(t, a, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ja(t);
          } catch (c) {
            xe(t, i, c);
          }
      }
    } catch (c) {
      xe(t, t.return, c);
    }
    if (t === e) {
      U = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, U = o;
      break;
    }
    U = t.return;
  }
}
var am = Math.ceil, Ul = Dt.ReactCurrentDispatcher, vi = Dt.ReactCurrentOwner, lt = Dt.ReactCurrentBatchConfig, ie = 0, Ie = null, Ce = null, Le = 0, Ge = 0, Pn = nn(0), be = 0, zr = null, hn = 0, rs = 0, wi = 0, vr = null, Ue = null, xi = 0, Bn = 1 / 0, Et = null, Ql = !1, Na = null, Yt = null, al = !1, Qt = null, Vl = 0, wr = 0, ba = null, vl = -1, wl = 0;
function Fe() {
  return ie & 6 ? Se() : vl !== -1 ? vl : vl = Se();
}
function qt(e) {
  return e.mode & 1 ? ie & 2 && Le !== 0 ? Le & -Le : Qp.transition !== null ? (wl === 0 && (wl = Ic()), wl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ac(e.type)), e) : 1;
}
function ht(e, t, n, r) {
  if (50 < wr) throw wr = 0, ba = null, Error(P(185));
  Fr(e, n, r), (!(ie & 2) || e !== Ie) && (e === Ie && (!(ie & 2) && (rs |= n), be === 4 && $t(e, Le)), Be(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Bn = Se() + 500, Zl && rn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = Nl(e, e === Ie ? Le : 0);
  if (r === 0) n !== null && Bi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bi(n), t === 1) e.tag === 0 ? Up(Fo.bind(null, e)) : nu(Fo.bind(null, e)), Op(function() {
      !(ie & 6) && rn();
    }), n = null;
    else {
      switch (Tc(r)) {
        case 1:
          n = Ba;
          break;
        case 4:
          n = bc;
          break;
        case 16:
          n = Cl;
          break;
        case 536870912:
          n = Mc;
          break;
        default:
          n = Cl;
      }
      n = ed(n, Ku.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ku(e, t) {
  if (vl = -1, wl = 0, ie & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Nl(e, e === Ie ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Hl(e, r);
  else {
    t = r;
    var l = ie;
    ie |= 2;
    var a = Yu();
    (Ie !== e || Le !== t) && (Et = null, Bn = Se() + 500, un(e, t));
    do
      try {
        cm();
        break;
      } catch (o) {
        Gu(e, o);
      }
    while (!0);
    si(), Ul.current = a, ie = l, Ce !== null ? t = 0 : (Ie = null, Le = 0, t = be);
  }
  if (t !== 0) {
    if (t === 2 && (l = ta(e), l !== 0 && (r = l, t = Ma(e, l))), t === 1) throw n = zr, un(e, 0), $t(e, r), Be(e, Se()), n;
    if (t === 6) $t(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !im(l) && (t = Hl(e, r), t === 2 && (a = ta(e), a !== 0 && (r = a, t = Ma(e, a))), t === 1)) throw n = zr, un(e, 0), $t(e, r), Be(e, Se()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          sn(e, Ue, Et);
          break;
        case 3:
          if ($t(e, r), (r & 130023424) === r && (t = xi + 500 - Se(), 10 < t)) {
            if (Nl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ca(sn.bind(null, e, Ue, Et), t);
            break;
          }
          sn(e, Ue, Et);
          break;
        case 4:
          if ($t(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - mt(r);
            a = 1 << i, i = t[i], i > l && (l = i), r &= ~a;
          }
          if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * am(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ca(sn.bind(null, e, Ue, Et), r);
            break;
          }
          sn(e, Ue, Et);
          break;
        case 5:
          sn(e, Ue, Et);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Be(e, Se()), e.callbackNode === n ? Ku.bind(null, e) : null;
}
function Ma(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = Hl(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ia(t)), e;
}
function Ia(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!gt(a(), l)) return !1;
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
function $t(e, t) {
  for (t &= ~wi, t &= ~rs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - mt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Fo(e) {
  if (ie & 6) throw Error(P(327));
  Fn();
  var t = Nl(e, 0);
  if (!(t & 1)) return Be(e, Se()), null;
  var n = Hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ta(e);
    r !== 0 && (t = r, n = Ma(e, r));
  }
  if (n === 1) throw n = zr, un(e, 0), $t(e, t), Be(e, Se()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Ue, Et), Be(e, Se()), null;
}
function _i(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Bn = Se() + 500, Zl && rn());
  }
}
function gn(e) {
  Qt !== null && Qt.tag === 0 && !(ie & 6) && Fn();
  var t = ie;
  ie |= 1;
  var n = lt.transition, r = ce;
  try {
    if (lt.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, lt.transition = n, ie = t, !(ie & 6) && rn();
  }
}
function ki() {
  Ge = Pn.current, me(Pn);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ap(n)), Ce !== null) for (n = Ce.return; n !== null; ) {
    var r = n;
    switch (ni(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ll();
        break;
      case 3:
        Vn(), me(Ve), me(Ae), di();
        break;
      case 5:
        ui(r);
        break;
      case 4:
        Vn();
        break;
      case 13:
        me(ye);
        break;
      case 19:
        me(ye);
        break;
      case 10:
        ai(r.type._context);
        break;
      case 22:
      case 23:
        ki();
    }
    n = n.return;
  }
  if (Ie = e, Ce = e = Xt(e.current, null), Le = Ge = t, be = 0, zr = null, wi = rs = hn = 0, Ue = vr = null, on !== null) {
    for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var i = a.next;
        a.next = l, r.next = i;
      }
      n.pending = r;
    }
    on = null;
  }
  return e;
}
function Gu(e, t) {
  do {
    var n = Ce;
    try {
      if (si(), hl.current = $l, Wl) {
        for (var r = ve.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Wl = !1;
      }
      if (mn = 0, Me = Ne = ve = null, gr = !1, Pr = 0, vi.current = null, n === null || n.return === null) {
        be = 1, zr = t, Ce = null;
        break;
      }
      e: {
        var a = e, i = n.return, o = n, c = t;
        if (t = Le, o.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, g = o, w = g.tag;
          if (!(g.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var x = g.alternate;
            x ? (g.updateQueue = x.updateQueue, g.memoizedState = x.memoizedState, g.lanes = x.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var v = Co(i);
          if (v !== null) {
            v.flags &= -257, No(v, i, o, a, t), v.mode & 1 && Eo(a, u, t), t = v, c = u;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Eo(a, u, t), Si();
              break e;
            }
            c = Error(P(426));
          }
        } else if (ge && o.mode & 1) {
          var E = Co(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), No(E, i, o, a, t), ri(Hn(c, o));
            break e;
          }
        }
        a = c = Hn(c, o), be !== 4 && (be = 2), vr === null ? vr = [a] : vr.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = Tu(a, c, t);
              wo(a, d);
              break e;
            case 1:
              o = c;
              var f = a.type, h = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yt === null || !Yt.has(h)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var p = Lu(a, o, t);
                wo(a, p);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xu(n);
    } catch (k) {
      t = k, Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yu() {
  var e = Ul.current;
  return Ul.current = $l, e === null ? $l : e;
}
function Si() {
  (be === 0 || be === 3 || be === 2) && (be = 4), Ie === null || !(hn & 268435455) && !(rs & 268435455) || $t(Ie, Le);
}
function Hl(e, t) {
  var n = ie;
  ie |= 2;
  var r = Yu();
  (Ie !== e || Le !== t) && (Et = null, un(e, t));
  do
    try {
      om();
      break;
    } catch (l) {
      Gu(e, l);
    }
  while (!0);
  if (si(), ie = n, Ul.current = r, Ce !== null) throw Error(P(261));
  return Ie = null, Le = 0, be;
}
function om() {
  for (; Ce !== null; ) qu(Ce);
}
function cm() {
  for (; Ce !== null && !Df(); ) qu(Ce);
}
function qu(e) {
  var t = Zu(e.alternate, e, Ge);
  e.memoizedProps = e.pendingProps, t === null ? Xu(e) : Ce = t, vi.current = null;
}
function Xu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nm(n, t), n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        be = 6, Ce = null;
        return;
      }
    } else if (n = tm(n, t, Ge), n !== null) {
      Ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function sn(e, t, n) {
  var r = ce, l = lt.transition;
  try {
    lt.transition = null, ce = 1, um(e, t, n, r);
  } finally {
    lt.transition = l, ce = r;
  }
  return null;
}
function um(e, t, n, r) {
  do
    Fn();
  while (Qt !== null);
  if (ie & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Vf(e, a), e === Ie && (Ce = Ie = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || al || (al = !0, ed(Cl, function() {
    return Fn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = lt.transition, lt.transition = null;
    var i = ce;
    ce = 1;
    var o = ie;
    ie |= 4, vi.current = null, lm(e, n), Hu(n, e), Ip(ia), bl = !!aa, ia = aa = null, e.current = n, sm(n), Rf(), ie = o, ce = i, lt.transition = a;
  } else e.current = n;
  if (al && (al = !1, Qt = e, Vl = l), a = e.pendingLanes, a === 0 && (Yt = null), Of(n.stateNode), Be(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ql) throw Ql = !1, e = Na, Na = null, e;
  return Vl & 1 && e.tag !== 0 && Fn(), a = e.pendingLanes, a & 1 ? e === ba ? wr++ : (wr = 0, ba = e) : wr = 0, rn(), null;
}
function Fn() {
  if (Qt !== null) {
    var e = Tc(Vl), t = lt.transition, n = ce;
    try {
      if (lt.transition = null, ce = 16 > e ? 16 : e, Qt === null) var r = !1;
      else {
        if (e = Qt, Qt = null, Vl = 0, ie & 6) throw Error(P(331));
        var l = ie;
        for (ie |= 4, U = e.current; U !== null; ) {
          var a = U, i = a.child;
          if (U.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (U = u; U !== null; ) {
                  var g = U;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, g, a);
                  }
                  var w = g.child;
                  if (w !== null) w.return = g, U = w;
                  else for (; U !== null; ) {
                    g = U;
                    var x = g.sibling, v = g.return;
                    if (Uu(g), g === u) {
                      U = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = v, U = x;
                      break;
                    }
                    U = v;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var E = _.sibling;
                    _.sibling = null, _ = E;
                  } while (_ !== null);
                }
              }
              U = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) i.return = a, U = i;
          else e: for (; U !== null; ) {
            if (a = U, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                yr(9, a, a.return);
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
          i = U;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, U = h;
          else e: for (i = f; U !== null; ) {
            if (o = U, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  ns(9, o);
              }
            } catch (k) {
              xe(o, o.return, k);
            }
            if (o === i) {
              U = null;
              break e;
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, U = p;
              break e;
            }
            U = o.return;
          }
        }
        if (ie = l, rn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
          kt.onPostCommitFiberRoot(Gl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, lt.transition = t;
    }
  }
  return !1;
}
function Wo(e, t, n) {
  t = Hn(n, t), t = Tu(e, t, 1), e = Gt(e, t, 1), t = Fe(), e !== null && (Fr(e, 1, t), Be(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) Wo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Wo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        e = Hn(n, e), e = Lu(t, e, 1), t = Gt(t, e, 1), e = Fe(), t !== null && (Fr(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Ie === e && (Le & n) === n && (be === 4 || be === 3 && (Le & 130023424) === Le && 500 > Se() - xi ? un(e, 0) : wi |= n), Be(e, t);
}
function Ju(e, t) {
  t === 0 && (e.mode & 1 ? (t = qr, qr <<= 1, !(qr & 130023424) && (qr = 4194304)) : t = 1);
  var n = Fe();
  e = Lt(e, t), e !== null && (Fr(e, t, n), Be(e, n));
}
function fm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ju(e, n);
}
function pm(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), Ju(e, n);
}
var Zu;
Zu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) Qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Qe = !1, em(e, t, n);
    Qe = !!(e.flags & 131072);
  }
  else Qe = !1, ge && t.flags & 1048576 && ru(t, Rl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      yl(e, t), e = t.pendingProps;
      var l = $n(t, Ae.current);
      On(t, n), l = pi(null, t, r, e, l, n);
      var a = mi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (a = !0, Pl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, oi(t), l.updater = ts, t.stateNode = l, l._reactInternals = t, ga(t, r, e, n), t = wa(null, t, r, !0, a, n)) : (t.tag = 0, ge && a && ti(t), Oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (yl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = hm(r), e = ut(r, e), l) {
          case 0:
            t = va(null, t, r, e, n);
            break e;
          case 1:
            t = Io(null, t, r, e, n);
            break e;
          case 11:
            t = bo(null, t, r, e, n);
            break e;
          case 14:
            t = Mo(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), va(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Io(e, t, r, l, n);
    case 3:
      e: {
        if (zu(t), e === null) throw Error(P(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, cu(e, t), Ol(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Hn(Error(P(423)), t), t = To(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Hn(Error(P(424)), t), t = To(e, t, r, n, l);
          break e;
        } else for (Ye = Kt(t.stateNode.containerInfo.firstChild), qe = t, ge = !0, ft = null, n = iu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Un(), r === l) {
            t = Pt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return uu(t), e === null && pa(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, i = l.children, oa(r, l) ? i = null : a !== null && oa(r, a) && (t.flags |= 32), Ru(e, t), Oe(e, t, i, n), t.child;
    case 6:
      return e === null && pa(t), null;
    case 13:
      return Au(e, t, n);
    case 4:
      return ci(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qn(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), bo(e, t, r, l, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, fe(zl, r._currentValue), r._currentValue = i, a !== null) if (gt(a.value, i)) {
          if (a.children === l.children && !Ve.current) {
            t = Pt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var o = a.dependencies;
          if (o !== null) {
            i = a.child;
            for (var c = o.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Mt(-1, n & -n), c.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var g = u.pending;
                    g === null ? c.next = c : (c.next = g.next, g.next = c), u.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), ma(
                  a.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (i = a.return, i === null) throw Error(P(341));
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), ma(i, n, t), i = a.sibling;
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
        Oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, On(t, n), l = st(l), r = r(l), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ut(r, t.pendingProps), l = ut(r.type, l), Mo(e, t, r, l, n);
    case 15:
      return Pu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), yl(e, t), t.tag = 1, He(r) ? (e = !0, Pl(t)) : e = !1, On(t, n), Iu(t, r, l), ga(t, r, l, n), wa(null, t, r, !0, e, n);
    case 19:
      return Ou(e, t, n);
    case 22:
      return Du(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function ed(e, t) {
  return Nc(e, t);
}
function mm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new mm(e, t, n, r);
}
function ji(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hm(e) {
  if (typeof e == "function") return ji(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qa) return 11;
    if (e === Va) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xl(e, t, n, r, l, a) {
  var i = 2;
  if (r = e, typeof e == "function") ji(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Sn:
      return dn(n.children, l, a, t);
    case Ua:
      i = 8, l |= 8;
      break;
    case Ws:
      return e = rt(12, n, t, l | 2), e.elementType = Ws, e.lanes = a, e;
    case $s:
      return e = rt(13, n, t, l), e.elementType = $s, e.lanes = a, e;
    case Us:
      return e = rt(19, n, t, l), e.elementType = Us, e.lanes = a, e;
    case uc:
      return ls(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case oc:
          i = 10;
          break e;
        case cc:
          i = 9;
          break e;
        case Qa:
          i = 11;
          break e;
        case Va:
          i = 14;
          break e;
        case Ot:
          i = 16, r = null;
          break e;
      }
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = rt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function dn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function ls(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = uc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Rs(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function zs(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gs(0), this.expirationTimes = gs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ei(e, t, n, r, l, a, i, o, c) {
  return e = new gm(e, t, n, o, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = rt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, oi(a), e;
}
function ym(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function td(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(P(170));
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
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return tu(e, n, t);
  }
  return t;
}
function nd(e, t, n, r, l, a, i, o, c) {
  return e = Ei(n, r, !0, e, l, a, i, o, c), e.context = td(null), n = e.current, r = Fe(), l = qt(n), a = Mt(r, l), a.callback = t ?? null, Gt(n, a, l), e.current.lanes = l, Fr(e, l, r), Be(e, r), e;
}
function ss(e, t, n, r) {
  var l = t.current, a = Fe(), i = qt(l);
  return n = td(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(a, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(l, t, i), e !== null && (ht(e, l, i, a), ml(e, l, i)), i;
}
function Bl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $o(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ci(e, t) {
  $o(e, t), (e = e.alternate) && $o(e, t);
}
function vm() {
  return null;
}
var rd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ni(e) {
  this._internalRoot = e;
}
as.prototype.render = Ni.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  ss(e, t, null, null);
};
as.prototype.unmount = Ni.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function() {
      ss(null, e, null, null);
    }), t[Tt] = null;
  }
};
function as(e) {
  this._internalRoot = e;
}
as.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++) ;
    Wt.splice(n, 0, e), n === 0 && zc(e);
  }
};
function bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function is(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Uo() {
}
function wm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Bl(i);
        a.call(u);
      };
    }
    var i = nd(t, r, e, 0, null, !1, !1, "", Uo);
    return e._reactRootContainer = i, e[Tt] = i.current, br(e.nodeType === 8 ? e.parentNode : e), gn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var u = Bl(c);
      o.call(u);
    };
  }
  var c = Ei(e, 0, !1, null, null, !1, !1, "", Uo);
  return e._reactRootContainer = c, e[Tt] = c.current, br(e.nodeType === 8 ? e.parentNode : e), gn(function() {
    ss(t, c, n, r);
  }), c;
}
function os(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var c = Bl(i);
        o.call(c);
      };
    }
    ss(t, i, e, l);
  } else i = wm(n, t, e, l, r);
  return Bl(i);
}
Lc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 && (Ka(t, n | 1), Be(t, Se()), !(ie & 6) && (Bn = Se() + 500, rn()));
      }
      break;
    case 13:
      gn(function() {
        var r = Lt(e, 1);
        if (r !== null) {
          var l = Fe();
          ht(r, e, 1, l);
        }
      }), Ci(e, 1);
  }
};
Ga = function(e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      ht(t, e, 134217728, n);
    }
    Ci(e, 134217728);
  }
};
Pc = function(e) {
  if (e.tag === 13) {
    var t = qt(e), n = Lt(e, t);
    if (n !== null) {
      var r = Fe();
      ht(n, e, t, r);
    }
    Ci(e, t);
  }
};
Dc = function() {
  return ce;
};
Rc = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Js = function(e, t, n) {
  switch (t) {
    case "input":
      if (Hs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Jl(r);
            if (!l) throw Error(P(90));
            fc(r), Hs(r, l);
          }
        }
      }
      break;
    case "textarea":
      mc(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
_c = _i;
kc = gn;
var xm = { usingClientEntryPoint: !1, Events: [$r, Nn, Jl, wc, xc, _i] }, ar = { findFiberByHostInstance: an, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _m = { bundleType: ar.bundleType, version: ar.version, rendererPackageName: ar.rendererPackageName, rendererConfig: ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ec(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ar.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!il.isDisabled && il.supportsFiber) try {
    Gl = il.inject(_m), kt = il;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bi(t)) throw Error(P(200));
  return ym(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!bi(e)) throw Error(P(299));
  var n = !1, r = "", l = rd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ei(e, 1, !1, null, null, n, !1, r, l), e[Tt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Ni(t);
};
Je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = Ec(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return gn(e);
};
Je.hydrate = function(e, t, n) {
  if (!is(t)) throw Error(P(200));
  return os(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!bi(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", i = rd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = nd(t, null, e, 1, n ?? null, l, !1, a, i), e[Tt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new as(t);
};
Je.render = function(e, t, n) {
  if (!is(t)) throw Error(P(200));
  return os(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!is(e)) throw Error(P(40));
  return e._reactRootContainer ? (gn(function() {
    os(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = _i;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!is(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return os(e, t, n, !1, r);
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
ld(), lc.exports = Je;
var Ee = lc.exports, sd, Qo = Ee;
sd = Qo.createRoot, Qo.hydrateRoot;
var ad = { exports: {} }, cs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km = m, Sm = Symbol.for("react.element"), jm = Symbol.for("react.fragment"), Em = Object.prototype.hasOwnProperty, Cm = km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, l = {}, a = null, i = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Em.call(t, r) && !Nm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Sm, type: e, key: a, ref: i, props: l, _owner: Cm.current };
}
cs.Fragment = jm;
cs.jsx = id;
cs.jsxs = id;
ad.exports = cs;
var s = ad.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bm = {
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
const Mm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), te = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: c,
      ...u
    }, g) => m.createElement(
      "svg",
      {
        ref: g,
        ...bm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Mm(e)}`, o].join(" "),
        ...u
      },
      [
        ...t.map(([w, x]) => m.createElement(w, x)),
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
const od = te("AlertCircle", [
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
const Im = te("AlertTriangle", [
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
const cd = te("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = te("ArrowUpDown", [
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
const ud = te("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = te("Box", [
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
const Pm = te("Calendar", [
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
const Dm = te("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = te("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = te("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = te("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = te("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = te("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = te("Download", [
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
const pd = te("FileJson", [
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
const Om = te("Folder", [
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
const Fm = te("Info", [
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
const Wm = te("Lasso", [
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
const md = te("LayoutGrid", [
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
const $m = te("LayoutList", [
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
const Um = te("Link2Off", [
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
const Qm = te("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = te("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = te("Maximize", [
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
const Hm = te("Minimize", [
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
const Bm = te("MoreVertical", [
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
const hd = te("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = te("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ti = te("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = te("RefreshCw", [
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
const Kn = te("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = te("Settings", [
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
const gd = te("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = te("Star", [
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
const Gm = te("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = te("Tag", [
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
const en = te("Trash2", [
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
const Ym = te("Type", [
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
const qm = te("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = te("Upload", [
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
const _e = te("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = Z;
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
const Jm = async () => {
  const e = await Z.fetchApi("/meld/home-dir");
  return (await se(e)).home;
}, yt = ({
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
let Kl = !1;
const Zm = (e) => {
  Kl = e, Kl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, eh = (...e) => {
  Kl && console.log("[Meld]", ...e);
}, th = (...e) => {
  Kl && console.warn("[Meld]", ...e);
}, nh = (...e) => {
  console.error("[Meld]", ...e);
}, q = {
  log: eh,
  warn: th,
  error: nh,
  init: Zm
}, _l = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await Z.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return se(a);
}, yd = async (e) => {
  const t = await Z.fetchApi(`/meld/image/${e}/details`);
  return se(t);
}, Ta = async (e, t = !1) => {
  const n = await Z.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await se(n);
}, Li = async (e) => {
  const t = await Z.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return se(t);
}, vd = async (e) => {
  const t = await Z.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return se(t);
}, Ho = async (e, t) => {
  const n = await Z.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await se(n);
}, rh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await Z.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await se(r);
  } catch {
    return [];
  }
}, La = async (e) => {
  const t = await Z.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await se(t);
  } catch {
    return [];
  }
}, lh = async (e, t) => {
  const n = await Z.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await se(n);
}, sh = async (e, t) => {
  const n = await Z.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return se(n);
}, Pa = async (e, t, n) => {
  const r = await Z.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await se(r);
}, ah = async (e) => {
  const t = await Z.fetchApi(`/meld/image/${e}/workflow`);
  return se(t);
}, ih = async (e) => {
  const t = await Z.fetchApi(`/meld/image/${e}/snapshot_data`);
  return se(t);
}, oh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await Z.fetchApi(n);
  return se(r);
}, ch = async () => {
  const e = await Z.fetchApi("/meld/search-suggestions");
  return se(e);
}, uh = async () => {
  const e = await Z.fetchApi("/meld/search-keywords");
  return se(e);
}, dh = async () => {
  const e = await Z.fetchApi("/meld/search-config");
  return se(e);
}, fh = async () => {
  const e = await Z.fetchApi("/meld/favorites");
  return se(e);
}, ph = async (e, t) => {
  const n = await Z.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await se(n);
}, Bo = async (e) => {
  const t = await Z.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await se(t);
}, mh = async (e, t, n) => {
  const r = await Z.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await se(r);
}, hh = {
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
}, wd = async () => {
  let e;
  try {
    const t = await Z.fetchApi("/meld/settings");
    e = await se(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), hh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, gh = async (e, t) => {
  const n = await Z.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await se(n);
}, yh = {
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
function vh(e, t) {
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
      ).sort((o, c) => c.created_at - o.created_at);
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
      return e.viewerMode === "gallery" && o !== null && !l.some((c) => c.id === o) && (o = null), {
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
      const { images: l, total: a, offset: i } = t.payload, o = [...e.images, ...l], c = Array.from(
        new Map(o.map((u) => [u.id, u])).values()
      );
      return {
        ...e,
        images: c,
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
      const [i, o] = [
        Math.min(l, a),
        Math.max(l, a)
      ], c = new Set(e.selectedIds);
      for (let u = i; u <= o; u++)
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
      const c = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((u) => u.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: i,
        viewerInitialMaskMode: o,
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
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const c = o.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (c === -1 || c === o.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || c === o.length - 1 && !a)
        return e;
      const u = (c + 1) % o.length;
      return {
        ...e,
        viewerImageId: o[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const c = o.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (c === -1 || c === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || c === 0 && !a)
        return e;
      const u = (c - 1 + o.length) % o.length;
      return {
        ...e,
        viewerImageId: o[u].id
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
const xd = m.createContext(void 0), wh = ({
  children: e
}) => {
  const [t, n] = m.useReducer(vh, yh), r = m.useRef(t.images.length), l = m.useRef(0);
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const a = m.useCallback(
    async (v, y, _) => {
      const E = t.settings["gallery.max_load_count"], d = 200;
      let f = v;
      for (; f < Math.min(y, E) && _ === l.current; )
        try {
          const h = Math.min(d, E - f);
          q.log("Background fetch: starting chunk", {
            offset: f,
            limit: h
          });
          const p = await _l(
            f,
            h,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: p }), f += p.images.length, p.images.length === 0 || f >= p.total))
            break;
          await new Promise((k) => setTimeout(k, 300));
        } catch (h) {
          q.error("Background fetch failed", h);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), y = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", E = t.settings["gallery.initial_load_count"];
      q.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: E,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await _l(
        0,
        E,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - v;
      q.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > E && a(E, d.total, y);
    } catch (_) {
      q.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    a
  ]), o = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now();
    try {
      const y = r.current, _ = t.searchQuery.trim() !== "", E = t.pagination.limit;
      q.log("loadMoreImages: starting fetch", {
        nextOffset: y,
        fetchLimit: E,
        isSearch: _
      });
      const d = await _l(
        y,
        E,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - v;
      q.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (y) {
      q.error("loadMoreImages: fetch failed", y), n({
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
  ]), c = m.useCallback(async () => {
    try {
      const v = await fh();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      q.error("Failed to load favorites", v);
    }
  }, []), u = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), _ = t.images.filter(
      (E) => t.selectedIds.has(E.id)
    ).some(
      (E) => E.parent_id || E.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), g = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await Li(v)).restored_ids || v;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (y) {
      n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = m.useCallback(
    async (v, y) => {
      try {
        await gh(v, y), n({ type: "SET_SETTINGS", payload: { [v]: y } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), x = m.useCallback(
    async (v) => {
      const y = t.images.find((_) => _.id === v);
      if (y && !y.is_minimal)
        return y;
      try {
        q.log("fetchFullImageDetails: fetching full data", { id: v });
        const _ = await yd(v);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw q.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const y = await wd();
        n({ type: "SET_SETTINGS", payload: y });
      } catch (y) {
        q.error("Failed to load settings", y);
      }
    })();
  }, []), m.useEffect(() => {
    c();
  }, [c]), m.useEffect(() => {
    const v = () => {
      i();
    }, y = (E) => {
      const d = E.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, _ = (E) => {
      const d = E.detail;
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
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", y), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", y), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), m.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    xd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: o,
        refreshFavorites: c,
        deleteSelected: u,
        restoreSelected: g,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, je = () => {
  const e = m.useContext(xd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Ke = (e) => {
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
}, Pi = async () => {
  const e = await Z.fetchApi("/meld/tags");
  return se(e);
}, xh = async (e) => {
  const t = await Z.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return se(t);
}, _h = async (e) => {
  const t = await Z.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await se(t);
}, kh = async (e, t) => {
  const n = await Z.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await se(n);
}, Sh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await Z.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, jh = async (e, t, n = !1, r) => {
  const l = await Z.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Eh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await Z.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Ch = async (e, t, n) => {
  const r = await Z.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await se(r)).count;
  } catch {
    return 0;
  }
}, Nh = async (e) => {
  const t = await Z.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await se(t);
}, bh = async () => {
  const e = await Z.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await se(e);
}, _d = () => {
  const { dispatch: e } = je(), [t, n] = m.useState(() => {
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
        const D = JSON.parse(C);
        return { ...X, ...D, tags: [] };
      } catch {
        return X;
      }
    return X;
  });
  m.useEffect(() => {
    const { tags: C, ...X } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(X));
  }, [t]);
  const [r, l] = m.useState([]), [a, i] = m.useState([]), [o, c] = m.useState(0), [u, g] = m.useState(!1), [w, x] = m.useState([]), [v, y] = m.useState(""), [_, E] = m.useState(!1), [d, f] = m.useState(null), h = m.useRef(!1), p = (C) => {
    C.target === C.currentTarget && (h.current = !0);
  }, k = (C) => {
    C.target === C.currentTarget && h.current && e({ type: "CLOSE_MODAL" }), h.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const X = await Jm();
        n((D) => D.custom_path ? D : { ...D, custom_path: X });
      } catch (X) {
        q.error("Failed to fetch home directory:", X);
      }
    })();
  }, []), m.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const D = t.type === "custom" ? t.custom_path : t.subfolder;
      if (q.log(
        `loadFolders started. Path: "${D}", Type: "${t.type}"`
      ), t.type === "custom" && !D) {
        q.log("Custom path is empty, skipping load."), l([]), i([]), c(0);
        return;
      }
      g(!0);
      const W = D, N = t.type;
      try {
        q.log("Step 1: Fast load starting...");
        const z = await jh(
          t.type,
          D,
          !0,
          C.signal
        );
        if (C.signal.aborted) {
          q.log("Step 1: Aborted.");
          return;
        }
        q.log(
          `Step 1 complete. Found ${z.folders.length} folders, ${z.images.length} images.`
        ), l(z.folders), i(z.images), c(null);
        const A = z.folders.map((T) => T.name);
        A.length > 0 && (q.log(
          `Step 2: Metadata fetch starting for ${A.length} folders...`
        ), Eh(
          N,
          W,
          A,
          C.signal
        ).then((T) => {
          if (C.signal.aborted) {
            q.log("Step 2: Aborted.");
            return;
          }
          q.log("Step 2: Metadata fetch complete."), l(
            (ne) => ne.map((de) => {
              const Q = T[de.name];
              return Q ? { ...de, count: Q.count, preview: Q.preview } : de;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && q.error("Step 2: Metadata fetch failed:", T);
        })), q.log("Step 3: Path image count starting..."), Ch(N, W, C.signal).then((T) => {
          if (C.signal.aborted) {
            q.log("Step 3: Aborted.");
            return;
          }
          q.log(`Step 3: Path image count complete: ${T}`), c(T);
        }).catch((T) => {
          T.name !== "AbortError" && q.error("Step 3: Path image count failed:", T);
        });
      } catch (z) {
        if (z.name === "AbortError") {
          q.log("Request aborted.");
          return;
        }
        q.error("Failed to load folders:", z), l([]), i([]), c(0);
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
      const C = await Pi();
      x(C);
    } catch (C) {
      q.error("Failed to fetch tags:", C);
    } finally {
      E(!1);
    }
  }, []);
  m.useEffect(() => {
    j();
  }, [j]), yt({
    onEscape: m.useCallback(() => {
      d ? f(null) : e({ type: "CLOSE_MODAL" });
    }, [d, e])
  });
  const S = m.useMemo(() => w.filter(
    (C) => C.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(C.name)
  ), [w, v, t.tags]), b = (C) => {
    const X = C.trim();
    X && !t.tags.includes(X) && (n({ ...t, tags: [...t.tags, X] }), y(""));
  }, F = (C) => {
    n({ ...t, tags: t.tags.filter((X) => X !== C) });
  }, M = (C) => {
    C.key === "Enter" && v.trim() && (C.preventDefault(), b(v.trim()));
  }, O = async () => {
    try {
      await Nh(t), e({
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
      q.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, B = (C) => {
    if (t.type === "custom") {
      const X = t.custom_path.includes("\\") ? "\\" : "/", D = t.custom_path.endsWith(X) ? `${t.custom_path}${C}` : `${t.custom_path}${X}${C}`;
      n({ ...t, custom_path: D });
    } else {
      const X = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: X });
    }
  }, J = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", X = t.custom_path.split(C);
      if (X.length > 1) {
        X.pop();
        let D = X.join(C);
        D === "" && C === "/" && (D = "/"), n({ ...t, custom_path: D });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return Ee.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: k,
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
                      children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
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
                            onClick: () => F(C),
                            children: /* @__PURE__ */ s.jsx(_e, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Kn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (C) => y(C.target.value),
                            onKeyDown: M
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => b(v),
                            children: /* @__PURE__ */ s.jsx(Ti, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? v && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : S.map((C) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => b(C.name),
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
                        onClick: O,
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
                          onClick: J,
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
                          onClick: () => B(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ke(C.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Om, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(fd, { size: 14 })
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
                              src: Ke(C),
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
                          children: /* @__PURE__ */ s.jsx(_e, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Ke(d),
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
function Mh(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function kd(e) {
  var i, o;
  const t = window.app;
  if (!(t != null && t.graph))
    return { ok: !1, reason: "no_app_graph" };
  const n = Mh(e), r = t.graph._nodes.filter(
    (c) => c.type === "MeldImageLoader" || c.type === "LoadImage" || c.type === "Load Image"
  );
  if (r.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  const a = r[0].widgets.find(
    (c) => c.name === "image"
  );
  return a && (a.value = n, typeof a.callback == "function" && a.callback(n)), (o = (i = t.graph).afterChange) == null || o.call(i), t.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Ih = () => {
  const { dispatch: e } = je();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var g, w;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), kd(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (x) => x.type === "LoadImageMask"
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
      const i = a[0], o = i.widgets.find(
        (x) => x.name === "image"
      ), c = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        i.id,
        "widget 'image' with",
        c
      ), o && (o.value = c, typeof o.callback == "function" && o.callback(c));
      const u = i.widgets.find(
        (x) => x.name === "channel"
      );
      return u && (u.value = "red", typeof u.callback == "function" && u.callback("red")), (w = (g = l.graph).afterChange) == null || w.call(g), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function As(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Th(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const i = a.getContext("2d", { willReadFrequently: !0 });
  if (!i) return e;
  const o = Da(e, [255, 255, 255], 255);
  i.putImageData(o, 0, 0), i.fillStyle = n > 0 ? "white" : "black", i.beginPath(), t(i), i.fill();
  const c = i.getImageData(0, 0, r, l), u = new Uint8ClampedArray(r * l);
  for (let g = 0; g < r * l; g++)
    u[g] = c.data[g * 4] > 128 ? 255 : 0;
  return { ...e, data: u };
}
function Da(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, i = new ImageData(l, a), o = i.data;
  for (let c = 0; c < r.length; c++) {
    const u = r[c], g = c * 4;
    u > 0 ? (o[g] = t[0], o[g + 1] = t[1], o[g + 2] = t[2], o[g + 3] = n) : (o[g] = 0, o[g + 1] = 0, o[g + 2] = 0, o[g + 3] = 0);
  }
  return i;
}
function Lh(e) {
  return e.data.every((t) => t === 0);
}
const Sd = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = je(), a = r.images.find((L) => L.id === e), { injectMaskToGraph: i } = Ih();
  yt({ onEscape: n });
  const o = m.useRef(null), c = m.useRef(null), u = m.useRef(null), g = m.useRef(null), [w, x] = m.useState(!1), [v, y] = m.useState("rect"), [_, E] = m.useState({ x: 0, y: 0 }), [d, f] = m.useState({ x: 0, y: 0 }), [h, p] = m.useState([]), [k, j] = m.useState(null), [S, b] = m.useState(!1), F = m.useCallback(() => {
    const L = u.current, R = c.current;
    if (!L || !R) return null;
    const le = R.getBoundingClientRect(), K = L.getBoundingClientRect(), oe = L.naturalWidth, V = L.naturalHeight;
    if (!oe || !V) return null;
    const ke = oe / V, $ = K.width / K.height;
    let G, I, ee = 0, Y = 0;
    return ke > $ ? (G = K.width, I = K.width / ke, Y = (K.height - I) / 2) : (I = K.height, G = K.height * ke, ee = (K.width - G) / 2), {
      left: K.left - le.left + ee,
      top: K.top - le.top + Y,
      width: G,
      height: I
    };
  }, []), M = m.useCallback(() => {
    const L = o.current;
    if (!L) return;
    const R = L.getContext("2d");
    if (!R) return;
    R.clearRect(0, 0, L.width, L.height);
    const le = getComputedStyle(document.documentElement), K = le.getPropertyValue("--comfy-input-bg-active") || le.getPropertyValue("--comfy-input-bg") || le.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", oe = F();
    if (g.current && oe && (R.save(), R.globalAlpha = 0.5, R.drawImage(
      g.current,
      oe.left,
      oe.top,
      oe.width,
      oe.height
    ), R.restore()), w) {
      const V = Math.min(_.x, d.x), ke = Math.min(_.y, d.y), $ = Math.abs(_.x - d.x), G = Math.abs(_.y - d.y);
      if (R.save(), R.globalAlpha = 0.3, R.fillStyle = K, R.strokeStyle = "white", R.lineWidth = 2, R.setLineDash([5, 5]), R.beginPath(), v === "rect")
        R.rect(V, ke, $, G);
      else if (v === "ellipse") {
        const I = V + $ / 2, ee = ke + G / 2;
        R.ellipse(I, ee, $ / 2, G / 2, 0, 0, 2 * Math.PI);
      } else if (v === "lasso" && h.length > 1) {
        R.moveTo(h[0].x, h[0].y);
        for (let I = 1; I < h.length; I++)
          R.lineTo(h[I].x, h[I].y);
        R.closePath();
      }
      R.fill(), R.globalAlpha = 1, R.stroke(), R.restore();
    }
  }, [w, _, d, v, h, F]), [O, B] = m.useState([]), J = m.useMemo(() => O.length > 0 ? O[O.length - 1] : u.current ? As(
    u.current.naturalWidth,
    u.current.naturalHeight
  ) : null, [O]);
  m.useEffect(() => {
    var L;
    (L = u.current) != null && L.naturalWidth && O.length === 0 && B([
      As(
        u.current.naturalWidth,
        u.current.naturalHeight
      )
    ]);
  }, [O.length]);
  const C = m.useRef(!1), X = m.useRef(0), D = (L) => {
    L.target === L.currentTarget && (C.current = !0);
  }, W = (L) => {
    L.target === L.currentTarget && C.current && !w && n(), C.current = !1;
  };
  m.useEffect(() => {
    if (!J) return;
    g.current || (g.current = document.createElement("canvas"));
    const L = g.current;
    L.width = J.width, L.height = J.height;
    const R = L.getContext("2d");
    if (!R) return;
    const le = Da(J, [255, 255, 255], 255);
    R.putImageData(le, 0, 0), M();
  }, [J, M]), m.useEffect(() => {
    const L = () => {
      c.current && o.current && (o.current.width = c.current.clientWidth, o.current.height = c.current.clientHeight, M());
    }, R = new ResizeObserver(L);
    return c.current && R.observe(c.current), L(), () => R.disconnect();
  }, [M]);
  const N = (L) => {
    var V;
    if (L.button !== 0 || w || S || Date.now() - X.current < 100)
      return;
    L.preventDefault();
    const R = F(), le = (V = c.current) == null ? void 0 : V.getBoundingClientRect();
    if (!R || !le) return;
    x(!0);
    const K = Math.max(
      R.left,
      Math.min(L.clientX - le.left, R.left + R.width)
    ), oe = Math.max(
      R.top,
      Math.min(L.clientY - le.top, R.top + R.height)
    );
    E({ x: K, y: oe }), f({ x: K, y: oe }), p(v === "lasso" ? [{ x: K, y: oe }] : []), j(null);
  };
  m.useEffect(() => {
    if (!w) return;
    const L = (le) => {
      var $;
      const K = F(), oe = ($ = c.current) == null ? void 0 : $.getBoundingClientRect();
      if (!K || !oe) return;
      const V = Math.max(
        K.left,
        Math.min(le.clientX - oe.left, K.left + K.width)
      ), ke = Math.max(
        K.top,
        Math.min(le.clientY - oe.top, K.top + K.height)
      );
      f({ x: V, y: ke }), v === "lasso" && p((G) => [...G, { x: V, y: ke }]);
    }, R = (le) => {
      var V;
      const K = F(), oe = (V = c.current) == null ? void 0 : V.getBoundingClientRect();
      if (K && oe && J && u.current) {
        const ke = Math.max(
          K.left,
          Math.min(le.clientX - oe.left, K.left + K.width)
        ), $ = Math.max(
          K.top,
          Math.min(le.clientY - oe.top, K.top + K.height)
        ), G = Math.min(_.x, ke), I = Math.min(_.y, $), ee = Math.abs(_.x - ke), Y = Math.abs(_.y - $), ae = v === "lasso";
        if (ee > 5 || Y > 5 || ae && h.length > 2) {
          const wn = u.current.naturalWidth, Rt = u.current.naturalHeight, he = wn / K.width, ue = Rt / K.height, vt = Th(J, (it) => {
            if (v === "rect") {
              const xn = (G - K.left) * he, zt = (I - K.top) * ue, Qr = ee * he, Vr = Y * ue;
              it.rect(xn, zt, Qr, Vr);
            } else if (v === "ellipse") {
              const xn = (G - K.left) * he, zt = (I - K.top) * ue, Qr = ee * he, Vr = Y * ue, Zd = xn + Qr / 2, ef = zt + Vr / 2;
              it.ellipse(
                Zd,
                ef,
                Qr / 2,
                Vr / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (v === "lasso" && h.length > 2) {
              const xn = h[0];
              it.moveTo(
                (xn.x - K.left) * he,
                (xn.y - K.top) * ue
              );
              for (let zt = 1; zt < h.length; zt++)
                it.lineTo(
                  (h[zt].x - K.left) * he,
                  (h[zt].y - K.top) * ue
                );
              it.closePath();
            }
          });
          B((it) => [...it, vt]);
        }
      }
      X.current = Date.now(), x(!1), p([]);
    };
    return window.addEventListener("mousemove", L), window.addEventListener("mouseup", R), () => {
      window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", R);
    };
  }, [
    w,
    _.x,
    _.y,
    F,
    J,
    v,
    h
  ]);
  const z = m.useCallback(() => {
    O.length > 1 && B((L) => L.slice(0, -1));
  }, [O.length]);
  m.useEffect(() => {
    const L = (R) => {
      (R.metaKey || R.ctrlKey) && R.key === "z" ? (R.preventDefault(), z()) : R.key === "Escape" && (R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", L, { capture: !0 }), () => window.removeEventListener("keydown", L, { capture: !0 });
  }, [z, n]);
  const A = () => {
    if (u.current) {
      const L = As(
        u.current.naturalWidth,
        u.current.naturalHeight
      );
      B((R) => [...R, L]);
    }
  }, T = async () => {
    if (!J || !u.current) return null;
    b(!0);
    try {
      const { width: L, height: R } = J, le = document.createElement("canvas");
      le.width = L, le.height = R;
      const K = le.getContext("2d");
      if (!K) return null;
      const oe = Da(J, [255, 255, 255], 255);
      K.putImageData(oe, 0, 0);
      const V = await new Promise(
        (Y) => le.toBlob(Y, "image/png")
      );
      if (!V) return null;
      const $ = `meld_mask_${Date.now()}.png`, G = new File([V], $, { type: "image/png" }), I = new FormData();
      I.append("image", G), I.append("type", "temp"), I.append("overwrite", "true");
      const ee = await Z.fetchApi("/upload/image", {
        method: "POST",
        body: I
      });
      return ee.ok ? (await ee.json()).name : null;
    } catch (L) {
      return console.error("[Meld] Error uploading mask:", L), null;
    } finally {
      b(!1);
    }
  }, ne = async () => {
    if (!a) return;
    const L = await T();
    L && i(a, L) && n();
  }, de = async () => {
    if (!a) return;
    const L = await T();
    L && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: L
      }
    });
  }, Q = m.useMemo(
    () => J && !Lh(J),
    [J]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: D,
      onMouseUp: W,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (L) => L.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(_e, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${v === "rect" ? "active" : ""}`,
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
                    className: `meld-mask-tool-btn ${v === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Rm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${v === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Wm, { size: 18 }),
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
                  onMouseDown: N,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        ref: u,
                        src: Ke(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (L) => L.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: o,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (L) => L.preventDefault()
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
                      onClick: ne,
                      disabled: !Q || S,
                      type: "button",
                      children: [
                        S ? /* @__PURE__ */ s.jsx(Vo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Mi, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: de,
                      disabled: !Q || S,
                      type: "button",
                      children: [
                        S ? /* @__PURE__ */ s.jsx(Vo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Ii, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: z,
                      disabled: O.length <= 1 || S,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(qm, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: A,
                      disabled: !Q || S,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(_e, { size: 16 }),
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
}, Ph = () => {
  const { state: e, dispatch: t, updateSetting: n } = je(), [r, l] = m.useState("Gallery"), [a, i] = m.useState({
    ...e.settings
  }), [o, c] = m.useState(
    {}
  ), [u, g] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [w, x] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [v, y] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, E] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [h, p] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, j] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [S, b] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [F, M] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    O,
    B
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    J,
    C
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [X, D] = m.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: i,
    shortcutErrors: o,
    setShortcutErrors: c,
    handleClose: async () => {
      const Q = Object.keys(a).filter(
        (L) => a[L] !== e.settings[L] && !o[L]
      );
      if (Q.length > 0)
        for (const L of Q)
          await n(L, a[L]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (Q, L) => {
      i((R) => ({
        ...R,
        [Q]: !L
      }));
    },
    handleNumberChange: (Q, L, R, le) => {
      Q === "gallery.initial_load_count" ? g(L) : Q === "gallery.max_load_count" ? x(L) : Q === "gallery.lineage_max_depth" ? y(L) : Q === "viewer.thumbnail_window_size" ? E(L) : Q === "gallery.trash_retention_days" ? f(L) : Q === "gallery.auto_link_phash_threshold" ? p(L) : Q === "gallery.suggest_phash_threshold" ? j(L) : Q === "viewer.details.max_positive_prompt_lines" ? b(L) : Q === "viewer.details.max_negative_prompt_lines" ? M(L) : Q === "fullscreen.details.max_positive_prompt_lines" ? B(L) : Q === "fullscreen.details.max_negative_prompt_lines" ? C(L) : Q === "sidebar.thumbnail_size" && D(L);
      const K = Number.parseInt(L, 10);
      if (!Number.isNaN(K)) {
        let oe = K;
        R !== void 0 && oe < R && (oe = R), le !== void 0 && oe > le && (oe = le), i((V) => ({
          ...V,
          [Q]: oe
        }));
      }
    },
    handleNumberBlur: (Q) => {
      Q.key === "gallery.initial_load_count" ? g(
        a["gallery.initial_load_count"].toString()
      ) : Q.key === "gallery.max_load_count" ? x(a["gallery.max_load_count"].toString()) : Q.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : Q.key === "viewer.thumbnail_window_size" ? E(
        a["viewer.thumbnail_window_size"].toString()
      ) : Q.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : Q.key === "gallery.auto_link_phash_threshold" ? p(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : Q.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : Q.key === "viewer.details.max_positive_prompt_lines" ? b(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "viewer.details.max_negative_prompt_lines" ? M(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_positive_prompt_lines" ? B(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "sidebar.thumbnail_size" && D(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      i((Q) => ({
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
    validateShortcut: (Q) => Q.trim() ? Q.trim().split(/\s+/).every((R) => !!(R === "next" || R === "prev" || R === "delete" || R.startsWith("tag:") && R.length > 4 || R.startsWith("-tag:") && R.length > 5 || R.startsWith("tag-toggle:") && R.length > 11)) : !0,
    // Input states
    initialLoadCountInput: u,
    maxLoadCountInput: w,
    lineageMaxDepthInput: v,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: h,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: S,
    maxNegativePromptLinesInput: F,
    fullscreenMaxPositivePromptLinesInput: O,
    fullscreenMaxNegativePromptLinesInput: J,
    thumbnailSizeInput: X
  };
}, H = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Dh = ({
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
      H,
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
      H,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (o) => t((c) => ({
              ...c,
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
      H,
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
      H,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (o) => t((c) => ({
              ...c,
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
      H,
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
      H,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (o) => t((c) => ({
              ...c,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (o) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": o.target.value
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
      H,
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
      H,
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
function jt({
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
function jd() {
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
function Ed(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Cd(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Nd(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function bd(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(jd, {})
  ] });
}
function Md(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Id(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(jd, {})
  ] });
}
function Td(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Ld(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Pd(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Dd(e) {
  return /* @__PURE__ */ s.jsxs(jt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Rd = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Ed
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Md
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Id
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Nd },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: bd
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Cd
  },
  { id: "edit_tags", label: "Edit Tags", icon: Ld },
  { id: "edit_notes", label: "Edit Notes", icon: Pd },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Td
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Dd
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: en }
], Rh = ({
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
    /* @__PURE__ */ s.jsx(H, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
            children: Rd.map((u) => /* @__PURE__ */ s.jsx("option", { value: u.id, children: u.label }, u.id))
          }
        )
      },
      c
    ))
  ] })
] }), zh = ({
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
      o.map((c, u) => /* @__PURE__ */ s.jsx(
        H,
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
                t((w) => ({
                  ...w,
                  [c]: g.target.value
                }));
              },
              onBlur: () => {
                const g = l(
                  e[c] || ""
                );
                r((w) => ({
                  ...w,
                  [c]: !g
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        H,
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
      H,
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
}, Ah = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: u
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      H,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (g) => l((w) => ({
              ...w,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
] }), Oh = ({
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
      H,
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
] }), zd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: i,
    handleToggle: o,
    handleNumberChange: c,
    handleNumberBlur: u,
    handleResetShortcuts: g,
    handleViewTrash: w,
    validateShortcut: x,
    // Input states
    initialLoadCountInput: v,
    maxLoadCountInput: y,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: E,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: h,
    maxPositivePromptLinesInput: p,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: S,
    thumbnailSizeInput: b
  } = Ph();
  yt({ onEscape: i });
  const F = m.useRef(!1), M = (C) => {
    C.target === C.currentTarget && (F.current = !0);
  }, O = (C) => {
    C.target === C.currentTarget && F.current && i(), F.current = !1;
  }, B = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], J = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Ah,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: u,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: w,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: h
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Rh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailSizeInput: b,
            initialLoadCountInput: v,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Oh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: c,
            handleNumberBlur: u,
            thumbnailWindowSizeInput: E,
            maxPositivePromptLinesInput: p,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Dh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: c,
            handleNumberBlur: u,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: S
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          zh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: x,
            handleToggle: o,
            handleResetShortcuts: g
          }
        );
      default:
        return null;
    }
  };
  return Ee.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: M,
        onMouseUp: O,
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
                    onClick: i,
                    children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: B.map((C) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === C.id ? "active" : ""}`,
                    onClick: () => t(C.id),
                    children: C.label
                  },
                  C.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: J() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, pt = "none", Ad = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = je(), [a, i] = m.useState([]), [o, c] = m.useState(t), [u, g] = m.useState(""), [w, x] = m.useState(!0), [v, y] = m.useState(!1), _ = m.useRef(null), E = e.length > 1, d = m.useRef(!1), f = (M) => {
    M.target === M.currentTarget && (d.current = !0);
  }, h = (M) => {
    M.target === M.currentTarget && d.current && n(), d.current = !1;
  }, p = m.useCallback(async () => {
    x(!0);
    try {
      const M = await Pi();
      i(M);
    } catch (M) {
      console.error("Failed to fetch tags:", M);
    } finally {
      x(!1);
    }
  }, []);
  m.useEffect(() => {
    p();
  }, [p]), m.useEffect(() => {
    _.current && _.current.focus();
  }, []), yt({ onEscape: n });
  const k = m.useMemo(() => a.filter(
    (M) => M.name.toLowerCase().includes(u.toLowerCase()) && !o.includes(M.name)
  ), [a, u, o]), j = (M) => {
    const O = M.trim();
    if (O.toLowerCase() === pt) {
      alert(
        `Tag name '${pt}' is reserved for search and cannot be used.`
      );
      return;
    }
    O && !o.includes(O) && (c([...o, O]), g(""));
  }, S = (M) => {
    c(o.filter((O) => O !== M));
  }, b = async () => {
    y(!0);
    try {
      if (E) {
        const M = o.filter((B) => !t.includes(B)), O = t.filter(
          (B) => !o.includes(B)
        );
        await Pa(e, M, O);
      } else
        await lh(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (M) {
      console.error("Failed to update tags:", M), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, F = (M) => {
    M.key === "Enter" && u.trim() && (M.preventDefault(), M.stopPropagation(), j(u.trim()));
  };
  return Ee.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: h,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (M) => M.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Jn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: E ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(_e, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((M) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                M,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => S(M),
                    children: /* @__PURE__ */ s.jsx(_e, { size: 12 })
                  }
                )
              ] }, M)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Kn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: u,
                    onChange: (M) => g(M.target.value),
                    onKeyDown: F
                  }
                ),
                u.trim() && !o.includes(u.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(u),
                    children: [
                      /* @__PURE__ */ s.jsx(Ti, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? u ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((M) => /* @__PURE__ */ s.jsx(
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
                onClick: b,
                disabled: v,
                children: v ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Od = async () => {
  const e = await Z.fetchApi("/meld/workflows");
  return se(e);
}, Fh = async (e) => {
  const t = await Z.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return se(t);
}, us = (e, t) => {
  const n = m.useCallback(async (v) => {
    try {
      const y = await ah(v.id);
      if (!y.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        y.workflow
      ), q.log("Workflow restored successfully from Meld");
    } catch (y) {
      q.error("Error restoring workflow:", y), alert("Failed to restore workflow.");
    }
  }, []), r = m.useCallback(async (v) => {
    try {
      const y = await ih(v.id), _ = "MeldUnifiedLoader", E = window.app, f = window.LiteGraph.createNode(_);
      if (!f) {
        console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const h = {
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
        for (const [S, b] of Object.entries(h)) {
          const F = y[S];
          if (F != null) {
            const M = f.widgets.find(
              (O) => O.name === b
            );
            M && (M.value = F);
          }
        }
        const j = f.widgets.find(
          (S) => S.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const p = E.canvas.ds.offset, k = E.canvas.ds.scale;
      f.pos = [(-p[0] + 400) / k, (-p[1] + 300) / k], E.graph.add(f), E.canvas.selectNode(f), E.canvas.centerOnNode(f);
    } catch (y) {
      console.error("Error adding Unified Loader:", y), alert("Failed to load settings.");
    }
  }, []), l = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [v.id],
          tags: v.tags || []
        }
      });
    },
    [t]
  ), a = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: v.id,
          notes: v.user_notes || ""
        }
      });
    },
    [t]
  ), i = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: v.id }
      });
    },
    [t]
  ), o = m.useCallback(
    (v) => {
      const y = kd(v);
      y.ok || t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: y.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      });
    },
    [t]
  ), c = m.useCallback(
    (v) => {
      const y = Array.isArray(v) ? v : [v];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), u = m.useCallback(
    async (v, y = "run") => {
      var _;
      if (console.log("[Meld] handleRunWithMask called", v, y), y === "apply") {
        const E = window.app, d = ((_ = E == null ? void 0 : E.graph) == null ? void 0 : _._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          d.map((p) => ({
            id: p.id,
            type: p.type
          }))
        );
        const f = d.some(
          (p) => p.type === "LoadImageMask"
        ), h = d.some(
          (p) => p.type === "MeldImageLoader" || p.type === "LoadImage" || p.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: f, hasLoaderNode: h }), !f || !h) {
          const p = [];
          h || p.push("'Meld Image Loader'"), f || p.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${p.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await Od()).some(
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
        payload: { type: "mask_editor", imageId: v.id, mode: y }
      });
    },
    [t]
  ), g = m.useCallback(
    async (v, y) => {
      try {
        const _ = v.id, d = (await Li([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: d }), y == null || y();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), w = m.useCallback(
    (v) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [v.id],
          hasLineage: !!(v.parent_id || v.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), x = m.useCallback(
    async (v, y) => {
      try {
        const _ = await sh(
          v,
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
    handleEditTags: l,
    handleEditSource: i,
    handleSendToWorkflow: o,
    handleRunWithWorkflow: c,
    handleRunWithMask: u,
    handleRestore: g,
    handleDelete: w,
    handleEditNotes: a,
    handleUpdateUserNotes: x
  };
}, Fd = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = je(), { handleUpdateUserNotes: a } = us(r, l), [i, o] = m.useState(t), [c, u] = m.useState(!1), g = m.useRef(null), w = m.useRef(!1), x = (_) => {
    _.target === _.currentTarget && (w.current = !0);
  }, v = (_) => {
    _.target === _.currentTarget && w.current && n(), w.current = !1;
  };
  m.useEffect(() => {
    g.current && g.current.focus();
  }, []);
  const y = m.useCallback(async () => {
    u(!0);
    try {
      await a(e, i), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      u(!1);
    }
  }, [a, e, i, n]);
  return m.useEffect(() => {
    const _ = (E) => {
      E.key === "Enter" && (E.ctrlKey || E.metaKey) && E.target === g.current && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [y]), yt({ onEscape: n }), Ee.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Gm, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(_e, { size: 20 }) })
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
                value: i,
                onChange: (_) => o(_.target.value)
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
}, Wd = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var h;
  const { dispatch: r } = je(), [l, a] = m.useState([]), [i, o] = m.useState(!0), [c, u] = m.useState(null), [g, w] = m.useState(!1), x = m.useMemo(() => l.map((p) => {
    let k = p.valid, j = p.reason;
    return n && (p.mask_count === 0 ? (k = !1, j = "No 'Load Image (as Mask)' node found.") : p.mask_count > 1 && (k = !1, j = `Multiple 'Load Image (as Mask)' nodes found (${p.mask_count}).`)), { ...p, valid: k, reason: j };
  }).sort((p, k) => p.valid !== k.valid ? p.valid ? -1 : 1 : p.name.localeCompare(k.name)), [l, n]), v = m.useCallback(async () => {
    try {
      o(!0);
      const p = await Od();
      a(p), u(null);
    } catch (p) {
      u(p instanceof Error ? p.message : String(p));
    } finally {
      o(!1);
    }
  }, []);
  m.useEffect(() => {
    v();
  }, [v]);
  const y = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  yt({ onEscape: y });
  const _ = m.useRef(!1), E = m.useCallback((p) => {
    p.target === p.currentTarget && (_.current = !0);
  }, []), d = m.useCallback(
    (p) => {
      p.target === p.currentTarget && _.current && y(), _.current = !1;
    },
    [y]
  ), f = async (p) => {
    if (!g)
      try {
        w(!0), await t(p), y();
      } catch (k) {
        u(k instanceof Error ? k.message : String(k)), w(!1);
      }
  };
  return Ee.createPortal(
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
            onClick: (p) => p.stopPropagation(),
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
                    children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : c ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(od, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (h = e[0]) == null ? void 0 : h.filename }),
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
                x.map((p) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${p.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => p.valid && !g && f(p.name),
                    title: p.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: p.name }),
                        !p.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: p.reason }),
                        p.valid && /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__supports", children: [
                          "Supports:",
                          " ",
                          p.loader_count > 0 ? "Meld Loader" : "Load Image"
                        ] })
                      ] }),
                      p.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: g,
                          onClick: (k) => {
                            k.stopPropagation(), f(p.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(Ii, { size: 14 }),
                            g ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  p.name
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
}, $d = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r) => {
    var w, x, v, y, _, E;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await Fh(t);
    console.log("[Meld] Workflow fetched:", t);
    let a = null, i = null, o = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      o = !0;
      const d = l.nodes.find(
        (h) => h.type === "MeldImageLoader" || h.type === "LoadImage" || h.type === "Load Image"
      );
      d && (a = String(d.id));
      const f = l.nodes.find(
        (h) => h.type === "LoadImageMask"
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
    let c = n.filename;
    if (n.subfolder && (c = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (c = `${c} [${n.type}]`), o) {
      const d = window.app, f = t.replace(/\.json$/i, "");
      let h = !1;
      const p = document.querySelectorAll(".workflow-tab");
      for (const S of Array.from(p)) {
        const b = S.querySelector(".workflow-label"), F = ((w = b == null ? void 0 : b.textContent) == null ? void 0 : w.trim()) || ((x = S.textContent) == null ? void 0 : x.trim()) || "";
        if (F === f || F === t || F.startsWith(`${f} `) || F.startsWith(`${f}•`)) {
          S.click(), h = !0;
          break;
        }
      }
      h || await d.loadGraphData(l, !0, !0, t), await new Promise((S) => setTimeout(S, 200));
      const k = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", k.length);
      const j = k.find(
        (S) => String(S.id) === a || S.type === "MeldImageLoader" || S.type === "LoadImage" || S.type === "Load Image"
      );
      if (j) {
        const S = (v = j.widgets) == null ? void 0 : v.find((b) => b.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: j.id,
          type: j.type,
          imagePath: c
        }), S && (S.value = c, typeof S.callback == "function" && S.callback(c));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const S = k.find(
          (b) => String(b.id) === i || b.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: S == null ? void 0 : S.id,
          maskFilename: r
        }), S) {
          const b = (y = S.widgets) == null ? void 0 : y.find(
            (M) => M.name === "image"
          );
          b && (b.value = `${r} [temp]`);
          const F = (_ = S.widgets) == null ? void 0 : _.find(
            (M) => M.name === "channel"
          );
          F && (F.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (S) {
        throw console.error("Failed to queue workflow:", S), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const u = JSON.parse(JSON.stringify(l));
    u[a].inputs.image = c, r && i && (u[i].inputs.image = `${r} [temp]`, u[i].inputs.channel = "red");
    const g = await Z.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: u,
        client_id: Z.clientId
      })
    });
    if (!g.ok) {
      const d = await g.json();
      throw new Error(((E = d.error) == null ? void 0 : E.message) || "Failed to queue workflow");
    }
    return await g.json();
  },
  []
) }), Ud = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = je(), i = m.useRef(!0);
  m.useEffect(() => () => {
    i.current = !1;
  }, []);
  const o = m.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = m.useMemo(
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
  ), u = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    u.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const g = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  yt({ onEscape: g });
  const w = m.useRef(!1), x = m.useCallback((d) => {
    d.target === d.currentTarget && (w.current = !0);
  }, []), v = m.useCallback(
    (d) => {
      d.target === d.currentTarget && w.current && g(), w.current = !1;
    },
    [g]
  ), y = m.useCallback(
    (d) => {
      if (!i.current) return;
      const f = u.current;
      if (f === null || !d.has(f))
        return;
      const h = c.findIndex(
        (k) => k.id === f
      );
      if (h === -1) return;
      let p = !1;
      for (let k = h + 1; k < c.length; k++)
        if (!d.has(c[k].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[k].id, mode: l.viewerMode }
          }), p = !0;
          break;
        }
      if (!p) {
        for (let k = h - 1; k >= 0; k--)
          if (!d.has(c[k].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[k].id, mode: l.viewerMode }
            }), p = !0;
            break;
          }
      }
      p || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, c, a]
  ), _ = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = c.filter(
        (h) => d.has(h.id)
      );
      if (y(d), await Ta(e, n), !i.current) return;
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
      for (const h of e) {
        const p = await La(h);
        if (!i.current) return;
        for (const k of p)
          d.add(k.id);
      }
      const f = c.filter(
        (h) => d.has(h.id)
      );
      if (y(d), await Ta(Array.from(d), n), !i.current) return;
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
  return Ee.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(en, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: g,
                    children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
                            Im,
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
}, Qd = ({ message: e }) => {
  const { dispatch: t } = je(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return yt({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
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
          children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
}, Vd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = je(), [l, a] = m.useState([]), [i, o] = m.useState(!0), [c, u] = m.useState(!1), g = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  yt({ onEscape: g });
  const w = m.useRef(!1), x = (j) => {
    j.target === j.currentTarget && (w.current = !0);
  }, v = (j) => {
    j.target === j.currentTarget && w.current && g(), w.current = !1;
  }, y = t.images.find((j) => j.id === e), _ = m.useCallback(async () => {
    o(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], S = await rh(e, j);
      a(S);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    _();
  }, [_]);
  const E = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || j === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ho(e, j), await yd(e), await r(), g();
      } catch (S) {
        console.error("Failed to link parent:", S);
      }
  }, d = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ho(e, null), await r(), g();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, f = async (j) => {
    o(!0);
    try {
      const S = await Sh(j), { id: b } = await vd({
        filename: S.name,
        subfolder: S.subfolder || "",
        type: S.type || "input"
      });
      if (b === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await E(b);
    } catch (S) {
      console.error("Failed to upload/register image:", S);
    } finally {
      o(!1);
    }
  }, h = (j) => {
    j.preventDefault(), j.stopPropagation(), u(!1);
    const S = j.dataTransfer.files[0];
    S != null && S.type.startsWith("image/") && f(S);
  };
  if (!y) return null;
  const p = l.filter((j) => j.is_source_match), k = l.filter((j) => !j.is_source_match);
  return Ee.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: v,
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
                children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
                        /* @__PURE__ */ s.jsx(Qm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Ke({
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
                      children: /* @__PURE__ */ s.jsx(Um, { size: 16 })
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
                onDrop: h,
                children: [
                  /* @__PURE__ */ s.jsx(Xm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              p.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: p.map((j) => {
                  const S = j.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${S ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !S && E(j.id),
                      style: {
                        cursor: S ? "default" : "pointer",
                        ...S ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ke(j), alt: j.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          S && /* @__PURE__ */ s.jsx(
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
                k.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((j) => {
                  const S = j.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${S ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !S && E(j.id),
                      style: {
                        cursor: S ? "default" : "pointer",
                        ...S ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ke(j), alt: j.filename }),
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
                                S && /* @__PURE__ */ s.jsx(
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
}, Wh = () => {
  const { state: e, dispatch: t } = je(), { executeWorkflow: n } = $d();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Wd,
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
    e.activeModal.type === "parent_selection" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(Vd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Ee.createPortal(/* @__PURE__ */ s.jsx(_d, {}), document.body),
    e.activeModal.type === "settings" && Ee.createPortal(/* @__PURE__ */ s.jsx(zd, {}), document.body),
    e.activeModal.type === "tag_edit" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(
        Ad,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(Qd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(
        Ud,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(
        Sd,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && Ee.createPortal(
      /* @__PURE__ */ s.jsx(
        Fd,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Hd = (e, t) => {
  const n = m.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((u) => ({
          id: u.id,
          imgSrc: Ke(u)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const i = e.find((u) => u.id === a);
      let o = null;
      if (i ? o = Ke(i) : o = Ke({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const c = {
        id: a || null,
        imgSrc: o
      };
      if (i && l > 1) {
        const u = n(i);
        return [c, ...u].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, Bd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = je(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: i,
    handleAddUnifiedLoader: o,
    handleEditSource: c,
    handleEditTags: u,
    handleSendToWorkflow: g,
    handleRunWithWorkflow: w,
    handleRunWithMask: x,
    handleRestore: v,
    handleDelete: y,
    handleEditNotes: _,
    handleUpdateUserNotes: E
  } = us(t, n), { getParentChain: d } = Hd(t.images, t.settings), [f, h] = m.useState(null), [p, k] = m.useState(!1), [j, S] = m.useState(null), [b, F] = m.useState(!1), M = m.useRef(null), O = async (V, ke, $ = !1) => {
    try {
      await navigator.clipboard.writeText(V), $ ? (F(!0), setTimeout(() => F(!1), 2e3)) : (S(ke), setTimeout(() => S(null), 2e3));
    } catch (G) {
      console.error("Failed to copy text: ", G);
    }
  };
  m.useEffect(() => {
    const V = ($) => {
      $.key === "Escape" && (f ? h(null) : k(!1));
    }, ke = ($) => {
      M.current && !M.current.contains($.target) && k(!1);
    };
    return window.addEventListener("keydown", V), p && document.addEventListener("mousedown", ke), () => {
      window.removeEventListener("keydown", V), document.removeEventListener("mousedown", ke);
    };
  }, [p, f]);
  const B = d(e), C = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, X = Ke(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: f,
    setPopupContent: h,
    isMenuOpen: p,
    setIsMenuOpen: k,
    copiedLabel: j,
    popupCopied: b,
    menuRef: M,
    parentChain: B,
    displayFilename: C,
    imgSrc: X,
    handleCopy: O,
    handleClick: (V) => {
      V.shiftKey ? (V.preventDefault(), V.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : V.ctrlKey || V.metaKey || t.selectedIds.size > 0 ? (V.preventDefault(), V.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (V) => {
      V.preventDefault(), V.stopPropagation(), V.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (V) => {
      V.shiftKey ? (V.preventDefault(), V.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : V.ctrlKey || V.metaKey || t.selectedIds.size > 0 ? (V.preventDefault(), V.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (V.preventDefault(), V.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (V) => {
      (V.shiftKey || V.ctrlKey || V.metaKey || t.selectedIds.size > 0 || !V.target.closest(
        "img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb, textarea, input, button"
      )) && (V.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || V.preventDefault());
    },
    handleKeyDown: (V) => {
      var $, G, I;
      (($ = document.activeElement) == null ? void 0 : $.tagName) === "INPUT" || ((G = document.activeElement) == null ? void 0 : G.tagName) === "TEXTAREA" || (I = document.activeElement) != null && I.isContentEditable || (V.key === "Enter" || V.key === " ") && (V.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await i(e);
    },
    handleAddUnifiedLoader: async () => {
      await o(e);
    },
    handleEditSource: () => {
      c(e);
    },
    handleEditTags: () => {
      u(e);
    },
    handleEditNotes: () => {
      _(e);
    },
    handleSendToWorkflow: () => {
      g(e);
    },
    handleRestore: () => {
      v(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      w(e);
    },
    handleRunWithMask: (V = "run") => x(e, V),
    handleUpdateUserNotes: (V) => E(e.id, V),
    fetchFullImageDetails: r
  };
}, Kd = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: i,
  onRunWithWorkflow: o,
  onRunWithMask: c,
  onEditSource: u,
  onEditTags: g,
  onEditNotes: w,
  onDelete: x,
  onRestore: v,
  showRestore: y,
  deleteLabel: _,
  showQuickShortcuts: E = !0,
  variant: d = "default"
}) => {
  const f = (k) => {
    switch (k) {
      case "add_unified_loader":
        return l;
      case "restore_full_workflow":
        return a;
      case "send_to_workflow":
        return i;
      case "queue_workflow":
        return o;
      case "send_to_workflow_mask":
        return () => c("apply");
      case "queue_workflow_mask":
        return () => c("run");
      case "edit_source_image":
        return u;
      case "edit_tags":
        return g;
      case "edit_notes":
        return w;
      case "restore_image":
        return v;
      case "delete_or_trash":
        return x;
      default:
        return null;
    }
  }, h = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((k) => k && k !== ""), p = [
    "meld-image-card__menu-container",
    d === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: p, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-image-card__menu-btn",
        onClick: (k) => {
          k.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Bm, { size: 16 })
      }
    ),
    E && h.map((k, j) => {
      const S = Rd.find((M) => M.id === k);
      if (!S || !S.icon) return null;
      const b = S.icon, F = f(k);
      return !F || k === "restore_image" && !y ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-image-card__menu-btn",
          onClick: (M) => {
            M.stopPropagation(), F();
          },
          title: S.label,
          children: /* @__PURE__ */ s.jsx(b, { size: 16 })
        },
        `${k}-${j}`
      );
    }),
    e && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: Ed,
        handler: l
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Md,
        handler: i
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: Id,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Nd,
        handler: o
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: bd,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Cd,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Ld,
        handler: g
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Pd,
        handler: w
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Td,
        handler: u
      },
      ...y ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Dd,
          handler: v,
          color: "var(--meld-accent-color)"
        }
      ] : [],
      {
        id: "delete_or_trash",
        label: _,
        icon: en,
        handler: x,
        className: "meld-image-card__menu-item--danger",
        color: "var(--meld-danger-color)"
      }
    ].map((k) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${k.className || ""}`,
        onMouseDown: (j) => j.stopPropagation(),
        onClick: (j) => {
          j.preventDefault(), j.stopPropagation(), t(!1), setTimeout(() => k.handler(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(k.icon, { size: 14, color: k.color }),
          /* @__PURE__ */ s.jsx("span", { children: k.label })
        ]
      },
      k.id
    )) })
  ] });
}, $h = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Ee.createPortal(
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
                  zm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  _e,
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
), Gd = kl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: i,
      setIsMenuOpen: o,
      copiedLabel: c,
      popupCopied: u,
      menuRef: g,
      parentChain: w,
      displayFilename: x,
      imgSrc: v,
      handleCopy: y,
      handleClick: _,
      handleSelectToggle: E,
      handleContainerClick: d,
      handleMouseDown: f,
      handleKeyDown: h,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: k,
      handleEditSource: j,
      handleEditTags: S,
      handleEditNotes: b,
      handleSendToWorkflow: F,
      handleRestore: M,
      handleDelete: O,
      handleRunWithWorkflow: B,
      handleRunWithMask: J,
      fetchFullImageDetails: C
    } = Bd(e), [X, D] = m.useState("idle");
    return m.useEffect(() => {
      e.user_notes && X === "saving" && D("idle");
    }, [e.user_notes, X]), /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
        onClick: d,
        onMouseDown: f,
        onKeyDown: h,
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
                src: v,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: f,
                onClick: (W) => {
                  W.stopPropagation(), _(W);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && x,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && w.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: w.map(
                (W, N) => W.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: W.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (z) => {
                      z.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: W.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: N === 0 ? "Source" : N === 1 ? "Grand-Source" : `Ancestor (S${N + 1})`,
                    alt: "source thumb"
                  },
                  W.id || N
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
                onClick: async (W) => {
                  W.stopPropagation();
                  const N = await C(e.id);
                  a({
                    title: "Model",
                    text: N.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (W) => {
                        W.stopPropagation();
                        const N = await C(e.id);
                        y(N.model_name || "-", "Model");
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
                onClick: async (W) => {
                  W.stopPropagation();
                  const N = await C(e.id);
                  a({
                    title: "Positive Prompt",
                    text: N.positive_prompt || N.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (W) => {
                        W.stopPropagation();
                        const N = await C(e.id);
                        y(
                          N.positive_prompt || N.positive || "-",
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
                onClick: async (W) => {
                  W.stopPropagation();
                  const N = await C(e.id);
                  a({
                    title: "Negative Prompt",
                    text: N.negative_prompt || N.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (W) => {
                        W.stopPropagation();
                        const N = await C(e.id);
                        y(
                          N.negative_prompt || N.negative || "-",
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
                onClick: (W) => {
                  W.stopPropagation(), S();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((W, N) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: W
                    },
                    `${W}-${N}`
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
                  onClick: (W) => {
                    W.stopPropagation(), b();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            Kd,
            {
              isMenuOpen: i,
              setIsMenuOpen: o,
              menuRef: g,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: p,
              onSendToWorkflow: F,
              onRunWithWorkflow: B,
              onRunWithMask: (W) => J(W),
              onEditSource: j,
              onEditTags: S,
              onEditNotes: b,
              onRestore: M,
              showRestore: t.viewScope === "trash",
              onDelete: O,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            $h,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (W) => y(W, "", !0),
              isCopied: u
            }
          )
        ]
      }
    );
  }
);
Gd.displayName = "DetailedImageCard";
const Yd = kl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: i,
      handleSelectToggle: o,
      isMenuOpen: c,
      setIsMenuOpen: u,
      menuRef: g,
      state: w,
      handleAddUnifiedLoader: x,
      handleRestoreWorkflow: v,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: _,
      handleRunWithMask: E,
      handleEditSource: d,
      handleEditTags: f,
      handleEditNotes: h,
      handleDelete: p,
      handleRestore: k
    } = Bd(e), j = w.viewScope === "trash", S = j ? "Delete Permanently" : "Move to Trash";
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
                onClick: o,
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
                onClick: (b) => {
                  b.stopPropagation(), i(b);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            Kd,
            {
              isMenuOpen: c,
              setIsMenuOpen: u,
              menuRef: g,
              settings: w.settings,
              onAddUnifiedLoader: x,
              onRestoreWorkflow: v,
              onSendToWorkflow: y,
              onRunWithWorkflow: _,
              onRunWithMask: E,
              onEditSource: d,
              onEditTags: f,
              onEditNotes: h,
              onDelete: p,
              onRestore: k,
              showRestore: j,
              deleteLabel: S,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
Yd.displayName = "SimpleImageCard";
const Uh = ({ image: e }) => {
  const { state: t } = je();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Yd, { image: e }) : /* @__PURE__ */ s.jsx(Gd, { image: e });
}, Qh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [a, i] = m.useState(!1), o = m.useRef(null);
  return m.useEffect(() => {
    const c = new IntersectionObserver(
      ([g]) => {
        g.isIntersecting && i(!0);
      },
      { rootMargin: n }
    ), u = o.current;
    return u && c.observe(u), () => {
      u && c.unobserve(u);
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
}, Vh = () => {
  const { state: e, dispatch: t } = je(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await bh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (g) {
      console.error("Failed to cancel scan:", g);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: i, total: o } = n.progress, c = o > 0 ? i / o : 0, u = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
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
        children: /* @__PURE__ */ s.jsx(gd, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Dm, { size: 14, className: "meld-success-icon" }),
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
}, qd = () => {
  const { state: e, refreshFavorites: t } = je(), [n, r] = m.useState(!1), [l, a] = m.useState(null), [i, o] = m.useState(null), [c, u] = m.useState(""), [g, w] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const E = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [l]);
  const x = m.useCallback(
    async (E, d, f) => {
      E.stopPropagation();
      const h = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(h))
        try {
          await Bo(d), await t();
        } catch (p) {
          q.error("Failed to delete favorite", p);
        }
    },
    [t]
  ), v = m.useCallback(
    (E, d) => {
      E.stopPropagation(), o(d), u(d.name), w(d.query);
    },
    []
  ), y = m.useCallback(async () => {
    if (!(!i || !c.trim() || !g.trim()))
      try {
        r(!0), await mh(
          i.id,
          c,
          g
        ), await t(), o(null);
      } catch (E) {
        q.error("Failed to update favorite", E), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [i, c, g, t]), _ = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Bo(d.id), await t();
        } catch (f) {
          q.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await ph(e.searchQuery, e.searchQuery), await t();
    } catch (d) {
      q.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: i,
    setEditingFavorite: o,
    editFavoriteName: c,
    setEditFavoriteName: u,
    editFavoriteQuery: g,
    setEditFavoriteQuery: w,
    handleDeleteFavorite: x,
    handleEditFavorite: v,
    handleSaveEditFavorite: y,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, Xd = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = m.useState(!1), [i, o] = m.useState(!1), [c, u] = m.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(en, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Hh = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = je(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: i,
    setEditingFavorite: o,
    editFavoriteName: c,
    setEditFavoriteName: u,
    editFavoriteQuery: g,
    setEditFavoriteQuery: w,
    handleDeleteFavorite: x,
    handleEditFavorite: v,
    handleSaveEditFavorite: y
  } = qd(), [_, E] = m.useState({ top: 0, left: 0 }), d = m.useRef(null), f = m.useRef(null);
  if (yt({
    onEscape: () => {
      i ? o(null) : t();
    },
    enabled: !0
  }), m.useEffect(() => {
    if (e) {
      let S = e.left;
      const b = e.bottom + 5;
      S + 300 > window.innerWidth - 10 && (S = window.innerWidth - 300 - 10), S < 10 && (S = 10), E({ top: b, left: S });
    }
  }, [e]), m.useEffect(() => {
    i && f.current && f.current.focus();
  }, [i]), !e) return null;
  const h = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, p = (k) => {
    k.stopPropagation();
  };
  return Ee.createPortal(
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
          onMouseDown: (k) => k.stopPropagation()
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: d,
          onClick: h,
          onMouseDown: p,
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
                          Gn,
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
                children: r.favorites.map((k) => /* @__PURE__ */ s.jsx(
                  Xd,
                  {
                    fav: k,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: v,
                    onDelete: x
                  },
                  k.id
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
      i && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && o(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ s.jsx(Gn, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => o(null),
                      children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
                                onChange: (k) => u(k.target.value),
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
                                  k.key === "Enter" && y(), k.key === "Escape" && o(null);
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
                                onChange: (k) => w(k.target.value),
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
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), y()), k.key === "Escape" && o(null);
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
                      onClick: () => o(null),
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
}, Os = (e) => {
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
}, Bh = () => {
  const { state: e, dispatch: t, updateSetting: n } = je(), [r, l] = m.useState(e.searchQuery), [a, i] = m.useState([]), [o, c] = m.useState(!1), [u, g] = m.useState([]), [w, x] = m.useState([]), v = e.settings["search.show_all_keywords"], [y, _] = m.useState(-1), [E, d] = m.useState(null), f = m.useRef(null), h = m.useRef(e.searchQuery), p = m.useCallback(async () => {
    if (w.length > 0) return;
    const D = await uh();
    x(D);
  }, [w.length]);
  m.useEffect(() => {
    dh().then((D) => {
      d(D);
    }), v && p();
  }, [p, v]);
  const k = m.useMemo(() => {
    if (!E) return null;
    const D = E.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${D}):(.*)$`, "i");
  }, [E]), j = m.useCallback(() => {
    const D = !v;
    D && p(), n("search.show_all_keywords", D);
  }, [v, p, n]), S = r !== h.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    ch().then((D) => {
      g(D);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    l(e.searchQuery), h.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var D;
    (D = f.current) == null || D.focus();
  }, []);
  const b = m.useCallback(
    (D, W = !0) => {
      h.current !== D && (q.log("SearchBar: triggering search", { query: D }), t({ type: "SET_SEARCH_QUERY", payload: D }), W && c(!1), h.current = D);
    },
    [t]
  );
  m.useEffect(() => {
    const D = setTimeout(async () => {
      if (r === h.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        i([]), c(!1);
        return;
      }
      const W = Os(r), N = W[W.length - 1];
      if (N) {
        const z = N.match(k);
        if (z) {
          const A = z[1].toLowerCase();
          let T = z[2];
          T.startsWith('"') && (T = T.substring(1)), T.endsWith('"') && (T = T.substring(0, T.length - 1));
          const ne = await oh(T, A);
          i(ne), c(ne.length > 0), _(-1);
        } else {
          const A = N.replace(/^([-!])/, "").toLowerCase();
          if (A && E) {
            const T = E.all_prefixes.filter((ne) => ne.startsWith(A)).map((ne) => ({
              type: ne,
              value: "",
              count: 0
            }));
            if (T.length > 0) {
              i(T), c(!0), _(-1);
              return;
            }
          }
          i([]), c(!1);
        }
      } else
        i([]), c(!1);
    }, 300);
    return () => clearTimeout(D);
  }, [
    r,
    e.settings["search.input_suggest"],
    k,
    E
  ]);
  const F = m.useCallback(
    (D) => {
      var de;
      const W = Os(r), z = (W.pop() || "").match(/^([-!])/), A = z ? z[1] : "", ne = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(D.type);
      if (D.value === "") {
        const Q = `${[...W, `${A}${D.type}:`].join(" ").trim()}`;
        l(Q);
      } else {
        const Q = ne ? D.value : `"${D.value}"`, L = `${[
          ...W,
          `${A}${D.type}:${Q}`
        ].join(" ").trim()} `;
        l(L), i([]), c(!1);
      }
      (de = f.current) == null || de.focus();
    },
    [r, E]
  ), M = (D) => {
    D.key === "Enter" ? b(r) : D.key === "Tab" ? o && y >= 0 && (F(a[y]), D.preventDefault()) : D.key === "ArrowDown" ? o && (_((W) => Math.min(W + 1, a.length - 1)), D.preventDefault()) : D.key === "ArrowUp" ? o && (_((W) => Math.max(W - 1, -1)), D.preventDefault()) : D.key === "Escape" && c(!1);
  }, O = m.useCallback(() => {
    l(""), b("");
  }, [b]), B = m.useCallback(
    (D, W, N = !1) => {
      var de;
      if (N) {
        const Q = `${D}:`;
        l(Q), (de = f.current) == null || de.focus();
        return;
      }
      const T = ((E == null ? void 0 : E.no_quote_prefixes) || []).includes(D) ? W : `"${W}"`, ne = `${D}:${T}`;
      l(ne), b(ne);
    },
    [b, E]
  ), J = m.useCallback(
    (D) => {
      l(D), D || b("");
    },
    [b]
  ), C = m.useCallback(() => {
    if (r === h.current || !k)
      return;
    const D = Os(r), W = D[D.length - 1];
    if (!W) return;
    const N = !!W.match(k), z = W.replace(/^([-!])/, "").toLowerCase(), A = z && (E == null ? void 0 : E.all_prefixes.some((T) => T.startsWith(z)));
    (N || A) && c(!0);
  }, [r, k, E]), X = m.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: o,
    setShowSuggestions: c,
    searchSuggestions: u,
    allKeywords: w,
    showAllKeywords: v,
    toggleShowAllKeywords: j,
    selectedIndex: y,
    setSelectedIndex: _,
    inputRef: f,
    isQueryChanged: S,
    handleSearch: b,
    handleKeyDown: M,
    applySuggestion: F,
    clearSearch: O,
    applySearchSuggestion: B,
    handleInputChange: J,
    handleInputFocus: C,
    handleInputBlur: X
  };
}, Ko = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(Jn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Lm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Ym, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Pm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(ud, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(cd, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Tm, { size: 12 });
    default:
      return null;
  }
}, Kh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: i,
  searchSuggestions: o,
  allKeywords: c,
  showAllKeywords: u,
  toggleShowAllKeywords: g,
  applySearchSuggestion: w,
  favorites: x,
  onSelectFavorite: v,
  onEditFavorite: y,
  onDeleteFavorite: _
}) => {
  const E = (p, k, j) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => w(p.type, p.value, j === "all"),
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
      onMouseEnter: (S) => {
        S.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", S.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", S.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (S) => {
        S.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", S.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", S.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Ko(p.type)
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
            children: p.type
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
            children: p.value
          }
        )
      ]
    },
    `${j}-${p.type}:${p.value}:${k}`
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
      children: t.map((p, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), l(p);
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
          children: /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Ko(p.type)
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
                  width: p.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  p.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: p.value === pt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: p.value === pt ? "bold" : "normal"
                },
                children: p.value === pt ? p.type === "tag" ? `Untagged (${pt})` : `No ${p.type} (${pt})` : p.value
              }
            )
          ] })
        },
        `${p.type}:${p.value}`
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
              (p, k) => E(p, k, "quick")
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
                  children: Array.from(new Set(c.map((p) => p.type))).map(
                    (p, k) => E({ type: p, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), h = () => x.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(Gn, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: x.map((p) => /* @__PURE__ */ s.jsx(
              Xd,
              {
                fav: p,
                onSelect: v,
                onEdit: y,
                onDelete: _
              },
              p.id
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
      onMouseDown: (p) => {
        p.preventDefault();
      },
      children: [
        d(),
        f(),
        h()
      ]
    }
  );
}, Gh = () => {
  const { state: e } = je(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: i,
    showAllKeywords: o,
    toggleShowAllKeywords: c,
    selectedIndex: u,
    setSelectedIndex: g,
    inputRef: w,
    isQueryChanged: x,
    handleSearch: v,
    handleKeyDown: y,
    applySuggestion: _,
    clearSearch: E,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: h,
    handleInputBlur: p
  } = Bh(), {
    isSaving: k,
    toastMessage: j,
    editingFavorite: S,
    setEditingFavorite: b,
    editFavoriteName: F,
    setEditFavoriteName: M,
    editFavoriteQuery: O,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: J,
    handleEditFavorite: C,
    handleSaveEditFavorite: X,
    handleSaveFavorite: D
  } = qd();
  yt({
    onEscape: () => b(null),
    enabled: !!S
  });
  const W = m.useRef(null), N = m.useRef(!1);
  m.useEffect(() => {
    S && W.current && W.current.focus();
  }, [S]);
  const z = (T) => {
    T.target === T.currentTarget && (N.current = !0);
  }, A = (T) => {
    T.target === T.currentTarget && N.current && b(null), N.current = !1;
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
                        onClick: () => v(t),
                        style: {
                          background: x ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: x ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: x ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)", x ? (T.currentTarget.style.filter = "brightness(1.15)", T.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (T) => {
                          T.currentTarget.style.transform = "none", x ? (T.currentTarget.style.filter = "none", T.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (T) => {
                          T.currentTarget.style.transform = "translateY(1px)", T.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            Kn,
                            {
                              size: 16,
                              color: x ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: x ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          x && /* @__PURE__ */ s.jsx(
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
                        onChange: (T) => f(T.target.value),
                        onKeyDown: y,
                        onBlur: p,
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
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: D,
                        disabled: k,
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
                        children: /* @__PURE__ */ s.jsx(
                          Gn,
                          {
                            size: 16,
                            color: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ s.jsx(_e, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                Kh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: u,
                  setSelectedIndex: g,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: i,
                  showAllKeywords: o,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (T) => {
                    n(T), v(T);
                  },
                  onEditFavorite: C,
                  onDeleteFavorite: J
                }
              )
            ]
          }
        ),
        S && Ee.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: z,
              onMouseUp: A,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (T) => T.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(Gn, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => b(null),
                          children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
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
                                    value: F,
                                    onChange: (T) => M(T.target.value),
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
                                      T.key === "Enter" && X(), T.key === "Escape" && b(null);
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
                                    value: O,
                                    onChange: (T) => B(T.target.value),
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
                                      T.key === "Enter" && !T.shiftKey && (T.preventDefault(), X()), T.key === "Escape" && b(null);
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
                          onClick: () => b(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: X,
                          disabled: k || !F.trim() || !O.trim(),
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
}, Yh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, a] = m.useState(!0), [i, o] = m.useState(""), [c, u] = m.useState(""), [g, w] = m.useState(!1), [x, v] = m.useState(null), [y, _] = m.useState(""), [E, d] = m.useState(!1), f = m.useRef(null), h = m.useCallback(async () => {
    a(!0);
    try {
      const O = await Pi();
      r(O);
    } catch (O) {
      console.error("Failed to fetch tags:", O);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    h();
  }, [h]), m.useEffect(() => {
    x !== null && f.current && (f.current.focus(), f.current.select());
  }, [x]);
  const p = async (O) => {
    O.preventDefault();
    const B = c.trim();
    if (!(!B || g)) {
      if (B.toLowerCase() === pt) {
        alert(
          `Tag name '${pt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((J) => J.name.toLowerCase() === B.toLowerCase())) {
        alert(`Tag "${B}" already exists.`);
        return;
      }
      w(!0);
      try {
        await xh(B), u(""), await h();
      } catch (J) {
        console.error("Failed to add tag:", J);
      } finally {
        w(!1);
      }
    }
  }, k = async (O, B) => {
    if (confirm(`Are you sure you want to delete tag "${B}"?`))
      try {
        await _h(O), await h();
      } catch (J) {
        console.error("Failed to delete tag:", J);
      }
  }, j = (O) => {
    v(O.id), _(O.name);
  }, S = () => {
    v(null), _("");
  }, b = async (O) => {
    O.preventDefault();
    const B = y.trim();
    if (!B || x === null || E) return;
    if (B.toLowerCase() === pt) {
      alert(
        `Tag name '${pt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const J = n.find((C) => C.id === x);
    if (J && J.name === B) {
      S();
      return;
    }
    if (n.some(
      (C) => C.id !== x && C.name.toLowerCase() === B.toLowerCase()
    )) {
      alert(`Tag "${B}" already exists.`);
      return;
    }
    d(!0);
    try {
      await kh(x, B), S(), await h();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, F = (O) => {
    t(`tag:${O}`);
  }, M = m.useMemo(() => n.filter(
    (O) => O.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Jn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(_e, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: p, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (O) => u(O.target.value),
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
              /* @__PURE__ */ s.jsx(Ti, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Kn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (O) => o(O.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: M.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : M.map((O) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: x === O.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: b,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (B) => _(B.target.value),
                onKeyDown: (B) => B.key === "Escape" && S()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: E || !y.trim(),
                children: /* @__PURE__ */ s.jsx(Mi, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: S,
                disabled: E,
                children: /* @__PURE__ */ s.jsx(_e, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: O.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => F(O.name),
              children: /* @__PURE__ */ s.jsx(Kn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(O),
              children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(O.id, O.name),
              children: /* @__PURE__ */ s.jsx(en, { size: 14 })
            }
          )
        ] })
      ] }) }, O.id)) })
    ] })
  ] });
}, qh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: i, lineageImages: o, settings: c } = e, {
    handleEditTags: u,
    handleEditNotes: g,
    handleRestore: w,
    handleUpdateUserNotes: x
  } = us(e, t), { getParentChain: v } = Hd(a, c), [y, _] = m.useState(!1), [E, d] = m.useState(
    c["viewer.show_details_by_default"]
  ), [f, h] = m.useState(null), p = f ?? c["viewer.show_thumbnails"], [k, j] = m.useState(!1), [S, b] = m.useState(!1), [F, M] = m.useState(null), [O, B] = m.useState(null), [J, C] = m.useState(
    null
  ), X = m.useRef(null), D = m.useRef(!0);
  m.useEffect(() => (D.current = !0, () => {
    D.current = !1;
  }), []);
  const W = m.useRef(l);
  m.useEffect(() => {
    W.current = l;
  }, [l]);
  const N = m.useMemo(() => {
    const $ = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return i === "lineage" ? o : a.filter(
      (G) => G.exists !== !1 && (c["gallery.show_parent_images"] || !G.has_children || $)
    );
  }, [i, o, a, c, e.searchQuery]), z = l === null ? -1 : N.findIndex(($) => $.id === l), A = (i === "lineage" && o.length > 0 ? o : a).find(($) => $.id === l), T = m.useCallback(
    async ($ = !1) => {
      if (!A) return;
      const G = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!$ && G === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [A.id],
            hasLineage: !!(A.parent_id || A.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const I = e.viewScope === "trash", ee = /* @__PURE__ */ new Set([A.id]);
        if (G === "lineage") {
          const Y = await La(A.id);
          for (const ae of Y)
            ee.add(ae.id);
        }
        if (!D.current || W.current === null) return;
        if (N.length > ee.size) {
          let Y = !1;
          for (let ae = z + 1; ae < N.length; ae++)
            if (!ee.has(N[ae].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: N[ae].id, mode: i }
              }), Y = !0;
              break;
            }
          if (!Y) {
            for (let ae = z - 1; ae >= 0; ae--)
              if (!ee.has(N[ae].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: N[ae].id, mode: i }
                }), Y = !0;
                break;
              }
          }
          Y || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Ta(Array.from(ee), I), !I) {
          const Y = N.filter(
            (ae) => ee.has(ae.id)
          );
          M(Y), B(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ee) });
      } catch (I) {
        t({
          type: "SET_ERROR",
          payload: I instanceof Error ? I.message : String(I)
        });
      }
    },
    [
      A,
      y,
      c,
      e.viewScope,
      N,
      z,
      i,
      t
    ]
  ), ne = m.useCallback(() => {
    A && u(A);
  }, [A, u]), de = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), Q = m.useCallback(async () => {
    const $ = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (z === 0 && i === "gallery" && e.pagination.hasMore && !S && $) {
      b(!0);
      try {
        const G = e.pagination.limit, I = e.pagination.total, ee = Math.max(0, I - G), Y = await _l(
          ee,
          G,
          e.searchQuery
        );
        if (!D.current || (t({ type: "APPEND_IMAGES", payload: Y }), W.current === null)) return;
        if (Y.images.length > 0) {
          const ae = Y.images[Y.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ae.id, mode: "gallery" }
          });
        }
      } catch (G) {
        console.error("Failed to jump to end:", G);
      } finally {
        b(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    z,
    i,
    e.pagination,
    e.searchQuery,
    c,
    t,
    S,
    y
  ]), L = m.useCallback(
    ($) => {
      $ && "stopPropagation" in $ && $.stopPropagation();
      const G = X.current;
      G && (document.fullscreenElement ? document.exitFullscreen() : G.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), R = m.useCallback(async () => {
    A && (N.length > 1 ? de() : t({ type: "CLOSE_VIEWER" }), await w(A));
  }, [A, N.length, de, w, t]), le = m.useCallback(async () => {
    if (!F || F.length === 0) return;
    const $ = F.map((I) => I.id), G = $[0];
    try {
      const I = await Li($);
      if (!D.current) return;
      if (t({ type: "ADD_IMAGES", payload: F }), e.viewScope === "trash") {
        const ee = I.restored_ids || $;
        t({ type: "REMOVE_IMAGES", payload: ee });
      }
      if (M(null), !D.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: G, mode: i }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [F, t, i, e.viewScope]), K = m.useCallback(async () => {
    if (F && F.length > 0)
      await le();
    else if (O && O.type === "tags") {
      const { imageId: $, addTags: G, removeTags: I } = O;
      try {
        await Pa([$], G, I);
        const ee = (i === "lineage" ? o : a).find((Y) => Y.id === $);
        if (ee) {
          const Y = [...ee.tags];
          for (const et of G)
            Y.includes(et) || Y.push(et);
          const ae = Y.filter((et) => !I.includes(et));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ee, tags: ae }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: $, mode: i }
          });
        }
        B(null);
      } catch (ee) {
        t({
          type: "SET_ERROR",
          payload: ee instanceof Error ? ee.message : String(ee)
        });
      }
    }
  }, [
    F,
    O,
    le,
    a,
    o,
    i,
    t
  ]), oe = m.useCallback(
    async ($) => {
      if (!$ || !A) return;
      const G = A.id, I = [...A.tags], ee = $.split(/\s+/), Y = [], ae = [];
      let et = !1, wn = !1, Rt = !1;
      for (const he of ee)
        if (he.startsWith("tag:")) {
          const ue = he.substring(4);
          ue && !I.includes(ue) && !Y.includes(ue) && Y.push(ue);
        } else if (he.startsWith("-tag:")) {
          const ue = he.substring(5);
          ue && I.includes(ue) && !ae.includes(ue) && ae.push(ue);
        } else if (he.startsWith("tag-toggle:")) {
          const ue = he.substring(11);
          ue && (I.includes(ue) ? ae.includes(ue) || ae.push(ue) : Y.includes(ue) || Y.push(ue));
        } else he === "next" ? et = !0 : he === "prev" ? wn = !0 : he === "delete" && (Rt = !0);
      if (Y.length > 0 || ae.length > 0)
        try {
          await Pa(
            [G],
            Y,
            ae
          );
          const he = [...I];
          for (const vt of Y)
            he.includes(vt) || he.push(vt);
          const ue = he.filter((vt) => !ae.includes(vt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...A, id: G, tags: ue }
          }), B({
            type: "tags",
            imageId: G,
            addTags: [...ae],
            removeTags: [...Y]
          }), M(null);
        } catch (he) {
          console.error("Failed to update tags via shortcut:", he);
        }
      Rt ? T(!0) : et ? de() : wn && Q();
    },
    [A, t, de, Q, T]
  );
  m.useEffect(() => {
    const $ = (I) => {
      const ee = I.target, Y = ee.tagName === "INPUT" || ee.tagName === "TEXTAREA" || ee.isContentEditable;
      if (Y && I.key !== "Escape") {
        I.key === "Enter" && (I.ctrlKey || I.metaKey) && I.preventDefault();
        return;
      }
      if (l === null) return;
      const ae = I.key === "Delete" || I.key === "Backspace", et = I.key === "ArrowRight" || I.key === "ArrowLeft", wn = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        I.key
      ), Rt = I.key === "Escape", he = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z" || I.code === "KeyZ"), ue = /^[0-9]$/.test(I.key) && !I.ctrlKey && !I.metaKey && !I.altKey && I.code !== "KeyZ";
      if (ae || et || wn || Rt || he || ue)
        if (Y)
          if (Rt) {
            if (e.activeModal.type !== "none") {
              I.preventDefault(), I.stopPropagation();
              return;
            }
            I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
          } else
            return;
        else {
          if (Rt && e.activeModal.type !== "none") {
            I.preventDefault(), I.stopPropagation();
            return;
          }
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        }
      else
        return;
      if (I.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (I.key === "ArrowRight")
        de();
      else if (I.key === "ArrowLeft")
        Q();
      else if (I.key === "f" || I.key === "F")
        L(I);
      else if (I.key === "i" || I.key === "I")
        d((vt) => !vt);
      else if (I.key === "t" || I.key === "T")
        ne();
      else if ((I.key === "r" || I.key === "R") && e.viewScope === "trash")
        R();
      else if (I.key === "Delete")
        T();
      else if ((I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z"))
        K();
      else if (ue && !Y) {
        const vt = `viewer.shortcut.${I.key}`, it = c[vt];
        typeof it == "string" && it && (C(I.key), setTimeout(() => {
          D.current && C(null);
        }, 500), oe(it));
      }
    };
    window.addEventListener("keydown", $, { capture: !0 });
    const G = () => {
      const I = !!document.fullscreenElement;
      _(I), d(I ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", G), () => {
      window.removeEventListener("keydown", $, { capture: !0 }), document.removeEventListener("fullscreenchange", G);
    };
  }, [
    l,
    t,
    L,
    de,
    Q,
    c,
    T,
    e.activeModal.type,
    K,
    ne,
    R,
    e.viewScope,
    oe
  ]), m.useEffect(() => {
    l !== null && r(l).catch(($) => {
      console.error("Failed to fetch full image details for viewer:", $);
    });
  }, [l, r]), m.useEffect(() => {
    i === "lineage" && l !== null && o.length === 0 && (j(!0), La(l).then(($) => {
      D.current && t({ type: "SET_LINEAGE", payload: $ });
    }).catch(($) => {
      console.error("Failed to fetch lineage:", $);
    }).finally(() => {
      D.current && j(!1);
    }));
  }, [i, l, o.length, t]), m.useEffect(() => {
    i !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || z !== -1 && z >= N.length - 15 && n();
  }, [
    l,
    N.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    z
  ]);
  const V = m.useMemo(() => {
    if (!p || z === -1) return [];
    const $ = c["viewer.thumbnail_window_size"], G = Math.floor($ / 2);
    let I = Math.max(0, z - G);
    const ee = Math.min(N.length, I + $);
    return ee === N.length && (I = Math.max(0, ee - $)), N.slice(I, ee).map((Y, ae) => ({
      img: Y,
      absIndex: I + ae
    }));
  }, [N, z, c, p]), ke = m.useMemo(() => A ? v(A) : [], [A, v]);
  return m.useEffect(() => {
    var $, G;
    if (l !== null) {
      if (p) {
        const I = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        I && I.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      (($ = document.activeElement) == null ? void 0 : $.tagName) === "CANVAS" && document.activeElement.blur(), (G = X.current) == null || G.focus();
    }
  }, [l, p]), m.useEffect(() => {
    if (l === null || N.length === 0) return;
    const $ = N.findIndex(
      (Y) => Y.id === l
    );
    if ($ === -1) return;
    const G = (Y) => Ke(Y), I = [
      $ + 1,
      $ + 2,
      $ - 1
    ], ee = setTimeout(() => {
      for (const Y of I)
        if (Y >= 0 && Y < N.length) {
          const ae = N[Y], et = new Image();
          et.src = G(ae);
        }
    }, 150);
    return () => clearTimeout(ee);
  }, [l, N]), {
    isFullscreen: y,
    showDetails: E,
    setShowDetails: d,
    showThumbnails: p,
    setShowThumbnailsOverride: h,
    isLoadingLineage: k,
    isJumping: S,
    activeShortcutKey: J,
    lastDeletedImages: F,
    setLastDeletedImages: M,
    overlayRef: X,
    handleNext: de,
    handlePrevious: Q,
    handleDelete: T,
    handleUpdateUserNotes: x,
    handleEditNotes: () => A && g(A),
    handleTagEdit: ne,
    handleRestore: R,
    handleUndo: K,
    toggleFullscreen: L,
    currentIndex: z,
    currentThumbnails: N,
    image: A,
    windowedThumbnails: V,
    parentChain: ke
  };
}, Xh = ({
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
}) }) : null, Jh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: i
}) => {
  const [o, c] = m.useState("idle");
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
            (w, x) => w.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: w.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (v) => {
                  v.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: w.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: x === 0 ? "Source" : x === 1 ? "Grand-Source" : `Ancestor (S${x + 1})`,
                alt: "source thumb"
              },
              w.id || x
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
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((w) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: w }, w)) })
        ] }),
        g && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            o === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (w) => {
                w.stopPropagation(), i == null || i();
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
}, Jd = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ke(e);
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
              children: a ? /* @__PURE__ */ s.jsx(ud, { size: 12 }) : /* @__PURE__ */ s.jsx(cd, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Jd.displayName = "ThumbnailItem";
const Zh = ({
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
    Jd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  i === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Ar, { className: "animate-spin", size: 20 }) })
] }) });
function eg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = je(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: i,
    showThumbnails: o,
    setShowThumbnailsOverride: c,
    isLoadingLineage: u,
    isJumping: g,
    activeShortcutKey: w,
    setLastDeletedImages: x,
    overlayRef: v,
    handleNext: y,
    handlePrevious: _,
    handleTagEdit: E,
    handleEditNotes: d,
    handleRestore: f,
    toggleFullscreen: h,
    image: p,
    windowedThumbnails: k,
    parentChain: j
  } = qh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), S = m.useRef(null), { executeWorkflow: b } = $d();
  if (!p) return null;
  const { viewerImageId: F, viewerMode: M } = e, O = Ke(p), B = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ee.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: v,
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
              onClick: (J) => J.stopPropagation(),
              children: [
                B && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: f,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Ar, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(md, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: E,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(Jn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Fm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: h,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(Hm, { size: 20 }) : /* @__PURE__ */ s.jsx(Vm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(_e, { size: 20 })
                    }
                  )
                ] }),
                B && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: _,
                    type: "button",
                    disabled: g,
                    children: /* @__PURE__ */ s.jsx(dd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  g && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Ar, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: S,
                      src: O,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${g ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                B && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: y,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(fd, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Jh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: B,
                    parentChain: j,
                    dispatch: t,
                    onEditNotes: d
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Zh,
                  {
                    windowedThumbnails: k,
                    viewerImageId: F,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: u,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Xh,
                  {
                    settings: e.settings,
                    activeShortcutKey: w
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Wd,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (J) => {
                if (e.activeModal.type === "workflow_selection") {
                  const C = e.activeModal.maskFilename;
                  for (const X of e.activeModal.images)
                    await b(J, X, C);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Qd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Ud,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: x
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Vd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(_d, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(zd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Ad,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            Sd,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Fd,
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
const tg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = je(), [a, i] = m.useState("gallery"), [o, c] = m.useState(""), [u, g] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    g(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const w = e.searchQuery.trim() !== "", x = m.useRef(null), v = m.useRef(null), y = m.useMemo(() => {
    const E = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || E));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), _ = m.useMemo(
    () => y.slice(0, u),
    [y, u]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (q.log(
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
            q.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          u < y.length ? (q.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: u,
              newLimit: Math.min(
                u + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), g((h) => h + e.pagination.limit)) : e.pagination.hasMore ? (q.log(
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
    ), d = x.current;
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
    const E = e.viewerImageId ?? v.current;
    if (E !== null && y.some((f) => f.id === E)) {
      const f = y.findIndex((p) => p.id === E);
      if (f >= u) {
        g(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const h = document.querySelector(
        `[data-image-id="${E}"]`
      );
      h && (h.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
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
    setViewMode: i,
    lastSearchQuery: o,
    setLastSearchQuery: c,
    localLimit: u,
    displayedImages: y,
    visibleImages: _,
    isSearchActive: w,
    loadMoreRef: x
  };
}, ng = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = je(), { handleRunWithWorkflow: l } = us(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const i = e.viewScope === "trash", o = () => {
    const u = e.images.filter(
      (w) => e.selectedIds.has(w.id)
    ), g = /* @__PURE__ */ new Set();
    for (const w of u)
      if (w.tags)
        for (const x of w.tags)
          g.add(x);
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
                  Ar,
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
                  en,
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
                  Jn,
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
                  en,
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
              /* @__PURE__ */ s.jsx(_e, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, rg = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: i,
    setLastSearchQuery: o,
    localLimit: c,
    displayedImages: u,
    visibleImages: g,
    isSearchActive: w,
    loadMoreRef: x
  } = tg(), [v, y] = m.useState(!1), [_, E] = m.useState(null), d = m.useRef(null), f = m.useCallback(() => {
    d.current && (E(
      d.current.getBoundingClientRect()
    ), y(!0));
  }, []), h = m.useCallback(
    (p) => {
      t({ type: "SET_SEARCH_QUERY", payload: p }), o(p), a("search"), y(!1);
    },
    [t, o, a]
  );
  return q.log("GalleryPanel: rendering", {
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
              /* @__PURE__ */ s.jsx(en, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (p) => r("gallery.trash.show_missing", p.target.checked)
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
                  /* @__PURE__ */ s.jsx(_e, { size: 14 }),
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
                  color: v ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  Gn,
                  {
                    size: 14,
                    fill: v ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
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
                children: /* @__PURE__ */ s.jsx(Kn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx($m, { size: 14 }) : /* @__PURE__ */ s.jsx(md, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Jn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(Am, { size: 14 })
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
                  Ar,
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
                children: /* @__PURE__ */ s.jsx(Km, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Gh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Vh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          Yh,
          {
            onClose: () => a("gallery"),
            onSearch: (p) => {
              t({ type: "SET_SEARCH_QUERY", payload: p }), a("search");
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
              children: g.map((p) => {
                const k = e.settings["sidebar.thumbnail_size"] || 100, j = e.settings["gallery.view_mode"] === "grid_only", S = j && p.width && p.height ? Math.min(
                  k,
                  k * p.width / p.height
                ) + 10 : j ? k + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": p.id,
                    style: {
                      width: j ? "auto" : "100%",
                      flexShrink: 0,
                      display: j ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      Qh,
                      {
                        height: j ? k + 10 : Math.max(k, 150),
                        style: {
                          width: typeof S == "number" ? `${S}px` : S,
                          minWidth: typeof S == "number" ? `${S}px` : S,
                          display: j ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(Uh, { image: p })
                      }
                    )
                  },
                  p.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: x,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                c >= u.length && !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(ng, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(eg, {}),
        /* @__PURE__ */ s.jsx(Wh, {}),
        v && /* @__PURE__ */ s.jsx(
          Hh,
          {
            anchorRect: _,
            onClose: () => y(!1),
            onSelect: h
          }
        )
      ]
    }
  );
};
Go.registerExtension({
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
const lg = document.getElementById(
  "meld-gallery-style"
);
if (!lg) {
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
let ol = null, ct = null;
Go.registerExtension({
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
      }, Z.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), Z.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), Z.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), q.log("Import completed.");
      }), Z.addEventListener(
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
            q.log("render called", {
              el: n,
              galleryRoot: ol,
              galleryContainer: ct
            }), ct || (q.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column"), n.contains(ct) || (q.log("Appending galleryContainer to el"), n.appendChild(ct)), ol ? q.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (q.log("Creating new gallery root"), ol = sd(ct), ol.render(
              kl.createElement(
                wh,
                null,
                kl.createElement(rg)
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
