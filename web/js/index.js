import { api as te } from "/scripts/api.js";
import { app as rd } from "/scripts/app.js";
var Ox = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Em(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ld = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl = Symbol.for("react.element"), Nm = Symbol.for("react.portal"), Mm = Symbol.for("react.fragment"), Im = Symbol.for("react.strict_mode"), Tm = Symbol.for("react.profiler"), Lm = Symbol.for("react.provider"), Am = Symbol.for("react.context"), Rm = Symbol.for("react.forward_ref"), Dm = Symbol.for("react.suspense"), Pm = Symbol.for("react.memo"), zm = Symbol.for("react.lazy"), bi = Symbol.iterator;
function Om(e) {
  return e === null || typeof e != "object" ? null : (e = bi && e[bi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var sd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ad = Object.assign, od = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = od, this.updater = n || sd;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function id() {
}
id.prototype = yr.prototype;
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = od, this.updater = n || sd;
}
var So = ko.prototype = new id();
So.constructor = ko;
ad(So, yr.prototype);
So.isPureReactComponent = !0;
var Ci = Array.isArray, cd = Object.prototype.hasOwnProperty, jo = { current: null }, dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ud(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) cd.call(t, r) && !dd.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: pl, type: e, key: a, ref: o, props: l, _owner: jo.current };
}
function Fm(e, t) {
  return { $$typeof: pl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function $m(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ei = /\/+/g;
function Gs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $m("" + e.key) : t.toString(36);
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
        case Nm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Gs(o, 0) : r, Ci(l) ? (n = "", e != null && (n = e.replace(Ei, "$&/") + "/"), Vl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (bo(l) && (l = Fm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ei, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ci(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Gs(a, i);
    o += Vl(a, t, n, c, l);
  }
  else if (c = Om(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Gs(a, i++), o += Vl(a, t, n, c, l);
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
function Wm(e) {
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
var Ke = { current: null }, Bl = { transition: null }, Um = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Bl, ReactCurrentOwner: jo };
function fd() {
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
  if (!bo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
le.Component = yr;
le.Fragment = Mm;
le.Profiler = Tm;
le.PureComponent = ko;
le.StrictMode = Im;
le.Suspense = Dm;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um;
le.act = fd;
le.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ad({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = jo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) cd.call(t, c) && !dd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
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
  return e = { $$typeof: Am, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lm, _context: e }, e.Consumer = e;
};
le.createElement = ud;
le.createFactory = function(e) {
  var t = ud.bind(null, e);
  return t.type = e, t;
};
le.createRef = function() {
  return { current: null };
};
le.forwardRef = function(e) {
  return { $$typeof: Rm, render: e };
};
le.isValidElement = bo;
le.lazy = function(e) {
  return { $$typeof: zm, _payload: { _status: -1, _result: e }, _init: Wm };
};
le.memo = function(e, t) {
  return { $$typeof: Pm, type: e, compare: t === void 0 ? null : t };
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
le.unstable_act = fd;
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
ld.exports = le;
var p = ld.exports;
const rn = /* @__PURE__ */ Em(p);
var md = { exports: {} }, at = {}, pd = { exports: {} }, hd = {};
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
  function t(E, R) {
    var U = E.length;
    E.push(R);
    e: for (; 0 < U; ) {
      var I = U - 1 >>> 1, z = E[I];
      if (0 < l(z, R)) E[I] = R, E[U] = z, U = I;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var R = E[0], U = E.pop();
    if (U !== R) {
      E[0] = U;
      e: for (var I = 0, z = E.length, W = z >>> 1; I < W; ) {
        var $ = 2 * (I + 1) - 1, H = E[$], Z = $ + 1, ie = E[Z];
        if (0 > l(H, U)) Z < z && 0 > l(ie, H) ? (E[I] = ie, E[Z] = U, I = Z) : (E[I] = H, E[$] = U, I = $);
        else if (Z < z && 0 > l(ie, U)) E[I] = ie, E[Z] = U, I = Z;
        else break e;
      }
    }
    return R;
  }
  function l(E, R) {
    var U = E.sortIndex - R.sortIndex;
    return U !== 0 ? U : E.id - R.id;
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
  var c = [], d = [], h = 1, v = null, g = 3, k = !1, w = !1, x = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var R = n(d); R !== null; ) {
      if (R.callback === null) r(d);
      else if (R.startTime <= E) r(d), R.sortIndex = R.expirationTime, t(c, R);
      else break;
      R = n(d);
    }
  }
  function y(E) {
    if (x = !1, m(E), !w) if (n(c) !== null) w = !0, Q(j);
    else {
      var R = n(d);
      R !== null && M(y, R.startTime - E);
    }
  }
  function j(E, R) {
    w = !1, x && (x = !1, f(T), T = -1), k = !0;
    var U = g;
    try {
      for (m(R), v = n(c); v !== null && (!(v.expirationTime > R) || E && !N()); ) {
        var I = v.callback;
        if (typeof I == "function") {
          v.callback = null, g = v.priorityLevel;
          var z = I(v.expirationTime <= R);
          R = e.unstable_now(), typeof z == "function" ? v.callback = z : v === n(c) && r(c), m(R);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var W = !0;
      else {
        var $ = n(d);
        $ !== null && M(y, $.startTime - R), W = !1;
      }
      return W;
    } finally {
      v = null, g = U, k = !1;
    }
  }
  var S = !1, b = null, T = -1, L = 5, D = -1;
  function N() {
    return !(e.unstable_now() - D < L);
  }
  function A() {
    if (b !== null) {
      var E = e.unstable_now();
      D = E;
      var R = !0;
      try {
        R = b(!0, E);
      } finally {
        R ? P() : (S = !1, b = null);
      }
    } else S = !1;
  }
  var P;
  if (typeof u == "function") P = function() {
    u(A);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), F = C.port2;
    C.port1.onmessage = A, P = function() {
      F.postMessage(null);
    };
  } else P = function() {
    _(A, 0);
  };
  function Q(E) {
    b = E, S || (S = !0, P());
  }
  function M(E, R) {
    T = _(function() {
      E(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || k || (w = !0, Q(j));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(E) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = g;
    }
    var U = g;
    g = R;
    try {
      return E();
    } finally {
      g = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, R) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var U = g;
    g = E;
    try {
      return R();
    } finally {
      g = U;
    }
  }, e.unstable_scheduleCallback = function(E, R, U) {
    var I = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? I + U : I) : U = I, E) {
      case 1:
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = U + z, E = { id: h++, callback: R, priorityLevel: E, startTime: U, expirationTime: z, sortIndex: -1 }, U > I ? (E.sortIndex = U, t(d, E), n(c) === null && E === n(d) && (x ? (f(T), T = -1) : x = !0, M(y, U - I))) : (E.sortIndex = z, t(c, E), w || k || (w = !0, Q(j))), E;
  }, e.unstable_shouldYield = N, e.unstable_wrapCallback = function(E) {
    var R = g;
    return function() {
      var U = g;
      g = R;
      try {
        return E.apply(this, arguments);
      } finally {
        g = U;
      }
    };
  };
})(hd);
pd.exports = hd;
var Vm = pd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bm = p, st = Vm;
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gd = /* @__PURE__ */ new Set(), Hr = {};
function Pn(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) gd.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ba = Object.prototype.hasOwnProperty, Qm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ni = {}, Mi = {};
function Hm(e) {
  return ba.call(Mi, e) ? !0 : ba.call(Ni, e) ? !1 : Qm.test(e) ? Mi[e] = !0 : (Ni[e] = !0, !1);
}
function Km(e, t, n, r) {
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
function Gm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
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
var Co = /[\-:]([a-z])/g;
function Eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Co,
    Eo
  );
  Fe[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Co, Eo);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Co, Eo);
  Fe[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function No(e, t, n, r) {
  var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gm(t, n, l, r) && (n = null), r || l === null ? Hm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kl = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Mo = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), yd = Symbol.for("react.provider"), vd = Symbol.for("react.context"), Io = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Na = Symbol.for("react.suspense_list"), To = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), xd = Symbol.for("react.offscreen"), Ii = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != "object" ? null : (e = Ii && e[Ii] || e["@@iterator"], typeof e == "function" ? e : null);
}
var be = Object.assign, qs;
function Lr(e) {
  if (qs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    qs = t && t[1] || "";
  }
  return `
` + qs + e;
}
var Ys = !1;
function Xs(e, t) {
  if (!e || Ys) return "";
  Ys = !0;
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
    Ys = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function qm(e) {
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
      return e = Xs(e.type, !1), e;
    case 11:
      return e = Xs(e.type.render, !1), e;
    case 1:
      return e = Xs(e.type, !0), e;
    default:
      return "";
  }
}
function Ma(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Ca:
      return "Profiler";
    case Mo:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Na:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case vd:
      return (e.displayName || "Context") + ".Consumer";
    case yd:
      return (e._context.displayName || "Context") + ".Provider";
    case Io:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case To:
      return t = e.displayName || null, t !== null ? t : Ma(e.type) || "Memo";
    case Jt:
      t = e._payload, e = e._init;
      try {
        return Ma(e(t));
      } catch {
      }
  }
  return null;
}
function Ym(e) {
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
      return Ma(t);
    case 8:
      return t === Mo ? "StrictMode" : "Mode";
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
function Xm(e) {
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
  e._valueTracker || (e._valueTracker = Xm(e));
}
function _d(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = wd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function rs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ia(e, t) {
  var n = t.checked;
  return be({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ti(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = hn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kd(e, t) {
  t = t.checked, t != null && No(e, "checked", t, !1);
}
function Ta(e, t) {
  kd(e, t);
  var n = hn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? La(e, t.type, n) : t.hasOwnProperty("defaultValue") && La(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Li(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function La(e, t, n) {
  (t !== "number" || rs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Aa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ai(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(B(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: hn(n) };
}
function Sd(e, t) {
  var n = hn(t.value), r = hn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ri(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? jd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var jl, bd = function(e) {
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
}, Zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
  Zm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e];
  });
});
function Cd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px";
}
function Ed(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Cd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Jm = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Da(e, t) {
  if (t) {
    if (Jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function Pa(e, t) {
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
var za = null;
function Lo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Oa = null, nr = null, rr = null;
function Di(e) {
  if (e = yl(e)) {
    if (typeof Oa != "function") throw Error(B(280));
    var t = e.stateNode;
    t && (t = Ls(t), Oa(e.stateNode, e.type, t));
  }
}
function Nd(e) {
  nr ? rr ? rr.push(e) : rr = [e] : nr = e;
}
function Md() {
  if (nr) {
    var e = nr, t = rr;
    if (rr = nr = null, Di(e), t) for (e = 0; e < t.length; e++) Di(t[e]);
  }
}
function Id(e, t) {
  return e(t);
}
function Td() {
}
var Zs = !1;
function Ld(e, t, n) {
  if (Zs) return e(t, n);
  Zs = !0;
  try {
    return Id(e, t, n);
  } finally {
    Zs = !1, (nr !== null || rr !== null) && (Td(), Md());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ls(n);
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
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var Fa = !1;
if (Wt) try {
  var jr = {};
  Object.defineProperty(jr, "passive", { get: function() {
    Fa = !0;
  } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
} catch {
  Fa = !1;
}
function ep(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var zr = !1, ls = null, ss = !1, $a = null, tp = { onError: function(e) {
  zr = !0, ls = e;
} };
function np(e, t, n, r, l, a, o, i, c) {
  zr = !1, ls = null, ep.apply(tp, arguments);
}
function rp(e, t, n, r, l, a, o, i, c) {
  if (np.apply(this, arguments), zr) {
    if (zr) {
      var d = ls;
      zr = !1, ls = null;
    } else throw Error(B(198));
    ss || (ss = !0, $a = d);
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
function Ad(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pi(e) {
  if (zn(e) !== e) throw Error(B(188));
}
function lp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zn(e), t === null) throw Error(B(188));
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
        if (a === n) return Pi(l), e;
        if (a === r) return Pi(l), t;
        a = a.sibling;
      }
      throw Error(B(188));
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
        if (!o) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return e = lp(e), e !== null ? Dd(e) : null;
}
function Dd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pd = st.unstable_scheduleCallback, zi = st.unstable_cancelCallback, sp = st.unstable_shouldYield, ap = st.unstable_requestPaint, Ne = st.unstable_now, op = st.unstable_getCurrentPriorityLevel, Ao = st.unstable_ImmediatePriority, zd = st.unstable_UserBlockingPriority, as = st.unstable_NormalPriority, ip = st.unstable_LowPriority, Od = st.unstable_IdlePriority, Ns = null, Lt = null;
function cp(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
    Lt.onCommitFiberRoot(Ns, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var jt = Math.clz32 ? Math.clz32 : fp, dp = Math.log, up = Math.LN2;
function fp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dp(e) / up | 0) | 0;
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
function os(e, t) {
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
function mp(e, t) {
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
function pp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - jt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = mp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Wa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Fd() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function Js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n;
}
function hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - jt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function $d(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wd, Do, Ud, Vd, Bd, Ua = !1, El = [], an = null, on = null, cn = null, qr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), tn = [], gp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Oi(e, t) {
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
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = yl(t), t !== null && Do(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function yp(e, t, n, r, l) {
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
function Qd(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ad(n), t !== null) {
          e.blockedOn = t, Bd(e.priority, function() {
            Ud(n);
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
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      za = r, n.target.dispatchEvent(r), za = null;
    } else return t = yl(n), t !== null && Do(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fi(e, t, n) {
  Ql(e) && n.delete(t);
}
function vp() {
  Ua = !1, an !== null && Ql(an) && (an = null), on !== null && Ql(on) && (on = null), cn !== null && Ql(cn) && (cn = null), qr.forEach(Fi), Yr.forEach(Fi);
}
function Cr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, vp)));
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
  for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Qd(n), n.blockedOn === null && tn.shift();
}
var lr = Ht.ReactCurrentBatchConfig, is = !0;
function xp(e, t, n, r) {
  var l = ce, a = lr.transition;
  lr.transition = null;
  try {
    ce = 1, Po(e, t, n, r);
  } finally {
    ce = l, lr.transition = a;
  }
}
function wp(e, t, n, r) {
  var l = ce, a = lr.transition;
  lr.transition = null;
  try {
    ce = 4, Po(e, t, n, r);
  } finally {
    ce = l, lr.transition = a;
  }
}
function Po(e, t, n, r) {
  if (is) {
    var l = Va(e, t, n, r);
    if (l === null) ca(e, t, r, cs, n), Oi(e, r);
    else if (yp(l, e, t, n, r)) r.stopPropagation();
    else if (Oi(e, r), t & 4 && -1 < gp.indexOf(e)) {
      for (; l !== null; ) {
        var a = yl(l);
        if (a !== null && Wd(a), a = Va(e, t, n, r), a === null && ca(e, t, r, cs, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ca(e, t, r, null, n);
  }
}
var cs = null;
function Va(e, t, n, r) {
  if (cs = null, e = Lo(r), e = Cn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ad(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return cs = e, null;
}
function Hd(e) {
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
      switch (op()) {
        case Ao:
          return 1;
        case zd:
          return 4;
        case as:
        case ip:
          return 16;
        case Od:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null, zo = null, Hl = null;
function Kd() {
  if (Hl) return Hl;
  var e, t = zo, n = t.length, r, l = "value" in ln ? ln.value : ln.textContent, a = l.length;
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
function $i() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Nl : $i, this.isPropagationStopped = $i, this;
  }
  return be(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Oo = ot(vr), gl = be({}, vr, { view: 0, detail: 0 }), _p = ot(gl), ea, ta, Er, Ms = be({}, gl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (ea = e.screenX - Er.screenX, ta = e.screenY - Er.screenY) : ta = ea = 0, Er = e), ea);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ta;
} }), Wi = ot(Ms), kp = be({}, Ms, { dataTransfer: 0 }), Sp = ot(kp), jp = be({}, gl, { relatedTarget: 0 }), na = ot(jp), bp = be({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cp = ot(bp), Ep = be({}, vr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Np = ot(Ep), Mp = be({}, vr, { data: 0 }), Ui = ot(Mp), Ip = {
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
}, Tp = {
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
}, Lp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1;
}
function Fo() {
  return Ap;
}
var Rp = be({}, gl, { key: function(e) {
  if (e.key) {
    var t = Ip[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fo, charCode: function(e) {
  return e.type === "keypress" ? Kl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Dp = ot(Rp), Pp = be({}, Ms, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vi = ot(Pp), zp = be({}, gl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fo }), Op = ot(zp), Fp = be({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $p = ot(Fp), Wp = be({}, Ms, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Up = ot(Wp), Vp = [9, 13, 27, 32], $o = Wt && "CompositionEvent" in window, Or = null;
Wt && "documentMode" in document && (Or = document.documentMode);
var Bp = Wt && "TextEvent" in window && !Or, Gd = Wt && (!$o || Or && 8 < Or && 11 >= Or), Bi = " ", Qi = !1;
function qd(e, t) {
  switch (e) {
    case "keyup":
      return Vp.indexOf(t.keyCode) !== -1;
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
function Yd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function Qp(e, t) {
  switch (e) {
    case "compositionend":
      return Yd(t);
    case "keypress":
      return t.which !== 32 ? null : (Qi = !0, Bi);
    case "textInput":
      return e = t.data, e === Bi && Qi ? null : e;
    default:
      return null;
  }
}
function Hp(e, t) {
  if (Qn) return e === "compositionend" || !$o && qd(e, t) ? (e = Kd(), Hl = zo = ln = null, Qn = !1, e) : null;
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
      return Gd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kp[e.type] : t === "textarea";
}
function Xd(e, t, n, r) {
  Nd(r), t = ds(t, "onChange"), 0 < t.length && (n = new Oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Zr = null;
function Gp(e) {
  iu(e, 0);
}
function Is(e) {
  var t = Gn(e);
  if (_d(t)) return e;
}
function qp(e, t) {
  if (e === "change") return t;
}
var Zd = !1;
if (Wt) {
  var ra;
  if (Wt) {
    var la = "oninput" in document;
    if (!la) {
      var Ki = document.createElement("div");
      Ki.setAttribute("oninput", "return;"), la = typeof Ki.oninput == "function";
    }
    ra = la;
  } else ra = !1;
  Zd = ra && (!document.documentMode || 9 < document.documentMode);
}
function Gi() {
  Fr && (Fr.detachEvent("onpropertychange", Jd), Zr = Fr = null);
}
function Jd(e) {
  if (e.propertyName === "value" && Is(Zr)) {
    var t = [];
    Xd(t, Zr, e, Lo(e)), Ld(Gp, t);
  }
}
function Yp(e, t, n) {
  e === "focusin" ? (Gi(), Fr = t, Zr = n, Fr.attachEvent("onpropertychange", Jd)) : e === "focusout" && Gi();
}
function Xp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Is(Zr);
}
function Zp(e, t) {
  if (e === "click") return Is(t);
}
function Jp(e, t) {
  if (e === "input" || e === "change") return Is(t);
}
function eh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ct = typeof Object.is == "function" ? Object.is : eh;
function Jr(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ba.call(t, l) || !Ct(e[l], t[l])) return !1;
  }
  return !0;
}
function qi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yi(e, t) {
  var n = qi(e);
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
    n = qi(n);
  }
}
function eu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function tu() {
  for (var e = window, t = rs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rs(e.document);
  }
  return t;
}
function Wo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function th(e) {
  var t = tu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && eu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Yi(n, a);
        var o = Yi(
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
var nh = Wt && "documentMode" in document && 11 >= document.documentMode, Hn = null, Ba = null, $r = null, Qa = !1;
function Xi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qa || Hn == null || Hn !== rs(r) || (r = Hn, "selectionStart" in r && Wo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $r && Jr($r, r) || ($r = r, r = ds(Ba, "onSelect"), 0 < r.length && (t = new Oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Hn)));
}
function Ml(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kn = { animationend: Ml("Animation", "AnimationEnd"), animationiteration: Ml("Animation", "AnimationIteration"), animationstart: Ml("Animation", "AnimationStart"), transitionend: Ml("Transition", "TransitionEnd") }, sa = {}, nu = {};
Wt && (nu = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function Ts(e) {
  if (sa[e]) return sa[e];
  if (!Kn[e]) return e;
  var t = Kn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in nu) return sa[e] = t[n];
  return e;
}
var ru = Ts("animationend"), lu = Ts("animationiteration"), su = Ts("animationstart"), au = Ts("transitionend"), ou = /* @__PURE__ */ new Map(), Zi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vn(e, t) {
  ou.set(e, t), Pn(t, [e]);
}
for (var aa = 0; aa < Zi.length; aa++) {
  var oa = Zi[aa], rh = oa.toLowerCase(), lh = oa[0].toUpperCase() + oa.slice(1);
  vn(rh, "on" + lh);
}
vn(ru, "onAnimationEnd");
vn(lu, "onAnimationIteration");
vn(su, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(au, "onTransitionEnd");
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
var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Ji(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rp(r, t, void 0, e), e.currentTarget = null;
}
function iu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ji(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ji(l, i, d), a = c;
      }
    }
  }
  if (ss) throw e = $a, ss = !1, $a = null, e;
}
function ve(e, t) {
  var n = t[Ya];
  n === void 0 && (n = t[Ya] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cu(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
  var r = 0;
  t && (r |= 4), cu(n, e, r, t);
}
var Il = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Il]) {
    e[Il] = !0, gd.forEach(function(n) {
      n !== "selectionchange" && (sh.has(n) || ia(n, !1, e), ia(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Il] || (t[Il] = !0, ia("selectionchange", !1, t));
  }
}
function cu(e, t, n, r) {
  switch (Hd(t)) {
    case 1:
      var l = xp;
      break;
    case 4:
      l = wp;
      break;
    default:
      l = Po;
  }
  n = l.bind(null, t, n, e), l = void 0, !Fa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ca(e, t, n, r, l) {
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
  Ld(function() {
    var d = a, h = Lo(n), v = [];
    e: {
      var g = ou.get(e);
      if (g !== void 0) {
        var k = Oo, w = e;
        switch (e) {
          case "keypress":
            if (Kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Dp;
            break;
          case "focusin":
            w = "focus", k = na;
            break;
          case "focusout":
            w = "blur", k = na;
            break;
          case "beforeblur":
          case "afterblur":
            k = na;
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
            k = Wi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Op;
            break;
          case ru:
          case lu:
          case su:
            k = Cp;
            break;
          case au:
            k = $p;
            break;
          case "scroll":
            k = _p;
            break;
          case "wheel":
            k = Up;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Vi;
        }
        var x = (t & 4) !== 0, _ = !x && e === "scroll", f = x ? g !== null ? g + "Capture" : null : g;
        x = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var y = m.stateNode;
          if (m.tag === 5 && y !== null && (m = y, f !== null && (y = Gr(u, f), y != null && x.push(tl(u, y, m)))), _) break;
          u = u.return;
        }
        0 < x.length && (g = new k(g, w, null, n, h), v.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", g && n !== za && (w = n.relatedTarget || n.fromElement) && (Cn(w) || w[Ut])) break e;
        if ((k || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, k ? (w = n.relatedTarget || n.toElement, k = d, w = w ? Cn(w) : null, w !== null && (_ = zn(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (k = null, w = d), k !== w)) {
          if (x = Wi, y = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = Vi, y = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = k == null ? g : Gn(k), m = w == null ? g : Gn(w), g = new x(y, u + "leave", k, n, h), g.target = _, g.relatedTarget = m, y = null, Cn(h) === d && (x = new x(f, u + "enter", w, n, h), x.target = m, x.relatedTarget = _, y = x), _ = y, k && w) t: {
            for (x = k, f = w, u = 0, m = x; m; m = Wn(m)) u++;
            for (m = 0, y = f; y; y = Wn(y)) m++;
            for (; 0 < u - m; ) x = Wn(x), u--;
            for (; 0 < m - u; ) f = Wn(f), m--;
            for (; u--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Wn(x), f = Wn(f);
            }
            x = null;
          }
          else x = null;
          k !== null && ec(v, g, k, x, !1), w !== null && _ !== null && ec(v, _, w, x, !0);
        }
      }
      e: {
        if (g = d ? Gn(d) : window, k = g.nodeName && g.nodeName.toLowerCase(), k === "select" || k === "input" && g.type === "file") var j = qp;
        else if (Hi(g)) if (Zd) j = Jp;
        else {
          j = Xp;
          var S = Yp;
        }
        else (k = g.nodeName) && k.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = Zp);
        if (j && (j = j(e, d))) {
          Xd(v, j, n, h);
          break e;
        }
        S && S(e, g, d), e === "focusout" && (S = g._wrapperState) && S.controlled && g.type === "number" && La(g, "number", g.value);
      }
      switch (S = d ? Gn(d) : window, e) {
        case "focusin":
          (Hi(S) || S.contentEditable === "true") && (Hn = S, Ba = d, $r = null);
          break;
        case "focusout":
          $r = Ba = Hn = null;
          break;
        case "mousedown":
          Qa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Qa = !1, Xi(v, n, h);
          break;
        case "selectionchange":
          if (nh) break;
        case "keydown":
        case "keyup":
          Xi(v, n, h);
      }
      var b;
      if ($o) e: {
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
      else Qn ? qd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Gd && n.locale !== "ko" && (Qn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Qn && (b = Kd()) : (ln = h, zo = "value" in ln ? ln.value : ln.textContent, Qn = !0)), S = ds(d, T), 0 < S.length && (T = new Ui(T, e, null, n, h), v.push({ event: T, listeners: S }), b ? T.data = b : (b = Yd(n), b !== null && (T.data = b)))), (b = Bp ? Qp(e, n) : Hp(e, n)) && (d = ds(d, "onBeforeInput"), 0 < d.length && (h = new Ui("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = b));
    }
    iu(v, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ds(e, t) {
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
function ec(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Gr(n, a), c != null && o.unshift(tl(n, c, i))) : l || (c = Gr(n, a), c != null && o.push(tl(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ah = /\r\n?/g, oh = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e).replace(ah, `
`).replace(oh, "");
}
function Tl(e, t, n) {
  if (t = tc(t), tc(e) !== t && n) throw Error(B(425));
}
function us() {
}
var Ha = null, Ka = null;
function Ga(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, nc = typeof Promise == "function" ? Promise : void 0, ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof nc < "u" ? function(e) {
  return nc.resolve(null).then(e).catch(dh);
} : qa;
function dh(e) {
  setTimeout(function() {
    throw e;
  });
}
function da(e, t) {
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
function rc(e) {
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
var xr = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + xr, nl = "__reactProps$" + xr, Ut = "__reactContainer$" + xr, Ya = "__reactEvents$" + xr, uh = "__reactListeners$" + xr, fh = "__reactHandles$" + xr;
function Cn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ut] || n[Tt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = rc(e); e !== null; ) {
        if (n = e[Tt]) return n;
        e = rc(e);
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
  throw Error(B(33));
}
function Ls(e) {
  return e[nl] || null;
}
var Xa = [], qn = -1;
function xn(e) {
  return { current: e };
}
function xe(e) {
  0 > qn || (e.current = Xa[qn], Xa[qn] = null, qn--);
}
function ye(e, t) {
  qn++, Xa[qn] = e.current, e.current = t;
}
var gn = {}, Be = xn(gn), Je = xn(!1), Tn = gn;
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
function fs() {
  xe(Je), xe(Be);
}
function lc(e, t, n) {
  if (Be.current !== gn) throw Error(B(168));
  ye(Be, t), ye(Je, n);
}
function du(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(B(108, Ym(e) || "Unknown", l));
  return be({}, n, r);
}
function ms(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gn, Tn = Be.current, ye(Be, e), ye(Je, Je.current), !0;
}
function sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n ? (e = du(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, xe(Je), xe(Be), ye(Be, e)) : xe(Je), ye(Je, n);
}
var zt = null, As = !1, ua = !1;
function uu(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function mh(e) {
  As = !0, uu(e);
}
function wn() {
  if (!ua && zt !== null) {
    ua = !0;
    var e = 0, t = ce;
    try {
      var n = zt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      zt = null, As = !1;
    } catch (l) {
      throw zt !== null && (zt = zt.slice(e + 1)), Pd(Ao, wn), l;
    } finally {
      ce = t, ua = !1;
    }
  }
  return null;
}
var Yn = [], Xn = 0, ps = null, hs = 0, ut = [], ft = 0, Ln = null, Ot = 1, Ft = "";
function jn(e, t) {
  Yn[Xn++] = hs, Yn[Xn++] = ps, ps = e, hs = t;
}
function fu(e, t, n) {
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
function Uo(e) {
  e.return !== null && (jn(e, 1), fu(e, 1, 0));
}
function Vo(e) {
  for (; e === ps; ) ps = Yn[--Xn], Yn[Xn] = null, hs = Yn[--Xn], Yn[Xn] = null;
  for (; e === Ln; ) Ln = ut[--ft], ut[ft] = null, Ft = ut[--ft], ut[ft] = null, Ot = ut[--ft], ut[ft] = null;
}
var lt = null, rt = null, _e = !1, kt = null;
function mu(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ac(e, t) {
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
function Za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (_e) {
    var t = rt;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (Za(e)) throw Error(B(418));
        t = dn(n.nextSibling);
        var r = lt;
        t && ac(e, t) ? mu(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, lt = e);
      }
    } else {
      if (Za(e)) throw Error(B(418));
      e.flags = e.flags & -4097 | 2, _e = !1, lt = e;
    }
  }
}
function oc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function Ll(e) {
  if (e !== lt) return !1;
  if (!_e) return oc(e), _e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Za(e)) throw pu(), Error(B(418));
    for (; t; ) mu(e, t), t = dn(t.nextSibling);
  }
  if (oc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(B(317));
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
function pu() {
  for (var e = rt; e; ) e = dn(e.nextSibling);
}
function dr() {
  rt = lt = null, _e = !1;
}
function Bo(e) {
  kt === null ? kt = [e] : kt.push(e);
}
var ph = Ht.ReactCurrentBatchConfig;
function Nr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function Al(e, t) {
  throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ic(e) {
  var t = e._init;
  return t(e._payload);
}
function hu(e) {
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
  function i(f, u, m, y) {
    return u === null || u.tag !== 6 ? (u = va(m, f.mode, y), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function c(f, u, m, y) {
    var j = m.type;
    return j === Bn ? h(f, u, m.props.children, y, m.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Jt && ic(j) === u.type) ? (y = l(u, m.props), y.ref = Nr(f, u, m), y.return = f, y) : (y = es(m.type, m.key, m.props, null, f.mode, y), y.ref = Nr(f, u, m), y.return = f, y);
  }
  function d(f, u, m, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = xa(m, f.mode, y), u.return = f, u) : (u = l(u, m.children || []), u.return = f, u);
  }
  function h(f, u, m, y, j) {
    return u === null || u.tag !== 7 ? (u = In(m, f.mode, y, j), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function v(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = va("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case kl:
          return m = es(u.type, u.key, u.props, null, f.mode, m), m.ref = Nr(f, null, u), m.return = f, m;
        case Vn:
          return u = xa(u, f.mode, m), u.return = f, u;
        case Jt:
          var y = u._init;
          return v(f, y(u._payload), m);
      }
      if (Ar(u) || Sr(u)) return u = In(u, f.mode, m, null), u.return = f, u;
      Al(f, u);
    }
    return null;
  }
  function g(f, u, m, y) {
    var j = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : i(f, u, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case kl:
          return m.key === j ? c(f, u, m, y) : null;
        case Vn:
          return m.key === j ? d(f, u, m, y) : null;
        case Jt:
          return j = m._init, g(
            f,
            u,
            j(m._payload),
            y
          );
      }
      if (Ar(m) || Sr(m)) return j !== null ? null : h(f, u, m, y, null);
      Al(f, m);
    }
    return null;
  }
  function k(f, u, m, y, j) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(m) || null, i(u, f, "" + y, j);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kl:
          return f = f.get(y.key === null ? m : y.key) || null, c(u, f, y, j);
        case Vn:
          return f = f.get(y.key === null ? m : y.key) || null, d(u, f, y, j);
        case Jt:
          var S = y._init;
          return k(f, u, m, S(y._payload), j);
      }
      if (Ar(y) || Sr(y)) return f = f.get(m) || null, h(u, f, y, j, null);
      Al(u, y);
    }
    return null;
  }
  function w(f, u, m, y) {
    for (var j = null, S = null, b = u, T = u = 0, L = null; b !== null && T < m.length; T++) {
      b.index > T ? (L = b, b = null) : L = b.sibling;
      var D = g(f, b, m[T], y);
      if (D === null) {
        b === null && (b = L);
        break;
      }
      e && b && D.alternate === null && t(f, b), u = a(D, u, T), S === null ? j = D : S.sibling = D, S = D, b = L;
    }
    if (T === m.length) return n(f, b), _e && jn(f, T), j;
    if (b === null) {
      for (; T < m.length; T++) b = v(f, m[T], y), b !== null && (u = a(b, u, T), S === null ? j = b : S.sibling = b, S = b);
      return _e && jn(f, T), j;
    }
    for (b = r(f, b); T < m.length; T++) L = k(b, f, T, m[T], y), L !== null && (e && L.alternate !== null && b.delete(L.key === null ? T : L.key), u = a(L, u, T), S === null ? j = L : S.sibling = L, S = L);
    return e && b.forEach(function(N) {
      return t(f, N);
    }), _e && jn(f, T), j;
  }
  function x(f, u, m, y) {
    var j = Sr(m);
    if (typeof j != "function") throw Error(B(150));
    if (m = j.call(m), m == null) throw Error(B(151));
    for (var S = j = null, b = u, T = u = 0, L = null, D = m.next(); b !== null && !D.done; T++, D = m.next()) {
      b.index > T ? (L = b, b = null) : L = b.sibling;
      var N = g(f, b, D.value, y);
      if (N === null) {
        b === null && (b = L);
        break;
      }
      e && b && N.alternate === null && t(f, b), u = a(N, u, T), S === null ? j = N : S.sibling = N, S = N, b = L;
    }
    if (D.done) return n(
      f,
      b
    ), _e && jn(f, T), j;
    if (b === null) {
      for (; !D.done; T++, D = m.next()) D = v(f, D.value, y), D !== null && (u = a(D, u, T), S === null ? j = D : S.sibling = D, S = D);
      return _e && jn(f, T), j;
    }
    for (b = r(f, b); !D.done; T++, D = m.next()) D = k(b, f, T, D.value, y), D !== null && (e && D.alternate !== null && b.delete(D.key === null ? T : D.key), u = a(D, u, T), S === null ? j = D : S.sibling = D, S = D);
    return e && b.forEach(function(A) {
      return t(f, A);
    }), _e && jn(f, T), j;
  }
  function _(f, u, m, y) {
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
                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Jt && ic(j) === S.type) {
                  n(f, S.sibling), u = l(S, m.props), u.ref = Nr(f, S, m), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === Bn ? (u = In(m.props.children, f.mode, y, m.key), u.return = f, f = u) : (y = es(m.type, m.key, m.props, null, f.mode, y), y.ref = Nr(f, u, m), y.return = f, f = y);
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
            u = xa(m, f.mode, y), u.return = f, f = u;
          }
          return o(f);
        case Jt:
          return S = m._init, _(f, u, S(m._payload), y);
      }
      if (Ar(m)) return w(f, u, m, y);
      if (Sr(m)) return x(f, u, m, y);
      Al(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, m), u.return = f, f = u) : (n(f, u), u = va(m, f.mode, y), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var ur = hu(!0), gu = hu(!1), gs = xn(null), ys = null, Zn = null, Qo = null;
function Ho() {
  Qo = Zn = ys = null;
}
function Ko(e) {
  var t = gs.current;
  xe(gs), e._currentValue = t;
}
function eo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sr(e, t) {
  ys = e, Qo = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
}
function gt(e) {
  var t = e._currentValue;
  if (Qo !== e) if (e = { context: e, memoizedValue: t, next: null }, Zn === null) {
    if (ys === null) throw Error(B(308));
    Zn = e, ys.dependencies = { lanes: 0, firstContext: e };
  } else Zn = Zn.next = e;
  return t;
}
var En = null;
function Go(e) {
  En === null ? En = [e] : En.push(e);
}
function yu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Go(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Vt(e, r);
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vu(e, t) {
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
  return l = r.interleaved, l === null ? (t.next = t, Go(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Vt(e, n);
}
function Gl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
function cc(e, t) {
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
function vs(e, t, n, r) {
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
    var v = l.baseState;
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
          var w = e, x = i;
          switch (g = t, k = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                v = w.call(k, v, g);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, g = typeof w == "function" ? w.call(k, v, g) : w, g == null) break e;
              v = be({}, v, g);
              break e;
            case 2:
              en = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [i] : g.push(i));
      } else k = { eventTime: k, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = k, c = v) : h = h.next = k, o |= g;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Rn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function dc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(B(191, l));
      l.call(r);
    }
  }
}
var vl = {}, At = xn(vl), rl = xn(vl), ll = xn(vl);
function Nn(e) {
  if (e === vl) throw Error(B(174));
  return e;
}
function Yo(e, t) {
  switch (ye(ll, t), ye(rl, e), ye(At, vl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ra(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ra(t, e);
  }
  xe(At), ye(At, t);
}
function fr() {
  xe(At), xe(rl), xe(ll);
}
function xu(e) {
  Nn(ll.current);
  var t = Nn(At.current), n = Ra(t, e.type);
  t !== n && (ye(rl, e), ye(At, n));
}
function Xo(e) {
  rl.current === e && (xe(At), xe(rl));
}
var Se = xn(0);
function xs(e) {
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
var fa = [];
function Zo() {
  for (var e = 0; e < fa.length; e++) fa[e]._workInProgressVersionPrimary = null;
  fa.length = 0;
}
var ql = Ht.ReactCurrentDispatcher, ma = Ht.ReactCurrentBatchConfig, An = 0, je = null, Le = null, Re = null, ws = !1, Wr = !1, sl = 0, hh = 0;
function We() {
  throw Error(B(321));
}
function Jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function ei(e, t, n, r, l, a) {
  if (An = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ql.current = e === null || e.memoizedState === null ? xh : wh, e = n(r, l), Wr) {
    a = 0;
    do {
      if (Wr = !1, sl = 0, 25 <= a) throw Error(B(301));
      a += 1, Re = Le = null, t.updateQueue = null, ql.current = _h, e = n(r, l);
    } while (Wr);
  }
  if (ql.current = _s, t = Le !== null && Le.next !== null, An = 0, Re = Le = je = null, ws = !1, t) throw Error(B(300));
  return e;
}
function ti() {
  var e = sl !== 0;
  return sl = 0, e;
}
function It() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? je.memoizedState = Re = e : Re = Re.next = e, Re;
}
function yt() {
  if (Le === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Re === null ? je.memoizedState : Re.next;
  if (t !== null) Re = t, Le = e;
  else {
    if (e === null) throw Error(B(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Re === null ? je.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function al(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pa(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(B(311));
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
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, je.lanes |= h, Rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, Ct(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, je.lanes |= a, Rn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ha(e) {
  var t = yt(), n = t.queue;
  if (n === null) throw Error(B(311));
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
function _u(e, t) {
  var n = je, r = yt(), l = t(), a = !Ct(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ze = !0), r = r.queue, ni(ju.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, ol(9, Su.bind(null, n, r, l, t), void 0, null), De === null) throw Error(B(349));
    An & 30 || ku(n, t, l);
  }
  return l;
}
function ku(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Su(e, t, n, r) {
  t.value = n, t.getSnapshot = r, bu(t) && Cu(e);
}
function ju(e, t, n) {
  return n(function() {
    bu(t) && Cu(e);
  });
}
function bu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Cu(e) {
  var t = Vt(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function uc(e) {
  var t = It();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: e }, t.queue = e, e = e.dispatch = vh.bind(null, je, e), [t.memoizedState, e];
}
function ol(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Eu() {
  return yt().memoizedState;
}
function Yl(e, t, n, r) {
  var l = It();
  je.flags |= e, l.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r);
}
function Rs(e, t, n, r) {
  var l = yt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && Jo(r, o.deps)) {
      l.memoizedState = ol(t, n, a, r);
      return;
    }
  }
  je.flags |= e, l.memoizedState = ol(1 | t, n, a, r);
}
function fc(e, t) {
  return Yl(8390656, 8, e, t);
}
function ni(e, t) {
  return Rs(2048, 8, e, t);
}
function Nu(e, t) {
  return Rs(4, 2, e, t);
}
function Mu(e, t) {
  return Rs(4, 4, e, t);
}
function Iu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Tu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rs(4, 4, Iu.bind(null, t, e), n);
}
function ri() {
}
function Lu(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Au(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ru(e, t, n) {
  return An & 21 ? (Ct(n, t) || (n = Fd(), je.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
}
function gh(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ma.transition;
  ma.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, ma.transition = r;
  }
}
function Du() {
  return yt().memoizedState;
}
function yh(e, t, n) {
  var r = mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Pu(e)) zu(t, n);
  else if (n = yu(e, t, n, r), n !== null) {
    var l = He();
    bt(n, e, r, l), Ou(n, t, r);
  }
}
function vh(e, t, n) {
  var r = mn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pu(e)) zu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, Ct(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Go(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = yu(e, t, l, r), n !== null && (l = He(), bt(n, e, r, l), Ou(n, t, r));
  }
}
function Pu(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function zu(e, t) {
  Wr = ws = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ou(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n);
  }
}
var _s = { readContext: gt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, xh = { readContext: gt, useCallback: function(e, t) {
  return It().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: gt, useEffect: fc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Yl(
    4194308,
    4,
    Iu.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yh.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = It();
  return e = { current: e }, t.memoizedState = e;
}, useState: uc, useDebugValue: ri, useDeferredValue: function(e) {
  return It().memoizedState = e;
}, useTransition: function() {
  var e = uc(!1), t = e[0];
  return e = gh.bind(null, e[1]), It().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, l = It();
  if (_e) {
    if (n === void 0) throw Error(B(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(B(349));
    An & 30 || ku(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, fc(ju.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, ol(9, Su.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = It(), t = De.identifierPrefix;
  if (_e) {
    var n = Ft, r = Ot;
    n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = sl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wh = {
  readContext: gt,
  useCallback: Lu,
  useContext: gt,
  useEffect: ni,
  useImperativeHandle: Tu,
  useInsertionEffect: Nu,
  useLayoutEffect: Mu,
  useMemo: Au,
  useReducer: pa,
  useRef: Eu,
  useState: function() {
    return pa(al);
  },
  useDebugValue: ri,
  useDeferredValue: function(e) {
    var t = yt();
    return Ru(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = pa(al)[0], t = yt().memoizedState;
    return [e, t];
  },
  useMutableSource: wu,
  useSyncExternalStore: _u,
  useId: Du,
  unstable_isNewReconciler: !1
}, _h = { readContext: gt, useCallback: Lu, useContext: gt, useEffect: ni, useImperativeHandle: Tu, useInsertionEffect: Nu, useLayoutEffect: Mu, useMemo: Au, useReducer: ha, useRef: Eu, useState: function() {
  return ha(al);
}, useDebugValue: ri, useDeferredValue: function(e) {
  var t = yt();
  return Le === null ? t.memoizedState = e : Ru(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = ha(al)[0], t = yt().memoizedState;
  return [e, t];
}, useMutableSource: wu, useSyncExternalStore: _u, useId: Du, unstable_isNewReconciler: !1 };
function wt(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function to(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ds = { isMounted: function(e) {
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
function mc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(l, a) : !0;
}
function Fu(e, t, n) {
  var r = !1, l = gn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = gt(a) : (l = et(t) ? Tn : Be.current, r = t.contextTypes, a = (r = r != null) ? cr(e, l) : gn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function pc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null);
}
function no(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, qo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = gt(a) : (a = et(t) ? Tn : Be.current, l.context = cr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (to(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ds.enqueueReplaceState(l, l.state, null), vs(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = "", r = t;
    do
      n += qm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ga(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ro(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var kh = typeof WeakMap == "function" ? WeakMap : Map;
function $u(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ss || (Ss = !0, po = r), ro(e, t);
  }, n;
}
function Wu(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ro(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ro(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ph.bind(null, e, t, n), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
}
var Sh = Ht.ReactCurrentOwner, Ze = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? gu(t, null, n, r) : ur(t, e.child, n, r);
}
function vc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return sr(t, l), r = ei(e, t, n, r, a, l), n = ti(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (_e && n && Uo(t), t.flags |= 1, Qe(e, t, r, l), t.child);
}
function xc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !ui(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Uu(e, t, a, r, l)) : (e = es(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(o, r) && e.ref === t.ref) return Bt(e, t, l);
  }
  return t.flags |= 1, e = pn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Jr(a, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ze = !0);
    else return t.lanes = e.lanes, Bt(e, t, l);
  }
  return lo(e, t, n, r, l);
}
function Vu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(er, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(er, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ye(er, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ye(er, nt), nt |= r;
  return Qe(e, t, l, n), t.child;
}
function Bu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function lo(e, t, n, r, l) {
  var a = et(n) ? Tn : Be.current;
  return a = cr(t, a), sr(t, l), n = ei(e, t, n, r, a, l), r = ti(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Bt(e, t, l)) : (_e && r && Uo(t), t.flags |= 1, Qe(e, t, n, l), t.child);
}
function wc(e, t, n, r, l) {
  if (et(n)) {
    var a = !0;
    ms(t);
  } else a = !1;
  if (sr(t, l), t.stateNode === null) Xl(e, t), Fu(t, n, r), no(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = gt(d) : (d = et(n) ? Tn : Be.current, d = cr(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && pc(t, o, r, d), en = !1;
    var g = t.memoizedState;
    o.state = g, vs(t, r, o, l), c = t.memoizedState, i !== r || g !== c || Je.current || en ? (typeof h == "function" && (to(t, n, h, r), c = t.memoizedState), (i = en || mc(t, n, i, r, g, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, vu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : wt(t.type, i), o.props = d, v = t.pendingProps, g = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = gt(c) : (c = et(n) ? Tn : Be.current, c = cr(t, c));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || g !== c) && pc(t, o, r, c), en = !1, g = t.memoizedState, o.state = g, vs(t, r, o, l);
    var w = t.memoizedState;
    i !== v || g !== w || Je.current || en ? (typeof k == "function" && (to(t, n, k, r), w = t.memoizedState), (d = en || mc(t, n, d, r, g, w, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return so(e, t, n, r, a, l);
}
function so(e, t, n, r, l, a) {
  Bu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && sc(t, n, !1), Bt(e, t, a);
  r = t.stateNode, Sh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ur(t, e.child, null, a), t.child = ur(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, l && sc(t, n, !0), t.child;
}
function Qu(e) {
  var t = e.stateNode;
  t.pendingContext ? lc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lc(e, t.context, !1), Yo(e, t.containerInfo);
}
function _c(e, t, n, r, l) {
  return dr(), Bo(l), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hu(e, t, n) {
  var r = t.pendingProps, l = Se.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ye(Se, l & 1), e === null)
    return Ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Os(o, r, 0, null), e = In(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = oo(n), t.memoizedState = ao, e) : li(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return jh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = pn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = pn(i, a) : (a = In(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? oo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = ao, r;
  }
  return a = e.child, e = a.sibling, r = pn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function li(e, t) {
  return t = Os({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Rl(e, t, n, r) {
  return r !== null && Bo(r), ur(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ga(Error(B(422))), Rl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Os({ mode: "visible", children: r.children }, l, 0, null), a = In(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && ur(t, e.child, null, o), t.child.memoizedState = oo(o), t.memoizedState = ao, a);
  if (!(t.mode & 1)) return Rl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(B(419)), r = ga(a, r, void 0), Rl(e, t, o, r);
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
    return di(), r = ga(Error(B(421))), Rl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zh.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = dn(l.nextSibling), lt = t, _e = !0, kt = null, e !== null && (ut[ft++] = Ot, ut[ft++] = Ft, ut[ft++] = Ln, Ot = e.id, Ft = e.overflow, Ln = t), t = li(t, r.children), t.flags |= 4096, t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eo(e.return, t, n);
}
function ya(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Ku(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
      else if (e.tag === 19) kc(e, n, t);
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
  if (ye(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && xs(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ya(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && xs(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ya(t, !0, n, null, a);
      break;
    case "together":
      ya(t, !1, null, null, void 0);
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
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = pn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function bh(e, t, n) {
  switch (t.tag) {
    case 3:
      Qu(t), dr();
      break;
    case 5:
      xu(t);
      break;
    case 1:
      et(t.type) && ms(t);
      break;
    case 4:
      Yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ye(gs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ye(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hu(e, t, n) : (ye(Se, Se.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
      ye(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ku(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ye(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Vu(e, t, n);
  }
  return Bt(e, t, n);
}
var Gu, io, qu, Yu;
Gu = function(e, t) {
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
io = function() {
};
qu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Nn(At.current);
    var a = null;
    switch (n) {
      case "input":
        l = Ia(e, l), r = Ia(e, r), a = [];
        break;
      case "select":
        l = be({}, l, { value: void 0 }), r = be({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Aa(e, l), r = Aa(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = us);
    }
    Da(n, r);
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
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Hr.hasOwnProperty(d) ? (c != null && d === "onScroll" && ve("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Yu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!_e) switch (e.tailMode) {
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
function Ch(e, t, n) {
  var r = t.pendingProps;
  switch (Vo(t), t.tag) {
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
      return et(t.type) && fs(), Ue(t), null;
    case 3:
      return r = t.stateNode, fr(), xe(Je), xe(Be), Zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kt !== null && (yo(kt), kt = null))), io(e, t), Ue(t), null;
    case 5:
      Xo(t);
      var l = Nn(ll.current);
      if (n = t.type, e !== null && t.stateNode != null) qu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Ue(t), null;
        }
        if (e = Nn(At.current), Ll(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Tt] = t, r[nl] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dr.length; l++) ve(Dr[l], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              Ti(r, a), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ve("invalid", r);
              break;
            case "textarea":
              Ai(r, a), ve("invalid", r);
          }
          Da(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Tl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Tl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Hr.hasOwnProperty(o) && i != null && o === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              Sl(r), Li(r, a, !0);
              break;
            case "textarea":
              Sl(r), Ri(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = us);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = jd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Tt] = t, e[nl] = r, Gu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Pa(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dr.length; l++) ve(Dr[l], e);
                l = r;
                break;
              case "source":
                ve("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), l = r;
                break;
              case "details":
                ve("toggle", e), l = r;
                break;
              case "input":
                Ti(e, r), l = Ia(e, r), ve("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = be({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Ai(e, r), l = Aa(e, r), ve("invalid", e);
                break;
              default:
                l = r;
            }
            Da(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Ed(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && bd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Kr(e, c) : typeof c == "number" && Kr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Hr.hasOwnProperty(a) ? c != null && a === "onScroll" && ve("scroll", e) : c != null && No(e, a, c, o));
            }
            switch (n) {
              case "input":
                Sl(e), Li(e, r, !1);
                break;
              case "textarea":
                Sl(e), Ri(e);
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
                typeof l.onClick == "function" && (e.onclick = us);
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
      if (e && t.stateNode != null) Yu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
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
      if (xe(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (_e && rt !== null && t.mode & 1 && !(t.flags & 128)) pu(), dr(), t.flags |= 98560, a = !1;
        else if (a = Ll(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(B(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(B(317));
            a[Tt] = t;
          } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), a = !1;
        } else kt !== null && (yo(kt), kt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Ae === 0 && (Ae = 3) : di())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return fr(), io(e, t), e === null && el(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Ko(t.type._context), Ue(t), null;
    case 17:
      return et(t.type) && fs(), Ue(t), null;
    case 19:
      if (xe(Se), a = t.memoizedState, a === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Mr(a, !1);
      else {
        if (Ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = xs(e), o !== null) {
            for (t.flags |= 128, Mr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ye(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ne() > pr && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = xs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !_e) return Ue(t), null;
        } else 2 * Ne() - a.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Mr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ne(), t.sibling = null, n = Se.current, ye(Se, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function Eh(e, t) {
  switch (Vo(t), t.tag) {
    case 1:
      return et(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fr(), xe(Je), xe(Be), Zo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Xo(t), null;
    case 13:
      if (xe(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(B(340));
        dr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(Se), null;
    case 4:
      return fr(), null;
    case 10:
      return Ko(t.type._context), null;
    case 22:
    case 23:
      return ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1, Ve = !1, Nh = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Sc = !1;
function Mh(e, t) {
  if (Ha = is, e = tu(), Wo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, g = null;
        t: for (; ; ) {
          for (var k; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            g = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (g === n && ++d === l && (i = o), g === a && ++h === r && (c = o), (k = v.nextSibling) !== null) break;
            v = g, g = v.parentNode;
          }
          v = k;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ka = { focusedElem: e, selectionRange: n }, is = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, _ = w.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : wt(t.type, x), _);
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
          throw Error(B(163));
      }
    } catch (y) {
      Ee(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return w = Sc, Sc = !1, w;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && co(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ps(e, t) {
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
function uo(e) {
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
function Xu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[nl], delete t[Ya], delete t[uh], delete t[fh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && (e = e.child, e !== null)) for (fo(e, t, n), e = e.sibling; e !== null; ) fo(e, t, n), e = e.sibling;
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), e = e.sibling;
}
var ze = null, _t = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Ju(e, t, n), n = n.sibling;
}
function Ju(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
    Lt.onCommitFiberUnmount(Ns, n);
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
      ze !== null && (_t ? (e = ze, n = n.stateNode, e.nodeType === 8 ? da(e.parentNode, n) : e.nodeType === 1 && da(e, n), Xr(e)) : da(ze, n.stateNode));
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
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && co(n, t, o), l = l.next;
        } while (l !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Ve && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
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
function bc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nh()), t.forEach(function(r) {
      var l = Oh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function xt(e, t) {
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
      if (ze === null) throw Error(B(160));
      Ju(a, o, l), ze = null, _t = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ef(t, e), t = t.sibling;
}
function ef(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (xt(t, e), Nt(e), r & 4) {
        try {
          Ur(3, e, e.return), Ps(3, e);
        } catch (x) {
          Ee(e, e.return, x);
        }
        try {
          Ur(5, e, e.return);
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 1:
      xt(t, e), Nt(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (xt(t, e), Nt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kr(l, "");
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && kd(l, a), Pa(i, o);
          var d = Pa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? Ed(l, v) : h === "dangerouslySetInnerHTML" ? bd(l, v) : h === "children" ? Kr(l, v) : No(l, h, v, d);
          }
          switch (i) {
            case "input":
              Ta(l, a);
              break;
            case "textarea":
              Sd(l, a);
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
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 6:
      if (xt(t, e), Nt(e), r & 4) {
        if (e.stateNode === null) throw Error(B(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 3:
      if (xt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Xr(t.containerInfo);
      } catch (x) {
        Ee(e, e.return, x);
      }
      break;
    case 4:
      xt(t, e), Nt(e);
      break;
    case 13:
      xt(t, e), Nt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (oi = Ne())), r & 4 && bc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (d = Ve) || h, xt(t, e), Ve = d) : xt(t, e), Nt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (G = e, h = e.child; h !== null; ) {
          for (v = G = h; G !== null; ) {
            switch (g = G, k = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ur(4, g, g.return);
                break;
              case 1:
                Jn(g, g.return);
                var w = g.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    Ee(r, n, x);
                  }
                }
                break;
              case 5:
                Jn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Ec(v);
                  continue;
                }
            }
            k !== null ? (k.return = g, G = k) : Ec(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Cd("display", o));
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
      xt(t, e), Nt(e), r & 4 && bc(e);
      break;
    case 21:
      break;
    default:
      xt(
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
          if (Zu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kr(l, ""), r.flags &= -33);
          var a = jc(e);
          mo(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = jc(e);
          fo(e, i, o);
          break;
        default:
          throw Error(B(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ih(e, t, n) {
  G = e, tf(e);
}
function tf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ve;
        i = Dl;
        var d = Ve;
        if (Dl = o, (Ve = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? Nc(l) : c !== null ? (c.return = o, G = c) : Nc(l);
        for (; a !== null; ) G = a, tf(a), a = a.sibling;
        G = l, Dl = i, Ve = d;
      }
      Cc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : Cc(e);
  }
}
function Cc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ve || Ps(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && dc(t, a, r);
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
              dc(t, o, n);
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
                  v !== null && Xr(v);
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
            throw Error(B(163));
        }
        Ve || t.flags & 512 && uo(t);
      } catch (g) {
        Ee(t, t.return, g);
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
function Ec(e) {
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
function Nc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (c) {
            Ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ee(t, l, c);
            }
          }
          var a = t.return;
          try {
            uo(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            uo(t);
          } catch (c) {
            Ee(t, o, c);
          }
      }
    } catch (c) {
      Ee(t, t.return, c);
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
var Th = Math.ceil, ks = Ht.ReactCurrentDispatcher, si = Ht.ReactCurrentOwner, pt = Ht.ReactCurrentBatchConfig, ae = 0, De = null, Ie = null, Oe = 0, nt = 0, er = xn(0), Ae = 0, il = null, Rn = 0, zs = 0, ai = 0, Vr = null, Ye = null, oi = 0, pr = 1 / 0, Pt = null, Ss = !1, po = null, fn = null, Pl = !1, sn = null, js = 0, Br = 0, ho = null, Zl = -1, Jl = 0;
function He() {
  return ae & 6 ? Ne() : Zl !== -1 ? Zl : Zl = Ne();
}
function mn(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : ph.transition !== null ? (Jl === 0 && (Jl = Fd()), Jl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hd(e.type)), e) : 1;
}
function bt(e, t, n, r) {
  if (50 < Br) throw Br = 0, ho = null, Error(B(185));
  hl(e, n, r), (!(ae & 2) || e !== De) && (e === De && (!(ae & 2) && (zs |= n), Ae === 4 && nn(e, Oe)), tt(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (pr = Ne() + 500, As && wn()));
}
function tt(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var r = os(e, e === De ? Oe : 0);
  if (r === 0) n !== null && zi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zi(n), t === 1) e.tag === 0 ? mh(Mc.bind(null, e)) : uu(Mc.bind(null, e)), ch(function() {
      !(ae & 6) && wn();
    }), n = null;
    else {
      switch ($d(r)) {
        case 1:
          n = Ao;
          break;
        case 4:
          n = zd;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = Od;
          break;
        default:
          n = as;
      }
      n = df(n, nf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nf(e, t) {
  if (Zl = -1, Jl = 0, ae & 6) throw Error(B(327));
  var n = e.callbackNode;
  if (ar() && e.callbackNode !== n) return null;
  var r = os(e, e === De ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bs(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = lf();
    (De !== e || Oe !== t) && (Pt = null, pr = Ne() + 500, Mn(e, t));
    do
      try {
        Rh();
        break;
      } catch (i) {
        rf(e, i);
      }
    while (!0);
    Ho(), ks.current = a, ae = l, Ie !== null ? t = 0 : (De = null, Oe = 0, t = Ae);
  }
  if (t !== 0) {
    if (t === 2 && (l = Wa(e), l !== 0 && (r = l, t = go(e, l))), t === 1) throw n = il, Mn(e, 0), nn(e, r), tt(e, Ne()), n;
    if (t === 6) nn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Lh(l) && (t = bs(e, r), t === 2 && (a = Wa(e), a !== 0 && (r = a, t = go(e, a))), t === 1)) throw n = il, Mn(e, 0), nn(e, r), tt(e, Ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          bn(e, Ye, Pt);
          break;
        case 3:
          if (nn(e, r), (r & 130023424) === r && (t = oi + 500 - Ne(), 10 < t)) {
            if (os(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = qa(bn.bind(null, e, Ye, Pt), t);
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
          if (r = l, r = Ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Th(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qa(bn.bind(null, e, Ye, Pt), r);
            break;
          }
          bn(e, Ye, Pt);
          break;
        case 5:
          bn(e, Ye, Pt);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return tt(e, Ne()), e.callbackNode === n ? nf.bind(null, e) : null;
}
function go(e, t) {
  var n = Vr;
  return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = bs(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && yo(t)), e;
}
function yo(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Lh(e) {
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
  for (t &= ~ai, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - jt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Mc(e) {
  if (ae & 6) throw Error(B(327));
  ar();
  var t = os(e, 0);
  if (!(t & 1)) return tt(e, Ne()), null;
  var n = bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && (t = r, n = go(e, r));
  }
  if (n === 1) throw n = il, Mn(e, 0), nn(e, t), tt(e, Ne()), n;
  if (n === 6) throw Error(B(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, Ye, Pt), tt(e, Ne()), null;
}
function ii(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (pr = Ne() + 500, As && wn());
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
    ce = r, pt.transition = n, ae = t, !(ae & 6) && wn();
  }
}
function ci() {
  nt = er.current, xe(er);
}
function Mn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ih(n)), Ie !== null) for (n = Ie.return; n !== null; ) {
    var r = n;
    switch (Vo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fs();
        break;
      case 3:
        fr(), xe(Je), xe(Be), Zo();
        break;
      case 5:
        Xo(r);
        break;
      case 4:
        fr();
        break;
      case 13:
        xe(Se);
        break;
      case 19:
        xe(Se);
        break;
      case 10:
        Ko(r.type._context);
        break;
      case 22:
      case 23:
        ci();
    }
    n = n.return;
  }
  if (De = e, Ie = e = pn(e.current, null), Oe = nt = t, Ae = 0, il = null, ai = zs = Rn = 0, Ye = Vr = null, En !== null) {
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
function rf(e, t) {
  do {
    var n = Ie;
    try {
      if (Ho(), ql.current = _s, ws) {
        for (var r = je.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ws = !1;
      }
      if (An = 0, Re = Le = je = null, Wr = !1, sl = 0, si.current = null, n === null || n.return === null) {
        Ae = 1, il = t, Ie = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = gc(o);
          if (k !== null) {
            k.flags &= -257, yc(k, o, i, a, t), k.mode & 1 && hc(a, d, t), t = k, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              hc(a, d, t), di();
              break e;
            }
            c = Error(B(426));
          }
        } else if (_e && i.mode & 1) {
          var _ = gc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), yc(_, o, i, a, t), Bo(mr(c, i));
            break e;
          }
        }
        a = c = mr(c, i), Ae !== 4 && (Ae = 2), Vr === null ? Vr = [a] : Vr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = $u(a, c, t);
              cc(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (fn === null || !fn.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = Wu(a, i, t);
                cc(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      af(n);
    } catch (j) {
      t = j, Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lf() {
  var e = ks.current;
  return ks.current = _s, e === null ? _s : e;
}
function di() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), De === null || !(Rn & 268435455) && !(zs & 268435455) || nn(De, Oe);
}
function bs(e, t) {
  var n = ae;
  ae |= 2;
  var r = lf();
  (De !== e || Oe !== t) && (Pt = null, Mn(e, t));
  do
    try {
      Ah();
      break;
    } catch (l) {
      rf(e, l);
    }
  while (!0);
  if (Ho(), ae = n, ks.current = r, Ie !== null) throw Error(B(261));
  return De = null, Oe = 0, Ae;
}
function Ah() {
  for (; Ie !== null; ) sf(Ie);
}
function Rh() {
  for (; Ie !== null && !sp(); ) sf(Ie);
}
function sf(e) {
  var t = cf(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? af(e) : Ie = t, si.current = null;
}
function af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Eh(n, t), n !== null) {
        n.flags &= 32767, Ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ae = 6, Ie = null;
        return;
      }
    } else if (n = Ch(n, t, nt), n !== null) {
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
    pt.transition = null, ce = 1, Dh(e, t, n, r);
  } finally {
    pt.transition = l, ce = r;
  }
  return null;
}
function Dh(e, t, n, r) {
  do
    ar();
  while (sn !== null);
  if (ae & 6) throw Error(B(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(B(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (hp(e, a), e === De && (Ie = De = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pl || (Pl = !0, df(as, function() {
    return ar(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = pt.transition, pt.transition = null;
    var o = ce;
    ce = 1;
    var i = ae;
    ae |= 4, si.current = null, Mh(e, n), ef(n, e), th(Ka), is = !!Ha, Ka = Ha = null, e.current = n, Ih(n), ap(), ae = i, ce = o, pt.transition = a;
  } else e.current = n;
  if (Pl && (Pl = !1, sn = e, js = l), a = e.pendingLanes, a === 0 && (fn = null), cp(n.stateNode), tt(e, Ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ss) throw Ss = !1, e = po, po = null, e;
  return js & 1 && e.tag !== 0 && ar(), a = e.pendingLanes, a & 1 ? e === ho ? Br++ : (Br = 0, ho = e) : Br = 0, wn(), null;
}
function ar() {
  if (sn !== null) {
    var e = $d(js), t = pt.transition, n = ce;
    try {
      if (pt.transition = null, ce = 16 > e ? 16 : e, sn === null) var r = !1;
      else {
        if (e = sn, sn = null, js = 0, ae & 6) throw Error(B(331));
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
                  var v = h.child;
                  if (v !== null) v.return = h, G = v;
                  else for (; G !== null; ) {
                    h = G;
                    var g = h.sibling, k = h.return;
                    if (Xu(h), h === d) {
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
              var w = a.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var _ = x.sibling;
                    x.sibling = null, x = _;
                  } while (x !== null);
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
                  Ps(9, i);
              }
            } catch (j) {
              Ee(i, i.return, j);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, G = y;
              break e;
            }
            G = i.return;
          }
        }
        if (ae = l, wn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
          Lt.onPostCommitFiberRoot(Ns, e);
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
function Ic(e, t, n) {
  t = mr(n, t), t = $u(e, t, 1), e = un(e, t, 1), t = He(), e !== null && (hl(e, 1, t), tt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Ic(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ic(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
        e = mr(n, e), e = Wu(t, e, 1), t = un(t, e, 1), e = He(), t !== null && (hl(t, 1, e), tt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ph(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Oe & n) === n && (Ae === 4 || Ae === 3 && (Oe & 130023424) === Oe && 500 > Ne() - oi ? Mn(e, 0) : ai |= n), tt(e, t);
}
function of(e, t) {
  t === 0 && (e.mode & 1 ? (t = Cl, Cl <<= 1, !(Cl & 130023424) && (Cl = 4194304)) : t = 1);
  var n = He();
  e = Vt(e, t), e !== null && (hl(e, t, n), tt(e, n));
}
function zh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function Oh(e, t) {
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
      throw Error(B(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var cf;
cf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, bh(e, t, n);
    Ze = !!(e.flags & 131072);
  }
  else Ze = !1, _e && t.flags & 1048576 && fu(t, hs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Xl(e, t), e = t.pendingProps;
      var l = cr(t, Be.current);
      sr(t, n), l = ei(null, t, r, e, l, n);
      var a = ti();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (a = !0, ms(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, qo(t), l.updater = Ds, t.stateNode = l, l._reactInternals = t, no(t, r, e, n), t = so(null, t, r, !0, a, n)) : (t.tag = 0, _e && a && Uo(t), Qe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Xl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = $h(r), e = wt(r, e), l) {
          case 0:
            t = lo(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = vc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(B(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), lo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), wc(e, t, r, l, n);
    case 3:
      e: {
        if (Qu(t), e === null) throw Error(B(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, vu(e, t), vs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = mr(Error(B(423)), t), t = _c(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = mr(Error(B(424)), t), t = _c(e, t, r, n, l);
          break e;
        } else for (rt = dn(t.stateNode.containerInfo.firstChild), lt = t, _e = !0, kt = null, n = gu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return xu(t), e === null && Ja(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Ga(r, l) ? o = null : a !== null && Ga(r, a) && (t.flags |= 32), Bu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Ja(t), null;
    case 13:
      return Hu(e, t, n);
    case 4:
      return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ur(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), vc(e, t, r, l, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, ye(gs, r._currentValue), r._currentValue = o, a !== null) if (Ct(a.value, o)) {
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
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), eo(
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
            if (o = a.return, o === null) throw Error(B(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), eo(o, n, t), o = a.sibling;
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
      return r = t.type, l = wt(r, t.pendingProps), l = wt(r.type, l), xc(e, t, r, l, n);
    case 15:
      return Uu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), Xl(e, t), t.tag = 1, et(r) ? (e = !0, ms(t)) : e = !1, sr(t, n), Fu(t, r, l), no(t, r, l, n), so(null, t, r, !0, e, n);
    case 19:
      return Ku(e, t, n);
    case 22:
      return Vu(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function df(e, t) {
  return Pd(e, t);
}
function Fh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new Fh(e, t, n, r);
}
function ui(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $h(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Io) return 11;
    if (e === To) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function es(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") ui(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Bn:
      return In(n.children, l, a, t);
    case Mo:
      o = 8, l |= 8;
      break;
    case Ca:
      return e = mt(12, n, t, l | 2), e.elementType = Ca, e.lanes = a, e;
    case Ea:
      return e = mt(13, n, t, l), e.elementType = Ea, e.lanes = a, e;
    case Na:
      return e = mt(19, n, t, l), e.elementType = Na, e.lanes = a, e;
    case xd:
      return Os(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case yd:
          o = 10;
          break e;
        case vd:
          o = 9;
          break e;
        case Io:
          o = 11;
          break e;
        case To:
          o = 14;
          break e;
        case Jt:
          o = 16, r = null;
          break e;
      }
      throw Error(B(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function In(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function Os(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = xd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function va(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function xa(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Js(0), this.expirationTimes = Js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Js(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function fi(e, t, n, r, l, a, o, i, c) {
  return e = new Wh(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qo(a), e;
}
function Uh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function uf(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(B(170));
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
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return du(e, n, t);
  }
  return t;
}
function ff(e, t, n, r, l, a, o, i, c) {
  return e = fi(n, r, !0, e, l, a, o, i, c), e.context = uf(null), n = e.current, r = He(), l = mn(n), a = $t(r, l), a.callback = t ?? null, un(n, a, l), e.current.lanes = l, hl(e, l, r), tt(e, r), e;
}
function Fs(e, t, n, r) {
  var l = t.current, a = He(), o = mn(l);
  return n = uf(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(l, t, o), e !== null && (bt(e, l, o, a), Gl(e, l, o)), o;
}
function Cs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mi(e, t) {
  Tc(e, t), (e = e.alternate) && Tc(e, t);
}
function Vh() {
  return null;
}
var mf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function pi(e) {
  this._internalRoot = e;
}
$s.prototype.render = pi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Fs(e, t, null, null);
};
$s.prototype.unmount = pi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function() {
      Fs(null, e, null, null);
    }), t[Ut] = null;
  }
};
function $s(e) {
  this._internalRoot = e;
}
$s.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
    tn.splice(n, 0, e), n === 0 && Qd(e);
  }
};
function hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ws(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lc() {
}
function Bh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Cs(o);
        a.call(d);
      };
    }
    var o = ff(t, r, e, 0, null, !1, !1, "", Lc);
    return e._reactRootContainer = o, e[Ut] = o.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Cs(c);
      i.call(d);
    };
  }
  var c = fi(e, 0, !1, null, null, !1, !1, "", Lc);
  return e._reactRootContainer = c, e[Ut] = c.current, el(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
    Fs(t, c, n, r);
  }), c;
}
function Us(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = Cs(o);
        i.call(c);
      };
    }
    Fs(t, o, e, l);
  } else o = Bh(n, t, e, l, r);
  return Cs(o);
}
Wd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 && (Ro(t, n | 1), tt(t, Ne()), !(ae & 6) && (pr = Ne() + 500, wn()));
      }
      break;
    case 13:
      Dn(function() {
        var r = Vt(e, 1);
        if (r !== null) {
          var l = He();
          bt(r, e, 1, l);
        }
      }), mi(e, 1);
  }
};
Do = function(e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = He();
      bt(t, e, 134217728, n);
    }
    mi(e, 134217728);
  }
};
Ud = function(e) {
  if (e.tag === 13) {
    var t = mn(e), n = Vt(e, t);
    if (n !== null) {
      var r = He();
      bt(n, e, t, r);
    }
    mi(e, t);
  }
};
Vd = function() {
  return ce;
};
Bd = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Oa = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ta(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ls(r);
            if (!l) throw Error(B(90));
            _d(r), Ta(r, l);
          }
        }
      }
      break;
    case "textarea":
      Sd(e, n);
      break;
    case "select":
      t = n.value, t != null && tr(e, !!n.multiple, t, !1);
  }
};
Id = ii;
Td = Dn;
var Qh = { usingClientEntryPoint: !1, Events: [yl, Gn, Ls, Nd, Md, ii] }, Ir = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hh = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ht.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ir.findFiberByHostInstance || Vh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber) try {
    Ns = zl.inject(Hh), Lt = zl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qh;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hi(t)) throw Error(B(200));
  return Uh(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!hi(e)) throw Error(B(299));
  var n = !1, r = "", l = mf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = fi(e, 1, !1, null, null, n, !1, r, l), e[Ut] = t.current, el(e.nodeType === 8 ? e.parentNode : e), new pi(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
  return e = Rd(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return Dn(e);
};
at.hydrate = function(e, t, n) {
  if (!Ws(t)) throw Error(B(200));
  return Us(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!hi(e)) throw Error(B(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = mf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ff(t, null, e, 1, n ?? null, l, !1, a, o), e[Ut] = t.current, el(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new $s(t);
};
at.render = function(e, t, n) {
  if (!Ws(t)) throw Error(B(200));
  return Us(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Ws(e)) throw Error(B(40));
  return e._reactRootContainer ? (Dn(function() {
    Us(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ut] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = ii;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ws(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Us(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function pf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf);
    } catch (e) {
      console.error(e);
    }
}
pf(), md.exports = at;
var ge = md.exports, hf, Ac = ge;
hf = Ac.createRoot, Ac.hydrateRoot;
var gf = { exports: {} }, Vs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh = p, Gh = Symbol.for("react.element"), qh = Symbol.for("react.fragment"), Yh = Object.prototype.hasOwnProperty, Xh = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zh = { key: !0, ref: !0, __self: !0, __source: !0 };
function yf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Yh.call(t, r) && !Zh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Gh, type: e, key: a, ref: o, props: l, _owner: Xh.current };
}
Vs.Fragment = qh;
Vs.jsx = yf;
Vs.jsxs = yf;
gf.exports = Vs;
var s = gf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jh = {
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
const eg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
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
        ...Jh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${eg(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, g]) => p.createElement(v, g)),
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
const vf = J("AlertCircle", [
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
const tg = J("AlertTriangle", [
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
const ng = J("ArrowDownNarrowWide", [
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
const xf = J("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = J("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = J("ArrowUpDown", [
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
const sg = J("ArrowUpNarrowWide", [
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
const wf = J("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = J("BarChart2", [
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
const ag = J("Box", [
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
const og = J("Calendar", [
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
const ig = J("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dg = J("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = J("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = J("Download", [
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
const ug = J("Eraser", [
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
const yi = J("FileJson", [
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
const fg = J("FileText", [
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
const mg = J("Folder", [
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
const pg = J("Info", [
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
const hg = J("Lasso", [
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
const Sf = J("LayoutGrid", [
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
const gg = J("LayoutList", [
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
const yg = J("Link2Off", [
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
const vg = J("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = J("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = J("Maximize", [
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
const wg = J("Menu", [
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
const _g = J("Minimize", [
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
const kg = J("MoreVertical", [
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
const Sg = J("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = J("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = J("RefreshCw", [
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
const jg = J("ScanLine", [
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
const yn = J("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = J("Settings", [
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
const Cf = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = J("Star", [
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
const bg = J("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = J("Tag", [
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
const Qt = J("Trash2", [
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
const Cg = J("Trash", [
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
const Eg = J("Type", [
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
const Ng = J("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mg = J("Upload", [
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
const Ig = J("Workflow", [
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
const me = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tg = J("ZoomIn", [
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
const Lg = J("ZoomOut", [
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
const Ef = (e) => typeof e == "object" && e !== null, Dc = (e) => {
  if (typeof e == "string")
    return e;
  if (Ef(e) && typeof e.message == "string")
    return e.message;
};
async function Qs(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (Ef(t)) {
      const r = "error" in t ? t.error : void 0, l = Dc(r), a = "message" in t ? Dc(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const Ag = async () => {
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
let Es = !1;
const Rg = (e) => {
  Es = e, Es && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Dg = (...e) => {
  Es && console.log("[Meld]", ...e);
}, Pg = (...e) => {
  Es && console.warn("[Meld]", ...e);
}, zg = (...e) => {
  console.error("[Meld]", ...e);
}, O = {
  log: Dg,
  warn: Pg,
  error: zg,
  init: Rg
};
function ts(e, t) {
  const n = e;
  return {
    images: Array.isArray(n == null ? void 0 : n.images) ? n.images : [],
    total: typeof (n == null ? void 0 : n.total) == "number" ? n.total : (t == null ? void 0 : t.total) ?? 0,
    offset: typeof (n == null ? void 0 : n.offset) == "number" ? n.offset : (t == null ? void 0 : t.offset) ?? 0,
    limit: typeof (n == null ? void 0 : n.limit) == "number" ? n.limit : (t == null ? void 0 : t.limit) ?? 0
  };
}
const ns = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return re(a);
}, Nf = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return re(t);
}, Og = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await re(n);
}, vo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return re(t);
}, Mf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return re(t);
}, Pc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await re(n);
}, Fg = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(`/meld/suggest-parents?id=${e}${n}`);
  try {
    return await re(r);
  } catch {
    return [];
  }
}, vi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await re(t);
  } catch {
    return [];
  }
}, $g = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await re(n);
}, Wg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return re(n);
}, If = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await re(r);
}, Ug = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return re(t);
}, Vg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return re(t);
}, wa = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n === "." || n === ".." || n.startsWith("-") || (n = n.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_"), n = n.replace(/[^a-zA-Z0-9\-_.]/g, "_"), n = n.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, ""), !n || n === "." || n === ".." || n.startsWith("-") || n.length > 255) ? t : n;
}, Tf = async (e, t, n, r, l) => {
  const a = await te.fetchApi("/meld/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok) {
    let v = `Failed to fetch image ${e}: ${a.statusText || a.status}`;
    try {
      await re(a.clone());
    } catch (g) {
      const k = g instanceof Error ? g.message : String(g);
      k && (v = `Failed to fetch image ${e}: ${k}`);
    }
    throw new Error(v);
  }
  const o = (a.headers.get("Content-Type") || "").toLowerCase();
  if (o.includes("application/json") || o.includes("+json")) {
    let v = `Image ${e}: server returned JSON instead of binary data`;
    try {
      await re(a.clone()), v = `Image ${e}: server returned a JSON response on the binary download path`;
    } catch (g) {
      const k = g instanceof Error ? g.message : String(g);
      k && (v = k);
    }
    throw new Error(v);
  }
  const i = `image_${e}.png`, c = a.headers.get("Content-Disposition");
  let d = i;
  if (c) {
    const v = c.match(/filename\*=([^;\s]+)/i);
    if (v != null && v[1]) {
      let g = v[1];
      const k = g.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
      k != null && k[2] && (g = k[2]);
      try {
        d = wa(decodeURIComponent(g), i);
      } catch {
        const w = c.match(/filename="?([^"]+)"?/);
        w != null && w[1] && (d = wa(w[1], i));
      }
    } else if (c.includes("filename=")) {
      const g = c.match(/filename="?([^"]+)"?/);
      g != null && g[1] && (d = wa(g[1], i));
    }
  }
  return { blob: await a.blob(), filename: d };
}, zc = 500, Oc = 2 * 1024 * 1024 * 1024, Bg = async (e, t, n, r, l, a) => {
  const o = (await import("./jszip.min.js").then((x) => x.j)).default, i = new o(), c = e.length;
  if (c > zc)
    throw new Error(
      `ZIP entry limit reached (${zc} files). Please reduce the number of images.`
    );
  const d = /* @__PURE__ */ new Set();
  let h = 0, v = 0;
  for (const x of e) {
    a == null || a(h, c);
    const { blob: _, filename: f } = await Tf(
      x,
      t,
      n,
      r,
      l
    );
    if (v += _.size, v > Oc)
      throw new Error(
        `ZIP size limit reached (${Oc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let u = f;
    if (d.has(u)) {
      const m = u.lastIndexOf("."), y = m > 0 ? u.slice(0, m) : u, j = m > 0 ? u.slice(m) : "";
      let S = 2;
      for (; d.has(u); )
        u = `${y}_${S}${j}`, S++;
    }
    d.add(u), i.file(u, _), h += 1;
  }
  a == null || a(c, c);
  const g = await i.generateAsync({ type: "blob" }), k = window.URL.createObjectURL(g), w = document.createElement("a");
  w.href = k, w.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(w), w.click(), window.URL.revokeObjectURL(k), document.body.removeChild(w);
}, Qg = async (e, t, n, r, l) => {
  const { blob: a, filename: o } = await Tf(
    e,
    t,
    n,
    r,
    l
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Hg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return re(r);
}, Kg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return re(e);
}, Gg = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return re(e);
}, qg = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return re(e);
}, Yg = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return re(e);
}, Xg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await re(n);
}, Fc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await re(t);
}, Zg = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await re(r);
}, Jg = {
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
}, Lf = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await re(t);
  } catch (t) {
    return O.error("Failed to fetch settings, using defaults", t), Jg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ey = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await re(n);
}, ty = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return re(e);
};
function Tr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const ny = (e, t) => {
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
function Af(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const ry = (e, t) => {
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
      const n = t.payload, r = Af(n);
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
}, ly = (e, t) => {
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
}, sy = (e, t) => {
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
function $c(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const ay = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = Af(i), g = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((k) => k.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: v,
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = $c(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const v = (h + 1) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = $c(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || h === 0 && !c)
        return e;
      const v = (h - 1 + d.length) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    default:
      return e;
  }
}, oy = [
  ay,
  ny,
  ly,
  ry,
  sy
];
function iy(e, t) {
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
  } : oy.reduce((n, r) => r(n, t), e);
}
const cy = {
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
function dy(e, t) {
  return iy(e, t);
}
const Rf = p.createContext(void 0), uy = ({ children: e }) => {
  const [t, n] = p.useReducer(dy, cy), r = p.useRef(t.images.length), l = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (w, x, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = w;
      for (; m < Math.min(x, f) && _ === l.current; )
        try {
          const y = Math.min(u, f - m);
          O.log("Background fetch: starting chunk", {
            offset: m,
            limit: y
          });
          const j = await ns(
            m,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current) break;
          const { images: S, total: b } = ts(j, {
            total: x
          });
          if (n({
            type: "APPEND_IMAGES",
            payload: {
              images: S,
              total: b,
              offset: m,
              limit: y
            }
          }), m += S.length, S.length === 0 || m >= b) break;
          await new Promise((T) => setTimeout(T, 300));
        } catch (y) {
          O.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), x = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      O.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await ns(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = ts(u, {
        total: t.pagination.total,
        offset: 0,
        limit: f
      }), y = performance.now() - w;
      O.log("refreshImages: initial fetch complete", {
        count: m.images.length,
        total: m.total,
        offset: m.offset,
        durationMs: y.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: m }), m.total > f && o(f, m.total, x);
    } catch (_) {
      O.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    t.pagination.total,
    o
  ]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const x = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      O.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: _
      });
      const u = await ns(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = ts(u, {
        total: t.pagination.total,
        offset: x,
        limit: f
      }), y = performance.now() - w;
      O.log("loadMoreImages: fetch complete", {
        count: m.images.length,
        total: m.total,
        offset: m.offset,
        durationMs: y.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: m });
    } catch (x) {
      O.error("loadMoreImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.pagination.total,
    t.searchQuery,
    t.viewScope
  ]), d = p.useCallback(async () => {
    try {
      const w = await Yg();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      O.error("Failed to load favorites", w);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), _ = t.images.filter((f) => t.selectedIds.has(f.id)).some((f) => f.parent_id || f.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await vo(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = p.useCallback(
    async (w, x) => {
      try {
        await ey(w, x), n({ type: "SET_SETTINGS", payload: { [w]: x } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), k = p.useCallback(
    async (w) => {
      const x = t.images.find((m) => m.id === w);
      if (x && !x.is_minimal)
        return x;
      const _ = t.lineageImages.find((m) => m.id === w);
      if (_ && !_.is_minimal)
        return _;
      const f = a.current.get(w);
      if (f)
        return f;
      const u = (async () => {
        try {
          O.log("fetchFullImageDetails: fetching full data", { id: w });
          const m = await Nf(w);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(w);
        }
      })();
      return a.current.set(w, u), u;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const x = await Lf();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        O.error("Failed to load settings", x);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const w = () => {
      i();
    }, x = (f) => {
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
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Rf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: g,
        fetchFullImageDetails: k
      },
      children: e
    }
  );
}, pe = () => {
  const e = p.useContext(Rf);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, ht = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, xi = (e) => {
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
}, fy = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return re(t);
}, my = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await re(t);
}, py = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await re(n);
}, hy = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, gy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await Qs(n);
  if (!hy(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, yy = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await re(l);
  } catch (a) {
    return O.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, vy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await re(l);
  } catch (a) {
    return O.error("Failed to fetch folder metadata", a), {};
  }
}, xy = async (e, t, n) => {
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
}, _y = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await re(e);
}, Df = () => {
  const { dispatch: e } = pe(), [t, n] = p.useState(() => {
    const C = localStorage.getItem("meld-import-config"), F = {
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
        return { ...F, ...Q, tags: [] };
      } catch {
        return F;
      }
    return F;
  });
  p.useEffect(() => {
    const { tags: C, ...F } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(F));
  }, [t]);
  const [r, l] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [v, g] = p.useState([]), [k, w] = p.useState(""), [x, _] = p.useState(!1), [f, u] = p.useState(null), m = p.useRef(!1), y = (C) => {
    C.target === C.currentTarget && (m.current = !0);
  }, j = (C) => {
    C.target === C.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const F = await Ag();
        n((Q) => Q.custom_path ? Q : { ...Q, custom_path: F });
      } catch (F) {
        O.error("Failed to fetch home directory:", F);
      }
    })();
  }, []), p.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const Q = t.type === "custom" ? t.custom_path : t.subfolder;
      if (O.log(`loadFolders started. Path: "${Q}", Type: "${t.type}"`), t.type === "custom" && !Q) {
        O.log("Custom path is empty, skipping load."), l([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const M = Q, E = t.type;
      try {
        O.log("Step 1: Fast load starting...");
        const R = await yy(t.type, Q, !0, C.signal);
        if (C.signal.aborted) {
          O.log("Step 1: Aborted.");
          return;
        }
        const U = Array.isArray(R == null ? void 0 : R.folders) ? R.folders : [], I = Array.isArray(R == null ? void 0 : R.images) ? R.images : [];
        O.log(`Step 1 complete. Found ${U.length} folders, ${I.length} images.`), l(U), o(I), c(null);
        const z = U.map((W) => W.name);
        z.length > 0 && (O.log(`Step 2: Metadata fetch starting for ${z.length} folders...`), vy(E, M, z, C.signal).then((W) => {
          if (C.signal.aborted) {
            O.log("Step 2: Aborted.");
            return;
          }
          O.log("Step 2: Metadata fetch complete."), l(
            ($) => $.map((H) => {
              const Z = W[H.name];
              return Z ? { ...H, count: Z.count, preview: Z.preview } : H;
            })
          );
        }).catch((W) => {
          W.name !== "AbortError" && O.error("Step 2: Metadata fetch failed:", W);
        })), O.log("Step 3: Path image count starting..."), xy(E, M, C.signal).then((W) => {
          if (C.signal.aborted) {
            O.log("Step 3: Aborted.");
            return;
          }
          O.log(`Step 3: Path image count complete: ${W}`), c(W);
        }).catch((W) => {
          W.name !== "AbortError" && O.error("Step 3: Path image count failed:", W);
        });
      } catch (R) {
        if (R.name === "AbortError") {
          O.log("Request aborted.");
          return;
        }
        O.error("Failed to load folders:", R), l([]), o([]), c(0);
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
      O.error("Failed to fetch tags:", C);
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
  const b = p.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(k.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, k, t.tags]), T = (C) => {
    const F = C.trim();
    F && !t.tags.includes(F) && (n({ ...t, tags: [...t.tags, F] }), w(""));
  }, L = (C) => {
    n({ ...t, tags: t.tags.filter((F) => F !== C) });
  }, D = (C) => {
    C.key === "Enter" && k.trim() && (C.preventDefault(), T(k.trim()));
  }, N = async () => {
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
      O.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, A = (C) => {
    if (t.type === "custom") {
      const F = t.custom_path.includes("\\") ? "\\" : "/", Q = t.custom_path.endsWith(F) ? `${t.custom_path}${C}` : `${t.custom_path}${F}${C}`;
      n({ ...t, custom_path: Q });
    } else {
      const F = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: F });
    }
  }, P = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", F = t.custom_path.split(C);
      if (F.length > 1) {
        F.pop();
        let Q = F.join(C);
        Q === "" && C === "/" && (Q = "/"), n({ ...t, custom_path: Q });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
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
                      children: /* @__PURE__ */ s.jsx(me, { size: 20 })
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
                            children: /* @__PURE__ */ s.jsx(me, { size: 12 })
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
                            onChange: (C) => w(C.target.value),
                            onKeyDown: D
                          }
                        ),
                        k.trim() && !t.tags.includes(k.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => T(k),
                            children: /* @__PURE__ */ s.jsx(Bs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? k && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
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
                        onClick: N,
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
                          onClick: P,
                          children: [
                            /* @__PURE__ */ s.jsx(kf, { size: 16 }),
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
                          onClick: () => A(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: ht(C.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(mg, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(gi, { size: 14 })
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
                      children: /* @__PURE__ */ s.jsx(me, { size: 24 })
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
}, Pf = "meld-download-options", ky = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function Sy() {
  try {
    const e = localStorage.getItem(Pf);
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
function jy(e) {
  try {
    localStorage.setItem(Pf, JSON.stringify(e));
  } catch {
  }
}
const by = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = p.useState(() => Sy()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [h, v] = p.useState(!1), [g, k] = p.useState(null), [w, x] = p.useState(String(c)), _ = p.useRef(!1);
  p.useEffect(() => {
    jy(r);
  }, [r]), p.useEffect(() => {
    x(String(c));
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
    x(L);
    const D = Number(L);
    if (!Number.isFinite(D) || D <= 0)
      return;
    const P = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(D)));
    l((C) => ({ ...C, resizeValue: P }));
  }, y = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    v(!0);
    const L = e.length;
    k({ current: 0, total: L });
    try {
      if (a === "zip")
        await Bg(
          e,
          o,
          i,
          c,
          d,
          (D, N) => {
            k({ current: D, total: N });
          }
        );
      else {
        let D = 0;
        for (const N of e)
          k({ current: D, total: L }), await Qg(
            N,
            o,
            i,
            c,
            d
          ), D += 1, k({ current: D, total: L }), await new Promise((A) => requestAnimationFrame(() => A()));
      }
      n(), t == null || t();
    } catch (D) {
      O.error("Download failed:", D), alert("Failed to download images.");
    } finally {
      v(!1), k(null);
    }
  }, j = i === "percent" ? "%" : "px", S = 1, b = i === "percent" ? 99 : 99999, T = i === "percent" ? "1-99" : "Max edge (px)";
  return ge.createPortal(
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
                children: /* @__PURE__ */ s.jsx(me, { size: 20 })
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
                        value: w,
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
                        onChange: (L) => l((D) => ({
                          ...D,
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
                        children: ky.map((L) => /* @__PURE__ */ s.jsx("option", { value: L.value, children: L.label }, L.value))
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
                        onChange: (L) => l((D) => ({ ...D, removeMetadata: L.target.checked })),
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
                onClick: y,
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
}, Wc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const g = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((k) => k(t, g));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, Cy = (e) => e ? Wc(e) : Wc, Ey = (e) => e;
function Ny(e, t = Ey) {
  const n = rn.useSyncExternalStore(
    e.subscribe,
    rn.useCallback(() => t(e.getState()), [e, t]),
    rn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return rn.useDebugValue(n), n;
}
const My = (e) => {
  const t = Cy(e), n = (r) => Ny(t, r);
  return Object.assign(n, t), n;
}, Iy = (e) => My;
function Ty(e, t) {
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
const xo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return xo(r)(n);
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
        return xo(r)(n);
      }
    };
  }
}, Ly = (e, t) => (n, r, l) => {
  let a = {
    storage: Ty(() => window.localStorage),
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
  const v = () => {
    const _ = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, g = l.setState;
  l.setState = (_, f) => (g(_, f), v());
  const k = e(
    (..._) => (n(..._), v()),
    r,
    l
  );
  l.getInitialState = () => k;
  let w;
  const x = () => {
    var _, f;
    if (!h) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var j;
      return y((j = r()) != null ? j : k);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : k)) || void 0;
    return xo(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              y.state,
              y.version
            );
            return j instanceof Promise ? j.then((S) => [!0, S]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var j;
      if (u !== i)
        return;
      const [S, b] = y;
      if (w = a.merge(
        b,
        (j = r()) != null ? j : k
      ), n(w, !0), S)
        return v();
    }).then(() => {
      u === i && (m == null || m(w, void 0), w = r(), o = !0, d.forEach((y) => y(w)));
    }).catch((y) => {
      u === i && (m == null || m(void 0, y));
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
    rehydrate: () => x(),
    hasHydrated: () => o,
    onHydrate: (_) => (c.add(_), () => {
      c.delete(_);
    }),
    onFinishHydration: (_) => (d.add(_), () => {
      d.delete(_);
    })
  }, a.skipHydration || x(), w || k;
}, Ay = Ly, Ry = [
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
const se = Iy()(
  Ay(
    (e) => ({
      isOpen: !1,
      slots: Ry,
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
), zf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return re(e);
}, Of = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return re(t);
}, Ff = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", or = (e) => {
  const t = Ff(e);
  return t === "meldimageloader" || t === "loadimage";
}, Qr = (e) => Ff(e) === "loadimagemask", Dy = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), _i = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, l) => {
    var x, _, f, u, m;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    O.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await Of(t);
    O.log("Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find((S) => or(S.type));
        j && (o = String(j.id));
      }
      const y = a.nodes.find((j) => Qr(j.type));
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const j = a[y];
          if (or(j.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a) {
        const j = a[y];
        if (Qr(j.class_type)) {
          i = y;
          break;
        }
      }
    }
    if (O.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw O.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const y = window.app;
      if (typeof y != "object" || y === null || !("graph" in y))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const j = y;
      if (!j.graph || !Dy(j.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const S = t.replace(/\.json$/i, "");
      let b = !1;
      const T = document.querySelectorAll(".workflow-tab");
      for (const N of Array.from(T)) {
        const A = N.querySelector(".workflow-label"), P = ((x = A == null ? void 0 : A.textContent) == null ? void 0 : x.trim()) || ((_ = N.textContent) == null ? void 0 : _.trim()) || "";
        if (P === S || P === t || P.startsWith(`${S} `) || P.startsWith(`${S}•`)) {
          N.click(), b = !0;
          break;
        }
      }
      b || await j.loadGraphData(a, !0, !0, t), await new Promise((N) => setTimeout(N, 200));
      const L = j.graph._nodes;
      O.log("Active graph nodes count:", L.length);
      const D = L.find(
        (N) => String(N.id) === o || or(N.type)
      );
      if (D) {
        const N = (f = D.widgets) == null ? void 0 : f.find((A) => A.name === "image");
        O.log("Updating loader node widget:", {
          nodeId: D.id,
          type: D.type,
          imagePath: d
        }), N && (N.value = d, typeof N.callback == "function" && N.callback(d));
      } else
        O.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const N = L.find(
          (A) => String(A.id) === i || Qr(A.type)
        );
        if (O.log("Updating mask node widget:", {
          nodeId: N == null ? void 0 : N.id,
          maskFilename: r
        }), N) {
          const A = (u = N.widgets) == null ? void 0 : u.find((C) => C.name === "image");
          A && (A.value = `${r} [temp]`);
          const P = (m = N.widgets) == null ? void 0 : m.find((C) => C.name === "channel");
          P && (P.value = "red");
        } else
          O.warn("LoadImageMask not found in active graph after loading");
      }
      j.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof j.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await j.queuePrompt(0);
        return;
      } catch (N) {
        throw O.error("Failed to queue workflow:", N), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const h = JSON.parse(JSON.stringify(a));
    h[o].inputs.image = d, r && i && (h[i].inputs.image = `${r} [temp]`, h[i].inputs.channel = "red");
    const v = window.api;
    if (!(typeof v == "object" && v !== null && "fetchApi" in v && typeof v.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const k = v, w = await k.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: h,
        client_id: typeof k.clientId == "string" ? k.clientId : void 0
      })
    });
    return Qs(w);
  },
  []
) }), $f = (e) => !!(e && Array.isArray(e.widgets));
function Py(e) {
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
  const r = Py(e), l = n.graph._nodes.filter((d) => or(d.type));
  if (l.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = l[0];
  if (t) {
    const d = l.find((h) => String(h.id) === t);
    d && (a = d);
  }
  if (!$f(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const zy = () => {
  const { dispatch: e } = pe();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      O.log("[Meld-Debug] injectMaskToGraph called with:", r), ul(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return O.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(l.graph._nodes))
        return O.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = l.graph._nodes.filter((g) => Qr(g.type));
      if (a.length === 0)
        return O.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!$f(o))
        return O.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((g) => g.name === "image"), c = `${r} [temp]`;
      O.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((g) => g.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = l.graph).afterChange) == null || v.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
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
function Oy(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = wo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++) {
    const v = c.data[h * 4] ?? 0;
    d[h] = v > 128 ? 255 : 0;
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
function Fy(e) {
  return e.data.every((t) => t === 0);
}
const Uc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ki = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = pe(), i = p.useMemo(() => a.images.find((V) => V.id === e) ?? a.lineageImages.find((V) => V.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = zy(), { executeWorkflow: v } = _i();
  Te({ onEscape: l });
  const g = p.useRef(null), k = p.useRef(null), w = p.useRef(null), x = p.useRef(null), [_, f] = p.useState(!1), [u, m] = p.useState(() => {
    const V = localStorage.getItem("meld-mask-tool");
    return Uc(V) ? V : "rect";
  });
  p.useEffect(() => {
    Uc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [y, j] = p.useState({ x: 0, y: 0 }), [S, b] = p.useState({ x: 0, y: 0 }), [T, L] = p.useState([]), [D, N] = p.useState(null), [A, P] = p.useState(!1), [C, F] = p.useState(1), [Q, M] = p.useState({ x: 0, y: 0 }), [E, R] = p.useState(!1), [U, I] = p.useState(!1), z = p.useRef(null), W = p.useCallback(() => {
    const V = w.current, K = k.current;
    if (!V || !K) return null;
    const ee = K.getBoundingClientRect(), Y = V.naturalWidth, ne = V.naturalHeight;
    if (!Y || !ne) return null;
    const oe = Y / ne, Me = ee.width / ee.height;
    let he, ke, we = 0, $e = 0;
    return oe > Me ? (he = ee.width, ke = ee.width / oe, $e = (ee.height - ke) / 2) : (ke = ee.height, he = ee.height * oe, we = (ee.width - he) / 2), {
      left: we,
      top: $e,
      width: he,
      height: ke
    };
  }, []), $ = p.useCallback(
    (V, K, ee, Y) => {
      if (!V) return K;
      const ne = V.getBoundingClientRect(), oe = ne.width / 2, Me = ne.height / 2, he = {
        x: (oe - K.x) / ee,
        y: (Me - K.y) / ee
      };
      return { x: oe - he.x * Y, y: Me - he.y * Y };
    },
    []
  ), H = p.useCallback(() => {
    F((V) => {
      const K = Math.min(V * 1.2, 20);
      return M((ee) => $(k.current, ee, V, K)), K;
    });
  }, [$]), Z = p.useCallback(() => {
    F((V) => {
      const K = Math.max(0.1, V / 1.2);
      return M((ee) => $(k.current, ee, V, K)), K;
    });
  }, [$]), ie = p.useCallback(() => {
    const V = g.current;
    if (!V) return;
    const K = V.getContext("2d");
    if (!K) return;
    K.clearRect(0, 0, V.width, V.height);
    const ee = getComputedStyle(document.documentElement), Y = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = W();
    if (x.current && ne && (K.save(), K.globalAlpha = 0.5, K.drawImage(
      x.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), K.restore()), _) {
      const oe = Math.min(y.x, S.x), Me = Math.min(y.y, S.y), he = Math.abs(y.x - S.x), ke = Math.abs(y.y - S.y);
      if (K.save(), K.globalAlpha = 0.3, K.fillStyle = Y, K.strokeStyle = "white", K.lineWidth = 2, K.setLineDash([5, 5]), K.beginPath(), u === "rect")
        K.rect(oe, Me, he, ke);
      else if (u === "ellipse") {
        const we = oe + he / 2, $e = Me + ke / 2;
        K.ellipse(we, $e, he / 2, ke / 2, 0, 0, 2 * Math.PI);
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
  }, [_, y, S, u, T, W]), [de, Pe] = p.useState([]), ue = p.useMemo(() => de.length > 0 ? de[de.length - 1] : w.current ? Fl(w.current.naturalWidth, w.current.naturalHeight) : null, [de]);
  p.useEffect(() => {
    var V;
    (V = w.current) != null && V.naturalWidth && de.length === 0 && Pe([
      Fl(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]);
  const Et = p.useCallback(() => {
    var V;
    (V = w.current) != null && V.naturalWidth && de.length === 0 && Pe([
      Fl(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]), q = p.useRef(!1), Kt = p.useRef(0), Gt = (V) => {
    V.target === V.currentTarget && (q.current = !0);
  }, qt = (V) => {
    V.target === V.currentTarget && q.current && !_ && l(), q.current = !1;
  };
  p.useEffect(() => {
    if (!ue) return;
    x.current || (x.current = document.createElement("canvas"));
    const V = x.current;
    V.width = ue.width, V.height = ue.height;
    const K = V.getContext("2d");
    if (!K) return;
    const ee = wo(ue, [255, 255, 255], 255);
    K.putImageData(ee, 0, 0), ie();
  }, [ue, ie]), p.useEffect(() => {
    _ && ie();
  }, [_, ie]), p.useEffect(() => {
    const V = k.current;
    if (!V) return;
    const K = (ee) => {
      ee.preventDefault();
      const Y = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      F((ne) => {
        const oe = Math.min(Math.max(0.1, ne * Y), 20);
        return M((Me) => {
          const he = V.getBoundingClientRect(), ke = ee.clientX - he.left, we = ee.clientY - he.top, $e = {
            x: (ke - Me.x) / ne,
            y: (we - Me.y) / ne
          };
          return {
            x: ke - $e.x * oe,
            y: we - $e.y * oe
          };
        }), oe;
      });
    };
    return V.addEventListener("wheel", K, { passive: !1 }), () => V.removeEventListener("wheel", K);
  }, []), p.useEffect(() => {
    if (!U) return;
    const V = (ee) => {
      if (z.current) {
        const Y = ee.clientX - z.current.clientX, ne = ee.clientY - z.current.clientY;
        M({
          x: z.current.panX + Y,
          y: z.current.panY + ne
        });
      }
    }, K = () => {
      I(!1), z.current = null;
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", K), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", K);
    };
  }, [U]), p.useEffect(() => {
    const V = () => {
      k.current && g.current && (g.current.width = k.current.clientWidth, g.current.height = k.current.clientHeight, ie());
    }, K = new ResizeObserver(V);
    return k.current && K.observe(k.current), V(), () => K.disconnect();
  }, [ie]);
  const On = (V) => {
    var we;
    const K = V.button === 2, ee = V.button === 1, Y = E && V.button === 0;
    if (K || ee || Y) {
      V.preventDefault(), V.stopPropagation(), z.current = {
        panX: Q.x,
        panY: Q.y,
        clientX: V.clientX,
        clientY: V.clientY
      }, I(!0);
      return;
    }
    if (V.button !== 0 || _ || A || Date.now() - Kt.current < 100)
      return;
    V.preventDefault();
    const ne = W(), oe = (we = k.current) == null ? void 0 : we.getBoundingClientRect();
    if (!ne || !oe) return;
    f(!0);
    const Me = {
      x: (V.clientX - oe.left - Q.x) / C,
      y: (V.clientY - oe.top - Q.y) / C
    }, he = Math.max(ne.left, Math.min(Me.x, ne.left + ne.width)), ke = Math.max(ne.top, Math.min(Me.y, ne.top + ne.height));
    j({ x: he, y: ke }), b({ x: he, y: ke }), L(u === "lasso" ? [{ x: he, y: ke }] : []), N(null);
  };
  p.useEffect(() => {
    if (!_) return;
    const V = (ee) => {
      var ke;
      const Y = W(), ne = (ke = k.current) == null ? void 0 : ke.getBoundingClientRect();
      if (!Y || !ne) return;
      const oe = {
        x: (ee.clientX - ne.left - Q.x) / C,
        y: (ee.clientY - ne.top - Q.y) / C
      }, Me = Math.max(Y.left, Math.min(oe.x, Y.left + Y.width)), he = Math.max(Y.top, Math.min(oe.y, Y.top + Y.height));
      b({ x: Me, y: he }), u === "lasso" && L((we) => [...we, { x: Me, y: he }]);
    }, K = (ee) => {
      var oe;
      const Y = W(), ne = (oe = k.current) == null ? void 0 : oe.getBoundingClientRect();
      if (Y && ne && ue && w.current) {
        const Me = {
          x: (ee.clientX - ne.left - Q.x) / C,
          y: (ee.clientY - ne.top - Q.y) / C
        }, he = Math.max(Y.left, Math.min(Me.x, Y.left + Y.width)), ke = Math.max(Y.top, Math.min(Me.y, Y.top + Y.height)), we = Math.min(y.x, he), $e = Math.min(y.y, ke), Yt = Math.abs(y.x - he), kr = Math.abs(y.y - ke), _m = u === "lasso";
        if (Yt > 5 || kr > 5 || _m && T.length > 2) {
          const km = w.current.naturalWidth, Sm = w.current.naturalHeight, Fn = km / Y.width, $n = Sm / Y.height, jm = Oy(ue, (_n) => {
            if (u === "rect") {
              const kn = (we - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, wl = kr * $n;
              _n.rect(kn, Sn, Xt, wl);
            } else if (u === "ellipse") {
              const kn = (we - Y.left) * Fn, Sn = ($e - Y.top) * $n, Xt = Yt * Fn, wl = kr * $n, bm = kn + Xt / 2, Cm = Sn + wl / 2;
              _n.ellipse(bm, Cm, Xt / 2, wl / 2, 0, 0, 2 * Math.PI);
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
          Pe((_n) => [..._n, jm]);
        }
      }
      Kt.current = Date.now(), f(!1), L([]);
    };
    return window.addEventListener("mousemove", V), window.addEventListener("mouseup", K), () => {
      window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", K);
    };
  }, [
    _,
    y.x,
    y.y,
    W,
    ue,
    u,
    T,
    Q.x,
    Q.y,
    C
  ]);
  const _r = p.useCallback(() => {
    de.length > 1 && Pe((V) => V.slice(0, -1));
  }, [de.length]);
  p.useEffect(() => {
    const V = (Y) => {
      if (!Y) return !1;
      const ne = Y, oe = ne.tagName;
      return oe === "INPUT" || oe === "TEXTAREA" || oe === "BUTTON" || oe === "SELECT" || oe === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, K = (Y) => {
      Y.code === "Space" && !Y.repeat && (V(Y.target) || (Y.preventDefault(), R(!0))), (Y.metaKey || Y.ctrlKey) && Y.key.toLowerCase() === "z" && !Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), _r()) : Y.key === "Escape" && (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (Y) => {
      Y.code === "Space" && (V(Y.target) || (Y.preventDefault(), R(!1)));
    };
    return window.addEventListener("keydown", K, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", K, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [_r, l]);
  const xl = () => {
    if (w.current) {
      const V = Fl(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      Pe((K) => [...K, V]);
    }
  }, Ce = async () => {
    if (!ue || !w.current) return null;
    P(!0);
    try {
      const { width: V, height: K } = ue, ee = document.createElement("canvas");
      ee.width = V, ee.height = K;
      const Y = ee.getContext("2d");
      if (!Y) return null;
      const ne = wo(ue, [255, 255, 255], 255);
      Y.putImageData(ne, 0, 0);
      const oe = await new Promise(
        (kr) => ee.toBlob(kr, "image/png")
      );
      if (!oe) return null;
      const he = `meld_mask_${Date.now()}.png`, ke = new File([oe], he, { type: "image/png" }), we = new FormData();
      we.append("image", ke), we.append("type", "temp"), we.append("overwrite", "true");
      const $e = await te.fetchApi("/upload/image", {
        method: "POST",
        body: we
      });
      return (await Qs($e)).name ?? null;
    } catch (V) {
      return O.error("Error uploading mask:", V), null;
    } finally {
      P(!1);
    }
  }, it = async () => {
    if (!d) return;
    const V = await Ce();
    V && h(d, V) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, vt = async () => {
    if (!d) return;
    const V = await Ce();
    V && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      V,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: V,
        onSuccess: r
      }
    }));
  }, Dt = p.useMemo(() => ue && !Fy(ue), [ue]);
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
          onClick: (V) => V.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(Cf, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(dg, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(hg, { size: 18 }),
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
                    onClick: Z,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(Lg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      F(1), M({ x: 0, y: 0 });
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
                    children: /* @__PURE__ */ s.jsx(Tg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: k,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: On,
                  onContextMenu: (V) => V.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: U ? "grabbing" : E ? "grab" : "crosshair"
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
                            ref: w,
                            src: xi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (V) => V.preventDefault(),
                            onLoad: Et
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: g,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (V) => V.preventDefault()
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
                      disabled: !Dt || A,
                      type: "button",
                      children: [
                        A ? /* @__PURE__ */ s.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(dt, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: vt,
                      disabled: !Dt || A,
                      type: "button",
                      children: [
                        A ? /* @__PURE__ */ s.jsx(Rc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(dl, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: _r,
                      disabled: de.length <= 1 || A,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Ng, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: xl,
                      disabled: !Dt || A,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(me, { size: 16 }),
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
}, Wf = ({
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
    ki,
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
}, Uf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, $l = (e) => e.replace(/^["']|["']$/g, ""), $y = (e) => e.trim() ? Uf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Wy = (e, t) => {
  const n = Uf(e), r = {
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
}, Uy = () => {
  const { state: e, dispatch: t, updateSetting: n } = pe(), [r, l] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState({}), [d, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, g] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [k, w] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, _] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [m, y] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, S] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, T] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [L, D] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [N, A] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [P, C] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [F, Q] = p.useState(
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
        (Z) => a[Z] !== e.settings[Z] && !i[Z]
      );
      if (H.length > 0)
        for (const Z of H)
          await n(Z, a[Z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (H, Z) => {
      o((ie) => ({
        ...ie,
        [H]: !Z
      }));
    },
    handleNumberChange: (H, Z, ie, de) => {
      H === "gallery.initial_load_count" ? h(Z) : H === "gallery.max_load_count" ? g(Z) : H === "gallery.lineage_max_depth" ? w(Z) : H === "viewer.thumbnail_window_size" ? _(Z) : H === "gallery.trash_retention_days" ? u(Z) : H === "gallery.auto_link_phash_threshold" ? y(Z) : H === "gallery.suggest_phash_threshold" ? S(Z) : H === "viewer.details.max_positive_prompt_lines" ? T(Z) : H === "viewer.details.max_negative_prompt_lines" ? D(Z) : H === "fullscreen.details.max_positive_prompt_lines" ? A(Z) : H === "fullscreen.details.max_negative_prompt_lines" ? C(Z) : H === "sidebar.thumbnail_size" && Q(Z);
      const Pe = Number.parseInt(Z, 10);
      if (!Number.isNaN(Pe)) {
        let ue = Pe;
        ie !== void 0 && ue < ie && (ue = ie), de !== void 0 && ue > de && (ue = de), o((Et) => ({
          ...Et,
          [H]: ue
        }));
      }
    },
    handleNumberBlur: (H) => {
      !H || !H.key || (H.key === "gallery.initial_load_count" ? h(a["gallery.initial_load_count"].toString()) : H.key === "gallery.max_load_count" ? g(a["gallery.max_load_count"].toString()) : H.key === "gallery.lineage_max_depth" ? w(a["gallery.lineage_max_depth"].toString()) : H.key === "viewer.thumbnail_window_size" ? _(a["viewer.thumbnail_window_size"].toString()) : H.key === "gallery.trash_retention_days" ? u(a["gallery.trash_retention_days"].toString()) : H.key === "gallery.auto_link_phash_threshold" ? y(a["gallery.auto_link_phash_threshold"].toString()) : H.key === "gallery.suggest_phash_threshold" ? S(a["gallery.suggest_phash_threshold"].toString()) : H.key === "viewer.details.max_positive_prompt_lines" ? T(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : H.key === "viewer.details.max_negative_prompt_lines" ? D(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : H.key === "fullscreen.details.max_positive_prompt_lines" ? A(
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
              await ty(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (H) {
              O.error("Failed to clear thumbnail cache:", H), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (H) => typeof H != "string" ? !1 : $y(H),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: L,
    fullscreenMaxPositivePromptLinesInput: N,
    fullscreenMaxNegativePromptLinesInput: P,
    thumbnailSizeInput: F
  };
}, X = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Vy = ({
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
function Vf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Bf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Qf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Hf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Kf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Vf, {})
  ] });
}
function Gf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function qf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Vf, {})
  ] });
}
function Yf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Xf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Zf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Jf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const em = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Bf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Gf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: qf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Hf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Kf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Qf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Xf },
  { id: "edit_notes", label: "Edit Notes", icon: Zf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Yf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Jf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Qt }
], By = ({
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
            children: em.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Qy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Hy = ({
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
                t((v) => ({
                  ...v,
                  [c]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(e[c] || "");
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
}, Ky = ({
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
            onChange: (v) => l((g) => ({
              ...g,
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
            onChange: (v) => t("gallery.auto_link_phash_threshold", v.target.value, 0, 100),
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
            onChange: (v) => t("gallery.suggest_phash_threshold", v.target.value, 0, 100),
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
            onChange: (v) => t("gallery.lineage_max_depth", v.target.value, 1, 10),
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
            onChange: (v) => t("gallery.trash_retention_days", v.target.value, 0, 365),
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
] }), Gy = ({
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
] }), tm = () => {
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
    handleClearThumbnailCache: g,
    validateShortcut: k,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: x,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: T,
    thumbnailSizeInput: L
  } = Uy();
  Te({ onEscape: o });
  const D = p.useRef(!1), N = (F) => {
    F.target === F.currentTarget && (D.current = !0);
  }, A = (F) => {
    F.target === F.currentTarget && D.current && o(), D.current = !1;
  }, P = [
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
          Ky,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: g,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: m,
            suggestPhashThresholdInput: y
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          By,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: w,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Gy,
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
          Vy,
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
          Hy,
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
        return /* @__PURE__ */ s.jsx(Qy, {});
      default:
        return null;
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: A,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (F) => F.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ s.jsx(me, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: P.map((F) => /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === F.id ? "active" : ""}`,
                onClick: () => t(F.id),
                children: F.label
              },
              F.id
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
}, qy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, nm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = pe(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, v] = p.useState(""), [g, k] = p.useState(!0), [w, x] = p.useState(!1), _ = p.useRef(null), f = e.length > 1, u = p.useRef(!1), m = (N) => {
    N.target === N.currentTarget && (u.current = !0);
  }, y = (N) => {
    N.target === N.currentTarget && u.current && n(), u.current = !1;
  }, j = p.useCallback(async () => {
    k(!0);
    try {
      const N = await wi();
      i(N || []);
    } catch (N) {
      O.error("Failed to fetch tags:", N);
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
    (N) => N.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(N.name)
  ), [o, h, c]), b = (N) => {
    const A = N.trim();
    if (A.toLowerCase() === St) {
      alert(`Tag name '${St}' is reserved for search and cannot be used.`);
      return;
    }
    A && !c.includes(A) && (d([...c, A]), v(""));
  }, T = (N) => {
    d(c.filter((A) => A !== N));
  }, L = async () => {
    x(!0);
    try {
      if (f) {
        const N = c.filter((P) => !t.includes(P)), A = t.filter((P) => !c.includes(P));
        await If(e, N, A);
      } else {
        const N = e[0];
        if (N === void 0)
          throw new Error("No image selected");
        await $g(N, c);
      }
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (N) {
      O.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, D = (N) => {
    N.key === "Enter" && h.trim() && (Xe(N), b(h.trim()));
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(wr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => T(N),
                    children: /* @__PURE__ */ s.jsx(me, { size: 12 })
                  }
                )
              ] }, N)) })
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
                    onChange: (N) => v(N.target.value),
                    onKeyDown: D
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(h),
                    children: [
                      /* @__PURE__ */ s.jsx(Bs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? h ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((N) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(N.name),
                  children: N.name
                },
                N.id
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
                disabled: w,
                children: w ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Hs = (e, t) => {
  const n = p.useCallback(async (x) => vo(x), []), r = p.useCallback(
    async (x, _, f) => {
      await If(x, _, f);
    },
    []
  ), l = p.useCallback(async (x) => {
    try {
      const _ = await Ug(x.id);
      return _.workflow ? (await window.app.loadGraphData(_.workflow), O.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return O.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = p.useCallback(async (x) => {
    try {
      const _ = await Vg(x.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, m = window.LiteGraph;
      if (!u.graph || !u.canvas || !m)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const y = m.createNode(f);
      if (!y)
        return O.error(`Node type ${f} not found.`), alert(
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
      if (y.widgets) {
        for (const [L, D] of Object.entries(j)) {
          const N = _[L];
          if (N != null && N !== "") {
            const A = y.widgets.find((P) => P.name === D);
            A && (A.value = N);
          }
        }
        const T = y.widgets.find((L) => L.name === "control_after_generate");
        T && (T.value = "fixed");
      }
      const S = u.canvas.ds.offset, b = u.canvas.ds.scale;
      return y.pos = [(-S[0] + 400) / b, (-S[1] + 300) / b], u.graph.add(y), u.canvas.selectNode(y), u.canvas.centerOnNode(y), !0;
    } catch (_) {
      return O.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
    }
  }, []), o = p.useCallback(
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
  ), i = p.useCallback(
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
  ), c = p.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (x) => {
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
            image: x,
            nodes: f.map((m) => ({
              id: String(m.id),
              type: m.type ?? "",
              title: m.title
            })),
            onSelect: (m) => {
              ul(x, m);
            }
          }
        }), !0;
      const u = ul(x);
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
    (x) => {
      const _ = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: _ }
      });
    },
    [t]
  ), v = p.useCallback(
    async (x, _ = "run") => {
      var u;
      O.log("handleRunWithMask called", x, _);
      const f = Array.isArray(x) ? x : [x];
      if (_ === "apply") {
        const m = window.app, y = ((u = m == null ? void 0 : m.graph) == null ? void 0 : u._nodes) || [];
        O.log(
          "Current graph nodes:",
          y.map((T) => ({
            id: T.id,
            type: T.type ?? ""
          }))
        );
        const j = y.some((T) => Qr(T.type)), S = y.some((T) => or(T.type));
        if (O.log("Nodes found:", { hasMaskNode: j, hasLoaderNode: S }), !j || !S) {
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
        if (!(await zf()).some((j) => j.valid && j.mask_count >= 1)) {
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
        O.error("[Meld] Error checking workflows:", m);
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
    async (x, _) => {
      try {
        const f = x.id, m = (await vo([f])).restored_ids || [f];
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
    async (x, _) => {
      try {
        const f = await Wg(x, _);
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
    handleRunWithMask: v,
    handleRestore: g,
    handleDelete: k,
    handleEditNotes: i,
    handleUpdateUserNotes: w
  };
}, rm = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = pe(), { handleUpdateUserNotes: a } = Hs(r, l), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), g = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, k = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const w = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      O.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const x = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === h.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [w]), Te({ onEscape: n }), ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(bg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
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
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: w,
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
}, lm = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = pe(), l = p.useCallback(() => {
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
  return ge.createPortal(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: l, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
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
}, sm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var Q;
  const { dispatch: l } = pe(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [v, g] = p.useState(!1), [k, w] = p.useState(null), [x, _] = p.useState({}), [f, u] = p.useState({}), [m, y] = p.useState(""), j = p.useRef(null), S = p.useMemo(() => a.map((M) => {
    let E = M.valid, R = M.reason;
    return r && M.mask_count === 0 && (E = !1, R = "No 'Load Image (as Mask)' node found."), { ...M, valid: E, reason: R };
  }).sort((M, E) => M.valid !== E.valid ? M.valid ? -1 : 1 : M.name.localeCompare(E.name)), [a, r]), b = p.useMemo(() => {
    if (!m.trim()) return S;
    const M = m.toLowerCase();
    return S.filter((E) => E.name.toLowerCase().includes(M));
  }, [S, m]), T = p.useCallback(async () => {
    try {
      c(!0);
      const M = await zf();
      o(M), h(null);
    } catch (M) {
      h(M instanceof Error ? M.message : String(M));
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
  const D = p.useRef(!1), N = p.useCallback((M) => {
    M.target === M.currentTarget && (D.current = !0);
  }, []), A = p.useCallback(
    (M) => {
      M.target === M.currentTarget && D.current && L(), D.current = !1;
    },
    [L]
  ), P = async (M, E) => {
    if (!v)
      try {
        g(!0);
        const R = await t(M, E);
        n == null || n(), R !== !1 && L();
      } catch (R) {
        h(R instanceof Error ? R.message : String(R)), g(!1);
      }
  }, C = async (M) => {
    if (!(x[M] || f[M]))
      try {
        u((I) => ({ ...I, [M]: !0 }));
        const E = await Of(M), R = [], U = (I) => {
          if (!I) return !1;
          const z = I.replace(/\s+/g, "").toLowerCase();
          return r ? z === "loadimagemask" : z === "meldimageloader" || z === "loadimage";
        };
        if (E.nodes && Array.isArray(E.nodes)) {
          O.log("Extracting nodes from UI format workflow", E.nodes.length);
          for (const I of E.nodes)
            U(I.type) && (O.log("Found target node (UI):", I.id, I.type, I.title), R.push({
              id: String(I.id),
              type: I.type || "",
              title: I.title
            }));
        } else {
          O.log("Extracting nodes from API format workflow");
          for (const I in E) {
            const z = E[I];
            z && typeof z == "object" && U(z.class_type) && (O.log("Found target node (API):", I, z.class_type), R.push({
              id: I,
              type: z.class_type || ""
            }));
          }
        }
        R.length === 0 && O.warn("No loader nodes found in workflow JSON despite count > 0"), _((I) => ({ ...I, [M]: R }));
      } catch (E) {
        O.error("Failed to fetch workflow nodes:", E);
      } finally {
        u((E) => ({ ...E, [M]: !1 }));
      }
  }, F = (M) => {
    if (!M.valid || v) return;
    if ((r ? M.mask_count : M.loader_count + M.load_image_count) <= 1) {
      P(M.name);
      return;
    }
    k === M.name ? w(null) : (w(M.name), C(M.name));
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: A,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (M) => M.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(yi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: L, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(vf, { size: 20 }),
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
                      onChange: (M) => y(M.target.value)
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var M;
                        y(""), (M = j.current) == null || M.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(me, { size: 14 })
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
                ) : b.map((M) => {
                  const E = r ? M.mask_count : M.loader_count + M.load_image_count, R = k === M.name, U = x[M.name] || [], I = f[M.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${M.valid ? "" : "meld-workflow-item--invalid"} ${R ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => F(M),
                        title: M.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: M.name }),
                            !M.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: M.reason }),
                            M.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: E > 1 ? `Multiple loaders found (${E})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${M.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          M.valid && E <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (z) => {
                                z.stopPropagation(), P(M.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(dl, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          M.valid && E > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (z) => {
                                z.stopPropagation(), F(M);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                R ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  gi,
                                  {
                                    size: 14,
                                    style: {
                                      transform: R ? "rotate(90deg)" : "rotate(0deg)",
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
                    R && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: I ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: U.map((z) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => P(M.name, z.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: z.title || z.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                z.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(dl, { size: 12 })
                          ]
                        },
                        z.id
                      )) })
                    ] }) })
                  ] }, M.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: L,
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
}, Yy = ({ message: e, onConfirm: t, onCancel: n }) => {
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
}, _o = async (e, t) => {
  await Og(e, t), se.getState().removeImages(e);
}, am = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = pe(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = p.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = p.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((y) => {
    const j = Number.parseInt(y, 10);
    return l.images.find((S) => S.id === j) || l.lineageImages.find((S) => S.id === j) || null;
  }).filter((y) => y !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
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
  const v = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Te({ onEscape: v });
  const g = p.useRef(!1), k = p.useCallback((u) => {
    u.target === u.currentTarget && (g.current = !0);
  }, []), w = p.useCallback(
    (u) => {
      u.target === u.currentTarget && g.current && v(), g.current = !1;
    },
    [v]
  ), x = p.useCallback(
    (u) => {
      if (!o.current) return;
      const m = h.current;
      if (m === null || !u.has(m))
        return;
      const y = d.findIndex(
        (S) => S.id === m
      );
      if (y === -1) return;
      let j = !1;
      for (let S = y + 1; S < d.length; S++) {
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
        for (let S = y - 1; S >= 0; S--) {
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
      const y = new Set(e), j = d.filter((S) => y.has(S.id));
      if (x(y), await _o(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e);
      for (const S of e) {
        const b = await vi(S);
        if (!o.current) return;
        for (const T of b)
          y.add(T.id);
      }
      const j = d.filter((S) => y.has(S.id));
      if (x(y), await _o(Array.from(y), n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(y)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ge.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: k,
        onMouseUp: w,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: v, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
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
                            tg,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: v, children: "Cancel" }),
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
}, om = ({ message: e }) => {
  const { dispatch: t } = pe(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Te({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(vf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, im = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = pe(), [l, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Te({ onEscape: h });
  const v = p.useRef(!1), g = (S) => {
    S.target === S.currentTarget && (v.current = !0);
  }, k = (S) => {
    S.target === S.currentTarget && v.current && h(), v.current = !1;
  }, w = t.images.find((S) => S.id === e), x = p.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], b = await Fg(e, S);
      a(b);
    } catch (S) {
      O.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    x();
  }, [x]);
  const _ = async (S) => {
    if (S == null) {
      O.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || S === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Pc(e, S), await Nf(e), await r(), h();
      } catch (b) {
        O.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Pc(e, null), await r(), h();
      } catch (S) {
        O.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const b = await gy(S), { id: T } = await Mf({
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
      O.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, m = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const b = S.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!w) return null;
  const y = l.filter((S) => S.is_source_match), j = l.filter((S) => !S.is_source_match);
  return ge.createPortal(
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
              w.id
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: h, children: /* @__PURE__ */ s.jsx(me, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            w.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(vg, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    w.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: ht(
                                          {
                                            filename: w.parent_filename,
                                            subfolder: w.parent_subfolder || "",
                                            type: w.parent_type || "output"
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
                                              children: w.parent_filename || "Unknown Image"
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
                                                w.parent_id
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
                      children: /* @__PURE__ */ s.jsx(yg, { size: 16 })
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
                  /* @__PURE__ */ s.jsx(Mg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((S) => {
                  const b = S.id === w.parent_id;
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
                  const b = S.id === w.parent_id;
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
}, Xy = () => {
  const { state: e, dispatch: t } = pe(), n = e.toastMessage;
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
}, Zy = () => {
  const { state: e, dispatch: t } = pe(), { executeWorkflow: n } = _i();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      sm,
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
      lm,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ul(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(im, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Df, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(tm, {}),
    e.activeModal.type === "tag_edit" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        nm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ge.createPortal(/* @__PURE__ */ s.jsx(om, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        am,
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
    e.activeModal.type === "mask_editor" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        ki,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        Wf,
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
    e.activeModal.type === "note_edit" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        rm,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        by,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ge.createPortal(
      /* @__PURE__ */ s.jsx(
        Yy,
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
    e.toastMessage && ge.createPortal(/* @__PURE__ */ s.jsx(Xy, {}), document.body)
  ] });
}, Jy = async (e) => {
  const t = await te.fetchApi("/meld/analytics", { signal: e == null ? void 0 : e.signal });
  return re(t);
}, ev = async (e, t) => {
  var i;
  const n = new URLSearchParams();
  n.set("limit", String(t.limit)), n.set("offset", String(t.offset)), t != null && t.sort && n.set("sort", t.sort), (i = t == null ? void 0 : t.q) != null && i.trim() && n.set("q", t.q.trim());
  const r = n.toString(), l = `/meld/analytics/${e}${r ? `?${r}` : ""}`, a = await te.fetchApi(l, { signal: t == null ? void 0 : t.signal }), o = await Qs(a);
  if (!o.success)
    throw new Error(o.error || "Failed to fetch analytics");
  return {
    data: o.data ?? [],
    total: o.total ?? 0
  };
}, tv = async (e) => {
  const t = await te.fetchApi("/meld/analytics/refresh", {
    method: "POST",
    signal: e == null ? void 0 : e.signal
  });
  await re(t);
}, nv = "_meldAnalytics__headerRow_9nv4x_3", rv = "_meldAnalytics__title_9nv4x_9", lv = "_meldAnalytics__controls_9nv4x_14", sv = "_meldAnalytics_9nv4x_3", av = "_meldAnalytics__totalCard_9nv4x_26", ov = "_meldAnalytics__totalCardTitle_9nv4x_37", iv = "_meldAnalytics__totalCardValue_9nv4x_46", cv = "_meldAnalytics__grid_9nv4x_54", dv = "_meldAnalytics__section_9nv4x_60", uv = "_meldAnalytics__sectionHeader_9nv4x_71", fv = "_meldAnalytics__sectionTitle_9nv4x_83", mv = "_meldAnalytics__item_9nv4x_94", pv = "_meldAnalytics__itemLabel_9nv4x_111", hv = "_meldAnalytics__itemCount_9nv4x_118", gv = "_meldAnalytics__seeAllBtn_9nv4x_128", yv = "_meldAnalytics__fullView_9nv4x_149", vv = "_meldAnalytics__fullViewToolbar_9nv4x_155", xv = "_meldAnalytics__toolbarBtn_9nv4x_162", wv = "_meldAnalytics__searchContainer_9nv4x_167", _v = "_meldAnalytics__searchIcon_9nv4x_179", kv = "_meldAnalytics__searchInput_9nv4x_184", Sv = "_meldAnalytics__fullList_9nv4x_197", jv = "_meldAnalytics__fullListItem_9nv4x_204", bv = "_meldAnalytics__refreshBtn_9nv4x_222", fe = {
  meldAnalytics__headerRow: nv,
  meldAnalytics__title: rv,
  meldAnalytics__controls: lv,
  meldAnalytics: sv,
  meldAnalytics__totalCard: av,
  meldAnalytics__totalCardTitle: ov,
  meldAnalytics__totalCardValue: iv,
  meldAnalytics__grid: cv,
  meldAnalytics__section: dv,
  meldAnalytics__sectionHeader: uv,
  meldAnalytics__sectionTitle: fv,
  meldAnalytics__item: mv,
  meldAnalytics__itemLabel: pv,
  meldAnalytics__itemCount: hv,
  meldAnalytics__seeAllBtn: gv,
  meldAnalytics__fullView: yv,
  meldAnalytics__fullViewToolbar: vv,
  meldAnalytics__toolbarBtn: xv,
  meldAnalytics__searchContainer: wv,
  meldAnalytics__searchIcon: _v,
  meldAnalytics__searchInput: kv,
  meldAnalytics__fullList: Sv,
  meldAnalytics__fullListItem: jv,
  meldAnalytics__refreshBtn: bv
}, Cv = {
  positive_prompts: "pos",
  negative_prompts: "neg",
  tags: "tag",
  models: "model",
  by_date: "date",
  by_resolution: "resolution"
};
function Ev(e, t) {
  const n = Cv[e];
  return n ? /[\s"]/.test(t) ? `${n}:"${t.replace(/"/g, '\\"')}"` : `${n}:${t}` : t;
}
function Nv(e) {
  return e.name !== void 0 ? e.name : e.date !== void 0 ? e.date : e.resolution !== void 0 ? e.resolution : "";
}
function Vc(e) {
  return Nv(e);
}
const Mv = ({ onClose: e, onSearchAndNavigate: t }) => {
  const { dispatch: n } = pe(), [r, l] = p.useState(null), [a, o] = p.useState(!0), [i, c] = p.useState(!1), [d, h] = p.useState(null), [v, g] = p.useState([]), [k, w] = p.useState(0), [x, _] = p.useState(!1), [f, u] = p.useState("count_desc"), [m, y] = p.useState(""), j = p.useRef(""), S = p.useRef(null);
  Te({
    onEscape: () => {
      d ? h(null) : e();
    }
  });
  const b = p.useCallback(async (A) => {
    o(!0);
    try {
      const P = await Jy({ signal: A });
      if (A != null && A.aborted) return;
      l(P);
    } catch (P) {
      if (A != null && A.aborted || P && typeof P == "object" && P.name === "AbortError")
        return;
      throw l(null), P;
    } finally {
      A != null && A.aborted || o(!1);
    }
  }, []);
  p.useEffect(() => {
    const A = new AbortController();
    return b(A.signal).catch(() => {
    }), () => A.abort();
  }, [b]);
  const T = p.useCallback(
    async (A, P, C, F) => {
      _(!0);
      try {
        const { data: Q, total: M } = await ev(A, {
          limit: 500,
          offset: 0,
          sort: P,
          q: C.trim() || void 0,
          signal: F
        });
        if (F != null && F.aborted) return;
        g(Q), w(M);
      } catch (Q) {
        if (F != null && F.aborted || Q && typeof Q == "object" && Q.name === "AbortError")
          return;
        throw g([]), w(0), Q;
      } finally {
        F != null && F.aborted || _(!1);
      }
    },
    []
  );
  p.useEffect(() => {
    if (!d) return;
    const A = j.current !== m;
    j.current = m;
    const P = new AbortController(), C = () => {
      T(d, f, m, P.signal).catch(() => {
      });
    };
    if (A) {
      const F = setTimeout(C, 300);
      return () => {
        clearTimeout(F), P.abort();
      };
    }
    return C(), () => P.abort();
  }, [d, f, m, T]);
  const L = p.useCallback(async () => {
    var C;
    (C = S.current) == null || C.abort();
    const A = new AbortController();
    S.current = A;
    const P = A.signal;
    c(!0);
    try {
      if (await tv({ signal: P }), P.aborted || (await b(P), P.aborted) || (d && await T(d, f, m, P), P.aborted)) return;
      n({ type: "SHOW_TOAST", payload: "Analytics refreshed" });
    } catch (F) {
      if (P.aborted) return;
      const Q = F instanceof Error ? F.message : typeof F == "string" ? F : "Unknown error";
      n({
        type: "SHOW_TOAST",
        payload: `Analytics refresh failed: ${Q}`
      });
    } finally {
      P.aborted || c(!1);
    }
  }, [b, T, d, f, m, n]);
  p.useEffect(() => () => {
    var A;
    (A = S.current) == null || A.abort();
  }, []);
  const D = p.useCallback(
    (A, P) => {
      const C = Ev(A, P);
      t ? t(C) : e();
    },
    [t, e]
  ), N = (A, P, C) => /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__section, children: [
    /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__sectionHeader, children: [
      /* @__PURE__ */ s.jsx("h3", { className: fe.meldAnalytics__sectionTitle, children: A }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: fe.meldAnalytics__seeAllBtn,
          onClick: () => {
            h(P), y(""), u("count_desc");
          },
          children: [
            "See all ",
            /* @__PURE__ */ s.jsx(rg, { size: 14 })
          ]
        }
      )
    ] }),
    C.map((F, Q) => {
      const M = Vc(F);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          role: "button",
          tabIndex: 0,
          className: fe.meldAnalytics__item,
          onClick: () => D(P, M),
          onKeyDown: (E) => {
            (E.key === "Enter" || E.key === " ") && (E.preventDefault(), D(P, M));
          },
          children: [
            /* @__PURE__ */ s.jsx("span", { className: fe.meldAnalytics__itemLabel, children: M }),
            /* @__PURE__ */ s.jsx("span", { className: fe.meldAnalytics__itemCount, children: F.count })
          ]
        },
        `${M}-${Q}`
      );
    })
  ] }, P);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-analytics-header", children: [
      /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__headerRow, children: [
        /* @__PURE__ */ s.jsx(_f, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { className: fe.meldAnalytics__title, children: "Image Analytics" })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__controls, children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: fe.meldAnalytics__refreshBtn,
            onClick: L,
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
            children: /* @__PURE__ */ s.jsx(me, { size: 16 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-analytics-content", children: d ? /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__fullView, children: [
      /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__fullViewToolbar, children: [
        /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__searchContainer, children: [
          /* @__PURE__ */ s.jsx(yn, { size: 14, className: fe.meldAnalytics__searchIcon }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: fe.meldAnalytics__searchInput,
              placeholder: "Filter...",
              value: m,
              onChange: (A) => y(A.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${fe.meldAnalytics__toolbarBtn}`,
            onClick: () => u((A) => A === "count_desc" ? "count_asc" : "count_desc"),
            title: f === "count_desc" ? "Sort ascending" : "Sort descending",
            children: [
              f === "count_desc" ? /* @__PURE__ */ s.jsx(ng, { size: 14 }) : /* @__PURE__ */ s.jsx(sg, { size: 14 }),
              f === "count_desc" ? "Desc" : "Asc"
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: `meld-btn meld-btn--secondary ${fe.meldAnalytics__toolbarBtn}`,
            onClick: () => h(null),
            children: "Back"
          }
        )
      ] }),
      x ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading..." }) : /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__fullList, children: [
        v.map((A, P) => {
          const C = Vc(A);
          return /* @__PURE__ */ s.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              className: fe.meldAnalytics__fullListItem,
              onClick: () => D(d, C),
              onKeyDown: (F) => {
                (F.key === "Enter" || F.key === " ") && (F.preventDefault(), D(d, C));
              },
              children: [
                /* @__PURE__ */ s.jsxs("span", { className: fe.meldAnalytics__itemLabel, children: [
                  P + 1,
                  ". ",
                  C
                ] }),
                /* @__PURE__ */ s.jsx("span", { className: fe.meldAnalytics__itemCount, children: A.count })
              ]
            },
            `${C}-${P}`
          );
        }),
        v.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No items found." })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { style: { fontSize: 12, color: "var(--meld-text-secondary)" }, children: [
        k,
        " total"
      ] })
    ] }) : a ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading analytics..." }) : r ? /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics, children: [
      /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__totalCard, children: [
        /* @__PURE__ */ s.jsx("div", { className: fe.meldAnalytics__totalCardTitle, children: "Total Images" }),
        /* @__PURE__ */ s.jsx("div", { className: fe.meldAnalytics__totalCardValue, children: r.total_images.toLocaleString() })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: fe.meldAnalytics__grid, children: [
        N(
          "Positive Prompt (top 5)",
          "positive_prompts",
          r.positive_prompts
        ),
        N(
          "Negative Prompt (top 5)",
          "negative_prompts",
          r.negative_prompts
        ),
        N("Tag (top 5)", "tags", r.tags),
        N("Model (top 5)", "models", r.models),
        N("Created Date (top 5)", "by_date", r.by_date),
        N("Resolution (top 5)", "by_resolution", r.by_resolution)
      ] })
    ] }) : /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "Failed to load analytics." }) })
  ] });
}, Iv = () => {
  const { state: e, dispatch: t } = pe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await _y(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      O.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ s.jsx(Cf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(ig, { size: 14, className: "meld-success-icon" }),
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
}, Si = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Tv = Object.keys(Si), Bc = /* @__PURE__ */ new Map(), Qc = "data-meld-portal-root";
let _a = null, ka = null;
const Hc = ".comfyui-body-bottom";
function Kc(e) {
  var n, r, l, a;
  const t = `[${Qc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== 1) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Qc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Hc) || (a = c.querySelector) != null && a.call(c, Hc)) return !0;
  }
  return !1;
}
function Lv(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Av(e) {
  const t = Si[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function cm(e) {
  const t = Si[e], n = Bc.get(e) ?? Av(e);
  Bc.set(e, n);
  const r = Lv(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function dm() {
  for (const e of Tv)
    cm(e);
}
function Gc() {
  ka === null && (ka = requestAnimationFrame(() => {
    ka = null, dm();
  }));
}
function um(e) {
  return cm(e);
}
function Rv() {
  _a || typeof document > "u" || !document.body || (dm(), _a = new MutationObserver((e) => {
    for (const t of e) {
      if (Kc(t.addedNodes)) {
        Gc();
        return;
      }
      if (Kc(t.removedNodes)) {
        Gc();
        return;
      }
    }
  }), _a.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Ks = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  p.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Dv = () => {
  const { state: e } = pe(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = p.useCallback(
    (a) => {
      if (qy())
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
  Ks({ onKeyDown: l, enabled: r });
}, fm = ({ message: e, onConfirm: t, onCancel: n }) => (Te({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
}, Pv = (e, t, n, r, l) => {
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
        O.warn("move_folder action is not yet implemented"), l == null || l();
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
        O.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, zv = ({ config: e }) => {
  var U;
  const t = se((I) => I.buckets), n = se((I) => I.slots), r = se((I) => I.images), l = n.length, { state: a, dispatch: o } = pe(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [v, g] = p.useState(!1), [k, w] = p.useState(e.label), [x, _] = p.useState(e.color), [f, u] = p.useState([]), [m, y] = p.useState(null), j = p.useRef(null), S = p.useRef(null);
  ml({
    enabled: i,
    insideRefs: [S],
    onOutside: () => c(!1)
  }), ml({
    enabled: v,
    insideRefs: [j],
    onOutside: () => g(!1)
  });
  const b = t[e.id] || [], T = b.length, L = b.map((I) => {
    const z = Number(I);
    let W = a.images.find(($) => $.id === z);
    return W || (W = a.lineageImages.find(($) => $.id === z)), W || (W = r[I]), W;
  }).filter(Boolean);
  p.useEffect(() => {
    u((I) => {
      const z = I.filter((W) => b.includes(String(W)));
      return z.length !== I.length ? z : I;
    });
  }, [b]);
  const D = f.filter((I) => b.includes(String(I))), N = D.length > 0, A = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.add("drag-over");
  }, P = (I) => {
    I.currentTarget.classList.remove("drag-over");
  }, C = (I) => {
    I.preventDefault(), I.stopPropagation(), I.currentTarget.classList.remove("drag-over");
    const z = I.dataTransfer.getData("text/plain");
    z && z.split(",").forEach(($) => {
      if ($) {
        const H = $.trim(), Z = Number(H);
        let ie = a.images.find((de) => de.id === Z);
        ie || (ie = a.lineageImages.find((de) => de.id === Z)), se.getState().addToBucket(e.id, H, ie);
      }
    });
  }, F = (I, z) => {
    I.stopPropagation();
    let W = [z];
    D.includes(z) ? W = D : (u([z]), y(z)), I.dataTransfer.setData("text/plain", W.join(",")), I.dataTransfer.setData("application/meld-lt-source-slot", e.id), I.dataTransfer.effectAllowed = "move";
  }, Q = (I, z) => {
    if (I.dataTransfer.dropEffect === "none") {
      const W = D.includes(z) ? D : [z];
      W.forEach(($) => {
        se.getState().removeFromBucket(e.id, String($));
      }), u(($) => $.filter((H) => !W.includes(H)));
    }
  }, M = (I) => {
    if (T === 0) return;
    const z = {
      type: I
    }, W = N ? D : b.map(Number);
    if (W.length === 0) return;
    const $ = W.map((ie) => L.find((de) => de.id === ie)).filter(Boolean), H = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Pv(z, W, $, o, () => {
      se.getState().showToast(H[I] ?? "Done");
    });
  }, E = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, R = () => {
    const I = se.getState();
    I.slots.length <= 1 || (I.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: A,
      onDragLeave: P,
      onDrop: C,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: T === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : L.map((I) => {
          const z = ht(I);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${D.includes(I.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (W) => {
                if (W.ctrlKey || W.metaKey)
                  u(
                    ($) => $.includes(I.id) ? $.filter((H) => H !== I.id) : [...$, I.id]
                  ), y(I.id);
                else if (W.shiftKey && m !== null) {
                  const $ = L.findIndex((Z) => Z.id === I.id), H = L.findIndex((Z) => Z.id === m);
                  if ($ !== -1 && H !== -1) {
                    const Z = Math.min($, H), ie = Math.max($, H), de = L.slice(Z, ie + 1).map((Pe) => Pe.id);
                    u((Pe) => Array.from(/* @__PURE__ */ new Set([...Pe, ...de])));
                  }
                  y(I.id);
                } else
                  u([]), y(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: I.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (W) => F(W, I.id),
              onDragEnd: (W) => Q(W, I.id),
              children: /* @__PURE__ */ s.jsx("img", { src: z, alt: I.filename, draggable: !1 })
            },
            I.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: j, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => g(!v),
                disabled: T === 0,
                title: "Actions",
                children: [
                  N ? `Action (${D.length})` : "Action",
                  /* @__PURE__ */ s.jsx(cg, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: wr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: yi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Ig
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
            ].map((I) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${I.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in I && I.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (z) => z.stopPropagation(),
                onClick: () => {
                  "disabled" in I && I.disabled || (M(I.type), g(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(I.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: I.label })
                ]
              },
              I.type
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
              children: /* @__PURE__ */ s.jsx(ug, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(bf, { size: 14 })
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
                    onChange: (I) => w(I.target.value),
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
                          value: x.startsWith("var") ? ((U = x.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : U[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
                          onChange: (I) => _(I.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: x,
                          onChange: (I) => _(I.target.value),
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
                    const I = se.getState(), z = k.trim();
                    if (!z) {
                      I.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (I.slots.some(
                      ($) => $.id !== e.id && ($.label.toLowerCase() === z.toLowerCase() || $.id.toLowerCase() === z.toLowerCase())
                    )) {
                      I.showToast(`Error: "${z}" is already in use`, "error");
                      return;
                    }
                    I.updateSlot(e.id, {
                      label: z,
                      color: x
                    }), c(!1), I.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: R,
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
          fm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: E,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Ov = () => {
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
}, Fv = () => {
  var k;
  Dv();
  const e = se((w) => w.isOpen), t = se((w) => w.setIsOpen), [n, r] = p.useState(!1);
  Te({
    onEscape: () => t(!1),
    enabled: e && !n
  }), p.useEffect(() => {
    e || r(!1);
  }, [e]);
  const l = se((w) => w.slots), a = se((w) => w.buckets), { state: o } = pe(), [i, c] = p.useState(((k = l[0]) == null ? void 0 : k.id) || "keep"), d = um("lightTable");
  if (!e) return null;
  const h = () => {
    const w = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: w,
      label: `Tab ${l.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(w);
  }, v = () => {
    l.forEach((w) => {
      se.getState().clearBucket(w.id);
    }), se.getState().showToast("All tabs cleared"), r(!1);
  }, g = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      l.map((w) => {
        var x;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === w.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(w.id),
            style: { "--tab-color": w.color },
            onDragOver: (_) => {
              _.preventDefault(), c(w.id);
            },
            onDrop: (_) => {
              _.preventDefault();
              const f = _.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((m) => {
                if (m) {
                  const y = m.trim(), j = o.images.find((S) => String(S.id) === y);
                  se.getState().addToBucket(w.id, y, j);
                }
              });
            },
            children: [
              w.label,
              "  (",
              ((x = a[w.id]) == null ? void 0 : x.length) || 0,
              ")"
            ]
          },
          w.id
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
          children: /* @__PURE__ */ s.jsx(Bs, { size: 16 })
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
            /* @__PURE__ */ s.jsx(Cg, { size: 14 }),
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
          children: /* @__PURE__ */ s.jsx(me, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: l.map((w) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === w.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(zv, { config: w })
      },
      w.id
    )) }),
    n && /* @__PURE__ */ s.jsx(
      fm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Ov, {})
  ] });
  return ge.createPortal(g, d);
}, mm = () => {
  const { state: e, refreshFavorites: t } = pe(), [n, r] = p.useState(!1), [l, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, v] = p.useState(""), [g, k] = p.useState("");
  p.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const w = p.useCallback(
    async (u, m, y) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${y}"?`;
      if (window.confirm(j))
        try {
          await Fc(m), await t();
        } catch (S) {
          O.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), x = p.useCallback((u, m) => {
    u.stopPropagation(), d(m), v(m.name), k(m.query);
  }, []), _ = p.useCallback(async () => {
    if (!(!c || !h.trim() || !g.trim()))
      try {
        r(!0), await Zg(c.id, h, g), await t(), d(null);
      } catch (u) {
        O.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, g, t]), f = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((m) => m.query === e.searchQuery)) {
      const m = e.favorites.find((y) => y.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          return await Fc(m.id), await t(), !0;
        } catch (y) {
          return O.error("Failed to delete favorite:", y), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Xg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (m) {
      return O.error("Failed to save favorite:", m), !1;
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
    editFavoriteQuery: g,
    setEditFavoriteQuery: k,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, m = "info") => {
      a(u), i(m);
    }
  };
}, pm = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
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
                  children: /* @__PURE__ */ s.jsx(jf, { size: 14 })
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
}, $v = "_menu_jab2z_1", Wv = "_header_jab2z_14", Uv = "_title_jab2z_23", Vv = "_count_jab2z_32", Bv = "_list_jab2z_37", Qv = "_toast_jab2z_46", Hv = "_editTitle_jab2z_56", Kv = "_form_jab2z_62", Gv = "_fieldGroup_jab2z_69", qv = "_label_jab2z_75", Yv = "_input_jab2z_81", Xv = "_textarea_jab2z_82", qe = {
  menu: $v,
  header: Wv,
  title: Uv,
  count: Vv,
  list: Bv,
  toast: Qv,
  editTitle: Hv,
  form: Kv,
  fieldGroup: Gv,
  label: qv,
  input: Yv,
  textarea: Xv
}, Zv = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = pe(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: g,
    handleEditFavorite: k,
    handleSaveEditFavorite: w
  } = mm(), [x, _] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
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
  }, [o]), e ? ge.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${qe.menu} meld-favorites-context-menu`,
          style: {
            top: x.top,
            left: x.left
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
              pm,
              {
                fav: m,
                onSelect: (y) => {
                  n(y), t();
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
                      children: /* @__PURE__ */ s.jsx(me, { size: 20 })
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
                          m.key === "Enter" && (Xe(m), w()), m.key === "Escape" && (Xe(m), i(null));
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
                        onChange: (m) => v(m.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: qe.textarea,
                        onKeyDown: (m) => {
                          m.key === "Enter" && !m.shiftKey && (Xe(m), w()), m.key === "Escape" && (Xe(m), i(null));
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
                      onClick: w,
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
}, Jv = () => {
  const { state: e, dispatch: t, updateSetting: n } = pe(), [r, l] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [v, g] = p.useState([]), k = e.settings["search.show_all_keywords"], [w, x] = p.useState(-1), [_, f] = p.useState(null), u = p.useRef(null), m = p.useRef(e.searchQuery), y = p.useCallback(async () => {
    if (v.length > 0) return;
    const M = await Gg();
    g(M);
  }, [v.length]);
  p.useEffect(() => {
    qg().then((M) => {
      f(M);
    }), k && y();
  }, [y, k]);
  const j = p.useMemo(() => {
    if (!_) return null;
    const M = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${M}):(.*)$`, "i");
  }, [_]), S = p.useCallback(() => {
    const M = !k;
    M && y(), n("search.show_all_keywords", M);
  }, [k, y, n]), b = r !== m.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    Kg().then((M) => {
      h(M);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var M;
    (M = u.current) == null || M.focus();
  }, []);
  const T = p.useCallback(
    (M, E = !0) => {
      m.current !== M && (O.log("SearchBar: triggering search", { query: M }), t({ type: "SET_SEARCH_QUERY", payload: M }), E && c(!1), m.current = M);
    },
    [t]
  );
  p.useEffect(() => {
    const M = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const E = Wl(r), R = E[E.length - 1];
      if (R) {
        const U = R.match(j);
        if (U) {
          const I = U[1];
          let z = U[2];
          if (!I || z === void 0) {
            o([]), c(!1);
            return;
          }
          const W = I.toLowerCase();
          z.startsWith('"') && (z = z.substring(1)), z.endsWith('"') && (z = z.substring(0, z.length - 1));
          const $ = await Hg(z, W);
          o($), c($.length > 0), x(-1);
        } else {
          const I = R.replace(/^([-!])/, "").toLowerCase();
          if (I && _) {
            const z = _.all_prefixes.filter((W) => W.startsWith(I)).map((W) => ({
              type: W,
              value: "",
              count: 0
            }));
            if (z.length > 0) {
              o(z), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(M);
  }, [r, e.settings["search.input_suggest"], j, _]);
  const L = p.useCallback(
    (M) => {
      var $;
      if (!M) return;
      const E = Wl(r), U = (E.pop() || "").match(/^([-!])/), I = U ? U[1] : "", W = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(M.type);
      if (M.value === "") {
        const H = `${[...E, `${I}${M.type}:`].join(" ").trim()}`;
        l(H);
      } else {
        const H = W ? M.value : `"${M.value}"`, Z = `${[...E, `${I}${M.type}:${H}`].join(" ").trim()} `;
        l(Z), o([]), c(!1);
      }
      ($ = u.current) == null || $.focus();
    },
    [r, _]
  ), D = (M) => {
    if (M)
      if (M.key === "Enter")
        if (Xe(M), i && w >= 0) {
          const E = a[w];
          E && L(E);
        } else
          T(r);
      else if (M.key === "Tab") {
        if (i && a.length > 0) {
          Xe(M);
          const E = w >= 0 ? w : 0, R = a[E];
          R && L(R);
        }
      } else M.key === "ArrowDown" ? i && (Xe(M), x((E) => Math.min(E + 1, a.length - 1))) : M.key === "ArrowUp" ? i && (Xe(M), x((E) => Math.max(E - 1, -1))) : M.key === "Escape" && (Xe(M), c(!1));
  }, N = p.useCallback(() => {
    l(""), T("");
  }, [T]), A = p.useCallback(
    (M, E, R = !1) => {
      var Et;
      if (!M) return;
      const U = Wl(r), I = U[U.length - 1] || "";
      let z = !1;
      const W = I.replace(/^([-!])/, "").toLowerCase();
      W && M.toLowerCase().startsWith(W) && (z = !0);
      const $ = I.match(/^([-!])/), H = z && $ ? $[1] : "";
      if (z && U.pop(), R) {
        const q = [...U, `${H}${M}:`].filter(Boolean).join(" ");
        l(q), (Et = u.current) == null || Et.focus();
        return;
      }
      const de = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(M) ? E : `"${E}"`, Pe = `${H}${M}:${de}`, ue = [...U, Pe].filter(Boolean).join(" ");
      l(ue), T(ue);
    },
    [r, T, _]
  ), P = p.useCallback(
    (M) => {
      l(M), M || T("");
    },
    [T]
  ), C = p.useCallback(() => {
    if (r === m.current || !j) return;
    const M = Wl(r), E = M[M.length - 1];
    if (!E) return;
    const R = !!E.match(j), U = E.replace(/^([-!])/, "").toLowerCase(), I = U && (_ == null ? void 0 : _.all_prefixes.some((z) => z.startsWith(U)));
    (R || I) && c(!0);
  }, [r, j, _]), F = p.useRef(null), Q = p.useCallback(() => {
    F.current = setTimeout(() => c(!1), 200);
  }, []);
  return p.useEffect(() => () => {
    F.current && clearTimeout(F.current);
  }, []), {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: k,
    toggleShowAllKeywords: S,
    selectedIndex: w,
    setSelectedIndex: x,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: T,
    handleKeyDown: D,
    applySuggestion: L,
    clearSearch: N,
    applySearchSuggestion: A,
    handleInputChange: P,
    handleInputFocus: C,
    handleInputBlur: Q
  };
}, qc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(wr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(ag, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Eg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(og, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(wf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(xf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(fg, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(lg, { size: 12 });
    default:
      return null;
  }
}, ex = ({
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
  favorites: g,
  onSelectFavorite: k,
  onEditFavorite: w,
  onDeleteFavorite: x
}) => {
  const _ = (y, j, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(y.type, y.value, S === "all"),
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
            children: qc(y.type)
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
            children: y.type
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
            children: y.value
          }
        )
      ]
    },
    `${S}-${y.type}:${y.value}:${j}`
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
      children: t.map((y, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(y);
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
                    children: qc(y.type)
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
                      width: y.type.length > 8 ? "auto" : "60px",
                      flexShrink: 0
                    },
                    children: [
                      y.type,
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: y.value === St ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: y.value === St ? "bold" : "normal"
                    },
                    children: y.value === St ? y.type === "tag" ? `Untagged (${St})` : `No ${y.type} (${St})` : y.value
                  }
                )
              ]
            }
          )
        },
        `${y.type}:${y.value}`
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
            children: i.map((y, j) => _(y, j, "quick"))
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
                  children: Array.from(new Set(c.map((y) => y.type))).map(
                    (y, j) => _({ type: y, value: "" }, j, "all")
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
            children: g.map((y) => /* @__PURE__ */ s.jsx(
              pm,
              {
                fav: y,
                onSelect: k,
                onEdit: w,
                onDelete: x
              },
              y.id
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
      onMouseDown: (y) => {
        y.preventDefault();
      },
      children: [
        f(),
        u(),
        m()
      ]
    }
  );
}, tx = () => {
  const { state: e } = pe(), {
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
    isQueryChanged: g,
    handleSearch: k,
    handleKeyDown: w,
    applySuggestion: x,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: y
  } = Jv(), {
    isSaving: j,
    toastMessage: S,
    toastType: b,
    editingFavorite: T,
    setEditingFavorite: L,
    editFavoriteName: D,
    setEditFavoriteName: N,
    editFavoriteQuery: A,
    setEditFavoriteQuery: P,
    handleDeleteFavorite: C,
    handleEditFavorite: F,
    handleSaveEditFavorite: Q,
    handleSaveFavorite: M,
    setToastMessage: E
  } = mm(), R = async () => {
    const $ = e.favorites.some((Z) => Z.query === e.searchQuery);
    await M() && E(
      $ ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Te({
    onEscape: () => L(null),
    enabled: !!T
  });
  const U = p.useRef(null), I = p.useRef(!1);
  p.useEffect(() => {
    T && U.current && U.current.focus();
  }, [T]);
  const z = ($) => {
    $.target === $.currentTarget && (I.current = !0);
  }, W = ($) => {
    $.target === $.currentTarget && I.current && L(null), I.current = !1;
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
                    onMouseEnter: ($) => {
                      $.currentTarget.style.transform = "translateY(-1px)", g ? ($.currentTarget.style.filter = "brightness(1.15)", $.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : $.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: ($) => {
                      $.currentTarget.style.transform = "none", g ? ($.currentTarget.style.filter = "none", $.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : $.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: ($) => {
                      $.currentTarget.style.transform = "translateY(1px)", $.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: ($) => {
                      $.currentTarget.style.transform = "translateY(-1px)";
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
                    ref: v,
                    type: "text",
                    value: t,
                    onChange: ($) => u($.target.value),
                    onKeyDown: w,
                    onBlur: y,
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
                    onClick: R,
                    disabled: j,
                    title: e.favorites.some(($) => $.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        color: e.favorites.some(($) => $.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some(($) => $.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                    children: /* @__PURE__ */ s.jsx(me, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            ex,
            {
              showSuggestions: l,
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
              onSelectFavorite: ($) => {
                n($), k($);
              },
              onEditFavorite: F,
              onDeleteFavorite: C
            }
          )
        ] }),
        T && ge.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: z,
              onMouseUp: W,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: ($) => $.stopPropagation(),
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
                          children: /* @__PURE__ */ s.jsx(me, { size: 20 })
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
                                    ref: U,
                                    type: "text",
                                    value: D,
                                    onChange: ($) => N($.target.value),
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
                                    onKeyDown: ($) => {
                                      $.key === "Enter" && (Xe($), Q()), $.key === "Escape" && (Xe($), L(null));
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
                                    onChange: ($) => P($.target.value),
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
                                    onKeyDown: ($) => {
                                      $.key === "Enter" && !$.shiftKey && (Xe($), Q()), $.key === "Escape" && (Xe($), L(null));
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
                          disabled: j || !D.trim() || !A.trim(),
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
}, nx = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [l, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, v] = p.useState(!1), [g, k] = p.useState(null), [w, x] = p.useState(""), [_, f] = p.useState(!1), u = p.useRef(null), m = p.useCallback(async () => {
    a(!0);
    try {
      const N = await wi();
      r(N);
    } catch (N) {
      O.error("Failed to fetch tags:", N);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    m();
  }, [m]), p.useEffect(() => {
    g !== null && u.current && (u.current.focus(), u.current.select());
  }, [g]);
  const y = async (N) => {
    N.preventDefault();
    const A = c.trim();
    if (!(!A || h)) {
      if (A.toLowerCase() === St) {
        alert(`Tag name '${St}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((P) => P.name.toLowerCase() === A.toLowerCase())) {
        alert(`Tag "${A}" already exists.`);
        return;
      }
      v(!0);
      try {
        await fy(A), d(""), await m();
      } catch (P) {
        O.error("Failed to add tag:", P);
      } finally {
        v(!1);
      }
    }
  }, j = async (N, A) => {
    if (confirm(`Are you sure you want to delete tag "${A}"?`))
      try {
        await my(N), await m();
      } catch (P) {
        O.error("Failed to delete tag:", P);
      }
  }, S = (N) => {
    k(N.id), x(N.name);
  }, b = () => {
    k(null), x("");
  }, T = async (N) => {
    N.preventDefault();
    const A = w.trim();
    if (!A || g === null || _) return;
    if (A.toLowerCase() === St) {
      alert(`Tag name '${St}' is reserved for search and cannot be used.`);
      return;
    }
    const P = n.find((C) => C.id === g);
    if (P && P.name === A) {
      b();
      return;
    }
    if (n.some((C) => C.id !== g && C.name.toLowerCase() === A.toLowerCase())) {
      alert(`Tag "${A}" already exists.`);
      return;
    }
    f(!0);
    try {
      await py(g, A), b(), await m();
    } catch (C) {
      O.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, L = (N) => {
    t(`tag:${N}`);
  }, D = p.useMemo(() => n.filter((N) => N.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(wr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(me, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (N) => d(N.target.value),
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
              /* @__PURE__ */ s.jsx(Bs, { size: 14 }),
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
            onChange: (N) => i(N.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((N) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: g === N.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: T, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: u,
            className: "meld-tag-rename-input",
            value: w,
            onChange: (A) => x(A.target.value),
            onKeyDown: (A) => A.key === "Escape" && b()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: _ || !w.trim(),
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
            children: /* @__PURE__ */ s.jsx(me, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: N.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => L(N.name),
              children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(N),
              children: /* @__PURE__ */ s.jsx(jf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(N.id, N.name),
              children: /* @__PURE__ */ s.jsx(Qt, { size: 14 })
            }
          )
        ] })
      ] }) }, N.id)) })
    ] })
  ] });
}, Sa = 56, hm = (e, t) => {
  const n = p.useCallback(async (l) => vi(l), []), r = p.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: ht(h, Sa)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = ht(i, Sa) : c = ht(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        Sa
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
}, Yc = ({
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
}, rx = ({
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
  handlePrevious: v,
  handleEditTags: g,
  handleRestore: k,
  fetchLineage: w,
  restoreImages: x,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = p.useState(null), [m, y] = p.useState(
    null
  ), j = p.useCallback(
    async (N = !1) => {
      if (!n) return;
      const A = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!N && A === "confirm") {
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
        const P = e.viewScope === "trash", C = /* @__PURE__ */ new Set([n.id]);
        let F = [];
        if (A === "lineage") {
          F = await w(n.id);
          for (const Q of F)
            C.add(Q.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await _o(Array.from(C), P), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Yc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: C,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(C)
        }), !P) {
          const Q = [
            ...l,
            ...F,
            ...i,
            ...c
          ], M = /* @__PURE__ */ new Map();
          for (const R of Q)
            M.set(R.id, R);
          const E = Array.from(C).map((R) => {
            const U = M.get(R);
            return U || {
              id: R,
              filename: `deleted_${R}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          u(E), y(null);
        }
      } catch (P) {
        t({
          type: "SET_ERROR",
          payload: P instanceof Error ? P.message : String(P)
        });
      }
    },
    [
      a,
      l,
      t,
      n,
      w,
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
    const N = f.map((A) => A.id);
    try {
      const A = await x(N);
      if (!d.isMountedRef.current) return;
      const P = A.restored_ids || N, C = new Set(P), F = f.filter((M) => C.has(M.id));
      if (F.length > 0 && t({ type: "ADD_IMAGES", payload: F }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: P }), u(null), !d.isMountedRef.current) return;
      const Q = P[0];
      Q !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: Q,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (A) {
      t({
        type: "SET_ERROR",
        payload: A instanceof Error ? A.message : String(A)
      });
    }
  }, [
    t,
    f,
    d.isMountedRef,
    x,
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
    const { imageId: N, addTags: A, removeTags: P } = m;
    try {
      await _([N], A, P);
      const C = (o === "lineage" ? i : c).find(
        (F) => F.id === N
      );
      if (C) {
        const F = [...C.tags];
        for (const M of A)
          F.includes(M) || F.push(M);
        const Q = F.filter((M) => !P.includes(M));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...C, tags: Q }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: N,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      y(null);
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
  ]), D = p.useCallback(
    async (N) => {
      if (!N || typeof N != "string" || !n) return;
      const A = n.id, P = [...n.tags], C = Wy(N, n), { addTags: F, removeTags: Q, isDeleted: M, moveNext: E, movePrev: R, sendToLtSlot: U } = C;
      if (U) {
        const I = se.getState(), z = I.slots.find(
          (W) => W.id.toLowerCase() === U.toLowerCase() || W.label.toLowerCase() === U.toLowerCase()
        );
        z ? (I.addToBucket(z.id, String(A), n), I.showToast(`Sent to ${z.label}`), M || Yc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([A]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [A]
        })) : (I.showToast(`Error: Light Table slot "${U}" not found`, "error"), O.warn(`Attempted to send to non-existent LT slot: ${U}`));
      }
      if (F.length > 0 || Q.length > 0)
        try {
          await _([A], F, Q);
          const I = [...P];
          for (const W of F)
            I.includes(W) || I.push(W);
          const z = I.filter((W) => !Q.includes(W));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: A, tags: z }
          }), y({
            type: "tags",
            imageId: A,
            addTags: [...Q],
            removeTags: [...F]
          }), u(null);
        } catch (I) {
          O.error("Failed to update tags via shortcut:", I), t({
            type: "SET_ERROR",
            payload: I instanceof Error ? I.message : String(I)
          });
        }
      M ? await j(!0) : E ? h() : R && await v();
    },
    [
      a,
      l,
      t,
      _,
      j,
      h,
      v,
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
    executeCommand: D
  };
}, lx = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        O.error(`Error attempting to enable full-screen mode: ${c.message}`);
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
}, sx = ({
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
  handleTagEditAction: v,
  handleRestoreAction: g,
  executeCommand: k,
  setShowDetails: w,
  setActiveShortcutKey: x
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
      const y = f.key === "Delete" || f.key === "Backspace", j = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", S = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), b = f.key === "Escape", T = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), L = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (y || j || S || b || T || L)
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
        w((D) => !D);
      else if (S && (f.key === "t" || f.key === "T"))
        v();
      else if (S && (f.key === "r" || f.key === "R") && n === "trash")
        g();
      else if (y)
        d();
      else if (T)
        h();
      else if (L && !m) {
        const D = `viewer.shortcut.${f.key}`, N = r[D];
        typeof N == "string" && N && (x(f.key), setTimeout(() => {
          a.current && x(null);
        }, 500), k(N));
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
      v,
      h,
      a,
      x,
      w,
      r,
      o,
      n,
      e
    ]
  );
  Ks({
    enabled: e !== null,
    onKeyDown: _
  });
}, ax = ({
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
      o(!0), vi(t).then((h) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        O.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, ox = ({
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
  const v = a === "lighttable" ? r : void 0, g = p.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), k = p.useCallback(async () => {
    const w = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && w) {
      d(!0);
      try {
        const x = o.limit, _ = o.total, f = Math.max(0, _ - x), u = await ns(f, x, i);
        if (!h.isMountedRef.current) return;
        const m = ts(u, {
          total: o.total,
          offset: f,
          limit: x
        });
        if (e({ type: "APPEND_IMAGES", payload: m }), h.viewerImageIdRef.current === null) return;
        if (m.images.length > 0) {
          const y = m.images.at(-1);
          if (!y) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: y.id, mode: "gallery" }
          });
        }
      } catch (x) {
        O.error("Failed to jump to end:", x);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: v }
      });
  }, [
    v,
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
function ix(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? l || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const cx = ({
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
    const h = t.map((_) => _.id), v = h.indexOf(e);
    if (v === -1) return;
    const g = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: k, nextId: w } = ix({
      ids: h,
      index: v,
      loopEnabled: g,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const _ = [k, w].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then((f) => {
        for (const u of f)
          u.status === "rejected" && O.warn("Prefetching adjacent image details failed", u.reason);
      });
    }, 50);
    return () => clearTimeout(x);
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
    const h = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const g of h)
        if (g >= 0 && g < t.length) {
          const k = t[g];
          if (!k) continue;
          const w = new Image();
          w.src = xi(k);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function dx(e) {
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
const ux = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var xl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: v,
    handleEditNotes: g,
    handleRestore: k,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: m,
    handleEditSource: y
  } = Hs(e, t), { getParentChain: j, fetchLineage: S } = hm(a, c), [b, T] = p.useState(!1), [L, D] = p.useState(c["viewer.show_details_by_default"]), [N, A] = p.useState(null), P = N ?? c["viewer.show_thumbnails"], [C, F] = p.useState(!1), [Q, M] = p.useState(null), E = p.useRef(null), R = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(l)
  };
  p.useEffect(() => (R.isMountedRef.current = !0, () => {
    R.isMountedRef.current = !1;
  }), [R.isMountedRef]), p.useEffect(() => {
    R.viewerImageIdRef.current = l;
  }, [R.viewerImageIdRef, l]);
  const U = p.useMemo(() => {
    const Ce = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const it = se.getState(), vt = it.buckets[e.viewerLightTableSlotId] || [], Dt = new Map(a.map((K) => [K.id, K])), V = new Map(i.map((K) => [K.id, K]));
      return vt.map((K) => {
        const ee = Number.parseInt(K, 10);
        return Dt.get(ee) || V.get(ee) || it.images[K] || dx(ee);
      });
    }
    return o === "lineage" ? i : a.filter(
      (it) => it.exists !== !1 && (c["gallery.show_parent_images"] || Ce || !it.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), I = l === null ? -1 : U.findIndex((Ce) => Ce.id === l), W = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? U : a).find((Ce) => Ce.id === l) || (l === ((xl = e.viewerFallbackImage) == null ? void 0 : xl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: $, toggleFullscreen: H } = lx({
    overlayRef: E,
    settings: c,
    setShowDetails: D
  }), { handleNext: Z, handlePrevious: ie } = ox({
    dispatch: t,
    isFullscreen: $,
    settings: c,
    currentThumbnails: U,
    currentIndex: I,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: C,
    setIsJumping: F,
    mountRefs: R
  }), {
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    handleDelete: ue,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    handleUndo: Kt,
    executeCommand: Gt
  } = rx({
    state: e,
    dispatch: t,
    image: W,
    isFullscreen: $,
    currentThumbnails: U,
    currentIndex: I,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: R,
    handleNext: Z,
    handlePrevious: ie,
    handleEditTags: v,
    handleRestore: k,
    fetchLineage: S,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: qt } = ax({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: R.isMountedRef
  });
  sx({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: R.isMountedRef,
    toggleFullscreen: H,
    handleNext: Z,
    handlePrevious: ie,
    handleDelete: () => {
      ue();
    },
    handleUndo: Kt,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    executeCommand: Gt,
    setShowDetails: D,
    setActiveShortcutKey: M
  }), p.useEffect(() => {
    l !== null && r(l).catch((Ce) => {
      O.error("Failed to fetch full image details for viewer:", Ce);
    });
  }, [r, l]), cx({
    viewerImageId: l,
    currentThumbnails: U,
    currentIndex: I,
    isFullscreen: $,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const On = p.useMemo(() => {
    if (!P || I === -1) return [];
    const Ce = c["viewer.thumbnail_window_size"], it = Math.floor(Ce / 2);
    let vt = Math.max(0, I - it);
    const Dt = Math.min(U.length, vt + Ce);
    return Dt === U.length && (vt = Math.max(0, Dt - Ce)), U.slice(vt, Dt).map((V, K) => ({
      img: V,
      absIndex: vt + K
    }));
  }, [U, I, c, P]), _r = p.useMemo(() => W ? j(W) : [], [j, W]);
  return p.useEffect(() => {
    var Ce, it;
    if (l !== null) {
      if (P) {
        const vt = document.querySelector(".meld-viewer-thumbnail--active");
        vt && vt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Ce = document.activeElement) == null ? void 0 : Ce.tagName) === "CANVAS" && document.activeElement.blur(), (it = E.current) == null || it.focus();
    }
  }, [P, l]), {
    isFullscreen: $,
    showDetails: L,
    setShowDetails: D,
    showThumbnails: P,
    setShowThumbnailsOverride: A,
    isLoadingLineage: qt,
    isJumping: C,
    isMenuOpen: b,
    setIsMenuOpen: T,
    activeShortcutKey: Q,
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    overlayRef: E,
    handleNext: Z,
    handlePrevious: ie,
    handleDelete: ue,
    handleUpdateUserNotes: w,
    handleEditNotes: () => W && g(W),
    handleTagEdit: Et,
    handleRestore: q,
    handleUndo: Kt,
    handleRestoreWorkflow: async () => {
      if (!W) return;
      await x(W) && t({ type: "CLOSE_VIEWER" });
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
    handleRunWithMask: (Ce) => W && m(W, Ce),
    handleEditSource: () => W && y(W),
    toggleFullscreen: H,
    currentIndex: I,
    currentThumbnails: U,
    image: W,
    windowedThumbnails: On,
    parentChain: _r
  };
}, ji = ({
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
  onDelete: g,
  onRestore: k,
  showRestore: w,
  deleteLabel: x,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const [y, j] = p.useState("left");
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
        return v;
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
        children: /* @__PURE__ */ s.jsx(kg, { size: u })
      }
    ),
    _ && b.map((L, D) => {
      const N = em.find((C) => C.id === L);
      if (!N || !N.icon) return null;
      const A = N.icon, P = S(L);
      return !P || L === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (C) => {
            C.stopPropagation(), P();
          },
          title: N.label,
          children: /* @__PURE__ */ s.jsx(A, { size: u })
        },
        `${L}-${D}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${y === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Bf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Gf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: qf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Hf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Kf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Qf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Xf,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Zf,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Yf,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Jf,
              handler: k,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: Qt,
            handler: g,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((L) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${L.className || ""}`,
            onMouseDown: (D) => D.stopPropagation(),
            onClick: (D) => {
              D.preventDefault(), D.stopPropagation(), L.handler(), t(!1);
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
}, fx = ({
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
}) }) : null, mx = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle"), [d, h] = p.useState(null), v = p.useRef(null), g = p.useCallback(async (x, _) => {
    try {
      await navigator.clipboard.writeText(x), v.current && (clearTimeout(v.current), v.current = null), h(_), v.current = setTimeout(() => {
        h(null), v.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  p.useEffect(() => (c("idle"), h(null), () => {
    v.current && (clearTimeout(v.current), v.current = null);
  }), []);
  const k = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], w = k === "always" || k === "if_present" && e.user_notes;
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
                onClick: (x) => {
                  x.stopPropagation();
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
                onClick: (x) => {
                  x.stopPropagation(), g(`${e.width} x ${e.height} px`, "dimensions");
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
                onClick: (x) => {
                  x.stopPropagation(), g(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
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
                onClick: (x) => {
                  x.stopPropagation();
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
                onClick: (x) => {
                  x.stopPropagation();
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
            (x, _) => x.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: x.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (f) => {
                  f.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: x.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: _ === 0 ? "Source" : _ === 1 ? "Grand-Source" : `Ancestor (S${_ + 1})`,
                alt: "source thumb"
              },
              x.id || _
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
                onClick: (x) => {
                  x.stopPropagation(), g(e.positive_prompt || e.positive || "", "positive");
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
                onClick: (x) => {
                  x.stopPropagation(), g(e.negative_prompt || e.negative || "", "negative");
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
                onClick: (x) => {
                  var _;
                  x.stopPropagation(), g(((_ = e.tags) == null ? void 0 : _.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((x) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: x }, x)) })
        ] }),
        w && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
                onClick: (x) => {
                  x.stopPropagation(), g(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ s.jsx(dt, { size: 16 }) : /* @__PURE__ */ s.jsx(Mt, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (x) => {
                x.stopPropagation(), o == null || o();
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
}, gm = p.memo(
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
              children: i ? /* @__PURE__ */ s.jsx(wf, { size: 12 }) : /* @__PURE__ */ s.jsx(xf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
gm.displayName = "ThumbnailItem";
const px = ({
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
    gm,
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
function hx() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = pe(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: g,
    activeShortcutKey: k,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: y,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: T,
    handleRunWithMask: L,
    handleEditSource: D,
    handleDelete: N,
    toggleFullscreen: A,
    image: P,
    windowedThumbnails: C,
    parentChain: F
  } = ux({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), Q = p.useRef(null), M = p.useRef(null), { executeWorkflow: E } = _i(), R = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!P) return null;
  const { viewerImageId: U, viewerMode: I } = e, z = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ge.createPortal(
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
              onClick: (W) => W.stopPropagation(),
              children: [
                z && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
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
                      children: /* @__PURE__ */ s.jsx(Sf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(pg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: A,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(_g, { size: 20 }) : /* @__PURE__ */ s.jsx(xg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    ji,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: g,
                      menuRef: M,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: T,
                      onRunWithMask: L,
                      onEditSource: D,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: N,
                      deleteLabel: R,
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
                      children: /* @__PURE__ */ s.jsx(me, { size: 20 })
                    }
                  )
                ] }),
                z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(kf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(hr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: Q,
                      src: xi(P),
                      alt: P.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(gi, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  mx,
                  {
                    image: P,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: z,
                    parentChain: F,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  px,
                  {
                    windowedThumbnails: C,
                    viewerImageId: U,
                    currentImage: P,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: I,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(fx, { settings: e.settings, activeShortcutKey: k })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            sm,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (W, $) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: W,
                        targetLoaderNodeId: $
                      }
                    }), !1;
                  const H = e.activeModal.maskFilename;
                  for (const Z of e.activeModal.images)
                    await E(W, Z, H, $);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            lm,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (W) => {
                e.activeModal.type === "node_selection" && ul(e.activeModal.image, W);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(om, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            am,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(im, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Df, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(tm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            nm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            ki,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            Wf,
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
            rm,
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
const gx = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = pe(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), v = p.useRef(null), g = se((_) => _.buckets), k = p.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [g]), w = p.useMemo(() => e.images.filter((_) => k.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [e.images, e.settings, e.viewScope, k, d]), x = w;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (O.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), Ks({
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
            O.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (O.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : O.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: w.length,
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
    w.length,
    e.images.length
  ]), p.useEffect(() => {
    e.viewerImageId !== null && (v.current = e.viewerImageId);
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
    displayedImages: w,
    visibleImages: x,
    isSearchActive: d,
    loadMoreRef: h
  };
}, yx = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = pe(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Hs(e, t), o = e.selectedIds.size, [i, c] = p.useState(!1), [d, h] = p.useState(null), v = p.useRef(null), g = p.useRef(null), k = um("bulkActionBar");
  if (Te({
    onEscape: () => c(!1),
    enabled: i
  }), ml({
    enabled: i,
    insideRefs: [v, g],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const w = e.viewScope === "trash", x = () => e.images.filter((b) => e.selectedIds.has(b.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, f = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = x(), T = /* @__PURE__ */ new Set();
    for (const L of b)
      if (L.tags)
        for (const D of L.tags)
          T.add(D);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(T)
      }
    });
  }, m = () => {
    const b = x();
    l(b);
  }, y = () => {
    const b = x();
    b.length > 0 && a(b, "run");
  }, j = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs("div", { className: `meld-bulk-bar ${w ? "meld-bulk-bar--trash" : ""}`, children: [
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
          /* @__PURE__ */ s.jsx(me, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
        children: w ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
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
                /* @__PURE__ */ s.jsx(wr, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(yi, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(y),
              children: [
                /* @__PURE__ */ s.jsx(jg, { size: 14 }),
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
  return ge.createPortal(S, k);
};
function Un(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((w, x) => r[x] !== w)))
      return l;
    r = v;
    let k;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (k = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - h) * 100) / 100, x = Math.round((Date.now() - k) * 100) / 100, _ = x / 16, f = (u, m) => {
        for (u = String(u); u.length < m; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${f(x, 5)} /${f(w, 5)} ms`,
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
function Xc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const vx = (e, t) => Math.abs(e - t) < 1.01, xx = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Zc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, wx = (e) => e, _x = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, kx = (e, t) => {
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
  if (l(Zc(n)), !r.ResizeObserver)
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
      l(Zc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Jc = {
  passive: !0
}, ed = typeof window > "u" ? !0 : "onscrollend" in window, Sx = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && ed ? () => {
  } : xx(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: g } = e.options;
    l = v ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, a(), t(l, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Jc);
  const d = e.options.useScrollendEvent && ed;
  return d && n.addEventListener("scrollend", c, Jc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, jx = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, bx = (e, {
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
class Cx {
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
        getItemKey: wx,
        rangeExtractor: _x,
        onChange: () => {
        },
        measureElement: jx,
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
        const h = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let g = 0; g < d; g++) {
          const k = h[g];
          k && (v[k.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const k = a(g), w = this.laneAssignments.get(g);
          let x, _;
          if (w !== void 0 && this.options.lanes > 1) {
            x = w;
            const y = v[x], j = y !== void 0 ? h[y] : void 0;
            _ = j ? j.end + this.options.gap : r + l;
          } else {
            const y = this.options.lanes === 1 ? h[g - 1] : this.getFurthestMeasurement(h, g);
            _ = y ? y.end + this.options.gap : r + l, x = y ? y.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, x);
          }
          const f = c.get(k), u = typeof f == "number" ? f : this.options.estimateSize(g), m = _ + u;
          h[g] = {
            index: g,
            start: _,
            size: u,
            end: m,
            key: k,
            lane: x
          }, v[x] = g;
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
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Ex({
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
        return Xc(
          r[ym(
            0,
            r.length - 1,
            (l) => Xc(r[l]).start,
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
        const [v, g] = h;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const k = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), x = this.getOffsetForIndex(n, g);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            vx(x[0], w) || c(g);
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
const ym = (e, t, n, r) => {
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
function Ex({
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
  let o = ym(
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
const td = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Nx({
  useFlushSync: e = !0,
  ...t
}) {
  const n = p.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ge.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = p.useState(
    () => new Cx(r)
  );
  return l.setOptions(r), td(() => l._didMount(), []), td(() => l._willUpdate()), l;
}
function Mx(e) {
  return Nx({
    observeElementRect: kx,
    observeElementOffset: Sx,
    scrollToFn: bx,
    ...e
  });
}
const vm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = pe(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: g,
    handleRestore: k,
    handleDelete: w,
    handleEditNotes: x,
    handleUpdateUserNotes: _
  } = Hs(t, n), { getParentChain: f } = hm(t.images, t.settings), [u, m] = p.useState(null), [y, j] = p.useState(!1), [S, b] = p.useState(null), [T, L] = p.useState(!1), D = p.useRef(null);
  ml({
    enabled: y,
    insideRefs: [D],
    onOutside: () => j(!1)
  });
  const N = async (q, Kt, Gt = !1) => {
    try {
      await navigator.clipboard.writeText(q), Gt ? (L(!0), setTimeout(() => L(!1), 2e3)) : (b(Kt), setTimeout(() => b(null), 2e3));
    } catch (qt) {
      O.error("Failed to copy text: ", qt);
    }
  }, A = p.useCallback(
    (q) => {
      if (q.key === "Escape") {
        if (u) {
          fl(q), m(null);
          return;
        }
        y && (fl(q), j(!1));
      }
    },
    [u, y]
  );
  Ks({
    enabled: y || u !== null,
    onKeyDown: A
  });
  const P = f(e), F = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, Q = t.settings["sidebar.thumbnail_size"] || 100, M = ht(e, Math.min(400, Math.round(Q * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: y,
    setIsMenuOpen: j,
    copiedLabel: S,
    popupCopied: T,
    menuRef: D,
    parentChain: P,
    displayFilename: F,
    imgSrc: M,
    handleCopy: N,
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
      x(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      k(e);
    },
    handleDelete: () => {
      w(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (q = "run") => g(e, q),
    handleUpdateUserNotes: (q) => _(e.id, q),
    fetchFullImageDetails: r
  };
}, Ix = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => (Te({ onEscape: n }), ge.createPortal(
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
            /* @__PURE__ */ s.jsx(me, { className: "meld-prompt-popup__close", size: 18, onClick: n })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), xm = rn.memo(({ image: e }) => {
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
    displayFilename: g,
    imgSrc: k,
    handleCopy: w,
    handleClick: x,
    handleSelectToggle: _,
    handleContainerClick: f,
    handleMouseDown: u,
    handleKeyDown: m,
    handleRestoreWorkflow: y,
    handleAddUnifiedLoader: j,
    handleEditSource: S,
    handleEditTags: b,
    handleEditNotes: T,
    handleSendToWorkflow: L,
    handleRestore: D,
    handleDelete: N,
    handleRunWithWorkflow: A,
    handleRunWithMask: P,
    fetchFullImageDetails: C
  } = vm(e), [F, Q] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && F === "saving" && Q("idle");
  }, [e.user_notes, F]);
  const M = (E) => {
    E.stopPropagation();
    let R = String(e.id);
    r && t.selectedIds.size > 0 && (R = Array.from(t.selectedIds).join(",")), E.dataTransfer.setData("text/plain", R), se.getState().setIsOpen(!0);
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
      onDragStart: M,
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
              onClick: (E) => {
                E.stopPropagation(), x(E);
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
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (E, R) => E.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: E.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (U) => {
                    U.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: E.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: R === 0 ? "Source" : R === 1 ? "Grand-Source" : `Ancestor (S${R + 1})`,
                  alt: "source thumb"
                },
                E.id || R
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
              onClick: async (E) => {
                E.stopPropagation();
                const R = await C(e.id);
                a({
                  title: "Model",
                  text: R.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (E) => {
                      E.stopPropagation();
                      const R = await C(e.id);
                      w(R.model_name || "-", "Model");
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
              onClick: async (E) => {
                E.stopPropagation();
                const R = await C(e.id);
                a({
                  title: "Positive Prompt",
                  text: R.positive_prompt || R.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (E) => {
                      E.stopPropagation();
                      const R = await C(e.id);
                      w(R.positive_prompt || R.positive || "-", "Positive");
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
              onClick: async (E) => {
                E.stopPropagation();
                const R = await C(e.id);
                a({
                  title: "Negative Prompt",
                  text: R.negative_prompt || R.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (E) => {
                      E.stopPropagation();
                      const R = await C(e.id);
                      w(R.negative_prompt || R.negative || "-", "Negative");
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
              onClick: (E) => {
                E.stopPropagation(), b();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: E }, E)) : /* @__PURE__ */ s.jsx(
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
              F === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (E) => {
                  E.stopPropagation(), T();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          ji,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: j,
            onRestoreWorkflow: y,
            onSendToWorkflow: L,
            onRunWithWorkflow: A,
            onRunWithMask: (E) => P(E),
            onEditSource: S,
            onEditTags: b,
            onEditNotes: T,
            onRestore: D,
            showRestore: t.viewScope === "trash",
            onDelete: N,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Ix,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (E) => w(E, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
xm.displayName = "DetailedImageCard";
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
    state: v,
    handleAddUnifiedLoader: g,
    handleRestoreWorkflow: k,
    handleSendToWorkflow: w,
    handleRunWithWorkflow: x,
    handleRunWithMask: _,
    handleEditSource: f,
    handleEditTags: u,
    handleEditNotes: m,
    handleDelete: y,
    handleRestore: j
  } = vm(e), S = v.viewScope === "trash", b = S ? "Delete Permanently" : "Move to Trash", T = (L) => {
    L.stopPropagation();
    let D = String(e.id);
    t && v.selectedIds.size > 0 && (D = Array.from(v.selectedIds).join(",")), L.dataTransfer.setData("text/plain", D), se.getState().setIsOpen(!0);
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
          ji,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: v.settings,
            onAddUnifiedLoader: g,
            onRestoreWorkflow: k,
            onSendToWorkflow: w,
            onRunWithWorkflow: x,
            onRunWithMask: _,
            onEditSource: f,
            onEditTags: u,
            onEditNotes: m,
            onDelete: y,
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
const nd = ({ image: e }) => {
  const { state: t } = pe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(wm, { image: e }) : /* @__PURE__ */ s.jsx(xm, { image: e });
}, ja = 6, Tx = 10, Lx = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), [d, h] = p.useState(!0), v = t["sidebar.thumbnail_size"] || 100, g = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const m = o.current;
    if (!m) return;
    const y = () => {
      c(m.clientWidth);
    };
    y();
    const j = new ResizeObserver(y);
    return j.observe(m), () => j.disconnect();
  }, []), p.useEffect(() => {
    const m = o.current;
    if (!m) return;
    if (typeof IntersectionObserver > "u") {
      h(!0);
      return;
    }
    const y = new IntersectionObserver(
      (j) => {
        const S = j[0];
        S && h(S.isIntersecting);
      },
      { threshold: 0 }
    );
    return y.observe(m), () => y.disconnect();
  }, []);
  const k = v + 10, w = g ? Math.max(
    1,
    Math.floor((i - Tx * 2 + ja) / (k + ja))
  ) : 1, x = g ? Math.ceil(e.length / w) : e.length, _ = g ? v + 14 : v + 40, f = Mx({
    count: x,
    getScrollElement: () => o.current,
    estimateSize: () => _,
    overscan: 5,
    enabled: d,
    getItemKey: (m) => {
      var y;
      return g ? `row-${m}-${w}` : ((y = e[m]) == null ? void 0 : y.id) ?? m;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const m = e.findIndex((j) => j.id === r);
    if (m < 0) return;
    const y = g ? Math.floor(m / w) : m;
    f.scrollToIndex(y, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, g, w, f]);
  const u = f.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
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
                const j = m.index * w, S = Math.min(j + w, e.length), b = e.slice(j, S);
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
                      gap: ja,
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
                              width: T.width && T.height ? Math.min(v, v * T.width / T.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ s.jsx(nd, { image: T })
                          }
                        )
                      },
                      T.id
                    ))
                  },
                  m.key
                );
              }
              const y = e[m.index];
              return y ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": m.index,
                  "data-image-id": y.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${m.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(nd, { image: y })
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
}, Ax = () => {
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
    loadMoreRef: v
  } = gx(), g = se((b) => b.isOpen), k = se((b) => b.setIsOpen), w = se((b) => b.buckets), x = Object.values(w).some(
    (b) => b && b.length > 0
  );
  O.log("GalleryPanel: isLightTableOpen =", g);
  const [_, f] = p.useState(!1), [u, m] = p.useState(null), y = p.useRef(null), j = p.useCallback(() => {
    y.current && (m(y.current.getBoundingClientRect()), f(!0));
  }, []), S = p.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), f(!1);
    },
    [t, i, a]
  );
  return O.log("GalleryPanel: rendering", {
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
            const D = L.split(","), N = [];
            D.forEach((A) => {
              if (A) {
                const P = A.trim();
                se.getState().removeFromBucket(T, P);
                const C = Number(P);
                Number.isNaN(C) || N.push(C);
              }
            }), N.length > 0 && t({ type: "DESELECT_IMAGES", payload: N });
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
                  /* @__PURE__ */ s.jsx(me, { size: 14 }),
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
                children: /* @__PURE__ */ s.jsx(_f, { size: 14 })
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
                ref: y,
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
                children: /* @__PURE__ */ s.jsx(wr, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(gg, { size: 14 }) : /* @__PURE__ */ s.jsx(Sf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  O.log(
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
                    Sg,
                    {
                      size: 14,
                      fill: g ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: g ? 1 : 0.8 }
                    }
                  ),
                  !g && x && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(bf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(tx, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Iv, {}),
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
                Mv,
                {
                  onClose: () => a("gallery"),
                  onSearchAndNavigate: (b) => {
                    t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
                  }
                }
              )
            }
          ) : l === "tags" ? /* @__PURE__ */ s.jsx(
            nx,
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
                Lx,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: v,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(yx, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(hx, {}),
        /* @__PURE__ */ s.jsx(Zy, {}),
        _ && /* @__PURE__ */ s.jsx(
          Zv,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: S
          }
        ),
        /* @__PURE__ */ s.jsx(Fv, {})
      ]
    }
  );
};
rd.registerExtension({
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
const Rx = document.getElementById("meld-gallery-style");
if (!Rx) {
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
rd.registerExtension({
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
    Rv();
    try {
      const r = await Lf();
      O.init(r.dev_mode), O.log("Settings received:", r);
    } catch (r) {
      O.error("Failed to fetch settings", r), O.init(!1);
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
          O.error("Error toggling sidebar:", l);
        }
      }
    }, te.addEventListener("meld-image-saved", () => {
      var r;
      (r = e.ui.meld) == null || r.refresh();
    }), te.addEventListener("meld-scan-progress", (r) => {
      window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: r.detail }));
    }), te.addEventListener("meld-scan-finished", (r) => {
      var l;
      window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: r.detail })), (l = e.ui.meld) == null || l.refresh(), O.log("Import completed.");
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
              await Mf({
                filename: a.filename,
                subfolder: a.subfolder,
                type: a.type
              });
            } catch (o) {
              O.error("Failed to auto-register image:", o);
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
          O.log("render called", {
            el: r,
            galleryRoot: Ul,
            galleryContainer: ct
          }), r.style.height = "100%", r.style.overflow = "hidden";
          let l = r.parentElement;
          for (; l && !l.classList.contains("sidebar-content-container"); )
            l.style.height = "100%", l.style.overflow = "hidden", l = l.parentElement;
          l && (l.style.overflow = "hidden"), ct || (O.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), r.contains(ct) || (O.log("Appending galleryContainer to el"), r.appendChild(ct)), Ul ? O.log("Gallery root already exists, React should handle re-render if needed") : (O.log("Creating new gallery root"), Ul = hf(ct), Ul.render(
            rn.createElement(uy, null, rn.createElement(Ax))
          ));
        }
      });
    } catch (r) {
      O.error("Error during sidebar registration:", r);
    }
  }
});
export {
  Ox as c,
  Em as g
};
