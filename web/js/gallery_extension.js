import { api as V } from "../../../scripts/api.js";
import { app as fa } from "../../../scripts/app.js";
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr = Symbol.for("react.element"), Fc = Symbol.for("react.portal"), Oc = Symbol.for("react.fragment"), Ac = Symbol.for("react.strict_mode"), bc = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), Uc = Symbol.for("react.context"), Vc = Symbol.for("react.forward_ref"), Qc = Symbol.for("react.suspense"), Wc = Symbol.for("react.memo"), Hc = Symbol.for("react.lazy"), Js = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object" ? null : (e = Js && e[Js] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ma = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ha = Object.assign, ga = {};
function xn(e, t, n) {
  this.props = e, this.context = t, this.refs = ga, this.updater = n || ma;
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ya() {
}
ya.prototype = xn.prototype;
function ts(e, t, n) {
  this.props = e, this.context = t, this.refs = ga, this.updater = n || ma;
}
var ns = ts.prototype = new ya();
ns.constructor = ts;
ha(ns, xn.prototype);
ns.isPureReactComponent = !0;
var Zs = Array.isArray, va = Object.prototype.hasOwnProperty, rs = { current: null }, wa = { key: !0, ref: !0, __self: !0, __source: !0 };
function xa(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) va.call(t, r) && !wa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: cr, type: e, key: i, ref: s, props: l, _owner: rs.current };
}
function Gc(e, t) {
  return { $$typeof: cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qs = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Kc("" + e.key) : t.toString(36);
}
function Rr(e, t, n, r, l) {
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
        case cr:
        case Fc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Fl(s, 0) : r, Zs(l) ? (n = "", e != null && (n = e.replace(qs, "$&/") + "/"), Rr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ls(l) && (l = Gc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(qs, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Zs(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var u = r + Fl(i, a);
    s += Rr(i, t, n, u, l);
  }
  else if (u = Bc(e), typeof u == "function") for (e = u.call(e), a = 0; !(i = e.next()).done; ) i = i.value, u = r + Fl(i, a++), s += Rr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Rr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Yc(e) {
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
var we = { current: null }, Fr = { transition: null }, Xc = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: Fr, ReactCurrentOwner: rs };
function _a() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: yr, forEach: function(e, t, n) {
  yr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ls(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = xn;
$.Fragment = Oc;
$.Profiler = bc;
$.PureComponent = ts;
$.StrictMode = Ac;
$.Suspense = Qc;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xc;
$.act = _a;
$.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ha({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = rs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) va.call(t, u) && !wa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: i, props: r, _owner: s };
};
$.createContext = function(e) {
  return e = { $$typeof: Uc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $c, _context: e }, e.Consumer = e;
};
$.createElement = xa;
$.createFactory = function(e) {
  var t = xa.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Vc, render: e };
};
$.isValidElement = ls;
$.lazy = function(e) {
  return { $$typeof: Hc, _payload: { _status: -1, _result: e }, _init: Yc };
};
$.memo = function(e, t) {
  return { $$typeof: Wc, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
$.unstable_act = _a;
$.useCallback = function(e, t) {
  return we.current.useCallback(e, t);
};
$.useContext = function(e) {
  return we.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return we.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return we.current.useEffect(e, t);
};
$.useId = function() {
  return we.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return we.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return we.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return we.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return we.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return we.current.useRef(e);
};
$.useState = function(e) {
  return we.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return we.current.useTransition();
};
$.version = "18.3.1";
pa.exports = $;
var E = pa.exports;
const eo = /* @__PURE__ */ Rc(E);
var Sa = { exports: {} }, Le = {}, ka = { exports: {} }, Ea = {};
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
    var A = I.length;
    I.push(F);
    e: for (; 0 < A; ) {
      var B = A - 1 >>> 1, ie = I[B];
      if (0 < l(ie, F)) I[B] = F, I[A] = ie, A = B;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var F = I[0], A = I.pop();
    if (A !== F) {
      I[0] = A;
      e: for (var B = 0, ie = I.length, hr = ie >>> 1; B < hr; ) {
        var It = 2 * (B + 1) - 1, Rl = I[It], Lt = It + 1, gr = I[Lt];
        if (0 > l(Rl, A)) Lt < ie && 0 > l(gr, Rl) ? (I[B] = gr, I[Lt] = A, B = Lt) : (I[B] = Rl, I[It] = A, B = It);
        else if (Lt < ie && 0 > l(gr, A)) I[B] = gr, I[Lt] = A, B = Lt;
        else break e;
      }
    }
    return F;
  }
  function l(I, F) {
    var A = I.sortIndex - F.sortIndex;
    return A !== 0 ? A : I.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var u = [], c = [], h = 1, g = null, m = 3, S = !1, N = !1, j = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(I) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= I) r(c), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(c);
    }
  }
  function C(I) {
    if (j = !1, p(I), !N) if (n(u) !== null) N = !0, O(M);
    else {
      var F = n(c);
      F !== null && U(C, F.startTime - I);
    }
  }
  function M(I, F) {
    N = !1, j && (j = !1, d(y), y = -1), S = !0;
    var A = m;
    try {
      for (p(F), g = n(u); g !== null && (!(g.expirationTime > F) || I && !x()); ) {
        var B = g.callback;
        if (typeof B == "function") {
          g.callback = null, m = g.priorityLevel;
          var ie = B(g.expirationTime <= F);
          F = e.unstable_now(), typeof ie == "function" ? g.callback = ie : g === n(u) && r(u), p(F);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var hr = !0;
      else {
        var It = n(c);
        It !== null && U(C, It.startTime - F), hr = !1;
      }
      return hr;
    } finally {
      g = null, m = A, S = !1;
    }
  }
  var k = !1, L = null, y = -1, D = 5, z = -1;
  function x() {
    return !(e.unstable_now() - z < D);
  }
  function v() {
    if (L !== null) {
      var I = e.unstable_now();
      z = I;
      var F = !0;
      try {
        F = L(!0, I);
      } finally {
        F ? w() : (k = !1, L = null);
      }
    } else k = !1;
  }
  var w;
  if (typeof f == "function") w = function() {
    f(v);
  };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), b = _.port2;
    _.port1.onmessage = v, w = function() {
      b.postMessage(null);
    };
  } else w = function() {
    R(v, 0);
  };
  function O(I) {
    L = I, k || (k = !0, w());
  }
  function U(I, F) {
    y = R(function() {
      I(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    N || S || (N = !0, O(M));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(I) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = m;
    }
    var A = m;
    m = F;
    try {
      return I();
    } finally {
      m = A;
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
    var A = m;
    m = I;
    try {
      return F();
    } finally {
      m = A;
    }
  }, e.unstable_scheduleCallback = function(I, F, A) {
    var B = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? B + A : B) : A = B, I) {
      case 1:
        var ie = -1;
        break;
      case 2:
        ie = 250;
        break;
      case 5:
        ie = 1073741823;
        break;
      case 4:
        ie = 1e4;
        break;
      default:
        ie = 5e3;
    }
    return ie = A + ie, I = { id: h++, callback: F, priorityLevel: I, startTime: A, expirationTime: ie, sortIndex: -1 }, A > B ? (I.sortIndex = A, t(c, I), n(u) === null && I === n(c) && (j ? (d(y), y = -1) : j = !0, U(C, A - B))) : (I.sortIndex = ie, t(u, I), N || S || (N = !0, O(M))), I;
  }, e.unstable_shouldYield = x, e.unstable_wrapCallback = function(I) {
    var F = m;
    return function() {
      var A = m;
      m = F;
      try {
        return I.apply(this, arguments);
      } finally {
        m = A;
      }
    };
  };
})(Ea);
ka.exports = Ea;
var Jc = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc = E, Ie = Jc;
function T(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ca = /* @__PURE__ */ new Set(), Bn = {};
function Qt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Ca.add(t[e]);
}
var lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ai = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, to = {}, no = {};
function ed(e) {
  return ai.call(no, e) ? !0 : ai.call(to, e) ? !1 : qc.test(e) ? no[e] = !0 : (to[e] = !0, !1);
}
function td(e, t, n, r) {
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
function nd(e, t, n, r) {
  if (t === null || typeof t > "u" || td(e, t, n, r)) return !0;
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
function xe(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var is = /[\-:]([a-z])/g;
function ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    is,
    ss
  );
  ce[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(is, ss);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(is, ss);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function os(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nd(t, n, l, r) && (n = null), r || l === null ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var at = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Bt = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), as = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), Na = Symbol.for("react.provider"), ja = Symbol.for("react.context"), us = Symbol.for("react.forward_ref"), ci = Symbol.for("react.suspense"), di = Symbol.for("react.suspense_list"), cs = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), Ta = Symbol.for("react.offscreen"), ro = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object" ? null : (e = ro && e[ro] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Ol;
function zn(e) {
  if (Ol === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ol = t && t[1] || "";
  }
  return `
` + Ol + e;
}
var Al = !1;
function bl(e, t) {
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
`), i = r.stack.split(`
`), s = l.length - 1, a = i.length - 1; 1 <= s && 0 <= a && l[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (l[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || l[s] !== i[a]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function rd(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bl(e.type, !1), e;
    case 11:
      return e = bl(e.type.render, !1), e;
    case 1:
      return e = bl(e.type, !0), e;
    default:
      return "";
  }
}
function fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Bt:
      return "Portal";
    case ui:
      return "Profiler";
    case as:
      return "StrictMode";
    case ci:
      return "Suspense";
    case di:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ja:
      return (e.displayName || "Context") + ".Consumer";
    case Na:
      return (e._context.displayName || "Context") + ".Provider";
    case us:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case cs:
      return t = e.displayName || null, t !== null ? t : fi(e.type) || "Memo";
    case ct:
      t = e._payload, e = e._init;
      try {
        return fi(e(t));
      } catch {
      }
  }
  return null;
}
function ld(e) {
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
      return fi(t);
    case 8:
      return t === as ? "StrictMode" : "Mode";
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
function Et(e) {
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
function Ia(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function id(e) {
  var t = Ia(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function wr(e) {
  e._valueTracker || (e._valueTracker = id(e));
}
function La(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ia(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Gr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function lo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Et(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ma(e, t) {
  t = t.checked, t != null && os(e, "checked", t, !1);
}
function mi(e, t) {
  Ma(e, t);
  var n = Et(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? hi(e, t.type, n) : t.hasOwnProperty("defaultValue") && hi(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function io(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function so(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(T(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Pa(e, t) {
  var n = Et(t.value), r = Et(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function oo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Da = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
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
}, sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
  sd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
  });
});
function Ra(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
}
function Fa(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ra(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var od = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vi(e, t) {
  if (t) {
    if (od[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function wi(e, t) {
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
var xi = null;
function ds(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _i = null, sn = null, on = null;
function ao(e) {
  if (e = pr(e)) {
    if (typeof _i != "function") throw Error(T(280));
    var t = e.stateNode;
    t && (t = Sl(t), _i(e.stateNode, e.type, t));
  }
}
function Oa(e) {
  sn ? on ? on.push(e) : on = [e] : sn = e;
}
function Aa() {
  if (sn) {
    var e = sn, t = on;
    if (on = sn = null, ao(e), t) for (e = 0; e < t.length; e++) ao(t[e]);
  }
}
function ba(e, t) {
  return e(t);
}
function $a() {
}
var $l = !1;
function Ua(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return ba(e, t, n);
  } finally {
    $l = !1, (sn !== null || on !== null) && ($a(), Aa());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Si = !1;
if (lt) try {
  var Nn = {};
  Object.defineProperty(Nn, "passive", { get: function() {
    Si = !0;
  } }), window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn);
} catch {
  Si = !1;
}
function ad(e, t, n, r, l, i, s, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var An = !1, Kr = null, Yr = !1, ki = null, ud = { onError: function(e) {
  An = !0, Kr = e;
} };
function cd(e, t, n, r, l, i, s, a, u) {
  An = !1, Kr = null, ad.apply(ud, arguments);
}
function dd(e, t, n, r, l, i, s, a, u) {
  if (cd.apply(this, arguments), An) {
    if (An) {
      var c = Kr;
      An = !1, Kr = null;
    } else throw Error(T(198));
    Yr || (Yr = !0, ki = c);
  }
}
function Wt(e) {
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
function Va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function uo(e) {
  if (Wt(e) !== e) throw Error(T(188));
}
function fd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(T(188));
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
        if (i === n) return uo(l), e;
        if (i === r) return uo(l), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, a = l.child; a; ) {
        if (a === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = l, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Qa(e) {
  return e = fd(e), e !== null ? Wa(e) : null;
}
function Wa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ha = Ie.unstable_scheduleCallback, co = Ie.unstable_cancelCallback, pd = Ie.unstable_shouldYield, md = Ie.unstable_requestPaint, te = Ie.unstable_now, hd = Ie.unstable_getCurrentPriorityLevel, fs = Ie.unstable_ImmediatePriority, Ba = Ie.unstable_UserBlockingPriority, Xr = Ie.unstable_NormalPriority, gd = Ie.unstable_LowPriority, Ga = Ie.unstable_IdlePriority, vl = null, Je = null;
function yd(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : xd, vd = Math.log, wd = Math.LN2;
function xd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vd(e) / wd | 0) | 0;
}
var _r = 64, Sr = 4194304;
function Rn(e) {
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
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~l;
    a !== 0 ? r = Rn(a) : (i &= s, i !== 0 && (r = Rn(i)));
  } else s = n & ~l, s !== 0 ? r = Rn(s) : i !== 0 && (r = Rn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function _d(e, t) {
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
function Sd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - We(i), a = 1 << s, u = l[s];
    u === -1 ? (!(a & n) || a & r) && (l[s] = _d(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function Ei(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ka() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function kd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ps(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var H = 0;
function Ya(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xa, ms, Ja, Za, qa, Ci = !1, kr = [], gt = null, yt = null, vt = null, Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), ft = [], Ed = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function jn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = pr(t), t !== null && ms(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Cd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return gt = jn(gt, e, t, n, r, l), !0;
    case "dragenter":
      return yt = jn(yt, e, t, n, r, l), !0;
    case "mouseover":
      return vt = jn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Yn.set(i, jn(Yn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Xn.set(i, jn(Xn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function eu(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Va(n), t !== null) {
          e.blockedOn = t, qa(e.priority, function() {
            Ja(n);
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
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xi = r, n.target.dispatchEvent(r), xi = null;
    } else return t = pr(n), t !== null && ms(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function po(e, t, n) {
  Or(e) && n.delete(t);
}
function Nd() {
  Ci = !1, gt !== null && Or(gt) && (gt = null), yt !== null && Or(yt) && (yt = null), vt !== null && Or(vt) && (vt = null), Yn.forEach(po), Xn.forEach(po);
}
function Tn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ci || (Ci = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Nd)));
}
function Jn(e) {
  function t(l) {
    return Tn(l, e);
  }
  if (0 < kr.length) {
    Tn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (gt !== null && Tn(gt, e), yt !== null && Tn(yt, e), vt !== null && Tn(vt, e), Yn.forEach(t), Xn.forEach(t), n = 0; n < ft.length; n++) r = ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && (n = ft[0], n.blockedOn === null); ) eu(n), n.blockedOn === null && ft.shift();
}
var an = at.ReactCurrentBatchConfig, Zr = !0;
function jd(e, t, n, r) {
  var l = H, i = an.transition;
  an.transition = null;
  try {
    H = 1, hs(e, t, n, r);
  } finally {
    H = l, an.transition = i;
  }
}
function Td(e, t, n, r) {
  var l = H, i = an.transition;
  an.transition = null;
  try {
    H = 4, hs(e, t, n, r);
  } finally {
    H = l, an.transition = i;
  }
}
function hs(e, t, n, r) {
  if (Zr) {
    var l = Ni(e, t, n, r);
    if (l === null) Jl(e, t, r, qr, n), fo(e, r);
    else if (Cd(l, e, t, n, r)) r.stopPropagation();
    else if (fo(e, r), t & 4 && -1 < Ed.indexOf(e)) {
      for (; l !== null; ) {
        var i = pr(l);
        if (i !== null && Xa(i), i = Ni(e, t, n, r), i === null && Jl(e, t, r, qr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var qr = null;
function Ni(e, t, n, r) {
  if (qr = null, e = ds(r), e = zt(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Va(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return qr = e, null;
}
function tu(e) {
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
      switch (hd()) {
        case fs:
          return 1;
        case Ba:
          return 4;
        case Xr:
        case gd:
          return 16;
        case Ga:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mt = null, gs = null, Ar = null;
function nu() {
  if (Ar) return Ar;
  var e, t = gs, n = t.length, r, l = "value" in mt ? mt.value : mt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function br(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Er() {
  return !0;
}
function mo() {
  return !1;
}
function Me(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Er : mo, this.isPropagationStopped = mo, this;
  }
  return q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var _n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ys = Me(_n), fr = q({}, _n, { view: 0, detail: 0 }), Id = Me(fr), Vl, Ql, In, wl = q({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (Vl = e.screenX - In.screenX, Ql = e.screenY - In.screenY) : Ql = Vl = 0, In = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), ho = Me(wl), Ld = q({}, wl, { dataTransfer: 0 }), Md = Me(Ld), Pd = q({}, fr, { relatedTarget: 0 }), Wl = Me(Pd), zd = q({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dd = Me(zd), Rd = q({}, _n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Fd = Me(Rd), Od = q({}, _n, { data: 0 }), go = Me(Od), Ad = {
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
}, bd = {
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
}, $d = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ud(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $d[e]) ? !!t[e] : !1;
}
function vs() {
  return Ud;
}
var Vd = q({}, fr, { key: function(e) {
  if (e.key) {
    var t = Ad[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vs, charCode: function(e) {
  return e.type === "keypress" ? br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qd = Me(Vd), Wd = q({}, wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yo = Me(Wd), Hd = q({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vs }), Bd = Me(Hd), Gd = q({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kd = Me(Gd), Yd = q({}, wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Xd = Me(Yd), Jd = [9, 13, 27, 32], ws = lt && "CompositionEvent" in window, bn = null;
lt && "documentMode" in document && (bn = document.documentMode);
var Zd = lt && "TextEvent" in window && !bn, ru = lt && (!ws || bn && 8 < bn && 11 >= bn), vo = " ", wo = !1;
function lu(e, t) {
  switch (e) {
    case "keyup":
      return Jd.indexOf(t.keyCode) !== -1;
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
function iu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function qd(e, t) {
  switch (e) {
    case "compositionend":
      return iu(t);
    case "keypress":
      return t.which !== 32 ? null : (wo = !0, vo);
    case "textInput":
      return e = t.data, e === vo && wo ? null : e;
    default:
      return null;
  }
}
function ef(e, t) {
  if (Kt) return e === "compositionend" || !ws && lu(e, t) ? (e = nu(), Ar = gs = mt = null, Kt = !1, e) : null;
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
      return ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function xo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tf[e.type] : t === "textarea";
}
function su(e, t, n, r) {
  Oa(r), t = el(t, "onChange"), 0 < t.length && (n = new ys("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var $n = null, Zn = null;
function nf(e) {
  yu(e, 0);
}
function xl(e) {
  var t = Jt(e);
  if (La(t)) return e;
}
function rf(e, t) {
  if (e === "change") return t;
}
var ou = !1;
if (lt) {
  var Hl;
  if (lt) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var _o = document.createElement("div");
      _o.setAttribute("oninput", "return;"), Bl = typeof _o.oninput == "function";
    }
    Hl = Bl;
  } else Hl = !1;
  ou = Hl && (!document.documentMode || 9 < document.documentMode);
}
function So() {
  $n && ($n.detachEvent("onpropertychange", au), Zn = $n = null);
}
function au(e) {
  if (e.propertyName === "value" && xl(Zn)) {
    var t = [];
    su(t, Zn, e, ds(e)), Ua(nf, t);
  }
}
function lf(e, t, n) {
  e === "focusin" ? (So(), $n = t, Zn = n, $n.attachEvent("onpropertychange", au)) : e === "focusout" && So();
}
function sf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xl(Zn);
}
function of(e, t) {
  if (e === "click") return xl(t);
}
function af(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function uf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : uf;
function qn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ai.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function ko(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eo(e, t) {
  var n = ko(e);
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
    n = ko(n);
  }
}
function uu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function cu() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function cf(e) {
  var t = cu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && uu(n.ownerDocument.documentElement, n)) {
    if (r !== null && xs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Eo(n, i);
        var s = Eo(
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
var df = lt && "documentMode" in document && 11 >= document.documentMode, Yt = null, ji = null, Un = null, Ti = !1;
function Co(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ti || Yt == null || Yt !== Gr(r) || (r = Yt, "selectionStart" in r && xs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Un && qn(Un, r) || (Un = r, r = el(ji, "onSelect"), 0 < r.length && (t = new ys("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yt)));
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xt = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Gl = {}, du = {};
lt && (du = document.createElement("div").style, "AnimationEvent" in window || (delete Xt.animationend.animation, delete Xt.animationiteration.animation, delete Xt.animationstart.animation), "TransitionEvent" in window || delete Xt.transitionend.transition);
function _l(e) {
  if (Gl[e]) return Gl[e];
  if (!Xt[e]) return e;
  var t = Xt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in du) return Gl[e] = t[n];
  return e;
}
var fu = _l("animationend"), pu = _l("animationiteration"), mu = _l("animationstart"), hu = _l("transitionend"), gu = /* @__PURE__ */ new Map(), No = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nt(e, t) {
  gu.set(e, t), Qt(t, [e]);
}
for (var Kl = 0; Kl < No.length; Kl++) {
  var Yl = No[Kl], ff = Yl.toLowerCase(), pf = Yl[0].toUpperCase() + Yl.slice(1);
  Nt(ff, "on" + pf);
}
Nt(fu, "onAnimationEnd");
Nt(pu, "onAnimationIteration");
Nt(mu, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(hu, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function jo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, dd(r, t, void 0, e), e.currentTarget = null;
}
function yu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], u = a.instance, c = a.currentTarget;
        if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
        jo(l, a, c), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], u = a.instance, c = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
        jo(l, a, c), i = u;
      }
    }
  }
  if (Yr) throw e = ki, Yr = !1, ki = null, e;
}
function K(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vu(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), vu(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Nr]) {
    e[Nr] = !0, Ca.forEach(function(n) {
      n !== "selectionchange" && (mf.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || (t[Nr] = !0, Xl("selectionchange", !1, t));
  }
}
function vu(e, t, n, r) {
  switch (tu(t)) {
    case 1:
      var l = jd;
      break;
    case 4:
      l = Td;
      break;
    default:
      l = hs;
  }
  n = l.bind(null, t, n, e), l = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = zt(a), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Ua(function() {
    var c = i, h = ds(n), g = [];
    e: {
      var m = gu.get(e);
      if (m !== void 0) {
        var S = ys, N = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Qd;
            break;
          case "focusin":
            N = "focus", S = Wl;
            break;
          case "focusout":
            N = "blur", S = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            S = Wl;
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
            S = ho;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Md;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Bd;
            break;
          case fu:
          case pu:
          case mu:
            S = Dd;
            break;
          case hu:
            S = Kd;
            break;
          case "scroll":
            S = Id;
            break;
          case "wheel":
            S = Xd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Fd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = yo;
        }
        var j = (t & 4) !== 0, R = !j && e === "scroll", d = j ? m !== null ? m + "Capture" : null : m;
        j = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var C = p.stateNode;
          if (p.tag === 5 && C !== null && (p = C, d !== null && (C = Kn(f, d), C != null && j.push(tr(f, C, p)))), R) break;
          f = f.return;
        }
        0 < j.length && (m = new S(m, N, null, n, h), g.push({ event: m, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", m && n !== xi && (N = n.relatedTarget || n.fromElement) && (zt(N) || N[it])) break e;
        if ((S || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, S ? (N = n.relatedTarget || n.toElement, S = c, N = N ? zt(N) : null, N !== null && (R = Wt(N), N !== R || N.tag !== 5 && N.tag !== 6) && (N = null)) : (S = null, N = c), S !== N)) {
          if (j = ho, C = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (j = yo, C = "onPointerLeave", d = "onPointerEnter", f = "pointer"), R = S == null ? m : Jt(S), p = N == null ? m : Jt(N), m = new j(C, f + "leave", S, n, h), m.target = R, m.relatedTarget = p, C = null, zt(h) === c && (j = new j(d, f + "enter", N, n, h), j.target = p, j.relatedTarget = R, C = j), R = C, S && N) t: {
            for (j = S, d = N, f = 0, p = j; p; p = Ht(p)) f++;
            for (p = 0, C = d; C; C = Ht(C)) p++;
            for (; 0 < f - p; ) j = Ht(j), f--;
            for (; 0 < p - f; ) d = Ht(d), p--;
            for (; f--; ) {
              if (j === d || d !== null && j === d.alternate) break t;
              j = Ht(j), d = Ht(d);
            }
            j = null;
          }
          else j = null;
          S !== null && To(g, m, S, j, !1), N !== null && R !== null && To(g, R, N, j, !0);
        }
      }
      e: {
        if (m = c ? Jt(c) : window, S = m.nodeName && m.nodeName.toLowerCase(), S === "select" || S === "input" && m.type === "file") var M = rf;
        else if (xo(m)) if (ou) M = af;
        else {
          M = sf;
          var k = lf;
        }
        else (S = m.nodeName) && S.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (M = of);
        if (M && (M = M(e, c))) {
          su(g, M, n, h);
          break e;
        }
        k && k(e, m, c), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && hi(m, "number", m.value);
      }
      switch (k = c ? Jt(c) : window, e) {
        case "focusin":
          (xo(k) || k.contentEditable === "true") && (Yt = k, ji = c, Un = null);
          break;
        case "focusout":
          Un = ji = Yt = null;
          break;
        case "mousedown":
          Ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ti = !1, Co(g, n, h);
          break;
        case "selectionchange":
          if (df) break;
        case "keydown":
        case "keyup":
          Co(g, n, h);
      }
      var L;
      if (ws) e: {
        switch (e) {
          case "compositionstart":
            var y = "onCompositionStart";
            break e;
          case "compositionend":
            y = "onCompositionEnd";
            break e;
          case "compositionupdate":
            y = "onCompositionUpdate";
            break e;
        }
        y = void 0;
      }
      else Kt ? lu(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      y && (ru && n.locale !== "ko" && (Kt || y !== "onCompositionStart" ? y === "onCompositionEnd" && Kt && (L = nu()) : (mt = h, gs = "value" in mt ? mt.value : mt.textContent, Kt = !0)), k = el(c, y), 0 < k.length && (y = new go(y, e, null, n, h), g.push({ event: y, listeners: k }), L ? y.data = L : (L = iu(n), L !== null && (y.data = L)))), (L = Zd ? qd(e, n) : ef(e, n)) && (c = el(c, "onBeforeInput"), 0 < c.length && (h = new go("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: c }), h.data = L));
    }
    yu(g, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Kn(e, n), i != null && r.unshift(tr(e, i, l)), i = Kn(e, t), i != null && r.push(tr(e, i, l))), e = e.return;
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function To(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && c !== null && (a = c, l ? (u = Kn(n, i), u != null && s.unshift(tr(n, u, a))) : l || (u = Kn(n, i), u != null && s.push(tr(n, u, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hf = /\r\n?/g, gf = /\u0000|\uFFFD/g;
function Io(e) {
  return (typeof e == "string" ? e : "" + e).replace(hf, `
`).replace(gf, "");
}
function jr(e, t, n) {
  if (t = Io(t), Io(e) !== t && n) throw Error(T(425));
}
function tl() {
}
var Ii = null, Li = null;
function Mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pi = typeof setTimeout == "function" ? setTimeout : void 0, yf = typeof clearTimeout == "function" ? clearTimeout : void 0, Lo = typeof Promise == "function" ? Promise : void 0, vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lo < "u" ? function(e) {
  return Lo.resolve(null).then(e).catch(wf);
} : Pi;
function wf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Jn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jn(t);
}
function wt(e) {
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
function Mo(e) {
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
var Sn = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + Sn, nr = "__reactProps$" + Sn, it = "__reactContainer$" + Sn, zi = "__reactEvents$" + Sn, xf = "__reactListeners$" + Sn, _f = "__reactHandles$" + Sn;
function zt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[it] || n[Xe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mo(e); e !== null; ) {
        if (n = e[Xe]) return n;
        e = Mo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pr(e) {
  return e = e[Xe] || e[it], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Sl(e) {
  return e[nr] || null;
}
var Di = [], Zt = -1;
function jt(e) {
  return { current: e };
}
function Y(e) {
  0 > Zt || (e.current = Di[Zt], Di[Zt] = null, Zt--);
}
function G(e, t) {
  Zt++, Di[Zt] = e.current, e.current = t;
}
var Ct = {}, me = jt(Ct), ke = jt(!1), At = Ct;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ee(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  Y(ke), Y(me);
}
function Po(e, t, n) {
  if (me.current !== Ct) throw Error(T(168));
  G(me, t), G(ke, n);
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(T(108, ld(e) || "Unknown", l));
  return q({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ct, At = me.current, G(me, e), G(ke, ke.current), !0;
}
function zo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n ? (e = wu(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, Y(ke), Y(me), G(me, e)) : Y(ke), G(ke, n);
}
var et = null, kl = !1, ql = !1;
function xu(e) {
  et === null ? et = [e] : et.push(e);
}
function Sf(e) {
  kl = !0, xu(e);
}
function Tt() {
  if (!ql && et !== null) {
    ql = !0;
    var e = 0, t = H;
    try {
      var n = et;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      et = null, kl = !1;
    } catch (l) {
      throw et !== null && (et = et.slice(e + 1)), Ha(fs, Tt), l;
    } finally {
      H = t, ql = !1;
    }
  }
  return null;
}
var qt = [], en = 0, ll = null, il = 0, Pe = [], ze = 0, bt = null, tt = 1, nt = "";
function Mt(e, t) {
  qt[en++] = il, qt[en++] = ll, ll = e, il = t;
}
function _u(e, t, n) {
  Pe[ze++] = tt, Pe[ze++] = nt, Pe[ze++] = bt, bt = e;
  var r = tt;
  e = nt;
  var l = 32 - We(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - We(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, tt = 1 << 32 - We(t) + l | n << l | r, nt = i + e;
  } else tt = 1 << i | n << l | r, nt = e;
}
function _s(e) {
  e.return !== null && (Mt(e, 1), _u(e, 1, 0));
}
function Ss(e) {
  for (; e === ll; ) ll = qt[--en], qt[en] = null, il = qt[--en], qt[en] = null;
  for (; e === bt; ) bt = Pe[--ze], Pe[ze] = null, nt = Pe[--ze], Pe[ze] = null, tt = Pe[--ze], Pe[ze] = null;
}
var Te = null, je = null, X = !1, Qe = null;
function Su(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Do(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, je = wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, je = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: tt, overflow: nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, je = null, !0) : !1;
    default:
      return !1;
  }
}
function Ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if (X) {
    var t = je;
    if (t) {
      var n = t;
      if (!Do(e, t)) {
        if (Ri(e)) throw Error(T(418));
        t = wt(n.nextSibling);
        var r = Te;
        t && Do(e, t) ? Su(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Te = e);
      }
    } else {
      if (Ri(e)) throw Error(T(418));
      e.flags = e.flags & -4097 | 2, X = !1, Te = e;
    }
  }
}
function Ro(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function Tr(e) {
  if (e !== Te) return !1;
  if (!X) return Ro(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t && (t = je)) {
    if (Ri(e)) throw ku(), Error(T(418));
    for (; t; ) Su(e, t), t = wt(t.nextSibling);
  }
  if (Ro(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Te ? wt(e.stateNode.nextSibling) : null;
  return !0;
}
function ku() {
  for (var e = je; e; ) e = wt(e.nextSibling);
}
function pn() {
  je = Te = null, X = !1;
}
function ks(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
var kf = at.ReactCurrentBatchConfig;
function Ln(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = l.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fo(e) {
  var t = e._init;
  return t(e._payload);
}
function Eu(e) {
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
    return d = kt(d, f), d.index = 0, d.sibling = null, d;
  }
  function i(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, p, C) {
    return f === null || f.tag !== 6 ? (f = si(p, d.mode, C), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function u(d, f, p, C) {
    var M = p.type;
    return M === Gt ? h(d, f, p.props.children, C, p.key) : f !== null && (f.elementType === M || typeof M == "object" && M !== null && M.$$typeof === ct && Fo(M) === f.type) ? (C = l(f, p.props), C.ref = Ln(d, f, p), C.return = d, C) : (C = Br(p.type, p.key, p.props, null, d.mode, C), C.ref = Ln(d, f, p), C.return = d, C);
  }
  function c(d, f, p, C) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = oi(p, d.mode, C), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function h(d, f, p, C, M) {
    return f === null || f.tag !== 7 ? (f = Ot(p, d.mode, C, M), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function g(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = si("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return p = Br(f.type, f.key, f.props, null, d.mode, p), p.ref = Ln(d, null, f), p.return = d, p;
        case Bt:
          return f = oi(f, d.mode, p), f.return = d, f;
        case ct:
          var C = f._init;
          return g(d, C(f._payload), p);
      }
      if (Dn(f) || Cn(f)) return f = Ot(f, d.mode, p, null), f.return = d, f;
      Ir(d, f);
    }
    return null;
  }
  function m(d, f, p, C) {
    var M = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return M !== null ? null : a(d, f, "" + p, C);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          return p.key === M ? u(d, f, p, C) : null;
        case Bt:
          return p.key === M ? c(d, f, p, C) : null;
        case ct:
          return M = p._init, m(
            d,
            f,
            M(p._payload),
            C
          );
      }
      if (Dn(p) || Cn(p)) return M !== null ? null : h(d, f, p, C, null);
      Ir(d, p);
    }
    return null;
  }
  function S(d, f, p, C, M) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return d = d.get(p) || null, a(f, d, "" + C, M);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case vr:
          return d = d.get(C.key === null ? p : C.key) || null, u(f, d, C, M);
        case Bt:
          return d = d.get(C.key === null ? p : C.key) || null, c(f, d, C, M);
        case ct:
          var k = C._init;
          return S(d, f, p, k(C._payload), M);
      }
      if (Dn(C) || Cn(C)) return d = d.get(p) || null, h(f, d, C, M, null);
      Ir(f, C);
    }
    return null;
  }
  function N(d, f, p, C) {
    for (var M = null, k = null, L = f, y = f = 0, D = null; L !== null && y < p.length; y++) {
      L.index > y ? (D = L, L = null) : D = L.sibling;
      var z = m(d, L, p[y], C);
      if (z === null) {
        L === null && (L = D);
        break;
      }
      e && L && z.alternate === null && t(d, L), f = i(z, f, y), k === null ? M = z : k.sibling = z, k = z, L = D;
    }
    if (y === p.length) return n(d, L), X && Mt(d, y), M;
    if (L === null) {
      for (; y < p.length; y++) L = g(d, p[y], C), L !== null && (f = i(L, f, y), k === null ? M = L : k.sibling = L, k = L);
      return X && Mt(d, y), M;
    }
    for (L = r(d, L); y < p.length; y++) D = S(L, d, y, p[y], C), D !== null && (e && D.alternate !== null && L.delete(D.key === null ? y : D.key), f = i(D, f, y), k === null ? M = D : k.sibling = D, k = D);
    return e && L.forEach(function(x) {
      return t(d, x);
    }), X && Mt(d, y), M;
  }
  function j(d, f, p, C) {
    var M = Cn(p);
    if (typeof M != "function") throw Error(T(150));
    if (p = M.call(p), p == null) throw Error(T(151));
    for (var k = M = null, L = f, y = f = 0, D = null, z = p.next(); L !== null && !z.done; y++, z = p.next()) {
      L.index > y ? (D = L, L = null) : D = L.sibling;
      var x = m(d, L, z.value, C);
      if (x === null) {
        L === null && (L = D);
        break;
      }
      e && L && x.alternate === null && t(d, L), f = i(x, f, y), k === null ? M = x : k.sibling = x, k = x, L = D;
    }
    if (z.done) return n(
      d,
      L
    ), X && Mt(d, y), M;
    if (L === null) {
      for (; !z.done; y++, z = p.next()) z = g(d, z.value, C), z !== null && (f = i(z, f, y), k === null ? M = z : k.sibling = z, k = z);
      return X && Mt(d, y), M;
    }
    for (L = r(d, L); !z.done; y++, z = p.next()) z = S(L, d, y, z.value, C), z !== null && (e && z.alternate !== null && L.delete(z.key === null ? y : z.key), f = i(z, f, y), k === null ? M = z : k.sibling = z, k = z);
    return e && L.forEach(function(v) {
      return t(d, v);
    }), X && Mt(d, y), M;
  }
  function R(d, f, p, C) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vr:
          e: {
            for (var M = p.key, k = f; k !== null; ) {
              if (k.key === M) {
                if (M = p.type, M === Gt) {
                  if (k.tag === 7) {
                    n(d, k.sibling), f = l(k, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (k.elementType === M || typeof M == "object" && M !== null && M.$$typeof === ct && Fo(M) === k.type) {
                  n(d, k.sibling), f = l(k, p.props), f.ref = Ln(d, k, p), f.return = d, d = f;
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === Gt ? (f = Ot(p.props.children, d.mode, C, p.key), f.return = d, d = f) : (C = Br(p.type, p.key, p.props, null, d.mode, C), C.ref = Ln(d, f, p), C.return = d, d = C);
          }
          return s(d);
        case Bt:
          e: {
            for (k = p.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = oi(p, d.mode, C), f.return = d, d = f;
          }
          return s(d);
        case ct:
          return k = p._init, R(d, f, k(p._payload), C);
      }
      if (Dn(p)) return N(d, f, p, C);
      if (Cn(p)) return j(d, f, p, C);
      Ir(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = si(p, d.mode, C), f.return = d, d = f), s(d)) : n(d, f);
  }
  return R;
}
var mn = Eu(!0), Cu = Eu(!1), sl = jt(null), ol = null, tn = null, Es = null;
function Cs() {
  Es = tn = ol = null;
}
function Ns(e) {
  var t = sl.current;
  Y(sl), e._currentValue = t;
}
function Oi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function un(e, t) {
  ol = e, Es = tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Oe(e) {
  var t = e._currentValue;
  if (Es !== e) if (e = { context: e, memoizedValue: t, next: null }, tn === null) {
    if (ol === null) throw Error(T(308));
    tn = e, ol.dependencies = { lanes: 0, firstContext: e };
  } else tn = tn.next = e;
  return t;
}
var Dt = null;
function js(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Nu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, js(t)) : (n.next = l.next, l.next = n), t.interleaved = n, st(e, r);
}
function st(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function Ts(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ju(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, st(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, js(r)) : (t.next = l.next, l.next = t), r.interleaved = t, st(e, n);
}
function $r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ps(e, n);
  }
}
function Oo(e, t) {
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
function al(e, t, n, r) {
  var l = e.updateQueue;
  dt = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a, c = u.next;
    u.next = null, s === null ? i = c : s.next = c, s = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, a = h.lastBaseUpdate, a !== s && (a === null ? h.firstBaseUpdate = c : a.next = c, h.lastBaseUpdate = u));
  }
  if (i !== null) {
    var g = l.baseState;
    s = 0, h = c = u = null, a = i;
    do {
      var m = a.lane, S = a.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var N = e, j = a;
          switch (m = t, S = n, j.tag) {
            case 1:
              if (N = j.payload, typeof N == "function") {
                g = N.call(S, g, m);
                break e;
              }
              g = N;
              break e;
            case 3:
              N.flags = N.flags & -65537 | 128;
            case 0:
              if (N = j.payload, m = typeof N == "function" ? N.call(S, g, m) : N, m == null) break e;
              g = q({}, g, m);
              break e;
            case 2:
              dt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a));
      } else S = { eventTime: S, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, h === null ? (c = h = S, u = g) : h = h.next = S, s |= m;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = g), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Ut |= s, e.lanes = s, e.memoizedState = g;
  }
}
function Ao(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(T(191, l));
      l.call(r);
    }
  }
}
var mr = {}, Ze = jt(mr), rr = jt(mr), lr = jt(mr);
function Rt(e) {
  if (e === mr) throw Error(T(174));
  return e;
}
function Is(e, t) {
  switch (G(lr, t), G(rr, e), G(Ze, mr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yi(t, e);
  }
  Y(Ze), G(Ze, t);
}
function hn() {
  Y(Ze), Y(rr), Y(lr);
}
function Tu(e) {
  Rt(lr.current);
  var t = Rt(Ze.current), n = yi(t, e.type);
  t !== n && (G(rr, e), G(Ze, n));
}
function Ls(e) {
  rr.current === e && (Y(Ze), Y(rr));
}
var J = jt(0);
function ul(e) {
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
var ei = [];
function Ms() {
  for (var e = 0; e < ei.length; e++) ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var Ur = at.ReactCurrentDispatcher, ti = at.ReactCurrentBatchConfig, $t = 0, Z = null, re = null, se = null, cl = !1, Vn = !1, ir = 0, Ef = 0;
function de() {
  throw Error(T(321));
}
function Ps(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function zs(e, t, n, r, l, i) {
  if ($t = i, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Tf : If, e = n(r, l), Vn) {
    i = 0;
    do {
      if (Vn = !1, ir = 0, 25 <= i) throw Error(T(301));
      i += 1, se = re = null, t.updateQueue = null, Ur.current = Lf, e = n(r, l);
    } while (Vn);
  }
  if (Ur.current = dl, t = re !== null && re.next !== null, $t = 0, se = re = Z = null, cl = !1, t) throw Error(T(300));
  return e;
}
function Ds() {
  var e = ir !== 0;
  return ir = 0, e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? Z.memoizedState = se = e : se = se.next = e, se;
}
function Ae() {
  if (re === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Z.memoizedState : se.next;
  if (t !== null) se = t, re = e;
  else {
    if (e === null) throw Error(T(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, se === null ? Z.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var a = s = null, u = null, c = i;
    do {
      var h = c.lane;
      if (($t & h) === h) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var g = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (a = u = g, s = r) : u = u.next = g, Z.lanes |= h, Ut |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? s = r : u.next = a, Be(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Z.lanes |= i, Ut |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Be(i, t.memoizedState) || (Se = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Iu() {
}
function Lu(e, t) {
  var n = Z, r = Ae(), l = t(), i = !Be(r.memoizedState, l);
  if (i && (r.memoizedState = l, Se = !0), r = r.queue, Rs(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, or(9, Pu.bind(null, n, r, l, t), void 0, null), oe === null) throw Error(T(349));
    $t & 30 || Mu(n, t, l);
  }
  return l;
}
function Mu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Du(t) && Ru(e);
}
function zu(e, t, n) {
  return n(function() {
    Du(t) && Ru(e);
  });
}
function Du(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Ru(e) {
  var t = st(e, 1);
  t !== null && He(t, e, 1, -1);
}
function bo(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = jf.bind(null, Z, e), [t.memoizedState, e];
}
function or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fu() {
  return Ae().memoizedState;
}
function Vr(e, t, n, r) {
  var l = Ye();
  Z.flags |= e, l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var l = Ae();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (i = s.destroy, r !== null && Ps(r, s.deps)) {
      l.memoizedState = or(t, n, i, r);
      return;
    }
  }
  Z.flags |= e, l.memoizedState = or(1 | t, n, i, r);
}
function $o(e, t) {
  return Vr(8390656, 8, e, t);
}
function Rs(e, t) {
  return El(2048, 8, e, t);
}
function Ou(e, t) {
  return El(4, 2, e, t);
}
function Au(e, t) {
  return El(4, 4, e, t);
}
function bu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $u(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, bu.bind(null, t, e), n);
}
function Fs() {
}
function Uu(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Vu(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ps(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qu(e, t, n) {
  return $t & 21 ? (Be(n, t) || (n = Ka(), Z.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Cf(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, ti.transition = r;
  }
}
function Wu() {
  return Ae().memoizedState;
}
function Nf(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Hu(e)) Bu(t, n);
  else if (n = Nu(e, t, n, r), n !== null) {
    var l = ye();
    He(n, e, r, l), Gu(n, t, r);
  }
}
function jf(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hu(e)) Bu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = a, Be(a, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, js(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Nu(e, t, l, r), n !== null && (l = ye(), He(n, e, r, l), Gu(n, t, r));
  }
}
function Hu(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function Bu(e, t) {
  Vn = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ps(e, n);
  }
}
var dl = { readContext: Oe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Tf = { readContext: Oe, useCallback: function(e, t) {
  return Ye().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Oe, useEffect: $o, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vr(
    4194308,
    4,
    bu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ye();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ye();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Nf.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ye();
  return e = { current: e }, t.memoizedState = e;
}, useState: bo, useDebugValue: Fs, useDeferredValue: function(e) {
  return Ye().memoizedState = e;
}, useTransition: function() {
  var e = bo(!1), t = e[0];
  return e = Cf.bind(null, e[1]), Ye().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, l = Ye();
  if (X) {
    if (n === void 0) throw Error(T(407));
    n = n();
  } else {
    if (n = t(), oe === null) throw Error(T(349));
    $t & 30 || Mu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, $o(zu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, or(9, Pu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ye(), t = oe.identifierPrefix;
  if (X) {
    var n = nt, r = tt;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ef++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, If = {
  readContext: Oe,
  useCallback: Uu,
  useContext: Oe,
  useEffect: Rs,
  useImperativeHandle: $u,
  useInsertionEffect: Ou,
  useLayoutEffect: Au,
  useMemo: Vu,
  useReducer: ni,
  useRef: Fu,
  useState: function() {
    return ni(sr);
  },
  useDebugValue: Fs,
  useDeferredValue: function(e) {
    var t = Ae();
    return Qu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ni(sr)[0], t = Ae().memoizedState;
    return [e, t];
  },
  useMutableSource: Iu,
  useSyncExternalStore: Lu,
  useId: Wu,
  unstable_isNewReconciler: !1
}, Lf = { readContext: Oe, useCallback: Uu, useContext: Oe, useEffect: Rs, useImperativeHandle: $u, useInsertionEffect: Ou, useLayoutEffect: Au, useMemo: Vu, useReducer: ri, useRef: Fu, useState: function() {
  return ri(sr);
}, useDebugValue: Fs, useDeferredValue: function(e) {
  var t = Ae();
  return re === null ? t.memoizedState = e : Qu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = ri(sr)[0], t = Ae().memoizedState;
  return [e, t];
}, useMutableSource: Iu, useSyncExternalStore: Lu, useId: Wu, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = q({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ai(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), i = rt(r, l);
  i.payload = t, n != null && (i.callback = n), t = xt(e, i, l), t !== null && (He(t, e, l, r), $r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), i = rt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = xt(e, i, l), t !== null && (He(t, e, l, r), $r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = St(e), l = rt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = xt(e, l, r), t !== null && (He(t, e, r, n), $r(t, e, r));
} };
function Uo(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
}
function Ku(e, t, n) {
  var r = !1, l = Ct, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Oe(i) : (l = Ee(t) ? At : me.current, r = t.contextTypes, i = (r = r != null) ? fn(e, l) : Ct), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Vo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ts(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Oe(i) : (i = Ee(t) ? At : me.current, l.context = fn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ai(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cl.enqueueReplaceState(l, l.state, null), al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += rd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function li(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Mf = typeof WeakMap == "function" ? WeakMap : Map;
function Yu(e, t, n) {
  n = rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, Xi = r), $i(e, t);
  }, n;
}
function Xu(e, t, n) {
  n = rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $i(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    $i(e, t), typeof r != "function" && (_t === null ? _t = /* @__PURE__ */ new Set([this]) : _t.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Qo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Hf.bind(null, e, t, n), t.then(e, e));
}
function Wo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ho(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, xt(n, t, 1))), n.lanes |= 1), e);
}
var Pf = at.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? Cu(t, null, n, r) : mn(t, e.child, n, r);
}
function Bo(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return un(t, l), r = zs(e, t, n, r, i, l), n = Ds(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (X && n && _s(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Go(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ws(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ju(e, t, i, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qn, n(s, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = kt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ju(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qn(i, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(rn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(rn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(rn, Ne), Ne |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(rn, Ne), Ne |= r;
  return he(e, t, l, n), t.child;
}
function qu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, l) {
  var i = Ee(n) ? At : me.current;
  return i = fn(t, i), un(t, l), n = zs(e, t, n, r, i, l), r = Ds(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (X && r && _s(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Ko(e, t, n, r, l) {
  if (Ee(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if (un(t, l), t.stateNode === null) Qr(e, t), Ku(t, n, r), bi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var u = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Oe(c) : (c = Ee(n) ? At : me.current, c = fn(t, c));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== c) && Vo(t, s, r, c), dt = !1;
    var m = t.memoizedState;
    s.state = m, al(t, r, s, l), u = t.memoizedState, a !== r || m !== u || ke.current || dt ? (typeof h == "function" && (Ai(t, n, h, r), u = t.memoizedState), (a = dt || Uo(t, n, a, r, m, u, c)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ju(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ue(t.type, a), s.props = c, g = t.pendingProps, m = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Oe(u) : (u = Ee(n) ? At : me.current, u = fn(t, u));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || m !== u) && Vo(t, s, r, u), dt = !1, m = t.memoizedState, s.state = m, al(t, r, s, l);
    var N = t.memoizedState;
    a !== g || m !== N || ke.current || dt ? (typeof S == "function" && (Ai(t, n, S, r), N = t.memoizedState), (c = dt || Uo(t, n, c, r, m, N, u) || !1) ? (h || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, N, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, N, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = N), s.props = r, s.state = N, s.context = u, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vi(e, t, n, r, i, l);
}
function Vi(e, t, n, r, l, i) {
  qu(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && zo(t, n, !1), ot(e, t, i);
  r = t.stateNode, Pf.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = mn(t, e.child, null, i), t.child = mn(t, null, a, i)) : he(e, t, a, i), t.memoizedState = r.state, l && zo(t, n, !0), t.child;
}
function ec(e) {
  var t = e.stateNode;
  t.pendingContext ? Po(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Po(e, t.context, !1), Is(e, t.containerInfo);
}
function Yo(e, t, n, r, l) {
  return pn(), ks(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, t, n) {
  var r = t.pendingProps, l = J.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), G(J, l & 1), e === null)
    return Fi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Tl(s, r, 0, null), e = Ot(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Wi(n), t.memoizedState = Qi, e) : Os(t, s));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return zf(e, t, s, r, a, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = kt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = kt(a, i) : (i = Ot(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Wi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return i = e.child, e = i.sibling, r = kt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Os(e, t) {
  return t = Tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lr(e, t, n, r) {
  return r !== null && ks(r), mn(t, e.child, null, n), e = Os(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function zf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = li(Error(T(422))), Lr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Tl({ mode: "visible", children: r.children }, l, 0, null), i = Ot(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mn(t, e.child, null, s), t.child.memoizedState = Wi(s), t.memoizedState = Qi, i);
  if (!(t.mode & 1)) return Lr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(T(419)), r = li(i, r, void 0), Lr(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, Se || a) {
    if (r = oe, r !== null) {
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, st(e, l), He(r, e, l, -1));
    }
    return Qs(), r = li(Error(T(421))), Lr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, je = wt(l.nextSibling), Te = t, X = !0, Qe = null, e !== null && (Pe[ze++] = tt, Pe[ze++] = nt, Pe[ze++] = bt, tt = e.id, nt = e.overflow, bt = t), t = Os(t, r.children), t.flags |= 4096, t);
}
function Xo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oi(e.return, t, n);
}
function ii(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (he(e, t, r.children, n), r = J.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xo(e, n, t);
      else if (e.tag === 19) Xo(e, n, t);
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
  if (G(J, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ii(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ii(t, !0, n, null, i);
      break;
    case "together":
      ii(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Df(e, t, n) {
  switch (t.tag) {
    case 3:
      ec(t), pn();
      break;
    case 5:
      Tu(t);
      break;
    case 1:
      Ee(t.type) && rl(t);
      break;
    case 4:
      Is(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      G(sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tc(e, t, n) : (G(J, J.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      G(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), G(J, J.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zu(e, t, n);
  }
  return ot(e, t, n);
}
var rc, Hi, lc, ic;
rc = function(e, t) {
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
Hi = function() {
};
lc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Ze.current);
    var i = null;
    switch (n) {
      case "input":
        l = pi(e, l), r = pi(e, r), i = [];
        break;
      case "select":
        l = q({}, l, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = gi(e, l), r = gi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
    }
    vi(n, r);
    var s;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var a = l[c];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Bn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== a && (u != null || a != null)) if (c === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Bn.hasOwnProperty(c) ? (u != null && c === "onScroll" && K("scroll", e), i || a === u || (i = [])) : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mn(e, t) {
  if (!X) switch (e.tailMode) {
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Rf(e, t, n) {
  var r = t.pendingProps;
  switch (Ss(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return Ee(t.type) && nl(), fe(t), null;
    case 3:
      return r = t.stateNode, hn(), Y(ke), Y(me), Ms(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (qi(Qe), Qe = null))), Hi(e, t), fe(t), null;
    case 5:
      Ls(t);
      var l = Rt(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return fe(t), null;
        }
        if (e = Rt(Ze.current), Tr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Xe] = t, r[nr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) K(Fn[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              lo(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              so(r, i), K("invalid", r);
          }
          vi(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && jr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Bn.hasOwnProperty(s) && a != null && s === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              wr(r), io(r, i, !0);
              break;
            case "textarea":
              wr(r), oo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Xe] = t, e[nr] = r, rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = wi(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) K(Fn[l], e);
                l = r;
                break;
              case "source":
                K("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), l = r;
                break;
              case "details":
                K("toggle", e), l = r;
                break;
              case "input":
                lo(e, r), l = pi(e, r), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = q({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                so(e, r), l = gi(e, r), K("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), a = l;
            for (i in a) if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "style" ? Fa(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Da(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Gn(e, u) : typeof u == "number" && Gn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Bn.hasOwnProperty(i) ? u != null && i === "onScroll" && K("scroll", e) : u != null && os(e, i, u, s));
            }
            switch (n) {
              case "input":
                wr(e), io(e, r, !1);
                break;
              case "textarea":
                wr(e), oo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ln(e, !!r.multiple, i, !1) : r.defaultValue != null && ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (n = Rt(lr.current), Rt(Ze.current), Tr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (i = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xe] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (Y(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && je !== null && t.mode & 1 && !(t.flags & 128)) ku(), pn(), t.flags |= 98560, i = !1;
        else if (i = Tr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(T(317));
            i[Xe] = t;
          } else pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), i = !1;
        } else Qe !== null && (qi(Qe), Qe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? le === 0 && (le = 3) : Qs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return hn(), Hi(e, t), e === null && er(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Ns(t.type._context), fe(t), null;
    case 17:
      return Ee(t.type) && nl(), fe(t), null;
    case 19:
      if (Y(J), i = t.memoizedState, i === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Mn(i, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ul(e), s !== null) {
            for (t.flags |= 128, Mn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && te() > yn && (t.flags |= 128, r = !0, Mn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !X) return fe(t), null;
        } else 2 * te() - i.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Mn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = te(), t.sibling = null, n = J.current, G(J, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Vs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Ff(e, t) {
  switch (Ss(t), t.tag) {
    case 1:
      return Ee(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hn(), Y(ke), Y(me), Ms(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ls(t), null;
    case 13:
      if (Y(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(T(340));
        pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Y(J), null;
    case 4:
      return hn(), null;
    case 10:
      return Ns(t.type._context), null;
    case 22:
    case 23:
      return Vs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1, pe = !1, Of = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function Bi(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Jo = !1;
function Af(e, t) {
  if (Ii = Zr, e = cu(), xs(e)) {
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
        var s = 0, a = -1, u = -1, c = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var S; g !== n || l !== 0 && g.nodeType !== 3 || (a = s + l), g !== i || r !== 0 && g.nodeType !== 3 || (u = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (S = g.firstChild) !== null; )
            m = g, g = S;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++c === l && (a = s), m === i && ++h === r && (u = s), (S = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = S;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, Zr = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var N = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (N !== null) {
            var j = N.memoizedProps, R = N.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? j : Ue(t.type, j), R);
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
          throw Error(T(163));
      }
    } catch (C) {
      ee(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return N = Jo, Jo = !1, N;
}
function Qn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Bi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
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
function Gi(e) {
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
function sc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[nr], delete t[zi], delete t[xf], delete t[_f])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
var ae = null, Ve = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) ac(e, t, n), n = n.sibling;
}
function ac(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || nn(n, t);
    case 6:
      var r = ae, l = Ve;
      ae = null, ut(e, t, n), ae = r, Ve = l, ae !== null && (Ve ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ve ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), Jn(e)) : Zl(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ve, ae = n.stateNode.containerInfo, Ve = !0, ut(e, t, n), ae = r, Ve = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Bi(n, t, s), l = l.next;
        } while (l !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (!pe && (nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ee(n, t, a);
      }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, ut(e, t, n), pe = r) : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function qo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Of()), t.forEach(function(r) {
      var l = Gf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ae = a.stateNode, Ve = !1;
            break e;
          case 3:
            ae = a.stateNode.containerInfo, Ve = !0;
            break e;
          case 4:
            ae = a.stateNode.containerInfo, Ve = !0;
            break e;
        }
        a = a.return;
      }
      if (ae === null) throw Error(T(160));
      ac(i, s, l), ae = null, Ve = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      ee(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uc(t, e), t = t.sibling;
}
function uc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (be(t, e), Ke(e), r & 4) {
        try {
          Qn(3, e, e.return), Nl(3, e);
        } catch (j) {
          ee(e, e.return, j);
        }
        try {
          Qn(5, e, e.return);
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 1:
      be(t, e), Ke(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (be(t, e), Ke(e), r & 512 && n !== null && nn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Gn(l, "");
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Ma(l, i), wi(a, s);
          var c = wi(a, i);
          for (s = 0; s < u.length; s += 2) {
            var h = u[s], g = u[s + 1];
            h === "style" ? Fa(l, g) : h === "dangerouslySetInnerHTML" ? Da(l, g) : h === "children" ? Gn(l, g) : os(l, h, g, c);
          }
          switch (a) {
            case "input":
              mi(l, i);
              break;
            case "textarea":
              Pa(l, i);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? ln(l, !!i.multiple, S, !1) : m !== !!i.multiple && (i.defaultValue != null ? ln(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ln(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[nr] = i;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 6:
      if (be(t, e), Ke(e), r & 4) {
        if (e.stateNode === null) throw Error(T(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (j) {
          ee(e, e.return, j);
        }
      }
      break;
    case 3:
      if (be(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (j) {
        ee(e, e.return, j);
      }
      break;
    case 4:
      be(t, e), Ke(e);
      break;
    case 13:
      be(t, e), Ke(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || ($s = te())), r & 4 && qo(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (c = pe) || h, be(t, e), pe = c) : be(t, e), Ke(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (g = P = h; P !== null; ) {
            switch (m = P, S = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qn(4, m, m.return);
                break;
              case 1:
                nn(m, m.return);
                var N = m.stateNode;
                if (typeof N.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                  } catch (j) {
                    ee(r, n, j);
                  }
                }
                break;
              case 5:
                nn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ta(g);
                  continue;
                }
            }
            S !== null ? (S.return = m, P = S) : ta(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                l = g.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = g.stateNode, u = g.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ra("display", s));
              } catch (j) {
                ee(e, e.return, j);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = c ? "" : g.memoizedProps;
            } catch (j) {
              ee(e, e.return, j);
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
      be(t, e), Ke(e), r & 4 && qo(e);
      break;
    case 21:
      break;
    default:
      be(
        t,
        e
      ), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ""), r.flags &= -33);
          var i = Zo(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Zo(e);
          Ki(e, a, s);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bf(e, t, n) {
  P = e, cc(e);
}
function cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Mr;
      if (!s) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || pe;
        a = Mr;
        var c = pe;
        if (Mr = s, (pe = u) && !c) for (P = l; P !== null; ) s = P, u = s.child, s.tag === 22 && s.memoizedState !== null ? na(l) : u !== null ? (u.return = s, P = u) : na(l);
        for (; i !== null; ) P = i, cc(i), i = i.sibling;
        P = l, Mr = a, pe = c;
      }
      ea(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : ea(e);
  }
}
function ea(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Nl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ao(t, i, r);
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
              Ao(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
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
                  g !== null && Jn(g);
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
            throw Error(T(163));
        }
        pe || t.flags & 512 && Gi(t);
      } catch (m) {
        ee(t, t.return, m);
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
function ta(e) {
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
function na(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (u) {
            ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ee(t, l, u);
            }
          }
          var i = t.return;
          try {
            Gi(t);
          } catch (u) {
            ee(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Gi(t);
          } catch (u) {
            ee(t, s, u);
          }
      }
    } catch (u) {
      ee(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, P = a;
      break;
    }
    P = t.return;
  }
}
var $f = Math.ceil, fl = at.ReactCurrentDispatcher, As = at.ReactCurrentOwner, Fe = at.ReactCurrentBatchConfig, Q = 0, oe = null, ne = null, ue = 0, Ne = 0, rn = jt(0), le = 0, ar = null, Ut = 0, jl = 0, bs = 0, Wn = null, _e = null, $s = 0, yn = 1 / 0, qe = null, pl = !1, Xi = null, _t = null, Pr = !1, ht = null, ml = 0, Hn = 0, Ji = null, Wr = -1, Hr = 0;
function ye() {
  return Q & 6 ? te() : Wr !== -1 ? Wr : Wr = te();
}
function St(e) {
  return e.mode & 1 ? Q & 2 && ue !== 0 ? ue & -ue : kf.transition !== null ? (Hr === 0 && (Hr = Ka()), Hr) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tu(e.type)), e) : 1;
}
function He(e, t, n, r) {
  if (50 < Hn) throw Hn = 0, Ji = null, Error(T(185));
  dr(e, n, r), (!(Q & 2) || e !== oe) && (e === oe && (!(Q & 2) && (jl |= n), le === 4 && pt(e, ue)), Ce(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (yn = te() + 500, kl && Tt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Sd(e, t);
  var r = Jr(e, e === oe ? ue : 0);
  if (r === 0) n !== null && co(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && co(n), t === 1) e.tag === 0 ? Sf(ra.bind(null, e)) : xu(ra.bind(null, e)), vf(function() {
      !(Q & 6) && Tt();
    }), n = null;
    else {
      switch (Ya(r)) {
        case 1:
          n = fs;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Ga;
          break;
        default:
          n = Xr;
      }
      n = vc(n, dc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function dc(e, t) {
  if (Wr = -1, Hr = 0, Q & 6) throw Error(T(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = pc();
    (oe !== e || ue !== t) && (qe = null, yn = te() + 500, Ft(e, t));
    do
      try {
        Qf();
        break;
      } catch (a) {
        fc(e, a);
      }
    while (!0);
    Cs(), fl.current = i, Q = l, ne !== null ? t = 0 : (oe = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ei(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1) throw n = ar, Ft(e, 0), pt(e, r), Ce(e, te()), n;
    if (t === 6) pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Uf(l) && (t = hl(e, r), t === 2 && (i = Ei(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = ar, Ft(e, 0), pt(e, r), Ce(e, te()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Pt(e, _e, qe);
          break;
        case 3:
          if (pt(e, r), (r & 130023424) === r && (t = $s + 500 - te(), 10 < t)) {
            if (Jr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pi(Pt.bind(null, e, _e, qe), t);
            break;
          }
          Pt(e, _e, qe);
          break;
        case 4:
          if (pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - We(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $f(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pi(Pt.bind(null, e, _e, qe), r);
            break;
          }
          Pt(e, _e, qe);
          break;
        case 5:
          Pt(e, _e, qe);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ce(e, te()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Wn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = _e, _e = n, t !== null && qi(t)), e;
}
function qi(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Uf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Be(i(), l)) return !1;
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
function pt(e, t) {
  for (t &= ~bs, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ra(e) {
  if (Q & 6) throw Error(T(327));
  cn();
  var t = Jr(e, 0);
  if (!(t & 1)) return Ce(e, te()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = ar, Ft(e, 0), pt(e, t), Ce(e, te()), n;
  if (n === 6) throw Error(T(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, _e, qe), Ce(e, te()), null;
}
function Us(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (yn = te() + 500, kl && Tt());
  }
}
function Vt(e) {
  ht !== null && ht.tag === 0 && !(Q & 6) && cn();
  var t = Q;
  Q |= 1;
  var n = Fe.transition, r = H;
  try {
    if (Fe.transition = null, H = 1, e) return e();
  } finally {
    H = r, Fe.transition = n, Q = t, !(Q & 6) && Tt();
  }
}
function Vs() {
  Ne = rn.current, Y(rn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yf(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (Ss(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        hn(), Y(ke), Y(me), Ms();
        break;
      case 5:
        Ls(r);
        break;
      case 4:
        hn();
        break;
      case 13:
        Y(J);
        break;
      case 19:
        Y(J);
        break;
      case 10:
        Ns(r.type._context);
        break;
      case 22:
      case 23:
        Vs();
    }
    n = n.return;
  }
  if (oe = e, ne = e = kt(e.current, null), ue = Ne = t, le = 0, ar = null, bs = jl = Ut = 0, _e = Wn = null, Dt !== null) {
    for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    Dt = null;
  }
  return e;
}
function fc(e, t) {
  do {
    var n = ne;
    try {
      if (Cs(), Ur.current = dl, cl) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if ($t = 0, se = re = Z = null, Vn = !1, ir = 0, As.current = null, n === null || n.return === null) {
        le = 1, ar = t, ne = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, u = t;
        if (t = ue, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, h = a, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = Wo(s);
          if (S !== null) {
            S.flags &= -257, Ho(S, s, a, i, t), S.mode & 1 && Qo(i, c, t), t = S, u = c;
            var N = t.updateQueue;
            if (N === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(u), t.updateQueue = j;
            } else N.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Qo(i, c, t), Qs();
              break e;
            }
            u = Error(T(426));
          }
        } else if (X && a.mode & 1) {
          var R = Wo(s);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Ho(R, s, a, i, t), ks(gn(u, a));
            break e;
          }
        }
        i = u = gn(u, a), le !== 4 && (le = 2), Wn === null ? Wn = [i] : Wn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Yu(i, u, t);
              Oo(i, d);
              break e;
            case 1:
              a = u;
              var f = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (_t === null || !_t.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Xu(i, a, t);
                Oo(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      hc(n);
    } catch (M) {
      t = M, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pc() {
  var e = fl.current;
  return fl.current = dl, e === null ? dl : e;
}
function Qs() {
  (le === 0 || le === 3 || le === 2) && (le = 4), oe === null || !(Ut & 268435455) && !(jl & 268435455) || pt(oe, ue);
}
function hl(e, t) {
  var n = Q;
  Q |= 2;
  var r = pc();
  (oe !== e || ue !== t) && (qe = null, Ft(e, t));
  do
    try {
      Vf();
      break;
    } catch (l) {
      fc(e, l);
    }
  while (!0);
  if (Cs(), Q = n, fl.current = r, ne !== null) throw Error(T(261));
  return oe = null, ue = 0, le;
}
function Vf() {
  for (; ne !== null; ) mc(ne);
}
function Qf() {
  for (; ne !== null && !pd(); ) mc(ne);
}
function mc(e) {
  var t = yc(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? hc(e) : ne = t, As.current = null;
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ff(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, ne = null;
        return;
      }
    } else if (n = Rf(n, t, Ne), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Pt(e, t, n) {
  var r = H, l = Fe.transition;
  try {
    Fe.transition = null, H = 1, Wf(e, t, n, r);
  } finally {
    Fe.transition = l, H = r;
  }
  return null;
}
function Wf(e, t, n, r) {
  do
    cn();
  while (ht !== null);
  if (Q & 6) throw Error(T(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (kd(e, i), e === oe && (ne = oe = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, vc(Xr, function() {
    return cn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Fe.transition, Fe.transition = null;
    var s = H;
    H = 1;
    var a = Q;
    Q |= 4, As.current = null, Af(e, n), uc(n, e), cf(Li), Zr = !!Ii, Li = Ii = null, e.current = n, bf(n), md(), Q = a, H = s, Fe.transition = i;
  } else e.current = n;
  if (Pr && (Pr = !1, ht = e, ml = l), i = e.pendingLanes, i === 0 && (_t = null), yd(n.stateNode), Ce(e, te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = Xi, Xi = null, e;
  return ml & 1 && e.tag !== 0 && cn(), i = e.pendingLanes, i & 1 ? e === Ji ? Hn++ : (Hn = 0, Ji = e) : Hn = 0, Tt(), null;
}
function cn() {
  if (ht !== null) {
    var e = Ya(ml), t = Fe.transition, n = H;
    try {
      if (Fe.transition = null, H = 16 > e ? 16 : e, ht === null) var r = !1;
      else {
        if (e = ht, ht = null, ml = 0, Q & 6) throw Error(T(331));
        var l = Q;
        for (Q |= 4, P = e.current; P !== null; ) {
          var i = P, s = i.child;
          if (P.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (P = c; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qn(8, h, i);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, P = g;
                  else for (; P !== null; ) {
                    h = P;
                    var m = h.sibling, S = h.return;
                    if (sc(h), h === c) {
                      P = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = S, P = m;
                      break;
                    }
                    P = S;
                  }
                }
              }
              var N = i.alternate;
              if (N !== null) {
                var j = N.child;
                if (j !== null) {
                  N.child = null;
                  do {
                    var R = j.sibling;
                    j.sibling = null, j = R;
                  } while (j !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, P = s;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Qn(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, P = d;
              break e;
            }
            P = i.return;
          }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          s = P;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, P = p;
          else e: for (s = f; P !== null; ) {
            if (a = P, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Nl(9, a);
              }
            } catch (M) {
              ee(a, a.return, M);
            }
            if (a === s) {
              P = null;
              break e;
            }
            var C = a.sibling;
            if (C !== null) {
              C.return = a.return, P = C;
              break e;
            }
            P = a.return;
          }
        }
        if (Q = l, Tt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, Fe.transition = t;
    }
  }
  return !1;
}
function la(e, t, n) {
  t = gn(n, t), t = Yu(e, t, 1), e = xt(e, t, 1), t = ye(), e !== null && (dr(e, 1, t), Ce(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) la(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      la(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
        e = gn(n, e), e = Xu(t, e, 1), t = xt(t, e, 1), e = ye(), t !== null && (dr(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Hf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > te() - $s ? Ft(e, 0) : bs |= n), Ce(e, t);
}
function gc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Sr, Sr <<= 1, !(Sr & 130023424) && (Sr = 4194304)) : t = 1);
  var n = ye();
  e = st(e, t), e !== null && (dr(e, t, n), Ce(e, n));
}
function Bf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), gc(e, n);
}
function Gf(e, t) {
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
      throw Error(T(314));
  }
  r !== null && r.delete(t), gc(e, n);
}
var yc;
yc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Df(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, X && t.flags & 1048576 && _u(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Qr(e, t), e = t.pendingProps;
      var l = fn(t, me.current);
      un(t, n), l = zs(null, t, r, e, l, n);
      var i = Ds();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ee(r) ? (i = !0, rl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ts(t), l.updater = Cl, t.stateNode = l, l._reactInternals = t, bi(t, r, e, n), t = Vi(null, t, r, !0, i, n)) : (t.tag = 0, X && i && _s(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Yf(r), e = Ue(r, e), l) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = Ko(null, t, r, e, n);
            break e;
          case 11:
            t = Bo(null, t, r, e, n);
            break e;
          case 14:
            t = Go(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(T(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Ko(e, t, r, l, n);
    case 3:
      e: {
        if (ec(t), e === null) throw Error(T(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ju(e, t), al(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = gn(Error(T(423)), t), t = Yo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = gn(Error(T(424)), t), t = Yo(e, t, r, n, l);
          break e;
        } else for (je = wt(t.stateNode.containerInfo.firstChild), Te = t, X = !0, Qe = null, n = Cu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (pn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tu(t), e === null && Fi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Mi(r, l) ? s = null : i !== null && Mi(r, i) && (t.flags |= 32), qu(e, t), he(e, t, s, n), t.child;
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return tc(e, t, n);
    case 4:
      return Is(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Bo(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, G(sl, r._currentValue), r._currentValue = s, i !== null) if (Be(i.value, s)) {
          if (i.children === l.children && !ke.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = rt(-1, n & -n), u.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), c.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Oi(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(T(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Oi(s, n, t), s = i.sibling;
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
        he(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, un(t, n), l = Oe(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ue(r, t.pendingProps), l = Ue(r.type, l), Go(e, t, r, l, n);
    case 15:
      return Ju(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Qr(e, t), t.tag = 1, Ee(r) ? (e = !0, rl(t)) : e = !1, un(t, n), Ku(t, r, l), bi(t, r, l, n), Vi(null, t, r, !0, e, n);
    case 19:
      return nc(e, t, n);
    case 22:
      return Zu(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function vc(e, t) {
  return Ha(e, t);
}
function Kf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new Kf(e, t, n, r);
}
function Ws(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Yf(e) {
  if (typeof e == "function") return Ws(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === us) return 11;
    if (e === cs) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Br(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Ws(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Gt:
      return Ot(n.children, l, i, t);
    case as:
      s = 8, l |= 8;
      break;
    case ui:
      return e = De(12, n, t, l | 2), e.elementType = ui, e.lanes = i, e;
    case ci:
      return e = De(13, n, t, l), e.elementType = ci, e.lanes = i, e;
    case di:
      return e = De(19, n, t, l), e.elementType = di, e.lanes = i, e;
    case Ta:
      return Tl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Na:
          s = 10;
          break e;
        case ja:
          s = 9;
          break e;
        case us:
          s = 11;
          break e;
        case cs:
          s = 14;
          break e;
        case ct:
          s = 16, r = null;
          break e;
      }
      throw Error(T(130, e == null ? e : typeof e, ""));
  }
  return t = De(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ot(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Tl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Ta, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function oi(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Hs(e, t, n, r, l, i, s, a, u) {
  return e = new Xf(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ts(i), e;
}
function Jf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wc(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return wu(e, n, t);
  }
  return t;
}
function xc(e, t, n, r, l, i, s, a, u) {
  return e = Hs(n, r, !0, e, l, i, s, a, u), e.context = wc(null), n = e.current, r = ye(), l = St(n), i = rt(r, l), i.callback = t ?? null, xt(n, i, l), e.current.lanes = l, dr(e, l, r), Ce(e, r), e;
}
function Il(e, t, n, r) {
  var l = t.current, i = ye(), s = St(l);
  return n = wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xt(l, t, s), e !== null && (He(e, l, s, i), $r(e, l, s)), s;
}
function gl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ia(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bs(e, t) {
  ia(e, t), (e = e.alternate) && ia(e, t);
}
function Zf() {
  return null;
}
var _c = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gs(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Gs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Il(e, t, null, null);
};
Ll.prototype.unmount = Gs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      Il(null, e, null, null);
    }), t[it] = null;
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Za();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++) ;
    ft.splice(n, 0, e), n === 0 && eu(e);
  }
};
function Ks(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function sa() {
}
function qf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = gl(s);
        i.call(c);
      };
    }
    var s = xc(t, r, e, 0, null, !1, !1, "", sa);
    return e._reactRootContainer = s, e[it] = s.current, er(e.nodeType === 8 ? e.parentNode : e), Vt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var c = gl(u);
      a.call(c);
    };
  }
  var u = Hs(e, 0, !1, null, null, !1, !1, "", sa);
  return e._reactRootContainer = u, e[it] = u.current, er(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    Il(t, u, n, r);
  }), u;
}
function Pl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = gl(s);
        a.call(u);
      };
    }
    Il(t, s, e, l);
  } else s = qf(n, t, e, l, r);
  return gl(s);
}
Xa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 && (ps(t, n | 1), Ce(t, te()), !(Q & 6) && (yn = te() + 500, Tt()));
      }
      break;
    case 13:
      Vt(function() {
        var r = st(e, 1);
        if (r !== null) {
          var l = ye();
          He(r, e, 1, l);
        }
      }), Bs(e, 1);
  }
};
ms = function(e) {
  if (e.tag === 13) {
    var t = st(e, 134217728);
    if (t !== null) {
      var n = ye();
      He(t, e, 134217728, n);
    }
    Bs(e, 134217728);
  }
};
Ja = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = st(e, t);
    if (n !== null) {
      var r = ye();
      He(n, e, t, r);
    }
    Bs(e, t);
  }
};
Za = function() {
  return H;
};
qa = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
_i = function(e, t, n) {
  switch (t) {
    case "input":
      if (mi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(T(90));
            La(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Pa(e, n);
      break;
    case "select":
      t = n.value, t != null && ln(e, !!n.multiple, t, !1);
  }
};
ba = Us;
$a = Vt;
var ep = { usingClientEntryPoint: !1, Events: [pr, Jt, Sl, Oa, Aa, Us] }, Pn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tp = { bundleType: Pn.bundleType, version: Pn.version, rendererPackageName: Pn.rendererPackageName, rendererConfig: Pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: at.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pn.findFiberByHostInstance || Zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    vl = zr.inject(tp), Je = zr;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ks(t)) throw Error(T(200));
  return Jf(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!Ks(e)) throw Error(T(299));
  var n = !1, r = "", l = _c;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Hs(e, 1, !1, null, null, n, !1, r, l), e[it] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Gs(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
  return e = Qa(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return Vt(e);
};
Le.hydrate = function(e, t, n) {
  if (!Ml(t)) throw Error(T(200));
  return Pl(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!Ks(e)) throw Error(T(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = _c;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = xc(t, null, e, 1, n ?? null, l, !1, i, s), e[it] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ll(t);
};
Le.render = function(e, t, n) {
  if (!Ml(t)) throw Error(T(200));
  return Pl(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!Ml(e)) throw Error(T(40));
  return e._reactRootContainer ? (Vt(function() {
    Pl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[it] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = Us;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ml(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Pl(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Sc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), Sa.exports = Le;
var kn = Sa.exports, kc, oa = kn;
kc = oa.createRoot, oa.hydrateRoot;
window.api = V;
const np = async () => {
  const e = await V.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, es = async (e = 0, t = 30, n = "", r = "default") => {
  const l = await V.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}`
  );
  if (!l.ok)
    throw new Error(`Failed to fetch images: ${l.statusText}`);
  return await l.json();
}, rp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await V.fetchApi(n);
  return r.ok ? await r.json() : [];
}, lp = async () => {
  const e = await V.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Ec = async () => {
  const e = await V.fetchApi("/meld/settings");
  return e.ok ? await e.json() : {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_dimensions": !0,
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
    "fullscreen.details.show_filename": !0,
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": !0,
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
    "gallery.matching_strategy": "phash_created",
    "gallery.lineage_max_depth": 5,
    "gallery.trash_retention_days": 30
  };
}, ip = async (e, t) => {
  if (!(await V.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, sp = async (e, t) => {
  if (!(await V.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, op = async (e, t = 12) => {
  const n = await V.fetchApi(
    `/meld/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, Cc = async (e) => {
  const t = await V.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, ap = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await V.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, aa = async (e, t = !1) => {
  const n = await V.fetchApi("/meld/bulk-delete", {
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
}, up = async (e) => {
  const t = await V.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to restore images");
  }
}, Nc = async (e) => {
  const t = await V.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, cp = async (e, t, n = !1, r) => {
  const l = await V.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, dp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await V.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, fp = async (e, t, n) => {
  const r = await V.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, pp = async (e) => {
  const t = await V.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, mp = async () => {
  if (!(await V.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, hp = async () => {
  const e = await V.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, gp = async (e, t) => {
  if (!(await V.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, ua = async (e) => {
  if (!(await V.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, yp = async (e, t) => {
  if (!(await V.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, Ys = async () => {
  const e = await V.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, vp = async (e) => {
  const t = await V.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, wp = async (e) => {
  if (!(await V.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, xp = async (e, t) => {
  const n = await V.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, _p = async (e, t) => {
  if (!(await V.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Sp = async (e, t, n) => {
  if (!(await V.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, kp = async (e) => {
  const t = await V.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Ep = async (e) => {
  const t = await V.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var jc = { exports: {} }, zl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = E, Np = Symbol.for("react.element"), jp = Symbol.for("react.fragment"), Tp = Object.prototype.hasOwnProperty, Ip = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Tp.call(t, r) && !Lp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Np, type: e, key: i, ref: s, props: l, _owner: Ip.current };
}
zl.Fragment = jp;
zl.jsx = Tc;
zl.jsxs = Tc;
jc.exports = zl;
var o = jc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mp = {
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
const Pp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), W = (e, t) => {
  const n = E.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: a = "",
      children: u,
      ...c
    }, h) => E.createElement(
      "svg",
      {
        ref: h,
        ...Mp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Pp(e)}`, a].join(" "),
        ...c
      },
      [
        ...t.map(([g, m]) => E.createElement(g, m)),
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
const zp = W("AlertTriangle", [
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
const Dp = W("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = W("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = W("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = W("Box", [
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
const Op = W("Calendar", [
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
const Ap = W("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = W("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = W("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = W("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = W("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = W("Download", [
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
const Up = W("Folder", [
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
const Vp = W("Info", [
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
const Qp = W("LayoutGrid", [
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
const Wp = W("Maximize", [
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
const Hp = W("Minimize", [
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
const Bp = W("MoreVertical", [
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
const Pc = W("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = W("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = W("PlusCircle", [
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
const Xs = W("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = W("RefreshCw", [
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
const vn = W("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = W("Settings", [
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
const Xp = W("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = W("Star", [
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
const En = W("Tag", [
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
const wn = W("Trash2", [
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
const Jp = W("Type", [
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
const Zp = W("Upload", [
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
const ve = W("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let yl = !1;
const qp = (e) => {
  yl = e, yl && console.log("[Meld] Logger initialized in DEV mode.");
}, em = (...e) => {
  yl && console.log("[Meld]", ...e);
}, tm = (...e) => {
  yl && console.warn("[Meld]", ...e);
}, nm = (...e) => {
  console.error("[Meld]", ...e);
}, ge = {
  log: em,
  warn: tm,
  error: nm,
  init: qp
}, rm = {
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
    totalCount: 0
  },
  settings: {
    dev_mode: !1,
    "gallery.show_parent_image": !0,
    "gallery.hide_parent_images": !0,
    "sidebar.show_filename": !0,
    "sidebar.show_dimensions": !0,
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
    "fullscreen.details.show_filename": !0,
    "fullscreen.details.show_dimensions": !0,
    "fullscreen.details.show_created_at": !0,
    "fullscreen.details.show_tags": !0,
    "fullscreen.details.show_model_name": !0,
    "fullscreen.details.show_positive_prompt": !0,
    "fullscreen.details.show_negative_prompt": !0,
    "fullscreen.details.max_positive_prompt_lines": 7,
    "fullscreen.details.max_negative_prompt_lines": 7,
    "viewer.show_details_by_default": !0,
    "viewer.details.show_filename": !0,
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
    "gallery.matching_strategy": "phash_created",
    "gallery.lineage_max_depth": 5,
    "gallery.trash_retention_days": 30
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
function lm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload;
      let a = e.viewerImageId;
      return e.viewerMode === "gallery" && a !== null && !l.some((u) => u.id === a) && (a = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: a,
        pagination: {
          total: i,
          offset: s,
          limit: e.pagination.limit,
          hasMore: s + l.length < i
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: i, offset: s } = t.payload, a = [...e.images, ...l], u = Array.from(
        new Map(a.map((c) => [c.id, c])).values()
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
        const c = new Set(e.selectedIds);
        return c.add(t.payload), {
          ...e,
          selectedIds: c,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (c) => c.id === e.lastSelectedId
      ), i = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || i === -1) return e;
      const [s, a] = [
        Math.min(l, i),
        Math.max(l, i)
      ], u = new Set(e.selectedIds);
      for (let c = s; c <= a; c++)
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
      const l = t.payload, i = typeof l == "number" ? l : l.id, s = typeof l == "number" ? "gallery" : l.mode, a = e.viewerMode === "lineage" && s === "lineage" && e.lineageImages.some((u) => u.id === i);
      return {
        ...e,
        viewerImageId: i,
        viewerMode: s,
        lineageImages: a ? e.lineageImages : []
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (a === -1 || a === s.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || a === s.length - 1 && !i)
        return e;
      const u = (a + 1) % s.length;
      return {
        ...e,
        viewerImageId: s[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const i = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], s = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
      );
      if (e.viewerImageId === null || s.length === 0)
        return e;
      const a = s.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (a === -1 || a === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || a === 0 && !i)
        return e;
      const u = (a - 1 + s.length) % s.length;
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
const zc = E.createContext(void 0), im = ({
  children: e
}) => {
  const [t, n] = E.useReducer(lm, rm), r = E.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const c = await es(
        0,
        t.pagination.limit,
        t.searchQuery,
        t.viewScope
      );
      n({ type: "SET_IMAGES", payload: c });
    } catch (c) {
      n({
        type: "SET_ERROR",
        payload: c instanceof Error ? c.message : String(c)
      });
    }
  }, [t.pagination.limit, t.searchQuery, t.viewScope]), l = E.useCallback(async () => {
    if (!(t.isLoading || !t.pagination.hasMore)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        const c = t.images.length, h = await es(
          c,
          t.pagination.limit,
          t.searchQuery,
          t.viewScope
        );
        n({ type: "APPEND_IMAGES", payload: h });
      } catch (c) {
        n({
          type: "SET_ERROR",
          payload: c instanceof Error ? c.message : String(c)
        });
      }
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.images.length,
    t.searchQuery,
    t.viewScope
  ]), i = E.useCallback(async () => {
    try {
      const c = await hp();
      n({ type: "SET_FAVORITES", payload: c });
    } catch (c) {
      ge.error("Failed to load favorites", c);
    }
  }, []), s = E.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds), g = t.images.filter(
      (m) => t.selectedIds.has(m.id)
    ).some(
      (m) => m.parent_id || m.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: c,
        hasLineage: g,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), a = E.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const c = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 }), await up(c), n({ type: "CLEAR_SELECTION" }), await r();
    } catch (h) {
      n({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      });
    }
  }, [t.selectedIds, r]), u = E.useCallback(
    async (c, h) => {
      try {
        await ip(c, h), n({ type: "SET_SETTINGS", payload: { [c]: h } });
      } catch (g) {
        n({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
        });
      }
    },
    []
  );
  return E.useEffect(() => {
    (async () => {
      try {
        const h = await Ec();
        n({ type: "SET_SETTINGS", payload: h });
      } catch (h) {
        ge.error("Failed to load settings", h);
      }
    })();
  }, []), E.useEffect(() => {
    i();
  }, [i]), E.useEffect(() => {
    const c = () => {
      r();
    }, h = (m) => {
      const S = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: S }
      });
    }, g = (m) => {
      const S = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: S.new_count || 0,
          totalCount: S.total_count || 0,
          progress: {
            current: S.total_count || t.scanStatus.progress.total,
            total: S.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), r();
    };
    return window.addEventListener("meld-refresh", c), window.addEventListener("meld-scan-progress", h), window.addEventListener("meld-scan-finished", g), () => {
      window.removeEventListener("meld-refresh", c), window.removeEventListener("meld-scan-progress", h), window.removeEventListener("meld-scan-finished", g);
    };
  }, [r, t.scanStatus.progress.total]), E.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ o.jsx(
    zc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: i,
        deleteSelected: s,
        restoreSelected: a,
        updateSetting: u
      },
      children: e
    }
  );
}, Ge = () => {
  const e = E.useContext(zc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, sm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = E.useState(!1), i = E.useRef(null);
  return E.useEffect(() => {
    const s = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), a = i.current;
    return a && s.observe(a), () => {
      a && s.unobserve(a);
    };
  }, [n]), /* @__PURE__ */ o.jsx(
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
}, om = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ge(), l = e.selectedIds.size;
  if (l === 0) return null;
  const i = e.viewScope === "trash", s = () => {
    const a = e.images.filter(
      (c) => e.selectedIds.has(c.id)
    ), u = /* @__PURE__ */ new Set();
    for (const c of a)
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
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ o.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        i ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ o.jsx(
                  ur,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ o.jsx(
                  wn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: s,
              children: [
                /* @__PURE__ */ o.jsx(
                  En,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ o.jsx(
                  wn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ o.jsx(ve, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, am = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1
}) => {
  const { dispatch: r, refreshImages: l } = Ge(), i = () => {
    r({ type: "CLOSE_MODAL" });
  }, s = async () => {
    try {
      r({ type: "SET_LOADING", payload: !0 }), await aa(e, n), r({ type: "CLEAR_SELECTION" }), r({ type: "CLOSE_MODAL" }), await l();
    } catch (u) {
      r({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      }), r({ type: "SET_LOADING", payload: !1 });
    }
  }, a = async () => {
    try {
      r({ type: "SET_LOADING", payload: !0 });
      const u = new Set(e);
      for (const c of e) {
        const h = await Cc(c);
        for (const g of h)
          u.add(g.id);
      }
      await aa(Array.from(u), n), r({ type: "CLEAR_SELECTION" }), r({ type: "CLOSE_MODAL" }), await l();
    } catch (u) {
      r({
        type: "SET_ERROR",
        payload: u instanceof Error ? u.message : String(u)
      }), r({ type: "SET_LOADING", payload: !1 });
    }
  };
  return kn.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: i, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (u) => u.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ o.jsx(wn, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: i,
                children: /* @__PURE__ */ o.jsx(ve, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsxs(
            "div",
            {
              style: {
                padding: "10px 0",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              },
              children: [
                /* @__PURE__ */ o.jsxs("p", { children: [
                  "Are you sure you want to",
                  " ",
                  n ? "permanently delete" : "move to trash",
                  " ",
                  /* @__PURE__ */ o.jsx("strong", { children: e.length }),
                  " selected items?"
                ] }),
                /* @__PURE__ */ o.jsxs(
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
                      /* @__PURE__ */ o.jsx(
                        zp,
                        {
                          size: 20,
                          style: {
                            color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                            flexShrink: 0
                          }
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                        /* @__PURE__ */ o.jsx("strong", { children: "WARNING:" }),
                        " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                        /* @__PURE__ */ o.jsx("strong", { children: "INFO:" }),
                        " Selected items will be moved to the trash bin. You can restore them later from the settings."
                      ] }) })
                    ]
                  }
                ),
                t && /* @__PURE__ */ o.jsxs(
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
                      /* @__PURE__ */ o.jsx("strong", { children: "Source" }),
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  onClick: s,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: a,
                  children: n ? "Delete All Related" : "Move All Related"
                }
              )
            ] })
          ] })
        ]
      }
    ) }),
    document.body
  );
}, Re = (e) => {
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
}, um = ({ image: e }) => {
  const { state: t, dispatch: n } = Ge(), r = t.selectedIds.has(e.id), [l, i] = E.useState(null), [s, a] = E.useState(!1), [u, c] = E.useState(null), [h, g] = E.useState(!1), m = E.useRef(null), S = async (y, D, z = !1) => {
    try {
      await navigator.clipboard.writeText(y), z ? (g(!0), setTimeout(() => g(!1), 2e3)) : (c(D), setTimeout(() => c(null), 2e3));
    } catch (x) {
      console.error("Failed to copy text: ", x);
    }
  };
  E.useEffect(() => {
    const y = (D) => {
      m.current && !m.current.contains(D.target) && a(!1);
    };
    return s && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [s]);
  const N = (y) => {
    const D = t.settings["gallery.lineage_max_depth"];
    if (D === 0) return [];
    if (y.ancestors && y.ancestors.length > 0)
      return y.ancestors.slice(0, D).map((_) => ({
        id: _.id,
        imgSrc: Re(_)
      }));
    const z = y.parent_id;
    if (!z || !y.parent_filename) return [];
    const x = t.images.find((_) => _.id === z);
    let v = null;
    if (x ? v = Re(x) : v = Re({
      filename: y.parent_filename,
      subfolder: y.parent_subfolder || "",
      type: y.parent_type
    }), !v) return [];
    const w = {
      id: z || null,
      imgSrc: v
    };
    if (x && D > 1) {
      const _ = N(x);
      return [w, ..._].slice(0, D);
    }
    return [w];
  }, j = N(e), R = e.filename, d = Re(e), f = (y) => {
    y.shiftKey ? (y.preventDefault(), y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : y.ctrlKey || y.metaKey || t.selectedIds.size > 0 ? (y.preventDefault(), y.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (y) => {
    y.shiftKey ? (y.preventDefault(), y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, C = (y) => {
    (y.shiftKey || y.ctrlKey || y.metaKey || t.selectedIds.size > 0) && y.preventDefault();
  }, M = (y) => {
    (y.key === "Enter" || y.key === " ") && (y.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, k = async () => {
    try {
      const y = await kp(e.id);
      if (!y.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        y.workflow
      ), console.log("Workflow restored successfully from Meld");
    } catch (y) {
      console.error("Error restoring workflow:", y), alert("Failed to restore workflow.");
    }
  }, L = async () => {
    try {
      const y = await Ep(e.id), D = "MeldUnifiedLoader", z = window.app, v = window.LiteGraph.createNode(D);
      if (!v) {
        console.error(`Node type ${D} not found.`), alert(
          `Node type ${D} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const w = {
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
      if (v.widgets) {
        for (const [U, I] of Object.entries(w)) {
          const F = y[U];
          if (F != null) {
            const A = v.widgets.find(
              (B) => B.name === I
            );
            A && (A.value = F);
          }
        }
        const O = v.widgets.find(
          (U) => U.name === "control_after_generate"
        );
        O && (O.value = "fixed");
      }
      const _ = z.canvas.ds.offset, b = z.canvas.ds.scale;
      v.pos = [(-_[0] + 400) / b, (-_[1] + 300) / b], z.graph.add(v), z.canvas.selectNode(v), z.canvas.centerOnNode(v);
    } catch (y) {
      console.error("Error adding Unified Loader:", y), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: C,
      onKeyDown: M,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ o.jsx(
          "img",
          {
            src: d,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: C,
            onClick: (y) => {
              y.stopPropagation(), f(y);
            }
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] && R,
            t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            !t.settings["sidebar.show_filename"] && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && j.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ o.jsx("div", { className: "meld-lineage-thumbs", children: j.map(
              (y, D) => y.imgSrc && /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: y.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (z) => {
                    z.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: y.id || e.id, mode: "lineage" }
                    });
                  },
                  title: D === 0 ? "Source" : D === 1 ? "Grand-Source" : `Ancestor (S${D + 1})`,
                  alt: "source thumb"
                },
                y.id || D
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (y) => {
                y.stopPropagation(), i({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), S(e.model_name || "-", "Model");
                    },
                    children: u === "Model" ? "Copied!" : "Model"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (y) => {
                y.stopPropagation(), i({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), S(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: u === "Positive" ? "Copied!" : "Positive"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (y) => {
                y.stopPropagation(), i({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (y) => {
                      y.stopPropagation(), S(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: u === "Negative" ? "Copied!" : "Negative"
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
              ]
            }
          ),
          t.settings["sidebar.show_tags"] && /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (y) => {
                y.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((y, D) => /* @__PURE__ */ o.jsx("span", { className: "meld-image-card__tag", children: y }, `${y}-${D}`)) : /* @__PURE__ */ o.jsx(
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
        /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__menu-container", ref: m, children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (y) => {
                y.stopPropagation(), a(!s);
              },
              title: "Menu",
              children: /* @__PURE__ */ o.jsx(Bp, { size: 16 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (y) => {
                y.stopPropagation(), L();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ o.jsx(ca, { size: 16 })
            }
          ),
          s && /* @__PURE__ */ o.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), L(), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(ca, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), k(), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(ur, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(Kp, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (y) => {
                  y.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ o.jsx(En, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (y) => {
              y.stopPropagation(), i(null);
            },
            children: /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (y) => y.stopPropagation(),
                children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ o.jsx("span", { children: l.title }),
                    /* @__PURE__ */ o.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          h ? /* @__PURE__ */ o.jsx(
                            Ic,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ o.jsx(
                            bp,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => S(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ o.jsx(
                            ve,
                            {
                              className: "meld-prompt-popup-close",
                              size: 18,
                              onClick: () => i(null)
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ o.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, Dc = E.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, s = typeof e.parent_id == "number" && e.parent_id === n.id, a = Re(e);
    return /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ o.jsxs(
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
          /* @__PURE__ */ o.jsx("img", { src: a, alt: e.filename }),
          (i || s) && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: i ? /* @__PURE__ */ o.jsx(Rp, { size: 12 }) : /* @__PURE__ */ o.jsx(Dp, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Dc.displayName = "ThumbnailItem";
const cm = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = Ge(), { viewerImageId: r, images: l, viewerMode: i, lineageImages: s } = e, [a, u] = E.useState(!1), [c, h] = E.useState(
    e.settings["viewer.show_details_by_default"]
  ), [g, m] = E.useState(null), S = g ?? e.settings["viewer.show_thumbnails"], [N, j] = E.useState(!1), [R, d] = E.useState(!1), f = E.useRef(null), p = E.useMemo(() => i === "lineage" ? s : l.filter(
    (v) => v.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && v.has_children)
  ), [i, s, l, e.settings]), C = E.useMemo(() => r === null ? -1 : p.findIndex((v) => v.id === r), [p, r]), M = E.useMemo(() => {
    if (!S || C === -1) return [];
    const v = e.settings["viewer.thumbnail_window_size"], w = Math.floor(v / 2);
    let _ = Math.max(0, C - w);
    const b = Math.min(p.length, _ + v);
    return b === p.length && (_ = Math.max(0, b - v)), p.slice(_, b).map((O, U) => ({
      img: O,
      absIndex: _ + U
    }));
  }, [
    p,
    C,
    e.settings["viewer.thumbnail_window_size"],
    S
  ]), k = (i === "lineage" && s.length > 0 ? s : l).find((v) => v.id === r), L = E.useCallback(
    (v) => {
      v && "stopPropagation" in v && v.stopPropagation();
      const w = f.current;
      w && (document.fullscreenElement ? document.exitFullscreen() : w.requestFullscreen().catch((_) => {
        console.error(
          `Error attempting to enable full-screen mode: ${_.message}`
        );
      }));
    },
    []
  ), y = E.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: a } });
  }, [t, a]), D = E.useCallback(async () => {
    const v = a ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (C === 0 && i === "gallery" && e.pagination.hasMore && !R && v) {
      d(!0);
      try {
        const w = e.pagination.limit, _ = e.pagination.total, b = Math.max(0, _ - w), O = await es(
          b,
          w,
          e.searchQuery
        );
        if (t({ type: "APPEND_IMAGES", payload: O }), O.images.length > 0) {
          const U = O.images[O.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: U.id, mode: "gallery" }
          });
        }
      } catch (w) {
        console.error("Failed to jump to end:", w);
      } finally {
        d(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: a } });
  }, [
    C,
    i,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    R,
    a
  ]);
  if (E.useEffect(() => {
    i !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore || C !== -1 && C >= p.length - 15 && n();
  }, [
    r,
    p.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    C
  ]), E.useEffect(() => {
    const v = (_) => {
      r !== null && (_.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : _.key === "ArrowRight" ? y() : _.key === "ArrowLeft" ? D() : _.key === "f" || _.key === "F" ? L(_) : (_.key === "i" || _.key === "I") && h((b) => !b));
    }, w = () => {
      const _ = !!document.fullscreenElement;
      u(_), h(_ ? e.settings["fullscreen.show_details_by_default"] : e.settings["viewer.show_details_by_default"]);
    };
    return window.addEventListener("keydown", v), document.addEventListener("fullscreenchange", w), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("fullscreenchange", w);
    };
  }, [
    r,
    t,
    L,
    y,
    D,
    e.settings
  ]), E.useEffect(() => {
    i === "lineage" && r !== null && s.length === 0 && (j(!0), Cc(r).then((v) => {
      t({ type: "SET_LINEAGE", payload: v });
    }).catch((v) => {
      console.error("Failed to fetch lineage:", v);
    }).finally(() => {
      j(!1);
    }));
  }, [i, r, s.length, t]), E.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), E.useEffect(() => {
    if (S && r !== null) {
      const v = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      v && v.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r, S]), E.useEffect(() => {
    if (r === null || p.length === 0) return;
    const v = p.findIndex(
      (O) => O.id === r
    );
    if (v === -1) return;
    const w = (O) => Re(O), _ = [
      v + 1,
      v + 2,
      v - 1
    ], b = setTimeout(() => {
      for (const O of _)
        if (O >= 0 && O < p.length) {
          const U = p[O], I = new Image();
          I.src = w(U);
        }
    }, 150);
    return () => clearTimeout(b);
  }, [r, p]), !k) return null;
  const z = Re(k), x = a ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return kn.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: f,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (v) => v.stopPropagation(),
            children: [
              x && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-actions", children: [
                !a && /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: `meld-viewer-action-btn ${S ? "meld-viewer-action-btn--active" : ""}`,
                    onClick: () => m(!S),
                    type: "button",
                    title: S ? "Hide Thumbnails" : "Show Thumbnails",
                    children: /* @__PURE__ */ o.jsx(Qp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: () => h(!c),
                    type: "button",
                    title: c ? "Hide Details (I)" : "Show Details (I)",
                    children: /* @__PURE__ */ o.jsx(Vp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: L,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ o.jsx(Hp, { size: 20 }) : /* @__PURE__ */ o.jsx(Wp, { size: 20 })
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ o.jsx(ve, { size: 20 })
                  }
                )
              ] }),
              x && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: D,
                  type: "button",
                  disabled: R,
                  children: /* @__PURE__ */ o.jsx(Lc, { size: 32 })
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-image-container", children: [
                R && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ o.jsx(ur, { className: "animate-spin", size: 48 }) }),
                /* @__PURE__ */ o.jsx(
                  "img",
                  {
                    src: z,
                    alt: k.filename,
                    className: `meld-viewer-image ${R ? "meld-viewer-image--loading" : ""}`,
                    fetchpriority: "high"
                  }
                )
              ] }),
              x && /* @__PURE__ */ o.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: y,
                  type: "button",
                  children: /* @__PURE__ */ o.jsx(Mc, { size: 32 })
                }
              ),
              c && /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: `meld-viewer-details-overlay ${a ? "meld-viewer-details-overlay--fullscreen" : ""} ${x ? "" : "meld-viewer-details-overlay--no-icons"}`,
                  children: [
                    (a ? e.settings["fullscreen.details.show_filename"] : e.settings["viewer.details.show_filename"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Filename" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: k.filename })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_dimensions"] : e.settings["viewer.details.show_dimensions"]) && k.width && k.height && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-value", children: [
                        k.width,
                        " x ",
                        k.height,
                        " px"
                      ] })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_created_at"] : e.settings["viewer.details.show_created_at"]) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: new Date(k.created_at * 1e3).toLocaleString() })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_model_name"] : e.settings["viewer.details.show_model_name"]) && k.model_name && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-value", children: k.model_name })
                    ] }),
                    (a ? e.settings["fullscreen.details.show_positive_prompt"] : e.settings["viewer.details.show_positive_prompt"]) && (k.positive_prompt || k.positive) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_positive_prompt_lines"] : e.settings["viewer.details.max_positive_prompt_lines"]
                          },
                          children: k.positive_prompt || k.positive
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_negative_prompt"] : e.settings["viewer.details.show_negative_prompt"]) && (k.negative_prompt || k.negative) && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
                      /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-viewer-details-value meld-viewer-details-value--prompt",
                          style: {
                            "--meld-prompt-max-lines": a ? e.settings["fullscreen.details.max_negative_prompt_lines"] : e.settings["viewer.details.max_negative_prompt_lines"]
                          },
                          children: k.negative_prompt || k.negative
                        }
                      )
                    ] }),
                    (a ? e.settings["fullscreen.details.show_tags"] : e.settings["viewer.details.show_tags"]) && k.tags && k.tags.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-details-item", children: [
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-details-tags", children: k.tags.map((v) => /* @__PURE__ */ o.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
                    ] })
                  ]
                }
              ),
              !a && S && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                N ? /* @__PURE__ */ o.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : M.map(({ img: v }) => /* @__PURE__ */ o.jsx(
                  Dc,
                  {
                    thumb: v,
                    viewerImageId: r,
                    currentImage: k,
                    dispatch: t
                  },
                  v.id
                )),
                i === "gallery" && e.isLoading && /* @__PURE__ */ o.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ o.jsx(ur, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, dm = () => {
  const { dispatch: e } = Ge(), [t, n] = E.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [r, l] = E.useState([]), [i, s] = E.useState([]), [a, u] = E.useState(0), [c, h] = E.useState(!1), [g, m] = E.useState([]), [S, N] = E.useState(""), [j, R] = E.useState(!1), [d, f] = E.useState(null);
  E.useEffect(() => {
    (async () => {
      try {
        const v = await np();
        n((w) => ({ ...w, custom_path: v }));
      } catch (v) {
        console.error("Failed to fetch home directory:", v);
      }
    })();
  }, []), E.useEffect(() => {
    const x = new AbortController();
    return (async () => {
      const w = t.type === "custom" ? t.custom_path : t.subfolder;
      if (console.log(
        `[Meld] loadFolders started. Path: "${w}", Type: "${t.type}"`
      ), t.type === "custom" && !w) {
        console.log("[Meld] Custom path is empty, skipping load."), l([]), s([]), u(0);
        return;
      }
      h(!0);
      const _ = w, b = t.type;
      try {
        console.log("[Meld] Step 1: Fast load starting...");
        const O = await cp(
          t.type,
          w,
          !0,
          x.signal
        );
        if (x.signal.aborted) {
          console.log("[Meld] Step 1: Aborted.");
          return;
        }
        console.log(
          `[Meld] Step 1 complete. Found ${O.folders.length} folders, ${O.images.length} images.`
        ), l(O.folders), s(O.images), u(null);
        const U = O.folders.map((I) => I.name);
        U.length > 0 && (console.log(
          `[Meld] Step 2: Metadata fetch starting for ${U.length} folders...`
        ), dp(
          b,
          _,
          U,
          x.signal
        ).then((I) => {
          if (x.signal.aborted) {
            console.log("[Meld] Step 2: Aborted.");
            return;
          }
          console.log("[Meld] Step 2: Metadata fetch complete."), l(
            (F) => F.map((A) => {
              const B = I[A.name];
              return B ? { ...A, count: B.count, preview: B.preview } : A;
            })
          );
        }).catch((I) => {
          I.name !== "AbortError" && console.error("[Meld] Step 2: Metadata fetch failed:", I);
        })), console.log("[Meld] Step 3: Path image count starting..."), fp(b, _, x.signal).then((I) => {
          if (x.signal.aborted) {
            console.log("[Meld] Step 3: Aborted.");
            return;
          }
          console.log(`[Meld] Step 3: Path image count complete: ${I}`), u(I);
        }).catch((I) => {
          I.name !== "AbortError" && console.error("[Meld] Step 3: Path image count failed:", I);
        });
      } catch (O) {
        if (O.name === "AbortError") {
          console.log("[Meld] Request aborted.");
          return;
        }
        console.error("[Meld] Failed to load folders:", O), l([]), s([]), u(0);
      } finally {
        x.signal.aborted || h(!1);
      }
    })(), () => {
      x.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = E.useCallback(async () => {
    R(!0);
    try {
      const x = await Ys();
      m(x);
    } catch (x) {
      console.error("Failed to fetch tags:", x);
    } finally {
      R(!1);
    }
  }, []);
  E.useEffect(() => {
    p();
  }, [p]), E.useEffect(() => {
    const x = (v) => {
      v.key === "Escape" && d && f(null);
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [d]);
  const C = E.useMemo(() => g.filter(
    (x) => x.name.toLowerCase().includes(S.toLowerCase()) && !t.tags.includes(x.name)
  ), [g, S, t.tags]), M = (x) => {
    const v = x.trim();
    v && !t.tags.includes(v) && (n({ ...t, tags: [...t.tags, v] }), N(""));
  }, k = (x) => {
    n({ ...t, tags: t.tags.filter((v) => v !== x) });
  }, L = (x) => {
    x.key === "Enter" && S.trim() && (x.preventDefault(), M(S.trim()));
  }, y = async () => {
    try {
      await pp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (x) {
      console.error("Failed to start scan:", x), alert(`Failed to start scan: ${x}`);
    }
  }, D = (x) => {
    if (t.type === "custom") {
      const v = t.custom_path.includes("\\") ? "\\" : "/", w = t.custom_path.endsWith(v) ? `${t.custom_path}${x}` : `${t.custom_path}${v}${x}`;
      n({ ...t, custom_path: w });
    } else {
      const v = t.subfolder ? `${t.subfolder}/${x}` : x;
      n({ ...t, subfolder: v });
    }
  }, z = () => {
    if (t.type === "custom") {
      const x = t.custom_path.includes("\\") ? "\\" : "/", v = t.custom_path.split(x);
      if (v.length > 1) {
        v.pop();
        let w = v.join(x);
        w === "" && x === "/" && (w = "/"), n({ ...t, custom_path: w });
      }
    } else {
      const x = t.subfolder.split("/");
      x.pop(), n({ ...t, subfolder: x.join("/") });
    }
  };
  return kn.createPortal(
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (x) => x.stopPropagation(),
              children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ o.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ o.jsx(ve, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ o.jsxs(
                        "select",
                        {
                          id: "base-location",
                          value: t.type,
                          onChange: (x) => n({
                            ...t,
                            type: x.target.value,
                            subfolder: ""
                          }),
                          children: [
                            /* @__PURE__ */ o.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ o.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ o.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-path-count", children: a === null ? /* @__PURE__ */ o.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${a} images` })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (x) => n({ ...t, recursive: x.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ o.jsxs("label", { children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.auto_link_parent,
                          onChange: (x) => n({
                            ...t,
                            auto_link_parent: x.target.checked
                          })
                        }
                      ),
                      "Auto Link Parent"
                    ] }) }),
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ o.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((x) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        x,
                        /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => k(x),
                            children: /* @__PURE__ */ o.jsx(ve, { size: 12 })
                          }
                        )
                      ] }, x)) }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ o.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ o.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: S,
                            onChange: (x) => N(x.target.value),
                            onKeyDown: L
                          }
                        ),
                        S.trim() && !t.tags.includes(S.trim()) && /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => M(S),
                            children: /* @__PURE__ */ o.jsx(Xs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: j ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? S && /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        S
                      ] }) : C.map((x) => /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => M(x.name),
                          children: x.name
                        },
                        x.id
                      )) })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ o.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: y,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ o.jsx(Gp, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ o.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: z,
                          children: [
                            /* @__PURE__ */ o.jsx(Lc, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (x) => n({ ...t, custom_path: x.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ o.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ o.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && i.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                      r.map((x) => /* @__PURE__ */ o.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => D(x.name),
                          children: [
                            /* @__PURE__ */ o.jsx("div", { className: "meld-folder-icon-wrapper", children: x.preview ? /* @__PURE__ */ o.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Re(x.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ o.jsx(Up, { size: 16 }) }),
                            /* @__PURE__ */ o.jsx("span", { className: "meld-folder-name", children: x.name }),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${x.count === null ? "meld-folder-count--loading" : ""}`,
                                children: x.count !== null ? `${x.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ o.jsx(Mc, { size: 14 })
                          ]
                        },
                        x.name
                      )),
                      i.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "meld-browser-image-grid", children: i.map((x) => /* @__PURE__ */ o.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(x),
                          children: /* @__PURE__ */ o.jsx(
                            "img",
                            {
                              src: Re(x),
                              alt: x.filename,
                              title: x.filename
                            }
                          )
                        },
                        x.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          d && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (x) => {
                x.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (x) => x.stopPropagation(),
                  children: [
                    /* @__PURE__ */ o.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ o.jsx(ve, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: Re(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-import-preview-info", children: d.filename })
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    document.body
  );
}, fm = () => {
  const { state: e, dispatch: t } = Ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await mp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (a) {
      console.error("Failed to cancel scan:", a);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, i = n.progress.phase === "linking", s = i ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return /* @__PURE__ */ o.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ o.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ o.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : i ? /* @__PURE__ */ o.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ o.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${s}%` }
      }
    ) }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ o.jsx(Xp, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ o.jsx(Ap, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ o.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new images"
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, pm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ge(), [l, i] = E.useState([]), [s, a] = E.useState(!0), [u, c] = E.useState(!1), h = t.images.find((d) => d.id === e), g = E.useCallback(async () => {
    a(!0);
    try {
      const d = await op(e);
      i(d);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      a(!1);
    }
  }, [e]);
  E.useEffect(() => {
    g();
  }, [g]);
  const m = async (d) => {
    try {
      await sp(e, d), await r(), n({ type: "CLOSE_MODAL" });
    } catch (f) {
      console.error("Failed to link parent:", f);
    }
  }, S = async (d) => {
    a(!0);
    try {
      const f = await ap(d), { id: p } = await Nc({
        filename: f.name,
        subfolder: f.subfolder || "",
        type: f.type || "input"
      });
      await m(p);
    } catch (f) {
      console.error("Failed to upload/register image:", f);
    } finally {
      a(!1);
    }
  }, N = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const f = d.dataTransfer.files[0];
    f != null && f.type.startsWith("image/") && S(f);
  };
  if (!h) return null;
  const j = l.filter((d) => d.is_source_match), R = l.filter((d) => !d.is_source_match);
  return kn.createPortal(
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsxs("h2", { children: [
              "Select Source for #",
              h.id
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ o.jsx(ve, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
            /* @__PURE__ */ o.jsxs(
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
                onDrop: N,
                children: [
                  /* @__PURE__ */ o.jsx(Zp, { size: 32 }),
                  /* @__PURE__ */ o.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            s ? /* @__PURE__ */ o.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestions-container", children: [
              j.length > 0 && /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: j.map((d) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ o.jsx("img", { src: Re(d), alt: d.filename }),
                      /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: d.filename }) })
                    ]
                  },
                  d.id
                )) })
              ] }),
              /* @__PURE__ */ o.jsxs("section", { children: [
                /* @__PURE__ */ o.jsx("h3", { children: "Visual Matches (pHash)" }),
                R.length > 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-suggestion-grid", children: R.map((d) => /* @__PURE__ */ o.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(d.id),
                    children: [
                      /* @__PURE__ */ o.jsx("img", { src: Re(d), alt: d.filename }),
                      /* @__PURE__ */ o.jsxs("div", { className: "meld-suggestion-info", children: [
                        /* @__PURE__ */ o.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
                        /* @__PURE__ */ o.jsxs("span", { className: "meld-suggestion-distance", children: [
                          "Match:",
                          " ",
                          Math.round((64 - d.distance) / 64 * 100),
                          "%"
                        ] })
                      ] })
                    ]
                  },
                  d.id
                )) }) : /* @__PURE__ */ o.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.body
  );
}, mm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = Ge(), [r, l] = E.useState(e.searchQuery), [i, s] = E.useState([]), [a, u] = E.useState(!1), [c, h] = E.useState([]), [g, m] = E.useState(-1), [S, N] = E.useState(!1), [j, R] = E.useState(null), d = E.useRef(null);
  E.useEffect(() => {
    if (j) {
      const w = setTimeout(() => R(null), 3e3);
      return () => clearTimeout(w);
    }
  }, [j]);
  const f = E.useRef(null), p = E.useRef(e.searchQuery);
  E.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    !r && !e.searchQuery ? lp().then((w) => {
      h(w);
    }) : h([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), E.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), E.useEffect(() => {
    var w;
    (w = d.current) == null || w.focus();
  }, []);
  const C = E.useCallback(
    (w, _ = !0) => {
      p.current !== w && (t({ type: "SET_SEARCH_QUERY", payload: w }), _ && u(!1), p.current = w);
    },
    [t]
  );
  E.useEffect(() => {
    const w = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && C(r, !1), !e.settings["search.input_suggest"]) {
        s([]), u(!1);
        return;
      }
      const _ = r.split(/\s+/), b = _[_.length - 1];
      if (b) {
        const O = b.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (O) {
          const U = O[1].toLowerCase(), I = O[2], F = await rp(I, U);
          s(F), u(F.length > 0), m(-1);
        } else
          s([]), u(!1);
      } else
        s([]), u(!1);
    }, 300);
    return () => clearTimeout(w);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    C
  ]);
  const M = (w) => {
    w.key === "Enter" ? C(r) : w.key === "Tab" ? a && g >= 0 && (k(i[g]), w.preventDefault()) : w.key === "ArrowDown" ? a && (m((_) => Math.min(_ + 1, i.length - 1)), w.preventDefault()) : w.key === "ArrowUp" ? a && (m((_) => Math.max(_ - 1, -1)), w.preventDefault()) : w.key === "Escape" && u(!1);
  }, k = (w) => {
    var I;
    const _ = r.split(/\s+/);
    _.pop();
    const O = ["date", "after", "before"].includes(w.type) ? w.value : `"${w.value}"`, U = `${[..._, `${w.type}:${O}`].join(" ").trim()} `;
    l(U), C(U), s([]), u(!1), (I = d.current) == null || I.focus();
  }, L = () => {
    l(""), C("");
  }, y = async (w, _, b) => {
    w.stopPropagation();
    const O = `Are you sure you want to delete the favorite "${b}"?`;
    if (window.confirm(O))
      try {
        await ua(_), await n();
      } catch (U) {
        ge.error("Failed to delete favorite", U);
      }
  }, D = async (w, _, b) => {
    w.stopPropagation();
    const O = window.prompt(
      "Enter a new name for this favorite:",
      b
    );
    if (!(O === null || O === b))
      try {
        await yp(_, O || b), await n();
      } catch (U) {
        ge.error("Failed to rename favorite", U);
      }
  }, z = (w, _) => {
    const O = ["date", "after", "before"].includes(w) ? _ : `"${_}"`, U = `${w}:${O}`;
    l(U), C(U);
  }, x = async () => {
    if (!e.searchQuery || S) return;
    if (e.favorites.some(
      (_) => _.query === e.searchQuery
    )) {
      const _ = e.favorites.find((b) => b.query === e.searchQuery);
      if (_) {
        N(!0);
        try {
          await ua(_.id), await n(), R("Favorite removed.");
        } catch (b) {
          console.error("Failed to delete favorite:", b);
        } finally {
          N(!1);
        }
      }
      return;
    }
    N(!0);
    try {
      await gp(e.searchQuery, e.searchQuery), await n(), R(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (_) {
      console.error("Failed to save favorite:", _);
    } finally {
      N(!1);
    }
  }, v = (w) => {
    switch (w) {
      case "tag":
        return /* @__PURE__ */ o.jsx(En, { size: 12 });
      case "model":
        return /* @__PURE__ */ o.jsx(Fp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ o.jsx(Jp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ o.jsx(Op, { size: 12 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              j && /* @__PURE__ */ o.jsx(
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
              /* @__PURE__ */ o.jsxs(
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
                    /* @__PURE__ */ o.jsx(
                      vn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        ref: d,
                        type: "text",
                        value: r,
                        onChange: (w) => l(w.target.value),
                        onKeyDown: M,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const w = r.split(/\s+/), _ = w[w.length - 1];
                          _ != null && _.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                    e.searchQuery && /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: x,
                        disabled: S,
                        title: e.favorites.some((w) => w.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ o.jsx(
                          da,
                          {
                            size: 16,
                            color: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((w) => w.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ o.jsx(
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
                        children: /* @__PURE__ */ o.jsx(ve, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              a && i.length > 0 && /* @__PURE__ */ o.jsx(
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
                  children: i.map((w, _) => /* @__PURE__ */ o.jsx(
                    "div",
                    {
                      onMouseDown: (b) => {
                        b.preventDefault(), k(w);
                      },
                      onMouseEnter: () => m(_),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: _ === g ? "var(--comfy-menu-bg, #333)" : "transparent",
                        borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
                      },
                      children: /* @__PURE__ */ o.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-secondary)",
                                  display: "flex"
                                },
                                children: v(w.type)
                              }
                            ),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--comfy-input-text-active, #3b82f6)",
                                  fontSize: "11px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  width: "45px"
                                },
                                children: w.type
                              }
                            ),
                            /* @__PURE__ */ o.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: w.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${w.type}:${w.value}`
                  ))
                }
              )
            ]
          }
        ),
        !r && !e.searchQuery && c.length > 0 && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "meld-search-quick-suggestions",
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: c.map((w) => /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                onClick: () => z(w.type, w.value),
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
                  _.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", _.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", _.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ o.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: v(w.type)
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "span",
                    {
                      style: {
                        color: "var(--comfy-input-text-active, #3b82f6)",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: "10px"
                      },
                      children: w.type
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    "span",
                    {
                      style: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: w.value
                    }
                  )
                ]
              },
              `${w.type}:${w.value}`
            ))
          }
        ),
        !r && e.favorites.length > 0 && /* @__PURE__ */ o.jsxs(
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
              /* @__PURE__ */ o.jsxs(
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
                    /* @__PURE__ */ o.jsx(da, { size: 12, fill: "var(--meld-text-secondary)" }),
                    "Favorites"
                  ]
                }
              ),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  },
                  children: e.favorites.map((w) => /* @__PURE__ */ o.jsxs(
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
                        l(w.query), C(w.query);
                      },
                      onMouseEnter: (_) => {
                        _.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", _.currentTarget.style.borderColor = "var(--meld-accent-color)", _.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (_) => {
                        _.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", _.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", _.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      children: [
                        /* @__PURE__ */ o.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              minWidth: 0,
                              flex: 1
                            },
                            children: [
                              /* @__PURE__ */ o.jsx(
                                "span",
                                {
                                  style: {
                                    fontWeight: "bold",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                  },
                                  children: w.name
                                }
                              ),
                              w.name !== w.query && /* @__PURE__ */ o.jsx(
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
                                  children: w.query
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ o.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                              flexShrink: 0
                            },
                            children: [
                              /* @__PURE__ */ o.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (_) => {
                                    _.stopPropagation(), D(_, w.id, w.name);
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
                                  onMouseEnter: (_) => {
                                    _.currentTarget.style.color = "var(--meld-accent-color)", _.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (_) => {
                                    _.currentTarget.style.color = "var(--meld-text-secondary)", _.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ o.jsx(Pc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ o.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (_) => {
                                    _.stopPropagation(), y(_, w.id, w.name);
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
                                  onMouseEnter: (_) => {
                                    _.currentTarget.style.color = "var(--meld-danger-color)", _.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (_) => {
                                    _.currentTarget.style.color = "var(--meld-text-secondary)", _.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ o.jsx(wn, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    w.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, hm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ge(), [r, l] = E.useState("General"), [i, s] = E.useState({
    ...e.settings
  }), [a, u] = E.useState(
    e.settings["gallery.page_size"].toString()
  ), [c, h] = E.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [g, m] = E.useState(e.settings["viewer.thumbnail_window_size"].toString()), [S, N] = E.useState(e.settings["gallery.trash_retention_days"].toString()), [j, R] = E.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [d, f] = E.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    p,
    C
  ] = E.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    M,
    k
  ] = E.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), L = [
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
      label: "Show Filename",
      description: "Display the filename on the card.",
      type: "boolean",
      category: "Sidebar"
    },
    {
      key: "sidebar.show_dimensions",
      label: "Show Dimensions",
      description: "Display the image dimensions (width x height) on the card.",
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
      key: "viewer.show_details_by_default",
      label: "Show by Default",
      description: "Show the image details panel automatically when opening the viewer.",
      type: "boolean",
      category: "View Details"
    },
    {
      key: "viewer.details.show_filename",
      label: "Show Filename",
      description: "Display the filename in the details panel.",
      type: "boolean",
      category: "View Details"
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
      key: "fullscreen.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in fullscreen.",
      type: "boolean",
      category: "Full Screen"
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
      label: "Show Filename",
      description: "Display the filename in fullscreen details.",
      type: "boolean",
      category: "Full Screen Detail"
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
  ], y = async () => {
    const v = Object.keys(i).filter((w) => i[w] !== e.settings[w]);
    if (v.length > 0)
      for (const w of v)
        await n(w, i[w]);
    t({ type: "CLOSE_MODAL" });
  }, D = (v, w) => {
    s((_) => ({
      ..._,
      [v]: !w
    }));
  }, z = (v, w, _, b) => {
    v === "gallery.page_size" ? u(w) : v === "gallery.lineage_max_depth" ? h(w) : v === "viewer.thumbnail_window_size" ? m(w) : v === "gallery.trash_retention_days" ? N(w) : v === "viewer.details.max_positive_prompt_lines" ? R(w) : v === "viewer.details.max_negative_prompt_lines" ? f(w) : v === "fullscreen.details.max_positive_prompt_lines" ? C(w) : v === "fullscreen.details.max_negative_prompt_lines" && k(w);
    const O = Number.parseInt(w, 10);
    if (!Number.isNaN(O)) {
      let U = O;
      _ !== void 0 && U < _ && (U = _), b !== void 0 && U > b && (U = b), s((I) => ({
        ...I,
        [v]: U
      }));
    }
  }, x = L.filter(
    (v) => v.category === r
  );
  return kn.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: y, children: /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (v) => v.stopPropagation(),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ o.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: y,
                children: /* @__PURE__ */ o.jsx(ve, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ o.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-tabs", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "General" ? "active" : ""}`,
                  onClick: () => l("General"),
                  children: "General"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Sidebar" ? "active" : ""}`,
                  onClick: () => l("Sidebar"),
                  children: "Sidebar"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Search" ? "active" : ""}`,
                  onClick: () => l("Search"),
                  children: "Search"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View" ? "active" : ""}`,
                  onClick: () => l("View"),
                  children: "View"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "View Details" ? "active" : ""}`,
                  onClick: () => l("View Details"),
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                  onClick: () => l("Full Screen"),
                  children: "Full Screen"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  className: `meld-tab ${r === "Full Screen Detail" ? "active" : ""}`,
                  onClick: () => l("Full Screen Detail"),
                  children: "Full Screen Detail"
                }
              )
            ] }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ o.jsx("div", { className: "meld-settings-list", children: x.map((v) => {
                var w;
                return /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item", children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__info", children: [
                    /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__label", children: v.label }),
                    /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__description", children: v.description })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__control", children: [
                    v.type === "boolean" && /* @__PURE__ */ o.jsxs("label", { className: "meld-switch", children: [
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: !!i[v.key],
                          onChange: () => D(
                            v.key,
                            !!i[v.key]
                          )
                        }
                      ),
                      /* @__PURE__ */ o.jsx("span", { className: "meld-switch__slider" })
                    ] }),
                    v.type === "number" && /* @__PURE__ */ o.jsx(
                      "input",
                      {
                        type: "number",
                        className: "meld-number-input",
                        value: v.key === "gallery.page_size" ? a : v.key === "gallery.lineage_max_depth" ? c : v.key === "viewer.thumbnail_window_size" ? g : v.key === "viewer.details.max_positive_prompt_lines" ? j : v.key === "viewer.details.max_negative_prompt_lines" ? d : v.key === "fullscreen.details.max_positive_prompt_lines" ? p : v.key === "fullscreen.details.max_negative_prompt_lines" ? M : v.key === "gallery.trash_retention_days" ? S : i[v.key],
                        min: v.min,
                        max: v.max,
                        onChange: (_) => z(
                          v.key,
                          _.target.value,
                          v.min,
                          v.max
                        ),
                        onBlur: () => {
                          v.key === "gallery.page_size" ? u(
                            i["gallery.page_size"].toString()
                          ) : v.key === "gallery.lineage_max_depth" ? h(
                            i["gallery.lineage_max_depth"].toString()
                          ) : v.key === "viewer.thumbnail_window_size" ? m(
                            i["viewer.thumbnail_window_size"].toString()
                          ) : v.key === "gallery.trash_retention_days" ? N(
                            i["gallery.trash_retention_days"].toString()
                          ) : v.key === "viewer.details.max_positive_prompt_lines" ? R(
                            i["viewer.details.max_positive_prompt_lines"].toString()
                          ) : v.key === "viewer.details.max_negative_prompt_lines" ? f(
                            i["viewer.details.max_negative_prompt_lines"].toString()
                          ) : v.key === "fullscreen.details.max_positive_prompt_lines" ? C(
                            i["fullscreen.details.max_positive_prompt_lines"].toString()
                          ) : v.key === "fullscreen.details.max_negative_prompt_lines" && k(
                            i["fullscreen.details.max_negative_prompt_lines"].toString()
                          );
                        }
                      }
                    ),
                    v.type === "select" && /* @__PURE__ */ o.jsx(
                      "select",
                      {
                        className: "meld-select",
                        value: i[v.key],
                        onChange: (_) => s((b) => ({
                          ...b,
                          [v.key]: _.target.value
                        })),
                        children: (w = v.options) == null ? void 0 : w.map((_) => /* @__PURE__ */ o.jsx("option", { value: _.value, children: _.label }, _.value))
                      }
                    )
                  ] })
                ] }, v.key);
              }) }),
              r === "General" && /* @__PURE__ */ o.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "meld-settings-item__info", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__label", children: "Trash Management" }),
                  /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__description", children: "View and manage items currently in the trash bin." })
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "meld-settings-item__control", children: /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-button meld-button--secondary",
                    onClick: () => {
                      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
                    },
                    children: "View Trash Items"
                  }
                ) })
              ] }) })
            ] })
          ] })
        ]
      }
    ) }),
    document.body
  );
}, gm = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = Ge(), [l, i] = E.useState([]), [s, a] = E.useState(t), [u, c] = E.useState(""), [h, g] = E.useState(!0), [m, S] = E.useState(!1), N = E.useRef(null), j = e.length > 1, R = E.useCallback(async () => {
    g(!0);
    try {
      const k = await Ys();
      i(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      g(!1);
    }
  }, []);
  E.useEffect(() => {
    R();
  }, [R]), E.useEffect(() => {
    N.current && N.current.focus();
  }, []);
  const d = E.useMemo(() => l.filter(
    (k) => k.name.toLowerCase().includes(u.toLowerCase()) && !s.includes(k.name)
  ), [l, u, s]), f = (k) => {
    const L = k.trim();
    L && !s.includes(L) && (a([...s, L]), c(""));
  }, p = (k) => {
    a(s.filter((L) => L !== k));
  }, C = async () => {
    S(!0);
    try {
      if (j) {
        const k = s.filter((y) => !t.includes(y)), L = t.filter(
          (y) => !s.includes(y)
        );
        await Sp(e, k, L);
      } else
        await _p(e[0], s);
      await r(), n();
    } catch (k) {
      console.error("Failed to update tags:", k), alert("Failed to update tags.");
    } finally {
      S(!1);
    }
  }, M = (k) => {
    k.key === "Enter" && u.trim() ? (k.preventDefault(), f(u.trim())) : k.key === "Escape" && n();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ o.jsx(En, { size: 18 }),
        /* @__PURE__ */ o.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ o.jsx(ve, { size: 20 }) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-body", children: [
      j && /* @__PURE__ */ o.jsx(
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
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-selected", children: s.length === 0 ? /* @__PURE__ */ o.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : s.map((k) => /* @__PURE__ */ o.jsxs("span", { className: "meld-tag-edit-badge", children: [
          k,
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => p(k),
              children: /* @__PURE__ */ o.jsx(ve, { size: 12 })
            }
          )
        ] }, k)) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ o.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              ref: N,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: u,
              onChange: (k) => c(k.target.value),
              onKeyDown: M
            }
          ),
          u.trim() && !s.includes(u.trim()) && /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              className: "meld-tag-add-btn",
              onClick: () => f(u),
              children: [
                /* @__PURE__ */ o.jsx(Xs, { size: 14 }),
                "Create"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions", children: h ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? u ? /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((k) => /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => f(k.name),
            children: k.name
          },
          k.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-modal-footer", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-btn meld-btn-secondary",
          onClick: n,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-btn meld-btn-primary",
          onClick: C,
          disabled: m,
          children: m ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, ym = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = E.useState([]), [l, i] = E.useState(!0), [s, a] = E.useState(""), [u, c] = E.useState(""), [h, g] = E.useState(!1), [m, S] = E.useState(null), [N, j] = E.useState(""), [R, d] = E.useState(!1), f = E.useRef(null), p = E.useCallback(async () => {
    i(!0);
    try {
      const x = await Ys();
      r(x);
    } catch (x) {
      console.error("Failed to fetch tags:", x);
    } finally {
      i(!1);
    }
  }, []);
  E.useEffect(() => {
    p();
  }, [p]), E.useEffect(() => {
    m !== null && f.current && (f.current.focus(), f.current.select());
  }, [m]);
  const C = async (x) => {
    x.preventDefault();
    const v = u.trim();
    if (!(!v || h)) {
      if (n.some((w) => w.name.toLowerCase() === v.toLowerCase())) {
        alert(`Tag "${v}" already exists.`);
        return;
      }
      g(!0);
      try {
        await vp(v), c(""), await p();
      } catch (w) {
        console.error("Failed to add tag:", w);
      } finally {
        g(!1);
      }
    }
  }, M = async (x, v) => {
    if (confirm(`Are you sure you want to delete tag "${v}"?`))
      try {
        await wp(x), await p();
      } catch (w) {
        console.error("Failed to delete tag:", w);
      }
  }, k = (x) => {
    S(x.id), j(x.name);
  }, L = () => {
    S(null), j("");
  }, y = async (x) => {
    x.preventDefault();
    const v = N.trim();
    if (!v || m === null || R) return;
    const w = n.find((_) => _.id === m);
    if (w && w.name === v) {
      L();
      return;
    }
    if (n.some(
      (_) => _.id !== m && _.name.toLowerCase() === v.toLowerCase()
    )) {
      alert(`Tag "${v}" already exists.`);
      return;
    }
    d(!0);
    try {
      await xp(m, v), L(), await p();
    } catch (_) {
      console.error("Failed to rename tag:", _), alert(_ instanceof Error ? _.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, D = (x) => {
    t(`tag:${x}`);
  }, z = E.useMemo(() => n.filter(
    (x) => x.name.toLowerCase().includes(s.toLowerCase())
  ), [n, s]);
  return /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ o.jsx(En, { size: 16 }),
        /* @__PURE__ */ o.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ o.jsx(ve, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ o.jsxs("form", { className: "meld-tag-add-form", onSubmit: C, children: [
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (x) => c(x.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || h,
            children: [
              /* @__PURE__ */ o.jsx(Xs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ o.jsx(vn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: s,
            onChange: (x) => a(x.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ o.jsx("div", { className: "meld-tag-list", children: z.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : z.map((x) => /* @__PURE__ */ o.jsx("div", { className: "meld-tag-item", children: m === x.id ? /* @__PURE__ */ o.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: y,
          children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: N,
                onChange: (v) => j(v.target.value),
                onKeyDown: (v) => v.key === "Escape" && L()
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: R || !N.trim(),
                children: /* @__PURE__ */ o.jsx(Ic, { size: 14 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: L,
                disabled: R,
                children: /* @__PURE__ */ o.jsx(ve, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("span", { className: "meld-tag-item__name", children: x.name }),
        /* @__PURE__ */ o.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => D(x.name),
              children: /* @__PURE__ */ o.jsx(vn, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(x),
              children: /* @__PURE__ */ o.jsx(Pc, { size: 14 })
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => M(x.id, x.name),
              children: /* @__PURE__ */ o.jsx(wn, { size: 14 })
            }
          )
        ] })
      ] }) }, x.id)) })
    ] })
  ] });
}, vm = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = Ge(), [l, i] = E.useState("gallery"), [s, a] = E.useState(""), u = e.searchQuery.trim() !== "", c = E.useRef(null), h = E.useRef(null), g = E.useMemo(
    () => e.images.filter(
      (m) => m.exists !== !1 && (e.viewScope === "trash" || !(e.settings["gallery.hide_parent_images"] && m.has_children))
    ),
    [e.images, e.settings, e.viewScope]
  );
  return E.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && g.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    g.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: g.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), E.useEffect(() => {
    const m = new IntersectionObserver(
      (N) => {
        N[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), S = c.current;
    return S && m.observe(S), () => {
      S && m.unobserve(S);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), E.useEffect(() => {
    const m = e.viewerImageId ?? h.current;
    if (m !== null && g.some((N) => N.id === m)) {
      const N = document.querySelector(
        `[data-image-id="${m}"]`
      );
      N && (N.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (h.current = null));
    }
    e.viewerImageId !== null && (h.current = e.viewerImageId);
  }, [e.viewerImageId, g]), /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ o.jsx(wn, { size: 14 }),
              /* @__PURE__ */ o.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ o.jsx(ve, { size: 14 }),
                  /* @__PURE__ */ o.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ o.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  l === "search" ? (e.searchQuery && (a(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), i("gallery")) : (!e.searchQuery && s && t({
                    type: "SET_SEARCH_QUERY",
                    payload: s
                  }), i("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: u ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: u ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ o.jsx(vn, { size: 14 })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                onClick: () => i(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ o.jsx(En, { size: 14 })
              }
            ),
            /* @__PURE__ */ o.jsx(
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
                children: /* @__PURE__ */ o.jsx($p, { size: 14 })
              }
            ),
            /* @__PURE__ */ o.jsx(
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
                children: /* @__PURE__ */ o.jsx(
                  ur,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ o.jsx(
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
                children: /* @__PURE__ */ o.jsx(Yp, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ o.jsx(mm, {}) })
        ] }),
        /* @__PURE__ */ o.jsx(fm, {}),
        e.error && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ o.jsx(
          ym,
          {
            onClose: () => i("gallery"),
            onSearch: (m) => {
              t({ type: "SET_SEARCH_QUERY", payload: m }), i("search");
            }
          }
        ) : e.isLoading && g.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : g.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__list", children: g.map((m) => /* @__PURE__ */ o.jsx("div", { "data-image-id": m.id, children: /* @__PURE__ */ o.jsx(sm, { height: 150, children: /* @__PURE__ */ o.jsx(um, { image: m }) }) }, m.id)) }),
          /* @__PURE__ */ o.jsxs(
            "div",
            {
              ref: c,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(om, {}),
        e.viewerImageId !== null && /* @__PURE__ */ o.jsx(cm, {}),
        e.activeModal.type === "parent_selection" && /* @__PURE__ */ o.jsx(pm, { imageId: e.activeModal.imageId }),
        e.activeModal.type === "import" && /* @__PURE__ */ o.jsx(dm, {}),
        e.activeModal.type === "settings" && /* @__PURE__ */ o.jsx(hm, {}),
        e.activeModal.type === "tag_edit" && /* @__PURE__ */ o.jsx(
          gm,
          {
            imageIds: e.activeModal.imageIds,
            initialTags: e.activeModal.tags,
            onClose: () => t({ type: "CLOSE_MODAL" })
          }
        ),
        e.activeModal.type === "delete_confirm" && /* @__PURE__ */ o.jsx(
          am,
          {
            imageIds: e.activeModal.imageIds,
            hasLineage: e.activeModal.hasLineage
          }
        )
      ]
    }
  );
};
fa.registerExtension({
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
const Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.type = "text/css";
Dl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Dl);
let Dr = null, $e = null;
fa.registerExtension({
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
      const n = await Ec();
      ge.init(n.dev_mode), ge.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), ge.init(!1);
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
      }, V.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), V.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), V.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), console.log("Meld: Import completed.");
      }), V.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Nc({
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
            ge.log("Meld: render called", {
              el: n,
              galleryRoot: Dr,
              galleryContainer: $e
            }), $e || (ge.log("Meld: galleryContainer not found, creating new one"), $e = document.createElement("div"), $e.id = "meld-gallery-container", $e.style.height = "100%", $e.style.width = "100%", $e.style.display = "flex", $e.style.flexDirection = "column"), n.contains($e) || (ge.log("Meld: Appending galleryContainer to el"), n.appendChild($e)), Dr ? ge.log(
              "Meld: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("Meld: Creating new gallery root"), Dr = kc($e), Dr.render(
              eo.createElement(
                im,
                null,
                eo.createElement(vm)
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
