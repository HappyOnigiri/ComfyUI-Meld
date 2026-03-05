import { api as te } from "/scripts/api.js";
import { app as Xc } from "/scripts/app.js";
function wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zc = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml = Symbol.for("react.element"), xm = Symbol.for("react.portal"), _m = Symbol.for("react.fragment"), km = Symbol.for("react.strict_mode"), Sm = Symbol.for("react.profiler"), jm = Symbol.for("react.provider"), bm = Symbol.for("react.context"), Em = Symbol.for("react.forward_ref"), Cm = Symbol.for("react.suspense"), Nm = Symbol.for("react.memo"), Mm = Symbol.for("react.lazy"), ki = Symbol.iterator;
function Im(e) {
  return e === null || typeof e != "object" ? null : (e = ki && e[ki] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ed = Object.assign, td = {};
function hr(e, t, n) {
  this.props = e, this.context = t, this.refs = td, this.updater = n || Jc;
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nd() {
}
nd.prototype = hr.prototype;
function vo(e, t, n) {
  this.props = e, this.context = t, this.refs = td, this.updater = n || Jc;
}
var wo = vo.prototype = new nd();
wo.constructor = vo;
ed(wo, hr.prototype);
wo.isPureReactComponent = !0;
var Si = Array.isArray, rd = Object.prototype.hasOwnProperty, xo = { current: null }, ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function sd(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) rd.call(t, r) && !ld.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: ml, type: e, key: a, ref: o, props: l, _owner: xo.current };
}
function Tm(e, t) {
  return { $$typeof: ml, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _o(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ml;
}
function Lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ji = /\/+/g;
function Qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lm("" + e.key) : t.toString(36);
}
function Ul(e, t, n, r, l) {
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
        case ml:
        case xm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Qs(o, 0) : r, Si(l) ? (n = "", e != null && (n = e.replace(ji, "$&/") + "/"), Ul(l, t, n, "", function(d) {
    return d;
  })) : l != null && (_o(l) && (l = Tm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ji, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Si(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Qs(a, i);
    o += Ul(a, t, n, c, l);
  }
  else if (c = Im(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Qs(a, i++), o += Ul(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function xl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ul(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Rm(e) {
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
var He = { current: null }, Vl = { transition: null }, Dm = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Vl, ReactCurrentOwner: xo };
function ad() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: xl, forEach: function(e, t, n) {
  xl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return xl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return xl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!_o(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = hr;
re.Fragment = _m;
re.Profiler = Sm;
re.PureComponent = vo;
re.StrictMode = km;
re.Suspense = Cm;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dm;
re.act = ad;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ed({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = xo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) rd.call(t, c) && !ld.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: ml, type: e.type, key: l, ref: a, props: r, _owner: o };
};
re.createContext = function(e) {
  return e = { $$typeof: bm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jm, _context: e }, e.Consumer = e;
};
re.createElement = sd;
re.createFactory = function(e) {
  var t = sd.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: Em, render: e };
};
re.isValidElement = _o;
re.lazy = function(e) {
  return { $$typeof: Mm, _payload: { _status: -1, _result: e }, _init: Rm };
};
re.memo = function(e, t) {
  return { $$typeof: Nm, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = Vl.transition;
  Vl.transition = {};
  try {
    e();
  } finally {
    Vl.transition = t;
  }
};
re.unstable_act = ad;
re.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
re.useContext = function(e) {
  return He.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
re.useId = function() {
  return He.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return He.current.useRef(e);
};
re.useState = function(e) {
  return He.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return He.current.useTransition();
};
re.version = "18.3.1";
Zc.exports = re;
var h = Zc.exports;
const nn = /* @__PURE__ */ wm(h);
var od = { exports: {} }, st = {}, id = { exports: {} }, cd = {};
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
  function t(C, L) {
    var F = C.length;
    C.push(L);
    e: for (; 0 < F; ) {
      var E = F - 1 >>> 1, D = C[E];
      if (0 < l(D, L)) C[E] = L, C[F] = D, F = E;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0], F = C.pop();
    if (F !== L) {
      C[0] = F;
      e: for (var E = 0, D = C.length, W = D >>> 1; E < W; ) {
        var z = 2 * (E + 1) - 1, Q = C[z], Z = z + 1, ie = C[Z];
        if (0 > l(Q, F)) Z < D && 0 > l(ie, Q) ? (C[E] = ie, C[Z] = F, E = Z) : (C[E] = Q, C[z] = F, E = z);
        else if (Z < D && 0 > l(ie, F)) C[E] = ie, C[Z] = F, E = Z;
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var F = C.sortIndex - L.sortIndex;
    return F !== 0 ? F : C.id - L.id;
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
  var c = [], d = [], p = 1, v = null, y = 3, j = !1, x = !1, w = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(C) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= C) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function g(C) {
    if (w = !1, m(C), !x) if (n(c) !== null) x = !0, K(b);
    else {
      var L = n(d);
      L !== null && T(g, L.startTime - C);
    }
  }
  function b(C, L) {
    x = !1, w && (w = !1, f(N), N = -1), j = !0;
    var F = y;
    try {
      for (m(L), v = n(c); v !== null && (!(v.expirationTime > L) || C && !I()); ) {
        var E = v.callback;
        if (typeof E == "function") {
          v.callback = null, y = v.priorityLevel;
          var D = E(v.expirationTime <= L);
          L = e.unstable_now(), typeof D == "function" ? v.callback = D : v === n(c) && r(c), m(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var W = !0;
      else {
        var z = n(d);
        z !== null && T(g, z.startTime - L), W = !1;
      }
      return W;
    } finally {
      v = null, y = F, j = !1;
    }
  }
  var S = !1, k = null, N = -1, R = 5, A = -1;
  function I() {
    return !(e.unstable_now() - A < R);
  }
  function O() {
    if (k !== null) {
      var C = e.unstable_now();
      A = C;
      var L = !0;
      try {
        L = k(!0, C);
      } finally {
        L ? B() : (S = !1, k = null);
      }
    } else S = !1;
  }
  var B;
  if (typeof u == "function") B = function() {
    u(O);
  };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(), V = M.port2;
    M.port1.onmessage = O, B = function() {
      V.postMessage(null);
    };
  } else B = function() {
    _(O, 0);
  };
  function K(C) {
    k = C, S || (S = !0, B());
  }
  function T(C, L) {
    N = _(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    x || j || (x = !0, K(b));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = y;
    }
    var F = y;
    y = L;
    try {
      return C();
    } finally {
      y = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, L) {
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
    var F = y;
    y = C;
    try {
      return L();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(C, L, F) {
    var E = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? E + F : E) : F = E, C) {
      case 1:
        var D = -1;
        break;
      case 2:
        D = 250;
        break;
      case 5:
        D = 1073741823;
        break;
      case 4:
        D = 1e4;
        break;
      default:
        D = 5e3;
    }
    return D = F + D, C = { id: p++, callback: L, priorityLevel: C, startTime: F, expirationTime: D, sortIndex: -1 }, F > E ? (C.sortIndex = F, t(d, C), n(c) === null && C === n(d) && (w ? (f(N), N = -1) : w = !0, T(g, F - E))) : (C.sortIndex = D, t(c, C), x || j || (x = !0, K(b))), C;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(C) {
    var L = y;
    return function() {
      var F = y;
      y = L;
      try {
        return C.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(cd);
id.exports = cd;
var Pm = id.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm = h, lt = Pm;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dd = /* @__PURE__ */ new Set(), Br = {};
function Pn(e, t) {
  or(e, t), or(e + "Capture", t);
}
function or(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) dd.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _a = Object.prototype.hasOwnProperty, Om = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bi = {}, Ei = {};
function Am(e) {
  return _a.call(Ei, e) ? !0 : _a.call(bi, e) ? !1 : Om.test(e) ? Ei[e] = !0 : (bi[e] = !0, !1);
}
function Fm(e, t, n, r) {
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
function Wm(e, t, n, r) {
  if (t === null || typeof t > "u" || Fm(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ko = /[\-:]([a-z])/g;
function So(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ko,
    So
  );
  Ae[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ko, So);
  Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ko, So);
  Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jo(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wm(t, n, l, r) && (n = null), r || l === null ? Am(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _l = Symbol.for("react.element"), Un = Symbol.for("react.portal"), Vn = Symbol.for("react.fragment"), bo = Symbol.for("react.strict_mode"), ka = Symbol.for("react.profiler"), ud = Symbol.for("react.provider"), fd = Symbol.for("react.context"), Eo = Symbol.for("react.forward_ref"), Sa = Symbol.for("react.suspense"), ja = Symbol.for("react.suspense_list"), Co = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), md = Symbol.for("react.offscreen"), Ci = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != "object" ? null : (e = Ci && e[Ci] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Hs;
function Ir(e) {
  if (Hs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Hs = t && t[1] || "";
  }
  return `
` + Hs + e;
}
var Ks = !1;
function Gs(e, t) {
  if (!e || Ks) return "";
  Ks = !0;
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
    Ks = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ir(e) : "";
}
function $m(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir("Lazy");
    case 13:
      return Ir("Suspense");
    case 19:
      return Ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Gs(e.type, !1), e;
    case 11:
      return e = Gs(e.type.render, !1), e;
    case 1:
      return e = Gs(e.type, !0), e;
    default:
      return "";
  }
}
function ba(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vn:
      return "Fragment";
    case Un:
      return "Portal";
    case ka:
      return "Profiler";
    case bo:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case ja:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case fd:
      return (e.displayName || "Context") + ".Consumer";
    case ud:
      return (e._context.displayName || "Context") + ".Provider";
    case Eo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Co:
      return t = e.displayName || null, t !== null ? t : ba(e.type) || "Memo";
    case Zt:
      t = e._payload, e = e._init;
      try {
        return ba(e(t));
      } catch {
      }
  }
  return null;
}
function Um(e) {
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
      return ba(t);
    case 8:
      return t === bo ? "StrictMode" : "Mode";
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
function pn(e) {
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
function pd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Vm(e) {
  var t = pd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function kl(e) {
  e._valueTracker || (e._valueTracker = Vm(e));
}
function hd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = pd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ts(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ea(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ni(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gd(e, t) {
  t = t.checked, t != null && jo(e, "checked", t, !1);
}
function Ca(e, t) {
  gd(e, t);
  var n = pn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Na(e, t.type, n) : t.hasOwnProperty("defaultValue") && Na(e, t.type, pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Mi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Na(e, t, n) {
  (t !== "number" || ts(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tr = Array.isArray;
function er(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ma(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ii(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(U(92));
      if (Tr(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pn(n) };
}
function yd(e, t) {
  var n = pn(t.value), r = pn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ti(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sl, wd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sl = Sl || document.createElement("div"), Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
}, Bm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
  Bm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e];
  });
});
function xd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px";
}
function _d(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Qm = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ta(e, t) {
  if (t) {
    if (Qm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function La(e, t) {
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
var Ra = null;
function No(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Da = null, tr = null, nr = null;
function Li(e) {
  if (e = gl(e)) {
    if (typeof Da != "function") throw Error(U(280));
    var t = e.stateNode;
    t && (t = Is(t), Da(e.stateNode, e.type, t));
  }
}
function kd(e) {
  tr ? nr ? nr.push(e) : nr = [e] : tr = e;
}
function Sd() {
  if (tr) {
    var e = tr, t = nr;
    if (nr = tr = null, Li(e), t) for (e = 0; e < t.length; e++) Li(t[e]);
  }
}
function jd(e, t) {
  return e(t);
}
function bd() {
}
var qs = !1;
function Ed(e, t, n) {
  if (qs) return e(t, n);
  qs = !0;
  try {
    return jd(e, t, n);
  } finally {
    qs = !1, (tr !== null || nr !== null) && (bd(), Sd());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Is(n);
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
  if (n && typeof n != "function") throw Error(U(231, t, typeof n));
  return n;
}
var Pa = !1;
if (Wt) try {
  var kr = {};
  Object.defineProperty(kr, "passive", { get: function() {
    Pa = !0;
  } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
} catch {
  Pa = !1;
}
function Hm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Pr = !1, ns = null, rs = !1, za = null, Km = { onError: function(e) {
  Pr = !0, ns = e;
} };
function Gm(e, t, n, r, l, a, o, i, c) {
  Pr = !1, ns = null, Hm.apply(Km, arguments);
}
function qm(e, t, n, r, l, a, o, i, c) {
  if (Gm.apply(this, arguments), Pr) {
    if (Pr) {
      var d = ns;
      Pr = !1, ns = null;
    } else throw Error(U(198));
    rs || (rs = !0, za = d);
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
function Cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ri(e) {
  if (zn(e) !== e) throw Error(U(188));
}
function Ym(e) {
  var t = e.alternate;
  if (!t) {
    if (t = zn(e), t === null) throw Error(U(188));
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
        if (a === n) return Ri(l), e;
        if (a === r) return Ri(l), t;
        a = a.sibling;
      }
      throw Error(U(188));
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
        if (!o) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? e : t;
}
function Nd(e) {
  return e = Ym(e), e !== null ? Md(e) : null;
}
function Md(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Md(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Id = lt.unstable_scheduleCallback, Di = lt.unstable_cancelCallback, Xm = lt.unstable_shouldYield, Zm = lt.unstable_requestPaint, Ce = lt.unstable_now, Jm = lt.unstable_getCurrentPriorityLevel, Mo = lt.unstable_ImmediatePriority, Td = lt.unstable_UserBlockingPriority, ls = lt.unstable_NormalPriority, ep = lt.unstable_LowPriority, Ld = lt.unstable_IdlePriority, Es = null, Tt = null;
function tp(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
    Tt.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : lp, np = Math.log, rp = Math.LN2;
function lp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (np(e) / rp | 0) | 0;
}
var jl = 64, bl = 4194304;
function Lr(e) {
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
function ss(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Lr(i) : (a &= o, a !== 0 && (r = Lr(a)));
  } else o = n & ~l, o !== 0 ? r = Lr(o) : a !== 0 && (r = Lr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function sp(e, t) {
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
function ap(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - St(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = sp(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Oa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rd() {
  var e = jl;
  return jl <<= 1, !(jl & 4194240) && (jl = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function op(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - St(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Io(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Dd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Pd, To, zd, Od, Ad, Aa = !1, El = [], sn = null, an = null, on = null, Kr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), en = [], ip = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Pi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = gl(t), t !== null && To(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function cp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return sn = Sr(sn, e, t, n, r, l), !0;
    case "dragenter":
      return an = Sr(an, e, t, n, r, l), !0;
    case "mouseover":
      return on = Sr(on, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Kr.set(a, Sr(Kr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Gr.set(a, Sr(Gr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Fd(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Cd(n), t !== null) {
          e.blockedOn = t, Ad(e.priority, function() {
            zd(n);
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
function Bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ra = r, n.target.dispatchEvent(r), Ra = null;
    } else return t = gl(n), t !== null && To(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function zi(e, t, n) {
  Bl(e) && n.delete(t);
}
function dp() {
  Aa = !1, sn !== null && Bl(sn) && (sn = null), an !== null && Bl(an) && (an = null), on !== null && Bl(on) && (on = null), Kr.forEach(zi), Gr.forEach(zi);
}
function jr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Aa || (Aa = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, dp)));
}
function qr(e) {
  function t(l) {
    return jr(l, e);
  }
  if (0 < El.length) {
    jr(El[0], e);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (sn !== null && jr(sn, e), an !== null && jr(an, e), on !== null && jr(on, e), Kr.forEach(t), Gr.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && (n = en[0], n.blockedOn === null); ) Fd(n), n.blockedOn === null && en.shift();
}
var rr = Qt.ReactCurrentBatchConfig, as = !0;
function up(e, t, n, r) {
  var l = ce, a = rr.transition;
  rr.transition = null;
  try {
    ce = 1, Lo(e, t, n, r);
  } finally {
    ce = l, rr.transition = a;
  }
}
function fp(e, t, n, r) {
  var l = ce, a = rr.transition;
  rr.transition = null;
  try {
    ce = 4, Lo(e, t, n, r);
  } finally {
    ce = l, rr.transition = a;
  }
}
function Lo(e, t, n, r) {
  if (as) {
    var l = Fa(e, t, n, r);
    if (l === null) aa(e, t, r, os, n), Pi(e, r);
    else if (cp(l, e, t, n, r)) r.stopPropagation();
    else if (Pi(e, r), t & 4 && -1 < ip.indexOf(e)) {
      for (; l !== null; ) {
        var a = gl(l);
        if (a !== null && Pd(a), a = Fa(e, t, n, r), a === null && aa(e, t, r, os, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else aa(e, t, r, null, n);
  }
}
var os = null;
function Fa(e, t, n, r) {
  if (os = null, e = No(r), e = jn(e), e !== null) if (t = zn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Cd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return os = e, null;
}
function Wd(e) {
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
      switch (Jm()) {
        case Mo:
          return 1;
        case Td:
          return 4;
        case ls:
        case ep:
          return 16;
        case Ld:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null, Ro = null, Ql = null;
function $d() {
  if (Ql) return Ql;
  var e, t = Ro, n = t.length, r, l = "value" in rn ? rn.value : rn.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Ql = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Hl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cl() {
  return !0;
}
function Oi() {
  return !1;
}
function at(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Cl : Oi, this.isPropagationStopped = Oi, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cl);
  }, persist: function() {
  }, isPersistent: Cl }), t;
}
var gr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Do = at(gr), hl = je({}, gr, { view: 0, detail: 0 }), mp = at(hl), Xs, Zs, br, Cs = je({}, hl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Po, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== br && (br && e.type === "mousemove" ? (Xs = e.screenX - br.screenX, Zs = e.screenY - br.screenY) : Zs = Xs = 0, br = e), Xs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zs;
} }), Ai = at(Cs), pp = je({}, Cs, { dataTransfer: 0 }), hp = at(pp), gp = je({}, hl, { relatedTarget: 0 }), Js = at(gp), yp = je({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vp = at(yp), wp = je({}, gr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xp = at(wp), _p = je({}, gr, { data: 0 }), Fi = at(_p), kp = {
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
}, Sp = {
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
}, jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function bp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jp[e]) ? !!t[e] : !1;
}
function Po() {
  return bp;
}
var Ep = je({}, hl, { key: function(e) {
  if (e.key) {
    var t = kp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Po, charCode: function(e) {
  return e.type === "keypress" ? Hl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cp = at(Ep), Np = je({}, Cs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wi = at(Np), Mp = je({}, hl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Po }), Ip = at(Mp), Tp = je({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lp = at(Tp), Rp = je({}, Cs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Dp = at(Rp), Pp = [9, 13, 27, 32], zo = Wt && "CompositionEvent" in window, zr = null;
Wt && "documentMode" in document && (zr = document.documentMode);
var zp = Wt && "TextEvent" in window && !zr, Ud = Wt && (!zo || zr && 8 < zr && 11 >= zr), $i = " ", Ui = !1;
function Vd(e, t) {
  switch (e) {
    case "keyup":
      return Pp.indexOf(t.keyCode) !== -1;
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
function Bd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Op(e, t) {
  switch (e) {
    case "compositionend":
      return Bd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ui = !0, $i);
    case "textInput":
      return e = t.data, e === $i && Ui ? null : e;
    default:
      return null;
  }
}
function Ap(e, t) {
  if (Bn) return e === "compositionend" || !zo && Vd(e, t) ? (e = $d(), Ql = Ro = rn = null, Bn = !1, e) : null;
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
      return Ud && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Vi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fp[e.type] : t === "textarea";
}
function Qd(e, t, n, r) {
  kd(r), t = is(t, "onChange"), 0 < t.length && (n = new Do("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Or = null, Yr = null;
function Wp(e) {
  nu(e, 0);
}
function Ns(e) {
  var t = Kn(e);
  if (hd(t)) return e;
}
function $p(e, t) {
  if (e === "change") return t;
}
var Hd = !1;
if (Wt) {
  var ea;
  if (Wt) {
    var ta = "oninput" in document;
    if (!ta) {
      var Bi = document.createElement("div");
      Bi.setAttribute("oninput", "return;"), ta = typeof Bi.oninput == "function";
    }
    ea = ta;
  } else ea = !1;
  Hd = ea && (!document.documentMode || 9 < document.documentMode);
}
function Qi() {
  Or && (Or.detachEvent("onpropertychange", Kd), Yr = Or = null);
}
function Kd(e) {
  if (e.propertyName === "value" && Ns(Yr)) {
    var t = [];
    Qd(t, Yr, e, No(e)), Ed(Wp, t);
  }
}
function Up(e, t, n) {
  e === "focusin" ? (Qi(), Or = t, Yr = n, Or.attachEvent("onpropertychange", Kd)) : e === "focusout" && Qi();
}
function Vp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ns(Yr);
}
function Bp(e, t) {
  if (e === "click") return Ns(t);
}
function Qp(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function Hp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : Hp;
function Xr(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!_a.call(t, l) || !bt(e[l], t[l])) return !1;
  }
  return !0;
}
function Hi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ki(e, t) {
  var n = Hi(e);
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
    n = Hi(n);
  }
}
function Gd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qd() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function Oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Kp(e) {
  var t = qd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Oo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Ki(n, a);
        var o = Ki(
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
var Gp = Wt && "documentMode" in document && 11 >= document.documentMode, Qn = null, Wa = null, Ar = null, $a = !1;
function Gi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $a || Qn == null || Qn !== ts(r) || (r = Qn, "selectionStart" in r && Oo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && Xr(Ar, r) || (Ar = r, r = is(Wa, "onSelect"), 0 < r.length && (t = new Do("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qn)));
}
function Nl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Hn = { animationend: Nl("Animation", "AnimationEnd"), animationiteration: Nl("Animation", "AnimationIteration"), animationstart: Nl("Animation", "AnimationStart"), transitionend: Nl("Transition", "TransitionEnd") }, na = {}, Yd = {};
Wt && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
function Ms(e) {
  if (na[e]) return na[e];
  if (!Hn[e]) return e;
  var t = Hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yd) return na[e] = t[n];
  return e;
}
var Xd = Ms("animationend"), Zd = Ms("animationiteration"), Jd = Ms("animationstart"), eu = Ms("transitionend"), tu = /* @__PURE__ */ new Map(), qi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gn(e, t) {
  tu.set(e, t), Pn(t, [e]);
}
for (var ra = 0; ra < qi.length; ra++) {
  var la = qi[ra], qp = la.toLowerCase(), Yp = la[0].toUpperCase() + la.slice(1);
  gn(qp, "on" + Yp);
}
gn(Xd, "onAnimationEnd");
gn(Zd, "onAnimationIteration");
gn(Jd, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(eu, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function Yi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qm(r, t, void 0, e), e.currentTarget = null;
}
function nu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Yi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Yi(l, i, d), a = c;
      }
    }
  }
  if (rs) throw e = za, rs = !1, za = null, e;
}
function ye(e, t) {
  var n = t[Ha];
  n === void 0 && (n = t[Ha] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ru(t, e, 2, !1), n.add(r));
}
function sa(e, t, n) {
  var r = 0;
  t && (r |= 4), ru(n, e, r, t);
}
var Ml = "_reactListening" + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[Ml]) {
    e[Ml] = !0, dd.forEach(function(n) {
      n !== "selectionchange" && (Xp.has(n) || sa(n, !1, e), sa(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ml] || (t[Ml] = !0, sa("selectionchange", !1, t));
  }
}
function ru(e, t, n, r) {
  switch (Wd(t)) {
    case 1:
      var l = up;
      break;
    case 4:
      l = fp;
      break;
    default:
      l = Lo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Pa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function aa(e, t, n, r, l) {
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
        if (o = jn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Ed(function() {
    var d = a, p = No(n), v = [];
    e: {
      var y = tu.get(e);
      if (y !== void 0) {
        var j = Do, x = e;
        switch (e) {
          case "keypress":
            if (Hl(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Cp;
            break;
          case "focusin":
            x = "focus", j = Js;
            break;
          case "focusout":
            x = "blur", j = Js;
            break;
          case "beforeblur":
          case "afterblur":
            j = Js;
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
            j = Ai;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Ip;
            break;
          case Xd:
          case Zd:
          case Jd:
            j = vp;
            break;
          case eu:
            j = Lp;
            break;
          case "scroll":
            j = mp;
            break;
          case "wheel":
            j = Dp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = xp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Wi;
        }
        var w = (t & 4) !== 0, _ = !w && e === "scroll", f = w ? y !== null ? y + "Capture" : null : y;
        w = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, f !== null && (g = Hr(u, f), g != null && w.push(Jr(u, g, m)))), _) break;
          u = u.return;
        }
        0 < w.length && (y = new j(y, x, null, n, p), v.push({ event: y, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", y && n !== Ra && (x = n.relatedTarget || n.fromElement) && (jn(x) || x[$t])) break e;
        if ((j || y) && (y = p.window === p ? p : (y = p.ownerDocument) ? y.defaultView || y.parentWindow : window, j ? (x = n.relatedTarget || n.toElement, j = d, x = x ? jn(x) : null, x !== null && (_ = zn(x), x !== _ || x.tag !== 5 && x.tag !== 6) && (x = null)) : (j = null, x = d), j !== x)) {
          if (w = Ai, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (w = Wi, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = j == null ? y : Kn(j), m = x == null ? y : Kn(x), y = new w(g, u + "leave", j, n, p), y.target = _, y.relatedTarget = m, g = null, jn(p) === d && (w = new w(f, u + "enter", x, n, p), w.target = m, w.relatedTarget = _, g = w), _ = g, j && x) t: {
            for (w = j, f = x, u = 0, m = w; m; m = Wn(m)) u++;
            for (m = 0, g = f; g; g = Wn(g)) m++;
            for (; 0 < u - m; ) w = Wn(w), u--;
            for (; 0 < m - u; ) f = Wn(f), m--;
            for (; u--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Wn(w), f = Wn(f);
            }
            w = null;
          }
          else w = null;
          j !== null && Xi(v, y, j, w, !1), x !== null && _ !== null && Xi(v, _, x, w, !0);
        }
      }
      e: {
        if (y = d ? Kn(d) : window, j = y.nodeName && y.nodeName.toLowerCase(), j === "select" || j === "input" && y.type === "file") var b = $p;
        else if (Vi(y)) if (Hd) b = Qp;
        else {
          b = Vp;
          var S = Up;
        }
        else (j = y.nodeName) && j.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (b = Bp);
        if (b && (b = b(e, d))) {
          Qd(v, b, n, p);
          break e;
        }
        S && S(e, y, d), e === "focusout" && (S = y._wrapperState) && S.controlled && y.type === "number" && Na(y, "number", y.value);
      }
      switch (S = d ? Kn(d) : window, e) {
        case "focusin":
          (Vi(S) || S.contentEditable === "true") && (Qn = S, Wa = d, Ar = null);
          break;
        case "focusout":
          Ar = Wa = Qn = null;
          break;
        case "mousedown":
          $a = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $a = !1, Gi(v, n, p);
          break;
        case "selectionchange":
          if (Gp) break;
        case "keydown":
        case "keyup":
          Gi(v, n, p);
      }
      var k;
      if (zo) e: {
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
      else Bn ? Vd(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Ud && n.locale !== "ko" && (Bn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Bn && (k = $d()) : (rn = p, Ro = "value" in rn ? rn.value : rn.textContent, Bn = !0)), S = is(d, N), 0 < S.length && (N = new Fi(N, e, null, n, p), v.push({ event: N, listeners: S }), k ? N.data = k : (k = Bd(n), k !== null && (N.data = k)))), (k = zp ? Op(e, n) : Ap(e, n)) && (d = is(d, "onBeforeInput"), 0 < d.length && (p = new Fi("onBeforeInput", "beforeinput", null, n, p), v.push({ event: p, listeners: d }), p.data = k));
    }
    nu(v, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function is(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Hr(e, n), a != null && r.unshift(Jr(e, a, l)), a = Hr(e, t), a != null && r.push(Jr(e, a, l))), e = e.return;
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
function Xi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Hr(n, a), c != null && o.unshift(Jr(n, c, i))) : l || (c = Hr(n, a), c != null && o.push(Jr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Zp = /\r\n?/g, Jp = /\u0000|\uFFFD/g;
function Zi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zp, `
`).replace(Jp, "");
}
function Il(e, t, n) {
  if (t = Zi(t), Zi(e) !== t && n) throw Error(U(425));
}
function cs() {
}
var Ua = null, Va = null;
function Ba(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qa = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ji = typeof Promise == "function" ? Promise : void 0, th = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ji < "u" ? function(e) {
  return Ji.resolve(null).then(e).catch(nh);
} : Qa;
function nh(e) {
  setTimeout(function() {
    throw e;
  });
}
function oa(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  qr(t);
}
function cn(e) {
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
function ec(e) {
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
var yr = Math.random().toString(36).slice(2), It = "__reactFiber$" + yr, el = "__reactProps$" + yr, $t = "__reactContainer$" + yr, Ha = "__reactEvents$" + yr, rh = "__reactListeners$" + yr, lh = "__reactHandles$" + yr;
function jn(e) {
  var t = e[It];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[$t] || n[It]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ec(e); e !== null; ) {
        if (n = e[It]) return n;
        e = ec(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function gl(e) {
  return e = e[It] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function Is(e) {
  return e[el] || null;
}
var Ka = [], Gn = -1;
function yn(e) {
  return { current: e };
}
function ve(e) {
  0 > Gn || (e.current = Ka[Gn], Ka[Gn] = null, Gn--);
}
function pe(e, t) {
  Gn++, Ka[Gn] = e.current, e.current = t;
}
var hn = {}, Ve = yn(hn), Ze = yn(!1), Mn = hn;
function ir(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function ds() {
  ve(Ze), ve(Ve);
}
function tc(e, t, n) {
  if (Ve.current !== hn) throw Error(U(168));
  pe(Ve, t), pe(Ze, n);
}
function lu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(U(108, Um(e) || "Unknown", l));
  return je({}, n, r);
}
function us(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, Mn = Ve.current, pe(Ve, e), pe(Ze, Ze.current), !0;
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n ? (e = lu(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, ve(Ze), ve(Ve), pe(Ve, e)) : ve(Ze), pe(Ze, n);
}
var zt = null, Ts = !1, ia = !1;
function su(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function sh(e) {
  Ts = !0, su(e);
}
function vn() {
  if (!ia && zt !== null) {
    ia = !0;
    var e = 0, t = ce;
    try {
      var n = zt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      zt = null, Ts = !1;
    } catch (l) {
      throw zt !== null && (zt = zt.slice(e + 1)), Id(Mo, vn), l;
    } finally {
      ce = t, ia = !1;
    }
  }
  return null;
}
var qn = [], Yn = 0, fs = null, ms = 0, dt = [], ut = 0, In = null, Ot = 1, At = "";
function kn(e, t) {
  qn[Yn++] = ms, qn[Yn++] = fs, fs = e, ms = t;
}
function au(e, t, n) {
  dt[ut++] = Ot, dt[ut++] = At, dt[ut++] = In, In = e;
  var r = Ot;
  e = At;
  var l = 32 - St(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - St(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ot = 1 << 32 - St(t) + l | n << l | r, At = a + e;
  } else Ot = 1 << a | n << l | r, At = e;
}
function Ao(e) {
  e.return !== null && (kn(e, 1), au(e, 1, 0));
}
function Fo(e) {
  for (; e === fs; ) fs = qn[--Yn], qn[Yn] = null, ms = qn[--Yn], qn[Yn] = null;
  for (; e === In; ) In = dt[--ut], dt[ut] = null, At = dt[--ut], dt[ut] = null, Ot = dt[--ut], dt[ut] = null;
}
var rt = null, nt = null, xe = !1, _t = null;
function ou(e, t) {
  var n = ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function rc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = cn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: Ot, overflow: At } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qa(e) {
  if (xe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!rc(e, t)) {
        if (Ga(e)) throw Error(U(418));
        t = cn(n.nextSibling);
        var r = rt;
        t && rc(e, t) ? ou(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, rt = e);
      }
    } else {
      if (Ga(e)) throw Error(U(418));
      e.flags = e.flags & -4097 | 2, xe = !1, rt = e;
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function Tl(e) {
  if (e !== rt) return !1;
  if (!xe) return lc(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Ga(e)) throw iu(), Error(U(418));
    for (; t; ) ou(e, t), t = cn(t.nextSibling);
  }
  if (lc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = cn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function iu() {
  for (var e = nt; e; ) e = cn(e.nextSibling);
}
function cr() {
  nt = rt = null, xe = !1;
}
function Wo(e) {
  _t === null ? _t = [e] : _t.push(e);
}
var ah = Qt.ReactCurrentBatchConfig;
function Er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw e = Object.prototype.toString.call(t), Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function sc(e) {
  var t = e._init;
  return t(e._payload);
}
function cu(e) {
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
    return f = mn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, g) {
    return u === null || u.tag !== 6 ? (u = ha(m, f.mode, g), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function c(f, u, m, g) {
    var b = m.type;
    return b === Vn ? p(f, u, m.props.children, g, m.key) : u !== null && (u.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Zt && sc(b) === u.type) ? (g = l(u, m.props), g.ref = Er(f, u, m), g.return = f, g) : (g = Jl(m.type, m.key, m.props, null, f.mode, g), g.ref = Er(f, u, m), g.return = f, g);
  }
  function d(f, u, m, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = ga(m, f.mode, g), u.return = f, u) : (u = l(u, m.children || []), u.return = f, u);
  }
  function p(f, u, m, g, b) {
    return u === null || u.tag !== 7 ? (u = Nn(m, f.mode, g, b), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function v(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ha("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case _l:
          return m = Jl(u.type, u.key, u.props, null, f.mode, m), m.ref = Er(f, null, u), m.return = f, m;
        case Un:
          return u = ga(u, f.mode, m), u.return = f, u;
        case Zt:
          var g = u._init;
          return v(f, g(u._payload), m);
      }
      if (Tr(u) || _r(u)) return u = Nn(u, f.mode, m, null), u.return = f, u;
      Ll(f, u);
    }
    return null;
  }
  function y(f, u, m, g) {
    var b = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return b !== null ? null : i(f, u, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _l:
          return m.key === b ? c(f, u, m, g) : null;
        case Un:
          return m.key === b ? d(f, u, m, g) : null;
        case Zt:
          return b = m._init, y(
            f,
            u,
            b(m._payload),
            g
          );
      }
      if (Tr(m) || _r(m)) return b !== null ? null : p(f, u, m, g, null);
      Ll(f, m);
    }
    return null;
  }
  function j(f, u, m, g, b) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(m) || null, i(u, f, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case _l:
          return f = f.get(g.key === null ? m : g.key) || null, c(u, f, g, b);
        case Un:
          return f = f.get(g.key === null ? m : g.key) || null, d(u, f, g, b);
        case Zt:
          var S = g._init;
          return j(f, u, m, S(g._payload), b);
      }
      if (Tr(g) || _r(g)) return f = f.get(m) || null, p(u, f, g, b, null);
      Ll(u, g);
    }
    return null;
  }
  function x(f, u, m, g) {
    for (var b = null, S = null, k = u, N = u = 0, R = null; k !== null && N < m.length; N++) {
      k.index > N ? (R = k, k = null) : R = k.sibling;
      var A = y(f, k, m[N], g);
      if (A === null) {
        k === null && (k = R);
        break;
      }
      e && k && A.alternate === null && t(f, k), u = a(A, u, N), S === null ? b = A : S.sibling = A, S = A, k = R;
    }
    if (N === m.length) return n(f, k), xe && kn(f, N), b;
    if (k === null) {
      for (; N < m.length; N++) k = v(f, m[N], g), k !== null && (u = a(k, u, N), S === null ? b = k : S.sibling = k, S = k);
      return xe && kn(f, N), b;
    }
    for (k = r(f, k); N < m.length; N++) R = j(k, f, N, m[N], g), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? N : R.key), u = a(R, u, N), S === null ? b = R : S.sibling = R, S = R);
    return e && k.forEach(function(I) {
      return t(f, I);
    }), xe && kn(f, N), b;
  }
  function w(f, u, m, g) {
    var b = _r(m);
    if (typeof b != "function") throw Error(U(150));
    if (m = b.call(m), m == null) throw Error(U(151));
    for (var S = b = null, k = u, N = u = 0, R = null, A = m.next(); k !== null && !A.done; N++, A = m.next()) {
      k.index > N ? (R = k, k = null) : R = k.sibling;
      var I = y(f, k, A.value, g);
      if (I === null) {
        k === null && (k = R);
        break;
      }
      e && k && I.alternate === null && t(f, k), u = a(I, u, N), S === null ? b = I : S.sibling = I, S = I, k = R;
    }
    if (A.done) return n(
      f,
      k
    ), xe && kn(f, N), b;
    if (k === null) {
      for (; !A.done; N++, A = m.next()) A = v(f, A.value, g), A !== null && (u = a(A, u, N), S === null ? b = A : S.sibling = A, S = A);
      return xe && kn(f, N), b;
    }
    for (k = r(f, k); !A.done; N++, A = m.next()) A = j(k, f, N, A.value, g), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? N : A.key), u = a(A, u, N), S === null ? b = A : S.sibling = A, S = A);
    return e && k.forEach(function(O) {
      return t(f, O);
    }), xe && kn(f, N), b;
  }
  function _(f, u, m, g) {
    if (typeof m == "object" && m !== null && m.type === Vn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _l:
          e: {
            for (var b = m.key, S = u; S !== null; ) {
              if (S.key === b) {
                if (b = m.type, b === Vn) {
                  if (S.tag === 7) {
                    n(f, S.sibling), u = l(S, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (S.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Zt && sc(b) === S.type) {
                  n(f, S.sibling), u = l(S, m.props), u.ref = Er(f, S, m), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === Vn ? (u = Nn(m.props.children, f.mode, g, m.key), u.return = f, f = u) : (g = Jl(m.type, m.key, m.props, null, f.mode, g), g.ref = Er(f, u, m), g.return = f, f = g);
          }
          return o(f);
        case Un:
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
            u = ga(m, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case Zt:
          return S = m._init, _(f, u, S(m._payload), g);
      }
      if (Tr(m)) return x(f, u, m, g);
      if (_r(m)) return w(f, u, m, g);
      Ll(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, m), u.return = f, f = u) : (n(f, u), u = ha(m, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var dr = cu(!0), du = cu(!1), ps = yn(null), hs = null, Xn = null, $o = null;
function Uo() {
  $o = Xn = hs = null;
}
function Vo(e) {
  var t = ps.current;
  ve(ps), e._currentValue = t;
}
function Ya(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function lr(e, t) {
  hs = e, $o = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if ($o !== e) if (e = { context: e, memoizedValue: t, next: null }, Xn === null) {
    if (hs === null) throw Error(U(308));
    Xn = e, hs.dependencies = { lanes: 0, firstContext: e };
  } else Xn = Xn.next = e;
  return t;
}
var bn = null;
function Bo(e) {
  bn === null ? bn = [e] : bn.push(e);
}
function uu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Bo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ut(e, r);
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function Qo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ut(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Bo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ut(e, n);
}
function Kl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Io(e, n);
  }
}
function ac(e, t) {
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
function gs(e, t, n, r) {
  var l = e.updateQueue;
  Jt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== o && (i === null ? p.firstBaseUpdate = d : i.next = d, p.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, p = d = c = null, i = a;
    do {
      var y = i.lane, j = i.eventTime;
      if ((r & y) === y) {
        p !== null && (p = p.next = {
          eventTime: j,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var x = e, w = i;
          switch (y = t, j = n, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                v = x.call(j, v, y);
                break e;
              }
              v = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, y = typeof x == "function" ? x.call(j, v, y) : x, y == null) break e;
              v = je({}, v, y);
              break e;
            case 2:
              Jt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [i] : y.push(i));
      } else j = { eventTime: j, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, p === null ? (d = p = j, c = v) : p = p.next = j, o |= y;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        y = i, i = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Ln |= o, e.lanes = o, e.memoizedState = v;
  }
}
function oc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(U(191, l));
      l.call(r);
    }
  }
}
var yl = {}, Lt = yn(yl), tl = yn(yl), nl = yn(yl);
function En(e) {
  if (e === yl) throw Error(U(174));
  return e;
}
function Ho(e, t) {
  switch (pe(nl, t), pe(tl, e), pe(Lt, yl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ia(t, e);
  }
  ve(Lt), pe(Lt, t);
}
function ur() {
  ve(Lt), ve(tl), ve(nl);
}
function mu(e) {
  En(nl.current);
  var t = En(Lt.current), n = Ia(t, e.type);
  t !== n && (pe(tl, e), pe(Lt, n));
}
function Ko(e) {
  tl.current === e && (ve(Lt), ve(tl));
}
var ke = yn(0);
function ys(e) {
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
var ca = [];
function Go() {
  for (var e = 0; e < ca.length; e++) ca[e]._workInProgressVersionPrimary = null;
  ca.length = 0;
}
var Gl = Qt.ReactCurrentDispatcher, da = Qt.ReactCurrentBatchConfig, Tn = 0, Se = null, Ie = null, Re = null, vs = !1, Fr = !1, rl = 0, oh = 0;
function We() {
  throw Error(U(321));
}
function qo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Yo(e, t, n, r, l, a) {
  if (Tn = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gl.current = e === null || e.memoizedState === null ? uh : fh, e = n(r, l), Fr) {
    a = 0;
    do {
      if (Fr = !1, rl = 0, 25 <= a) throw Error(U(301));
      a += 1, Re = Ie = null, t.updateQueue = null, Gl.current = mh, e = n(r, l);
    } while (Fr);
  }
  if (Gl.current = ws, t = Ie !== null && Ie.next !== null, Tn = 0, Re = Ie = Se = null, vs = !1, t) throw Error(U(300));
  return e;
}
function Xo() {
  var e = rl !== 0;
  return rl = 0, e;
}
function Mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? Se.memoizedState = Re = e : Re = Re.next = e, Re;
}
function gt() {
  if (Ie === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Re === null ? Se.memoizedState : Re.next;
  if (t !== null) Re = t, Ie = e;
  else {
    if (e === null) throw Error(U(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Re === null ? Se.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function ll(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ua(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = Ie, l = r.baseQueue, a = n.pending;
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
      var p = d.lane;
      if ((Tn & p) === p) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Se.lanes |= p, Ln |= p;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, bt(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Se.lanes |= a, Ln |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fa(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    bt(a, t.memoizedState) || (Xe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function pu() {
}
function hu(e, t) {
  var n = Se, r = gt(), l = t(), a = !bt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Xe = !0), r = r.queue, Zo(vu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, sl(9, yu.bind(null, n, r, l, t), void 0, null), De === null) throw Error(U(349));
    Tn & 30 || gu(n, t, l);
  }
  return l;
}
function gu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function yu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wu(t) && xu(e);
}
function vu(e, t, n) {
  return n(function() {
    wu(t) && xu(e);
  });
}
function wu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function xu(e) {
  var t = Ut(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function ic(e) {
  var t = Mt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ll, lastRenderedState: e }, t.queue = e, e = e.dispatch = dh.bind(null, Se, e), [t.memoizedState, e];
}
function sl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _u() {
  return gt().memoizedState;
}
function ql(e, t, n, r) {
  var l = Mt();
  Se.flags |= e, l.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ls(e, t, n, r) {
  var l = gt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (a = o.destroy, r !== null && qo(r, o.deps)) {
      l.memoizedState = sl(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, l.memoizedState = sl(1 | t, n, a, r);
}
function cc(e, t) {
  return ql(8390656, 8, e, t);
}
function Zo(e, t) {
  return Ls(2048, 8, e, t);
}
function ku(e, t) {
  return Ls(4, 2, e, t);
}
function Su(e, t) {
  return Ls(4, 4, e, t);
}
function ju(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ls(4, 4, ju.bind(null, t, e), n);
}
function Jo() {
}
function Eu(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Cu(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Nu(e, t, n) {
  return Tn & 21 ? (bt(n, t) || (n = Rd(), Se.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function ih(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = da.transition;
  da.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, da.transition = r;
  }
}
function Mu() {
  return gt().memoizedState;
}
function ch(e, t, n) {
  var r = fn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Iu(e)) Tu(t, n);
  else if (n = uu(e, t, n, r), n !== null) {
    var l = Qe();
    jt(n, e, r, l), Lu(n, t, r);
  }
}
function dh(e, t, n) {
  var r = fn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Iu(e)) Tu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, bt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Bo(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = uu(e, t, l, r), n !== null && (l = Qe(), jt(n, e, r, l), Lu(n, t, r));
  }
}
function Iu(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Tu(e, t) {
  Fr = vs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Io(e, n);
  }
}
var ws = { readContext: ht, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, uh = { readContext: ht, useCallback: function(e, t) {
  return Mt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: cc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ql(
    4194308,
    4,
    ju.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ql(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ql(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Mt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Mt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ch.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Mt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ic, useDebugValue: Jo, useDeferredValue: function(e) {
  return Mt().memoizedState = e;
}, useTransition: function() {
  var e = ic(!1), t = e[0];
  return e = ih.bind(null, e[1]), Mt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = Mt();
  if (xe) {
    if (n === void 0) throw Error(U(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error(U(349));
    Tn & 30 || gu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, cc(vu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, sl(9, yu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Mt(), t = De.identifierPrefix;
  if (xe) {
    var n = At, r = Ot;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = oh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fh = {
  readContext: ht,
  useCallback: Eu,
  useContext: ht,
  useEffect: Zo,
  useImperativeHandle: bu,
  useInsertionEffect: ku,
  useLayoutEffect: Su,
  useMemo: Cu,
  useReducer: ua,
  useRef: _u,
  useState: function() {
    return ua(ll);
  },
  useDebugValue: Jo,
  useDeferredValue: function(e) {
    var t = gt();
    return Nu(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ua(ll)[0], t = gt().memoizedState;
    return [e, t];
  },
  useMutableSource: pu,
  useSyncExternalStore: hu,
  useId: Mu,
  unstable_isNewReconciler: !1
}, mh = { readContext: ht, useCallback: Eu, useContext: ht, useEffect: Zo, useImperativeHandle: bu, useInsertionEffect: ku, useLayoutEffect: Su, useMemo: Cu, useReducer: fa, useRef: _u, useState: function() {
  return fa(ll);
}, useDebugValue: Jo, useDeferredValue: function(e) {
  var t = gt();
  return Ie === null ? t.memoizedState = e : Nu(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = fa(ll)[0], t = gt().memoizedState;
  return [e, t];
}, useMutableSource: pu, useSyncExternalStore: hu, useId: Mu, unstable_isNewReconciler: !1 };
function wt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rs = { isMounted: function(e) {
  return (e = e._reactInternals) ? zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = fn(e), a = Ft(r, l);
  a.payload = t, n != null && (a.callback = n), t = dn(e, a, l), t !== null && (jt(t, e, l, r), Kl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = fn(e), a = Ft(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = dn(e, a, l), t !== null && (jt(t, e, l, r), Kl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = fn(e), l = Ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dn(e, l, r), t !== null && (jt(t, e, r, n), Kl(t, e, r));
} };
function dc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(l, a) : !0;
}
function Ru(e, t, n) {
  var r = !1, l = hn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (l = Je(t) ? Mn : Ve.current, r = t.contextTypes, a = (r = r != null) ? ir(e, l) : hn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function uc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}
function Za(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Qo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ht(a) : (a = Je(t) ? Mn : Ve.current, l.context = ir(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Xa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Rs.enqueueReplaceState(l, l.state, null), gs(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
  try {
    var n = "", r = t;
    do
      n += $m(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ma(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ph = typeof WeakMap == "function" ? WeakMap : Map;
function Du(e, t, n) {
  n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    _s || (_s = !0, co = r), Ja(e, t);
  }, n;
}
function Pu(e, t, n) {
  n = Ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ja(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ja(e, t), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function fc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ph();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Nh.bind(null, e, t, n), t.then(e, e));
}
function mc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, dn(n, t, 1))), n.lanes |= 1), e);
}
var hh = Qt.ReactCurrentOwner, Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? du(t, null, n, r) : dr(t, e.child, n, r);
}
function hc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return lr(t, l), r = Yo(e, t, n, r, a, l), n = Xo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Vt(e, t, l)) : (xe && n && Ao(t), t.flags |= 1, Be(e, t, r, l), t.child);
}
function gc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !oi(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, zu(e, t, a, r, l)) : (e = Jl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xr, n(o, r) && e.ref === t.ref) return Vt(e, t, l);
  }
  return t.flags |= 1, e = mn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Xr(a, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, Vt(e, t, l);
  }
  return eo(e, t, n, r, l);
}
function Ou(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(Jn, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, pe(Jn, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, pe(Jn, tt), tt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, pe(Jn, tt), tt |= r;
  return Be(e, t, l, n), t.child;
}
function Au(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function eo(e, t, n, r, l) {
  var a = Je(n) ? Mn : Ve.current;
  return a = ir(t, a), lr(t, l), n = Yo(e, t, n, r, a, l), r = Xo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Vt(e, t, l)) : (xe && r && Ao(t), t.flags |= 1, Be(e, t, n, l), t.child);
}
function yc(e, t, n, r, l) {
  if (Je(n)) {
    var a = !0;
    us(t);
  } else a = !1;
  if (lr(t, l), t.stateNode === null) Yl(e, t), Ru(t, n, r), Za(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = Je(n) ? Mn : Ve.current, d = ir(t, d));
    var p = n.getDerivedStateFromProps, v = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && uc(t, o, r, d), Jt = !1;
    var y = t.memoizedState;
    o.state = y, gs(t, r, o, l), c = t.memoizedState, i !== r || y !== c || Ze.current || Jt ? (typeof p == "function" && (Xa(t, n, p, r), c = t.memoizedState), (i = Jt || dc(t, n, i, r, y, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, fu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : wt(t.type, i), o.props = d, v = t.pendingProps, y = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = Je(n) ? Mn : Ve.current, c = ir(t, c));
    var j = n.getDerivedStateFromProps;
    (p = typeof j == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || y !== c) && uc(t, o, r, c), Jt = !1, y = t.memoizedState, o.state = y, gs(t, r, o, l);
    var x = t.memoizedState;
    i !== v || y !== x || Ze.current || Jt ? (typeof j == "function" && (Xa(t, n, j, r), x = t.memoizedState), (d = Jt || dc(t, n, d, r, y, x, c) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return to(e, t, n, r, a, l);
}
function to(e, t, n, r, l, a) {
  Au(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && nc(t, n, !1), Vt(e, t, a);
  r = t.stateNode, hh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = dr(t, e.child, null, a), t.child = dr(t, null, i, a)) : Be(e, t, i, a), t.memoizedState = r.state, l && nc(t, n, !0), t.child;
}
function Fu(e) {
  var t = e.stateNode;
  t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), Ho(e, t.containerInfo);
}
function vc(e, t, n, r, l) {
  return cr(), Wo(l), t.flags |= 256, Be(e, t, n, r), t.child;
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wu(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), pe(ke, l & 1), e === null)
    return qa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = zs(o, r, 0, null), e = Nn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ro(n), t.memoizedState = no, e) : ei(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return gh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = mn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = mn(i, a) : (a = Nn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? ro(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = no, r;
  }
  return a = e.child, e = a.sibling, r = mn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ei(e, t) {
  return t = zs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Rl(e, t, n, r) {
  return r !== null && Wo(r), dr(t, e.child, null, n), e = ei(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ma(Error(U(422))), Rl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = zs({ mode: "visible", children: r.children }, l, 0, null), a = Nn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && dr(t, e.child, null, o), t.child.memoizedState = ro(o), t.memoizedState = no, a);
  if (!(t.mode & 1)) return Rl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(U(419)), r = ma(a, r, void 0), Rl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Xe || i) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Ut(e, l), jt(r, e, l, -1));
    }
    return ai(), r = ma(Error(U(421))), Rl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mh.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, nt = cn(l.nextSibling), rt = t, xe = !0, _t = null, e !== null && (dt[ut++] = Ot, dt[ut++] = At, dt[ut++] = In, Ot = e.id, At = e.overflow, In = t), t = ei(t, r.children), t.flags |= 4096, t);
}
function wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ya(e.return, t, n);
}
function pa(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function $u(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Be(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && wc(e, n, t);
      else if (e.tag === 19) wc(e, n, t);
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
  if (pe(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ys(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), pa(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ys(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      pa(t, !0, n, null, a);
      break;
    case "together":
      pa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Vt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yh(e, t, n) {
  switch (t.tag) {
    case 3:
      Fu(t), cr();
      break;
    case 5:
      mu(t);
      break;
    case 1:
      Je(t.type) && us(t);
      break;
    case 4:
      Ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      pe(ps, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (pe(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wu(e, t, n) : (pe(ke, ke.current & 1), e = Vt(e, t, n), e !== null ? e.sibling : null);
      pe(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $u(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), pe(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ou(e, t, n);
  }
  return Vt(e, t, n);
}
var Uu, lo, Vu, Bu;
Uu = function(e, t) {
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
lo = function() {
};
Vu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, En(Lt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Ea(e, l), r = Ea(e, r), a = [];
        break;
      case "select":
        l = je({}, l, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Ma(e, l), r = Ma(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cs);
    }
    Ta(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Br.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Br.hasOwnProperty(d) ? (c != null && d === "onScroll" && ye("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Bu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function vh(e, t, n) {
  var r = t.pendingProps;
  switch (Fo(t), t.tag) {
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
      return $e(t), null;
    case 1:
      return Je(t.type) && ds(), $e(t), null;
    case 3:
      return r = t.stateNode, ur(), ve(Ze), ve(Ve), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _t !== null && (mo(_t), _t = null))), lo(e, t), $e(t), null;
    case 5:
      Ko(t);
      var l = En(nl.current);
      if (n = t.type, e !== null && t.stateNode != null) Vu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return $e(t), null;
        }
        if (e = En(Lt.current), Tl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[It] = t, r[el] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Rr.length; l++) ye(Rr[l], r);
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
              Ni(r, a), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ye("invalid", r);
              break;
            case "textarea":
              Ii(r, a), ye("invalid", r);
          }
          Ta(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Il(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Il(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Br.hasOwnProperty(o) && i != null && o === "onScroll" && ye("scroll", r);
          }
          switch (n) {
            case "input":
              kl(r), Mi(r, a, !0);
              break;
            case "textarea":
              kl(r), Ti(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = cs);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[It] = t, e[el] = r, Uu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = La(n, r), n) {
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
                for (l = 0; l < Rr.length; l++) ye(Rr[l], e);
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
                Ni(e, r), l = Ea(e, r), ye("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                Ii(e, r), l = Ma(e, r), ye("invalid", e);
                break;
              default:
                l = r;
            }
            Ta(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? _d(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && wd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Qr(e, c) : typeof c == "number" && Qr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Br.hasOwnProperty(a) ? c != null && a === "onScroll" && ye("scroll", e) : c != null && jo(e, a, c, o));
            }
            switch (n) {
              case "input":
                kl(e), Mi(e, r, !1);
                break;
              case "textarea":
                kl(e), Ti(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? er(e, !!r.multiple, a, !1) : r.defaultValue != null && er(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = cs);
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Bu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (n = En(nl.current), En(Lt.current), Tl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[It] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              Il(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Il(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[It] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (ve(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && nt !== null && t.mode & 1 && !(t.flags & 128)) iu(), cr(), t.flags |= 98560, a = !1;
        else if (a = Tl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(U(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(U(317));
            a[It] = t;
          } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else _t !== null && (mo(_t), _t = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : ai())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return ur(), lo(e, t), e === null && Zr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Vo(t.type._context), $e(t), null;
    case 17:
      return Je(t.type) && ds(), $e(t), null;
    case 19:
      if (ve(ke), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) Cr(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ys(e), o !== null) {
            for (t.flags |= 128, Cr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return pe(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > mr && (t.flags |= 128, r = !0, Cr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ys(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return $e(t), null;
        } else 2 * Ce() - a.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Cr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = ke.current, pe(ke, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return si(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function wh(e, t) {
  switch (Fo(t), t.tag) {
    case 1:
      return Je(t.type) && ds(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ur(), ve(Ze), ve(Ve), Go(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ko(t), null;
    case 13:
      if (ve(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(U(340));
        cr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(ke), null;
    case 4:
      return ur(), null;
    case 10:
      return Vo(t.type._context), null;
    case 22:
    case 23:
      return si(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1, Ue = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function so(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var xc = !1;
function _h(e, t) {
  if (Ua = as, e = qd(), Oo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, p = 0, v = e, y = null;
        t: for (; ; ) {
          for (var j; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (j = v.firstChild) !== null; )
            y = v, v = j;
          for (; ; ) {
            if (v === e) break t;
            if (y === n && ++d === l && (i = o), y === a && ++p === r && (c = o), (j = v.nextSibling) !== null) break;
            v = y, y = v.parentNode;
          }
          v = j;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Va = { focusedElem: e, selectionRange: n }, as = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
            var w = x.memoizedProps, _ = x.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : wt(t.type, w), _);
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
          throw Error(U(163));
      }
    } catch (g) {
      Ee(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return x = xc, xc = !1, x;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && so(t, n, a);
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
function ao(e) {
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
function Qu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[el], delete t[Ha], delete t[rh], delete t[lh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Hu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _c(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cs));
  else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
}
function io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
}
var ze = null, xt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Ku(e, t, n), n = n.sibling;
}
function Ku(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
    Tt.onCommitFiberUnmount(Es, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Zn(n, t);
    case 6:
      var r = ze, l = xt;
      ze = null, Xt(e, t, n), ze = r, xt = l, ze !== null && (xt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (xt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? oa(e.parentNode, n) : e.nodeType === 1 && oa(e, n), qr(e)) : oa(ze, n.stateNode));
      break;
    case 4:
      r = ze, l = xt, ze = n.stateNode.containerInfo, xt = !0, Xt(e, t, n), ze = r, xt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && so(n, t, o), l = l.next;
        } while (l !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (!Ue && (Zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
      }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Xt(e, t, n), Ue = r) : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function kc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xh()), t.forEach(function(r) {
      var l = Ih.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ze = i.stateNode, xt = !1;
            break e;
          case 3:
            ze = i.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            ze = i.stateNode.containerInfo, xt = !0;
            break e;
        }
        i = i.return;
      }
      if (ze === null) throw Error(U(160));
      Ku(a, o, l), ze = null, xt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gu(t, e), t = t.sibling;
}
function Gu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vt(t, e), Ct(e), r & 4) {
        try {
          Wr(3, e, e.return), Ds(3, e);
        } catch (w) {
          Ee(e, e.return, w);
        }
        try {
          Wr(5, e, e.return);
        } catch (w) {
          Ee(e, e.return, w);
        }
      }
      break;
    case 1:
      vt(t, e), Ct(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (vt(t, e), Ct(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Qr(l, "");
        } catch (w) {
          Ee(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && gd(l, a), La(i, o);
          var d = La(i, a);
          for (o = 0; o < c.length; o += 2) {
            var p = c[o], v = c[o + 1];
            p === "style" ? _d(l, v) : p === "dangerouslySetInnerHTML" ? wd(l, v) : p === "children" ? Qr(l, v) : jo(l, p, v, d);
          }
          switch (i) {
            case "input":
              Ca(l, a);
              break;
            case "textarea":
              yd(l, a);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var j = a.value;
              j != null ? er(l, !!a.multiple, j, !1) : y !== !!a.multiple && (a.defaultValue != null ? er(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : er(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[el] = a;
        } catch (w) {
          Ee(e, e.return, w);
        }
      }
      break;
    case 6:
      if (vt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(U(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (w) {
          Ee(e, e.return, w);
        }
      }
      break;
    case 3:
      if (vt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        qr(t.containerInfo);
      } catch (w) {
        Ee(e, e.return, w);
      }
      break;
    case 4:
      vt(t, e), Ct(e);
      break;
    case 13:
      vt(t, e), Ct(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (ri = Ce())), r & 4 && kc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || p, vt(t, e), Ue = d) : vt(t, e), Ct(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for (G = e, p = e.child; p !== null; ) {
          for (v = G = p; G !== null; ) {
            switch (y = G, j = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wr(4, y, y.return);
                break;
              case 1:
                Zn(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (w) {
                    Ee(r, n, w);
                  }
                }
                break;
              case 5:
                Zn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  jc(v);
                  continue;
                }
            }
            j !== null ? (j.return = y, G = j) : jc(v);
          }
          p = p.sibling;
        }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = xd("display", o));
              } catch (w) {
                Ee(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (p === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (w) {
              Ee(e, e.return, w);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), v = v.return;
          }
          p === v && (p = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      vt(t, e), Ct(e), r & 4 && kc(e);
      break;
    case 21:
      break;
    default:
      vt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qr(l, ""), r.flags &= -33);
          var a = _c(e);
          io(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = _c(e);
          oo(e, i, o);
          break;
        default:
          throw Error(U(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kh(e, t, n) {
  G = e, qu(e);
}
function qu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = Dl;
        var d = Ue;
        if (Dl = o, (Ue = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? bc(l) : c !== null ? (c.return = o, G = c) : bc(l);
        for (; a !== null; ) G = a, qu(a), a = a.sibling;
        G = l, Dl = i, Ue = d;
      }
      Sc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : Sc(e);
  }
}
function Sc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || Ds(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && oc(t, a, r);
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
              oc(t, o, n);
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
                var p = d.memoizedState;
                if (p !== null) {
                  var v = p.dehydrated;
                  v !== null && qr(v);
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
            throw Error(U(163));
        }
        Ue || t.flags & 512 && ao(t);
      } catch (y) {
        Ee(t, t.return, y);
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
function jc(e) {
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
function bc(e) {
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
            ao(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ao(t);
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
var Sh = Math.ceil, xs = Qt.ReactCurrentDispatcher, ti = Qt.ReactCurrentOwner, mt = Qt.ReactCurrentBatchConfig, ae = 0, De = null, Me = null, Oe = 0, tt = 0, Jn = yn(0), Te = 0, al = null, Ln = 0, Ps = 0, ni = 0, $r = null, qe = null, ri = 0, mr = 1 / 0, Pt = null, _s = !1, co = null, un = null, Pl = !1, ln = null, ks = 0, Ur = 0, uo = null, Xl = -1, Zl = 0;
function Qe() {
  return ae & 6 ? Ce() : Xl !== -1 ? Xl : Xl = Ce();
}
function fn(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : ah.transition !== null ? (Zl === 0 && (Zl = Rd()), Zl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wd(e.type)), e) : 1;
}
function jt(e, t, n, r) {
  if (50 < Ur) throw Ur = 0, uo = null, Error(U(185));
  pl(e, n, r), (!(ae & 2) || e !== De) && (e === De && (!(ae & 2) && (Ps |= n), Te === 4 && tn(e, Oe)), et(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (mr = Ce() + 500, Ts && vn()));
}
function et(e, t) {
  var n = e.callbackNode;
  ap(e, t);
  var r = ss(e, e === De ? Oe : 0);
  if (r === 0) n !== null && Di(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Di(n), t === 1) e.tag === 0 ? sh(Ec.bind(null, e)) : su(Ec.bind(null, e)), th(function() {
      !(ae & 6) && vn();
    }), n = null;
    else {
      switch (Dd(r)) {
        case 1:
          n = Mo;
          break;
        case 4:
          n = Td;
          break;
        case 16:
          n = ls;
          break;
        case 536870912:
          n = Ld;
          break;
        default:
          n = ls;
      }
      n = rf(n, Yu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Yu(e, t) {
  if (Xl = -1, Zl = 0, ae & 6) throw Error(U(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = ss(e, e === De ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ss(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Zu();
    (De !== e || Oe !== t) && (Pt = null, mr = Ce() + 500, Cn(e, t));
    do
      try {
        Eh();
        break;
      } catch (i) {
        Xu(e, i);
      }
    while (!0);
    Uo(), xs.current = a, ae = l, Me !== null ? t = 0 : (De = null, Oe = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = Oa(e), l !== 0 && (r = l, t = fo(e, l))), t === 1) throw n = al, Cn(e, 0), tn(e, r), et(e, Ce()), n;
    if (t === 6) tn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !jh(l) && (t = Ss(e, r), t === 2 && (a = Oa(e), a !== 0 && (r = a, t = fo(e, a))), t === 1)) throw n = al, Cn(e, 0), tn(e, r), et(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Sn(e, qe, Pt);
          break;
        case 3:
          if (tn(e, r), (r & 130023424) === r && (t = ri + 500 - Ce(), 10 < t)) {
            if (ss(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Qa(Sn.bind(null, e, qe, Pt), t);
            break;
          }
          Sn(e, qe, Pt);
          break;
        case 4:
          if (tn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - St(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qa(Sn.bind(null, e, qe, Pt), r);
            break;
          }
          Sn(e, qe, Pt);
          break;
        case 5:
          Sn(e, qe, Pt);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return et(e, Ce()), e.callbackNode === n ? Yu.bind(null, e) : null;
}
function fo(e, t) {
  var n = $r;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = Ss(e, t), e !== 2 && (t = qe, qe = n, t !== null && mo(t)), e;
}
function mo(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function jh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!bt(a(), l)) return !1;
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
function tn(e, t) {
  for (t &= ~ni, t &= ~Ps, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ec(e) {
  if (ae & 6) throw Error(U(327));
  sr();
  var t = ss(e, 0);
  if (!(t & 1)) return et(e, Ce()), null;
  var n = Ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && (t = r, n = fo(e, r));
  }
  if (n === 1) throw n = al, Cn(e, 0), tn(e, t), et(e, Ce()), n;
  if (n === 6) throw Error(U(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sn(e, qe, Pt), et(e, Ce()), null;
}
function li(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (mr = Ce() + 500, Ts && vn());
  }
}
function Rn(e) {
  ln !== null && ln.tag === 0 && !(ae & 6) && sr();
  var t = ae;
  ae |= 1;
  var n = mt.transition, r = ce;
  try {
    if (mt.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, mt.transition = n, ae = t, !(ae & 6) && vn();
  }
}
function si() {
  tt = Jn.current, ve(Jn);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, eh(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (Fo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ds();
        break;
      case 3:
        ur(), ve(Ze), ve(Ve), Go();
        break;
      case 5:
        Ko(r);
        break;
      case 4:
        ur();
        break;
      case 13:
        ve(ke);
        break;
      case 19:
        ve(ke);
        break;
      case 10:
        Vo(r.type._context);
        break;
      case 22:
      case 23:
        si();
    }
    n = n.return;
  }
  if (De = e, Me = e = mn(e.current, null), Oe = tt = t, Te = 0, al = null, ni = Ps = Ln = 0, qe = $r = null, bn !== null) {
    for (t = 0; t < bn.length; t++) if (n = bn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    bn = null;
  }
  return e;
}
function Xu(e, t) {
  do {
    var n = Me;
    try {
      if (Uo(), Gl.current = ws, vs) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        vs = !1;
      }
      if (Tn = 0, Re = Ie = Se = null, Fr = !1, rl = 0, ti.current = null, n === null || n.return === null) {
        Te = 1, al = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, p = i, v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = p.alternate;
            y ? (p.updateQueue = y.updateQueue, p.memoizedState = y.memoizedState, p.lanes = y.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var j = mc(o);
          if (j !== null) {
            j.flags &= -257, pc(j, o, i, a, t), j.mode & 1 && fc(a, d, t), t = j, c = d;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(c), t.updateQueue = w;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              fc(a, d, t), ai();
              break e;
            }
            c = Error(U(426));
          }
        } else if (xe && i.mode & 1) {
          var _ = mc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), pc(_, o, i, a, t), Wo(fr(c, i));
            break e;
          }
        }
        a = c = fr(c, i), Te !== 4 && (Te = 2), $r === null ? $r = [a] : $r.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Du(a, c, t);
              ac(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (un === null || !un.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Pu(a, i, t);
                ac(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ef(n);
    } catch (b) {
      t = b, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zu() {
  var e = xs.current;
  return xs.current = ws, e === null ? ws : e;
}
function ai() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || !(Ln & 268435455) && !(Ps & 268435455) || tn(De, Oe);
}
function Ss(e, t) {
  var n = ae;
  ae |= 2;
  var r = Zu();
  (De !== e || Oe !== t) && (Pt = null, Cn(e, t));
  do
    try {
      bh();
      break;
    } catch (l) {
      Xu(e, l);
    }
  while (!0);
  if (Uo(), ae = n, xs.current = r, Me !== null) throw Error(U(261));
  return De = null, Oe = 0, Te;
}
function bh() {
  for (; Me !== null; ) Ju(Me);
}
function Eh() {
  for (; Me !== null && !Xm(); ) Ju(Me);
}
function Ju(e) {
  var t = nf(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? ef(e) : Me = t, ti.current = null;
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = wh(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Me = null;
        return;
      }
    } else if (n = vh(n, t, tt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Sn(e, t, n) {
  var r = ce, l = mt.transition;
  try {
    mt.transition = null, ce = 1, Ch(e, t, n, r);
  } finally {
    mt.transition = l, ce = r;
  }
  return null;
}
function Ch(e, t, n, r) {
  do
    sr();
  while (ln !== null);
  if (ae & 6) throw Error(U(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(U(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (op(e, a), e === De && (Me = De = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pl || (Pl = !0, rf(ls, function() {
    return sr(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = mt.transition, mt.transition = null;
    var o = ce;
    ce = 1;
    var i = ae;
    ae |= 4, ti.current = null, _h(e, n), Gu(n, e), Kp(Va), as = !!Ua, Va = Ua = null, e.current = n, kh(n), Zm(), ae = i, ce = o, mt.transition = a;
  } else e.current = n;
  if (Pl && (Pl = !1, ln = e, ks = l), a = e.pendingLanes, a === 0 && (un = null), tp(n.stateNode), et(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_s) throw _s = !1, e = co, co = null, e;
  return ks & 1 && e.tag !== 0 && sr(), a = e.pendingLanes, a & 1 ? e === uo ? Ur++ : (Ur = 0, uo = e) : Ur = 0, vn(), null;
}
function sr() {
  if (ln !== null) {
    var e = Dd(ks), t = mt.transition, n = ce;
    try {
      if (mt.transition = null, ce = 16 > e ? 16 : e, ln === null) var r = !1;
      else {
        if (e = ln, ln = null, ks = 0, ae & 6) throw Error(U(331));
        var l = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var p = G;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, p, a);
                  }
                  var v = p.child;
                  if (v !== null) v.return = p, G = v;
                  else for (; G !== null; ) {
                    p = G;
                    var y = p.sibling, j = p.return;
                    if (Qu(p), p === d) {
                      G = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = j, G = y;
                      break;
                    }
                    G = j;
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
                Wr(9, a, a.return);
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
            } catch (b) {
              Ee(i, i.return, b);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, G = g;
              break e;
            }
            G = i.return;
          }
        }
        if (ae = l, vn(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
          Tt.onPostCommitFiberRoot(Es, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, mt.transition = t;
    }
  }
  return !1;
}
function Cc(e, t, n) {
  t = fr(n, t), t = Du(e, t, 1), e = dn(e, t, 1), t = Qe(), e !== null && (pl(e, 1, t), et(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Cc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
        e = fr(n, e), e = Pu(t, e, 1), t = dn(t, e, 1), e = Qe(), t !== null && (pl(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Nh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Oe & n) === n && (Te === 4 || Te === 3 && (Oe & 130023424) === Oe && 500 > Ce() - ri ? Cn(e, 0) : ni |= n), et(e, t);
}
function tf(e, t) {
  t === 0 && (e.mode & 1 ? (t = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : t = 1);
  var n = Qe();
  e = Ut(e, t), e !== null && (pl(e, t, n), et(e, n));
}
function Mh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function Ih(e, t) {
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
      throw Error(U(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, yh(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, xe && t.flags & 1048576 && au(t, ms, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Yl(e, t), e = t.pendingProps;
      var l = ir(t, Ve.current);
      lr(t, n), l = Yo(null, t, r, e, l, n);
      var a = Xo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, us(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Qo(t), l.updater = Rs, t.stateNode = l, l._reactInternals = t, Za(t, r, e, n), t = to(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && Ao(t), Be(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Yl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Lh(r), e = wt(r, e), l) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = yc(null, t, r, e, n);
            break e;
          case 11:
            t = hc(null, t, r, e, n);
            break e;
          case 14:
            t = gc(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(U(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), eo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), yc(e, t, r, l, n);
    case 3:
      e: {
        if (Fu(t), e === null) throw Error(U(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, fu(e, t), gs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = fr(Error(U(423)), t), t = vc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = fr(Error(U(424)), t), t = vc(e, t, r, n, l);
          break e;
        } else for (nt = cn(t.stateNode.containerInfo.firstChild), rt = t, xe = !0, _t = null, n = du(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (cr(), r === l) {
            t = Vt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mu(t), e === null && qa(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Ba(r, l) ? o = null : a !== null && Ba(r, a) && (t.flags |= 32), Au(e, t), Be(e, t, o, n), t.child;
    case 6:
      return e === null && qa(t), null;
    case 13:
      return Wu(e, t, n);
    case 4:
      return Ho(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dr(t, null, r, n) : Be(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), hc(e, t, r, l, n);
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, pe(ps, r._currentValue), r._currentValue = o, a !== null) if (bt(a.value, o)) {
          if (a.children === l.children && !Ze.current) {
            t = Vt(e, t, n);
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
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var p = d.pending;
                    p === null ? c.next = c : (c.next = p.next, p.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ya(
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
            if (o = a.return, o === null) throw Error(U(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ya(o, n, t), o = a.sibling;
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
        Be(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, lr(t, n), l = ht(l), r = r(l), t.flags |= 1, Be(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = wt(r, t.pendingProps), l = wt(r.type, l), gc(e, t, r, l, n);
    case 15:
      return zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : wt(r, l), Yl(e, t), t.tag = 1, Je(r) ? (e = !0, us(t)) : e = !1, lr(t, n), Ru(t, r, l), Za(t, r, l, n), to(null, t, r, !0, e, n);
    case 19:
      return $u(e, t, n);
    case 22:
      return Ou(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function rf(e, t) {
  return Id(e, t);
}
function Th(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ft(e, t, n, r) {
  return new Th(e, t, n, r);
}
function oi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Lh(e) {
  if (typeof e == "function") return oi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Eo) return 11;
    if (e === Co) return 14;
  }
  return 2;
}
function mn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Jl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") oi(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Vn:
      return Nn(n.children, l, a, t);
    case bo:
      o = 8, l |= 8;
      break;
    case ka:
      return e = ft(12, n, t, l | 2), e.elementType = ka, e.lanes = a, e;
    case Sa:
      return e = ft(13, n, t, l), e.elementType = Sa, e.lanes = a, e;
    case ja:
      return e = ft(19, n, t, l), e.elementType = ja, e.lanes = a, e;
    case md:
      return zs(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ud:
          o = 10;
          break e;
        case fd:
          o = 9;
          break e;
        case Eo:
          o = 11;
          break e;
        case Co:
          o = 14;
          break e;
        case Zt:
          o = 16, r = null;
          break e;
      }
      throw Error(U(130, e == null ? e : typeof e, ""));
  }
  return t = ft(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Nn(e, t, n, r) {
  return e = ft(7, e, r, t), e.lanes = n, e;
}
function zs(e, t, n, r) {
  return e = ft(22, e, r, t), e.elementType = md, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ha(e, t, n) {
  return e = ft(6, e, null, t), e.lanes = n, e;
}
function ga(e, t, n) {
  return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ys(0), this.expirationTimes = Ys(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ys(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ii(e, t, n, r, l, a, o, i, c) {
  return e = new Rh(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ft(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qo(a), e;
}
function Dh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function lf(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(U(170));
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
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return lu(e, n, t);
  }
  return t;
}
function sf(e, t, n, r, l, a, o, i, c) {
  return e = ii(n, r, !0, e, l, a, o, i, c), e.context = lf(null), n = e.current, r = Qe(), l = fn(n), a = Ft(r, l), a.callback = t ?? null, dn(n, a, l), e.current.lanes = l, pl(e, l, r), et(e, r), e;
}
function Os(e, t, n, r) {
  var l = t.current, a = Qe(), o = fn(l);
  return n = lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dn(l, t, o), e !== null && (jt(e, l, o, a), Kl(e, l, o)), o;
}
function js(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Nc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ci(e, t) {
  Nc(e, t), (e = e.alternate) && Nc(e, t);
}
function Ph() {
  return null;
}
var af = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function di(e) {
  this._internalRoot = e;
}
As.prototype.render = di.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  Os(e, t, null, null);
};
As.prototype.unmount = di.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function() {
      Os(null, e, null, null);
    }), t[$t] = null;
  }
};
function As(e) {
  this._internalRoot = e;
}
As.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Od();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++) ;
    en.splice(n, 0, e), n === 0 && Fd(e);
  }
};
function ui(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Mc() {
}
function zh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = js(o);
        a.call(d);
      };
    }
    var o = sf(t, r, e, 0, null, !1, !1, "", Mc);
    return e._reactRootContainer = o, e[$t] = o.current, Zr(e.nodeType === 8 ? e.parentNode : e), Rn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = js(c);
      i.call(d);
    };
  }
  var c = ii(e, 0, !1, null, null, !1, !1, "", Mc);
  return e._reactRootContainer = c, e[$t] = c.current, Zr(e.nodeType === 8 ? e.parentNode : e), Rn(function() {
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
        var c = js(o);
        i.call(c);
      };
    }
    Os(t, o, e, l);
  } else o = zh(n, t, e, l, r);
  return js(o);
}
Pd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 && (Io(t, n | 1), et(t, Ce()), !(ae & 6) && (mr = Ce() + 500, vn()));
      }
      break;
    case 13:
      Rn(function() {
        var r = Ut(e, 1);
        if (r !== null) {
          var l = Qe();
          jt(r, e, 1, l);
        }
      }), ci(e, 1);
  }
};
To = function(e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = Qe();
      jt(t, e, 134217728, n);
    }
    ci(e, 134217728);
  }
};
zd = function(e) {
  if (e.tag === 13) {
    var t = fn(e), n = Ut(e, t);
    if (n !== null) {
      var r = Qe();
      jt(n, e, t, r);
    }
    ci(e, t);
  }
};
Od = function() {
  return ce;
};
Ad = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Da = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ca(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Is(r);
            if (!l) throw Error(U(90));
            hd(r), Ca(r, l);
          }
        }
      }
      break;
    case "textarea":
      yd(e, n);
      break;
    case "select":
      t = n.value, t != null && er(e, !!n.multiple, t, !1);
  }
};
jd = li;
bd = Rn;
var Oh = { usingClientEntryPoint: !1, Events: [gl, Kn, Is, kd, Sd, li] }, Nr = { findFiberByHostInstance: jn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ah = { bundleType: Nr.bundleType, version: Nr.version, rendererPackageName: Nr.rendererPackageName, rendererConfig: Nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Nd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nr.findFiberByHostInstance || Ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber) try {
    Es = zl.inject(Ah), Tt = zl;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ui(t)) throw Error(U(200));
  return Dh(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!ui(e)) throw Error(U(299));
  var n = !1, r = "", l = af;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ii(e, 1, !1, null, null, n, !1, r, l), e[$t] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new di(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : (e = Object.keys(e).join(","), Error(U(268, e)));
  return e = Nd(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return Rn(e);
};
st.hydrate = function(e, t, n) {
  if (!Fs(t)) throw Error(U(200));
  return Ws(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!ui(e)) throw Error(U(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = af;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = sf(t, null, e, 1, n ?? null, l, !1, a, o), e[$t] = t.current, Zr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new As(t);
};
st.render = function(e, t, n) {
  if (!Fs(t)) throw Error(U(200));
  return Ws(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Fs(e)) throw Error(U(40));
  return e._reactRootContainer ? (Rn(function() {
    Ws(null, null, e, !1, function() {
      e._reactRootContainer = null, e[$t] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = li;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fs(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return Ws(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function of() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(of);
    } catch (e) {
      console.error(e);
    }
}
of(), od.exports = st;
var me = od.exports, cf, Ic = me;
cf = Ic.createRoot, Ic.hydrateRoot;
var df = { exports: {} }, $s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh = h, Wh = Symbol.for("react.element"), $h = Symbol.for("react.fragment"), Uh = Object.prototype.hasOwnProperty, Vh = Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function uf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Uh.call(t, r) && !Bh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Wh, type: e, key: a, ref: o, props: l, _owner: Vh.current };
}
$s.Fragment = $h;
$s.jsx = uf;
$s.jsxs = uf;
df.exports = $s;
var s = df.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qh = {
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
const Hh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, p) => h.createElement(
      "svg",
      {
        ref: p,
        ...Qh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Hh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, y]) => h.createElement(v, y)),
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
const ff = J("AlertCircle", [
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
const Kh = J("AlertTriangle", [
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
const mf = J("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = J("ArrowUpDown", [
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
const pf = J("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = J("Box", [
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
const Yh = J("Calendar", [
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
const Xh = J("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = J("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = J("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = J("Download", [
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
const eg = J("Eraser", [
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
const mi = J("FileJson", [
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
const tg = J("FileText", [
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
const ng = J("Folder", [
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
const rg = J("Info", [
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
const lg = J("Lasso", [
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
const gf = J("LayoutGrid", [
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
const sg = J("LayoutList", [
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
const ag = J("Link2Off", [
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
const og = J("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = J("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = J("Maximize", [
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
const cg = J("Menu", [
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
const dg = J("Minimize", [
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
const ug = J("MoreVertical", [
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
const fg = J("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = J("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = J("RefreshCw", [
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
const mg = J("ScanLine", [
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
const Dn = J("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = J("Settings", [
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
const wf = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = J("Star", [
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
const pg = J("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = J("Tag", [
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
const Bt = J("Trash2", [
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
const hg = J("Trash", [
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
const gg = J("Type", [
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
const yg = J("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vg = J("Upload", [
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
const wg = J("Workflow", [
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
const he = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = J("ZoomIn", [
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
const _g = J("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = te;
async function le(e) {
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
const xf = (e) => typeof e == "object" && e !== null, Lc = (e) => {
  if (typeof e == "string")
    return e;
  if (xf(e) && typeof e.message == "string")
    return e.message;
};
async function pi(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (xf(t)) {
      const r = "error" in t ? t.error : void 0, l = Lc(r), a = "message" in t ? Lc(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const kg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await le(e)).home;
}, Le = ({
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
let bs = !1;
const Sg = (e) => {
  bs = e, bs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, jg = (...e) => {
  bs && console.log("[Meld]", ...e);
}, bg = (...e) => {
  bs && console.warn("[Meld]", ...e);
}, Eg = (...e) => {
  console.error("[Meld]", ...e);
}, P = {
  log: jg,
  warn: bg,
  error: Eg,
  init: Sg
}, es = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return le(a);
}, _f = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return le(t);
}, Cg = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await le(n);
}, po = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return le(t);
}, kf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return le(t);
}, Rc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await le(n);
}, Ng = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(`/meld/suggest-parents?id=${e}${n}`);
  try {
    return await le(r);
  } catch {
    return [];
  }
}, hi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await le(t);
  } catch {
    return [];
  }
}, Mg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await le(n);
}, Ig = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return le(n);
}, Sf = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await le(r);
}, Tg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return le(t);
}, Lg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return le(t);
}, Rg = async (e, t, n, r, l) => {
  const a = await te.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok)
    throw new Error("Failed to download ZIP");
  const o = await a.blob(), i = window.URL.createObjectURL(o), c = document.createElement("a");
  c.href = i, c.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Dg = async (e, t, n, r, l) => {
  const a = await te.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok)
    throw new Error(`Failed to download image ${e}`);
  const o = a.headers.get("Content-Disposition");
  let i = `image_${e}.png`;
  if (o != null && o.includes("filename=")) {
    const v = o.match(/filename="?([^"]+)"?/);
    v != null && v[1] && (i = v[1]);
  }
  const c = await a.blob(), d = window.URL.createObjectURL(c), p = document.createElement("a");
  p.href = d, p.download = i, document.body.appendChild(p), p.click(), window.URL.revokeObjectURL(d), document.body.removeChild(p);
}, Pg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return le(r);
}, zg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return le(e);
}, Og = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return le(e);
}, Ag = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return le(e);
}, Fg = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return le(e);
}, Wg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await le(n);
}, Dc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await le(t);
}, $g = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await le(r);
}, Ug = {
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
}, jf = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await le(t);
  } catch (t) {
    return P.error("Failed to fetch settings, using defaults", t), Ug;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Vg = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await le(n);
}, Bg = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return le(e);
};
function Mr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const Qg = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = Mr(e.images.filter((o) => !n.has(o.id))), l = Mr(
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
      const n = [...e.images, ...t.payload], r = Mr(n).sort(
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
      const { images: n, total: r, offset: l } = t.payload, a = Mr(n);
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
      const { images: n, total: r, offset: l } = t.payload, a = [...e.images, ...n], o = Mr(a);
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
function bf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const Hg = (e, t) => {
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
      const n = t.payload, r = bf(n);
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
}, Kg = (e, t) => {
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
}, Gg = (e, t) => {
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
function Pc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const qg = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((p) => p.id === c)) {
        const p = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        p ? d = p : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, p = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = bf(i), y = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((j) => j.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: p,
        viewerInitialMaskMode: v,
        lineageImages: y ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Pc(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const p = d.findIndex((j) => j.id === e.viewerImageId);
      if (p === -1 || p === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || p === d.length - 1 && !c)
        return e;
      const v = (p + 1) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Pc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const p = d.findIndex((j) => j.id === e.viewerImageId);
      if (p === -1 || p === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || p === 0 && !c)
        return e;
      const v = (p - 1 + d.length) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    default:
      return e;
  }
}, Yg = [
  qg,
  Qg,
  Kg,
  Hg,
  Gg
];
function Xg(e, t) {
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
  } : Yg.reduce((n, r) => r(n, t), e);
}
const Zg = {
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
function Jg(e, t) {
  return Xg(e, t);
}
const Ef = h.createContext(void 0), ey = ({ children: e }) => {
  const [t, n] = h.useReducer(Jg, Zg), r = h.useRef(t.images.length), l = h.useRef(0), a = h.useRef(/* @__PURE__ */ new Map());
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = h.useCallback(
    async (x, w, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = x;
      for (; m < Math.min(w, f) && _ === l.current; )
        try {
          const g = Math.min(u, f - m);
          P.log("Background fetch: starting chunk", {
            offset: m,
            limit: g
          });
          const b = await es(
            m,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: b }), m += b.images.length, b.images.length === 0 || m >= b.total)) break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (g) {
          P.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now(), w = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      P.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await es(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - x;
      P.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, w);
    } catch (_) {
      P.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.searchQuery, t.viewScope, t.settings, o]), c = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const x = performance.now();
    try {
      const w = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      P.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: f,
        isSearch: _
      });
      const u = await es(
        w,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - x;
      P.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (w) {
      P.error("loadMoreImages: fetch failed", w), n({
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
  ]), d = h.useCallback(async () => {
    try {
      const x = await Fg();
      n({ type: "SET_FAVORITES", payload: x });
    } catch (x) {
      P.error("Failed to load favorites", x);
    }
  }, []), p = h.useCallback(async () => {
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
  }, [t.selectedIds, t.images, t.viewScope]), v = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const x = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await po(x)).restored_ids || x;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), y = h.useCallback(
    async (x, w) => {
      try {
        await Vg(x, w), n({ type: "SET_SETTINGS", payload: { [x]: w } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), j = h.useCallback(
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
          P.log("fetchFullImageDetails: fetching full data", { id: x });
          const m = await _f(x);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(x);
        }
      })();
      return a.current.set(x, u), u;
    },
    [t.images, t.lineageImages]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const w = await jf();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        P.error("Failed to load settings", w);
      }
    })();
  }, []), h.useEffect(() => {
    d();
  }, [d]), h.useEffect(() => {
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
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Ef.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: p,
        restoreSelected: v,
        updateSetting: y,
        fetchFullImageDetails: j
      },
      children: e
    }
  );
}, ge = () => {
  const e = h.useContext(Ef);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, pt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, gi = (e) => {
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
}, yi = async () => {
  const e = await te.fetchApi("/meld/tags");
  return le(e);
}, ty = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return le(t);
}, ny = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await le(t);
}, ry = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await le(n);
}, ly = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, sy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await pi(n);
  if (!ly(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, ay = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return P.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, oy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return P.error("Failed to fetch folder metadata", a), {};
  }
}, iy = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await le(r)).count;
  } catch {
    return 0;
  }
}, cy = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await le(t);
}, dy = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await le(e);
}, Cf = () => {
  const { dispatch: e } = ge(), [t, n] = h.useState(() => {
    const M = localStorage.getItem("meld-import-config"), V = {
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
        const K = JSON.parse(M);
        return { ...V, ...K, tags: [] };
      } catch {
        return V;
      }
    return V;
  });
  h.useEffect(() => {
    const { tags: M, ...V } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(V));
  }, [t]);
  const [r, l] = h.useState([]), [a, o] = h.useState([]), [i, c] = h.useState(0), [d, p] = h.useState(!1), [v, y] = h.useState([]), [j, x] = h.useState(""), [w, _] = h.useState(!1), [f, u] = h.useState(null), m = h.useRef(!1), g = (M) => {
    M.target === M.currentTarget && (m.current = !0);
  }, b = (M) => {
    M.target === M.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const V = await kg();
        n((K) => K.custom_path ? K : { ...K, custom_path: V });
      } catch (V) {
        P.error("Failed to fetch home directory:", V);
      }
    })();
  }, []), h.useEffect(() => {
    const M = new AbortController();
    return (async () => {
      const K = t.type === "custom" ? t.custom_path : t.subfolder;
      if (P.log(`loadFolders started. Path: "${K}", Type: "${t.type}"`), t.type === "custom" && !K) {
        P.log("Custom path is empty, skipping load."), l([]), o([]), c(0), p(!1);
        return;
      }
      p(!0);
      const T = K, C = t.type;
      try {
        P.log("Step 1: Fast load starting...");
        const L = await ay(t.type, K, !0, M.signal);
        if (M.signal.aborted) {
          P.log("Step 1: Aborted.");
          return;
        }
        P.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), o(L.images), c(null);
        const F = L.folders.map((E) => E.name);
        F.length > 0 && (P.log(`Step 2: Metadata fetch starting for ${F.length} folders...`), oy(C, T, F, M.signal).then((E) => {
          if (M.signal.aborted) {
            P.log("Step 2: Aborted.");
            return;
          }
          P.log("Step 2: Metadata fetch complete."), l(
            (D) => D.map((W) => {
              const z = E[W.name];
              return z ? { ...W, count: z.count, preview: z.preview } : W;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && P.error("Step 2: Metadata fetch failed:", E);
        })), P.log("Step 3: Path image count starting..."), iy(C, T, M.signal).then((E) => {
          if (M.signal.aborted) {
            P.log("Step 3: Aborted.");
            return;
          }
          P.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && P.error("Step 3: Path image count failed:", E);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          P.log("Request aborted.");
          return;
        }
        P.error("Failed to load folders:", L), l([]), o([]), c(0);
      } finally {
        M.signal.aborted || p(!1);
      }
    })(), () => {
      M.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = h.useCallback(async () => {
    _(!0);
    try {
      const M = await yi();
      y(M);
    } catch (M) {
      P.error("Failed to fetch tags:", M);
    } finally {
      _(!1);
    }
  }, []);
  h.useEffect(() => {
    S();
  }, [S]), Le({
    onEscape: h.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const k = h.useMemo(() => v.filter(
    (M) => M.name.toLowerCase().includes(j.toLowerCase()) && !t.tags.includes(M.name)
  ), [v, j, t.tags]), N = (M) => {
    const V = M.trim();
    V && !t.tags.includes(V) && (n({ ...t, tags: [...t.tags, V] }), x(""));
  }, R = (M) => {
    n({ ...t, tags: t.tags.filter((V) => V !== M) });
  }, A = (M) => {
    M.key === "Enter" && j.trim() && (M.preventDefault(), N(j.trim()));
  }, I = async () => {
    try {
      await cy(t), e({
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
      P.error("Failed to start scan:", M), alert(`Failed to start scan: ${M}`);
    }
  }, O = (M) => {
    if (t.type === "custom") {
      const V = t.custom_path.includes("\\") ? "\\" : "/", K = t.custom_path.endsWith(V) ? `${t.custom_path}${M}` : `${t.custom_path}${V}${M}`;
      n({ ...t, custom_path: K });
    } else {
      const V = t.subfolder ? `${t.subfolder}/${M}` : M;
      n({ ...t, subfolder: V });
    }
  }, B = () => {
    if (t.type === "custom") {
      const M = t.custom_path.includes("\\") ? "\\" : "/", V = t.custom_path.split(M);
      if (V.length > 1) {
        V.pop();
        let K = V.join(M);
        K === "" && M === "/" && (K = "/"), n({ ...t, custom_path: K });
      }
    } else {
      const M = t.subfolder.split("/");
      M.pop(), n({ ...t, subfolder: M.join("/") });
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: b,
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
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group--checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
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
                            onClick: () => R(M),
                            children: /* @__PURE__ */ s.jsx(he, { size: 12 })
                          }
                        )
                      ] }, M)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Dn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: j,
                            onChange: (M) => x(M.target.value),
                            onKeyDown: A
                          }
                        ),
                        j.trim() && !t.tags.includes(j.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(j),
                            children: /* @__PURE__ */ s.jsx(Us, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? j && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        j
                      ] }) : k.map((M) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(M.name),
                          children: M.name
                        },
                        M.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn--primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(il, { size: 16 }),
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
                          onClick: B,
                          children: [
                            /* @__PURE__ */ s.jsx(hf, { size: 16 }),
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
                          onClick: () => O(M.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: M.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: pt(M.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(ng, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: M.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${M.count === null ? "meld-folder-count--loading" : ""}`,
                                children: M.count !== null ? `${M.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(fi, { size: 14 })
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
                              src: pt(M, 120),
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
          f && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (M) => {
                M.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-content", onClick: (M) => M.stopPropagation(), children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => u(null),
                      children: /* @__PURE__ */ s.jsx(he, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx("img", { src: pt(f, 400), alt: f.filename })
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
}, Nf = "meld-download-options", uy = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function fy() {
  try {
    const e = localStorage.getItem(Nf);
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
function my(e) {
  try {
    localStorage.setItem(Nf, JSON.stringify(e));
  } catch {
  }
}
const py = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = h.useState(() => fy()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [p, v] = h.useState(!1), [y, j] = h.useState(String(c)), x = h.useRef(!1);
  h.useEffect(() => {
    my(r);
  }, [r]), h.useEffect(() => {
    j(String(c));
  }, [c]);
  const w = (k) => {
    k.target === k.currentTarget && (x.current = !0);
  }, _ = (k) => {
    k.target === k.currentTarget && x.current && (p || n()), x.current = !1;
  };
  Le({
    onEscape: () => {
      p || n();
    }
  });
  const f = (k) => {
    j(k);
    const N = Number(k);
    if (!Number.isFinite(N) || N <= 0)
      return;
    const I = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(N)));
    l((O) => ({ ...O, resizeValue: I }));
  }, u = async () => {
    v(!0);
    try {
      if (a === "zip")
        await Rg(
          e,
          o,
          i,
          c,
          d
        );
      else
        for (const k of e)
          await Dg(
            k,
            o,
            i,
            c,
            d
          ), await new Promise((N) => setTimeout(N, 200));
      n(), t == null || t();
    } catch (k) {
      P.error("Download failed:", k), alert("Failed to download images.");
    } finally {
      v(!1);
    }
  }, m = i === "percent" ? "%" : "px", g = 1, b = i === "percent" ? 99 : 99999, S = i === "percent" ? "1-99" : "Max edge (px)";
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(ol, { size: 18 }),
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
                disabled: p,
                children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                          onChange: () => l((k) => ({ ...k, format: "zip" })),
                          disabled: p
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
                          onChange: () => l((k) => ({ ...k, format: "raw" })),
                          disabled: p
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
                          onChange: () => l((k) => ({ ...k, resizeMode: "none" })),
                          disabled: p
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
                          onChange: () => l((k) => ({ ...k, resizeMode: "percent", resizeValue: 50 })),
                          disabled: p
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
                          onChange: () => l((k) => ({ ...k, resizeMode: "max_edge", resizeValue: 1024 })),
                          disabled: p
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
                        min: g,
                        max: b,
                        step: 1,
                        value: y,
                        placeholder: S,
                        onChange: (k) => f(k.target.value),
                        disabled: p,
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
                    /* @__PURE__ */ s.jsx("span", { style: { fontSize: "13px" }, children: m }),
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
                        onChange: (k) => l((N) => ({
                          ...N,
                          resizeFilter: k.target.value
                        })),
                        disabled: p,
                        style: {
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color, #555)",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          color: "inherit",
                          fontSize: "13px"
                        },
                        children: uy.map((k) => /* @__PURE__ */ s.jsx("option", { value: k.value, children: k.label }, k.value))
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
                        onChange: (k) => l((N) => ({ ...N, removeMetadata: k.target.checked })),
                        disabled: p
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
                className: "meld-btn meld-btn--secondary",
                onClick: n,
                disabled: p,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: u,
                disabled: p,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: p ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(ol, { size: 16 }),
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
}, zc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const y = t;
      t = p ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((j) => j(t, y));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, hy = (e) => e ? zc(e) : zc, gy = (e) => e;
function yy(e, t = gy) {
  const n = nn.useSyncExternalStore(
    e.subscribe,
    nn.useCallback(() => t(e.getState()), [e, t]),
    nn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return nn.useDebugValue(n), n;
}
const vy = (e) => {
  const t = hy(e), n = (r) => yy(t, r);
  return Object.assign(n, t), n;
}, wy = (e) => vy;
function xy(e, t) {
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
const ho = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return ho(r)(n);
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
        return ho(r)(n);
      }
    };
  }
}, _y = (e, t) => (n, r, l) => {
  let a = {
    storage: xy(() => window.localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, f) => ({
      ...f,
      ..._
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let p = a.storage;
  if (!p)
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
    return p.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, y = l.setState;
  l.setState = (_, f) => (y(_, f), v());
  const j = e(
    (..._) => (n(..._), v()),
    r,
    l
  );
  l.getInitialState = () => j;
  let x;
  const w = () => {
    var _, f;
    if (!p) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var b;
      return g((b = r()) != null ? b : j);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : j)) || void 0;
    return ho(p.getItem.bind(p))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const b = a.migrate(
              g.state,
              g.version
            );
            return b instanceof Promise ? b.then((S) => [!0, S]) : [!0, b];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var b;
      if (u !== i)
        return;
      const [S, k] = g;
      if (x = a.merge(
        k,
        (b = r()) != null ? b : j
      ), n(x, !0), S)
        return v();
    }).then(() => {
      u === i && (m == null || m(x, void 0), x = r(), o = !0, d.forEach((g) => g(x)));
    }).catch((g) => {
      u === i && (m == null || m(void 0, g));
    });
  };
  return l.persist = {
    setOptions: (_) => {
      a = {
        ...a,
        ..._
      }, _.storage && (p = _.storage);
    },
    clearStorage: () => {
      p == null || p.removeItem(a.name);
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
  }, a.skipHydration || w(), x || j;
}, ky = _y, Sy = [
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
const se = wy()(
  ky(
    (e) => ({
      isOpen: !1,
      slots: Sy,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((p) => p !== n);
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
          const p = d.filter((v) => !l.has(v));
          p.length !== d.length && (a[c] = p, o = !0);
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
), Mf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return le(e);
}, If = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return le(t);
}, Tf = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", ar = (e) => {
  const t = Tf(e);
  return t === "meldimageloader" || t === "loadimage";
}, Vr = (e) => Tf(e) === "loadimagemask", jy = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), vi = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r, l) => {
    var w, _, f, u, m;
    if (!t || !n)
      throw new Error(
        `Missing required inputs for workflow execution: workflowName (${!!t}), image (${!!n})`
      );
    P.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await If(t);
    P.log("Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const b = a.nodes.find((S) => ar(S.type));
        b && (o = String(b.id));
      }
      const g = a.nodes.find((b) => Vr(b.type));
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const b = a[g];
          if (ar(b.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a) {
        const b = a[g];
        if (Vr(b.class_type)) {
          i = g;
          break;
        }
      }
    }
    if (P.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw P.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const g = window.app;
      if (typeof g != "object" || g === null || !("graph" in g))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const b = g;
      if (!b.graph || !jy(b.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const S = t.replace(/\.json$/i, "");
      let k = !1;
      const N = document.querySelectorAll(".workflow-tab");
      for (const I of Array.from(N)) {
        const O = I.querySelector(".workflow-label"), B = ((w = O == null ? void 0 : O.textContent) == null ? void 0 : w.trim()) || ((_ = I.textContent) == null ? void 0 : _.trim()) || "";
        if (B === S || B === t || B.startsWith(`${S} `) || B.startsWith(`${S}•`)) {
          I.click(), k = !0;
          break;
        }
      }
      k || await b.loadGraphData(a, !0, !0, t), await new Promise((I) => setTimeout(I, 200));
      const R = b.graph._nodes;
      P.log("Active graph nodes count:", R.length);
      const A = R.find(
        (I) => String(I.id) === o || ar(I.type)
      );
      if (A) {
        const I = (f = A.widgets) == null ? void 0 : f.find((O) => O.name === "image");
        P.log("Updating loader node widget:", {
          nodeId: A.id,
          type: A.type,
          imagePath: d
        }), I && (I.value = d, typeof I.callback == "function" && I.callback(d));
      } else
        P.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const I = R.find(
          (O) => String(O.id) === i || Vr(O.type)
        );
        if (P.log("Updating mask node widget:", {
          nodeId: I == null ? void 0 : I.id,
          maskFilename: r
        }), I) {
          const O = (u = I.widgets) == null ? void 0 : u.find((M) => M.name === "image");
          O && (O.value = `${r} [temp]`);
          const B = (m = I.widgets) == null ? void 0 : m.find((M) => M.name === "channel");
          B && (B.value = "red");
        } else
          P.warn("LoadImageMask not found in active graph after loading");
      }
      b.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof b.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await b.queuePrompt(0);
        return;
      } catch (I) {
        throw P.error("Failed to queue workflow:", I), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const p = JSON.parse(JSON.stringify(a));
    p[o].inputs.image = d, r && i && (p[i].inputs.image = `${r} [temp]`, p[i].inputs.channel = "red");
    const v = window.api;
    if (!(typeof v == "object" && v !== null && "fetchApi" in v && typeof v.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const j = v, x = await j.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: p,
        client_id: typeof j.clientId == "string" ? j.clientId : void 0
      })
    });
    return pi(x);
  },
  []
) }), Lf = (e) => !!(e && Array.isArray(e.widgets));
function by(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function dl(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = by(e), l = n.graph._nodes.filter((d) => ar(d.type));
  if (l.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = l[0];
  if (t) {
    const d = l.find((p) => String(p.id) === t);
    d && (a = d);
  }
  if (!Lf(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Ey = () => {
  const { dispatch: e } = ge();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var p, v;
      P.log("[Meld-Debug] injectMaskToGraph called with:", r), dl(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return P.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(l.graph._nodes))
        return P.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = l.graph._nodes.filter((y) => Vr(y.type));
      if (a.length === 0)
        return P.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Lf(o))
        return P.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((y) => y.name === "image"), c = `${r} [temp]`;
      P.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((y) => y.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (p = l.graph).afterChange) == null || v.call(p), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Al(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Cy(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = go(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let p = 0; p < r * l; p++) {
    const v = c.data[p * 4] ?? 0;
    d[p] = v > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function go(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, p = c * 4;
    d > 0 ? (i[p] = t[0], i[p + 1] = t[1], i[p + 2] = t[2], i[p + 3] = n) : (i[p] = 0, i[p + 1] = 0, i[p + 2] = 0, i[p + 3] = 0);
  }
  return o;
}
function Ny(e) {
  return e.data.every((t) => t === 0);
}
const Oc = (e) => e === "rect" || e === "ellipse" || e === "lasso", wi = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ge(), i = h.useMemo(() => a.images.find(($) => $.id === e) ?? a.lineageImages.find(($) => $.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = h.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: p } = Ey(), { executeWorkflow: v } = vi();
  Le({ onEscape: l });
  const y = h.useRef(null), j = h.useRef(null), x = h.useRef(null), w = h.useRef(null), [_, f] = h.useState(!1), [u, m] = h.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return Oc($) ? $ : "rect";
  });
  h.useEffect(() => {
    Oc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [g, b] = h.useState({ x: 0, y: 0 }), [S, k] = h.useState({ x: 0, y: 0 }), [N, R] = h.useState([]), [A, I] = h.useState(null), [O, B] = h.useState(!1), [M, V] = h.useState(1), [K, T] = h.useState({ x: 0, y: 0 }), [C, L] = h.useState(!1), [F, E] = h.useState(!1), D = h.useRef(null), W = h.useCallback(() => {
    const $ = x.current, H = j.current;
    if (!$ || !H) return null;
    const ee = H.getBoundingClientRect(), Y = $.naturalWidth, ne = $.naturalHeight;
    if (!Y || !ne) return null;
    const oe = Y / ne, Ne = ee.width / ee.height;
    let fe, _e, we = 0, Fe = 0;
    return oe > Ne ? (fe = ee.width, _e = ee.width / oe, Fe = (ee.height - _e) / 2) : (_e = ee.height, fe = ee.height * oe, we = (ee.width - fe) / 2), {
      left: we,
      top: Fe,
      width: fe,
      height: _e
    };
  }, []), z = h.useCallback(
    ($, H, ee, Y) => {
      if (!$) return H;
      const ne = $.getBoundingClientRect(), oe = ne.width / 2, Ne = ne.height / 2, fe = {
        x: (oe - H.x) / ee,
        y: (Ne - H.y) / ee
      };
      return { x: oe - fe.x * Y, y: Ne - fe.y * Y };
    },
    []
  ), Q = h.useCallback(() => {
    V(($) => {
      const H = Math.min($ * 1.2, 20);
      return T((ee) => z(j.current, ee, $, H)), H;
    });
  }, [z]), Z = h.useCallback(() => {
    V(($) => {
      const H = Math.max(0.1, $ / 1.2);
      return T((ee) => z(j.current, ee, $, H)), H;
    });
  }, [z]), ie = h.useCallback(() => {
    const $ = y.current;
    if (!$) return;
    const H = $.getContext("2d");
    if (!H) return;
    H.clearRect(0, 0, $.width, $.height);
    const ee = getComputedStyle(document.documentElement), Y = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = W();
    if (w.current && ne && (H.save(), H.globalAlpha = 0.5, H.drawImage(
      w.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), H.restore()), _) {
      const oe = Math.min(g.x, S.x), Ne = Math.min(g.y, S.y), fe = Math.abs(g.x - S.x), _e = Math.abs(g.y - S.y);
      if (H.save(), H.globalAlpha = 0.3, H.fillStyle = Y, H.strokeStyle = "white", H.lineWidth = 2, H.setLineDash([5, 5]), H.beginPath(), u === "rect")
        H.rect(oe, Ne, fe, _e);
      else if (u === "ellipse") {
        const we = oe + fe / 2, Fe = Ne + _e / 2;
        H.ellipse(we, Fe, fe / 2, _e / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && N.length > 1) {
        const we = N[0];
        if (we) {
          H.moveTo(we.x, we.y);
          for (let Fe = 1; Fe < N.length; Fe++) {
            const qt = N[Fe];
            qt && H.lineTo(qt.x, qt.y);
          }
          H.closePath();
        }
      }
      H.fill(), H.globalAlpha = 1, H.stroke(), H.restore();
    }
  }, [_, g, S, u, N, W]), [de, Pe] = h.useState([]), ue = h.useMemo(() => de.length > 0 ? de[de.length - 1] : x.current ? Al(x.current.naturalWidth, x.current.naturalHeight) : null, [de]);
  h.useEffect(() => {
    var $;
    ($ = x.current) != null && $.naturalWidth && de.length === 0 && Pe([
      Al(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [de.length]);
  const Et = h.useCallback(() => {
    var $;
    ($ = x.current) != null && $.naturalWidth && de.length === 0 && Pe([
      Al(x.current.naturalWidth, x.current.naturalHeight)
    ]);
  }, [de.length]), q = h.useRef(!1), Ht = h.useRef(0), Kt = ($) => {
    $.target === $.currentTarget && (q.current = !0);
  }, Gt = ($) => {
    $.target === $.currentTarget && q.current && !_ && l(), q.current = !1;
  };
  h.useEffect(() => {
    if (!ue) return;
    w.current || (w.current = document.createElement("canvas"));
    const $ = w.current;
    $.width = ue.width, $.height = ue.height;
    const H = $.getContext("2d");
    if (!H) return;
    const ee = go(ue, [255, 255, 255], 255);
    H.putImageData(ee, 0, 0), ie();
  }, [ue, ie]), h.useEffect(() => {
    _ && ie();
  }, [_, ie]), h.useEffect(() => {
    const $ = j.current;
    if (!$) return;
    const H = (ee) => {
      ee.preventDefault();
      const Y = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      V((ne) => {
        const oe = Math.min(Math.max(0.1, ne * Y), 20);
        return T((Ne) => {
          const fe = $.getBoundingClientRect(), _e = ee.clientX - fe.left, we = ee.clientY - fe.top, Fe = {
            x: (_e - Ne.x) / ne,
            y: (we - Ne.y) / ne
          };
          return {
            x: _e - Fe.x * oe,
            y: we - Fe.y * oe
          };
        }), oe;
      });
    };
    return $.addEventListener("wheel", H, { passive: !1 }), () => $.removeEventListener("wheel", H);
  }, []), h.useEffect(() => {
    if (!F) return;
    const $ = (ee) => {
      if (D.current) {
        const Y = ee.clientX - D.current.clientX, ne = ee.clientY - D.current.clientY;
        T({
          x: D.current.panX + Y,
          y: D.current.panY + ne
        });
      }
    }, H = () => {
      E(!1), D.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", H);
    };
  }, [F]), h.useEffect(() => {
    const $ = () => {
      j.current && y.current && (y.current.width = j.current.clientWidth, y.current.height = j.current.clientHeight, ie());
    }, H = new ResizeObserver($);
    return j.current && H.observe(j.current), $(), () => H.disconnect();
  }, [ie]);
  const On = ($) => {
    var we;
    const H = $.button === 2, ee = $.button === 1, Y = C && $.button === 0;
    if (H || ee || Y) {
      $.preventDefault(), $.stopPropagation(), D.current = {
        panX: K.x,
        panY: K.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, E(!0);
      return;
    }
    if ($.button !== 0 || _ || O || Date.now() - Ht.current < 100)
      return;
    $.preventDefault();
    const ne = W(), oe = (we = j.current) == null ? void 0 : we.getBoundingClientRect();
    if (!ne || !oe) return;
    f(!0);
    const Ne = {
      x: ($.clientX - oe.left - K.x) / M,
      y: ($.clientY - oe.top - K.y) / M
    }, fe = Math.max(ne.left, Math.min(Ne.x, ne.left + ne.width)), _e = Math.max(ne.top, Math.min(Ne.y, ne.top + ne.height));
    b({ x: fe, y: _e }), k({ x: fe, y: _e }), R(u === "lasso" ? [{ x: fe, y: _e }] : []), I(null);
  };
  h.useEffect(() => {
    if (!_) return;
    const $ = (ee) => {
      var _e;
      const Y = W(), ne = (_e = j.current) == null ? void 0 : _e.getBoundingClientRect();
      if (!Y || !ne) return;
      const oe = {
        x: (ee.clientX - ne.left - K.x) / M,
        y: (ee.clientY - ne.top - K.y) / M
      }, Ne = Math.max(Y.left, Math.min(oe.x, Y.left + Y.width)), fe = Math.max(Y.top, Math.min(oe.y, Y.top + Y.height));
      k({ x: Ne, y: fe }), u === "lasso" && R((we) => [...we, { x: Ne, y: fe }]);
    }, H = (ee) => {
      var oe;
      const Y = W(), ne = (oe = j.current) == null ? void 0 : oe.getBoundingClientRect();
      if (Y && ne && ue && x.current) {
        const Ne = {
          x: (ee.clientX - ne.left - K.x) / M,
          y: (ee.clientY - ne.top - K.y) / M
        }, fe = Math.max(Y.left, Math.min(Ne.x, Y.left + Y.width)), _e = Math.max(Y.top, Math.min(Ne.y, Y.top + Y.height)), we = Math.min(g.x, fe), Fe = Math.min(g.y, _e), qt = Math.abs(g.x - fe), xr = Math.abs(g.y - _e), mm = u === "lasso";
        if (qt > 5 || xr > 5 || mm && N.length > 2) {
          const pm = x.current.naturalWidth, hm = x.current.naturalHeight, An = pm / Y.width, Fn = hm / Y.height, gm = Cy(ue, (wn) => {
            if (u === "rect") {
              const xn = (we - Y.left) * An, _n = (Fe - Y.top) * Fn, Yt = qt * An, wl = xr * Fn;
              wn.rect(xn, _n, Yt, wl);
            } else if (u === "ellipse") {
              const xn = (we - Y.left) * An, _n = (Fe - Y.top) * Fn, Yt = qt * An, wl = xr * Fn, ym = xn + Yt / 2, vm = _n + wl / 2;
              wn.ellipse(ym, vm, Yt / 2, wl / 2, 0, 0, 2 * Math.PI);
            } else if (u === "lasso" && N.length > 2) {
              const xn = N[0];
              if (!xn) return;
              wn.moveTo(
                (xn.x - Y.left) * An,
                (xn.y - Y.top) * Fn
              );
              for (let _n = 1; _n < N.length; _n++) {
                const Yt = N[_n];
                Yt && wn.lineTo((Yt.x - Y.left) * An, (Yt.y - Y.top) * Fn);
              }
              wn.closePath();
            }
          });
          Pe((wn) => [...wn, gm]);
        }
      }
      Ht.current = Date.now(), f(!1), R([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", H);
    };
  }, [
    _,
    g.x,
    g.y,
    W,
    ue,
    u,
    N,
    K.x,
    K.y,
    M
  ]);
  const wr = h.useCallback(() => {
    de.length > 1 && Pe(($) => $.slice(0, -1));
  }, [de.length]);
  h.useEffect(() => {
    const $ = (Y) => {
      if (!Y) return !1;
      const ne = Y, oe = ne.tagName;
      return oe === "INPUT" || oe === "TEXTAREA" || oe === "BUTTON" || oe === "SELECT" || oe === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, H = (Y) => {
      Y.code === "Space" && !Y.repeat && ($(Y.target) || (Y.preventDefault(), L(!0))), (Y.metaKey || Y.ctrlKey) && Y.key.toLowerCase() === "z" && !Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), wr()) : Y.key === "Escape" && (Y.preventDefault(), Y.stopPropagation(), Y.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (Y) => {
      Y.code === "Space" && ($(Y.target) || (Y.preventDefault(), L(!1)));
    };
    return window.addEventListener("keydown", H, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", H, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [wr, l]);
  const vl = () => {
    if (x.current) {
      const $ = Al(
        x.current.naturalWidth,
        x.current.naturalHeight
      );
      Pe((H) => [...H, $]);
    }
  }, be = async () => {
    if (!ue || !x.current) return null;
    B(!0);
    try {
      const { width: $, height: H } = ue, ee = document.createElement("canvas");
      ee.width = $, ee.height = H;
      const Y = ee.getContext("2d");
      if (!Y) return null;
      const ne = go(ue, [255, 255, 255], 255);
      Y.putImageData(ne, 0, 0);
      const oe = await new Promise(
        (xr) => ee.toBlob(xr, "image/png")
      );
      if (!oe) return null;
      const fe = `meld_mask_${Date.now()}.png`, _e = new File([oe], fe, { type: "image/png" }), we = new FormData();
      we.append("image", _e), we.append("type", "temp"), we.append("overwrite", "true");
      const Fe = await te.fetchApi("/upload/image", {
        method: "POST",
        body: we
      });
      return (await pi(Fe)).name ?? null;
    } catch ($) {
      return P.error("Error uploading mask:", $), null;
    } finally {
      B(!1);
    }
  }, ot = async () => {
    if (!d) return;
    const $ = await be();
    $ && p(d, $) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, yt = async () => {
    if (!d) return;
    const $ = await be();
    $ && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, Dt = h.useMemo(() => ue && !Ny(ue), [ue]);
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: Kt,
      onMouseUp: Gt,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(wf, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(Jh, { size: 18 }),
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
                      /* @__PURE__ */ s.jsx(lg, { size: 18 }),
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
                    children: /* @__PURE__ */ s.jsx(_g, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      V(1), T({ x: 0, y: 0 });
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
                    onClick: Q,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(xg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: j,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: On,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: F ? "grabbing" : C ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${K.x}px, ${K.y}px) scale(${M})`,
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
                            src: gi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault(),
                            onLoad: Et
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: y,
                            className: "meld-mask-editor-canvas",
                            onDragStart: ($) => $.preventDefault()
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
                      onClick: ot,
                      disabled: !Dt || O,
                      type: "button",
                      children: [
                        O ? /* @__PURE__ */ s.jsx(Tc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ct, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: yt,
                      disabled: !Dt || O,
                      type: "button",
                      children: [
                        O ? /* @__PURE__ */ s.jsx(Tc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(il, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: wr,
                      disabled: de.length <= 1 || O,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(yg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: vl,
                      disabled: !Dt || O,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(he, { size: 16 }),
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
}, Rf = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: l,
  onClose: a
}) => {
  Le({ onEscape: a });
  const o = e[t];
  return h.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ s.jsx(
    wi,
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
}, Df = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Fl = (e) => e.replace(/^["']|["']$/g, ""), My = (e) => e.trim() ? Df(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Iy = (e, t) => {
  const n = Df(e), r = {
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
      const o = Fl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Fl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Fl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Fl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Ty = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState("Gallery"), [a, o] = h.useState({
    ...e.settings
  }), [i, c] = h.useState({}), [d, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, y] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [j, x] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [w, _] = h.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = h.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [m, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [b, S] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [k, N] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [R, A] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [I, O] = h.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [B, M] = h.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [V, K] = h.useState(
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
      const Q = Object.keys(a).filter(
        (Z) => a[Z] !== e.settings[Z] && !i[Z]
      );
      if (Q.length > 0)
        for (const Z of Q)
          await n(Z, a[Z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (Q, Z) => {
      o((ie) => ({
        ...ie,
        [Q]: !Z
      }));
    },
    handleNumberChange: (Q, Z, ie, de) => {
      Q === "gallery.initial_load_count" ? p(Z) : Q === "gallery.max_load_count" ? y(Z) : Q === "gallery.lineage_max_depth" ? x(Z) : Q === "viewer.thumbnail_window_size" ? _(Z) : Q === "gallery.trash_retention_days" ? u(Z) : Q === "gallery.auto_link_phash_threshold" ? g(Z) : Q === "gallery.suggest_phash_threshold" ? S(Z) : Q === "viewer.details.max_positive_prompt_lines" ? N(Z) : Q === "viewer.details.max_negative_prompt_lines" ? A(Z) : Q === "fullscreen.details.max_positive_prompt_lines" ? O(Z) : Q === "fullscreen.details.max_negative_prompt_lines" ? M(Z) : Q === "sidebar.thumbnail_size" && K(Z);
      const Pe = Number.parseInt(Z, 10);
      if (!Number.isNaN(Pe)) {
        let ue = Pe;
        ie !== void 0 && ue < ie && (ue = ie), de !== void 0 && ue > de && (ue = de), o((Et) => ({
          ...Et,
          [Q]: ue
        }));
      }
    },
    handleNumberBlur: (Q) => {
      !Q || !Q.key || (Q.key === "gallery.initial_load_count" ? p(a["gallery.initial_load_count"].toString()) : Q.key === "gallery.max_load_count" ? y(a["gallery.max_load_count"].toString()) : Q.key === "gallery.lineage_max_depth" ? x(a["gallery.lineage_max_depth"].toString()) : Q.key === "viewer.thumbnail_window_size" ? _(a["viewer.thumbnail_window_size"].toString()) : Q.key === "gallery.trash_retention_days" ? u(a["gallery.trash_retention_days"].toString()) : Q.key === "gallery.auto_link_phash_threshold" ? g(a["gallery.auto_link_phash_threshold"].toString()) : Q.key === "gallery.suggest_phash_threshold" ? S(a["gallery.suggest_phash_threshold"].toString()) : Q.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "viewer.details.max_negative_prompt_lines" ? A(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_positive_prompt_lines" ? O(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : Q.key === "fullscreen.details.max_negative_prompt_lines" ? M(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : Q.key === "sidebar.thumbnail_size" && K(a["sidebar.thumbnail_size"].toString()));
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
    handleClearThumbnailCache: () => {
      t({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          message: "Are you sure you want to delete all cached thumbnails?",
          onConfirm: async () => {
            try {
              await Bg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (Q) {
              P.error("Failed to clear thumbnail cache:", Q), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (Q) => typeof Q != "string" ? !1 : My(Q),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: j,
    thumbnailWindowSizeInput: w,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: b,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: R,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: V
  };
}, X = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Ly = ({
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
function Pf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function zf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Of(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Af(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Ff(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Pf, {})
  ] });
}
function Wf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function $f(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Pf, {})
  ] });
}
function Uf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Vf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Bf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Qf(e) {
  return /* @__PURE__ */ s.jsxs(Rt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Hf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: zf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Wf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: $f
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Af },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Ff
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Of
  },
  { id: "edit_tags", label: "Edit Tags", icon: Vf },
  { id: "edit_notes", label: "Edit Notes", icon: Bf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Uf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Qf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Bt }
], Ry = ({
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
            onChange: (d) => t((p) => ({
              ...p,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Hf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Dy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Py = ({
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
              onChange: (p) => {
                t((v) => ({
                  ...v,
                  [c]: p.target.value
                }));
              },
              onBlur: () => {
                const p = l(e[c] || "");
                r((v) => ({
                  ...v,
                  [c]: !p
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
}, zy = ({
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
  suggestPhashThresholdInput: p
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
            onChange: (v) => l((y) => ({
              ...y,
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
            value: p,
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
] }), Oy = ({
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
] }), Kf = () => {
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
    handleResetShortcuts: p,
    handleViewTrash: v,
    handleClearThumbnailCache: y,
    validateShortcut: j,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: w,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: g,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: k,
    fullscreenMaxNegativePromptLinesInput: N,
    thumbnailSizeInput: R
  } = Ty();
  Le({ onEscape: o });
  const A = h.useRef(!1), I = (V) => {
    V.target === V.currentTarget && (A.current = !0);
  }, O = (V) => {
    V.target === V.currentTarget && A.current && o(), A.current = !1;
  }, B = [
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
          zy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: y,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: m,
            suggestPhashThresholdInput: g
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Ry,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: R,
            initialLoadCountInput: x,
            maxLoadCountInput: w
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Oy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Ly,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: N
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          Py,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: j,
            handleToggle: i,
            handleResetShortcuts: p
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Dy, {});
      default:
        return null;
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: O,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (V) => V.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ s.jsx(he, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: B.map((V) => /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === V.id ? "active" : ""}`,
                onClick: () => t(V.id),
                children: V.label
              },
              V.id
            )) }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: M() })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, kt = "none", ul = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Ye = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, Ay = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, Gf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ge(), [o, i] = h.useState([]), [c, d] = h.useState(t), [p, v] = h.useState(""), [y, j] = h.useState(!0), [x, w] = h.useState(!1), _ = h.useRef(null), f = e.length > 1, u = h.useRef(!1), m = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, g = (I) => {
    I.target === I.currentTarget && u.current && n(), u.current = !1;
  }, b = h.useCallback(async () => {
    j(!0);
    try {
      const I = await yi();
      i(I);
    } catch (I) {
      P.error("Failed to fetch tags:", I);
    } finally {
      j(!1);
    }
  }, []);
  h.useEffect(() => {
    b();
  }, [b]), h.useEffect(() => {
    _.current && _.current.focus();
  }, []), Le({ onEscape: n });
  const S = h.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(p.toLowerCase()) && !c.includes(I.name)
  ), [o, p, c]), k = (I) => {
    const O = I.trim();
    if (O.toLowerCase() === kt) {
      alert(`Tag name '${kt}' is reserved for search and cannot be used.`);
      return;
    }
    O && !c.includes(O) && (d([...c, O]), v(""));
  }, N = (I) => {
    d(c.filter((O) => O !== I));
  }, R = async () => {
    w(!0);
    try {
      if (f) {
        const I = c.filter((B) => !t.includes(B)), O = t.filter((B) => !c.includes(B));
        await Sf(e, I, O);
      } else {
        const I = e[0];
        if (I === void 0)
          throw new Error("No image selected");
        await Mg(I, c);
      }
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      P.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, A = (I) => {
    I.key === "Enter" && p.trim() && (Ye(I), k(p.trim()));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(vr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(I),
                    children: /* @__PURE__ */ s.jsx(he, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Dn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: p,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: A
                  }
                ),
                p.trim() && !c.includes(p.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => k(p),
                    children: [
                      /* @__PURE__ */ s.jsx(Us, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? p ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((I) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => k(I.name),
                  children: I.name
                },
                I.id
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
                onClick: R,
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
}, Vs = (e, t) => {
  const n = h.useCallback(async (w) => po(w), []), r = h.useCallback(
    async (w, _, f) => {
      await Sf(w, _, f);
    },
    []
  ), l = h.useCallback(async (w) => {
    try {
      const _ = await Tg(w.id);
      return _.workflow ? (await window.app.loadGraphData(_.workflow), P.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return P.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = h.useCallback(async (w) => {
    try {
      const _ = await Lg(w.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, m = window.LiteGraph;
      if (!u.graph || !u.canvas || !m)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const g = m.createNode(f);
      if (!g)
        return P.error(`Node type ${f} not found.`), alert(
          `Node type ${f} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const b = _.is_flux ? {
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
      if (g.widgets) {
        for (const [R, A] of Object.entries(b)) {
          const I = _[R];
          if (I != null && I !== "") {
            const O = g.widgets.find((B) => B.name === A);
            O && (O.value = I);
          }
        }
        const N = g.widgets.find((R) => R.name === "control_after_generate");
        N && (N.value = "fixed");
      }
      const S = u.canvas.ds.offset, k = u.canvas.ds.scale;
      return g.pos = [(-S[0] + 400) / k, (-S[1] + 300) / k], u.graph.add(g), u.canvas.selectNode(g), u.canvas.centerOnNode(g), !0;
    } catch (_) {
      return P.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
    }
  }, []), o = h.useCallback(
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
  ), i = h.useCallback(
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
  ), c = h.useCallback(
    (w) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: w.id }
      });
    },
    [t]
  ), d = h.useCallback(
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
      const f = _.graph._nodes.filter((m) => ar(m.type));
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
              dl(w, m);
            }
          }
        }), !0;
      const u = dl(w);
      return u.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: u.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : u.reason === "no_widgets" || u.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), p = h.useCallback(
    (w) => {
      const _ = Array.isArray(w) ? w : [w];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: _ }
      });
    },
    [t]
  ), v = h.useCallback(
    async (w, _ = "run") => {
      var u;
      P.log("handleRunWithMask called", w, _);
      const f = Array.isArray(w) ? w : [w];
      if (_ === "apply") {
        const m = window.app, g = ((u = m == null ? void 0 : m.graph) == null ? void 0 : u._nodes) || [];
        P.log(
          "Current graph nodes:",
          g.map((N) => ({
            id: N.id,
            type: N.type ?? ""
          }))
        );
        const b = g.some((N) => Vr(N.type)), S = g.some((N) => ar(N.type));
        if (P.log("Nodes found:", { hasMaskNode: b, hasLoaderNode: S }), !b || !S) {
          const N = [];
          S || N.push("'Meld Image Loader'"), b || N.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${N.join(" and ")}. Please add them to use the Mask Tool.`
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
        const k = f[0];
        if (!k) {
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
          payload: { type: "mask_editor", imageId: k.id, mode: _ }
        });
        return;
      }
      try {
        if (!(await Mf()).some((b) => b.valid && b.mask_count >= 1)) {
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
        P.error("[Meld] Error checking workflows:", m);
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
  ), y = h.useCallback(
    async (w, _) => {
      try {
        const f = w.id, m = (await po([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: m }), _ == null || _();
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  ), j = h.useCallback(
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
  ), x = h.useCallback(
    async (w, _) => {
      try {
        const f = await Ig(w, _);
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
    handleRunWithWorkflow: p,
    handleRunWithMask: v,
    handleRestore: y,
    handleDelete: j,
    handleEditNotes: i,
    handleUpdateUserNotes: x
  };
}, qf = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = ge(), { handleUpdateUserNotes: a } = Vs(r, l), [o, i] = h.useState(t), [c, d] = h.useState(!1), p = h.useRef(null), v = h.useRef(!1), y = (w) => {
    w.target === w.currentTarget && (v.current = !0);
  }, j = (w) => {
    w.target === w.currentTarget && v.current && n(), v.current = !1;
  };
  h.useEffect(() => {
    p.current && p.current.focus();
  }, []);
  const x = h.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (w) {
      P.error("Failed to update notes:", w), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return h.useEffect(() => {
    const w = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === p.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), x());
    };
    return window.addEventListener("keydown", w, { capture: !0 }), () => {
      window.removeEventListener("keydown", w, {
        capture: !0
      });
    };
  }, [x]), Le({ onEscape: n }), me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: j,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (w) => w.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(pg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: p,
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
}, Yf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ge(), l = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Le({ onEscape: l });
  const a = h.useRef(!1), o = h.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = h.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return me.createPortal(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: l, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(il, { size: 12 })
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
}, Xf = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var K;
  const { dispatch: l } = ge(), [a, o] = h.useState([]), [i, c] = h.useState(!0), [d, p] = h.useState(null), [v, y] = h.useState(!1), [j, x] = h.useState(null), [w, _] = h.useState({}), [f, u] = h.useState({}), [m, g] = h.useState(""), b = h.useRef(null), S = h.useMemo(() => a.map((T) => {
    let C = T.valid, L = T.reason;
    return r && T.mask_count === 0 && (C = !1, L = "No 'Load Image (as Mask)' node found."), { ...T, valid: C, reason: L };
  }).sort((T, C) => T.valid !== C.valid ? T.valid ? -1 : 1 : T.name.localeCompare(C.name)), [a, r]), k = h.useMemo(() => {
    if (!m.trim()) return S;
    const T = m.toLowerCase();
    return S.filter((C) => C.name.toLowerCase().includes(T));
  }, [S, m]), N = h.useCallback(async () => {
    try {
      c(!0);
      const T = await Mf();
      o(T), p(null);
    } catch (T) {
      p(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  h.useEffect(() => {
    N();
  }, [N]), h.useEffect(() => {
    !i && b.current && b.current.focus();
  }, [i]);
  const R = h.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Le({ onEscape: R });
  const A = h.useRef(!1), I = h.useCallback((T) => {
    T.target === T.currentTarget && (A.current = !0);
  }, []), O = h.useCallback(
    (T) => {
      T.target === T.currentTarget && A.current && R(), A.current = !1;
    },
    [R]
  ), B = async (T, C) => {
    if (!v)
      try {
        y(!0);
        const L = await t(T, C);
        n == null || n(), L !== !1 && R();
      } catch (L) {
        p(L instanceof Error ? L.message : String(L)), y(!1);
      }
  }, M = async (T) => {
    if (!(w[T] || f[T]))
      try {
        u((E) => ({ ...E, [T]: !0 }));
        const C = await If(T), L = [], F = (E) => {
          if (!E) return !1;
          const D = E.replace(/\s+/g, "").toLowerCase();
          return r ? D === "loadimagemask" : D === "meldimageloader" || D === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          P.log("Extracting nodes from UI format workflow", C.nodes.length);
          for (const E of C.nodes)
            F(E.type) && (P.log("Found target node (UI):", E.id, E.type, E.title), L.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          P.log("Extracting nodes from API format workflow");
          for (const E in C) {
            const D = C[E];
            D && typeof D == "object" && F(D.class_type) && (P.log("Found target node (API):", E, D.class_type), L.push({
              id: E,
              type: D.class_type || ""
            }));
          }
        }
        L.length === 0 && P.warn("No loader nodes found in workflow JSON despite count > 0"), _((E) => ({ ...E, [T]: L }));
      } catch (C) {
        P.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [T]: !1 }));
      }
  }, V = (T) => {
    if (!T.valid || v) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      B(T.name);
      return;
    }
    j === T.name ? x(null) : (x(T.name), M(T.name));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: O,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(mi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: R, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(ff, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (K = e[0]) == null ? void 0 : K.filename }),
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
                  /* @__PURE__ */ s.jsx(Dn, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: b,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: m,
                      onChange: (T) => g(T.target.value)
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var T;
                        g(""), (T = b.current) == null || T.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(he, { size: 14 })
                    }
                  )
                ] }),
                k.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : k.map((T) => {
                  const C = r ? T.mask_count : T.loader_count + T.load_image_count, L = j === T.name, F = w[T.name] || [], E = f[T.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => V(T),
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
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (D) => {
                                D.stopPropagation(), B(T.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(il, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && C > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (D) => {
                                D.stopPropagation(), V(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  fi,
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
                    L && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: E ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: F.map((D) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => B(T.name, D.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: D.title || D.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                D.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(il, { size: 12 })
                          ]
                        },
                        D.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: R,
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
}, Fy = ({ message: e, onConfirm: t, onCancel: n }) => {
  const r = h.useRef(null), l = h.useRef(null);
  return Le({ onEscape: n }), h.useEffect(() => {
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
}, yo = async (e, t) => {
  await Cg(e, t), se.getState().removeImages(e);
}, Zf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ge(), o = h.useRef(!0);
  h.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = h.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = h.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((g) => {
    const b = Number.parseInt(g, 10);
    return l.images.find((S) => S.id === b) || l.lineageImages.find((S) => S.id === b) || null;
  }).filter((g) => g !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), p = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    p.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Le({ onEscape: v });
  const y = h.useRef(!1), j = h.useCallback((u) => {
    u.target === u.currentTarget && (y.current = !0);
  }, []), x = h.useCallback(
    (u) => {
      u.target === u.currentTarget && y.current && v(), y.current = !1;
    },
    [v]
  ), w = h.useCallback(
    (u) => {
      if (!o.current) return;
      const m = p.current;
      if (m === null || !u.has(m))
        return;
      const g = d.findIndex(
        (S) => S.id === m
      );
      if (g === -1) return;
      let b = !1;
      for (let S = g + 1; S < d.length; S++) {
        const k = d[S];
        if (k && !u.has(k.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: k.id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), b = !0;
          break;
        }
      }
      if (!b)
        for (let S = g - 1; S >= 0; S--) {
          const k = d[S];
          if (k && !u.has(k.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: k.id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), b = !0;
            break;
          }
        }
      b || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), _ = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e), b = d.filter((S) => g.has(S.id));
      if (w(g), await yo(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(b), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (g) {
      a({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e);
      for (const S of e) {
        const k = await hi(S);
        if (!o.current) return;
        for (const N of k)
          g.add(N.id);
      }
      const b = d.filter((S) => g.has(S.id));
      if (w(g), await yo(Array.from(g), n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(b), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(g)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (g) {
      a({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: j,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Bt, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: v, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                            Kh,
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
}, Jf = ({ message: e }) => {
  const { dispatch: t } = ge(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Le({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ff, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, em = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = ge(), [l, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(!1), p = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Le({ onEscape: p });
  const v = h.useRef(!1), y = (S) => {
    S.target === S.currentTarget && (v.current = !0);
  }, j = (S) => {
    S.target === S.currentTarget && v.current && p(), v.current = !1;
  }, x = t.images.find((S) => S.id === e), w = h.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], k = await Ng(e, S);
      a(k);
    } catch (S) {
      P.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    w();
  }, [w]);
  const _ = async (S) => {
    if (S == null) {
      P.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!x || S === x.parent_id) && !(x.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Rc(e, S), await _f(e), await r(), p();
      } catch (k) {
        P.error("Failed to link parent:", k);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Rc(e, null), await r(), p();
      } catch (S) {
        P.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const k = await sy(S), { id: N } = await kf({
        filename: k.name,
        subfolder: k.subfolder || "",
        type: k.type || "input"
      });
      if (N === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await _(N);
    } catch (k) {
      P.error("Failed to upload/register image:", k);
    } finally {
      i(!1);
    }
  }, m = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const k = S.dataTransfer.files[0];
    k != null && k.type.startsWith("image/") && u(k);
  };
  if (!x) return null;
  const g = l.filter((S) => S.is_source_match), b = l.filter((S) => !S.is_source_match);
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: j,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              x.id
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: p, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                        /* @__PURE__ */ s.jsx(og, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: pt(
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
                      children: /* @__PURE__ */ s.jsx(ag, { size: 16 })
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
                  /* @__PURE__ */ s.jsx(vg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((S) => {
                  const k = S.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${k ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !k && _(S.id),
                      style: {
                        cursor: k ? "default" : "pointer",
                        ...k ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: pt(S, 64), alt: S.filename }),
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
                b.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: b.map((S) => {
                  const k = S.id === x.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${k ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !k && _(S.id),
                      style: {
                        cursor: k ? "default" : "pointer",
                        ...k ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: pt(S, 64), alt: S.filename }),
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
}, Wy = () => {
  const { state: e, dispatch: t } = ge(), n = e.toastMessage;
  return h.useEffect(() => {
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
}, $y = () => {
  const { state: e, dispatch: t } = ge(), { executeWorkflow: n } = vi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Xf,
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
      Yf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && dl(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(em, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Cf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Kf, {}),
    e.activeModal.type === "tag_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Gf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && me.createPortal(/* @__PURE__ */ s.jsx(Jf, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Zf,
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
    e.activeModal.type === "mask_editor" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        wi,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Rf,
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
    e.activeModal.type === "note_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        qf,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        py,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Fy,
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
    e.toastMessage && me.createPortal(/* @__PURE__ */ s.jsx(Wy, {}), document.body)
  ] });
}, Uy = () => {
  const { state: e, dispatch: t } = ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await dy(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (p) {
      P.error("Failed to cancel scan:", p);
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
        children: /* @__PURE__ */ s.jsx(wf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Xh, { size: 14, className: "meld-success-icon" }),
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
}, xi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Vy = Object.keys(xi), Ac = /* @__PURE__ */ new Map(), Fc = "data-meld-portal-root";
let ya = null, va = null;
const Wc = ".comfyui-body-bottom";
function $c(e) {
  var n, r, l, a;
  const t = `[${Fc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Fc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Wc) || (a = c.querySelector) != null && a.call(c, Wc)) return !0;
  }
  return !1;
}
function By(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Qy(e) {
  const t = xi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function tm(e) {
  const t = xi[e], n = Ac.get(e) ?? Qy(e);
  Ac.set(e, n);
  const r = By(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function nm() {
  for (const e of Vy)
    tm(e);
}
function Uc() {
  va === null && (va = requestAnimationFrame(() => {
    va = null, nm();
  }));
}
function rm(e) {
  return tm(e);
}
function Hy() {
  ya || typeof document > "u" || !document.body || (nm(), ya = new MutationObserver((e) => {
    for (const t of e) {
      if ($c(t.addedNodes)) {
        Uc();
        return;
      }
      if ($c(t.removedNodes)) {
        Uc();
        return;
      }
    }
  }), ya.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Bs = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  h.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Ky = () => {
  const { state: e } = ge(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = h.useCallback(
    (a) => {
      if (Ay())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (ul(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Bs({ onKeyDown: l, enabled: r });
}, lm = ({ message: e, onConfirm: t, onCancel: n }) => (Le({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
)), fl = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = h.useRef(t), i = h.useRef(n);
  h.useEffect(() => {
    o.current = t;
  }, [t]), h.useEffect(() => {
    i.current = n;
  }, [n]), h.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const p = d.target;
      if (!(p instanceof Node))
        return;
      o.current.some((y) => {
        const j = y.current;
        return j ? j.contains(p) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Gy = (e, t, n, r, l) => {
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
        P.warn("move_folder action is not yet implemented"), l == null || l();
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
        P.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, qy = ({ config: e }) => {
  var F;
  const t = se((E) => E.buckets), n = se((E) => E.slots), r = se((E) => E.images), l = n.length, { state: a, dispatch: o } = ge(), [i, c] = h.useState(!1), [d, p] = h.useState(!1), [v, y] = h.useState(!1), [j, x] = h.useState(e.label), [w, _] = h.useState(e.color), [f, u] = h.useState([]), [m, g] = h.useState(null), b = h.useRef(null), S = h.useRef(null);
  fl({
    enabled: i,
    insideRefs: [S],
    onOutside: () => c(!1)
  }), fl({
    enabled: v,
    insideRefs: [b],
    onOutside: () => y(!1)
  });
  const k = t[e.id] || [], N = k.length, R = k.map((E) => {
    const D = Number(E);
    let W = a.images.find((z) => z.id === D);
    return W || (W = a.lineageImages.find((z) => z.id === D)), W || (W = r[E]), W;
  }).filter(Boolean);
  h.useEffect(() => {
    u((E) => {
      const D = E.filter((W) => k.includes(String(W)));
      return D.length !== E.length ? D : E;
    });
  }, [k]);
  const A = f.filter((E) => k.includes(String(E))), I = A.length > 0, O = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, B = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, M = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const D = E.dataTransfer.getData("text/plain");
    D && D.split(",").forEach((z) => {
      if (z) {
        const Q = z.trim(), Z = Number(Q);
        let ie = a.images.find((de) => de.id === Z);
        ie || (ie = a.lineageImages.find((de) => de.id === Z)), se.getState().addToBucket(e.id, Q, ie);
      }
    });
  }, V = (E, D) => {
    E.stopPropagation();
    let W = [D];
    A.includes(D) ? W = A : (u([D]), g(D)), E.dataTransfer.setData("text/plain", W.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, K = (E, D) => {
    if (E.dataTransfer.dropEffect === "none") {
      const W = A.includes(D) ? A : [D];
      W.forEach((z) => {
        se.getState().removeFromBucket(e.id, String(z));
      }), u((z) => z.filter((Q) => !W.includes(Q)));
    }
  }, T = (E) => {
    if (N === 0) return;
    const D = {
      type: E
    }, W = I ? A : k.map(Number);
    if (W.length === 0) return;
    const z = W.map((ie) => R.find((de) => de.id === ie)).filter(Boolean), Q = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Gy(D, W, z, o, () => {
      se.getState().showToast(Q[E] ?? "Done");
    });
  }, C = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), p(!1);
  }, L = () => {
    const E = se.getState();
    E.slots.length <= 1 || (E.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: O,
      onDragLeave: B,
      onDrop: M,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: N === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : R.map((E) => {
          const D = pt(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${A.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (W) => {
                if (W.ctrlKey || W.metaKey)
                  u(
                    (z) => z.includes(E.id) ? z.filter((Q) => Q !== E.id) : [...z, E.id]
                  ), g(E.id);
                else if (W.shiftKey && m !== null) {
                  const z = R.findIndex((Z) => Z.id === E.id), Q = R.findIndex((Z) => Z.id === m);
                  if (z !== -1 && Q !== -1) {
                    const Z = Math.min(z, Q), ie = Math.max(z, Q), de = R.slice(Z, ie + 1).map((Pe) => Pe.id);
                    u((Pe) => Array.from(/* @__PURE__ */ new Set([...Pe, ...de])));
                  }
                  g(E.id);
                } else
                  u([]), g(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: E.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (W) => V(W, E.id),
              onDragEnd: (W) => K(W, E.id),
              children: /* @__PURE__ */ s.jsx("img", { src: D, alt: E.filename, draggable: !1 })
            },
            E.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: b, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => y(!v),
                disabled: N === 0,
                title: "Actions",
                children: [
                  I ? `Action (${A.length})` : "Action",
                  /* @__PURE__ */ s.jsx(Zh, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: vr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: mi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: wg
              },
              {
                type: "download",
                label: "Download",
                icon: ol
              },
              {
                type: "delete",
                label: "Delete",
                icon: Bt,
                danger: !0
              }
            ].map((E) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${E.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in E && E.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (D) => D.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (T(E.type), y(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(E.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: E.label })
                ]
              },
              E.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => p(!0),
              title: "Clear Tab",
              disabled: N === 0,
              children: /* @__PURE__ */ s.jsx(eg, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(vf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: j,
                    onChange: (E) => x(E.target.value),
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
                          value: w.startsWith("var") ? ((F = w.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : F[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(w) ? w : "#9ca3af",
                          onChange: (E) => _(E.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: w,
                          onChange: (E) => _(E.target.value),
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
                    const E = se.getState(), D = j.trim();
                    if (!D) {
                      E.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (E.slots.some(
                      (z) => z.id !== e.id && (z.label.toLowerCase() === D.toLowerCase() || z.id.toLowerCase() === D.toLowerCase())
                    )) {
                      E.showToast(`Error: "${D}" is already in use`, "error");
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: D,
                      color: w
                    }), c(!1), E.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: L,
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
          lm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: C,
            onCancel: () => p(!1)
          }
        )
      ]
    }
  );
}, Yy = () => {
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
}, Xy = () => {
  var j;
  Ky();
  const e = se((x) => x.isOpen), t = se((x) => x.setIsOpen), [n, r] = h.useState(!1);
  Le({
    onEscape: () => t(!1),
    enabled: e && !n
  }), h.useEffect(() => {
    e || r(!1);
  }, [e]);
  const l = se((x) => x.slots), a = se((x) => x.buckets), { state: o } = ge(), [i, c] = h.useState(((j = l[0]) == null ? void 0 : j.id) || "keep"), d = rm("lightTable");
  if (!e) return null;
  const p = () => {
    const x = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: x,
      label: `Tab ${l.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(x);
  }, v = () => {
    l.forEach((x) => {
      se.getState().clearBucket(x.id);
    }), se.getState().showToast("All tabs cleared"), r(!1);
  }, y = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
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
                  const g = m.trim(), b = o.images.find((S) => String(S.id) === g);
                  se.getState().addToBucket(x.id, g, b);
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
          onClick: p,
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
          children: /* @__PURE__ */ s.jsx(Us, { size: 16 })
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
            /* @__PURE__ */ s.jsx(hg, { size: 14 }),
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
          children: /* @__PURE__ */ s.jsx(he, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: l.map((x) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === x.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(qy, { config: x })
      },
      x.id
    )) }),
    n && /* @__PURE__ */ s.jsx(
      lm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Yy, {})
  ] });
  return me.createPortal(y, d);
}, sm = () => {
  const { state: e, refreshFavorites: t } = ge(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [o, i] = h.useState("info"), [c, d] = h.useState(null), [p, v] = h.useState(""), [y, j] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const x = h.useCallback(
    async (u, m, g) => {
      u.stopPropagation();
      const b = `Are you sure you want to delete the favorite "${g}"?`;
      if (window.confirm(b))
        try {
          await Dc(m), await t();
        } catch (S) {
          P.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), w = h.useCallback((u, m) => {
    u.stopPropagation(), d(m), v(m.name), j(m.query);
  }, []), _ = h.useCallback(async () => {
    if (!(!c || !p.trim() || !y.trim()))
      try {
        r(!0), await $g(c.id, p, y), await t(), d(null);
      } catch (u) {
        P.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, p, y, t]), f = h.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((m) => m.query === e.searchQuery)) {
      const m = e.favorites.find((g) => g.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          return await Dc(m.id), await t(), !0;
        } catch (g) {
          return P.error("Failed to delete favorite:", g), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Wg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (m) {
      return P.error("Failed to save favorite:", m), !1;
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
    editFavoriteName: p,
    setEditFavoriteName: v,
    editFavoriteQuery: y,
    setEditFavoriteQuery: j,
    handleDeleteFavorite: x,
    handleEditFavorite: w,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, m = "info") => {
      a(u), i(m);
    }
  };
}, am = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [l, a] = h.useState(!1), [o, i] = h.useState(!1), [c, d] = h.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(yf, { size: 14 })
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
                  children: /* @__PURE__ */ s.jsx(Bt, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Zy = "_menu_jab2z_1", Jy = "_header_jab2z_14", ev = "_title_jab2z_23", tv = "_count_jab2z_32", nv = "_list_jab2z_37", rv = "_toast_jab2z_46", lv = "_editTitle_jab2z_56", sv = "_form_jab2z_62", av = "_fieldGroup_jab2z_69", ov = "_label_jab2z_75", iv = "_input_jab2z_81", cv = "_textarea_jab2z_82", Ge = {
  menu: Zy,
  header: Jy,
  title: ev,
  count: tv,
  list: nv,
  toast: rv,
  editTitle: lv,
  form: sv,
  fieldGroup: av,
  label: ov,
  input: iv,
  textarea: cv
}, dv = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ge(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: p,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: y,
    handleEditFavorite: j,
    handleSaveEditFavorite: x
  } = sm(), [w, _] = h.useState({ top: 0, left: 0 }), f = h.useRef(null), u = h.useRef(null);
  return Le({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), fl({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), h.useEffect(() => {
    if (e) {
      let b = e.left;
      const S = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), _({ top: S, left: b });
    }
  }, [e]), h.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? me.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${Ge.menu} meld-favorites-context-menu`,
          style: {
            top: w.top,
            left: w.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: Ge.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: Ge.title, children: [
                /* @__PURE__ */ s.jsx(
                  pr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: Ge.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: Ge.list, children: r.favorites.map((m) => /* @__PURE__ */ s.jsx(
              am,
              {
                fav: m,
                onSelect: (g) => {
                  n(g), t();
                },
                onEdit: j,
                onDelete: y
              },
              m.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: Ge.toast, children: a })
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
                  /* @__PURE__ */ s.jsxs("h2", { className: Ge.editTitle, children: [
                    /* @__PURE__ */ s.jsx(pr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: Ge.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: Ge.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: Ge.label, children: "Name" }),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: u,
                        type: "text",
                        value: c,
                        onChange: (m) => d(m.target.value),
                        placeholder: "Favorite Name",
                        className: Ge.input,
                        onKeyDown: (m) => {
                          m.key === "Enter" && (Ye(m), x()), m.key === "Escape" && (Ye(m), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: Ge.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: Ge.label, children: "Search Query" }),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: p,
                        onChange: (m) => v(m.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ge.textarea,
                        onKeyDown: (m) => {
                          m.key === "Enter" && !m.shiftKey && (Ye(m), x()), m.key === "Escape" && (Ye(m), i(null));
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
                      disabled: l || !c.trim() || !p.trim(),
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
}, uv = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState(e.searchQuery), [a, o] = h.useState([]), [i, c] = h.useState(!1), [d, p] = h.useState([]), [v, y] = h.useState([]), j = e.settings["search.show_all_keywords"], [x, w] = h.useState(-1), [_, f] = h.useState(null), u = h.useRef(null), m = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (v.length > 0) return;
    const T = await Og();
    y(T);
  }, [v.length]);
  h.useEffect(() => {
    Ag().then((T) => {
      f(T);
    }), j && g();
  }, [g, j]);
  const b = h.useMemo(() => {
    if (!_) return null;
    const T = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${T}):(.*)$`, "i");
  }, [_]), S = h.useCallback(() => {
    const T = !j;
    T && g(), n("search.show_all_keywords", T);
  }, [j, g, n]), k = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    zg().then((T) => {
      p(T);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var T;
    (T = u.current) == null || T.focus();
  }, []);
  const N = h.useCallback(
    (T, C = !0) => {
      m.current !== T && (P.log("SearchBar: triggering search", { query: T }), t({ type: "SET_SEARCH_QUERY", payload: T }), C && c(!1), m.current = T);
    },
    [t]
  );
  h.useEffect(() => {
    const T = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !b) {
        o([]), c(!1);
        return;
      }
      const C = Wl(r), L = C[C.length - 1];
      if (L) {
        const F = L.match(b);
        if (F) {
          const E = F[1];
          let D = F[2];
          if (!E || D === void 0) {
            o([]), c(!1);
            return;
          }
          const W = E.toLowerCase();
          D.startsWith('"') && (D = D.substring(1)), D.endsWith('"') && (D = D.substring(0, D.length - 1));
          const z = await Pg(D, W);
          o(z), c(z.length > 0), w(-1);
        } else {
          const E = L.replace(/^([-!])/, "").toLowerCase();
          if (E && _) {
            const D = _.all_prefixes.filter((W) => W.startsWith(E)).map((W) => ({
              type: W,
              value: "",
              count: 0
            }));
            if (D.length > 0) {
              o(D), c(!0), w(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(T);
  }, [r, e.settings["search.input_suggest"], b, _]);
  const R = h.useCallback(
    (T) => {
      var z;
      if (!T) return;
      const C = Wl(r), F = (C.pop() || "").match(/^([-!])/), E = F ? F[1] : "", W = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(T.type);
      if (T.value === "") {
        const Q = `${[...C, `${E}${T.type}:`].join(" ").trim()}`;
        l(Q);
      } else {
        const Q = W ? T.value : `"${T.value}"`, Z = `${[...C, `${E}${T.type}:${Q}`].join(" ").trim()} `;
        l(Z), o([]), c(!1);
      }
      (z = u.current) == null || z.focus();
    },
    [r, _]
  ), A = (T) => {
    if (T)
      if (T.key === "Enter")
        if (Ye(T), i && x >= 0) {
          const C = a[x];
          C && R(C);
        } else
          N(r);
      else if (T.key === "Tab") {
        if (i && a.length > 0) {
          Ye(T);
          const C = x >= 0 ? x : 0, L = a[C];
          L && R(L);
        }
      } else T.key === "ArrowDown" ? i && (Ye(T), w((C) => Math.min(C + 1, a.length - 1))) : T.key === "ArrowUp" ? i && (Ye(T), w((C) => Math.max(C - 1, -1))) : T.key === "Escape" && (Ye(T), c(!1));
  }, I = h.useCallback(() => {
    l(""), N("");
  }, [N]), O = h.useCallback(
    (T, C, L = !1) => {
      var Et;
      if (!T) return;
      const F = Wl(r), E = F[F.length - 1] || "";
      let D = !1;
      const W = E.replace(/^([-!])/, "").toLowerCase();
      W && T.toLowerCase().startsWith(W) && (D = !0);
      const z = E.match(/^([-!])/), Q = D && z ? z[1] : "";
      if (D && F.pop(), L) {
        const q = [...F, `${Q}${T}:`].filter(Boolean).join(" ");
        l(q), (Et = u.current) == null || Et.focus();
        return;
      }
      const de = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(T) ? C : `"${C}"`, Pe = `${Q}${T}:${de}`, ue = [...F, Pe].filter(Boolean).join(" ");
      l(ue), N(ue);
    },
    [r, N, _]
  ), B = h.useCallback(
    (T) => {
      l(T), T || N("");
    },
    [N]
  ), M = h.useCallback(() => {
    if (r === m.current || !b) return;
    const T = Wl(r), C = T[T.length - 1];
    if (!C) return;
    const L = !!C.match(b), F = C.replace(/^([-!])/, "").toLowerCase(), E = F && (_ == null ? void 0 : _.all_prefixes.some((D) => D.startsWith(F)));
    (L || E) && c(!0);
  }, [r, b, _]), V = h.useRef(null), K = h.useCallback(() => {
    V.current = setTimeout(() => c(!1), 200);
  }, []);
  return h.useEffect(() => () => {
    V.current && clearTimeout(V.current);
  }, []), {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: j,
    toggleShowAllKeywords: S,
    selectedIndex: x,
    setSelectedIndex: w,
    inputRef: u,
    isQueryChanged: k,
    handleSearch: N,
    handleKeyDown: A,
    applySuggestion: R,
    clearSearch: I,
    applySearchSuggestion: O,
    handleInputChange: B,
    handleInputFocus: M,
    handleInputBlur: K
  };
}, Vc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(vr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(qh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(gg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Yh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(pf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(mf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(tg, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Gh, { size: 12 });
    default:
      return null;
  }
}, fv = ({
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
  toggleShowAllKeywords: p,
  applySearchSuggestion: v,
  favorites: y,
  onSelectFavorite: j,
  onEditFavorite: x,
  onDeleteFavorite: w
}) => {
  const _ = (g, b, S) => /* @__PURE__ */ s.jsxs(
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
      onMouseEnter: (k) => {
        k.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", k.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", k.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (k) => {
        k.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", k.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", k.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Vc(g.type)
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
    `${S}-${g.type}:${g.value}:${b}`
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
      children: t.map((g, b) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(g);
          },
          onMouseEnter: () => r(b),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: b === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: b === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: b === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: b === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Vc(g.type)
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
                      color: g.value === kt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: g.value === kt ? "bold" : "normal"
                    },
                    children: g.value === kt ? g.type === "tag" ? `Untagged (${kt})` : `No ${g.type} (${kt})` : g.value
                  }
                )
              ]
            }
          )
        },
        `${g.type}:${g.value}`
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
            children: i.map((g, b) => _(g, b, "quick"))
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
                  children: Array.from(new Set(c.map((g) => g.type))).map(
                    (g, b) => _({ type: g, value: "" }, b, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => y.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(pr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: y.map((g) => /* @__PURE__ */ s.jsx(
              am,
              {
                fav: g,
                onSelect: j,
                onEdit: x,
                onDelete: w
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
        f(),
        u(),
        m()
      ]
    }
  );
}, mv = () => {
  const { state: e } = ge(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: p,
    inputRef: v,
    isQueryChanged: y,
    handleSearch: j,
    handleKeyDown: x,
    applySuggestion: w,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: g
  } = uv(), {
    isSaving: b,
    toastMessage: S,
    toastType: k,
    editingFavorite: N,
    setEditingFavorite: R,
    editFavoriteName: A,
    setEditFavoriteName: I,
    editFavoriteQuery: O,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: M,
    handleEditFavorite: V,
    handleSaveEditFavorite: K,
    handleSaveFavorite: T,
    setToastMessage: C
  } = sm(), L = async () => {
    const z = e.favorites.some((Z) => Z.query === e.searchQuery);
    await T() && C(
      z ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Le({
    onEscape: () => R(null),
    enabled: !!N
  });
  const F = h.useRef(null), E = h.useRef(!1);
  h.useEffect(() => {
    N && F.current && F.current.focus();
  }, [N]);
  const D = (z) => {
    z.target === z.currentTarget && (E.current = !0);
  }, W = (z) => {
    z.target === z.currentTarget && E.current && R(null), E.current = !1;
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
                border: k === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
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
                    onClick: () => j(t),
                    style: {
                      background: y ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                      border: y ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                      cursor: "pointer",
                      padding: "6px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      flexShrink: 0,
                      borderRadius: "4px",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: y ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                    },
                    onMouseEnter: (z) => {
                      z.currentTarget.style.transform = "translateY(-1px)", y ? (z.currentTarget.style.filter = "brightness(1.15)", z.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : z.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (z) => {
                      z.currentTarget.style.transform = "none", y ? (z.currentTarget.style.filter = "none", z.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : z.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (z) => {
                      z.currentTarget.style.transform = "translateY(1px)", z.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (z) => {
                      z.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ s.jsx(
                        Dn,
                        {
                          size: 16,
                          color: y ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: y ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      y && /* @__PURE__ */ s.jsx(
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
                    onChange: (z) => u(z.target.value),
                    onKeyDown: x,
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
                    disabled: b,
                    title: e.favorites.some((z) => z.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                      pr,
                      {
                        size: 16,
                        color: e.favorites.some((z) => z.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((z) => z.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                    children: /* @__PURE__ */ s.jsx(he, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            fv,
            {
              showSuggestions: l,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: p,
              applySuggestion: w,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (z) => {
                n(z), j(z);
              },
              onEditFavorite: V,
              onDeleteFavorite: M
            }
          )
        ] }),
        N && me.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: D,
              onMouseUp: W,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ s.jsx(pr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => R(null),
                          children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                                    value: A,
                                    onChange: (z) => I(z.target.value),
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
                                    onKeyDown: (z) => {
                                      z.key === "Enter" && (Ye(z), K()), z.key === "Escape" && (Ye(z), R(null));
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
                                    onChange: (z) => B(z.target.value),
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
                                    onKeyDown: (z) => {
                                      z.key === "Enter" && !z.shiftKey && (Ye(z), K()), z.key === "Escape" && (Ye(z), R(null));
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
                          onClick: () => R(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: K,
                          disabled: b || !A.trim() || !O.trim(),
                          children: b ? "Saving..." : "Save Changes"
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
}, pv = ({ onClose: e, onSearch: t }) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [o, i] = h.useState(""), [c, d] = h.useState(""), [p, v] = h.useState(!1), [y, j] = h.useState(null), [x, w] = h.useState(""), [_, f] = h.useState(!1), u = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const I = await yi();
      r(I);
    } catch (I) {
      P.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    y !== null && u.current && (u.current.focus(), u.current.select());
  }, [y]);
  const g = async (I) => {
    I.preventDefault();
    const O = c.trim();
    if (!(!O || p)) {
      if (O.toLowerCase() === kt) {
        alert(`Tag name '${kt}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === O.toLowerCase())) {
        alert(`Tag "${O}" already exists.`);
        return;
      }
      v(!0);
      try {
        await ty(O), d(""), await m();
      } catch (B) {
        P.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, b = async (I, O) => {
    if (confirm(`Are you sure you want to delete tag "${O}"?`))
      try {
        await ny(I), await m();
      } catch (B) {
        P.error("Failed to delete tag:", B);
      }
  }, S = (I) => {
    j(I.id), w(I.name);
  }, k = () => {
    j(null), w("");
  }, N = async (I) => {
    I.preventDefault();
    const O = x.trim();
    if (!O || y === null || _) return;
    if (O.toLowerCase() === kt) {
      alert(`Tag name '${kt}' is reserved for search and cannot be used.`);
      return;
    }
    const B = n.find((M) => M.id === y);
    if (B && B.name === O) {
      k();
      return;
    }
    if (n.some((M) => M.id !== y && M.name.toLowerCase() === O.toLowerCase())) {
      alert(`Tag "${O}" already exists.`);
      return;
    }
    f(!0);
    try {
      await ry(y, O), k(), await m();
    } catch (M) {
      P.error("Failed to rename tag:", M), alert(M instanceof Error ? M.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, R = (I) => {
    t(`tag:${I}`);
  }, A = h.useMemo(() => n.filter((I) => I.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(vr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(he, { size: 16 })
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
            value: c,
            onChange: (I) => d(I.target.value),
            disabled: p
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || p,
            children: [
              /* @__PURE__ */ s.jsx(Us, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Dn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
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
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: A.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : A.map((I) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: y === I.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: N, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: u,
            className: "meld-tag-rename-input",
            value: x,
            onChange: (O) => w(O.target.value),
            onKeyDown: (O) => O.key === "Escape" && k()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: _ || !x.trim(),
            children: /* @__PURE__ */ s.jsx(ct, { size: 14 })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: k,
            disabled: _,
            children: /* @__PURE__ */ s.jsx(he, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => R(I.name),
              children: /* @__PURE__ */ s.jsx(Dn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(I),
              children: /* @__PURE__ */ s.jsx(yf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => b(I.id, I.name),
              children: /* @__PURE__ */ s.jsx(Bt, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
}, wa = 56, om = (e, t) => {
  const n = h.useCallback(async (l) => hi(l), []), r = h.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((p) => ({
          id: p.id,
          imgSrc: pt(p, wa)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((p) => p.id === o);
      let c = null;
      if (i ? c = pt(i, wa) : c = pt(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        wa
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const p = r(i);
        return [d, ...p].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, Bc = ({
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
}, hv = ({
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
  handleNext: p,
  handlePrevious: v,
  handleEditTags: y,
  handleRestore: j,
  fetchLineage: x,
  restoreImages: w,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = h.useState(null), [m, g] = h.useState(
    null
  ), b = h.useCallback(
    async (I = !1) => {
      if (!n) return;
      const O = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!I && O === "confirm") {
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
        const B = e.viewScope === "trash", M = /* @__PURE__ */ new Set([n.id]);
        let V = [];
        if (O === "lineage") {
          V = await x(n.id);
          for (const K of V)
            M.add(K.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await yo(Array.from(M), B), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Bc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: M,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(M)
        }), !B) {
          const K = [
            ...l,
            ...V,
            ...i,
            ...c
          ], T = /* @__PURE__ */ new Map();
          for (const L of K)
            T.set(L.id, L);
          const C = Array.from(M).map((L) => {
            const F = T.get(L);
            return F || {
              id: L,
              filename: `deleted_${L}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          u(C), g(null);
        }
      } catch (B) {
        t({
          type: "SET_ERROR",
          payload: B instanceof Error ? B.message : String(B)
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
  ), S = h.useCallback(() => {
    n && y(n);
  }, [y, n]), k = h.useCallback(async () => {
    n && (l.length > 1 ? p() : t({ type: "CLOSE_VIEWER" }), await j(n));
  }, [l.length, t, p, j, n]), N = h.useCallback(async () => {
    if (!f || f.length === 0) return;
    const I = f.map((O) => O.id);
    try {
      const O = await w(I);
      if (!d.isMountedRef.current) return;
      const B = O.restored_ids || I, M = new Set(B), V = f.filter((T) => M.has(T.id));
      if (V.length > 0 && t({ type: "ADD_IMAGES", payload: V }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: B }), u(null), !d.isMountedRef.current) return;
      const K = B[0];
      K !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: K,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (O) {
      t({
        type: "SET_ERROR",
        payload: O instanceof Error ? O.message : String(O)
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
  ]), R = h.useCallback(async () => {
    if (f && f.length > 0) {
      await N();
      return;
    }
    if (!m || m.type !== "tags")
      return;
    const { imageId: I, addTags: O, removeTags: B } = m;
    try {
      await _([I], O, B);
      const M = (o === "lineage" ? i : c).find(
        (V) => V.id === I
      );
      if (M) {
        const V = [...M.tags];
        for (const T of O)
          V.includes(T) || V.push(T);
        const K = V.filter((T) => !B.includes(T));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...M, tags: K }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: I,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      g(null);
    } catch (M) {
      t({
        type: "SET_ERROR",
        payload: M instanceof Error ? M.message : String(M)
      });
    }
  }, [
    t,
    N,
    c,
    f,
    m,
    i,
    _,
    e.viewerLightTableSlotId,
    o
  ]), A = h.useCallback(
    async (I) => {
      if (!I || typeof I != "string" || !n) return;
      const O = n.id, B = [...n.tags], M = Iy(I, n), { addTags: V, removeTags: K, isDeleted: T, moveNext: C, movePrev: L, sendToLtSlot: F } = M;
      if (F) {
        const E = se.getState(), D = E.slots.find(
          (W) => W.id.toLowerCase() === F.toLowerCase() || W.label.toLowerCase() === F.toLowerCase()
        );
        D ? (E.addToBucket(D.id, String(O), n), E.showToast(`Sent to ${D.label}`), T || Bc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([O]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [O]
        })) : (E.showToast(`Error: Light Table slot "${F}" not found`, "error"), P.warn(`Attempted to send to non-existent LT slot: ${F}`));
      }
      if (V.length > 0 || K.length > 0)
        try {
          await _([O], V, K);
          const E = [...B];
          for (const W of V)
            E.includes(W) || E.push(W);
          const D = E.filter((W) => !K.includes(W));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: O, tags: D }
          }), g({
            type: "tags",
            imageId: O,
            addTags: [...K],
            removeTags: [...V]
          }), u(null);
        } catch (E) {
          P.error("Failed to update tags via shortcut:", E), t({
            type: "SET_ERROR",
            payload: E instanceof Error ? E.message : String(E)
          });
        }
      T ? await b(!0) : C ? p() : L && await v();
    },
    [
      a,
      l,
      t,
      _,
      b,
      p,
      v,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: f,
    setLastDeletedImages: u,
    handleDelete: b,
    handleTagEditAction: S,
    handleRestoreAction: k,
    handleUndo: R,
    executeCommand: A
  };
}, gv = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = h.useState(!1), a = h.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        P.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return h.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, yv = ({
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
  handleUndo: p,
  handleTagEditAction: v,
  handleRestoreAction: y,
  executeCommand: j,
  setShowDetails: x,
  setActiveShortcutKey: w
}) => {
  const _ = h.useCallback(
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
      const g = f.key === "Delete" || f.key === "Backspace", b = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", S = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), k = f.key === "Escape", N = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), R = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (g || b || S || k || N || R)
        if (!m || k)
          ul(f);
        else
          return;
      else
        return;
      if (k)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (b)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (S && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (S && (f.key === "i" || f.key === "I"))
        x((A) => !A);
      else if (S && (f.key === "t" || f.key === "T"))
        v();
      else if (S && (f.key === "r" || f.key === "R") && n === "trash")
        y();
      else if (g)
        d();
      else if (N)
        p();
      else if (R && !m) {
        const A = `viewer.shortcut.${f.key}`, I = r[A];
        typeof I == "string" && I && (w(f.key), setTimeout(() => {
          a.current && w(null);
        }, 500), j(I));
      }
    },
    [
      t,
      l,
      j,
      d,
      i,
      c,
      y,
      v,
      p,
      a,
      w,
      x,
      r,
      o,
      n,
      e
    ]
  );
  Bs({
    enabled: e !== null,
    onKeyDown: _
  });
}, vv = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = h.useState(!1), i = h.useRef(0);
  return h.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), hi(t).then((p) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: p });
      }).catch((p) => {
        P.error("Failed to fetch lineage:", p);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, wv = ({
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
  mountRefs: p
}) => {
  const v = a === "lighttable" ? r : void 0, y = h.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), j = h.useCallback(async () => {
    const x = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && x) {
      d(!0);
      try {
        const w = o.limit, _ = o.total, f = Math.max(0, _ - w), u = await es(f, w, i);
        if (!p.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: u }), p.viewerImageIdRef.current === null)) return;
        if (u.images.length > 0) {
          const m = u.images.at(-1);
          if (!m) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: m.id, mode: "gallery" }
          });
        }
      } catch (w) {
        P.error("Failed to jump to end:", w);
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
    p,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: y, handlePrevious: j };
};
function xv(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? l || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const _v = ({
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
  h.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), h.useEffect(() => {
    if (e === null || t.length === 0) return;
    const p = t.map((_) => _.id), v = p.indexOf(e);
    if (v === -1) return;
    const y = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: j, nextId: x } = xv({
      ids: p,
      index: v,
      loopEnabled: y,
      hasMore: a && o === "gallery"
    }), w = setTimeout(() => {
      const _ = [j, x].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then((f) => {
        for (const u of f)
          u.status === "rejected" && P.warn("Prefetching adjacent image details failed", u.reason);
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
  ]), h.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const p = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const y of p)
        if (y >= 0 && y < t.length) {
          const j = t[y];
          if (!j) continue;
          const x = new Image();
          x.src = gi(j);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function kv(e) {
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
const Sv = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var vl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: p,
    handleEditTags: v,
    handleEditNotes: y,
    handleRestore: j,
    handleUpdateUserNotes: x,
    handleRestoreWorkflow: w,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: m,
    handleEditSource: g
  } = Vs(e, t), { getParentChain: b, fetchLineage: S } = om(a, c), [k, N] = h.useState(!1), [R, A] = h.useState(c["viewer.show_details_by_default"]), [I, O] = h.useState(null), B = I ?? c["viewer.show_thumbnails"], [M, V] = h.useState(!1), [K, T] = h.useState(null), C = h.useRef(null), L = {
    isMountedRef: h.useRef(!0),
    viewerImageIdRef: h.useRef(l)
  };
  h.useEffect(() => (L.isMountedRef.current = !0, () => {
    L.isMountedRef.current = !1;
  }), [L.isMountedRef]), h.useEffect(() => {
    L.viewerImageIdRef.current = l;
  }, [L.viewerImageIdRef, l]);
  const F = h.useMemo(() => {
    const be = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const ot = se.getState(), yt = ot.buckets[e.viewerLightTableSlotId] || [], Dt = new Map(a.map((H) => [H.id, H])), $ = new Map(i.map((H) => [H.id, H]));
      return yt.map((H) => {
        const ee = Number.parseInt(H, 10);
        return Dt.get(ee) || $.get(ee) || ot.images[H] || kv(ee);
      });
    }
    return o === "lineage" ? i : a.filter(
      (ot) => ot.exists !== !1 && (c["gallery.show_parent_images"] || be || !ot.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), E = l === null ? -1 : F.findIndex((be) => be.id === l), W = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? F : a).find((be) => be.id === l) || (l === ((vl = e.viewerFallbackImage) == null ? void 0 : vl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: z, toggleFullscreen: Q } = gv({
    overlayRef: C,
    settings: c,
    setShowDetails: A
  }), { handleNext: Z, handlePrevious: ie } = wv({
    dispatch: t,
    isFullscreen: z,
    settings: c,
    currentThumbnails: F,
    currentIndex: E,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: M,
    setIsJumping: V,
    mountRefs: L
  }), {
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    handleDelete: ue,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    handleUndo: Ht,
    executeCommand: Kt
  } = hv({
    state: e,
    dispatch: t,
    image: W,
    isFullscreen: z,
    currentThumbnails: F,
    currentIndex: E,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: L,
    handleNext: Z,
    handlePrevious: ie,
    handleEditTags: v,
    handleRestore: j,
    fetchLineage: S,
    restoreImages: d,
    bulkUpdateImageTags: p
  }), { isLoadingLineage: Gt } = vv({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: L.isMountedRef
  });
  yv({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: L.isMountedRef,
    toggleFullscreen: Q,
    handleNext: Z,
    handlePrevious: ie,
    handleDelete: () => {
      ue();
    },
    handleUndo: Ht,
    handleTagEditAction: Et,
    handleRestoreAction: q,
    executeCommand: Kt,
    setShowDetails: A,
    setActiveShortcutKey: T
  }), h.useEffect(() => {
    l !== null && r(l).catch((be) => {
      P.error("Failed to fetch full image details for viewer:", be);
    });
  }, [r, l]), _v({
    viewerImageId: l,
    currentThumbnails: F,
    currentIndex: E,
    isFullscreen: z,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const On = h.useMemo(() => {
    if (!B || E === -1) return [];
    const be = c["viewer.thumbnail_window_size"], ot = Math.floor(be / 2);
    let yt = Math.max(0, E - ot);
    const Dt = Math.min(F.length, yt + be);
    return Dt === F.length && (yt = Math.max(0, Dt - be)), F.slice(yt, Dt).map(($, H) => ({
      img: $,
      absIndex: yt + H
    }));
  }, [F, E, c, B]), wr = h.useMemo(() => W ? b(W) : [], [b, W]);
  return h.useEffect(() => {
    var be, ot;
    if (l !== null) {
      if (B) {
        const yt = document.querySelector(".meld-viewer-thumbnail--active");
        yt && yt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((be = document.activeElement) == null ? void 0 : be.tagName) === "CANVAS" && document.activeElement.blur(), (ot = C.current) == null || ot.focus();
    }
  }, [B, l]), {
    isFullscreen: z,
    showDetails: R,
    setShowDetails: A,
    showThumbnails: B,
    setShowThumbnailsOverride: O,
    isLoadingLineage: Gt,
    isJumping: M,
    isMenuOpen: k,
    setIsMenuOpen: N,
    activeShortcutKey: K,
    lastDeletedImages: de,
    setLastDeletedImages: Pe,
    overlayRef: C,
    handleNext: Z,
    handlePrevious: ie,
    handleDelete: ue,
    handleUpdateUserNotes: x,
    handleEditNotes: () => W && y(W),
    handleTagEdit: Et,
    handleRestore: q,
    handleUndo: Ht,
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
    handleEditSource: () => W && g(W),
    toggleFullscreen: Q,
    currentIndex: E,
    currentThumbnails: F,
    image: W,
    windowedThumbnails: On,
    parentChain: wr
  };
}, _i = ({
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
  onEditTags: p,
  onEditNotes: v,
  onDelete: y,
  onRestore: j,
  showRestore: x,
  deleteLabel: w,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const [g, b] = h.useState("left");
  h.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? b("right") : b("left"));
  }, [e, n]);
  const S = (R) => {
    switch (R) {
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
        return p;
      case "edit_notes":
        return v;
      case "restore_image":
        return j;
      case "delete_or_trash":
        return y;
      default:
        return null;
    }
  }, k = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((R) => R && R !== ""), N = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: N, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (R) => {
          R.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(ug, { size: u })
      }
    ),
    _ && k.map((R, A) => {
      const I = Hf.find((M) => M.id === R);
      if (!I || !I.icon) return null;
      const O = I.icon, B = S(R);
      return !B || R === "restore_image" && !x ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (M) => {
            M.stopPropagation(), B();
          },
          title: I.label,
          children: /* @__PURE__ */ s.jsx(O, { size: u })
        },
        `${R}-${A}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${g === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: zf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Wf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: $f,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Af,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Ff,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Of,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Vf,
            handler: p
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Bf,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Uf,
            handler: d
          },
          ...x ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Qf,
              handler: j,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: w,
            icon: Bt,
            handler: y,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((R) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${R.className || ""}`,
            onMouseDown: (A) => A.stopPropagation(),
            onClick: (A) => {
              A.preventDefault(), A.stopPropagation(), R.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(R.icon, { size: 14, color: R.color }),
              /* @__PURE__ */ s.jsx("span", { children: R.label })
            ]
          },
          R.id
        ))
      }
    )
  ] });
}, jv = ({
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
}) }) : null, bv = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = h.useState("idle"), [d, p] = h.useState(null), v = h.useRef(null), y = h.useCallback(async (w, _) => {
    try {
      await navigator.clipboard.writeText(w), v.current && (clearTimeout(v.current), v.current = null), p(_), v.current = setTimeout(() => {
        p(null), v.current = null;
      }, 2e3);
    } catch {
    }
  }, []);
  h.useEffect(() => (c("idle"), p(null), () => {
    v.current && (clearTimeout(v.current), v.current = null);
  }), []);
  const j = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], x = j === "always" || j === "if_present" && e.user_notes;
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
                  y(_, "filepath");
                },
                children: d === "filepath" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(`${e.width} x ${e.height} px`, "dimensions");
                },
                children: d === "dimensions" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(new Date(e.created_at * 1e3).toLocaleString(), "created_at");
                },
                children: d === "created_at" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  _ && y(new Date(_ * 1e3).toLocaleString(), "deleted_at");
                },
                children: d === "deleted_at" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  _ && y(_, "model");
                },
                children: d === "model" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(e.positive_prompt || e.positive || "", "positive");
                },
                children: d === "positive" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(e.negative_prompt || e.negative || "", "negative");
                },
                children: d === "negative" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(((_ = e.tags) == null ? void 0 : _.join(", ")) ?? "", "tags");
                },
                children: d === "tags" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
                  w.stopPropagation(), y(e.user_notes || "", "notes");
                },
                children: d === "notes" ? /* @__PURE__ */ s.jsx(ct, { size: 16 }) : /* @__PURE__ */ s.jsx(Nt, { size: 16 })
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
}, im = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = pt(e, 64);
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
              children: i ? /* @__PURE__ */ s.jsx(pf, { size: 12 }) : /* @__PURE__ */ s.jsx(mf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
im.displayName = "ThumbnailItem";
const Ev = ({
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
    im,
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
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(cl, { className: "animate-spin", size: 20 }) })
] }) });
function Cv() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ge(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: p,
    isMenuOpen: v,
    setIsMenuOpen: y,
    activeShortcutKey: j,
    setLastDeletedImages: x,
    overlayRef: w,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: g,
    handleRestoreWorkflow: b,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: k,
    handleRunWithWorkflow: N,
    handleRunWithMask: R,
    handleEditSource: A,
    handleDelete: I,
    toggleFullscreen: O,
    image: B,
    windowedThumbnails: M,
    parentChain: V
  } = Sv({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), K = h.useRef(null), T = h.useRef(null), { executeWorkflow: C } = vi(), L = h.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: F, viewerMode: E } = e, D = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return me.createPortal(
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
                D && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(cl, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(gf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(rg, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: O,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(dg, { size: 20 }) : /* @__PURE__ */ s.jsx(ig, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    _i,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: y,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: b,
                      onSendToWorkflow: k,
                      onRunWithWorkflow: N,
                      onRunWithMask: R,
                      onEditSource: A,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: I,
                      deleteLabel: L,
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
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                D && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: p,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(hf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(cl, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: K,
                      src: gi(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                D && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(fi, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  bv,
                  {
                    image: B,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: D,
                    parentChain: V,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Ev,
                  {
                    windowedThumbnails: M,
                    viewerImageId: F,
                    currentImage: B,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: E,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(jv, { settings: e.settings, activeShortcutKey: j })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Xf,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (W, z) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: W,
                        targetLoaderNodeId: z
                      }
                    }), !1;
                  const Q = e.activeModal.maskFilename;
                  for (const Z of e.activeModal.images)
                    await C(W, Z, Q, z);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Yf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (W) => {
                e.activeModal.type === "node_selection" && dl(e.activeModal.image, W);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Jf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Zf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: x
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(em, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Cf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Kf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Gf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            wi,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            Rf,
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
            qf,
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
const Nv = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ge(), [a, o] = h.useState("gallery"), [i, c] = h.useState(""), d = e.searchQuery.trim() !== "", p = h.useRef(null), v = h.useRef(null), y = se((_) => _.buckets), j = h.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(y))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [y]), x = h.useMemo(() => e.images.filter((_) => j.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [e.images, e.settings, e.viewScope, j, d]), w = x;
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (P.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), Bs({
    onKeyDown: (_) => {
      if (_.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), ul(_));
    }
  }), h.useEffect(() => {
    const _ = new IntersectionObserver(
      (u) => {
        const m = u[0];
        if (m && m.isIntersecting) {
          if (e.isLoading) {
            P.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (P.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : P.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: x.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = p.current;
    return f && _.observe(f), () => {
      f && _.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    x.length,
    e.images.length
  ]), h.useEffect(() => {
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
    displayedImages: x,
    visibleImages: w,
    isSearchActive: d,
    loadMoreRef: p
  };
}, Mv = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ge(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Vs(e, t), o = e.selectedIds.size, [i, c] = h.useState(!1), [d, p] = h.useState(null), v = h.useRef(null), y = h.useRef(null), j = rm("bulkActionBar");
  if (Le({
    onEscape: () => c(!1),
    enabled: i
  }), fl({
    enabled: i,
    insideRefs: [v, y],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const x = e.viewScope === "trash", w = () => e.images.filter((k) => e.selectedIds.has(k.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (p(v.current.getBoundingClientRect()), c(!0));
  }, f = (k) => {
    k(), c(!1);
  }, u = () => {
    const k = w(), N = /* @__PURE__ */ new Set();
    for (const R of k)
      if (R.tags)
        for (const A of R.tags)
          N.add(A);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(N)
      }
    });
  }, m = () => {
    const k = w();
    l(k);
  }, g = () => {
    const k = w();
    k.length > 0 && a(k, "run");
  }, b = () => {
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
        ref: v,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: _,
        children: [
          /* @__PURE__ */ s.jsx(cg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ s.jsx(he, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    i && d && /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: y,
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
                /* @__PURE__ */ s.jsx(cl, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(Bt, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(vr, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(mi, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(g),
              children: [
                /* @__PURE__ */ s.jsx(mg, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(b),
              children: [
                /* @__PURE__ */ s.jsx(ol, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(Bt, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    )
  ] });
  return me.createPortal(S, j);
};
function $n(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let p;
    n.key && ((i = n.debug) != null && i.call(n)) && (p = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((x, w) => r[w] !== x)))
      return l;
    r = v;
    let j;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (j = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const x = Math.round((Date.now() - p) * 100) / 100, w = Math.round((Date.now() - j) * 100) / 100, _ = w / 16, f = (u, m) => {
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
function Qc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Iv = (e, t) => Math.abs(e - t) < 1.01, Tv = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Hc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Lv = (e) => e, Rv = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, Dv = (e, t) => {
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
  if (l(Hc(n)), !r.ResizeObserver)
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
      l(Hc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Kc = {
  passive: !0
}, Gc = typeof window > "u" ? !0 : "onscrollend" in window, Pv = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Gc ? () => {
  } : Tv(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (p) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    l = v ? n.scrollLeft * (y && -1 || 1) : n.scrollTop, a(), t(l, p);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Kc);
  const d = e.options.useScrollendEvent && Gc;
  return d && n.addEventListener("scrollend", c, Kc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, zv = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ov = (e, {
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
class Av {
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
        getItemKey: Lv,
        rangeExtractor: Rv,
        onChange: () => {
        },
        measureElement: zv,
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
    }, this.maybeNotify = $n(
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
    }, this.getMeasurementOptions = $n(
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
    ), this.getMeasurements = $n(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const y of this.laneAssignments.keys())
            y >= n && this.laneAssignments.delete(y);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((y) => {
          this.itemSizeCache.set(y.key, y.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const p = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let y = 0; y < d; y++) {
          const j = p[y];
          j && (v[j.lane] = y);
        }
        for (let y = d; y < n; y++) {
          const j = a(y), x = this.laneAssignments.get(y);
          let w, _;
          if (x !== void 0 && this.options.lanes > 1) {
            w = x;
            const g = v[w], b = g !== void 0 ? p[g] : void 0;
            _ = b ? b.end + this.options.gap : r + l;
          } else {
            const g = this.options.lanes === 1 ? p[y - 1] : this.getFurthestMeasurement(p, y);
            _ = g ? g.end + this.options.gap : r + l, w = g ? g.lane : y % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(y, w);
          }
          const f = c.get(j), u = typeof f == "number" ? f : this.options.estimateSize(y), m = _ + u;
          p[y] = {
            index: y,
            start: _,
            size: u,
            end: m,
            key: j,
            lane: w
          }, v[w] = y;
        }
        return this.measurementsCache = p, p;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = $n(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Fv({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = $n(
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
    }, this.getVirtualItems = $n(
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
        return Qc(
          r[cm(
            0,
            r.length - 1,
            (l) => Qc(r[l]).start,
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
        const p = this.getOffsetForIndex(n, d);
        if (!p) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, y] = p;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const j = () => {
            if (this.currentScrollToIndex !== n) return;
            const x = this.getScrollOffset(), w = this.getOffsetForIndex(n, y);
            if (!w) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            Iv(w[0], x) || c(y);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(j) : j();
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
const cm = (e, t, n, r) => {
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
function Fv({
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
  let o = cm(
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
    for (; i < l && c.some((p) => p < n + t); ) {
      const p = e[i];
      c[p.lane] = p.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((p) => p >= n); ) {
      const p = e[o];
      d[p.lane] = p.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const qc = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Wv({
  useFlushSync: e = !0,
  ...t
}) {
  const n = h.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? me.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = h.useState(
    () => new Av(r)
  );
  return l.setOptions(r), qc(() => l._didMount(), []), qc(() => l._willUpdate()), l;
}
function $v(e) {
  return Wv({
    observeElementRect: Dv,
    observeElementOffset: Pv,
    scrollToFn: Ov,
    ...e
  });
}
const dm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ge(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: p,
    handleRunWithWorkflow: v,
    handleRunWithMask: y,
    handleRestore: j,
    handleDelete: x,
    handleEditNotes: w,
    handleUpdateUserNotes: _
  } = Vs(t, n), { getParentChain: f } = om(t.images, t.settings), [u, m] = h.useState(null), [g, b] = h.useState(!1), [S, k] = h.useState(null), [N, R] = h.useState(!1), A = h.useRef(null);
  fl({
    enabled: g,
    insideRefs: [A],
    onOutside: () => b(!1)
  });
  const I = async (q, Ht, Kt = !1) => {
    try {
      await navigator.clipboard.writeText(q), Kt ? (R(!0), setTimeout(() => R(!1), 2e3)) : (k(Ht), setTimeout(() => k(null), 2e3));
    } catch (Gt) {
      P.error("Failed to copy text: ", Gt);
    }
  }, O = h.useCallback(
    (q) => {
      if (q.key === "Escape") {
        if (u) {
          ul(q), m(null);
          return;
        }
        g && (ul(q), b(!1));
      }
    },
    [u, g]
  );
  Bs({
    enabled: g || u !== null,
    onKeyDown: O
  });
  const B = f(e), V = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, K = t.settings["sidebar.thumbnail_size"] || 100, T = pt(e, Math.min(400, Math.round(K * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: g,
    setIsMenuOpen: b,
    copiedLabel: S,
    popupCopied: N,
    menuRef: A,
    parentChain: B,
    displayFilename: V,
    imgSrc: T,
    handleCopy: I,
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
      var Kt, Gt, On;
      !q || typeof q.preventDefault != "function" || ((Kt = document.activeElement) == null ? void 0 : Kt.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || (On = document.activeElement) != null && On.isContentEditable || (q.key === "Enter" || q.key === " ") && (q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      p(e);
    },
    handleRestore: () => {
      j(e);
    },
    handleDelete: () => {
      x(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (q = "run") => y(e, q),
    handleUpdateUserNotes: (q) => _(e.id, q),
    fetchFullImageDetails: r
  };
}, Uv = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => (Le({ onEscape: n }), me.createPortal(
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
            l ? /* @__PURE__ */ s.jsx(ct, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(Nt, { className: "meld-prompt-popup__copy", size: 18, onClick: () => r(t) }),
            /* @__PURE__ */ s.jsx(he, { className: "meld-prompt-popup__close", size: 18, onClick: n })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), um = nn.memo(({ image: e }) => {
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
    menuRef: p,
    parentChain: v,
    displayFilename: y,
    imgSrc: j,
    handleCopy: x,
    handleClick: w,
    handleSelectToggle: _,
    handleContainerClick: f,
    handleMouseDown: u,
    handleKeyDown: m,
    handleRestoreWorkflow: g,
    handleAddUnifiedLoader: b,
    handleEditSource: S,
    handleEditTags: k,
    handleEditNotes: N,
    handleSendToWorkflow: R,
    handleRestore: A,
    handleDelete: I,
    handleRunWithWorkflow: O,
    handleRunWithMask: B,
    fetchFullImageDetails: M
  } = dm(e), [V, K] = h.useState("idle");
  h.useEffect(() => {
    e.user_notes && V === "saving" && K("idle");
  }, [e.user_notes, V]);
  const T = (C) => {
    C.stopPropagation();
    let L = String(e.id);
    r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", L), se.getState().setIsOpen(!0);
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
      onDragStart: T,
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
              src: j,
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
                C.stopPropagation(), w(C);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && y,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (C, L) => C.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: C.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (F) => {
                    F.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: C.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                  alt: "source thumb"
                },
                C.id || L
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
                const L = await M(e.id);
                a({
                  title: "Model",
                  text: L.model_name || "-"
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
                      const L = await M(e.id);
                      x(L.model_name || "-", "Model");
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
                const L = await M(e.id);
                a({
                  title: "Positive Prompt",
                  text: L.positive_prompt || L.positive || "-"
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
                      const L = await M(e.id);
                      x(L.positive_prompt || L.positive || "-", "Positive");
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
                const L = await M(e.id);
                a({
                  title: "Negative Prompt",
                  text: L.negative_prompt || L.negative || "-"
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
                      const L = await M(e.id);
                      x(L.negative_prompt || L.negative || "-", "Negative");
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
                C.stopPropagation(), k();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: C }, C)) : /* @__PURE__ */ s.jsx(
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
              V === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (C) => {
                  C.stopPropagation(), N();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          _i,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: p,
            settings: t.settings,
            onAddUnifiedLoader: b,
            onRestoreWorkflow: g,
            onSendToWorkflow: R,
            onRunWithWorkflow: O,
            onRunWithMask: (C) => B(C),
            onEditSource: S,
            onEditTags: k,
            onEditNotes: N,
            onRestore: A,
            showRestore: t.viewScope === "trash",
            onDelete: I,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Uv,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (C) => x(C, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
um.displayName = "DetailedImageCard";
const fm = nn.memo(({ image: e }) => {
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
    menuRef: p,
    state: v,
    handleAddUnifiedLoader: y,
    handleRestoreWorkflow: j,
    handleSendToWorkflow: x,
    handleRunWithWorkflow: w,
    handleRunWithMask: _,
    handleEditSource: f,
    handleEditTags: u,
    handleEditNotes: m,
    handleDelete: g,
    handleRestore: b
  } = dm(e), S = v.viewScope === "trash", k = S ? "Delete Permanently" : "Move to Trash", N = (R) => {
    R.stopPropagation();
    let A = String(e.id);
    t && v.selectedIds.size > 0 && (A = Array.from(v.selectedIds).join(",")), R.dataTransfer.setData("text/plain", A), se.getState().setIsOpen(!0);
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
      onDragStart: N,
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
              onClick: (R) => {
                R.stopPropagation(), o(R);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(
          _i,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: p,
            settings: v.settings,
            onAddUnifiedLoader: y,
            onRestoreWorkflow: j,
            onSendToWorkflow: x,
            onRunWithWorkflow: w,
            onRunWithMask: _,
            onEditSource: f,
            onEditTags: u,
            onEditNotes: m,
            onDelete: g,
            onRestore: b,
            showRestore: S,
            deleteLabel: k,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
fm.displayName = "SimpleImageCard";
const Yc = ({ image: e }) => {
  const { state: t } = ge();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(fm, { image: e }) : /* @__PURE__ */ s.jsx(um, { image: e });
}, xa = 6, Vv = 10, Bv = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = h.useRef(null), [i, c] = h.useState(300), [d, p] = h.useState(!0), v = t["sidebar.thumbnail_size"] || 100, y = t["gallery.view_mode"] === "grid_only";
  h.useEffect(() => {
    const m = o.current;
    if (!m) return;
    const g = () => {
      c(m.clientWidth);
    };
    g();
    const b = new ResizeObserver(g);
    return b.observe(m), () => b.disconnect();
  }, []), h.useEffect(() => {
    const m = o.current;
    if (!m) return;
    if (typeof IntersectionObserver > "u") {
      p(!0);
      return;
    }
    const g = new IntersectionObserver(
      (b) => {
        const S = b[0];
        S && p(S.isIntersecting);
      },
      { threshold: 0 }
    );
    return g.observe(m), () => g.disconnect();
  }, []);
  const j = v + 10, x = y ? Math.max(
    1,
    Math.floor((i - Vv * 2 + xa) / (j + xa))
  ) : 1, w = y ? Math.ceil(e.length / x) : e.length, _ = y ? v + 14 : v + 40, f = $v({
    count: w,
    getScrollElement: () => o.current,
    estimateSize: () => _,
    overscan: 5,
    enabled: d,
    getItemKey: (m) => {
      var g;
      return y ? `row-${m}-${x}` : ((g = e[m]) == null ? void 0 : g.id) ?? m;
    }
  });
  h.useEffect(() => {
    if (r === null) return;
    const m = e.findIndex((b) => b.id === r);
    if (m < 0) return;
    const g = y ? Math.floor(m / x) : m;
    f.scrollToIndex(g, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, y, x, f]);
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
            className: `meld-gallery__list ${y ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${f.getTotalSize()}px`,
              position: "relative"
            },
            children: u.map((m) => {
              if (y) {
                const b = m.index * x, S = Math.min(b + x, e.length), k = e.slice(b, S);
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
                      gap: xa,
                      alignItems: "flex-start"
                    },
                    children: k.map((N) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": N.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: N.width && N.height ? Math.min(v, v * N.width / N.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Yc, { image: N })
                          }
                        )
                      },
                      N.id
                    ))
                  },
                  m.key
                );
              }
              const g = e[m.index];
              return g ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": m.index,
                  "data-image-id": g.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${m.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Yc, { image: g })
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
}, Qv = () => {
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
    isSearchActive: p,
    loadMoreRef: v
  } = Nv(), y = se((k) => k.isOpen), j = se((k) => k.setIsOpen), x = se((k) => k.buckets), w = Object.values(x).some(
    (k) => k && k.length > 0
  );
  P.log("GalleryPanel: isLightTableOpen =", y);
  const [_, f] = h.useState(!1), [u, m] = h.useState(null), g = h.useRef(null), b = h.useCallback(() => {
    g.current && (m(g.current.getBoundingClientRect()), f(!0));
  }, []), S = h.useCallback(
    (k) => {
      t({ type: "SET_SEARCH_QUERY", payload: k }), i(k), a("search"), f(!1);
    },
    [t, i, a]
  );
  return P.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (k) => {
        k.dataTransfer.types.includes("application/meld-lt-source-slot") && (k.preventDefault(), k.dataTransfer.dropEffect = "move");
      },
      onDrop: (k) => {
        const N = k.dataTransfer.getData("application/meld-lt-source-slot");
        if (N) {
          k.preventDefault();
          const R = k.dataTransfer.getData("text/plain");
          if (R) {
            const A = R.split(","), I = [];
            A.forEach((O) => {
              if (O) {
                const B = O.trim();
                se.getState().removeFromBucket(N, B);
                const M = Number(B);
                Number.isNaN(M) || I.push(M);
              }
            }), I.length > 0 && t({ type: "DESELECT_IMAGES", payload: I });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Bt, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (k) => r("gallery.trash.show_missing", k.target.checked)
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
                  /* @__PURE__ */ s.jsx(he, { size: 14 }),
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
                  color: p ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: p ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Dn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: g,
                type: "button",
                onClick: b,
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(pr, { size: 14, fill: _ ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ s.jsx(vr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const N = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", N);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(sg, { size: 14 }) : /* @__PURE__ */ s.jsx(gf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  P.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    y,
                    "to",
                    !y
                  ), j(!y);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: y ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    fg,
                    {
                      size: 14,
                      fill: y ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: y ? 1 : 0.8 }
                    }
                  ),
                  !y && w && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(ol, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(cl, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ s.jsx(vf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(mv, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Uy, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            pv,
            {
              onClose: () => a("gallery"),
              onSearch: (k) => {
                t({ type: "SET_SEARCH_QUERY", payload: k }), a("search");
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
                Bv,
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
          /* @__PURE__ */ s.jsx(Mv, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Cv, {}),
        /* @__PURE__ */ s.jsx($y, {}),
        _ && /* @__PURE__ */ s.jsx(
          dv,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: S
          }
        ),
        /* @__PURE__ */ s.jsx(Xy, {})
      ]
    }
  );
};
Xc.registerExtension({
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
const Hv = document.getElementById("meld-gallery-style");
if (!Hv) {
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
let $l = null, it = null;
Xc.registerExtension({
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
    Hy();
    try {
      const n = await jf();
      P.init(n.dev_mode), P.log("Settings received:", n);
    } catch (n) {
      P.error("Failed to fetch settings", n), P.init(!1);
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
            P.error("Error toggling sidebar:", r);
          }
        }
      }, te.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), te.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: n.detail }));
      }), te.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: n.detail })), (r = e.ui.meld) == null || r.refresh(), P.log("Import completed.");
      }), te.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await kf({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (a) {
                  P.error("Failed to auto-register image:", a);
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
            P.log("render called", {
              el: n,
              galleryRoot: $l,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (P.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (P.log("Appending galleryContainer to el"), n.appendChild(it)), $l ? P.log("Gallery root already exists, React should handle re-render if needed") : (P.log("Creating new gallery root"), $l = cf(it), $l.render(
              nn.createElement(ey, null, nn.createElement(Qv))
            ));
          }
        });
      } catch (n) {
        P.error("Error during sidebar registration:", n);
      }
    }
  }
});
