import { api as K } from "/scripts/api.js";
import { app as Fo } from "/scripts/app.js";
function xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oo = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr = Symbol.for("react.element"), _d = Symbol.for("react.portal"), Sd = Symbol.for("react.fragment"), kd = Symbol.for("react.strict_mode"), jd = Symbol.for("react.profiler"), Ed = Symbol.for("react.provider"), Cd = Symbol.for("react.context"), Nd = Symbol.for("react.forward_ref"), Id = Symbol.for("react.suspense"), Td = Symbol.for("react.memo"), Ld = Symbol.for("react.lazy"), Sa = Symbol.iterator;
function Md(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $o = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Uo = Object.assign, Vo = {};
function On(e, t, n) {
  this.props = e, this.context = t, this.refs = Vo, this.updater = n || $o;
}
On.prototype.isReactComponent = {};
On.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wo() {
}
Wo.prototype = On.prototype;
function ji(e, t, n) {
  this.props = e, this.context = t, this.refs = Vo, this.updater = n || $o;
}
var Ei = ji.prototype = new Wo();
Ei.constructor = ji;
Uo(Ei, On.prototype);
Ei.isPureReactComponent = !0;
var ka = Array.isArray, Qo = Object.prototype.hasOwnProperty, Ci = { current: null }, Bo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ho(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Qo.call(t, r) && !Bo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Nr, type: e, key: s, ref: a, props: l, _owner: Ci.current };
}
function bd(e, t) {
  return { $$typeof: Nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function Pd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ja = /\/+/g;
function ns(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Pd("" + e.key) : t.toString(36);
}
function Jr(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (s) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Nr:
        case _d:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + ns(a, 0) : r, ka(l) ? (n = "", e != null && (n = e.replace(ja, "$&/") + "/"), Jr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Ni(l) && (l = bd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(ja, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", ka(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + ns(s, o);
    a += Jr(s, t, n, u, l);
  }
  else if (u = Md(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + ns(s, o++), a += Jr(s, t, n, u, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Jr(e, r, "", "", function(s) {
    return t.call(n, s, l++);
  }), r;
}
function Dd(e) {
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
var Me = { current: null }, qr = { transition: null }, zd = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: qr, ReactCurrentOwner: Ci };
function Go() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: Dr, forEach: function(e, t, n) {
  Dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ni(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = On;
H.Fragment = Sd;
H.Profiler = jd;
H.PureComponent = ji;
H.StrictMode = kd;
H.Suspense = Id;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
H.act = Go;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Uo({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ci.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Qo.call(t, u) && !Bo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Nr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
H.createContext = function(e) {
  return e = { $$typeof: Cd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ed, _context: e }, e.Consumer = e;
};
H.createElement = Ho;
H.createFactory = function(e) {
  var t = Ho.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: Nd, render: e };
};
H.isValidElement = Ni;
H.lazy = function(e) {
  return { $$typeof: Ld, _payload: { _status: -1, _result: e }, _init: Dd };
};
H.memo = function(e, t) {
  return { $$typeof: Td, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = qr.transition;
  qr.transition = {};
  try {
    e();
  } finally {
    qr.transition = t;
  }
};
H.unstable_act = Go;
H.useCallback = function(e, t) {
  return Me.current.useCallback(e, t);
};
H.useContext = function(e) {
  return Me.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return Me.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return Me.current.useEffect(e, t);
};
H.useId = function() {
  return Me.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return Me.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return Me.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return Me.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return Me.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return Me.current.useRef(e);
};
H.useState = function(e) {
  return Me.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return Me.current.useTransition();
};
H.version = "18.3.1";
Oo.exports = H;
var v = Oo.exports;
const dl = /* @__PURE__ */ xd(v);
var Ko = { exports: {} }, Be = {}, Yo = { exports: {} }, Xo = {};
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
  function t(C, z) {
    var $ = C.length;
    C.push(z);
    e: for (; 0 < $; ) {
      var X = $ - 1 >>> 1, se = C[X];
      if (0 < l(se, z)) C[X] = z, C[$] = se, $ = X;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0], $ = C.pop();
    if ($ !== z) {
      C[0] = $;
      e: for (var X = 0, se = C.length, ht = se >>> 1; X < ht; ) {
        var U = 2 * (X + 1) - 1, q = C[U], re = U + 1, qe = C[re];
        if (0 > l(q, $)) re < se && 0 > l(qe, q) ? (C[X] = qe, C[re] = $, X = re) : (C[X] = q, C[U] = $, X = U);
        else if (re < se && 0 > l(qe, $)) C[X] = qe, C[re] = $, X = re;
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var $ = C.sortIndex - z.sortIndex;
    return $ !== 0 ? $ : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var u = [], c = [], h = 1, g = null, m = 3, y = !1, w = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C) r(c), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(c);
    }
  }
  function j(C) {
    if (x = !1, p(C), !w) if (n(u) !== null) w = !0, Q(N);
    else {
      var z = n(c);
      z !== null && A(j, z.startTime - C);
    }
  }
  function N(C, z) {
    w = !1, x && (x = !1, f(E), E = -1), y = !0;
    var $ = m;
    try {
      for (p(z), g = n(u); g !== null && (!(g.expirationTime > z) || C && !S()); ) {
        var X = g.callback;
        if (typeof X == "function") {
          g.callback = null, m = g.priorityLevel;
          var se = X(g.expirationTime <= z);
          z = e.unstable_now(), typeof se == "function" ? g.callback = se : g === n(u) && r(u), p(z);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var ht = !0;
      else {
        var U = n(c);
        U !== null && A(j, U.startTime - z), ht = !1;
      }
      return ht;
    } finally {
      g = null, m = $, y = !1;
    }
  }
  var L = !1, _ = null, E = -1, M = 5, D = -1;
  function S() {
    return !(e.unstable_now() - D < M);
  }
  function b() {
    if (_ !== null) {
      var C = e.unstable_now();
      D = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? W() : (L = !1, _ = null);
      }
    } else L = !1;
  }
  var W;
  if (typeof d == "function") W = function() {
    d(b);
  };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), F = Y.port2;
    Y.port1.onmessage = b, W = function() {
      F.postMessage(null);
    };
  } else W = function() {
    k(b, 0);
  };
  function Q(C) {
    _ = C, L || (L = !0, W());
  }
  function A(C, z) {
    E = k(function() {
      C(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, Q(N));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var $ = m;
    m = z;
    try {
      return C();
    } finally {
      m = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, z) {
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
    var $ = m;
    m = C;
    try {
      return z();
    } finally {
      m = $;
    }
  }, e.unstable_scheduleCallback = function(C, z, $) {
    var X = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? X + $ : X) : $ = X, C) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = $ + se, C = { id: h++, callback: z, priorityLevel: C, startTime: $, expirationTime: se, sortIndex: -1 }, $ > X ? (C.sortIndex = $, t(c, C), n(u) === null && C === n(c) && (x ? (f(E), E = -1) : x = !0, A(j, $ - X))) : (C.sortIndex = se, t(u, C), w || y || (w = !0, Q(N))), C;
  }, e.unstable_shouldYield = S, e.unstable_wrapCallback = function(C) {
    var z = m;
    return function() {
      var $ = m;
      m = z;
      try {
        return C.apply(this, arguments);
      } finally {
        m = $;
      }
    };
  };
})(Xo);
Yo.exports = Xo;
var Rd = Yo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = v, Qe = Rd;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zo = /* @__PURE__ */ new Set(), ur = {};
function an(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Zo.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Is = Object.prototype.hasOwnProperty, Fd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ea = {}, Ca = {};
function Od(e) {
  return Is.call(Ca, e) ? !0 : Is.call(Ea, e) ? !1 : Fd.test(e) ? Ca[e] = !0 : (Ea[e] = !0, !1);
}
function $d(e, t, n, r) {
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
function Ud(e, t, n, r) {
  if (t === null || typeof t > "u" || $d(e, t, n, r)) return !0;
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
function be(e, t, n, r, l, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new be(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ii = /[\-:]([a-z])/g;
function Ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ii,
    Ti
  );
  ke[t] = new be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ii, Ti);
  ke[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ii, Ti);
  ke[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Li(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ud(t, n, l, r) && (n = null), r || l === null ? Od(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), Ts = Symbol.for("react.profiler"), Jo = Symbol.for("react.provider"), qo = Symbol.for("react.context"), bi = Symbol.for("react.forward_ref"), Ls = Symbol.for("react.suspense"), Ms = Symbol.for("react.suspense_list"), Pi = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), eu = Symbol.for("react.offscreen"), Na = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var de = Object.assign, rs;
function Xn(e) {
  if (rs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    rs = t && t[1] || "";
  }
  return `
` + rs + e;
}
var ls = !1;
function ss(e, t) {
  if (!e || ls) return "";
  ls = !0;
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
`), s = r.stack.split(`
`), a = l.length - 1, o = s.length - 1; 1 <= a && 0 <= o && l[a] !== s[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== s[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || l[a] !== s[o]) {
              var u = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    ls = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function Vd(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ss(e.type, !1), e;
    case 11:
      return e = ss(e.type.render, !1), e;
    case 1:
      return e = ss(e.type, !0), e;
    default:
      return "";
  }
}
function bs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case fn:
      return "Portal";
    case Ts:
      return "Profiler";
    case Mi:
      return "StrictMode";
    case Ls:
      return "Suspense";
    case Ms:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qo:
      return (e.displayName || "Context") + ".Consumer";
    case Jo:
      return (e._context.displayName || "Context") + ".Provider";
    case bi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pi:
      return t = e.displayName || null, t !== null ? t : bs(e.type) || "Memo";
    case Nt:
      t = e._payload, e = e._init;
      try {
        return bs(e(t));
      } catch {
      }
  }
  return null;
}
function Wd(e) {
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
      return bs(t);
    case 8:
      return t === Mi ? "StrictMode" : "Mode";
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
function Ut(e) {
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
function tu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qd(e) {
  var t = tu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(a) {
      r = "" + a, s.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Rr(e) {
  e._valueTracker || (e._valueTracker = Qd(e));
}
function nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = tu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return de({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ia(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ru(e, t) {
  t = t.checked, t != null && Li(e, "checked", t, !1);
}
function Ds(e, t) {
  ru(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zs(e, t.type, n) : t.hasOwnProperty("defaultValue") && zs(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ta(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function zs(e, t, n) {
  (t !== "number" || fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function jn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return de({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function La(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function lu(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function As(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? su(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ar, iu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
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
}, Bd = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function(e) {
  Bd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), er[t] = er[e];
  });
});
function au(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || er.hasOwnProperty(e) && er[e] ? ("" + t).trim() : t + "px";
}
function ou(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = au(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Hd = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fs(e, t) {
  if (t) {
    if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Os(e, t) {
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
var $s = null;
function Di(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Us = null, En = null, Cn = null;
function ba(e) {
  if (e = Lr(e)) {
    if (typeof Us != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Ul(t), Us(e.stateNode, e.type, t));
  }
}
function uu(e) {
  En ? Cn ? Cn.push(e) : Cn = [e] : En = e;
}
function cu() {
  if (En) {
    var e = En, t = Cn;
    if (Cn = En = null, ba(e), t) for (e = 0; e < t.length; e++) ba(t[e]);
  }
}
function du(e, t) {
  return e(t);
}
function fu() {
}
var is = !1;
function pu(e, t, n) {
  if (is) return e(t, n);
  is = !0;
  try {
    return du(e, t, n);
  } finally {
    is = !1, (En !== null || Cn !== null) && (fu(), cu());
  }
}
function dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
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
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Vs = !1;
if (_t) try {
  var Wn = {};
  Object.defineProperty(Wn, "passive", { get: function() {
    Vs = !0;
  } }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
} catch {
  Vs = !1;
}
function Gd(e, t, n, r, l, s, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var tr = !1, pl = null, ml = !1, Ws = null, Kd = { onError: function(e) {
  tr = !0, pl = e;
} };
function Yd(e, t, n, r, l, s, a, o, u) {
  tr = !1, pl = null, Gd.apply(Kd, arguments);
}
function Xd(e, t, n, r, l, s, a, o, u) {
  if (Yd.apply(this, arguments), tr) {
    if (tr) {
      var c = pl;
      tr = !1, pl = null;
    } else throw Error(I(198));
    ml || (ml = !0, Ws = c);
  }
}
function on(e) {
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
function mu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pa(e) {
  if (on(e) !== e) throw Error(I(188));
}
function Zd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return Pa(l), e;
        if (s === r) return Pa(l), t;
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) n = l, r = s;
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          a = !0, n = l, r = s;
          break;
        }
        if (o === r) {
          a = !0, r = l, n = s;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            a = !0, n = s, r = l;
            break;
          }
          if (o === r) {
            a = !0, r = s, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function hu(e) {
  return e = Zd(e), e !== null ? gu(e) : null;
}
function gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yu = Qe.unstable_scheduleCallback, Da = Qe.unstable_cancelCallback, Jd = Qe.unstable_shouldYield, qd = Qe.unstable_requestPaint, me = Qe.unstable_now, ef = Qe.unstable_getCurrentPriorityLevel, zi = Qe.unstable_ImmediatePriority, vu = Qe.unstable_UserBlockingPriority, hl = Qe.unstable_NormalPriority, tf = Qe.unstable_LowPriority, wu = Qe.unstable_IdlePriority, Al = null, pt = null;
function nf(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function") try {
    pt.onCommitFiberRoot(Al, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var at = Math.clz32 ? Math.clz32 : sf, rf = Math.log, lf = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rf(e) / lf | 0) | 0;
}
var Fr = 64, Or = 4194304;
function Jn(e) {
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
function gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Jn(o) : (s &= a, s !== 0 && (r = Jn(s)));
  } else a = n & ~l, a !== 0 ? r = Jn(a) : s !== 0 && (r = Jn(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function af(e, t) {
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
function of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - at(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = af(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Qs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xu() {
  var e = Fr;
  return Fr <<= 1, !(Fr & 4194240) && (Fr = 64), e;
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function uf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - at(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ne = 0;
function _u(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Su, Ai, ku, ju, Eu, Bs = !1, $r = [], Pt = null, Dt = null, zt = null, fr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Tt = [], cf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && Ai(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function df(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Pt = Qn(Pt, e, t, n, r, l), !0;
    case "dragenter":
      return Dt = Qn(Dt, e, t, n, r, l), !0;
    case "mouseover":
      return zt = Qn(zt, e, t, n, r, l), !0;
    case "pointerover":
      var s = l.pointerId;
      return fr.set(s, Qn(fr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return s = l.pointerId, pr.set(s, Qn(pr.get(s) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Cu(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = mu(n), t !== null) {
          e.blockedOn = t, Eu(e.priority, function() {
            ku(n);
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
function el(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $s = r, n.target.dispatchEvent(r), $s = null;
    } else return t = Lr(n), t !== null && Ai(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  el(e) && n.delete(t);
}
function ff() {
  Bs = !1, Pt !== null && el(Pt) && (Pt = null), Dt !== null && el(Dt) && (Dt = null), zt !== null && el(zt) && (zt = null), fr.forEach(Ra), pr.forEach(Ra);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bs || (Bs = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, ff)));
}
function mr(e) {
  function t(l) {
    return Bn(l, e);
  }
  if (0 < $r.length) {
    Bn($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pt !== null && Bn(Pt, e), Dt !== null && Bn(Dt, e), zt !== null && Bn(zt, e), fr.forEach(t), pr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Cu(n), n.blockedOn === null && Tt.shift();
}
var Nn = Et.ReactCurrentBatchConfig, yl = !0;
function pf(e, t, n, r) {
  var l = ne, s = Nn.transition;
  Nn.transition = null;
  try {
    ne = 1, Fi(e, t, n, r);
  } finally {
    ne = l, Nn.transition = s;
  }
}
function mf(e, t, n, r) {
  var l = ne, s = Nn.transition;
  Nn.transition = null;
  try {
    ne = 4, Fi(e, t, n, r);
  } finally {
    ne = l, Nn.transition = s;
  }
}
function Fi(e, t, n, r) {
  if (yl) {
    var l = Hs(e, t, n, r);
    if (l === null) ys(e, t, r, vl, n), za(e, r);
    else if (df(l, e, t, n, r)) r.stopPropagation();
    else if (za(e, r), t & 4 && -1 < cf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Lr(l);
        if (s !== null && Su(s), s = Hs(e, t, n, r), s === null && ys(e, t, r, vl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else ys(e, t, r, null, n);
  }
}
var vl = null;
function Hs(e, t, n, r) {
  if (vl = null, e = Di(r), e = Xt(e), e !== null) if (t = on(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = mu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return vl = e, null;
}
function Nu(e) {
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
      switch (ef()) {
        case zi:
          return 1;
        case vu:
          return 4;
        case hl:
        case tf:
          return 16;
        case wu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Oi = null, tl = null;
function Iu() {
  if (tl) return tl;
  var e, t = Oi, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++) ;
  return tl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function nl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ur() {
  return !0;
}
function Aa() {
  return !1;
}
function He(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ur : Aa, this.isPropagationStopped = Aa, this;
  }
  return de(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
  }, persist: function() {
  }, isPersistent: Ur }), t;
}
var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, $i = He($n), Tr = de({}, $n, { view: 0, detail: 0 }), hf = He(Tr), os, us, Hn, Fl = de({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ui, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (os = e.screenX - Hn.screenX, us = e.screenY - Hn.screenY) : us = os = 0, Hn = e), os);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : us;
} }), Fa = He(Fl), gf = de({}, Fl, { dataTransfer: 0 }), yf = He(gf), vf = de({}, Tr, { relatedTarget: 0 }), cs = He(vf), wf = de({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xf = He(wf), _f = de({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sf = He(_f), kf = de({}, $n, { data: 0 }), Oa = He(kf), jf = {
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
}, Ef = {
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
}, Cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function Ui() {
  return Nf;
}
var If = de({}, Tr, { key: function(e) {
  if (e.key) {
    var t = jf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ef[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ui, charCode: function(e) {
  return e.type === "keypress" ? nl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tf = He(If), Lf = de({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $a = He(Lf), Mf = de({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ui }), bf = He(Mf), Pf = de({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Df = He(Pf), zf = de({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Rf = He(zf), Af = [9, 13, 27, 32], Vi = _t && "CompositionEvent" in window, nr = null;
_t && "documentMode" in document && (nr = document.documentMode);
var Ff = _t && "TextEvent" in window && !nr, Tu = _t && (!Vi || nr && 8 < nr && 11 >= nr), Ua = " ", Va = !1;
function Lu(e, t) {
  switch (e) {
    case "keyup":
      return Af.indexOf(t.keyCode) !== -1;
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
function Mu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function Of(e, t) {
  switch (e) {
    case "compositionend":
      return Mu(t);
    case "keypress":
      return t.which !== 32 ? null : (Va = !0, Ua);
    case "textInput":
      return e = t.data, e === Ua && Va ? null : e;
    default:
      return null;
  }
}
function $f(e, t) {
  if (mn) return e === "compositionend" || !Vi && Lu(e, t) ? (e = Iu(), tl = Oi = Mt = null, mn = !1, e) : null;
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
      return Tu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uf[e.type] : t === "textarea";
}
function bu(e, t, n, r) {
  uu(r), t = wl(t, "onChange"), 0 < t.length && (n = new $i("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var rr = null, hr = null;
function Vf(e) {
  Wu(e, 0);
}
function Ol(e) {
  var t = yn(e);
  if (nu(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Pu = !1;
if (_t) {
  var ds;
  if (_t) {
    var fs = "oninput" in document;
    if (!fs) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"), fs = typeof Qa.oninput == "function";
    }
    ds = fs;
  } else ds = !1;
  Pu = ds && (!document.documentMode || 9 < document.documentMode);
}
function Ba() {
  rr && (rr.detachEvent("onpropertychange", Du), hr = rr = null);
}
function Du(e) {
  if (e.propertyName === "value" && Ol(hr)) {
    var t = [];
    bu(t, hr, e, Di(e)), pu(Vf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin" ? (Ba(), rr = t, hr = n, rr.attachEvent("onpropertychange", Du)) : e === "focusout" && Ba();
}
function Bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ol(hr);
}
function Hf(e, t) {
  if (e === "click") return Ol(t);
}
function Gf(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function Kf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : Kf;
function gr(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Is.call(t, l) || !ut(e[l], t[l])) return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ga(e, t) {
  var n = Ha(e);
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
    n = Ha(n);
  }
}
function zu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ru() {
  for (var e = window, t = fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fl(e.document);
  }
  return t;
}
function Wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Yf(e) {
  var t = Ru(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Ga(n, s);
        var a = Ga(
          n,
          r
        );
        l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Xf = _t && "documentMode" in document && 11 >= document.documentMode, hn = null, Gs = null, lr = null, Ks = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ks || hn == null || hn !== fl(r) || (r = hn, "selectionStart" in r && Wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && gr(lr, r) || (lr = r, r = wl(Gs, "onSelect"), 0 < r.length && (t = new $i("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ps = {}, Au = {};
_t && (Au = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function $l(e) {
  if (ps[e]) return ps[e];
  if (!gn[e]) return e;
  var t = gn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Au) return ps[e] = t[n];
  return e;
}
var Fu = $l("animationend"), Ou = $l("animationiteration"), $u = $l("animationstart"), Uu = $l("transitionend"), Vu = /* @__PURE__ */ new Map(), Ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Vu.set(e, t), an(t, [e]);
}
for (var ms = 0; ms < Ya.length; ms++) {
  var hs = Ya[ms], Zf = hs.toLowerCase(), Jf = hs[0].toUpperCase() + hs.slice(1);
  Wt(Zf, "on" + Jf);
}
Wt(Fu, "onAnimationEnd");
Wt(Ou, "onAnimationIteration");
Wt($u, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Uu, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
an("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
an("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Xa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Xd(r, t, void 0, e), e.currentTarget = null;
}
function Wu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Xa(l, o, c), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Xa(l, o, c), s = u;
      }
    }
  }
  if (ml) throw e = Ws, ml = !1, Ws = null, e;
}
function ie(e, t) {
  var n = t[qs];
  n === void 0 && (n = t[qs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Qu(t, e, 2, !1), n.add(r));
}
function gs(e, t, n) {
  var r = 0;
  t && (r |= 4), Qu(n, e, r, t);
}
var Wr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Wr]) {
    e[Wr] = !0, Zo.forEach(function(n) {
      n !== "selectionchange" && (qf.has(n) || gs(n, !1, e), gs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || (t[Wr] = !0, gs("selectionchange", !1, t));
  }
}
function Qu(e, t, n, r) {
  switch (Nu(t)) {
    case 1:
      var l = pf;
      break;
    case 4:
      l = mf;
      break;
    default:
      l = Fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ys(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var u = a.tag;
        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        a = a.return;
      }
      for (; o !== null; ) {
        if (a = Xt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  pu(function() {
    var c = s, h = Di(n), g = [];
    e: {
      var m = Vu.get(e);
      if (m !== void 0) {
        var y = $i, w = e;
        switch (e) {
          case "keypress":
            if (nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Tf;
            break;
          case "focusin":
            w = "focus", y = cs;
            break;
          case "focusout":
            w = "blur", y = cs;
            break;
          case "beforeblur":
          case "afterblur":
            y = cs;
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
            y = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = yf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = bf;
            break;
          case Fu:
          case Ou:
          case $u:
            y = xf;
            break;
          case Uu:
            y = Df;
            break;
          case "scroll":
            y = hf;
            break;
          case "wheel":
            y = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = $a;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var j = p.stateNode;
          if (p.tag === 5 && j !== null && (p = j, f !== null && (j = dr(d, f), j != null && x.push(vr(d, j, p)))), k) break;
          d = d.return;
        }
        0 < x.length && (m = new y(m, w, null, n, h), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== $s && (w = n.relatedTarget || n.fromElement) && (Xt(w) || w[St])) break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? Xt(w) : null, w !== null && (k = on(w), w !== k || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (x = Fa, j = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = $a, j = "onPointerLeave", f = "onPointerEnter", d = "pointer"), k = y == null ? m : yn(y), p = w == null ? m : yn(w), m = new x(j, d + "leave", y, n, h), m.target = k, m.relatedTarget = p, j = null, Xt(h) === c && (x = new x(f, d + "enter", w, n, h), x.target = p, x.relatedTarget = k, j = x), k = j, y && w) t: {
            for (x = y, f = w, d = 0, p = x; p; p = dn(p)) d++;
            for (p = 0, j = f; j; j = dn(j)) p++;
            for (; 0 < d - p; ) x = dn(x), d--;
            for (; 0 < p - d; ) f = dn(f), p--;
            for (; d--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = dn(x), f = dn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && Za(g, m, y, x, !1), w !== null && k !== null && Za(g, k, w, x, !0);
        }
      }
      e: {
        if (m = c ? yn(c) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var N = Wf;
        else if (Wa(m)) if (Pu) N = Gf;
        else {
          N = Bf;
          var L = Qf;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Hf);
        if (N && (N = N(e, c))) {
          bu(g, N, n, h);
          break e;
        }
        L && L(e, m, c), e === "focusout" && (L = m._wrapperState) && L.controlled && m.type === "number" && zs(m, "number", m.value);
      }
      switch (L = c ? yn(c) : window, e) {
        case "focusin":
          (Wa(L) || L.contentEditable === "true") && (hn = L, Gs = c, lr = null);
          break;
        case "focusout":
          lr = Gs = hn = null;
          break;
        case "mousedown":
          Ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ks = !1, Ka(g, n, h);
          break;
        case "selectionchange":
          if (Xf) break;
        case "keydown":
        case "keyup":
          Ka(g, n, h);
      }
      var _;
      if (Vi) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else mn ? Lu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Tu && n.locale !== "ko" && (mn || E !== "onCompositionStart" ? E === "onCompositionEnd" && mn && (_ = Iu()) : (Mt = h, Oi = "value" in Mt ? Mt.value : Mt.textContent, mn = !0)), L = wl(c, E), 0 < L.length && (E = new Oa(E, e, null, n, h), g.push({ event: E, listeners: L }), _ ? E.data = _ : (_ = Mu(n), _ !== null && (E.data = _)))), (_ = Ff ? Of(e, n) : $f(e, n)) && (c = wl(c, "onBeforeInput"), 0 < c.length && (h = new Oa("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: c }), h.data = _));
    }
    Wu(g, t);
  });
}
function vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, s = l.stateNode;
    l.tag === 5 && s !== null && (l = s, s = dr(e, n), s != null && r.unshift(vr(e, s, l)), s = dr(e, t), s != null && r.push(vr(e, s, l))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Za(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = dr(n, s), u != null && a.unshift(vr(n, u, o))) : l || (u = dr(n, s), u != null && a.push(vr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var ep = /\r\n?/g, tp = /\u0000|\uFFFD/g;
function Ja(e) {
  return (typeof e == "string" ? e : "" + e).replace(ep, `
`).replace(tp, "");
}
function Qr(e, t, n) {
  if (t = Ja(t), Ja(e) !== t && n) throw Error(I(425));
}
function xl() {
}
var Ys = null, Xs = null;
function Zs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Js = typeof setTimeout == "function" ? setTimeout : void 0, np = typeof clearTimeout == "function" ? clearTimeout : void 0, qa = typeof Promise == "function" ? Promise : void 0, rp = typeof queueMicrotask == "function" ? queueMicrotask : typeof qa < "u" ? function(e) {
  return qa.resolve(null).then(e).catch(lp);
} : Js;
function lp(e) {
  setTimeout(function() {
    throw e;
  });
}
function vs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), mr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  mr(t);
}
function Rt(e) {
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
function eo(e) {
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
var Un = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Un, wr = "__reactProps$" + Un, St = "__reactContainer$" + Un, qs = "__reactEvents$" + Un, sp = "__reactListeners$" + Un, ip = "__reactHandles$" + Un;
function Xt(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[ft]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = eo(e); e !== null; ) {
        if (n = e[ft]) return n;
        e = eo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[ft] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Ul(e) {
  return e[wr] || null;
}
var ei = [], vn = -1;
function Qt(e) {
  return { current: e };
}
function ae(e) {
  0 > vn || (e.current = ei[vn], ei[vn] = null, vn--);
}
function le(e, t) {
  vn++, ei[vn] = e.current, e.current = t;
}
var Vt = {}, Ie = Qt(Vt), Ae = Qt(!1), tn = Vt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n) l[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Fe(e) {
  return e = e.childContextTypes, e != null;
}
function _l() {
  ae(Ae), ae(Ie);
}
function to(e, t, n) {
  if (Ie.current !== Vt) throw Error(I(168));
  le(Ie, t), le(Ae, n);
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(I(108, Wd(e) || "Unknown", l));
  return de({}, n, r);
}
function Sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, tn = Ie.current, le(Ie, e), le(Ae, Ae.current), !0;
}
function no(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = Bu(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ae(Ae), ae(Ie), le(Ie, e)) : ae(Ae), le(Ae, n);
}
var yt = null, Vl = !1, ws = !1;
function Hu(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function ap(e) {
  Vl = !0, Hu(e);
}
function Bt() {
  if (!ws && yt !== null) {
    ws = !0;
    var e = 0, t = ne;
    try {
      var n = yt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Vl = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), yu(zi, Bt), l;
    } finally {
      ne = t, ws = !1;
    }
  }
  return null;
}
var wn = [], xn = 0, kl = null, jl = 0, Ge = [], Ke = 0, nn = null, vt = 1, wt = "";
function Kt(e, t) {
  wn[xn++] = jl, wn[xn++] = kl, kl = e, jl = t;
}
function Gu(e, t, n) {
  Ge[Ke++] = vt, Ge[Ke++] = wt, Ge[Ke++] = nn, nn = e;
  var r = vt;
  e = wt;
  var l = 32 - at(r) - 1;
  r &= ~(1 << l), n += 1;
  var s = 32 - at(t) + l;
  if (30 < s) {
    var a = l - l % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, vt = 1 << 32 - at(t) + l | n << l | r, wt = s + e;
  } else vt = 1 << s | n << l | r, wt = e;
}
function Qi(e) {
  e.return !== null && (Kt(e, 1), Gu(e, 1, 0));
}
function Bi(e) {
  for (; e === kl; ) kl = wn[--xn], wn[xn] = null, jl = wn[--xn], wn[xn] = null;
  for (; e === nn; ) nn = Ge[--Ke], Ge[Ke] = null, wt = Ge[--Ke], Ge[Ke] = null, vt = Ge[--Ke], Ge[Ke] = null;
}
var Ve = null, Ue = null, oe = !1, st = null;
function Ku(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ro(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = Rt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: vt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, Ue = null, !0) : !1;
    default:
      return !1;
  }
}
function ti(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ni(e) {
  if (oe) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!ro(e, t)) {
        if (ti(e)) throw Error(I(418));
        t = Rt(n.nextSibling);
        var r = Ve;
        t && ro(e, t) ? Ku(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Ve = e);
      }
    } else {
      if (ti(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, oe = !1, Ve = e;
    }
  }
}
function lo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function Br(e) {
  if (e !== Ve) return !1;
  if (!oe) return lo(e), oe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zs(e.type, e.memoizedProps)), t && (t = Ue)) {
    if (ti(e)) throw Yu(), Error(I(418));
    for (; t; ) Ku(e, t), t = Rt(t.nextSibling);
  }
  if (lo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Ve ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Yu() {
  for (var e = Ue; e; ) e = Rt(e.nextSibling);
}
function bn() {
  Ue = Ve = null, oe = !1;
}
function Hi(e) {
  st === null ? st = [e] : st.push(e);
}
var op = Et.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var l = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[s] : o[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Hr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function so(e) {
  var t = e._init;
  return t(e._payload);
}
function Xu(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [d], f.flags |= 16) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function l(f, d) {
    return f = $t(f, d), f.index = 0, f.sibling = null, f;
  }
  function s(f, d, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, d, p, j) {
    return d === null || d.tag !== 6 ? (d = Cs(p, f.mode, j), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function u(f, d, p, j) {
    var N = p.type;
    return N === pn ? h(f, d, p.props.children, j, p.key) : d !== null && (d.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && so(N) === d.type) ? (j = l(d, p.props), j.ref = Gn(f, d, p), j.return = f, j) : (j = ul(p.type, p.key, p.props, null, f.mode, j), j.ref = Gn(f, d, p), j.return = f, j);
  }
  function c(f, d, p, j) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Ns(p, f.mode, j), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function h(f, d, p, j, N) {
    return d === null || d.tag !== 7 ? (d = en(p, f.mode, j, N), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function g(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Cs("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zr:
          return p = ul(d.type, d.key, d.props, null, f.mode, p), p.ref = Gn(f, null, d), p.return = f, p;
        case fn:
          return d = Ns(d, f.mode, p), d.return = f, d;
        case Nt:
          var j = d._init;
          return g(f, j(d._payload), p);
      }
      if (Zn(d) || Vn(d)) return d = en(d, f.mode, p, null), d.return = f, d;
      Hr(f, d);
    }
    return null;
  }
  function m(f, d, p, j) {
    var N = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : o(f, d, "" + p, j);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          return p.key === N ? u(f, d, p, j) : null;
        case fn:
          return p.key === N ? c(f, d, p, j) : null;
        case Nt:
          return N = p._init, m(
            f,
            d,
            N(p._payload),
            j
          );
      }
      if (Zn(p) || Vn(p)) return N !== null ? null : h(f, d, p, j, null);
      Hr(f, p);
    }
    return null;
  }
  function y(f, d, p, j, N) {
    if (typeof j == "string" && j !== "" || typeof j == "number") return f = f.get(p) || null, o(d, f, "" + j, N);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case zr:
          return f = f.get(j.key === null ? p : j.key) || null, u(d, f, j, N);
        case fn:
          return f = f.get(j.key === null ? p : j.key) || null, c(d, f, j, N);
        case Nt:
          var L = j._init;
          return y(f, d, p, L(j._payload), N);
      }
      if (Zn(j) || Vn(j)) return f = f.get(p) || null, h(d, f, j, N, null);
      Hr(d, j);
    }
    return null;
  }
  function w(f, d, p, j) {
    for (var N = null, L = null, _ = d, E = d = 0, M = null; _ !== null && E < p.length; E++) {
      _.index > E ? (M = _, _ = null) : M = _.sibling;
      var D = m(f, _, p[E], j);
      if (D === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && D.alternate === null && t(f, _), d = s(D, d, E), L === null ? N = D : L.sibling = D, L = D, _ = M;
    }
    if (E === p.length) return n(f, _), oe && Kt(f, E), N;
    if (_ === null) {
      for (; E < p.length; E++) _ = g(f, p[E], j), _ !== null && (d = s(_, d, E), L === null ? N = _ : L.sibling = _, L = _);
      return oe && Kt(f, E), N;
    }
    for (_ = r(f, _); E < p.length; E++) M = y(_, f, E, p[E], j), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? E : M.key), d = s(M, d, E), L === null ? N = M : L.sibling = M, L = M);
    return e && _.forEach(function(S) {
      return t(f, S);
    }), oe && Kt(f, E), N;
  }
  function x(f, d, p, j) {
    var N = Vn(p);
    if (typeof N != "function") throw Error(I(150));
    if (p = N.call(p), p == null) throw Error(I(151));
    for (var L = N = null, _ = d, E = d = 0, M = null, D = p.next(); _ !== null && !D.done; E++, D = p.next()) {
      _.index > E ? (M = _, _ = null) : M = _.sibling;
      var S = m(f, _, D.value, j);
      if (S === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && S.alternate === null && t(f, _), d = s(S, d, E), L === null ? N = S : L.sibling = S, L = S, _ = M;
    }
    if (D.done) return n(
      f,
      _
    ), oe && Kt(f, E), N;
    if (_ === null) {
      for (; !D.done; E++, D = p.next()) D = g(f, D.value, j), D !== null && (d = s(D, d, E), L === null ? N = D : L.sibling = D, L = D);
      return oe && Kt(f, E), N;
    }
    for (_ = r(f, _); !D.done; E++, D = p.next()) D = y(_, f, E, D.value, j), D !== null && (e && D.alternate !== null && _.delete(D.key === null ? E : D.key), d = s(D, d, E), L === null ? N = D : L.sibling = D, L = D);
    return e && _.forEach(function(b) {
      return t(f, b);
    }), oe && Kt(f, E), N;
  }
  function k(f, d, p, j) {
    if (typeof p == "object" && p !== null && p.type === pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          e: {
            for (var N = p.key, L = d; L !== null; ) {
              if (L.key === N) {
                if (N = p.type, N === pn) {
                  if (L.tag === 7) {
                    n(f, L.sibling), d = l(L, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (L.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && so(N) === L.type) {
                  n(f, L.sibling), d = l(L, p.props), d.ref = Gn(f, L, p), d.return = f, f = d;
                  break e;
                }
                n(f, L);
                break;
              } else t(f, L);
              L = L.sibling;
            }
            p.type === pn ? (d = en(p.props.children, f.mode, j, p.key), d.return = f, f = d) : (j = ul(p.type, p.key, p.props, null, f.mode, j), j.ref = Gn(f, d, p), j.return = f, f = j);
          }
          return a(f);
        case fn:
          e: {
            for (L = p.key; d !== null; ) {
              if (d.key === L) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(f, d.sibling), d = l(d, p.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = Ns(p, f.mode, j), d.return = f, f = d;
          }
          return a(f);
        case Nt:
          return L = p._init, k(f, d, L(p._payload), j);
      }
      if (Zn(p)) return w(f, d, p, j);
      if (Vn(p)) return x(f, d, p, j);
      Hr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = Cs(p, f.mode, j), d.return = f, f = d), a(f)) : n(f, d);
  }
  return k;
}
var Pn = Xu(!0), Zu = Xu(!1), El = Qt(null), Cl = null, _n = null, Gi = null;
function Ki() {
  Gi = _n = Cl = null;
}
function Yi(e) {
  var t = El.current;
  ae(El), e._currentValue = t;
}
function ri(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  Cl = e, Gi = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Gi !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
    if (Cl === null) throw Error(I(308));
    _n = e, Cl.dependencies = { lanes: 0, firstContext: e };
  } else _n = _n.next = e;
  return t;
}
var Zt = null;
function Xi(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function Ju(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Xi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, kt(e, r);
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function qu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, kt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Xi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, kt(e, n);
}
function rl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ri(e, n);
  }
}
function io(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? l = s = a : s = s.next = a, n = n.next;
      } while (n !== null);
      s === null ? l = s = t : s = s.next = t;
    } else l = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Nl(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var s = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, a === null ? s = c : a.next = c, a = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== a && (o === null ? h.firstBaseUpdate = c : o.next = c, h.lastBaseUpdate = u));
  }
  if (s !== null) {
    var g = l.baseState;
    a = 0, h = c = u = null, o = s;
    do {
      var m = o.lane, y = o.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, x = o;
          switch (m = t, y = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                g = w.call(y, g, m);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, m = typeof w == "function" ? w.call(y, g, m) : w, m == null) break e;
              g = de({}, g, m);
              break e;
            case 2:
              It = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else y = { eventTime: y, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (c = h = y, u = g) : h = h.next = y, a |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = g), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ln |= a, e.lanes = a, e.memoizedState = g;
  }
}
function ao(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(I(191, l));
      l.call(r);
    }
  }
}
var Mr = {}, mt = Qt(Mr), xr = Qt(Mr), _r = Qt(Mr);
function Jt(e) {
  if (e === Mr) throw Error(I(174));
  return e;
}
function Ji(e, t) {
  switch (le(_r, t), le(xr, e), le(mt, Mr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : As(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = As(t, e);
  }
  ae(mt), le(mt, t);
}
function Dn() {
  ae(mt), ae(xr), ae(_r);
}
function ec(e) {
  Jt(_r.current);
  var t = Jt(mt.current), n = As(t, e.type);
  t !== n && (le(xr, e), le(mt, n));
}
function qi(e) {
  xr.current === e && (ae(mt), ae(xr));
}
var ue = Qt(0);
function Il(e) {
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
var xs = [];
function ea() {
  for (var e = 0; e < xs.length; e++) xs[e]._workInProgressVersionPrimary = null;
  xs.length = 0;
}
var ll = Et.ReactCurrentDispatcher, _s = Et.ReactCurrentBatchConfig, rn = 0, ce = null, ge = null, we = null, Tl = !1, sr = !1, Sr = 0, up = 0;
function je() {
  throw Error(I(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, l, s) {
  if (rn = s, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? pp : mp, e = n(r, l), sr) {
    s = 0;
    do {
      if (sr = !1, Sr = 0, 25 <= s) throw Error(I(301));
      s += 1, we = ge = null, t.updateQueue = null, ll.current = hp, e = n(r, l);
    } while (sr);
  }
  if (ll.current = Ll, t = ge !== null && ge.next !== null, rn = 0, we = ge = ce = null, Tl = !1, t) throw Error(I(300));
  return e;
}
function ra() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? ce.memoizedState = we = e : we = we.next = e, we;
}
function Je() {
  if (ge === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = we === null ? ce.memoizedState : we.next;
  if (t !== null) we = t, ge = e;
  else {
    if (e === null) throw Error(I(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, we === null ? ce.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ss(e) {
  var t = Je(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = ge, l = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = s.next, s.next = a;
    }
    r.baseQueue = l = s, n.pending = null;
  }
  if (l !== null) {
    s = l.next, r = r.baseState;
    var o = a = null, u = null, c = s;
    do {
      var h = c.lane;
      if ((rn & h) === h) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var g = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = g, a = r) : u = u.next = g, ce.lanes |= h, ln |= h;
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? a = r : u.next = o, ut(r, t.memoizedState) || (Re = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, ce.lanes |= s, ln |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ks(e) {
  var t = Je(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== l);
    ut(s, t.memoizedState) || (Re = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function tc() {
}
function nc(e, t) {
  var n = ce, r = Je(), l = t(), s = !ut(r.memoizedState, l);
  if (s && (r.memoizedState = l, Re = !0), r = r.queue, la(sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, jr(9, lc.bind(null, n, r, l, t), void 0, null), xe === null) throw Error(I(349));
    rn & 30 || rc(n, t, l);
  }
  return l;
}
function rc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ic(t) && ac(e);
}
function sc(e, t, n) {
  return n(function() {
    ic(t) && ac(e);
  });
}
function ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function ac(e) {
  var t = kt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function oo(e) {
  var t = dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = fp.bind(null, ce, e), [t.memoizedState, e];
}
function jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function oc() {
  return Je().memoizedState;
}
function sl(e, t, n, r) {
  var l = dt();
  ce.flags |= e, l.memoizedState = jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Wl(e, t, n, r) {
  var l = Je();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ge !== null) {
    var a = ge.memoizedState;
    if (s = a.destroy, r !== null && ta(r, a.deps)) {
      l.memoizedState = jr(t, n, s, r);
      return;
    }
  }
  ce.flags |= e, l.memoizedState = jr(1 | t, n, s, r);
}
function uo(e, t) {
  return sl(8390656, 8, e, t);
}
function la(e, t) {
  return Wl(2048, 8, e, t);
}
function uc(e, t) {
  return Wl(4, 2, e, t);
}
function cc(e, t) {
  return Wl(4, 4, e, t);
}
function dc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function fc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wl(4, 4, dc.bind(null, t, e), n);
}
function sa() {
}
function pc(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function mc(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function hc(e, t, n) {
  return rn & 21 ? (ut(n, t) || (n = xu(), ce.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = n);
}
function cp(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _s.transition;
  _s.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, _s.transition = r;
  }
}
function gc() {
  return Je().memoizedState;
}
function dp(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, yc(e)) vc(t, n);
  else if (n = Ju(e, t, n, r), n !== null) {
    var l = Le();
    ot(n, e, r, l), wc(n, t, r);
  }
}
function fp(e, t, n) {
  var r = Ot(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yc(e)) vc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, ut(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Xi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Ju(e, t, l, r), n !== null && (l = Le(), ot(n, e, r, l), wc(n, t, r));
  }
}
function yc(e) {
  var t = e.alternate;
  return e === ce || t !== null && t === ce;
}
function vc(e, t) {
  sr = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function wc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ri(e, n);
  }
}
var Ll = { readContext: Ze, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, pp = { readContext: Ze, useCallback: function(e, t) {
  return dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: uo, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sl(
    4194308,
    4,
    dc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return sl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return sl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = dt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = dp.bind(null, ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: oo, useDebugValue: sa, useDeferredValue: function(e) {
  return dt().memoizedState = e;
}, useTransition: function() {
  var e = oo(!1), t = e[0];
  return e = cp.bind(null, e[1]), dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ce, l = dt();
  if (oe) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(I(349));
    rn & 30 || rc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, uo(sc.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, jr(9, lc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = dt(), t = xe.identifierPrefix;
  if (oe) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = up++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mp = {
  readContext: Ze,
  useCallback: pc,
  useContext: Ze,
  useEffect: la,
  useImperativeHandle: fc,
  useInsertionEffect: uc,
  useLayoutEffect: cc,
  useMemo: mc,
  useReducer: Ss,
  useRef: oc,
  useState: function() {
    return Ss(kr);
  },
  useDebugValue: sa,
  useDeferredValue: function(e) {
    var t = Je();
    return hc(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = Ss(kr)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: tc,
  useSyncExternalStore: nc,
  useId: gc,
  unstable_isNewReconciler: !1
}, hp = { readContext: Ze, useCallback: pc, useContext: Ze, useEffect: la, useImperativeHandle: fc, useInsertionEffect: uc, useLayoutEffect: cc, useMemo: mc, useReducer: ks, useRef: oc, useState: function() {
  return ks(kr);
}, useDebugValue: sa, useDeferredValue: function(e) {
  var t = Je();
  return ge === null ? t.memoizedState = e : hc(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = ks(kr)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: tc, useSyncExternalStore: nc, useId: gc, unstable_isNewReconciler: !1 };
function rt(e, t) {
  if (e && e.defaultProps) {
    t = de({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), l = Ot(e), s = xt(r, l);
  s.payload = t, n != null && (s.callback = n), t = At(e, s, l), t !== null && (ot(t, e, l, r), rl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), l = Ot(e), s = xt(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = At(e, s, l), t !== null && (ot(t, e, l, r), rl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Le(), r = Ot(e), l = xt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (ot(t, e, r, n), rl(t, e, r));
} };
function co(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(l, s) : !0;
}
function xc(e, t, n) {
  var r = !1, l = Vt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ze(s) : (l = Fe(t) ? tn : Ie.current, r = t.contextTypes, s = (r = r != null) ? Mn(e, l) : Vt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function fo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function si(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Zi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = Ze(s) : (s = Fe(t) ? tn : Ie.current, l.context = Mn(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (li(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ql.enqueueReplaceState(l, l.state, null), Nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vd(r), r = r.return;
    while (r);
    var l = n;
  } catch (s) {
    l = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function js(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ii(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gp = typeof WeakMap == "function" ? WeakMap : Map;
function _c(e, t, n) {
  n = xt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    bl || (bl = !0, gi = r), ii(e, t);
  }, n;
}
function Sc(e, t, n) {
  n = xt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ii(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ii(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function po(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Lp.bind(null, e, t, n), t.then(e, e));
}
function mo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ho(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var yp = Et.ReactCurrentOwner, Re = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : Pn(t, e.child, n, r);
}
function go(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return In(t, l), r = na(e, t, n, r, s, l), n = ra(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (oe && n && Qi(t), t.flags |= 1, Te(e, t, r, l), t.child);
}
function yo(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !pa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, kc(e, t, s, r, l)) : (e = ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : gr, n(a, r) && e.ref === t.ref) return jt(e, t, l);
  }
  return t.flags |= 1, e = $t(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function kc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (gr(s, r) && e.ref === t.ref) if (Re = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (Re = !0);
    else return t.lanes = e.lanes, jt(e, t, l);
  }
  return ai(e, t, n, r, l);
}
function jc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(kn, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(kn, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, le(kn, $e), $e |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, le(kn, $e), $e |= r;
  return Te(e, t, l, n), t.child;
}
function Ec(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ai(e, t, n, r, l) {
  var s = Fe(n) ? tn : Ie.current;
  return s = Mn(t, s), In(t, l), n = na(e, t, n, r, s, l), r = ra(), e !== null && !Re ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (oe && r && Qi(t), t.flags |= 1, Te(e, t, n, l), t.child);
}
function vo(e, t, n, r, l) {
  if (Fe(n)) {
    var s = !0;
    Sl(t);
  } else s = !1;
  if (In(t, l), t.stateNode === null) il(e, t), xc(t, n, r), si(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = Fe(n) ? tn : Ie.current, c = Mn(t, c));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    g || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && fo(t, a, r, c), It = !1;
    var m = t.memoizedState;
    a.state = m, Nl(t, r, a, l), u = t.memoizedState, o !== r || m !== u || Ae.current || It ? (typeof h == "function" && (li(t, n, h, r), u = t.memoizedState), (o = It || co(t, n, o, r, m, u, c)) ? (g || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, qu(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : rt(t.type, o), a.props = c, g = t.pendingProps, m = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ze(u) : (u = Fe(n) ? tn : Ie.current, u = Mn(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== g || m !== u) && fo(t, a, r, u), It = !1, m = t.memoizedState, a.state = m, Nl(t, r, a, l);
    var w = t.memoizedState;
    o !== g || m !== w || Ae.current || It ? (typeof y == "function" && (li(t, n, y, r), w = t.memoizedState), (c = It || co(t, n, c, r, m, w, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return oi(e, t, n, r, s, l);
}
function oi(e, t, n, r, l, s) {
  Ec(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && no(t, n, !1), jt(e, t, s);
  r = t.stateNode, yp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pn(t, e.child, null, s), t.child = Pn(t, null, o, s)) : Te(e, t, o, s), t.memoizedState = r.state, l && no(t, n, !0), t.child;
}
function Cc(e) {
  var t = e.stateNode;
  t.pendingContext ? to(e, t.pendingContext, t.pendingContext !== t.context) : t.context && to(e, t.context, !1), Ji(e, t.containerInfo);
}
function wo(e, t, n, r, l) {
  return bn(), Hi(l), t.flags |= 256, Te(e, t, n, r), t.child;
}
var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
function ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nc(e, t, n) {
  var r = t.pendingProps, l = ue.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(ue, l & 1), e === null)
    return ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Gl(a, r, 0, null), e = en(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ci(n), t.memoizedState = ui, e) : ia(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return vp(e, t, a, r, o, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = $t(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? s = $t(o, s) : (s = en(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? ci(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = ui, r;
  }
  return s = e.child, e = s.sibling, r = $t(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ia(e, t) {
  return t = Gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gr(e, t, n, r) {
  return r !== null && Hi(r), Pn(t, e.child, null, n), e = ia(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = js(Error(I(422))), Gr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Gl({ mode: "visible", children: r.children }, l, 0, null), s = en(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pn(t, e.child, null, a), t.child.memoizedState = ci(a), t.memoizedState = ui, s);
  if (!(t.mode & 1)) return Gr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = js(s, r, void 0), Gr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Re || o) {
    if (r = xe, r !== null) {
      switch (a & -a) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, kt(e, l), ot(r, e, l, -1));
    }
    return fa(), r = js(Error(I(421))), Gr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Ue = Rt(l.nextSibling), Ve = t, oe = !0, st = null, e !== null && (Ge[Ke++] = vt, Ge[Ke++] = wt, Ge[Ke++] = nn, vt = e.id, wt = e.overflow, nn = t), t = ia(t, r.children), t.flags |= 4096, t);
}
function xo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ri(e.return, t, n);
}
function Es(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Ic(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (Te(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && xo(e, n, t);
      else if (e.tag === 19) xo(e, n, t);
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
  if (le(ue, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Es(t, !1, l, n, s);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Es(t, !0, n, null, s);
      break;
    case "together":
      Es(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function il(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function wp(e, t, n) {
  switch (t.tag) {
    case 3:
      Cc(t), bn();
      break;
    case 5:
      ec(t);
      break;
    case 1:
      Fe(t.type) && Sl(t);
      break;
    case 4:
      Ji(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      le(El, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nc(e, t, n) : (le(ue, ue.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      le(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ic(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, jc(e, t, n);
  }
  return jt(e, t, n);
}
var Tc, di, Lc, Mc;
Tc = function(e, t) {
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
di = function() {
};
Lc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Jt(mt.current);
    var s = null;
    switch (n) {
      case "input":
        l = Ps(e, l), r = Ps(e, r), s = [];
        break;
      case "select":
        l = de({}, l, { value: void 0 }), r = de({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = Rs(e, l), r = Rs(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xl);
    }
    Fs(n, r);
    var a;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ur.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ur.hasOwnProperty(c) ? (u != null && c === "onScroll" && ie("scroll", e), s || o === u || (s = [])) : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Mc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!oe) switch (e.tailMode) {
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
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function xp(e, t, n) {
  var r = t.pendingProps;
  switch (Bi(t), t.tag) {
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
      return Ee(t), null;
    case 1:
      return Fe(t.type) && _l(), Ee(t), null;
    case 3:
      return r = t.stateNode, Dn(), ae(Ae), ae(Ie), ea(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (wi(st), st = null))), di(e, t), Ee(t), null;
    case 5:
      qi(t);
      var l = Jt(_r.current);
      if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ee(t), null;
        }
        if (e = Jt(mt.current), Br(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[ft] = t, r[wr] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < qn.length; l++) ie(qn[l], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Ia(r, s), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ie("invalid", r);
              break;
            case "textarea":
              La(r, s), ie("invalid", r);
          }
          Fs(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Qr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Qr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : ur.hasOwnProperty(a) && o != null && a === "onScroll" && ie("scroll", r);
          }
          switch (n) {
            case "input":
              Rr(r), Ta(r, s, !0);
              break;
            case "textarea":
              Rr(r), Ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = xl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[ft] = t, e[wr] = r, Tc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Os(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < qn.length; l++) ie(qn[l], e);
                l = r;
                break;
              case "source":
                ie("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), l = r;
                break;
              case "details":
                ie("toggle", e), l = r;
                break;
              case "input":
                Ia(e, r), l = Ps(e, r), ie("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = de({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                La(e, r), l = Rs(e, r), ie("invalid", e);
                break;
              default:
                l = r;
            }
            Fs(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? ou(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && iu(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && cr(e, u) : typeof u == "number" && cr(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ur.hasOwnProperty(s) ? u != null && s === "onScroll" && ie("scroll", e) : u != null && Li(e, s, u, a));
            }
            switch (n) {
              case "input":
                Rr(e), Ta(e, r, !1);
                break;
              case "textarea":
                Rr(e), Ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? jn(e, !!r.multiple, s, !1) : r.defaultValue != null && jn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = xl);
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
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) Mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Jt(_r.current), Jt(mt.current), Br(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ft] = t, (s = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
            case 3:
              Qr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Qr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ft] = t, t.stateNode = r;
      }
      return Ee(t), null;
    case 13:
      if (ae(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (oe && Ue !== null && t.mode & 1 && !(t.flags & 128)) Yu(), bn(), t.flags |= 98560, s = !1;
        else if (s = Br(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[ft] = t;
          } else bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), s = !1;
        } else st !== null && (wi(st), st = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? ye === 0 && (ye = 3) : fa())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return Dn(), di(e, t), e === null && yr(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return Yi(t.type._context), Ee(t), null;
    case 17:
      return Fe(t.type) && _l(), Ee(t), null;
    case 19:
      if (ae(ue), s = t.memoizedState, s === null) return Ee(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Kn(s, !1);
      else {
        if (ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Il(e), a !== null) {
            for (t.flags |= 128, Kn(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return le(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && me() > Rn && (t.flags |= 128, r = !0, Kn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Il(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !oe) return Ee(t), null;
        } else 2 * me() - s.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = me(), t.sibling = null, n = ue.current, le(ue, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function _p(e, t) {
  switch (Bi(t), t.tag) {
    case 1:
      return Fe(t.type) && _l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), ae(Ae), ae(Ie), ea(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return qi(t), null;
    case 13:
      if (ae(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        bn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(ue), null;
    case 4:
      return Dn(), null;
    case 10:
      return Yi(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kr = !1, Ce = !1, Sp = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    fe(e, t, r);
  }
  else n.current = null;
}
function fi(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var _o = !1;
function kp(e, t) {
  if (Ys = yl, e = Ru(), Wi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, o = -1, u = -1, c = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var y; g !== n || l !== 0 && g.nodeType !== 3 || (o = a + l), g !== s || r !== 0 && g.nodeType !== 3 || (u = a + r), g.nodeType === 3 && (a += g.nodeValue.length), (y = g.firstChild) !== null; )
            m = g, g = y;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++c === l && (o = a), m === s && ++h === r && (u = a), (y = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xs = { focusedElem: e, selectionRange: n }, yl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, k = w.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : rt(t.type, x), k);
            f.__reactInternalSnapshotBeforeUpdate = d;
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
          throw Error(I(163));
      }
    } catch (j) {
      fe(t, t.return, j);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return w = _o, _o = !1, w;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && fi(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
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
function pi(e) {
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
function bc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, bc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ft], delete t[wr], delete t[qs], delete t[sp], delete t[ip])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function So(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xl));
  else if (r !== 4 && (e = e.child, e !== null)) for (mi(e, t, n), e = e.sibling; e !== null; ) mi(e, t, n), e = e.sibling;
}
function hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
}
var _e = null, lt = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Dc(e, t, n), n = n.sibling;
}
function Dc(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function") try {
    pt.onCommitFiberUnmount(Al, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || Sn(n, t);
    case 6:
      var r = _e, l = lt;
      _e = null, Ct(e, t, n), _e = r, lt = l, _e !== null && (lt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (lt ? (e = _e, n = n.stateNode, e.nodeType === 8 ? vs(e.parentNode, n) : e.nodeType === 1 && vs(e, n), mr(e)) : vs(_e, n.stateNode));
      break;
    case 4:
      r = _e, l = lt, _e = n.stateNode.containerInfo, lt = !0, Ct(e, t, n), _e = r, lt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && fi(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!Ce && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        fe(n, t, o);
      }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Ct(e, t, n), Ce = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function ko(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sp()), t.forEach(function(r) {
      var l = bp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            _e = o.stateNode, lt = !1;
            break e;
          case 3:
            _e = o.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            _e = o.stateNode.containerInfo, lt = !0;
            break e;
        }
        o = o.return;
      }
      if (_e === null) throw Error(I(160));
      Dc(s, a, l), _e = null, lt = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      fe(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zc(t, e), t = t.sibling;
}
function zc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tt(t, e), ct(e), r & 4) {
        try {
          ir(3, e, e.return), Bl(3, e);
        } catch (x) {
          fe(e, e.return, x);
        }
        try {
          ir(5, e, e.return);
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      break;
    case 1:
      tt(t, e), ct(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (tt(t, e), ct(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          cr(l, "");
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && ru(l, s), Os(o, a);
          var c = Os(o, s);
          for (a = 0; a < u.length; a += 2) {
            var h = u[a], g = u[a + 1];
            h === "style" ? ou(l, g) : h === "dangerouslySetInnerHTML" ? iu(l, g) : h === "children" ? cr(l, g) : Li(l, h, g, c);
          }
          switch (o) {
            case "input":
              Ds(l, s);
              break;
            case "textarea":
              lu(l, s);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? jn(l, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? jn(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jn(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[wr] = s;
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      break;
    case 6:
      if (tt(t, e), ct(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (tt(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mr(t.containerInfo);
      } catch (x) {
        fe(e, e.return, x);
      }
      break;
    case 4:
      tt(t, e), ct(e);
      break;
    case 13:
      tt(t, e), ct(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (ua = me())), r & 4 && ko(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (c = Ce) || h, tt(t, e), Ce = c) : tt(t, e), ct(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (g = P = h; P !== null; ) {
            switch (m = P, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ir(4, m, m.return);
                break;
              case 1:
                Sn(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    fe(r, n, x);
                  }
                }
                break;
              case 5:
                Sn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Eo(g);
                  continue;
                }
            }
            y !== null ? (y.return = m, P = y) : Eo(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                l = g.stateNode, c ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = g.stateNode, u = g.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = au("display", a));
              } catch (x) {
                fe(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = c ? "" : g.memoizedProps;
            } catch (x) {
              fe(e, e.return, x);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), g = g.return;
          }
          h === g && (h = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      tt(t, e), ct(e), r & 4 && ko(e);
      break;
    case 21:
      break;
    default:
      tt(
        t,
        e
      ), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (cr(l, ""), r.flags &= -33);
          var s = So(e);
          hi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = So(e);
          mi(e, o, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (u) {
      fe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jp(e, t, n) {
  P = e, Rc(e);
}
function Rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Kr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Ce;
        o = Kr;
        var c = Ce;
        if (Kr = a, (Ce = u) && !c) for (P = l; P !== null; ) a = P, u = a.child, a.tag === 22 && a.memoizedState !== null ? Co(l) : u !== null ? (u.return = a, P = u) : Co(l);
        for (; s !== null; ) P = s, Rc(s), s = s.sibling;
        P = l, Kr = o, Ce = c;
      }
      jo(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, P = s) : jo(e);
  }
}
function jo(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || Bl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && ao(t, s, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              ao(t, a, n);
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
                var h = c.memoizedState;
                if (h !== null) {
                  var g = h.dehydrated;
                  g !== null && mr(g);
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
            throw Error(I(163));
        }
        Ce || t.flags & 512 && pi(t);
      } catch (m) {
        fe(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Eo(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Co(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (u) {
            fe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              fe(t, l, u);
            }
          }
          var s = t.return;
          try {
            pi(t);
          } catch (u) {
            fe(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pi(t);
          } catch (u) {
            fe(t, a, u);
          }
      }
    } catch (u) {
      fe(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, P = o;
      break;
    }
    P = t.return;
  }
}
var Ep = Math.ceil, Ml = Et.ReactCurrentDispatcher, aa = Et.ReactCurrentOwner, Xe = Et.ReactCurrentBatchConfig, Z = 0, xe = null, he = null, Se = 0, $e = 0, kn = Qt(0), ye = 0, Er = null, ln = 0, Hl = 0, oa = 0, ar = null, De = null, ua = 0, Rn = 1 / 0, gt = null, bl = !1, gi = null, Ft = null, Yr = !1, bt = null, Pl = 0, or = 0, yi = null, al = -1, ol = 0;
function Le() {
  return Z & 6 ? me() : al !== -1 ? al : al = me();
}
function Ot(e) {
  return e.mode & 1 ? Z & 2 && Se !== 0 ? Se & -Se : op.transition !== null ? (ol === 0 && (ol = xu()), ol) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Nu(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < or) throw or = 0, yi = null, Error(I(185));
  Ir(e, n, r), (!(Z & 2) || e !== xe) && (e === xe && (!(Z & 2) && (Hl |= n), ye === 4 && Lt(e, Se)), Oe(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Rn = me() + 500, Vl && Bt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  of(e, t);
  var r = gl(e, e === xe ? Se : 0);
  if (r === 0) n !== null && Da(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Da(n), t === 1) e.tag === 0 ? ap(No.bind(null, e)) : Hu(No.bind(null, e)), rp(function() {
      !(Z & 6) && Bt();
    }), n = null;
    else {
      switch (_u(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = vu;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = wu;
          break;
        default:
          n = hl;
      }
      n = Qc(n, Ac.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ac(e, t) {
  if (al = -1, ol = 0, Z & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = gl(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var s = Oc();
    (xe !== e || Se !== t) && (gt = null, Rn = me() + 500, qt(e, t));
    do
      try {
        Ip();
        break;
      } catch (o) {
        Fc(e, o);
      }
    while (!0);
    Ki(), Ml.current = s, Z = l, he !== null ? t = 0 : (xe = null, Se = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (l = Qs(e), l !== 0 && (r = l, t = vi(e, l))), t === 1) throw n = Er, qt(e, 0), Lt(e, r), Oe(e, me()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cp(l) && (t = Dl(e, r), t === 2 && (s = Qs(e), s !== 0 && (r = s, t = vi(e, s))), t === 1)) throw n = Er, qt(e, 0), Lt(e, r), Oe(e, me()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Yt(e, De, gt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = ua + 500 - me(), 10 < t)) {
            if (gl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Le(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Js(Yt.bind(null, e, De, gt), t);
            break;
          }
          Yt(e, De, gt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - at(r);
            s = 1 << a, a = t[a], a > l && (l = a), r &= ~s;
          }
          if (r = l, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ep(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Js(Yt.bind(null, e, De, gt), r);
            break;
          }
          Yt(e, De, gt);
          break;
        case 5:
          Yt(e, De, gt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Oe(e, me()), e.callbackNode === n ? Ac.bind(null, e) : null;
}
function vi(e, t) {
  var n = ar;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), e = Dl(e, t), e !== 2 && (t = De, De = n, t !== null && wi(t)), e;
}
function wi(e) {
  De === null ? De = e : De.push.apply(De, e);
}
function Cp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], s = l.getSnapshot;
        l = l.value;
        try {
          if (!ut(s(), l)) return !1;
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
function Lt(e, t) {
  for (t &= ~oa, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function No(e) {
  if (Z & 6) throw Error(I(327));
  Tn();
  var t = gl(e, 0);
  if (!(t & 1)) return Oe(e, me()), null;
  var n = Dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qs(e);
    r !== 0 && (t = r, n = vi(e, r));
  }
  if (n === 1) throw n = Er, qt(e, 0), Lt(e, t), Oe(e, me()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, De, gt), Oe(e, me()), null;
}
function ca(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (Rn = me() + 500, Vl && Bt());
  }
}
function sn(e) {
  bt !== null && bt.tag === 0 && !(Z & 6) && Tn();
  var t = Z;
  Z |= 1;
  var n = Xe.transition, r = ne;
  try {
    if (Xe.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, Xe.transition = n, Z = t, !(Z & 6) && Bt();
  }
}
function da() {
  $e = kn.current, ae(kn);
}
function qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, np(n)), he !== null) for (n = he.return; n !== null; ) {
    var r = n;
    switch (Bi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && _l();
        break;
      case 3:
        Dn(), ae(Ae), ae(Ie), ea();
        break;
      case 5:
        qi(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        ae(ue);
        break;
      case 19:
        ae(ue);
        break;
      case 10:
        Yi(r.type._context);
        break;
      case 22:
      case 23:
        da();
    }
    n = n.return;
  }
  if (xe = e, he = e = $t(e.current, null), Se = $e = t, ye = 0, Er = null, oa = Hl = ln = 0, De = ar = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = l, r.next = a;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function Fc(e, t) {
  do {
    var n = he;
    try {
      if (Ki(), ll.current = Ll, Tl) {
        for (var r = ce.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (rn = 0, we = ge = ce = null, sr = !1, Sr = 0, aa.current = null, n === null || n.return === null) {
        ye = 1, Er = t, he = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = Se, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, h = o, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = mo(a);
          if (y !== null) {
            y.flags &= -257, ho(y, a, o, s, t), y.mode & 1 && po(s, c, t), t = y, u = c;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              po(s, c, t), fa();
              break e;
            }
            u = Error(I(426));
          }
        } else if (oe && o.mode & 1) {
          var k = mo(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), ho(k, a, o, s, t), Hi(zn(u, o));
            break e;
          }
        }
        s = u = zn(u, o), ye !== 4 && (ye = 2), ar === null ? ar = [s] : ar.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = _c(s, u, t);
              io(s, f);
              break e;
            case 1:
              o = u;
              var d = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var j = Sc(s, o, t);
                io(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Uc(n);
    } catch (N) {
      t = N, he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Oc() {
  var e = Ml.current;
  return Ml.current = Ll, e === null ? Ll : e;
}
function fa() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || !(ln & 268435455) && !(Hl & 268435455) || Lt(xe, Se);
}
function Dl(e, t) {
  var n = Z;
  Z |= 2;
  var r = Oc();
  (xe !== e || Se !== t) && (gt = null, qt(e, t));
  do
    try {
      Np();
      break;
    } catch (l) {
      Fc(e, l);
    }
  while (!0);
  if (Ki(), Z = n, Ml.current = r, he !== null) throw Error(I(261));
  return xe = null, Se = 0, ye;
}
function Np() {
  for (; he !== null; ) $c(he);
}
function Ip() {
  for (; he !== null && !Jd(); ) $c(he);
}
function $c(e) {
  var t = Wc(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? Uc(e) : he = t, aa.current = null;
}
function Uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _p(n, t), n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, he = null;
        return;
      }
    } else if (n = xp(n, t, $e), n !== null) {
      he = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Yt(e, t, n) {
  var r = ne, l = Xe.transition;
  try {
    Xe.transition = null, ne = 1, Tp(e, t, n, r);
  } finally {
    Xe.transition = l, ne = r;
  }
  return null;
}
function Tp(e, t, n, r) {
  do
    Tn();
  while (bt !== null);
  if (Z & 6) throw Error(I(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (uf(e, s), e === xe && (he = xe = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yr || (Yr = !0, Qc(hl, function() {
    return Tn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Xe.transition, Xe.transition = null;
    var a = ne;
    ne = 1;
    var o = Z;
    Z |= 4, aa.current = null, kp(e, n), zc(n, e), Yf(Xs), yl = !!Ys, Xs = Ys = null, e.current = n, jp(n), qd(), Z = o, ne = a, Xe.transition = s;
  } else e.current = n;
  if (Yr && (Yr = !1, bt = e, Pl = l), s = e.pendingLanes, s === 0 && (Ft = null), nf(n.stateNode), Oe(e, me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (bl) throw bl = !1, e = gi, gi = null, e;
  return Pl & 1 && e.tag !== 0 && Tn(), s = e.pendingLanes, s & 1 ? e === yi ? or++ : (or = 0, yi = e) : or = 0, Bt(), null;
}
function Tn() {
  if (bt !== null) {
    var e = _u(Pl), t = Xe.transition, n = ne;
    try {
      if (Xe.transition = null, ne = 16 > e ? 16 : e, bt === null) var r = !1;
      else {
        if (e = bt, bt = null, Pl = 0, Z & 6) throw Error(I(331));
        var l = Z;
        for (Z |= 4, P = e.current; P !== null; ) {
          var s = P, a = s.child;
          if (P.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (P = c; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, h, s);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, P = g;
                  else for (; P !== null; ) {
                    h = P;
                    var m = h.sibling, y = h.return;
                    if (bc(h), h === c) {
                      P = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, P = m;
                      break;
                    }
                    P = y;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var k = x.sibling;
                    x.sibling = null, x = k;
                  } while (x !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, P = a;
          else e: for (; P !== null; ) {
            if (s = P, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                ir(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, P = f;
              break e;
            }
            P = s.return;
          }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          a = P;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, P = p;
          else e: for (a = d; P !== null; ) {
            if (o = P, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Bl(9, o);
              }
            } catch (N) {
              fe(o, o.return, N);
            }
            if (o === a) {
              P = null;
              break e;
            }
            var j = o.sibling;
            if (j !== null) {
              j.return = o.return, P = j;
              break e;
            }
            P = o.return;
          }
        }
        if (Z = l, Bt(), pt && typeof pt.onPostCommitFiberRoot == "function") try {
          pt.onPostCommitFiberRoot(Al, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, Xe.transition = t;
    }
  }
  return !1;
}
function Io(e, t, n) {
  t = zn(n, t), t = _c(e, t, 1), e = At(e, t, 1), t = Le(), e !== null && (Ir(e, 1, t), Oe(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Io(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Io(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = zn(n, e), e = Sc(t, e, 1), t = At(t, e, 1), e = Le(), t !== null && (Ir(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Lp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Se & n) === n && (ye === 4 || ye === 3 && (Se & 130023424) === Se && 500 > me() - ua ? qt(e, 0) : oa |= n), Oe(e, t);
}
function Vc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or = 4194304)) : t = 1);
  var n = Le();
  e = kt(e, t), e !== null && (Ir(e, t, n), Oe(e, n));
}
function Mp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Vc(e, n);
}
function bp(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), Vc(e, n);
}
var Wc;
Wc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Re = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Re = !1, wp(e, t, n);
    Re = !!(e.flags & 131072);
  }
  else Re = !1, oe && t.flags & 1048576 && Gu(t, jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      il(e, t), e = t.pendingProps;
      var l = Mn(t, Ie.current);
      In(t, n), l = na(null, t, r, e, l, n);
      var s = ra();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (s = !0, Sl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zi(t), l.updater = Ql, t.stateNode = l, l._reactInternals = t, si(t, r, e, n), t = oi(null, t, r, !0, s, n)) : (t.tag = 0, oe && s && Qi(t), Te(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (il(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Dp(r), e = rt(r, e), l) {
          case 0:
            t = ai(null, t, r, e, n);
            break e;
          case 1:
            t = vo(null, t, r, e, n);
            break e;
          case 11:
            t = go(null, t, r, e, n);
            break e;
          case 14:
            t = yo(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), ai(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), vo(e, t, r, l, n);
    case 3:
      e: {
        if (Cc(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, qu(e, t), Nl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = zn(Error(I(423)), t), t = wo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = zn(Error(I(424)), t), t = wo(e, t, r, n, l);
          break e;
        } else for (Ue = Rt(t.stateNode.containerInfo.firstChild), Ve = t, oe = !0, st = null, n = Zu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bn(), r === l) {
            t = jt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ec(t), e === null && ni(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Zs(r, l) ? a = null : s !== null && Zs(r, s) && (t.flags |= 32), Ec(e, t), Te(e, t, a, n), t.child;
    case 6:
      return e === null && ni(t), null;
    case 13:
      return Nc(e, t, n);
    case 4:
      return Ji(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : Te(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), go(e, t, r, l, n);
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, a = l.value, le(El, r._currentValue), r._currentValue = a, s !== null) if (ut(s.value, a)) {
          if (s.children === l.children && !Ae.current) {
            t = jt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (s.tag === 1) {
                  u = xt(-1, n & -n), u.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), c.pending = u;
                  }
                }
                s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ri(
                  s.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (a = s.return, a === null) throw Error(I(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), ri(a, n, t), a = s.sibling;
          } else a = s.child;
          if (a !== null) a.return = s;
          else for (a = s; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (s = a.sibling, s !== null) {
              s.return = a.return, a = s;
              break;
            }
            a = a.return;
          }
          s = a;
        }
        Te(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, In(t, n), l = Ze(l), r = r(l), t.flags |= 1, Te(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = rt(r, t.pendingProps), l = rt(r.type, l), yo(e, t, r, l, n);
    case 15:
      return kc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), il(e, t), t.tag = 1, Fe(r) ? (e = !0, Sl(t)) : e = !1, In(t, n), xc(t, r, l), si(t, r, l, n), oi(null, t, r, !0, e, n);
    case 19:
      return Ic(e, t, n);
    case 22:
      return jc(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Qc(e, t) {
  return yu(e, t);
}
function Pp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new Pp(e, t, n, r);
}
function pa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dp(e) {
  if (typeof e == "function") return pa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bi) return 11;
    if (e === Pi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ul(e, t, n, r, l, s) {
  var a = 2;
  if (r = e, typeof e == "function") pa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case pn:
      return en(n.children, l, s, t);
    case Mi:
      a = 8, l |= 8;
      break;
    case Ts:
      return e = Ye(12, n, t, l | 2), e.elementType = Ts, e.lanes = s, e;
    case Ls:
      return e = Ye(13, n, t, l), e.elementType = Ls, e.lanes = s, e;
    case Ms:
      return e = Ye(19, n, t, l), e.elementType = Ms, e.lanes = s, e;
    case eu:
      return Gl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Jo:
          a = 10;
          break e;
        case qo:
          a = 9;
          break e;
        case bi:
          a = 11;
          break e;
        case Pi:
          a = 14;
          break e;
        case Nt:
          a = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(a, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t;
}
function en(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Gl(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = eu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Cs(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function Ns(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function zp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = as(0), this.expirationTimes = as(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = as(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ma(e, t, n, r, l, s, a, o, u) {
  return e = new zp(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ye(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zi(s), e;
}
function Rp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Bc(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Bu(e, n, t);
  }
  return t;
}
function Hc(e, t, n, r, l, s, a, o, u) {
  return e = ma(n, r, !0, e, l, s, a, o, u), e.context = Bc(null), n = e.current, r = Le(), l = Ot(n), s = xt(r, l), s.callback = t ?? null, At(n, s, l), e.current.lanes = l, Ir(e, l, r), Oe(e, r), e;
}
function Kl(e, t, n, r) {
  var l = t.current, s = Le(), a = Ot(l);
  return n = Bc(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, a), e !== null && (ot(e, l, a, s), rl(e, l, a)), a;
}
function zl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function To(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ha(e, t) {
  To(e, t), (e = e.alternate) && To(e, t);
}
function Ap() {
  return null;
}
var Gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ga(e) {
  this._internalRoot = e;
}
Yl.prototype.render = ga.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Kl(e, t, null, null);
};
Yl.prototype.unmount = ga.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sn(function() {
      Kl(null, e, null, null);
    }), t[St] = null;
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ju();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Cu(e);
  }
};
function ya(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Lo() {
}
function Fp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = zl(a);
        s.call(c);
      };
    }
    var a = Hc(t, r, e, 0, null, !1, !1, "", Lo);
    return e._reactRootContainer = a, e[St] = a.current, yr(e.nodeType === 8 ? e.parentNode : e), sn(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = zl(u);
      o.call(c);
    };
  }
  var u = ma(e, 0, !1, null, null, !1, !1, "", Lo);
  return e._reactRootContainer = u, e[St] = u.current, yr(e.nodeType === 8 ? e.parentNode : e), sn(function() {
    Kl(t, u, n, r);
  }), u;
}
function Zl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = zl(a);
        o.call(u);
      };
    }
    Kl(t, a, e, l);
  } else a = Fp(n, t, e, l, r);
  return zl(a);
}
Su = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 && (Ri(t, n | 1), Oe(t, me()), !(Z & 6) && (Rn = me() + 500, Bt()));
      }
      break;
    case 13:
      sn(function() {
        var r = kt(e, 1);
        if (r !== null) {
          var l = Le();
          ot(r, e, 1, l);
        }
      }), ha(e, 1);
  }
};
Ai = function(e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Le();
      ot(t, e, 134217728, n);
    }
    ha(e, 134217728);
  }
};
ku = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = kt(e, t);
    if (n !== null) {
      var r = Le();
      ot(n, e, t, r);
    }
    ha(e, t);
  }
};
ju = function() {
  return ne;
};
Eu = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
Us = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ds(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ul(r);
            if (!l) throw Error(I(90));
            nu(r), Ds(r, l);
          }
        }
      }
      break;
    case "textarea":
      lu(e, n);
      break;
    case "select":
      t = n.value, t != null && jn(e, !!n.multiple, t, !1);
  }
};
du = ca;
fu = sn;
var Op = { usingClientEntryPoint: !1, Events: [Lr, yn, Ul, uu, cu, ca] }, Yn = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $p = { bundleType: Yn.bundleType, version: Yn.version, rendererPackageName: Yn.rendererPackageName, rendererConfig: Yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = hu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yn.findFiberByHostInstance || Ap, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber) try {
    Al = Xr.inject($p), pt = Xr;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ya(t)) throw Error(I(200));
  return Rp(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!ya(e)) throw Error(I(299));
  var n = !1, r = "", l = Gc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ma(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new ga(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = hu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return sn(e);
};
Be.hydrate = function(e, t, n) {
  if (!Xl(t)) throw Error(I(200));
  return Zl(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!ya(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Gc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Hc(t, null, e, 1, n ?? null, l, !1, s, a), e[St] = t.current, yr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Yl(t);
};
Be.render = function(e, t, n) {
  if (!Xl(t)) throw Error(I(200));
  return Zl(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Xl(e)) throw Error(I(40));
  return e._reactRootContainer ? (sn(function() {
    Zl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[St] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = ca;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Xl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Zl(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Kc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc);
    } catch (e) {
      console.error(e);
    }
}
Kc(), Ko.exports = Be;
var ze = Ko.exports, Yc, Mo = ze;
Yc = Mo.createRoot, Mo.hydrateRoot;
var Xc = { exports: {} }, Jl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up = v, Vp = Symbol.for("react.element"), Wp = Symbol.for("react.fragment"), Qp = Object.prototype.hasOwnProperty, Bp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Qp.call(t, r) && !Hp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Vp, type: e, key: s, ref: a, props: l, _owner: Bp.current };
}
Jl.Fragment = Wp;
Jl.jsx = Zc;
Jl.jsxs = Zc;
Xc.exports = Jl;
var i = Xc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gp = {
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
const Kp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, h) => v.createElement(
      "svg",
      {
        ref: h,
        ...Gp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${Kp(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([g, m]) => v.createElement(g, m)),
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
const Yp = G("AlertTriangle", [
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
const Xp = G("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = G("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = G("ArrowUpDown", [
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
const qc = G("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = G("Box", [
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
const qp = G("Calendar", [
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
const em = G("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = G("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = G("Download", [
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
const rm = G("Folder", [
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
const lm = G("Info", [
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
const rd = G("LayoutGrid", [
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
const sm = G("LayoutList", [
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
const im = G("Link2Off", [
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
const am = G("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = G("Maximize", [
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
const um = G("Minimize", [
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
const cm = G("MoreVertical", [
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
const ld = G("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = G("PlusCircle", [
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
const va = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = G("RefreshCw", [
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
const An = G("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = G("Settings", [
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
const mm = G("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = G("Star", [
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
const un = G("Tag", [
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
const Fn = G("Trash2", [
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
const hm = G("Type", [
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
const gm = G("Upload", [
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
const Ne = G("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = K;
const ym = async () => {
  const e = await K.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
};
let Rl = !1;
const vm = (e) => {
  Rl = e, Rl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, wm = (...e) => {
  Rl && console.log("[Meld]", ...e);
}, xm = (...e) => {
  Rl && console.warn("[Meld]", ...e);
}, _m = (...e) => {
  console.error("[Meld]", ...e);
}, O = {
  log: wm,
  warn: xm,
  error: _m,
  init: vm
}, cl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await K.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!s.ok)
    throw new Error(`Failed to fetch images: ${s.statusText}`);
  return await s.json();
}, sd = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, _i = async (e, t = !1) => {
  const n = await K.fetchApi("/meld/bulk-delete", {
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
}, wa = async (e) => {
  const t = await K.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const r = await t.json();
    throw new Error(r.error || "Failed to restore images");
  }
  return (await t.json()).data || { restored_ids: e };
}, id = async (e) => {
  const t = await K.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return (await t.json()).data;
}, Po = async (e, t) => {
  if (!(await K.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Sm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await K.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, Si = async (e) => {
  const t = await K.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, km = async (e, t) => {
  if (!(await K.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, ki = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, jm = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Em = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
}, Cm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await K.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Nm = async () => {
  const e = await K.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Im = async () => {
  const e = await K.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Tm = async (e, t) => {
  if (!(await K.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, Do = async (e) => {
  if (!(await K.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Lm = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  })).ok)
    throw new Error("Failed to update favorite");
}, ad = async () => {
  const e = await K.fetchApi("/meld/settings");
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
      "viewer.shortcut.show_cheat_sheet": !0
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Mm = async (e, t) => {
  if (!(await K.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, bm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
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
    "viewer.shortcut.show_cheat_sheet": !0
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
function Pm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), s = e.images.filter((o) => !l.has(o.id)), a = new Set(e.selectedIds);
      for (const o of t.payload)
        a.delete(o);
      return {
        ...e,
        images: s,
        selectedIds: a,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, s = [...e.images, ...l], a = Array.from(
        new Map(s.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: a,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, s = e.images.map(
        (o) => o.id === l.id ? l : o
      ), a = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: s,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: s,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < s
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: s,
          offset: a,
          hasMore: a + l.length < s
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
      let s = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), s === t.payload && (s = null)) : (l.add(t.payload), s = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: s
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
      ), s = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || s === -1) return e;
      const [a, o] = [
        Math.min(l, s),
        Math.max(l, s)
      ], u = new Set(e.selectedIds);
      for (let c = a; c <= o; c++)
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
      const l = t.payload, s = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((u) => u.id === s);
      return {
        ...e,
        viewerImageId: s,
        viewerMode: a,
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
      const s = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === a.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === a.length - 1 && !s)
        return e;
      const u = (o + 1) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const s = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !s)
        return e;
      const u = (o - 1 + a.length) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
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
      }, s = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (s.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: l,
        pagination: s
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
const od = v.createContext(void 0), Dm = ({
  children: e
}) => {
  const [t, n] = v.useReducer(Pm, bm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = v.useCallback(
    async (y, w, x) => {
      const k = t.settings["gallery.max_load_count"], f = 200;
      let d = y;
      for (; d < Math.min(w, k) && x === l.current; )
        try {
          const p = Math.min(f, k - d);
          O.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const j = await cl(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (x !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), d += j.images.length, j.images.length === 0 || d >= j.total))
            break;
          await new Promise((N) => setTimeout(N, 300));
        } catch (p) {
          O.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), w = ++l.current;
    try {
      const x = t.searchQuery.trim() !== "", k = t.settings["gallery.initial_load_count"];
      O.log("refreshImages: starting initial fetch", {
        isSearch: x,
        fetchLimit: k,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await cl(
        0,
        k,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - y;
      O.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > k && s(k, f.total, w);
    } catch (x) {
      O.error("refreshImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    s
  ]), o = v.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const w = r.current, x = t.searchQuery.trim() !== "", k = t.pagination.limit;
      O.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: k,
        isSearch: x
      });
      const f = await cl(
        w,
        k,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - y;
      O.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (w) {
      O.error("loadMoreImages: fetch failed", w), n({
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
  ]), u = v.useCallback(async () => {
    try {
      const y = await Im();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      O.error("Failed to load favorites", y);
    }
  }, []), c = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), x = t.images.filter(
      (k) => t.selectedIds.has(k.id)
    ).some(
      (k) => k.parent_id || k.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: x,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), h = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const x = (await wa(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: x }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = v.useCallback(
    async (y, w) => {
      try {
        await Mm(y, w), n({ type: "SET_SETTINGS", payload: { [y]: w } });
      } catch (x) {
        n({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    []
  ), m = v.useCallback(
    async (y) => {
      const w = t.images.find((x) => x.id === y);
      if (w && !w.is_minimal)
        return w;
      try {
        O.log("fetchFullImageDetails: fetching full data", { id: y });
        const x = await sd(y);
        return n({ type: "UPDATE_IMAGE", payload: x }), x;
      } catch (x) {
        throw O.error("Failed to fetch image details", x), x;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const w = await ad();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        O.error("Failed to load settings", w);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const y = () => {
      a();
    }, w = (k) => {
      const f = k.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, x = (k) => {
      const f = k.detail;
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
      }), a();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", x), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", x);
    };
  }, [a, t.scanStatus.progress.total]), v.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    od.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: h,
        updateSetting: g,
        fetchFullImageDetails: m
      },
      children: e
    }
  );
}, Pe = () => {
  const e = v.useContext(od);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, We = (e) => {
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
}, xa = async () => {
  const e = await K.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, zm = async (e) => {
  const t = await K.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Rm = async (e) => {
  if (!(await K.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Am = async (e, t) => {
  const n = await K.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Fm = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await K.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Om = async (e, t, n = !1, r) => {
  const l = await K.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, $m = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await K.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Um = async (e, t, n) => {
  const r = await K.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Vm = async (e) => {
  const t = await K.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Wm = async () => {
  if (!(await K.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, ud = () => {
  const { dispatch: e } = Pe(), [t, n] = v.useState(() => {
    const S = localStorage.getItem("meld-import-config"), b = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (S)
      try {
        const W = JSON.parse(S);
        return { ...b, ...W, tags: [] };
      } catch {
        return b;
      }
    return b;
  });
  v.useEffect(() => {
    const { tags: S, ...b } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(b));
  }, [t]);
  const [r, l] = v.useState([]), [s, a] = v.useState([]), [o, u] = v.useState(0), [c, h] = v.useState(!1), [g, m] = v.useState([]), [y, w] = v.useState(""), [x, k] = v.useState(!1), [f, d] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const b = await ym();
        n((W) => W.custom_path ? W : { ...W, custom_path: b });
      } catch (b) {
        O.error("Failed to fetch home directory:", b);
      }
    })();
  }, []), v.useEffect(() => {
    const S = new AbortController();
    return (async () => {
      const W = t.type === "custom" ? t.custom_path : t.subfolder;
      if (O.log(
        `loadFolders started. Path: "${W}", Type: "${t.type}"`
      ), t.type === "custom" && !W) {
        O.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      h(!0);
      const Y = W, F = t.type;
      try {
        O.log("Step 1: Fast load starting...");
        const Q = await Om(
          t.type,
          W,
          !0,
          S.signal
        );
        if (S.signal.aborted) {
          O.log("Step 1: Aborted.");
          return;
        }
        O.log(
          `Step 1 complete. Found ${Q.folders.length} folders, ${Q.images.length} images.`
        ), l(Q.folders), a(Q.images), u(null);
        const A = Q.folders.map((C) => C.name);
        A.length > 0 && (O.log(
          `Step 2: Metadata fetch starting for ${A.length} folders...`
        ), $m(
          F,
          Y,
          A,
          S.signal
        ).then((C) => {
          if (S.signal.aborted) {
            O.log("Step 2: Aborted.");
            return;
          }
          O.log("Step 2: Metadata fetch complete."), l(
            (z) => z.map(($) => {
              const X = C[$.name];
              return X ? { ...$, count: X.count, preview: X.preview } : $;
            })
          );
        }).catch((C) => {
          C.name !== "AbortError" && O.error("Step 2: Metadata fetch failed:", C);
        })), O.log("Step 3: Path image count starting..."), Um(F, Y, S.signal).then((C) => {
          if (S.signal.aborted) {
            O.log("Step 3: Aborted.");
            return;
          }
          O.log(`Step 3: Path image count complete: ${C}`), u(C);
        }).catch((C) => {
          C.name !== "AbortError" && O.error("Step 3: Path image count failed:", C);
        });
      } catch (Q) {
        if (Q.name === "AbortError") {
          O.log("Request aborted.");
          return;
        }
        O.error("Failed to load folders:", Q), l([]), a([]), u(0);
      } finally {
        S.signal.aborted || h(!1);
      }
    })(), () => {
      S.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    k(!0);
    try {
      const S = await xa();
      m(S);
    } catch (S) {
      O.error("Failed to fetch tags:", S);
    } finally {
      k(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const S = (b) => {
      b.key === "Escape" && (b.preventDefault(), b.stopImmediatePropagation(), f ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, { capture: !0 });
  }, [f, e]);
  const j = v.useMemo(() => g.filter(
    (S) => S.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(S.name)
  ), [g, y, t.tags]), N = (S) => {
    const b = S.trim();
    b && !t.tags.includes(b) && (n({ ...t, tags: [...t.tags, b] }), w(""));
  }, L = (S) => {
    n({ ...t, tags: t.tags.filter((b) => b !== S) });
  }, _ = (S) => {
    S.key === "Enter" && y.trim() && (S.preventDefault(), N(y.trim()));
  }, E = async () => {
    try {
      await Vm(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (S) {
      O.error("Failed to start scan:", S), alert(`Failed to start scan: ${S}`);
    }
  }, M = (S) => {
    if (t.type === "custom") {
      const b = t.custom_path.includes("\\") ? "\\" : "/", W = t.custom_path.endsWith(b) ? `${t.custom_path}${S}` : `${t.custom_path}${b}${S}`;
      n({ ...t, custom_path: W });
    } else {
      const b = t.subfolder ? `${t.subfolder}/${S}` : S;
      n({ ...t, subfolder: b });
    }
  }, D = () => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.split(S);
      if (b.length > 1) {
        b.pop();
        let W = b.join(S);
        W === "" && S === "/" && (W = "/"), n({ ...t, custom_path: W });
      }
    } else {
      const S = t.subfolder.split("/");
      S.pop(), n({ ...t, subfolder: S.join("/") });
    }
  };
  return ze.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (S) => S.stopPropagation(),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ i.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ i.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ i.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (S) => n({
                            ...t,
                            type: S.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ i.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ i.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ i.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ i.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ i.jsxs("label", { children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (S) => n({ ...t, recursive: S.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "link-strategy", children: "Parent Linking" }),
                      /* @__PURE__ */ i.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (S) => n({
                            ...t,
                            link_strategy: S.target.value,
                            auto_link_parent: S.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ i.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ i.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ i.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((S) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        S,
                        /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => L(S),
                            children: /* @__PURE__ */ i.jsx(Ne, { size: 12 })
                          }
                        )
                      ] }, S)) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ i.jsx(An, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: y,
                            onChange: (S) => w(S.target.value),
                            onKeyDown: _
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(y),
                            children: /* @__PURE__ */ i.jsx(va, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? y && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : j.map((S) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(S.name),
                          children: S.name
                        },
                        S.id
                      )) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: E,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ i.jsx(dm, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ i.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: D,
                          children: [
                            /* @__PURE__ */ i.jsx(td, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (S) => n({ ...t, custom_path: S.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ i.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ i.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && s.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      r.map((S) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => M(S.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: S.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: We(S.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(rm, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: S.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${S.count === null ? "meld-folder-count--loading" : ""}`,
                                children: S.count !== null ? `${S.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(nd, { size: 14 })
                          ]
                        },
                        S.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((S) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(S),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: We(S),
                              alt: S.filename,
                              title: S.filename
                            }
                          )
                        },
                        S.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (S) => {
                S.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ i.jsx(Ne, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: We(f),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
}, Qm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Pe(), [r, l] = v.useState("General"), [s, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [c, h] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, m] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, w] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, k] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, d] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, j] = v.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [N, L] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [_, E] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [M, D] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    S,
    b
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    W,
    Y
  ] = v.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [F, Q] = v.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: s,
    setLocalSettings: a,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const U = Object.keys(s).filter(
        (q) => s[q] !== e.settings[q] && !o[q]
      );
      if (U.length > 0)
        for (const q of U)
          await n(q, s[q]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (U, q) => {
      a((re) => ({
        ...re,
        [U]: !q
      }));
    },
    handleNumberChange: (U, q, re, qe) => {
      U === "gallery.initial_load_count" ? h(q) : U === "gallery.max_load_count" ? m(q) : U === "gallery.lineage_max_depth" ? w(q) : U === "viewer.thumbnail_window_size" ? k(q) : U === "gallery.trash_retention_days" ? d(q) : U === "gallery.auto_link_phash_threshold" ? j(q) : U === "gallery.suggest_phash_threshold" ? L(q) : U === "viewer.details.max_positive_prompt_lines" ? E(q) : U === "viewer.details.max_negative_prompt_lines" ? D(q) : U === "fullscreen.details.max_positive_prompt_lines" ? b(q) : U === "fullscreen.details.max_negative_prompt_lines" ? Y(q) : U === "sidebar.thumbnail_size" && Q(q);
      const br = Number.parseInt(q, 10);
      if (!Number.isNaN(br)) {
        let Ht = br;
        re !== void 0 && Ht < re && (Ht = re), qe !== void 0 && Ht > qe && (Ht = qe), a((V) => ({
          ...V,
          [U]: Ht
        }));
      }
    },
    handleNumberBlur: (U) => {
      U.key === "gallery.initial_load_count" ? h(
        s["gallery.initial_load_count"].toString()
      ) : U.key === "gallery.max_load_count" ? m(s["gallery.max_load_count"].toString()) : U.key === "gallery.lineage_max_depth" ? w(
        s["gallery.lineage_max_depth"].toString()
      ) : U.key === "viewer.thumbnail_window_size" ? k(
        s["viewer.thumbnail_window_size"].toString()
      ) : U.key === "gallery.trash_retention_days" ? d(
        s["gallery.trash_retention_days"].toString()
      ) : U.key === "gallery.auto_link_phash_threshold" ? j(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : U.key === "gallery.suggest_phash_threshold" ? L(
        s["gallery.suggest_phash_threshold"].toString()
      ) : U.key === "viewer.details.max_positive_prompt_lines" ? E(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : U.key === "viewer.details.max_negative_prompt_lines" ? D(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : U.key === "fullscreen.details.max_positive_prompt_lines" ? b(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : U.key === "fullscreen.details.max_negative_prompt_lines" ? Y(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : U.key === "sidebar.thumbnail_size" && Q(s["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      a((U) => ({
        ...U,
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
    validateShortcut: (U) => U.trim() ? U.trim().split(/\s+/).every((re) => !!(re === "next" || re === "prev" || re === "delete" || re.startsWith("tag:") && re.length > 4 || re.startsWith("-tag:") && re.length > 5 || re.startsWith("tag-toggle:") && re.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: g,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: N,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: M,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: W,
    thumbnailSizeInput: F
  };
}, R = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__control", children: n })
] }), zo = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: s,
  maxNegativePromptLinesInput: a,
  showDetailsOnly: o = !1
}) => {
  const u = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.delete_mode": h.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ i.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ i.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.small_image_mode": h.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }), c = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.details.show_filename": h.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: s,
            min: 1,
            max: 100,
            onChange: (h) => r(
              "fullscreen.details.max_positive_prompt_lines",
              h.target.value,
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
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (h) => r(
              "fullscreen.details.max_negative_prompt_lines",
              h.target.value,
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
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] });
  return /* @__PURE__ */ i.jsx("div", { className: "meld-settings-list", children: o ? c() : u() });
}, Bm = ({
  localSettings: e,
  handleToggle: t,
  handleNumberChange: n,
  handleNumberBlur: r,
  setLocalSettings: l,
  handleViewTrash: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o,
  lineageMaxDepthInput: u,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: h,
  suggestPhashThresholdInput: g
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Gallery View Mode",
        description: "Choose between standard view with details or grid only view.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.view_mode"],
            onChange: (m) => l((y) => ({
              ...y,
              "gallery.view_mode": m.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "grid_details", children: "Details View" }),
              /* @__PURE__ */ i.jsx("option", { value: "grid_only", children: "Grid Only View" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 10,
            max: 1e3,
            onChange: (m) => n(
              "gallery.initial_load_count",
              m.target.value,
              10,
              1e3
            ),
            onBlur: () => r({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e6,
            onChange: (m) => n(
              "gallery.max_load_count",
              m.target.value,
              10,
              1e6
            ),
            onBlur: () => r({ key: "gallery.max_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Hide Source Images",
        description: "Hide images that have been used as a basis for other images (sources).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.hide_parent_images"],
              onChange: () => t(
                "gallery.hide_parent_images",
                e["gallery.hide_parent_images"]
              )
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((y) => ({
              ...y,
              "gallery.matching_strategy": m.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ i.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ i.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 1,
            max: 10,
            onChange: (m) => n(
              "gallery.lineage_max_depth",
              m.target.value,
              1,
              10
            ),
            onBlur: () => r({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (m) => n(
              "gallery.trash_retention_days",
              m.target.value,
              0,
              365
            ),
            onBlur: () => r({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: h,
            min: 0,
            max: 100,
            onChange: (m) => n(
              "gallery.auto_link_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => r({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Parent Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: g,
            min: 0,
            max: 100,
            onChange: (m) => n(
              "gallery.suggest_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => r({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Trash Management",
      description: "View and manage items currently in the trash bin.",
      children: /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "meld-button meld-button--secondary",
          onClick: s,
          children: "View Trash"
        }
      )
    }
  ) })
] }), Hm = ({
  localSettings: e,
  handleToggle: t
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Quick Suggestions",
      description: "Show suggested keywords when the search field is empty.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.quick_suggestions"],
            onChange: () => t(
              "search.quick_suggestions",
              e["search.quick_suggestions"]
            )
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Input Suggest",
      description: "Show suggestions when typing search prefixes (e.g. pos:).",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.input_suggest"],
            onChange: () => t(
              "search.input_suggest",
              e["search.input_suggest"]
            )
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  )
] }), Gm = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: s,
  handleResetShortcuts: a
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
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ i.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ i.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ i.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ i.jsxs("ul", { children: [
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ i.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
      o.map((u, c) => /* @__PURE__ */ i.jsx(
        R,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (h) => {
                t((g) => ({
                  ...g,
                  [u]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(
                  e[u] || ""
                );
                r((g) => ({
                  ...g,
                  [u]: !h
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ i.jsx(
        R,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!e["viewer.shortcut.show_cheat_sheet"],
                onChange: () => s(
                  "viewer.shortcut.show_cheat_sheet",
                  !!e["viewer.shortcut.show_cheat_sheet"]
                )
              }
            ),
            /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: a,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, Km = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: s
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Thumbnail Size",
      description: "Size of the image thumbnails in the sidebar (50-500px).",
      children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          className: "meld-number-input",
          value: s,
          min: 50,
          max: 500,
          onChange: (a) => r(
            "sidebar.thumbnail_size",
            a.target.value,
            50,
            500
          ),
          onBlur: () => l({ key: "sidebar.thumbnail_size" })
        }
      )
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path on the card.",
      children: /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "meld-select",
          value: e["sidebar.show_filename"],
          onChange: (a) => t((o) => ({
            ...o,
            "sidebar.show_filename": a.target.value
          })),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
            /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
            /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Created At",
      description: "Display the image creation date and time on the card.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Source Info",
      description: "Display source image information and lineage link on image cards.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Model",
      description: "Display the model name on the card.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Positive",
      description: "Display the positive prompt on the card.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(
    R,
    {
      label: "Show Negative",
      description: "Display the negative prompt on the card.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  ),
  /* @__PURE__ */ i.jsx(R, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
    /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
  ] }) })
] }), Ro = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o,
  showDetailsOnly: u = !1
}) => {
  const c = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.small_image_mode": g.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.delete_mode": g.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ i.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ i.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: s,
            min: 1,
            max: 1e4,
            onChange: (g) => r(
              "viewer.thumbnail_window_size",
              g.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    )
  ] }), h = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.details.show_filename": g.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (g) => r(
              "viewer.details.max_positive_prompt_lines",
              g.target.value,
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
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (g) => r(
              "viewer.details.max_negative_prompt_lines",
              g.target.value,
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
    /* @__PURE__ */ i.jsx(
      R,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] });
  return /* @__PURE__ */ i.jsx("div", { className: "meld-settings-list", children: u ? h() : c() });
}, cd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: s,
    handleClose: a,
    handleToggle: o,
    handleNumberChange: u,
    handleNumberBlur: c,
    handleResetShortcuts: h,
    handleViewTrash: g,
    validateShortcut: m,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: w,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: d,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: N,
    fullscreenMaxPositivePromptLinesInput: L,
    fullscreenMaxNegativePromptLinesInput: _,
    thumbnailSizeInput: E
  } = Qm(), M = [
    { id: "General", label: "General" },
    { id: "Sidebar", label: "Sidebar" },
    { id: "Search", label: "Search" },
    { id: "View", label: "View" },
    { id: "View Details", label: "View Details" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Full Screen Detail", label: "Full Screen Detail" },
    { id: "Shortcuts", label: "Shortcuts" }
  ], D = () => {
    switch (e) {
      case "General":
        return /* @__PURE__ */ i.jsx(
          Bm,
          {
            localSettings: n,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            setLocalSettings: r,
            handleViewTrash: g,
            initialLoadCountInput: y,
            maxLoadCountInput: w,
            lineageMaxDepthInput: x,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: d,
            suggestPhashThresholdInput: p
          }
        );
      case "Sidebar":
        return /* @__PURE__ */ i.jsx(
          Km,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: E
          }
        );
      case "Search":
        return /* @__PURE__ */ i.jsx(
          Hm,
          {
            localSettings: n,
            handleToggle: o
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          Ro,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: k,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: N
          }
        );
      case "View Details":
        return /* @__PURE__ */ i.jsx(
          Ro,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: k,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: N,
            showDetailsOnly: !0
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          zo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: L,
            maxNegativePromptLinesInput: _
          }
        );
      case "Full Screen Detail":
        return /* @__PURE__ */ i.jsx(
          zo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: L,
            maxNegativePromptLinesInput: _,
            showDetailsOnly: !0
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Gm,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: s,
            validateShortcut: m,
            handleToggle: o,
            handleResetShortcuts: h
          }
        );
      default:
        return null;
    }
  };
  return ze.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: a, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (S) => S.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: a,
                children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: M.map((S) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === S.id ? "active" : ""}`,
                onClick: () => t(S.id),
                children: S.label
              },
              S.id
            )) }) }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: D() })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, it = "none", dd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Pe(), [s, a] = v.useState([]), [o, u] = v.useState(t), [c, h] = v.useState(""), [g, m] = v.useState(!0), [y, w] = v.useState(!1), x = v.useRef(null), k = e.length > 1, f = v.useCallback(async () => {
    m(!0);
    try {
      const _ = await xa();
      a(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      m(!1);
    }
  }, []);
  v.useEffect(() => {
    f();
  }, [f]), v.useEffect(() => {
    x.current && x.current.focus();
    const _ = (E) => {
      E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => window.removeEventListener("keydown", _, {
      capture: !0
    });
  }, [n]);
  const d = v.useMemo(() => s.filter(
    (_) => _.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(_.name)
  ), [s, c, o]), p = (_) => {
    const E = _.trim();
    if (E.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    E && !o.includes(E) && (u([...o, E]), h(""));
  }, j = (_) => {
    u(o.filter((E) => E !== _));
  }, N = async () => {
    w(!0);
    try {
      if (k) {
        const _ = o.filter((M) => !t.includes(M)), E = t.filter(
          (M) => !o.includes(M)
        );
        await ki(e, _, E);
      } else
        await km(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (_) {
      console.error("Failed to update tags:", _), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, L = (_) => {
    _.key === "Enter" && c.trim() ? (_.preventDefault(), _.stopPropagation(), p(c.trim())) : _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return ze.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (_) => {
          _.stopPropagation(), n();
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(un, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: k ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Ne, { size: 20 }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            k && /* @__PURE__ */ i.jsx(
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
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: k ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((_) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                _,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => j(_),
                    children: /* @__PURE__ */ i.jsx(Ne, { size: 12 })
                  }
                )
              ] }, _)) })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ i.jsx(An, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: x,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (_) => h(_.target.value),
                    onKeyDown: L
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(c),
                    children: [
                      /* @__PURE__ */ i.jsx(va, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? c ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((_) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(_.name),
                  children: _.name
                },
                _.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: N,
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
}, fd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Pe(), a = v.useRef(!0);
  v.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = v.useRef(l.viewerImageId);
  v.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = v.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), c = v.useCallback(
    (m) => {
      if (!a.current) return;
      const y = o.current;
      if (y === null || !m.has(y))
        return;
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (f) => f.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && f.has_children)
      ), x = w.findIndex(
        (f) => f.id === y
      );
      if (x === -1) return;
      let k = !1;
      for (let f = x + 1; f < w.length; f++)
        if (!m.has(w[f].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: w[f].id, mode: l.viewerMode }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let f = x - 1; f >= 0; f--)
          if (!m.has(w[f].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: w[f].id, mode: l.viewerMode }
            }), k = !0;
            break;
          }
      }
      k || s({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      s
    ]
  );
  v.useEffect(() => {
    const m = (y) => {
      y.key === "Escape" && u();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [u]);
  const h = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (x) => x.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && x.has_children)
      ), y = new Set(e), w = m.filter(
        (x) => y.has(x.id)
      );
      if (c(y), await _i(e, n), !a.current) return;
      !n && r && r(w), s({ type: "REMOVE_IMAGES", payload: e }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (m) {
      s({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (x) => x.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && x.has_children)
      ), y = new Set(e);
      for (const x of e) {
        const k = await Si(x);
        if (!a.current) return;
        for (const f of k)
          y.add(f.id);
      }
      const w = m.filter(
        (x) => y.has(x.id)
      );
      if (c(y), await _i(Array.from(y), n), !a.current) return;
      !n && r && r(w), s({
        type: "REMOVE_IMAGES",
        payload: Array.from(y)
      }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (m) {
      s({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ze.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ i.jsx(Fn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs(
            "div",
            {
              style: {
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              },
              children: [
                /* @__PURE__ */ i.jsxs("p", { children: [
                  "Are you sure you want to",
                  " ",
                  n ? "permanently delete" : "move to trash",
                  " ",
                  /* @__PURE__ */ i.jsx("strong", { children: e.length }),
                  " selected items?"
                ] }),
                /* @__PURE__ */ i.jsxs(
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
                      /* @__PURE__ */ i.jsx(
                        Yp,
                        {
                          size: 20,
                          style: {
                            color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ i.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                        /* @__PURE__ */ i.jsx("strong", { children: "WARNING:" }),
                        " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                        /* @__PURE__ */ i.jsx("strong", { children: "INFO:" }),
                        " Selected items will be moved to the trash bin. You can restore them later from the settings."
                      ] }) })
                    ]
                  }
                ),
                t && /* @__PURE__ */ i.jsxs(
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
                      /* @__PURE__ */ i.jsx("strong", { children: "Source" }),
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: u,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: h,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ i.jsx(
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
}, pd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Pe(), [l, s] = v.useState([]), [a, o] = v.useState(!0), [u, c] = v.useState(!1), h = t.images.find((d) => d.id === e), g = v.useCallback(async () => {
    o(!0);
    try {
      const d = t.settings["gallery.suggest_phash_threshold"], p = await Sm(e, d);
      s(p);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    g();
  }, [g]);
  const m = async (d) => {
    if (d == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!h || d === h.parent_id) && !(h.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Po(e, d), await sd(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (p) {
        console.error("Failed to link parent:", p);
      }
  }, y = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Po(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (d) {
        console.error("Failed to remove source:", d), alert("Failed to remove source image.");
      }
  }, w = async (d) => {
    o(!0);
    try {
      const p = await Fm(d), { id: j } = await id({
        filename: p.name,
        subfolder: p.subfolder || "",
        type: p.type || "input"
      });
      if (j === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await m(j);
    } catch (p) {
      console.error("Failed to upload/register image:", p);
    } finally {
      o(!1);
    }
  }, x = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const p = d.dataTransfer.files[0];
    p != null && p.type.startsWith("image/") && w(p);
  };
  if (!h) return null;
  const k = l.filter((d) => d.is_source_match), f = l.filter((d) => !d.is_source_match);
  return ze.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { children: [
              "Select Source for #",
              h.id
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            h.parent_id && /* @__PURE__ */ i.jsxs(
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
                  /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ i.jsx(am, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ i.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ i.jsx(
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
                              /* @__PURE__ */ i.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    h.parent_filename && /* @__PURE__ */ i.jsx(
                                      "img",
                                      {
                                        src: We({
                                          filename: h.parent_filename,
                                          subfolder: h.parent_subfolder || "",
                                          type: h.parent_type || "output"
                                        }),
                                        alt: "Current Parent",
                                        style: {
                                          width: "40px",
                                          height: "40px",
                                          objectFit: "cover",
                                          borderRadius: "4px",
                                          border: "1px solid var(--meld-border-color)"
                                        }
                                      }
                                    ),
                                    /* @__PURE__ */ i.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ i.jsx(
                                            "span",
                                            {
                                              style: {
                                                fontWeight: "bold",
                                                fontSize: "0.95em",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                              },
                                              children: h.parent_filename || "Unknown Image"
                                            }
                                          ),
                                          /* @__PURE__ */ i.jsxs(
                                            "span",
                                            {
                                              style: {
                                                color: "var(--meld-text-secondary)",
                                                fontSize: "0.85em"
                                              },
                                              children: [
                                                "#",
                                                h.parent_id
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
                  /* @__PURE__ */ i.jsx(
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
                      onClick: y,
                      title: "Remove Source",
                      children: /* @__PURE__ */ i.jsx(im, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!0);
                },
                onDragOver: (d) => {
                  d.preventDefault(), d.stopPropagation(), d.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!1);
                },
                onDrop: x,
                children: [
                  /* @__PURE__ */ i.jsx(gm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              k.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: k.map((d) => {
                  const p = d.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(d.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: We(d), alt: d.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                          p && /* @__PURE__ */ i.jsx(
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
                    d.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                f.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: f.map((d) => {
                  const p = d.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(d.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: We(d), alt: d.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - d.distance) / 64 * 100),
                                  "%"
                                ] }),
                                p && /* @__PURE__ */ i.jsx(
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
                    d.id
                  );
                }) }) : /* @__PURE__ */ i.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ym = () => {
  const { state: e, dispatch: t } = Pe();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "parent_selection" && ze.createPortal(
      /* @__PURE__ */ i.jsx(pd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ze.createPortal(/* @__PURE__ */ i.jsx(ud, {}), document.body),
    e.activeModal.type === "settings" && ze.createPortal(/* @__PURE__ */ i.jsx(cd, {}), document.body),
    e.activeModal.type === "tag_edit" && ze.createPortal(
      /* @__PURE__ */ i.jsx(
        dd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ze.createPortal(
      /* @__PURE__ */ i.jsx(
        fd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, md = (e, t) => {
  const n = v.useCallback(async (o) => {
    try {
      const u = await jm(o.id);
      if (!u.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        u.workflow
      ), O.log("Workflow restored successfully from Meld");
    } catch (u) {
      O.error("Error restoring workflow:", u), alert("Failed to restore workflow.");
    }
  }, []), r = v.useCallback(async (o) => {
    try {
      const u = await Em(o.id), c = "MeldUnifiedLoader", h = window.app, m = window.LiteGraph.createNode(c);
      if (!m) {
        console.error(`Node type ${c} not found.`), alert(
          `Node type ${c} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const y = {
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
      if (m.widgets) {
        for (const [f, d] of Object.entries(y)) {
          const p = u[f];
          if (p != null) {
            const j = m.widgets.find(
              (N) => N.name === d
            );
            j && (j.value = p);
          }
        }
        const k = m.widgets.find(
          (f) => f.name === "control_after_generate"
        );
        k && (k.value = "fixed");
      }
      const w = h.canvas.ds.offset, x = h.canvas.ds.scale;
      m.pos = [(-w[0] + 400) / x, (-w[1] + 300) / x], h.graph.add(m), h.canvas.selectNode(m), h.canvas.centerOnNode(m);
    } catch (u) {
      console.error("Error adding Unified Loader:", u), alert("Failed to load settings.");
    }
  }, []), l = v.useCallback(
    (o) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [o.id],
          tags: o.tags || []
        }
      });
    },
    [t]
  ), s = v.useCallback(
    (o) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: o.id }
      });
    },
    [t]
  ), a = v.useCallback(
    async (o, u) => {
      try {
        const c = o.id, g = (await wa([c])).restored_ids || [c];
        t({ type: "REMOVE_IMAGES", payload: g }), u == null || u();
      } catch (c) {
        t({
          type: "SET_ERROR",
          payload: c instanceof Error ? c.message : String(c)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: s,
    handleRestore: a
  };
}, hd = (e, t) => {
  const n = v.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: We(c)
        }));
      const s = r.parent_id;
      if (!s || !r.parent_filename) return [];
      const a = e.find((c) => c.id === s);
      let o = null;
      if (a ? o = We(a) : o = We({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const u = {
        id: s || null,
        imgSrc: o
      };
      if (a && l > 1) {
        const c = n(a);
        return [u, ...c].slice(0, l);
      }
      return [u];
    },
    [t, e]
  );
  return { getParentChain: n };
}, gd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Pe(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c
  } = md(t, n), { getParentChain: h } = hd(t.images, t.settings), [g, m] = v.useState(null), [y, w] = v.useState(!1), [x, k] = v.useState(null), [f, d] = v.useState(!1), p = v.useRef(null), j = async (A, C, z = !1) => {
    try {
      await navigator.clipboard.writeText(A), z ? (d(!0), setTimeout(() => d(!1), 2e3)) : (k(C), setTimeout(() => k(null), 2e3));
    } catch ($) {
      console.error("Failed to copy text: ", $);
    }
  };
  v.useEffect(() => {
    const A = (z) => {
      z.key === "Escape" && (g ? m(null) : w(!1));
    }, C = (z) => {
      p.current && !p.current.contains(z.target) && w(!1);
    };
    return window.addEventListener("keydown", A), y && document.addEventListener("mousedown", C), () => {
      window.removeEventListener("keydown", A), document.removeEventListener("mousedown", C);
    };
  }, [y, g]);
  const N = h(e), _ = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, E = We(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: g,
    setPopupContent: m,
    isMenuOpen: y,
    setIsMenuOpen: w,
    copiedLabel: x,
    popupCopied: f,
    menuRef: p,
    parentChain: N,
    displayFilename: _,
    imgSrc: E,
    handleCopy: j,
    handleClick: (A) => {
      A.shiftKey ? (A.preventDefault(), A.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : A.ctrlKey || A.metaKey || t.selectedIds.size > 0 ? (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (A) => {
      A.shiftKey ? (A.preventDefault(), A.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : A.ctrlKey || A.metaKey || t.selectedIds.size > 0 ? (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (A) => {
      (A.shiftKey || A.ctrlKey || A.metaKey || t.selectedIds.size > 0 || !A.target.closest("img.meld-image-card__thumbnail")) && A.preventDefault();
    },
    handleKeyDown: (A) => {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await a(e);
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
    fetchFullImageDetails: r
  };
}, Xm = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onEditSource: s,
  onEditTags: a
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (o) => {
        o.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ i.jsx(cm, { size: 16 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (o) => {
        o.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ i.jsx(bo, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), r(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(bo, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), l(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(Xp, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), s(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(fm, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), a(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(un, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), Zm = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => ze.createPortal(
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (s) => {
        s.stopPropagation(), n();
      },
      children: /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (s) => s.stopPropagation(),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ i.jsx("span", { children: e }),
              /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ i.jsx(ed, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ i.jsx(
                  tm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Ne,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), yd = dl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: s,
      isMenuOpen: a,
      setIsMenuOpen: o,
      copiedLabel: u,
      popupCopied: c,
      menuRef: h,
      parentChain: g,
      displayFilename: m,
      imgSrc: y,
      handleCopy: w,
      handleClick: x,
      handleContainerClick: k,
      handleMouseDown: f,
      handleKeyDown: d,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: j,
      handleEditSource: N,
      handleEditTags: L,
      fetchFullImageDetails: _
    } = gd(e);
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: k,
        onMouseDown: f,
        onKeyDown: d,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: y,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: f,
              onClick: (E) => {
                E.stopPropagation(), x(E);
              }
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && m,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
                (E, M) => E.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: E.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (D) => {
                      D.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: E.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: M === 0 ? "Source" : M === 1 ? "Grand-Source" : `Ancestor (S${M + 1})`,
                    alt: "source thumb"
                  },
                  E.id || M
                )
              ) })
            ] }),
            t.settings["sidebar.show_created_at"] && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
            ] }),
            t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
            ] }),
            t.settings["sidebar.show_model_name"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (E) => {
                  E.stopPropagation();
                  const M = await _(e.id);
                  s({
                    title: "Model",
                    text: M.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const M = await _(e.id);
                        w(M.model_name || "-", "Model");
                      },
                      children: u === "Model" ? "Copied!" : "Model"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (E) => {
                  E.stopPropagation();
                  const M = await _(e.id);
                  s({
                    title: "Positive Prompt",
                    text: M.positive_prompt || M.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const M = await _(e.id);
                        w(
                          M.positive_prompt || M.positive || "-",
                          "Positive"
                        );
                      },
                      children: u === "Positive" ? "Copied!" : "Positive"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (E) => {
                  E.stopPropagation();
                  const M = await _(e.id);
                  s({
                    title: "Negative Prompt",
                    text: M.negative_prompt || M.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const M = await _(e.id);
                        w(
                          M.negative_prompt || M.negative || "-",
                          "Negative"
                        );
                      },
                      children: u === "Negative" ? "Copied!" : "Negative"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_tags"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (E) => {
                  E.stopPropagation(), L();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E, M) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: E
                    },
                    `${E}-${M}`
                  )) : /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx(
            Xm,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: h,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: p,
              onEditSource: N,
              onEditTags: L
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            Zm,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (E) => w(E, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
yd.displayName = "DetailedImageCard";
const vd = dl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: s,
      handleClick: a
    } = gd(e);
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: s,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
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
              o.stopPropagation(), a(o);
            }
          }
        ) })
      }
    );
  }
);
vd.displayName = "SimpleImageCard";
const Jm = ({ image: e }) => {
  const { state: t } = Pe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(vd, { image: e }) : /* @__PURE__ */ i.jsx(yd, { image: e });
}, qm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [s, a] = v.useState(!1), o = v.useRef(null);
  return v.useEffect(() => {
    const u = new IntersectionObserver(
      ([h]) => {
        h.isIntersecting && a(!0);
      },
      { rootMargin: n }
    ), c = o.current;
    return c && u.observe(c), () => {
      c && u.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: {
        minHeight: `${t}px`,
        overflow: "hidden",
        ...l
      },
      children: s ? e : null
    }
  );
}, eh = () => {
  const { state: e, dispatch: t } = Pe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Wm(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, s = n.progress.phase === "linking", { current: a, total: o } = n.progress, u = o > 0 ? a / o : 0, c = s ? 50 + Math.round(u * 50) : Math.round(u * 50);
  return /* @__PURE__ */ i.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ i.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ i.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : s ? /* @__PURE__ */ i.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ i.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${c}%` }
      }
    ) }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ i.jsx(mm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(em, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ i.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, th = () => {
  const { state: e, refreshFavorites: t } = Pe(), [n, r] = v.useState(!1), [l, s] = v.useState(null), [a, o] = v.useState(null), [u, c] = v.useState(""), [h, g] = v.useState("");
  v.useEffect(() => {
    if (l) {
      const k = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(k);
    }
  }, [l]);
  const m = v.useCallback(
    async (k, f, d) => {
      k.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${d}"?`;
      if (window.confirm(p))
        try {
          await Do(f), await t();
        } catch (j) {
          O.error("Failed to delete favorite", j);
        }
    },
    [t]
  ), y = v.useCallback(
    (k, f) => {
      k.stopPropagation(), o(f), c(f.name), g(f.query);
    },
    []
  ), w = v.useCallback(async () => {
    if (!(!a || !u.trim() || !h.trim()))
      try {
        r(!0), await Lm(
          a.id,
          u,
          h
        ), await t(), o(null), s("Favorite updated.");
      } catch (k) {
        O.error("Failed to update favorite", k), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, h, t]), x = v.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((d) => d.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await Do(f.id), await t(), s("Favorite removed.");
        } catch (d) {
          O.error("Failed to delete favorite:", d);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Tm(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (f) {
      O.error("Failed to save favorite:", f);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: a,
    setEditingFavorite: o,
    editFavoriteName: u,
    setEditFavoriteName: c,
    editFavoriteQuery: h,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: m,
    handleEditFavorite: y,
    handleSaveEditFavorite: w,
    handleSaveFavorite: x,
    setToastMessage: s
  };
}, nh = () => {
  const { state: e, dispatch: t } = Pe(), [n, r] = v.useState(e.searchQuery), [l, s] = v.useState([]), [a, o] = v.useState(!1), [u, c] = v.useState([]), [h, g] = v.useState(-1), m = v.useRef(null), y = v.useRef(e.searchQuery), w = n !== y.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      c([]);
      return;
    }
    !n && !e.searchQuery ? Nm().then((_) => {
      c(_);
    }) : c([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    r(e.searchQuery), y.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var _;
    (_ = m.current) == null || _.focus();
  }, []);
  const x = v.useCallback(
    (_, E = !0) => {
      y.current !== _ && (O.log("SearchBar: triggering search", { query: _ }), t({ type: "SET_SEARCH_QUERY", payload: _ }), E && o(!1), y.current = _);
    },
    [t]
  );
  v.useEffect(() => {
    const _ = setTimeout(async () => {
      if (n === y.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), o(!1);
        return;
      }
      const E = n.split(/\s+/), M = E[E.length - 1];
      if (M) {
        const D = M.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (D) {
          const S = D[1].toLowerCase(), b = D[2], W = await Cm(b, S);
          s(W), o(W.length > 0), g(-1);
        } else
          s([]), o(!1);
      } else
        s([]), o(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [n, e.settings["search.input_suggest"]]);
  const k = v.useCallback(
    (_) => {
      var Q;
      const E = n.split(/\s+/), D = (E.pop() || "").match(/^([-!])/), S = D ? D[1] : "", Y = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_.type) ? _.value : `"${_.value}"`, F = `${[
        ...E,
        `${S}${_.type}:${Y}`
      ].join(" ").trim()} `;
      r(F), s([]), o(!1), (Q = m.current) == null || Q.focus();
    },
    [n]
  ), f = (_) => {
    _.key === "Enter" ? x(n) : _.key === "Tab" ? a && h >= 0 && (k(l[h]), _.preventDefault()) : _.key === "ArrowDown" ? a && (g((E) => Math.min(E + 1, l.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? a && (g((E) => Math.max(E - 1, -1)), _.preventDefault()) : _.key === "Escape" && o(!1);
  }, d = v.useCallback(() => {
    r(""), x("");
  }, [x]), p = v.useCallback(
    (_, E) => {
      const S = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_) ? E : `"${E}"`, b = `${_}:${S}`;
      r(b), x(b);
    },
    [x]
  ), j = v.useCallback(
    (_) => {
      r(_), _ || x("");
    },
    [x]
  ), N = v.useCallback(() => {
    if (n === y.current) return;
    const _ = n.split(/\s+/), E = _[_.length - 1];
    E != null && E.match(
      /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
    ) && o(!0);
  }, [n]), L = v.useCallback(() => {
    setTimeout(() => o(!1), 200);
  }, []);
  return {
    inputValue: n,
    setInputValue: r,
    suggestions: l,
    showSuggestions: a,
    setShowSuggestions: o,
    searchSuggestions: u,
    selectedIndex: h,
    setSelectedIndex: g,
    inputRef: m,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: f,
    applySuggestion: k,
    clearSearch: d,
    applySearchSuggestion: p,
    handleInputChange: j,
    handleInputFocus: N,
    handleInputBlur: L
  };
}, rh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = v.useState(!1), [a, o] = v.useState(!1), [u, c] = v.useState(!1);
  return /* @__PURE__ */ i.jsxs(
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
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ i.jsx(
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
              e.name !== e.query && /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => n(h, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: a ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: a ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
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
                  children: /* @__PURE__ */ i.jsx(ld, { size: 14 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
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
                  children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Ao = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(un, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(Jp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(hm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(qp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(qc, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(Jc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(Zp, { size: 12 });
    default:
      return null;
  }
}, lh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: o,
  applySearchSuggestion: u,
  favorites: c,
  onSelectFavorite: h,
  onEditFavorite: g,
  onDeleteFavorite: m
}) => {
  const y = () => !e || t.length === 0 ? null : /* @__PURE__ */ i.jsx(
    "div",
    {
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
      children: t.map((k, f) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (d) => {
            d.preventDefault(), l(k);
          },
          onMouseEnter: () => r(f),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: f === n ? "var(--comfy-menu-bg, #333)" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
          },
          children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Ao(k.type)
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--comfy-input-text-active, #3b82f6)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  width: "45px"
                },
                children: k.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: k.value === it ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: k.value === it ? "bold" : "normal"
                },
                children: k.value === it ? k.type === "tag" ? `Untagged (${it})` : `No ${k.type} (${it})` : k.value
              }
            )
          ] })
        },
        `${k.type}:${k.value}`
      ))
    }
  ), w = () => s || a || o.length === 0 ? null : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "meld-search-quick-suggestions",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "0 4px"
      },
      children: o.map((k) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u(k.type, k.value),
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
          onMouseEnter: (f) => {
            f.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", f.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", f.currentTarget.style.color = "var(--meld-text-color)";
          },
          onMouseLeave: (f) => {
            f.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", f.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", f.currentTarget.style.color = "var(--meld-text-color)";
          },
          children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  display: "flex",
                  color: "var(--meld-text-secondary)"
                },
                children: Ao(k.type)
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--comfy-input-text-active, #3b82f6)",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "10px"
                },
                children: k.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: k.value
              }
            )
          ]
        },
        `${k.type}:${k.value}`
      ))
    }
  ), x = () => s || c.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
        /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(xi, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: c.map((k) => /* @__PURE__ */ i.jsx(
              rh,
              {
                fav: k,
                onSelect: h,
                onEdit: g,
                onDelete: m
              },
              k.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    y(),
    w(),
    x()
  ] });
}, sh = () => {
  const { state: e } = Pe(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    selectedIndex: a,
    setSelectedIndex: o,
    inputRef: u,
    isQueryChanged: c,
    handleSearch: h,
    handleKeyDown: g,
    applySuggestion: m,
    clearSearch: y,
    applySearchSuggestion: w,
    handleInputChange: x,
    handleInputFocus: k,
    handleInputBlur: f
  } = nh(), {
    isSaving: d,
    toastMessage: p,
    editingFavorite: j,
    setEditingFavorite: N,
    editFavoriteName: L,
    setEditFavoriteName: _,
    editFavoriteQuery: E,
    setEditFavoriteQuery: M,
    handleDeleteFavorite: D,
    handleEditFavorite: S,
    handleSaveEditFavorite: b,
    handleSaveFavorite: W
  } = th(), Y = v.useRef(null);
  return v.useEffect(() => {
    j && Y.current && Y.current.focus();
  }, [j]), /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              p && /* @__PURE__ */ i.jsx(
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
                  children: p
                }
              ),
              /* @__PURE__ */ i.jsxs(
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
                    /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => h(t),
                        style: {
                          background: c ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: c ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: c ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (F) => {
                          F.currentTarget.style.transform = "translateY(-1px)", c ? (F.currentTarget.style.filter = "brightness(1.15)", F.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : F.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (F) => {
                          F.currentTarget.style.transform = "none", c ? (F.currentTarget.style.filter = "none", F.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : F.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (F) => {
                          F.currentTarget.style.transform = "translateY(1px)", F.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (F) => {
                          F.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            An,
                            {
                              size: 16,
                              color: c ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: c ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          c && /* @__PURE__ */ i.jsx(
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
                    /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        ref: u,
                        type: "text",
                        value: t,
                        onChange: (F) => x(F.target.value),
                        onKeyDown: g,
                        onBlur: f,
                        onFocus: k,
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
                    e.searchQuery && /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: W,
                        disabled: d,
                        title: e.favorites.some((F) => F.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ i.jsx(
                          xi,
                          {
                            size: 16,
                            color: e.favorites.some((F) => F.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((F) => F.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ i.jsx(Ne, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                lh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: a,
                  setSelectedIndex: o,
                  applySuggestion: m,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: s,
                  applySearchSuggestion: w,
                  favorites: e.favorites,
                  onSelectFavorite: (F) => {
                    n(F), h(F);
                  },
                  onEditFavorite: S,
                  onDeleteFavorite: D
                }
              )
            ]
          }
        ),
        j && ze.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onClick: () => N(null),
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (F) => F.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ i.jsx(xi, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => N(null),
                          children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsx(
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
                                /* @__PURE__ */ i.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: Y,
                                    type: "text",
                                    value: L,
                                    onChange: (F) => _(F.target.value),
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
                                    onKeyDown: (F) => {
                                      F.key === "Enter" && b(), F.key === "Escape" && N(null);
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsx(
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
                                /* @__PURE__ */ i.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: E,
                                    onChange: (F) => M(F.target.value),
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
                                    onKeyDown: (F) => {
                                      F.key === "Enter" && !F.shiftKey && (F.preventDefault(), b()), F.key === "Escape" && N(null);
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => N(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: b,
                          disabled: d || !L.trim() || !E.trim(),
                          children: d ? "Saving..." : "Save Changes"
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
}, ih = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, s] = v.useState(!0), [a, o] = v.useState(""), [u, c] = v.useState(""), [h, g] = v.useState(!1), [m, y] = v.useState(null), [w, x] = v.useState(""), [k, f] = v.useState(!1), d = v.useRef(null), p = v.useCallback(async () => {
    s(!0);
    try {
      const S = await xa();
      r(S);
    } catch (S) {
      console.error("Failed to fetch tags:", S);
    } finally {
      s(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    m !== null && d.current && (d.current.focus(), d.current.select());
  }, [m]);
  const j = async (S) => {
    S.preventDefault();
    const b = u.trim();
    if (!(!b || h)) {
      if (b.toLowerCase() === it) {
        alert(
          `Tag name '${it}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((W) => W.name.toLowerCase() === b.toLowerCase())) {
        alert(`Tag "${b}" already exists.`);
        return;
      }
      g(!0);
      try {
        await zm(b), c(""), await p();
      } catch (W) {
        console.error("Failed to add tag:", W);
      } finally {
        g(!1);
      }
    }
  }, N = async (S, b) => {
    if (confirm(`Are you sure you want to delete tag "${b}"?`))
      try {
        await Rm(S), await p();
      } catch (W) {
        console.error("Failed to delete tag:", W);
      }
  }, L = (S) => {
    y(S.id), x(S.name);
  }, _ = () => {
    y(null), x("");
  }, E = async (S) => {
    S.preventDefault();
    const b = w.trim();
    if (!b || m === null || k) return;
    if (b.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    const W = n.find((Y) => Y.id === m);
    if (W && W.name === b) {
      _();
      return;
    }
    if (n.some(
      (Y) => Y.id !== m && Y.name.toLowerCase() === b.toLowerCase()
    )) {
      alert(`Tag "${b}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Am(m, b), _(), await p();
    } catch (Y) {
      console.error("Failed to rename tag:", Y), alert(Y instanceof Error ? Y.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, M = (S) => {
    t(`tag:${S}`);
  }, D = v.useMemo(() => n.filter(
    (S) => S.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ i.jsx(un, { size: 16 }),
        /* @__PURE__ */ i.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ i.jsx(Ne, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ i.jsxs("form", { className: "meld-tag-add-form", onSubmit: j, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (S) => c(S.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || h,
            children: [
              /* @__PURE__ */ i.jsx(va, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ i.jsx(An, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (S) => o(S.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((S) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: m === S.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: E,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (b) => x(b.target.value),
                onKeyDown: (b) => b.key === "Escape" && _()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: k || !w.trim(),
                children: /* @__PURE__ */ i.jsx(ed, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: _,
                disabled: k,
                children: /* @__PURE__ */ i.jsx(Ne, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-tag-item__name", children: S.name }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => M(S.name),
              children: /* @__PURE__ */ i.jsx(An, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => L(S),
              children: /* @__PURE__ */ i.jsx(ld, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => N(S.id, S.name),
              children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
            }
          )
        ] })
      ] }) }, S.id)) })
    ] })
  ] });
}, ah = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: h } = md(e, t), { getParentChain: g } = hd(s, u), [m, y] = v.useState(!1), [w, x] = v.useState(
    u["viewer.show_details_by_default"]
  ), [k, f] = v.useState(null), d = k ?? u["viewer.show_thumbnails"], [p, j] = v.useState(!1), [N, L] = v.useState(!1), [_, E] = v.useState(null), [M, D] = v.useState(null), [S, b] = v.useState(
    null
  ), W = v.useRef(null), Y = v.useRef(!0);
  v.useEffect(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []);
  const F = v.useRef(l);
  v.useEffect(() => {
    F.current = l;
  }, [l]);
  const Q = a === "lineage" ? o : s.filter(
    (V) => V.exists !== !1 && !(u["gallery.hide_parent_images"] && V.has_children)
  ), A = l === null ? -1 : Q.findIndex((V) => V.id === l), C = (a === "lineage" && o.length > 0 ? o : s).find((V) => V.id === l), z = v.useCallback(
    async (V = !1) => {
      if (!C) return;
      const te = m ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!V && te === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [C.id],
            hasLineage: !!(C.parent_id || C.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const T = e.viewScope === "trash", ee = /* @__PURE__ */ new Set([C.id]);
        if (te === "lineage") {
          const B = await Si(C.id);
          for (const J of B)
            ee.add(J.id);
        }
        if (!Y.current || F.current === null) return;
        if (Q.length > ee.size) {
          let B = !1;
          for (let J = A + 1; J < Q.length; J++)
            if (!ee.has(Q[J].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: Q[J].id, mode: a }
              }), B = !0;
              break;
            }
          if (!B) {
            for (let J = A - 1; J >= 0; J--)
              if (!ee.has(Q[J].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: Q[J].id, mode: a }
                }), B = !0;
                break;
              }
          }
          B || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await _i(Array.from(ee), T), !T) {
          const B = Q.filter(
            (J) => ee.has(J.id)
          );
          E(B), D(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ee) });
      } catch (T) {
        t({
          type: "SET_ERROR",
          payload: T instanceof Error ? T.message : String(T)
        });
      }
    },
    [
      C,
      m,
      u,
      e.viewScope,
      Q,
      A,
      a,
      t
    ]
  ), $ = v.useCallback(() => {
    C && c(C);
  }, [C, c]), X = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: m } });
  }, [t, m]), se = v.useCallback(async () => {
    const V = m ? u["fullscreen.loop"] : u["viewer.loop"];
    if (A === 0 && a === "gallery" && e.pagination.hasMore && !N && V) {
      L(!0);
      try {
        const te = e.pagination.limit, T = e.pagination.total, ee = Math.max(0, T - te), B = await cl(
          ee,
          te,
          e.searchQuery
        );
        if (!Y.current || (t({ type: "APPEND_IMAGES", payload: B }), F.current === null)) return;
        if (B.images.length > 0) {
          const J = B.images[B.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: J.id, mode: "gallery" }
          });
        }
      } catch (te) {
        console.error("Failed to jump to end:", te);
      } finally {
        L(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: m } });
  }, [
    A,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    N,
    m
  ]), ht = v.useCallback(
    (V) => {
      V && "stopPropagation" in V && V.stopPropagation();
      const te = W.current;
      te && (document.fullscreenElement ? document.exitFullscreen() : te.requestFullscreen().catch((T) => {
        console.error(
          `Error attempting to enable full-screen mode: ${T.message}`
        );
      }));
    },
    []
  ), U = v.useCallback(async () => {
    C && (Q.length > 1 ? X() : t({ type: "CLOSE_VIEWER" }), await h(C));
  }, [C, Q.length, X, h, t]), q = v.useCallback(async () => {
    if (!_ || _.length === 0) return;
    const V = _.map((T) => T.id), te = V[0];
    try {
      const T = await wa(V);
      if (!Y.current) return;
      if (t({ type: "ADD_IMAGES", payload: _ }), e.viewScope === "trash") {
        const ee = T.restored_ids || V;
        t({ type: "REMOVE_IMAGES", payload: ee });
      }
      if (E(null), !Y.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: te, mode: a }
      });
    } catch (T) {
      t({
        type: "SET_ERROR",
        payload: T instanceof Error ? T.message : String(T)
      });
    }
  }, [_, t, a, e.viewScope]), re = v.useCallback(async () => {
    if (_ && _.length > 0)
      await q();
    else if (M && M.type === "tags") {
      const { imageId: V, addTags: te, removeTags: T } = M;
      try {
        await ki([V], te, T);
        const ee = (a === "lineage" ? o : s).find((B) => B.id === V);
        if (ee) {
          const B = [...ee.tags];
          for (const et of te)
            B.includes(et) || B.push(et);
          const J = B.filter((et) => !T.includes(et));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ee, tags: J }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: V, mode: a }
          });
        }
        D(null);
      } catch (ee) {
        t({
          type: "SET_ERROR",
          payload: ee instanceof Error ? ee.message : String(ee)
        });
      }
    }
  }, [
    _,
    M,
    q,
    s,
    o,
    a,
    t
  ]), qe = v.useCallback(
    async (V) => {
      if (!V || !C) return;
      const te = C.id, T = [...C.tags], ee = V.split(/\s+/), B = [], J = [];
      let et = !1, cn = !1, Pr = !1;
      for (const ve of ee)
        if (ve.startsWith("tag:")) {
          const pe = ve.substring(4);
          pe && !T.includes(pe) && !B.includes(pe) && B.push(pe);
        } else if (ve.startsWith("-tag:")) {
          const pe = ve.substring(5);
          pe && T.includes(pe) && !J.includes(pe) && J.push(pe);
        } else if (ve.startsWith("tag-toggle:")) {
          const pe = ve.substring(11);
          pe && (T.includes(pe) ? J.includes(pe) || J.push(pe) : B.includes(pe) || B.push(pe));
        } else ve === "next" ? et = !0 : ve === "prev" ? cn = !0 : ve === "delete" && (Pr = !0);
      if (B.length > 0 || J.length > 0)
        try {
          await ki(
            [te],
            B,
            J
          );
          const ve = [...T];
          for (const Gt of B)
            ve.includes(Gt) || ve.push(Gt);
          const pe = ve.filter((Gt) => !J.includes(Gt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...C, id: te, tags: pe }
          }), D({
            type: "tags",
            imageId: te,
            addTags: [...J],
            removeTags: [...B]
          }), E(null);
        } catch (ve) {
          console.error("Failed to update tags via shortcut:", ve);
        }
      Pr ? z(!0) : et ? X() : cn && se();
    },
    [C, t, X, se, z]
  );
  v.useEffect(() => {
    const V = (T) => {
      var pe, Gt, _a;
      if (l === null) return;
      const ee = ((pe = document.activeElement) == null ? void 0 : pe.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || ((_a = document.activeElement) == null ? void 0 : _a.isContentEditable), B = T.key === "Delete" || T.key === "Backspace", J = T.key === "ArrowRight" || T.key === "ArrowLeft", et = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        T.key
      ), cn = T.key === "Escape", Pr = (T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z" || T.code === "KeyZ"), ve = /^[0-9]$/.test(T.key) && !T.ctrlKey && !T.metaKey && !T.altKey && T.code !== "KeyZ";
      if (B || J || et || cn || Pr || ve)
        if (ee)
          if (cn) {
            if (e.activeModal.type !== "none") {
              T.preventDefault(), T.stopPropagation();
              return;
            }
            T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation();
          } else
            return;
        else {
          if (cn && e.activeModal.type !== "none") {
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
        X();
      else if (T.key === "ArrowLeft")
        se();
      else if (T.key === "f" || T.key === "F")
        ht(T);
      else if (T.key === "i" || T.key === "I")
        x((es) => !es);
      else if (T.key === "t" || T.key === "T")
        $();
      else if ((T.key === "r" || T.key === "R") && e.viewScope === "trash")
        U();
      else if (T.key === "Delete")
        z();
      else if ((T.ctrlKey || T.metaKey) && (T.key === "z" || T.key === "Z"))
        re();
      else if (ve && !ee) {
        const es = `viewer.shortcut.${T.key}`, ts = u[es];
        typeof ts == "string" && ts && (b(T.key), setTimeout(() => {
          Y.current && b(null);
        }, 500), qe(ts));
      }
    };
    window.addEventListener("keydown", V, { capture: !0 });
    const te = () => {
      const T = !!document.fullscreenElement;
      y(T), x(T ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", te), () => {
      window.removeEventListener("keydown", V, { capture: !0 }), document.removeEventListener("fullscreenchange", te);
    };
  }, [
    l,
    t,
    ht,
    X,
    se,
    u,
    z,
    e.activeModal.type,
    re,
    $,
    U,
    e.viewScope,
    qe
  ]), v.useEffect(() => {
    l !== null && r(l).catch((V) => {
      console.error("Failed to fetch full image details for viewer:", V);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (j(!0), Si(l).then((V) => {
      Y.current && t({ type: "SET_LINEAGE", payload: V });
    }).catch((V) => {
      console.error("Failed to fetch lineage:", V);
    }).finally(() => {
      Y.current && j(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || A !== -1 && A >= Q.length - 15 && n();
  }, [
    l,
    Q.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    A
  ]);
  const br = v.useMemo(() => {
    if (!d || A === -1) return [];
    const V = u["viewer.thumbnail_window_size"], te = Math.floor(V / 2);
    let T = Math.max(0, A - te);
    const ee = Math.min(Q.length, T + V);
    return ee === Q.length && (T = Math.max(0, ee - V)), Q.slice(T, ee).map((B, J) => ({
      img: B,
      absIndex: T + J
    }));
  }, [Q, A, u, d]), Ht = v.useMemo(() => C ? g(C) : [], [C, g]);
  return v.useEffect(() => {
    var V, te;
    if (l !== null) {
      if (d) {
        const T = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        T && T.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((V = document.activeElement) == null ? void 0 : V.tagName) === "CANVAS" && document.activeElement.blur(), (te = W.current) == null || te.focus();
    }
  }, [l, d]), v.useEffect(() => {
    if (l === null || Q.length === 0) return;
    const V = Q.findIndex(
      (B) => B.id === l
    );
    if (V === -1) return;
    const te = (B) => We(B), T = [
      V + 1,
      V + 2,
      V - 1
    ], ee = setTimeout(() => {
      for (const B of T)
        if (B >= 0 && B < Q.length) {
          const J = Q[B], et = new Image();
          et.src = te(J);
        }
    }, 150);
    return () => clearTimeout(ee);
  }, [l, Q]), {
    isFullscreen: m,
    showDetails: w,
    setShowDetails: x,
    showThumbnails: d,
    setShowThumbnailsOverride: f,
    isLoadingLineage: p,
    isJumping: N,
    activeShortcutKey: S,
    lastDeletedImages: _,
    setLastDeletedImages: E,
    overlayRef: W,
    handleNext: X,
    handlePrevious: se,
    handleDelete: z,
    handleTagEdit: $,
    handleRestore: U,
    handleUndo: re,
    toggleFullscreen: ht,
    currentIndex: A,
    currentThumbnails: Q,
    image: C,
    windowedThumbnails: br,
    parentChain: Ht
  };
}, oh = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[`viewer.shortcut.${r}`];
  return typeof l == "string" && l ? /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: l.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, uh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: s
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
    children: [
      (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
      ] }),
      (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-value", children: [
          e.width,
          " x ",
          e.height,
          " px"
        ] })
      ] }),
      (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
      ] }),
      e.deleted_at && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
      ] }),
      (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
      ] }),
      (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
          (a, o) => a.imgSrc && /* @__PURE__ */ i.jsx(
            "img",
            {
              src: a.imgSrc,
              className: "meld-lineage-badge__parent-thumb",
              style: { cursor: "pointer" },
              loading: "lazy",
              onClick: (u) => {
                u.stopPropagation(), s({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: a.id || e.id,
                    mode: "lineage"
                  }
                });
              },
              title: o === 0 ? "Source" : o === 1 ? "Grand-Source" : `Ancestor (S${o + 1})`,
              alt: "source thumb"
            },
            a.id || o
          )
        ) }) })
      ] }),
      (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
        /* @__PURE__ */ i.jsx(
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
      (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
        /* @__PURE__ */ i.jsx(
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
      (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((a) => /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-details-tag", children: a }, a)) })
      ] })
    ]
  }
), wd = v.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = We(e);
    return /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${s ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ i.jsx("img", { src: o, alt: e.filename }),
          (s || a) && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${s ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: s ? /* @__PURE__ */ i.jsx(qc, { size: 12 }) : /* @__PURE__ */ i.jsx(Jc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
wd.displayName = "ThumbnailItem";
const ch = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: s,
  viewerMode: a
}) => /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  l ? /* @__PURE__ */ i.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: o }) => /* @__PURE__ */ i.jsx(
    wd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Cr, { className: "animate-spin", size: 20 }) })
] }) }), dh = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Pe(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: h,
    activeShortcutKey: g,
    setLastDeletedImages: m,
    overlayRef: y,
    handleNext: w,
    handlePrevious: x,
    handleTagEdit: k,
    handleRestore: f,
    toggleFullscreen: d,
    image: p,
    windowedThumbnails: j,
    parentChain: N
  } = ah({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  if (!p) return null;
  const { viewerImageId: L, viewerMode: _ } = e, E = We(p), M = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ze.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: y,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (D) => D.stopPropagation(),
              children: [
                M && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: f,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ i.jsx(Cr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ i.jsx(rd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: k,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ i.jsx(un, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!s),
                      type: "button",
                      title: s ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ i.jsx(lm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: d,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(um, { size: 20 }) : /* @__PURE__ */ i.jsx(om, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Ne, { size: 20 })
                    }
                  )
                ] }),
                M && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: x,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ i.jsx(td, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Cr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: E,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                M && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(nd, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  uh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: M,
                    parentChain: N,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  ch,
                  {
                    windowedThumbnails: j,
                    viewerImageId: L,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: _
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  oh,
                  {
                    settings: e.settings,
                    activeShortcutKey: g
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            fd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: m
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(pd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(ud, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(cd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            dd,
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
}, fh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Pe(), [s, a] = v.useState("gallery"), [o, u] = v.useState(""), [c, h] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", m = v.useRef(null), y = v.useRef(null), w = v.useMemo(
    () => e.images.filter((k) => e.viewScope === "trash" ? k.exists !== !1 || e.settings["gallery.trash.show_missing"] : k.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && k.has_children)),
    [e.images, e.settings, e.viewScope]
  ), x = v.useMemo(
    () => w.slice(0, c),
    [w, c]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (O.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), v.useEffect(() => {
    const k = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [e.activeModal.type, e.selectedIds.size, t]), v.useEffect(() => {
    const k = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            O.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < w.length ? (O.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), h((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (O.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : O.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: w.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = m.current;
    return f && k.observe(f), () => {
      f && k.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    w.length,
    e.pagination.limit,
    e.images.length
  ]), v.useEffect(() => {
    const k = e.viewerImageId ?? y.current;
    if (k !== null && w.some((d) => d.id === k)) {
      const d = w.findIndex((j) => j.id === k);
      if (d >= c) {
        h(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${k}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    w,
    c,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: w,
    visibleImages: x,
    isSearchActive: g,
    loadMoreRef: m
  };
}, ph = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Pe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const s = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (c) => e.selectedIds.has(c.id)
    ), u = /* @__PURE__ */ new Set();
    for (const c of o)
      if (c.tags)
        for (const h of c.tags)
          u.add(h);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${s ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ i.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ i.jsx(
                  Cr,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ i.jsx(
                  Fn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: a,
              children: [
                /* @__PURE__ */ i.jsx(
                  un,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ i.jsx(
                  Fn,
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
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ i.jsx(Ne, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, mh = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: s,
    lastSearchQuery: a,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: c,
    visibleImages: h,
    isSearchActive: g,
    loadMoreRef: m
  } = fh();
  return O.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: h.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ i.jsx(Fn, { size: 14 }),
              /* @__PURE__ */ i.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (y) => r("gallery.trash.show_missing", y.target.checked)
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ i.jsx(Ne, { size: 14 }),
                  /* @__PURE__ */ i.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), s("gallery")) : (!e.searchQuery && a && t({
                    type: "SET_SEARCH_QUERY",
                    payload: a
                  }), s("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: g ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ i.jsx(An, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const w = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", w);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(sm, { size: 14 }) : /* @__PURE__ */ i.jsx(rd, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ i.jsx(un, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(nm, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(
                  Cr,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(pm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(sh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(eh, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          ih,
          {
            onClose: () => s("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), s("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: h.map((y) => {
                const w = e.settings["sidebar.thumbnail_size"] || 100, x = e.settings["gallery.view_mode"] === "grid_only", k = x && y.width && y.height ? Math.min(
                  w,
                  w * y.width / y.height
                ) + 10 : x ? w + 10 : "100%";
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    "data-image-id": y.id,
                    style: {
                      width: x ? "auto" : "100%",
                      flexShrink: 0,
                      display: x ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ i.jsx(
                      qm,
                      {
                        height: x ? w + 10 : Math.max(w, 150),
                        style: {
                          width: typeof k == "number" ? `${k}px` : k,
                          minWidth: typeof k == "number" ? `${k}px` : k,
                          display: x ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ i.jsx(Jm, { image: y })
                      }
                    )
                  },
                  y.id
                );
              })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: m,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(ph, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(dh, {}),
        /* @__PURE__ */ i.jsx(Ym, {})
      ]
    }
  );
};
Fo.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, s;
      const n = (l = e.widgets) == null ? void 0 : l.find((a) => a.name === "positive"), r = (s = e.widgets) == null ? void 0 : s.find((a) => a.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const ql = document.createElement("link");
ql.rel = "stylesheet";
ql.type = "text/css";
ql.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(ql);
let Zr = null, nt = null;
Fo.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const s = n.ui.meld;
        s != null && s.isVisible() && s.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await ad();
      O.init(n.dev_mode), O.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), O.init(!1);
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
      }, K.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), K.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), K.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), O.log("Import completed.");
      }), K.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await id({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (s) {
                  console.error("Failed to auto-register image:", s);
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
            O.log("render called", {
              el: n,
              galleryRoot: Zr,
              galleryContainer: nt
            }), nt || (O.log("galleryContainer not found, creating new one"), nt = document.createElement("div"), nt.id = "meld-gallery-container", nt.style.height = "100%", nt.style.width = "100%", nt.style.display = "flex", nt.style.flexDirection = "column"), n.contains(nt) || (O.log("Appending galleryContainer to el"), n.appendChild(nt)), Zr ? O.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (O.log("Creating new gallery root"), Zr = Yc(nt), Zr.render(
              dl.createElement(
                Dm,
                null,
                dl.createElement(mh)
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
