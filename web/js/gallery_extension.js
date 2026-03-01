import { api as re } from "/scripts/api.js";
import { app as Tc } from "/scripts/app.js";
function $m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lc = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl = Symbol.for("react.element"), Um = Symbol.for("react.portal"), Vm = Symbol.for("react.fragment"), Bm = Symbol.for("react.strict_mode"), Qm = Symbol.for("react.profiler"), Hm = Symbol.for("react.provider"), Km = Symbol.for("react.context"), Gm = Symbol.for("react.forward_ref"), qm = Symbol.for("react.suspense"), Ym = Symbol.for("react.memo"), Xm = Symbol.for("react.lazy"), di = Symbol.iterator;
function Zm(e) {
  return e === null || typeof e != "object" ? null : (e = di && e[di] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Dc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pc = Object.assign, Rc = {};
function ir(e, t, n) {
  this.props = e, this.context = t, this.refs = Rc, this.updater = n || Dc;
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Oc() {
}
Oc.prototype = ir.prototype;
function oo(e, t, n) {
  this.props = e, this.context = t, this.refs = Rc, this.updater = n || Dc;
}
var io = oo.prototype = new Oc();
io.constructor = oo;
Pc(io, ir.prototype);
io.isPureReactComponent = !0;
var ui = Array.isArray, zc = Object.prototype.hasOwnProperty, co = { current: null }, Ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) zc.call(t, r) && !Ac.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: nl, type: e, key: a, ref: o, props: l, _owner: co.current };
}
function Jm(e, t) {
  return { $$typeof: nl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function uo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function ef(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var mi = /\/+/g;
function Os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ef("" + e.key) : t.toString(36);
}
function Tl(e, t, n, r, l) {
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
        case nl:
        case Um:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Os(o, 0) : r, ui(l) ? (n = "", e != null && (n = e.replace(mi, "$&/") + "/"), Tl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (uo(l) && (l = Jm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(mi, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ui(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Os(a, i);
    o += Tl(a, t, n, c, l);
  }
  else if (c = Zm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Os(a, i++), o += Tl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function tf(e) {
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
var Ge = { current: null }, Ll = { transition: null }, nf = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Ll, ReactCurrentOwner: co };
function Wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: cl, forEach: function(e, t, n) {
  cl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!uo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = ir;
ie.Fragment = Vm;
ie.Profiler = Qm;
ie.PureComponent = oo;
ie.StrictMode = Bm;
ie.Suspense = qm;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nf;
ie.act = Wc;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = co.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) zc.call(t, c) && !Ac.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: a, props: r, _owner: o };
};
ie.createContext = function(e) {
  return e = { $$typeof: Km, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hm, _context: e }, e.Consumer = e;
};
ie.createElement = Fc;
ie.createFactory = function(e) {
  var t = Fc.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: Gm, render: e };
};
ie.isValidElement = uo;
ie.lazy = function(e) {
  return { $$typeof: Xm, _payload: { _status: -1, _result: e }, _init: tf };
};
ie.memo = function(e, t) {
  return { $$typeof: Ym, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Ll.transition;
  Ll.transition = {};
  try {
    e();
  } finally {
    Ll.transition = t;
  }
};
ie.unstable_act = Wc;
ie.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return Ge.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
ie.useId = function() {
  return Ge.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return Ge.current.useRef(e);
};
ie.useState = function(e) {
  return Ge.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return Ge.current.useTransition();
};
ie.version = "18.3.1";
Lc.exports = ie;
var m = Lc.exports;
const Yt = /* @__PURE__ */ $m(m);
var $c = { exports: {} }, at = {}, Uc = { exports: {} }, Vc = {};
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
  function t(C, D) {
    var Q = C.length;
    C.push(D);
    e: for (; 0 < Q; ) {
      var $ = Q - 1 >>> 1, H = C[$];
      if (0 < l(H, D)) C[$] = D, C[Q] = H, Q = $;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0], Q = C.pop();
    if (Q !== D) {
      C[0] = Q;
      e: for (var $ = 0, H = C.length, se = H >>> 1; $ < se; ) {
        var V = 2 * ($ + 1) - 1, Z = C[V], K = V + 1, de = C[K];
        if (0 > l(Z, Q)) K < H && 0 > l(de, Z) ? (C[$] = de, C[K] = Q, $ = K) : (C[$] = Z, C[V] = Q, $ = V);
        else if (K < H && 0 > l(de, Q)) C[$] = de, C[K] = Q, $ = K;
        else break e;
      }
    }
    return D;
  }
  function l(C, D) {
    var Q = C.sortIndex - D.sortIndex;
    return Q !== 0 ? Q : C.id - D.id;
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
  var c = [], d = [], h = 1, v = null, w = 3, x = !1, y = !1, _ = !1, j = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(C) {
    for (var D = n(d); D !== null; ) {
      if (D.callback === null) r(d);
      else if (D.startTime <= C) r(d), D.sortIndex = D.expirationTime, t(c, D);
      else break;
      D = n(d);
    }
  }
  function p(C) {
    if (_ = !1, f(C), !y) if (n(c) !== null) y = !0, P(k);
    else {
      var D = n(d);
      D !== null && T(p, D.startTime - C);
    }
  }
  function k(C, D) {
    y = !1, _ && (_ = !1, g(b), b = -1), x = !0;
    var Q = w;
    try {
      for (f(D), v = n(c); v !== null && (!(v.expirationTime > D) || C && !R()); ) {
        var $ = v.callback;
        if (typeof $ == "function") {
          v.callback = null, w = v.priorityLevel;
          var H = $(v.expirationTime <= D);
          D = e.unstable_now(), typeof H == "function" ? v.callback = H : v === n(c) && r(c), f(D);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var se = !0;
      else {
        var V = n(d);
        V !== null && T(p, V.startTime - D), se = !1;
      }
      return se;
    } finally {
      v = null, w = Q, x = !1;
    }
  }
  var S = !1, E = null, b = -1, z = 5, O = -1;
  function R() {
    return !(e.unstable_now() - O < z);
  }
  function U() {
    if (E !== null) {
      var C = e.unstable_now();
      O = C;
      var D = !0;
      try {
        D = E(!0, C);
      } finally {
        D ? X() : (S = !1, E = null);
      }
    } else S = !1;
  }
  var X;
  if (typeof u == "function") X = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), L = M.port2;
    M.port1.onmessage = U, X = function() {
      L.postMessage(null);
    };
  } else X = function() {
    j(U, 0);
  };
  function P(C) {
    E = C, S || (S = !0, X());
  }
  function T(C, D) {
    b = j(function() {
      C(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || x || (y = !0, P(k));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = w;
    }
    var Q = w;
    w = D;
    try {
      return C();
    } finally {
      w = Q;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, D) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var Q = w;
    w = C;
    try {
      return D();
    } finally {
      w = Q;
    }
  }, e.unstable_scheduleCallback = function(C, D, Q) {
    var $ = e.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? $ + Q : $) : Q = $, C) {
      case 1:
        var H = -1;
        break;
      case 2:
        H = 250;
        break;
      case 5:
        H = 1073741823;
        break;
      case 4:
        H = 1e4;
        break;
      default:
        H = 5e3;
    }
    return H = Q + H, C = { id: h++, callback: D, priorityLevel: C, startTime: Q, expirationTime: H, sortIndex: -1 }, Q > $ ? (C.sortIndex = Q, t(d, C), n(c) === null && C === n(d) && (_ ? (g(b), b = -1) : _ = !0, T(p, Q - $))) : (C.sortIndex = H, t(c, C), y || x || (y = !0, P(k))), C;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(C) {
    var D = w;
    return function() {
      var Q = w;
      w = D;
      try {
        return C.apply(this, arguments);
      } finally {
        w = Q;
      }
    };
  };
})(Vc);
Uc.exports = Vc;
var rf = Uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf = m, st = rf;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Bc = /* @__PURE__ */ new Set(), Rr = {};
function Cn(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), da = Object.prototype.hasOwnProperty, sf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fi = {}, hi = {};
function af(e) {
  return da.call(hi, e) ? !0 : da.call(fi, e) ? !1 : sf.test(e) ? hi[e] = !0 : (fi[e] = !0, !1);
}
function of(e, t, n, r) {
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
function cf(e, t, n, r) {
  if (t === null || typeof t > "u" || of(e, t, n, r)) return !0;
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
function qe(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new qe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mo = /[\-:]([a-z])/g;
function fo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mo,
    fo
  );
  Ae[t] = new qe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mo, fo);
  Ae[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mo, fo);
  Ae[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ho(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cf(t, n, l, r) && (n = null), r || l === null ? af(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), On = Symbol.for("react.portal"), zn = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), ua = Symbol.for("react.profiler"), Qc = Symbol.for("react.provider"), Hc = Symbol.for("react.context"), go = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), fa = Symbol.for("react.suspense_list"), yo = Symbol.for("react.memo"), Ht = Symbol.for("react.lazy"), Kc = Symbol.for("react.offscreen"), pi = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object" ? null : (e = pi && e[pi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, zs;
function kr(e) {
  if (zs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    zs = t && t[1] || "";
  }
  return `
` + zs + e;
}
var As = !1;
function Fs(e, t) {
  if (!e || As) return "";
  As = !0;
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
    As = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function df(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fs(e.type, !1), e;
    case 11:
      return e = Fs(e.type.render, !1), e;
    case 1:
      return e = Fs(e.type, !0), e;
    default:
      return "";
  }
}
function ha(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case On:
      return "Portal";
    case ua:
      return "Profiler";
    case po:
      return "StrictMode";
    case ma:
      return "Suspense";
    case fa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Hc:
      return (e.displayName || "Context") + ".Consumer";
    case Qc:
      return (e._context.displayName || "Context") + ".Provider";
    case go:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yo:
      return t = e.displayName || null, t !== null ? t : ha(e.type) || "Memo";
    case Ht:
      t = e._payload, e = e._init;
      try {
        return ha(e(t));
      } catch {
      }
  }
  return null;
}
function uf(e) {
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
      return ha(t);
    case 8:
      return t === po ? "StrictMode" : "Mode";
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
function on(e) {
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
function Gc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mf(e) {
  var t = Gc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ul(e) {
  e._valueTracker || (e._valueTracker = mf(e));
}
function qc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Bl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pa(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function gi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = on(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Yc(e, t) {
  t = t.checked, t != null && ho(e, "checked", t, !1);
}
function ga(e, t) {
  Yc(e, t);
  var n = on(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ya(e, t.type, n) : t.hasOwnProperty("defaultValue") && ya(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function yi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ya(e, t, n) {
  (t !== "number" || Bl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Gn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + on(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function va(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function vi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: on(n) };
}
function Xc(e, t) {
  var n = on(t.value), r = on(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function wi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ml, Jc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ml = ml || document.createElement("div"), ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ml.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
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
}, ff = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function(e) {
  ff.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Er[t] = Er[e];
  });
});
function ed(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Er.hasOwnProperty(e) && Er[e] ? ("" + t).trim() : t + "px";
}
function td(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ed(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var hf = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xa(e, t) {
  if (t) {
    if (hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function _a(e, t) {
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
var ka = null;
function vo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Sa = null, qn = null, Yn = null;
function xi(e) {
  if (e = sl(e)) {
    if (typeof Sa != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = xs(t), Sa(e.stateNode, e.type, t));
  }
}
function nd(e) {
  qn ? Yn ? Yn.push(e) : Yn = [e] : qn = e;
}
function rd() {
  if (qn) {
    var e = qn, t = Yn;
    if (Yn = qn = null, xi(e), t) for (e = 0; e < t.length; e++) xi(t[e]);
  }
}
function ld(e, t) {
  return e(t);
}
function sd() {
}
var Ws = !1;
function ad(e, t, n) {
  if (Ws) return e(t, n);
  Ws = !0;
  try {
    return ld(e, t, n);
  } finally {
    Ws = !1, (qn !== null || Yn !== null) && (sd(), rd());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xs(n);
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
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var ja = !1;
if (zt) try {
  var pr = {};
  Object.defineProperty(pr, "passive", { get: function() {
    ja = !0;
  } }), window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
} catch {
  ja = !1;
}
function pf(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Cr = !1, Ql = null, Hl = !1, ba = null, gf = { onError: function(e) {
  Cr = !0, Ql = e;
} };
function yf(e, t, n, r, l, a, o, i, c) {
  Cr = !1, Ql = null, pf.apply(gf, arguments);
}
function vf(e, t, n, r, l, a, o, i, c) {
  if (yf.apply(this, arguments), Cr) {
    if (Cr) {
      var d = Ql;
      Cr = !1, Ql = null;
    } else throw Error(W(198));
    Hl || (Hl = !0, ba = d);
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
function od(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function _i(e) {
  if (Nn(e) !== e) throw Error(W(188));
}
function wf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(W(188));
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
        if (a === n) return _i(l), e;
        if (a === r) return _i(l), t;
        a = a.sibling;
      }
      throw Error(W(188));
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
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function id(e) {
  return e = wf(e), e !== null ? cd(e) : null;
}
function cd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dd = st.unstable_scheduleCallback, ki = st.unstable_cancelCallback, xf = st.unstable_shouldYield, _f = st.unstable_requestPaint, Me = st.unstable_now, kf = st.unstable_getCurrentPriorityLevel, wo = st.unstable_ImmediatePriority, ud = st.unstable_UserBlockingPriority, Kl = st.unstable_NormalPriority, Sf = st.unstable_LowPriority, md = st.unstable_IdlePriority, gs = null, Mt = null;
function jf(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(gs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : Cf, bf = Math.log, Ef = Math.LN2;
function Cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bf(e) / Ef | 0) | 0;
}
var fl = 64, hl = 4194304;
function jr(e) {
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
function Gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = jr(i) : (a &= o, a !== 0 && (r = jr(a)));
  } else o = n & ~l, o !== 0 ? r = jr(o) : a !== 0 && (r = jr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Nf(e, t) {
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
function Mf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Nf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Ea(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fd() {
  var e = fl;
  return fl <<= 1, !(fl & 4194240) && (fl = 64), e;
}
function $s(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function If(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function xo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ge = 0;
function hd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pd, _o, gd, yd, vd, Ca = !1, pl = [], Jt = null, en = null, tn = null, Ar = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), Gt = [], Tf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Si(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = sl(t), t !== null && _o(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Jt = gr(Jt, e, t, n, r, l), !0;
    case "dragenter":
      return en = gr(en, e, t, n, r, l), !0;
    case "mouseover":
      return tn = gr(tn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Ar.set(a, gr(Ar.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Fr.set(a, gr(Fr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function wd(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = od(n), t !== null) {
          e.blockedOn = t, vd(e.priority, function() {
            gd(n);
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
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ka = r, n.target.dispatchEvent(r), ka = null;
    } else return t = sl(n), t !== null && _o(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ji(e, t, n) {
  Dl(e) && n.delete(t);
}
function Df() {
  Ca = !1, Jt !== null && Dl(Jt) && (Jt = null), en !== null && Dl(en) && (en = null), tn !== null && Dl(tn) && (tn = null), Ar.forEach(ji), Fr.forEach(ji);
}
function yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ca || (Ca = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Df)));
}
function Wr(e) {
  function t(l) {
    return yr(l, e);
  }
  if (0 < pl.length) {
    yr(pl[0], e);
    for (var n = 1; n < pl.length; n++) {
      var r = pl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Jt !== null && yr(Jt, e), en !== null && yr(en, e), tn !== null && yr(tn, e), Ar.forEach(t), Fr.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) wd(n), n.blockedOn === null && Gt.shift();
}
var Xn = Ut.ReactCurrentBatchConfig, ql = !0;
function Pf(e, t, n, r) {
  var l = ge, a = Xn.transition;
  Xn.transition = null;
  try {
    ge = 1, ko(e, t, n, r);
  } finally {
    ge = l, Xn.transition = a;
  }
}
function Rf(e, t, n, r) {
  var l = ge, a = Xn.transition;
  Xn.transition = null;
  try {
    ge = 4, ko(e, t, n, r);
  } finally {
    ge = l, Xn.transition = a;
  }
}
function ko(e, t, n, r) {
  if (ql) {
    var l = Na(e, t, n, r);
    if (l === null) Xs(e, t, r, Yl, n), Si(e, r);
    else if (Lf(l, e, t, n, r)) r.stopPropagation();
    else if (Si(e, r), t & 4 && -1 < Tf.indexOf(e)) {
      for (; l !== null; ) {
        var a = sl(l);
        if (a !== null && pd(a), a = Na(e, t, n, r), a === null && Xs(e, t, r, Yl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else Xs(e, t, r, null, n);
  }
}
var Yl = null;
function Na(e, t, n, r) {
  if (Yl = null, e = vo(r), e = gn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = od(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yl = e, null;
}
function xd(e) {
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
      switch (kf()) {
        case wo:
          return 1;
        case ud:
          return 4;
        case Kl:
        case Sf:
          return 16;
        case md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null, So = null, Pl = null;
function _d() {
  if (Pl) return Pl;
  var e, t = So, n = t.length, r, l = "value" in Xt ? Xt.value : Xt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Pl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Rl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gl() {
  return !0;
}
function bi() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? gl : bi, this.isPropagationStopped = bi, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gl);
  }, persist: function() {
  }, isPersistent: gl }), t;
}
var cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, jo = ot(cr), ll = Ee({}, cr, { view: 0, detail: 0 }), Of = ot(ll), Us, Vs, vr, ys = Ee({}, ll, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vr && (vr && e.type === "mousemove" ? (Us = e.screenX - vr.screenX, Vs = e.screenY - vr.screenY) : Vs = Us = 0, vr = e), Us);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vs;
} }), Ei = ot(ys), zf = Ee({}, ys, { dataTransfer: 0 }), Af = ot(zf), Ff = Ee({}, ll, { relatedTarget: 0 }), Bs = ot(Ff), Wf = Ee({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = ot(Wf), Uf = Ee({}, cr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Vf = ot(Uf), Bf = Ee({}, cr, { data: 0 }), Ci = ot(Bf), Qf = {
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
}, Hf = {
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
}, Kf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kf[e]) ? !!t[e] : !1;
}
function bo() {
  return Gf;
}
var qf = Ee({}, ll, { key: function(e) {
  if (e.key) {
    var t = Qf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bo, charCode: function(e) {
  return e.type === "keypress" ? Rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Yf = ot(qf), Xf = Ee({}, ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ni = ot(Xf), Zf = Ee({}, ll, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bo }), Jf = ot(Zf), eh = Ee({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), th = ot(eh), nh = Ee({}, ys, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rh = ot(nh), lh = [9, 13, 27, 32], Eo = zt && "CompositionEvent" in window, Nr = null;
zt && "documentMode" in document && (Nr = document.documentMode);
var sh = zt && "TextEvent" in window && !Nr, kd = zt && (!Eo || Nr && 8 < Nr && 11 >= Nr), Mi = " ", Ii = !1;
function Sd(e, t) {
  switch (e) {
    case "keyup":
      return lh.indexOf(t.keyCode) !== -1;
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
function jd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var An = !1;
function ah(e, t) {
  switch (e) {
    case "compositionend":
      return jd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ii = !0, Mi);
    case "textInput":
      return e = t.data, e === Mi && Ii ? null : e;
    default:
      return null;
  }
}
function oh(e, t) {
  if (An) return e === "compositionend" || !Eo && Sd(e, t) ? (e = _d(), Pl = So = Xt = null, An = !1, e) : null;
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
      return kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ih = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ti(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ih[e.type] : t === "textarea";
}
function bd(e, t, n, r) {
  nd(r), t = Xl(t, "onChange"), 0 < t.length && (n = new jo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mr = null, $r = null;
function ch(e) {
  Od(e, 0);
}
function vs(e) {
  var t = $n(e);
  if (qc(t)) return e;
}
function dh(e, t) {
  if (e === "change") return t;
}
var Ed = !1;
if (zt) {
  var Qs;
  if (zt) {
    var Hs = "oninput" in document;
    if (!Hs) {
      var Li = document.createElement("div");
      Li.setAttribute("oninput", "return;"), Hs = typeof Li.oninput == "function";
    }
    Qs = Hs;
  } else Qs = !1;
  Ed = Qs && (!document.documentMode || 9 < document.documentMode);
}
function Di() {
  Mr && (Mr.detachEvent("onpropertychange", Cd), $r = Mr = null);
}
function Cd(e) {
  if (e.propertyName === "value" && vs($r)) {
    var t = [];
    bd(t, $r, e, vo(e)), ad(ch, t);
  }
}
function uh(e, t, n) {
  e === "focusin" ? (Di(), Mr = t, $r = n, Mr.attachEvent("onpropertychange", Cd)) : e === "focusout" && Di();
}
function mh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vs($r);
}
function fh(e, t) {
  if (e === "click") return vs(t);
}
function hh(e, t) {
  if (e === "input" || e === "change") return vs(t);
}
function ph(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : ph;
function Ur(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!da.call(t, l) || !jt(e[l], t[l])) return !1;
  }
  return !0;
}
function Pi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ri(e, t) {
  var n = Pi(e);
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
    n = Pi(n);
  }
}
function Nd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Md() {
  for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bl(e.document);
  }
  return t;
}
function Co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gh(e) {
  var t = Md(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Nd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Ri(n, a);
        var o = Ri(
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
var yh = zt && "documentMode" in document && 11 >= document.documentMode, Fn = null, Ma = null, Ir = null, Ia = !1;
function Oi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ia || Fn == null || Fn !== Bl(r) || (r = Fn, "selectionStart" in r && Co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Ur(Ir, r) || (Ir = r, r = Xl(Ma, "onSelect"), 0 < r.length && (t = new jo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fn)));
}
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wn = { animationend: yl("Animation", "AnimationEnd"), animationiteration: yl("Animation", "AnimationIteration"), animationstart: yl("Animation", "AnimationStart"), transitionend: yl("Transition", "TransitionEnd") }, Ks = {}, Id = {};
zt && (Id = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);
function ws(e) {
  if (Ks[e]) return Ks[e];
  if (!Wn[e]) return e;
  var t = Wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Id) return Ks[e] = t[n];
  return e;
}
var Td = ws("animationend"), Ld = ws("animationiteration"), Dd = ws("animationstart"), Pd = ws("transitionend"), Rd = /* @__PURE__ */ new Map(), zi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Rd.set(e, t), Cn(t, [e]);
}
for (var Gs = 0; Gs < zi.length; Gs++) {
  var qs = zi[Gs], vh = qs.toLowerCase(), wh = qs[0].toUpperCase() + qs.slice(1);
  dn(vh, "on" + wh);
}
dn(Td, "onAnimationEnd");
dn(Ld, "onAnimationIteration");
dn(Dd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Pd, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function Ai(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, vf(r, t, void 0, e), e.currentTarget = null;
}
function Od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ai(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ai(l, i, d), a = c;
      }
    }
  }
  if (Hl) throw e = ba, Hl = !1, ba = null, e;
}
function _e(e, t) {
  var n = t[Ra];
  n === void 0 && (n = t[Ra] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (zd(t, e, 2, !1), n.add(r));
}
function Ys(e, t, n) {
  var r = 0;
  t && (r |= 4), zd(n, e, r, t);
}
var vl = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[vl]) {
    e[vl] = !0, Bc.forEach(function(n) {
      n !== "selectionchange" && (xh.has(n) || Ys(n, !1, e), Ys(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vl] || (t[vl] = !0, Ys("selectionchange", !1, t));
  }
}
function zd(e, t, n, r) {
  switch (xd(t)) {
    case 1:
      var l = Pf;
      break;
    case 4:
      l = Rf;
      break;
    default:
      l = ko;
  }
  n = l.bind(null, t, n, e), l = void 0, !ja || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Xs(e, t, n, r, l) {
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
  ad(function() {
    var d = a, h = vo(n), v = [];
    e: {
      var w = Rd.get(e);
      if (w !== void 0) {
        var x = jo, y = e;
        switch (e) {
          case "keypress":
            if (Rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Yf;
            break;
          case "focusin":
            y = "focus", x = Bs;
            break;
          case "focusout":
            y = "blur", x = Bs;
            break;
          case "beforeblur":
          case "afterblur":
            x = Bs;
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
            x = Ei;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Jf;
            break;
          case Td:
          case Ld:
          case Dd:
            x = $f;
            break;
          case Pd:
            x = th;
            break;
          case "scroll":
            x = Of;
            break;
          case "wheel":
            x = rh;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ni;
        }
        var _ = (t & 4) !== 0, j = !_ && e === "scroll", g = _ ? w !== null ? w + "Capture" : null : w;
        _ = [];
        for (var u = d, f; u !== null; ) {
          f = u;
          var p = f.stateNode;
          if (f.tag === 5 && p !== null && (f = p, g !== null && (p = zr(u, g), p != null && _.push(Br(u, p, f)))), j) break;
          u = u.return;
        }
        0 < _.length && (w = new x(w, y, null, n, h), v.push({ event: w, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== ka && (y = n.relatedTarget || n.fromElement) && (gn(y) || y[At])) break e;
        if ((x || w) && (w = h.window === h ? h : (w = h.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = d, y = y ? gn(y) : null, y !== null && (j = Nn(y), y !== j || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = d), x !== y)) {
          if (_ = Ei, p = "onMouseLeave", g = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Ni, p = "onPointerLeave", g = "onPointerEnter", u = "pointer"), j = x == null ? w : $n(x), f = y == null ? w : $n(y), w = new _(p, u + "leave", x, n, h), w.target = j, w.relatedTarget = f, p = null, gn(h) === d && (_ = new _(g, u + "enter", y, n, h), _.target = f, _.relatedTarget = j, p = _), j = p, x && y) t: {
            for (_ = x, g = y, u = 0, f = _; f; f = Pn(f)) u++;
            for (f = 0, p = g; p; p = Pn(p)) f++;
            for (; 0 < u - f; ) _ = Pn(_), u--;
            for (; 0 < f - u; ) g = Pn(g), f--;
            for (; u--; ) {
              if (_ === g || g !== null && _ === g.alternate) break t;
              _ = Pn(_), g = Pn(g);
            }
            _ = null;
          }
          else _ = null;
          x !== null && Fi(v, w, x, _, !1), y !== null && j !== null && Fi(v, j, y, _, !0);
        }
      }
      e: {
        if (w = d ? $n(d) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var k = dh;
        else if (Ti(w)) if (Ed) k = hh;
        else {
          k = mh;
          var S = uh;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (k = fh);
        if (k && (k = k(e, d))) {
          bd(v, k, n, h);
          break e;
        }
        S && S(e, w, d), e === "focusout" && (S = w._wrapperState) && S.controlled && w.type === "number" && ya(w, "number", w.value);
      }
      switch (S = d ? $n(d) : window, e) {
        case "focusin":
          (Ti(S) || S.contentEditable === "true") && (Fn = S, Ma = d, Ir = null);
          break;
        case "focusout":
          Ir = Ma = Fn = null;
          break;
        case "mousedown":
          Ia = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ia = !1, Oi(v, n, h);
          break;
        case "selectionchange":
          if (yh) break;
        case "keydown":
        case "keyup":
          Oi(v, n, h);
      }
      var E;
      if (Eo) e: {
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
      else An ? Sd(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (kd && n.locale !== "ko" && (An || b !== "onCompositionStart" ? b === "onCompositionEnd" && An && (E = _d()) : (Xt = h, So = "value" in Xt ? Xt.value : Xt.textContent, An = !0)), S = Xl(d, b), 0 < S.length && (b = new Ci(b, e, null, n, h), v.push({ event: b, listeners: S }), E ? b.data = E : (E = jd(n), E !== null && (b.data = E)))), (E = sh ? ah(e, n) : oh(e, n)) && (d = Xl(d, "onBeforeInput"), 0 < d.length && (h = new Ci("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = E));
    }
    Od(v, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = zr(e, n), a != null && r.unshift(Br(e, a, l)), a = zr(e, t), a != null && r.push(Br(e, a, l))), e = e.return;
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = zr(n, a), c != null && o.unshift(Br(n, c, i))) : l || (c = zr(n, a), c != null && o.push(Br(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _h = /\r\n?/g, kh = /\u0000|\uFFFD/g;
function Wi(e) {
  return (typeof e == "string" ? e : "" + e).replace(_h, `
`).replace(kh, "");
}
function wl(e, t, n) {
  if (t = Wi(t), Wi(e) !== t && n) throw Error(W(425));
}
function Zl() {
}
var Ta = null, La = null;
function Da(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pa = typeof setTimeout == "function" ? setTimeout : void 0, Sh = typeof clearTimeout == "function" ? clearTimeout : void 0, $i = typeof Promise == "function" ? Promise : void 0, jh = typeof queueMicrotask == "function" ? queueMicrotask : typeof $i < "u" ? function(e) {
  return $i.resolve(null).then(e).catch(bh);
} : Pa;
function bh(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Wr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Wr(t);
}
function nn(e) {
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
function Ui(e) {
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
var dr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + dr, Qr = "__reactProps$" + dr, At = "__reactContainer$" + dr, Ra = "__reactEvents$" + dr, Eh = "__reactListeners$" + dr, Ch = "__reactHandles$" + dr;
function gn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[At] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ui(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Ui(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sl(e) {
  return e = e[Nt] || e[At], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function xs(e) {
  return e[Qr] || null;
}
var Oa = [], Un = -1;
function un(e) {
  return { current: e };
}
function ke(e) {
  0 > Un || (e.current = Oa[Un], Oa[Un] = null, Un--);
}
function ve(e, t) {
  Un++, Oa[Un] = e.current, e.current = t;
}
var cn = {}, Qe = un(cn), Ze = un(!1), _n = cn;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  ke(Ze), ke(Qe);
}
function Vi(e, t, n) {
  if (Qe.current !== cn) throw Error(W(168));
  ve(Qe, t), ve(Ze, n);
}
function Ad(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(W(108, uf(e) || "Unknown", l));
  return Ee({}, n, r);
}
function es(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, _n = Qe.current, ve(Qe, e), ve(Ze, Ze.current), !0;
}
function Bi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = Ad(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, ke(Ze), ke(Qe), ve(Qe, e)) : ke(Ze), ve(Ze, n);
}
var Dt = null, _s = !1, Js = !1;
function Fd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Nh(e) {
  _s = !0, Fd(e);
}
function mn() {
  if (!Js && Dt !== null) {
    Js = !0;
    var e = 0, t = ge;
    try {
      var n = Dt;
      for (ge = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, _s = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), dd(wo, mn), l;
    } finally {
      ge = t, Js = !1;
    }
  }
  return null;
}
var Vn = [], Bn = 0, ts = null, ns = 0, ct = [], dt = 0, kn = null, Pt = 1, Rt = "";
function hn(e, t) {
  Vn[Bn++] = ns, Vn[Bn++] = ts, ts = e, ns = t;
}
function Wd(e, t, n) {
  ct[dt++] = Pt, ct[dt++] = Rt, ct[dt++] = kn, kn = e;
  var r = Pt;
  e = Rt;
  var l = 32 - kt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - kt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Pt = 1 << 32 - kt(t) + l | n << l | r, Rt = a + e;
  } else Pt = 1 << a | n << l | r, Rt = e;
}
function No(e) {
  e.return !== null && (hn(e, 1), Wd(e, 1, 0));
}
function Mo(e) {
  for (; e === ts; ) ts = Vn[--Bn], Vn[Bn] = null, ns = Vn[--Bn], Vn[Bn] = null;
  for (; e === kn; ) kn = ct[--dt], ct[dt] = null, Rt = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var lt = null, rt = null, Se = !1, xt = null;
function $d(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = nn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = kn !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Aa(e) {
  if (Se) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Qi(e, t)) {
        if (za(e)) throw Error(W(418));
        t = nn(n.nextSibling);
        var r = lt;
        t && Qi(e, t) ? $d(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, lt = e);
      }
    } else {
      if (za(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, Se = !1, lt = e;
    }
  }
}
function Hi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function xl(e) {
  if (e !== lt) return !1;
  if (!Se) return Hi(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Da(e.type, e.memoizedProps)), t && (t = rt)) {
    if (za(e)) throw Ud(), Error(W(418));
    for (; t; ) $d(e, t), t = nn(t.nextSibling);
  }
  if (Hi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = nn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ud() {
  for (var e = rt; e; ) e = nn(e.nextSibling);
}
function nr() {
  rt = lt = null, Se = !1;
}
function Io(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Mh = Ut.ReactCurrentBatchConfig;
function wr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function _l(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ki(e) {
  var t = e._init;
  return t(e._payload);
}
function Vd(e) {
  function t(g, u) {
    if (e) {
      var f = g.deletions;
      f === null ? (g.deletions = [u], g.flags |= 16) : f.push(u);
    }
  }
  function n(g, u) {
    if (!e) return null;
    for (; u !== null; ) t(g, u), u = u.sibling;
    return null;
  }
  function r(g, u) {
    for (g = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? g.set(u.key, u) : g.set(u.index, u), u = u.sibling;
    return g;
  }
  function l(g, u) {
    return g = an(g, u), g.index = 0, g.sibling = null, g;
  }
  function a(g, u, f) {
    return g.index = f, e ? (f = g.alternate, f !== null ? (f = f.index, f < u ? (g.flags |= 2, u) : f) : (g.flags |= 2, u)) : (g.flags |= 1048576, u);
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function i(g, u, f, p) {
    return u === null || u.tag !== 6 ? (u = aa(f, g.mode, p), u.return = g, u) : (u = l(u, f), u.return = g, u);
  }
  function c(g, u, f, p) {
    var k = f.type;
    return k === zn ? h(g, u, f.props.children, p, f.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ht && Ki(k) === u.type) ? (p = l(u, f.props), p.ref = wr(g, u, f), p.return = g, p) : (p = Ul(f.type, f.key, f.props, null, g.mode, p), p.ref = wr(g, u, f), p.return = g, p);
  }
  function d(g, u, f, p) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== f.containerInfo || u.stateNode.implementation !== f.implementation ? (u = oa(f, g.mode, p), u.return = g, u) : (u = l(u, f.children || []), u.return = g, u);
  }
  function h(g, u, f, p, k) {
    return u === null || u.tag !== 7 ? (u = xn(f, g.mode, p, k), u.return = g, u) : (u = l(u, f), u.return = g, u);
  }
  function v(g, u, f) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = aa("" + u, g.mode, f), u.return = g, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case dl:
          return f = Ul(u.type, u.key, u.props, null, g.mode, f), f.ref = wr(g, null, u), f.return = g, f;
        case On:
          return u = oa(u, g.mode, f), u.return = g, u;
        case Ht:
          var p = u._init;
          return v(g, p(u._payload), f);
      }
      if (Sr(u) || hr(u)) return u = xn(u, g.mode, f, null), u.return = g, u;
      _l(g, u);
    }
    return null;
  }
  function w(g, u, f, p) {
    var k = u !== null ? u.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return k !== null ? null : i(g, u, "" + f, p);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dl:
          return f.key === k ? c(g, u, f, p) : null;
        case On:
          return f.key === k ? d(g, u, f, p) : null;
        case Ht:
          return k = f._init, w(
            g,
            u,
            k(f._payload),
            p
          );
      }
      if (Sr(f) || hr(f)) return k !== null ? null : h(g, u, f, p, null);
      _l(g, f);
    }
    return null;
  }
  function x(g, u, f, p, k) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return g = g.get(f) || null, i(u, g, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case dl:
          return g = g.get(p.key === null ? f : p.key) || null, c(u, g, p, k);
        case On:
          return g = g.get(p.key === null ? f : p.key) || null, d(u, g, p, k);
        case Ht:
          var S = p._init;
          return x(g, u, f, S(p._payload), k);
      }
      if (Sr(p) || hr(p)) return g = g.get(f) || null, h(u, g, p, k, null);
      _l(u, p);
    }
    return null;
  }
  function y(g, u, f, p) {
    for (var k = null, S = null, E = u, b = u = 0, z = null; E !== null && b < f.length; b++) {
      E.index > b ? (z = E, E = null) : z = E.sibling;
      var O = w(g, E, f[b], p);
      if (O === null) {
        E === null && (E = z);
        break;
      }
      e && E && O.alternate === null && t(g, E), u = a(O, u, b), S === null ? k = O : S.sibling = O, S = O, E = z;
    }
    if (b === f.length) return n(g, E), Se && hn(g, b), k;
    if (E === null) {
      for (; b < f.length; b++) E = v(g, f[b], p), E !== null && (u = a(E, u, b), S === null ? k = E : S.sibling = E, S = E);
      return Se && hn(g, b), k;
    }
    for (E = r(g, E); b < f.length; b++) z = x(E, g, b, f[b], p), z !== null && (e && z.alternate !== null && E.delete(z.key === null ? b : z.key), u = a(z, u, b), S === null ? k = z : S.sibling = z, S = z);
    return e && E.forEach(function(R) {
      return t(g, R);
    }), Se && hn(g, b), k;
  }
  function _(g, u, f, p) {
    var k = hr(f);
    if (typeof k != "function") throw Error(W(150));
    if (f = k.call(f), f == null) throw Error(W(151));
    for (var S = k = null, E = u, b = u = 0, z = null, O = f.next(); E !== null && !O.done; b++, O = f.next()) {
      E.index > b ? (z = E, E = null) : z = E.sibling;
      var R = w(g, E, O.value, p);
      if (R === null) {
        E === null && (E = z);
        break;
      }
      e && E && R.alternate === null && t(g, E), u = a(R, u, b), S === null ? k = R : S.sibling = R, S = R, E = z;
    }
    if (O.done) return n(
      g,
      E
    ), Se && hn(g, b), k;
    if (E === null) {
      for (; !O.done; b++, O = f.next()) O = v(g, O.value, p), O !== null && (u = a(O, u, b), S === null ? k = O : S.sibling = O, S = O);
      return Se && hn(g, b), k;
    }
    for (E = r(g, E); !O.done; b++, O = f.next()) O = x(E, g, b, O.value, p), O !== null && (e && O.alternate !== null && E.delete(O.key === null ? b : O.key), u = a(O, u, b), S === null ? k = O : S.sibling = O, S = O);
    return e && E.forEach(function(U) {
      return t(g, U);
    }), Se && hn(g, b), k;
  }
  function j(g, u, f, p) {
    if (typeof f == "object" && f !== null && f.type === zn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dl:
          e: {
            for (var k = f.key, S = u; S !== null; ) {
              if (S.key === k) {
                if (k = f.type, k === zn) {
                  if (S.tag === 7) {
                    n(g, S.sibling), u = l(S, f.props.children), u.return = g, g = u;
                    break e;
                  }
                } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ht && Ki(k) === S.type) {
                  n(g, S.sibling), u = l(S, f.props), u.ref = wr(g, S, f), u.return = g, g = u;
                  break e;
                }
                n(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            f.type === zn ? (u = xn(f.props.children, g.mode, p, f.key), u.return = g, g = u) : (p = Ul(f.type, f.key, f.props, null, g.mode, p), p.ref = wr(g, u, f), p.return = g, g = p);
          }
          return o(g);
        case On:
          e: {
            for (S = f.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === f.containerInfo && u.stateNode.implementation === f.implementation) {
                n(g, u.sibling), u = l(u, f.children || []), u.return = g, g = u;
                break e;
              } else {
                n(g, u);
                break;
              }
              else t(g, u);
              u = u.sibling;
            }
            u = oa(f, g.mode, p), u.return = g, g = u;
          }
          return o(g);
        case Ht:
          return S = f._init, j(g, u, S(f._payload), p);
      }
      if (Sr(f)) return y(g, u, f, p);
      if (hr(f)) return _(g, u, f, p);
      _l(g, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, u !== null && u.tag === 6 ? (n(g, u.sibling), u = l(u, f), u.return = g, g = u) : (n(g, u), u = aa(f, g.mode, p), u.return = g, g = u), o(g)) : n(g, u);
  }
  return j;
}
var rr = Vd(!0), Bd = Vd(!1), rs = un(null), ls = null, Qn = null, To = null;
function Lo() {
  To = Qn = ls = null;
}
function Do(e) {
  var t = rs.current;
  ke(rs), e._currentValue = t;
}
function Fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Zn(e, t) {
  ls = e, To = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (To !== e) if (e = { context: e, memoizedValue: t, next: null }, Qn === null) {
    if (ls === null) throw Error(W(308));
    Qn = e, ls.dependencies = { lanes: 0, firstContext: e };
  } else Qn = Qn.next = e;
  return t;
}
var yn = null;
function Po(e) {
  yn === null ? yn = [e] : yn.push(e);
}
function Qd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Po(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function Ro(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Hd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, me & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Po(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ft(e, n);
}
function Ol(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xo(e, n);
  }
}
function Gi(e, t) {
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
function ss(e, t, n, r) {
  var l = e.updateQueue;
  Kt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, h = d = c = null, i = a;
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
          var y = e, _ = i;
          switch (w = t, x = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                v = y.call(x, v, w);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, w = typeof y == "function" ? y.call(x, v, w) : y, w == null) break e;
              v = Ee({}, v, w);
              break e;
            case 2:
              Kt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [i] : w.push(i));
      } else x = { eventTime: x, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = x, c = v) : h = h.next = x, o |= w;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    jn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function qi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(W(191, l));
      l.call(r);
    }
  }
}
var al = {}, It = un(al), Hr = un(al), Kr = un(al);
function vn(e) {
  if (e === al) throw Error(W(174));
  return e;
}
function Oo(e, t) {
  switch (ve(Kr, t), ve(Hr, e), ve(It, al), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wa(t, e);
  }
  ke(It), ve(It, t);
}
function lr() {
  ke(It), ke(Hr), ke(Kr);
}
function Kd(e) {
  vn(Kr.current);
  var t = vn(It.current), n = wa(t, e.type);
  t !== n && (ve(Hr, e), ve(It, n));
}
function zo(e) {
  Hr.current === e && (ke(It), ke(Hr));
}
var je = un(0);
function as(e) {
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
var ea = [];
function Ao() {
  for (var e = 0; e < ea.length; e++) ea[e]._workInProgressVersionPrimary = null;
  ea.length = 0;
}
var zl = Ut.ReactCurrentDispatcher, ta = Ut.ReactCurrentBatchConfig, Sn = 0, be = null, Te = null, De = null, os = !1, Tr = !1, Gr = 0, Ih = 0;
function Ue() {
  throw Error(W(321));
}
function Fo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Wo(e, t, n, r, l, a) {
  if (Sn = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Ph : Rh, e = n(r, l), Tr) {
    a = 0;
    do {
      if (Tr = !1, Gr = 0, 25 <= a) throw Error(W(301));
      a += 1, De = Te = null, t.updateQueue = null, zl.current = Oh, e = n(r, l);
    } while (Tr);
  }
  if (zl.current = is, t = Te !== null && Te.next !== null, Sn = 0, De = Te = be = null, os = !1, t) throw Error(W(300));
  return e;
}
function $o() {
  var e = Gr !== 0;
  return Gr = 0, e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? be.memoizedState = De = e : De = De.next = e, De;
}
function pt() {
  if (Te === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = De === null ? be.memoizedState : De.next;
  if (t !== null) De = t, Te = e;
  else {
    if (e === null) throw Error(W(310));
    Te = e, e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }, De === null ? be.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function na(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Te, l = r.baseQueue, a = n.pending;
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
      if ((Sn & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, be.lanes |= h, jn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, be.lanes |= a, jn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ra(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error(W(311));
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
function Gd() {
}
function qd(e, t) {
  var n = be, r = pt(), l = t(), a = !jt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Xe = !0), r = r.queue, Uo(Zd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, Yr(9, Xd.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(W(349));
    Sn & 30 || Yd(n, t, l);
  }
  return l;
}
function Yd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Xd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Jd(t) && eu(e);
}
function Zd(e, t, n) {
  return n(function() {
    Jd(t) && eu(e);
  });
}
function Jd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function eu(e) {
  var t = Ft(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Yi(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dh.bind(null, be, e), [t.memoizedState, e];
}
function Yr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tu() {
  return pt().memoizedState;
}
function Al(e, t, n, r) {
  var l = Ct();
  be.flags |= e, l.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ks(e, t, n, r) {
  var l = pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Te !== null) {
    var o = Te.memoizedState;
    if (a = o.destroy, r !== null && Fo(r, o.deps)) {
      l.memoizedState = Yr(t, n, a, r);
      return;
    }
  }
  be.flags |= e, l.memoizedState = Yr(1 | t, n, a, r);
}
function Xi(e, t) {
  return Al(8390656, 8, e, t);
}
function Uo(e, t) {
  return ks(2048, 8, e, t);
}
function nu(e, t) {
  return ks(4, 2, e, t);
}
function ru(e, t) {
  return ks(4, 4, e, t);
}
function lu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function su(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ks(4, 4, lu.bind(null, t, e), n);
}
function Vo() {
}
function au(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ou(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function iu(e, t, n) {
  return Sn & 21 ? (jt(n, t) || (n = fd(), be.lanes |= n, jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function Th(e, t) {
  var n = ge;
  ge = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ta.transition;
  ta.transition = {};
  try {
    e(!1), t();
  } finally {
    ge = n, ta.transition = r;
  }
}
function cu() {
  return pt().memoizedState;
}
function Lh(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, du(e)) uu(t, n);
  else if (n = Qd(e, t, n, r), n !== null) {
    var l = Ke();
    St(n, e, r, l), mu(n, t, r);
  }
}
function Dh(e, t, n) {
  var r = sn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (du(e)) uu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, jt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Po(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Qd(e, t, l, r), n !== null && (l = Ke(), St(n, e, r, l), mu(n, t, r));
  }
}
function du(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function uu(e, t) {
  Tr = os = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function mu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xo(e, n);
  }
}
var is = { readContext: ht, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, Ph = { readContext: ht, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: Xi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Al(
    4194308,
    4,
    lu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Al(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Al(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Lh.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yi, useDebugValue: Vo, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = Yi(!1), t = e[0];
  return e = Th.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, l = Ct();
  if (Se) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(W(349));
    Sn & 30 || Yd(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Xi(Zd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Yr(9, Xd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Pe.identifierPrefix;
  if (Se) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ih++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Rh = {
  readContext: ht,
  useCallback: au,
  useContext: ht,
  useEffect: Uo,
  useImperativeHandle: su,
  useInsertionEffect: nu,
  useLayoutEffect: ru,
  useMemo: ou,
  useReducer: na,
  useRef: tu,
  useState: function() {
    return na(qr);
  },
  useDebugValue: Vo,
  useDeferredValue: function(e) {
    var t = pt();
    return iu(t, Te.memoizedState, e);
  },
  useTransition: function() {
    var e = na(qr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: Gd,
  useSyncExternalStore: qd,
  useId: cu,
  unstable_isNewReconciler: !1
}, Oh = { readContext: ht, useCallback: au, useContext: ht, useEffect: Uo, useImperativeHandle: su, useInsertionEffect: nu, useLayoutEffect: ru, useMemo: ou, useReducer: ra, useRef: tu, useState: function() {
  return ra(qr);
}, useDebugValue: Vo, useDeferredValue: function(e) {
  var t = pt();
  return Te === null ? t.memoizedState = e : iu(t, Te.memoizedState, e);
}, useTransition: function() {
  var e = ra(qr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: Gd, useSyncExternalStore: qd, useId: cu, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ss = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), l = sn(e), a = Ot(r, l);
  a.payload = t, n != null && (a.callback = n), t = rn(e, a, l), t !== null && (St(t, e, l, r), Ol(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), l = sn(e), a = Ot(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = rn(e, a, l), t !== null && (St(t, e, l, r), Ol(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ke(), r = sn(e), l = Ot(n, r);
  l.tag = 2, t != null && (l.callback = t), t = rn(e, l, r), t !== null && (St(t, e, r, n), Ol(t, e, r));
} };
function Zi(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(l, a) : !0;
}
function fu(e, t, n) {
  var r = !1, l = cn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (l = Je(t) ? _n : Qe.current, r = t.contextTypes, a = (r = r != null) ? tr(e, l) : cn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ss, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Ji(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ss.enqueueReplaceState(t, t.state, null);
}
function $a(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ro(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ht(a) : (a = Je(t) ? _n : Qe.current, l.context = tr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Wa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ss.enqueueReplaceState(l, l.state, null), ss(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t) {
  try {
    var n = "", r = t;
    do
      n += df(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function la(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ua(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var zh = typeof WeakMap == "function" ? WeakMap : Map;
function hu(e, t, n) {
  n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ds || (ds = !0, Za = r), Ua(e, t);
  }, n;
}
function pu(e, t, n) {
  n = Ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ua(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ua(e, t), typeof r != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ec(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Xh.bind(null, e, t, n), t.then(e, e));
}
function tc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function nc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e);
}
var Ah = Ut.ReactCurrentOwner, Xe = !1;
function He(e, t, n, r) {
  t.child = e === null ? Bd(t, null, n, r) : rr(t, e.child, n, r);
}
function rc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Zn(t, l), r = Wo(e, t, n, r, a, l), n = $o(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (Se && n && No(t), t.flags |= 1, He(e, t, r, l), t.child);
}
function lc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Xo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, gu(e, t, a, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ur, n(o, r) && e.ref === t.ref) return Wt(e, t, l);
  }
  return t.flags |= 1, e = an(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function gu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Ur(a, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, Wt(e, t, l);
  }
  return Va(e, t, n, r, l);
}
function yu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(Kn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(Kn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ve(Kn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ve(Kn, nt), nt |= r;
  return He(e, t, l, n), t.child;
}
function vu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Va(e, t, n, r, l) {
  var a = Je(n) ? _n : Qe.current;
  return a = tr(t, a), Zn(t, l), n = Wo(e, t, n, r, a, l), r = $o(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (Se && r && No(t), t.flags |= 1, He(e, t, n, l), t.child);
}
function sc(e, t, n, r, l) {
  if (Je(n)) {
    var a = !0;
    es(t);
  } else a = !1;
  if (Zn(t, l), t.stateNode === null) Fl(e, t), fu(t, n, r), $a(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = Je(n) ? _n : Qe.current, d = tr(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Ji(t, o, r, d), Kt = !1;
    var w = t.memoizedState;
    o.state = w, ss(t, r, o, l), c = t.memoizedState, i !== r || w !== c || Ze.current || Kt ? (typeof h == "function" && (Wa(t, n, h, r), c = t.memoizedState), (i = Kt || Zi(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Hd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = Je(n) ? _n : Qe.current, c = tr(t, c));
    var x = n.getDerivedStateFromProps;
    (h = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && Ji(t, o, r, c), Kt = !1, w = t.memoizedState, o.state = w, ss(t, r, o, l);
    var y = t.memoizedState;
    i !== v || w !== y || Ze.current || Kt ? (typeof x == "function" && (Wa(t, n, x, r), y = t.memoizedState), (d = Kt || Zi(t, n, d, r, w, y, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ba(e, t, n, r, a, l);
}
function Ba(e, t, n, r, l, a) {
  vu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Bi(t, n, !1), Wt(e, t, a);
  r = t.stateNode, Ah.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = rr(t, e.child, null, a), t.child = rr(t, null, i, a)) : He(e, t, i, a), t.memoizedState = r.state, l && Bi(t, n, !0), t.child;
}
function wu(e) {
  var t = e.stateNode;
  t.pendingContext ? Vi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vi(e, t.context, !1), Oo(e, t.containerInfo);
}
function ac(e, t, n, r, l) {
  return nr(), Io(l), t.flags |= 256, He(e, t, n, r), t.child;
}
var Qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xu(e, t, n) {
  var r = t.pendingProps, l = je.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ve(je, l & 1), e === null)
    return Aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Es(o, r, 0, null), e = xn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ha(n), t.memoizedState = Qa, e) : Bo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Fh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = an(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = an(i, a) : (a = xn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ha(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Qa, r;
  }
  return a = e.child, e = a.sibling, r = an(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bo(e, t) {
  return t = Es({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kl(e, t, n, r) {
  return r !== null && Io(r), rr(t, e.child, null, n), e = Bo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = la(Error(W(422))), kl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Es({ mode: "visible", children: r.children }, l, 0, null), a = xn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && rr(t, e.child, null, o), t.child.memoizedState = Ha(o), t.memoizedState = Qa, a);
  if (!(t.mode & 1)) return kl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(W(419)), r = la(a, r, void 0), kl(e, t, o, r);
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Ft(e, l), St(r, e, l, -1));
    }
    return Yo(), r = la(Error(W(421))), kl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Zh.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = nn(l.nextSibling), lt = t, Se = !0, xt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Rt, ct[dt++] = kn, Pt = e.id, Rt = e.overflow, kn = t), t = Bo(t, r.children), t.flags |= 4096, t);
}
function oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fa(e.return, t, n);
}
function sa(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function _u(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (He(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && oc(e, n, t);
      else if (e.tag === 19) oc(e, n, t);
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
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && as(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), sa(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && as(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      sa(t, !0, n, null, a);
      break;
    case "together":
      sa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wh(e, t, n) {
  switch (t.tag) {
    case 3:
      wu(t), nr();
      break;
    case 5:
      Kd(t);
      break;
    case 1:
      Je(t.type) && es(t);
      break;
    case 4:
      Oo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ve(rs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ve(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xu(e, t, n) : (ve(je, je.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      ve(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return _u(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ve(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yu(e, t, n);
  }
  return Wt(e, t, n);
}
var ku, Ka, Su, ju;
ku = function(e, t) {
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
Ka = function() {
};
Su = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, vn(It.current);
    var a = null;
    switch (n) {
      case "input":
        l = pa(e, l), r = pa(e, r), a = [];
        break;
      case "select":
        l = Ee({}, l, { value: void 0 }), r = Ee({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = va(e, l), r = va(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zl);
    }
    xa(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Rr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Rr.hasOwnProperty(d) ? (c != null && d === "onScroll" && _e("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
ju = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
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
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $h(e, t, n) {
  var r = t.pendingProps;
  switch (Mo(t), t.tag) {
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
      return Ve(t), null;
    case 1:
      return Je(t.type) && Jl(), Ve(t), null;
    case 3:
      return r = t.stateNode, lr(), ke(Ze), ke(Qe), Ao(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (to(xt), xt = null))), Ka(e, t), Ve(t), null;
    case 5:
      zo(t);
      var l = vn(Kr.current);
      if (n = t.type, e !== null && t.stateNode != null) Su(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return Ve(t), null;
        }
        if (e = vn(It.current), xl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Qr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              _e("cancel", r), _e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              _e("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < br.length; l++) _e(br[l], r);
              break;
            case "source":
              _e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              _e(
                "error",
                r
              ), _e("load", r);
              break;
            case "details":
              _e("toggle", r);
              break;
            case "input":
              gi(r, a), _e("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, _e("invalid", r);
              break;
            case "textarea":
              vi(r, a), _e("invalid", r);
          }
          xa(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && wl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && wl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Rr.hasOwnProperty(o) && i != null && o === "onScroll" && _e("scroll", r);
          }
          switch (n) {
            case "input":
              ul(r), yi(r, a, !0);
              break;
            case "textarea":
              ul(r), wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Zl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Qr] = r, ku(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = _a(n, r), n) {
              case "dialog":
                _e("cancel", e), _e("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < br.length; l++) _e(br[l], e);
                l = r;
                break;
              case "source":
                _e("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                _e(
                  "error",
                  e
                ), _e("load", e), l = r;
                break;
              case "details":
                _e("toggle", e), l = r;
                break;
              case "input":
                gi(e, r), l = pa(e, r), _e("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Ee({}, r, { value: void 0 }), _e("invalid", e);
                break;
              case "textarea":
                vi(e, r), l = va(e, r), _e("invalid", e);
                break;
              default:
                l = r;
            }
            xa(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? td(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Jc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Or(e, c) : typeof c == "number" && Or(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Rr.hasOwnProperty(a) ? c != null && a === "onScroll" && _e("scroll", e) : c != null && ho(e, a, c, o));
            }
            switch (n) {
              case "input":
                ul(e), yi(e, r, !1);
                break;
              case "textarea":
                ul(e), wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + on(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Gn(e, !!r.multiple, a, !1) : r.defaultValue != null && Gn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zl);
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
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) ju(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = vn(Kr.current), vn(It.current), xl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              wl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return Ve(t), null;
    case 13:
      if (ke(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && rt !== null && t.mode & 1 && !(t.flags & 128)) Ud(), nr(), t.flags |= 98560, a = !1;
        else if (a = xl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Nt] = t;
          } else nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ve(t), a = !1;
        } else xt !== null && (to(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Le === 0 && (Le = 3) : Yo())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4:
      return lr(), Ka(e, t), e === null && Vr(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return Do(t.type._context), Ve(t), null;
    case 17:
      return Je(t.type) && Jl(), Ve(t), null;
    case 19:
      if (ke(je), a = t.memoizedState, a === null) return Ve(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) xr(a, !1);
      else {
        if (Le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = as(e), o !== null) {
            for (t.flags |= 128, xr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Me() > ar && (t.flags |= 128, r = !0, xr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = as(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Se) return Ve(t), null;
        } else 2 * Me() - a.renderingStartTime > ar && n !== 1073741824 && (t.flags |= 128, r = !0, xr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Me(), t.sibling = null, n = je.current, ve(je, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23:
      return qo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function Uh(e, t) {
  switch (Mo(t), t.tag) {
    case 1:
      return Je(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return lr(), ke(Ze), ke(Qe), Ao(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zo(t), null;
    case 13:
      if (ke(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        nr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ke(je), null;
    case 4:
      return lr(), null;
    case 10:
      return Do(t.type._context), null;
    case 22:
    case 23:
      return qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1, Be = !1, Vh = typeof WeakSet == "function" ? WeakSet : Set, q = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ce(e, t, r);
  }
  else n.current = null;
}
function Ga(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var ic = !1;
function Bh(e, t) {
  if (Ta = ql, e = Md(), Co(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, w = null;
        t: for (; ; ) {
          for (var x; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (x = v.firstChild) !== null; )
            w = v, v = x;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === l && (i = o), w === a && ++h === r && (c = o), (x = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (La = { focusedElem: e, selectionRange: n }, ql = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
  else for (; q !== null; ) {
    t = q;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var _ = y.memoizedProps, j = y.memoizedState, g = t.stateNode, u = g.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : vt(t.type, _), j);
            g.__reactInternalSnapshotBeforeUpdate = u;
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
          throw Error(W(163));
      }
    } catch (p) {
      Ce(t, t.return, p);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, q = e;
      break;
    }
    q = t.return;
  }
  return y = ic, ic = !1, y;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ga(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function js(e, t) {
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
function qa(e) {
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
function bu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, bu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Qr], delete t[Ra], delete t[Eh], delete t[Ch])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Eu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Eu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ya(e, t, n), e = e.sibling; e !== null; ) Ya(e, t, n), e = e.sibling;
}
function Xa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xa(e, t, n), e = e.sibling; e !== null; ) Xa(e, t, n), e = e.sibling;
}
var Oe = null, wt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Cu(e, t, n), n = n.sibling;
}
function Cu(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(gs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Be || Hn(n, t);
    case 6:
      var r = Oe, l = wt;
      Oe = null, Qt(e, t, n), Oe = r, wt = l, Oe !== null && (wt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null && (wt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? Zs(e.parentNode, n) : e.nodeType === 1 && Zs(e, n), Wr(e)) : Zs(Oe, n.stateNode));
      break;
    case 4:
      r = Oe, l = wt, Oe = n.stateNode.containerInfo, wt = !0, Qt(e, t, n), Oe = r, wt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ga(n, t, o), l = l.next;
        } while (l !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!Be && (Hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ce(n, t, i);
      }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, Qt(e, t, n), Be = r) : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vh()), t.forEach(function(r) {
      var l = Jh.bind(null, e, r);
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
      if (Oe === null) throw Error(W(160));
      Cu(a, o, l), Oe = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ce(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nu(t, e), t = t.sibling;
}
function Nu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), Et(e), r & 4) {
        try {
          Lr(3, e, e.return), js(3, e);
        } catch (_) {
          Ce(e, e.return, _);
        }
        try {
          Lr(5, e, e.return);
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 1:
      yt(t, e), Et(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (yt(t, e), Et(e), r & 512 && n !== null && Hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Or(l, "");
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Yc(l, a), _a(i, o);
          var d = _a(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? td(l, v) : h === "dangerouslySetInnerHTML" ? Jc(l, v) : h === "children" ? Or(l, v) : ho(l, h, v, d);
          }
          switch (i) {
            case "input":
              ga(l, a);
              break;
            case "textarea":
              Xc(l, a);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Gn(l, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? Gn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Gn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Qr] = a;
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 6:
      if (yt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 3:
      if (yt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Wr(t.containerInfo);
      } catch (_) {
        Ce(e, e.return, _);
      }
      break;
    case 4:
      yt(t, e), Et(e);
      break;
    case 13:
      yt(t, e), Et(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Ko = Me())), r & 4 && dc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (d = Be) || h, yt(t, e), Be = d) : yt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (q = e, h = e.child; h !== null; ) {
          for (v = q = h; q !== null; ) {
            switch (w = q, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Lr(4, w, w.return);
                break;
              case 1:
                Hn(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (_) {
                    Ce(r, n, _);
                  }
                }
                break;
              case 5:
                Hn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  mc(v);
                  continue;
                }
            }
            x !== null ? (x.return = w, q = x) : mc(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = ed("display", o));
              } catch (_) {
                Ce(e, e.return, _);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (_) {
              Ce(e, e.return, _);
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
      yt(t, e), Et(e), r & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      yt(
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
          if (Eu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Or(l, ""), r.flags &= -33);
          var a = cc(e);
          Xa(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = cc(e);
          Ya(e, i, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (c) {
      Ce(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qh(e, t, n) {
  q = e, Mu(e);
}
function Mu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var l = q, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Be;
        i = Sl;
        var d = Be;
        if (Sl = o, (Be = c) && !d) for (q = l; q !== null; ) o = q, c = o.child, o.tag === 22 && o.memoizedState !== null ? fc(l) : c !== null ? (c.return = o, q = c) : fc(l);
        for (; a !== null; ) q = a, Mu(a), a = a.sibling;
        q = l, Sl = i, Be = d;
      }
      uc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, q = a) : uc(e);
  }
}
function uc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Be || js(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && qi(t, a, r);
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
              qi(t, o, n);
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
                  v !== null && Wr(v);
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
            throw Error(W(163));
        }
        Be || t.flags & 512 && qa(t);
      } catch (w) {
        Ce(t, t.return, w);
      }
    }
    if (t === e) {
      q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function mc(e) {
  for (; q !== null; ) {
    var t = q;
    if (t === e) {
      q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, q = n;
      break;
    }
    q = t.return;
  }
}
function fc(e) {
  for (; q !== null; ) {
    var t = q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            js(4, t);
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
            qa(t);
          } catch (c) {
            Ce(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            qa(t);
          } catch (c) {
            Ce(t, o, c);
          }
      }
    } catch (c) {
      Ce(t, t.return, c);
    }
    if (t === e) {
      q = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, q = i;
      break;
    }
    q = t.return;
  }
}
var Hh = Math.ceil, cs = Ut.ReactCurrentDispatcher, Qo = Ut.ReactCurrentOwner, mt = Ut.ReactCurrentBatchConfig, me = 0, Pe = null, Ie = null, ze = 0, nt = 0, Kn = un(0), Le = 0, Xr = null, jn = 0, bs = 0, Ho = 0, Dr = null, Ye = null, Ko = 0, ar = 1 / 0, Lt = null, ds = !1, Za = null, ln = null, jl = !1, Zt = null, us = 0, Pr = 0, Ja = null, Wl = -1, $l = 0;
function Ke() {
  return me & 6 ? Me() : Wl !== -1 ? Wl : Wl = Me();
}
function sn(e) {
  return e.mode & 1 ? me & 2 && ze !== 0 ? ze & -ze : Mh.transition !== null ? ($l === 0 && ($l = fd()), $l) : (e = ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xd(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < Pr) throw Pr = 0, Ja = null, Error(W(185));
  rl(e, n, r), (!(me & 2) || e !== Pe) && (e === Pe && (!(me & 2) && (bs |= n), Le === 4 && qt(e, ze)), et(e, r), n === 1 && me === 0 && !(t.mode & 1) && (ar = Me() + 500, _s && mn()));
}
function et(e, t) {
  var n = e.callbackNode;
  Mf(e, t);
  var r = Gl(e, e === Pe ? ze : 0);
  if (r === 0) n !== null && ki(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ki(n), t === 1) e.tag === 0 ? Nh(hc.bind(null, e)) : Fd(hc.bind(null, e)), jh(function() {
      !(me & 6) && mn();
    }), n = null;
    else {
      switch (hd(r)) {
        case 1:
          n = wo;
          break;
        case 4:
          n = ud;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = md;
          break;
        default:
          n = Kl;
      }
      n = zu(n, Iu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Iu(e, t) {
  if (Wl = -1, $l = 0, me & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = Gl(e, e === Pe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var l = me;
    me |= 2;
    var a = Lu();
    (Pe !== e || ze !== t) && (Lt = null, ar = Me() + 500, wn(e, t));
    do
      try {
        qh();
        break;
      } catch (i) {
        Tu(e, i);
      }
    while (!0);
    Lo(), cs.current = a, me = l, Ie !== null ? t = 0 : (Pe = null, ze = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ea(e), l !== 0 && (r = l, t = eo(e, l))), t === 1) throw n = Xr, wn(e, 0), qt(e, r), et(e, Me()), n;
    if (t === 6) qt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Kh(l) && (t = ms(e, r), t === 2 && (a = Ea(e), a !== 0 && (r = a, t = eo(e, a))), t === 1)) throw n = Xr, wn(e, 0), qt(e, r), et(e, Me()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          pn(e, Ye, Lt);
          break;
        case 3:
          if (qt(e, r), (r & 130023424) === r && (t = Ko + 500 - Me(), 10 < t)) {
            if (Gl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pa(pn.bind(null, e, Ye, Lt), t);
            break;
          }
          pn(e, Ye, Lt);
          break;
        case 4:
          if (qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pa(pn.bind(null, e, Ye, Lt), r);
            break;
          }
          pn(e, Ye, Lt);
          break;
        case 5:
          pn(e, Ye, Lt);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return et(e, Me()), e.callbackNode === n ? Iu.bind(null, e) : null;
}
function eo(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = ms(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && to(t)), e;
}
function to(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Kh(e) {
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
function qt(e, t) {
  for (t &= ~Ho, t &= ~bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hc(e) {
  if (me & 6) throw Error(W(327));
  Jn();
  var t = Gl(e, 0);
  if (!(t & 1)) return et(e, Me()), null;
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ea(e);
    r !== 0 && (t = r, n = eo(e, r));
  }
  if (n === 1) throw n = Xr, wn(e, 0), qt(e, t), et(e, Me()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Ye, Lt), et(e, Me()), null;
}
function Go(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (ar = Me() + 500, _s && mn());
  }
}
function bn(e) {
  Zt !== null && Zt.tag === 0 && !(me & 6) && Jn();
  var t = me;
  me |= 1;
  var n = mt.transition, r = ge;
  try {
    if (mt.transition = null, ge = 1, e) return e();
  } finally {
    ge = r, mt.transition = n, me = t, !(me & 6) && mn();
  }
}
function qo() {
  nt = Kn.current, ke(Kn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Sh(n)), Ie !== null) for (n = Ie.return; n !== null; ) {
    var r = n;
    switch (Mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        lr(), ke(Ze), ke(Qe), Ao();
        break;
      case 5:
        zo(r);
        break;
      case 4:
        lr();
        break;
      case 13:
        ke(je);
        break;
      case 19:
        ke(je);
        break;
      case 10:
        Do(r.type._context);
        break;
      case 22:
      case 23:
        qo();
    }
    n = n.return;
  }
  if (Pe = e, Ie = e = an(e.current, null), ze = nt = t, Le = 0, Xr = null, Ho = bs = jn = 0, Ye = Dr = null, yn !== null) {
    for (t = 0; t < yn.length; t++) if (n = yn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    yn = null;
  }
  return e;
}
function Tu(e, t) {
  do {
    var n = Ie;
    try {
      if (Lo(), zl.current = is, os) {
        for (var r = be.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        os = !1;
      }
      if (Sn = 0, De = Te = be = null, Tr = !1, Gr = 0, Qo.current = null, n === null || n.return === null) {
        Le = 1, Xr = t, Ie = null;
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
          var x = tc(o);
          if (x !== null) {
            x.flags &= -257, nc(x, o, i, a, t), x.mode & 1 && ec(a, d, t), t = x, c = d;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ec(a, d, t), Yo();
              break e;
            }
            c = Error(W(426));
          }
        } else if (Se && i.mode & 1) {
          var j = tc(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), nc(j, o, i, a, t), Io(sr(c, i));
            break e;
          }
        }
        a = c = sr(c, i), Le !== 4 && (Le = 2), Dr === null ? Dr = [a] : Dr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var g = hu(a, c, t);
              Gi(a, g);
              break e;
            case 1:
              i = c;
              var u = a.type, f = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ln === null || !ln.has(f)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var p = pu(a, i, t);
                Gi(a, p);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Pu(n);
    } catch (k) {
      t = k, Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lu() {
  var e = cs.current;
  return cs.current = is, e === null ? is : e;
}
function Yo() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Pe === null || !(jn & 268435455) && !(bs & 268435455) || qt(Pe, ze);
}
function ms(e, t) {
  var n = me;
  me |= 2;
  var r = Lu();
  (Pe !== e || ze !== t) && (Lt = null, wn(e, t));
  do
    try {
      Gh();
      break;
    } catch (l) {
      Tu(e, l);
    }
  while (!0);
  if (Lo(), me = n, cs.current = r, Ie !== null) throw Error(W(261));
  return Pe = null, ze = 0, Le;
}
function Gh() {
  for (; Ie !== null; ) Du(Ie);
}
function qh() {
  for (; Ie !== null && !xf(); ) Du(Ie);
}
function Du(e) {
  var t = Ou(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? Pu(e) : Ie = t, Qo.current = null;
}
function Pu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Uh(n, t), n !== null) {
        n.flags &= 32767, Ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Le = 6, Ie = null;
        return;
      }
    } else if (n = $h(n, t, nt), n !== null) {
      Ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function pn(e, t, n) {
  var r = ge, l = mt.transition;
  try {
    mt.transition = null, ge = 1, Yh(e, t, n, r);
  } finally {
    mt.transition = l, ge = r;
  }
  return null;
}
function Yh(e, t, n, r) {
  do
    Jn();
  while (Zt !== null);
  if (me & 6) throw Error(W(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (If(e, a), e === Pe && (Ie = Pe = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, zu(Kl, function() {
    return Jn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = mt.transition, mt.transition = null;
    var o = ge;
    ge = 1;
    var i = me;
    me |= 4, Qo.current = null, Bh(e, n), Nu(n, e), gh(La), ql = !!Ta, La = Ta = null, e.current = n, Qh(n), _f(), me = i, ge = o, mt.transition = a;
  } else e.current = n;
  if (jl && (jl = !1, Zt = e, us = l), a = e.pendingLanes, a === 0 && (ln = null), jf(n.stateNode), et(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ds) throw ds = !1, e = Za, Za = null, e;
  return us & 1 && e.tag !== 0 && Jn(), a = e.pendingLanes, a & 1 ? e === Ja ? Pr++ : (Pr = 0, Ja = e) : Pr = 0, mn(), null;
}
function Jn() {
  if (Zt !== null) {
    var e = hd(us), t = mt.transition, n = ge;
    try {
      if (mt.transition = null, ge = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, us = 0, me & 6) throw Error(W(331));
        var l = me;
        for (me |= 4, q = e.current; q !== null; ) {
          var a = q, o = a.child;
          if (q.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (q = d; q !== null; ) {
                  var h = q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, q = v;
                  else for (; q !== null; ) {
                    h = q;
                    var w = h.sibling, x = h.return;
                    if (bu(h), h === d) {
                      q = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, q = w;
                      break;
                    }
                    q = x;
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
              q = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, q = o;
          else e: for (; q !== null; ) {
            if (a = q, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Lr(9, a, a.return);
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, q = g;
              break e;
            }
            q = a.return;
          }
        }
        var u = e.current;
        for (q = u; q !== null; ) {
          o = q;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) f.return = o, q = f;
          else e: for (o = u; q !== null; ) {
            if (i = q, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, i);
              }
            } catch (k) {
              Ce(i, i.return, k);
            }
            if (i === o) {
              q = null;
              break e;
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, q = p;
              break e;
            }
            q = i.return;
          }
        }
        if (me = l, mn(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(gs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ge = n, mt.transition = t;
    }
  }
  return !1;
}
function pc(e, t, n) {
  t = sr(n, t), t = hu(e, t, 1), e = rn(e, t, 1), t = Ke(), e !== null && (rl(e, 1, t), et(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) pc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      pc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
        e = sr(n, e), e = pu(t, e, 1), t = rn(t, e, 1), e = Ke(), t !== null && (rl(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Xh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (ze & n) === n && (Le === 4 || Le === 3 && (ze & 130023424) === ze && 500 > Me() - Ko ? wn(e, 0) : Ho |= n), et(e, t);
}
function Ru(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = Ke();
  e = Ft(e, t), e !== null && (rl(e, t, n), et(e, n));
}
function Zh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ru(e, n);
}
function Jh(e, t) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(t), Ru(e, n);
}
var Ou;
Ou = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, Wh(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, Se && t.flags & 1048576 && Wd(t, ns, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var l = tr(t, Qe.current);
      Zn(t, n), l = Wo(null, t, r, e, l, n);
      var a = $o();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, es(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ro(t), l.updater = Ss, t.stateNode = l, l._reactInternals = t, $a(t, r, e, n), t = Ba(null, t, r, !0, a, n)) : (t.tag = 0, Se && a && No(t), He(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = tp(r), e = vt(r, e), l) {
          case 0:
            t = Va(null, t, r, e, n);
            break e;
          case 1:
            t = sc(null, t, r, e, n);
            break e;
          case 11:
            t = rc(null, t, r, e, n);
            break e;
          case 14:
            t = lc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Va(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), sc(e, t, r, l, n);
    case 3:
      e: {
        if (wu(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, Hd(e, t), ss(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = sr(Error(W(423)), t), t = ac(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = sr(Error(W(424)), t), t = ac(e, t, r, n, l);
          break e;
        } else for (rt = nn(t.stateNode.containerInfo.firstChild), lt = t, Se = !0, xt = null, n = Bd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (nr(), r === l) {
            t = Wt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Kd(t), e === null && Aa(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Da(r, l) ? o = null : a !== null && Da(r, a) && (t.flags |= 32), vu(e, t), He(e, t, o, n), t.child;
    case 6:
      return e === null && Aa(t), null;
    case 13:
      return xu(e, t, n);
    case 4:
      return Oo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rr(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), rc(e, t, r, l, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, ve(rs, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === l.children && !Ze.current) {
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
                  c = Ot(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Fa(
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
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Fa(o, n, t), o = a.sibling;
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
        He(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Zn(t, n), l = ht(l), r = r(l), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), lc(e, t, r, l, n);
    case 15:
      return gu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Fl(e, t), t.tag = 1, Je(r) ? (e = !0, es(t)) : e = !1, Zn(t, n), fu(t, r, l), $a(t, r, l, n), Ba(null, t, r, !0, e, n);
    case 19:
      return _u(e, t, n);
    case 22:
      return yu(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function zu(e, t) {
  return dd(e, t);
}
function ep(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new ep(e, t, n, r);
}
function Xo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function tp(e) {
  if (typeof e == "function") return Xo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === go) return 11;
    if (e === yo) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ul(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") Xo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case zn:
      return xn(n.children, l, a, t);
    case po:
      o = 8, l |= 8;
      break;
    case ua:
      return e = ut(12, n, t, l | 2), e.elementType = ua, e.lanes = a, e;
    case ma:
      return e = ut(13, n, t, l), e.elementType = ma, e.lanes = a, e;
    case fa:
      return e = ut(19, n, t, l), e.elementType = fa, e.lanes = a, e;
    case Kc:
      return Es(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Qc:
          o = 10;
          break e;
        case Hc:
          o = 9;
          break e;
        case go:
          o = 11;
          break e;
        case yo:
          o = 14;
          break e;
        case Ht:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function xn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Es(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = Kc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function aa(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function oa(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function np(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $s(0), this.expirationTimes = $s(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $s(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zo(e, t, n, r, l, a, o, i, c) {
  return e = new np(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ro(a), e;
}
function rp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: On, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Au(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(W(170));
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
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Ad(e, n, t);
  }
  return t;
}
function Fu(e, t, n, r, l, a, o, i, c) {
  return e = Zo(n, r, !0, e, l, a, o, i, c), e.context = Au(null), n = e.current, r = Ke(), l = sn(n), a = Ot(r, l), a.callback = t ?? null, rn(n, a, l), e.current.lanes = l, rl(e, l, r), et(e, r), e;
}
function Cs(e, t, n, r) {
  var l = t.current, a = Ke(), o = sn(l);
  return n = Au(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(l, t, o), e !== null && (St(e, l, o, a), Ol(e, l, o)), o;
}
function fs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jo(e, t) {
  gc(e, t), (e = e.alternate) && gc(e, t);
}
function lp() {
  return null;
}
var Wu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ei(e) {
  this._internalRoot = e;
}
Ns.prototype.render = ei.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Cs(e, t, null, null);
};
Ns.prototype.unmount = ei.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bn(function() {
      Cs(null, e, null, null);
    }), t[At] = null;
  }
};
function Ns(e) {
  this._internalRoot = e;
}
Ns.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
    Gt.splice(n, 0, e), n === 0 && wd(e);
  }
};
function ti(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ms(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function yc() {
}
function sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = fs(o);
        a.call(d);
      };
    }
    var o = Fu(t, r, e, 0, null, !1, !1, "", yc);
    return e._reactRootContainer = o, e[At] = o.current, Vr(e.nodeType === 8 ? e.parentNode : e), bn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = fs(c);
      i.call(d);
    };
  }
  var c = Zo(e, 0, !1, null, null, !1, !1, "", yc);
  return e._reactRootContainer = c, e[At] = c.current, Vr(e.nodeType === 8 ? e.parentNode : e), bn(function() {
    Cs(t, c, n, r);
  }), c;
}
function Is(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = fs(o);
        i.call(c);
      };
    }
    Cs(t, o, e, l);
  } else o = sp(n, t, e, l, r);
  return fs(o);
}
pd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 && (xo(t, n | 1), et(t, Me()), !(me & 6) && (ar = Me() + 500, mn()));
      }
      break;
    case 13:
      bn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = Ke();
          St(r, e, 1, l);
        }
      }), Jo(e, 1);
  }
};
_o = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Ke();
      St(t, e, 134217728, n);
    }
    Jo(e, 134217728);
  }
};
gd = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = Ft(e, t);
    if (n !== null) {
      var r = Ke();
      St(n, e, t, r);
    }
    Jo(e, t);
  }
};
yd = function() {
  return ge;
};
vd = function(e, t) {
  var n = ge;
  try {
    return ge = e, t();
  } finally {
    ge = n;
  }
};
Sa = function(e, t, n) {
  switch (t) {
    case "input":
      if (ga(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xs(r);
            if (!l) throw Error(W(90));
            qc(r), ga(r, l);
          }
        }
      }
      break;
    case "textarea":
      Xc(e, n);
      break;
    case "select":
      t = n.value, t != null && Gn(e, !!n.multiple, t, !1);
  }
};
ld = Go;
sd = bn;
var ap = { usingClientEntryPoint: !1, Events: [sl, $n, xs, nd, rd, Go] }, _r = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, op = { bundleType: _r.bundleType, version: _r.version, rendererPackageName: _r.rendererPackageName, rendererConfig: _r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = id(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _r.findFiberByHostInstance || lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber) try {
    gs = bl.inject(op), Mt = bl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ti(t)) throw Error(W(200));
  return rp(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!ti(e)) throw Error(W(299));
  var n = !1, r = "", l = Wu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zo(e, 1, !1, null, null, n, !1, r, l), e[At] = t.current, Vr(e.nodeType === 8 ? e.parentNode : e), new ei(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = id(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return bn(e);
};
at.hydrate = function(e, t, n) {
  if (!Ms(t)) throw Error(W(200));
  return Is(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!ti(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = Wu;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Fu(t, null, e, 1, n ?? null, l, !1, a, o), e[At] = t.current, Vr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ns(t);
};
at.render = function(e, t, n) {
  if (!Ms(t)) throw Error(W(200));
  return Is(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Ms(e)) throw Error(W(40));
  return e._reactRootContainer ? (bn(function() {
    Is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[At] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Go;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ms(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Is(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function $u() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($u);
    } catch (e) {
      console.error(e);
    }
}
$u(), $c.exports = at;
var pe = $c.exports, Uu, vc = pe;
Uu = vc.createRoot, vc.hydrateRoot;
var Vu = { exports: {} }, Ts = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = m, cp = Symbol.for("react.element"), dp = Symbol.for("react.fragment"), up = Object.prototype.hasOwnProperty, mp = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bu(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) up.call(t, r) && !fp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: cp, type: e, key: a, ref: o, props: l, _owner: mp.current };
}
Ts.Fragment = dp;
Ts.jsx = Bu;
Ts.jsxs = Bu;
Vu.exports = Ts;
var s = Vu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hp = {
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
const pp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), te = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => m.createElement(
      "svg",
      {
        ref: h,
        ...hp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${pp(e)}`, i].join(" "),
        ...d
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
const Qu = te("AlertCircle", [
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
const gp = te("AlertTriangle", [
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
const Hu = te("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = te("ArrowUpDown", [
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
const Ku = te("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = te("Box", [
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
const wp = te("Calendar", [
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
const xp = te("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = te("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = te("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = te("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = te("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = te("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = te("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = te("Download", [
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
const jp = te("Eraser", [
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
const li = te("FileJson", [
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
const bp = te("FileText", [
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
const Ep = te("Folder", [
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
const Cp = te("Info", [
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
const Np = te("Lasso", [
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
const qu = te("LayoutGrid", [
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
const Mp = te("LayoutList", [
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
const Ip = te("Link2Off", [
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
const Tp = te("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = te("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = te("Maximize", [
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
const Dp = te("Menu", [
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
const Pp = te("Minimize", [
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
const Rp = te("MoreVertical", [
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
const Op = te("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = te("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = te("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = te("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = te("RefreshCw", [
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
const zp = te("ScanLine", [
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
const En = te("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = te("Settings", [
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
const Zu = te("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = te("Star", [
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
const Ap = te("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = te("Tag", [
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
const $t = te("Trash2", [
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
const Fp = te("Trash", [
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
const Wp = te("Type", [
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
const $p = te("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = te("Upload", [
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
const Vp = te("Workflow", [
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
const we = te("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = te("ZoomIn", [
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
const Qp = te("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = re;
async function ce(e) {
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
const Hp = async () => {
  const e = await re.fetchApi("/meld/home-dir");
  return (await ce(e)).home;
}, tt = ({
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
let hs = !1;
const Kp = (e) => {
  hs = e, hs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Gp = (...e) => {
  hs && console.log("[Meld]", ...e);
}, qp = (...e) => {
  hs && console.warn("[Meld]", ...e);
}, Yp = (...e) => {
  console.error("[Meld]", ...e);
}, ee = {
  log: Gp,
  warn: qp,
  error: Yp,
  init: Kp
}, Vl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await re.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ce(a);
}, Ju = async (e) => {
  const t = await re.fetchApi(`/meld/image/${e}/details`);
  return ce(t);
}, Xp = async (e, t = !1) => {
  const n = await re.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ce(n);
}, si = async (e) => {
  const t = await re.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ce(t);
}, em = async (e) => {
  const t = await re.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ce(t);
}, xc = async (e, t) => {
  const n = await re.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ce(n);
}, Zp = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await re.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ce(r);
  } catch {
    return [];
  }
}, no = async (e) => {
  const t = await re.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ce(t);
  } catch {
    return [];
  }
}, Jp = async (e, t) => {
  const n = await re.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ce(n);
}, eg = async (e, t) => {
  const n = await re.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ce(n);
}, ro = async (e, t, n) => {
  const r = await re.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ce(r);
}, tg = async (e) => {
  const t = await re.fetchApi(`/meld/image/${e}/workflow`);
  return ce(t);
}, ng = async (e) => {
  const t = await re.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ce(t);
}, rg = async (e, t) => {
  const n = await re.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, lg = async (e, t) => {
  const n = await re.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let l = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (l = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = l, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, sg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await re.fetchApi(n);
  return ce(r);
}, ag = async () => {
  const e = await re.fetchApi("/meld/search-suggestions");
  return ce(e);
}, og = async () => {
  const e = await re.fetchApi("/meld/search-keywords");
  return ce(e);
}, ig = async () => {
  const e = await re.fetchApi("/meld/search-config");
  return ce(e);
}, cg = async () => {
  const e = await re.fetchApi("/meld/favorites");
  return ce(e);
}, dg = async (e, t) => {
  const n = await re.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ce(n);
}, _c = async (e) => {
  const t = await re.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ce(t);
}, ug = async (e, t, n) => {
  const r = await re.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ce(r);
}, mg = {
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
}, tm = async () => {
  let e;
  try {
    const t = await re.fetchApi("/meld/settings");
    e = await ce(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), mg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, fg = async (e, t) => {
  const n = await re.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ce(n);
}, hg = async () => {
  const e = await re.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return ce(e);
}, kc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const w = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((x) => x(t, w));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, pg = (e) => e ? kc(e) : kc, gg = (e) => e;
function yg(e, t = gg) {
  const n = Yt.useSyncExternalStore(
    e.subscribe,
    Yt.useCallback(() => t(e.getState()), [e, t]),
    Yt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Yt.useDebugValue(n), n;
}
const vg = (e) => {
  const t = pg(e), n = (r) => yg(t, r);
  return Object.assign(n, t), n;
}, wg = (e) => vg;
function xg(e, t) {
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
const lo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return lo(r)(n);
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
        return lo(r)(n);
      }
    };
  }
}, _g = (e, t) => (n, r, l) => {
  let a = {
    storage: xg(() => window.localStorage),
    partialize: (j) => j,
    version: 0,
    merge: (j, g) => ({
      ...g,
      ...j
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (...j) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...j);
      },
      r,
      l
    );
  const v = () => {
    const j = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: j,
      version: a.version
    });
  }, w = l.setState;
  l.setState = (j, g) => (w(j, g), v());
  const x = e(
    (...j) => (n(...j), v()),
    r,
    l
  );
  l.getInitialState = () => x;
  let y;
  const _ = () => {
    var j, g;
    if (!h) return;
    const u = ++i;
    o = !1, c.forEach((p) => {
      var k;
      return p((k = r()) != null ? k : x);
    });
    const f = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, (j = r()) != null ? j : x)) || void 0;
    return lo(h.getItem.bind(h))(a.name).then((p) => {
      if (p)
        if (typeof p.version == "number" && p.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              p.state,
              p.version
            );
            return k instanceof Promise ? k.then((S) => [!0, S]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, p.state];
      return [!1, void 0];
    }).then((p) => {
      var k;
      if (u !== i)
        return;
      const [S, E] = p;
      if (y = a.merge(
        E,
        (k = r()) != null ? k : x
      ), n(y, !0), S)
        return v();
    }).then(() => {
      u === i && (f == null || f(y, void 0), y = r(), o = !0, d.forEach((p) => p(y)));
    }).catch((p) => {
      u === i && (f == null || f(void 0, p));
    });
  };
  return l.persist = {
    setOptions: (j) => {
      a = {
        ...a,
        ...j
      }, j.storage && (h = j.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (j) => (c.add(j), () => {
      c.delete(j);
    }),
    onFinishHydration: (j) => (d.add(j), () => {
      d.delete(j);
    })
  }, a.skipHydration || _(), y || x;
}, kg = _g, Sg = [
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
let El = null;
const oe = wg()(
  kg(
    (e) => ({
      isOpen: !1,
      slots: Sg,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...l.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const l = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(l).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
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
        slots: r.slots.map(
          (l) => l.id === t ? { ...l, ...n } : l
        )
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
          const h = d.filter((v) => !l.has(v));
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
        El && clearTimeout(El), e({ toastMessage: t, toastType: n }), El = setTimeout(() => {
          e({ toastMessage: null }), El = null;
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
), jg = {
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
function bg(e, t) {
  var n, r, l;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((d) => !a.has(d.id)), i = e.lineageImages.filter(
        (d) => !a.has(d.id)
      ), c = new Set(e.selectedIds);
      for (const d of t.payload)
        c.delete(d);
      return {
        ...e,
        images: o,
        lineageImages: i,
        selectedIds: c,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const a = t.payload, o = [...e.images, ...a], i = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      ).sort((c, d) => d.created_at - c.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + a.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const a = t.payload, o = e.images.map(
        (c) => c.id === a.id ? a : c
      ), i = e.lineageImages.map(
        (c) => c.id === a.id ? a : c
      );
      return {
        ...e,
        images: o,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !a.some((h) => h.id === c)) {
        const h = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        viewerImageId: c,
        viewerFallbackImage: d,
        pagination: {
          total: o,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + a.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload, c = [...e.images, ...a], d = Array.from(
        new Map(c.map((h) => [h.id, h])).values()
      );
      return {
        ...e,
        images: d,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: i,
          hasMore: i + a.length < o
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
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return a.has(t.payload) ? (a.delete(t.payload), o === t.payload && (o = null)) : (a.add(t.payload), o = t.payload), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const h = new Set(e.selectedIds);
        return h.add(t.payload), {
          ...e,
          selectedIds: h,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (h) => h.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (h) => h.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [i, c] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let h = i; h <= c; h++)
        d.add(e.images[h].id);
      return {
        ...e,
        selectedIds: d,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((a) => a.id)
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
      const a = t.payload, o = typeof a == "number" ? a : a.id, i = typeof a == "number" ? "gallery" : a.mode, c = typeof a != "number" && a.mode === "lighttable" ? a.slotId : null;
      let d = !1;
      if (typeof a != "number" && a.initialMaskMode && (typeof a.initialMaskMode == "string" ? d = a.initialMaskMode : d = "run"), d)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: o,
            mode: d
          }
        };
      const h = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((v) => v.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
        viewerLightTableSlotId: c,
        viewerInitialMaskMode: d,
        lineageImages: h ? e.lineageImages : []
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
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (oe.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const y = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === y) || e.lineageImages.find((_) => _.id === y) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (v) => v.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !v.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (v) => v.id === e.viewerImageId
      );
      if (d === -1 || d === c.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === c.length - 1 && !o)
        return e;
      const h = (d + 1) % c.length;
      return {
        ...e,
        viewerImageId: c[h].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((l = t.payload) == null ? void 0 : l.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (oe.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const y = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === y) || e.lineageImages.find((_) => _.id === y) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (v) => v.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !v.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (v) => v.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const h = (d - 1 + c.length) % c.length;
      return {
        ...e,
        viewerImageId: c[h].id
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
      const a = {
        ...e.settings,
        ...t.payload
      }, o = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (o.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: a,
        pagination: o
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    case "SHOW_TOAST": {
      const a = t.payload;
      return typeof a == "string" ? {
        ...e,
        toastMessage: a,
        toastType: "info"
      } : {
        ...e,
        toastMessage: a.message,
        toastType: a.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
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
}
const nm = m.createContext(void 0), Eg = ({
  children: e
}) => {
  const [t, n] = m.useReducer(bg, jg), r = m.useRef(t.images.length), l = m.useRef(0), a = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = m.useCallback(
    async (y, _, j) => {
      const g = t.settings["gallery.max_load_count"], u = 200;
      let f = y;
      for (; f < Math.min(_, g) && j === l.current; )
        try {
          const p = Math.min(u, g - f);
          ee.log("Background fetch: starting chunk", {
            offset: f,
            limit: p
          });
          const k = await Vl(
            f,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (j !== l.current || (n({ type: "APPEND_IMAGES", payload: k }), f += k.images.length, k.images.length === 0 || f >= k.total))
            break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (p) {
          ee.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), _ = ++l.current;
    try {
      const j = t.searchQuery.trim() !== "", g = t.settings["gallery.initial_load_count"];
      ee.log("refreshImages: starting initial fetch", {
        isSearch: j,
        fetchLimit: g,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Vl(
        0,
        g,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - y;
      ee.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > g && o(g, u.total, _);
    } catch (j) {
      ee.error("refreshImages: fetch failed", j), n({
        type: "SET_ERROR",
        payload: j instanceof Error ? j.message : String(j)
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
      const _ = r.current, j = t.searchQuery.trim() !== "", g = t.pagination.limit;
      ee.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: g,
        isSearch: j
      });
      const u = await Vl(
        _,
        g,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - y;
      ee.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      ee.error("loadMoreImages: fetch failed", _), n({
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
  ]), d = m.useCallback(async () => {
    try {
      const y = await cg();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      ee.error("Failed to load favorites", y);
    }
  }, []), h = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), j = t.images.filter(
      (g) => t.selectedIds.has(g.id)
    ).some(
      (g) => g.parent_id || g.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: j,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const j = (await si(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: j }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = m.useCallback(
    async (y, _) => {
      try {
        await fg(y, _), n({ type: "SET_SETTINGS", payload: { [y]: _ } });
      } catch (j) {
        n({
          type: "SET_ERROR",
          payload: j instanceof Error ? j.message : String(j)
        });
      }
    },
    []
  ), x = m.useCallback(
    async (y) => {
      const _ = t.images.find((f) => f.id === y);
      if (_ && !_.is_minimal)
        return _;
      const j = t.lineageImages.find((f) => f.id === y);
      if (j && !j.is_minimal)
        return j;
      const g = a.current.get(y);
      if (g)
        return g;
      const u = (async () => {
        try {
          ee.log("fetchFullImageDetails: fetching full data", { id: y });
          const f = await Ju(y);
          return n({ type: "UPDATE_IMAGE", payload: f }), f;
        } finally {
          a.current.delete(y);
        }
      })();
      return a.current.set(y, u), u;
    },
    [t.images, t.lineageImages]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const _ = await tm();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        ee.error("Failed to load settings", _);
      }
    })();
  }, []), m.useEffect(() => {
    d();
  }, [d]), m.useEffect(() => {
    const y = () => {
      i();
    }, _ = (g) => {
      const u = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, j = (g) => {
      const u = g.detail;
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
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", j), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", j);
    };
  }, [i, t.scanStatus.progress.total]), m.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    nm.Provider,
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
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, xe = () => {
  const e = m.useContext(nm);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ft = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, ai = (e) => {
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
}, oi = async () => {
  const e = await re.fetchApi("/meld/tags");
  return ce(e);
}, Cg = async (e) => {
  const t = await re.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ce(t);
}, Ng = async (e) => {
  const t = await re.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ce(t);
}, Mg = async (e, t) => {
  const n = await re.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ce(n);
}, Ig = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await re.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Tg = async (e, t, n = !1, r) => {
  const l = await re.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Lg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await re.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Dg = async (e, t, n) => {
  const r = await re.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ce(r)).count;
  } catch {
    return 0;
  }
}, Pg = async (e) => {
  const t = await re.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ce(t);
}, Rg = async () => {
  const e = await re.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ce(e);
}, rm = () => {
  const { dispatch: e } = xe(), [t, n] = m.useState(() => {
    const M = localStorage.getItem("meld-import-config"), L = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (M)
      try {
        const P = JSON.parse(M);
        return { ...L, ...P, tags: [] };
      } catch {
        return L;
      }
    return L;
  });
  m.useEffect(() => {
    const { tags: M, ...L } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(L));
  }, [t]);
  const [r, l] = m.useState([]), [a, o] = m.useState([]), [i, c] = m.useState(0), [d, h] = m.useState(!1), [v, w] = m.useState([]), [x, y] = m.useState(""), [_, j] = m.useState(!1), [g, u] = m.useState(null), f = m.useRef(!1), p = (M) => {
    M.target === M.currentTarget && (f.current = !0);
  }, k = (M) => {
    M.target === M.currentTarget && f.current && e({ type: "CLOSE_MODAL" }), f.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const L = await Hp();
        n((P) => P.custom_path ? P : { ...P, custom_path: L });
      } catch (L) {
        ee.error("Failed to fetch home directory:", L);
      }
    })();
  }, []), m.useEffect(() => {
    const M = new AbortController();
    return (async () => {
      const P = t.type === "custom" ? t.custom_path : t.subfolder;
      if (ee.log(
        `loadFolders started. Path: "${P}", Type: "${t.type}"`
      ), t.type === "custom" && !P) {
        ee.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      h(!0);
      const T = P, C = t.type;
      try {
        ee.log("Step 1: Fast load starting...");
        const D = await Tg(
          t.type,
          P,
          !0,
          M.signal
        );
        if (M.signal.aborted) {
          ee.log("Step 1: Aborted.");
          return;
        }
        ee.log(
          `Step 1 complete. Found ${D.folders.length} folders, ${D.images.length} images.`
        ), l(D.folders), o(D.images), c(null);
        const Q = D.folders.map(($) => $.name);
        Q.length > 0 && (ee.log(
          `Step 2: Metadata fetch starting for ${Q.length} folders...`
        ), Lg(
          C,
          T,
          Q,
          M.signal
        ).then(($) => {
          if (M.signal.aborted) {
            ee.log("Step 2: Aborted.");
            return;
          }
          ee.log("Step 2: Metadata fetch complete."), l(
            (H) => H.map((se) => {
              const V = $[se.name];
              return V ? { ...se, count: V.count, preview: V.preview } : se;
            })
          );
        }).catch(($) => {
          $.name !== "AbortError" && ee.error("Step 2: Metadata fetch failed:", $);
        })), ee.log("Step 3: Path image count starting..."), Dg(C, T, M.signal).then(($) => {
          if (M.signal.aborted) {
            ee.log("Step 3: Aborted.");
            return;
          }
          ee.log(`Step 3: Path image count complete: ${$}`), c($);
        }).catch(($) => {
          $.name !== "AbortError" && ee.error("Step 3: Path image count failed:", $);
        });
      } catch (D) {
        if (D.name === "AbortError") {
          ee.log("Request aborted.");
          return;
        }
        ee.error("Failed to load folders:", D), l([]), o([]), c(0);
      } finally {
        M.signal.aborted || h(!1);
      }
    })(), () => {
      M.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = m.useCallback(async () => {
    j(!0);
    try {
      const M = await oi();
      w(M);
    } catch (M) {
      ee.error("Failed to fetch tags:", M);
    } finally {
      j(!1);
    }
  }, []);
  m.useEffect(() => {
    S();
  }, [S]), tt({
    onEscape: m.useCallback(() => {
      g ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [g, e])
  });
  const E = m.useMemo(() => v.filter(
    (M) => M.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(M.name)
  ), [v, x, t.tags]), b = (M) => {
    const L = M.trim();
    L && !t.tags.includes(L) && (n({ ...t, tags: [...t.tags, L] }), y(""));
  }, z = (M) => {
    n({ ...t, tags: t.tags.filter((L) => L !== M) });
  }, O = (M) => {
    M.key === "Enter" && x.trim() && (M.preventDefault(), b(x.trim()));
  }, R = async () => {
    try {
      await Pg(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (M) {
      ee.error("Failed to start scan:", M), alert(`Failed to start scan: ${M}`);
    }
  }, U = (M) => {
    if (t.type === "custom") {
      const L = t.custom_path.includes("\\") ? "\\" : "/", P = t.custom_path.endsWith(L) ? `${t.custom_path}${M}` : `${t.custom_path}${L}${M}`;
      n({ ...t, custom_path: P });
    } else {
      const L = t.subfolder ? `${t.subfolder}/${M}` : M;
      n({ ...t, subfolder: L });
    }
  }, X = () => {
    if (t.type === "custom") {
      const M = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.split(M);
      if (L.length > 1) {
        L.pop();
        let P = L.join(M);
        P === "" && M === "/" && (P = "/"), n({ ...t, custom_path: P });
      }
    } else {
      const M = t.subfolder.split("/");
      M.pop(), n({ ...t, subfolder: M.join("/") });
    }
  };
  return pe.createPortal(
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
              onClick: (M) => M.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                          onChange: (M) => n({
                            ...t,
                            type: M.target.value,
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
                          onChange: (M) => n({ ...t, recursive: M.target.checked })
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
                          onChange: (M) => n({
                            ...t,
                            link_strategy: M.target.value,
                            auto_link_parent: M.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((M) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        M,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => z(M),
                            children: /* @__PURE__ */ s.jsx(we, { size: 12 })
                          }
                        )
                      ] }, M)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (M) => y(M.target.value),
                            onKeyDown: O
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => b(x),
                            children: /* @__PURE__ */ s.jsx(Ls, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : E.map((M) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => b(M.name),
                          children: M.name
                        },
                        M.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: R,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Jr, { size: 16 }),
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
                          onClick: X,
                          children: [
                            /* @__PURE__ */ s.jsx(Gu, { size: 16 }),
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
                          onChange: (M) => n({ ...t, custom_path: M.target.value }),
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
                      r.map((M) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(M.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: M.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ft(M.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Ep, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: M.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${M.count === null ? "meld-folder-count--loading" : ""}`,
                                children: M.count !== null ? `${M.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ri, { size: 14 })
                          ]
                        },
                        M.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((M) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(M),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: ft(M, 120),
                              alt: M.filename,
                              title: M.filename
                            }
                          )
                        },
                        M.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          g && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (M) => {
                M.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ s.jsx(we, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: ft(g, 400),
                          alt: g.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: g.filename })
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
}, Og = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = m.useState("zip"), [a, o] = m.useState(!1), [i, c] = m.useState(!1), d = m.useRef(!1), h = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, v = (x) => {
    x.target === x.currentTarget && d.current && (i || n()), d.current = !1;
  };
  tt({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await rg(e, a);
      else
        for (const x of e)
          await lg(x, a), await new Promise((y) => setTimeout(y, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Zr, { size: 18 }),
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
                disabled: i,
                children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                          checked: r === "zip",
                          onChange: () => l("zip"),
                          disabled: i
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
                          checked: r === "raw",
                          onChange: () => l("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: w,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(Zr, { size: 16 }),
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
}, lm = async () => {
  const e = await re.fetchApi("/meld/workflows");
  return ce(e);
}, sm = async (e) => {
  const t = await re.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ce(t);
}, ii = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r, l) => {
    var x, y, _, j, g, u, f;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await sm(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (p) => {
      if (!p) return !1;
      const k = p.replace(/\s+/g, "");
      return k === "MeldImageLoader" || k === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find(
          (S) => d(S.type)
        );
        k && (o = String(k.id));
      }
      const p = a.nodes.find(
        (k) => {
          var S;
          return ((S = k.type) == null ? void 0 : S.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      p && (i = String(p.id));
    } else {
      if (!o)
        for (const p in a) {
          const k = a[p];
          if (d(k.class_type)) {
            o = p;
            break;
          }
        }
      for (const p in a)
        if (((x = a[p].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          i = p;
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
      const p = window.app, k = t.replace(/\.json$/i, "");
      let S = !1;
      const E = document.querySelectorAll(".workflow-tab");
      for (const O of Array.from(E)) {
        const R = O.querySelector(".workflow-label"), U = ((y = R == null ? void 0 : R.textContent) == null ? void 0 : y.trim()) || ((_ = O.textContent) == null ? void 0 : _.trim()) || "";
        if (U === k || U === t || U.startsWith(`${k} `) || U.startsWith(`${k}•`)) {
          O.click(), S = !0;
          break;
        }
      }
      S || await p.loadGraphData(a, !0, !0, t), await new Promise((O) => setTimeout(O, 200));
      const b = p.graph._nodes;
      console.log("[Meld] Active graph nodes count:", b.length);
      const z = b.find(
        (O) => String(O.id) === o || d(O.type)
      );
      if (z) {
        const O = (j = z.widgets) == null ? void 0 : j.find((R) => R.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: z.id,
          type: z.type,
          imagePath: h
        }), O && (O.value = h, typeof O.callback == "function" && O.callback(h));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const O = b.find(
          (R) => {
            var U;
            return String(R.id) === i || ((U = R.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: O == null ? void 0 : O.id,
          maskFilename: r
        }), O) {
          const R = (g = O.widgets) == null ? void 0 : g.find(
            (X) => X.name === "image"
          );
          R && (R.value = `${r} [temp]`);
          const U = (u = O.widgets) == null ? void 0 : u.find(
            (X) => X.name === "channel"
          );
          U && (U.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      p.graph.setDirtyCanvas(!0, !0);
      try {
        await p.queuePrompt(0);
        return;
      } catch (O) {
        throw console.error("Failed to queue workflow:", O), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = h, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await re.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: re.clientId
      })
    });
    if (!w.ok) {
      const p = await w.json();
      throw new Error(((f = p.error) == null ? void 0 : f.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) });
function zg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function tl(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = zg(e), l = (h) => {
    if (!h) return !1;
    const v = h.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (h) => l(h.type)
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
const Ag = () => {
  const { dispatch: e } = xe();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var h, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), tl(n);
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
      const d = o.widgets.find(
        (w) => w.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = l.graph).afterChange) == null || v.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function ia(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Fg(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = so(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++)
    d[h] = c.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function so(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function Wg(e) {
  return e.data.every((t) => t === 0);
}
const Sc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ps = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = xe(), i = m.useMemo(() => a.images.find((N) => N.id === e) ?? a.lineageImages.find((N) => N.id === e) ?? oe.getState().images[String(e)], [a.images, a.lineageImages, e]), c = m.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = Ag(), { executeWorkflow: v } = ii();
  tt({ onEscape: l });
  const w = m.useRef(null), x = m.useRef(null), y = m.useRef(null), _ = m.useRef(null), [j, g] = m.useState(!1), [u, f] = m.useState(() => {
    const N = localStorage.getItem("meld-mask-tool");
    return Sc(N) ? N : "rect";
  });
  m.useEffect(() => {
    Sc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [p, k] = m.useState({ x: 0, y: 0 }), [S, E] = m.useState({ x: 0, y: 0 }), [b, z] = m.useState([]), [O, R] = m.useState(null), [U, X] = m.useState(!1), [M, L] = m.useState(1), [P, T] = m.useState({ x: 0, y: 0 }), [C, D] = m.useState(!1), [Q, $] = m.useState(!1), H = m.useRef(null), se = m.useCallback(() => {
    const N = y.current, A = x.current;
    if (!N || !A) return null;
    const I = A.getBoundingClientRect(), F = N.naturalWidth, B = N.naturalHeight;
    if (!F || !B) return null;
    const G = F / B, le = I.width / I.height;
    let ae, fe, ue = 0, ye = 0;
    return G > le ? (ae = I.width, fe = I.width / G, ye = (I.height - fe) / 2) : (fe = I.height, ae = I.height * G, ue = (I.width - ae) / 2), {
      left: ue,
      top: ye,
      width: ae,
      height: fe
    };
  }, []), V = m.useCallback(
    (N, A, I, F) => {
      if (!N) return A;
      const B = N.getBoundingClientRect(), G = B.width / 2, le = B.height / 2, ae = {
        x: (G - A.x) / I,
        y: (le - A.y) / I
      };
      return { x: G - ae.x * F, y: le - ae.y * F };
    },
    []
  ), Z = m.useCallback(() => {
    L((N) => {
      const A = Math.min(N * 1.2, 20);
      return T(
        (I) => V(x.current, I, N, A)
      ), A;
    });
  }, [V]), K = m.useCallback(() => {
    L((N) => {
      const A = Math.max(0.1, N / 1.2);
      return T(
        (I) => V(x.current, I, N, A)
      ), A;
    });
  }, [V]), de = m.useCallback(() => {
    const N = w.current;
    if (!N) return;
    const A = N.getContext("2d");
    if (!A) return;
    A.clearRect(0, 0, N.width, N.height);
    const I = getComputedStyle(document.documentElement), F = I.getPropertyValue("--comfy-input-bg-active") || I.getPropertyValue("--comfy-input-bg") || I.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", B = se();
    if (_.current && B && (A.save(), A.globalAlpha = 0.5, A.drawImage(
      _.current,
      B.left,
      B.top,
      B.width,
      B.height
    ), A.restore()), j) {
      const G = Math.min(p.x, S.x), le = Math.min(p.y, S.y), ae = Math.abs(p.x - S.x), fe = Math.abs(p.y - S.y);
      if (A.save(), A.globalAlpha = 0.3, A.fillStyle = F, A.strokeStyle = "white", A.lineWidth = 2, A.setLineDash([5, 5]), A.beginPath(), u === "rect")
        A.rect(G, le, ae, fe);
      else if (u === "ellipse") {
        const ue = G + ae / 2, ye = le + fe / 2;
        A.ellipse(ue, ye, ae / 2, fe / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && b.length > 1) {
        A.moveTo(b[0].x, b[0].y);
        for (let ue = 1; ue < b.length; ue++)
          A.lineTo(b[ue].x, b[ue].y);
        A.closePath();
      }
      A.fill(), A.globalAlpha = 1, A.stroke(), A.restore();
    }
  }, [
    j,
    p,
    S,
    u,
    b,
    se
  ]), [Re, ne] = m.useState([]), he = m.useMemo(() => Re.length > 0 ? Re[Re.length - 1] : y.current ? ia(
    y.current.naturalWidth,
    y.current.naturalHeight
  ) : null, [Re]);
  m.useEffect(() => {
    var N;
    (N = y.current) != null && N.naturalWidth && Re.length === 0 && ne([
      ia(
        y.current.naturalWidth,
        y.current.naturalHeight
      )
    ]);
  }, [Re.length]);
  const J = m.useRef(!1), Fe = m.useRef(0), We = (N) => {
    N.target === N.currentTarget && (J.current = !0);
  }, bt = (N) => {
    N.target === N.currentTarget && J.current && !j && l(), J.current = !1;
  };
  m.useEffect(() => {
    if (!he) return;
    _.current || (_.current = document.createElement("canvas"));
    const N = _.current;
    N.width = he.width, N.height = he.height;
    const A = N.getContext("2d");
    if (!A) return;
    const I = so(he, [255, 255, 255], 255);
    A.putImageData(I, 0, 0), de();
  }, [he, de]), m.useEffect(() => {
    const N = x.current;
    if (!N) return;
    const A = (I) => {
      I.preventDefault();
      const F = I.deltaY > 0 ? 1 / 1.1 : 1.1;
      L((B) => {
        const G = Math.min(Math.max(0.1, B * F), 20);
        return T((le) => {
          const ae = N.getBoundingClientRect(), fe = I.clientX - ae.left, ue = I.clientY - ae.top, ye = {
            x: (fe - le.x) / B,
            y: (ue - le.y) / B
          };
          return {
            x: fe - ye.x * G,
            y: ue - ye.y * G
          };
        }), G;
      });
    };
    return N.addEventListener("wheel", A, { passive: !1 }), () => N.removeEventListener("wheel", A);
  }, []), m.useEffect(() => {
    if (!Q) return;
    const N = (I) => {
      if (H.current) {
        const F = I.clientX - H.current.clientX, B = I.clientY - H.current.clientY;
        T({
          x: H.current.panX + F,
          y: H.current.panY + B
        });
      }
    }, A = () => {
      $(!1), H.current = null;
    };
    return window.addEventListener("mousemove", N), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", A);
    };
  }, [Q]), m.useEffect(() => {
    const N = () => {
      x.current && w.current && (w.current.width = x.current.clientWidth, w.current.height = x.current.clientHeight, de());
    }, A = new ResizeObserver(N);
    return x.current && A.observe(x.current), N(), () => A.disconnect();
  }, [de]);
  const Vt = (N) => {
    var ue;
    const A = N.button === 2, I = N.button === 1, F = C && N.button === 0;
    if (A || I || F) {
      N.preventDefault(), N.stopPropagation(), H.current = {
        panX: P.x,
        panY: P.y,
        clientX: N.clientX,
        clientY: N.clientY
      }, $(!0);
      return;
    }
    if (N.button !== 0 || j || U || Date.now() - Fe.current < 100)
      return;
    N.preventDefault();
    const B = se(), G = (ue = x.current) == null ? void 0 : ue.getBoundingClientRect();
    if (!B || !G) return;
    g(!0);
    const le = {
      x: (N.clientX - G.left - P.x) / M,
      y: (N.clientY - G.top - P.y) / M
    }, ae = Math.max(
      B.left,
      Math.min(le.x, B.left + B.width)
    ), fe = Math.max(
      B.top,
      Math.min(le.y, B.top + B.height)
    );
    k({ x: ae, y: fe }), E({ x: ae, y: fe }), z(u === "lasso" ? [{ x: ae, y: fe }] : []), R(null);
  };
  m.useEffect(() => {
    if (!j) return;
    const N = (I) => {
      var fe;
      const F = se(), B = (fe = x.current) == null ? void 0 : fe.getBoundingClientRect();
      if (!F || !B) return;
      const G = {
        x: (I.clientX - B.left - P.x) / M,
        y: (I.clientY - B.top - P.y) / M
      }, le = Math.max(
        F.left,
        Math.min(G.x, F.left + F.width)
      ), ae = Math.max(
        F.top,
        Math.min(G.y, F.top + F.height)
      );
      E({ x: le, y: ae }), u === "lasso" && z((ue) => [...ue, { x: le, y: ae }]);
    }, A = (I) => {
      var G;
      const F = se(), B = (G = x.current) == null ? void 0 : G.getBoundingClientRect();
      if (F && B && he && y.current) {
        const le = {
          x: (I.clientX - B.left - P.x) / M,
          y: (I.clientY - B.top - P.y) / M
        }, ae = Math.max(
          F.left,
          Math.min(le.x, F.left + F.width)
        ), fe = Math.max(
          F.top,
          Math.min(le.y, F.top + F.height)
        ), ue = Math.min(p.x, ae), ye = Math.min(p.y, fe), $e = Math.abs(p.x - ae), Ne = Math.abs(p.y - fe), gt = u === "lasso";
        if ($e > 5 || Ne > 5 || gt && b.length > 2) {
          const Om = y.current.naturalWidth, zm = y.current.naturalHeight, Tn = Om / F.width, Ln = zm / F.height, Am = Fg(he, (fn) => {
            if (u === "rect") {
              const Dn = (ue - F.left) * Tn, Bt = (ye - F.top) * Ln, ol = $e * Tn, il = Ne * Ln;
              fn.rect(Dn, Bt, ol, il);
            } else if (u === "ellipse") {
              const Dn = (ue - F.left) * Tn, Bt = (ye - F.top) * Ln, ol = $e * Tn, il = Ne * Ln, Fm = Dn + ol / 2, Wm = Bt + il / 2;
              fn.ellipse(
                Fm,
                Wm,
                ol / 2,
                il / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (u === "lasso" && b.length > 2) {
              const Dn = b[0];
              fn.moveTo(
                (Dn.x - F.left) * Tn,
                (Dn.y - F.top) * Ln
              );
              for (let Bt = 1; Bt < b.length; Bt++)
                fn.lineTo(
                  (b[Bt].x - F.left) * Tn,
                  (b[Bt].y - F.top) * Ln
                );
              fn.closePath();
            }
          });
          ne((fn) => [...fn, Am]);
        }
      }
      Fe.current = Date.now(), g(!1), z([]);
    };
    return window.addEventListener("mousemove", N), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", A);
    };
  }, [
    j,
    p.x,
    p.y,
    se,
    he,
    u,
    b,
    P.x,
    P.y,
    M
  ]);
  const Mn = m.useCallback(() => {
    Re.length > 1 && ne((N) => N.slice(0, -1));
  }, [Re.length]);
  m.useEffect(() => {
    const N = (F) => {
      if (!F) return !1;
      const B = F, G = B.tagName;
      return G === "INPUT" || G === "TEXTAREA" || G === "BUTTON" || G === "SELECT" || G === "A" || B.isContentEditable || B.tabIndex != null && B.tabIndex >= 0;
    }, A = (F) => {
      F.code === "Space" && !F.repeat && (N(F.target) || (F.preventDefault(), D(!0))), (F.metaKey || F.ctrlKey) && F.key.toLowerCase() === "z" && !F.shiftKey ? (F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation(), Mn()) : F.key === "Escape" && (F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, I = (F) => {
      F.code === "Space" && (N(F.target) || (F.preventDefault(), D(!1)));
    };
    return window.addEventListener("keydown", A, { capture: !0 }), window.addEventListener("keyup", I, { capture: !0 }), () => {
      window.removeEventListener("keydown", A, { capture: !0 }), window.removeEventListener("keyup", I, { capture: !0 });
    };
  }, [Mn, l]);
  const mr = () => {
    if (y.current) {
      const N = ia(
        y.current.naturalWidth,
        y.current.naturalHeight
      );
      ne((A) => [...A, N]);
    }
  }, fr = async () => {
    if (!he || !y.current) return null;
    X(!0);
    try {
      const { width: N, height: A } = he, I = document.createElement("canvas");
      I.width = N, I.height = A;
      const F = I.getContext("2d");
      if (!F) return null;
      const B = so(he, [255, 255, 255], 255);
      F.putImageData(B, 0, 0);
      const G = await new Promise(
        ($e) => I.toBlob($e, "image/png")
      );
      if (!G) return null;
      const ae = `meld_mask_${Date.now()}.png`, fe = new File([G], ae, { type: "image/png" }), ue = new FormData();
      ue.append("image", fe), ue.append("type", "temp"), ue.append("overwrite", "true");
      const ye = await re.fetchApi("/upload/image", {
        method: "POST",
        body: ue
      });
      return ye.ok ? (await ye.json()).name : null;
    } catch (N) {
      return console.error("[Meld] Error uploading mask:", N), null;
    } finally {
      X(!1);
    }
  }, Ps = async () => {
    if (!d) return;
    const N = await fr();
    N && h(d, N) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, Rs = async () => {
    if (!d) return;
    const N = await fr();
    N && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      N,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: N,
        onSuccess: r
      }
    }));
  }, In = m.useMemo(
    () => he && !Wg(he),
    [he]
  );
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: We,
      onMouseUp: bt,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (N) => N.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(we, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "active" : ""}`,
                    onClick: () => f("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Zu, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "active" : ""}`,
                    onClick: () => f("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(kp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "active" : ""}`,
                    onClick: () => f("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Np, { size: 18 }),
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
                    onClick: K,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(Qp, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      L(1), T({ x: 0, y: 0 });
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
                      Math.round(M * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: Z,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(Bp, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: x,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Vt,
                  onContextMenu: (N) => N.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: Q ? "grabbing" : C ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${P.x}px, ${P.y}px) scale(${M})`,
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
                            ref: y,
                            src: ai(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (N) => N.preventDefault()
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: w,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (N) => N.preventDefault()
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
                      onClick: Ps,
                      disabled: !In || U,
                      type: "button",
                      children: [
                        U ? /* @__PURE__ */ s.jsx(wc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ni, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: Rs,
                      disabled: !In || U,
                      type: "button",
                      children: [
                        U ? /* @__PURE__ */ s.jsx(wc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Jr, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: Mn,
                      disabled: Re.length <= 1 || U,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx($p, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: mr,
                      disabled: !In || U,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(we, { size: 16 }),
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
}, am = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Cl = (e) => e.replace(/^["']|["']$/g, ""), $g = (e) => e.trim() ? am(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Ug = (e, t) => {
  const n = am(e), r = {
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
      const o = Cl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Cl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Cl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Cl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Vg = () => {
  const { state: e, dispatch: t, updateSetting: n } = xe(), [r, l] = m.useState("Gallery"), [a, o] = m.useState({
    ...e.settings
  }), [i, c] = m.useState(
    {}
  ), [d, h] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, y] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, j] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [g, u] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [f, p] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, S] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [E, b] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [z, O] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    R,
    U
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    X,
    M
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [L, P] = m.useState(
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
      const Z = Object.keys(a).filter(
        (K) => a[K] !== e.settings[K] && !i[K]
      );
      if (Z.length > 0)
        for (const K of Z)
          await n(K, a[K]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (Z, K) => {
      o((de) => ({
        ...de,
        [Z]: !K
      }));
    },
    handleNumberChange: (Z, K, de, Re) => {
      Z === "gallery.initial_load_count" ? h(K) : Z === "gallery.max_load_count" ? w(K) : Z === "gallery.lineage_max_depth" ? y(K) : Z === "viewer.thumbnail_window_size" ? j(K) : Z === "gallery.trash_retention_days" ? u(K) : Z === "gallery.auto_link_phash_threshold" ? p(K) : Z === "gallery.suggest_phash_threshold" ? S(K) : Z === "viewer.details.max_positive_prompt_lines" ? b(K) : Z === "viewer.details.max_negative_prompt_lines" ? O(K) : Z === "fullscreen.details.max_positive_prompt_lines" ? U(K) : Z === "fullscreen.details.max_negative_prompt_lines" ? M(K) : Z === "sidebar.thumbnail_size" && P(K);
      const ne = Number.parseInt(K, 10);
      if (!Number.isNaN(ne)) {
        let he = ne;
        de !== void 0 && he < de && (he = de), Re !== void 0 && he > Re && (he = Re), o((J) => ({
          ...J,
          [Z]: he
        }));
      }
    },
    handleNumberBlur: (Z) => {
      Z.key === "gallery.initial_load_count" ? h(
        a["gallery.initial_load_count"].toString()
      ) : Z.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : Z.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : Z.key === "viewer.thumbnail_window_size" ? j(
        a["viewer.thumbnail_window_size"].toString()
      ) : Z.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : Z.key === "gallery.auto_link_phash_threshold" ? p(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : Z.key === "gallery.suggest_phash_threshold" ? S(
        a["gallery.suggest_phash_threshold"].toString()
      ) : Z.key === "viewer.details.max_positive_prompt_lines" ? b(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : Z.key === "viewer.details.max_negative_prompt_lines" ? O(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : Z.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : Z.key === "fullscreen.details.max_negative_prompt_lines" ? M(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : Z.key === "sidebar.thumbnail_size" && P(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((Z) => ({
        ...Z,
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
              await hg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (Z) {
              console.error("Failed to clear thumbnail cache:", Z), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (Z) => $g(Z),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: g,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: E,
    maxNegativePromptLinesInput: z,
    fullscreenMaxPositivePromptLinesInput: R,
    fullscreenMaxNegativePromptLinesInput: X,
    thumbnailSizeInput: L
  };
}, Y = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Bg = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
function Tt({
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
function om() {
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
function im(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function cm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function dm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function um(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(om, {})
  ] });
}
function mm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function fm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(om, {})
  ] });
}
function hm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function pm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function gm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function ym(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const vm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: im
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: mm
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: fm
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: dm },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: um
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: cm
  },
  { id: "edit_tags", label: "Edit Tags", icon: pm },
  { id: "edit_notes", label: "Edit Notes", icon: gm },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: hm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: ym
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: $t }
], Qg = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
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
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
            children: vm.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Hg = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Kg = ({
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
            " - Send to Light Table (Example:",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ", ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ",",
            " ",
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
        Y,
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
                t((v) => ({
                  ...v,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(
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
      /* @__PURE__ */ s.jsx(
        Y,
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
      Y,
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
}, Gg = ({
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
      Y,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => l((w) => ({
              ...w,
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
      Y,
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
            onChange: (v) => t(
              "gallery.auto_link_phash_threshold",
              v.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (v) => t(
              "gallery.suggest_phash_threshold",
              v.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
            onChange: (v) => t(
              "gallery.lineage_max_depth",
              v.target.value,
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
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
            onChange: (v) => t(
              "gallery.trash_retention_days",
              v.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
] }), qg = ({
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
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
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
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
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
] }), wm = () => {
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
    handleViewTrash: v,
    handleClearThumbnailCache: w,
    validateShortcut: x,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: _,
    lineageMaxDepthInput: j,
    thumbnailWindowSizeInput: g,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: E,
    fullscreenMaxNegativePromptLinesInput: b,
    thumbnailSizeInput: z
  } = Vg();
  tt({ onEscape: o });
  const O = m.useRef(!1), R = (L) => {
    L.target === L.currentTarget && (O.current = !0);
  }, U = (L) => {
    L.target === L.currentTarget && O.current && o(), O.current = !1;
  }, X = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], M = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Gg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: w,
            lineageMaxDepthInput: j,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Qg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: z,
            initialLoadCountInput: y,
            maxLoadCountInput: _
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          qg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: g,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Bg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: E,
            maxNegativePromptLinesInput: b
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Kg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: x,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Hg, {});
      default:
        return null;
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: R,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (L) => L.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: X.map((L) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === L.id ? "active" : ""}`,
                    onClick: () => t(L.id),
                    children: L.label
                  },
                  L.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: M() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", xm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = xe(), [o, i] = m.useState([]), [c, d] = m.useState(t), [h, v] = m.useState(""), [w, x] = m.useState(!0), [y, _] = m.useState(!1), j = m.useRef(null), g = e.length > 1, u = m.useRef(!1), f = (R) => {
    R.target === R.currentTarget && (u.current = !0);
  }, p = (R) => {
    R.target === R.currentTarget && u.current && n(), u.current = !1;
  }, k = m.useCallback(async () => {
    x(!0);
    try {
      const R = await oi();
      i(R);
    } catch (R) {
      console.error("Failed to fetch tags:", R);
    } finally {
      x(!1);
    }
  }, []);
  m.useEffect(() => {
    k();
  }, [k]), m.useEffect(() => {
    j.current && j.current.focus();
  }, []), tt({ onEscape: n });
  const S = m.useMemo(() => o.filter(
    (R) => R.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(R.name)
  ), [o, h, c]), E = (R) => {
    const U = R.trim();
    if (U.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !c.includes(U) && (d([...c, U]), v(""));
  }, b = (R) => {
    d(c.filter((U) => U !== R));
  }, z = async () => {
    _(!0);
    try {
      if (g) {
        const R = c.filter((X) => !t.includes(X)), U = t.filter(
          (X) => !c.includes(X)
        );
        await ro(e, R, U);
      } else
        await Jp(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (R) {
      console.error("Failed to update tags:", R), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, O = (R) => {
    R.key === "Enter" && h.trim() && (R.preventDefault(), R.stopPropagation(), E(h.trim()));
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (R) => R.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(ur, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: g ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(we, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            g && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: g ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((R) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                R,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => b(R),
                    children: /* @__PURE__ */ s.jsx(we, { size: 12 })
                  }
                )
              ] }, R)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: j,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (R) => v(R.target.value),
                    onKeyDown: O
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => E(h),
                    children: [
                      /* @__PURE__ */ s.jsx(Ls, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? h ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((R) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => E(R.name),
                  children: R.name
                },
                R.id
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
                onClick: z,
                disabled: y,
                children: y ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ds = (e, t) => {
  const n = m.useCallback(async (x) => {
    try {
      const y = await tg(x.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), ee.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return ee.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = m.useCallback(async (x) => {
    try {
      const y = await ng(x.id), _ = y.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", j = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const f = y.is_flux ? {
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
        for (const [E, b] of Object.entries(f)) {
          const z = y[E];
          if (z != null && z !== "") {
            const O = u.widgets.find(
              (R) => R.name === b
            );
            O && (O.value = z);
          }
        }
        const S = u.widgets.find(
          (E) => E.name === "control_after_generate"
        );
        S && (S.value = "fixed");
      }
      const p = j.canvas.ds.offset, k = j.canvas.ds.scale;
      return u.pos = [(-p[0] + 400) / k, (-p[1] + 300) / k], j.graph.add(u), j.canvas.selectNode(u), j.canvas.centerOnNode(u), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), l = m.useCallback(
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
  ), a = m.useCallback(
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
  ), o = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = m.useCallback(
    (x) => {
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
        const f = u.replace(/\s+/g, "").toLowerCase();
        return f === "meldimageloader" || f === "loadimage";
      }, j = y.graph._nodes.filter(
        (u) => _(u.type)
      );
      if (j.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (j.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: j.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              tl(x, u);
            }
          }
        }), !0;
      const g = tl(x);
      return g.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: g.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = m.useCallback(
    (x) => {
      const y = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), d = m.useCallback(
    async (x, y = "run") => {
      var j;
      console.log("[Meld] handleRunWithMask called", x, y);
      const _ = Array.isArray(x) ? x : [x];
      if (y === "apply") {
        const g = window.app, u = ((j = g == null ? void 0 : g.graph) == null ? void 0 : j._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((k) => ({
            id: k.id,
            type: k.type
          }))
        );
        const f = u.some(
          (k) => k.type === "LoadImageMask"
        ), p = u.some(
          (k) => k.type === "MeldImageLoader" || k.type === "LoadImage" || k.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: f, hasLoaderNode: p }), !f || !p) {
          const k = [];
          p || k.push("'Meld Image Loader'"), f || k.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${k.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (_.length > 1) {
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
          payload: { type: "mask_editor", imageId: _[0].id, mode: y }
        });
        return;
      }
      try {
        if (!(await lm()).some(
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
      } catch (g) {
        console.error("[Meld] Error checking workflows:", g);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: _,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), h = m.useCallback(
    async (x, y) => {
      try {
        const _ = x.id, g = (await si([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: g }), y == null || y();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), v = m.useCallback(
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
  ), w = m.useCallback(
    async (x, y) => {
      try {
        const _ = await eg(
          x,
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
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: h,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, _m = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = xe(), { handleUpdateUserNotes: a } = Ds(r, l), [o, i] = m.useState(t), [c, d] = m.useState(!1), h = m.useRef(null), v = m.useRef(!1), w = (_) => {
    _.target === _.currentTarget && (v.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && v.current && n(), v.current = !1;
  };
  m.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const y = m.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return m.useEffect(() => {
    const _ = (j) => {
      j.key === "Enter" && (j.ctrlKey || j.metaKey) && j.target === h.current && (j.preventDefault(), j.stopPropagation(), j.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [y]), tt({ onEscape: n }), pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Ap, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(we, { size: 20 }) })
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
                onChange: (_) => i(_.target.value)
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
}, km = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = xe(), l = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  tt({ onEscape: l });
  const a = m.useRef(!1), o = m.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = m.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return pe.createPortal(
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
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: l,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                  }
                )
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
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
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
                      /* @__PURE__ */ s.jsx(Jr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: l,
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
}, Sm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var P;
  const { dispatch: l } = xe(), [a, o] = m.useState([]), [i, c] = m.useState(!0), [d, h] = m.useState(null), [v, w] = m.useState(!1), [x, y] = m.useState(null), [_, j] = m.useState({}), [g, u] = m.useState({}), [f, p] = m.useState(""), k = m.useRef(null), S = m.useMemo(() => a.map((T) => {
    let C = T.valid, D = T.reason;
    return r && T.mask_count === 0 && (C = !1, D = "No 'Load Image (as Mask)' node found."), { ...T, valid: C, reason: D };
  }).sort((T, C) => T.valid !== C.valid ? T.valid ? -1 : 1 : T.name.localeCompare(C.name)), [a, r]), E = m.useMemo(() => {
    if (!f.trim()) return S;
    const T = f.toLowerCase();
    return S.filter(
      (C) => C.name.toLowerCase().includes(T)
    );
  }, [S, f]), b = m.useCallback(async () => {
    try {
      c(!0);
      const T = await lm();
      o(T), h(null);
    } catch (T) {
      h(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  m.useEffect(() => {
    b();
  }, [b]), m.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const z = m.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  tt({ onEscape: z });
  const O = m.useRef(!1), R = m.useCallback((T) => {
    T.target === T.currentTarget && (O.current = !0);
  }, []), U = m.useCallback(
    (T) => {
      T.target === T.currentTarget && O.current && z(), O.current = !1;
    },
    [z]
  ), X = async (T, C) => {
    if (!v)
      try {
        w(!0);
        const D = await t(T, C);
        n == null || n(), D !== !1 && z();
      } catch (D) {
        h(D instanceof Error ? D.message : String(D)), w(!1);
      }
  }, M = async (T) => {
    if (!(_[T] || g[T]))
      try {
        u(($) => ({ ...$, [T]: !0 }));
        const C = await sm(T), D = [], Q = ($) => {
          if (!$) return !1;
          const H = $.replace(/\s+/g, "").toLowerCase();
          return r ? H === "loadimagemask" : H === "meldimageloader" || H === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const $ of C.nodes)
            Q($.type) && (console.log(
              "[Meld] Found target node (UI):",
              $.id,
              $.type,
              $.title
            ), D.push({
              id: String($.id),
              type: $.type || "",
              title: $.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const $ in C) {
            const H = C[$];
            H && typeof H == "object" && Q(H.class_type) && (console.log(
              "[Meld] Found target node (API):",
              $,
              H.class_type
            ), D.push({
              id: $,
              type: H.class_type || ""
            }));
          }
        }
        D.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), j(($) => ({ ...$, [T]: D }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [T]: !1 }));
      }
  }, L = (T) => {
    if (!T.valid || v) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      X(T.name);
      return;
    }
    x === T.name ? y(null) : (y(T.name), M(T.name));
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: R,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(li, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: z,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(Qu, { size: 20 }),
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
                      ". Workflows must have at least one",
                      " ",
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
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ s.jsx(En, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: k,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: f,
                          onChange: (T) => p(T.target.value)
                        }
                      ),
                      f && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            p(""), (T = k.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(we, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                E.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : E.map((T) => {
                  const C = r ? T.mask_count : T.loader_count + T.load_image_count, D = x === T.name, Q = _[T.name] || [], $ = g[T.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${D ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => L(T),
                        title: T.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: T.name }),
                            !T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: T.reason }),
                            T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${T.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          T.valid && C <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (H) => {
                                H.stopPropagation(), X(T.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(Jr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && C > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (H) => {
                                H.stopPropagation(), L(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                D ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ri,
                                  {
                                    size: 14,
                                    style: {
                                      transform: D ? "rotate(90deg)" : "rotate(0deg)",
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
                    D && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: $ ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: Q.map((H) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => X(T.name, H.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: H.title || H.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                H.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(Jr, { size: 12 })
                          ]
                        },
                        H.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: z,
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
}, Yg = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => {
  const r = m.useRef(null), l = m.useRef(null);
  return m.useEffect(() => {
    if (l.current = document.activeElement, r.current) {
      const o = r.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o.length > 0 ? o[0].focus() : r.current.focus();
    }
    const a = (o) => {
      if (o.key === "Escape") {
        n();
        return;
      }
      if (o.key === "Tab") {
        if (!r.current) return;
        const i = r.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (i.length === 0) return;
        const c = i[0], d = i[i.length - 1];
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), l.current && typeof l.current.focus == "function" && l.current.focus();
    };
  }, [n]), /* @__PURE__ */ s.jsx(
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
}, ao = async (e, t) => {
  await Xp(e, t), oe.getState().removeImages(e);
}, jm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = xe(), o = m.useRef(!0);
  m.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = m.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = m.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = m.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (oe.getState().buckets[l.viewerLightTableSlotId] || []).map((p) => {
    const k = Number.parseInt(p, 10);
    return l.images.find((S) => S.id === k) || l.lineageImages.find((S) => S.id === k) || null;
  }).filter((p) => p !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), h = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    h.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  tt({ onEscape: v });
  const w = m.useRef(!1), x = m.useCallback((u) => {
    u.target === u.currentTarget && (w.current = !0);
  }, []), y = m.useCallback(
    (u) => {
      u.target === u.currentTarget && w.current && v(), w.current = !1;
    },
    [v]
  ), _ = m.useCallback(
    (u) => {
      if (!o.current) return;
      const f = h.current;
      if (f === null || !u.has(f))
        return;
      const p = d.findIndex(
        (S) => S.id === f
      );
      if (p === -1) return;
      let k = !1;
      for (let S = p + 1; S < d.length; S++)
        if (!u.has(d[S].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: d[S].id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let S = p - 1; S >= 0; S--)
          if (!u.has(d[S].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: d[S].id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), k = !0;
            break;
          }
      }
      k || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), j = async () => {
    var u, f;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const p = new Set(e), k = d.filter(
        (S) => p.has(S.id)
      );
      if (_(p), await ao(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((f = (u = l.activeModal).onSuccess) == null || f.call(u)), !n && r && r(k), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (p) {
      a({
        type: "SET_ERROR",
        payload: p instanceof Error ? p.message : String(p)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    var u, f;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const p = new Set(e);
      for (const S of e) {
        const E = await no(S);
        if (!o.current) return;
        for (const b of E)
          p.add(b.id);
      }
      const k = d.filter(
        (S) => p.has(S.id)
      );
      if (_(p), await ao(
        Array.from(p),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((f = (u = l.activeModal).onSuccess) == null || f.call(u)), !n && r && r(k), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(p)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (p) {
      a({
        type: "SET_ERROR",
        payload: p instanceof Error ? p.message : String(p)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx($t, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: v,
                    children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                            gp,
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
                    onClick: v,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: j,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
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
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, bm = ({ message: e }) => {
  const { dispatch: t } = xe(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return tt({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Qu, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
}, Em = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = xe(), [l, a] = m.useState([]), [o, i] = m.useState(!0), [c, d] = m.useState(!1), h = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  tt({ onEscape: h });
  const v = m.useRef(!1), w = (S) => {
    S.target === S.currentTarget && (v.current = !0);
  }, x = (S) => {
    S.target === S.currentTarget && v.current && h(), v.current = !1;
  }, y = t.images.find((S) => S.id === e), _ = m.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], E = await Zp(e, S);
      a(E);
    } catch (S) {
      console.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    _();
  }, [_]);
  const j = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || S === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await xc(e, S), await Ju(e), await r(), h();
      } catch (E) {
        console.error("Failed to link parent:", E);
      }
  }, g = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await xc(e, null), await r(), h();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const E = await Ig(S), { id: b } = await em({
        filename: E.name,
        subfolder: E.subfolder || "",
        type: E.type || "input"
      });
      if (b === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await j(b);
    } catch (E) {
      console.error("Failed to upload/register image:", E);
    } finally {
      i(!1);
    }
  }, f = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const E = S.dataTransfer.files[0];
    E != null && E.type.startsWith("image/") && u(E);
  };
  if (!y) return null;
  const p = l.filter((S) => S.is_source_match), k = l.filter((S) => !S.is_source_match);
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
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
                onClick: h,
                children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                        /* @__PURE__ */ s.jsx(Tp, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: ft(
                                          {
                                            filename: y.parent_filename,
                                            subfolder: y.parent_subfolder || "",
                                            type: y.parent_type || "output"
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
                      onClick: g,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Ip, { size: 16 })
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
                onDrop: f,
                children: [
                  /* @__PURE__ */ s.jsx(Up, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              p.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: p.map((S) => {
                  const E = S.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${E ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !E && j(S.id),
                      style: {
                        cursor: E ? "default" : "pointer",
                        ...E ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: ft(S, 64),
                            alt: S.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          E && /* @__PURE__ */ s.jsx(
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
                k.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((S) => {
                  const E = S.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${E ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !E && j(S.id),
                      style: {
                        cursor: E ? "default" : "pointer",
                        ...E ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: ft(S, 64),
                            alt: S.filename
                          }
                        ),
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
                                E && /* @__PURE__ */ s.jsx(
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
}, Xg = () => {
  const { state: e, dispatch: t } = xe(), n = e.toastMessage;
  return m.useEffect(() => {
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
}, Zg = () => {
  const { state: e, dispatch: t } = xe(), { executeWorkflow: n } = ii();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Sm,
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
              await n(
                r,
                i,
                a,
                l
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      km,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && tl(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && pe.createPortal(
      /* @__PURE__ */ s.jsx(Em, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && pe.createPortal(/* @__PURE__ */ s.jsx(rm, {}), document.body),
    e.activeModal.type === "settings" && pe.createPortal(/* @__PURE__ */ s.jsx(wm, {}), document.body),
    e.activeModal.type === "tag_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        xm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && pe.createPortal(
      /* @__PURE__ */ s.jsx(bm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        jm,
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
    e.activeModal.type === "mask_editor" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        ps,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        ps,
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
    e.activeModal.type === "note_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        _m,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        Og,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        Yg,
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
    e.toastMessage && pe.createPortal(/* @__PURE__ */ s.jsx(Xg, {}), document.body)
  ] });
}, Jg = () => {
  const { state: e, dispatch: t } = xe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Rg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
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
        style: { width: `${d}%` }
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
        children: /* @__PURE__ */ s.jsx(Zu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(xp, { size: 14, className: "meld-success-icon" }),
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
}, ey = () => {
  const { state: e } = xe(), t = oe((r) => r.slots), n = oe((r) => r.addToBucket);
  m.useEffect(() => {
    const r = (l) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (h) => h.shortcutKey.toLowerCase() === l.key.toLowerCase()
      );
      o && (l.preventDefault(), a.forEach((h) => {
        n(o.id, String(h));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, Cm = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (m.useEffect(() => {
  const r = (l) => {
    l.key === "Escape" && n();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [n]), /* @__PURE__ */ s.jsx(
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
)), ty = (e, t, n, r, l) => {
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
        console.warn("move_folder action is not yet implemented"), l == null || l();
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
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, ny = ({ config: e }) => {
  var M;
  const t = oe((L) => L.buckets), n = oe((L) => L.slots), r = oe((L) => L.images), l = n.length, { state: a, dispatch: o } = xe(), [i, c] = m.useState(!1), [d, h] = m.useState(!1), [v, w] = m.useState(!1), [x, y] = m.useState(e.label), [_, j] = m.useState(e.color), g = m.useRef(null), u = m.useRef(null), f = t[e.id] || [], p = f.length;
  m.useEffect(() => {
    const L = (P) => {
      u.current && !u.current.contains(P.target) && c(!1), g.current && !g.current.contains(P.target) && w(!1);
    };
    return (i || v) && document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [i, v]);
  const k = f.map((L) => {
    const P = Number(L);
    let T = a.images.find((C) => C.id === P);
    return T || (T = a.lineageImages.find((C) => C.id === P)), T || (T = r[L]), T;
  }).filter(Boolean), S = (L) => {
    L.preventDefault(), L.stopPropagation(), L.currentTarget.classList.add("drag-over");
  }, E = (L) => {
    L.currentTarget.classList.remove("drag-over");
  }, b = (L) => {
    L.preventDefault(), L.stopPropagation(), L.currentTarget.classList.remove("drag-over");
    const P = L.dataTransfer.getData("text/plain");
    P && P.split(",").forEach((C) => {
      if (C) {
        const D = C.trim(), Q = Number(D);
        let $ = a.images.find((H) => H.id === Q);
        $ || ($ = a.lineageImages.find(
          (H) => H.id === Q
        )), oe.getState().addToBucket(e.id, D, $);
      }
    });
  }, z = (L, P) => {
    L.stopPropagation(), L.dataTransfer.setData("text/plain", String(P)), L.dataTransfer.setData("application/meld-lt-source-slot", e.id), L.dataTransfer.effectAllowed = "move";
  }, O = (L, P) => {
    L.dataTransfer.dropEffect === "none" && oe.getState().removeFromBucket(e.id, String(P));
  }, R = (L) => {
    if (p === 0) return;
    const P = {
      type: L
    }, T = f.map((Q) => Number(Q)), C = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    ty(
      P,
      T,
      k,
      o,
      () => {
        oe.getState().showToast(C[L] ?? "Done");
      }
    );
  }, U = () => {
    oe.getState().clearBucket(e.id), oe.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, X = () => {
    const L = oe.getState();
    L.slots.length <= 1 || (L.removeSlot(e.id), oe.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: S,
      onDragLeave: E,
      onDrop: b,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: p === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : k.map((L) => {
          const P = ft(L);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: L.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (T) => z(T, L.id),
              onDragEnd: (T) => O(T, L.id),
              children: /* @__PURE__ */ s.jsx("img", { src: P, alt: L.filename, draggable: !1 })
            },
            L.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: g, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!v),
                disabled: p === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ s.jsx(_p, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: ur
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: li
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Vp
              },
              {
                type: "download",
                label: "Download",
                icon: Zr
              },
              {
                type: "delete",
                label: "Delete",
                icon: $t,
                danger: !0
              }
            ].map((L) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${L.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in L && L.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (P) => P.stopPropagation(),
                onClick: () => {
                  "disabled" in L && L.disabled || (w(!1), setTimeout(() => R(L.type), 0));
                },
                children: [
                  /* @__PURE__ */ s.jsx(L.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: L.label })
                ]
              },
              L.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: p === 0,
              children: /* @__PURE__ */ s.jsx(jp, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: u, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(Xu, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (L) => y(L.target.value),
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
                          value: _.startsWith("var") ? ((M = _.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : M[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (L) => j(L.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (L) => j(L.target.value),
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
                    const L = oe.getState(), P = x.trim();
                    if (!P) {
                      L.showToast(
                        "Error: Tab label cannot be empty",
                        "error"
                      );
                      return;
                    }
                    if (L.slots.some(
                      (C) => C.id !== e.id && (C.label.toLowerCase() === P.toLowerCase() || C.id.toLowerCase() === P.toLowerCase())
                    )) {
                      L.showToast(
                        `Error: "${P}" is already in use`,
                        "error"
                      );
                      return;
                    }
                    L.updateSlot(e.id, {
                      label: P,
                      color: _
                    }), c(!1), L.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: X,
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
          Cm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: U,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, ry = () => {
  const e = oe((n) => n.toastMessage), t = oe((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, ly = () => {
  var x;
  ey();
  const e = oe((y) => y.isOpen), t = oe((y) => y.slots), n = oe((y) => y.buckets), r = oe((y) => y.setIsOpen), { state: l } = xe(), [a, o] = m.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = m.useRef(null), [c, d] = m.useState(!1);
  if (m.useEffect(() => {
    let y = document.getElementById(
      "meld-light-table-portal"
    );
    if (!y) {
      y = document.createElement("div"), y.id = "meld-light-table-portal";
      const _ = document.querySelector(".comfyui-body-bottom");
      _ ? _.appendChild(y) : document.body.appendChild(y);
    }
    return i.current = y, () => {
    };
  }, []), !e || !i.current) return null;
  const h = () => {
    const y = `slot_${Date.now().toString(36)}`;
    oe.getState().addSlot({
      id: y,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(y);
  }, v = () => {
    t.forEach((y) => {
      oe.getState().clearBucket(y.id);
    }), oe.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((y) => {
        var _;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === y.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(y.id),
            style: { "--tab-color": y.color },
            onDragOver: (j) => {
              j.preventDefault(), o(y.id);
            },
            onDrop: (j) => {
              j.preventDefault();
              const g = j.dataTransfer.getData("text/plain");
              g && g.split(",").forEach((f) => {
                if (f) {
                  const p = f.trim(), k = l.images.find(
                    (S) => String(S.id) === p
                  );
                  oe.getState().addToBucket(y.id, p, k);
                }
              });
            },
            children: [
              y.label,
              "  (",
              ((_ = n[y.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          y.id
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
          children: /* @__PURE__ */ s.jsx(Ls, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => d(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(Fp, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
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
          children: /* @__PURE__ */ s.jsx(we, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((y) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === y.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(ny, { config: y })
      },
      y.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Cm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(ry, {})
  ] });
  return pe.createPortal(w, i.current);
}, Nm = () => {
  const { state: e, refreshFavorites: t } = xe(), [n, r] = m.useState(!1), [l, a] = m.useState(null), [o, i] = m.useState("info"), [c, d] = m.useState(null), [h, v] = m.useState(""), [w, x] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const y = m.useCallback(
    async (u, f, p) => {
      u.stopPropagation();
      const k = `Are you sure you want to delete the favorite "${p}"?`;
      if (window.confirm(k))
        try {
          await _c(f), await t();
        } catch (S) {
          ee.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), _ = m.useCallback(
    (u, f) => {
      u.stopPropagation(), d(f), v(f.name), x(f.query);
    },
    []
  ), j = m.useCallback(async () => {
    if (!(!c || !h.trim() || !w.trim()))
      try {
        r(!0), await ug(
          c.id,
          h,
          w
        ), await t(), d(null);
      } catch (u) {
        ee.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, w, t]), g = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((p) => p.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await _c(f.id), await t();
        } catch (p) {
          ee.error("Failed to delete favorite:", p);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await dg(e.searchQuery, e.searchQuery), await t();
    } catch (f) {
      ee.error("Failed to save favorite:", f);
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
    setEditFavoriteName: v,
    editFavoriteQuery: w,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: y,
    handleEditFavorite: _,
    handleSaveEditFavorite: j,
    handleSaveFavorite: g,
    setToastMessage: (u, f = "info") => {
      a(u), i(f);
    }
  };
}, Mm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = m.useState(!1), [o, i] = m.useState(!1), [c, d] = m.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(Yu, { size: 14 })
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
                  children: /* @__PURE__ */ s.jsx($t, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, sy = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = xe(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: y
  } = Nm(), [_, j] = m.useState({ top: 0, left: 0 }), g = m.useRef(null), u = m.useRef(null);
  if (tt({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), m.useEffect(() => {
    if (e) {
      let E = e.left;
      const b = e.bottom + 5;
      E + 300 > window.innerWidth - 10 && (E = window.innerWidth - 300 - 10), E < 10 && (E = 10), j({ top: b, left: E });
    }
  }, [e]), m.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const f = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, p = (k) => {
    k.stopPropagation();
  };
  return pe.createPortal(
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
          ref: g,
          onClick: f,
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
                          or,
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
                  Mm,
                  {
                    fav: k,
                    onSelect: (S) => {
                      n(S), t();
                    },
                    onEdit: x,
                    onDelete: w
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
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && i(null);
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
                        /* @__PURE__ */ s.jsx(or, { size: 20, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
  );
}, Nl = (e) => {
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
}, ay = () => {
  const { state: e, dispatch: t, updateSetting: n } = xe(), [r, l] = m.useState(e.searchQuery), [a, o] = m.useState([]), [i, c] = m.useState(!1), [d, h] = m.useState([]), [v, w] = m.useState([]), x = e.settings["search.show_all_keywords"], [y, _] = m.useState(-1), [j, g] = m.useState(null), u = m.useRef(null), f = m.useRef(e.searchQuery), p = m.useCallback(async () => {
    if (v.length > 0) return;
    const P = await og();
    w(P);
  }, [v.length]);
  m.useEffect(() => {
    ig().then((P) => {
      g(P);
    }), x && p();
  }, [p, x]);
  const k = m.useMemo(() => {
    if (!j) return null;
    const P = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${P}):(.*)$`, "i");
  }, [j]), S = m.useCallback(() => {
    const P = !x;
    P && p(), n("search.show_all_keywords", P);
  }, [x, p, n]), E = r !== f.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    ag().then((P) => {
      h(P);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    l(e.searchQuery), f.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var P;
    (P = u.current) == null || P.focus();
  }, []);
  const b = m.useCallback(
    (P, T = !0) => {
      f.current !== P && (ee.log("SearchBar: triggering search", { query: P }), t({ type: "SET_SEARCH_QUERY", payload: P }), T && c(!1), f.current = P);
    },
    [t]
  );
  m.useEffect(() => {
    const P = setTimeout(async () => {
      if (r === f.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const T = Nl(r), C = T[T.length - 1];
      if (C) {
        const D = C.match(k);
        if (D) {
          const Q = D[1].toLowerCase();
          let $ = D[2];
          $.startsWith('"') && ($ = $.substring(1)), $.endsWith('"') && ($ = $.substring(0, $.length - 1));
          const H = await sg($, Q);
          o(H), c(H.length > 0), _(-1);
        } else {
          const Q = C.replace(/^([-!])/, "").toLowerCase();
          if (Q && j) {
            const $ = j.all_prefixes.filter((H) => H.startsWith(Q)).map((H) => ({
              type: H,
              value: "",
              count: 0
            }));
            if ($.length > 0) {
              o($), c(!0), _(-1);
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
    k,
    j
  ]);
  const z = m.useCallback(
    (P) => {
      var se;
      const T = Nl(r), D = (T.pop() || "").match(/^([-!])/), Q = D ? D[1] : "", H = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(P.type);
      if (P.value === "") {
        const V = `${[...T, `${Q}${P.type}:`].join(" ").trim()}`;
        l(V);
      } else {
        const V = H ? P.value : `"${P.value}"`, Z = `${[
          ...T,
          `${Q}${P.type}:${V}`
        ].join(" ").trim()} `;
        l(Z), o([]), c(!1);
      }
      (se = u.current) == null || se.focus();
    },
    [r, j]
  ), O = (P) => {
    if (P.key === "Enter")
      i && y >= 0 ? z(a[y]) : b(r);
    else if (P.key === "Tab") {
      if (i && a.length > 0) {
        const T = y >= 0 ? y : 0;
        z(a[T]), P.preventDefault();
      }
    } else P.key === "ArrowDown" ? i && (_((T) => Math.min(T + 1, a.length - 1)), P.preventDefault()) : P.key === "ArrowUp" ? i && (_((T) => Math.max(T - 1, -1)), P.preventDefault()) : P.key === "Escape" && c(!1);
  }, R = m.useCallback(() => {
    l(""), b("");
  }, [b]), U = m.useCallback(
    (P, T, C = !1) => {
      var he;
      const D = Nl(r), Q = D[D.length - 1] || "";
      let $ = !1;
      const H = Q.replace(/^([-!])/, "").toLowerCase();
      H && P.toLowerCase().startsWith(H) && ($ = !0);
      const se = Q.match(/^([-!])/), V = $ && se ? se[1] : "";
      if ($ && D.pop(), C) {
        const J = [...D, `${V}${P}:`].filter(Boolean).join(" ");
        l(J), (he = u.current) == null || he.focus();
        return;
      }
      const de = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(P) ? T : `"${T}"`, Re = `${V}${P}:${de}`, ne = [...D, Re].filter(Boolean).join(" ");
      l(ne), b(ne);
    },
    [r, b, j]
  ), X = m.useCallback(
    (P) => {
      l(P), P || b("");
    },
    [b]
  ), M = m.useCallback(() => {
    if (r === f.current || !k)
      return;
    const P = Nl(r), T = P[P.length - 1];
    if (!T) return;
    const C = !!T.match(k), D = T.replace(/^([-!])/, "").toLowerCase(), Q = D && (j == null ? void 0 : j.all_prefixes.some(($) => $.startsWith(D)));
    (C || Q) && c(!0);
  }, [r, k, j]), L = m.useCallback(() => {
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
    showAllKeywords: x,
    toggleShowAllKeywords: S,
    selectedIndex: y,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: E,
    handleSearch: b,
    handleKeyDown: O,
    applySuggestion: z,
    clearSearch: R,
    applySearchSuggestion: U,
    handleInputChange: X,
    handleInputFocus: M,
    handleInputBlur: L
  };
}, jc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(ur, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(vp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Wp, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(wp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(Ku, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(Hu, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(bp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(yp, { size: 12 });
    default:
      return null;
  }
}, oy = ({
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
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: y,
  onDeleteFavorite: _
}) => {
  const j = (p, k, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(p.type, p.value, S === "all"),
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
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: jc(p.type)
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
        S !== "all" && /* @__PURE__ */ s.jsx(
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
    `${S}-${p.type}:${p.value}:${k}`
  ), g = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
          onMouseDown: (S) => {
            S.preventDefault(), l(p);
          },
          onMouseEnter: () => r(k),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: k === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: k === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: k === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: k === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: jc(p.type)
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
                      color: p.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: p.value === _t ? "bold" : "normal"
                    },
                    children: p.value === _t ? p.type === "tag" ? `Untagged (${_t})` : `No ${p.type} (${_t})` : p.value
                  }
                )
              ]
            }
          )
        },
        `${p.type}:${p.value}`
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
            children: i.map(
              (p, k) => j(p, k, "quick")
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
                  children: Array.from(new Set(c.map((p) => p.type))).map(
                    (p, k) => j({ type: p, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), f = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(or, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((p) => /* @__PURE__ */ s.jsx(
              Mm,
              {
                fav: p,
                onSelect: x,
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
        g(),
        u(),
        f()
      ]
    }
  );
}, iy = () => {
  const { state: e } = xe(), {
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
    inputRef: v,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: y,
    applySuggestion: _,
    clearSearch: j,
    applySearchSuggestion: g,
    handleInputChange: u,
    handleInputFocus: f,
    handleInputBlur: p
  } = ay(), {
    isSaving: k,
    toastMessage: S,
    toastType: E,
    editingFavorite: b,
    setEditingFavorite: z,
    editFavoriteName: O,
    setEditFavoriteName: R,
    editFavoriteQuery: U,
    setEditFavoriteQuery: X,
    handleDeleteFavorite: M,
    handleEditFavorite: L,
    handleSaveEditFavorite: P,
    handleSaveFavorite: T,
    setToastMessage: C
  } = Nm(), D = async () => {
    if (e.favorites.some(
      (Z) => Z.query === e.searchQuery
    )) {
      C("This query is already in your favorites.", "error");
      return;
    }
    await T();
  };
  tt({
    onEscape: () => z(null),
    enabled: !!b
  });
  const Q = m.useRef(null), $ = m.useRef(!1);
  m.useEffect(() => {
    b && Q.current && Q.current.focus();
  }, [b]);
  const H = (V) => {
    V.target === V.currentTarget && ($.current = !0);
  }, se = (V) => {
    V.target === V.currentTarget && $.current && z(null), $.current = !1;
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
                    border: E === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
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
                        onMouseEnter: (V) => {
                          V.currentTarget.style.transform = "translateY(-1px)", w ? (V.currentTarget.style.filter = "brightness(1.15)", V.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : V.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (V) => {
                          V.currentTarget.style.transform = "none", w ? (V.currentTarget.style.filter = "none", V.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : V.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (V) => {
                          V.currentTarget.style.transform = "translateY(1px)", V.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (V) => {
                          V.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            En,
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
                        onChange: (V) => u(V.target.value),
                        onKeyDown: y,
                        onBlur: p,
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
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: D,
                        disabled: k,
                        title: e.favorites.some((V) => V.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          or,
                          {
                            size: 16,
                            color: e.favorites.some((V) => V.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((V) => V.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ s.jsx(we, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                oy,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: h,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: g,
                  favorites: e.favorites,
                  onSelectFavorite: (V) => {
                    n(V), x(V);
                  },
                  onEditFavorite: L,
                  onDeleteFavorite: M
                }
              )
            ]
          }
        ),
        b && pe.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: H,
              onMouseUp: se,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (V) => V.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(or, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => z(null),
                          children: /* @__PURE__ */ s.jsx(we, { size: 20 })
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
                                    ref: Q,
                                    type: "text",
                                    value: O,
                                    onChange: (V) => R(V.target.value),
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
                                    onKeyDown: (V) => {
                                      V.key === "Enter" && P(), V.key === "Escape" && z(null);
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
                                    value: U,
                                    onChange: (V) => X(V.target.value),
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
                                    onKeyDown: (V) => {
                                      V.key === "Enter" && !V.shiftKey && (V.preventDefault(), P()), V.key === "Escape" && z(null);
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
                          onClick: () => z(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: P,
                          disabled: k || !O.trim() || !U.trim(),
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
}, cy = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, a] = m.useState(!0), [o, i] = m.useState(""), [c, d] = m.useState(""), [h, v] = m.useState(!1), [w, x] = m.useState(null), [y, _] = m.useState(""), [j, g] = m.useState(!1), u = m.useRef(null), f = m.useCallback(async () => {
    a(!0);
    try {
      const R = await oi();
      r(R);
    } catch (R) {
      console.error("Failed to fetch tags:", R);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    f();
  }, [f]), m.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const p = async (R) => {
    R.preventDefault();
    const U = c.trim();
    if (!(!U || h)) {
      if (U.toLowerCase() === _t) {
        alert(
          `Tag name '${_t}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((X) => X.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Cg(U), d(""), await f();
      } catch (X) {
        console.error("Failed to add tag:", X);
      } finally {
        v(!1);
      }
    }
  }, k = async (R, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await Ng(R), await f();
      } catch (X) {
        console.error("Failed to delete tag:", X);
      }
  }, S = (R) => {
    x(R.id), _(R.name);
  }, E = () => {
    x(null), _("");
  }, b = async (R) => {
    R.preventDefault();
    const U = y.trim();
    if (!U || w === null || j) return;
    if (U.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    const X = n.find((M) => M.id === w);
    if (X && X.name === U) {
      E();
      return;
    }
    if (n.some(
      (M) => M.id !== w && M.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    g(!0);
    try {
      await Mg(w, U), E(), await f();
    } catch (M) {
      console.error("Failed to rename tag:", M), alert(M instanceof Error ? M.message : "Failed to rename tag");
    } finally {
      g(!1);
    }
  }, z = (R) => {
    t(`tag:${R}`);
  }, O = m.useMemo(() => n.filter(
    (R) => R.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ur, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(we, { size: 16 })
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
            onChange: (R) => d(R.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ s.jsx(Ls, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(En, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
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
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: O.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : O.map((R) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === R.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: b,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (U) => _(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && E()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !y.trim(),
                children: /* @__PURE__ */ s.jsx(ni, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: E,
                disabled: j,
                children: /* @__PURE__ */ s.jsx(we, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: R.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => z(R.name),
              children: /* @__PURE__ */ s.jsx(En, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(R),
              children: /* @__PURE__ */ s.jsx(Yu, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(R.id, R.name),
              children: /* @__PURE__ */ s.jsx($t, { size: 14 })
            }
          )
        ] })
      ] }) }, R.id)) })
    ] })
  ] });
}, ca = 56, Im = (e, t) => {
  const n = m.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((d) => ({
          id: d.id,
          imgSrc: ft(d, ca)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = ft(o, ca) : i = ft(
        {
          filename: r.parent_filename,
          subfolder: r.parent_subfolder || "",
          type: r.parent_type
        },
        ca
      ), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && l > 1) {
        const d = n(o);
        return [c, ...d].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
};
function dy(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const uy = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var In;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: h,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: j,
    handleRunWithMask: g,
    handleEditSource: u
  } = Ds(e, t), { getParentChain: f } = Im(a, c), [p, k] = m.useState(!1), [S, E] = m.useState(!1), [b, z] = m.useState(
    c["viewer.show_details_by_default"]
  ), [O, R] = m.useState(null), U = O ?? c["viewer.show_thumbnails"], [X, M] = m.useState(!1), [L, P] = m.useState(!1), [T, C] = m.useState(null), [D, Q] = m.useState(null), [$, H] = m.useState(
    null
  ), se = m.useRef(null), V = m.useRef(!0);
  m.useEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const Z = m.useRef(l);
  m.useEffect(() => {
    Z.current = l;
  }, [l]);
  const K = m.useMemo(() => {
    const N = e.searchQuery.trim() !== "";
    return o === "lighttable" && e.viewerLightTableSlotId ? (oe.getState().buckets[e.viewerLightTableSlotId] || []).map((B) => {
      const G = Number.parseInt(B, 10);
      return a.find((le) => le.id === G) || i.find((le) => le.id === G) || null;
    }).filter((B) => B !== null) : o === "lineage" ? i : a.filter(
      (A) => A.exists !== !1 && (c["gallery.show_parent_images"] || N || !A.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), de = l === null ? -1 : K.findIndex((N) => N.id === l), ne = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? K : a).find((N) => N.id === l) || (l === ((In = e.viewerFallbackImage) == null ? void 0 : In.id) ? e.viewerFallbackImage : void 0), he = m.useCallback(
    async (N = !1) => {
      if (!ne) return;
      const A = p ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!N && A === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [ne.id],
            hasLineage: !!(ne.parent_id || ne.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const I = e.viewScope === "trash", F = /* @__PURE__ */ new Set([ne.id]);
        if (A === "lineage") {
          const B = await no(ne.id);
          for (const G of B)
            F.add(G.id);
        }
        if (!V.current || Z.current === null) return;
        if (K.length > F.size) {
          let B = !1;
          for (let G = de + 1; G < K.length; G++)
            if (!F.has(K[G].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: {
                  id: K[G].id,
                  mode: o,
                  // Preserve slotId in lighttable mode to stay within the slot
                  ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                }
              }), B = !0;
              break;
            }
          if (!B) {
            for (let G = de - 1; G >= 0; G--)
              if (!F.has(K[G].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: K[G].id,
                    mode: o,
                    // Preserve slotId in lighttable mode to stay within the slot
                    ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
                  }
                }), B = !0;
                break;
              }
          }
          B || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ao(
          Array.from(F),
          I
        ), !I) {
          const B = K.filter(
            (G) => F.has(G.id)
          );
          C(B), Q(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(F) });
      } catch (I) {
        t({
          type: "SET_ERROR",
          payload: I instanceof Error ? I.message : String(I)
        });
      }
    },
    [
      ne,
      p,
      c,
      e.viewScope,
      K,
      de,
      o,
      t,
      e.viewerLightTableSlotId
    ]
  ), J = m.useCallback(() => {
    ne && d(ne);
  }, [ne, d]), Fe = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: p } });
  }, [t, p]), We = m.useCallback(async () => {
    const N = p ? c["fullscreen.loop"] : c["viewer.loop"];
    if (de === 0 && o === "gallery" && e.pagination.hasMore && !L && N) {
      P(!0);
      try {
        const A = e.pagination.limit, I = e.pagination.total, F = Math.max(0, I - A), B = await Vl(
          F,
          A,
          e.searchQuery
        );
        if (!V.current || (t({ type: "APPEND_IMAGES", payload: B }), Z.current === null)) return;
        if (B.images.length > 0) {
          const G = B.images[B.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: G.id, mode: "gallery" }
          });
        }
      } catch (A) {
        console.error("Failed to jump to end:", A);
      } finally {
        P(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: p } });
  }, [
    de,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    L,
    p
  ]), bt = m.useCallback(
    (N) => {
      N && "stopPropagation" in N && N.stopPropagation();
      const A = se.current;
      A && (document.fullscreenElement ? document.exitFullscreen() : A.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), Vt = m.useCallback(async () => {
    ne && (K.length > 1 ? Fe() : t({ type: "CLOSE_VIEWER" }), await v(ne));
  }, [ne, K.length, Fe, v, t]), Mn = m.useCallback(async () => {
    if (!T || T.length === 0) return;
    const N = T.map((I) => I.id), A = N[0];
    try {
      const I = await si(N);
      if (!V.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const F = I.restored_ids || N;
        t({ type: "REMOVE_IMAGES", payload: F });
      }
      if (C(null), !V.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: {
          id: A,
          mode: o,
          // Preserve slotId in lighttable mode to stay within the slot
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [
    T,
    t,
    o,
    e.viewScope,
    e.viewerLightTableSlotId
  ]), mr = m.useCallback(async () => {
    if (T && T.length > 0)
      await Mn();
    else if (D && D.type === "tags") {
      const { imageId: N, addTags: A, removeTags: I } = D;
      try {
        await ro([N], A, I);
        const F = (o === "lineage" ? i : a).find((B) => B.id === N);
        if (F) {
          const B = [...F.tags];
          for (const le of A)
            B.includes(le) || B.push(le);
          const G = B.filter((le) => !I.includes(le));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...F, tags: G }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: N, mode: o }
          });
        }
        Q(null);
      } catch (F) {
        t({
          type: "SET_ERROR",
          payload: F instanceof Error ? F.message : String(F)
        });
      }
    }
  }, [
    T,
    D,
    Mn,
    a,
    i,
    o,
    t
  ]), fr = m.useCallback(
    async (N) => {
      if (!N || !ne) return;
      const A = ne.id, I = [...ne.tags], F = Ug(N, ne), {
        addTags: B,
        removeTags: G,
        isDeleted: le,
        moveNext: ae,
        movePrev: fe,
        sendToLtSlot: ue
      } = F;
      if (ue) {
        const ye = oe.getState(), $e = ye.slots.find(
          (Ne) => Ne.id.toLowerCase() === ue.toLowerCase() || Ne.label.toLowerCase() === ue.toLowerCase()
        );
        if ($e) {
          if (ye.addToBucket($e.id, String(A), ne), ye.showToast(`Sent to ${$e.label}`), !le) {
            if (K.length > 1) {
              let Ne = null;
              for (let gt = de + 1; gt < K.length; gt++)
                if (K[gt].id !== A) {
                  Ne = K[gt].id;
                  break;
                }
              if (Ne === null) {
                for (let gt = de - 1; gt >= 0; gt--)
                  if (K[gt].id !== A) {
                    Ne = K[gt].id;
                    break;
                  }
              }
              t(Ne !== null ? {
                type: "OPEN_VIEWER",
                payload: { id: Ne, mode: o }
              } : { type: "CLOSE_VIEWER" });
            } else
              t({ type: "CLOSE_VIEWER" });
            t({ type: "REMOVE_IMAGES", payload: [A] });
          }
        } else
          ye.showToast(
            `Error: Light Table slot "${ue}" not found`,
            "error"
          ), console.warn(
            `Attempted to send to non-existent LT slot: ${ue}`
          );
      }
      if (B.length > 0 || G.length > 0)
        try {
          await ro(
            [A],
            B,
            G
          );
          const ye = [...I];
          for (const Ne of B)
            ye.includes(Ne) || ye.push(Ne);
          const $e = ye.filter((Ne) => !G.includes(Ne));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ne, id: A, tags: $e }
          }), Q({
            type: "tags",
            imageId: A,
            addTags: [...G],
            removeTags: [...B]
          }), C(null);
        } catch (ye) {
          console.error("Failed to update tags via shortcut:", ye);
        }
      le ? he(!0) : ae ? Fe() : fe && We();
    },
    [
      ne,
      t,
      Fe,
      We,
      he,
      de,
      K,
      o
    ]
  );
  m.useEffect(() => {
    const N = (I) => {
      const F = I.target, B = F.tagName === "INPUT" || F.tagName === "TEXTAREA" || F.isContentEditable;
      if (B && I.key !== "Escape") {
        I.key === "Enter" && (I.ctrlKey || I.metaKey) && I.preventDefault();
        return;
      }
      if (l === null || e.activeModal.type !== "none")
        return;
      const G = I.key === "Delete" || I.key === "Backspace", le = I.key === "ArrowRight" || I.key === "ArrowLeft" || I.key === "ArrowDown" || I.key === "ArrowUp", ae = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(I.key), fe = I.key === "Escape", ue = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z" || I.code === "KeyZ"), ye = /^[0-9]$/.test(I.key) && !I.ctrlKey && !I.metaKey && !I.altKey && I.code !== "KeyZ";
      if (G || le || ae || fe || ue || ye)
        if (!B)
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        else if (fe)
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (I.key === "Escape")
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (I.key === "ArrowRight" || I.key === "ArrowDown")
        Fe();
      else if (I.key === "ArrowLeft" || I.key === "ArrowUp")
        We();
      else if (I.key === "f" || I.key === "F" || I.key === "Enter")
        bt(I);
      else if (I.key === "i" || I.key === "I")
        z(($e) => !$e);
      else if (I.key === "t" || I.key === "T")
        J();
      else if ((I.key === "r" || I.key === "R") && e.viewScope === "trash")
        Vt();
      else if (I.key === "Delete")
        he();
      else if ((I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z"))
        mr();
      else if (ye && !B) {
        const $e = `viewer.shortcut.${I.key}`, Ne = c[$e];
        typeof Ne == "string" && Ne && (H(I.key), setTimeout(() => {
          V.current && H(null);
        }, 500), fr(Ne));
      }
    };
    window.addEventListener("keydown", N, { capture: !0 });
    const A = () => {
      const I = !!document.fullscreenElement;
      k(I), z(I ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", A), () => {
      window.removeEventListener("keydown", N, { capture: !0 }), document.removeEventListener("fullscreenchange", A);
    };
  }, [
    l,
    t,
    bt,
    Fe,
    We,
    c,
    he,
    e.activeModal.type,
    mr,
    J,
    Vt,
    e.viewScope,
    fr
  ]), m.useEffect(() => {
    l !== null && r(l).catch((N) => {
      console.error("Failed to fetch full image details for viewer:", N);
    });
  }, [l, r]), m.useEffect(() => {
    o === "lineage" && l !== null && i.length === 0 && (M(!0), no(l).then((N) => {
      V.current && t({ type: "SET_LINEAGE", payload: N });
    }).catch((N) => {
      console.error("Failed to fetch lineage:", N);
    }).finally(() => {
      V.current && M(!1);
    }));
  }, [o, l, i.length, t]), m.useEffect(() => {
    o !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || de !== -1 && de >= K.length - 15 && n();
  }, [
    l,
    K.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    de
  ]);
  const Ps = m.useMemo(() => {
    if (!U || de === -1) return [];
    const N = c["viewer.thumbnail_window_size"], A = Math.floor(N / 2);
    let I = Math.max(0, de - A);
    const F = Math.min(K.length, I + N);
    return F === K.length && (I = Math.max(0, F - N)), K.slice(I, F).map((B, G) => ({
      img: B,
      absIndex: I + G
    }));
  }, [K, de, c, U]), Rs = m.useMemo(() => ne ? f(ne) : [], [ne, f]);
  return m.useEffect(() => {
    var N, A;
    if (l !== null) {
      if (U) {
        const I = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        I && I.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((N = document.activeElement) == null ? void 0 : N.tagName) === "CANVAS" && document.activeElement.blur(), (A = se.current) == null || A.focus();
    }
  }, [l, U]), m.useEffect(() => {
    if (l === null || K.length === 0) return;
    const N = K.map((le) => le.id), A = N.indexOf(l);
    if (A === -1) return;
    const I = p ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: F, nextId: B } = dy({
      ids: N,
      index: A,
      loopEnabled: I,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), G = setTimeout(() => {
      const le = [F, B].filter(
        (ae) => ae !== null && ae !== l
      );
      le.length !== 0 && Promise.allSettled(le.map((ae) => r(ae))).then(
        (ae) => {
          for (const fe of ae)
            fe.status === "rejected" && ee.warn(
              "Prefetching adjacent image details failed",
              fe.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(G);
  }, [
    l,
    K,
    p,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), m.useEffect(() => {
    if (l === null || K.length === 0) return;
    const N = K.findIndex(
      (B) => B.id === l
    );
    if (N === -1) return;
    const A = (B) => ai(B), I = [
      N + 1,
      N + 2,
      N - 1
    ], F = setTimeout(() => {
      for (const B of I)
        if (B >= 0 && B < K.length) {
          const G = K[B], le = new Image();
          le.src = A(G);
        }
    }, 150);
    return () => clearTimeout(F);
  }, [l, K]), {
    isFullscreen: p,
    showDetails: b,
    setShowDetails: z,
    showThumbnails: U,
    setShowThumbnailsOverride: R,
    isLoadingLineage: X,
    isJumping: L,
    isMenuOpen: S,
    setIsMenuOpen: E,
    activeShortcutKey: $,
    lastDeletedImages: T,
    setLastDeletedImages: C,
    overlayRef: se,
    handleNext: Fe,
    handlePrevious: We,
    handleDelete: he,
    handleUpdateUserNotes: w,
    handleEditNotes: () => ne && h(ne),
    handleTagEdit: J,
    handleRestore: Vt,
    handleUndo: mr,
    handleRestoreWorkflow: async () => {
      if (!ne) return;
      await x(ne) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!ne) return;
      await y(ne) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!ne) return;
      _(ne) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => ne && j(ne),
    handleRunWithMask: (N) => ne && g(ne, N),
    handleEditSource: () => ne && u(ne),
    toggleFullscreen: bt,
    currentIndex: de,
    currentThumbnails: K,
    image: ne,
    windowedThumbnails: Ps,
    parentChain: Rs
  };
}, ci = ({
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
  onEditNotes: v,
  onDelete: w,
  onRestore: x,
  showRestore: y,
  deleteLabel: _,
  showQuickShortcuts: j = !0,
  variant: g = "default",
  iconSize: u = 16,
  buttonClassName: f = ""
}) => {
  const [p, k] = m.useState("left");
  m.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? k("right") : k("left"));
  }, [e, n]);
  const S = (z) => {
    switch (z) {
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
        return v;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, E = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((z) => z && z !== ""), b = [
    "meld-image-card__menu-container",
    g === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: b, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${f}`,
        onClick: (z) => {
          z.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Rp, { size: u })
      }
    ),
    j && E.map((z, O) => {
      const R = vm.find((M) => M.id === z);
      if (!R || !R.icon) return null;
      const U = R.icon, X = S(z);
      return !X || z === "restore_image" && !y ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${f}`,
          onClick: (M) => {
            M.stopPropagation(), X();
          },
          title: R.label,
          children: /* @__PURE__ */ s.jsx(U, { size: u })
        },
        `${z}-${O}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${p === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: im,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: mm,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: fm,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: dm,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: um,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: cm,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: pm,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: gm,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: hm,
            handler: d
          },
          ...y ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: ym,
              handler: x,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: _,
            icon: $t,
            handler: w,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((z) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${z.className || ""}`,
            onMouseDown: (O) => O.stopPropagation(),
            onClick: (O) => {
              O.preventDefault(), O.stopPropagation(), t(!1), setTimeout(() => z.handler(), 0);
            },
            children: [
              /* @__PURE__ */ s.jsx(z.icon, { size: 14, color: z.color }),
              /* @__PURE__ */ s.jsx("span", { children: z.label })
            ]
          },
          z.id
        ))
      }
    )
  ] });
}, my = ({
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
}) }) : null, fy = ({
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
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], h = d === "always" || d === "if_present" && e.user_notes;
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
        h && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
}, Tm = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = ft(e, 64);
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
              children: i ? /* @__PURE__ */ s.jsx(Ku, { size: 12 }) : /* @__PURE__ */ s.jsx(Hu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Tm.displayName = "ThumbnailItem";
const hy = ({
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
    Tm,
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
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(el, { className: "animate-spin", size: 20 }) })
] }) });
function py() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = xe(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: y,
    overlayRef: _,
    handleNext: j,
    handlePrevious: g,
    handleTagEdit: u,
    handleEditNotes: f,
    handleRestore: p,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: E,
    handleRunWithWorkflow: b,
    handleRunWithMask: z,
    handleEditSource: O,
    handleDelete: R,
    toggleFullscreen: U,
    image: X,
    windowedThumbnails: M,
    parentChain: L
  } = uy({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), P = m.useRef(null), T = m.useRef(null), { executeWorkflow: C } = ii(), D = m.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!X) return null;
  const { viewerImageId: Q, viewerMode: $ } = e, H = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(
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
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (se) => se.stopPropagation(),
              children: [
                H && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: p,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(el, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(qu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Cp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(Pp, { size: 20 }) : /* @__PURE__ */ s.jsx(Lp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    ci,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: E,
                      onRunWithWorkflow: b,
                      onRunWithMask: z,
                      onEditSource: O,
                      onEditTags: u,
                      onEditNotes: f,
                      onDelete: R,
                      deleteLabel: D,
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
                      children: /* @__PURE__ */ s.jsx(we, { size: 20 })
                    }
                  )
                ] }),
                H && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: g,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(Gu, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(el, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: P,
                      src: ai(X),
                      alt: X.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                H && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: j,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ri, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  fy,
                  {
                    image: X,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: H,
                    parentChain: L,
                    dispatch: t,
                    onEditNotes: f
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  hy,
                  {
                    windowedThumbnails: M,
                    viewerImageId: Q,
                    currentImage: X,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: $,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  my,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Sm,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (se, V) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: se,
                        targetLoaderNodeId: V
                      }
                    }), !1;
                  const Z = e.activeModal.maskFilename;
                  for (const K of e.activeModal.images)
                    await C(
                      se,
                      K,
                      Z,
                      V
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            km,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (se) => {
                e.activeModal.type === "node_selection" && tl(e.activeModal.image, se);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(bm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            jm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Em, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(rm, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(wm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            xm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            ps,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            ps,
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
                  const se = e.activeModal.currentIndex + 1;
                  se < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: se
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            _m,
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
const gy = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = xe(), [a, o] = m.useState("gallery"), [i, c] = m.useState(""), [d, h] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = m.useRef(null), x = m.useRef(null), y = oe((u) => u.buckets), _ = m.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const f of Object.values(y))
      for (const p of f)
        u.add(Number(p));
    return u;
  }, [y]), j = m.useMemo(() => e.images.filter((u) => _.has(u.id) ? !1 : e.viewScope === "trash" ? u.exists !== !1 || e.settings["gallery.trash.show_missing"] : u.exists !== !1 && (e.settings["gallery.show_parent_images"] || v || !u.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    _,
    v
  ]), g = m.useMemo(
    () => j.slice(0, d),
    [j, d]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && j.length === 0 && (ee.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    j.length,
    r
  ]), m.useEffect(() => {
    const u = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const u = new IntersectionObserver(
      (p) => {
        if (p[0].isIntersecting) {
          if (e.isLoading) {
            ee.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < j.length ? (ee.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                j.length
              ),
              totalAvailableLocally: j.length
            }
          ), h((k) => k + e.pagination.limit)) : e.pagination.hasMore ? (ee.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : ee.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: j.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = w.current;
    return f && u.observe(f), () => {
      f && u.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    j.length,
    e.pagination.limit,
    e.images.length
  ]), m.useEffect(() => {
    const u = e.viewerImageId ?? x.current;
    if (u !== null && j.some((p) => p.id === u)) {
      const p = j.findIndex((k) => k.id === u);
      p >= d && h(
        Math.ceil((p + 1) / e.pagination.limit) * e.pagination.limit
      );
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    j,
    d,
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
    localLimit: d,
    displayedImages: j,
    visibleImages: g,
    isSearchActive: v,
    loadMoreRef: w
  };
}, yy = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = xe(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Ds(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = m.useState(!1), [d, h] = m.useState(null), v = m.useRef(null), [w, x] = m.useState(
    null
  );
  if (m.useEffect(() => {
    const E = document.getElementById("meld-bulk-bar-portal");
    let b = E instanceof HTMLDivElement ? E : null;
    if (!b) {
      b = document.createElement("div"), b.id = "meld-bulk-bar-portal", b.dataset.mountCount = "0";
      const O = document.querySelector(".comfyui-body-bottom");
      O ? O.appendChild(b) : document.body.appendChild(b);
    }
    const z = Number.parseInt(b.dataset.mountCount || "0", 10);
    return b.dataset.mountCount = (z + 1).toString(), x(b), () => {
      if (b) {
        const R = Number.parseInt(
          b.dataset.mountCount || "1",
          10
        ) - 1;
        b.dataset.mountCount = R.toString(), R <= 0 && b.remove();
      }
    };
  }, []), tt({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !w) return null;
  const y = e.viewScope === "trash", _ = () => e.images.filter((E) => e.selectedIds.has(E.id)), j = () => {
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, g = (E) => {
    E(), c(!1);
  }, u = () => {
    const E = _(), b = /* @__PURE__ */ new Set();
    for (const z of E)
      if (z.tags)
        for (const O of z.tags)
          b.add(O);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(b)
      }
    });
  }, f = () => {
    const E = _();
    l(E);
  }, p = () => {
    const E = _();
    E.length > 0 && a(E, "run");
  }, k = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${y ? "meld-bulk-bar--trash" : ""}`,
      children: [
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
            onClick: j,
            children: [
              /* @__PURE__ */ s.jsx(
                Dp,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
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
              /* @__PURE__ */ s.jsx(we, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => c(!1),
              onMouseDown: (E) => E.stopPropagation()
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu",
              style: {
                bottom: window.innerHeight - d.top + 5,
                left: d.left
              },
              onClick: (E) => E.stopPropagation(),
              children: y ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => g(r),
                    children: [
                      /* @__PURE__ */ s.jsx(el, { size: 14 }),
                      " Restore"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => g(n),
                    children: [
                      /* @__PURE__ */ s.jsx($t, { size: 14 }),
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
                    onClick: () => g(u),
                    children: [
                      /* @__PURE__ */ s.jsx(ur, { size: 14 }),
                      " Edit Tags"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => g(f),
                    children: [
                      /* @__PURE__ */ s.jsx(li, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => g(p),
                    children: [
                      /* @__PURE__ */ s.jsx(zp, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => g(k),
                    children: [
                      /* @__PURE__ */ s.jsx(Zr, { size: 14 }),
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
                    onClick: () => g(n),
                    children: [
                      /* @__PURE__ */ s.jsx($t, { size: 14 }),
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
  return pe.createPortal(S, w);
};
function Rn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((y, _) => r[_] !== y)))
      return l;
    r = v;
    let x;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (x = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const y = Math.round((Date.now() - h) * 100) / 100, _ = Math.round((Date.now() - x) * 100) / 100, j = _ / 16, g = (u, f) => {
        for (u = String(u); u.length < f; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${g(_, 5)} /${g(y, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * j, 120)
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
function bc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const vy = (e, t) => Math.abs(e - t) < 1.01, wy = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Ec = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, xy = (e) => e, _y = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, ky = (e, t) => {
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
  if (l(Ec(n)), !r.ResizeObserver)
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
      l(Ec(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Cc = {
  passive: !0
}, Nc = typeof window > "u" ? !0 : "onscrollend" in window, Sy = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Nc ? () => {
  } : wy(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: w } = e.options;
    l = v ? n.scrollLeft * (w && -1 || 1) : n.scrollTop, a(), t(l, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Cc);
  const d = e.options.useScrollendEvent && Nc;
  return d && n.addEventListener("scrollend", c, Cc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, jy = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, by = (e, {
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
class Ey {
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
        getItemKey: xy,
        rangeExtractor: _y,
        onChange: () => {
        },
        measureElement: jy,
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
    }, this.maybeNotify = Rn(
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
    }, this.getMeasurementOptions = Rn(
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
    ), this.getMeasurements = Rn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const w of this.laneAssignments.keys())
            w >= n && this.laneAssignments.delete(w);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((w) => {
          this.itemSizeCache.set(w.key, w.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const h = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let w = 0; w < d; w++) {
          const x = h[w];
          x && (v[x.lane] = w);
        }
        for (let w = d; w < n; w++) {
          const x = a(w), y = this.laneAssignments.get(w);
          let _, j;
          if (y !== void 0 && this.options.lanes > 1) {
            _ = y;
            const p = v[_], k = p !== void 0 ? h[p] : void 0;
            j = k ? k.end + this.options.gap : r + l;
          } else {
            const p = this.options.lanes === 1 ? h[w - 1] : this.getFurthestMeasurement(h, w);
            j = p ? p.end + this.options.gap : r + l, _ = p ? p.lane : w % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(w, _);
          }
          const g = c.get(x), u = typeof g == "number" ? g : this.options.estimateSize(w), f = j + u;
          h[w] = {
            index: w,
            start: j,
            size: u,
            end: f,
            key: x,
            lane: _
          }, v[_] = w;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Rn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Cy({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Rn(
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
    }, this.getVirtualItems = Rn(
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
        return bc(
          r[Lm(
            0,
            r.length - 1,
            (l) => bc(r[l]).start,
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
        const [v, w] = h;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const x = () => {
            if (this.currentScrollToIndex !== n) return;
            const y = this.getScrollOffset(), _ = this.getOffsetForIndex(n, w);
            if (!_) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            vy(_[0], y) || c(w);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(x) : x();
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
const Lm = (e, t, n, r) => {
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
function Cy({
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
  let o = Lm(
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
const Mc = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
function Ny({
  useFlushSync: e = !0,
  ...t
}) {
  const n = m.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? pe.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = m.useState(
    () => new Ey(r)
  );
  return l.setOptions(r), Mc(() => l._didMount(), []), Mc(() => l._willUpdate()), l;
}
function My(e) {
  return Ny({
    observeElementRect: ky,
    observeElementOffset: Sy,
    scrollToFn: by,
    ...e
  });
}
const Dm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = xe(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: y,
    handleEditNotes: _,
    handleUpdateUserNotes: j
  } = Ds(t, n), { getParentChain: g } = Im(t.images, t.settings), [u, f] = m.useState(null), [p, k] = m.useState(!1), [S, E] = m.useState(null), [b, z] = m.useState(!1), O = m.useRef(null), R = async (J, Fe, We = !1) => {
    try {
      await navigator.clipboard.writeText(J), We ? (z(!0), setTimeout(() => z(!1), 2e3)) : (E(Fe), setTimeout(() => E(null), 2e3));
    } catch (bt) {
      console.error("Failed to copy text: ", bt);
    }
  };
  m.useEffect(() => {
    const J = (We) => {
      We.key === "Escape" && (u ? f(null) : k(!1));
    }, Fe = (We) => {
      O.current && !O.current.contains(We.target) && k(!1);
    };
    return window.addEventListener("keydown", J), p && document.addEventListener("mousedown", Fe), () => {
      window.removeEventListener("keydown", J), document.removeEventListener("mousedown", Fe);
    };
  }, [p, u]);
  const U = g(e), M = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, L = t.settings["sidebar.thumbnail_size"] || 100, P = ft(
    e,
    Math.min(400, Math.round(L * 1.5))
  );
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: f,
    isMenuOpen: p,
    setIsMenuOpen: k,
    copiedLabel: S,
    popupCopied: b,
    menuRef: O,
    parentChain: U,
    displayFilename: M,
    imgSrc: P,
    handleCopy: R,
    handleClick: (J) => {
      J.shiftKey ? (J.preventDefault(), J.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : J.ctrlKey || J.metaKey || t.selectedIds.size > 0 ? (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (J) => {
      J.preventDefault(), J.stopPropagation(), J.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (J) => {
      J.shiftKey ? (J.preventDefault(), J.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : J.ctrlKey || J.metaKey || t.selectedIds.size > 0 ? (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (J) => {
      J.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !J.shiftKey && !J.ctrlKey && !J.metaKey && l || (J.shiftKey || J.ctrlKey || J.metaKey || t.selectedIds.size > 0) && J.preventDefault();
    },
    handleKeyDown: (J) => {
      var We, bt, Vt;
      ((We = document.activeElement) == null ? void 0 : We.tagName) === "INPUT" || ((bt = document.activeElement) == null ? void 0 : bt.tagName) === "TEXTAREA" || (Vt = document.activeElement) != null && Vt.isContentEditable || (J.key === "Enter" || J.key === " ") && (J.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      h(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (J = "run") => w(e, J),
    handleUpdateUserNotes: (J) => j(e.id, J),
    fetchFullImageDetails: r
  };
}, Iy = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => pe.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(ni, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Sp,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  we,
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
), Pm = Yt.memo(
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
      popupCopied: d,
      menuRef: h,
      parentChain: v,
      displayFilename: w,
      imgSrc: x,
      handleCopy: y,
      handleClick: _,
      handleSelectToggle: j,
      handleContainerClick: g,
      handleMouseDown: u,
      handleKeyDown: f,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: k,
      handleEditSource: S,
      handleEditTags: E,
      handleEditNotes: b,
      handleSendToWorkflow: z,
      handleRestore: O,
      handleDelete: R,
      handleRunWithWorkflow: U,
      handleRunWithMask: X,
      fetchFullImageDetails: M
    } = Dm(e), [L, P] = m.useState("idle");
    m.useEffect(() => {
      e.user_notes && L === "saving" && P("idle");
    }, [e.user_notes, L]);
    const T = (C) => {
      C.stopPropagation();
      let D = String(e.id);
      r && t.selectedIds.size > 0 && (D = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", D), oe.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: g,
        onMouseDown: u,
        onKeyDown: f,
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
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: j,
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
                src: x,
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
                onClick: (C) => {
                  C.stopPropagation(), _(C);
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
                (C, D) => C.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (Q) => {
                      Q.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: C.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: D === 0 ? "Source" : D === 1 ? "Grand-Source" : `Ancestor (S${D + 1})`,
                    alt: "source thumb"
                  },
                  C.id || D
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const D = await M(e.id);
                  a({
                    title: "Model",
                    text: D.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await M(e.id);
                        y(D.model_name || "-", "Model");
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const D = await M(e.id);
                  a({
                    title: "Positive Prompt",
                    text: D.positive_prompt || D.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await M(e.id);
                        y(
                          D.positive_prompt || D.positive || "-",
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const D = await M(e.id);
                  a({
                    title: "Negative Prompt",
                    text: D.negative_prompt || D.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await M(e.id);
                        y(
                          D.negative_prompt || D.negative || "-",
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
                onClick: (C) => {
                  C.stopPropagation(), E();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, D) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${D}`
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
                L === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (C) => {
                    C.stopPropagation(), b();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            ci,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: h,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: p,
              onSendToWorkflow: z,
              onRunWithWorkflow: U,
              onRunWithMask: (C) => X(C),
              onEditSource: S,
              onEditTags: E,
              onEditNotes: b,
              onRestore: O,
              showRestore: t.viewScope === "trash",
              onDelete: R,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Iy,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (C) => y(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
Pm.displayName = "DetailedImageCard";
const Rm = Yt.memo(
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
      setIsMenuOpen: d,
      menuRef: h,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: _,
      handleRunWithMask: j,
      handleEditSource: g,
      handleEditTags: u,
      handleEditNotes: f,
      handleDelete: p,
      handleRestore: k
    } = Dm(e), S = v.viewScope === "trash", E = S ? "Delete Permanently" : "Move to Trash", b = (z) => {
      z.stopPropagation();
      let O = String(e.id);
      t && v.selectedIds.size > 0 && (O = Array.from(v.selectedIds).join(",")), z.dataTransfer.setData("text/plain", O), oe.getState().setIsOpen(!0);
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
        onDragStart: b,
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
                onClick: (z) => {
                  z.stopPropagation(), o(z);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            ci,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: h,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: y,
              onRunWithWorkflow: _,
              onRunWithMask: j,
              onEditSource: g,
              onEditTags: u,
              onEditNotes: f,
              onDelete: p,
              onRestore: k,
              showRestore: S,
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
Rm.displayName = "SimpleImageCard";
const Ic = ({ image: e }) => {
  const { state: t } = xe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Rm, { image: e }) : /* @__PURE__ */ s.jsx(Pm, { image: e });
}, Ml = 6, Ty = 10, Ly = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  localLimit: a,
  displayedImagesLength: o,
  hasMore: i
}) => {
  const c = m.useRef(null), [d, h] = m.useState(300), v = t["sidebar.thumbnail_size"] || 100, w = t["gallery.view_mode"] === "grid_only";
  m.useEffect(() => {
    const f = c.current;
    if (!f) return;
    const p = () => {
      h(f.clientWidth);
    };
    p();
    const k = new ResizeObserver(p);
    return k.observe(f), () => k.disconnect();
  }, []);
  const x = v + 10, y = w ? Math.max(
    1,
    Math.floor(
      (d - Ty * 2 + Ml) / (x + Ml)
    )
  ) : 1, _ = w ? Math.ceil(e.length / y) : e.length, j = w ? v + 10 + Ml : Math.max(v, 150) + 20, g = My({
    count: _,
    getScrollElement: () => c.current,
    estimateSize: () => j,
    overscan: 5,
    getItemKey: (f) => {
      var p;
      return w ? `row-${f}-${y}` : ((p = e[f]) == null ? void 0 : p.id) ?? f;
    }
  });
  m.useEffect(() => {
    if (r === null) return;
    const f = e.findIndex((k) => k.id === r);
    if (f < 0) return;
    const p = w ? Math.floor(f / y) : f;
    g.scrollToIndex(p, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, w, y, g]);
  const u = g.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: c,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${w ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${g.getTotalSize()}px`,
              position: "relative"
            },
            children: u.map((f) => {
              if (w) {
                const k = f.index * y, S = Math.min(
                  k + y,
                  e.length
                ), E = e.slice(k, S);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${f.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: Ml,
                      alignItems: "flex-start"
                    },
                    children: E.map((b) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": b.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: b.width && b.height ? Math.min(
                                v,
                                v * b.width / b.height
                              ) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Ic, { image: b })
                          }
                        )
                      },
                      b.id
                    ))
                  },
                  f.key
                );
              }
              const p = e[f.index];
              return p ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  "data-image-id": p.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${f.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Ic, { image: p })
                },
                f.key
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
              a >= o && !i && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Dy = () => {
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
    displayedImages: d,
    visibleImages: h,
    isSearchActive: v,
    loadMoreRef: w
  } = gy(), x = oe((b) => b.isOpen), y = oe((b) => b.setIsOpen), _ = oe((b) => b.buckets), j = Object.values(_).some((b) => b && b.length > 0);
  ee.log("GalleryPanel: isLightTableOpen =", x);
  const [g, u] = m.useState(!1), [f, p] = m.useState(null), k = m.useRef(null), S = m.useCallback(() => {
    k.current && (p(
      k.current.getBoundingClientRect()
    ), u(!0));
  }, []), E = m.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), u(!1);
    },
    [t, i, a]
  );
  return ee.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: h.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (b) => {
        b.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (b.preventDefault(), b.dataTransfer.dropEffect = "move");
      },
      onDrop: (b) => {
        const z = b.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (z) {
          b.preventDefault();
          const O = b.dataTransfer.getData("text/plain");
          O && O.split(",").forEach((U) => {
            U && oe.getState().removeFromBucket(z, U.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx($t, { size: 14 }),
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
                  /* @__PURE__ */ s.jsx(we, { size: 14 }),
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
                  color: v ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: v ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(En, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: k,
                type: "button",
                onClick: S,
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  or,
                  {
                    size: 14,
                    fill: g ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
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
                children: /* @__PURE__ */ s.jsx(ur, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const z = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", z);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Mp, { size: 14 }) : /* @__PURE__ */ s.jsx(qu, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  ee.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), y(!x);
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
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    Op,
                    {
                      size: 14,
                      fill: x ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: x ? 1 : 0.8 }
                    }
                  ),
                  !x && j && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(Zr, { size: 14 })
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
                  el,
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
                children: /* @__PURE__ */ s.jsx(Xu, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(iy, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Jg, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            cy,
            {
              onClose: () => a("gallery"),
              onSearch: (b) => {
                t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
              }
            }
          ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ s.jsx(
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
          ) : h.length === 0 ? /* @__PURE__ */ s.jsx(
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
                Ly,
                {
                  visibleImages: h,
                  settings: e.settings,
                  loadMoreRef: w,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  localLimit: c,
                  displayedImagesLength: d.length,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(yy, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(py, {}),
        /* @__PURE__ */ s.jsx(Zg, {}),
        g && /* @__PURE__ */ s.jsx(
          sy,
          {
            anchorRect: f,
            onClose: () => u(!1),
            onSelect: E
          }
        ),
        /* @__PURE__ */ s.jsx(ly, {})
      ]
    }
  );
};
Tc.registerExtension({
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
const Py = document.getElementById(
  "meld-gallery-style"
);
if (!Py) {
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
let Il = null, it = null;
Tc.registerExtension({
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
      const n = await tm();
      ee.init(n.dev_mode), ee.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), ee.init(!1);
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
      }, re.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), re.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), re.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), ee.log("Import completed.");
      }), re.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await em({
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
            ee.log("render called", {
              el: n,
              galleryRoot: Il,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (ee.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (ee.log("Appending galleryContainer to el"), n.appendChild(it)), Il ? ee.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (ee.log("Creating new gallery root"), Il = Uu(it), Il.render(
              Yt.createElement(
                Eg,
                null,
                Yt.createElement(Dy)
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
