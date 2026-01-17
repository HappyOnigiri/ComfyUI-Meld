import { api as B } from "../../../scripts/api.js";
import { app as vo } from "../../../scripts/app.js";
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), Zc = Symbol.for("react.portal"), Jc = Symbol.for("react.fragment"), qc = Symbol.for("react.strict_mode"), ed = Symbol.for("react.profiler"), td = Symbol.for("react.provider"), nd = Symbol.for("react.context"), rd = Symbol.for("react.forward_ref"), ld = Symbol.for("react.suspense"), id = Symbol.for("react.memo"), sd = Symbol.for("react.lazy"), la = Symbol.iterator;
function ad(e) {
  return e === null || typeof e != "object" ? null : (e = la && e[la] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _o = Object.assign, So = {};
function Nn(e, t, n) {
  this.props = e, this.context = t, this.refs = So, this.updater = n || xo;
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ko() {
}
ko.prototype = Nn.prototype;
function is(e, t, n) {
  this.props = e, this.context = t, this.refs = So, this.updater = n || xo;
}
var ss = is.prototype = new ko();
ss.constructor = is;
_o(ss, Nn.prototype);
ss.isPureReactComponent = !0;
var ia = Array.isArray, Eo = Object.prototype.hasOwnProperty, as = { current: null }, Co = { key: !0, ref: !0, __self: !0, __source: !0 };
function No(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Eo.call(t, r) && !Co.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: mr, type: e, key: i, ref: s, props: l, _owner: as.current };
}
function od(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function os(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function ud(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var sa = /\/+/g;
function bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ud("" + e.key) : t.toString(36);
}
function br(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case mr:
        case Zc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + bl(s, 0) : r, ia(l) ? (n = "", e != null && (n = e.replace(sa, "$&/") + "/"), br(l, t, n, "", function(d) {
    return d;
  })) : l != null && (os(l) && (l = od(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(sa, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ia(e)) for (var o = 0; o < e.length; o++) {
    i = e[o];
    var u = r + bl(i, o);
    s += br(i, t, n, u, l);
  }
  else if (u = ad(e), typeof u == "function") for (e = u.call(e), o = 0; !(i = e.next()).done; ) i = i.value, u = r + bl(i, o++), s += br(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return br(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function cd(e) {
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
var _e = { current: null }, Fr = { transition: null }, dd = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: Fr, ReactCurrentOwner: as };
function jo() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: wr, forEach: function(e, t, n) {
  wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!os(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = Nn;
H.Fragment = Jc;
H.Profiler = ed;
H.PureComponent = is;
H.StrictMode = qc;
H.Suspense = ld;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dd;
H.act = jo;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = _o({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = as.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Eo.call(t, u) && !Co.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: mr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
H.createContext = function(e) {
  return e = { $$typeof: nd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: td, _context: e }, e.Consumer = e;
};
H.createElement = No;
H.createFactory = function(e) {
  var t = No.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: rd, render: e };
};
H.isValidElement = os;
H.lazy = function(e) {
  return { $$typeof: sd, _payload: { _status: -1, _result: e }, _init: cd };
};
H.memo = function(e, t) {
  return { $$typeof: id, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
H.unstable_act = jo;
H.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
H.useContext = function(e) {
  return _e.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
H.useId = function() {
  return _e.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return _e.current.useRef(e);
};
H.useState = function(e) {
  return _e.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return _e.current.useTransition();
};
H.version = "18.3.1";
wo.exports = H;
var w = wo.exports;
const aa = /* @__PURE__ */ Xc(w);
var Io = { exports: {} }, ze = {}, To = { exports: {} }, Mo = {};
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
  function t(T, F) {
    var N = T.length;
    T.push(F);
    e: for (; 0 < N; ) {
      var A = N - 1 >>> 1, I = T[A];
      if (0 < l(I, F)) T[A] = F, T[N] = I, N = A;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var F = T[0], N = T.pop();
    if (N !== F) {
      T[0] = N;
      e: for (var A = 0, I = T.length, Y = I >>> 1; A < Y; ) {
        var W = 2 * (A + 1) - 1, Ue = T[W], Qe = W + 1, ht = T[Qe];
        if (0 > l(Ue, N)) Qe < I && 0 > l(ht, Ue) ? (T[A] = ht, T[Qe] = N, A = Qe) : (T[A] = Ue, T[W] = N, A = W);
        else if (Qe < I && 0 > l(ht, N)) T[A] = ht, T[Qe] = N, A = Qe;
        else break e;
      }
    }
    return F;
  }
  function l(T, F) {
    var N = T.sortIndex - F.sortIndex;
    return N !== 0 ? N : T.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, o = s.now();
    e.unstable_now = function() {
      return s.now() - o;
    };
  }
  var u = [], d = [], y = 1, g = null, h = 3, v = !1, x = !1, C = !1, z = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var F = n(d); F !== null; ) {
      if (F.callback === null) r(d);
      else if (F.startTime <= T) r(d), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(d);
    }
  }
  function E(T) {
    if (C = !1, m(T), !x) if (n(u) !== null) x = !0, U(P);
    else {
      var F = n(d);
      F !== null && Q(E, F.startTime - T);
    }
  }
  function P(T, F) {
    x = !1, C && (C = !1, c(L), L = -1), v = !0;
    var N = h;
    try {
      for (m(F), g = n(u); g !== null && (!(g.expirationTime > F) || T && !p()); ) {
        var A = g.callback;
        if (typeof A == "function") {
          g.callback = null, h = g.priorityLevel;
          var I = A(g.expirationTime <= F);
          F = e.unstable_now(), typeof I == "function" ? g.callback = I : g === n(u) && r(u), m(F);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var Y = !0;
      else {
        var W = n(d);
        W !== null && Q(E, W.startTime - F), Y = !1;
      }
      return Y;
    } finally {
      g = null, h = N, v = !1;
    }
  }
  var R = !1, S = null, L = -1, D = 5, $ = -1;
  function p() {
    return !(e.unstable_now() - $ < D);
  }
  function k() {
    if (S !== null) {
      var T = e.unstable_now();
      $ = T;
      var F = !0;
      try {
        F = S(!0, T);
      } finally {
        F ? O() : (R = !1, S = null);
      }
    } else R = !1;
  }
  var O;
  if (typeof f == "function") O = function() {
    f(k);
  };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), j = _.port2;
    _.port1.onmessage = k, O = function() {
      j.postMessage(null);
    };
  } else O = function() {
    z(k, 0);
  };
  function U(T) {
    S = T, R || (R = !0, O());
  }
  function Q(T, F) {
    L = z(function() {
      T(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    x || v || (x = !0, U(P));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = h;
    }
    var N = h;
    h = F;
    try {
      return T();
    } finally {
      h = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, F) {
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
    var N = h;
    h = T;
    try {
      return F();
    } finally {
      h = N;
    }
  }, e.unstable_scheduleCallback = function(T, F, N) {
    var A = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? A + N : A) : N = A, T) {
      case 1:
        var I = -1;
        break;
      case 2:
        I = 250;
        break;
      case 5:
        I = 1073741823;
        break;
      case 4:
        I = 1e4;
        break;
      default:
        I = 5e3;
    }
    return I = N + I, T = { id: y++, callback: F, priorityLevel: T, startTime: N, expirationTime: I, sortIndex: -1 }, N > A ? (T.sortIndex = N, t(d, T), n(u) === null && T === n(d) && (C ? (c(L), L = -1) : C = !0, Q(E, N - A))) : (T.sortIndex = I, t(u, T), x || v || (x = !0, U(P))), T;
  }, e.unstable_shouldYield = p, e.unstable_wrapCallback = function(T) {
    var F = h;
    return function() {
      var N = h;
      h = F;
      try {
        return T.apply(this, arguments);
      } finally {
        h = N;
      }
    };
  };
})(Mo);
To.exports = Mo;
var fd = To.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd = w, Pe = fd;
function M(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Lo = /* @__PURE__ */ new Set(), Zn = {};
function Kt(e, t) {
  yn(e, t), yn(e + "Capture", t);
}
function yn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Lo.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = Object.prototype.hasOwnProperty, md = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oa = {}, ua = {};
function hd(e) {
  return ui.call(ua, e) ? !0 : ui.call(oa, e) ? !1 : md.test(e) ? ua[e] = !0 : (oa[e] = !0, !1);
}
function gd(e, t, n, r) {
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
function yd(e, t, n, r) {
  if (t === null || typeof t > "u" || gd(e, t, n, r)) return !0;
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
function Se(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var us = /[\-:]([a-z])/g;
function cs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    us,
    cs
  );
  pe[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(us, cs);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(us, cs);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ds(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yd(t, n, l, r) && (n = null), r || l === null ? hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xr = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), fs = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Po = Symbol.for("react.provider"), zo = Symbol.for("react.context"), ps = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), fi = Symbol.for("react.suspense_list"), ms = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), Do = Symbol.for("react.offscreen"), ca = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object" ? null : (e = ca && e[ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var re = Object.assign, Fl;
function bn(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Al = !1;
function $l(e, t) {
  if (!e || Al) return "";
  Al = !0;
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
`), i = r.stack.split(`
`), s = l.length - 1, o = i.length - 1; 1 <= s && 0 <= o && l[s] !== i[o]; ) o--;
      for (; 1 <= s && 0 <= o; s--, o--) if (l[s] !== i[o]) {
        if (s !== 1 || o !== 1)
          do
            if (s--, o--, 0 > o || l[s] !== i[o]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= o);
        break;
      }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? bn(e) : "";
}
function vd(e) {
  switch (e.tag) {
    case 5:
      return bn(e.type);
    case 16:
      return bn("Lazy");
    case 13:
      return bn("Suspense");
    case 19:
      return bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $l(e.type, !1), e;
    case 11:
      return e = $l(e.type.render, !1), e;
    case 1:
      return e = $l(e.type, !0), e;
    default:
      return "";
  }
}
function pi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qt:
      return "Fragment";
    case Jt:
      return "Portal";
    case ci:
      return "Profiler";
    case fs:
      return "StrictMode";
    case di:
      return "Suspense";
    case fi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zo:
      return (e.displayName || "Context") + ".Consumer";
    case Po:
      return (e._context.displayName || "Context") + ".Provider";
    case ps:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ms:
      return t = e.displayName || null, t !== null ? t : pi(e.type) || "Memo";
    case yt:
      t = e._payload, e = e._init;
      try {
        return pi(e(t));
      } catch {
      }
  }
  return null;
}
function wd(e) {
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
      return pi(t);
    case 8:
      return t === fs ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function Ro(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xd(e) {
  var t = Ro(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = xd(e));
}
function Oo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ro(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Yr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function da(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function bo(e, t) {
  t = t.checked, t != null && ds(e, "checked", t, !1);
}
function hi(e, t) {
  bo(e, t);
  var n = Lt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(M(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function Fo(e, t) {
  var n = Lt(t.value), r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ao(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ao(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, $o = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
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
}, _d = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
  _d.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e];
  });
});
function Vo(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px";
}
function Uo(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Sd = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wi(e, t) {
  if (t) {
    if (Sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function xi(e, t) {
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
var _i = null;
function hs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Si = null, fn = null, pn = null;
function ha(e) {
  if (e = yr(e)) {
    if (typeof Si != "function") throw Error(M(280));
    var t = e.stateNode;
    t && (t = El(t), Si(e.stateNode, e.type, t));
  }
}
function Qo(e) {
  fn ? pn ? pn.push(e) : pn = [e] : fn = e;
}
function Wo() {
  if (fn) {
    var e = fn, t = pn;
    if (pn = fn = null, ha(e), t) for (e = 0; e < t.length; e++) ha(t[e]);
  }
}
function Ho(e, t) {
  return e(t);
}
function Bo() {
}
var Vl = !1;
function Go(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return Ho(e, t, n);
  } finally {
    Vl = !1, (fn !== null || pn !== null) && (Bo(), Wo());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var ki = !1;
if (ct) try {
  var Mn = {};
  Object.defineProperty(Mn, "passive", { get: function() {
    ki = !0;
  } }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
} catch {
  ki = !1;
}
function kd(e, t, n, r, l, i, s, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (y) {
    this.onError(y);
  }
}
var Un = !1, Xr = null, Zr = !1, Ei = null, Ed = { onError: function(e) {
  Un = !0, Xr = e;
} };
function Cd(e, t, n, r, l, i, s, o, u) {
  Un = !1, Xr = null, kd.apply(Ed, arguments);
}
function Nd(e, t, n, r, l, i, s, o, u) {
  if (Cd.apply(this, arguments), Un) {
    if (Un) {
      var d = Xr;
      Un = !1, Xr = null;
    } else throw Error(M(198));
    Zr || (Zr = !0, Ei = d);
  }
}
function Yt(e) {
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
function Ko(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ga(e) {
  if (Yt(e) !== e) throw Error(M(188));
}
function jd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yt(e), t === null) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ga(l), e;
        if (i === r) return ga(l), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (o === r) {
          s = !0, r = l, n = i;
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (o === r) {
            s = !0, r = i, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Yo(e) {
  return e = jd(e), e !== null ? Xo(e) : null;
}
function Xo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zo = Pe.unstable_scheduleCallback, ya = Pe.unstable_cancelCallback, Id = Pe.unstable_shouldYield, Td = Pe.unstable_requestPaint, ie = Pe.unstable_now, Md = Pe.unstable_getCurrentPriorityLevel, gs = Pe.unstable_ImmediatePriority, Jo = Pe.unstable_UserBlockingPriority, Jr = Pe.unstable_NormalPriority, Ld = Pe.unstable_LowPriority, qo = Pe.unstable_IdlePriority, xl = null, rt = null;
function Pd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function") try {
    rt.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xe = Math.clz32 ? Math.clz32 : Rd, zd = Math.log, Dd = Math.LN2;
function Rd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zd(e) / Dd | 0) | 0;
}
var kr = 64, Er = 4194304;
function An(e) {
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
function qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? r = An(o) : (i &= s, i !== 0 && (r = An(i)));
  } else s = n & ~l, s !== 0 ? r = An(s) : i !== 0 && (r = An(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Od(e, t) {
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
function bd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Xe(i), o = 1 << s, u = l[s];
    u === -1 ? (!(o & n) || o & r) && (l[s] = Od(o, t)) : u <= t && (e.expiredLanes |= o), i &= ~o;
  }
}
function Ci(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function eu() {
  var e = kr;
  return kr <<= 1, !(kr & 4194240) && (kr = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function Fd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Xe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ys(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var X = 0;
function tu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var nu, vs, ru, lu, iu, Ni = !1, Cr = [], kt = null, Et = null, Ct = null, er = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), wt = [], Ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function va(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && vs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function $d(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return kt = Ln(kt, e, t, n, r, l), !0;
    case "dragenter":
      return Et = Ln(Et, e, t, n, r, l), !0;
    case "mouseover":
      return Ct = Ln(Ct, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return er.set(i, Ln(er.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, tr.set(i, Ln(tr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function su(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ko(n), t !== null) {
          e.blockedOn = t, iu(e.priority, function() {
            ru(n);
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
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _i = r, n.target.dispatchEvent(r), _i = null;
    } else return t = yr(n), t !== null && vs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wa(e, t, n) {
  Ar(e) && n.delete(t);
}
function Vd() {
  Ni = !1, kt !== null && Ar(kt) && (kt = null), Et !== null && Ar(Et) && (Et = null), Ct !== null && Ar(Ct) && (Ct = null), er.forEach(wa), tr.forEach(wa);
}
function Pn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Vd)));
}
function nr(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Cr.length) {
    Pn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (kt !== null && Pn(kt, e), Et !== null && Pn(Et, e), Ct !== null && Pn(Ct, e), er.forEach(t), tr.forEach(t), n = 0; n < wt.length; n++) r = wt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && (n = wt[0], n.blockedOn === null); ) su(n), n.blockedOn === null && wt.shift();
}
var mn = mt.ReactCurrentBatchConfig, el = !0;
function Ud(e, t, n, r) {
  var l = X, i = mn.transition;
  mn.transition = null;
  try {
    X = 1, ws(e, t, n, r);
  } finally {
    X = l, mn.transition = i;
  }
}
function Qd(e, t, n, r) {
  var l = X, i = mn.transition;
  mn.transition = null;
  try {
    X = 4, ws(e, t, n, r);
  } finally {
    X = l, mn.transition = i;
  }
}
function ws(e, t, n, r) {
  if (el) {
    var l = ji(e, t, n, r);
    if (l === null) Jl(e, t, r, tl, n), va(e, r);
    else if ($d(l, e, t, n, r)) r.stopPropagation();
    else if (va(e, r), t & 4 && -1 < Ad.indexOf(e)) {
      for (; l !== null; ) {
        var i = yr(l);
        if (i !== null && nu(i), i = ji(e, t, n, r), i === null && Jl(e, t, r, tl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var tl = null;
function ji(e, t, n, r) {
  if (tl = null, e = hs(r), e = Ft(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ko(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return tl = e, null;
}
function au(e) {
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
      switch (Md()) {
        case gs:
          return 1;
        case Jo:
          return 4;
        case Jr:
        case Ld:
          return 16;
        case qo:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, xs = null, $r = null;
function ou() {
  if ($r) return $r;
  var e, t = xs, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return $r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Vr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nr() {
  return !0;
}
function xa() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(i) : i[o]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nr : xa, this.isPropagationStopped = xa, this;
  }
  return re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nr);
  }, persist: function() {
  }, isPersistent: Nr }), t;
}
var jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _s = De(jn), gr = re({}, jn, { view: 0, detail: 0 }), Wd = De(gr), Ql, Wl, zn, _l = re({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ss, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Ql = e.screenX - zn.screenX, Wl = e.screenY - zn.screenY) : Wl = Ql = 0, zn = e), Ql);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), _a = De(_l), Hd = re({}, _l, { dataTransfer: 0 }), Bd = De(Hd), Gd = re({}, gr, { relatedTarget: 0 }), Hl = De(Gd), Kd = re({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yd = De(Kd), Xd = re({}, jn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zd = De(Xd), Jd = re({}, jn, { data: 0 }), Sa = De(Jd), qd = {
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
}, ef = {
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
}, tf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tf[e]) ? !!t[e] : !1;
}
function Ss() {
  return nf;
}
var rf = re({}, gr, { key: function(e) {
  if (e.key) {
    var t = qd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ef[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ss, charCode: function(e) {
  return e.type === "keypress" ? Vr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), lf = De(rf), sf = re({}, _l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ka = De(sf), af = re({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ss }), of = De(af), uf = re({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cf = De(uf), df = re({}, _l, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ff = De(df), pf = [9, 13, 27, 32], ks = ct && "CompositionEvent" in window, Qn = null;
ct && "documentMode" in document && (Qn = document.documentMode);
var mf = ct && "TextEvent" in window && !Qn, uu = ct && (!ks || Qn && 8 < Qn && 11 >= Qn), Ea = " ", Ca = !1;
function cu(e, t) {
  switch (e) {
    case "keyup":
      return pf.indexOf(t.keyCode) !== -1;
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
function du(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function hf(e, t) {
  switch (e) {
    case "compositionend":
      return du(t);
    case "keypress":
      return t.which !== 32 ? null : (Ca = !0, Ea);
    case "textInput":
      return e = t.data, e === Ea && Ca ? null : e;
    default:
      return null;
  }
}
function gf(e, t) {
  if (en) return e === "compositionend" || !ks && cu(e, t) ? (e = ou(), $r = xs = _t = null, en = !1, e) : null;
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
      return uu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yf[e.type] : t === "textarea";
}
function fu(e, t, n, r) {
  Qo(r), t = nl(t, "onChange"), 0 < t.length && (n = new _s("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wn = null, rr = null;
function vf(e) {
  ku(e, 0);
}
function Sl(e) {
  var t = rn(e);
  if (Oo(t)) return e;
}
function wf(e, t) {
  if (e === "change") return t;
}
var pu = !1;
if (ct) {
  var Bl;
  if (ct) {
    var Gl = "oninput" in document;
    if (!Gl) {
      var ja = document.createElement("div");
      ja.setAttribute("oninput", "return;"), Gl = typeof ja.oninput == "function";
    }
    Bl = Gl;
  } else Bl = !1;
  pu = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Ia() {
  Wn && (Wn.detachEvent("onpropertychange", mu), rr = Wn = null);
}
function mu(e) {
  if (e.propertyName === "value" && Sl(rr)) {
    var t = [];
    fu(t, rr, e, hs(e)), Go(vf, t);
  }
}
function xf(e, t, n) {
  e === "focusin" ? (Ia(), Wn = t, rr = n, Wn.attachEvent("onpropertychange", mu)) : e === "focusout" && Ia();
}
function _f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(rr);
}
function Sf(e, t) {
  if (e === "click") return Sl(t);
}
function kf(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Ef(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Ef;
function lr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ui.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Ta(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ma(e, t) {
  var n = Ta(e);
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
    n = Ta(n);
  }
}
function hu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function gu() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Cf(e) {
  var t = gu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Es(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ma(n, i);
        var s = Ma(
          n,
          r
        );
        l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Nf = ct && "documentMode" in document && 11 >= document.documentMode, tn = null, Ii = null, Hn = null, Ti = !1;
function La(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ti || tn == null || tn !== Yr(r) || (r = tn, "selectionStart" in r && Es(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && lr(Hn, r) || (Hn = r, r = nl(Ii, "onSelect"), 0 < r.length && (t = new _s("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tn)));
}
function jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nn = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, Kl = {}, yu = {};
ct && (yu = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
function kl(e) {
  if (Kl[e]) return Kl[e];
  if (!nn[e]) return e;
  var t = nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in yu) return Kl[e] = t[n];
  return e;
}
var vu = kl("animationend"), wu = kl("animationiteration"), xu = kl("animationstart"), _u = kl("transitionend"), Su = /* @__PURE__ */ new Map(), Pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) {
  Su.set(e, t), Kt(t, [e]);
}
for (var Yl = 0; Yl < Pa.length; Yl++) {
  var Xl = Pa[Yl], jf = Xl.toLowerCase(), If = Xl[0].toUpperCase() + Xl.slice(1);
  zt(jf, "on" + If);
}
zt(vu, "onAnimationEnd");
zt(wu, "onAnimationIteration");
zt(xu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(_u, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tf = new Set("cancel close invalid load scroll toggle".split(" ").concat($n));
function za(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Nd(r, t, void 0, e), e.currentTarget = null;
}
function ku(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var o = r[s], u = o.instance, d = o.currentTarget;
        if (o = o.listener, u !== i && l.isPropagationStopped()) break e;
        za(l, o, d), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (o = r[s], u = o.instance, d = o.currentTarget, o = o.listener, u !== i && l.isPropagationStopped()) break e;
        za(l, o, d), i = u;
      }
    }
  }
  if (Zr) throw e = Ei, Zr = !1, Ei = null, e;
}
function J(e, t) {
  var n = t[Di];
  n === void 0 && (n = t[Di] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Eu(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Eu(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Ir]) {
    e[Ir] = !0, Lo.forEach(function(n) {
      n !== "selectionchange" && (Tf.has(n) || Zl(n, !1, e), Zl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || (t[Ir] = !0, Zl("selectionchange", !1, t));
  }
}
function Eu(e, t, n, r) {
  switch (au(t)) {
    case 1:
      var l = Ud;
      break;
    case 4:
      l = Qd;
      break;
    default:
      l = ws;
  }
  n = l.bind(null, t, n, e), l = void 0, !ki || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; o !== null; ) {
        if (s = Ft(o), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Go(function() {
    var d = i, y = hs(n), g = [];
    e: {
      var h = Su.get(e);
      if (h !== void 0) {
        var v = _s, x = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = lf;
            break;
          case "focusin":
            x = "focus", v = Hl;
            break;
          case "focusout":
            x = "blur", v = Hl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Hl;
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
            v = _a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = of;
            break;
          case vu:
          case wu:
          case xu:
            v = Yd;
            break;
          case _u:
            v = cf;
            break;
          case "scroll":
            v = Wd;
            break;
          case "wheel":
            v = ff;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ka;
        }
        var C = (t & 4) !== 0, z = !C && e === "scroll", c = C ? h !== null ? h + "Capture" : null : h;
        C = [];
        for (var f = d, m; f !== null; ) {
          m = f;
          var E = m.stateNode;
          if (m.tag === 5 && E !== null && (m = E, c !== null && (E = qn(f, c), E != null && C.push(sr(f, E, m)))), z) break;
          f = f.return;
        }
        0 < C.length && (h = new v(h, x, null, n, y), g.push({ event: h, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== _i && (x = n.relatedTarget || n.fromElement) && (Ft(x) || x[dt])) break e;
        if ((v || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = d, x = x ? Ft(x) : null, x !== null && (z = Yt(x), x !== z || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = d), v !== x)) {
          if (C = _a, E = "onMouseLeave", c = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (C = ka, E = "onPointerLeave", c = "onPointerEnter", f = "pointer"), z = v == null ? h : rn(v), m = x == null ? h : rn(x), h = new C(E, f + "leave", v, n, y), h.target = z, h.relatedTarget = m, E = null, Ft(y) === d && (C = new C(c, f + "enter", x, n, y), C.target = m, C.relatedTarget = z, E = C), z = E, v && x) t: {
            for (C = v, c = x, f = 0, m = C; m; m = Zt(m)) f++;
            for (m = 0, E = c; E; E = Zt(E)) m++;
            for (; 0 < f - m; ) C = Zt(C), f--;
            for (; 0 < m - f; ) c = Zt(c), m--;
            for (; f--; ) {
              if (C === c || c !== null && C === c.alternate) break t;
              C = Zt(C), c = Zt(c);
            }
            C = null;
          }
          else C = null;
          v !== null && Da(g, h, v, C, !1), x !== null && z !== null && Da(g, z, x, C, !0);
        }
      }
      e: {
        if (h = d ? rn(d) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var P = wf;
        else if (Na(h)) if (pu) P = kf;
        else {
          P = _f;
          var R = xf;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Sf);
        if (P && (P = P(e, d))) {
          fu(g, P, n, y);
          break e;
        }
        R && R(e, h, d), e === "focusout" && (R = h._wrapperState) && R.controlled && h.type === "number" && gi(h, "number", h.value);
      }
      switch (R = d ? rn(d) : window, e) {
        case "focusin":
          (Na(R) || R.contentEditable === "true") && (tn = R, Ii = d, Hn = null);
          break;
        case "focusout":
          Hn = Ii = tn = null;
          break;
        case "mousedown":
          Ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ti = !1, La(g, n, y);
          break;
        case "selectionchange":
          if (Nf) break;
        case "keydown":
        case "keyup":
          La(g, n, y);
      }
      var S;
      if (ks) e: {
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
      else en ? cu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (uu && n.locale !== "ko" && (en || L !== "onCompositionStart" ? L === "onCompositionEnd" && en && (S = ou()) : (_t = y, xs = "value" in _t ? _t.value : _t.textContent, en = !0)), R = nl(d, L), 0 < R.length && (L = new Sa(L, e, null, n, y), g.push({ event: L, listeners: R }), S ? L.data = S : (S = du(n), S !== null && (L.data = S)))), (S = mf ? hf(e, n) : gf(e, n)) && (d = nl(d, "onBeforeInput"), 0 < d.length && (y = new Sa("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: d }), y.data = S));
    }
    ku(g, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = qn(e, n), i != null && r.unshift(sr(e, i, l)), i = qn(e, t), i != null && r.push(sr(e, i, l))), e = e.return;
  }
  return r;
}
function Zt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Da(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, d = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && d !== null && (o = d, l ? (u = qn(n, i), u != null && s.unshift(sr(n, u, o))) : l || (u = qn(n, i), u != null && s.push(sr(n, u, o)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Mf = /\r\n?/g, Lf = /\u0000|\uFFFD/g;
function Ra(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mf, `
`).replace(Lf, "");
}
function Tr(e, t, n) {
  if (t = Ra(t), Ra(e) !== t && n) throw Error(M(425));
}
function rl() {
}
var Mi = null, Li = null;
function Pi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var zi = typeof setTimeout == "function" ? setTimeout : void 0, Pf = typeof clearTimeout == "function" ? clearTimeout : void 0, Oa = typeof Promise == "function" ? Promise : void 0, zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oa < "u" ? function(e) {
  return Oa.resolve(null).then(e).catch(Df);
} : zi;
function Df(e) {
  setTimeout(function() {
    throw e;
  });
}
function ql(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  nr(t);
}
function Nt(e) {
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
function ba(e) {
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
var In = Math.random().toString(36).slice(2), nt = "__reactFiber$" + In, ar = "__reactProps$" + In, dt = "__reactContainer$" + In, Di = "__reactEvents$" + In, Rf = "__reactListeners$" + In, Of = "__reactHandles$" + In;
function Ft(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dt] || n[nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ba(e); e !== null; ) {
        if (n = e[nt]) return n;
        e = ba(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[nt] || e[dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function El(e) {
  return e[ar] || null;
}
var Ri = [], ln = -1;
function Dt(e) {
  return { current: e };
}
function q(e) {
  0 > ln || (e.current = Ri[ln], Ri[ln] = null, ln--);
}
function Z(e, t) {
  ln++, Ri[ln] = e.current, e.current = t;
}
var Pt = {}, ye = Dt(Pt), Ce = Dt(!1), Qt = Pt;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function ll() {
  q(Ce), q(ye);
}
function Fa(e, t, n) {
  if (ye.current !== Pt) throw Error(M(168));
  Z(ye, t), Z(Ce, n);
}
function Cu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, wd(e) || "Unknown", l));
  return re({}, n, r);
}
function il(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pt, Qt = ye.current, Z(ye, e), Z(Ce, Ce.current), !0;
}
function Aa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n ? (e = Cu(e, t, Qt), r.__reactInternalMemoizedMergedChildContext = e, q(Ce), q(ye), Z(ye, e)) : q(Ce), Z(Ce, n);
}
var st = null, Cl = !1, ei = !1;
function Nu(e) {
  st === null ? st = [e] : st.push(e);
}
function bf(e) {
  Cl = !0, Nu(e);
}
function Rt() {
  if (!ei && st !== null) {
    ei = !0;
    var e = 0, t = X;
    try {
      var n = st;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, Cl = !1;
    } catch (l) {
      throw st !== null && (st = st.slice(e + 1)), Zo(gs, Rt), l;
    } finally {
      X = t, ei = !1;
    }
  }
  return null;
}
var sn = [], an = 0, sl = null, al = 0, Re = [], Oe = 0, Wt = null, at = 1, ot = "";
function Ot(e, t) {
  sn[an++] = al, sn[an++] = sl, sl = e, al = t;
}
function ju(e, t, n) {
  Re[Oe++] = at, Re[Oe++] = ot, Re[Oe++] = Wt, Wt = e;
  var r = at;
  e = ot;
  var l = 32 - Xe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Xe(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, at = 1 << 32 - Xe(t) + l | n << l | r, ot = i + e;
  } else at = 1 << i | n << l | r, ot = e;
}
function Cs(e) {
  e.return !== null && (Ot(e, 1), ju(e, 1, 0));
}
function Ns(e) {
  for (; e === sl; ) sl = sn[--an], sn[an] = null, al = sn[--an], sn[an] = null;
  for (; e === Wt; ) Wt = Re[--Oe], Re[Oe] = null, ot = Re[--Oe], Re[Oe] = null, at = Re[--Oe], Re[Oe] = null;
}
var Le = null, Me = null, ee = !1, Ke = null;
function Iu(e, t) {
  var n = be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $a(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wt !== null ? { id: at, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bi(e) {
  if (ee) {
    var t = Me;
    if (t) {
      var n = t;
      if (!$a(e, t)) {
        if (Oi(e)) throw Error(M(418));
        t = Nt(n.nextSibling);
        var r = Le;
        t && $a(e, t) ? Iu(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Le = e);
      }
    } else {
      if (Oi(e)) throw Error(M(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Le = e;
    }
  }
}
function Va(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Le = e;
}
function Mr(e) {
  if (e !== Le) return !1;
  if (!ee) return Va(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Pi(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Oi(e)) throw Tu(), Error(M(418));
    for (; t; ) Iu(e, t), t = Nt(t.nextSibling);
  }
  if (Va(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Le ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function Tu() {
  for (var e = Me; e; ) e = Nt(e.nextSibling);
}
function wn() {
  Me = Le = null, ee = !1;
}
function js(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
var Ff = mt.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var o = l.refs;
        s === null ? delete o[i] : o[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ua(e) {
  var t = e._init;
  return t(e._payload);
}
function Mu(e) {
  function t(c, f) {
    if (e) {
      var m = c.deletions;
      m === null ? (c.deletions = [f], c.flags |= 16) : m.push(f);
    }
  }
  function n(c, f) {
    if (!e) return null;
    for (; f !== null; ) t(c, f), f = f.sibling;
    return null;
  }
  function r(c, f) {
    for (c = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
    return c;
  }
  function l(c, f) {
    return c = Mt(c, f), c.index = 0, c.sibling = null, c;
  }
  function i(c, f, m) {
    return c.index = m, e ? (m = c.alternate, m !== null ? (m = m.index, m < f ? (c.flags |= 2, f) : m) : (c.flags |= 2, f)) : (c.flags |= 1048576, f);
  }
  function s(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function o(c, f, m, E) {
    return f === null || f.tag !== 6 ? (f = ai(m, c.mode, E), f.return = c, f) : (f = l(f, m), f.return = c, f);
  }
  function u(c, f, m, E) {
    var P = m.type;
    return P === qt ? y(c, f, m.props.children, E, m.key) : f !== null && (f.elementType === P || typeof P == "object" && P !== null && P.$$typeof === yt && Ua(P) === f.type) ? (E = l(f, m.props), E.ref = Dn(c, f, m), E.return = c, E) : (E = Kr(m.type, m.key, m.props, null, c.mode, E), E.ref = Dn(c, f, m), E.return = c, E);
  }
  function d(c, f, m, E) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = oi(m, c.mode, E), f.return = c, f) : (f = l(f, m.children || []), f.return = c, f);
  }
  function y(c, f, m, E, P) {
    return f === null || f.tag !== 7 ? (f = Ut(m, c.mode, E, P), f.return = c, f) : (f = l(f, m), f.return = c, f);
  }
  function g(c, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = ai("" + f, c.mode, m), f.return = c, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xr:
          return m = Kr(f.type, f.key, f.props, null, c.mode, m), m.ref = Dn(c, null, f), m.return = c, m;
        case Jt:
          return f = oi(f, c.mode, m), f.return = c, f;
        case yt:
          var E = f._init;
          return g(c, E(f._payload), m);
      }
      if (Fn(f) || Tn(f)) return f = Ut(f, c.mode, m, null), f.return = c, f;
      Lr(c, f);
    }
    return null;
  }
  function h(c, f, m, E) {
    var P = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return P !== null ? null : o(c, f, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xr:
          return m.key === P ? u(c, f, m, E) : null;
        case Jt:
          return m.key === P ? d(c, f, m, E) : null;
        case yt:
          return P = m._init, h(
            c,
            f,
            P(m._payload),
            E
          );
      }
      if (Fn(m) || Tn(m)) return P !== null ? null : y(c, f, m, E, null);
      Lr(c, m);
    }
    return null;
  }
  function v(c, f, m, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return c = c.get(m) || null, o(f, c, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case xr:
          return c = c.get(E.key === null ? m : E.key) || null, u(f, c, E, P);
        case Jt:
          return c = c.get(E.key === null ? m : E.key) || null, d(f, c, E, P);
        case yt:
          var R = E._init;
          return v(c, f, m, R(E._payload), P);
      }
      if (Fn(E) || Tn(E)) return c = c.get(m) || null, y(f, c, E, P, null);
      Lr(f, E);
    }
    return null;
  }
  function x(c, f, m, E) {
    for (var P = null, R = null, S = f, L = f = 0, D = null; S !== null && L < m.length; L++) {
      S.index > L ? (D = S, S = null) : D = S.sibling;
      var $ = h(c, S, m[L], E);
      if ($ === null) {
        S === null && (S = D);
        break;
      }
      e && S && $.alternate === null && t(c, S), f = i($, f, L), R === null ? P = $ : R.sibling = $, R = $, S = D;
    }
    if (L === m.length) return n(c, S), ee && Ot(c, L), P;
    if (S === null) {
      for (; L < m.length; L++) S = g(c, m[L], E), S !== null && (f = i(S, f, L), R === null ? P = S : R.sibling = S, R = S);
      return ee && Ot(c, L), P;
    }
    for (S = r(c, S); L < m.length; L++) D = v(S, c, L, m[L], E), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? L : D.key), f = i(D, f, L), R === null ? P = D : R.sibling = D, R = D);
    return e && S.forEach(function(p) {
      return t(c, p);
    }), ee && Ot(c, L), P;
  }
  function C(c, f, m, E) {
    var P = Tn(m);
    if (typeof P != "function") throw Error(M(150));
    if (m = P.call(m), m == null) throw Error(M(151));
    for (var R = P = null, S = f, L = f = 0, D = null, $ = m.next(); S !== null && !$.done; L++, $ = m.next()) {
      S.index > L ? (D = S, S = null) : D = S.sibling;
      var p = h(c, S, $.value, E);
      if (p === null) {
        S === null && (S = D);
        break;
      }
      e && S && p.alternate === null && t(c, S), f = i(p, f, L), R === null ? P = p : R.sibling = p, R = p, S = D;
    }
    if ($.done) return n(
      c,
      S
    ), ee && Ot(c, L), P;
    if (S === null) {
      for (; !$.done; L++, $ = m.next()) $ = g(c, $.value, E), $ !== null && (f = i($, f, L), R === null ? P = $ : R.sibling = $, R = $);
      return ee && Ot(c, L), P;
    }
    for (S = r(c, S); !$.done; L++, $ = m.next()) $ = v(S, c, L, $.value, E), $ !== null && (e && $.alternate !== null && S.delete($.key === null ? L : $.key), f = i($, f, L), R === null ? P = $ : R.sibling = $, R = $);
    return e && S.forEach(function(k) {
      return t(c, k);
    }), ee && Ot(c, L), P;
  }
  function z(c, f, m, E) {
    if (typeof m == "object" && m !== null && m.type === qt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xr:
          e: {
            for (var P = m.key, R = f; R !== null; ) {
              if (R.key === P) {
                if (P = m.type, P === qt) {
                  if (R.tag === 7) {
                    n(c, R.sibling), f = l(R, m.props.children), f.return = c, c = f;
                    break e;
                  }
                } else if (R.elementType === P || typeof P == "object" && P !== null && P.$$typeof === yt && Ua(P) === R.type) {
                  n(c, R.sibling), f = l(R, m.props), f.ref = Dn(c, R, m), f.return = c, c = f;
                  break e;
                }
                n(c, R);
                break;
              } else t(c, R);
              R = R.sibling;
            }
            m.type === qt ? (f = Ut(m.props.children, c.mode, E, m.key), f.return = c, c = f) : (E = Kr(m.type, m.key, m.props, null, c.mode, E), E.ref = Dn(c, f, m), E.return = c, c = E);
          }
          return s(c);
        case Jt:
          e: {
            for (R = m.key; f !== null; ) {
              if (f.key === R) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(c, f.sibling), f = l(f, m.children || []), f.return = c, c = f;
                break e;
              } else {
                n(c, f);
                break;
              }
              else t(c, f);
              f = f.sibling;
            }
            f = oi(m, c.mode, E), f.return = c, c = f;
          }
          return s(c);
        case yt:
          return R = m._init, z(c, f, R(m._payload), E);
      }
      if (Fn(m)) return x(c, f, m, E);
      if (Tn(m)) return C(c, f, m, E);
      Lr(c, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(c, f.sibling), f = l(f, m), f.return = c, c = f) : (n(c, f), f = ai(m, c.mode, E), f.return = c, c = f), s(c)) : n(c, f);
  }
  return z;
}
var xn = Mu(!0), Lu = Mu(!1), ol = Dt(null), ul = null, on = null, Is = null;
function Ts() {
  Is = on = ul = null;
}
function Ms(e) {
  var t = ol.current;
  q(ol), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function hn(e, t) {
  ul = e, Is = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null);
}
function $e(e) {
  var t = e._currentValue;
  if (Is !== e) if (e = { context: e, memoizedValue: t, next: null }, on === null) {
    if (ul === null) throw Error(M(308));
    on = e, ul.dependencies = { lanes: 0, firstContext: e };
  } else on = on.next = e;
  return t;
}
var At = null;
function Ls(e) {
  At === null ? At = [e] : At.push(e);
}
function Pu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ls(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ft(e, r);
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Ps(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, K & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ls(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ft(e, n);
}
function Ur(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ys(e, n);
  }
}
function Qa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cl(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, d = u.next;
    u.next = null, s === null ? i = d : s.next = d, s = u;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, o = y.lastBaseUpdate, o !== s && (o === null ? y.firstBaseUpdate = d : o.next = d, y.lastBaseUpdate = u));
  }
  if (i !== null) {
    var g = l.baseState;
    s = 0, y = d = u = null, o = i;
    do {
      var h = o.lane, v = o.eventTime;
      if ((r & h) === h) {
        y !== null && (y = y.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var x = e, C = o;
          switch (h = t, v = n, C.tag) {
            case 1:
              if (x = C.payload, typeof x == "function") {
                g = x.call(v, g, h);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = C.payload, h = typeof x == "function" ? x.call(v, g, h) : x, h == null) break e;
              g = re({}, g, h);
              break e;
            case 2:
              vt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
      } else v = { eventTime: v, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, y === null ? (d = y = v, u = g) : y = y.next = v, s |= h;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (u = g), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Bt |= s, e.lanes = s, e.memoizedState = g;
  }
}
function Wa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(M(191, l));
      l.call(r);
    }
  }
}
var vr = {}, lt = Dt(vr), or = Dt(vr), ur = Dt(vr);
function $t(e) {
  if (e === vr) throw Error(M(174));
  return e;
}
function zs(e, t) {
  switch (Z(ur, t), Z(or, e), Z(lt, vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vi(t, e);
  }
  q(lt), Z(lt, t);
}
function _n() {
  q(lt), q(or), q(ur);
}
function Du(e) {
  $t(ur.current);
  var t = $t(lt.current), n = vi(t, e.type);
  t !== n && (Z(or, e), Z(lt, n));
}
function Ds(e) {
  or.current === e && (q(lt), q(or));
}
var te = Dt(0);
function dl(e) {
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
var ti = [];
function Rs() {
  for (var e = 0; e < ti.length; e++) ti[e]._workInProgressVersionPrimary = null;
  ti.length = 0;
}
var Qr = mt.ReactCurrentDispatcher, ni = mt.ReactCurrentBatchConfig, Ht = 0, ne = null, ae = null, ue = null, fl = !1, Bn = !1, cr = 0, Af = 0;
function me() {
  throw Error(M(321));
}
function Os(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function bs(e, t, n, r, l, i) {
  if (Ht = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? Qf : Wf, e = n(r, l), Bn) {
    i = 0;
    do {
      if (Bn = !1, cr = 0, 25 <= i) throw Error(M(301));
      i += 1, ue = ae = null, t.updateQueue = null, Qr.current = Hf, e = n(r, l);
    } while (Bn);
  }
  if (Qr.current = pl, t = ae !== null && ae.next !== null, Ht = 0, ue = ae = ne = null, fl = !1, t) throw Error(M(300));
  return e;
}
function Fs() {
  var e = cr !== 0;
  return cr = 0, e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? ne.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Ve() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ue === null ? ne.memoizedState : ue.next;
  if (t !== null) ue = t, ae = e;
  else {
    if (e === null) throw Error(M(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, ue === null ? ne.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ri(e) {
  var t = Ve(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ae, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var o = s = null, u = null, d = i;
    do {
      var y = d.lane;
      if ((Ht & y) === y) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: y,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (o = u = g, s = r) : u = u.next = g, ne.lanes |= y, Bt |= y;
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? s = r : u.next = o, Je(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, ne.lanes |= i, Bt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function li(e) {
  var t = Ve(), n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Je(i, t.memoizedState) || (Ee = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ru() {
}
function Ou(e, t) {
  var n = ne, r = Ve(), l = t(), i = !Je(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ee = !0), r = r.queue, As(Au.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, fr(9, Fu.bind(null, n, r, l, t), void 0, null), ce === null) throw Error(M(349));
    Ht & 30 || bu(n, t, l);
  }
  return l;
}
function bu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $u(t) && Vu(e);
}
function Au(e, t, n) {
  return n(function() {
    $u(t) && Vu(e);
  });
}
function $u(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Vu(e) {
  var t = ft(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Ha(e) {
  var t = tt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Uf.bind(null, ne, e), [t.memoizedState, e];
}
function fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Uu() {
  return Ve().memoizedState;
}
function Wr(e, t, n, r) {
  var l = tt();
  ne.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Nl(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (i = s.destroy, r !== null && Os(r, s.deps)) {
      l.memoizedState = fr(t, n, i, r);
      return;
    }
  }
  ne.flags |= e, l.memoizedState = fr(1 | t, n, i, r);
}
function Ba(e, t) {
  return Wr(8390656, 8, e, t);
}
function As(e, t) {
  return Nl(2048, 8, e, t);
}
function Qu(e, t) {
  return Nl(4, 2, e, t);
}
function Wu(e, t) {
  return Nl(4, 4, e, t);
}
function Hu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Bu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Nl(4, 4, Hu.bind(null, t, e), n);
}
function $s() {
}
function Gu(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Os(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ku(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Os(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Yu(e, t, n) {
  return Ht & 21 ? (Je(n, t) || (n = eu(), ne.lanes |= n, Bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n);
}
function $f(e, t) {
  var n = X;
  X = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ni.transition;
  ni.transition = {};
  try {
    e(!1), t();
  } finally {
    X = n, ni.transition = r;
  }
}
function Xu() {
  return Ve().memoizedState;
}
function Vf(e, t, n) {
  var r = Tt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Zu(e)) Ju(t, n);
  else if (n = Pu(e, t, n, r), n !== null) {
    var l = we();
    Ze(n, e, r, l), qu(n, t, r);
  }
}
function Uf(e, t, n) {
  var r = Tt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zu(e)) Ju(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, o = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = o, Je(o, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ls(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Pu(e, t, l, r), n !== null && (l = we(), Ze(n, e, r, l), qu(n, t, r));
  }
}
function Zu(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function Ju(e, t) {
  Bn = fl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ys(e, n);
  }
}
var pl = { readContext: $e, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, Qf = { readContext: $e, useCallback: function(e, t) {
  return tt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: $e, useEffect: Ba, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wr(
    4194308,
    4,
    Hu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vf.bind(null, ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ha, useDebugValue: $s, useDeferredValue: function(e) {
  return tt().memoizedState = e;
}, useTransition: function() {
  var e = Ha(!1), t = e[0];
  return e = $f.bind(null, e[1]), tt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ne, l = tt();
  if (ee) {
    if (n === void 0) throw Error(M(407));
    n = n();
  } else {
    if (n = t(), ce === null) throw Error(M(349));
    Ht & 30 || bu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ba(Au.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, fr(9, Fu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tt(), t = ce.identifierPrefix;
  if (ee) {
    var n = ot, r = at;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Af++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Wf = {
  readContext: $e,
  useCallback: Gu,
  useContext: $e,
  useEffect: As,
  useImperativeHandle: Bu,
  useInsertionEffect: Qu,
  useLayoutEffect: Wu,
  useMemo: Ku,
  useReducer: ri,
  useRef: Uu,
  useState: function() {
    return ri(dr);
  },
  useDebugValue: $s,
  useDeferredValue: function(e) {
    var t = Ve();
    return Yu(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = ri(dr)[0], t = Ve().memoizedState;
    return [e, t];
  },
  useMutableSource: Ru,
  useSyncExternalStore: Ou,
  useId: Xu,
  unstable_isNewReconciler: !1
}, Hf = { readContext: $e, useCallback: Gu, useContext: $e, useEffect: As, useImperativeHandle: Bu, useInsertionEffect: Qu, useLayoutEffect: Wu, useMemo: Ku, useReducer: li, useRef: Uu, useState: function() {
  return li(dr);
}, useDebugValue: $s, useDeferredValue: function(e) {
  var t = Ve();
  return ae === null ? t.memoizedState = e : Yu(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = li(dr)[0], t = Ve().memoizedState;
  return [e, t];
}, useMutableSource: Ru, useSyncExternalStore: Ou, useId: Xu, unstable_isNewReconciler: !1 };
function Be(e, t) {
  if (e && e.defaultProps) {
    t = re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ai(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Tt(e), i = ut(r, l);
  i.payload = t, n != null && (i.callback = n), t = jt(e, i, l), t !== null && (Ze(t, e, l, r), Ur(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Tt(e), i = ut(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = jt(e, i, l), t !== null && (Ze(t, e, l, r), Ur(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = Tt(e), l = ut(n, r);
  l.tag = 2, t != null && (l.callback = t), t = jt(e, l, r), t !== null && (Ze(t, e, r, n), Ur(t, e, r));
} };
function Ga(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(l, i) : !0;
}
function ec(e, t, n) {
  var r = !1, l = Pt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = $e(i) : (l = Ne(t) ? Qt : ye.current, r = t.contextTypes, i = (r = r != null) ? vn(e, l) : Pt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ka(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jl.enqueueReplaceState(t, t.state, null);
}
function $i(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ps(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = $e(i) : (i = Ne(t) ? Qt : ye.current, l.context = vn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ai(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && jl.enqueueReplaceState(l, l.state, null), cl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Bf = typeof WeakMap == "function" ? WeakMap : Map;
function tc(e, t, n) {
  n = ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    hl || (hl = !0, Zi = r), Vi(e, t);
  }, n;
}
function nc(e, t, n) {
  n = ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ya(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = sp.bind(null, e, t, n), t.then(e, e));
}
function Xa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Za(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ut(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e);
}
var Gf = mt.ReactCurrentOwner, Ee = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Lu(t, null, n, r) : xn(t, e.child, n, r);
}
function Ja(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return hn(t, l), r = bs(e, t, n, r, i, l), n = Fs(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, pt(e, t, l)) : (ee && n && Cs(t), t.flags |= 1, ve(e, t, r, l), t.child);
}
function qa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ks(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, rc(e, t, i, r, l)) : (e = Kr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : lr, n(s, r) && e.ref === t.ref) return pt(e, t, l);
  }
  return t.flags |= 1, e = Mt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function rc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (lr(i, r) && e.ref === t.ref) if (Ee = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ee = !0);
    else return t.lanes = e.lanes, pt(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function lc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(cn, Ie), Ie |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Z(cn, Ie), Ie |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Z(cn, Ie), Ie |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Z(cn, Ie), Ie |= r;
  return ve(e, t, l, n), t.child;
}
function ic(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, l) {
  var i = Ne(n) ? Qt : ye.current;
  return i = vn(t, i), hn(t, l), n = bs(e, t, n, r, i, l), r = Fs(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, pt(e, t, l)) : (ee && r && Cs(t), t.flags |= 1, ve(e, t, n, l), t.child);
}
function eo(e, t, n, r, l) {
  if (Ne(n)) {
    var i = !0;
    il(t);
  } else i = !1;
  if (hn(t, l), t.stateNode === null) Hr(e, t), ec(t, n, r), $i(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, o = t.memoizedProps;
    s.props = o;
    var u = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = $e(d) : (d = Ne(n) ? Qt : ye.current, d = vn(t, d));
    var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || u !== d) && Ka(t, s, r, d), vt = !1;
    var h = t.memoizedState;
    s.state = h, cl(t, r, s, l), u = t.memoizedState, o !== r || h !== u || Ce.current || vt ? (typeof y == "function" && (Ai(t, n, y, r), u = t.memoizedState), (o = vt || Ga(t, n, o, r, h, u, d)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = d, r = o) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, zu(e, t), o = t.memoizedProps, d = t.type === t.elementType ? o : Be(t.type, o), s.props = d, g = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = $e(u) : (u = Ne(n) ? Qt : ye.current, u = vn(t, u));
    var v = n.getDerivedStateFromProps;
    (y = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== g || h !== u) && Ka(t, s, r, u), vt = !1, h = t.memoizedState, s.state = h, cl(t, r, s, l);
    var x = t.memoizedState;
    o !== g || h !== x || Ce.current || vt ? (typeof v == "function" && (Ai(t, n, v, r), x = t.memoizedState), (d = vt || Ga(t, n, d, r, h, x, u) || !1) ? (y || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = u, r = d) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qi(e, t, n, r, i, l);
}
function Qi(e, t, n, r, l, i) {
  ic(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Aa(t, n, !1), pt(e, t, i);
  r = t.stateNode, Gf.current = t;
  var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = xn(t, e.child, null, i), t.child = xn(t, null, o, i)) : ve(e, t, o, i), t.memoizedState = r.state, l && Aa(t, n, !0), t.child;
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext ? Fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fa(e, t.context, !1), zs(e, t.containerInfo);
}
function to(e, t, n, r, l) {
  return wn(), js(l), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps, l = te.current, i = !1, s = (t.flags & 128) !== 0, o;
  if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Z(te, l & 1), e === null)
    return bi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ml(s, r, 0, null), e = Ut(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Hi(n), t.memoizedState = Wi, e) : Vs(t, s));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Kf(e, t, s, r, o, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Mt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = Mt(o, i) : (i = Ut(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Hi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Wi, r;
  }
  return i = e.child, e = i.sibling, r = Mt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vs(e, t) {
  return t = Ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pr(e, t, n, r) {
  return r !== null && js(r), xn(t, e.child, null, n), e = Vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ii(Error(M(422))), Pr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ml({ mode: "visible", children: r.children }, l, 0, null), i = Ut(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && xn(t, e.child, null, s), t.child.memoizedState = Hi(s), t.memoizedState = Wi, i);
  if (!(t.mode & 1)) return Pr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, i = Error(M(419)), r = ii(i, r, void 0), Pr(e, t, s, r);
  }
  if (o = (s & e.childLanes) !== 0, Ee || o) {
    if (r = ce, r !== null) {
      switch (s & -s) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ft(e, l), Ze(r, e, l, -1));
    }
    return Gs(), r = ii(Error(M(421))), Pr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ap.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Me = Nt(l.nextSibling), Le = t, ee = !0, Ke = null, e !== null && (Re[Oe++] = at, Re[Oe++] = ot, Re[Oe++] = Wt, at = e.id, ot = e.overflow, Wt = t), t = Vs(t, r.children), t.flags |= 4096, t);
}
function no(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function si(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function oc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ve(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && no(e, n, t);
      else if (e.tag === 19) no(e, n, t);
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
  if (Z(te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && dl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), si(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && dl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      si(t, !0, n, null, i);
      break;
    case "together":
      si(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Bt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yf(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), wn();
      break;
    case 5:
      Du(t);
      break;
    case 1:
      Ne(t.type) && il(t);
      break;
    case 4:
      zs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Z(ol, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Z(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ac(e, t, n) : (Z(te, te.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
      Z(te, te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(te, te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, lc(e, t, n);
  }
  return pt(e, t, n);
}
var uc, Bi, cc, dc;
uc = function(e, t) {
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
Bi = function() {
};
cc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, $t(lt.current);
    var i = null;
    switch (n) {
      case "input":
        l = mi(e, l), r = mi(e, r), i = [];
        break;
      case "select":
        l = re({}, l, { value: void 0 }), r = re({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = yi(e, l), r = yi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rl);
    }
    wi(n, r);
    var s;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var o = l[d];
      for (s in o) o.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Zn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (o = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== o && (u != null || o != null)) if (d === "style") if (o) {
        for (s in o) !o.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && o[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (i = i || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Zn.hasOwnProperty(d) ? (u != null && d === "onScroll" && J("scroll", e), i || o === u || (i = [])) : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
dc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!ee) switch (e.tailMode) {
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Xf(e, t, n) {
  var r = t.pendingProps;
  switch (Ns(t), t.tag) {
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
      return he(t), null;
    case 1:
      return Ne(t.type) && ll(), he(t), null;
    case 3:
      return r = t.stateNode, _n(), q(Ce), q(ye), Rs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ke !== null && (es(Ke), Ke = null))), Bi(e, t), he(t), null;
    case 5:
      Ds(t);
      var l = $t(ur.current);
      if (n = t.type, e !== null && t.stateNode != null) cc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return he(t), null;
        }
        if (e = $t(lt.current), Mr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[nt] = t, r[ar] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < $n.length; l++) J($n[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              da(r, i), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r);
              break;
            case "textarea":
              pa(r, i), J("invalid", r);
          }
          wi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var o = i[s];
            s === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Tr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Tr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : Zn.hasOwnProperty(s) && o != null && s === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), fa(r, i, !0);
              break;
            case "textarea":
              _r(r), ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = rl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ao(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[nt] = t, e[ar] = r, uc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = xi(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < $n.length; l++) J($n[l], e);
                l = r;
                break;
              case "source":
                J("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), l = r;
                break;
              case "details":
                J("toggle", e), l = r;
                break;
              case "input":
                da(e, r), l = mi(e, r), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = re({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                pa(e, r), l = yi(e, r), J("invalid", e);
                break;
              default:
                l = r;
            }
            wi(n, l), o = l;
            for (i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "style" ? Uo(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && $o(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Jn(e, u) : typeof u == "number" && Jn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Zn.hasOwnProperty(i) ? u != null && i === "onScroll" && J("scroll", e) : u != null && ds(e, i, u, s));
            }
            switch (n) {
              case "input":
                _r(e), fa(e, r, !1);
                break;
              case "textarea":
                _r(e), ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? dn(e, !!r.multiple, i, !1) : r.defaultValue != null && dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (n = $t(ur.current), $t(lt.current), Mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (i = r.nodeValue !== n) && (e = Le, e !== null)) switch (e.tag) {
            case 3:
              Tr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Tr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (q(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Me !== null && t.mode & 1 && !(t.flags & 128)) Tu(), wn(), t.flags |= 98560, i = !1;
        else if (i = Mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(M(317));
            i[nt] = t;
          } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), i = !1;
        } else Ke !== null && (es(Ke), Ke = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? oe === 0 && (oe = 3) : Gs())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return _n(), Bi(e, t), e === null && ir(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Ms(t.type._context), he(t), null;
    case 17:
      return Ne(t.type) && ll(), he(t), null;
    case 19:
      if (q(te), i = t.memoizedState, i === null) return he(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Rn(i, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = dl(e), s !== null) {
            for (t.flags |= 128, Rn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Z(te, te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ie() > kn && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = dl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ee) return he(t), null;
        } else 2 * ie() - i.renderingStartTime > kn && n !== 1073741824 && (t.flags |= 128, r = !0, Rn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = te.current, Z(te, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return Bs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Zf(e, t) {
  switch (Ns(t), t.tag) {
    case 1:
      return Ne(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _n(), q(Ce), q(ye), Rs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ds(t), null;
    case 13:
      if (q(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(M(340));
        wn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return q(te), null;
    case 4:
      return _n(), null;
    case 10:
      return Ms(t.type._context), null;
    case 22:
    case 23:
      return Bs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1, ge = !1, Jf = typeof WeakSet == "function" ? WeakSet : Set, b = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function Gi(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var ro = !1;
function qf(e, t) {
  if (Mi = el, e = gu(), Es(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, o = -1, u = -1, d = 0, y = 0, g = e, h = null;
        t: for (; ; ) {
          for (var v; g !== n || l !== 0 && g.nodeType !== 3 || (o = s + l), g !== i || r !== 0 && g.nodeType !== 3 || (u = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (v = g.firstChild) !== null; )
            h = g, g = v;
          for (; ; ) {
            if (g === e) break t;
            if (h === n && ++d === l && (o = s), h === i && ++y === r && (u = s), (v = g.nextSibling) !== null) break;
            g = h, h = g.parentNode;
          }
          g = v;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, el = !1, b = t; b !== null; ) if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, b = e;
  else for (; b !== null; ) {
    t = b;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var C = x.memoizedProps, z = x.memoizedState, c = t.stateNode, f = c.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Be(t.type, C), z);
            c.__reactInternalSnapshotBeforeUpdate = f;
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
          throw Error(M(163));
      }
    } catch (E) {
      le(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, b = e;
      break;
    }
    b = t.return;
  }
  return x = ro, ro = !1, x;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Gi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Il(e, t) {
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
function Ki(e) {
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
function fc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[ar], delete t[Di], delete t[Rf], delete t[Of])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || pc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), e = e.sibling;
}
var de = null, Ge = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; ) mc(e, t, n), n = n.sibling;
}
function mc(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function") try {
    rt.onCommitFiberUnmount(xl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ge || un(n, t);
    case 6:
      var r = de, l = Ge;
      de = null, gt(e, t, n), de = r, Ge = l, de !== null && (Ge ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (Ge ? (e = de, n = n.stateNode, e.nodeType === 8 ? ql(e.parentNode, n) : e.nodeType === 1 && ql(e, n), nr(e)) : ql(de, n.stateNode));
      break;
    case 4:
      r = de, l = Ge, de = n.stateNode.containerInfo, Ge = !0, gt(e, t, n), de = r, Ge = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Gi(n, t, s), l = l.next;
        } while (l !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (!ge && (un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        le(n, t, o);
      }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, gt(e, t, n), ge = r) : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function io(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jf()), t.forEach(function(r) {
      var l = op.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, o = s;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            de = o.stateNode, Ge = !1;
            break e;
          case 3:
            de = o.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            de = o.stateNode.containerInfo, Ge = !0;
            break e;
        }
        o = o.return;
      }
      if (de === null) throw Error(M(160));
      mc(i, s, l), de = null, Ge = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (d) {
      le(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hc(t, e), t = t.sibling;
}
function hc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e), et(e), r & 4) {
        try {
          Gn(3, e, e.return), Il(3, e);
        } catch (C) {
          le(e, e.return, C);
        }
        try {
          Gn(5, e, e.return);
        } catch (C) {
          le(e, e.return, C);
        }
      }
      break;
    case 1:
      We(t, e), et(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (We(t, e), et(e), r & 512 && n !== null && un(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (C) {
          le(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && i.type === "radio" && i.name != null && bo(l, i), xi(o, s);
          var d = xi(o, i);
          for (s = 0; s < u.length; s += 2) {
            var y = u[s], g = u[s + 1];
            y === "style" ? Uo(l, g) : y === "dangerouslySetInnerHTML" ? $o(l, g) : y === "children" ? Jn(l, g) : ds(l, y, g, d);
          }
          switch (o) {
            case "input":
              hi(l, i);
              break;
            case "textarea":
              Fo(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? dn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? dn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : dn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[ar] = i;
        } catch (C) {
          le(e, e.return, C);
        }
      }
      break;
    case 6:
      if (We(t, e), et(e), r & 4) {
        if (e.stateNode === null) throw Error(M(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (C) {
          le(e, e.return, C);
        }
      }
      break;
    case 3:
      if (We(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        nr(t.containerInfo);
      } catch (C) {
        le(e, e.return, C);
      }
      break;
    case 4:
      We(t, e), et(e);
      break;
    case 13:
      We(t, e), et(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ws = ie())), r & 4 && io(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (d = ge) || y, We(t, e), ge = d) : We(t, e), et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !y && e.mode & 1) for (b = e, y = e.child; y !== null; ) {
          for (g = b = y; b !== null; ) {
            switch (h = b, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Gn(4, h, h.return);
                break;
              case 1:
                un(h, h.return);
                var x = h.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (C) {
                    le(r, n, C);
                  }
                }
                break;
              case 5:
                un(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  ao(g);
                  continue;
                }
            }
            v !== null ? (v.return = h, b = v) : ao(g);
          }
          y = y.sibling;
        }
        e: for (y = null, g = e; ; ) {
          if (g.tag === 5) {
            if (y === null) {
              y = g;
              try {
                l = g.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = g.stateNode, u = g.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = Vo("display", s));
              } catch (C) {
                le(e, e.return, C);
              }
            }
          } else if (g.tag === 6) {
            if (y === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (C) {
              le(e, e.return, C);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            y === g && (y = null), g = g.return;
          }
          y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      We(t, e), et(e), r & 4 && io(e);
      break;
    case 21:
      break;
    default:
      We(
        t,
        e
      ), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), r.flags &= -33);
          var i = lo(e);
          Xi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, o = lo(e);
          Yi(e, o, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      le(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ep(e, t, n) {
  b = e, gc(e);
}
function gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var l = b, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || zr;
      if (!s) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || ge;
        o = zr;
        var d = ge;
        if (zr = s, (ge = u) && !d) for (b = l; b !== null; ) s = b, u = s.child, s.tag === 22 && s.memoizedState !== null ? oo(l) : u !== null ? (u.return = s, b = u) : oo(l);
        for (; i !== null; ) b = i, gc(i), i = i.sibling;
        b = l, zr = o, ge = d;
      }
      so(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, b = i) : so(e);
  }
}
function so(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ge || Il(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ge) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wa(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Wa(t, s, n);
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
              var d = t.alternate;
              if (d !== null) {
                var y = d.memoizedState;
                if (y !== null) {
                  var g = y.dehydrated;
                  g !== null && nr(g);
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
            throw Error(M(163));
        }
        ge || t.flags & 512 && Ki(t);
      } catch (h) {
        le(t, t.return, h);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function ao(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function oo(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Il(4, t);
          } catch (u) {
            le(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              le(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ki(t);
          } catch (u) {
            le(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ki(t);
          } catch (u) {
            le(t, s, u);
          }
      }
    } catch (u) {
      le(t, t.return, u);
    }
    if (t === e) {
      b = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, b = o;
      break;
    }
    b = t.return;
  }
}
var tp = Math.ceil, ml = mt.ReactCurrentDispatcher, Us = mt.ReactCurrentOwner, Ae = mt.ReactCurrentBatchConfig, K = 0, ce = null, se = null, fe = 0, Ie = 0, cn = Dt(0), oe = 0, pr = null, Bt = 0, Tl = 0, Qs = 0, Kn = null, ke = null, Ws = 0, kn = 1 / 0, it = null, hl = !1, Zi = null, It = null, Dr = !1, St = null, gl = 0, Yn = 0, Ji = null, Br = -1, Gr = 0;
function we() {
  return K & 6 ? ie() : Br !== -1 ? Br : Br = ie();
}
function Tt(e) {
  return e.mode & 1 ? K & 2 && fe !== 0 ? fe & -fe : Ff.transition !== null ? (Gr === 0 && (Gr = eu()), Gr) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : au(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < Yn) throw Yn = 0, Ji = null, Error(M(185));
  hr(e, n, r), (!(K & 2) || e !== ce) && (e === ce && (!(K & 2) && (Tl |= n), oe === 4 && xt(e, fe)), je(e, r), n === 1 && K === 0 && !(t.mode & 1) && (kn = ie() + 500, Cl && Rt()));
}
function je(e, t) {
  var n = e.callbackNode;
  bd(e, t);
  var r = qr(e, e === ce ? fe : 0);
  if (r === 0) n !== null && ya(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ya(n), t === 1) e.tag === 0 ? bf(uo.bind(null, e)) : Nu(uo.bind(null, e)), zf(function() {
      !(K & 6) && Rt();
    }), n = null;
    else {
      switch (tu(r)) {
        case 1:
          n = gs;
          break;
        case 4:
          n = Jo;
          break;
        case 16:
          n = Jr;
          break;
        case 536870912:
          n = qo;
          break;
        default:
          n = Jr;
      }
      n = Ec(n, yc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function yc(e, t) {
  if (Br = -1, Gr = 0, K & 6) throw Error(M(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = qr(e, e === ce ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var i = wc();
    (ce !== e || fe !== t) && (it = null, kn = ie() + 500, Vt(e, t));
    do
      try {
        lp();
        break;
      } catch (o) {
        vc(e, o);
      }
    while (!0);
    Ts(), ml.current = i, K = l, se !== null ? t = 0 : (ce = null, fe = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ci(e), l !== 0 && (r = l, t = qi(e, l))), t === 1) throw n = pr, Vt(e, 0), xt(e, r), je(e, ie()), n;
    if (t === 6) xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !np(l) && (t = yl(e, r), t === 2 && (i = Ci(e), i !== 0 && (r = i, t = qi(e, i))), t === 1)) throw n = pr, Vt(e, 0), xt(e, r), je(e, ie()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          bt(e, ke, it);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Ws + 500 - ie(), 10 < t)) {
            if (qr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = zi(bt.bind(null, e, ke, it), t);
            break;
          }
          bt(e, ke, it);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = zi(bt.bind(null, e, ke, it), r);
            break;
          }
          bt(e, ke, it);
          break;
        case 5:
          bt(e, ke, it);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return je(e, ie()), e.callbackNode === n ? yc.bind(null, e) : null;
}
function qi(e, t) {
  var n = Kn;
  return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = ke, ke = n, t !== null && es(t)), e;
}
function es(e) {
  ke === null ? ke = e : ke.push.apply(ke, e);
}
function np(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Je(i(), l)) return !1;
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
function xt(e, t) {
  for (t &= ~Qs, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function uo(e) {
  if (K & 6) throw Error(M(327));
  gn();
  var t = qr(e, 0);
  if (!(t & 1)) return je(e, ie()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && (t = r, n = qi(e, r));
  }
  if (n === 1) throw n = pr, Vt(e, 0), xt(e, t), je(e, ie()), n;
  if (n === 6) throw Error(M(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bt(e, ke, it), je(e, ie()), null;
}
function Hs(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    K = n, K === 0 && (kn = ie() + 500, Cl && Rt());
  }
}
function Gt(e) {
  St !== null && St.tag === 0 && !(K & 6) && gn();
  var t = K;
  K |= 1;
  var n = Ae.transition, r = X;
  try {
    if (Ae.transition = null, X = 1, e) return e();
  } finally {
    X = r, Ae.transition = n, K = t, !(K & 6) && Rt();
  }
}
function Bs() {
  Ie = cn.current, q(cn);
}
function Vt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pf(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (Ns(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ll();
        break;
      case 3:
        _n(), q(Ce), q(ye), Rs();
        break;
      case 5:
        Ds(r);
        break;
      case 4:
        _n();
        break;
      case 13:
        q(te);
        break;
      case 19:
        q(te);
        break;
      case 10:
        Ms(r.type._context);
        break;
      case 22:
      case 23:
        Bs();
    }
    n = n.return;
  }
  if (ce = e, se = e = Mt(e.current, null), fe = Ie = t, oe = 0, pr = null, Qs = Tl = Bt = 0, ke = Kn = null, At !== null) {
    for (t = 0; t < At.length; t++) if (n = At[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    At = null;
  }
  return e;
}
function vc(e, t) {
  do {
    var n = se;
    try {
      if (Ts(), Qr.current = pl, fl) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        fl = !1;
      }
      if (Ht = 0, ue = ae = ne = null, Bn = !1, cr = 0, Us.current = null, n === null || n.return === null) {
        oe = 1, pr = t, se = null;
        break;
      }
      e: {
        var i = e, s = n.return, o = n, u = t;
        if (t = fe, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, y = o, g = y.tag;
          if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = y.alternate;
            h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var v = Xa(s);
          if (v !== null) {
            v.flags &= -257, Za(v, s, o, i, t), v.mode & 1 && Ya(i, d, t), t = v, u = d;
            var x = t.updateQueue;
            if (x === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(u), t.updateQueue = C;
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ya(i, d, t), Gs();
              break e;
            }
            u = Error(M(426));
          }
        } else if (ee && o.mode & 1) {
          var z = Xa(s);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), Za(z, s, o, i, t), js(Sn(u, o));
            break e;
          }
        }
        i = u = Sn(u, o), oe !== 4 && (oe = 2), Kn === null ? Kn = [i] : Kn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = tc(i, u, t);
              Qa(i, c);
              break e;
            case 1:
              o = u;
              var f = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (It === null || !It.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = nc(i, o, t);
                Qa(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _c(n);
    } catch (P) {
      t = P, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wc() {
  var e = ml.current;
  return ml.current = pl, e === null ? pl : e;
}
function Gs() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ce === null || !(Bt & 268435455) && !(Tl & 268435455) || xt(ce, fe);
}
function yl(e, t) {
  var n = K;
  K |= 2;
  var r = wc();
  (ce !== e || fe !== t) && (it = null, Vt(e, t));
  do
    try {
      rp();
      break;
    } catch (l) {
      vc(e, l);
    }
  while (!0);
  if (Ts(), K = n, ml.current = r, se !== null) throw Error(M(261));
  return ce = null, fe = 0, oe;
}
function rp() {
  for (; se !== null; ) xc(se);
}
function lp() {
  for (; se !== null && !Id(); ) xc(se);
}
function xc(e) {
  var t = kc(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? _c(e) : se = t, Us.current = null;
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zf(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, se = null;
        return;
      }
    } else if (n = Xf(n, t, Ie), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function bt(e, t, n) {
  var r = X, l = Ae.transition;
  try {
    Ae.transition = null, X = 1, ip(e, t, n, r);
  } finally {
    Ae.transition = l, X = r;
  }
  return null;
}
function ip(e, t, n, r) {
  do
    gn();
  while (St !== null);
  if (K & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Fd(e, i), e === ce && (se = ce = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, Ec(Jr, function() {
    return gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ae.transition, Ae.transition = null;
    var s = X;
    X = 1;
    var o = K;
    K |= 4, Us.current = null, qf(e, n), hc(n, e), Cf(Li), el = !!Mi, Li = Mi = null, e.current = n, ep(n), Td(), K = o, X = s, Ae.transition = i;
  } else e.current = n;
  if (Dr && (Dr = !1, St = e, gl = l), i = e.pendingLanes, i === 0 && (It = null), Pd(n.stateNode), je(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hl) throw hl = !1, e = Zi, Zi = null, e;
  return gl & 1 && e.tag !== 0 && gn(), i = e.pendingLanes, i & 1 ? e === Ji ? Yn++ : (Yn = 0, Ji = e) : Yn = 0, Rt(), null;
}
function gn() {
  if (St !== null) {
    var e = tu(gl), t = Ae.transition, n = X;
    try {
      if (Ae.transition = null, X = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, gl = 0, K & 6) throw Error(M(331));
        var l = K;
        for (K |= 4, b = e.current; b !== null; ) {
          var i = b, s = i.child;
          if (b.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (b = d; b !== null; ) {
                  var y = b;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, y, i);
                  }
                  var g = y.child;
                  if (g !== null) g.return = y, b = g;
                  else for (; b !== null; ) {
                    y = b;
                    var h = y.sibling, v = y.return;
                    if (fc(y), y === d) {
                      b = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, b = h;
                      break;
                    }
                    b = v;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var C = x.child;
                if (C !== null) {
                  x.child = null;
                  do {
                    var z = C.sibling;
                    C.sibling = null, C = z;
                  } while (C !== null);
                }
              }
              b = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, b = s;
          else e: for (; b !== null; ) {
            if (i = b, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Gn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, b = c;
              break e;
            }
            b = i.return;
          }
        }
        var f = e.current;
        for (b = f; b !== null; ) {
          s = b;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, b = m;
          else e: for (s = f; b !== null; ) {
            if (o = b, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Il(9, o);
              }
            } catch (P) {
              le(o, o.return, P);
            }
            if (o === s) {
              b = null;
              break e;
            }
            var E = o.sibling;
            if (E !== null) {
              E.return = o.return, b = E;
              break e;
            }
            b = o.return;
          }
        }
        if (K = l, Rt(), rt && typeof rt.onPostCommitFiberRoot == "function") try {
          rt.onPostCommitFiberRoot(xl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      X = n, Ae.transition = t;
    }
  }
  return !1;
}
function co(e, t, n) {
  t = Sn(n, t), t = tc(e, t, 1), e = jt(e, t, 1), t = we(), e !== null && (hr(e, 1, t), je(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) co(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      co(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
        e = Sn(n, e), e = nc(t, e, 1), t = jt(t, e, 1), e = we(), t !== null && (hr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (fe & n) === n && (oe === 4 || oe === 3 && (fe & 130023424) === fe && 500 > ie() - Ws ? Vt(e, 0) : Qs |= n), je(e, t);
}
function Sc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Er, Er <<= 1, !(Er & 130023424) && (Er = 4194304)) : t = 1);
  var n = we();
  e = ft(e, t), e !== null && (hr(e, t, n), je(e, n));
}
function ap(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function op(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), Sc(e, n);
}
var kc;
kc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ee = !1, Yf(e, t, n);
    Ee = !!(e.flags & 131072);
  }
  else Ee = !1, ee && t.flags & 1048576 && ju(t, al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hr(e, t), e = t.pendingProps;
      var l = vn(t, ye.current);
      hn(t, n), l = bs(null, t, r, e, l, n);
      var i = Fs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (i = !0, il(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ps(t), l.updater = jl, t.stateNode = l, l._reactInternals = t, $i(t, r, e, n), t = Qi(null, t, r, !0, i, n)) : (t.tag = 0, ee && i && Cs(t), ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = cp(r), e = Be(r, e), l) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = eo(null, t, r, e, n);
            break e;
          case 11:
            t = Ja(null, t, r, e, n);
            break e;
          case 14:
            t = qa(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(M(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), eo(e, t, r, l, n);
    case 3:
      e: {
        if (sc(t), e === null) throw Error(M(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, zu(e, t), cl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Sn(Error(M(423)), t), t = to(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Sn(Error(M(424)), t), t = to(e, t, r, n, l);
          break e;
        } else for (Me = Nt(t.stateNode.containerInfo.firstChild), Le = t, ee = !0, Ke = null, n = Lu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (wn(), r === l) {
            t = pt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Du(t), e === null && bi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Pi(r, l) ? s = null : i !== null && Pi(r, i) && (t.flags |= 32), ic(e, t), ve(e, t, s, n), t.child;
    case 6:
      return e === null && bi(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return zs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Ja(e, t, r, l, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, Z(ol, r._currentValue), r._currentValue = s, i !== null) if (Je(i.value, s)) {
          if (i.children === l.children && !Ce.current) {
            t = pt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var o = i.dependencies;
          if (o !== null) {
            s = i.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = ut(-1, n & -n), u.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var y = d.pending;
                    y === null ? u.next = u : (u.next = y.next, y.next = u), d.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fi(
                  i.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(M(341));
            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Fi(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        ve(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, hn(t, n), l = $e(l), r = r(l), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Be(r, t.pendingProps), l = Be(r.type, l), qa(e, t, r, l, n);
    case 15:
      return rc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Be(r, l), Hr(e, t), t.tag = 1, Ne(r) ? (e = !0, il(t)) : e = !1, hn(t, n), ec(t, r, l), $i(t, r, l, n), Qi(null, t, r, !0, e, n);
    case 19:
      return oc(e, t, n);
    case 22:
      return lc(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Ec(e, t) {
  return Zo(e, t);
}
function up(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function be(e, t, n, r) {
  return new up(e, t, n, r);
}
function Ks(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cp(e) {
  if (typeof e == "function") return Ks(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ps) return 11;
    if (e === ms) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Kr(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Ks(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case qt:
      return Ut(n.children, l, i, t);
    case fs:
      s = 8, l |= 8;
      break;
    case ci:
      return e = be(12, n, t, l | 2), e.elementType = ci, e.lanes = i, e;
    case di:
      return e = be(13, n, t, l), e.elementType = di, e.lanes = i, e;
    case fi:
      return e = be(19, n, t, l), e.elementType = fi, e.lanes = i, e;
    case Do:
      return Ml(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Po:
          s = 10;
          break e;
        case zo:
          s = 9;
          break e;
        case ps:
          s = 11;
          break e;
        case ms:
          s = 14;
          break e;
        case yt:
          s = 16, r = null;
          break e;
      }
      throw Error(M(130, e == null ? e : typeof e, ""));
  }
  return t = be(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ut(e, t, n, r) {
  return e = be(7, e, r, t), e.lanes = n, e;
}
function Ml(e, t, n, r) {
  return e = be(22, e, r, t), e.elementType = Do, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ai(e, t, n) {
  return e = be(6, e, null, t), e.lanes = n, e;
}
function oi(e, t, n) {
  return t = be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function dp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ys(e, t, n, r, l, i, s, o, u) {
  return e = new dp(e, t, n, o, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = be(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ps(i), e;
}
function fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cc(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Cu(e, n, t);
  }
  return t;
}
function Nc(e, t, n, r, l, i, s, o, u) {
  return e = Ys(n, r, !0, e, l, i, s, o, u), e.context = Cc(null), n = e.current, r = we(), l = Tt(n), i = ut(r, l), i.callback = t ?? null, jt(n, i, l), e.current.lanes = l, hr(e, l, r), je(e, r), e;
}
function Ll(e, t, n, r) {
  var l = t.current, i = we(), s = Tt(l);
  return n = Cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = ut(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(l, t, s), e !== null && (Ze(e, l, s, i), Ur(e, l, s)), s;
}
function vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xs(e, t) {
  fo(e, t), (e = e.alternate) && fo(e, t);
}
function pp() {
  return null;
}
var jc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zs(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Zs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Ll(e, t, null, null);
};
Pl.prototype.unmount = Zs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function() {
      Ll(null, e, null, null);
    }), t[dt] = null;
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++) ;
    wt.splice(n, 0, e), n === 0 && su(e);
  }
};
function Js(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function po() {
}
function mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = vl(s);
        i.call(d);
      };
    }
    var s = Nc(t, r, e, 0, null, !1, !1, "", po);
    return e._reactRootContainer = s, e[dt] = s.current, ir(e.nodeType === 8 ? e.parentNode : e), Gt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var d = vl(u);
      o.call(d);
    };
  }
  var u = Ys(e, 0, !1, null, null, !1, !1, "", po);
  return e._reactRootContainer = u, e[dt] = u.current, ir(e.nodeType === 8 ? e.parentNode : e), Gt(function() {
    Ll(t, u, n, r);
  }), u;
}
function Dl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = vl(s);
        o.call(u);
      };
    }
    Ll(t, s, e, l);
  } else s = mp(n, t, e, l, r);
  return vl(s);
}
nu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 && (ys(t, n | 1), je(t, ie()), !(K & 6) && (kn = ie() + 500, Rt()));
      }
      break;
    case 13:
      Gt(function() {
        var r = ft(e, 1);
        if (r !== null) {
          var l = we();
          Ze(r, e, 1, l);
        }
      }), Xs(e, 1);
  }
};
vs = function(e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    Xs(e, 134217728);
  }
};
ru = function(e) {
  if (e.tag === 13) {
    var t = Tt(e), n = ft(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    Xs(e, t);
  }
};
lu = function() {
  return X;
};
iu = function(e, t) {
  var n = X;
  try {
    return X = e, t();
  } finally {
    X = n;
  }
};
Si = function(e, t, n) {
  switch (t) {
    case "input":
      if (hi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = El(r);
            if (!l) throw Error(M(90));
            Oo(r), hi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Fo(e, n);
      break;
    case "select":
      t = n.value, t != null && dn(e, !!n.multiple, t, !1);
  }
};
Ho = Hs;
Bo = Gt;
var hp = { usingClientEntryPoint: !1, Events: [yr, rn, El, Qo, Wo, Hs] }, On = { findFiberByHostInstance: Ft, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gp = { bundleType: On.bundleType, version: On.version, rendererPackageName: On.rendererPackageName, rendererConfig: On.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yo(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: On.findFiberByHostInstance || pp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    xl = Rr.inject(gp), rt = Rr;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Js(t)) throw Error(M(200));
  return fp(e, t, null, n);
};
ze.createRoot = function(e, t) {
  if (!Js(e)) throw Error(M(299));
  var n = !1, r = "", l = jc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ys(e, 1, !1, null, null, n, !1, r, l), e[dt] = t.current, ir(e.nodeType === 8 ? e.parentNode : e), new Zs(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
  return e = Yo(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return Gt(e);
};
ze.hydrate = function(e, t, n) {
  if (!zl(t)) throw Error(M(200));
  return Dl(null, e, t, !0, n);
};
ze.hydrateRoot = function(e, t, n) {
  if (!Js(e)) throw Error(M(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = jc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Nc(t, null, e, 1, n ?? null, l, !1, i, s), e[dt] = t.current, ir(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Pl(t);
};
ze.render = function(e, t, n) {
  if (!zl(t)) throw Error(M(200));
  return Dl(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(M(40));
  return e._reactRootContainer ? (Gt(function() {
    Dl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dt] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = Hs;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Dl(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), Io.exports = ze;
var Te = Io.exports, Tc, mo = Te;
Tc = mo.createRoot, mo.hydrateRoot;
window.api = B;
const yp = async () => {
  const e = await B.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, ts = async (e = 0, t = 30, n = "", r = "default") => {
  const l = await B.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}`
  );
  if (!l.ok)
    throw new Error(`Failed to fetch images: ${l.statusText}`);
  return await l.json();
}, vp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await B.fetchApi(n);
  return r.ok ? await r.json() : [];
}, wp = async () => {
  const e = await B.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Mc = async () => {
  const e = await B.fetchApi("/meld/settings");
  if (!e.ok)
    return {
      dev_mode: !1,
      "gallery.show_parent_image": !0,
      "gallery.hide_parent_images": !0,
      "sidebar.show_filename": "filename",
      "sidebar.show_dimensions": !0,
      "sidebar.show_created_at": !1,
      "sidebar.show_model_name": !0,
      "sidebar.show_positive_prompt": !0,
      "sidebar.show_negative_prompt": !1,
      "sidebar.show_tags": !0,
      "search.quick_suggestions": !0,
      "search.input_suggest": !0,
      "search.realtime_search": !0,
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
      "viewer.details.max_positive_prompt_lines": 7,
      "viewer.details.max_negative_prompt_lines": 7,
      "gallery.page_size": 30,
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
      "gallery.view_mode": "grid_details"
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, xp = async (e, t) => {
  if (!(await B.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, _p = async (e, t) => {
  if (!(await B.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Sp = async (e, t = 12) => {
  const n = await B.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, ns = async (e) => {
  const t = await B.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, kp = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await B.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, rs = async (e, t = !1) => {
  const n = await B.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to delete images");
  }
}, ls = async (e) => {
  const t = await B.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Lc = async (e) => {
  const t = await B.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, Ep = async (e, t, n = !1, r) => {
  const l = await B.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Cp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await B.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Np = async (e, t, n) => {
  const r = await B.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, jp = async (e) => {
  const t = await B.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Ip = async () => {
  if (!(await B.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Tp = async () => {
  const e = await B.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Mp = async (e, t) => {
  if (!(await B.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, ho = async (e) => {
  if (!(await B.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Lp = async (e, t) => {
  if (!(await B.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, qs = async () => {
  const e = await B.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Pp = async (e) => {
  const t = await B.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, zp = async (e) => {
  if (!(await B.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Dp = async (e, t) => {
  const n = await B.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Rp = async (e, t) => {
  if (!(await B.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Op = async (e, t, n) => {
  if (!(await B.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, bp = async (e) => {
  const t = await B.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Fp = async (e) => {
  const t = await B.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Pc = { exports: {} }, Rl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap = w, $p = Symbol.for("react.element"), Vp = Symbol.for("react.fragment"), Up = Object.prototype.hasOwnProperty, Qp = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wp = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Up.call(t, r) && !Wp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: $p, type: e, key: i, ref: s, props: l, _owner: Qp.current };
}
Rl.Fragment = Vp;
Rl.jsx = zc;
Rl.jsxs = zc;
Pc.exports = Rl;
var a = Pc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hp = {
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
const Bp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = w.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: o = "",
      children: u,
      ...d
    }, y) => w.createElement(
      "svg",
      {
        ref: y,
        ...Hp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Bp(e)}`, o].join(" "),
        ...d
      },
      [
        ...t.map(([g, h]) => w.createElement(g, h)),
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
const Gp = G("AlertTriangle", [
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
const Kp = G("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = G("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = G("ArrowUpDown", [
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
const Rc = G("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = G("Box", [
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
const Zp = G("Calendar", [
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
const Jp = G("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = G("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = G("Download", [
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
const tm = G("Folder", [
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
const nm = G("Info", [
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
const Ac = G("LayoutGrid", [
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
const rm = G("LayoutList", [
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
const lm = G("Maximize", [
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
const im = G("Minimize", [
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
const sm = G("MoreVertical", [
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
const $c = G("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = G("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = G("RefreshCw", [
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
const En = G("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = G("Settings", [
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
const cm = G("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = G("Star", [
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
const Xt = G("Tag", [
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
const Cn = G("Trash2", [
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
const dm = G("Type", [
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
const fm = G("Upload", [
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
const xe = G("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let wl = !1;
const pm = (e) => {
  wl = e, wl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, mm = (...e) => {
  wl && console.log("[Meld]", ...e);
}, hm = (...e) => {
  wl && console.warn("[Meld]", ...e);
}, gm = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: mm,
  warn: hm,
  error: gm,
  init: pm
}, ym = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  lastUpdated: Date.now(),
  viewMode: "list",
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
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
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": "filename",
    "sidebar.show_dimensions": !0,
    "sidebar.show_created_at": !1,
    "sidebar.show_model_name": !0,
    "sidebar.show_positive_prompt": !0,
    "sidebar.show_negative_prompt": !1,
    "sidebar.show_tags": !0,
    "search.quick_suggestions": !0,
    "search.input_suggest": !0,
    "search.realtime_search": !0,
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
    "viewer.details.max_positive_prompt_lines": 7,
    "viewer.details.max_negative_prompt_lines": 7,
    "gallery.page_size": 30,
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
    "gallery.view_mode": "grid_details"
  },
  pagination: {
    total: 0,
    offset: 0,
    limit: 30,
    hasMore: !1
  },
  searchQuery: "",
  favorites: []
};
function vm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), i = e.images.filter((o) => !l.has(o.id)), s = new Set(e.selectedIds);
      for (const o of t.payload)
        s.delete(o);
      return {
        ...e,
        images: i,
        selectedIds: s,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, i = [...e.images, ...l], s = Array.from(
        new Map(i.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: s,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: i,
          offset: s,
          limit: e.pagination.limit,
          hasMore: s + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((d) => [d.id, d])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: i,
          offset: s,
          hasMore: s + l.length < i
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
      let i = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), i === t.payload && (i = null)) : (l.add(t.payload), i = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: i
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
      const l = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [s, o] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let d = s; d <= o; d++)
        u.add(e.images[d].id);
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
    case "SET_VIEW_MODE":
      return {
        ...e,
        viewMode: t.payload
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
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const l = t.payload, i = typeof l == "number" ? l : l.id, s = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && s === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: s,
        lineageImages: o ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const i = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (d) => d.id === e.viewerImageId
      );
      if (o === -1 || o === s.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === s.length - 1 && !i)
        return e;
      const u = (o + 1) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const o = s.findIndex(
        (d) => d.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !i)
        return e;
      const u = (o - 1 + s.length) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
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
      }, i = { ...e.pagination };
      return t.payload["gallery.page_size"] !== void 0 && (i.limit = t.payload["gallery.page_size"]), {
        ...e,
        settings: l,
        pagination: i
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
const Vc = w.createContext(void 0), wm = ({
  children: e
}) => {
  const [t, n] = w.useReducer(vm, ym), r = w.useRef(t.images.length);
  w.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const l = w.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const g = t.searchQuery.trim() !== "", h = t.pagination.limit;
      V.log("refreshImages: starting fetch", {
        isSearch: g,
        fetchLimit: h,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const v = await ts(
        0,
        h,
        t.searchQuery,
        t.viewScope
      ), x = performance.now() - y;
      V.log("refreshImages: fetch complete", {
        count: v.images.length,
        total: v.total,
        offset: v.offset,
        durationMs: x.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: v }), V.log(
        "refreshImages: dispatch complete",
        (performance.now() - y).toFixed(2)
      );
    } catch (g) {
      V.error("refreshImages: fetch failed", g), n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.pagination.limit, t.searchQuery, t.viewScope]), i = w.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const g = r.current, h = t.searchQuery.trim() !== "", v = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: g,
        fetchLimit: v,
        isSearch: h
      });
      const x = await ts(
        g,
        v,
        t.searchQuery,
        t.viewScope
      ), C = performance.now() - y;
      V.log("loadMoreImages: fetch complete", {
        count: x.images.length,
        total: x.total,
        offset: x.offset,
        durationMs: C.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: x });
    } catch (g) {
      V.error("loadMoreImages: fetch failed", g), n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), s = w.useCallback(async () => {
    try {
      const y = await Tp();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      V.error("Failed to load favorites", y);
    }
  }, []), o = w.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), h = t.images.filter(
      (v) => t.selectedIds.has(v.id)
    ).some(
      (v) => v.parent_id || v.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: h,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), u = w.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await ls(y), t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: y }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (g) {
      n({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    }
  }, [t.selectedIds, t.viewScope]), d = w.useCallback(
    async (y, g) => {
      try {
        await xp(y, g), n({ type: "SET_SETTINGS", payload: { [y]: g } });
      } catch (h) {
        n({
          type: "SET_ERROR",
          payload: h instanceof Error ? h.message : String(h)
        });
      }
    },
    []
  );
  return w.useEffect(() => {
    (async () => {
      try {
        const g = await Mc();
        n({ type: "SET_SETTINGS", payload: g });
      } catch (g) {
        V.error("Failed to load settings", g);
      }
    })();
  }, []), w.useEffect(() => {
    s();
  }, [s]), w.useEffect(() => {
    const y = () => {
      l();
    }, g = (v) => {
      const x = v.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: x }
      });
    }, h = (v) => {
      const x = v.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: x.new_count || 0,
          updatedCount: x.updated_count || 0,
          totalCount: x.total_count || 0,
          progress: {
            current: x.total_count || t.scanStatus.progress.total,
            total: x.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), l();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", g), window.addEventListener("meld-scan-finished", h), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", g), window.removeEventListener("meld-scan-finished", h);
    };
  }, [l, t.scanStatus.progress.total]), w.useEffect(() => {
    l();
  }, [l]), /* @__PURE__ */ a.jsx(
    Vc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: l,
        loadMoreImages: i,
        refreshFavorites: s,
        deleteSelected: o,
        restoreSelected: u,
        updateSetting: d
      },
      children: e
    }
  );
}, qe = () => {
  const e = w.useContext(Vc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, xm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = w.useState(!1), i = w.useRef(null);
  return w.useEffect(() => {
    const s = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = i.current;
    return o && s.observe(o), () => {
      o && s.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: i,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, _m = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = qe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", s = () => {
    const o = e.images.filter(
      (d) => e.selectedIds.has(d.id)
    ), u = /* @__PURE__ */ new Set();
    for (const d of o)
      if (d.tags)
        for (const y of d.tags)
          u.add(y);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        i ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ a.jsx(
                  Xn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ a.jsx(
                  Cn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: s,
              children: [
                /* @__PURE__ */ a.jsx(
                  Xt,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ a.jsx(
                  Cn,
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
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ a.jsx(xe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Uc = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: i } = qe(), s = w.useRef(!0);
  w.useEffect(() => () => {
    s.current = !1;
  }, []);
  const o = w.useRef(l.viewerImageId);
  w.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = w.useCallback(() => {
    i({ type: "CLOSE_MODAL" });
  }, [i]), d = w.useCallback(
    (h) => {
      if (!s.current) return;
      const v = o.current;
      if (v === null || !h.has(v))
        return;
      const x = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (c) => c.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && c.has_children)
      ), C = x.findIndex(
        (c) => c.id === v
      );
      if (C === -1) return;
      let z = !1;
      for (let c = C + 1; c < x.length; c++)
        if (!h.has(x[c].id)) {
          i({
            type: "OPEN_VIEWER",
            payload: { id: x[c].id, mode: l.viewerMode }
          }), z = !0;
          break;
        }
      if (!z) {
        for (let c = C - 1; c >= 0; c--)
          if (!h.has(x[c].id)) {
            i({
              type: "OPEN_VIEWER",
              payload: { id: x[c].id, mode: l.viewerMode }
            }), z = !0;
            break;
          }
      }
      z || i({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      i
    ]
  );
  w.useEffect(() => {
    const h = (v) => {
      v.key === "Escape" && u();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [u]);
  const y = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (C) => C.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && C.has_children)
      ), v = new Set(e), x = h.filter(
        (C) => v.has(C.id)
      );
      if (d(v), await rs(e, n), !s.current) return;
      !n && r && r(x), i({ type: "REMOVE_IMAGES", payload: e }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    try {
      i({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (C) => C.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && C.has_children)
      ), v = new Set(e);
      for (const C of e) {
        const z = await ns(C);
        if (!s.current) return;
        for (const c of z)
          v.add(c.id);
      }
      const x = h.filter(
        (C) => v.has(C.id)
      );
      if (d(v), await rs(Array.from(v), n), !s.current) return;
      !n && r && r(x), i({
        type: "REMOVE_IMAGES",
        payload: Array.from(v)
      }), i({ type: "CLEAR_SELECTION" }), i({ type: "CLOSE_MODAL" });
    } catch (h) {
      i({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), i({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(Cn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ a.jsxs(
            "div",
            {
              style: {
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              },
              children: [
                /* @__PURE__ */ a.jsxs("p", { children: [
                  "Are you sure you want to",
                  " ",
                  n ? "permanently delete" : "move to trash",
                  " ",
                  /* @__PURE__ */ a.jsx("strong", { children: e.length }),
                  " selected items?"
                ] }),
                /* @__PURE__ */ a.jsxs(
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
                      /* @__PURE__ */ a.jsx(
                        Gp,
                        {
                          size: 20,
                          style: {
                            color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ a.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                        /* @__PURE__ */ a.jsx("strong", { children: "WARNING:" }),
                        " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                      ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                        /* @__PURE__ */ a.jsx("strong", { children: "INFO:" }),
                        " Selected items will be moved to the trash bin. You can restore them later from the settings."
                      ] }) })
                    ]
                  }
                ),
                t && /* @__PURE__ */ a.jsxs(
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
                      /* @__PURE__ */ a.jsx("strong", { children: "Source" }),
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: y,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: g,
                  children: n ? "Delete All Related" : "Move All Related"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, Fe = (e) => {
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
}, Sm = ({ image: e }) => {
  const { state: t, dispatch: n } = qe(), r = t.selectedIds.has(e.id), i = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [s, o] = w.useState(null), [u, d] = w.useState(!1), [y, g] = w.useState(null), [h, v] = w.useState(!1), x = w.useRef(null), C = async (p, k, O = !1) => {
    try {
      await navigator.clipboard.writeText(p), O ? (v(!0), setTimeout(() => v(!1), 2e3)) : (g(k), setTimeout(() => g(null), 2e3));
    } catch (_) {
      console.error("Failed to copy text: ", _);
    }
  };
  w.useEffect(() => {
    const p = (O) => {
      O.key === "Escape" && (s ? o(null) : d(!1));
    }, k = (O) => {
      x.current && !x.current.contains(O.target) && d(!1);
    };
    return window.addEventListener("keydown", p), u && document.addEventListener("mousedown", k), () => {
      window.removeEventListener("keydown", p), document.removeEventListener("mousedown", k);
    };
  }, [u, s]);
  const z = (p) => {
    const k = t.settings["gallery.lineage_max_depth"];
    if (k === 0) return [];
    if (p.ancestors && p.ancestors.length > 0)
      return p.ancestors.slice(0, k).map((Q) => ({
        id: Q.id,
        imgSrc: Fe(Q)
      }));
    const O = p.parent_id;
    if (!O || !p.parent_filename) return [];
    const _ = t.images.find((Q) => Q.id === O);
    let j = null;
    if (_ ? j = Fe(_) : j = Fe({
      filename: p.parent_filename,
      subfolder: p.parent_subfolder || "",
      type: p.parent_type
    }), !j) return [];
    const U = {
      id: O || null,
      imgSrc: j
    };
    if (_ && k > 1) {
      const Q = z(_);
      return [U, ...Q].slice(0, k);
    }
    return [U];
  }, c = z(e), m = t.settings["sidebar.show_filename"] === "filepath" ? `${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, E = Fe(e), P = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, R = (p) => {
    p.shiftKey ? (p.preventDefault(), p.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : p.ctrlKey || p.metaKey || t.selectedIds.size > 0 ? (p.preventDefault(), p.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, S = (p) => {
    (p.shiftKey || p.ctrlKey || p.metaKey || t.selectedIds.size > 0) && p.preventDefault();
  }, L = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, D = async () => {
    try {
      const p = await bp(e.id);
      if (!p.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        p.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (p) {
      V.error("Error restoring workflow:", p), alert("Failed to restore workflow.");
    }
  }, $ = async () => {
    try {
      const p = await Fp(e.id), k = "MeldUnifiedLoader", O = window.app, j = window.LiteGraph.createNode(k);
      if (!j) {
        console.error(`Node type ${k} not found.`), alert(
          `Node type ${k} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const U = {
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
      if (j.widgets) {
        for (const [N, A] of Object.entries(U)) {
          const I = p[N];
          if (I != null) {
            const Y = j.widgets.find(
              (W) => W.name === A
            );
            Y && (Y.value = I);
          }
        }
        const F = j.widgets.find(
          (N) => N.name === "control_after_generate"
        );
        F && (F.value = "fixed");
      }
      const Q = O.canvas.ds.offset, T = O.canvas.ds.scale;
      j.pos = [(-Q[0] + 400) / T, (-Q[1] + 300) / T], O.graph.add(j), O.canvas.selectNode(j), O.canvas.centerOnNode(j);
    } catch (p) {
      console.error("Error adding Unified Loader:", p), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--grid-only" : ""}`,
      onClick: R,
      onMouseDown: S,
      onKeyDown: L,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            src: E,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: S,
            onClick: (p) => {
              p.stopPropagation(), P(p);
            }
          }
        ) }),
        !i && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && m,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && c.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-lineage-thumbs", children: c.map(
              (p, k) => p.imgSrc && /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: p.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (O) => {
                    O.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: p.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: k === 0 ? "Source" : k === 1 ? "Grand-Source" : `Ancestor (S${k + 1})`,
                  alt: "source thumb"
                },
                p.id || k
              )
            ) })
          ] }),
          t.settings["sidebar.show_created_at"] && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
          ] }),
          t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__meta-item", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
            /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), o({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${y === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (p) => {
                      p.stopPropagation(), C(e.model_name || "-", "Model");
                    },
                    children: y === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), o({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${y === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (p) => {
                      p.stopPropagation(), C(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: y === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), o({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${y === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (p) => {
                      p.stopPropagation(), C(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: y === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (p) => {
                p.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((p, k) => /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: p
                  },
                  `${p}-${k}`
                )) : /* @__PURE__ */ a.jsx(
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
        !i && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu-container", ref: x, children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (p) => {
                p.stopPropagation(), d(!u);
              },
              title: "Menu",
              children: /* @__PURE__ */ a.jsx(sm, { size: 16 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (p) => {
                p.stopPropagation(), $();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ a.jsx(go, { size: 16 })
            }
          ),
          u && /* @__PURE__ */ a.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), $(), d(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(go, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), D(), d(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Kp, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), d(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(om, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (p) => {
                  p.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), d(!1);
                },
                children: [
                  /* @__PURE__ */ a.jsx(Xt, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        s && Te.createPortal(
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (p) => {
                p.stopPropagation(), o(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (p) => p.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ a.jsx("span", { children: s.title }),
                      /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            h ? /* @__PURE__ */ a.jsx(
                              Oc,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ a.jsx(
                              qp,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => C(s.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              xe,
                              {
                                className: "meld-prompt-popup-close",
                                size: 18,
                                onClick: () => o(null)
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-prompt-popup-text", children: s.text })
                  ]
                }
              )
            }
          ),
          document.body
        )
      ]
    }
  );
}, Qc = () => {
  const { dispatch: e } = qe(), [t, n] = w.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = w.useState([]), [i, s] = w.useState([]), [o, u] = w.useState(0), [d, y] = w.useState(!1), [g, h] = w.useState([]), [v, x] = w.useState(""), [C, z] = w.useState(!1), [c, f] = w.useState(null);
  w.useEffect(() => {
    (async () => {
      try {
        const k = await yp();
        n((O) => ({ ...O, custom_path: k }));
      } catch (k) {
        V.error("Failed to fetch home directory:", k);
      }
    })();
  }, []), w.useEffect(() => {
    const p = new AbortController();
    return (async () => {
      const O = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${O}", Type: "${t.type}"`
      ), t.type === "custom" && !O) {
        V.log("Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      y(!0);
      const _ = O, j = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const U = await Ep(
          t.type,
          O,
          !0,
          p.signal
        );
        if (p.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${U.folders.length} folders, ${U.images.length} images.`
        ), l(U.folders), s(U.images), u(null);
        const Q = U.folders.map((T) => T.name);
        Q.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${Q.length} folders...`
        ), Cp(
          j,
          _,
          Q,
          p.signal
        ).then((T) => {
          if (p.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (F) => F.map((N) => {
              const A = T[N.name];
              return A ? { ...N, count: A.count, preview: A.preview } : N;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", T);
        })), V.log("Step 3: Path image count starting..."), Np(j, _, p.signal).then((T) => {
          if (p.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 3: Path image count failed:", T);
        });
      } catch (U) {
        if (U.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", U), l([]), s([]), u(0);
      } finally {
        p.signal.aborted || y(!1);
      }
    })(), () => {
      p.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const m = w.useCallback(async () => {
    z(!0);
    try {
      const p = await qs();
      h(p);
    } catch (p) {
      V.error("Failed to fetch tags:", p);
    } finally {
      z(!1);
    }
  }, []);
  w.useEffect(() => {
    m();
  }, [m]), w.useEffect(() => {
    const p = (k) => {
      k.key === "Escape" && (k.preventDefault(), k.stopImmediatePropagation(), c ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", p, { capture: !0 }), () => window.removeEventListener("keydown", p, { capture: !0 });
  }, [c, e]);
  const E = w.useMemo(() => g.filter(
    (p) => p.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(p.name)
  ), [g, v, t.tags]), P = (p) => {
    const k = p.trim();
    k && !t.tags.includes(k) && (n({ ...t, tags: [...t.tags, k] }), x(""));
  }, R = (p) => {
    n({ ...t, tags: t.tags.filter((k) => k !== p) });
  }, S = (p) => {
    p.key === "Enter" && v.trim() && (p.preventDefault(), P(v.trim()));
  }, L = async () => {
    try {
      await jp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (p) {
      V.error("Failed to start scan:", p), alert(`Failed to start scan: ${p}`);
    }
  }, D = (p) => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", O = t.custom_path.endsWith(k) ? `${t.custom_path}${p}` : `${t.custom_path}${k}${p}`;
      n({ ...t, custom_path: O });
    } else {
      const k = t.subfolder ? `${t.subfolder}/${p}` : p;
      n({ ...t, subfolder: k });
    }
  }, $ = () => {
    if (t.type === "custom") {
      const p = t.custom_path.includes("\\") ? "\\" : "/", k = t.custom_path.split(p);
      if (k.length > 1) {
        k.pop();
        let O = k.join(p);
        O === "" && p === "/" && (O = "/"), n({ ...t, custom_path: O });
      }
    } else {
      const p = t.subfolder.split("/");
      p.pop(), n({ ...t, subfolder: p.join("/") });
    }
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (p) => p.stopPropagation(),
              children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ a.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ a.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (p) => n({
                            ...t,
                            type: p.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ a.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ a.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ a.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ a.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (p) => n({ ...t, recursive: p.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ a.jsxs("label", { children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (p) => n({
                            ...t,
                            auto_link_parent: p.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ a.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((p) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        p,
                        /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => R(p),
                            children: /* @__PURE__ */ a.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, p)) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ a.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ a.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (p) => x(p.target.value),
                            onKeyDown: S
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ a.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => P(v),
                            children: /* @__PURE__ */ a.jsx(ea, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: C ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? v && /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : E.map((p) => /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => P(p.name),
                          children: p.name
                        },
                        p.id
                      )) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: L,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ a.jsx(am, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ a.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: $,
                          children: [
                            /* @__PURE__ */ a.jsx(bc, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (p) => n({ ...t, custom_path: p.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ a.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                      r.map((p) => /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => D(p.name),
                          children: [
                            /* @__PURE__ */ a.jsx("div", { className: "meld-folder-icon-wrapper", children: p.preview ? /* @__PURE__ */ a.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Fe(p.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ a.jsx(tm, { size: 16 }) }),
                            /* @__PURE__ */ a.jsx("span", { className: "meld-folder-name", children: p.name }),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${p.count === null ? "meld-folder-count--loading" : ""}`,
                                children: p.count !== null ? `${p.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ a.jsx(Fc, { size: 14 })
                          ]
                        },
                        p.name
                      )),
                      i.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-browser-image-grid", children: i.map((p) => /* @__PURE__ */ a.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(p),
                          children: /* @__PURE__ */ a.jsx(
                            "img",
                            {
                              src: Fe(p),
                              alt: p.filename,
                              title: p.filename
                            }
                          )
                        },
                        p.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          c && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (p) => {
                p.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (p) => p.stopPropagation(),
                  children: [
                    /* @__PURE__ */ a.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ a.jsx(xe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "img",
                        {
                          src: Fe(c),
                          alt: c.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-import-preview-info", children: c.filename })
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
}, Wc = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = qe(), [l, i] = w.useState([]), [s, o] = w.useState(!0), [u, d] = w.useState(!1), y = t.images.find((c) => c.id === e), g = w.useCallback(async () => {
    o(!0);
    try {
      const c = await Sp(e);
      i(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e]);
  w.useEffect(() => {
    g();
  }, [g]);
  const h = async (c) => {
    try {
      await _p(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (f) {
      console.error("Failed to link parent:", f);
    }
  }, v = async (c) => {
    o(!0);
    try {
      const f = await kp(c), { id: m } = await Lc({
        filename: f.name,
        subfolder: f.subfolder || "",
        type: f.type || "input"
      });
      await h(m);
    } catch (f) {
      console.error("Failed to upload/register image:", f);
    } finally {
      o(!1);
    }
  }, x = (c) => {
    c.preventDefault(), c.stopPropagation(), d(!1);
    const f = c.dataTransfer.files[0];
    f != null && f.type.startsWith("image/") && v(f);
  };
  if (!y) return null;
  const C = l.filter((c) => c.is_source_match), z = l.filter((c) => !c.is_source_match);
  return Te.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!1);
                },
                onDrop: x,
                children: [
                  /* @__PURE__ */ a.jsx(fm, { size: 32 }),
                  /* @__PURE__ */ a.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ a.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestions-container", children: [
              C.length > 0 && /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: C.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Fe(c), alt: c.filename }),
                      /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ a.jsxs("section", { children: [
                /* @__PURE__ */ a.jsx("h3", { children: "Visual Matches (pHash)" }),
                z.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-suggestion-grid", children: z.map((c) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => h(c.id),
                    children: [
                      /* @__PURE__ */ a.jsx("img", { src: Fe(c), alt: c.filename }),
                      /* @__PURE__ */ a.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ a.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                        /* @__PURE__ */ a.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - c.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  c.id
                )) }) : /* @__PURE__ */ a.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Hc = () => {
  const { state: e, dispatch: t, updateSetting: n } = qe(), [r, l] = w.useState("General"), [i, s] = w.useState({
    ...e.settings
  }), [o, u] = w.useState(
    e.settings["gallery.page_size"].toString()
  ), [d, y] = w.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [g, h] = w.useState(e.settings["viewer.thumbnail_window_size"].toString()), [v, x] = w.useState(e.settings["gallery.trash_retention_days"].toString()), [C, z] = w.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [c, f] = w.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    m,
    E
  ] = w.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    P,
    R
  ] = w.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), S = [
    {
      key: "gallery.view_mode",
      label: "Gallery View Mode",
      description: "Choose between standard view with details or grid only view.",
      type: "select",
      category: "General",
      options: [
        { value: "grid_details", label: "Details View" },
        { value: "grid_only", label: "Grid Only View" }
      ]
    },
    {
      key: "gallery.page_size",
      label: "Page Size",
      description: "Number of images to display per page (10-10000).",
      type: "number",
      category: "General",
      min: 10,
      max: 1e4
    },
    {
      key: "gallery.hide_parent_images",
      label: "Hide Source Images",
      description: "Hide images that have been used as a basis for other images (sources).",
      type: "boolean",
      category: "General"
    },
    {
      key: "gallery.matching_strategy",
      label: "Source Matching Strategy",
      description: "Algorithm used to identify the source image.",
      type: "select",
      category: "General",
      options: [
        { value: "phash_created", label: "pHash & Created Time" },
        { value: "filename_phash", label: "Filename -> pHash" },
        { value: "phash_only", label: "pHash Only" }
      ]
    },
    {
      key: "gallery.lineage_max_depth",
      label: "Max Lineage Depth",
      description: "Maximum number of ancestor levels to fetch and display (1-10).",
      type: "number",
      category: "General",
      min: 1,
      max: 10
    },
    {
      key: "gallery.trash_retention_days",
      label: "Trash Retention Period (Days)",
      description: "How many days to keep deleted items in trash (0-365).",
      type: "number",
      category: "General",
      min: 0,
      max: 365
    },
    {
      key: "sidebar.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path on the card.",
      type: "select",
      category: "Sidebar",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "sidebar.show_dimensions",
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_created_at",
      label: "Show Created At",
      description: "Display the image creation date and time on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "gallery.show_parent_image",
      label: "Show Source Info",
      description: "Display source image information and lineage link on image cards.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_model_name",
      label: "Show Model Name",
      description: "Display the model name on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_positive_prompt",
      label: "Show Positive Prompt",
      description: "Display the positive prompt on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_negative_prompt",
      label: "Show Negative Prompt",
      description: "Display the negative prompt on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_tags",
      label: "Show Tags",
      description: "Display tags on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "search.quick_suggestions",
      label: "Quick Suggestions",
      description: "Show suggested keywords when the search field is empty.",
      type: "boolean",
      category: "Search"
    },
    {
      key: "search.input_suggest",
      label: "Input Suggest",
      description: "Show suggestions when typing search prefixes (e.g. pos:).",
      type: "boolean",
      category: "Search"
    },
    {
      key: "search.realtime_search",
      label: "Real-time Search",
      description: "Perform search automatically while typing without pressing Enter.",
      type: "boolean",
      category: "Search"
    },
    {
      key: "viewer.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in the viewer.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the viewer area.",
      type: "select",
      category: "View",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
    },
    {
      key: "viewer.show_details_by_default",
      label: "Show by Default",
      description: "Show the image details panel automatically when opening the viewer.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in the details.",
      type: "select",
      category: "View Details",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "viewer.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_model_name",
      label: "Show Model",
      description: "Display model name in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt.",
      type: "number",
      category: "View Details",
      min: 1,
      max: 100
    },
    {
      key: "viewer.details.show_tags",
      label: "Show Tags",
      description: "Display tags in the details panel.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and action icons in view mode.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.show_thumbnails",
      label: "Show Thumbnails",
      description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
      type: "boolean",
      category: "View"
    },
    {
      key: "viewer.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in view mode.",
      type: "select",
      category: "View",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
    },
    {
      key: "viewer.thumbnail_window_size",
      label: "Thumbnail Window Size",
      description: "Number of thumbnails to keep in the viewer (1-10000).",
      type: "number",
      category: "View",
      min: 1,
      max: 1e4
    },
    {
      key: "fullscreen.show_icons",
      label: "Show Tool Icons",
      description: "Display navigation and close icons in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.delete_mode",
      label: "Delete Mode",
      description: "Choose how images are deleted in fullscreen mode.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "confirm", label: "Confirmed" },
        { value: "target_only", label: "Unconfirmed (Target Only)" },
        { value: "lineage", label: "Unconfirmed (Include Lineage)" }
      ]
    },
    {
      key: "fullscreen.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in fullscreen.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.small_image_mode",
      label: "Small Image Display",
      description: "Choose how to display images smaller than the screen in fullscreen.",
      type: "select",
      category: "Full Screen",
      options: [
        { value: "original", label: "Original Size" },
        { value: "fit", label: "Fit to Screen" }
      ]
    },
    {
      key: "fullscreen.show_details_by_default",
      label: "Show Detail by Default",
      description: "Show the image details panel automatically when entering fullscreen.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_filename",
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path in fullscreen details.",
      type: "select",
      category: "Full Screen Detail",
      options: [
        { value: "filename", label: "Filename" },
        { value: "filepath", label: "Filepath" },
        { value: "none", label: "None" }
      ]
    },
    {
      key: "fullscreen.details.show_dimensions",
      label: "Show Dimensions",
      description: "Display dimensions in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_created_at",
      label: "Show Created At",
      description: "Display generation date/time in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_model_name",
      label: "Show Model",
      description: "Display model name in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_positive_prompt",
      label: "Show Positive",
      description: "Display positive prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.show_negative_prompt",
      label: "Show Negative",
      description: "Display negative prompt in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    },
    {
      key: "fullscreen.details.max_positive_prompt_lines",
      label: "Max Positive Prompt Lines",
      description: "Maximum number of lines to display for the positive prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.max_negative_prompt_lines",
      label: "Max Negative Prompt Lines",
      description: "Maximum number of lines to display for the negative prompt in fullscreen.",
      type: "number",
      category: "Full Screen Detail",
      min: 1,
      max: 100
    },
    {
      key: "fullscreen.details.show_tags",
      label: "Show Tags",
      description: "Display tags in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
    }
  ], L = async () => {
    const k = Object.keys(i).filter((O) => i[O] !== e.settings[O]);
    if (k.length > 0)
      for (const O of k)
        await n(O, i[O]);
    t({ type: "CLOSE_MODAL" });
  }, D = (k, O) => {
    s((_) => ({
      ..._,
      [k]: !O
    }));
  }, $ = (k, O, _, j) => {
    k === "gallery.page_size" ? u(O) : k === "gallery.lineage_max_depth" ? y(O) : k === "viewer.thumbnail_window_size" ? h(O) : k === "gallery.trash_retention_days" ? x(O) : k === "viewer.details.max_positive_prompt_lines" ? z(O) : k === "viewer.details.max_negative_prompt_lines" ? f(O) : k === "fullscreen.details.max_positive_prompt_lines" ? E(O) : k === "fullscreen.details.max_negative_prompt_lines" && R(O);
    const U = Number.parseInt(O, 10);
    if (!Number.isNaN(U)) {
      let Q = U;
      _ !== void 0 && Q < _ && (Q = _), j !== void 0 && Q > j && (Q = j), s((T) => ({
        ...T,
        [k]: Q
      }));
    }
  }, p = S.filter(
    (k) => k.category === r
  );
  return Te.createPortal(
    /* @__PURE__ */ a.jsx("div", { className: "meld-modal-overlay", onClick: L, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (k) => k.stopPropagation(),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: L,
                children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ a.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ a.jsx("div", { className: "meld-settings-list", children: p.map((k) => {
                var O;
                return /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: k.label }),
                    /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: k.description })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__control", children: [
                    k.type === "boolean" && /* @__PURE__ */ a.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ a.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[k.key],
                          onChange: () => D(
                            k.key,
                            !!i[k.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ a.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    k.type === "number" && /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: k.key === "gallery.page_size" ? o : k.key === "gallery.lineage_max_depth" ? d : k.key === "viewer.thumbnail_window_size" ? g : k.key === "viewer.details.max_positive_prompt_lines" ? C : k.key === "viewer.details.max_negative_prompt_lines" ? c : k.key === "fullscreen.details.max_positive_prompt_lines" ? m : k.key === "fullscreen.details.max_negative_prompt_lines" ? P : k.key === "gallery.trash_retention_days" ? v : i[k.key],
                        min: k.min,
                        max: k.max,
                        onChange: (_) => $(
                          k.key,
                          _.target.value,
                          k.min,
                          k.max
                        ),
                        onBlur: () => {
                          k.key === "gallery.page_size" ? u(
                            i["gallery.page_size"].toString()
                          ) : k.key === "gallery.lineage_max_depth" ? y(
                            i["gallery.lineage_max_depth"].toString()
                          ) : k.key === "viewer.thumbnail_window_size" ? h(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : k.key === "gallery.trash_retention_days" ? x(
                            i["gallery.trash_retention_days"].toString()
                          ) : k.key === "viewer.details.max_positive_prompt_lines" ? z(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : k.key === "viewer.details.max_negative_prompt_lines" ? f(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : k.key === "fullscreen.details.max_positive_prompt_lines" ? E(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : k.key === "fullscreen.details.max_negative_prompt_lines" && R(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    k.type === "select" && /* @__PURE__ */ a.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[k.key],
                        onChange: (_) => s((j) => ({
                          ...j,
                          [k.key]: _.target.value
                        })),
                        children: (O = k.options) == null ? void 0 : O.map((_) => /* @__PURE__ */ a.jsx("option", { value: _.value, children: _.label }, _.value))
                      }
                    )
                  ] })
                ] }, k.key);
              }) }),
              r === "General" && /* @__PURE__ */ a.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ a.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
                    },
                    children: "View Trash"
                  }
                ) })
              ] }) })
            ] })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, Ye = "none", Bc = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = qe(), [i, s] = w.useState([]), [o, u] = w.useState(t), [d, y] = w.useState(""), [g, h] = w.useState(!0), [v, x] = w.useState(!1), C = w.useRef(null), z = e.length > 1, c = w.useCallback(async () => {
    h(!0);
    try {
      const S = await qs();
      s(S);
    } catch (S) {
      console.error("Failed to fetch tags:", S);
    } finally {
      h(!1);
    }
  }, []);
  w.useEffect(() => {
    c();
  }, [c]), w.useEffect(() => {
    C.current && C.current.focus();
    const S = (L) => {
      L.key === "Escape" && (L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, {
      capture: !0
    });
  }, [n]);
  const f = w.useMemo(() => i.filter(
    (S) => S.name.toLowerCase().includes(d.toLowerCase()) && !o.includes(S.name)
  ), [i, d, o]), m = (S) => {
    const L = S.trim();
    if (L.toLowerCase() === Ye) {
      alert(
        `Tag name '${Ye}' is reserved for search and cannot be used.`
      );
      return;
    }
    L && !o.includes(L) && (u([...o, L]), y(""));
  }, E = (S) => {
    u(o.filter((L) => L !== S));
  }, P = async () => {
    x(!0);
    try {
      if (z) {
        const S = o.filter((D) => !t.includes(D)), L = t.filter(
          (D) => !o.includes(D)
        );
        await Op(e, S, L);
      } else
        await Rp(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (S) {
      console.error("Failed to update tags:", S), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, R = (S) => {
    S.key === "Enter" && d.trim() ? (S.preventDefault(), S.stopPropagation(), m(d.trim())) : S.key === "Escape" && (S.preventDefault(), S.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Te.createPortal(
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (S) => {
          S.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ a.jsx(Xt, { size: 18 }),
              /* @__PURE__ */ a.jsx("h3", { style: { margin: 0 }, children: z ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ a.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ a.jsx(xe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-body", children: [
            z && /* @__PURE__ */ a.jsx(
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
            /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: z ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ a.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((S) => /* @__PURE__ */ a.jsxs("span", { className: "meld-tag-edit-badge", children: [
                S,
                /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(S),
                    children: /* @__PURE__ */ a.jsx(xe, { size: 12 })
                  }
                )
              ] }, S)) })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ a.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    ref: C,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: d,
                    onChange: (S) => y(S.target.value),
                    onKeyDown: R
                  }
                ),
                d.trim() && !o.includes(d.trim()) && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => m(d),
                    children: [
                      /* @__PURE__ */ a.jsx(ea, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : f.length === 0 ? d ? /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : f.map((S) => /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => m(S.name),
                  children: S.name
                },
                S.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: P,
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
}, Gc = w.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, o = Fe(e);
    return /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${s ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ a.jsx("img", { src: o, alt: e.filename }),
          (i || s) && /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ a.jsx(Rc, { size: 12 }) : /* @__PURE__ */ a.jsx(Dc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Gc.displayName = "ThumbnailItem";
const km = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = qe(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: s } = e, [o, u] = w.useState(!1), [d, y] = w.useState(
    e.settings["viewer.show_details_by_default"]
  ), [g, h] = w.useState(null), v = g ?? e.settings["viewer.show_thumbnails"], [x, C] = w.useState(!1), [z, c] = w.useState(!1), [f, m] = w.useState(null), E = w.useRef(null), P = w.useRef(!0);
  w.useEffect(() => () => {
    P.current = !1;
  }, []);
  const R = w.useRef(r);
  w.useEffect(() => {
    R.current = r;
  }, [r]);
  const S = w.useMemo(() => i === "lineage" ? s : l.filter(
    (N) => N.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && N.has_children)
  ), [i, s, l, e.settings]), L = w.useMemo(() => r === null ? -1 : S.findIndex((N) => N.id === r), [S, r]), D = w.useMemo(() => (i === "lineage" && s.length > 0 ? s : l).find((N) => N.id === r), [i, s, l, r]), $ = w.useMemo(() => {
    if (!v || L === -1) return [];
    const N = e.settings["viewer.thumbnail_window_size"], A = Math.floor(N / 2);
    let I = Math.max(0, L - A);
    const Y = Math.min(S.length, I + N);
    return Y === S.length && (I = Math.max(0, Y - N)), S.slice(I, Y).map((W, Ue) => ({
      img: W,
      absIndex: I + Ue
    }));
  }, [
    S,
    L,
    e.settings["viewer.thumbnail_window_size"],
    v
  ]), p = w.useCallback(async () => {
    if (!D) return;
    const N = o ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
    if (N === "confirm") {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [D.id],
          hasLineage: !!(D.parent_id || D.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
      return;
    }
    try {
      const A = e.viewScope === "trash", I = /* @__PURE__ */ new Set([D.id]);
      if (N === "lineage") {
        const Y = await ns(D.id);
        for (const W of Y)
          I.add(W.id);
      }
      if (!P.current || R.current === null) return;
      if (S.length > I.size) {
        let Y = !1;
        for (let W = L + 1; W < S.length; W++)
          if (!I.has(S[W].id)) {
            t({
              type: "OPEN_VIEWER",
              payload: { id: S[W].id, mode: i }
            }), Y = !0;
            break;
          }
        if (!Y) {
          for (let W = L - 1; W >= 0; W--)
            if (!I.has(S[W].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: S[W].id, mode: i }
              }), Y = !0;
              break;
            }
        }
        Y || t({ type: "CLOSE_VIEWER" });
      } else
        t({ type: "CLOSE_VIEWER" });
      if (await rs(Array.from(I), A), !A) {
        const Y = S.filter(
          (W) => I.has(W.id)
        );
        m(Y);
      }
      t({ type: "REMOVE_IMAGES", payload: Array.from(I) });
    } catch (A) {
      t({
        type: "SET_ERROR",
        payload: A instanceof Error ? A.message : String(A)
      });
    }
  }, [
    D,
    o,
    e.settings,
    e.viewScope,
    S,
    L,
    i,
    t
  ]), k = w.useCallback(() => {
    D && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [D.id],
        tags: D.tags || []
      }
    });
  }, [D, t]), O = w.useCallback(async () => {
    const N = o ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (L === 0 && i === "gallery" && e.pagination.hasMore && !z && N) {
      c(!0);
      try {
        const A = e.pagination.limit, I = e.pagination.total, Y = Math.max(0, I - A), W = await ts(
          Y,
          A,
          e.searchQuery
        );
        if (!P.current || (t({ type: "APPEND_IMAGES", payload: W }), R.current === null)) return;
        if (W.images.length > 0) {
          const Ue = W.images[W.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: Ue.id, mode: "gallery" }
          });
        }
      } catch (A) {
        console.error("Failed to jump to end:", A);
      } finally {
        c(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: o } });
  }, [
    L,
    i,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    z,
    o
  ]), _ = w.useCallback(
    (N) => {
      N && "stopPropagation" in N && N.stopPropagation();
      const A = E.current;
      A && (document.fullscreenElement ? document.exitFullscreen() : A.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), j = w.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: o } });
  }, [t, o]), U = w.useCallback(async () => {
    if (D)
      try {
        const N = D.id;
        S.length > 1 ? j() : t({ type: "CLOSE_VIEWER" }), await ls([N]), t({ type: "REMOVE_IMAGES", payload: [N] });
      } catch (N) {
        t({
          type: "SET_ERROR",
          payload: N instanceof Error ? N.message : String(N)
        });
      }
  }, [D, S.length, j, t]), Q = w.useCallback(async () => {
    if (!f || f.length === 0) return;
    const N = f.map((I) => I.id), A = N[0];
    try {
      if (await ls(N), !P.current || (t({ type: "ADD_IMAGES", payload: f }), m(null), !P.current)) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: A, mode: i }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [f, t, i]);
  if (w.useEffect(() => {
    i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore || L !== -1 && L >= S.length - 15 && n();
  }, [
    r,
    S.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    L
  ]), w.useEffect(() => {
    const N = (I) => {
      var ta, na, ra;
      if (r === null) return;
      const Y = ((ta = document.activeElement) == null ? void 0 : ta.tagName) === "INPUT" || ((na = document.activeElement) == null ? void 0 : na.tagName) === "TEXTAREA" || ((ra = document.activeElement) == null ? void 0 : ra.isContentEditable), W = I.key === "Delete" || I.key === "Backspace", Ue = I.key === "ArrowRight" || I.key === "ArrowLeft", Qe = I.key === "f" || I.key === "F" || I.key === "i" || I.key === "I" || I.key === "t" || I.key === "T" || I.key === "r" || I.key === "R", ht = I.key === "Escape", Kc = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z");
      if (W || Ue || Qe || ht || Kc)
        if (Y)
          if (ht) {
            if (e.activeModal.type !== "none") {
              I.preventDefault(), I.stopPropagation();
              return;
            }
            I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
          } else
            return;
        else {
          if (ht && e.activeModal.type !== "none") {
            I.preventDefault(), I.stopPropagation();
            return;
          }
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        }
      else
        return;
      I.key === "Escape" ? (e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" })) : I.key === "ArrowRight" ? j() : I.key === "ArrowLeft" ? O() : I.key === "f" || I.key === "F" ? _(I) : I.key === "i" || I.key === "I" ? y((Yc) => !Yc) : I.key === "t" || I.key === "T" ? k() : (I.key === "r" || I.key === "R") && e.viewScope === "trash" ? U() : I.key === "Delete" ? p() : (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z") && Q();
    };
    window.addEventListener("keydown", N, { capture: !0 });
    const A = () => {
      const I = !!document.fullscreenElement;
      u(I), y(I ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", A), () => {
      window.removeEventListener("keydown", N, { capture: !0 }), document.removeEventListener("fullscreenchange", A);
    };
  }, [
    r,
    t,
    _,
    j,
    O,
    e.settings,
    p,
    e.activeModal.type,
    Q,
    k,
    U,
    e.viewScope
  ]), w.useEffect(() => {
    i === "lineage" && r !== null && s.length === 0 && (C(!0), ns(r).then((N) => {
      t({ type: "SET_LINEAGE", payload: N });
    }).catch((N) => {
      console.error("Failed to fetch lineage:", N);
    }).finally(() => {
      C(!1);
    }));
  }, [i, r, s.length, t]), w.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), w.useEffect(() => {
    var N, A;
    if (r !== null) {
      if (v) {
        const I = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        I && I.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((N = document.activeElement) == null ? void 0 : N.tagName) === "CANVAS" && document.activeElement.blur(), (A = E.current) == null || A.focus();
    }
  }, [r, v]), w.useEffect(() => {
    if (r === null || S.length === 0) return;
    const N = S.findIndex(
      (W) => W.id === r
    );
    if (N === -1) return;
    const A = (W) => Fe(W), I = [
      N + 1,
      N + 2,
      N - 1
    ], Y = setTimeout(() => {
      for (const W of I)
        if (W >= 0 && W < S.length) {
          const Ue = S[W], Qe = new Image();
          Qe.src = A(Ue);
        }
    }, 150);
    return () => clearTimeout(Y);
  }, [r, S]), !D) return null;
  const T = Fe(D), F = o ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Te.createPortal(
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: E,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: `meld-viewer-content ${o ? "meld-viewer-content--fullscreen" : ""} ${v ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (N) => N.stopPropagation(),
              children: [
                F && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: U,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ a.jsx(Xn, { size: 20 })
                    }
                  ),
                  !o && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => h(!v),
                      type: "button",
                      title: v ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ a.jsx(Ac, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: k,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ a.jsx(Xt, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => y(!d),
                      type: "button",
                      title: d ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ a.jsx(nm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: _,
                      type: "button",
                      title: o ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: o ? /* @__PURE__ */ a.jsx(im, { size: 20 }) : /* @__PURE__ */ a.jsx(lm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ a.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                F && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: O,
                    type: "button",
                    disabled: z,
                    children: /* @__PURE__ */ a.jsx(bc, { size: 32 })
                  }
                ),
                /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-image-container", children: [
                  z && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ a.jsx(Xn, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ a.jsx(
                    "img",
                    {
                      src: T,
                      alt: D.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[o ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${z ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                F && /* @__PURE__ */ a.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: j,
                    type: "button",
                    children: /* @__PURE__ */ a.jsx(Fc, { size: 32 })
                  }
                ),
                d && /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `meld-viewer-details-overlay ${o ? "meld-viewer-details-overlay--fullscreen" : ""} ${F ? "" : "meld-viewer-details-overlay--no-icons"}`,
                    children: [
                      (o ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: (o ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: (o ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) === "filepath" ? `${D.subfolder ? `${D.subfolder}/` : ""}${D.filename}` : D.filename })
                      ] }),
                      (o ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && D.width && D.height && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                        /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-value", children: [
                          D.width,
                          " x ",
                          D.height,
                          " px"
                        ] })
                      ] }),
                      (o ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(D.created_at * 1e3).toLocaleString() })
                      ] }),
                      D.deleted_at && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: new Date(D.deleted_at * 1e3).toLocaleString() })
                      ] }),
                      (o ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && D.model_name && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-value", children: D.model_name })
                      ] }),
                      (o ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (D.positive_prompt || D.positive) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": o ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                            },
                            children: D.positive_prompt || D.positive
                          }
                        )
                      ] }),
                      (o ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (D.negative_prompt || D.negative) && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                            style: {
                              "--meld-prompt-max-lines": o ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                            },
                            children: D.negative_prompt || D.negative
                          }
                        )
                      ] }),
                      (o ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && D.tags && D.tags.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-details-item", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                        /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-details-tags", children: D.tags.map((N) => /* @__PURE__ */ a.jsx("span", { className: "meld-viewer-details-tag", children: N }, N)) })
                      ] })
                    ]
                  }
                ),
                !o && v && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ a.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                  x ? /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        color: "var(--meld-text-secondary)"
                      },
                      children: "Loading lineage..."
                    }
                  ) : $.map(({ img: N }) => /* @__PURE__ */ a.jsx(
                    Gc,
                    {
                      thumb: N,
                      viewerImageId: r,
                      currentImage: D,
                      dispatch: t
                    },
                    N.id
                  )),
                  i === "gallery" && e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ a.jsx(Xn, { className: "animate-spin", size: 20 }) })
                ] }) })
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ a.jsx(
            Uc,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: m
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ a.jsx(Wc, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ a.jsx(Qc, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ a.jsx(Hc, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ a.jsx(
            Bc,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}, Em = () => {
  const { state: e, dispatch: t } = qe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Ip(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (o) {
      console.error("Failed to cancel scan:", o);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", s = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ a.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ a.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ a.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ a.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ a.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${s}%` }
      }
    ) }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ a.jsx(cm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ a.jsx(Jp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ a.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, Cm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = qe(), [r, l] = w.useState(e.searchQuery), [i, s] = w.useState([]), [o, u] = w.useState(!1), [d, y] = w.useState([]), [g, h] = w.useState(-1), [v, x] = w.useState(!1), [C, z] = w.useState(null), c = w.useRef(null);
  w.useEffect(() => {
    if (C) {
      const _ = setTimeout(() => z(null), 3e3);
      return () => clearTimeout(_);
    }
  }, [C]);
  const f = w.useRef(null), m = w.useRef(e.searchQuery), E = r !== m.current;
  w.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      y([]);
      return;
    }
    !r && !e.searchQuery ? wp().then((_) => {
      y(_);
    }) : y([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), w.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), w.useEffect(() => {
    var _;
    (_ = c.current) == null || _.focus();
  }, []);
  const P = w.useCallback(
    (_, j = !0) => {
      m.current !== _ && (V.log("SearchBar: triggering search", { query: _ }), t({ type: "SET_SEARCH_QUERY", payload: _ }), j && u(!1), m.current = _);
    },
    [t]
  );
  w.useEffect(() => {
    const _ = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const j = r.split(/\s+/), U = j[j.length - 1];
      if (U) {
        const Q = U.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (Q) {
          const T = Q[1].toLowerCase(), F = Q[2], N = await vp(F, T);
          s(N), u(N.length > 0), h(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [r, e.settings["search.input_suggest"]]);
  const R = (_) => {
    _.key === "Enter" ? P(r) : _.key === "Tab" ? o && g >= 0 && (S(i[g]), _.preventDefault()) : _.key === "ArrowDown" ? o && (h((j) => Math.min(j + 1, i.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? o && (h((j) => Math.max(j - 1, -1)), _.preventDefault()) : _.key === "Escape" && u(!1);
  }, S = (_) => {
    var Y;
    const j = r.split(/\s+/), Q = (j.pop() || "").match(/^([-!])/), T = Q ? Q[1] : "", A = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(_.type) ? _.value : `"${_.value}"`, I = `${[
      ...j,
      `${T}${_.type}:${A}`
    ].join(" ").trim()} `;
    l(I), s([]), u(!1), (Y = c.current) == null || Y.focus();
  }, L = () => {
    l(""), P("");
  }, D = async (_, j, U) => {
    _.stopPropagation();
    const Q = `Are you sure you want to delete the favorite "${U}"?`;
    if (window.confirm(Q))
      try {
        await ho(j), await n();
      } catch (T) {
        V.error("Failed to delete favorite", T);
      }
  }, $ = async (_, j, U) => {
    _.stopPropagation();
    const Q = window.prompt(
      "Enter a new name for this favorite:",
      U
    );
    if (!(Q === null || Q === U))
      try {
        await Lp(j, Q || U), await n();
      } catch (T) {
        V.error("Failed to rename favorite", T);
      }
  }, p = (_, j) => {
    const T = [
      "date",
      "after",
      "before",
      "has_source",
      "has_derivatives"
    ].includes(_) ? j : `"${j}"`, F = `${_}:${T}`;
    l(F), P(F);
  }, k = async () => {
    if (!e.searchQuery || v) return;
    if (e.favorites.some(
      (j) => j.query === e.searchQuery
    )) {
      const j = e.favorites.find((U) => U.query === e.searchQuery);
      if (j) {
        x(!0);
        try {
          await ho(j.id), await n(), z("Favorite removed.");
        } catch (U) {
          V.error("Failed to delete favorite:", U);
        } finally {
          x(!1);
        }
      }
      return;
    }
    x(!0);
    try {
      await Mp(e.searchQuery, e.searchQuery), await n(), z(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (j) {
      V.error("Failed to save favorite:", j);
    } finally {
      x(!1);
    }
  }, O = (_) => {
    switch (_) {
      case "tag":
        return /* @__PURE__ */ a.jsx(Xt, { size: 12 });
      case "model":
        return /* @__PURE__ */ a.jsx(Xp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ a.jsx(dm, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ a.jsx(Zp, { size: 12 });
      case "has_source":
        return /* @__PURE__ */ a.jsx(Rc, { size: 12 });
      case "has_derivatives":
        return /* @__PURE__ */ a.jsx(Dc, { size: 12 });
      case "sort":
        return /* @__PURE__ */ a.jsx(Yp, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              C && /* @__PURE__ */ a.jsx(
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
                  children: C
                }
              ),
              /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => P(r),
                        style: {
                          background: E ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: E ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: E ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (_) => {
                          _.currentTarget.style.transform = "translateY(-1px)", E ? (_.currentTarget.style.filter = "brightness(1.15)", _.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : _.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (_) => {
                          _.currentTarget.style.transform = "none", E ? (_.currentTarget.style.filter = "none", _.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : _.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (_) => {
                          _.currentTarget.style.transform = "translateY(1px)", _.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (_) => {
                          _.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ a.jsx(
                            En,
                            {
                              size: 16,
                              color: E ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: E ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          E && /* @__PURE__ */ a.jsx(
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
                    /* @__PURE__ */ a.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (_) => {
                          const j = _.target.value;
                          l(j), j || P("");
                        },
                        onKeyDown: R,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === m.current) return;
                          const _ = r.split(/\s+/), j = _[_.length - 1];
                          j != null && j.match(
                            /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
                          ) && u(!0);
                        },
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
                    e.searchQuery && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: k,
                        disabled: v,
                        title: e.favorites.some((_) => _.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ a.jsx(
                          yo,
                          {
                            size: 16,
                            color: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: L,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ a.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              o && i.length > 0 && /* @__PURE__ */ a.jsx(
                "div",
                {
                  ref: f,
                  className: "meld-search-suggestions",
                  style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "var(--comfy-menu-bg, #222)",
                    border: "1px solid var(--comfy-menu-border, #444)",
                    borderRadius: "0 0 6px 6px",
                    zIndex: 1e3,
                    marginTop: "2px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
                  },
                  children: i.map((_, j) => /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      onMouseDown: (U) => {
                        U.preventDefault(), S(_);
                      },
                      onMouseEnter: () => h(j),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: j === g ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ a.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: O(_.type)
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: _.type
                              }
                            ),
                            /* @__PURE__ */ a.jsx(
                              "span",
                              {
                                style: {
                                  color: _.value === Ye ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                                  fontSize: "14px",
                                  fontWeight: _.value === Ye ? "bold" : "normal"
                                },
                                children: _.value === Ye ? _.type === "tag" ? `Untagged (${Ye})` : `No ${_.type} (${Ye})` : _.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${_.type}:${_.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && d.length > 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: d.map((_) => /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                onClick: () => p(_.type, _.value),
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
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: O(_.type)
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        color: "var(--comfy-input-text-active, #3b82f6)",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: _.type
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: _.value
                    }
                  )
                ]
              },
              `${_.type}:${_.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "meld-search-favorites",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "4px",
              marginTop: "4px",
              borderTop: "1px solid var(--comfy-menu-border, #333)",
              paddingTop: "12px"
            },
            children: [
              /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsx(yo, { size: 12, fill: "var(--meld-text-secondary)" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ a.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((_) => /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "var(--comfy-input-bg, #2a2a2a)",
                        border: "1px solid var(--comfy-menu-border, #333)",
                        borderRadius: "6px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        color: "var(--meld-text-color)",
                        fontSize: "13px",
                        gap: "10px"
                      },
                      onClick: () => {
                        l(_.query), P(_.query);
                      },
                      onMouseEnter: (j) => {
                        j.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", j.currentTarget.style.borderColor = "var(--meld-accent-color)", j.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (j) => {
                        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      children: [
                        /* @__PURE__ */ a.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ a.jsx(
                                "span",
                                {
                                  style: {
                                    fontWeight: "bold",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: _.name
                                }
                              ),
                              _.name !== _.query && /* @__PURE__ */ a.jsx(
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
                                  children: _.query
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ a.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (j) => {
                                    j.stopPropagation(), $(j, _.id, _.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "var(--meld-text-secondary)",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (j) => {
                                    j.currentTarget.style.color = "var(--meld-accent-color)", j.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (j) => {
                                    j.currentTarget.style.color = "var(--meld-text-secondary)", j.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ a.jsx($c, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (j) => {
                                    j.stopPropagation(), D(j, _.id, _.name);
                                  },
                                  style: {
                                    background: "none",
                                    border: "none",
                                    color: "var(--meld-text-secondary)",
                                    padding: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    transition: "all 0.2s"
                                  },
                                  onMouseEnter: (j) => {
                                    j.currentTarget.style.color = "var(--meld-danger-color)", j.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (j) => {
                                    j.currentTarget.style.color = "var(--meld-text-secondary)", j.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ a.jsx(Cn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    _.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Nm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = w.useState([]), [l, i] = w.useState(!0), [s, o] = w.useState(""), [u, d] = w.useState(""), [y, g] = w.useState(!1), [h, v] = w.useState(null), [x, C] = w.useState(""), [z, c] = w.useState(!1), f = w.useRef(null), m = w.useCallback(async () => {
    i(!0);
    try {
      const p = await qs();
      r(p);
    } catch (p) {
      console.error("Failed to fetch tags:", p);
    } finally {
      i(!1);
    }
  }, []);
  w.useEffect(() => {
    m();
  }, [m]), w.useEffect(() => {
    h !== null && f.current && (f.current.focus(), f.current.select());
  }, [h]);
  const E = async (p) => {
    p.preventDefault();
    const k = u.trim();
    if (!(!k || y)) {
      if (k.toLowerCase() === Ye) {
        alert(
          `Tag name '${Ye}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((O) => O.name.toLowerCase() === k.toLowerCase())) {
        alert(`Tag "${k}" already exists.`);
        return;
      }
      g(!0);
      try {
        await Pp(k), d(""), await m();
      } catch (O) {
        console.error("Failed to add tag:", O);
      } finally {
        g(!1);
      }
    }
  }, P = async (p, k) => {
    if (confirm(`Are you sure you want to delete tag "${k}"?`))
      try {
        await zp(p), await m();
      } catch (O) {
        console.error("Failed to delete tag:", O);
      }
  }, R = (p) => {
    v(p.id), C(p.name);
  }, S = () => {
    v(null), C("");
  }, L = async (p) => {
    p.preventDefault();
    const k = x.trim();
    if (!k || h === null || z) return;
    if (k.toLowerCase() === Ye) {
      alert(
        `Tag name '${Ye}' is reserved for search and cannot be used.`
      );
      return;
    }
    const O = n.find((_) => _.id === h);
    if (O && O.name === k) {
      S();
      return;
    }
    if (n.some(
      (_) => _.id !== h && _.name.toLowerCase() === k.toLowerCase()
    )) {
      alert(`Tag "${k}" already exists.`);
      return;
    }
    c(!0);
    try {
      await Dp(h, k), S(), await m();
    } catch (_) {
      console.error("Failed to rename tag:", _), alert(_ instanceof Error ? _.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, D = (p) => {
    t(`tag:${p}`);
  }, $ = w.useMemo(() => n.filter(
    (p) => p.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx(Xt, { size: 16 }),
        /* @__PURE__ */ a.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ a.jsx(xe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ a.jsxs("form", { className: "meld-tag-add-form", onSubmit: E, children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (p) => d(p.target.value),
            disabled: y
          }
        ),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || y,
            children: [
              /* @__PURE__ */ a.jsx(ea, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ a.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (p) => o(p.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ a.jsx("div", { className: "meld-tag-list", children: $.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : $.map((p) => /* @__PURE__ */ a.jsx("div", { className: "meld-tag-item", children: h === p.id ? /* @__PURE__ */ a.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: L,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: x,
                onChange: (k) => C(k.target.value),
                onKeyDown: (k) => k.key === "Escape" && S()
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: z || !x.trim(),
                children: /* @__PURE__ */ a.jsx(Oc, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: S,
                disabled: z,
                children: /* @__PURE__ */ a.jsx(xe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "meld-tag-item__name", children: p.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => D(p.name),
              children: /* @__PURE__ */ a.jsx(En, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => R(p),
              children: /* @__PURE__ */ a.jsx($c, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => P(p.id, p.name),
              children: /* @__PURE__ */ a.jsx(Cn, { size: 14 })
            }
          )
        ] })
      ] }) }, p.id)) })
    ] })
  ] });
}, jm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = qe(), [i, s] = w.useState("gallery"), [o, u] = w.useState(""), [d, y] = w.useState(e.pagination.limit);
  w.useEffect(() => {
    y(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", h = w.useRef(null), v = w.useRef(null), x = w.useMemo(
    () => e.images.filter((z) => e.viewScope === "trash" ? z.exists !== !1 || e.settings["gallery.trash.show_missing"] : z.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && z.has_children)),
    [e.images, e.settings, e.viewScope]
  ), C = w.useMemo(
    () => x.slice(0, d),
    [x, d]
  );
  return w.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: x.length,
    visibleCount: C.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), w.useEffect(() => {
    const z = (c) => {
      c.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), c.preventDefault(), c.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), c.preventDefault(), c.stopPropagation()));
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [e.activeModal.type, e.selectedIds.size, t]), w.useEffect(() => {
    const z = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < x.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                x.length
              ),
              totalAvailableLocally: x.length
            }
          ), y((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: x.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), c = h.current;
    return c && z.observe(c), () => {
      c && z.unobserve(c);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    x.length,
    e.pagination.limit,
    e.images.length
  ]), w.useEffect(() => {
    const z = e.viewerImageId ?? v.current;
    if (z !== null && x.some((f) => f.id === z)) {
      const f = x.findIndex((E) => E.id === z);
      if (f >= d) {
        y(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${z}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    x,
    d,
    e.pagination.limit
  ]), /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ a.jsx(Cn, { size: 14 }),
              /* @__PURE__ */ a.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ a.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (z) => l("gallery.trash.show_missing", z.target.checked)
                }
              ),
              /* @__PURE__ */ a.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ a.jsx(xe, { size: 14 }),
                  /* @__PURE__ */ a.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ a.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  i === "search" ? (e.searchQuery && (u(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), s("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), s("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--meld-success-color)" : i === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: g ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ a.jsx(En, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const c = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  l("gallery.view_mode", c);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ a.jsx(rm, { size: 14 }) : /* @__PURE__ */ a.jsx(Ac, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(i === "tags" ? "gallery" : "tags"),
                style: {
                  background: "none",
                  border: "none",
                  color: i === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: i === "tags" ? "bold" : "normal"
                },
                title: "Tag Manager",
                children: /* @__PURE__ */ a.jsx(Xt, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(em, { size: 14 })
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(
                  Xn,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
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
                children: /* @__PURE__ */ a.jsx(um, { size: 14 })
              }
            )
          ] }),
          i === "search" && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ a.jsx(Cm, {}) })
        ] }),
        /* @__PURE__ */ a.jsx(Em, {}),
        e.error && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__error", children: e.error }),
        i === "tags" ? /* @__PURE__ */ a.jsx(
          Nm,
          {
            onClose: () => s("gallery"),
            onSearch: (z) => {
              t({ type: "SET_SEARCH_QUERY", payload: z }), s("search");
            }
          }
        ) : e.isLoading && x.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : C.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: C.map((z) => /* @__PURE__ */ a.jsx("div", { "data-image-id": z.id, children: /* @__PURE__ */ a.jsx(xm, { height: 150, children: /* @__PURE__ */ a.jsx(Sm, { image: z }) }) }, z.id))
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: h,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                d >= x.length && !e.pagination.hasMore && C.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx(_m, {}),
        e.viewerImageId !== null && /* @__PURE__ */ a.jsx(km, {}),
        e.viewerImageId === null && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          e.activeModal.type === "parent_selection" && Te.createPortal(
            /* @__PURE__ */ a.jsx(Wc, { imageId: e.activeModal.imageId }),
            document.body
          ),
          e.activeModal.type === "import" && Te.createPortal(/* @__PURE__ */ a.jsx(Qc, {}), document.body),
          e.activeModal.type === "settings" && Te.createPortal(/* @__PURE__ */ a.jsx(Hc, {}), document.body),
          e.activeModal.type === "tag_edit" && Te.createPortal(
            /* @__PURE__ */ a.jsx(
              Bc,
              {
                imageIds: e.activeModal.imageIds,
                initialTags: e.activeModal.tags,
                onClose: () => t({ type: "CLOSE_MODAL" })
              }
            ),
            document.body
          ),
          e.activeModal.type === "delete_confirm" && Te.createPortal(
            /* @__PURE__ */ a.jsx(
              Uc,
              {
                imageIds: e.activeModal.imageIds,
                hasLineage: e.activeModal.hasLineage,
                isPermanent: e.activeModal.isPermanent
              }
            ),
            document.body
          )
        ] })
      ]
    }
  );
};
vo.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, i;
      const n = (l = e.widgets) == null ? void 0 : l.find((s) => s.name === "positive"), r = (i = e.widgets) == null ? void 0 : i.find((s) => s.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ol = document.createElement("link");
Ol.rel = "stylesheet";
Ol.type = "text/css";
Ol.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Ol);
let Or = null, He = null;
vo.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const i = n.ui.meld;
        i != null && i.isVisible() && i.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Mc();
      V.init(n.dev_mode), V.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), V.init(!1);
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
      }, B.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), B.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), B.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
      }), B.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Lc({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (i) {
                  console.error("Failed to auto-register image:", i);
                }
          }
        }
      );
      try {
        e.extensionManager.registerSidebarTab({
          id: "meld-gallery",
          icon: "meld-icon",
          title: "Meld",
          tooltip: "Meld Image Manager",
          type: "custom",
          render: (n) => {
            V.log("render called", {
              el: n,
              galleryRoot: Or,
              galleryContainer: He
            }), He || (V.log("galleryContainer not found, creating new one"), He = document.createElement("div"), He.id = "meld-gallery-container", He.style.height = "100%", He.style.width = "100%", He.style.display = "flex", He.style.flexDirection = "column"), n.contains(He) || (V.log("Appending galleryContainer to el"), n.appendChild(He)), Or ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), Or = Tc(He), Or.render(
              aa.createElement(
                wm,
                null,
                aa.createElement(jm)
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
