import { api as te } from "/scripts/api.js";
import { app as nd } from "/scripts/app.js";
var Tw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rd = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl = Symbol.for("react.element"), Em = Symbol.for("react.portal"), Nm = Symbol.for("react.fragment"), Mm = Symbol.for("react.strict_mode"), Im = Symbol.for("react.profiler"), Tm = Symbol.for("react.provider"), Lm = Symbol.for("react.context"), Am = Symbol.for("react.forward_ref"), Rm = Symbol.for("react.suspense"), Dm = Symbol.for("react.memo"), Pm = Symbol.for("react.lazy"), ji = Symbol.iterator;
function zm(e) {
  return e === null || typeof e != "object" ? null : (e = ji && e[ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ld = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sd = Object.assign, ad = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = ad, this.updater = n || ld;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function od() {
}
od.prototype = yr.prototype;
function _o(e, t, n) {
  this.props = e, this.context = t, this.refs = ad, this.updater = n || ld;
}
var ko = _o.prototype = new od();
ko.constructor = _o;
sd(ko, yr.prototype);
ko.isPureReactComponent = !0;
var bi = Array.isArray, id = Object.prototype.hasOwnProperty, So = { current: null }, cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function dd(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) id.call(t, r) && !cd.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: pl, type: e, key: a, ref: o, props: l, _owner: So.current };
}
function Om(e, t) {
  return { $$typeof: pl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function Fm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ci = /\/+/g;
function Ks(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Fm("" + e.key) : t.toString(36);
}
function Vl(e, t, n, r, l) {
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
        case pl:
        case Em:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ks(o, 0) : r, bi(l) ? (n = "", e != null && (n = e.replace(Ci, "$&/") + "/"), Vl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (jo(l) && (l = Om(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ci, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", bi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Ks(a, i);
    o += Vl(a, t, n, c, l);
  }
  else if (c = zm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Ks(a, i++), o += Vl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function _l(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Vl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function $m(e) {
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
var Ke = { current: null }, Bl = { transition: null }, Wm = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Bl, ReactCurrentOwner: So };
function ud() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = { map: _l, forEach: function(e, t, n) {
  _l(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return _l(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return _l(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = yr;
le.Fragment = Nm;
le.Profiler = Im;
le.PureComponent = _o;
le.StrictMode = Mm;
le.Suspense = Rm;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm;
le.act = ud;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sd({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = So.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) id.call(t, c) && !cd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: pl, type: e.type, key: l, ref: a, props: r, _owner: o };
};
le.createContext = function(e) {
  return e = { $$typeof: Lm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Tm, _context: e }, e.Consumer = e;
};
le.createElement = dd;
le.createFactory = function(e) {
  var t = dd.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: Am, render: e };
};
le.isValidElement = jo;
le.lazy = function(e) {
  return { $$typeof: Pm, _payload: { _status: -1, _result: e }, _init: $m };
};
le.memo = function(e, t) {
  return { $$typeof: Dm, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function(e) {
  var t = Bl.transition;
  Bl.transition = {};
  try {
    e();
  } finally {
    Bl.transition = t;
  }
};
le.unstable_act = ud;
le.useCallback = function(e, t) {
  return Ke.current.useCallback(e, t);
};
le.useContext = function(e) {
  return Ke.current.useContext(e);
};
le.useDebugValue = function() {
};
le.useDeferredValue = function(e) {
  return Ke.current.useDeferredValue(e);
};
le.useEffect = function(e, t) {
  return Ke.current.useEffect(e, t);
};
le.useId = function() {
  return Ke.current.useId();
};
le.useImperativeHandle = function(e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function(e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function(e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
le.useMemo = function(e, t) {
  return Ke.current.useMemo(e, t);
};
le.useReducer = function(e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
le.useRef = function(e) {
  return Ke.current.useRef(e);
};
le.useState = function(e) {
  return Ke.current.useState(e);
};
le.useSyncExternalStore = function(e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function() {
  return Ke.current.useTransition();
};
le.version = "18.3.1";
rd.exports = le;
var p = rd.exports;
const rn = /* @__PURE__ */ Cm(p);
var fd = { exports: {} }, at = {}, md = { exports: {} }, pd = {};
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
  function t(M, A) {
    var $ = M.length;
    M.push(A);
    e: for (; 0 < $; ) {
      var N = $ - 1 >>> 1, P = M[N];
      if (0 < l(P, A)) M[N] = A, M[$] = P, $ = N;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var A = M[0], $ = M.pop();
    if ($ !== A) {
      M[0] = $;
      e: for (var N = 0, P = M.length, W = P >>> 1; N < W; ) {
        var O = 2 * (N + 1) - 1, H = M[O], J = O + 1, ie = M[J];
        if (0 > l(H, $)) J < P && 0 > l(ie, H) ? (M[N] = ie, M[J] = $, N = J) : (M[N] = H, M[O] = $, N = O);
        else if (J < P && 0 > l(ie, $)) M[N] = ie, M[J] = $, N = J;
        else break e;
      }
    }
    return A;
  }
  function l(M, A) {
    var $ = M.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : M.id - A.id;
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
  var c = [], d = [], h = 1, y = null, g = 3, k = !1, x = !1, w = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var A = n(d); A !== null; ) {
      if (A.callback === null) r(d);
      else if (A.startTime <= M) r(d), A.sortIndex = A.expirationTime, t(c, A);
      else break;
      A = n(d);
    }
  }
  function v(M) {
    if (w = !1, m(M), !x) if (n(c) !== null) x = !0, Q(j);
    else {
      var A = n(d);
      A !== null && I(v, A.startTime - M);
    }
  }
  function j(M, A) {
    x = !1, w && (w = !1, f(T), T = -1), k = !0;
    var $ = g;
    try {
      for (m(A), y = n(c); y !== null && (!(y.expirationTime > A) || M && !E()); ) {
        var N = y.callback;
        if (typeof N == "function") {
          y.callback = null, g = y.priorityLevel;
          var P = N(y.expirationTime <= A);
          A = e.unstable_now(), typeof P == "function" ? y.callback = P : y === n(c) && r(c), m(A);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var W = !0;
      else {
        var O = n(d);
        O !== null && I(v, O.startTime - A), W = !1;
      }
      return W;
    } finally {
      y = null, g = $, k = !1;
    }
  }
  var S = !1, b = null, T = -1, L = 5, R = -1;
  function E() {
    return !(e.unstable_now() - R < L);
  }
  function D() {
    if (b !== null) {
      var M = e.unstable_now();
      R = M;
      var A = !0;
      try {
        A = b(!0, M);
      } finally {
        A ? F() : (S = !1, b = null);
      }
    } else S = !1;
  }
  var F;
  if (typeof u == "function") F = function() {
    u(D);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), B = C.port2;
    C.port1.onmessage = D, F = function() {
      B.postMessage(null);
    };
  } else F = function() {
    _(D, 0);
  };
  function Q(M) {
    b = M, S || (S = !0, F());
  }
  function I(M, A) {
    T = _(function() {
      M(e.unstable_now());
    }, A);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    x || k || (x = !0, Q(j));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(M) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var A = 3;
        break;
      default:
        A = g;
    }
    var $ = g;
    g = A;
    try {
      return M();
    } finally {
      g = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, A) {
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
    var $ = g;
    g = M;
    try {
      return A();
    } finally {
      g = $;
    }
  }, e.unstable_scheduleCallback = function(M, A, $) {
    var N = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? N + $ : N) : $ = N, M) {
      case 1:
        var P = -1;
        break;
      case 2:
        P = 250;
        break;
      case 5:
        P = 1073741823;
        break;
      case 4:
        P = 1e4;
        break;
      default:
        P = 5e3;
    }
    return P = $ + P, M = { id: h++, callback: A, priorityLevel: M, startTime: $, expirationTime: P, sortIndex: -1 }, $ > N ? (M.sortIndex = $, t(d, M), n(c) === null && M === n(d) && (w ? (f(T), T = -1) : w = !0, I(v, $ - N))) : (M.sortIndex = P, t(c, M), x || k || (x = !0, Q(j))), M;
  }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(M) {
    var A = g;
    return function() {
      var $ = g;
      g = A;
      try {
        return M.apply(this, arguments);
      } finally {
        g = $;
      }
    };
  };
})(pd);
md.exports = pd;
var Um = md.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vm = p, st = Um;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hd = /* @__PURE__ */ new Set(), Hr = {};
function Pn(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) hd.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ja = Object.prototype.hasOwnProperty, Bm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ei = {}, Ni = {};
function Qm(e) {
  return ja.call(Ni, e) ? !0 : ja.call(Ei, e) ? !1 : Bm.test(e) ? Ni[e] = !0 : (Ei[e] = !0, !1);
}
function Hm(e, t, n, r) {
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
function Km(e, t, n, r) {
  if (t === null || typeof t > "u" || Hm(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function Co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bo,
    Co
  );
  Fe[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bo, Co);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bo, Co);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eo(e, t, n, r) {
  var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Km(t, n, l, r) && (n = null), r || l === null ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kl = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), No = Symbol.for("react.strict_mode"), ba = Symbol.for("react.profiler"), gd = Symbol.for("react.provider"), yd = Symbol.for("react.context"), Mo = Symbol.for("react.forward_ref"), Ca = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Io = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), vd = Symbol.for("react.offscreen"), Mi = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object" ? null : (e = Mi && e[Mi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Gs;
function Lr(e) {
  if (Gs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Gs = t && t[1] || "";
  }
  return `
` + Gs + e;
}
var qs = !1;
function Ys(e, t) {
  if (!e || qs) return "";
  qs = !0;
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
    qs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function Gm(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ys(e.type, !1), e;
    case 11:
      return e = Ys(e.type.render, !1), e;
    case 1:
      return e = Ys(e.type, !0), e;
    default:
      return "";
  }
}
function Na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Vn:
      return "Portal";
    case ba:
      return "Profiler";
    case No:
      return "StrictMode";
    case Ca:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case yd:
      return (e.displayName || "Context") + ".Consumer";
    case gd:
      return (e._context.displayName || "Context") + ".Provider";
    case Mo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Io:
      return t = e.displayName || null, t !== null ? t : Na(e.type) || "Memo";
    case Jt:
      t = e._payload, e = e._init;
      try {
        return Na(e(t));
      } catch {
      }
  }
  return null;
}
function qm(e) {
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
      return Na(t);
    case 8:
      return t === No ? "StrictMode" : "Mode";
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
function hn(e) {
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
function wd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ym(e) {
  var t = wd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Sl(e) {
  e._valueTracker || (e._valueTracker = Ym(e));
}
function xd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = wd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ns(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ma(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ii(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _d(e, t) {
  t = t.checked, t != null && Eo(e, "checked", t, !1);
}
function Ia(e, t) {
  _d(e, t);
  var n = hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ta(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ta(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ti(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ta(e, t, n) {
  (t !== "number" || ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ar = Array.isArray;
function tr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function La(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Li(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hn(n) };
}
function kd(e, t) {
  var n = hn(t.value), r = hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ai(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Aa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var jl, jd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (jl = jl || document.createElement("div"), jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
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
}, Xm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
  Xm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e];
  });
});
function bd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px";
}
function Cd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = bd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Zm = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ra(e, t) {
  if (t) {
    if (Zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function Da(e, t) {
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
var Pa = null;
function To(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var za = null, nr = null, rr = null;
function Ri(e) {
  if (e = yl(e)) {
    if (typeof za != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = Ts(t), za(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  nr ? rr ? rr.push(e) : rr = [e] : nr = e;
}
function Nd() {
  if (nr) {
    var e = nr, t = rr;
    if (rr = nr = null, Ri(e), t) for (e = 0; e < t.length; e++) Ri(t[e]);
  }
}
function Md(e, t) {
  return e(t);
}
function Id() {
}
var Xs = !1;
function Td(e, t, n) {
  if (Xs) return e(t, n);
  Xs = !0;
  try {
    return Md(e, t, n);
  } finally {
    Xs = !1, (nr !== null || rr !== null) && (Id(), Nd());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ts(n);
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
var Oa = !1;
if (Wt) try {
  var jr = {};
  Object.defineProperty(jr, "passive", { get: function() {
    Oa = !0;
  } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
} catch {
  Oa = !1;
}
function Jm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var zr = !1, rs = null, ls = !1, Fa = null, ep = { onError: function(e) {
  zr = !0, rs = e;
} };
function tp(e, t, n, r, l, a, o, i, c) {
  zr = !1, rs = null, Jm.apply(ep, arguments);
}
function np(e, t, n, r, l, a, o, i, c) {
  if (tp.apply(this, arguments), zr) {
    if (zr) {
      var d = rs;
      zr = !1, rs = null;
    } else throw Error(V(198));
    ls || (ls = !0, Fa = d);
  }
}
function zn(e) {
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
function Ld(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Di(e) {
  if (zn(e) !== e) throw Error(V(188));
}
function rp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zn(e), t === null) throw Error(V(188));
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
        if (a === n) return Di(l), e;
        if (a === r) return Di(l), t;
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
function Ad(e) {
  return e = rp(e), e !== null ? Rd(e) : null;
}
function Rd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dd = st.unstable_scheduleCallback, Pi = st.unstable_cancelCallback, lp = st.unstable_shouldYield, sp = st.unstable_requestPaint, Ee = st.unstable_now, ap = st.unstable_getCurrentPriorityLevel, Lo = st.unstable_ImmediatePriority, Pd = st.unstable_UserBlockingPriority, ss = st.unstable_NormalPriority, op = st.unstable_LowPriority, zd = st.unstable_IdlePriority, Es = null, Lt = null;
function ip(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
    Lt.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var jt = Math.clz32 ? Math.clz32 : up, cp = Math.log, dp = Math.LN2;
function up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cp(e) / dp | 0) | 0;
}
var bl = 64, Cl = 4194304;
function Rr(e) {
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
function as(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Rr(i) : (a &= o, a !== 0 && (r = Rr(a)));
  } else o = n & ~l, o !== 0 ? r = Rr(o) : a !== 0 && (r = Rr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - jt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function fp(e, t) {
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
function mp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - jt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = fp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function $a(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Od() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function Zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n;
}
function pp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - jt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Ao(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Fd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $d, Ro, Wd, Ud, Vd, Wa = !1, El = [], an = null, on = null, cn = null, qr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), tn = [], hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      cn = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function br(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = yl(t), t !== null && Ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function gp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return an = br(an, e, t, n, r, l), !0;
    case "dragenter":
      return on = br(on, e, t, n, r, l), !0;
    case "mouseover":
      return cn = br(cn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return qr.set(a, br(qr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Yr.set(a, br(Yr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Bd(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ld(n), t !== null) {
          e.blockedOn = t, Vd(e.priority, function() {
            Wd(n);
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
function Ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Pa = r, n.target.dispatchEvent(r), Pa = null;
    } else return t = yl(n), t !== null && Ro(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Oi(e, t, n) {
  Ql(e) && n.delete(t);
}
function yp() {
  Wa = !1, an !== null && Ql(an) && (an = null), on !== null && Ql(on) && (on = null), cn !== null && Ql(cn) && (cn = null), qr.forEach(Oi), Yr.forEach(Oi);
}
function Cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wa || (Wa = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, yp)));
}
function Xr(e) {
  function t(l) {
    return Cr(l, e);
  }
  if (0 < El.length) {
    Cr(El[0], e);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (an !== null && Cr(an, e), on !== null && Cr(on, e), cn !== null && Cr(cn, e), qr.forEach(t), Yr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Bd(n), n.blockedOn === null && tn.shift();
}
var lr = Ht.ReactCurrentBatchConfig, os = !0;
function vp(e, t, n, r) {
  var l = ce, a = lr.transition;
  lr.transition = null;
  try {
    ce = 1, Do(e, t, n, r);
  } finally {
    ce = l, lr.transition = a;
  }
}
function wp(e, t, n, r) {
  var l = ce, a = lr.transition;
  lr.transition = null;
  try {
    ce = 4, Do(e, t, n, r);
  } finally {
    ce = l, lr.transition = a;
  }
}
function Do(e, t, n, r) {
  if (os) {
    var l = Ua(e, t, n, r);
    if (l === null) ia(e, t, r, is, n), zi(e, r);
    else if (gp(l, e, t, n, r)) r.stopPropagation();
    else if (zi(e, r), t & 4 && -1 < hp.indexOf(e)) {
      for (; l !== null; ) {
        var a = yl(l);
        if (a !== null && $d(a), a = Ua(e, t, n, r), a === null && ia(e, t, r, is, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ia(e, t, r, null, n);
  }
}
var is = null;
function Ua(e, t, n, r) {
  if (is = null, e = To(r), e = Cn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ld(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return is = e, null;
}
function Qd(e) {
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
      switch (ap()) {
        case Lo:
          return 1;
        case Pd:
          return 4;
        case ss:
        case op:
          return 16;
        case zd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null, Po = null, Hl = null;
function Hd() {
  if (Hl) return Hl;
  var e, t = Po, n = t.length, r, l = "value" in ln ? ln.value : ln.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Hl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Kl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nl() {
  return !0;
}
function Fi() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Nl : Fi, this.isPropagationStopped = Fi, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nl);
  }, persist: function() {
  }, isPersistent: Nl }), t;
}
var vr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, zo = ot(vr), gl = je({}, vr, { view: 0, detail: 0 }), xp = ot(gl), Js, ea, Er, Ns = je({}, gl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Oo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (Js = e.screenX - Er.screenX, ea = e.screenY - Er.screenY) : ea = Js = 0, Er = e), Js);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ea;
} }), $i = ot(Ns), _p = je({}, Ns, { dataTransfer: 0 }), kp = ot(_p), Sp = je({}, gl, { relatedTarget: 0 }), ta = ot(Sp), jp = je({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bp = ot(jp), Cp = je({}, vr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ep = ot(Cp), Np = je({}, vr, { data: 0 }), Wi = ot(Np), Mp = {
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
}, Ip = {
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
}, Tp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tp[e]) ? !!t[e] : !1;
}
function Oo() {
  return Lp;
}
var Ap = je({}, gl, { key: function(e) {
  if (e.key) {
    var t = Mp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ip[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Oo, charCode: function(e) {
  return e.type === "keypress" ? Kl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rp = ot(Ap), Dp = je({}, Ns, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ui = ot(Dp), Pp = je({}, gl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Oo }), zp = ot(Pp), Op = je({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = ot(Op), $p = je({}, Ns, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Wp = ot($p), Up = [9, 13, 27, 32], Fo = Wt && "CompositionEvent" in window, Or = null;
Wt && "documentMode" in document && (Or = document.documentMode);
var Vp = Wt && "TextEvent" in window && !Or, Kd = Wt && (!Fo || Or && 8 < Or && 11 >= Or), Vi = " ", Bi = !1;
function Gd(e, t) {
  switch (e) {
    case "keyup":
      return Up.indexOf(t.keyCode) !== -1;
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
function qd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return qd(t);
    case "keypress":
      return t.which !== 32 ? null : (Bi = !0, Vi);
    case "textInput":
      return e = t.data, e === Vi && Bi ? null : e;
    default:
      return null;
  }
}
function Qp(e, t) {
  if (Qn) return e === "compositionend" || !Fo && Gd(e, t) ? (e = Hd(), Hl = Po = ln = null, Qn = !1, e) : null;
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
      return Kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hp[e.type] : t === "textarea";
}
function Yd(e, t, n, r) {
  Ed(r), t = cs(t, "onChange"), 0 < t.length && (n = new zo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Zr = null;
function Kp(e) {
  ou(e, 0);
}
function Ms(e) {
  var t = Gn(e);
  if (xd(t)) return e;
}
function Gp(e, t) {
  if (e === "change") return t;
}
var Xd = !1;
if (Wt) {
  var na;
  if (Wt) {
    var ra = "oninput" in document;
    if (!ra) {
      var Hi = document.createElement("div");
      Hi.setAttribute("oninput", "return;"), ra = typeof Hi.oninput == "function";
    }
    na = ra;
  } else na = !1;
  Xd = na && (!document.documentMode || 9 < document.documentMode);
}
function Ki() {
  Fr && (Fr.detachEvent("onpropertychange", Zd), Zr = Fr = null);
}
function Zd(e) {
  if (e.propertyName === "value" && Ms(Zr)) {
    var t = [];
    Yd(t, Zr, e, To(e)), Td(Kp, t);
  }
}
function qp(e, t, n) {
  e === "focusin" ? (Ki(), Fr = t, Zr = n, Fr.attachEvent("onpropertychange", Zd)) : e === "focusout" && Ki();
}
function Yp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ms(Zr);
}
function Xp(e, t) {
  if (e === "click") return Ms(t);
}
function Zp(e, t) {
  if (e === "input" || e === "change") return Ms(t);
}
function Jp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : Jp;
function Jr(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ja.call(t, l) || !Ct(e[l], t[l])) return !1;
  }
  return !0;
}
function Gi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qi(e, t) {
  var n = Gi(e);
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
    n = Gi(n);
  }
}
function Jd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function eu() {
  for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ns(e.document);
  }
  return t;
}
function $o(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function eh(e) {
  var t = eu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jd(n.ownerDocument.documentElement, n)) {
    if (r !== null && $o(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = qi(n, a);
        var o = qi(
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
var th = Wt && "documentMode" in document && 11 >= document.documentMode, Hn = null, Va = null, $r = null, Ba = !1;
function Yi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ba || Hn == null || Hn !== ns(r) || (r = Hn, "selectionStart" in r && $o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $r && Jr($r, r) || ($r = r, r = cs(Va, "onSelect"), 0 < r.length && (t = new zo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function Ml(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kn = { animationend: Ml("Animation", "AnimationEnd"), animationiteration: Ml("Animation", "AnimationIteration"), animationstart: Ml("Animation", "AnimationStart"), transitionend: Ml("Transition", "TransitionEnd") }, la = {}, tu = {};
Wt && (tu = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function Is(e) {
  if (la[e]) return la[e];
  if (!Kn[e]) return e;
  var t = Kn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in tu) return la[e] = t[n];
  return e;
}
var nu = Is("animationend"), ru = Is("animationiteration"), lu = Is("animationstart"), su = Is("transitionend"), au = /* @__PURE__ */ new Map(), Xi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vn(e, t) {
  au.set(e, t), Pn(t, [e]);
}
for (var sa = 0; sa < Xi.length; sa++) {
  var aa = Xi[sa], nh = aa.toLowerCase(), rh = aa[0].toUpperCase() + aa.slice(1);
  vn(nh, "on" + rh);
}
vn(nu, "onAnimationEnd");
vn(ru, "onAnimationIteration");
vn(lu, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(su, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Zi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, np(r, t, void 0, e), e.currentTarget = null;
}
function ou(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Zi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Zi(l, i, d), a = c;
      }
    }
  }
  if (ls) throw e = Fa, ls = !1, Fa = null, e;
}
function ye(e, t) {
  var n = t[qa];
  n === void 0 && (n = t[qa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (iu(t, e, 2, !1), n.add(r));
}
function oa(e, t, n) {
  var r = 0;
  t && (r |= 4), iu(n, e, r, t);
}
var Il = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Il]) {
    e[Il] = !0, hd.forEach(function(n) {
      n !== "selectionchange" && (lh.has(n) || oa(n, !1, e), oa(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Il] || (t[Il] = !0, oa("selectionchange", !1, t));
  }
}
function iu(e, t, n, r) {
  switch (Qd(t)) {
    case 1:
      var l = vp;
      break;
    case 4:
      l = wp;
      break;
    default:
      l = Do;
  }
  n = l.bind(null, t, n, e), l = void 0, !Oa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ia(e, t, n, r, l) {
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
        if (o = Cn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Td(function() {
    var d = a, h = To(n), y = [];
    e: {
      var g = au.get(e);
      if (g !== void 0) {
        var k = zo, x = e;
        switch (e) {
          case "keypress":
            if (Kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Rp;
            break;
          case "focusin":
            x = "focus", k = ta;
            break;
          case "focusout":
            x = "blur", k = ta;
            break;
          case "beforeblur":
          case "afterblur":
            k = ta;
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
            k = $i;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = zp;
            break;
          case nu:
          case ru:
          case lu:
            k = bp;
            break;
          case su:
            k = Fp;
            break;
          case "scroll":
            k = xp;
            break;
          case "wheel":
            k = Wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Ep;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Ui;
        }
        var w = (t & 4) !== 0, _ = !w && e === "scroll", f = w ? g !== null ? g + "Capture" : null : g;
        w = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var v = m.stateNode;
          if (m.tag === 5 && v !== null && (m = v, f !== null && (v = Gr(u, f), v != null && w.push(tl(u, v, m)))), _) break;
          u = u.return;
        }
        0 < w.length && (g = new k(g, x, null, n, h), y.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", g && n !== Pa && (x = n.relatedTarget || n.fromElement) && (Cn(x) || x[Ut])) break e;
        if ((k || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, k ? (x = n.relatedTarget || n.toElement, k = d, x = x ? Cn(x) : null, x !== null && (_ = zn(x), x !== _ || x.tag !== 5 && x.tag !== 6) && (x = null)) : (k = null, x = d), k !== x)) {
          if (w = $i, v = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ui, v = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = k == null ? g : Gn(k), m = x == null ? g : Gn(x), g = new w(v, u + "leave", k, n, h), g.target = _, g.relatedTarget = m, v = null, Cn(h) === d && (w = new w(f, u + "enter", x, n, h), w.target = m, w.relatedTarget = _, v = w), _ = v, k && x) t: {
            for (w = k, f = x, u = 0, m = w; m; m = Wn(m)) u++;
            for (m = 0, v = f; v; v = Wn(v)) m++;
            for (; 0 < u - m; ) w = Wn(w), u--;
            for (; 0 < m - u; ) f = Wn(f), m--;
            for (; u--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Wn(w), f = Wn(f);
            }
            w = null;
          }
          else w = null;
          k !== null && Ji(y, g, k, w, !1), x !== null && _ !== null && Ji(y, _, x, w, !0);
        }
      }
      e: {
        if (g = d ? Gn(d) : window, k = g.nodeName && g.nodeName.toLowerCase(), k === "select" || k === "input" && g.type === "file") var j = Gp;
        else if (Qi(g)) if (Xd) j = Zp;
        else {
          j = Yp;
          var S = qp;
        }
        else (k = g.nodeName) && k.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = Xp);
        if (j && (j = j(e, d))) {
          Yd(y, j, n, h);
          break e;
        }
        S && S(e, g, d), e === "focusout" && (S = g._wrapperState) && S.controlled && g.type === "number" && Ta(g, "number", g.value);
      }
      switch (S = d ? Gn(d) : window, e) {
        case "focusin":
          (Qi(S) || S.contentEditable === "true") && (Hn = S, Va = d, $r = null);
          break;
        case "focusout":
          $r = Va = Hn = null;
          break;
        case "mousedown":
          Ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ba = !1, Yi(y, n, h);
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          Yi(y, n, h);
      }
      var b;
      if (Fo) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Qn ? Gd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Kd && n.locale !== "ko" && (Qn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Qn && (b = Hd()) : (ln = h, Po = "value" in ln ? ln.value : ln.textContent, Qn = !0)), S = cs(d, T), 0 < S.length && (T = new Wi(T, e, null, n, h), y.push({ event: T, listeners: S }), b ? T.data = b : (b = qd(n), b !== null && (T.data = b)))), (b = Vp ? Bp(e, n) : Qp(e, n)) && (d = cs(d, "onBeforeInput"), 0 < d.length && (h = new Wi("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: d }), h.data = b));
    }
    ou(y, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Gr(e, n), a != null && r.unshift(tl(e, a, l)), a = Gr(e, t), a != null && r.push(tl(e, a, l))), e = e.return;
  }
  return r;
}
function Wn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ji(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Gr(n, a), c != null && o.unshift(tl(n, c, i))) : l || (c = Gr(n, a), c != null && o.push(tl(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sh = /\r\n?/g, ah = /\u0000|\uFFFD/g;
function ec(e) {
  return (typeof e == "string" ? e : "" + e).replace(sh, `
`).replace(ah, "");
}
function Tl(e, t, n) {
  if (t = ec(t), ec(e) !== t && n) throw Error(V(425));
}
function ds() {
}
var Qa = null, Ha = null;
function Ka(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ga = typeof setTimeout == "function" ? setTimeout : void 0, oh = typeof clearTimeout == "function" ? clearTimeout : void 0, tc = typeof Promise == "function" ? Promise : void 0, ih = typeof queueMicrotask == "function" ? queueMicrotask : typeof tc < "u" ? function(e) {
  return tc.resolve(null).then(e).catch(ch);
} : Ga;
function ch(e) {
  setTimeout(function() {
    throw e;
  });
}
function ca(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Xr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Xr(t);
}
function dn(e) {
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
function nc(e) {
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
var wr = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + wr, nl = "__reactProps$" + wr, Ut = "__reactContainer$" + wr, qa = "__reactEvents$" + wr, dh = "__reactListeners$" + wr, uh = "__reactHandles$" + wr;
function Cn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ut] || n[Tt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = nc(e); e !== null; ) {
        if (n = e[Tt]) return n;
        e = nc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function yl(e) {
  return e = e[Tt] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ts(e) {
  return e[nl] || null;
}
var Ya = [], qn = -1;
function wn(e) {
  return { current: e };
}
function ve(e) {
  0 > qn || (e.current = Ya[qn], Ya[qn] = null, qn--);
}
function ge(e, t) {
  qn++, Ya[qn] = e.current, e.current = t;
}
var gn = {}, Be = wn(gn), Je = wn(!1), Tn = gn;
function cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function et(e) {
  return e = e.childContextTypes, e != null;
}
function us() {
  ve(Je), ve(Be);
}
function rc(e, t, n) {
  if (Be.current !== gn) throw Error(V(168));
  ge(Be, t), ge(Je, n);
}
function cu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(V(108, qm(e) || "Unknown", l));
  return je({}, n, r);
}
function fs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Tn = Be.current, ge(Be, e), ge(Je, Je.current), !0;
}
function lc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = cu(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, ve(Je), ve(Be), ge(Be, e)) : ve(Je), ge(Je, n);
}
var zt = null, Ls = !1, da = !1;
function du(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function fh(e) {
  Ls = !0, du(e);
}
function xn() {
  if (!da && zt !== null) {
    da = !0;
    var e = 0, t = ce;
    try {
      var n = zt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      zt = null, Ls = !1;
    } catch (l) {
      throw zt !== null && (zt = zt.slice(e + 1)), Dd(Lo, xn), l;
    } finally {
      ce = t, da = !1;
    }
  }
  return null;
}
var Yn = [], Xn = 0, ms = null, ps = 0, ut = [], ft = 0, Ln = null, Ot = 1, Ft = "";
function jn(e, t) {
  Yn[Xn++] = ps, Yn[Xn++] = ms, ms = e, ps = t;
}
function uu(e, t, n) {
  ut[ft++] = Ot, ut[ft++] = Ft, ut[ft++] = Ln, Ln = e;
  var r = Ot;
  e = Ft;
  var l = 32 - jt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - jt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ot = 1 << 32 - jt(t) + l | n << l | r, Ft = a + e;
  } else Ot = 1 << a | n << l | r, Ft = e;
}
function Wo(e) {
  e.return !== null && (jn(e, 1), uu(e, 1, 0));
}
function Uo(e) {
  for (; e === ms; ) ms = Yn[--Xn], Yn[Xn] = null, ps = Yn[--Xn], Yn[Xn] = null;
  for (; e === Ln; ) Ln = ut[--ft], ut[ft] = null, Ft = ut[--ft], ut[ft] = null, Ot = ut[--ft], ut[ft] = null;
}
var lt = null, rt = null, xe = !1, kt = null;
function fu(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: Ot, overflow: Ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function Xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Za(e) {
  if (xe) {
    var t = rt;
    if (t) {
      var n = t;
      if (!sc(e, t)) {
        if (Xa(e)) throw Error(V(418));
        t = dn(n.nextSibling);
        var r = lt;
        t && sc(e, t) ? fu(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, lt = e);
      }
    } else {
      if (Xa(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, xe = !1, lt = e;
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function Ll(e) {
  if (e !== lt) return !1;
  if (!xe) return ac(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ka(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Xa(e)) throw mu(), Error(V(418));
    for (; t; ) fu(e, t), t = dn(t.nextSibling);
  }
  if (ac(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = dn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function mu() {
  for (var e = rt; e; ) e = dn(e.nextSibling);
}
function dr() {
  rt = lt = null, xe = !1;
}
function Vo(e) {
  kt === null ? kt = [e] : kt.push(e);
}
var mh = Ht.ReactCurrentBatchConfig;
function Nr(e, t, n) {
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
function Al(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function oc(e) {
  var t = e._init;
  return t(e._payload);
}
function pu(e) {
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
    return f = pn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, v) {
    return u === null || u.tag !== 6 ? (u = ya(m, f.mode, v), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function c(f, u, m, v) {
    var j = m.type;
    return j === Bn ? h(f, u, m.props.children, v, m.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Jt && oc(j) === u.type) ? (v = l(u, m.props), v.ref = Nr(f, u, m), v.return = f, v) : (v = es(m.type, m.key, m.props, null, f.mode, v), v.ref = Nr(f, u, m), v.return = f, v);
  }
  function d(f, u, m, v) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = va(m, f.mode, v), u.return = f, u) : (u = l(u, m.children || []), u.return = f, u);
  }
  function h(f, u, m, v, j) {
    return u === null || u.tag !== 7 ? (u = In(m, f.mode, v, j), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function y(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ya("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case kl:
          return m = es(u.type, u.key, u.props, null, f.mode, m), m.ref = Nr(f, null, u), m.return = f, m;
        case Vn:
          return u = va(u, f.mode, m), u.return = f, u;
        case Jt:
          var v = u._init;
          return y(f, v(u._payload), m);
      }
      if (Ar(u) || Sr(u)) return u = In(u, f.mode, m, null), u.return = f, u;
      Al(f, u);
    }
    return null;
  }
  function g(f, u, m, v) {
    var j = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : i(f, u, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case kl:
          return m.key === j ? c(f, u, m, v) : null;
        case Vn:
          return m.key === j ? d(f, u, m, v) : null;
        case Jt:
          return j = m._init, g(
            f,
            u,
            j(m._payload),
            v
          );
      }
      if (Ar(m) || Sr(m)) return j !== null ? null : h(f, u, m, v, null);
      Al(f, m);
    }
    return null;
  }
  function k(f, u, m, v, j) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(m) || null, i(u, f, "" + v, j);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case kl:
          return f = f.get(v.key === null ? m : v.key) || null, c(u, f, v, j);
        case Vn:
          return f = f.get(v.key === null ? m : v.key) || null, d(u, f, v, j);
        case Jt:
          var S = v._init;
          return k(f, u, m, S(v._payload), j);
      }
      if (Ar(v) || Sr(v)) return f = f.get(m) || null, h(u, f, v, j, null);
      Al(u, v);
    }
    return null;
  }
  function x(f, u, m, v) {
    for (var j = null, S = null, b = u, T = u = 0, L = null; b !== null && T < m.length; T++) {
      b.index > T ? (L = b, b = null) : L = b.sibling;
      var R = g(f, b, m[T], v);
      if (R === null) {
        b === null && (b = L);
        break;
      }
      e && b && R.alternate === null && t(f, b), u = a(R, u, T), S === null ? j = R : S.sibling = R, S = R, b = L;
    }
    if (T === m.length) return n(f, b), xe && jn(f, T), j;
    if (b === null) {
      for (; T < m.length; T++) b = y(f, m[T], v), b !== null && (u = a(b, u, T), S === null ? j = b : S.sibling = b, S = b);
      return xe && jn(f, T), j;
    }
    for (b = r(f, b); T < m.length; T++) L = k(b, f, T, m[T], v), L !== null && (e && L.alternate !== null && b.delete(L.key === null ? T : L.key), u = a(L, u, T), S === null ? j = L : S.sibling = L, S = L);
    return e && b.forEach(function(E) {
      return t(f, E);
    }), xe && jn(f, T), j;
  }
  function w(f, u, m, v) {
    var j = Sr(m);
    if (typeof j != "function") throw Error(V(150));
    if (m = j.call(m), m == null) throw Error(V(151));
    for (var S = j = null, b = u, T = u = 0, L = null, R = m.next(); b !== null && !R.done; T++, R = m.next()) {
      b.index > T ? (L = b, b = null) : L = b.sibling;
      var E = g(f, b, R.value, v);
      if (E === null) {
        b === null && (b = L);
        break;
      }
      e && b && E.alternate === null && t(f, b), u = a(E, u, T), S === null ? j = E : S.sibling = E, S = E, b = L;
    }
    if (R.done) return n(
      f,
      b
    ), xe && jn(f, T), j;
    if (b === null) {
      for (; !R.done; T++, R = m.next()) R = y(f, R.value, v), R !== null && (u = a(R, u, T), S === null ? j = R : S.sibling = R, S = R);
      return xe && jn(f, T), j;
    }
    for (b = r(f, b); !R.done; T++, R = m.next()) R = k(b, f, T, R.value, v), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? T : R.key), u = a(R, u, T), S === null ? j = R : S.sibling = R, S = R);
    return e && b.forEach(function(D) {
      return t(f, D);
    }), xe && jn(f, T), j;
  }
  function _(f, u, m, v) {
    if (typeof m == "object" && m !== null && m.type === Bn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case kl:
          e: {
            for (var j = m.key, S = u; S !== null; ) {
              if (S.key === j) {
                if (j = m.type, j === Bn) {
                  if (S.tag === 7) {
                    n(f, S.sibling), u = l(S, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Jt && oc(j) === S.type) {
                  n(f, S.sibling), u = l(S, m.props), u.ref = Nr(f, S, m), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === Bn ? (u = In(m.props.children, f.mode, v, m.key), u.return = f, f = u) : (v = es(m.type, m.key, m.props, null, f.mode, v), v.ref = Nr(f, u, m), v.return = f, f = v);
          }
          return o(f);
        case Vn:
          e: {
            for (S = m.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === m.containerInfo && u.stateNode.implementation === m.implementation) {
                n(f, u.sibling), u = l(u, m.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = va(m, f.mode, v), u.return = f, f = u;
          }
          return o(f);
        case Jt:
          return S = m._init, _(f, u, S(m._payload), v);
      }
      if (Ar(m)) return x(f, u, m, v);
      if (Sr(m)) return w(f, u, m, v);
      Al(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, m), u.return = f, f = u) : (n(f, u), u = ya(m, f.mode, v), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var ur = pu(!0), hu = pu(!1), hs = wn(null), gs = null, Zn = null, Bo = null;
function Qo() {
  Bo = Zn = gs = null;
}
function Ho(e) {
  var t = hs.current;
  ve(hs), e._currentValue = t;
}
function Ja(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sr(e, t) {
  gs = e, Bo = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
}
function gt(e) {
  var t = e._currentValue;
  if (Bo !== e) if (e = { context: e, memoizedValue: t, next: null }, Zn === null) {
    if (gs === null) throw Error(V(308));
    Zn = e, gs.dependencies = { lanes: 0, firstContext: e };
  } else Zn = Zn.next = e;
  return t;
}
var En = null;
function Ko(e) {
  En === null ? En = [e] : En.push(e);
}
function gu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ko(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Vt(e, r);
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Go(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Vt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ko(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Vt(e, n);
}
function Gl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
  }
}
function ic(e, t) {
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
function ys(e, t, n, r) {
  var l = e.updateQueue;
  en = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var y = l.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var g = i.lane, k = i.eventTime;
      if ((r & g) === g) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var x = e, w = i;
          switch (g = t, k = n, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                y = x.call(k, y, g);
                break e;
              }
              y = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, g = typeof x == "function" ? x.call(k, y, g) : x, g == null) break e;
              y = je({}, y, g);
              break e;
            case 2:
              en = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [i] : g.push(i));
      } else k = { eventTime: k, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = k, c = y) : h = h.next = k, o |= g;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = y), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Rn |= o, e.lanes = o, e.memoizedState = y;
  }
}
function cc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(V(191, l));
      l.call(r);
    }
  }
}
var vl = {}, At = wn(vl), rl = wn(vl), ll = wn(vl);
function Nn(e) {
  if (e === vl) throw Error(V(174));
  return e;
}
function qo(e, t) {
  switch (ge(ll, t), ge(rl, e), ge(At, vl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Aa(t, e);
  }
  ve(At), ge(At, t);
}
function fr() {
  ve(At), ve(rl), ve(ll);
}
function vu(e) {
  Nn(ll.current);
  var t = Nn(At.current), n = Aa(t, e.type);
  t !== n && (ge(rl, e), ge(At, n));
}
function Yo(e) {
  rl.current === e && (ve(At), ve(rl));
}
var ke = wn(0);
function vs(e) {
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
var ua = [];
function Xo() {
  for (var e = 0; e < ua.length; e++) ua[e]._workInProgressVersionPrimary = null;
  ua.length = 0;
}
var ql = Ht.ReactCurrentDispatcher, fa = Ht.ReactCurrentBatchConfig, An = 0, Se = null, Le = null, Re = null, ws = !1, Wr = !1, sl = 0, ph = 0;
function We() {
  throw Error(V(321));
}
function Zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Jo(e, t, n, r, l, a) {
  if (An = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ql.current = e === null || e.memoizedState === null ? vh : wh, e = n(r, l), Wr) {
    a = 0;
    do {
      if (Wr = !1, sl = 0, 25 <= a) throw Error(V(301));
      a += 1, Re = Le = null, t.updateQueue = null, ql.current = xh, e = n(r, l);
    } while (Wr);
  }
  if (ql.current = xs, t = Le !== null && Le.next !== null, An = 0, Re = Le = Se = null, ws = !1, t) throw Error(V(300));
  return e;
}
function ei() {
  var e = sl !== 0;
  return sl = 0, e;
}
function It() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? Se.memoizedState = Re = e : Re = Re.next = e, Re;
}
function yt() {
  if (Le === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Re === null ? Se.memoizedState : Re.next;
  if (t !== null) Re = t, Le = e;
  else {
    if (e === null) throw Error(V(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Re === null ? Se.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function al(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ma(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(V(311));
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
    var i = o = null, c = null, d = a;
    do {
      var h = d.lane;
      if ((An & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var y = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = y, o = r) : c = c.next = y, Se.lanes |= h, Rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, Ct(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Se.lanes |= a, Rn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pa(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    Ct(a, t.memoizedState) || (Ze = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function wu() {
}
function xu(e, t) {
  var n = Se, r = yt(), l = t(), a = !Ct(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ze = !0), r = r.queue, ti(Su.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, ol(9, ku.bind(null, n, r, l, t), void 0, null), De === null) throw Error(V(349));
    An & 30 || _u(n, t, l);
  }
  return l;
}
function _u(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ku(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ju(t) && bu(e);
}
function Su(e, t, n) {
  return n(function() {
    ju(t) && bu(e);
  });
}
function ju(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function bu(e) {
  var t = Vt(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function dc(e) {
  var t = It();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: e }, t.queue = e, e = e.dispatch = yh.bind(null, Se, e), [t.memoizedState, e];
}
function ol(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cu() {
  return yt().memoizedState;
}
function Yl(e, t, n, r) {
  var l = It();
  Se.flags |= e, l.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r);
}
function As(e, t, n, r) {
  var l = yt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && Zo(r, o.deps)) {
      l.memoizedState = ol(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, l.memoizedState = ol(1 | t, n, a, r);
}
function uc(e, t) {
  return Yl(8390656, 8, e, t);
}
function ti(e, t) {
  return As(2048, 8, e, t);
}
function Eu(e, t) {
  return As(4, 2, e, t);
}
function Nu(e, t) {
  return As(4, 4, e, t);
}
function Mu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Iu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, As(4, 4, Mu.bind(null, t, e), n);
}
function ni() {
}
function Tu(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Lu(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Au(e, t, n) {
  return An & 21 ? (Ct(n, t) || (n = Od(), Se.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
}
function hh(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = fa.transition;
  fa.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, fa.transition = r;
  }
}
function Ru() {
  return yt().memoizedState;
}
function gh(e, t, n) {
  var r = mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Du(e)) Pu(t, n);
  else if (n = gu(e, t, n, r), n !== null) {
    var l = He();
    bt(n, e, r, l), zu(n, t, r);
  }
}
function yh(e, t, n) {
  var r = mn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Du(e)) Pu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, Ct(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Ko(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = gu(e, t, l, r), n !== null && (l = He(), bt(n, e, r, l), zu(n, t, r));
  }
}
function Du(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Pu(e, t) {
  Wr = ws = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function zu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
  }
}
var xs = { readContext: gt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, vh = { readContext: gt, useCallback: function(e, t) {
  return It().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: gt, useEffect: uc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yl(
    4194308,
    4,
    Mu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Yl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Yl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = It();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = It();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gh.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = It();
  return e = { current: e }, t.memoizedState = e;
}, useState: dc, useDebugValue: ni, useDeferredValue: function(e) {
  return It().memoizedState = e;
}, useTransition: function() {
  var e = dc(!1), t = e[0];
  return e = hh.bind(null, e[1]), It().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = It();
  if (xe) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(V(349));
    An & 30 || _u(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, uc(Su.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, ol(9, ku.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = It(), t = De.identifierPrefix;
  if (xe) {
    var n = Ft, r = Ot;
    n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ph++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wh = {
  readContext: gt,
  useCallback: Tu,
  useContext: gt,
  useEffect: ti,
  useImperativeHandle: Iu,
  useInsertionEffect: Eu,
  useLayoutEffect: Nu,
  useMemo: Lu,
  useReducer: ma,
  useRef: Cu,
  useState: function() {
    return ma(al);
  },
  useDebugValue: ni,
  useDeferredValue: function(e) {
    var t = yt();
    return Au(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = ma(al)[0], t = yt().memoizedState;
    return [e, t];
  },
  useMutableSource: wu,
  useSyncExternalStore: xu,
  useId: Ru,
  unstable_isNewReconciler: !1
}, xh = { readContext: gt, useCallback: Tu, useContext: gt, useEffect: ti, useImperativeHandle: Iu, useInsertionEffect: Eu, useLayoutEffect: Nu, useMemo: Lu, useReducer: pa, useRef: Cu, useState: function() {
  return pa(al);
}, useDebugValue: ni, useDeferredValue: function(e) {
  var t = yt();
  return Le === null ? t.memoizedState = e : Au(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = pa(al)[0], t = yt().memoizedState;
  return [e, t];
}, useMutableSource: wu, useSyncExternalStore: xu, useId: Ru, unstable_isNewReconciler: !1 };
function xt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rs = { isMounted: function(e) {
  return (e = e._reactInternals) ? zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = mn(e), a = $t(r, l);
  a.payload = t, n != null && (a.callback = n), t = un(e, a, l), t !== null && (bt(t, e, l, r), Gl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), l = mn(e), a = $t(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = un(e, a, l), t !== null && (bt(t, e, l, r), Gl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = mn(e), l = $t(n, r);
  l.tag = 2, t != null && (l.callback = t), t = un(e, l, r), t !== null && (bt(t, e, r, n), Gl(t, e, r));
} };
function fc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(l, a) : !0;
}
function Ou(e, t, n) {
  var r = !1, l = gn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = gt(a) : (l = et(t) ? Tn : Be.current, r = t.contextTypes, a = (r = r != null) ? cr(e, l) : gn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function mc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}
function to(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Go(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = gt(a) : (a = et(t) ? Tn : Be.current, l.context = cr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (eo(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Rs.enqueueReplaceState(l, l.state, null), ys(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Gm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ha(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function no(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var _h = typeof WeakMap == "function" ? WeakMap : Map;
function Fu(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ks || (ks = !0, mo = r), no(e, t);
  }, n;
}
function $u(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      no(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    no(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function pc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _h();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Dh.bind(null, e, t, n), t.then(e, e));
}
function hc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var kh = Ht.ReactCurrentOwner, Ze = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? hu(t, null, n, r) : ur(t, e.child, n, r);
}
function yc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return sr(t, l), r = Jo(e, t, n, r, a, l), n = ei(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (xe && n && Wo(t), t.flags |= 1, Qe(e, t, r, l), t.child);
}
function vc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !di(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Wu(e, t, a, r, l)) : (e = es(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(o, r) && e.ref === t.ref) return Bt(e, t, l);
  }
  return t.flags |= 1, e = pn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Jr(a, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ze = !0);
    else return t.lanes = e.lanes, Bt(e, t, l);
  }
  return ro(e, t, n, r, l);
}
function Uu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(er, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(er, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ge(er, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ge(er, nt), nt |= r;
  return Qe(e, t, l, n), t.child;
}
function Vu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ro(e, t, n, r, l) {
  var a = et(n) ? Tn : Be.current;
  return a = cr(t, a), sr(t, l), n = Jo(e, t, n, r, a, l), r = ei(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (xe && r && Wo(t), t.flags |= 1, Qe(e, t, n, l), t.child);
}
function wc(e, t, n, r, l) {
  if (et(n)) {
    var a = !0;
    fs(t);
  } else a = !1;
  if (sr(t, l), t.stateNode === null) Xl(e, t), Ou(t, n, r), to(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = gt(d) : (d = et(n) ? Tn : Be.current, d = cr(t, d));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && mc(t, o, r, d), en = !1;
    var g = t.memoizedState;
    o.state = g, ys(t, r, o, l), c = t.memoizedState, i !== r || g !== c || Je.current || en ? (typeof h == "function" && (eo(t, n, h, r), c = t.memoizedState), (i = en || fc(t, n, i, r, g, c, d)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, yu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : xt(t.type, i), o.props = d, y = t.pendingProps, g = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = gt(c) : (c = et(n) ? Tn : Be.current, c = cr(t, c));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== y || g !== c) && mc(t, o, r, c), en = !1, g = t.memoizedState, o.state = g, ys(t, r, o, l);
    var x = t.memoizedState;
    i !== y || g !== x || Je.current || en ? (typeof k == "function" && (eo(t, n, k, r), x = t.memoizedState), (d = en || fc(t, n, d, r, g, x, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return lo(e, t, n, r, a, l);
}
function lo(e, t, n, r, l, a) {
  Vu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && lc(t, n, !1), Bt(e, t, a);
  r = t.stateNode, kh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ur(t, e.child, null, a), t.child = ur(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, l && lc(t, n, !0), t.child;
}
function Bu(e) {
  var t = e.stateNode;
  t.pendingContext ? rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rc(e, t.context, !1), qo(e, t.containerInfo);
}
function xc(e, t, n, r, l) {
  return dr(), Vo(l), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var so = { dehydrated: null, treeContext: null, retryLane: 0 };
function ao(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qu(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ge(ke, l & 1), e === null)
    return Za(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = zs(o, r, 0, null), e = In(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ao(n), t.memoizedState = so, e) : ri(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Sh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = pn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = pn(i, a) : (a = In(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ao(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = so, r;
  }
  return a = e.child, e = a.sibling, r = pn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ri(e, t) {
  return t = zs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Rl(e, t, n, r) {
  return r !== null && Vo(r), ur(t, e.child, null, n), e = ri(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ha(Error(V(422))), Rl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = zs({ mode: "visible", children: r.children }, l, 0, null), a = In(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && ur(t, e.child, null, o), t.child.memoizedState = ao(o), t.memoizedState = so, a);
  if (!(t.mode & 1)) return Rl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(V(419)), r = ha(a, r, void 0), Rl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ze || i) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Vt(e, l), bt(r, e, l, -1));
    }
    return ci(), r = ha(Error(V(421))), Rl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ph.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = dn(l.nextSibling), lt = t, xe = !0, kt = null, e !== null && (ut[ft++] = Ot, ut[ft++] = Ft, ut[ft++] = Ln, Ot = e.id, Ft = e.overflow, Ln = t), t = ri(t, r.children), t.flags |= 4096, t);
}
function _c(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ja(e.return, t, n);
}
function ga(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Hu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
      else if (e.tag === 19) _c(e, n, t);
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
  if (ge(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && vs(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ga(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && vs(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ga(t, !0, n, null, a);
      break;
    case "together":
      ga(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jh(e, t, n) {
  switch (t.tag) {
    case 3:
      Bu(t), dr();
      break;
    case 5:
      vu(t);
      break;
    case 1:
      et(t.type) && fs(t);
      break;
    case 4:
      qo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ge(hs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qu(e, t, n) : (ge(ke, ke.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
      ge(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Hu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ge(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uu(e, t, n);
  }
  return Bt(e, t, n);
}
var Ku, oo, Gu, qu;
Ku = function(e, t) {
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
oo = function() {
};
Gu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nn(At.current);
    var a = null;
    switch (n) {
      case "input":
        l = Ma(e, l), r = Ma(e, r), a = [];
        break;
      case "select":
        l = je({}, l, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = La(e, l), r = La(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ds);
    }
    Ra(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Hr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Hr.hasOwnProperty(d) ? (c != null && d === "onScroll" && ye("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
qu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
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
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bh(e, t, n) {
  var r = t.pendingProps;
  switch (Uo(t), t.tag) {
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
      return Ue(t), null;
    case 1:
      return et(t.type) && us(), Ue(t), null;
    case 3:
      return r = t.stateNode, fr(), ve(Je), ve(Be), Xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kt !== null && (go(kt), kt = null))), oo(e, t), Ue(t), null;
    case 5:
      Yo(t);
      var l = Nn(ll.current);
      if (n = t.type, e !== null && t.stateNode != null) Gu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Ue(t), null;
        }
        if (e = Nn(At.current), Ll(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Tt] = t, r[nl] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Dr.length; l++) ye(Dr[l], r);
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
              Ii(r, a), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ye("invalid", r);
              break;
            case "textarea":
              Li(r, a), ye("invalid", r);
          }
          Ra(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Tl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Tl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Hr.hasOwnProperty(o) && i != null && o === "onScroll" && ye("scroll", r);
          }
          switch (n) {
            case "input":
              Sl(r), Ti(r, a, !0);
              break;
            case "textarea":
              Sl(r), Ai(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ds);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Tt] = t, e[nl] = r, Ku(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Da(n, r), n) {
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
                for (l = 0; l < Dr.length; l++) ye(Dr[l], e);
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
                Ii(e, r), l = Ma(e, r), ye("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                Li(e, r), l = La(e, r), ye("invalid", e);
                break;
              default:
                l = r;
            }
            Ra(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Cd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && jd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Kr(e, c) : typeof c == "number" && Kr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Hr.hasOwnProperty(a) ? c != null && a === "onScroll" && ye("scroll", e) : c != null && Eo(e, a, c, o));
            }
            switch (n) {
              case "input":
                Sl(e), Ti(e, r, !1);
                break;
              case "textarea":
                Sl(e), Ai(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? tr(e, !!r.multiple, a, !1) : r.defaultValue != null && tr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ds);
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
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) qu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = Nn(ll.current), Nn(At.current), Ll(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Tt] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              Tl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Tl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Tt] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (ve(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && rt !== null && t.mode & 1 && !(t.flags & 128)) mu(), dr(), t.flags |= 98560, a = !1;
        else if (a = Ll(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(V(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(V(317));
            a[Tt] = t;
          } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), a = !1;
        } else kt !== null && (go(kt), kt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Ae === 0 && (Ae = 3) : ci())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return fr(), oo(e, t), e === null && el(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Ho(t.type._context), Ue(t), null;
    case 17:
      return et(t.type) && us(), Ue(t), null;
    case 19:
      if (ve(ke), a = t.memoizedState, a === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Mr(a, !1);
      else {
        if (Ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = vs(e), o !== null) {
            for (t.flags |= 128, Mr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ee() > pr && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = vs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return Ue(t), null;
        } else 2 * Ee() - a.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ee(), t.sibling = null, n = ke.current, ge(ke, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return ii(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function Ch(e, t) {
  switch (Uo(t), t.tag) {
    case 1:
      return et(t.type) && us(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fr(), ve(Je), ve(Be), Xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yo(t), null;
    case 13:
      if (ve(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        dr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(ke), null;
    case 4:
      return fr(), null;
    case 10:
      return Ho(t.type._context), null;
    case 22:
    case 23:
      return ii(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1, Ve = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ce(e, t, r);
  }
  else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var kc = !1;
function Nh(e, t) {
  if (Qa = os, e = eu(), $o(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, y = e, g = null;
        t: for (; ; ) {
          for (var k; y !== n || l !== 0 && y.nodeType !== 3 || (i = o + l), y !== a || r !== 0 && y.nodeType !== 3 || (c = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (k = y.firstChild) !== null; )
            g = y, y = k;
          for (; ; ) {
            if (y === e) break t;
            if (g === n && ++d === l && (i = o), g === a && ++h === r && (c = o), (k = y.nextSibling) !== null) break;
            y = g, g = y.parentNode;
          }
          y = k;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ha = { focusedElem: e, selectionRange: n }, os = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var w = x.memoizedProps, _ = x.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : xt(t.type, w), _);
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
    } catch (v) {
      Ce(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return x = kc, kc = !1, x;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && io(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ds(e, t) {
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
function co(e) {
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
function Yu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[nl], delete t[qa], delete t[dh], delete t[uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ds));
  else if (r !== 4 && (e = e.child, e !== null)) for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), e = e.sibling;
}
function fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), e = e.sibling;
}
var ze = null, _t = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Zu(e, t, n), n = n.sibling;
}
function Zu(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
    Lt.onCommitFiberUnmount(Es, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ve || Jn(n, t);
    case 6:
      var r = ze, l = _t;
      ze = null, Zt(e, t, n), ze = r, _t = l, ze !== null && (_t ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (_t ? (e = ze, n = n.stateNode, e.nodeType === 8 ? ca(e.parentNode, n) : e.nodeType === 1 && ca(e, n), Xr(e)) : ca(ze, n.stateNode));
      break;
    case 4:
      r = ze, l = _t, ze = n.stateNode.containerInfo, _t = !0, Zt(e, t, n), ze = r, _t = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && io(n, t, o), l = l.next;
        } while (l !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Ve && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ce(n, t, i);
      }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, Zt(e, t, n), Ve = r) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Eh()), t.forEach(function(r) {
      var l = zh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ze = i.stateNode, _t = !1;
            break e;
          case 3:
            ze = i.stateNode.containerInfo, _t = !0;
            break e;
          case 4:
            ze = i.stateNode.containerInfo, _t = !0;
            break e;
        }
        i = i.return;
      }
      if (ze === null) throw Error(V(160));
      Zu(a, o, l), ze = null, _t = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ce(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ju(t, e), t = t.sibling;
}
function Ju(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wt(t, e), Nt(e), r & 4) {
        try {
          Ur(3, e, e.return), Ds(3, e);
        } catch (w) {
          Ce(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 1:
      wt(t, e), Nt(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (wt(t, e), Nt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kr(l, "");
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && _d(l, a), Da(i, o);
          var d = Da(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], y = c[o + 1];
            h === "style" ? Cd(l, y) : h === "dangerouslySetInnerHTML" ? jd(l, y) : h === "children" ? Kr(l, y) : Eo(l, h, y, d);
          }
          switch (i) {
            case "input":
              Ia(l, a);
              break;
            case "textarea":
              kd(l, a);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var k = a.value;
              k != null ? tr(l, !!a.multiple, k, !1) : g !== !!a.multiple && (a.defaultValue != null ? tr(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : tr(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[nl] = a;
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 6:
      if (wt(t, e), Nt(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (wt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Xr(t.containerInfo);
      } catch (w) {
        Ce(e, e.return, w);
      }
      break;
    case 4:
      wt(t, e), Nt(e);
      break;
    case 13:
      wt(t, e), Nt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (ai = Ee())), r & 4 && jc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (d = Ve) || h, wt(t, e), Ve = d) : wt(t, e), Nt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (G = e, h = e.child; h !== null; ) {
          for (y = G = h; G !== null; ) {
            switch (g = G, k = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ur(4, g, g.return);
                break;
              case 1:
                Jn(g, g.return);
                var x = g.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (w) {
                    Ce(r, n, w);
                  }
                }
                break;
              case 5:
                Jn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Cc(y);
                  continue;
                }
            }
            k !== null ? (k.return = g, G = k) : Cc(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = y.stateNode, c = y.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = bd("display", o));
              } catch (w) {
                Ce(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = d ? "" : y.memoizedProps;
            } catch (w) {
              Ce(e, e.return, w);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            h === y && (h = null), y = y.return;
          }
          h === y && (h = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      wt(t, e), Nt(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      wt(
        t,
        e
      ), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xu(n)) {
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
          r.flags & 32 && (Kr(l, ""), r.flags &= -33);
          var a = Sc(e);
          fo(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Sc(e);
          uo(e, i, o);
          break;
        default:
          throw Error(V(161));
      }
    } catch (c) {
      Ce(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mh(e, t, n) {
  G = e, ef(e);
}
function ef(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ve;
        i = Dl;
        var d = Ve;
        if (Dl = o, (Ve = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? Ec(l) : c !== null ? (c.return = o, G = c) : Ec(l);
        for (; a !== null; ) G = a, ef(a), a = a.sibling;
        G = l, Dl = i, Ve = d;
      }
      bc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : bc(e);
  }
}
function bc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ve || Ds(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && cc(t, a, r);
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
              cc(t, o, n);
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
                  var y = h.dehydrated;
                  y !== null && Xr(y);
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
        Ve || t.flags & 512 && co(t);
      } catch (g) {
        Ce(t, t.return, g);
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
function Cc(e) {
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
function Ec(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ds(4, t);
          } catch (c) {
            Ce(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ce(t, l, c);
            }
          }
          var a = t.return;
          try {
            co(t);
          } catch (c) {
            Ce(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            co(t);
          } catch (c) {
            Ce(t, o, c);
          }
      }
    } catch (c) {
      Ce(t, t.return, c);
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
var Ih = Math.ceil, _s = Ht.ReactCurrentDispatcher, li = Ht.ReactCurrentOwner, pt = Ht.ReactCurrentBatchConfig, ae = 0, De = null, Ie = null, Oe = 0, nt = 0, er = wn(0), Ae = 0, il = null, Rn = 0, Ps = 0, si = 0, Vr = null, Ye = null, ai = 0, pr = 1 / 0, Pt = null, ks = !1, mo = null, fn = null, Pl = !1, sn = null, Ss = 0, Br = 0, po = null, Zl = -1, Jl = 0;
function He() {
  return ae & 6 ? Ee() : Zl !== -1 ? Zl : Zl = Ee();
}
function mn(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : mh.transition !== null ? (Jl === 0 && (Jl = Od()), Jl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qd(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < Br) throw Br = 0, po = null, Error(V(185));
  hl(e, n, r), (!(ae & 2) || e !== De) && (e === De && (!(ae & 2) && (Ps |= n), Ae === 4 && nn(e, Oe)), tt(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (pr = Ee() + 500, Ls && xn()));
}
function tt(e, t) {
  var n = e.callbackNode;
  mp(e, t);
  var r = as(e, e === De ? Oe : 0);
  if (r === 0) n !== null && Pi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pi(n), t === 1) e.tag === 0 ? fh(Nc.bind(null, e)) : du(Nc.bind(null, e)), ih(function() {
      !(ae & 6) && xn();
    }), n = null;
    else {
      switch (Fd(r)) {
        case 1:
          n = Lo;
          break;
        case 4:
          n = Pd;
          break;
        case 16:
          n = ss;
          break;
        case 536870912:
          n = zd;
          break;
        default:
          n = ss;
      }
      n = cf(n, tf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tf(e, t) {
  if (Zl = -1, Jl = 0, ae & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (ar() && e.callbackNode !== n) return null;
  var r = as(e, e === De ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = js(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = rf();
    (De !== e || Oe !== t) && (Pt = null, pr = Ee() + 500, Mn(e, t));
    do
      try {
        Ah();
        break;
      } catch (i) {
        nf(e, i);
      }
    while (!0);
    Qo(), _s.current = a, ae = l, Ie !== null ? t = 0 : (De = null, Oe = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (l = $a(e), l !== 0 && (r = l, t = ho(e, l))), t === 1) throw n = il, Mn(e, 0), nn(e, r), tt(e, Ee()), n;
    if (t === 6) nn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Th(l) && (t = js(e, r), t === 2 && (a = $a(e), a !== 0 && (r = a, t = ho(e, a))), t === 1)) throw n = il, Mn(e, 0), nn(e, r), tt(e, Ee()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          bn(e, Ye, Pt);
          break;
        case 3:
          if (nn(e, r), (r & 130023424) === r && (t = ai + 500 - Ee(), 10 < t)) {
            if (as(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ga(bn.bind(null, e, Ye, Pt), t);
            break;
          }
          bn(e, Ye, Pt);
          break;
        case 4:
          if (nn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - jt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ih(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ga(bn.bind(null, e, Ye, Pt), r);
            break;
          }
          bn(e, Ye, Pt);
          break;
        case 5:
          bn(e, Ye, Pt);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return tt(e, Ee()), e.callbackNode === n ? tf.bind(null, e) : null;
}
function ho(e, t) {
  var n = Vr;
  return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = js(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && go(t)), e;
}
function go(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Th(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!Ct(a(), l)) return !1;
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
function nn(e, t) {
  for (t &= ~si, t &= ~Ps, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - jt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Nc(e) {
  if (ae & 6) throw Error(V(327));
  ar();
  var t = as(e, 0);
  if (!(t & 1)) return tt(e, Ee()), null;
  var n = js(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $a(e);
    r !== 0 && (t = r, n = ho(e, r));
  }
  if (n === 1) throw n = il, Mn(e, 0), nn(e, t), tt(e, Ee()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, Ye, Pt), tt(e, Ee()), null;
}
function oi(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (pr = Ee() + 500, Ls && xn());
  }
}
function Dn(e) {
  sn !== null && sn.tag === 0 && !(ae & 6) && ar();
  var t = ae;
  ae |= 1;
  var n = pt.transition, r = ce;
  try {
    if (pt.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, pt.transition = n, ae = t, !(ae & 6) && xn();
  }
}
function ii() {
  nt = er.current, ve(er);
}
function Mn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, oh(n)), Ie !== null) for (n = Ie.return; n !== null; ) {
    var r = n;
    switch (Uo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && us();
        break;
      case 3:
        fr(), ve(Je), ve(Be), Xo();
        break;
      case 5:
        Yo(r);
        break;
      case 4:
        fr();
        break;
      case 13:
        ve(ke);
        break;
      case 19:
        ve(ke);
        break;
      case 10:
        Ho(r.type._context);
        break;
      case 22:
      case 23:
        ii();
    }
    n = n.return;
  }
  if (De = e, Ie = e = pn(e.current, null), Oe = nt = t, Ae = 0, il = null, si = Ps = Rn = 0, Ye = Vr = null, En !== null) {
    for (t = 0; t < En.length; t++) if (n = En[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    En = null;
  }
  return e;
}
function nf(e, t) {
  do {
    var n = Ie;
    try {
      if (Qo(), ql.current = xs, ws) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ws = !1;
      }
      if (An = 0, Re = Le = Se = null, Wr = !1, sl = 0, li.current = null, n === null || n.return === null) {
        Ae = 1, il = t, Ie = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = hc(o);
          if (k !== null) {
            k.flags &= -257, gc(k, o, i, a, t), k.mode & 1 && pc(a, d, t), t = k, c = d;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(c), t.updateQueue = w;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              pc(a, d, t), ci();
              break e;
            }
            c = Error(V(426));
          }
        } else if (xe && i.mode & 1) {
          var _ = hc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), gc(_, o, i, a, t), Vo(mr(c, i));
            break e;
          }
        }
        a = c = mr(c, i), Ae !== 4 && (Ae = 2), Vr === null ? Vr = [a] : Vr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Fu(a, c, t);
              ic(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (fn === null || !fn.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var v = $u(a, i, t);
                ic(a, v);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      sf(n);
    } catch (j) {
      t = j, Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rf() {
  var e = _s.current;
  return _s.current = xs, e === null ? xs : e;
}
function ci() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), De === null || !(Rn & 268435455) && !(Ps & 268435455) || nn(De, Oe);
}
function js(e, t) {
  var n = ae;
  ae |= 2;
  var r = rf();
  (De !== e || Oe !== t) && (Pt = null, Mn(e, t));
  do
    try {
      Lh();
      break;
    } catch (l) {
      nf(e, l);
    }
  while (!0);
  if (Qo(), ae = n, _s.current = r, Ie !== null) throw Error(V(261));
  return De = null, Oe = 0, Ae;
}
function Lh() {
  for (; Ie !== null; ) lf(Ie);
}
function Ah() {
  for (; Ie !== null && !lp(); ) lf(Ie);
}
function lf(e) {
  var t = of(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? sf(e) : Ie = t, li.current = null;
}
function sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ch(n, t), n !== null) {
        n.flags &= 32767, Ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, Ie = null;
        return;
      }
    } else if (n = bh(n, t, nt), n !== null) {
      Ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function bn(e, t, n) {
  var r = ce, l = pt.transition;
  try {
    pt.transition = null, ce = 1, Rh(e, t, n, r);
  } finally {
    pt.transition = l, ce = r;
  }
  return null;
}
function Rh(e, t, n, r) {
  do
    ar();
  while (sn !== null);
  if (ae & 6) throw Error(V(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (pp(e, a), e === De && (Ie = De = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pl || (Pl = !0, cf(ss, function() {
    return ar(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = pt.transition, pt.transition = null;
    var o = ce;
    ce = 1;
    var i = ae;
    ae |= 4, li.current = null, Nh(e, n), Ju(n, e), eh(Ha), os = !!Qa, Ha = Qa = null, e.current = n, Mh(n), sp(), ae = i, ce = o, pt.transition = a;
  } else e.current = n;
  if (Pl && (Pl = !1, sn = e, Ss = l), a = e.pendingLanes, a === 0 && (fn = null), ip(n.stateNode), tt(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ks) throw ks = !1, e = mo, mo = null, e;
  return Ss & 1 && e.tag !== 0 && ar(), a = e.pendingLanes, a & 1 ? e === po ? Br++ : (Br = 0, po = e) : Br = 0, xn(), null;
}
function ar() {
  if (sn !== null) {
    var e = Fd(Ss), t = pt.transition, n = ce;
    try {
      if (pt.transition = null, ce = 16 > e ? 16 : e, sn === null) var r = !1;
      else {
        if (e = sn, sn = null, Ss = 0, ae & 6) throw Error(V(331));
        var l = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var h = G;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, h, a);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, G = y;
                  else for (; G !== null; ) {
                    h = G;
                    var g = h.sibling, k = h.return;
                    if (Yu(h), h === d) {
                      G = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = k, G = g;
                      break;
                    }
                    G = k;
                  }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var _ = w.sibling;
                    w.sibling = null, w = _;
                  } while (w !== null);
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
                Ur(9, a, a.return);
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
                  Ds(9, i);
              }
            } catch (j) {
              Ce(i, i.return, j);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, G = v;
              break e;
            }
            G = i.return;
          }
        }
        if (ae = l, xn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
          Lt.onPostCommitFiberRoot(Es, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, pt.transition = t;
    }
  }
  return !1;
}
function Mc(e, t, n) {
  t = mr(n, t), t = Fu(e, t, 1), e = un(e, t, 1), t = He(), e !== null && (hl(e, 1, t), tt(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) Mc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Mc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
        e = mr(n, e), e = $u(t, e, 1), t = un(t, e, 1), e = He(), t !== null && (hl(t, 1, e), tt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Dh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Oe & n) === n && (Ae === 4 || Ae === 3 && (Oe & 130023424) === Oe && 500 > Ee() - ai ? Mn(e, 0) : si |= n), tt(e, t);
}
function af(e, t) {
  t === 0 && (e.mode & 1 ? (t = Cl, Cl <<= 1, !(Cl & 130023424) && (Cl = 4194304)) : t = 1);
  var n = He();
  e = Vt(e, t), e !== null && (hl(e, t, n), tt(e, n));
}
function Ph(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), af(e, n);
}
function zh(e, t) {
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
  r !== null && r.delete(t), af(e, n);
}
var of;
of = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, jh(e, t, n);
    Ze = !!(e.flags & 131072);
  }
  else Ze = !1, xe && t.flags & 1048576 && uu(t, ps, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Xl(e, t), e = t.pendingProps;
      var l = cr(t, Be.current);
      sr(t, n), l = Jo(null, t, r, e, l, n);
      var a = ei();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (a = !0, fs(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Go(t), l.updater = Rs, t.stateNode = l, l._reactInternals = t, to(t, r, e, n), t = lo(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && Wo(t), Qe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Xl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Fh(r), e = xt(r, e), l) {
          case 0:
            t = ro(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = vc(null, t, r, xt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), ro(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), wc(e, t, r, l, n);
    case 3:
      e: {
        if (Bu(t), e === null) throw Error(V(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, yu(e, t), ys(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = mr(Error(V(423)), t), t = xc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = mr(Error(V(424)), t), t = xc(e, t, r, n, l);
          break e;
        } else for (rt = dn(t.stateNode.containerInfo.firstChild), lt = t, xe = !0, kt = null, n = hu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (dr(), r === l) {
            t = Bt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return vu(t), e === null && Za(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Ka(r, l) ? o = null : a !== null && Ka(r, a) && (t.flags |= 32), Vu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Za(t), null;
    case 13:
      return Qu(e, t, n);
    case 4:
      return qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), yc(e, t, r, l, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, ge(hs, r._currentValue), r._currentValue = o, a !== null) if (Ct(a.value, o)) {
          if (a.children === l.children && !Je.current) {
            t = Bt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = $t(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ja(
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
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ja(o, n, t), o = a.sibling;
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
        Qe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, sr(t, n), l = gt(l), r = r(l), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = xt(r, t.pendingProps), l = xt(r.type, l), vc(e, t, r, l, n);
    case 15:
      return Wu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : xt(r, l), Xl(e, t), t.tag = 1, et(r) ? (e = !0, fs(t)) : e = !1, sr(t, n), Ou(t, r, l), to(t, r, l, n), lo(null, t, r, !0, e, n);
    case 19:
      return Hu(e, t, n);
    case 22:
      return Uu(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function cf(e, t) {
  return Dd(e, t);
}
function Oh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new Oh(e, t, n, r);
}
function di(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fh(e) {
  if (typeof e == "function") return di(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mo) return 11;
    if (e === Io) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function es(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") di(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Bn:
      return In(n.children, l, a, t);
    case No:
      o = 8, l |= 8;
      break;
    case ba:
      return e = mt(12, n, t, l | 2), e.elementType = ba, e.lanes = a, e;
    case Ca:
      return e = mt(13, n, t, l), e.elementType = Ca, e.lanes = a, e;
    case Ea:
      return e = mt(19, n, t, l), e.elementType = Ea, e.lanes = a, e;
    case vd:
      return zs(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case gd:
          o = 10;
          break e;
        case yd:
          o = 9;
          break e;
        case Mo:
          o = 11;
          break e;
        case Io:
          o = 14;
          break e;
        case Jt:
          o = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function In(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function zs(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = vd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ya(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function va(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $h(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zs(0), this.expirationTimes = Zs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ui(e, t, n, r, l, a, o, i, c) {
  return e = new $h(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Go(a), e;
}
function Wh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function df(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
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
    if (et(n)) return cu(e, n, t);
  }
  return t;
}
function uf(e, t, n, r, l, a, o, i, c) {
  return e = ui(n, r, !0, e, l, a, o, i, c), e.context = df(null), n = e.current, r = He(), l = mn(n), a = $t(r, l), a.callback = t ?? null, un(n, a, l), e.current.lanes = l, hl(e, l, r), tt(e, r), e;
}
function Os(e, t, n, r) {
  var l = t.current, a = He(), o = mn(l);
  return n = df(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(l, t, o), e !== null && (bt(e, l, o, a), Gl(e, l, o)), o;
}
function bs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ic(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fi(e, t) {
  Ic(e, t), (e = e.alternate) && Ic(e, t);
}
function Uh() {
  return null;
}
var ff = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function mi(e) {
  this._internalRoot = e;
}
Fs.prototype.render = mi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Os(e, t, null, null);
};
Fs.prototype.unmount = mi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function() {
      Os(null, e, null, null);
    }), t[Ut] = null;
  }
};
function Fs(e) {
  this._internalRoot = e;
}
Fs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ud();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
    tn.splice(n, 0, e), n === 0 && Bd(e);
  }
};
function pi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function $s(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Tc() {
}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = bs(o);
        a.call(d);
      };
    }
    var o = uf(t, r, e, 0, null, !1, !1, "", Tc);
    return e._reactRootContainer = o, e[Ut] = o.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = bs(c);
      i.call(d);
    };
  }
  var c = ui(e, 0, !1, null, null, !1, !1, "", Tc);
  return e._reactRootContainer = c, e[Ut] = c.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
    Os(t, c, n, r);
  }), c;
}
function Ws(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = bs(o);
        i.call(c);
      };
    }
    Os(t, o, e, l);
  } else o = Vh(n, t, e, l, r);
  return bs(o);
}
$d = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Ao(t, n | 1), tt(t, Ee()), !(ae & 6) && (pr = Ee() + 500, xn()));
      }
      break;
    case 13:
      Dn(function() {
        var r = Vt(e, 1);
        if (r !== null) {
          var l = He();
          bt(r, e, 1, l);
        }
      }), fi(e, 1);
  }
};
Ro = function(e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = He();
      bt(t, e, 134217728, n);
    }
    fi(e, 134217728);
  }
};
Wd = function(e) {
  if (e.tag === 13) {
    var t = mn(e), n = Vt(e, t);
    if (n !== null) {
      var r = He();
      bt(n, e, t, r);
    }
    fi(e, t);
  }
};
Ud = function() {
  return ce;
};
Vd = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
za = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ia(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ts(r);
            if (!l) throw Error(V(90));
            xd(r), Ia(r, l);
          }
        }
      }
      break;
    case "textarea":
      kd(e, n);
      break;
    case "select":
      t = n.value, t != null && tr(e, !!n.multiple, t, !1);
  }
};
Md = oi;
Id = Dn;
var Bh = { usingClientEntryPoint: !1, Events: [yl, Gn, Ts, Ed, Nd, oi] }, Ir = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qh = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ad(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ir.findFiberByHostInstance || Uh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber) try {
    Es = zl.inject(Qh), Lt = zl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bh;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pi(t)) throw Error(V(200));
  return Wh(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!pi(e)) throw Error(V(299));
  var n = !1, r = "", l = ff;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ui(e, 1, !1, null, null, n, !1, r, l), e[Ut] = t.current, el(e.nodeType === 8 ? e.parentNode : e), new mi(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = Ad(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return Dn(e);
};
at.hydrate = function(e, t, n) {
  if (!$s(t)) throw Error(V(200));
  return Ws(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!pi(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = ff;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = uf(t, null, e, 1, n ?? null, l, !1, a, o), e[Ut] = t.current, el(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Fs(t);
};
at.render = function(e, t, n) {
  if (!$s(t)) throw Error(V(200));
  return Ws(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!$s(e)) throw Error(V(40));
  return e._reactRootContainer ? (Dn(function() {
    Ws(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ut] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = oi;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!$s(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Ws(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function mf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf);
    } catch (e) {
      console.error(e);
    }
}
mf(), fd.exports = at;
var he = fd.exports, pf, Lc = he;
pf = Lc.createRoot, Lc.hydrateRoot;
var hf = { exports: {} }, Us = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hh = p, Kh = Symbol.for("react.element"), Gh = Symbol.for("react.fragment"), qh = Object.prototype.hasOwnProperty, Yh = Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) qh.call(t, r) && !Xh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Kh, type: e, key: a, ref: o, props: l, _owner: Yh.current };
}
Us.Fragment = Gh;
Us.jsx = gf;
Us.jsxs = gf;
hf.exports = Us;
var s = hf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zh = {
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
const Jh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...Zh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Jh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([y, g]) => p.createElement(y, g)),
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
const yf = Z("AlertCircle", [
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
const eg = Z("AlertTriangle", [
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
const tg = Z("ArrowDownNarrowWide", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = Z("ArrowUpDown", [
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
const lg = Z("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = Z("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sg = Z("Box", [
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
const ag = Z("Calendar", [
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
const og = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = Z("Download", [
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
const dg = Z("Eraser", [
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
const gi = Z("FileJson", [
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
const ug = Z("FileText", [
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
const fg = Z("Folder", [
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
const mg = Z("Info", [
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
const pg = Z("Lasso", [
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
const kf = Z("LayoutGrid", [
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
const hg = Z("LayoutList", [
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
const gg = Z("Link2Off", [
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
const yg = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = Z("Maximize", [
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
const wg = Z("Menu", [
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
const xg = Z("Minimize", [
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
const _g = Z("MoreVertical", [
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
const kg = Z("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = Z("RefreshCw", [
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
const Sg = Z("ScanLine", [
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
const yn = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = Z("Settings", [
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
const bf = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = Z("Star", [
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
const jg = Z("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = Z("Tag", [
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
const Qt = Z("Trash2", [
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
const bg = Z("Trash", [
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
const Cg = Z("Type", [
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
const Eg = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = Z("Upload", [
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
const Mg = Z("Workflow", [
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
const fe = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = Z("ZoomIn", [
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
const Tg = Z("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = te;
async function re(e) {
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
const Cf = (e) => typeof e == "object" && e !== null, Rc = (e) => {
  if (typeof e == "string")
    return e;
  if (Cf(e) && typeof e.message == "string")
    return e.message;
};
async function Bs(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (Cf(t)) {
      const r = "error" in t ? t.error : void 0, l = Rc(r), a = "message" in t ? Rc(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const Lg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await re(e)).home;
}, Te = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  p.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let Cs = !1;
const Ag = (e) => {
  Cs = e, Cs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Rg = (...e) => {
  Cs && console.log("[Meld]", ...e);
}, Dg = (...e) => {
  Cs && console.warn("[Meld]", ...e);
}, Pg = (...e) => {
  console.error("[Meld]", ...e);
}, z = {
  log: Rg,
  warn: Dg,
  error: Pg,
  init: Ag
}, ts = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return re(a);
}, Ef = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return re(t);
}, zg = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await re(n);
}, yo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return re(t);
}, Nf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return re(t);
}, Dc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await re(n);
}, Og = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(`/meld/suggest-parents?id=${e}${n}`);
  try {
    return await re(r);
  } catch {
    return [];
  }
}, yi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await re(t);
  } catch {
    return [];
  }
}, Fg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await re(n);
}, $g = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return re(n);
}, Mf = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await re(r);
}, Wg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return re(t);
}, Ug = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return re(t);
}, wa = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, If = async (e, t, n, r, l) => {
  const a = await te.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok) {
    let y = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    try {
      await re(a.clone());
    } catch (g) {
      const k = g instanceof Error ? g.message : String(g);
      k && (y = `Failed to fetch image ${e}: ${k}`);
    }
    throw new Error(y);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let y = `Image ${e}: server returned JSON instead of binary data`;
    try {
      await re(a.clone()), y = `Image ${e}: server returned a JSON response on the binary download path`;
    } catch (g) {
      const k = g instanceof Error ? g.message : String(g);
      k && (y = k);
    }
    throw new Error(y);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const y = c.match(/filename\*=([^;\s]+)/i);
    if (y != null && y[1]) {
      let g = y[1];
      const k = g.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      k != null && k[2] && (g = k[2]);
      try {
        d = wa(decodeURIComponent(g), i);
      } catch {
        const x = c.match(/filename="?([^"]+)"?/);
        x != null && x[1] && (d = wa(x[1], i));
      }
    } else if (c.includes("filename=")) {
      const g = c.match(/filename="?([^"]+)"?/);
      g != null && g[1] && (d = wa(g[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, Pc = 500, zc = 2 * 1024 * 1024 * 1024, Vg = async (e, t, n, r, l, a) => {
  const o = (await import("./jszip.min.js").then((w) => w.j)).default, i = new o(), c = e.length;
  if (c > Pc)
    throw new Error(
      `ZIP entry limit reached (${Pc} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, y = 0;
  for (const w of e) {
    a == null || a(h, c);
    const { blob: _, filename: f } = await If(
      w,
      t,
      n,
      r,
      l
    );
    if (y += _.size, y > zc)
      throw new Error(
        `ZIP size limit reached (${zc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let u = f;
    if (d.has(u)) {
      const m = u.lastIndexOf("."), v = m > 0 ? u.slice(0, m) : u, j = m > 0 ? u.slice(m) : "";
      let S = 2;
      for (; d.has(u); )
        u = `${v}_${S}${j}`, S++;
    }
    d.add(u), i.file(u, _), h += 1;
  }
  a == null || a(c, c);
  const g = await i.generateAsync({ type: "blob" }), k = window.URL.createObjectURL(g), x = document.createElement("a");
  x.href = k, x.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(x), x.click(), window.URL.revokeObjectURL(k), document.body.removeChild(x);
}, Bg = async (e, t, n, r, l) => {
  const { blob: a, filename: o } = await If(
    e,
    t,
    n,
    r,
    l
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Qg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return re(r);
}, Hg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return re(e);
}, Kg = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return re(e);
}, Gg = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return re(e);
}, qg = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return re(e);
}, Yg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await re(n);
}, Oc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await re(t);
}, Xg = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await re(r);
}, Zg = {
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
}, Tf = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await re(t);
  } catch (t) {
    return z.error("Failed to fetch settings, using defaults", t), Zg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Jg = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await re(n);
}, ey = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return re(e);
};
function Tr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const ty = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = Tr(e.images.filter((o) => !n.has(o.id))), l = Tr(
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
      const n = [...e.images, ...t.payload], r = Tr(n).sort(
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
      const { images: n, total: r, offset: l } = t.payload, a = Tr(n);
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
      const { images: n, total: r, offset: l } = t.payload, a = [...e.images, ...n], o = Tr(a);
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
function Lf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const ny = (e, t) => {
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
      const n = t.payload, r = Lf(n);
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
}, ry = (e, t) => {
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
}, ly = (e, t) => {
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
function Fc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const sy = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((y) => y.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, y = Lf(i), g = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((k) => k.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: y,
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Fc(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const y = (h + 1) % d.length, g = d[y];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Fc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || h === 0 && !c)
        return e;
      const y = (h - 1 + d.length) % d.length, g = d[y];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    default:
      return e;
  }
}, ay = [
  sy,
  ty,
  ry,
  ny,
  ly
];
function oy(e, t) {
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
  } : ay.reduce((n, r) => r(n, t), e);
}
const iy = {
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
function cy(e, t) {
  return oy(e, t);
}
const Af = p.createContext(void 0), dy = ({ children: e }) => {
  const [t, n] = p.useReducer(cy, iy), r = p.useRef(t.images.length), l = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (x, w, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = x;
      for (; m < Math.min(w, f) && _ === l.current; )
        try {
          const v = Math.min(u, f - m);
          z.log("Background fetch: starting chunk", {
            offset: m,
            limit: v
          });
          const j = await ts(
            m,
            v,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), m += j.images.length, j.images.length === 0 || m >= j.total)) break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (v) {
          z.error("Background fetch failed", v);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), w = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      z.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await ts(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - x;
      z.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, w);
    } catch (_) {
      z.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.searchQuery, t.viewScope, t.settings, o]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now();
    try {
      const w = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      z.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: f,
        isSearch: _
      });
      const u = await ts(
        w,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - x;
      z.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (w) {
      z.error("loadMoreImages: fetch failed", w), n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
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
      const x = await qg();
      n({ type: "SET_FAVORITES", payload: x });
    } catch (x) {
      z.error("Failed to load favorites", x);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds), _ = t.images.filter((f) => t.selectedIds.has(f.id)).some((f) => f.parent_id || f.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: x,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), y = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await yo(x)).restored_ids || x;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = p.useCallback(
    async (x, w) => {
      try {
        await Jg(x, w), n({ type: "SET_SETTINGS", payload: { [x]: w } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), k = p.useCallback(
    async (x) => {
      const w = t.images.find((m) => m.id === x);
      if (w && !w.is_minimal)
        return w;
      const _ = t.lineageImages.find((m) => m.id === x);
      if (_ && !_.is_minimal)
        return _;
      const f = a.current.get(x);
      if (f)
        return f;
      const u = (async () => {
        try {
          z.log("fetchFullImageDetails: fetching full data", { id: x });
          const m = await Ef(x);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(x);
        }
      })();
      return a.current.set(x, u), u;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const w = await Tf();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        z.error("Failed to load settings", w);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const x = () => {
      i();
    }, w = (f) => {
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
    return window.addEventListener("meld-refresh", x), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", x), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Af.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: y,
        updateSetting: g,
        fetchFullImageDetails: k
      },
      children: e
    }
  );
}, me = () => {
  const e = p.useContext(Af);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ht = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, vi = (e) => {
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
}, wi = async () => {
  const e = await te.fetchApi("/meld/tags");
  return re(e);
}, uy = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return re(t);
}, fy = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await re(t);
}, my = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await re(n);
}, py = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, hy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await Bs(n);
  if (!py(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, gy = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await re(l);
  } catch (a) {
    return z.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, yy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await re(l);
  } catch (a) {
    return z.error("Failed to fetch folder metadata", a), {};
  }
}, vy = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await re(r)).count;
  } catch {
    return 0;
  }
}, wy = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await re(t);
}, xy = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await re(e);
}, Rf = () => {
  const { dispatch: e } = me(), [t, n] = p.useState(() => {
    const C = localStorage.getItem("meld-import-config"), B = {
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
        const Q = JSON.parse(C);
        return { ...B, ...Q, tags: [] };
      } catch {
        return B;
      }
    return B;
  });
  p.useEffect(() => {
    const { tags: C, ...B } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(B));
  }, [t]);
  const [r, l] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [y, g] = p.useState([]), [k, x] = p.useState(""), [w, _] = p.useState(!1), [f, u] = p.useState(null), m = p.useRef(!1), v = (C) => {
    C.target === C.currentTarget && (m.current = !0);
  }, j = (C) => {
    C.target === C.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const B = await Lg();
        n((Q) => Q.custom_path ? Q : { ...Q, custom_path: B });
      } catch (B) {
        z.error("Failed to fetch home directory:", B);
      }
    })();
  }, []), p.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const Q = t.type === "custom" ? t.custom_path : t.subfolder;
      if (z.log(`loadFolders started. Path: "${Q}", Type: "${t.type}"`), t.type === "custom" && !Q) {
        z.log("Custom path is empty, skipping load."), l([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const I = Q, M = t.type;
      try {
        z.log("Step 1: Fast load starting...");
        const A = await gy(t.type, Q, !0, C.signal);
        if (C.signal.aborted) {
          z.log("Step 1: Aborted.");
          return;
        }
        z.log(
          `Step 1 complete. Found ${A.folders.length} folders, ${A.images.length} images.`
        ), l(A.folders), o(A.images), c(null);
        const $ = A.folders.map((N) => N.name);
        $.length > 0 && (z.log(`Step 2: Metadata fetch starting for ${$.length} folders...`), yy(M, I, $, C.signal).then((N) => {
          if (C.signal.aborted) {
            z.log("Step 2: Aborted.");
            return;
          }
          z.log("Step 2: Metadata fetch complete."), l(
            (P) => P.map((W) => {
              const O = N[W.name];
              return O ? { ...W, count: O.count, preview: O.preview } : W;
            })
          );
        }).catch((N) => {
          N.name !== "AbortError" && z.error("Step 2: Metadata fetch failed:", N);
        })), z.log("Step 3: Path image count starting..."), vy(M, I, C.signal).then((N) => {
          if (C.signal.aborted) {
            z.log("Step 3: Aborted.");
            return;
          }
          z.log(`Step 3: Path image count complete: ${N}`), c(N);
        }).catch((N) => {
          N.name !== "AbortError" && z.error("Step 3: Path image count failed:", N);
        });
      } catch (A) {
        if (A.name === "AbortError") {
          z.log("Request aborted.");
          return;
        }
        z.error("Failed to load folders:", A), l([]), o([]), c(0);
      } finally {
        C.signal.aborted || h(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = p.useCallback(async () => {
    _(!0);
    try {
      const C = await wi();
      g(C);
    } catch (C) {
      z.error("Failed to fetch tags:", C);
    } finally {
      _(!1);
    }
  }, []);
  p.useEffect(() => {
    S();
  }, [S]), Te({
    onEscape: p.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const b = p.useMemo(() => y.filter(
    (C) => C.name.toLowerCase().includes(k.toLowerCase()) && !t.tags.includes(C.name)
  ), [y, k, t.tags]), T = (C) => {
    const B = C.trim();
    B && !t.tags.includes(B) && (n({ ...t, tags: [...t.tags, B] }), x(""));
  }, L = (C) => {
    n({ ...t, tags: t.tags.filter((B) => B !== C) });
  }, R = (C) => {
    C.key === "Enter" && k.trim() && (C.preventDefault(), T(k.trim()));
  }, E = async () => {
    try {
      await wy(t), e({
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
      z.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, D = (C) => {
    if (t.type === "custom") {
      const B = t.custom_path.includes("\\") ? "\\" : "/", Q = t.custom_path.endsWith(B) ? `${t.custom_path}${C}` : `${t.custom_path}${B}${C}`;
      n({ ...t, custom_path: Q });
    } else {
      const B = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: B });
    }
  }, F = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", B = t.custom_path.split(C);
      if (B.length > 1) {
        B.pop();
        let Q = B.join(C);
        Q === "" && C === "/" && (Q = "/"), n({ ...t, custom_path: Q });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return he.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
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
                      children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
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
                            onClick: () => L(C),
                            children: /* @__PURE__ */ s.jsx(fe, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: k,
                            onChange: (C) => x(C.target.value),
                            onKeyDown: R
                          }
                        ),
                        k.trim() && !t.tags.includes(k.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => T(k),
                            children: /* @__PURE__ */ s.jsx(Vs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? k && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        k
                      ] }) : b.map((C) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => T(C.name),
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
                        onClick: E,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(dl, { size: 16 }),
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
                          onClick: F,
                          children: [
                            /* @__PURE__ */ s.jsx(_f, { size: 16 }),
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
                          onClick: () => D(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ht(C.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(fg, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(hi, { size: 14 })
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
                              src: ht(C, 120),
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
                      children: /* @__PURE__ */ s.jsx(fe, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx("img", { src: ht(f, 400), alt: f.filename })
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
}, Df = "meld-download-options", _y = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function ky() {
  try {
    const e = localStorage.getItem(Df);
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
function Sy(e) {
  try {
    localStorage.setItem(Df, JSON.stringify(e));
  } catch {
  }
}
const jy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = p.useState(() => ky()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, y] = p.useState(!1), [g, k] = p.useState(null), [x, w] = p.useState(String(c)), _ = p.useRef(!1);
  p.useEffect(() => {
    Sy(r);
  }, [r]), p.useEffect(() => {
    w(String(c));
  }, [c]);
  const f = (L) => {
    L.target === L.currentTarget && (_.current = !0);
  }, u = (L) => {
    L.target === L.currentTarget && _.current && (h || n()), _.current = !1;
  };
  Te({
    onEscape: () => {
      h || n();
    }
  });
  const m = (L) => {
    w(L);
    const R = Number(L);
    if (!Number.isFinite(R) || R <= 0)
      return;
    const F = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(R)));
    l((C) => ({ ...C, resizeValue: F }));
  }, v = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    y(!0);
    const L = e.length;
    k({ current: 0, total: L });
    try {
      if (a === "zip")
        await Vg(
          e,
          o,
          i,
          c,
          d,
          (R, E) => {
            k({ current: R, total: E });
          }
        );
      else {
        let R = 0;
        for (const E of e)
          k({ current: R, total: L }), await Bg(
            E,
            o,
            i,
            c,
            d
          ), R += 1, k({ current: R, total: L }), await new Promise((D) => requestAnimationFrame(() => D()));
      }
      n(), t == null || t();
    } catch (R) {
      z.error("Download failed:", R), alert("Failed to download images.");
    } finally {
      y(!1), k(null);
    }
  }, j = i === "percent" ? "%" : "px", S = 1, b = i === "percent" ? 99 : 99999, T = i === "percent" ? "1-99" : "Max edge (px)";
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: u,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (L) => L.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(cl, { size: 18 }),
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
                disabled: h,
                children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
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
                          onChange: () => l((L) => ({ ...L, format: "zip" })),
                          disabled: h
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
                          onChange: () => l((L) => ({ ...L, format: "raw" })),
                          disabled: h
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
                          onChange: () => l((L) => ({ ...L, resizeMode: "none" })),
                          disabled: h
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
                          onChange: () => l((L) => ({ ...L, resizeMode: "percent", resizeValue: 50 })),
                          disabled: h
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
                          onChange: () => l((L) => ({ ...L, resizeMode: "max_edge", resizeValue: 1024 })),
                          disabled: h
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
                        min: S,
                        max: b,
                        step: 1,
                        value: x,
                        placeholder: T,
                        onChange: (L) => m(L.target.value),
                        disabled: h,
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
                        onChange: (L) => l((R) => ({
                          ...R,
                          resizeFilter: L.target.value
                        })),
                        disabled: h,
                        style: {
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color, #555)",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          color: "inherit",
                          fontSize: "13px"
                        },
                        children: _y.map((L) => /* @__PURE__ */ s.jsx("option", { value: L.value, children: L.label }, L.value))
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
                        onChange: (L) => l((R) => ({ ...R, removeMetadata: L.target.checked })),
                        disabled: h
                      }
                    ),
                    "Remove metadata (ComfyUI workflow data) from downloaded images"
                  ]
                }
              )
            ] })
          ] }),
          h && g && /* @__PURE__ */ s.jsxs(
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
                    "aria-valuemax": 100,
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
                disabled: h,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: v,
                disabled: h,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: h && g ? `Downloading ${Math.min(g.current + 1, g.total)}/${g.total}...` : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(cl, { size: 16 }),
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
}, $c = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const y = typeof d == "function" ? d(t) : d;
    if (!Object.is(y, t)) {
      const g = t;
      t = h ?? (typeof y != "object" || y === null) ? y : Object.assign({}, t, y), n.forEach((k) => k(t, g));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, by = (e) => e ? $c(e) : $c, Cy = (e) => e;
function Ey(e, t = Cy) {
  const n = rn.useSyncExternalStore(
    e.subscribe,
    rn.useCallback(() => t(e.getState()), [e, t]),
    rn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return rn.useDebugValue(n), n;
}
const Ny = (e) => {
  const t = by(e), n = (r) => Ey(t, r);
  return Object.assign(n, t), n;
}, My = (e) => Ny;
function Iy(e, t) {
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
const vo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return vo(r)(n);
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
        return vo(r)(n);
      }
    };
  }
}, Ty = (e, t) => (n, r, l) => {
  let a = {
    storage: Iy(() => window.localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, f) => ({
      ...f,
      ..._
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(..._);
      },
      r,
      l
    );
  const y = () => {
    const _ = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, g = l.setState;
  l.setState = (_, f) => (g(_, f), y());
  const k = e(
    (..._) => (n(..._), y()),
    r,
    l
  );
  l.getInitialState = () => k;
  let x;
  const w = () => {
    var _, f;
    if (!h) return;
    const u = ++i;
    o = !1, c.forEach((v) => {
      var j;
      return v((j = r()) != null ? j : k);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : k)) || void 0;
    return vo(h.getItem.bind(h))(a.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              v.state,
              v.version
            );
            return j instanceof Promise ? j.then((S) => [!0, S]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, v.state];
      return [!1, void 0];
    }).then((v) => {
      var j;
      if (u !== i)
        return;
      const [S, b] = v;
      if (x = a.merge(
        b,
        (j = r()) != null ? j : k
      ), n(x, !0), S)
        return y();
    }).then(() => {
      u === i && (m == null || m(x, void 0), x = r(), o = !0, d.forEach((v) => v(x)));
    }).catch((v) => {
      u === i && (m == null || m(void 0, v));
    });
  };
  return l.persist = {
    setOptions: (_) => {
      a = {
        ...a,
        ..._
      }, _.storage && (h = _.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => w(),
    hasHydrated: () => o,
    onHydrate: (_) => (c.add(_), () => {
      c.delete(_);
    }),
    onFinishHydration: (_) => (d.add(_), () => {
      d.delete(_);
    })
  }, a.skipHydration || w(), x || k;
}, Ly = Ty, Ay = [
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
let Ol = null;
const se = My()(
  Ly(
    (e) => ({
      isOpen: !1,
      slots: Ay,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((h) => h !== n);
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
          const h = d.filter((y) => !l.has(y));
          h.length !== d.length && (a[c] = h, o = !0);
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
        Ol && clearTimeout(Ol), e({ toastMessage: t, toastType: n }), Ol = setTimeout(() => {
          e({ toastMessage: null }), Ol = null;
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
), Pf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return re(e);
}, zf = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return re(t);
}, Of = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", or = (e) => {
  const t = Of(e);
  return t === "meldimageloader" || t === "loadimage";
}, Qr = (e) => Of(e) === "loadimagemask", Ry = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), xi = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, l) => {
    var w, _, f, u, m;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    z.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await zf(t);
    z.log("Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find((S) => or(S.type));
        j && (o = String(j.id));
      }
      const v = a.nodes.find((j) => Qr(j.type));
      v && (i = String(v.id));
    } else {
      if (!o)
        for (const v in a) {
          const j = a[v];
          if (or(j.class_type)) {
            o = v;
            break;
          }
        }
      for (const v in a) {
        const j = a[v];
        if (Qr(j.class_type)) {
          i = v;
          break;
        }
      }
    }
    if (z.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw z.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const v = window.app;
      if (typeof v != "object" || v === null || !("graph" in v))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const j = v;
      if (!j.graph || !Ry(j.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const S = t.replace(/\.json$/i, "");
      let b = !1;
      const T = document.querySelectorAll(".workflow-tab");
      for (const E of Array.from(T)) {
        const D = E.querySelector(".workflow-label"), F = ((w = D == null ? void 0 : D.textContent) == null ? void 0 : w.trim()) || ((_ = E.textContent) == null ? void 0 : _.trim()) || "";
        if (F === S || F === t || F.startsWith(`${S} `) || F.startsWith(`${S}•`)) {
          E.click(), b = !0;
          break;
        }
      }
      b || await j.loadGraphData(a, !0, !0, t), await new Promise((E) => setTimeout(E, 200));
      const L = j.graph._nodes;
      z.log("Active graph nodes count:", L.length);
      const R = L.find(
        (E) => String(E.id) === o || or(E.type)
      );
      if (R) {
        const E = (f = R.widgets) == null ? void 0 : f.find((D) => D.name === "image");
        z.log("Updating loader node widget:", {
          nodeId: R.id,
          type: R.type,
          imagePath: d
        }), E && (E.value = d, typeof E.callback == "function" && E.callback(d));
      } else
        z.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const E = L.find(
          (D) => String(D.id) === i || Qr(D.type)
        );
        if (z.log("Updating mask node widget:", {
          nodeId: E == null ? void 0 : E.id,
          maskFilename: r
        }), E) {
          const D = (u = E.widgets) == null ? void 0 : u.find((C) => C.name === "image");
          D && (D.value = `${r} [temp]`);
          const F = (m = E.widgets) == null ? void 0 : m.find((C) => C.name === "channel");
          F && (F.value = "red");
        } else
          z.warn("LoadImageMask not found in active graph after loading");
      }
      j.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof j.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await j.queuePrompt(0);
        return;
      } catch (E) {
        throw z.error("Failed to queue workflow:", E), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = d, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const y = window.api;
    if (!(typeof y == "object" && y !== null && "fetchApi" in y && typeof y.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const k = y, x = await k.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
        client_id: typeof k.clientId == "string" ? k.clientId : void 0
      })
    });
    return Bs(x);
  },
  []
) }), Ff = (e) => !!(e && Array.isArray(e.widgets));
function Dy(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function ul(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = Dy(e), l = n.graph._nodes.filter((d) => or(d.type));
  if (l.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = l[0];
  if (t) {
    const d = l.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!Ff(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Py = () => {
  const { dispatch: e } = me();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, y;
      z.log("[Meld-Debug] injectMaskToGraph called with:", r), ul(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return z.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(l.graph._nodes))
        return z.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = l.graph._nodes.filter((g) => Qr(g.type));
      if (a.length === 0)
        return z.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Ff(o))
        return z.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((g) => g.name === "image"), c = `${r} [temp]`;
      z.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((g) => g.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (y = (h = l.graph).afterChange) == null || y.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Fl(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function zy(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = wo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++) {
    const y = c.data[h * 4] ?? 0;
    d[h] = y > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function wo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function Oy(e) {
  return e.data.every((t) => t === 0);
}
const Wc = (e) => e === "rect" || e === "ellipse" || e === "lasso", _i = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = me(), i = p.useMemo(() => a.images.find((U) => U.id === e) ?? a.lineageImages.find((U) => U.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = Py(), { executeWorkflow: y } = xi();
  Te({ onEscape: l });
  const g = p.useRef(null), k = p.useRef(null), x = p.useRef(null), w = p.useRef(null), [_, f] = p.useState(!1), [u, m] = p.useState(() => {
    const U = localStorage.getItem("meld-mask-tool");
    return Wc(U) ? U : "rect";
  });
  p.useEffect(() => {
    Wc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [v, j] = p.useState({ x: 0, y: 0 }), [S, b] = p.useState({ x: 0, y: 0 }), [T, L] = p.useState([]), [R, E] = p.useState(null), [D, F] = p.useState(!1), [C, B] = p.useState(1), [Q, I] = p.useState({ x: 0, y: 0 }), [M, A] = p.useState(!1), [$, N] = p.useState(!1), P = p.useRef(null), W = p.useCallback(() => {
    const U = x.current, K = k.current;
    if (!U || !K) return null;
    const ee = K.getBoundingClientRect(), Y = U.naturalWidth, ne = U.naturalHeight;
    if (!Y || !ne) return null;
    const oe = Y / ne, Ne = ee.width / ee.height;
    let pe, _e, we = 0, $e = 0;
    return oe > Ne ? (pe = ee.width, _e = ee.width / oe, $e = (ee.height - _e) / 2) : (_e = ee.height, pe = ee.height * oe, we = (ee.width - pe) / 2), {
      left: we,
      top: $e,
      width: pe,
      height: _e
    };
  }, []), O = p.useCallback(
    (U, K, ee, Y) => {
      if (!U) return K;
      const ne = U.getBoundingClientRect(), oe = ne.width / 2, Ne = ne.height / 2, pe = {
        x: (oe - K.x) / ee,
        y: (Ne - K.y) / ee
      };
      return { x: oe - pe.x * Y, y: Ne - pe.y * Y };
    },
    []
  ), H = p.useCallback(() => {
    B((U) => {
      const K = Math.min(U * 1.2, 20);
      return I((ee) => O(k.current, ee, U, K)), K;
    });
  }, [O]), J = p.useCallback(() => {
    B((U) => {
      const K = Math.max(0.1, U / 1.2);
      return I((ee) => O(k.current, ee, U, K)), K;
    });
  }, [O]), ie = p.useCallback(() => {
    const U = g.current;
    if (!U) return;
    const K = U.getContext("2d");
    if (!K) return;
    K.clearRect(0, 0, U.width, U.height);
    const ee = getComputedStyle(document.documentElement), Y = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = W();
    if (w.current && ne && (K.save(), K.globalAlpha = 0.5, K.drawImage(
      w.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), K.restore()), _) {
      const oe = Math.min(v.x, S.x), Ne = Math.min(v.y, S.y), pe = Math.abs(v.x - S.x), _e = Math.abs(v.y - S.y);
      if (K.save(), K.globalAlpha = 0.3, K.fillStyle = Y, K.strokeStyle = "white", K.lineWidth = 2, K.setLineDash([5, 5]), K.beginPath(), u === "rect")
        K.rect(oe, Ne, pe, _e);
      else if (u === "ellipse") {
        const we = oe + pe / 2, $e = Ne + _e / 2;
        K.ellipse(we, $e, pe / 2, _e / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && T.length > 1) {
        const we = T[0];
        if (we) {
          K.moveTo(we.x, we.y);
          for (let $e = 1; $e < T.length; $e++) {
            const Yt = T[$e];
            Yt && K.lineTo(Yt.x, Yt.y);
          }
          K.closePath();
        }
      }
      K.fill(), K.globalAlpha = 1, K.stroke(), K.restore();
    }
  }, [_, v, S, u, T, W]), [de, Pe] = p.useState([]), ue = p.useMemo(() => de.length > 0 ? de[de.length - 1] : x.current ? Fl(x.current.naturalWidth, x.current.naturalHeight) : null, [de]);
  p.useEffect(() => {
    var U;
    (U = x.current) != null && U.naturalWidth && de.length === 0 && Pe([
      Fl(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [de.length]);
  const Et = p.useCallback(() => {
    var U;
    (U = x.current) != null && U.naturalWidth && de.length === 0 && Pe([
      Fl(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [de.length]), q = p.useRef(!1), Kt = p.useRef(0), Gt = (U) => {
    U.target === U.currentTarget && (q.current = !0);
  }, qt = (U) => {
    U.target === U.currentTarget && q.current && !_ && l(), q.current = !1;
  };
  p.useEffect(() => {
    if (!ue) return;
    w.current || (w.current = document.createElement("canvas"));
    const U = w.current;
    U.width = ue.width, U.height = ue.height;
    const K = U.getContext("2d");
    if (!K) return;
    const ee = wo(ue, [255, 255, 255], 255);
    K.putImageData(ee, 0, 0), ie();
  }, [ue, ie]), p.useEffect(() => {
    _ && ie();
  }, [_, ie]), p.useEffect(() => {
    const U = k.current;
    if (!U) return;
    const K = (ee) => {
      ee.preventDefault();
      const Y = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      B((ne) => {
        const oe = Math.min(Math.max(0.1, ne * Y), 20);
        return I((Ne) => {
          const pe = U.getBoundingClientRect(), _e = ee.clientX - pe.left, we = ee.clientY - pe.top, $e = {
            x: (_e - Ne.x) / ne,
            y: (we - Ne.y) / ne
          };
          return {
            x: _e - $e.x * oe,
            y: we - $e.y * oe
          };
        }), oe;
      });
    };
    return U.addEventListener("wheel", K, { passive: !1 }), () => U.removeEventListener("wheel", K);
  }, []), p.useEffect(() => {
    if (!$) return;
    const U = (ee) => {
      if (P.current) {
        const Y = ee.clientX - P.current.clientX, ne = ee.clientY - P.current.clientY;
        I({
          x: P.current.panX + Y,
          y: P.current.panY + ne
        });
      }
    }, K = () => {
      N(!1), P.current = null;
    };
    return window.addEventListener("mousemove", U), window.addEventListener("mouseup", K), () => {
      window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", K);
    };
  }, [$]), p.useEffect(() => {
    const U = () => {
      k.current && g.current && (g.current.width = k.current.clientWidth, g.current.height = k.current.clientHeight, ie());
    }, K = new ResizeObserver(U);
    return k.current && K.observe(k.current), U(), () => K.disconnect();
  }, [ie]);
  const On = (U) => {
    var we;
    const K = U.button === 2, ee = U.button === 1, Y = M && U.button === 0;
    if (K || ee || Y) {
      U.preventDefault(), U.stopPropagation(), P.current = {
        panX: Q.x,
        panY: Q.y,
        clientX: U.clientX,
        clientY: U.clientY
      }, N(!0);
      return;
    }
    if (U.button !== 0 || _ || D || Date.now() - Kt.current < 100)
      return;
    U.preventDefault();
    const ne = W(), oe = (we = k.current) == null ? void 0 : we.getBoundingClientRect();
    if (!ne || !oe) return;
    f(!0);
    const Ne = {
      x: (U.clientX - oe.left - Q.x) / C,
      y: (U.clientY - oe.top - Q.y) / C
    }, pe = Math.max(ne.left, Math.min(Ne.x, ne.left + ne.width)), _e = Math.max(ne.top, Math.min(Ne.y, ne.top + ne.height));
    j({ x: pe, y: _e }), b({ x: pe, y: _e }), L(u === "lasso" ? [{ x: pe, y: _e }] : []), E(null);
  };
  p.useEffect(() => {
    if (!_) return;
    const U = (ee) => {
      var _e;
      const Y = W(), ne = (_e = k.current) == null ? void 0 : _e.getBoundingClientRect();
      if (!Y || !ne) return;
      const oe = {
        x: (ee.clientX - ne.left - Q.x) / C,
        y: (ee.clientY - ne.top - Q.y) / C
      }, Ne = Math.max(Y.left, Math.min(oe.x, Y.left + Y.width)), pe = Math.max(Y.top, Math.min(oe.y, Y.top + Y.height));
      b({ x: Ne, y: pe }), u === "lasso" && L((we) => [...we, { x: Ne, y: pe }]);
    }, K = (ee) => {
      var oe;
      const Y = W(), ne = (oe = k.current) == null ? void 0 : oe.getBoundingClientRect();
      if (Y && ne && ue && x.current) {
        const Ne = {
          x: (ee.clientX - ne.left - Q.x) / C,
          y: (ee.clientY - ne.top - Q.y) / C
        }, pe = Math.max(Y.left, Math.min(Ne.x, Y.left + Y.width)), _e = Math.max(Y.top, Math.min(Ne.y, Y.top + Y.height)), we = Math.min(v.x, pe), $e = Math.min(v.y, _e), Yt = Math.abs(v.x - pe), kr = Math.abs(v.y - _e), xm = u === "lasso";
        if (Yt > 5 || kr > 5 || xm && T.length > 2) {
          const _m = x.current.naturalWidth, km = x.current.naturalHeight, Fn = _m / Y.width, $n = km / Y.height, Sm = zy(ue, (_n) => {
            if (u === "rect") {
              const kn = (we - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, xl = kr * $n;
              _n.rect(kn, Sn, Xt, xl);
            } else if (u === "ellipse") {
              const kn = (we - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, xl = kr * $n, jm = kn + Xt / 2, bm = Sn + xl / 2;
              _n.ellipse(jm, bm, Xt / 2, xl / 2, 0, 0, 2 * Math.PI);
            } else if (u === "lasso" && T.length > 2) {
              const kn = T[0];
              if (!kn) return;
              _n.moveTo(
                (kn.x - Y.left) * Fn,
                (kn.y - Y.top) * $n
              );
              for (let Sn = 1; Sn < T.length; Sn++) {
                const Xt = T[Sn];
                Xt && _n.lineTo((Xt.x - Y.left) * Fn, (Xt.y - Y.top) * $n);
              }
              _n.closePath();
            }
          });
          Pe((_n) => [..._n, Sm]);
        }
      }
      Kt.current = Date.now(), f(!1), L([]);
    };
    return window.addEventListener("mousemove", U), window.addEventListener("mouseup", K), () => {
      window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", K);
    };
  }, [
    _,
    v.x,
    v.y,
    W,
    ue,
    u,
    T,
    Q.x,
    Q.y,
    C
  ]);
  const _r = p.useCallback(() => {
    de.length > 1 && Pe((U) => U.slice(0, -1));
  }, [de.length]);
  p.useEffect(() => {
    const U = (Y) => {
      if (!Y) return !1;
      const ne = Y, oe = ne.tagName;
      return oe === "INPUT" || oe === "TEXTAREA" || oe === "BUTTON" || oe === "SELECT" || oe === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, K = (Y) => {
      Y.code === "Space" && !Y.repeat && (U(Y.target) || (Y.preventDefault(), A(!0))), (Y.metaKey || Y.ctrlKey) && Y.key.toLowerCase() === "z" && !Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), _r()) : Y.key === "Escape" && (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (Y) => {
      Y.code === "Space" && (U(Y.target) || (Y.preventDefault(), A(!1)));
    };
    return window.addEventListener("keydown", K, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", K, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [_r, l]);
  const wl = () => {
    if (x.current) {
      const U = Fl(
        x.current.naturalWidth,
        x.current.naturalHeight
      );
      Pe((K) => [...K, U]);
    }
  }, be = async () => {
    if (!ue || !x.current) return null;
    F(!0);
    try {
      const { width: U, height: K } = ue, ee = document.createElement("canvas");
      ee.width = U, ee.height = K;
      const Y = ee.getContext("2d");
      if (!Y) return null;
      const ne = wo(ue, [255, 255, 255], 255);
      Y.putImageData(ne, 0, 0);
      const oe = await new Promise(
        (kr) => ee.toBlob(kr, "image/png")
      );
      if (!oe) return null;
      const pe = `meld_mask_${Date.now()}.png`, _e = new File([oe], pe, { type: "image/png" }), we = new FormData();
      we.append("image", _e), we.append("type", "temp"), we.append("overwrite", "true");
      const $e = await te.fetchApi("/upload/image", {
        method: "POST",
        body: we
      });
      return (await Bs($e)).name ?? null;
    } catch (U) {
      return z.error("Error uploading mask:", U), null;
    } finally {
      F(!1);
    }
  }, it = async () => {
    if (!d) return;
    const U = await be();
    U && h(d, U) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, vt = async () => {
    if (!d) return;
    const U = await be();
    U && (t === "run_sequence" && n ? (await y(
      n.workflowName,
      d,
      U,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: U,
        onSuccess: r
      }
    }));
  }, Dt = p.useMemo(() => ue && !Oy(ue), [ue]);
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: Gt,
      onMouseUp: qt,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (U) => U.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(bf, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(cg, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(pg, { size: 18 }),
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
                    children: /* @__PURE__ */ s.jsx(Tg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      B(1), I({ x: 0, y: 0 });
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
                    onClick: H,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(Ig, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: k,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: On,
                  onContextMenu: (U) => U.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: $ ? "grabbing" : M ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${Q.x}px, ${Q.y}px) scale(${C})`,
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
                            ref: x,
                            src: vi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (U) => U.preventDefault(),
                            onLoad: Et
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: g,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (U) => U.preventDefault()
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
                      onClick: it,
                      disabled: !Dt || D,
                      type: "button",
                      children: [
                        D ? /* @__PURE__ */ s.jsx(Ac, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(dt, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: vt,
                      disabled: !Dt || D,
                      type: "button",
                      children: [
                        D ? /* @__PURE__ */ s.jsx(Ac, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(dl, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: _r,
                      disabled: de.length <= 1 || D,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Eg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: wl,
                      disabled: !Dt || D,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(fe, { size: 16 }),
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
}, $f = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: l,
  onClose: a
}) => {
  Te({ onEscape: a });
  const o = e[t];
  return p.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ s.jsx(
    _i,
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
}, Wf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, $l = (e) => e.replace(/^["']|["']$/g, ""), Fy = (e) => e.trim() ? Wf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, $y = (e, t) => {
  const n = Wf(e), r = {
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
      const o = $l(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = $l(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = $l(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = $l(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Wy = () => {
  const { state: e, dispatch: t, updateSetting: n } = me(), [r, l] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState({}), [d, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [y, g] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [k, x] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [w, _] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [m, v] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, S] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, T] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [L, R] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [E, D] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [F, C] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [B, Q] = p.useState(
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
      const H = Object.keys(a).filter(
        (J) => a[J] !== e.settings[J] && !i[J]
      );
      if (H.length > 0)
        for (const J of H)
          await n(J, a[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (H, J) => {
      o((ie) => ({
        ...ie,
        [H]: !J
      }));
    },
    handleNumberChange: (H, J, ie, de) => {
      H === "gallery.initial_load_count" ? h(J) : H === "gallery.max_load_count" ? g(J) : H === "gallery.lineage_max_depth" ? x(J) : H === "viewer.thumbnail_window_size" ? _(J) : H === "gallery.trash_retention_days" ? u(J) : H === "gallery.auto_link_phash_threshold" ? v(J) : H === "gallery.suggest_phash_threshold" ? S(J) : H === "viewer.details.max_positive_prompt_lines" ? T(J) : H === "viewer.details.max_negative_prompt_lines" ? R(J) : H === "fullscreen.details.max_positive_prompt_lines" ? D(J) : H === "fullscreen.details.max_negative_prompt_lines" ? C(J) : H === "sidebar.thumbnail_size" && Q(J);
      const Pe = Number.parseInt(J, 10);
      if (!Number.isNaN(Pe)) {
        let ue = Pe;
        ie !== void 0 && ue < ie && (ue = ie), de !== void 0 && ue > de && (ue = de), o((Et) => ({
          ...Et,
          [H]: ue
        }));
      }
    },
    handleNumberBlur: (H) => {
      !H || !H.key || (H.key === "gallery.initial_load_count" ? h(a["gallery.initial_load_count"].toString()) : H.key === "gallery.max_load_count" ? g(a["gallery.max_load_count"].toString()) : H.key === "gallery.lineage_max_depth" ? x(a["gallery.lineage_max_depth"].toString()) : H.key === "viewer.thumbnail_window_size" ? _(a["viewer.thumbnail_window_size"].toString()) : H.key === "gallery.trash_retention_days" ? u(a["gallery.trash_retention_days"].toString()) : H.key === "gallery.auto_link_phash_threshold" ? v(a["gallery.auto_link_phash_threshold"].toString()) : H.key === "gallery.suggest_phash_threshold" ? S(a["gallery.suggest_phash_threshold"].toString()) : H.key === "viewer.details.max_positive_prompt_lines" ? T(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : H.key === "viewer.details.max_negative_prompt_lines" ? R(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : H.key === "fullscreen.details.max_positive_prompt_lines" ? D(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : H.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : H.key === "sidebar.thumbnail_size" && Q(a["sidebar.thumbnail_size"].toString()));
    },
    handleResetShortcuts: () => {
      o((H) => ({
        ...H,
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
              await ey(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (H) {
              z.error("Failed to clear thumbnail cache:", H), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (H) => typeof H != "string" ? !1 : Fy(H),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: y,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: w,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: L,
    fullscreenMaxPositivePromptLinesInput: E,
    fullscreenMaxNegativePromptLinesInput: F,
    thumbnailSizeInput: B
  };
}, X = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Uy = ({
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
function Rt({ size: e = 24, color: t, children: n, ...r }) {
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
function Uf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Vf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Bf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Qf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Hf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Uf, {})
  ] });
}
function Kf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Gf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Uf, {})
  ] });
}
function qf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Yf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Xf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Zf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Jf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Vf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Kf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Gf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Qf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Hf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Bf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Yf },
  { id: "edit_notes", label: "Edit Notes", icon: Xf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: qf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Zf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Qt }
], Vy = ({
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
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Jf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), By = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Qy = ({
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
              onChange: (h) => {
                t((y) => ({
                  ...y,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(e[c] || "");
                r((y) => ({
                  ...y,
                  [c]: !h
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
}, Hy = ({
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
  suggestPhashThresholdInput: h
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
            onChange: (y) => l((g) => ({
              ...g,
              "gallery.matching_strategy": y.target.value
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
            onChange: (y) => t("gallery.auto_link_phash_threshold", y.target.value, 0, 100),
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
            value: h,
            min: 0,
            max: 100,
            onChange: (y) => t("gallery.suggest_phash_threshold", y.target.value, 0, 100),
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
            onChange: (y) => t("gallery.lineage_max_depth", y.target.value, 1, 10),
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
            onChange: (y) => t("gallery.trash_retention_days", y.target.value, 0, 365),
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
] }), Ky = ({
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
] }), em = () => {
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
    handleResetShortcuts: h,
    handleViewTrash: y,
    handleClearThumbnailCache: g,
    validateShortcut: k,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: w,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: v,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: T,
    thumbnailSizeInput: L
  } = Wy();
  Te({ onEscape: o });
  const R = p.useRef(!1), E = (B) => {
    B.target === B.currentTarget && (R.current = !0);
  }, D = (B) => {
    B.target === B.currentTarget && R.current && o(), R.current = !1;
  }, F = [
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
          Hy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: y,
            handleClearThumbnailCache: g,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: m,
            suggestPhashThresholdInput: v
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Vy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: x,
            maxLoadCountInput: w
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Ky,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Uy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: T
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Qy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: k,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(By, {});
      default:
        return null;
    }
  };
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: E,
        onMouseUp: D,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (B) => B.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: F.map((B) => /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === B.id ? "active" : ""}`,
                onClick: () => t(B.id),
                children: B.label
              },
              B.id
            )) }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: C() })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, St = "none", fl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Xe = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, Gy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, tm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = me(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, y] = p.useState(""), [g, k] = p.useState(!0), [x, w] = p.useState(!1), _ = p.useRef(null), f = e.length > 1, u = p.useRef(!1), m = (E) => {
    E.target === E.currentTarget && (u.current = !0);
  }, v = (E) => {
    E.target === E.currentTarget && u.current && n(), u.current = !1;
  }, j = p.useCallback(async () => {
    k(!0);
    try {
      const E = await wi();
      i(E || []);
    } catch (E) {
      z.error("Failed to fetch tags:", E);
    } finally {
      k(!1);
    }
  }, []);
  p.useEffect(() => {
    j();
  }, [j]), p.useEffect(() => {
    _.current && _.current.focus();
  }, []), Te({ onEscape: n });
  const S = p.useMemo(() => o.filter(
    (E) => E.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(E.name)
  ), [o, h, c]), b = (E) => {
    const D = E.trim();
    if (D.toLowerCase() === St) {
      alert(`Tag name '${St}' is reserved for search and cannot be used.`);
      return;
    }
    D && !c.includes(D) && (d([...c, D]), y(""));
  }, T = (E) => {
    d(c.filter((D) => D !== E));
  }, L = async () => {
    w(!0);
    try {
      if (f) {
        const E = c.filter((F) => !t.includes(F)), D = t.filter((F) => !c.includes(F));
        await Mf(e, E, D);
      } else {
        const E = e[0];
        if (E === void 0)
          throw new Error("No image selected");
        await Fg(E, c);
      }
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (E) {
      z.error("Failed to update tags:", E), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, R = (E) => {
    E.key === "Enter" && h.trim() && (Xe(E), b(h.trim()));
  };
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (E) => E.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(xr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((E) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                E,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => T(E),
                    children: /* @__PURE__ */ s.jsx(fe, { size: 12 })
                  }
                )
              ] }, E)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (E) => y(E.target.value),
                    onKeyDown: R
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(h),
                    children: [
                      /* @__PURE__ */ s.jsx(Vs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? h ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((E) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(E.name),
                  children: E.name
                },
                E.id
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
                onClick: L,
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
}, Qs = (e, t) => {
  const n = p.useCallback(async (w) => yo(w), []), r = p.useCallback(
    async (w, _, f) => {
      await Mf(w, _, f);
    },
    []
  ), l = p.useCallback(async (w) => {
    try {
      const _ = await Wg(w.id);
      return _.workflow ? (await window.app.loadGraphData(_.workflow), z.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return z.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = p.useCallback(async (w) => {
    try {
      const _ = await Ug(w.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, m = window.LiteGraph;
      if (!u.graph || !u.canvas || !m)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const v = m.createNode(f);
      if (!v)
        return z.error(`Node type ${f} not found.`), alert(
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
      if (v.widgets) {
        for (const [L, R] of Object.entries(j)) {
          const E = _[L];
          if (E != null && E !== "") {
            const D = v.widgets.find((F) => F.name === R);
            D && (D.value = E);
          }
        }
        const T = v.widgets.find((L) => L.name === "control_after_generate");
        T && (T.value = "fixed");
      }
      const S = u.canvas.ds.offset, b = u.canvas.ds.scale;
      return v.pos = [(-S[0] + 400) / b, (-S[1] + 300) / b], u.graph.add(v), u.canvas.selectNode(v), u.canvas.centerOnNode(v), !0;
    } catch (_) {
      return z.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
    }
  }, []), o = p.useCallback(
    (w) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [w.id],
          tags: w.tags || []
        }
      });
    },
    [t]
  ), i = p.useCallback(
    (w) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: w.id,
          notes: w.user_notes || ""
        }
      });
    },
    [t]
  ), c = p.useCallback(
    (w) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: w.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (w) => {
      const _ = window.app;
      if (!(_ != null && _.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const f = _.graph._nodes.filter((m) => or(m.type));
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
            image: w,
            nodes: f.map((m) => ({
              id: String(m.id),
              type: m.type ?? "",
              title: m.title
            })),
            onSelect: (m) => {
              ul(w, m);
            }
          }
        }), !0;
      const u = ul(w);
      return u.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: u.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : u.reason === "no_widgets" || u.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), h = p.useCallback(
    (w) => {
      const _ = Array.isArray(w) ? w : [w];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: _ }
      });
    },
    [t]
  ), y = p.useCallback(
    async (w, _ = "run") => {
      var u;
      z.log("handleRunWithMask called", w, _);
      const f = Array.isArray(w) ? w : [w];
      if (_ === "apply") {
        const m = window.app, v = ((u = m == null ? void 0 : m.graph) == null ? void 0 : u._nodes) || [];
        z.log(
          "Current graph nodes:",
          v.map((T) => ({
            id: T.id,
            type: T.type ?? ""
          }))
        );
        const j = v.some((T) => Qr(T.type)), S = v.some((T) => or(T.type));
        if (z.log("Nodes found:", { hasMaskNode: j, hasLoaderNode: S }), !j || !S) {
          const T = [];
          S || T.push("'Meld Image Loader'"), j || T.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${T.join(" and ")}. Please add them to use the Mask Tool.`
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
        if (!(await Pf()).some((j) => j.valid && j.mask_count >= 1)) {
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
        z.error("[Meld] Error checking workflows:", m);
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
  ), g = p.useCallback(
    async (w, _) => {
      try {
        const f = w.id, m = (await yo([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: m }), _ == null || _();
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  ), k = p.useCallback(
    (w) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [w.id],
          hasLineage: !!(w.parent_id || w.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), x = p.useCallback(
    async (w, _) => {
      try {
        const f = await $g(w, _);
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
    handleRunWithWorkflow: h,
    handleRunWithMask: y,
    handleRestore: g,
    handleDelete: k,
    handleEditNotes: i,
    handleUpdateUserNotes: x
  };
}, nm = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = me(), { handleUpdateUserNotes: a } = Qs(r, l), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), y = p.useRef(!1), g = (w) => {
    w.target === w.currentTarget && (y.current = !0);
  }, k = (w) => {
    w.target === w.currentTarget && y.current && n(), y.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const x = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (w) {
      z.error("Failed to update notes:", w), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const w = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === h.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), x());
    };
    return window.addEventListener("keydown", w, { capture: !0 }), () => {
      window.removeEventListener("keydown", w, {
        capture: !0
      });
    };
  }, [x]), Te({ onEscape: n }), he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (w) => w.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(jg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
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
                onChange: (w) => i(w.target.value)
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
                onClick: x,
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
}, rm = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = me(), l = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Te({ onEscape: l });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return he.createPortal(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: l, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(dl, { size: 12 })
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
}, lm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var Q;
  const { dispatch: l } = me(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [y, g] = p.useState(!1), [k, x] = p.useState(null), [w, _] = p.useState({}), [f, u] = p.useState({}), [m, v] = p.useState(""), j = p.useRef(null), S = p.useMemo(() => a.map((I) => {
    let M = I.valid, A = I.reason;
    return r && I.mask_count === 0 && (M = !1, A = "No 'Load Image (as Mask)' node found."), { ...I, valid: M, reason: A };
  }).sort((I, M) => I.valid !== M.valid ? I.valid ? -1 : 1 : I.name.localeCompare(M.name)), [a, r]), b = p.useMemo(() => {
    if (!m.trim()) return S;
    const I = m.toLowerCase();
    return S.filter((M) => M.name.toLowerCase().includes(I));
  }, [S, m]), T = p.useCallback(async () => {
    try {
      c(!0);
      const I = await Pf();
      o(I), h(null);
    } catch (I) {
      h(I instanceof Error ? I.message : String(I));
    } finally {
      c(!1);
    }
  }, []);
  p.useEffect(() => {
    T();
  }, [T]), p.useEffect(() => {
    !i && j.current && j.current.focus();
  }, [i]);
  const L = p.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Te({ onEscape: L });
  const R = p.useRef(!1), E = p.useCallback((I) => {
    I.target === I.currentTarget && (R.current = !0);
  }, []), D = p.useCallback(
    (I) => {
      I.target === I.currentTarget && R.current && L(), R.current = !1;
    },
    [L]
  ), F = async (I, M) => {
    if (!y)
      try {
        g(!0);
        const A = await t(I, M);
        n == null || n(), A !== !1 && L();
      } catch (A) {
        h(A instanceof Error ? A.message : String(A)), g(!1);
      }
  }, C = async (I) => {
    if (!(w[I] || f[I]))
      try {
        u((N) => ({ ...N, [I]: !0 }));
        const M = await zf(I), A = [], $ = (N) => {
          if (!N) return !1;
          const P = N.replace(/\s+/g, "").toLowerCase();
          return r ? P === "loadimagemask" : P === "meldimageloader" || P === "loadimage";
        };
        if (M.nodes && Array.isArray(M.nodes)) {
          z.log("Extracting nodes from UI format workflow", M.nodes.length);
          for (const N of M.nodes)
            $(N.type) && (z.log("Found target node (UI):", N.id, N.type, N.title), A.push({
              id: String(N.id),
              type: N.type || "",
              title: N.title
            }));
        } else {
          z.log("Extracting nodes from API format workflow");
          for (const N in M) {
            const P = M[N];
            P && typeof P == "object" && $(P.class_type) && (z.log("Found target node (API):", N, P.class_type), A.push({
              id: N,
              type: P.class_type || ""
            }));
          }
        }
        A.length === 0 && z.warn("No loader nodes found in workflow JSON despite count > 0"), _((N) => ({ ...N, [I]: A }));
      } catch (M) {
        z.error("Failed to fetch workflow nodes:", M);
      } finally {
        u((M) => ({ ...M, [I]: !1 }));
      }
  }, B = (I) => {
    if (!I.valid || y) return;
    if ((r ? I.mask_count : I.loader_count + I.load_image_count) <= 1) {
      F(I.name);
      return;
    }
    k === I.name ? x(null) : (x(I.name), C(I.name));
  };
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: E,
        onMouseUp: D,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (I) => I.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(gi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: L, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(yf, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (Q = e[0]) == null ? void 0 : Q.filename }),
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
                  /* @__PURE__ */ s.jsx(yn, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: j,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: m,
                      onChange: (I) => v(I.target.value)
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var I;
                        v(""), (I = j.current) == null || I.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(fe, { size: 14 })
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
                ) : b.map((I) => {
                  const M = r ? I.mask_count : I.loader_count + I.load_image_count, A = k === I.name, $ = w[I.name] || [], N = f[I.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${I.valid ? "" : "meld-workflow-item--invalid"} ${A ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => B(I),
                        title: I.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: I.name }),
                            !I.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: I.reason }),
                            I.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: M > 1 ? `Multiple loaders found (${M})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${I.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          I.valid && M <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: y,
                              onClick: (P) => {
                                P.stopPropagation(), F(I.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(dl, { size: 14 }),
                                y ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          I.valid && M > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: y,
                              onClick: (P) => {
                                P.stopPropagation(), B(I);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                A ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  hi,
                                  {
                                    size: 14,
                                    style: {
                                      transform: A ? "rotate(90deg)" : "rotate(0deg)",
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
                    A && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: N ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: $.map((P) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: y,
                          onClick: () => F(I.name, P.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: P.title || P.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                P.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(dl, { size: 12 })
                          ]
                        },
                        P.id
                      )) })
                    ] }) })
                  ] }, I.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: L,
                  disabled: y,
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
}, qy = ({ message: e, onConfirm: t, onCancel: n }) => {
  const r = p.useRef(null), l = p.useRef(null);
  return Te({ onEscape: n }), p.useEffect(() => {
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
}, xo = async (e, t) => {
  await zg(e, t), se.getState().removeImages(e);
}, sm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = me(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = p.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = p.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((v) => {
    const j = Number.parseInt(v, 10);
    return l.images.find((S) => S.id === j) || l.lineageImages.find((S) => S.id === j) || null;
  }).filter((v) => v !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), h = p.useRef(l.viewerImageId);
  p.useEffect(() => {
    h.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const y = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Te({ onEscape: y });
  const g = p.useRef(!1), k = p.useCallback((u) => {
    u.target === u.currentTarget && (g.current = !0);
  }, []), x = p.useCallback(
    (u) => {
      u.target === u.currentTarget && g.current && y(), g.current = !1;
    },
    [y]
  ), w = p.useCallback(
    (u) => {
      if (!o.current) return;
      const m = h.current;
      if (m === null || !u.has(m))
        return;
      const v = d.findIndex(
        (S) => S.id === m
      );
      if (v === -1) return;
      let j = !1;
      for (let S = v + 1; S < d.length; S++) {
        const b = d[S];
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
        for (let S = v - 1; S >= 0; S--) {
          const b = d[S];
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
      const v = new Set(e), j = d.filter((S) => v.has(S.id));
      if (w(v), await xo(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (v) {
      a({
        type: "SET_ERROR",
        payload: v instanceof Error ? v.message : String(v)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const v = new Set(e);
      for (const S of e) {
        const b = await yi(S);
        if (!o.current) return;
        for (const T of b)
          v.add(T.id);
      }
      const j = d.filter((S) => v.has(S.id));
      if (w(v), await xo(Array.from(v), n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(v)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (v) {
      a({
        type: "SET_ERROR",
        payload: v instanceof Error ? v.message : String(v)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: k,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Qt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: y, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
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
                            eg,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: y, children: "Cancel" }),
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
}, am = ({ message: e }) => {
  const { dispatch: t } = me(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Te({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(yf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, om = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = me(), [l, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Te({ onEscape: h });
  const y = p.useRef(!1), g = (S) => {
    S.target === S.currentTarget && (y.current = !0);
  }, k = (S) => {
    S.target === S.currentTarget && y.current && h(), y.current = !1;
  }, x = t.images.find((S) => S.id === e), w = p.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], b = await Og(e, S);
      a(b);
    } catch (S) {
      z.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    w();
  }, [w]);
  const _ = async (S) => {
    if (S == null) {
      z.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!x || S === x.parent_id) && !(x.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Dc(e, S), await Ef(e), await r(), h();
      } catch (b) {
        z.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Dc(e, null), await r(), h();
      } catch (S) {
        z.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const b = await hy(S), { id: T } = await Nf({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (T === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await _(T);
    } catch (b) {
      z.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, m = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const b = S.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!x) return null;
  const v = l.filter((S) => S.is_source_match), j = l.filter((S) => !S.is_source_match);
  return he.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              x.id
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: h, children: /* @__PURE__ */ s.jsx(fe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            x.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(yg, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    x.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: ht(
                                          {
                                            filename: x.parent_filename,
                                            subfolder: x.parent_subfolder || "",
                                            type: x.parent_type || "output"
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
                                              children: x.parent_filename || "Unknown Image"
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
                                                x.parent_id
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
                      children: /* @__PURE__ */ s.jsx(gg, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
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
                  /* @__PURE__ */ s.jsx(Ng, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              v.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: v.map((S) => {
                  const b = S.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && _(S.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: ht(S, 64), alt: S.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
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
                    S.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((S) => {
                  const b = S.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && _(S.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: ht(S, 64), alt: S.filename }),
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
                                  "Match: ",
                                  Math.round((64 - S.distance) / 64 * 100),
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
}, Yy = () => {
  const { state: e, dispatch: t } = me(), n = e.toastMessage;
  return p.useEffect(() => {
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
}, Xy = () => {
  const { state: e, dispatch: t } = me(), { executeWorkflow: n } = xi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      lm,
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
      rm,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ul(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(om, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Rf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(em, {}),
    e.activeModal.type === "tag_edit" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        tm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && he.createPortal(/* @__PURE__ */ s.jsx(am, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        sm,
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
    e.activeModal.type === "mask_editor" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        _i,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        $f,
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
    e.activeModal.type === "note_edit" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        nm,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && he.createPortal(
      /* @__PURE__ */ s.jsx(
        jy,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && he.createPortal(
      /* @__PURE__ */ s.jsx(
        qy,
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
    e.toastMessage && he.createPortal(/* @__PURE__ */ s.jsx(Yy, {}), document.body)
  ] });
}, Zy = async () => {
  const e = await te.fetchApi("/meld/analytics");
  return re(e);
}, Jy = async (e, t) => {
  var i;
  const n = new URLSearchParams();
  n.set("limit", String(t.limit)), n.set("offset", String(t.offset)), t != null && t.sort && n.set("sort", t.sort), (i = t == null ? void 0 : t.q) != null && i.trim() && n.set("q", t.q.trim());
  const r = n.toString(), l = `/meld/analytics/${e}${r ? `?${r}` : ""}`, a = await te.fetchApi(l, { signal: t == null ? void 0 : t.signal }), o = await Bs(a);
  if (!o.success)
    throw new Error(o.error || "Failed to fetch analytics");
  return {
    data: o.data ?? [],
    total: o.total ?? 0
  };
}, ev = async () => {
  const e = await te.fetchApi("/meld/analytics/refresh", {
    method: "POST"
  });
  await re(e);
}, tv = "_meldAnalytics_4wl6y_2", nv = "_meldAnalytics__totalCard_4wl6y_8", rv = "_meldAnalytics__totalCardTitle_4wl6y_19", lv = "_meldAnalytics__totalCardValue_4wl6y_28", sv = "_meldAnalytics__grid_4wl6y_36", av = "_meldAnalytics__section_4wl6y_42", ov = "_meldAnalytics__sectionHeader_4wl6y_53", iv = "_meldAnalytics__sectionTitle_4wl6y_65", cv = "_meldAnalytics__item_4wl6y_76", dv = "_meldAnalytics__itemLabel_4wl6y_93", uv = "_meldAnalytics__itemCount_4wl6y_100", fv = "_meldAnalytics__seeAllBtn_4wl6y_110", mv = "_meldAnalytics__fullView_4wl6y_131", pv = "_meldAnalytics__fullViewToolbar_4wl6y_137", hv = "_meldAnalytics__searchInput_4wl6y_144", gv = "_meldAnalytics__fullList_4wl6y_154", yv = "_meldAnalytics__fullListItem_4wl6y_161", vv = "_meldAnalytics__refreshBtn_4wl6y_179", Me = {
  meldAnalytics: tv,
  meldAnalytics__totalCard: nv,
  meldAnalytics__totalCardTitle: rv,
  meldAnalytics__totalCardValue: lv,
  meldAnalytics__grid: sv,
  meldAnalytics__section: av,
  meldAnalytics__sectionHeader: ov,
  meldAnalytics__sectionTitle: iv,
  meldAnalytics__item: cv,
  meldAnalytics__itemLabel: dv,
  meldAnalytics__itemCount: uv,
  meldAnalytics__seeAllBtn: fv,
  meldAnalytics__fullView: mv,
  meldAnalytics__fullViewToolbar: pv,
  meldAnalytics__searchInput: hv,
  meldAnalytics__fullList: gv,
  meldAnalytics__fullListItem: yv,
  meldAnalytics__refreshBtn: vv
}, wv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function xv(e, t) {
  const n = wv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function _v(e, t) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Uc(e, t) {
  return _v(e);
}
const kv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = me(), [r, l] = p.useState(null), [a, o] = p.useState(!0), [i, c] = p.useState(!1), [d, h] = p.useState(null), [y, g] = p.useState([]), [k, x] = p.useState(0), [w, _] = p.useState(!1), [f, u] = p.useState("count_desc"), [m, v] = p.useState(""), j = p.useRef("");
  Te({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const S = p.useCallback(async () => {
    o(!0);
    try {
      const E = await Zy();
      l(E);
    } catch {
      l(null);
    } finally {
      o(!1);
    }
  }, []);
  p.useEffect(() => {
    S();
  }, [S]);
  const b = p.useCallback(
    async (E, D, F, C) => {
      _(!0);
      try {
        const { data: B, total: Q } = await Jy(E, {
          limit: 500,
          offset: 0,
          sort: D,
          q: F.trim() || void 0,
          signal: C
        });
        if (C != null && C.aborted) return;
        g(B), x(Q);
      } catch {
        if (C != null && C.aborted) return;
        g([]), x(0);
      } finally {
        C != null && C.aborted || _(!1);
      }
    },
    []
  );
  p.useEffect(() => {
    if (!d) return;
    const E = j.current !== m;
    j.current = m;
    const D = new AbortController(), F = () => {
      b(d, f, m, D.signal);
    };
    if (E) {
      const C = setTimeout(F, 300);
      return () => {
        clearTimeout(C), D.abort();
      };
    }
    return F(), () => D.abort();
  }, [d, f, m, b]);
  const T = p.useCallback(async () => {
    c(!0);
    try {
      await ev(), await S(), d && await b(d, f, m), n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } finally {
      c(!1);
    }
  }, [S, b, d, f, m, n]), L = p.useCallback(
    (E, D) => {
      const F = xv(E, D);
      t ? t(F) : e();
    },
    [t, e]
  ), R = (E, D, F) => /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__section, children: [
    /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ s.jsx("h3", { className: Me.meldAnalytics__sectionTitle, children: E }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: Me.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(D), v(""), u("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ s.jsx(ng, { size: 14 })
          ]
        }
      )
    ] }),
    F.map((C, B) => {
      const Q = Uc(C);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: Me.meldAnalytics__item,
          onClick: () => L(D, Q),
          onKeyDown: (I) => {
            (I.key === "Enter" || I.key === " ") && (I.preventDefault(), L(D, Q));
          },
          children: [
            /* @__PURE__ */ s.jsx("span", { className: Me.meldAnalytics__itemLabel, children: Q }),
            /* @__PURE__ */ s.jsx("span", { className: Me.meldAnalytics__itemCount, children: C.count })
          ]
        },
        `${Q}-${B}`
      );
    })
  ] }, D);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(xf, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: Me.meldAnalytics__refreshBtn,
            onClick: T,
            disabled: i,
            title: "Refresh analytics",
            children: [
              /* @__PURE__ */ s.jsx(hr, { size: 14, className: i ? "animate-spin" : "" }),
              "Refresh"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-analytics-close",
            onClick: e,
            title: "Close and return to gallery",
            children: /* @__PURE__ */ s.jsx(fe, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__fullView, children: [
      /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              flex: 1,
              minWidth: 0,
              background: "var(--comfy-input-bg)",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid var(--meld-border-color)"
            },
            children: [
              /* @__PURE__ */ s.jsx(yn, { size: 14, style: { flexShrink: 0, color: "var(--meld-text-secondary)" } }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "text",
                  className: Me.meldAnalytics__searchInput,
                  style: {
                    border: "none",
                    background: "transparent",
                    width: "100%"
                  },
                  placeholder: "Filter...",
                  value: m,
                  onChange: (E) => v(E.target.value)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn--secondary",
            style: { padding: "6px 12px", height: "auto" },
            onClick: () => u((E) => E === "count_desc" ? "count_asc" : "count_desc"),
            title: f === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              f === "count_desc" ? /* @__PURE__ */ s.jsx(tg, { size: 14 }) : /* @__PURE__ */ s.jsx(lg, { size: 14 }),
              f === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-btn meld-btn--secondary",
            style: { padding: "6px 12px", height: "auto" },
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      w ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__fullList, children: [
        y.map((E, D) => {
          const F = Uc(E);
          return /* @__PURE__ */ s.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: Me.meldAnalytics__fullListItem,
              onClick: () => L(d, F),
              onKeyDown: (C) => {
                (C.key === "Enter" || C.key === " ") && (C.preventDefault(), L(d, F));
              },
              children: [
                /* @__PURE__ */ s.jsxs("span", { className: Me.meldAnalytics__itemLabel, children: [
                  D + 1,
                  ". ",
                  F
                ] }),
                /* @__PURE__ */ s.jsx("span", { className: Me.meldAnalytics__itemCount, children: E.count })
              ]
            },
            `${F}-${D}`
          );
        }),
        y.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        k,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics, children: [
      /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ s.jsx("div", { className: Me.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ s.jsx("div", { className: Me.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: Me.meldAnalytics__grid, children: [
        R(
          "Positive Prompt (top 5)",
          "positive_prompts",
          r.positive_prompts
        ),
        R(
          "Negative Prompt (top 5)",
          "negative_prompts",
          r.negative_prompts
        ),
        R("Tag (top 5)", "tags", r.tags),
        R("Model (top 5)", "models", r.models),
        R("Created Date (top 5)", "by_date", r.by_date),
        R("Resolution (top 5)", "by_resolution", r.by_resolution)
      ] })
    ] }) : /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, Sv = () => {
  const { state: e, dispatch: t } = me(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await xy(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      z.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ s.jsx(bf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(og, { size: 14, className: "meld-success-icon" }),
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
}, ki = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, jv = Object.keys(ki), Vc = /* @__PURE__ */ new Map(), Bc = "data-meld-portal-root";
let xa = null, _a = null;
const Qc = ".comfyui-body-bottom";
function Hc(e) {
  var n, r, l, a;
  const t = `[${Bc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Bc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Qc) || (a = c.querySelector) != null && a.call(c, Qc)) return !0;
  }
  return !1;
}
function bv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Cv(e) {
  const t = ki[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function im(e) {
  const t = ki[e], n = Vc.get(e) ?? Cv(e);
  Vc.set(e, n);
  const r = bv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function cm() {
  for (const e of jv)
    im(e);
}
function Kc() {
  _a === null && (_a = requestAnimationFrame(() => {
    _a = null, cm();
  }));
}
function dm(e) {
  return im(e);
}
function Ev() {
  xa || typeof document > "u" || !document.body || (cm(), xa = new MutationObserver((e) => {
    for (const t of e) {
      if (Hc(t.addedNodes)) {
        Kc();
        return;
      }
      if (Hc(t.removedNodes)) {
        Kc();
        return;
      }
    }
  }), xa.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Hs = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  p.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Nv = () => {
  const { state: e } = me(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = p.useCallback(
    (a) => {
      if (Gy())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (fl(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Hs({ onKeyDown: l, enabled: r });
}, um = ({ message: e, onConfirm: t, onCancel: n }) => (Te({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
)), ml = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = p.useRef(t), i = p.useRef(n);
  p.useEffect(() => {
    o.current = t;
  }, [t]), p.useEffect(() => {
    i.current = n;
  }, [n]), p.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const h = d.target;
      if (!(h instanceof Node))
        return;
      o.current.some((g) => {
        const k = g.current;
        return k ? k.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Mv = (e, t, n, r, l) => {
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
        z.warn("move_folder action is not yet implemented"), l == null || l();
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
        z.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Iv = ({ config: e }) => {
  var $;
  const t = se((N) => N.buckets), n = se((N) => N.slots), r = se((N) => N.images), l = n.length, { state: a, dispatch: o } = me(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [y, g] = p.useState(!1), [k, x] = p.useState(e.label), [w, _] = p.useState(e.color), [f, u] = p.useState([]), [m, v] = p.useState(null), j = p.useRef(null), S = p.useRef(null);
  ml({
    enabled: i,
    insideRefs: [S],
    onOutside: () => c(!1)
  }), ml({
    enabled: y,
    insideRefs: [j],
    onOutside: () => g(!1)
  });
  const b = t[e.id] || [], T = b.length, L = b.map((N) => {
    const P = Number(N);
    let W = a.images.find((O) => O.id === P);
    return W || (W = a.lineageImages.find((O) => O.id === P)), W || (W = r[N]), W;
  }).filter(Boolean);
  p.useEffect(() => {
    u((N) => {
      const P = N.filter((W) => b.includes(String(W)));
      return P.length !== N.length ? P : N;
    });
  }, [b]);
  const R = f.filter((N) => b.includes(String(N))), E = R.length > 0, D = (N) => {
    N.preventDefault(), N.stopPropagation(), N.currentTarget.classList.add("drag-over");
  }, F = (N) => {
    N.currentTarget.classList.remove("drag-over");
  }, C = (N) => {
    N.preventDefault(), N.stopPropagation(), N.currentTarget.classList.remove("drag-over");
    const P = N.dataTransfer.getData("text/plain");
    P && P.split(",").forEach((O) => {
      if (O) {
        const H = O.trim(), J = Number(H);
        let ie = a.images.find((de) => de.id === J);
        ie || (ie = a.lineageImages.find((de) => de.id === J)), se.getState().addToBucket(e.id, H, ie);
      }
    });
  }, B = (N, P) => {
    N.stopPropagation();
    let W = [P];
    R.includes(P) ? W = R : (u([P]), v(P)), N.dataTransfer.setData("text/plain", W.join(",")), N.dataTransfer.setData("application/meld-lt-source-slot", e.id), N.dataTransfer.effectAllowed = "move";
  }, Q = (N, P) => {
    if (N.dataTransfer.dropEffect === "none") {
      const W = R.includes(P) ? R : [P];
      W.forEach((O) => {
        se.getState().removeFromBucket(e.id, String(O));
      }), u((O) => O.filter((H) => !W.includes(H)));
    }
  }, I = (N) => {
    if (T === 0) return;
    const P = {
      type: N
    }, W = E ? R : b.map(Number);
    if (W.length === 0) return;
    const O = W.map((ie) => L.find((de) => de.id === ie)).filter(Boolean), H = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Mv(P, W, O, o, () => {
      se.getState().showToast(H[N] ?? "Done");
    });
  }, M = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, A = () => {
    const N = se.getState();
    N.slots.length <= 1 || (N.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: D,
      onDragLeave: F,
      onDrop: C,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: T === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : L.map((N) => {
          const P = ht(N);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${R.includes(N.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (W) => {
                if (W.ctrlKey || W.metaKey)
                  u(
                    (O) => O.includes(N.id) ? O.filter((H) => H !== N.id) : [...O, N.id]
                  ), v(N.id);
                else if (W.shiftKey && m !== null) {
                  const O = L.findIndex((J) => J.id === N.id), H = L.findIndex((J) => J.id === m);
                  if (O !== -1 && H !== -1) {
                    const J = Math.min(O, H), ie = Math.max(O, H), de = L.slice(J, ie + 1).map((Pe) => Pe.id);
                    u((Pe) => Array.from(/* @__PURE__ */ new Set([...Pe, ...de])));
                  }
                  v(N.id);
                } else
                  u([]), v(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: N.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (W) => B(W, N.id),
              onDragEnd: (W) => Q(W, N.id),
              children: /* @__PURE__ */ s.jsx("img", { src: P, alt: N.filename, draggable: !1 })
            },
            N.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: j, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => g(!y),
                disabled: T === 0,
                title: "Actions",
                children: [
                  E ? `Action (${R.length})` : "Action",
                  /* @__PURE__ */ s.jsx(ig, { size: 12 })
                ]
              }
            ),
            y && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: xr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: gi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Mg
              },
              {
                type: "download",
                label: "Download",
                icon: cl
              },
              {
                type: "delete",
                label: "Delete",
                icon: Qt,
                danger: !0
              }
            ].map((N) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${N.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in N && N.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (P) => P.stopPropagation(),
                onClick: () => {
                  "disabled" in N && N.disabled || (I(N.type), g(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(N.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: N.label })
                ]
              },
              N.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: T === 0,
              children: /* @__PURE__ */ s.jsx(dg, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: S, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(jf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: k,
                    onChange: (N) => x(N.target.value),
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
                          value: w.startsWith("var") ? (($ = w.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : $[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(w) ? w : "#9ca3af",
                          onChange: (N) => _(N.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: w,
                          onChange: (N) => _(N.target.value),
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
                    const N = se.getState(), P = k.trim();
                    if (!P) {
                      N.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (N.slots.some(
                      (O) => O.id !== e.id && (O.label.toLowerCase() === P.toLowerCase() || O.id.toLowerCase() === P.toLowerCase())
                    )) {
                      N.showToast(`Error: "${P}" is already in use`, "error");
                      return;
                    }
                    N.updateSlot(e.id, {
                      label: P,
                      color: w
                    }), c(!1), N.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
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
        ] }),
        d && /* @__PURE__ */ s.jsx(
          um,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: M,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Tv = () => {
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
}, Lv = () => {
  var k;
  Nv();
  const e = se((x) => x.isOpen), t = se((x) => x.setIsOpen), [n, r] = p.useState(!1);
  Te({
    onEscape: () => t(!1),
    enabled: e && !n
  }), p.useEffect(() => {
    e || r(!1);
  }, [e]);
  const l = se((x) => x.slots), a = se((x) => x.buckets), { state: o } = me(), [i, c] = p.useState(((k = l[0]) == null ? void 0 : k.id) || "keep"), d = dm("lightTable");
  if (!e) return null;
  const h = () => {
    const x = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: x,
      label: `Tab ${l.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(x);
  }, y = () => {
    l.forEach((x) => {
      se.getState().clearBucket(x.id);
    }), se.getState().showToast("All tabs cleared"), r(!1);
  }, g = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      l.map((x) => {
        var w;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === x.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(x.id),
            style: { "--tab-color": x.color },
            onDragOver: (_) => {
              _.preventDefault(), c(x.id);
            },
            onDrop: (_) => {
              _.preventDefault();
              const f = _.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((m) => {
                if (m) {
                  const v = m.trim(), j = o.images.find((S) => String(S.id) === v);
                  se.getState().addToBucket(x.id, v, j);
                }
              });
            },
            children: [
              x.label,
              "  (",
              ((w = a[x.id]) == null ? void 0 : w.length) || 0,
              ")"
            ]
          },
          x.id
        );
      }),
      /* @__PURE__ */ s.jsx(
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
          children: /* @__PURE__ */ s.jsx(Vs, { size: 16 })
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
            /* @__PURE__ */ s.jsx(bg, { size: 14 }),
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
          children: /* @__PURE__ */ s.jsx(fe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: l.map((x) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === x.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(Iv, { config: x })
      },
      x.id
    )) }),
    n && /* @__PURE__ */ s.jsx(
      um,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: y,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Tv, {})
  ] });
  return he.createPortal(g, d);
}, fm = () => {
  const { state: e, refreshFavorites: t } = me(), [n, r] = p.useState(!1), [l, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, y] = p.useState(""), [g, k] = p.useState("");
  p.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const x = p.useCallback(
    async (u, m, v) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${v}"?`;
      if (window.confirm(j))
        try {
          await Oc(m), await t();
        } catch (S) {
          z.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), w = p.useCallback((u, m) => {
    u.stopPropagation(), d(m), y(m.name), k(m.query);
  }, []), _ = p.useCallback(async () => {
    if (!(!c || !h.trim() || !g.trim()))
      try {
        r(!0), await Xg(c.id, h, g), await t(), d(null);
      } catch (u) {
        z.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, g, t]), f = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((m) => m.query === e.searchQuery)) {
      const m = e.favorites.find((v) => v.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          return await Oc(m.id), await t(), !0;
        } catch (v) {
          return z.error("Failed to delete favorite:", v), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Yg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (m) {
      return z.error("Failed to save favorite:", m), !1;
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
    editFavoriteName: h,
    setEditFavoriteName: y,
    editFavoriteQuery: g,
    setEditFavoriteQuery: k,
    handleDeleteFavorite: x,
    handleEditFavorite: w,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, m = "info") => {
      a(u), i(m);
    }
  };
}, mm = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [l, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(Sf, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
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
                  children: /* @__PURE__ */ s.jsx(Qt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Av = "_menu_jab2z_1", Rv = "_header_jab2z_14", Dv = "_title_jab2z_23", Pv = "_count_jab2z_32", zv = "_list_jab2z_37", Ov = "_toast_jab2z_46", Fv = "_editTitle_jab2z_56", $v = "_form_jab2z_62", Wv = "_fieldGroup_jab2z_69", Uv = "_label_jab2z_75", Vv = "_input_jab2z_81", Bv = "_textarea_jab2z_82", qe = {
  menu: Av,
  header: Rv,
  title: Dv,
  count: Pv,
  list: zv,
  toast: Ov,
  editTitle: Fv,
  form: $v,
  fieldGroup: Wv,
  label: Uv,
  input: Vv,
  textarea: Bv
}, Qv = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = me(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: y,
    handleDeleteFavorite: g,
    handleEditFavorite: k,
    handleSaveEditFavorite: x
  } = fm(), [w, _] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
  return Te({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), ml({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), p.useEffect(() => {
    if (e) {
      let j = e.left;
      const S = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), _({ top: S, left: j });
    }
  }, [e]), p.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? he.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${qe.menu} meld-favorites-context-menu`,
          style: {
            top: w.top,
            left: w.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: qe.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: qe.title, children: [
                /* @__PURE__ */ s.jsx(
                  gr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: qe.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: qe.list, children: r.favorites.map((m) => /* @__PURE__ */ s.jsx(
              mm,
              {
                fav: m,
                onSelect: (v) => {
                  n(v), t();
                },
                onEdit: k,
                onDelete: g
              },
              m.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: qe.toast, children: a })
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
                  /* @__PURE__ */ s.jsxs("h2", { className: qe.editTitle, children: [
                    /* @__PURE__ */ s.jsx(gr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: qe.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: qe.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: qe.label, children: "Name" }),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: u,
                        type: "text",
                        value: c,
                        onChange: (m) => d(m.target.value),
                        placeholder: "Favorite Name",
                        className: qe.input,
                        onKeyDown: (m) => {
                          m.key === "Enter" && (Xe(m), x()), m.key === "Escape" && (Xe(m), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: qe.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: qe.label, children: "Search Query" }),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (m) => y(m.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: qe.textarea,
                        onKeyDown: (m) => {
                          m.key === "Enter" && !m.shiftKey && (Xe(m), x()), m.key === "Escape" && (Xe(m), i(null));
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
                      onClick: x,
                      disabled: l || !c.trim() || !h.trim(),
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
}, Wl = (e) => {
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
}, Hv = () => {
  const { state: e, dispatch: t, updateSetting: n } = me(), [r, l] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [y, g] = p.useState([]), k = e.settings["search.show_all_keywords"], [x, w] = p.useState(-1), [_, f] = p.useState(null), u = p.useRef(null), m = p.useRef(e.searchQuery), v = p.useCallback(async () => {
    if (y.length > 0) return;
    const I = await Kg();
    g(I);
  }, [y.length]);
  p.useEffect(() => {
    Gg().then((I) => {
      f(I);
    }), k && v();
  }, [v, k]);
  const j = p.useMemo(() => {
    if (!_) return null;
    const I = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${I}):(.*)$`, "i");
  }, [_]), S = p.useCallback(() => {
    const I = !k;
    I && v(), n("search.show_all_keywords", I);
  }, [k, v, n]), b = r !== m.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    Hg().then((I) => {
      h(I);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var I;
    (I = u.current) == null || I.focus();
  }, []);
  const T = p.useCallback(
    (I, M = !0) => {
      m.current !== I && (z.log("SearchBar: triggering search", { query: I }), t({ type: "SET_SEARCH_QUERY", payload: I }), M && c(!1), m.current = I);
    },
    [t]
  );
  p.useEffect(() => {
    const I = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const M = Wl(r), A = M[M.length - 1];
      if (A) {
        const $ = A.match(j);
        if ($) {
          const N = $[1];
          let P = $[2];
          if (!N || P === void 0) {
            o([]), c(!1);
            return;
          }
          const W = N.toLowerCase();
          P.startsWith('"') && (P = P.substring(1)), P.endsWith('"') && (P = P.substring(0, P.length - 1));
          const O = await Qg(P, W);
          o(O), c(O.length > 0), w(-1);
        } else {
          const N = A.replace(/^([-!])/, "").toLowerCase();
          if (N && _) {
            const P = _.all_prefixes.filter((W) => W.startsWith(N)).map((W) => ({
              type: W,
              value: "",
              count: 0
            }));
            if (P.length > 0) {
              o(P), c(!0), w(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(I);
  }, [r, e.settings["search.input_suggest"], j, _]);
  const L = p.useCallback(
    (I) => {
      var O;
      if (!I) return;
      const M = Wl(r), $ = (M.pop() || "").match(/^([-!])/), N = $ ? $[1] : "", W = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(I.type);
      if (I.value === "") {
        const H = `${[...M, `${N}${I.type}:`].join(" ").trim()}`;
        l(H);
      } else {
        const H = W ? I.value : `"${I.value}"`, J = `${[...M, `${N}${I.type}:${H}`].join(" ").trim()} `;
        l(J), o([]), c(!1);
      }
      (O = u.current) == null || O.focus();
    },
    [r, _]
  ), R = (I) => {
    if (I)
      if (I.key === "Enter")
        if (Xe(I), i && x >= 0) {
          const M = a[x];
          M && L(M);
        } else
          T(r);
      else if (I.key === "Tab") {
        if (i && a.length > 0) {
          Xe(I);
          const M = x >= 0 ? x : 0, A = a[M];
          A && L(A);
        }
      } else I.key === "ArrowDown" ? i && (Xe(I), w((M) => Math.min(M + 1, a.length - 1))) : I.key === "ArrowUp" ? i && (Xe(I), w((M) => Math.max(M - 1, -1))) : I.key === "Escape" && (Xe(I), c(!1));
  }, E = p.useCallback(() => {
    l(""), T("");
  }, [T]), D = p.useCallback(
    (I, M, A = !1) => {
      var Et;
      if (!I) return;
      const $ = Wl(r), N = $[$.length - 1] || "";
      let P = !1;
      const W = N.replace(/^([-!])/, "").toLowerCase();
      W && I.toLowerCase().startsWith(W) && (P = !0);
      const O = N.match(/^([-!])/), H = P && O ? O[1] : "";
      if (P && $.pop(), A) {
        const q = [...$, `${H}${I}:`].filter(Boolean).join(" ");
        l(q), (Et = u.current) == null || Et.focus();
        return;
      }
      const de = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(I) ? M : `"${M}"`, Pe = `${H}${I}:${de}`, ue = [...$, Pe].filter(Boolean).join(" ");
      l(ue), T(ue);
    },
    [r, T, _]
  ), F = p.useCallback(
    (I) => {
      l(I), I || T("");
    },
    [T]
  ), C = p.useCallback(() => {
    if (r === m.current || !j) return;
    const I = Wl(r), M = I[I.length - 1];
    if (!M) return;
    const A = !!M.match(j), $ = M.replace(/^([-!])/, "").toLowerCase(), N = $ && (_ == null ? void 0 : _.all_prefixes.some((P) => P.startsWith($)));
    (A || N) && c(!0);
  }, [r, j, _]), B = p.useRef(null), Q = p.useCallback(() => {
    B.current = setTimeout(() => c(!1), 200);
  }, []);
  return p.useEffect(() => () => {
    B.current && clearTimeout(B.current);
  }, []), {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: y,
    showAllKeywords: k,
    toggleShowAllKeywords: S,
    selectedIndex: x,
    setSelectedIndex: w,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: T,
    handleKeyDown: R,
    applySuggestion: L,
    clearSearch: E,
    applySearchSuggestion: D,
    handleInputChange: F,
    handleInputFocus: C,
    handleInputBlur: Q
  };
}, Gc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(xr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(sg, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Cg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(ag, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(wf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(vf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(ug, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(rg, { size: 12 });
    default:
      return null;
  }
}, Kv = ({
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
  toggleShowAllKeywords: h,
  applySearchSuggestion: y,
  favorites: g,
  onSelectFavorite: k,
  onEditFavorite: x,
  onDeleteFavorite: w
}) => {
  const _ = (v, j, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => y(v.type, v.value, S === "all"),
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
            children: Gc(v.type)
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
            children: v.type
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
            children: v.value
          }
        )
      ]
    },
    `${S}-${v.type}:${v.value}:${j}`
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
      children: t.map((v, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(v);
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
                    children: Gc(v.type)
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
                      width: v.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      v.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: v.value === St ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: v.value === St ? "bold" : "normal"
                    },
                    children: v.value === St ? v.type === "tag" ? `Untagged (${St})` : `No ${v.type} (${St})` : v.value
                  }
                )
              ]
            }
          )
        },
        `${v.type}:${v.value}`
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
            children: i.map((v, j) => _(v, j, "quick"))
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
                  children: Array.from(new Set(c.map((v) => v.type))).map(
                    (v, j) => _({ type: v, value: "" }, j, "all")
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
              /* @__PURE__ */ s.jsx(gr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: g.map((v) => /* @__PURE__ */ s.jsx(
              mm,
              {
                fav: v,
                onSelect: k,
                onEdit: x,
                onDelete: w
              },
              v.id
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
      onMouseDown: (v) => {
        v.preventDefault();
      },
      children: [
        f(),
        u(),
        m()
      ]
    }
  );
}, Gv = () => {
  const { state: e } = me(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: y,
    isQueryChanged: g,
    handleSearch: k,
    handleKeyDown: x,
    applySuggestion: w,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: v
  } = Hv(), {
    isSaving: j,
    toastMessage: S,
    toastType: b,
    editingFavorite: T,
    setEditingFavorite: L,
    editFavoriteName: R,
    setEditFavoriteName: E,
    editFavoriteQuery: D,
    setEditFavoriteQuery: F,
    handleDeleteFavorite: C,
    handleEditFavorite: B,
    handleSaveEditFavorite: Q,
    handleSaveFavorite: I,
    setToastMessage: M
  } = fm(), A = async () => {
    const O = e.favorites.some((J) => J.query === e.searchQuery);
    await I() && M(
      O ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Te({
    onEscape: () => L(null),
    enabled: !!T
  });
  const $ = p.useRef(null), N = p.useRef(!1);
  p.useEffect(() => {
    T && $.current && $.current.focus();
  }, [T]);
  const P = (O) => {
    O.target === O.currentTarget && (N.current = !0);
  }, W = (O) => {
    O.target === O.currentTarget && N.current && L(null), N.current = !1;
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          S && /* @__PURE__ */ s.jsx(
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
                    onClick: () => k(t),
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
                    onMouseEnter: (O) => {
                      O.currentTarget.style.transform = "translateY(-1px)", g ? (O.currentTarget.style.filter = "brightness(1.15)", O.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (O) => {
                      O.currentTarget.style.transform = "none", g ? (O.currentTarget.style.filter = "none", O.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
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
                        yn,
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
                    ref: y,
                    type: "text",
                    value: t,
                    onChange: (O) => u(O.target.value),
                    onKeyDown: x,
                    onBlur: v,
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
                    onClick: A,
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
                      gr,
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
                    children: /* @__PURE__ */ s.jsx(fe, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            Kv,
            {
              showSuggestions: l,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: w,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (O) => {
                n(O), k(O);
              },
              onEditFavorite: B,
              onDeleteFavorite: C
            }
          )
        ] }),
        T && he.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: P,
              onMouseUp: W,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (O) => O.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ s.jsx(gr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => L(null),
                          children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
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
                                    ref: $,
                                    type: "text",
                                    value: R,
                                    onChange: (O) => E(O.target.value),
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
                                      O.key === "Enter" && (Xe(O), Q()), O.key === "Escape" && (Xe(O), L(null));
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
                                    value: D,
                                    onChange: (O) => F(O.target.value),
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
                                      O.key === "Enter" && !O.shiftKey && (Xe(O), Q()), O.key === "Escape" && (Xe(O), L(null));
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
                          onClick: () => L(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: Q,
                          disabled: j || !R.trim() || !D.trim(),
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
}, qv = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [l, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, y] = p.useState(!1), [g, k] = p.useState(null), [x, w] = p.useState(""), [_, f] = p.useState(!1), u = p.useRef(null), m = p.useCallback(async () => {
    a(!0);
    try {
      const E = await wi();
      r(E);
    } catch (E) {
      z.error("Failed to fetch tags:", E);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    m();
  }, [m]), p.useEffect(() => {
    g !== null && u.current && (u.current.focus(), u.current.select());
  }, [g]);
  const v = async (E) => {
    E.preventDefault();
    const D = c.trim();
    if (!(!D || h)) {
      if (D.toLowerCase() === St) {
        alert(`Tag name '${St}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((F) => F.name.toLowerCase() === D.toLowerCase())) {
        alert(`Tag "${D}" already exists.`);
        return;
      }
      y(!0);
      try {
        await uy(D), d(""), await m();
      } catch (F) {
        z.error("Failed to add tag:", F);
      } finally {
        y(!1);
      }
    }
  }, j = async (E, D) => {
    if (confirm(`Are you sure you want to delete tag "${D}"?`))
      try {
        await fy(E), await m();
      } catch (F) {
        z.error("Failed to delete tag:", F);
      }
  }, S = (E) => {
    k(E.id), w(E.name);
  }, b = () => {
    k(null), w("");
  }, T = async (E) => {
    E.preventDefault();
    const D = x.trim();
    if (!D || g === null || _) return;
    if (D.toLowerCase() === St) {
      alert(`Tag name '${St}' is reserved for search and cannot be used.`);
      return;
    }
    const F = n.find((C) => C.id === g);
    if (F && F.name === D) {
      b();
      return;
    }
    if (n.some((C) => C.id !== g && C.name.toLowerCase() === D.toLowerCase())) {
      alert(`Tag "${D}" already exists.`);
      return;
    }
    f(!0);
    try {
      await my(g, D), b(), await m();
    } catch (C) {
      z.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, L = (E) => {
    t(`tag:${E}`);
  }, R = p.useMemo(() => n.filter((E) => E.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(xr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(fe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: v, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (E) => d(E.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ s.jsx(Vs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (E) => i(E.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: R.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : R.map((E) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: g === E.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: T, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: u,
            className: "meld-tag-rename-input",
            value: x,
            onChange: (D) => w(D.target.value),
            onKeyDown: (D) => D.key === "Escape" && b()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: _ || !x.trim(),
            children: /* @__PURE__ */ s.jsx(dt, { size: 14 })
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
            children: /* @__PURE__ */ s.jsx(fe, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: E.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => L(E.name),
              children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(E),
              children: /* @__PURE__ */ s.jsx(Sf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(E.id, E.name),
              children: /* @__PURE__ */ s.jsx(Qt, { size: 14 })
            }
          )
        ] })
      ] }) }, E.id)) })
    ] })
  ] });
}, ka = 56, pm = (e, t) => {
  const n = p.useCallback(async (l) => yi(l), []), r = p.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: ht(h, ka)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = ht(i, ka) : c = ht(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        ka
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const h = r(i);
        return [d, ...h].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, qc = ({
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
}, Yv = ({
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
  handleNext: h,
  handlePrevious: y,
  handleEditTags: g,
  handleRestore: k,
  fetchLineage: x,
  restoreImages: w,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = p.useState(null), [m, v] = p.useState(
    null
  ), j = p.useCallback(
    async (E = !1) => {
      if (!n) return;
      const D = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!E && D === "confirm") {
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
        const F = e.viewScope === "trash", C = /* @__PURE__ */ new Set([n.id]);
        let B = [];
        if (D === "lineage") {
          B = await x(n.id);
          for (const Q of B)
            C.add(Q.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await xo(Array.from(C), F), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (qc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: C,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(C)
        }), !F) {
          const Q = [
            ...l,
            ...B,
            ...i,
            ...c
          ], I = /* @__PURE__ */ new Map();
          for (const A of Q)
            I.set(A.id, A);
          const M = Array.from(C).map((A) => {
            const $ = I.get(A);
            return $ || {
              id: A,
              filename: `deleted_${A}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          u(M), v(null);
        }
      } catch (F) {
        t({
          type: "SET_ERROR",
          payload: F instanceof Error ? F.message : String(F)
        });
      }
    },
    [
      a,
      l,
      t,
      n,
      x,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), S = p.useCallback(() => {
    n && g(n);
  }, [g, n]), b = p.useCallback(async () => {
    n && (l.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await k(n));
  }, [l.length, t, h, k, n]), T = p.useCallback(async () => {
    if (!f || f.length === 0) return;
    const E = f.map((D) => D.id);
    try {
      const D = await w(E);
      if (!d.isMountedRef.current) return;
      const F = D.restored_ids || E, C = new Set(F), B = f.filter((I) => C.has(I.id));
      if (B.length > 0 && t({ type: "ADD_IMAGES", payload: B }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: F }), u(null), !d.isMountedRef.current) return;
      const Q = F[0];
      Q !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: Q,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [
    t,
    f,
    d.isMountedRef,
    w,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), L = p.useCallback(async () => {
    if (f && f.length > 0) {
      await T();
      return;
    }
    if (!m || m.type !== "tags")
      return;
    const { imageId: E, addTags: D, removeTags: F } = m;
    try {
      await _([E], D, F);
      const C = (o === "lineage" ? i : c).find(
        (B) => B.id === E
      );
      if (C) {
        const B = [...C.tags];
        for (const I of D)
          B.includes(I) || B.push(I);
        const Q = B.filter((I) => !F.includes(I));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...C, tags: Q }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: E,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      v(null);
    } catch (C) {
      t({
        type: "SET_ERROR",
        payload: C instanceof Error ? C.message : String(C)
      });
    }
  }, [
    t,
    T,
    c,
    f,
    m,
    i,
    _,
    e.viewerLightTableSlotId,
    o
  ]), R = p.useCallback(
    async (E) => {
      if (!E || typeof E != "string" || !n) return;
      const D = n.id, F = [...n.tags], C = $y(E, n), { addTags: B, removeTags: Q, isDeleted: I, moveNext: M, movePrev: A, sendToLtSlot: $ } = C;
      if ($) {
        const N = se.getState(), P = N.slots.find(
          (W) => W.id.toLowerCase() === $.toLowerCase() || W.label.toLowerCase() === $.toLowerCase()
        );
        P ? (N.addToBucket(P.id, String(D), n), N.showToast(`Sent to ${P.label}`), I || qc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([D]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [D]
        })) : (N.showToast(`Error: Light Table slot "${$}" not found`, "error"), z.warn(`Attempted to send to non-existent LT slot: ${$}`));
      }
      if (B.length > 0 || Q.length > 0)
        try {
          await _([D], B, Q);
          const N = [...F];
          for (const W of B)
            N.includes(W) || N.push(W);
          const P = N.filter((W) => !Q.includes(W));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: D, tags: P }
          }), v({
            type: "tags",
            imageId: D,
            addTags: [...Q],
            removeTags: [...B]
          }), u(null);
        } catch (N) {
          z.error("Failed to update tags via shortcut:", N), t({
            type: "SET_ERROR",
            payload: N instanceof Error ? N.message : String(N)
          });
        }
      I ? await j(!0) : M ? h() : A && await y();
    },
    [
      a,
      l,
      t,
      _,
      j,
      h,
      y,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: f,
    setLastDeletedImages: u,
    handleDelete: j,
    handleTagEditAction: S,
    handleRestoreAction: b,
    handleUndo: L,
    executeCommand: R
  };
}, Xv = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        z.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return p.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, Zv = ({
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
  handleUndo: h,
  handleTagEditAction: y,
  handleRestoreAction: g,
  executeCommand: k,
  setShowDetails: x,
  setActiveShortcutKey: w
}) => {
  const _ = p.useCallback(
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
      const v = f.key === "Delete" || f.key === "Backspace", j = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", S = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), b = f.key === "Escape", T = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), L = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (v || j || S || b || T || L)
        if (!m || b)
          fl(f);
        else
          return;
      else
        return;
      if (b)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (j)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (S && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (S && (f.key === "i" || f.key === "I"))
        x((R) => !R);
      else if (S && (f.key === "t" || f.key === "T"))
        y();
      else if (S && (f.key === "r" || f.key === "R") && n === "trash")
        g();
      else if (v)
        d();
      else if (T)
        h();
      else if (L && !m) {
        const R = `viewer.shortcut.${f.key}`, E = r[R];
        typeof E == "string" && E && (w(f.key), setTimeout(() => {
          a.current && w(null);
        }, 500), k(E));
      }
    },
    [
      t,
      l,
      k,
      d,
      i,
      c,
      g,
      y,
      h,
      a,
      w,
      x,
      r,
      o,
      n,
      e
    ]
  );
  Hs({
    enabled: e !== null,
    onKeyDown: _
  });
}, Jv = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(0);
  return p.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), yi(t).then((h) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        z.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, ew = ({
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
  mountRefs: h
}) => {
  const y = a === "lighttable" ? r : void 0, g = p.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: y }
    });
  }, [y, e, t]), k = p.useCallback(async () => {
    const x = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && x) {
      d(!0);
      try {
        const w = o.limit, _ = o.total, f = Math.max(0, _ - w), u = await ts(f, w, i);
        if (!h.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null)) return;
        if (u.images.length > 0) {
          const m = u.images.at(-1);
          if (!m) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: m.id, mode: "gallery" }
          });
        }
      } catch (w) {
        z.error("Failed to jump to end:", w);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: y }
      });
  }, [
    y,
    l,
    e,
    t,
    c,
    h,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: g, handlePrevious: k };
};
function tw(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? l || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const nw = ({
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
  p.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0) return;
    const h = t.map((_) => _.id), y = h.indexOf(e);
    if (y === -1) return;
    const g = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: k, nextId: x } = tw({
      ids: h,
      index: y,
      loopEnabled: g,
      hasMore: a && o === "gallery"
    }), w = setTimeout(() => {
      const _ = [k, x].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then((f) => {
        for (const u of f)
          u.status === "rejected" && z.warn("Prefetching adjacent image details failed", u.reason);
      });
    }, 50);
    return () => clearTimeout(w);
  }, [
    t,
    d,
    a,
    r,
    l,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const h = [n + 1, n + 2, n - 1], y = setTimeout(() => {
      for (const g of h)
        if (g >= 0 && g < t.length) {
          const k = t[g];
          if (!k) continue;
          const x = new Image();
          x.src = vi(k);
        }
    }, 150);
    return () => clearTimeout(y);
  }, [n, t, e]);
};
function rw(e) {
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
const lw = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var wl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: y,
    handleEditNotes: g,
    handleRestore: k,
    handleUpdateUserNotes: x,
    handleRestoreWorkflow: w,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: m,
    handleEditSource: v
  } = Qs(e, t), { getParentChain: j, fetchLineage: S } = pm(a, c), [b, T] = p.useState(!1), [L, R] = p.useState(c["viewer.show_details_by_default"]), [E, D] = p.useState(null), F = E ?? c["viewer.show_thumbnails"], [C, B] = p.useState(!1), [Q, I] = p.useState(null), M = p.useRef(null), A = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(l)
  };
  p.useEffect(() => (A.isMountedRef.current = !0, () => {
    A.isMountedRef.current = !1;
  }), [A.isMountedRef]), p.useEffect(() => {
    A.viewerImageIdRef.current = l;
  }, [A.viewerImageIdRef, l]);
  const $ = p.useMemo(() => {
    const be = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const it = se.getState(), vt = it.buckets[e.viewerLightTableSlotId] || [], Dt = new Map(a.map((K) => [K.id, K])), U = new Map(i.map((K) => [K.id, K]));
      return vt.map((K) => {
        const ee = Number.parseInt(K, 10);
        return Dt.get(ee) || U.get(ee) || it.images[K] || rw(ee);
      });
    }
    return o === "lineage" ? i : a.filter(
      (it) => it.exists !== !1 && (c["gallery.show_parent_images"] || be || !it.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), N = l === null ? -1 : $.findIndex((be) => be.id === l), W = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? $ : a).find((be) => be.id === l) || (l === ((wl = e.viewerFallbackImage) == null ? void 0 : wl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: O, toggleFullscreen: H } = Xv({
    overlayRef: M,
    settings: c,
    setShowDetails: R
  }), { handleNext: J, handlePrevious: ie } = ew({
    dispatch: t,
    isFullscreen: O,
    settings: c,
    currentThumbnails: $,
    currentIndex: N,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: C,
    setIsJumping: B,
    mountRefs: A
  }), {
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    handleDelete: ue,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    handleUndo: Kt,
    executeCommand: Gt
  } = Yv({
    state: e,
    dispatch: t,
    image: W,
    isFullscreen: O,
    currentThumbnails: $,
    currentIndex: N,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: A,
    handleNext: J,
    handlePrevious: ie,
    handleEditTags: y,
    handleRestore: k,
    fetchLineage: S,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: qt } = Jv({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: A.isMountedRef
  });
  Zv({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: A.isMountedRef,
    toggleFullscreen: H,
    handleNext: J,
    handlePrevious: ie,
    handleDelete: () => {
      ue();
    },
    handleUndo: Kt,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    executeCommand: Gt,
    setShowDetails: R,
    setActiveShortcutKey: I
  }), p.useEffect(() => {
    l !== null && r(l).catch((be) => {
      z.error("Failed to fetch full image details for viewer:", be);
    });
  }, [r, l]), nw({
    viewerImageId: l,
    currentThumbnails: $,
    currentIndex: N,
    isFullscreen: O,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const On = p.useMemo(() => {
    if (!F || N === -1) return [];
    const be = c["viewer.thumbnail_window_size"], it = Math.floor(be / 2);
    let vt = Math.max(0, N - it);
    const Dt = Math.min($.length, vt + be);
    return Dt === $.length && (vt = Math.max(0, Dt - be)), $.slice(vt, Dt).map((U, K) => ({
      img: U,
      absIndex: vt + K
    }));
  }, [$, N, c, F]), _r = p.useMemo(() => W ? j(W) : [], [j, W]);
  return p.useEffect(() => {
    var be, it;
    if (l !== null) {
      if (F) {
        const vt = document.querySelector(".meld-viewer-thumbnail--active");
        vt && vt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((be = document.activeElement) == null ? void 0 : be.tagName) === "CANVAS" && document.activeElement.blur(), (it = M.current) == null || it.focus();
    }
  }, [F, l]), {
    isFullscreen: O,
    showDetails: L,
    setShowDetails: R,
    showThumbnails: F,
    setShowThumbnailsOverride: D,
    isLoadingLineage: qt,
    isJumping: C,
    isMenuOpen: b,
    setIsMenuOpen: T,
    activeShortcutKey: Q,
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    overlayRef: M,
    handleNext: J,
    handlePrevious: ie,
    handleDelete: ue,
    handleUpdateUserNotes: x,
    handleEditNotes: () => W && g(W),
    handleTagEdit: Et,
    handleRestore: q,
    handleUndo: Kt,
    handleRestoreWorkflow: async () => {
      if (!W) return;
      await w(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!W) return;
      await _(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!W) return;
      f(W) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => W && u(W),
    handleRunWithMask: (be) => W && m(W, be),
    handleEditSource: () => W && v(W),
    toggleFullscreen: H,
    currentIndex: N,
    currentThumbnails: $,
    image: W,
    windowedThumbnails: On,
    parentChain: _r
  };
}, Si = ({
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
  onEditTags: h,
  onEditNotes: y,
  onDelete: g,
  onRestore: k,
  showRestore: x,
  deleteLabel: w,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const [v, j] = p.useState("left");
  p.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? j("right") : j("left"));
  }, [e, n]);
  const S = (L) => {
    switch (L) {
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
        return h;
      case "edit_notes":
        return y;
      case "restore_image":
        return k;
      case "delete_or_trash":
        return g;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((L) => L && L !== ""), T = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: T, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (L) => {
          L.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(_g, { size: u })
      }
    ),
    _ && b.map((L, R) => {
      const E = Jf.find((C) => C.id === L);
      if (!E || !E.icon) return null;
      const D = E.icon, F = S(L);
      return !F || L === "restore_image" && !x ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (C) => {
            C.stopPropagation(), F();
          },
          title: E.label,
          children: /* @__PURE__ */ s.jsx(D, { size: u })
        },
        `${L}-${R}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${v === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Vf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Kf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Gf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Qf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Hf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Bf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Yf,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Xf,
            handler: y
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: qf,
            handler: d
          },
          ...x ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Zf,
              handler: k,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: w,
            icon: Qt,
            handler: g,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((L) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${L.className || ""}`,
            onMouseDown: (R) => R.stopPropagation(),
            onClick: (R) => {
              R.preventDefault(), R.stopPropagation(), L.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(L.icon, { size: 14, color: L.color }),
              /* @__PURE__ */ s.jsx("span", { children: L.label })
            ]
          },
          L.id
        ))
      }
    )
  ] });
}, sw = ({
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
}) }) : null, aw = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle"), [d, h] = p.useState(null), y = p.useRef(null), g = p.useCallback(async (w, _) => {
    try {
      await navigator.clipboard.writeText(w), y.current && (clearTimeout(y.current), y.current = null), h(_), y.current = setTimeout(() => {
        h(null), y.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  p.useEffect(() => (c("idle"), h(null), () => {
    y.current && (clearTimeout(y.current), y.current = null);
  }), []);
  const k = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], x = k === "always" || k === "if_present" && e.user_notes;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Copy filepath" : "Copy filename",
                onClick: (w) => {
                  w.stopPropagation();
                  const _ = (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename;
                  g(_, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy dimensions",
                onClick: (w) => {
                  w.stopPropagation(), g(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy created timestamp",
                onClick: (w) => {
                  w.stopPropagation(), g(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy deleted timestamp",
                onClick: (w) => {
                  w.stopPropagation();
                  const _ = e.deleted_at;
                  _ && g(new Date(_ * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy model",
                onClick: (w) => {
                  w.stopPropagation();
                  const _ = e.model_name;
                  _ && g(_, "model");
                },
                children: d === "model" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
            (w, _) => w.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: w.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (f) => {
                  f.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: w.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: _ === 0 ? "Source" : _ === 1 ? "Grand-Source" : `Ancestor (S${_ + 1})`,
                alt: "source thumb"
              },
              w.id || _
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy positive prompt",
                onClick: (w) => {
                  w.stopPropagation(), g(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy negative prompt",
                onClick: (w) => {
                  w.stopPropagation(), g(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy tags",
                onClick: (w) => {
                  var _;
                  w.stopPropagation(), g(((_ = e.tags) == null ? void 0 : _.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((w) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: w }, w)) })
        ] }),
        x && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item__header", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
              "Notes",
              i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-viewer-details-copy-btn",
                title: "Copy",
                "aria-label": "Copy notes",
                onClick: (w) => {
                  w.stopPropagation(), g(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (w) => {
                w.stopPropagation(), o == null || o();
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
}, hm = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = ht(e, 64);
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
              children: i ? /* @__PURE__ */ s.jsx(wf, { size: 12 }) : /* @__PURE__ */ s.jsx(vf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
hm.displayName = "ThumbnailItem";
const ow = ({
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
    hm,
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
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(hr, { className: "animate-spin", size: 20 }) })
] }) });
function iw() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = me(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: y,
    setIsMenuOpen: g,
    activeShortcutKey: k,
    setLastDeletedImages: x,
    overlayRef: w,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: v,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: T,
    handleRunWithMask: L,
    handleEditSource: R,
    handleDelete: E,
    toggleFullscreen: D,
    image: F,
    windowedThumbnails: C,
    parentChain: B
  } = lw({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), Q = p.useRef(null), I = p.useRef(null), { executeWorkflow: M } = xi(), A = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!F) return null;
  const { viewerImageId: $, viewerMode: N } = e, P = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return he.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: w,
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
              onClick: (W) => W.stopPropagation(),
              children: [
                P && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: v,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(hr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(kf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(mg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: D,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(xg, { size: 20 }) : /* @__PURE__ */ s.jsx(vg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    Si,
                    {
                      isMenuOpen: y,
                      setIsMenuOpen: g,
                      menuRef: I,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: T,
                      onRunWithMask: L,
                      onEditSource: R,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: E,
                      deleteLabel: A,
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
                      children: /* @__PURE__ */ s.jsx(fe, { size: 20 })
                    }
                  )
                ] }),
                P && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(_f, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(hr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: Q,
                      src: vi(F),
                      alt: F.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                P && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(hi, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  aw,
                  {
                    image: F,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: P,
                    parentChain: B,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  ow,
                  {
                    windowedThumbnails: C,
                    viewerImageId: $,
                    currentImage: F,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: N,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(sw, { settings: e.settings, activeShortcutKey: k })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            lm,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (W, O) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: W,
                        targetLoaderNodeId: O
                      }
                    }), !1;
                  const H = e.activeModal.maskFilename;
                  for (const J of e.activeModal.images)
                    await M(W, J, H, O);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            rm,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (W) => {
                e.activeModal.type === "node_selection" && ul(e.activeModal.image, W);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(am, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            sm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: x
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(om, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Rf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(em, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            tm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            _i,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            $f,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const W = e.activeModal.currentIndex + 1;
                  W < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: W
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            nm,
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
const cw = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = me(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), y = p.useRef(null), g = se((_) => _.buckets), k = p.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [g]), x = p.useMemo(() => e.images.filter((_) => k.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [e.images, e.settings, e.viewScope, k, d]), w = x;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (z.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), Hs({
    onKeyDown: (_) => {
      if (_.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), fl(_));
    }
  }), p.useEffect(() => {
    const _ = new IntersectionObserver(
      (u) => {
        const m = u[0];
        if (m && m.isIntersecting) {
          if (e.isLoading) {
            z.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (z.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : z.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: x.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = h.current;
    return f && _.observe(f), () => {
      f && _.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    x.length,
    e.images.length
  ]), p.useEffect(() => {
    e.viewerImageId !== null && (y.current = e.viewerImageId);
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
    displayedImages: x,
    visibleImages: w,
    isSearchActive: d,
    loadMoreRef: h
  };
}, dw = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = me(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Qs(e, t), o = e.selectedIds.size, [i, c] = p.useState(!1), [d, h] = p.useState(null), y = p.useRef(null), g = p.useRef(null), k = dm("bulkActionBar");
  if (Te({
    onEscape: () => c(!1),
    enabled: i
  }), ml({
    enabled: i,
    insideRefs: [y, g],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const x = e.viewScope === "trash", w = () => e.images.filter((b) => e.selectedIds.has(b.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    y.current && (h(y.current.getBoundingClientRect()), c(!0));
  }, f = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = w(), T = /* @__PURE__ */ new Set();
    for (const L of b)
      if (L.tags)
        for (const R of L.tags)
          T.add(R);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(T)
      }
    });
  }, m = () => {
    const b = w();
    l(b);
  }, v = () => {
    const b = w();
    b.length > 0 && a(b, "run");
  }, j = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs("div", { className: `meld-bulk-bar ${x ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: y,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: _,
        children: [
          /* @__PURE__ */ s.jsx(wg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ s.jsx(fe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
        children: x ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => f(r),
              children: [
                /* @__PURE__ */ s.jsx(hr, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(Qt, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(xr, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(gi, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(v),
              children: [
                /* @__PURE__ */ s.jsx(Sg, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(cl, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(Qt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    )
  ] });
  return he.createPortal(S, k);
};
function Un(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const y = e();
    if (!(y.length !== r.length || y.some((x, w) => r[w] !== x)))
      return l;
    r = y;
    let k;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (k = Date.now()), l = t(...y), n.key && ((d = n.debug) != null && d.call(n))) {
      const x = Math.round((Date.now() - h) * 100) / 100, w = Math.round((Date.now() - k) * 100) / 100, _ = w / 16, f = (u, m) => {
        for (u = String(u); u.length < m; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${f(w, 5)} /${f(x, 5)} ms`,
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
function Yc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const uw = (e, t) => Math.abs(e - t) < 1.01, fw = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Xc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, mw = (e) => e, pw = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, hw = (e, t) => {
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
  if (l(Xc(n)), !r.ResizeObserver)
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
      l(Xc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Zc = {
  passive: !0
}, Jc = typeof window > "u" ? !0 : "onscrollend" in window, gw = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Jc ? () => {
  } : fw(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: y, isRtl: g } = e.options;
    l = y ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, a(), t(l, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Zc);
  const d = e.options.useScrollendEvent && Jc;
  return d && n.addEventListener("scrollend", c, Zc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, yw = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, vw = (e, {
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
class ww {
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
        getItemKey: mw,
        rangeExtractor: pw,
        onChange: () => {
        },
        measureElement: yw,
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
    }, this.maybeNotify = Un(
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
    }, this.getMeasurementOptions = Un(
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
    ), this.getMeasurements = Un(
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
        const h = this.measurementsCache.slice(0, d), y = new Array(i).fill(
          void 0
        );
        for (let g = 0; g < d; g++) {
          const k = h[g];
          k && (y[k.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const k = a(g), x = this.laneAssignments.get(g);
          let w, _;
          if (x !== void 0 && this.options.lanes > 1) {
            w = x;
            const v = y[w], j = v !== void 0 ? h[v] : void 0;
            _ = j ? j.end + this.options.gap : r + l;
          } else {
            const v = this.options.lanes === 1 ? h[g - 1] : this.getFurthestMeasurement(h, g);
            _ = v ? v.end + this.options.gap : r + l, w = v ? v.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, w);
          }
          const f = c.get(k), u = typeof f == "number" ? f : this.options.estimateSize(g), m = _ + u;
          h[g] = {
            index: g,
            start: _,
            size: u,
            end: m,
            key: k,
            lane: w
          }, y[w] = g;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Un(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? xw({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Un(
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
    }, this.getVirtualItems = Un(
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
        return Yc(
          r[gm(
            0,
            r.length - 1,
            (l) => Yc(r[l]).start,
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
        const h = this.getOffsetForIndex(n, d);
        if (!h) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [y, g] = h;
        this._scrollToOffset(y, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const k = () => {
            if (this.currentScrollToIndex !== n) return;
            const x = this.getScrollOffset(), w = this.getOffsetForIndex(n, g);
            if (!w) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            uw(w[0], x) || c(g);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(k) : k();
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
const gm = (e, t, n, r) => {
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
function xw({
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
  let o = gm(
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
    for (; i < l && c.some((h) => h < n + t); ) {
      const h = e[i];
      c[h.lane] = h.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((h) => h >= n); ) {
      const h = e[o];
      d[h.lane] = h.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const ed = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function _w({
  useFlushSync: e = !0,
  ...t
}) {
  const n = p.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? he.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = p.useState(
    () => new ww(r)
  );
  return l.setOptions(r), ed(() => l._didMount(), []), ed(() => l._willUpdate()), l;
}
function kw(e) {
  return _w({
    observeElementRect: hw,
    observeElementOffset: gw,
    scrollToFn: vw,
    ...e
  });
}
const ym = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = me(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: y,
    handleRunWithMask: g,
    handleRestore: k,
    handleDelete: x,
    handleEditNotes: w,
    handleUpdateUserNotes: _
  } = Qs(t, n), { getParentChain: f } = pm(t.images, t.settings), [u, m] = p.useState(null), [v, j] = p.useState(!1), [S, b] = p.useState(null), [T, L] = p.useState(!1), R = p.useRef(null);
  ml({
    enabled: v,
    insideRefs: [R],
    onOutside: () => j(!1)
  });
  const E = async (q, Kt, Gt = !1) => {
    try {
      await navigator.clipboard.writeText(q), Gt ? (L(!0), setTimeout(() => L(!1), 2e3)) : (b(Kt), setTimeout(() => b(null), 2e3));
    } catch (qt) {
      z.error("Failed to copy text: ", qt);
    }
  }, D = p.useCallback(
    (q) => {
      if (q.key === "Escape") {
        if (u) {
          fl(q), m(null);
          return;
        }
        v && (fl(q), j(!1));
      }
    },
    [u, v]
  );
  Hs({
    enabled: v || u !== null,
    onKeyDown: D
  });
  const F = f(e), B = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, Q = t.settings["sidebar.thumbnail_size"] || 100, I = ht(e, Math.min(400, Math.round(Q * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: v,
    setIsMenuOpen: j,
    copiedLabel: S,
    popupCopied: T,
    menuRef: R,
    parentChain: F,
    displayFilename: B,
    imgSrc: I,
    handleCopy: E,
    handleClick: (q) => {
      !q || typeof q.preventDefault != "function" || (q.shiftKey ? (q.preventDefault(), q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : q.ctrlKey || q.metaKey || t.selectedIds.size > 0 ? (q.preventDefault(), q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id }));
    },
    handleSelectToggle: (q) => {
      !q || typeof q.preventDefault != "function" || (q.preventDefault(), q.stopPropagation(), q.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleContainerClick: (q) => {
      !q || typeof q.preventDefault != "function" || (q.shiftKey ? (q.preventDefault(), q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : q.ctrlKey || q.metaKey || t.selectedIds.size > 0 ? (q.preventDefault(), q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (q.preventDefault(), q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })));
    },
    handleMouseDown: (q) => {
      !q || typeof q.preventDefault != "function" || !q.target || q.target instanceof Element && q.target.closest("textarea, input, button, .meld-image-card__meta-content") || !q.shiftKey && !q.ctrlKey && !q.metaKey && l || (q.shiftKey || q.ctrlKey || q.metaKey || t.selectedIds.size > 0) && q.preventDefault();
    },
    handleKeyDown: (q) => {
      var Gt, qt, On;
      !q || typeof q.preventDefault != "function" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "INPUT" || ((qt = document.activeElement) == null ? void 0 : qt.tagName) === "TEXTAREA" || (On = document.activeElement) != null && On.isContentEditable || (q.key === "Enter" || q.key === " ") && (q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      w(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      k(e);
    },
    handleDelete: () => {
      x(e);
    },
    handleRunWithWorkflow: () => {
      y(e);
    },
    handleRunWithMask: (q = "run") => g(e, q),
    handleUpdateUserNotes: (q) => _(e.id, q),
    fetchFullImageDetails: r
  };
}, Sw = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => (Te({ onEscape: n }), he.createPortal(
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
            l ? /* @__PURE__ */ s.jsx(dt, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(Mt, { className: "meld-prompt-popup__copy", size: 18, onClick: () => r(t) }),
            /* @__PURE__ */ s.jsx(fe, { className: "meld-prompt-popup__close", size: 18, onClick: n })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), vm = rn.memo(({ image: e }) => {
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
    menuRef: h,
    parentChain: y,
    displayFilename: g,
    imgSrc: k,
    handleCopy: x,
    handleClick: w,
    handleSelectToggle: _,
    handleContainerClick: f,
    handleMouseDown: u,
    handleKeyDown: m,
    handleRestoreWorkflow: v,
    handleAddUnifiedLoader: j,
    handleEditSource: S,
    handleEditTags: b,
    handleEditNotes: T,
    handleSendToWorkflow: L,
    handleRestore: R,
    handleDelete: E,
    handleRunWithWorkflow: D,
    handleRunWithMask: F,
    fetchFullImageDetails: C
  } = ym(e), [B, Q] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && B === "saving" && Q("idle");
  }, [e.user_notes, B]);
  const I = (M) => {
    M.stopPropagation();
    let A = String(e.id);
    r && t.selectedIds.size > 0 && (A = Array.from(t.selectedIds).join(",")), M.dataTransfer.setData("text/plain", A), se.getState().setIsOpen(!0);
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
      onDragStart: I,
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
              src: k,
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
              onClick: (M) => {
                M.stopPropagation(), w(M);
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
          t.settings["gallery.show_parent_image"] && y.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: y.map(
              (M, A) => M.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: M.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: ($) => {
                    $.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: M.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: A === 0 ? "Source" : A === 1 ? "Grand-Source" : `Ancestor (S${A + 1})`,
                  alt: "source thumb"
                },
                M.id || A
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
              onClick: async (M) => {
                M.stopPropagation();
                const A = await C(e.id);
                a({
                  title: "Model",
                  text: A.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (M) => {
                      M.stopPropagation();
                      const A = await C(e.id);
                      x(A.model_name || "-", "Model");
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
              onClick: async (M) => {
                M.stopPropagation();
                const A = await C(e.id);
                a({
                  title: "Positive Prompt",
                  text: A.positive_prompt || A.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (M) => {
                      M.stopPropagation();
                      const A = await C(e.id);
                      x(A.positive_prompt || A.positive || "-", "Positive");
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
              onClick: async (M) => {
                M.stopPropagation();
                const A = await C(e.id);
                a({
                  title: "Negative Prompt",
                  text: A.negative_prompt || A.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (M) => {
                      M.stopPropagation();
                      const A = await C(e.id);
                      x(A.negative_prompt || A.negative || "-", "Negative");
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
              onClick: (M) => {
                M.stopPropagation(), b();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((M) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: M }, M)) : /* @__PURE__ */ s.jsx(
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
              B === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (M) => {
                  M.stopPropagation(), T();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          Si,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: j,
            onRestoreWorkflow: v,
            onSendToWorkflow: L,
            onRunWithWorkflow: D,
            onRunWithMask: (M) => F(M),
            onEditSource: S,
            onEditTags: b,
            onEditNotes: T,
            onRestore: R,
            showRestore: t.viewScope === "trash",
            onDelete: E,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Sw,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (M) => x(M, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
vm.displayName = "DetailedImageCard";
const wm = rn.memo(({ image: e }) => {
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
    menuRef: h,
    state: y,
    handleAddUnifiedLoader: g,
    handleRestoreWorkflow: k,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: w,
    handleRunWithMask: _,
    handleEditSource: f,
    handleEditTags: u,
    handleEditNotes: m,
    handleDelete: v,
    handleRestore: j
  } = ym(e), S = y.viewScope === "trash", b = S ? "Delete Permanently" : "Move to Trash", T = (L) => {
    L.stopPropagation();
    let R = String(e.id);
    t && y.selectedIds.size > 0 && (R = Array.from(y.selectedIds).join(",")), L.dataTransfer.setData("text/plain", R), se.getState().setIsOpen(!0);
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
      onDragStart: T,
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
              onClick: (L) => {
                L.stopPropagation(), o(L);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(
          Si,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: y.settings,
            onAddUnifiedLoader: g,
            onRestoreWorkflow: k,
            onSendToWorkflow: x,
            onRunWithWorkflow: w,
            onRunWithMask: _,
            onEditSource: f,
            onEditTags: u,
            onEditNotes: m,
            onDelete: v,
            onRestore: j,
            showRestore: S,
            deleteLabel: b,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
wm.displayName = "SimpleImageCard";
const td = ({ image: e }) => {
  const { state: t } = me();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(wm, { image: e }) : /* @__PURE__ */ s.jsx(vm, { image: e });
}, Sa = 6, jw = 10, bw = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), [d, h] = p.useState(!0), y = t["sidebar.thumbnail_size"] || 100, g = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const m = o.current;
    if (!m) return;
    const v = () => {
      c(m.clientWidth);
    };
    v();
    const j = new ResizeObserver(v);
    return j.observe(m), () => j.disconnect();
  }, []), p.useEffect(() => {
    const m = o.current;
    if (!m) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const v = new IntersectionObserver(
      (j) => {
        const S = j[0];
        S && h(S.isIntersecting);
      },
      { threshold: 0 }
    );
    return v.observe(m), () => v.disconnect();
  }, []);
  const k = y + 10, x = g ? Math.max(
    1,
    Math.floor((i - jw * 2 + Sa) / (k + Sa))
  ) : 1, w = g ? Math.ceil(e.length / x) : e.length, _ = g ? y + 14 : y + 40, f = kw({
    count: w,
    getScrollElement: () => o.current,
    estimateSize: () => _,
    overscan: 5,
    enabled: d,
    getItemKey: (m) => {
      var v;
      return g ? `row-${m}-${x}` : ((v = e[m]) == null ? void 0 : v.id) ?? m;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const m = e.findIndex((j) => j.id === r);
    if (m < 0) return;
    const v = g ? Math.floor(m / x) : m;
    f.scrollToIndex(v, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, g, x, f]);
  const u = f.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${y}px`
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
                const j = m.index * x, S = Math.min(j + x, e.length), b = e.slice(j, S);
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
                      gap: Sa,
                      alignItems: "flex-start"
                    },
                    children: b.map((T) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": T.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: T.width && T.height ? Math.min(y, y * T.width / T.height) + 10 : y + 10,
                              minWidth: y + 10
                            },
                            children: /* @__PURE__ */ s.jsx(td, { image: T })
                          }
                        )
                      },
                      T.id
                    ))
                  },
                  m.key
                );
              }
              const v = e[m.index];
              return v ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": m.index,
                  "data-image-id": v.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${m.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(td, { image: v })
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
}, Cw = () => {
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
    isSearchActive: h,
    loadMoreRef: y
  } = cw(), g = se((b) => b.isOpen), k = se((b) => b.setIsOpen), x = se((b) => b.buckets), w = Object.values(x).some(
    (b) => b && b.length > 0
  );
  z.log("GalleryPanel: isLightTableOpen =", g);
  const [_, f] = p.useState(!1), [u, m] = p.useState(null), v = p.useRef(null), j = p.useCallback(() => {
    v.current && (m(v.current.getBoundingClientRect()), f(!0));
  }, []), S = p.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), f(!1);
    },
    [t, i, a]
  );
  return z.log("GalleryPanel: rendering", {
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
        const T = b.dataTransfer.getData("application/meld-lt-source-slot");
        if (T) {
          b.preventDefault();
          const L = b.dataTransfer.getData("text/plain");
          if (L) {
            const R = L.split(","), E = [];
            R.forEach((D) => {
              if (D) {
                const F = D.trim();
                se.getState().removeFromBucket(T, F);
                const C = Number(F);
                Number.isNaN(C) || E.push(C);
              }
            }), E.length > 0 && t({ type: "DESELECT_IMAGES", payload: E });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Qt, { size: 14 }),
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
                  /* @__PURE__ */ s.jsx(fe, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(l === "analytics" ? "gallery" : "analytics"),
                style: {
                  background: "none",
                  border: "none",
                  color: l === "analytics" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Image Analytics",
                children: /* @__PURE__ */ s.jsx(xf, { size: 14 })
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
                  color: h ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: v,
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
                children: /* @__PURE__ */ s.jsx(gr, { size: 14, fill: _ ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ s.jsx(xr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const T = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", T);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(hg, { size: 14 }) : /* @__PURE__ */ s.jsx(kf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  z.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    g,
                    "to",
                    !g
                  ), k(!g);
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
                    kg,
                    {
                      size: 14,
                      fill: g ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: g ? 1 : 0.8 }
                    }
                  ),
                  !g && w && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(cl, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(hr, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ s.jsx(jf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Gv, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Sv, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "analytics" ? /* @__PURE__ */ s.jsx(
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
                kv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (b) => {
                    t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
                  }
                }
              )
            }
          ) : l === "tags" ? /* @__PURE__ */ s.jsx(
            qv,
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
                bw,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: y,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(dw, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(iw, {}),
        /* @__PURE__ */ s.jsx(Xy, {}),
        _ && /* @__PURE__ */ s.jsx(
          Qv,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: S
          }
        ),
        /* @__PURE__ */ s.jsx(Lv, {})
      ]
    }
  );
};
nd.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    function t(l) {
      return l !== null && typeof l == "object" && "comfyClass" in l && typeof l.comfyClass == "string" && Array.isArray(l.widgets);
    }
    if (!t(e)) return;
    const n = e;
    if (n.comfyClass !== "MeldUnifiedLoader") return;
    const r = () => {
      var o, i;
      const l = (o = n.widgets) == null ? void 0 : o.find((c) => c.name === "positive"), a = (i = n.widgets) == null ? void 0 : i.find((c) => c.name === "negative");
      l && l.inputEl && (l.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", l.inputEl.style.paddingLeft = "8px"), a && a.inputEl && (a.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", a.inputEl.style.paddingLeft = "8px");
    };
    r(), setTimeout(r, 1), setTimeout(r, 100);
  }
});
const Ew = document.getElementById("meld-gallery-style");
if (!Ew) {
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
let Ul = null, ct = null;
nd.registerExtension({
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
    var n;
    Ev();
    try {
      const r = await Tf();
      z.init(r.dev_mode), z.log("Settings received:", r);
    } catch (r) {
      z.error("Failed to fetch settings", r), z.init(!1);
    }
    if (!((n = e.extensionManager) != null && n.registerSidebarTab))
      return;
    e.ui.meld = {
      refresh: () => {
        window.dispatchEvent(new CustomEvent("meld-refresh"));
      },
      isVisible: () => {
        const r = document.getElementById("meld-gallery-container");
        return r && r.offsetParent !== null;
      },
      toggle: () => {
        var r;
        try {
          (r = e.extensionManager) == null || r.setSidebarTabActive("meld-gallery");
        } catch (l) {
          z.error("Error toggling sidebar:", l);
        }
      }
    }, te.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), te.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), te.addEventListener("meld-scan-finished", (r) => {
      var l;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (l = e.ui.meld) == null || l.refresh(), z.log("Import completed.");
    });
    function t(r) {
      if (!r || typeof r != "object") return !1;
      const l = r.output;
      if (!l || typeof l != "object") return !1;
      const a = l.images;
      if (!a || !Array.isArray(a)) return !1;
      for (const o of a) {
        if (!o || typeof o != "object") return !1;
        const i = o;
        if (typeof i.filename != "string" || typeof i.subfolder != "string" || typeof i.type != "string")
          return !1;
      }
      return !0;
    }
    te.addEventListener("executed", async (r) => {
      var l;
      if (t(r.detail) && (l = r.detail.output) != null && l.images) {
        for (const a of r.detail.output.images)
          if (a.type === "output")
            try {
              await Nf({
                filename: a.filename,
                subfolder: a.subfolder,
                type: a.type
              });
            } catch (o) {
              z.error("Failed to auto-register image:", o);
            }
      }
    });
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
        render: (r) => {
          z.log("render called", {
            el: r,
            galleryRoot: Ul,
            galleryContainer: ct
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let l = r.parentElement;
          for (; l && !l.classList.contains("sidebar-content-container"); )
            l.style.height = "100%", l.style.overflow = "hidden", l = l.parentElement;
          l && (l.style.overflow = "hidden"), ct || (z.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), r.contains(ct) || (z.log("Appending galleryContainer to el"), r.appendChild(ct)), Ul ? z.log("Gallery root already exists, React should handle re-render if needed") : (z.log("Creating new gallery root"), Ul = pf(ct), Ul.render(
            rn.createElement(dy, null, rn.createElement(Cw))
          ));
        }
      });
    } catch (r) {
      z.error("Error during sidebar registration:", r);
    }
  }
});
export {
  Tw as c,
  Cm as g
};
