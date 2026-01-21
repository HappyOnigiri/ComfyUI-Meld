import { api as H } from "/scripts/api.js";
import { app as Ao } from "/scripts/app.js";
function _d(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oo = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr = Symbol.for("react.element"), kd = Symbol.for("react.portal"), Sd = Symbol.for("react.fragment"), jd = Symbol.for("react.strict_mode"), Ed = Symbol.for("react.profiler"), Cd = Symbol.for("react.provider"), Nd = Symbol.for("react.context"), Id = Symbol.for("react.forward_ref"), Td = Symbol.for("react.suspense"), Ld = Symbol.for("react.memo"), Md = Symbol.for("react.lazy"), Sa = Symbol.iterator;
function bd(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $o = Object.assign, Uo = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = Uo, this.updater = n || Fo;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vo() {
}
Vo.prototype = Fn.prototype;
function ji(e, t, n) {
  this.props = e, this.context = t, this.refs = Uo, this.updater = n || Fo;
}
var Ei = ji.prototype = new Vo();
Ei.constructor = ji;
$o(Ei, Fn.prototype);
Ei.isPureReactComponent = !0;
var ja = Array.isArray, Wo = Object.prototype.hasOwnProperty, Ci = { current: null }, Qo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bo(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Wo.call(t, r) && !Qo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Nr, type: e, key: s, ref: a, props: l, _owner: Ci.current };
}
function Pd(e, t) {
  return { $$typeof: Nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ni(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function Rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ea = /\/+/g;
function ns(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Rd("" + e.key) : t.toString(36);
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
        case kd:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + ns(a, 0) : r, ja(l) ? (n = "", e != null && (n = e.replace(Ea, "$&/") + "/"), Jr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Ni(l) && (l = Pd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Ea, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", ja(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + ns(s, o);
    a += Jr(s, t, n, u, l);
  }
  else if (u = bd(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + ns(s, o++), a += Jr(s, t, n, u, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Rr(e, t, n) {
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
var Pe = { current: null }, Zr = { transition: null }, zd = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: Ci };
function Ho() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: Rr, forEach: function(e, t, n) {
  Rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ni(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = Fn;
K.Fragment = Sd;
K.Profiler = Ed;
K.PureComponent = ji;
K.StrictMode = jd;
K.Suspense = Td;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
K.act = Ho;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = $o({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ci.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Wo.call(t, u) && !Qo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
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
K.createContext = function(e) {
  return e = { $$typeof: Nd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Cd, _context: e }, e.Consumer = e;
};
K.createElement = Bo;
K.createFactory = function(e) {
  var t = Bo.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: Id, render: e };
};
K.isValidElement = Ni;
K.lazy = function(e) {
  return { $$typeof: Md, _payload: { _status: -1, _result: e }, _init: Dd };
};
K.memo = function(e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
K.unstable_act = Ho;
K.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
K.useContext = function(e) {
  return Pe.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
K.useId = function() {
  return Pe.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return Pe.current.useRef(e);
};
K.useState = function(e) {
  return Pe.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return Pe.current.useTransition();
};
K.version = "18.3.1";
Oo.exports = K;
var v = Oo.exports;
const dl = /* @__PURE__ */ _d(v);
var Go = { exports: {} }, Be = {}, Ko = { exports: {} }, Yo = {};
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
  function t(N, b) {
    var O = N.length;
    N.push(b);
    e: for (; 0 < O; ) {
      var Q = O - 1 >>> 1, ne = N[Q];
      if (0 < l(ne, b)) N[Q] = b, N[O] = ne, O = Q;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var b = N[0], O = N.pop();
    if (O !== b) {
      N[0] = O;
      e: for (var Q = 0, ne = N.length, ht = ne >>> 1; Q < ht; ) {
        var $ = 2 * (Q + 1) - 1, J = N[$], re = $ + 1, Ze = N[re];
        if (0 > l(J, O)) re < ne && 0 > l(Ze, J) ? (N[Q] = Ze, N[re] = O, Q = re) : (N[Q] = J, N[$] = O, Q = $);
        else if (re < ne && 0 > l(Ze, O)) N[Q] = Ze, N[re] = O, Q = re;
        else break e;
      }
    }
    return b;
  }
  function l(N, b) {
    var O = N.sortIndex - b.sortIndex;
    return O !== 0 ? O : N.id - b.id;
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
  var u = [], c = [], m = 1, x = null, h = 3, g = !1, w = !1, y = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var b = n(c); b !== null; ) {
      if (b.callback === null) r(c);
      else if (b.startTime <= N) r(c), b.sortIndex = b.expirationTime, t(u, b);
      else break;
      b = n(c);
    }
  }
  function j(N) {
    if (y = !1, p(N), !w) if (n(u) !== null) w = !0, W(C);
    else {
      var b = n(c);
      b !== null && de(j, b.startTime - N);
    }
  }
  function C(N, b) {
    w = !1, y && (y = !1, f(E), E = -1), g = !0;
    var O = h;
    try {
      for (p(b), x = n(u); x !== null && (!(x.expirationTime > b) || N && !S()); ) {
        var Q = x.callback;
        if (typeof Q == "function") {
          x.callback = null, h = x.priorityLevel;
          var ne = Q(x.expirationTime <= b);
          b = e.unstable_now(), typeof ne == "function" ? x.callback = ne : x === n(u) && r(u), p(b);
        } else r(u);
        x = n(u);
      }
      if (x !== null) var ht = !0;
      else {
        var $ = n(c);
        $ !== null && de(j, $.startTime - b), ht = !1;
      }
      return ht;
    } finally {
      x = null, h = O, g = !1;
    }
  }
  var L = !1, _ = null, E = -1, P = 5, T = -1;
  function S() {
    return !(e.unstable_now() - T < P);
  }
  function R() {
    if (_ !== null) {
      var N = e.unstable_now();
      T = N;
      var b = !0;
      try {
        b = _(!0, N);
      } finally {
        b ? V() : (L = !1, _ = null);
      }
    } else L = !1;
  }
  var V;
  if (typeof d == "function") V = function() {
    d(R);
  };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), A = Y.port2;
    Y.port1.onmessage = R, V = function() {
      A.postMessage(null);
    };
  } else V = function() {
    k(R, 0);
  };
  function W(N) {
    _ = N, L || (L = !0, V());
  }
  function de(N, b) {
    E = k(function() {
      N(e.unstable_now());
    }, b);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, W(C));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = h;
    }
    var O = h;
    h = b;
    try {
      return N();
    } finally {
      h = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, b) {
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
    var O = h;
    h = N;
    try {
      return b();
    } finally {
      h = O;
    }
  }, e.unstable_scheduleCallback = function(N, b, O) {
    var Q = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? Q + O : Q) : O = Q, N) {
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
    return ne = O + ne, N = { id: m++, callback: b, priorityLevel: N, startTime: O, expirationTime: ne, sortIndex: -1 }, O > Q ? (N.sortIndex = O, t(c, N), n(u) === null && N === n(c) && (y ? (f(E), E = -1) : y = !0, de(j, O - Q))) : (N.sortIndex = ne, t(u, N), w || g || (w = !0, W(C))), N;
  }, e.unstable_shouldYield = S, e.unstable_wrapCallback = function(N) {
    var b = h;
    return function() {
      var O = h;
      h = b;
      try {
        return N.apply(this, arguments);
      } finally {
        h = O;
      }
    };
  };
})(Yo);
Ko.exports = Yo;
var Ad = Ko.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od = v, Qe = Ad;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xo = /* @__PURE__ */ new Set(), ur = {};
function an(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Xo.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Is = Object.prototype.hasOwnProperty, Fd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ca = {}, Na = {};
function $d(e) {
  return Is.call(Na, e) ? !0 : Is.call(Ca, e) ? !1 : Fd.test(e) ? Na[e] = !0 : (Ca[e] = !0, !1);
}
function Ud(e, t, n, r) {
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
function Vd(e, t, n, r) {
  if (t === null || typeof t > "u" || Ud(e, t, n, r)) return !0;
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
function Re(e, t, n, r, l, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  je[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  je[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  je[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  je[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  je[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  je[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  je[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  je[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  je[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  je[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ii, Ti);
  je[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ii, Ti);
  je[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  je[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  je[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Li(e, t, n, r) {
  var l = je.hasOwnProperty(t) ? je[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vd(t, n, l, r) && (n = null), r || l === null ? $d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dr = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), Ts = Symbol.for("react.profiler"), qo = Symbol.for("react.provider"), Jo = Symbol.for("react.context"), bi = Symbol.for("react.forward_ref"), Ls = Symbol.for("react.suspense"), Ms = Symbol.for("react.suspense_list"), Pi = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), Zo = Symbol.for("react.offscreen"), Ia = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Ia && e[Ia] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, rs;
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
function Wd(e) {
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
    case Jo:
      return (e.displayName || "Context") + ".Consumer";
    case qo:
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
function Qd(e) {
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
function eu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Bd(e) {
  var t = eu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function zr(e) {
  e._valueTracker || (e._valueTracker = Bd(e));
}
function tu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = eu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function nu(e, t) {
  t = t.checked, t != null && Li(e, "checked", t, !1);
}
function Rs(e, t) {
  nu(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ds(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ds(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function La(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ds(e, t, n) {
  (t !== "number" || fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
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
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ma(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function ru(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ba(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lu(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? lu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ar, su = function(e) {
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
}, Hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function(e) {
  Hd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), er[t] = er[e];
  });
});
function iu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || er.hasOwnProperty(e) && er[e] ? ("" + t).trim() : t + "px";
}
function au(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = iu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Gd = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Os(e, t) {
  if (t) {
    if (Gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Fs(e, t) {
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
function Ri(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Us = null, En = null, Cn = null;
function Pa(e) {
  if (e = Lr(e)) {
    if (typeof Us != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Ul(t), Us(e.stateNode, e.type, t));
  }
}
function ou(e) {
  En ? Cn ? Cn.push(e) : Cn = [e] : En = e;
}
function uu() {
  if (En) {
    var e = En, t = Cn;
    if (Cn = En = null, Pa(e), t) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function cu(e, t) {
  return e(t);
}
function du() {
}
var is = !1;
function fu(e, t, n) {
  if (is) return e(t, n);
  is = !0;
  try {
    return cu(e, t, n);
  } finally {
    is = !1, (En !== null || Cn !== null) && (du(), uu());
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
function Kd(e, t, n, r, l, s, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var tr = !1, pl = null, ml = !1, Ws = null, Yd = { onError: function(e) {
  tr = !0, pl = e;
} };
function Xd(e, t, n, r, l, s, a, o, u) {
  tr = !1, pl = null, Kd.apply(Yd, arguments);
}
function qd(e, t, n, r, l, s, a, o, u) {
  if (Xd.apply(this, arguments), tr) {
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
function pu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ra(e) {
  if (on(e) !== e) throw Error(I(188));
}
function Jd(e) {
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
        if (s === n) return Ra(l), e;
        if (s === r) return Ra(l), t;
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
function mu(e) {
  return e = Jd(e), e !== null ? hu(e) : null;
}
function hu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gu = Qe.unstable_scheduleCallback, Da = Qe.unstable_cancelCallback, Zd = Qe.unstable_shouldYield, ef = Qe.unstable_requestPaint, me = Qe.unstable_now, tf = Qe.unstable_getCurrentPriorityLevel, Di = Qe.unstable_ImmediatePriority, yu = Qe.unstable_UserBlockingPriority, hl = Qe.unstable_NormalPriority, nf = Qe.unstable_LowPriority, vu = Qe.unstable_IdlePriority, Al = null, pt = null;
function rf(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function") try {
    pt.onCommitFiberRoot(Al, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var at = Math.clz32 ? Math.clz32 : af, lf = Math.log, sf = Math.LN2;
function af(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (lf(e) / sf | 0) | 0;
}
var Or = 64, Fr = 4194304;
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
function of(e, t) {
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
function uf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - at(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = of(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Qs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wu() {
  var e = Or;
  return Or <<= 1, !(Or & 4194240) && (Or = 64), e;
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function cf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - at(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function zi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var te = 0;
function xu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _u, Ai, ku, Su, ju, Bs = !1, $r = [], Pt = null, Rt = null, Dt = null, fr = /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map(), Tt = [], df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
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
function ff(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Pt = Qn(Pt, e, t, n, r, l), !0;
    case "dragenter":
      return Rt = Qn(Rt, e, t, n, r, l), !0;
    case "mouseover":
      return Dt = Qn(Dt, e, t, n, r, l), !0;
    case "pointerover":
      var s = l.pointerId;
      return fr.set(s, Qn(fr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return s = l.pointerId, pr.set(s, Qn(pr.get(s) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Eu(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = pu(n), t !== null) {
          e.blockedOn = t, ju(e.priority, function() {
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
function Aa(e, t, n) {
  el(e) && n.delete(t);
}
function pf() {
  Bs = !1, Pt !== null && el(Pt) && (Pt = null), Rt !== null && el(Rt) && (Rt = null), Dt !== null && el(Dt) && (Dt = null), fr.forEach(Aa), pr.forEach(Aa);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bs || (Bs = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, pf)));
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
  for (Pt !== null && Bn(Pt, e), Rt !== null && Bn(Rt, e), Dt !== null && Bn(Dt, e), fr.forEach(t), pr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Eu(n), n.blockedOn === null && Tt.shift();
}
var Nn = Et.ReactCurrentBatchConfig, yl = !0;
function mf(e, t, n, r) {
  var l = te, s = Nn.transition;
  Nn.transition = null;
  try {
    te = 1, Oi(e, t, n, r);
  } finally {
    te = l, Nn.transition = s;
  }
}
function hf(e, t, n, r) {
  var l = te, s = Nn.transition;
  Nn.transition = null;
  try {
    te = 4, Oi(e, t, n, r);
  } finally {
    te = l, Nn.transition = s;
  }
}
function Oi(e, t, n, r) {
  if (yl) {
    var l = Hs(e, t, n, r);
    if (l === null) ys(e, t, r, vl, n), za(e, r);
    else if (ff(l, e, t, n, r)) r.stopPropagation();
    else if (za(e, r), t & 4 && -1 < df.indexOf(e)) {
      for (; l !== null; ) {
        var s = Lr(l);
        if (s !== null && _u(s), s = Hs(e, t, n, r), s === null && ys(e, t, r, vl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else ys(e, t, r, null, n);
  }
}
var vl = null;
function Hs(e, t, n, r) {
  if (vl = null, e = Ri(r), e = Xt(e), e !== null) if (t = on(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = pu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return vl = e, null;
}
function Cu(e) {
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
      switch (tf()) {
        case Di:
          return 1;
        case yu:
          return 4;
        case hl:
        case nf:
          return 16;
        case vu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Fi = null, tl = null;
function Nu() {
  if (tl) return tl;
  var e, t = Fi, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, s = l.length;
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
function Oa() {
  return !1;
}
function He(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ur : Oa, this.isPropagationStopped = Oa, this;
  }
  return ce(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, $i = He($n), Tr = ce({}, $n, { view: 0, detail: 0 }), gf = He(Tr), os, us, Hn, Ol = ce({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ui, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (os = e.screenX - Hn.screenX, us = e.screenY - Hn.screenY) : us = os = 0, Hn = e), os);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : us;
} }), Fa = He(Ol), yf = ce({}, Ol, { dataTransfer: 0 }), vf = He(yf), wf = ce({}, Tr, { relatedTarget: 0 }), cs = He(wf), xf = ce({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _f = He(xf), kf = ce({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sf = He(kf), jf = ce({}, $n, { data: 0 }), $a = He(jf), Ef = {
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
}, Cf = {
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
}, Nf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function If(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nf[e]) ? !!t[e] : !1;
}
function Ui() {
  return If;
}
var Tf = ce({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Ef[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ui, charCode: function(e) {
  return e.type === "keypress" ? nl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Lf = He(Tf), Mf = ce({}, Ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ua = He(Mf), bf = ce({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ui }), Pf = He(bf), Rf = ce({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Df = He(Rf), zf = ce({}, Ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Af = He(zf), Of = [9, 13, 27, 32], Vi = _t && "CompositionEvent" in window, nr = null;
_t && "documentMode" in document && (nr = document.documentMode);
var Ff = _t && "TextEvent" in window && !nr, Iu = _t && (!Vi || nr && 8 < nr && 11 >= nr), Va = " ", Wa = !1;
function Tu(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
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
function Lu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function $f(e, t) {
  switch (e) {
    case "compositionend":
      return Lu(t);
    case "keypress":
      return t.which !== 32 ? null : (Wa = !0, Va);
    case "textInput":
      return e = t.data, e === Va && Wa ? null : e;
    default:
      return null;
  }
}
function Uf(e, t) {
  if (mn) return e === "compositionend" || !Vi && Tu(e, t) ? (e = Nu(), tl = Fi = Mt = null, mn = !1, e) : null;
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
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vf[e.type] : t === "textarea";
}
function Mu(e, t, n, r) {
  ou(r), t = wl(t, "onChange"), 0 < t.length && (n = new $i("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var rr = null, hr = null;
function Wf(e) {
  Vu(e, 0);
}
function Fl(e) {
  var t = yn(e);
  if (tu(t)) return e;
}
function Qf(e, t) {
  if (e === "change") return t;
}
var bu = !1;
if (_t) {
  var ds;
  if (_t) {
    var fs = "oninput" in document;
    if (!fs) {
      var Ba = document.createElement("div");
      Ba.setAttribute("oninput", "return;"), fs = typeof Ba.oninput == "function";
    }
    ds = fs;
  } else ds = !1;
  bu = ds && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  rr && (rr.detachEvent("onpropertychange", Pu), hr = rr = null);
}
function Pu(e) {
  if (e.propertyName === "value" && Fl(hr)) {
    var t = [];
    Mu(t, hr, e, Ri(e)), fu(Wf, t);
  }
}
function Bf(e, t, n) {
  e === "focusin" ? (Ha(), rr = t, hr = n, rr.attachEvent("onpropertychange", Pu)) : e === "focusout" && Ha();
}
function Hf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(hr);
}
function Gf(e, t) {
  if (e === "click") return Fl(t);
}
function Kf(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function Yf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : Yf;
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
function Ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ka(e, t) {
  var n = Ga(e);
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
    n = Ga(n);
  }
}
function Ru(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Du() {
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
function Xf(e) {
  var t = Du(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ru(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Ka(n, s);
        var a = Ka(
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
var qf = _t && "documentMode" in document && 11 >= document.documentMode, hn = null, Gs = null, lr = null, Ks = !1;
function Ya(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ks || hn == null || hn !== fl(r) || (r = hn, "selectionStart" in r && Wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && gr(lr, r) || (lr = r, r = wl(Gs, "onSelect"), 0 < r.length && (t = new $i("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ps = {}, zu = {};
_t && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function $l(e) {
  if (ps[e]) return ps[e];
  if (!gn[e]) return e;
  var t = gn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zu) return ps[e] = t[n];
  return e;
}
var Au = $l("animationend"), Ou = $l("animationiteration"), Fu = $l("animationstart"), $u = $l("transitionend"), Uu = /* @__PURE__ */ new Map(), Xa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Uu.set(e, t), an(t, [e]);
}
for (var ms = 0; ms < Xa.length; ms++) {
  var hs = Xa[ms], Jf = hs.toLowerCase(), Zf = hs[0].toUpperCase() + hs.slice(1);
  Wt(Jf, "on" + Zf);
}
Wt(Au, "onAnimationEnd");
Wt(Ou, "onAnimationIteration");
Wt(Fu, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt($u, "onTransitionEnd");
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
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ep = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qd(r, t, void 0, e), e.currentTarget = null;
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        qa(l, o, c), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        qa(l, o, c), s = u;
      }
    }
  }
  if (ml) throw e = Ws, ml = !1, Ws = null, e;
}
function se(e, t) {
  var n = t[Zs];
  n === void 0 && (n = t[Zs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Wu(t, e, 2, !1), n.add(r));
}
function gs(e, t, n) {
  var r = 0;
  t && (r |= 4), Wu(n, e, r, t);
}
var Wr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Wr]) {
    e[Wr] = !0, Xo.forEach(function(n) {
      n !== "selectionchange" && (ep.has(n) || gs(n, !1, e), gs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || (t[Wr] = !0, gs("selectionchange", !1, t));
  }
}
function Wu(e, t, n, r) {
  switch (Cu(t)) {
    case 1:
      var l = mf;
      break;
    case 4:
      l = hf;
      break;
    default:
      l = Oi;
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
  fu(function() {
    var c = s, m = Ri(n), x = [];
    e: {
      var h = Uu.get(e);
      if (h !== void 0) {
        var g = $i, w = e;
        switch (e) {
          case "keypress":
            if (nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Lf;
            break;
          case "focusin":
            w = "focus", g = cs;
            break;
          case "focusout":
            w = "blur", g = cs;
            break;
          case "beforeblur":
          case "afterblur":
            g = cs;
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
            g = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = vf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Pf;
            break;
          case Au:
          case Ou:
          case Fu:
            g = _f;
            break;
          case $u:
            g = Df;
            break;
          case "scroll":
            g = gf;
            break;
          case "wheel":
            g = Af;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ua;
        }
        var y = (t & 4) !== 0, k = !y && e === "scroll", f = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var j = p.stateNode;
          if (p.tag === 5 && j !== null && (p = j, f !== null && (j = dr(d, f), j != null && y.push(vr(d, j, p)))), k) break;
          d = d.return;
        }
        0 < y.length && (h = new g(h, w, null, n, m), x.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", h && n !== $s && (w = n.relatedTarget || n.fromElement) && (Xt(w) || w[kt])) break e;
        if ((g || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = c, w = w ? Xt(w) : null, w !== null && (k = on(w), w !== k || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (y = Fa, j = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ua, j = "onPointerLeave", f = "onPointerEnter", d = "pointer"), k = g == null ? h : yn(g), p = w == null ? h : yn(w), h = new y(j, d + "leave", g, n, m), h.target = k, h.relatedTarget = p, j = null, Xt(m) === c && (y = new y(f, d + "enter", w, n, m), y.target = p, y.relatedTarget = k, j = y), k = j, g && w) t: {
            for (y = g, f = w, d = 0, p = y; p; p = dn(p)) d++;
            for (p = 0, j = f; j; j = dn(j)) p++;
            for (; 0 < d - p; ) y = dn(y), d--;
            for (; 0 < p - d; ) f = dn(f), p--;
            for (; d--; ) {
              if (y === f || f !== null && y === f.alternate) break t;
              y = dn(y), f = dn(f);
            }
            y = null;
          }
          else y = null;
          g !== null && Ja(x, h, g, y, !1), w !== null && k !== null && Ja(x, k, w, y, !0);
        }
      }
      e: {
        if (h = c ? yn(c) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file") var C = Qf;
        else if (Qa(h)) if (bu) C = Kf;
        else {
          C = Hf;
          var L = Bf;
        }
        else (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = Gf);
        if (C && (C = C(e, c))) {
          Mu(x, C, n, m);
          break e;
        }
        L && L(e, h, c), e === "focusout" && (L = h._wrapperState) && L.controlled && h.type === "number" && Ds(h, "number", h.value);
      }
      switch (L = c ? yn(c) : window, e) {
        case "focusin":
          (Qa(L) || L.contentEditable === "true") && (hn = L, Gs = c, lr = null);
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
          Ks = !1, Ya(x, n, m);
          break;
        case "selectionchange":
          if (qf) break;
        case "keydown":
        case "keyup":
          Ya(x, n, m);
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
      else mn ? Tu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Iu && n.locale !== "ko" && (mn || E !== "onCompositionStart" ? E === "onCompositionEnd" && mn && (_ = Nu()) : (Mt = m, Fi = "value" in Mt ? Mt.value : Mt.textContent, mn = !0)), L = wl(c, E), 0 < L.length && (E = new $a(E, e, null, n, m), x.push({ event: E, listeners: L }), _ ? E.data = _ : (_ = Lu(n), _ !== null && (E.data = _)))), (_ = Ff ? $f(e, n) : Uf(e, n)) && (c = wl(c, "onBeforeInput"), 0 < c.length && (m = new $a("onBeforeInput", "beforeinput", null, n, m), x.push({ event: m, listeners: c }), m.data = _));
    }
    Vu(x, t);
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
function Ja(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = dr(n, s), u != null && a.unshift(vr(n, u, o))) : l || (u = dr(n, s), u != null && a.push(vr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var tp = /\r\n?/g, np = /\u0000|\uFFFD/g;
function Za(e) {
  return (typeof e == "string" ? e : "" + e).replace(tp, `
`).replace(np, "");
}
function Qr(e, t, n) {
  if (t = Za(t), Za(e) !== t && n) throw Error(I(425));
}
function xl() {
}
var Ys = null, Xs = null;
function qs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Js = typeof setTimeout == "function" ? setTimeout : void 0, rp = typeof clearTimeout == "function" ? clearTimeout : void 0, eo = typeof Promise == "function" ? Promise : void 0, lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof eo < "u" ? function(e) {
  return eo.resolve(null).then(e).catch(sp);
} : Js;
function sp(e) {
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
function zt(e) {
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
function to(e) {
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
var Un = Math.random().toString(36).slice(2), ft = "__reactFiber$" + Un, wr = "__reactProps$" + Un, kt = "__reactContainer$" + Un, Zs = "__reactEvents$" + Un, ip = "__reactListeners$" + Un, ap = "__reactHandles$" + Un;
function Xt(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kt] || n[ft]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = to(e); e !== null; ) {
        if (n = e[ft]) return n;
        e = to(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[ft] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
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
function ie(e) {
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
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function _l() {
  ie(Ae), ie(Ie);
}
function no(e, t, n) {
  if (Ie.current !== Vt) throw Error(I(168));
  le(Ie, t), le(Ae, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(I(108, Qd(e) || "Unknown", l));
  return ce({}, n, r);
}
function kl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, tn = Ie.current, le(Ie, e), le(Ae, Ae.current), !0;
}
function ro(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = Qu(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ie(Ae), ie(Ie), le(Ie, e)) : ie(Ae), le(Ae, n);
}
var yt = null, Vl = !1, ws = !1;
function Bu(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function op(e) {
  Vl = !0, Bu(e);
}
function Bt() {
  if (!ws && yt !== null) {
    ws = !0;
    var e = 0, t = te;
    try {
      var n = yt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Vl = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), gu(Di, Bt), l;
    } finally {
      te = t, ws = !1;
    }
  }
  return null;
}
var wn = [], xn = 0, Sl = null, jl = 0, Ge = [], Ke = 0, nn = null, vt = 1, wt = "";
function Kt(e, t) {
  wn[xn++] = jl, wn[xn++] = Sl, Sl = e, jl = t;
}
function Hu(e, t, n) {
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
  e.return !== null && (Kt(e, 1), Hu(e, 1, 0));
}
function Bi(e) {
  for (; e === Sl; ) Sl = wn[--xn], wn[xn] = null, jl = wn[--xn], wn[xn] = null;
  for (; e === nn; ) nn = Ge[--Ke], Ge[Ke] = null, wt = Ge[--Ke], Ge[Ke] = null, vt = Ge[--Ke], Ge[Ke] = null;
}
var Ve = null, Ue = null, ae = !1, st = null;
function Gu(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function lo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = zt(t.firstChild), !0) : !1;
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
  if (ae) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!lo(e, t)) {
        if (ti(e)) throw Error(I(418));
        t = zt(n.nextSibling);
        var r = Ve;
        t && lo(e, t) ? Gu(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, Ve = e);
      }
    } else {
      if (ti(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, ae = !1, Ve = e;
    }
  }
}
function so(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ve = e;
}
function Br(e) {
  if (e !== Ve) return !1;
  if (!ae) return so(e), ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qs(e.type, e.memoizedProps)), t && (t = Ue)) {
    if (ti(e)) throw Ku(), Error(I(418));
    for (; t; ) Gu(e, t), t = zt(t.nextSibling);
  }
  if (so(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = zt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Ve ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ku() {
  for (var e = Ue; e; ) e = zt(e.nextSibling);
}
function bn() {
  Ue = Ve = null, ae = !1;
}
function Hi(e) {
  st === null ? st = [e] : st.push(e);
}
var up = Et.ReactCurrentBatchConfig;
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
function io(e) {
  var t = e._init;
  return t(e._payload);
}
function Yu(e) {
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
    var C = p.type;
    return C === pn ? m(f, d, p.props.children, j, p.key) : d !== null && (d.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Nt && io(C) === d.type) ? (j = l(d, p.props), j.ref = Gn(f, d, p), j.return = f, j) : (j = ul(p.type, p.key, p.props, null, f.mode, j), j.ref = Gn(f, d, p), j.return = f, j);
  }
  function c(f, d, p, j) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Ns(p, f.mode, j), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function m(f, d, p, j, C) {
    return d === null || d.tag !== 7 ? (d = en(p, f.mode, j, C), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function x(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Cs("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Dr:
          return p = ul(d.type, d.key, d.props, null, f.mode, p), p.ref = Gn(f, null, d), p.return = f, p;
        case fn:
          return d = Ns(d, f.mode, p), d.return = f, d;
        case Nt:
          var j = d._init;
          return x(f, j(d._payload), p);
      }
      if (qn(d) || Vn(d)) return d = en(d, f.mode, p, null), d.return = f, d;
      Hr(f, d);
    }
    return null;
  }
  function h(f, d, p, j) {
    var C = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return C !== null ? null : o(f, d, "" + p, j);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          return p.key === C ? u(f, d, p, j) : null;
        case fn:
          return p.key === C ? c(f, d, p, j) : null;
        case Nt:
          return C = p._init, h(
            f,
            d,
            C(p._payload),
            j
          );
      }
      if (qn(p) || Vn(p)) return C !== null ? null : m(f, d, p, j, null);
      Hr(f, p);
    }
    return null;
  }
  function g(f, d, p, j, C) {
    if (typeof j == "string" && j !== "" || typeof j == "number") return f = f.get(p) || null, o(d, f, "" + j, C);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Dr:
          return f = f.get(j.key === null ? p : j.key) || null, u(d, f, j, C);
        case fn:
          return f = f.get(j.key === null ? p : j.key) || null, c(d, f, j, C);
        case Nt:
          var L = j._init;
          return g(f, d, p, L(j._payload), C);
      }
      if (qn(j) || Vn(j)) return f = f.get(p) || null, m(d, f, j, C, null);
      Hr(d, j);
    }
    return null;
  }
  function w(f, d, p, j) {
    for (var C = null, L = null, _ = d, E = d = 0, P = null; _ !== null && E < p.length; E++) {
      _.index > E ? (P = _, _ = null) : P = _.sibling;
      var T = h(f, _, p[E], j);
      if (T === null) {
        _ === null && (_ = P);
        break;
      }
      e && _ && T.alternate === null && t(f, _), d = s(T, d, E), L === null ? C = T : L.sibling = T, L = T, _ = P;
    }
    if (E === p.length) return n(f, _), ae && Kt(f, E), C;
    if (_ === null) {
      for (; E < p.length; E++) _ = x(f, p[E], j), _ !== null && (d = s(_, d, E), L === null ? C = _ : L.sibling = _, L = _);
      return ae && Kt(f, E), C;
    }
    for (_ = r(f, _); E < p.length; E++) P = g(_, f, E, p[E], j), P !== null && (e && P.alternate !== null && _.delete(P.key === null ? E : P.key), d = s(P, d, E), L === null ? C = P : L.sibling = P, L = P);
    return e && _.forEach(function(S) {
      return t(f, S);
    }), ae && Kt(f, E), C;
  }
  function y(f, d, p, j) {
    var C = Vn(p);
    if (typeof C != "function") throw Error(I(150));
    if (p = C.call(p), p == null) throw Error(I(151));
    for (var L = C = null, _ = d, E = d = 0, P = null, T = p.next(); _ !== null && !T.done; E++, T = p.next()) {
      _.index > E ? (P = _, _ = null) : P = _.sibling;
      var S = h(f, _, T.value, j);
      if (S === null) {
        _ === null && (_ = P);
        break;
      }
      e && _ && S.alternate === null && t(f, _), d = s(S, d, E), L === null ? C = S : L.sibling = S, L = S, _ = P;
    }
    if (T.done) return n(
      f,
      _
    ), ae && Kt(f, E), C;
    if (_ === null) {
      for (; !T.done; E++, T = p.next()) T = x(f, T.value, j), T !== null && (d = s(T, d, E), L === null ? C = T : L.sibling = T, L = T);
      return ae && Kt(f, E), C;
    }
    for (_ = r(f, _); !T.done; E++, T = p.next()) T = g(_, f, E, T.value, j), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? E : T.key), d = s(T, d, E), L === null ? C = T : L.sibling = T, L = T);
    return e && _.forEach(function(R) {
      return t(f, R);
    }), ae && Kt(f, E), C;
  }
  function k(f, d, p, j) {
    if (typeof p == "object" && p !== null && p.type === pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          e: {
            for (var C = p.key, L = d; L !== null; ) {
              if (L.key === C) {
                if (C = p.type, C === pn) {
                  if (L.tag === 7) {
                    n(f, L.sibling), d = l(L, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (L.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Nt && io(C) === L.type) {
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
      if (qn(p)) return w(f, d, p, j);
      if (Vn(p)) return y(f, d, p, j);
      Hr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = Cs(p, f.mode, j), d.return = f, f = d), a(f)) : n(f, d);
  }
  return k;
}
var Pn = Yu(!0), Xu = Yu(!1), El = Qt(null), Cl = null, _n = null, Gi = null;
function Ki() {
  Gi = _n = Cl = null;
}
function Yi(e) {
  var t = El.current;
  ie(El), e._currentValue = t;
}
function ri(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function In(e, t) {
  Cl = e, Gi = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (Gi !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
    if (Cl === null) throw Error(I(308));
    _n = e, Cl.dependencies = { lanes: 0, firstContext: e };
  } else _n = _n.next = e;
  return t;
}
var qt = null;
function Xi(e) {
  qt === null ? qt = [e] : qt.push(e);
}
function qu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Xi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function qi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ju(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, St(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Xi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, St(e, n);
}
function rl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zi(e, n);
  }
}
function ao(e, t) {
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
    var m = e.alternate;
    m !== null && (m = m.updateQueue, o = m.lastBaseUpdate, o !== a && (o === null ? m.firstBaseUpdate = c : o.next = c, m.lastBaseUpdate = u));
  }
  if (s !== null) {
    var x = l.baseState;
    a = 0, m = c = u = null, o = s;
    do {
      var h = o.lane, g = o.eventTime;
      if ((r & h) === h) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, y = o;
          switch (h = t, g = n, y.tag) {
            case 1:
              if (w = y.payload, typeof w == "function") {
                x = w.call(g, x, h);
                break e;
              }
              x = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = y.payload, h = typeof w == "function" ? w.call(g, x, h) : w, h == null) break e;
              x = ce({}, x, h);
              break e;
            case 2:
              It = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
      } else g = { eventTime: g, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, m === null ? (c = m = g, u = x) : m = m.next = g, a |= h;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (u = x), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ln |= a, e.lanes = a, e.memoizedState = x;
  }
}
function oo(e, t, n) {
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
  ie(mt), le(mt, t);
}
function Rn() {
  ie(mt), ie(xr), ie(_r);
}
function Zu(e) {
  Jt(_r.current);
  var t = Jt(mt.current), n = As(t, e.type);
  t !== n && (le(xr, e), le(mt, n));
}
function Zi(e) {
  xr.current === e && (ie(mt), ie(xr));
}
var oe = Qt(0);
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
var ll = Et.ReactCurrentDispatcher, _s = Et.ReactCurrentBatchConfig, rn = 0, ue = null, ge = null, we = null, Tl = !1, sr = !1, kr = 0, cp = 0;
function Ee() {
  throw Error(I(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, l, s) {
  if (rn = s, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? mp : hp, e = n(r, l), sr) {
    s = 0;
    do {
      if (sr = !1, kr = 0, 25 <= s) throw Error(I(301));
      s += 1, we = ge = null, t.updateQueue = null, ll.current = gp, e = n(r, l);
    } while (sr);
  }
  if (ll.current = Ll, t = ge !== null && ge.next !== null, rn = 0, we = ge = ue = null, Tl = !1, t) throw Error(I(300));
  return e;
}
function ra() {
  var e = kr !== 0;
  return kr = 0, e;
}
function dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? ue.memoizedState = we = e : we = we.next = e, we;
}
function Je() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = we === null ? ue.memoizedState : we.next;
  if (t !== null) we = t, ge = e;
  else {
    if (e === null) throw Error(I(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, we === null ? ue.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ks(e) {
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
      var m = c.lane;
      if ((rn & m) === m) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var x = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = x, a = r) : u = u.next = x, ue.lanes |= m, ln |= m;
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? a = r : u.next = o, ut(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, ue.lanes |= s, ln |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ss(e) {
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
    ut(s, t.memoizedState) || (ze = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function ec() {
}
function tc(e, t) {
  var n = ue, r = Je(), l = t(), s = !ut(r.memoizedState, l);
  if (s && (r.memoizedState = l, ze = !0), r = r.queue, la(lc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, jr(9, rc.bind(null, n, r, l, t), void 0, null), xe === null) throw Error(I(349));
    rn & 30 || nc(n, t, l);
  }
  return l;
}
function nc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, sc(t) && ic(e);
}
function lc(e, t, n) {
  return n(function() {
    sc(t) && ic(e);
  });
}
function sc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function ic(e) {
  var t = St(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function uo(e) {
  var t = dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = pp.bind(null, ue, e), [t.memoizedState, e];
}
function jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ac() {
  return Je().memoizedState;
}
function sl(e, t, n, r) {
  var l = dt();
  ue.flags |= e, l.memoizedState = jr(1 | t, n, void 0, r === void 0 ? null : r);
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
  ue.flags |= e, l.memoizedState = jr(1 | t, n, s, r);
}
function co(e, t) {
  return sl(8390656, 8, e, t);
}
function la(e, t) {
  return Wl(2048, 8, e, t);
}
function oc(e, t) {
  return Wl(4, 2, e, t);
}
function uc(e, t) {
  return Wl(4, 4, e, t);
}
function cc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function dc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wl(4, 4, cc.bind(null, t, e), n);
}
function sa() {
}
function fc(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pc(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function mc(e, t, n) {
  return rn & 21 ? (ut(n, t) || (n = wu(), ue.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n);
}
function dp(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _s.transition;
  _s.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, _s.transition = r;
  }
}
function hc() {
  return Je().memoizedState;
}
function fp(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gc(e)) yc(t, n);
  else if (n = qu(e, t, n, r), n !== null) {
    var l = be();
    ot(n, e, r, l), vc(n, t, r);
  }
}
function pp(e, t, n) {
  var r = Ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gc(e)) yc(t, l);
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
    n = qu(e, t, l, r), n !== null && (l = be(), ot(n, e, r, l), vc(n, t, r));
  }
}
function gc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function yc(e, t) {
  sr = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function vc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zi(e, n);
  }
}
var Ll = { readContext: qe, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, mp = { readContext: qe, useCallback: function(e, t) {
  return dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: co, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sl(
    4194308,
    4,
    cc.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = fp.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: uo, useDebugValue: sa, useDeferredValue: function(e) {
  return dt().memoizedState = e;
}, useTransition: function() {
  var e = uo(!1), t = e[0];
  return e = dp.bind(null, e[1]), dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, l = dt();
  if (ae) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(I(349));
    rn & 30 || nc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, co(lc.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, jr(9, rc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = dt(), t = xe.identifierPrefix;
  if (ae) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = cp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, hp = {
  readContext: qe,
  useCallback: fc,
  useContext: qe,
  useEffect: la,
  useImperativeHandle: dc,
  useInsertionEffect: oc,
  useLayoutEffect: uc,
  useMemo: pc,
  useReducer: ks,
  useRef: ac,
  useState: function() {
    return ks(Sr);
  },
  useDebugValue: sa,
  useDeferredValue: function(e) {
    var t = Je();
    return mc(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = ks(Sr)[0], t = Je().memoizedState;
    return [e, t];
  },
  useMutableSource: ec,
  useSyncExternalStore: tc,
  useId: hc,
  unstable_isNewReconciler: !1
}, gp = { readContext: qe, useCallback: fc, useContext: qe, useEffect: la, useImperativeHandle: dc, useInsertionEffect: oc, useLayoutEffect: uc, useMemo: pc, useReducer: Ss, useRef: ac, useState: function() {
  return Ss(Sr);
}, useDebugValue: sa, useDeferredValue: function(e) {
  var t = Je();
  return ge === null ? t.memoizedState = e : mc(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = Ss(Sr)[0], t = Je().memoizedState;
  return [e, t];
}, useMutableSource: ec, useSyncExternalStore: tc, useId: hc, unstable_isNewReconciler: !1 };
function rt(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), l = Ft(e), s = xt(r, l);
  s.payload = t, n != null && (s.callback = n), t = At(e, s, l), t !== null && (ot(t, e, l, r), rl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), l = Ft(e), s = xt(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = At(e, s, l), t !== null && (ot(t, e, l, r), rl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = Ft(e), l = xt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (ot(t, e, r, n), rl(t, e, r));
} };
function fo(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(l, s) : !0;
}
function wc(e, t, n) {
  var r = !1, l = Vt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = qe(s) : (l = Oe(t) ? tn : Ie.current, r = t.contextTypes, s = (r = r != null) ? Mn(e, l) : Vt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function po(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function si(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, qi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = qe(s) : (s = Oe(t) ? tn : Ie.current, l.context = Mn(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (li(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ql.enqueueReplaceState(l, l.state, null), Nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Wd(r), r = r.return;
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
var yp = typeof WeakMap == "function" ? WeakMap : Map;
function xc(e, t, n) {
  n = xt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    bl || (bl = !0, gi = r), ii(e, t);
  }, n;
}
function _c(e, t, n) {
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
    ii(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function mo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Mp.bind(null, e, t, n), t.then(e, e));
}
function ho(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function go(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var vp = Et.ReactCurrentOwner, ze = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Xu(t, null, n, r) : Pn(t, e.child, n, r);
}
function yo(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return In(t, l), r = na(e, t, n, r, s, l), n = ra(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && n && Qi(t), t.flags |= 1, Le(e, t, r, l), t.child);
}
function vo(e, t, n, r, l) {
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
    if (gr(s, r) && e.ref === t.ref) if (ze = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (ze = !0);
    else return t.lanes = e.lanes, jt(e, t, l);
  }
  return ai(e, t, n, r, l);
}
function Sc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Sn, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Sn, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, le(Sn, $e), $e |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, le(Sn, $e), $e |= r;
  return Le(e, t, l, n), t.child;
}
function jc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ai(e, t, n, r, l) {
  var s = Oe(n) ? tn : Ie.current;
  return s = Mn(t, s), In(t, l), n = na(e, t, n, r, s, l), r = ra(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && r && Qi(t), t.flags |= 1, Le(e, t, n, l), t.child);
}
function wo(e, t, n, r, l) {
  if (Oe(n)) {
    var s = !0;
    kl(t);
  } else s = !1;
  if (In(t, l), t.stateNode === null) il(e, t), wc(t, n, r), si(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = qe(c) : (c = Oe(n) ? tn : Ie.current, c = Mn(t, c));
    var m = n.getDerivedStateFromProps, x = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && po(t, a, r, c), It = !1;
    var h = t.memoizedState;
    a.state = h, Nl(t, r, a, l), u = t.memoizedState, o !== r || h !== u || Ae.current || It ? (typeof m == "function" && (li(t, n, m, r), u = t.memoizedState), (o = It || fo(t, n, o, r, h, u, c)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Ju(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : rt(t.type, o), a.props = c, x = t.pendingProps, h = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = qe(u) : (u = Oe(n) ? tn : Ie.current, u = Mn(t, u));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== x || h !== u) && po(t, a, r, u), It = !1, h = t.memoizedState, a.state = h, Nl(t, r, a, l);
    var w = t.memoizedState;
    o !== x || h !== w || Ae.current || It ? (typeof g == "function" && (li(t, n, g, r), w = t.memoizedState), (c = It || fo(t, n, c, r, h, w, u) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return oi(e, t, n, r, s, l);
}
function oi(e, t, n, r, l, s) {
  jc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && ro(t, n, !1), jt(e, t, s);
  r = t.stateNode, vp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pn(t, e.child, null, s), t.child = Pn(t, null, o, s)) : Le(e, t, o, s), t.memoizedState = r.state, l && ro(t, n, !0), t.child;
}
function Ec(e) {
  var t = e.stateNode;
  t.pendingContext ? no(e, t.pendingContext, t.pendingContext !== t.context) : t.context && no(e, t.context, !1), Ji(e, t.containerInfo);
}
function xo(e, t, n, r, l) {
  return bn(), Hi(l), t.flags |= 256, Le(e, t, n, r), t.child;
}
var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
function ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cc(e, t, n) {
  var r = t.pendingProps, l = oe.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(oe, l & 1), e === null)
    return ni(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Gl(a, r, 0, null), e = en(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ci(n), t.memoizedState = ui, e) : ia(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return wp(e, t, a, r, o, l, n);
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
function wp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = js(Error(I(422))), Gr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Gl({ mode: "visible", children: r.children }, l, 0, null), s = en(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pn(t, e.child, null, a), t.child.memoizedState = ci(a), t.memoizedState = ui, s);
  if (!(t.mode & 1)) return Gr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = js(s, r, void 0), Gr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, ze || o) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, St(e, l), ot(r, e, l, -1));
    }
    return fa(), r = js(Error(I(421))), Gr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Ue = zt(l.nextSibling), Ve = t, ae = !0, st = null, e !== null && (Ge[Ke++] = vt, Ge[Ke++] = wt, Ge[Ke++] = nn, vt = e.id, wt = e.overflow, nn = t), t = ia(t, r.children), t.flags |= 4096, t);
}
function _o(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ri(e.return, t, n);
}
function Es(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Nc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (Le(e, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && _o(e, n, t);
      else if (e.tag === 19) _o(e, n, t);
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
  if (le(oe, r), !(t.mode & 1)) t.memoizedState = null;
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
function xp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ec(t), bn();
      break;
    case 5:
      Zu(t);
      break;
    case 1:
      Oe(t.type) && kl(t);
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
        return r.dehydrated !== null ? (le(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cc(e, t, n) : (le(oe, oe.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      le(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sc(e, t, n);
  }
  return jt(e, t, n);
}
var Ic, di, Tc, Lc;
Ic = function(e, t) {
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
Tc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Jt(mt.current);
    var s = null;
    switch (n) {
      case "input":
        l = Ps(e, l), r = Ps(e, r), s = [];
        break;
      case "select":
        l = ce({}, l, { value: void 0 }), r = ce({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = zs(e, l), r = zs(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xl);
    }
    Os(n, r);
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
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ur.hasOwnProperty(c) ? (u != null && c === "onScroll" && se("scroll", e), s || o === u || (s = [])) : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!ae) switch (e.tailMode) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function _p(e, t, n) {
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
      return Ce(t), null;
    case 1:
      return Oe(t.type) && _l(), Ce(t), null;
    case 3:
      return r = t.stateNode, Rn(), ie(Ae), ie(Ie), ea(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (wi(st), st = null))), di(e, t), Ce(t), null;
    case 5:
      Zi(t);
      var l = Jt(_r.current);
      if (n = t.type, e !== null && t.stateNode != null) Tc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ce(t), null;
        }
        if (e = Jt(mt.current), Br(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[ft] = t, r[wr] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++) se(Zn[l], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se(
                "error",
                r
              ), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              Ta(r, s), se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, se("invalid", r);
              break;
            case "textarea":
              Ma(r, s), se("invalid", r);
          }
          Os(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Qr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Qr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : ur.hasOwnProperty(a) && o != null && a === "onScroll" && se("scroll", r);
          }
          switch (n) {
            case "input":
              zr(r), La(r, s, !0);
              break;
            case "textarea":
              zr(r), ba(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = xl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[ft] = t, e[wr] = r, Ic(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Fs(n, r), n) {
              case "dialog":
                se("cancel", e), se("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++) se(Zn[l], e);
                l = r;
                break;
              case "source":
                se("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  e
                ), se("load", e), l = r;
                break;
              case "details":
                se("toggle", e), l = r;
                break;
              case "input":
                Ta(e, r), l = Ps(e, r), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ce({}, r, { value: void 0 }), se("invalid", e);
                break;
              case "textarea":
                Ma(e, r), l = zs(e, r), se("invalid", e);
                break;
              default:
                l = r;
            }
            Os(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? au(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && su(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && cr(e, u) : typeof u == "number" && cr(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ur.hasOwnProperty(s) ? u != null && s === "onScroll" && se("scroll", e) : u != null && Li(e, s, u, a));
            }
            switch (n) {
              case "input":
                zr(e), La(e, r, !1);
                break;
              case "textarea":
                zr(e), ba(e);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Lc(e, t, e.memoizedProps, r);
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
      return Ce(t), null;
    case 13:
      if (ie(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ae && Ue !== null && t.mode & 1 && !(t.flags & 128)) Ku(), bn(), t.flags |= 98560, s = !1;
        else if (s = Br(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[ft] = t;
          } else bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), s = !1;
        } else st !== null && (wi(st), st = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : fa())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Rn(), di(e, t), e === null && yr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Yi(t.type._context), Ce(t), null;
    case 17:
      return Oe(t.type) && _l(), Ce(t), null;
    case 19:
      if (ie(oe), s = t.memoizedState, s === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Kn(s, !1);
      else {
        if (ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Il(e), a !== null) {
            for (t.flags |= 128, Kn(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return le(oe, oe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && me() > zn && (t.flags |= 128, r = !0, Kn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Il(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !ae) return Ce(t), null;
        } else 2 * me() - s.renderingStartTime > zn && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = me(), t.sibling = null, n = oe.current, le(oe, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function kp(e, t) {
  switch (Bi(t), t.tag) {
    case 1:
      return Oe(t.type) && _l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Rn(), ie(Ae), ie(Ie), ea(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zi(t), null;
    case 13:
      if (ie(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        bn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ie(oe), null;
    case 4:
      return Rn(), null;
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
var Kr = !1, Ne = !1, Sp = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function kn(e, t) {
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
var ko = !1;
function jp(e, t) {
  if (Ys = yl, e = Du(), Wi(e)) {
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
        var a = 0, o = -1, u = -1, c = 0, m = 0, x = e, h = null;
        t: for (; ; ) {
          for (var g; x !== n || l !== 0 && x.nodeType !== 3 || (o = a + l), x !== s || r !== 0 && x.nodeType !== 3 || (u = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (g = x.firstChild) !== null; )
            h = x, x = g;
          for (; ; ) {
            if (x === e) break t;
            if (h === n && ++c === l && (o = a), h === s && ++m === r && (u = a), (g = x.nextSibling) !== null) break;
            x = h, h = x.parentNode;
          }
          x = g;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xs = { focusedElem: e, selectionRange: n }, yl = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var y = w.memoizedProps, k = w.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : rt(t.type, y), k);
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
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return w = ko, ko = !1, w;
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
function Mc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ft], delete t[wr], delete t[Zs], delete t[ip], delete t[ap])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function So(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bc(e.return)) return null;
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
  for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
}
function Pc(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function") try {
    pt.onCommitFiberUnmount(Al, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || kn(n, t);
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
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && fi(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!Ne && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Ct(e, t, n), Ne = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function jo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sp()), t.forEach(function(r) {
      var l = Pp.bind(null, e, r);
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
      Pc(s, a, l), _e = null, lt = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      fe(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rc(t, e), t = t.sibling;
}
function Rc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tt(t, e), ct(e), r & 4) {
        try {
          ir(3, e, e.return), Bl(3, e);
        } catch (y) {
          fe(e, e.return, y);
        }
        try {
          ir(5, e, e.return);
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 1:
      tt(t, e), ct(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (tt(t, e), ct(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          cr(l, "");
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && nu(l, s), Fs(o, a);
          var c = Fs(o, s);
          for (a = 0; a < u.length; a += 2) {
            var m = u[a], x = u[a + 1];
            m === "style" ? au(l, x) : m === "dangerouslySetInnerHTML" ? su(l, x) : m === "children" ? cr(l, x) : Li(l, m, x, c);
          }
          switch (o) {
            case "input":
              Rs(l, s);
              break;
            case "textarea":
              ru(l, s);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? jn(l, !!s.multiple, g, !1) : h !== !!s.multiple && (s.defaultValue != null ? jn(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jn(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[wr] = s;
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 6:
      if (tt(t, e), ct(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (tt(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        mr(t.containerInfo);
      } catch (y) {
        fe(e, e.return, y);
      }
      break;
    case 4:
      tt(t, e), ct(e);
      break;
    case 13:
      tt(t, e), ct(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (ua = me())), r & 4 && jo(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (c = Ne) || m, tt(t, e), Ne = c) : tt(t, e), ct(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (D = e, m = e.child; m !== null; ) {
          for (x = D = m; D !== null; ) {
            switch (h = D, g = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ir(4, h, h.return);
                break;
              case 1:
                kn(h, h.return);
                var w = h.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    fe(r, n, y);
                  }
                }
                break;
              case 5:
                kn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Co(x);
                  continue;
                }
            }
            g !== null ? (g.return = h, D = g) : Co(x);
          }
          m = m.sibling;
        }
        e: for (m = null, x = e; ; ) {
          if (x.tag === 5) {
            if (m === null) {
              m = x;
              try {
                l = x.stateNode, c ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = x.stateNode, u = x.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = iu("display", a));
              } catch (y) {
                fe(e, e.return, y);
              }
            }
          } else if (x.tag === 6) {
            if (m === null) try {
              x.stateNode.nodeValue = c ? "" : x.memoizedProps;
            } catch (y) {
              fe(e, e.return, y);
            }
          } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
            x.child.return = x, x = x.child;
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            m === x && (m = null), x = x.return;
          }
          m === x && (m = null), x.sibling.return = x.return, x = x.sibling;
        }
      }
      break;
    case 19:
      tt(t, e), ct(e), r & 4 && jo(e);
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
          if (bc(n)) {
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
function Ep(e, t, n) {
  D = e, Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Kr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Ne;
        o = Kr;
        var c = Ne;
        if (Kr = a, (Ne = u) && !c) for (D = l; D !== null; ) a = D, u = a.child, a.tag === 22 && a.memoizedState !== null ? No(l) : u !== null ? (u.return = a, D = u) : No(l);
        for (; s !== null; ) D = s, Dc(s), s = s.sibling;
        D = l, Kr = o, Ne = c;
      }
      Eo(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, D = s) : Eo(e);
  }
}
function Eo(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || Bl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && oo(t, s, r);
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
              oo(t, a, n);
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
                var m = c.memoizedState;
                if (m !== null) {
                  var x = m.dehydrated;
                  x !== null && mr(x);
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
        Ne || t.flags & 512 && pi(t);
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function Co(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function No(e) {
  for (; D !== null; ) {
    var t = D;
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
      D = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, D = o;
      break;
    }
    D = t.return;
  }
}
var Cp = Math.ceil, Ml = Et.ReactCurrentDispatcher, aa = Et.ReactCurrentOwner, Xe = Et.ReactCurrentBatchConfig, X = 0, xe = null, he = null, ke = 0, $e = 0, Sn = Qt(0), ye = 0, Er = null, ln = 0, Hl = 0, oa = 0, ar = null, De = null, ua = 0, zn = 1 / 0, gt = null, bl = !1, gi = null, Ot = null, Yr = !1, bt = null, Pl = 0, or = 0, yi = null, al = -1, ol = 0;
function be() {
  return X & 6 ? me() : al !== -1 ? al : al = me();
}
function Ft(e) {
  return e.mode & 1 ? X & 2 && ke !== 0 ? ke & -ke : up.transition !== null ? (ol === 0 && (ol = wu()), ol) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cu(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < or) throw or = 0, yi = null, Error(I(185));
  Ir(e, n, r), (!(X & 2) || e !== xe) && (e === xe && (!(X & 2) && (Hl |= n), ye === 4 && Lt(e, ke)), Fe(e, r), n === 1 && X === 0 && !(t.mode & 1) && (zn = me() + 500, Vl && Bt()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  uf(e, t);
  var r = gl(e, e === xe ? ke : 0);
  if (r === 0) n !== null && Da(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Da(n), t === 1) e.tag === 0 ? op(Io.bind(null, e)) : Bu(Io.bind(null, e)), lp(function() {
      !(X & 6) && Bt();
    }), n = null;
    else {
      switch (xu(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = yu;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = vu;
          break;
        default:
          n = hl;
      }
      n = Wc(n, zc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zc(e, t) {
  if (al = -1, ol = 0, X & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = gl(e, e === xe ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var s = Oc();
    (xe !== e || ke !== t) && (gt = null, zn = me() + 500, Zt(e, t));
    do
      try {
        Tp();
        break;
      } catch (o) {
        Ac(e, o);
      }
    while (!0);
    Ki(), Ml.current = s, X = l, he !== null ? t = 0 : (xe = null, ke = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (l = Qs(e), l !== 0 && (r = l, t = vi(e, l))), t === 1) throw n = Er, Zt(e, 0), Lt(e, r), Fe(e, me()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Np(l) && (t = Rl(e, r), t === 2 && (s = Qs(e), s !== 0 && (r = s, t = vi(e, s))), t === 1)) throw n = Er, Zt(e, 0), Lt(e, r), Fe(e, me()), n;
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
              be(), e.pingedLanes |= e.suspendedLanes & l;
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
          if (r = l, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cp(r / 1960)) - r, 10 < r) {
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
  return Fe(e, me()), e.callbackNode === n ? zc.bind(null, e) : null;
}
function vi(e, t) {
  var n = ar;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Rl(e, t), e !== 2 && (t = De, De = n, t !== null && wi(t)), e;
}
function wi(e) {
  De === null ? De = e : De.push.apply(De, e);
}
function Np(e) {
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
function Io(e) {
  if (X & 6) throw Error(I(327));
  Tn();
  var t = gl(e, 0);
  if (!(t & 1)) return Fe(e, me()), null;
  var n = Rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qs(e);
    r !== 0 && (t = r, n = vi(e, r));
  }
  if (n === 1) throw n = Er, Zt(e, 0), Lt(e, t), Fe(e, me()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, De, gt), Fe(e, me()), null;
}
function ca(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (zn = me() + 500, Vl && Bt());
  }
}
function sn(e) {
  bt !== null && bt.tag === 0 && !(X & 6) && Tn();
  var t = X;
  X |= 1;
  var n = Xe.transition, r = te;
  try {
    if (Xe.transition = null, te = 1, e) return e();
  } finally {
    te = r, Xe.transition = n, X = t, !(X & 6) && Bt();
  }
}
function da() {
  $e = Sn.current, ie(Sn);
}
function Zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rp(n)), he !== null) for (n = he.return; n !== null; ) {
    var r = n;
    switch (Bi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && _l();
        break;
      case 3:
        Rn(), ie(Ae), ie(Ie), ea();
        break;
      case 5:
        Zi(r);
        break;
      case 4:
        Rn();
        break;
      case 13:
        ie(oe);
        break;
      case 19:
        ie(oe);
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
  if (xe = e, he = e = $t(e.current, null), ke = $e = t, ye = 0, Er = null, oa = Hl = ln = 0, De = ar = null, qt !== null) {
    for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = l, r.next = a;
      }
      n.pending = r;
    }
    qt = null;
  }
  return e;
}
function Ac(e, t) {
  do {
    var n = he;
    try {
      if (Ki(), ll.current = Ll, Tl) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (rn = 0, we = ge = ue = null, sr = !1, kr = 0, aa.current = null, n === null || n.return === null) {
        ye = 1, Er = t, he = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = ke, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, m = o, x = m.tag;
          if (!(m.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var h = m.alternate;
            h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = ho(a);
          if (g !== null) {
            g.flags &= -257, go(g, a, o, s, t), g.mode & 1 && mo(s, c, t), t = g, u = c;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(u), t.updateQueue = y;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              mo(s, c, t), fa();
              break e;
            }
            u = Error(I(426));
          }
        } else if (ae && o.mode & 1) {
          var k = ho(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), go(k, a, o, s, t), Hi(Dn(u, o));
            break e;
          }
        }
        s = u = Dn(u, o), ye !== 4 && (ye = 2), ar === null ? ar = [s] : ar.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = xc(s, u, t);
              ao(s, f);
              break e;
            case 1:
              o = u;
              var d = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ot === null || !Ot.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var j = _c(s, o, t);
                ao(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $c(n);
    } catch (C) {
      t = C, he === n && n !== null && (he = n = n.return);
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
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || !(ln & 268435455) && !(Hl & 268435455) || Lt(xe, ke);
}
function Rl(e, t) {
  var n = X;
  X |= 2;
  var r = Oc();
  (xe !== e || ke !== t) && (gt = null, Zt(e, t));
  do
    try {
      Ip();
      break;
    } catch (l) {
      Ac(e, l);
    }
  while (!0);
  if (Ki(), X = n, Ml.current = r, he !== null) throw Error(I(261));
  return xe = null, ke = 0, ye;
}
function Ip() {
  for (; he !== null; ) Fc(he);
}
function Tp() {
  for (; he !== null && !Zd(); ) Fc(he);
}
function Fc(e) {
  var t = Vc(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? $c(e) : he = t, aa.current = null;
}
function $c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = kp(n, t), n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, he = null;
        return;
      }
    } else if (n = _p(n, t, $e), n !== null) {
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
  var r = te, l = Xe.transition;
  try {
    Xe.transition = null, te = 1, Lp(e, t, n, r);
  } finally {
    Xe.transition = l, te = r;
  }
  return null;
}
function Lp(e, t, n, r) {
  do
    Tn();
  while (bt !== null);
  if (X & 6) throw Error(I(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (cf(e, s), e === xe && (he = xe = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yr || (Yr = !0, Wc(hl, function() {
    return Tn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Xe.transition, Xe.transition = null;
    var a = te;
    te = 1;
    var o = X;
    X |= 4, aa.current = null, jp(e, n), Rc(n, e), Xf(Xs), yl = !!Ys, Xs = Ys = null, e.current = n, Ep(n), ef(), X = o, te = a, Xe.transition = s;
  } else e.current = n;
  if (Yr && (Yr = !1, bt = e, Pl = l), s = e.pendingLanes, s === 0 && (Ot = null), rf(n.stateNode), Fe(e, me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (bl) throw bl = !1, e = gi, gi = null, e;
  return Pl & 1 && e.tag !== 0 && Tn(), s = e.pendingLanes, s & 1 ? e === yi ? or++ : (or = 0, yi = e) : or = 0, Bt(), null;
}
function Tn() {
  if (bt !== null) {
    var e = xu(Pl), t = Xe.transition, n = te;
    try {
      if (Xe.transition = null, te = 16 > e ? 16 : e, bt === null) var r = !1;
      else {
        if (e = bt, bt = null, Pl = 0, X & 6) throw Error(I(331));
        var l = X;
        for (X |= 4, D = e.current; D !== null; ) {
          var s = D, a = s.child;
          if (D.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (D = c; D !== null; ) {
                  var m = D;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, m, s);
                  }
                  var x = m.child;
                  if (x !== null) x.return = m, D = x;
                  else for (; D !== null; ) {
                    m = D;
                    var h = m.sibling, g = m.return;
                    if (Mc(m), m === c) {
                      D = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = g, D = h;
                      break;
                    }
                    D = g;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var k = y.sibling;
                    y.sibling = null, y = k;
                  } while (y !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, D = a;
          else e: for (; D !== null; ) {
            if (s = D, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                ir(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, D = f;
              break e;
            }
            D = s.return;
          }
        }
        var d = e.current;
        for (D = d; D !== null; ) {
          a = D;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, D = p;
          else e: for (a = d; D !== null; ) {
            if (o = D, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Bl(9, o);
              }
            } catch (C) {
              fe(o, o.return, C);
            }
            if (o === a) {
              D = null;
              break e;
            }
            var j = o.sibling;
            if (j !== null) {
              j.return = o.return, D = j;
              break e;
            }
            D = o.return;
          }
        }
        if (X = l, Bt(), pt && typeof pt.onPostCommitFiberRoot == "function") try {
          pt.onPostCommitFiberRoot(Al, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      te = n, Xe.transition = t;
    }
  }
  return !1;
}
function To(e, t, n) {
  t = Dn(n, t), t = xc(e, t, 1), e = At(e, t, 1), t = be(), e !== null && (Ir(e, 1, t), Fe(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) To(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      To(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
        e = Dn(n, e), e = _c(t, e, 1), t = At(t, e, 1), e = be(), t !== null && (Ir(t, 1, e), Fe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Mp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (ke & n) === n && (ye === 4 || ye === 3 && (ke & 130023424) === ke && 500 > me() - ua ? Zt(e, 0) : oa |= n), Fe(e, t);
}
function Uc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fr, Fr <<= 1, !(Fr & 130023424) && (Fr = 4194304)) : t = 1);
  var n = be();
  e = St(e, t), e !== null && (Ir(e, t, n), Fe(e, n));
}
function bp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Uc(e, n);
}
function Pp(e, t) {
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
  r !== null && r.delete(t), Uc(e, n);
}
var Vc;
Vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, xp(e, t, n);
    ze = !!(e.flags & 131072);
  }
  else ze = !1, ae && t.flags & 1048576 && Hu(t, jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      il(e, t), e = t.pendingProps;
      var l = Mn(t, Ie.current);
      In(t, n), l = na(null, t, r, e, l, n);
      var s = ra();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (s = !0, kl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, qi(t), l.updater = Ql, t.stateNode = l, l._reactInternals = t, si(t, r, e, n), t = oi(null, t, r, !0, s, n)) : (t.tag = 0, ae && s && Qi(t), Le(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (il(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Dp(r), e = rt(r, e), l) {
          case 0:
            t = ai(null, t, r, e, n);
            break e;
          case 1:
            t = wo(null, t, r, e, n);
            break e;
          case 11:
            t = yo(null, t, r, e, n);
            break e;
          case 14:
            t = vo(null, t, r, rt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), wo(e, t, r, l, n);
    case 3:
      e: {
        if (Ec(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, Ju(e, t), Nl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = Dn(Error(I(423)), t), t = xo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Dn(Error(I(424)), t), t = xo(e, t, r, n, l);
          break e;
        } else for (Ue = zt(t.stateNode.containerInfo.firstChild), Ve = t, ae = !0, st = null, n = Xu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (bn(), r === l) {
            t = jt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Zu(t), e === null && ni(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, qs(r, l) ? a = null : s !== null && qs(r, s) && (t.flags |= 32), jc(e, t), Le(e, t, a, n), t.child;
    case 6:
      return e === null && ni(t), null;
    case 13:
      return Cc(e, t, n);
    case 4:
      return Ji(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), yo(e, t, r, l, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
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
                    var m = c.pending;
                    m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u;
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
        Le(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, In(t, n), l = qe(l), r = r(l), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = rt(r, t.pendingProps), l = rt(r.type, l), vo(e, t, r, l, n);
    case 15:
      return kc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), il(e, t), t.tag = 1, Oe(r) ? (e = !0, kl(t)) : e = !1, In(t, n), wc(t, r, l), si(t, r, l, n), oi(null, t, r, !0, e, n);
    case 19:
      return Nc(e, t, n);
    case 22:
      return Sc(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Wc(e, t) {
  return gu(e, t);
}
function Rp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new Rp(e, t, n, r);
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
    case Zo:
      return Gl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case qo:
          a = 10;
          break e;
        case Jo:
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
  return e = Ye(22, e, r, t), e.elementType = Zo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
  return e = new zp(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ye(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qi(s), e;
}
function Ap(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qc(e) {
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
          if (Oe(t.type)) {
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
    if (Oe(n)) return Qu(e, n, t);
  }
  return t;
}
function Bc(e, t, n, r, l, s, a, o, u) {
  return e = ma(n, r, !0, e, l, s, a, o, u), e.context = Qc(null), n = e.current, r = be(), l = Ft(n), s = xt(r, l), s.callback = t ?? null, At(n, s, l), e.current.lanes = l, Ir(e, l, r), Fe(e, r), e;
}
function Kl(e, t, n, r) {
  var l = t.current, s = be(), a = Ft(l);
  return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, a), e !== null && (ot(e, l, a, s), rl(e, l, a)), a;
}
function Dl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ha(e, t) {
  Lo(e, t), (e = e.alternate) && Lo(e, t);
}
function Op() {
  return null;
}
var Hc = typeof reportError == "function" ? reportError : function(e) {
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
    }), t[kt] = null;
  }
};
function Yl(e) {
  this._internalRoot = e;
}
Yl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Eu(e);
  }
};
function ya(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Mo() {
}
function Fp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = Dl(a);
        s.call(c);
      };
    }
    var a = Bc(t, r, e, 0, null, !1, !1, "", Mo);
    return e._reactRootContainer = a, e[kt] = a.current, yr(e.nodeType === 8 ? e.parentNode : e), sn(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Dl(u);
      o.call(c);
    };
  }
  var u = ma(e, 0, !1, null, null, !1, !1, "", Mo);
  return e._reactRootContainer = u, e[kt] = u.current, yr(e.nodeType === 8 ? e.parentNode : e), sn(function() {
    Kl(t, u, n, r);
  }), u;
}
function ql(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Dl(a);
        o.call(u);
      };
    }
    Kl(t, a, e, l);
  } else a = Fp(n, t, e, l, r);
  return Dl(a);
}
_u = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 && (zi(t, n | 1), Fe(t, me()), !(X & 6) && (zn = me() + 500, Bt()));
      }
      break;
    case 13:
      sn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var l = be();
          ot(r, e, 1, l);
        }
      }), ha(e, 1);
  }
};
Ai = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = be();
      ot(t, e, 134217728, n);
    }
    ha(e, 134217728);
  }
};
ku = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = St(e, t);
    if (n !== null) {
      var r = be();
      ot(n, e, t, r);
    }
    ha(e, t);
  }
};
Su = function() {
  return te;
};
ju = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
Us = function(e, t, n) {
  switch (t) {
    case "input":
      if (Rs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ul(r);
            if (!l) throw Error(I(90));
            tu(r), Rs(r, l);
          }
        }
      }
      break;
    case "textarea":
      ru(e, n);
      break;
    case "select":
      t = n.value, t != null && jn(e, !!n.multiple, t, !1);
  }
};
cu = ca;
du = sn;
var $p = { usingClientEntryPoint: !1, Events: [Lr, yn, Ul, ou, uu, ca] }, Yn = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Up = { bundleType: Yn.bundleType, version: Yn.version, rendererPackageName: Yn.rendererPackageName, rendererConfig: Yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = mu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yn.findFiberByHostInstance || Op, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber) try {
    Al = Xr.inject(Up), pt = Xr;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ya(t)) throw Error(I(200));
  return Ap(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!ya(e)) throw Error(I(299));
  var n = !1, r = "", l = Hc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ma(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new ga(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = mu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return sn(e);
};
Be.hydrate = function(e, t, n) {
  if (!Xl(t)) throw Error(I(200));
  return ql(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!ya(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Hc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Bc(t, null, e, 1, n ?? null, l, !1, s, a), e[kt] = t.current, yr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Yl(t);
};
Be.render = function(e, t, n) {
  if (!Xl(t)) throw Error(I(200));
  return ql(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Xl(e)) throw Error(I(40));
  return e._reactRootContainer ? (sn(function() {
    ql(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kt] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = ca;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Xl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return ql(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Gc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc);
    } catch (e) {
      console.error(e);
    }
}
Gc(), Go.exports = Be;
var Me = Go.exports, Kc, bo = Me;
Kc = bo.createRoot, bo.hydrateRoot;
var Yc = { exports: {} }, Jl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp = v, Wp = Symbol.for("react.element"), Qp = Symbol.for("react.fragment"), Bp = Object.prototype.hasOwnProperty, Hp = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Bp.call(t, r) && !Gp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Wp, type: e, key: s, ref: a, props: l, _owner: Hp.current };
}
Jl.Fragment = Qp;
Jl.jsx = Xc;
Jl.jsxs = Xc;
Yc.exports = Jl;
var i = Yc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Kp = {
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
const Yp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, m) => v.createElement(
      "svg",
      {
        ref: m,
        ...Kp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${Yp(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([x, h]) => v.createElement(x, h)),
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
const Xp = G("AlertCircle", [
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
const qp = G("AlertTriangle", [
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
const Jp = G("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = G("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = G("ArrowRight", [
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
const Jc = G("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = G("Box", [
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
const tm = G("Calendar", [
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
const nm = G("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = G("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = G("Download", [
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
const sm = G("FileJson", [
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
const im = G("Folder", [
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
const am = G("Info", [
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
const nd = G("LayoutGrid", [
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
const om = G("LayoutList", [
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
const um = G("Link2Off", [
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
const cm = G("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = G("Maximize", [
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
const fm = G("Minimize", [
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
const pm = G("MoreVertical", [
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
const rd = G("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = G("PlusCircle", [
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
const wa = G("Plus", [
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
const hm = G("Settings", [
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
const gm = G("Square", [
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
const On = G("Trash2", [
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
const ym = G("Type", [
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
const vm = G("Upload", [
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
const Se = G("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = H;
const wm = async () => {
  const e = await H.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
};
let zl = !1;
const xm = (e) => {
  zl = e, zl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, _m = (...e) => {
  zl && console.log("[Meld]", ...e);
}, km = (...e) => {
  zl && console.warn("[Meld]", ...e);
}, Sm = (...e) => {
  console.error("[Meld]", ...e);
}, F = {
  log: _m,
  warn: km,
  error: Sm,
  init: xm
}, cl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await H.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!s.ok)
    throw new Error(`Failed to fetch images: ${s.statusText}`);
  return await s.json();
}, ld = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, _i = async (e, t = !1) => {
  const n = await H.fetchApi("/meld/bulk-delete", {
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
}, xa = async (e) => {
  const t = await H.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const r = await t.json();
    throw new Error(r.error || "Failed to restore images");
  }
  return (await t.json()).data || { restored_ids: e };
}, sd = async (e) => {
  const t = await H.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return (await t.json()).data;
}, Ro = async (e, t) => {
  if (!(await H.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, jm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await H.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, ki = async (e) => {
  const t = await H.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Em = async (e, t) => {
  if (!(await H.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Si = async (e, t, n) => {
  if (!(await H.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Cm = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Nm = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
}, Im = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await H.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Tm = async () => {
  const e = await H.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Lm = async () => {
  const e = await H.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Mm = async (e, t) => {
  if (!(await H.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, Do = async (e) => {
  if (!(await H.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, bm = async (e, t, n) => {
  if (!(await H.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  })).ok)
    throw new Error("Failed to update favorite");
}, id = async () => {
  const e = await H.fetchApi("/meld/settings");
  if (!e.ok)
    return {
      dev_mode: !1,
      "gallery.show_parent_image": !0,
      "gallery.show_parent_images": !1,
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
      "viewer.shortcut.show_cheat_sheet": !0
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, Pm = async (e, t) => {
  if (!(await H.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Rm = {
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
    "gallery.show_parent_images": !1,
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
function Dm(e, t) {
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
        (c) => c.exists !== !1 && (e.settings["gallery.show_parent_images"] || !c.has_children)
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
        (c) => c.exists !== !1 && (e.settings["gallery.show_parent_images"] || !c.has_children)
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
const ad = v.createContext(void 0), zm = ({
  children: e
}) => {
  const [t, n] = v.useReducer(Dm, Rm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = v.useCallback(
    async (g, w, y) => {
      const k = t.settings["gallery.max_load_count"], f = 200;
      let d = g;
      for (; d < Math.min(w, k) && y === l.current; )
        try {
          const p = Math.min(f, k - d);
          F.log("Background fetch: starting chunk", {
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
          if (y !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), d += j.images.length, j.images.length === 0 || d >= j.total))
            break;
          await new Promise((C) => setTimeout(C, 300));
        } catch (p) {
          F.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), w = ++l.current;
    try {
      const y = t.searchQuery.trim() !== "", k = t.settings["gallery.initial_load_count"];
      F.log("refreshImages: starting initial fetch", {
        isSearch: y,
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
      ), d = performance.now() - g;
      F.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > k && s(k, f.total, w);
    } catch (y) {
      F.error("refreshImages: fetch failed", y), n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
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
    const g = performance.now();
    try {
      const w = r.current, y = t.searchQuery.trim() !== "", k = t.pagination.limit;
      F.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: k,
        isSearch: y
      });
      const f = await cl(
        w,
        k,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - g;
      F.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (w) {
      F.error("loadMoreImages: fetch failed", w), n({
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
      const g = await Lm();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      F.error("Failed to load favorites", g);
    }
  }, []), c = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), y = t.images.filter(
      (k) => t.selectedIds.has(k.id)
    ).some(
      (k) => k.parent_id || k.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: g,
        hasLineage: y,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), m = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const y = (await xa(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: y }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), x = v.useCallback(
    async (g, w) => {
      try {
        await Pm(g, w), n({ type: "SET_SETTINGS", payload: { [g]: w } });
      } catch (y) {
        n({
          type: "SET_ERROR",
          payload: y instanceof Error ? y.message : String(y)
        });
      }
    },
    []
  ), h = v.useCallback(
    async (g) => {
      const w = t.images.find((y) => y.id === g);
      if (w && !w.is_minimal)
        return w;
      try {
        F.log("fetchFullImageDetails: fetching full data", { id: g });
        const y = await ld(g);
        return n({ type: "UPDATE_IMAGE", payload: y }), y;
      } catch (y) {
        throw F.error("Failed to fetch image details", y), y;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const w = await id();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        F.error("Failed to load settings", w);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const g = () => {
      a();
    }, w = (k) => {
      const f = k.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, y = (k) => {
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
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", y), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", y);
    };
  }, [a, t.scanStatus.progress.total]), v.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    ad.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: m,
        updateSetting: x,
        fetchFullImageDetails: h
      },
      children: e
    }
  );
}, Te = () => {
  const e = v.useContext(ad);
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
}, _a = async () => {
  const e = await H.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Am = async (e) => {
  const t = await H.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Om = async (e) => {
  if (!(await H.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Fm = async (e, t) => {
  const n = await H.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, $m = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await H.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Um = async (e, t, n = !1, r) => {
  const l = await H.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Vm = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await H.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Wm = async (e, t, n) => {
  const r = await H.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Qm = async (e) => {
  const t = await H.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Bm = async () => {
  if (!(await H.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, od = () => {
  const { dispatch: e } = Te(), [t, n] = v.useState(() => {
    const S = localStorage.getItem("meld-import-config"), R = {
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
        const V = JSON.parse(S);
        return { ...R, ...V, tags: [] };
      } catch {
        return R;
      }
    return R;
  });
  v.useEffect(() => {
    const { tags: S, ...R } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(R));
  }, [t]);
  const [r, l] = v.useState([]), [s, a] = v.useState([]), [o, u] = v.useState(0), [c, m] = v.useState(!1), [x, h] = v.useState([]), [g, w] = v.useState(""), [y, k] = v.useState(!1), [f, d] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const R = await wm();
        n((V) => V.custom_path ? V : { ...V, custom_path: R });
      } catch (R) {
        F.error("Failed to fetch home directory:", R);
      }
    })();
  }, []), v.useEffect(() => {
    const S = new AbortController();
    return (async () => {
      const V = t.type === "custom" ? t.custom_path : t.subfolder;
      if (F.log(
        `loadFolders started. Path: "${V}", Type: "${t.type}"`
      ), t.type === "custom" && !V) {
        F.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      m(!0);
      const Y = V, A = t.type;
      try {
        F.log("Step 1: Fast load starting...");
        const W = await Um(
          t.type,
          V,
          !0,
          S.signal
        );
        if (S.signal.aborted) {
          F.log("Step 1: Aborted.");
          return;
        }
        F.log(
          `Step 1 complete. Found ${W.folders.length} folders, ${W.images.length} images.`
        ), l(W.folders), a(W.images), u(null);
        const de = W.folders.map((N) => N.name);
        de.length > 0 && (F.log(
          `Step 2: Metadata fetch starting for ${de.length} folders...`
        ), Vm(
          A,
          Y,
          de,
          S.signal
        ).then((N) => {
          if (S.signal.aborted) {
            F.log("Step 2: Aborted.");
            return;
          }
          F.log("Step 2: Metadata fetch complete."), l(
            (b) => b.map((O) => {
              const Q = N[O.name];
              return Q ? { ...O, count: Q.count, preview: Q.preview } : O;
            })
          );
        }).catch((N) => {
          N.name !== "AbortError" && F.error("Step 2: Metadata fetch failed:", N);
        })), F.log("Step 3: Path image count starting..."), Wm(A, Y, S.signal).then((N) => {
          if (S.signal.aborted) {
            F.log("Step 3: Aborted.");
            return;
          }
          F.log(`Step 3: Path image count complete: ${N}`), u(N);
        }).catch((N) => {
          N.name !== "AbortError" && F.error("Step 3: Path image count failed:", N);
        });
      } catch (W) {
        if (W.name === "AbortError") {
          F.log("Request aborted.");
          return;
        }
        F.error("Failed to load folders:", W), l([]), a([]), u(0);
      } finally {
        S.signal.aborted || m(!1);
      }
    })(), () => {
      S.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    k(!0);
    try {
      const S = await _a();
      h(S);
    } catch (S) {
      F.error("Failed to fetch tags:", S);
    } finally {
      k(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const S = (R) => {
      R.key === "Escape" && (R.preventDefault(), R.stopImmediatePropagation(), f ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, { capture: !0 });
  }, [f, e]);
  const j = v.useMemo(() => x.filter(
    (S) => S.name.toLowerCase().includes(g.toLowerCase()) && !t.tags.includes(S.name)
  ), [x, g, t.tags]), C = (S) => {
    const R = S.trim();
    R && !t.tags.includes(R) && (n({ ...t, tags: [...t.tags, R] }), w(""));
  }, L = (S) => {
    n({ ...t, tags: t.tags.filter((R) => R !== S) });
  }, _ = (S) => {
    S.key === "Enter" && g.trim() && (S.preventDefault(), C(g.trim()));
  }, E = async () => {
    try {
      await Qm(t), e({
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
      F.error("Failed to start scan:", S), alert(`Failed to start scan: ${S}`);
    }
  }, P = (S) => {
    if (t.type === "custom") {
      const R = t.custom_path.includes("\\") ? "\\" : "/", V = t.custom_path.endsWith(R) ? `${t.custom_path}${S}` : `${t.custom_path}${R}${S}`;
      n({ ...t, custom_path: V });
    } else {
      const R = t.subfolder ? `${t.subfolder}/${S}` : S;
      n({ ...t, subfolder: R });
    }
  }, T = () => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.split(S);
      if (R.length > 1) {
        R.pop();
        let V = R.join(S);
        V === "" && S === "/" && (V = "/"), n({ ...t, custom_path: V });
      }
    } else {
      const S = t.subfolder.split("/");
      S.pop(), n({ ...t, subfolder: S.join("/") });
    }
  };
  return Me.createPortal(
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
                      children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
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
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
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
                            children: /* @__PURE__ */ i.jsx(Se, { size: 12 })
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
                            value: g,
                            onChange: (S) => w(S.target.value),
                            onKeyDown: _
                          }
                        ),
                        g.trim() && !t.tags.includes(g.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => C(g),
                            children: /* @__PURE__ */ i.jsx(wa, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? g && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        g
                      ] }) : j.map((S) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => C(S.name),
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
                          /* @__PURE__ */ i.jsx(va, { size: 16 }),
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
                          onClick: T,
                          children: [
                            /* @__PURE__ */ i.jsx(ed, { size: 16 }),
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
                          onClick: () => P(S.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: S.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: We(S.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(im, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: S.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${S.count === null ? "meld-folder-count--loading" : ""}`,
                                children: S.count !== null ? `${S.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(td, { size: 14 })
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
                          children: /* @__PURE__ */ i.jsx(Se, { size: 24 })
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
}, Hm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Te(), [r, l] = v.useState("Gallery"), [s, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [c, m] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [x, h] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [g, w] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [y, k] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, d] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, j] = v.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [C, L] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [_, E] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [P, T] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    S,
    R
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    V,
    Y
  ] = v.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [A, W] = v.useState(
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
      const $ = Object.keys(s).filter(
        (J) => s[J] !== e.settings[J] && !o[J]
      );
      if ($.length > 0)
        for (const J of $)
          await n(J, s[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: ($, J) => {
      a((re) => ({
        ...re,
        [$]: !J
      }));
    },
    handleNumberChange: ($, J, re, Ze) => {
      $ === "gallery.initial_load_count" ? m(J) : $ === "gallery.max_load_count" ? h(J) : $ === "gallery.lineage_max_depth" ? w(J) : $ === "viewer.thumbnail_window_size" ? k(J) : $ === "gallery.trash_retention_days" ? d(J) : $ === "gallery.auto_link_phash_threshold" ? j(J) : $ === "gallery.suggest_phash_threshold" ? L(J) : $ === "viewer.details.max_positive_prompt_lines" ? E(J) : $ === "viewer.details.max_negative_prompt_lines" ? T(J) : $ === "fullscreen.details.max_positive_prompt_lines" ? R(J) : $ === "fullscreen.details.max_negative_prompt_lines" ? Y(J) : $ === "sidebar.thumbnail_size" && W(J);
      const br = Number.parseInt(J, 10);
      if (!Number.isNaN(br)) {
        let Ht = br;
        re !== void 0 && Ht < re && (Ht = re), Ze !== void 0 && Ht > Ze && (Ht = Ze), a((U) => ({
          ...U,
          [$]: Ht
        }));
      }
    },
    handleNumberBlur: ($) => {
      $.key === "gallery.initial_load_count" ? m(
        s["gallery.initial_load_count"].toString()
      ) : $.key === "gallery.max_load_count" ? h(s["gallery.max_load_count"].toString()) : $.key === "gallery.lineage_max_depth" ? w(
        s["gallery.lineage_max_depth"].toString()
      ) : $.key === "viewer.thumbnail_window_size" ? k(
        s["viewer.thumbnail_window_size"].toString()
      ) : $.key === "gallery.trash_retention_days" ? d(
        s["gallery.trash_retention_days"].toString()
      ) : $.key === "gallery.auto_link_phash_threshold" ? j(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : $.key === "gallery.suggest_phash_threshold" ? L(
        s["gallery.suggest_phash_threshold"].toString()
      ) : $.key === "viewer.details.max_positive_prompt_lines" ? E(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : $.key === "viewer.details.max_negative_prompt_lines" ? T(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : $.key === "fullscreen.details.max_positive_prompt_lines" ? R(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : $.key === "fullscreen.details.max_negative_prompt_lines" ? Y(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : $.key === "sidebar.thumbnail_size" && W(s["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      a(($) => ({
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
      })), u({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: ($) => $.trim() ? $.trim().split(/\s+/).every((re) => !!(re === "next" || re === "prev" || re === "delete" || re.startsWith("tag:") && re.length > 4 || re.startsWith("-tag:") && re.length > 5 || re.startsWith("tag-toggle:") && re.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: x,
    lineageMaxDepthInput: g,
    thumbnailWindowSizeInput: y,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: C,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: P,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: V,
    thumbnailSizeInput: A
  };
}, z = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Gm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: s,
  maxNegativePromptLinesInput: a
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.delete_mode": o.target.value
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
      z,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.small_image_mode": o.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_filename": o.target.value
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
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
    /* @__PURE__ */ i.jsx(
      z,
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
  ] })
] }), Km = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ i.jsx(
      z,
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
            onChange: (u) => r(
              "sidebar.thumbnail_size",
              u.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_filename": u.target.value
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
      z,
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
      z,
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
      z,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
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
      z,
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
      z,
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
    /* @__PURE__ */ i.jsx(z, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
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
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ i.jsx(
      z,
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
            onChange: (u) => r(
              "gallery.initial_load_count",
              u.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
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
            onChange: (u) => r(
              "gallery.max_load_count",
              u.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] })
] }), Ym = ({
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
        z,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (m) => {
                t((x) => ({
                  ...x,
                  [u]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[u] || ""
                );
                r((x) => ({
                  ...x,
                  [u]: !m
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ i.jsx(
        z,
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
      z,
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
}, Xm = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: s,
  lineageMaxDepthInput: a,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: u,
  suggestPhashThresholdInput: c
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((x) => ({
              ...x,
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
      z,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
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
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
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
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
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
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
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
    /* @__PURE__ */ i.jsx(
      z,
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
    )
  ] })
] }), qm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.small_image_mode": u.target.value
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
      z,
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
      z,
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
      z,
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
            onChange: (u) => r(
              "viewer.thumbnail_window_size",
              u.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.delete_mode": u.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ i.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ i.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_filename": u.target.value
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
            onChange: (u) => r(
              "viewer.details.max_positive_prompt_lines",
              u.target.value,
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
      z,
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
      z,
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
            onChange: (u) => r(
              "viewer.details.max_negative_prompt_lines",
              u.target.value,
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
      z,
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
  ] })
] }), ud = () => {
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
    handleResetShortcuts: m,
    handleViewTrash: x,
    validateShortcut: h,
    // Input states
    initialLoadCountInput: g,
    maxLoadCountInput: w,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: d,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: C,
    fullscreenMaxPositivePromptLinesInput: L,
    fullscreenMaxNegativePromptLinesInput: _,
    thumbnailSizeInput: E
  } = Hm(), P = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], T = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ i.jsx(
          Xm,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: x,
            lineageMaxDepthInput: y,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: d,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ i.jsx(
          Km,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: E,
            initialLoadCountInput: g,
            maxLoadCountInput: w
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          qm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: k,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: C
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          Gm,
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
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Ym,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: s,
            validateShortcut: h,
            handleToggle: o,
            handleResetShortcuts: m
          }
        );
      default:
        return null;
    }
  };
  return Me.createPortal(
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
                children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: P.map((S) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === S.id ? "active" : ""}`,
                onClick: () => t(S.id),
                children: S.label
              },
              S.id
            )) }) }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: T() })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, it = "none", cd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Te(), [s, a] = v.useState([]), [o, u] = v.useState(t), [c, m] = v.useState(""), [x, h] = v.useState(!0), [g, w] = v.useState(!1), y = v.useRef(null), k = e.length > 1, f = v.useCallback(async () => {
    h(!0);
    try {
      const _ = await _a();
      a(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      h(!1);
    }
  }, []);
  v.useEffect(() => {
    f();
  }, [f]), v.useEffect(() => {
    y.current && y.current.focus();
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
    E && !o.includes(E) && (u([...o, E]), m(""));
  }, j = (_) => {
    u(o.filter((E) => E !== _));
  }, C = async () => {
    w(!0);
    try {
      if (k) {
        const _ = o.filter((P) => !t.includes(P)), E = t.filter(
          (P) => !o.includes(P)
        );
        await Si(e, _, E);
      } else
        await Em(e[0], o);
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
  return Me.createPortal(
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
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Se, { size: 20 }) })
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
                    children: /* @__PURE__ */ i.jsx(Se, { size: 12 })
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
                    ref: y,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (_) => m(_.target.value),
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
                      /* @__PURE__ */ i.jsx(wa, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? c ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((_) => /* @__PURE__ */ i.jsx(
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
                onClick: C,
                disabled: g,
                children: g ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Jm = async () => {
  const e = await H.fetchApi("/meld/workflows");
  if (!e.ok)
    throw new Error(`Failed to fetch workflows: ${e.statusText}`);
  return await e.json();
}, Zm = async (e) => {
  const t = await H.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  if (!t.ok)
    throw new Error(`Failed to fetch workflow raw: ${t.statusText}`);
  return await t.json();
}, dd = ({
  image: e,
  onExecute: t
}) => {
  const { dispatch: n } = Te(), [r, l] = v.useState([]), [s, a] = v.useState(!0), [o, u] = v.useState(null), [c, m] = v.useState(!1), x = v.useMemo(() => [...r].sort((y, k) => y.valid !== k.valid ? y.valid ? -1 : 1 : y.name.localeCompare(k.name)), [r]), h = v.useCallback(async () => {
    try {
      a(!0);
      const y = await Jm();
      l(y), u(null);
    } catch (y) {
      u(y instanceof Error ? y.message : String(y));
    } finally {
      a(!1);
    }
  }, []);
  v.useEffect(() => {
    h();
  }, [h]);
  const g = v.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  v.useEffect(() => {
    const y = (k) => {
      k.key === "Escape" && g();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [g]);
  const w = async (y) => {
    if (!c)
      try {
        m(!0), await t(y), g();
      } catch (k) {
        u(k instanceof Error ? k.message : String(k)), m(!1);
      }
  };
  return Me.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: g, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--medium",
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ i.jsx(sm, { size: 20, color: "var(--meld-accent-color)" }),
              "Run with Workflow"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: g,
                children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: s ? /* @__PURE__ */ i.jsxs("div", { className: "meld-loading-container", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-loading-spinner" }),
            /* @__PURE__ */ i.jsx("span", { children: "Loading workflows..." })
          ] }) : o ? /* @__PURE__ */ i.jsxs("div", { className: "meld-error-container", children: [
            /* @__PURE__ */ i.jsx(Xp, { size: 20 }),
            /* @__PURE__ */ i.jsx("span", { children: o })
          ] }) : r.length === 0 ? /* @__PURE__ */ i.jsx(
            "div",
            {
              style: {
                padding: "40px",
                textAlign: "center",
                color: "var(--meld-text-secondary)"
              },
              children: "No workflows found in ComfyUI/user/default/workflows"
            }
          ) : /* @__PURE__ */ i.jsxs("div", { className: "meld-workflow-list", children: [
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                style: {
                  marginBottom: "15px",
                  fontSize: "14px",
                  color: "var(--meld-text-secondary)"
                },
                children: [
                  "Select a workflow to process ",
                  /* @__PURE__ */ i.jsx("strong", { children: e.filename }),
                  ". Only workflows with exactly one",
                  " ",
                  /* @__PURE__ */ i.jsx("strong", { children: "Meld Image Loader" }),
                  " node are supported."
                ]
              }
            ),
            x.map((y) => /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-workflow-item ${y.valid ? "" : "meld-workflow-item--invalid"}`,
                onClick: () => y.valid && !c && w(y.name),
                title: y.reason || "Click to run",
                children: [
                  /* @__PURE__ */ i.jsxs("div", { className: "meld-workflow-item__info", children: [
                    /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__name", children: y.name }),
                    !y.valid && /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__reason", children: y.reason })
                  ] }),
                  y.valid && /* @__PURE__ */ i.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary meld-btn-small",
                      disabled: c,
                      onClick: (k) => {
                        k.stopPropagation(), w(y.name);
                      },
                      children: [
                        /* @__PURE__ */ i.jsx(va, { size: 14 }),
                        c ? "Queuing..." : "Run"
                      ]
                    }
                  )
                ]
              },
              y.name
            ))
          ] }) }),
          /* @__PURE__ */ i.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-btn meld-btn-secondary",
              onClick: g,
              disabled: c,
              children: "Cancel"
            }
          ) })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, fd = () => ({ executeWorkflow: v.useCallback(
  async (t, n) => {
    var c, m, x, h;
    const r = await Zm(t);
    let l = null, s = !1;
    if (r.nodes && Array.isArray(r.nodes)) {
      s = !0;
      const g = r.nodes.find(
        // biome-ignore lint/suspicious/noExplicitAny: ComfyUI node format
        (w) => w.type === "MeldImageLoader"
      );
      g && (l = String(g.id));
    } else
      for (const g in r)
        if (r[g].class_type === "MeldImageLoader") {
          l = g;
          break;
        }
    if (!l)
      throw new Error(
        "Meld Image Loader node not found in the selected workflow."
      );
    let a = n.filename;
    if (n.subfolder && (a = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (a = `${a} [${n.type}]`), s) {
      const g = window.app, w = t.replace(/\.json$/i, "");
      let y = !1;
      const k = document.querySelectorAll(".workflow-tab");
      for (const p of Array.from(k)) {
        const j = p.querySelector(".workflow-label"), C = ((c = j == null ? void 0 : j.textContent) == null ? void 0 : c.trim()) || ((m = p.textContent) == null ? void 0 : m.trim()) || "";
        if (C === w || C === t || C.startsWith(`${w} `) || C.startsWith(`${w}\u2022`)) {
          p.click(), y = !0;
          break;
        }
      }
      y || await g.loadGraphData(r, !0, !0, t), await new Promise((p) => setTimeout(p, 200));
      const d = g.graph._nodes.find(
        // biome-ignore lint/suspicious/noExplicitAny: ComfyUI node format
        (p) => String(p.id) === l || p.type === "MeldImageLoader"
      );
      if (d) {
        const p = (x = d.widgets) == null ? void 0 : x.find(
          // biome-ignore lint/suspicious/noExplicitAny: ComfyUI widget format
          (j) => j.name === "image"
        );
        p && (p.value = a), g.graph.setDirtyCanvas(!0, !0);
      }
      try {
        await g.queuePrompt(0);
        return;
      } catch (p) {
        throw console.error("Failed to queue workflow:", p), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const o = JSON.parse(JSON.stringify(r));
    o[l].inputs.image = a;
    const u = await H.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: o,
        client_id: H.clientId
      })
    });
    if (!u.ok) {
      const g = await u.json();
      throw new Error(((h = g.error) == null ? void 0 : h.message) || "Failed to queue workflow");
    }
    return await u.json();
  },
  []
) }), pd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Te(), a = v.useRef(!0);
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
    (h) => {
      if (!a.current) return;
      const g = o.current;
      if (g === null || !h.has(g))
        return;
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (f) => f.exists !== !1 && (l.settings["gallery.show_parent_images"] || !f.has_children)
      ), y = w.findIndex(
        (f) => f.id === g
      );
      if (y === -1) return;
      let k = !1;
      for (let f = y + 1; f < w.length; f++)
        if (!h.has(w[f].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: w[f].id, mode: l.viewerMode }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let f = y - 1; f >= 0; f--)
          if (!h.has(w[f].id)) {
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
    const h = (g) => {
      g.key === "Escape" && u();
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [u]);
  const m = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (y) => y.exists !== !1 && (l.settings["gallery.show_parent_images"] || !y.has_children)
      ), g = new Set(e), w = h.filter(
        (y) => g.has(y.id)
      );
      if (c(g), await _i(e, n), !a.current) return;
      !n && r && r(w), s({ type: "REMOVE_IMAGES", payload: e }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (h) {
      s({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  }, x = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const h = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (y) => y.exists !== !1 && (l.settings["gallery.show_parent_images"] || !y.has_children)
      ), g = new Set(e);
      for (const y of e) {
        const k = await ki(y);
        if (!a.current) return;
        for (const f of k)
          g.add(f.id);
      }
      const w = h.filter(
        (y) => g.has(y.id)
      );
      if (c(g), await _i(Array.from(g), n), !a.current) return;
      !n && r && r(w), s({
        type: "REMOVE_IMAGES",
        payload: Array.from(g)
      }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (h) {
      s({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Me.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (h) => h.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
              /* @__PURE__ */ i.jsx(On, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
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
                        qp,
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
                      " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
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
                  onClick: m,
                  children: n ? "Delete Permanently" : "Move to Trash"
                }
              ),
              t && /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                  onClick: x,
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
}, md = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Te(), [l, s] = v.useState([]), [a, o] = v.useState(!0), [u, c] = v.useState(!1), m = t.images.find((d) => d.id === e), x = v.useCallback(async () => {
    o(!0);
    try {
      const d = t.settings["gallery.suggest_phash_threshold"], p = await jm(e, d);
      s(p);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    x();
  }, [x]);
  const h = async (d) => {
    if (d == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!m || d === m.parent_id) && !(m.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ro(e, d), await ld(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (p) {
        console.error("Failed to link parent:", p);
      }
  }, g = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ro(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (d) {
        console.error("Failed to remove source:", d), alert("Failed to remove source image.");
      }
  }, w = async (d) => {
    o(!0);
    try {
      const p = await $m(d), { id: j } = await sd({
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
      await h(j);
    } catch (p) {
      console.error("Failed to upload/register image:", p);
    } finally {
      o(!1);
    }
  }, y = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const p = d.dataTransfer.files[0];
    p != null && p.type.startsWith("image/") && w(p);
  };
  if (!m) return null;
  const k = l.filter((d) => d.is_source_match), f = l.filter((d) => !d.is_source_match);
  return Me.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { children: [
              "Select Source for #",
              m.id
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            m.parent_id && /* @__PURE__ */ i.jsxs(
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
                        /* @__PURE__ */ i.jsx(cm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    m.parent_filename && /* @__PURE__ */ i.jsx(
                                      "img",
                                      {
                                        src: We({
                                          filename: m.parent_filename,
                                          subfolder: m.parent_subfolder || "",
                                          type: m.parent_type || "output"
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
                                              children: m.parent_filename || "Unknown Image"
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
                                                m.parent_id
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
                      onClick: g,
                      title: "Remove Source",
                      children: /* @__PURE__ */ i.jsx(um, { size: 16 })
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
                onDrop: y,
                children: [
                  /* @__PURE__ */ i.jsx(vm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              k.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: k.map((d) => {
                  const p = d.id === m.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && h(d.id),
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
                  const p = d.id === m.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && h(d.id),
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
}, eh = () => {
  const { state: e, dispatch: t } = Te(), { executeWorkflow: n } = fd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
      dd,
      {
        image: e.activeModal.image,
        onExecute: (r) => e.activeModal.type === "workflow_selection" ? n(r, e.activeModal.image) : Promise.resolve()
      }
    ),
    e.activeModal.type === "parent_selection" && Me.createPortal(
      /* @__PURE__ */ i.jsx(md, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Me.createPortal(/* @__PURE__ */ i.jsx(od, {}), document.body),
    e.activeModal.type === "settings" && Me.createPortal(/* @__PURE__ */ i.jsx(ud, {}), document.body),
    e.activeModal.type === "tag_edit" && Me.createPortal(
      /* @__PURE__ */ i.jsx(
        cd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Me.createPortal(
      /* @__PURE__ */ i.jsx(
        pd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, hd = (e, t) => {
  const n = v.useCallback(async (u) => {
    try {
      const c = await Cm(u.id);
      if (!c.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        c.workflow
      ), F.log("Workflow restored successfully from Meld");
    } catch (c) {
      F.error("Error restoring workflow:", c), alert("Failed to restore workflow.");
    }
  }, []), r = v.useCallback(async (u) => {
    try {
      const c = await Nm(u.id), m = "MeldUnifiedLoader", x = window.app, g = window.LiteGraph.createNode(m);
      if (!g) {
        console.error(`Node type ${m} not found.`), alert(
          `Node type ${m} not found. Please make sure the Meld Unified Loader node is installed.`
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
      if (g.widgets) {
        for (const [d, p] of Object.entries(w)) {
          const j = c[d];
          if (j != null) {
            const C = g.widgets.find(
              (L) => L.name === p
            );
            C && (C.value = j);
          }
        }
        const f = g.widgets.find(
          (d) => d.name === "control_after_generate"
        );
        f && (f.value = "fixed");
      }
      const y = x.canvas.ds.offset, k = x.canvas.ds.scale;
      g.pos = [(-y[0] + 400) / k, (-y[1] + 300) / k], x.graph.add(g), x.canvas.selectNode(g), x.canvas.centerOnNode(g);
    } catch (c) {
      console.error("Error adding Unified Loader:", c), alert("Failed to load settings.");
    }
  }, []), l = v.useCallback(
    (u) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [u.id],
          tags: u.tags || []
        }
      });
    },
    [t]
  ), s = v.useCallback(
    (u) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: u.id }
      });
    },
    [t]
  ), a = v.useCallback(
    (u) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", image: u }
      });
    },
    [t]
  ), o = v.useCallback(
    async (u, c) => {
      try {
        const m = u.id, h = (await xa([m])).restored_ids || [m];
        t({ type: "REMOVE_IMAGES", payload: h }), c == null || c();
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
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
    handleRunWithWorkflow: a,
    handleRestore: o
  };
}, gd = (e, t) => {
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
}, yd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Te(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: m
  } = hd(t, n), { getParentChain: x } = gd(t.images, t.settings), [h, g] = v.useState(null), [w, y] = v.useState(!1), [k, f] = v.useState(null), [d, p] = v.useState(!1), j = v.useRef(null), C = async (b, O, Q = !1) => {
    try {
      await navigator.clipboard.writeText(b), Q ? (p(!0), setTimeout(() => p(!1), 2e3)) : (f(O), setTimeout(() => f(null), 2e3));
    } catch (ne) {
      console.error("Failed to copy text: ", ne);
    }
  };
  v.useEffect(() => {
    const b = (Q) => {
      Q.key === "Escape" && (h ? g(null) : y(!1));
    }, O = (Q) => {
      j.current && !j.current.contains(Q.target) && y(!1);
    };
    return window.addEventListener("keydown", b), w && document.addEventListener("mousedown", O), () => {
      window.removeEventListener("keydown", b), document.removeEventListener("mousedown", O);
    };
  }, [w, h]);
  const L = x(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, P = We(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: h,
    setPopupContent: g,
    isMenuOpen: w,
    setIsMenuOpen: y,
    copiedLabel: k,
    popupCopied: d,
    menuRef: j,
    parentChain: L,
    displayFilename: E,
    imgSrc: P,
    handleCopy: C,
    handleClick: (b) => {
      b.shiftKey ? (b.preventDefault(), b.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : b.ctrlKey || b.metaKey || t.selectedIds.size > 0 ? (b.preventDefault(), b.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (b) => {
      b.shiftKey ? (b.preventDefault(), b.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : b.ctrlKey || b.metaKey || t.selectedIds.size > 0 ? (b.preventDefault(), b.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (b.preventDefault(), b.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (b) => {
      (b.shiftKey || b.ctrlKey || b.metaKey || t.selectedIds.size > 0 || !b.target.closest("img.meld-image-card__thumbnail")) && b.preventDefault();
    },
    handleKeyDown: (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
    handleRunWithWorkflow: () => {
      m(e);
    },
    fetchFullImageDetails: r
  };
}, th = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onRunWithWorkflow: s,
  onEditSource: a,
  onEditTags: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (u) => {
        u.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ i.jsx(pm, { size: 16 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (u) => {
        u.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ i.jsx(Po, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), r(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(Po, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), l(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(Jp, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), s(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(va, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Run with Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), a(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(mm, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), o(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(un, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), nh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Me.createPortal(
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
                l ? /* @__PURE__ */ i.jsx(Zc, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ i.jsx(
                  rm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Se,
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
), vd = dl.memo(
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
      menuRef: m,
      parentChain: x,
      displayFilename: h,
      imgSrc: g,
      handleCopy: w,
      handleClick: y,
      handleContainerClick: k,
      handleMouseDown: f,
      handleKeyDown: d,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: j,
      handleEditSource: C,
      handleEditTags: L,
      handleRunWithWorkflow: _,
      fetchFullImageDetails: E
    } = yd(e);
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--menu-open" : ""}`,
        onClick: k,
        onMouseDown: f,
        onKeyDown: d,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: g,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: f,
              onClick: (P) => {
                P.stopPropagation(), y(P);
              }
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && h,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && x.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: x.map(
                (P, T) => P.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: P.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (S) => {
                      S.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: P.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: T === 0 ? "Source" : T === 1 ? "Grand-Source" : `Ancestor (S${T + 1})`,
                    alt: "source thumb"
                  },
                  P.id || T
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await E(e.id);
                  s({
                    title: "Model",
                    text: T.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await E(e.id);
                        w(T.model_name || "-", "Model");
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await E(e.id);
                  s({
                    title: "Positive Prompt",
                    text: T.positive_prompt || T.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await E(e.id);
                        w(
                          T.positive_prompt || T.positive || "-",
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await E(e.id);
                  s({
                    title: "Negative Prompt",
                    text: T.negative_prompt || T.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await E(e.id);
                        w(
                          T.negative_prompt || T.negative || "-",
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
                onClick: (P) => {
                  P.stopPropagation(), L();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((P, T) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: P
                    },
                    `${P}-${T}`
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
            th,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: m,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: p,
              onRunWithWorkflow: _,
              onEditSource: C,
              onEditTags: L
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            nh,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (P) => w(P, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
vd.displayName = "DetailedImageCard";
const wd = dl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: s,
      handleClick: a
    } = yd(e);
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
wd.displayName = "SimpleImageCard";
const rh = ({ image: e }) => {
  const { state: t } = Te();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(wd, { image: e }) : /* @__PURE__ */ i.jsx(vd, { image: e });
}, lh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [s, a] = v.useState(!1), o = v.useRef(null);
  return v.useEffect(() => {
    const u = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && a(!0);
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
        ...l
      },
      children: s ? e : null
    }
  );
}, sh = () => {
  const { state: e, dispatch: t } = Te(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Bm(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
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
        children: /* @__PURE__ */ i.jsx(gm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(nm, { size: 14, className: "meld-success-icon" }),
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
}, ih = () => {
  const { state: e, refreshFavorites: t } = Te(), [n, r] = v.useState(!1), [l, s] = v.useState(null), [a, o] = v.useState(null), [u, c] = v.useState(""), [m, x] = v.useState("");
  v.useEffect(() => {
    if (l) {
      const k = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(k);
    }
  }, [l]);
  const h = v.useCallback(
    async (k, f, d) => {
      k.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${d}"?`;
      if (window.confirm(p))
        try {
          await Do(f), await t();
        } catch (j) {
          F.error("Failed to delete favorite", j);
        }
    },
    [t]
  ), g = v.useCallback(
    (k, f) => {
      k.stopPropagation(), o(f), c(f.name), x(f.query);
    },
    []
  ), w = v.useCallback(async () => {
    if (!(!a || !u.trim() || !m.trim()))
      try {
        r(!0), await bm(
          a.id,
          u,
          m
        ), await t(), o(null), s("Favorite updated.");
      } catch (k) {
        F.error("Failed to update favorite", k), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, m, t]), y = v.useCallback(async () => {
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
          F.error("Failed to delete favorite:", d);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Mm(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (f) {
      F.error("Failed to save favorite:", f);
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
    editFavoriteQuery: m,
    setEditFavoriteQuery: x,
    handleDeleteFavorite: h,
    handleEditFavorite: g,
    handleSaveEditFavorite: w,
    handleSaveFavorite: y,
    setToastMessage: s
  };
}, ah = () => {
  const { state: e, dispatch: t } = Te(), [n, r] = v.useState(e.searchQuery), [l, s] = v.useState([]), [a, o] = v.useState(!1), [u, c] = v.useState([]), [m, x] = v.useState(-1), h = v.useRef(null), g = v.useRef(e.searchQuery), w = n !== g.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      c([]);
      return;
    }
    !n && !e.searchQuery ? Tm().then((_) => {
      c(_);
    }) : c([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    r(e.searchQuery), g.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var _;
    (_ = h.current) == null || _.focus();
  }, []);
  const y = v.useCallback(
    (_, E = !0) => {
      g.current !== _ && (F.log("SearchBar: triggering search", { query: _ }), t({ type: "SET_SEARCH_QUERY", payload: _ }), E && o(!1), g.current = _);
    },
    [t]
  );
  v.useEffect(() => {
    const _ = setTimeout(async () => {
      if (n === g.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), o(!1);
        return;
      }
      const E = n.split(/\s+/), P = E[E.length - 1];
      if (P) {
        const T = P.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (T) {
          const S = T[1].toLowerCase(), R = T[2], V = await Im(R, S);
          s(V), o(V.length > 0), x(-1);
        } else
          s([]), o(!1);
      } else
        s([]), o(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [n, e.settings["search.input_suggest"]]);
  const k = v.useCallback(
    (_) => {
      var W;
      const E = n.split(/\s+/), T = (E.pop() || "").match(/^([-!])/), S = T ? T[1] : "", Y = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_.type) ? _.value : `"${_.value}"`, A = `${[
        ...E,
        `${S}${_.type}:${Y}`
      ].join(" ").trim()} `;
      r(A), s([]), o(!1), (W = h.current) == null || W.focus();
    },
    [n]
  ), f = (_) => {
    _.key === "Enter" ? y(n) : _.key === "Tab" ? a && m >= 0 && (k(l[m]), _.preventDefault()) : _.key === "ArrowDown" ? a && (x((E) => Math.min(E + 1, l.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? a && (x((E) => Math.max(E - 1, -1)), _.preventDefault()) : _.key === "Escape" && o(!1);
  }, d = v.useCallback(() => {
    r(""), y("");
  }, [y]), p = v.useCallback(
    (_, E) => {
      const S = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_) ? E : `"${E}"`, R = `${_}:${S}`;
      r(R), y(R);
    },
    [y]
  ), j = v.useCallback(
    (_) => {
      r(_), _ || y("");
    },
    [y]
  ), C = v.useCallback(() => {
    if (n === g.current) return;
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
    selectedIndex: m,
    setSelectedIndex: x,
    inputRef: h,
    isQueryChanged: w,
    handleSearch: y,
    handleKeyDown: f,
    applySuggestion: k,
    clearSearch: d,
    applySearchSuggestion: p,
    handleInputChange: j,
    handleInputFocus: C,
    handleInputBlur: L
  };
}, oh = ({
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
                  onClick: (m) => n(m, e),
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
                  children: /* @__PURE__ */ i.jsx(rd, { size: 14 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => r(m, e.id, e.name),
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
                  children: /* @__PURE__ */ i.jsx(On, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, zo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(un, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(em, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(ym, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(tm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(Jc, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(qc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(Zp, { size: 12 });
    default:
      return null;
  }
}, uh = ({
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
  onSelectFavorite: m,
  onEditFavorite: x,
  onDeleteFavorite: h
}) => {
  const g = () => !e || t.length === 0 ? null : /* @__PURE__ */ i.jsx(
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
                children: zo(k.type)
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
                children: zo(k.type)
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
  ), y = () => s || c.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
              oh,
              {
                fav: k,
                onSelect: m,
                onEdit: x,
                onDelete: h
              },
              k.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    g(),
    w(),
    y()
  ] });
}, ch = () => {
  const { state: e } = Te(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    selectedIndex: a,
    setSelectedIndex: o,
    inputRef: u,
    isQueryChanged: c,
    handleSearch: m,
    handleKeyDown: x,
    applySuggestion: h,
    clearSearch: g,
    applySearchSuggestion: w,
    handleInputChange: y,
    handleInputFocus: k,
    handleInputBlur: f
  } = ah(), {
    isSaving: d,
    toastMessage: p,
    editingFavorite: j,
    setEditingFavorite: C,
    editFavoriteName: L,
    setEditFavoriteName: _,
    editFavoriteQuery: E,
    setEditFavoriteQuery: P,
    handleDeleteFavorite: T,
    handleEditFavorite: S,
    handleSaveEditFavorite: R,
    handleSaveFavorite: V
  } = ih(), Y = v.useRef(null);
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
                        onClick: () => m(t),
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
                        onMouseEnter: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)", c ? (A.currentTarget.style.filter = "brightness(1.15)", A.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (A) => {
                          A.currentTarget.style.transform = "none", c ? (A.currentTarget.style.filter = "none", A.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (A) => {
                          A.currentTarget.style.transform = "translateY(1px)", A.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (A) => {
                          A.currentTarget.style.transform = "translateY(-1px)";
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
                        onChange: (A) => y(A.target.value),
                        onKeyDown: x,
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
                        onClick: V,
                        disabled: d,
                        title: e.favorites.some((A) => A.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                            color: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: g,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ i.jsx(Se, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                uh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: a,
                  setSelectedIndex: o,
                  applySuggestion: h,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: s,
                  applySearchSuggestion: w,
                  favorites: e.favorites,
                  onSelectFavorite: (A) => {
                    n(A), m(A);
                  },
                  onEditFavorite: S,
                  onDeleteFavorite: T
                }
              )
            ]
          }
        ),
        j && Me.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onClick: () => C(null),
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (A) => A.stopPropagation(),
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
                          onClick: () => C(null),
                          children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
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
                                    onChange: (A) => _(A.target.value),
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
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && R(), A.key === "Escape" && C(null);
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
                                    onChange: (A) => P(A.target.value),
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
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && !A.shiftKey && (A.preventDefault(), R()), A.key === "Escape" && C(null);
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
                          onClick: () => C(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: R,
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
}, dh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, s] = v.useState(!0), [a, o] = v.useState(""), [u, c] = v.useState(""), [m, x] = v.useState(!1), [h, g] = v.useState(null), [w, y] = v.useState(""), [k, f] = v.useState(!1), d = v.useRef(null), p = v.useCallback(async () => {
    s(!0);
    try {
      const S = await _a();
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
    h !== null && d.current && (d.current.focus(), d.current.select());
  }, [h]);
  const j = async (S) => {
    S.preventDefault();
    const R = u.trim();
    if (!(!R || m)) {
      if (R.toLowerCase() === it) {
        alert(
          `Tag name '${it}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((V) => V.name.toLowerCase() === R.toLowerCase())) {
        alert(`Tag "${R}" already exists.`);
        return;
      }
      x(!0);
      try {
        await Am(R), c(""), await p();
      } catch (V) {
        console.error("Failed to add tag:", V);
      } finally {
        x(!1);
      }
    }
  }, C = async (S, R) => {
    if (confirm(`Are you sure you want to delete tag "${R}"?`))
      try {
        await Om(S), await p();
      } catch (V) {
        console.error("Failed to delete tag:", V);
      }
  }, L = (S) => {
    g(S.id), y(S.name);
  }, _ = () => {
    g(null), y("");
  }, E = async (S) => {
    S.preventDefault();
    const R = w.trim();
    if (!R || h === null || k) return;
    if (R.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    const V = n.find((Y) => Y.id === h);
    if (V && V.name === R) {
      _();
      return;
    }
    if (n.some(
      (Y) => Y.id !== h && Y.name.toLowerCase() === R.toLowerCase()
    )) {
      alert(`Tag "${R}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Fm(h, R), _(), await p();
    } catch (Y) {
      console.error("Failed to rename tag:", Y), alert(Y instanceof Error ? Y.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, P = (S) => {
    t(`tag:${S}`);
  }, T = v.useMemo(() => n.filter(
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
          children: /* @__PURE__ */ i.jsx(Se, { size: 16 })
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
            disabled: m
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || m,
            children: [
              /* @__PURE__ */ i.jsx(wa, { size: 14 }),
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
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: T.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : T.map((S) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: h === S.id ? /* @__PURE__ */ i.jsxs(
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
                onChange: (R) => y(R.target.value),
                onKeyDown: (R) => R.key === "Escape" && _()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: k || !w.trim(),
                children: /* @__PURE__ */ i.jsx(Zc, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(Se, { size: 14 })
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
              onClick: () => P(S.name),
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
              children: /* @__PURE__ */ i.jsx(rd, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => C(S.id, S.name),
              children: /* @__PURE__ */ i.jsx(On, { size: 14 })
            }
          )
        ] })
      ] }) }, S.id)) })
    ] })
  ] });
}, fh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: m } = hd(e, t), { getParentChain: x } = gd(s, u), [h, g] = v.useState(!1), [w, y] = v.useState(
    u["viewer.show_details_by_default"]
  ), [k, f] = v.useState(null), d = k ?? u["viewer.show_thumbnails"], [p, j] = v.useState(!1), [C, L] = v.useState(!1), [_, E] = v.useState(null), [P, T] = v.useState(null), [S, R] = v.useState(
    null
  ), V = v.useRef(null), Y = v.useRef(!0);
  v.useEffect(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []);
  const A = v.useRef(l);
  v.useEffect(() => {
    A.current = l;
  }, [l]);
  const W = a === "lineage" ? o : s.filter(
    (U) => U.exists !== !1 && (u["gallery.show_parent_images"] || !U.has_children)
  ), de = l === null ? -1 : W.findIndex((U) => U.id === l), N = (a === "lineage" && o.length > 0 ? o : s).find((U) => U.id === l), b = v.useCallback(
    async (U = !1) => {
      if (!N) return;
      const ee = h ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!U && ee === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [N.id],
            hasLineage: !!(N.parent_id || N.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const M = e.viewScope === "trash", Z = /* @__PURE__ */ new Set([N.id]);
        if (ee === "lineage") {
          const B = await ki(N.id);
          for (const q of B)
            Z.add(q.id);
        }
        if (!Y.current || A.current === null) return;
        if (W.length > Z.size) {
          let B = !1;
          for (let q = de + 1; q < W.length; q++)
            if (!Z.has(W[q].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: W[q].id, mode: a }
              }), B = !0;
              break;
            }
          if (!B) {
            for (let q = de - 1; q >= 0; q--)
              if (!Z.has(W[q].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: W[q].id, mode: a }
                }), B = !0;
                break;
              }
          }
          B || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await _i(Array.from(Z), M), !M) {
          const B = W.filter(
            (q) => Z.has(q.id)
          );
          E(B), T(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(Z) });
      } catch (M) {
        t({
          type: "SET_ERROR",
          payload: M instanceof Error ? M.message : String(M)
        });
      }
    },
    [
      N,
      h,
      u,
      e.viewScope,
      W,
      de,
      a,
      t
    ]
  ), O = v.useCallback(() => {
    N && c(N);
  }, [N, c]), Q = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: h } });
  }, [t, h]), ne = v.useCallback(async () => {
    const U = h ? u["fullscreen.loop"] : u["viewer.loop"];
    if (de === 0 && a === "gallery" && e.pagination.hasMore && !C && U) {
      L(!0);
      try {
        const ee = e.pagination.limit, M = e.pagination.total, Z = Math.max(0, M - ee), B = await cl(
          Z,
          ee,
          e.searchQuery
        );
        if (!Y.current || (t({ type: "APPEND_IMAGES", payload: B }), A.current === null)) return;
        if (B.images.length > 0) {
          const q = B.images[B.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: q.id, mode: "gallery" }
          });
        }
      } catch (ee) {
        console.error("Failed to jump to end:", ee);
      } finally {
        L(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: h } });
  }, [
    de,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    C,
    h
  ]), ht = v.useCallback(
    (U) => {
      U && "stopPropagation" in U && U.stopPropagation();
      const ee = V.current;
      ee && (document.fullscreenElement ? document.exitFullscreen() : ee.requestFullscreen().catch((M) => {
        console.error(
          `Error attempting to enable full-screen mode: ${M.message}`
        );
      }));
    },
    []
  ), $ = v.useCallback(async () => {
    N && (W.length > 1 ? Q() : t({ type: "CLOSE_VIEWER" }), await m(N));
  }, [N, W.length, Q, m, t]), J = v.useCallback(async () => {
    if (!_ || _.length === 0) return;
    const U = _.map((M) => M.id), ee = U[0];
    try {
      const M = await xa(U);
      if (!Y.current) return;
      if (t({ type: "ADD_IMAGES", payload: _ }), e.viewScope === "trash") {
        const Z = M.restored_ids || U;
        t({ type: "REMOVE_IMAGES", payload: Z });
      }
      if (E(null), !Y.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: ee, mode: a }
      });
    } catch (M) {
      t({
        type: "SET_ERROR",
        payload: M instanceof Error ? M.message : String(M)
      });
    }
  }, [_, t, a, e.viewScope]), re = v.useCallback(async () => {
    if (_ && _.length > 0)
      await J();
    else if (P && P.type === "tags") {
      const { imageId: U, addTags: ee, removeTags: M } = P;
      try {
        await Si([U], ee, M);
        const Z = (a === "lineage" ? o : s).find((B) => B.id === U);
        if (Z) {
          const B = [...Z.tags];
          for (const et of ee)
            B.includes(et) || B.push(et);
          const q = B.filter((et) => !M.includes(et));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Z, tags: q }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: U, mode: a }
          });
        }
        T(null);
      } catch (Z) {
        t({
          type: "SET_ERROR",
          payload: Z instanceof Error ? Z.message : String(Z)
        });
      }
    }
  }, [
    _,
    P,
    J,
    s,
    o,
    a,
    t
  ]), Ze = v.useCallback(
    async (U) => {
      if (!U || !N) return;
      const ee = N.id, M = [...N.tags], Z = U.split(/\s+/), B = [], q = [];
      let et = !1, cn = !1, Pr = !1;
      for (const ve of Z)
        if (ve.startsWith("tag:")) {
          const pe = ve.substring(4);
          pe && !M.includes(pe) && !B.includes(pe) && B.push(pe);
        } else if (ve.startsWith("-tag:")) {
          const pe = ve.substring(5);
          pe && M.includes(pe) && !q.includes(pe) && q.push(pe);
        } else if (ve.startsWith("tag-toggle:")) {
          const pe = ve.substring(11);
          pe && (M.includes(pe) ? q.includes(pe) || q.push(pe) : B.includes(pe) || B.push(pe));
        } else ve === "next" ? et = !0 : ve === "prev" ? cn = !0 : ve === "delete" && (Pr = !0);
      if (B.length > 0 || q.length > 0)
        try {
          await Si(
            [ee],
            B,
            q
          );
          const ve = [...M];
          for (const Gt of B)
            ve.includes(Gt) || ve.push(Gt);
          const pe = ve.filter((Gt) => !q.includes(Gt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...N, id: ee, tags: pe }
          }), T({
            type: "tags",
            imageId: ee,
            addTags: [...q],
            removeTags: [...B]
          }), E(null);
        } catch (ve) {
          console.error("Failed to update tags via shortcut:", ve);
        }
      Pr ? b(!0) : et ? Q() : cn && ne();
    },
    [N, t, Q, ne, b]
  );
  v.useEffect(() => {
    const U = (M) => {
      var pe, Gt, ka;
      if (l === null) return;
      const Z = ((pe = document.activeElement) == null ? void 0 : pe.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || ((ka = document.activeElement) == null ? void 0 : ka.isContentEditable), B = M.key === "Delete" || M.key === "Backspace", q = M.key === "ArrowRight" || M.key === "ArrowLeft", et = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        M.key
      ), cn = M.key === "Escape", Pr = (M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z" || M.code === "KeyZ"), ve = /^[0-9]$/.test(M.key) && !M.ctrlKey && !M.metaKey && !M.altKey && M.code !== "KeyZ";
      if (B || q || et || cn || Pr || ve)
        if (Z)
          if (cn) {
            if (e.activeModal.type !== "none") {
              M.preventDefault(), M.stopPropagation();
              return;
            }
            M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
          } else
            return;
        else {
          if (cn && e.activeModal.type !== "none") {
            M.preventDefault(), M.stopPropagation();
            return;
          }
          M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
        }
      else
        return;
      if (M.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (M.key === "ArrowRight")
        Q();
      else if (M.key === "ArrowLeft")
        ne();
      else if (M.key === "f" || M.key === "F")
        ht(M);
      else if (M.key === "i" || M.key === "I")
        y((es) => !es);
      else if (M.key === "t" || M.key === "T")
        O();
      else if ((M.key === "r" || M.key === "R") && e.viewScope === "trash")
        $();
      else if (M.key === "Delete")
        b();
      else if ((M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z"))
        re();
      else if (ve && !Z) {
        const es = `viewer.shortcut.${M.key}`, ts = u[es];
        typeof ts == "string" && ts && (R(M.key), setTimeout(() => {
          Y.current && R(null);
        }, 500), Ze(ts));
      }
    };
    window.addEventListener("keydown", U, { capture: !0 });
    const ee = () => {
      const M = !!document.fullscreenElement;
      g(M), y(M ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", ee), () => {
      window.removeEventListener("keydown", U, { capture: !0 }), document.removeEventListener("fullscreenchange", ee);
    };
  }, [
    l,
    t,
    ht,
    Q,
    ne,
    u,
    b,
    e.activeModal.type,
    re,
    O,
    $,
    e.viewScope,
    Ze
  ]), v.useEffect(() => {
    l !== null && r(l).catch((U) => {
      console.error("Failed to fetch full image details for viewer:", U);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (j(!0), ki(l).then((U) => {
      Y.current && t({ type: "SET_LINEAGE", payload: U });
    }).catch((U) => {
      console.error("Failed to fetch lineage:", U);
    }).finally(() => {
      Y.current && j(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || de !== -1 && de >= W.length - 15 && n();
  }, [
    l,
    W.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    de
  ]);
  const br = v.useMemo(() => {
    if (!d || de === -1) return [];
    const U = u["viewer.thumbnail_window_size"], ee = Math.floor(U / 2);
    let M = Math.max(0, de - ee);
    const Z = Math.min(W.length, M + U);
    return Z === W.length && (M = Math.max(0, Z - U)), W.slice(M, Z).map((B, q) => ({
      img: B,
      absIndex: M + q
    }));
  }, [W, de, u, d]), Ht = v.useMemo(() => N ? x(N) : [], [N, x]);
  return v.useEffect(() => {
    var U, ee;
    if (l !== null) {
      if (d) {
        const M = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        M && M.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((U = document.activeElement) == null ? void 0 : U.tagName) === "CANVAS" && document.activeElement.blur(), (ee = V.current) == null || ee.focus();
    }
  }, [l, d]), v.useEffect(() => {
    if (l === null || W.length === 0) return;
    const U = W.findIndex(
      (B) => B.id === l
    );
    if (U === -1) return;
    const ee = (B) => We(B), M = [
      U + 1,
      U + 2,
      U - 1
    ], Z = setTimeout(() => {
      for (const B of M)
        if (B >= 0 && B < W.length) {
          const q = W[B], et = new Image();
          et.src = ee(q);
        }
    }, 150);
    return () => clearTimeout(Z);
  }, [l, W]), {
    isFullscreen: h,
    showDetails: w,
    setShowDetails: y,
    showThumbnails: d,
    setShowThumbnailsOverride: f,
    isLoadingLineage: p,
    isJumping: C,
    activeShortcutKey: S,
    lastDeletedImages: _,
    setLastDeletedImages: E,
    overlayRef: V,
    handleNext: Q,
    handlePrevious: ne,
    handleDelete: b,
    handleTagEdit: O,
    handleRestore: $,
    handleUndo: re,
    toggleFullscreen: ht,
    currentIndex: de,
    currentThumbnails: W,
    image: N,
    windowedThumbnails: br,
    parentChain: Ht
  };
}, ph = ({
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
}) }) : null, mh = ({
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
), xd = v.memo(
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
              title: s ? "Source Image" : "Derivative Image",
              children: s ? /* @__PURE__ */ i.jsx(Jc, { size: 12 }) : /* @__PURE__ */ i.jsx(qc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
xd.displayName = "ThumbnailItem";
const hh = ({
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
    xd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Cr, { className: "animate-spin", size: 20 }) })
] }) }), gh = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Te(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: m,
    activeShortcutKey: x,
    setLastDeletedImages: h,
    overlayRef: g,
    handleNext: w,
    handlePrevious: y,
    handleTagEdit: k,
    handleRestore: f,
    toggleFullscreen: d,
    image: p,
    windowedThumbnails: j,
    parentChain: C
  } = fh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), { executeWorkflow: L } = fd();
  if (!p) return null;
  const { viewerImageId: _, viewerMode: E } = e, P = We(p), T = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Me.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: g,
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
              onClick: (S) => S.stopPropagation(),
              children: [
                T && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
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
                      children: /* @__PURE__ */ i.jsx(nd, { size: 20 })
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
                      children: /* @__PURE__ */ i.jsx(am, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: d,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(fm, { size: 20 }) : /* @__PURE__ */ i.jsx(dm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Se, { size: 20 })
                    }
                  )
                ] }),
                T && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: y,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ i.jsx(ed, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Cr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: P,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                T && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(td, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  mh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: T,
                    parentChain: C,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  hh,
                  {
                    windowedThumbnails: j,
                    viewerImageId: _,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: E
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  ph,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
            dd,
            {
              image: e.activeModal.image,
              onExecute: (S) => e.activeModal.type === "workflow_selection" ? L(S, e.activeModal.image) : Promise.resolve()
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            pd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: h
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(md, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(od, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(ud, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            cd,
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
}, yh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Te(), [s, a] = v.useState("gallery"), [o, u] = v.useState(""), [c, m] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const x = e.searchQuery.trim() !== "", h = v.useRef(null), g = v.useRef(null), w = v.useMemo(
    () => e.images.filter((k) => e.viewScope === "trash" ? k.exists !== !1 || e.settings["gallery.trash.show_missing"] : k.exists !== !1 && (e.settings["gallery.show_parent_images"] || !k.has_children)),
    [e.images, e.settings, e.viewScope]
  ), y = v.useMemo(
    () => w.slice(0, c),
    [w, c]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (F.log(
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
            F.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < w.length ? (F.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), m((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (F.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : F.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: w.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = h.current;
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
    const k = e.viewerImageId ?? g.current;
    if (k !== null && w.some((d) => d.id === k)) {
      const d = w.findIndex((j) => j.id === k);
      if (d >= c) {
        m(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${k}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (g.current = null));
    }
    e.viewerImageId !== null && (g.current = e.viewerImageId);
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
    visibleImages: y,
    isSearchActive: x,
    loadMoreRef: h
  };
}, vh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Te(), l = e.selectedIds.size;
  if (l === 0) return null;
  const s = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (c) => e.selectedIds.has(c.id)
    ), u = /* @__PURE__ */ new Set();
    for (const c of o)
      if (c.tags)
        for (const m of c.tags)
          u.add(m);
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
                  On,
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
                  On,
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
              /* @__PURE__ */ i.jsx(Se, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, wh = () => {
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
    visibleImages: m,
    isSearchActive: x,
    loadMoreRef: h
  } = yh();
  return F.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: m.length,
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
              /* @__PURE__ */ i.jsx(On, { size: 14 }),
              /* @__PURE__ */ i.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (g) => r("gallery.trash.show_missing", g.target.checked)
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
                  /* @__PURE__ */ i.jsx(Se, { size: 14 }),
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
                  color: x ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: x ? "bold" : "normal"
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(om, { size: 14 }) : /* @__PURE__ */ i.jsx(nd, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(lm, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(hm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(ch, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(sh, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          dh,
          {
            onClose: () => s("gallery"),
            onSearch: (g) => {
              t({ type: "SET_SEARCH_QUERY", payload: g }), s("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: m.map((g) => {
                const w = e.settings["sidebar.thumbnail_size"] || 100, y = e.settings["gallery.view_mode"] === "grid_only", k = y && g.width && g.height ? Math.min(
                  w,
                  w * g.width / g.height
                ) + 10 : y ? w + 10 : "100%";
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    "data-image-id": g.id,
                    style: {
                      width: y ? "auto" : "100%",
                      flexShrink: 0,
                      display: y ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ i.jsx(
                      lh,
                      {
                        height: y ? w + 10 : Math.max(w, 150),
                        style: {
                          width: typeof k == "number" ? `${k}px` : k,
                          minWidth: typeof k == "number" ? `${k}px` : k,
                          display: y ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ i.jsx(rh, { image: g })
                      }
                    )
                  },
                  g.id
                );
              })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: h,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(vh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(gh, {}),
        /* @__PURE__ */ i.jsx(eh, {})
      ]
    }
  );
};
Ao.registerExtension({
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
const Zl = document.createElement("link");
Zl.rel = "stylesheet";
Zl.type = "text/css";
Zl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Zl);
let qr = null, nt = null;
Ao.registerExtension({
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
      const n = await id();
      F.init(n.dev_mode), F.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), F.init(!1);
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
      }, H.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), H.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), H.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), F.log("Import completed.");
      }), H.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await sd({
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
            F.log("render called", {
              el: n,
              galleryRoot: qr,
              galleryContainer: nt
            }), nt || (F.log("galleryContainer not found, creating new one"), nt = document.createElement("div"), nt.id = "meld-gallery-container", nt.style.height = "100%", nt.style.width = "100%", nt.style.display = "flex", nt.style.flexDirection = "column"), n.contains(nt) || (F.log("Appending galleryContainer to el"), n.appendChild(nt)), qr ? F.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (F.log("Creating new gallery root"), qr = Kc(nt), qr.render(
              dl.createElement(
                zm,
                null,
                dl.createElement(wh)
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
