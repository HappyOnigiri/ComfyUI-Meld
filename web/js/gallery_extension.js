import { api as K } from "../../../scripts/api.js";
import { app as zo } from "../../../scripts/app.js";
function pd(e) {
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
var Cr = Symbol.for("react.element"), md = Symbol.for("react.portal"), hd = Symbol.for("react.fragment"), gd = Symbol.for("react.strict_mode"), yd = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), wd = Symbol.for("react.context"), xd = Symbol.for("react.forward_ref"), _d = Symbol.for("react.suspense"), Sd = Symbol.for("react.memo"), kd = Symbol.for("react.lazy"), wa = Symbol.iterator;
function jd(e) {
  return e === null || typeof e != "object" ? null : (e = wa && e[wa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ao = Object.assign, $o = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = $o, this.updater = n || Fo;
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
function Si(e, t, n) {
  this.props = e, this.context = t, this.refs = $o, this.updater = n || Fo;
}
var ki = Si.prototype = new Vo();
ki.constructor = Si;
Ao(ki, Fn.prototype);
ki.isPureReactComponent = !0;
var xa = Array.isArray, Uo = Object.prototype.hasOwnProperty, ji = { current: null }, Qo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wo(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Uo.call(t, r) && !Qo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Cr, type: e, key: s, ref: a, props: l, _owner: ji.current };
}
function Ed(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function Cd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var _a = /\/+/g;
function ql(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cd("" + e.key) : t.toString(36);
}
function Xr(e, t, n, r, l) {
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
        case Cr:
        case md:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + ql(a, 0) : r, xa(l) ? (n = "", e != null && (n = e.replace(_a, "$&/") + "/"), Xr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (Ei(l) && (l = Ed(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(_a, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", xa(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + ql(s, o);
    a += Xr(s, t, n, u, l);
  }
  else if (u = jd(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + ql(s, o++), a += Xr(s, t, n, u, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Pr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Xr(e, r, "", "", function(s) {
    return t.call(n, s, l++);
  }), r;
}
function Nd(e) {
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
var Pe = { current: null }, Zr = { transition: null }, Id = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: ji };
function Ho() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: Pr, forEach: function(e, t, n) {
  Pr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Pr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Pr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ei(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = Fn;
H.Fragment = hd;
H.Profiler = yd;
H.PureComponent = Si;
H.StrictMode = gd;
H.Suspense = _d;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
H.act = Ho;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ao({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = ji.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Uo.call(t, u) && !Qo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
H.createContext = function(e) {
  return e = { $$typeof: wd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vd, _context: e }, e.Consumer = e;
};
H.createElement = Wo;
H.createFactory = function(e) {
  var t = Wo.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: xd, render: e };
};
H.isValidElement = Ei;
H.lazy = function(e) {
  return { $$typeof: kd, _payload: { _status: -1, _result: e }, _init: Nd };
};
H.memo = function(e, t) {
  return { $$typeof: Sd, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
H.unstable_act = Ho;
H.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
H.useContext = function(e) {
  return Pe.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
H.useId = function() {
  return Pe.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return Pe.current.useRef(e);
};
H.useState = function(e) {
  return Pe.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return Pe.current.useTransition();
};
H.version = "18.3.1";
Oo.exports = H;
var v = Oo.exports;
const Sa = /* @__PURE__ */ pd(v);
var Bo = { exports: {} }, Be = {}, Go = { exports: {} }, Ko = {};
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
  function t(T, $) {
    var Q = T.length;
    T.push($);
    e: for (; 0 < Q; ) {
      var q = Q - 1 >>> 1, O = T[q];
      if (0 < l(O, $)) T[q] = $, T[Q] = O, Q = q;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0], Q = T.pop();
    if (Q !== $) {
      T[0] = Q;
      e: for (var q = 0, O = T.length, Y = O >>> 1; q < Y; ) {
        var te = 2 * (q + 1) - 1, tt = T[te], De = te + 1, Ke = T[De];
        if (0 > l(tt, Q)) De < O && 0 > l(Ke, tt) ? (T[q] = Ke, T[De] = Q, q = De) : (T[q] = tt, T[te] = Q, q = te);
        else if (De < O && 0 > l(Ke, Q)) T[q] = Ke, T[De] = Q, q = De;
        else break e;
      }
    }
    return $;
  }
  function l(T, $) {
    var Q = T.sortIndex - $.sortIndex;
    return Q !== 0 ? Q : T.id - $.id;
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
  var u = [], d = [], h = 1, g = null, m = 3, y = !1, w = !1, x = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var $ = n(d); $ !== null; ) {
      if ($.callback === null) r(d);
      else if ($.startTime <= T) r(d), $.sortIndex = $.expirationTime, t(u, $);
      else break;
      $ = n(d);
    }
  }
  function j(T) {
    if (x = !1, p(T), !w) if (n(u) !== null) w = !0, G(I);
    else {
      var $ = n(d);
      $ !== null && xe(j, $.startTime - T);
    }
  }
  function I(T, $) {
    w = !1, x && (x = !1, f(C), C = -1), y = !0;
    var Q = m;
    try {
      for (p($), g = n(u); g !== null && (!(g.expirationTime > $) || T && !k()); ) {
        var q = g.callback;
        if (typeof q == "function") {
          g.callback = null, m = g.priorityLevel;
          var O = q(g.expirationTime <= $);
          $ = e.unstable_now(), typeof O == "function" ? g.callback = O : g === n(u) && r(u), p($);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var Y = !0;
      else {
        var te = n(d);
        te !== null && xe(j, te.startTime - $), Y = !1;
      }
      return Y;
    } finally {
      g = null, m = Q, y = !1;
    }
  }
  var P = !1, S = null, C = -1, U = 5, D = -1;
  function k() {
    return !(e.unstable_now() - D < U);
  }
  function _() {
    if (S !== null) {
      var T = e.unstable_now();
      D = T;
      var $ = !0;
      try {
        $ = S(!0, T);
      } finally {
        $ ? N() : (P = !1, S = null);
      }
    } else P = !1;
  }
  var N;
  if (typeof c == "function") N = function() {
    c(_);
  };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(), b = A.port2;
    A.port1.onmessage = _, N = function() {
      b.postMessage(null);
    };
  } else N = function() {
    E(_, 0);
  };
  function G(T) {
    S = T, P || (P = !0, N());
  }
  function xe(T, $) {
    C = E(function() {
      T(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, G(I));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = m;
    }
    var Q = m;
    m = $;
    try {
      return T();
    } finally {
      m = Q;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, $) {
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
    var Q = m;
    m = T;
    try {
      return $();
    } finally {
      m = Q;
    }
  }, e.unstable_scheduleCallback = function(T, $, Q) {
    var q = e.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? q + Q : q) : Q = q, T) {
      case 1:
        var O = -1;
        break;
      case 2:
        O = 250;
        break;
      case 5:
        O = 1073741823;
        break;
      case 4:
        O = 1e4;
        break;
      default:
        O = 5e3;
    }
    return O = Q + O, T = { id: h++, callback: $, priorityLevel: T, startTime: Q, expirationTime: O, sortIndex: -1 }, Q > q ? (T.sortIndex = Q, t(d, T), n(u) === null && T === n(d) && (x ? (f(C), C = -1) : x = !0, xe(j, Q - q))) : (T.sortIndex = O, t(u, T), w || y || (w = !0, G(I))), T;
  }, e.unstable_shouldYield = k, e.unstable_wrapCallback = function(T) {
    var $ = m;
    return function() {
      var Q = m;
      m = $;
      try {
        return T.apply(this, arguments);
      } finally {
        m = Q;
      }
    };
  };
})(Ko);
Go.exports = Ko;
var Td = Go.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld = v, He = Td;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Yo = /* @__PURE__ */ new Set(), or = {};
function sn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Yo.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Es = Object.prototype.hasOwnProperty, Md = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, ja = {};
function Pd(e) {
  return Es.call(ja, e) ? !0 : Es.call(ka, e) ? !1 : Md.test(e) ? ja[e] = !0 : (ka[e] = !0, !1);
}
function bd(e, t, n, r) {
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
function Dd(e, t, n, r) {
  if (t === null || typeof t > "u" || bd(e, t, n, r)) return !0;
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
var Ci = /[\-:]([a-z])/g;
function Ni(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ci,
    Ni
  );
  ke[t] = new be(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ci, Ni);
  ke[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ci, Ni);
  ke[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ii(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dd(t, n, l, r) && (n = null), r || l === null ? Pd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, br = Symbol.for("react.element"), dn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), Ti = Symbol.for("react.strict_mode"), Cs = Symbol.for("react.profiler"), Xo = Symbol.for("react.provider"), Zo = Symbol.for("react.context"), Li = Symbol.for("react.forward_ref"), Ns = Symbol.for("react.suspense"), Is = Symbol.for("react.suspense_list"), Mi = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), Jo = Symbol.for("react.offscreen"), Ea = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Ea && e[Ea] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ue = Object.assign, es;
function Yn(e) {
  if (es === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    es = t && t[1] || "";
  }
  return `
` + es + e;
}
var ts = !1;
function ns(e, t) {
  if (!e || ts) return "";
  ts = !0;
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
    ts = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Rd(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ns(e.type, !1), e;
    case 11:
      return e = ns(e.type.render, !1), e;
    case 1:
      return e = ns(e.type, !0), e;
    default:
      return "";
  }
}
function Ts(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case dn:
      return "Portal";
    case Cs:
      return "Profiler";
    case Ti:
      return "StrictMode";
    case Ns:
      return "Suspense";
    case Is:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Zo:
      return (e.displayName || "Context") + ".Consumer";
    case Xo:
      return (e._context.displayName || "Context") + ".Provider";
    case Li:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Mi:
      return t = e.displayName || null, t !== null ? t : Ts(e.type) || "Memo";
    case Nt:
      t = e._payload, e = e._init;
      try {
        return Ts(e(t));
      } catch {
      }
  }
  return null;
}
function zd(e) {
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
      return Ts(t);
    case 8:
      return t === Ti ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function qo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Od(e) {
  var t = qo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Dr(e) {
  e._valueTracker || (e._valueTracker = Od(e));
}
function eu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = qo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ul(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ls(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function tu(e, t) {
  t = t.checked, t != null && Ii(e, "checked", t, !1);
}
function Ms(e, t) {
  tu(e, t);
  var n = Vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ps(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ps(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Na(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ps(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ia(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(L(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function nu(e, t) {
  var n = Vt(t.value), r = Vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ru(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ds(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ru(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Rr, lu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
}, Fd = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Fd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function su(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function iu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = su(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ad = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Rs(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function zs(e, t) {
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
var Os = null;
function Pi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fs = null, jn = null, En = null;
function La(e) {
  if (e = Tr(e)) {
    if (typeof Fs != "function") throw Error(L(280));
    var t = e.stateNode;
    t && (t = Fl(t), Fs(e.stateNode, e.type, t));
  }
}
function au(e) {
  jn ? En ? En.push(e) : En = [e] : jn = e;
}
function ou() {
  if (jn) {
    var e = jn, t = En;
    if (En = jn = null, La(e), t) for (e = 0; e < t.length; e++) La(t[e]);
  }
}
function uu(e, t) {
  return e(t);
}
function cu() {
}
var rs = !1;
function du(e, t, n) {
  if (rs) return e(t, n);
  rs = !0;
  try {
    return uu(e, t, n);
  } finally {
    rs = !1, (jn !== null || En !== null) && (cu(), ou());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var As = !1;
if (_t) try {
  var Un = {};
  Object.defineProperty(Un, "passive", { get: function() {
    As = !0;
  } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
} catch {
  As = !1;
}
function $d(e, t, n, r, l, s, a, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var er = !1, cl = null, dl = !1, $s = null, Vd = { onError: function(e) {
  er = !0, cl = e;
} };
function Ud(e, t, n, r, l, s, a, o, u) {
  er = !1, cl = null, $d.apply(Vd, arguments);
}
function Qd(e, t, n, r, l, s, a, o, u) {
  if (Ud.apply(this, arguments), er) {
    if (er) {
      var d = cl;
      er = !1, cl = null;
    } else throw Error(L(198));
    dl || (dl = !0, $s = d);
  }
}
function an(e) {
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
function fu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ma(e) {
  if (an(e) !== e) throw Error(L(188));
}
function Wd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null) throw Error(L(188));
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
        if (s === n) return Ma(l), e;
        if (s === r) return Ma(l), t;
        s = s.sibling;
      }
      throw Error(L(188));
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
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function pu(e) {
  return e = Wd(e), e !== null ? mu(e) : null;
}
function mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hu = He.unstable_scheduleCallback, Pa = He.unstable_cancelCallback, Hd = He.unstable_shouldYield, Bd = He.unstable_requestPaint, fe = He.unstable_now, Gd = He.unstable_getCurrentPriorityLevel, bi = He.unstable_ImmediatePriority, gu = He.unstable_UserBlockingPriority, fl = He.unstable_NormalPriority, Kd = He.unstable_LowPriority, yu = He.unstable_IdlePriority, Dl = null, mt = null;
function Yd(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ot = Math.clz32 ? Math.clz32 : Jd, Xd = Math.log, Zd = Math.LN2;
function Jd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Xd(e) / Zd | 0) | 0;
}
var zr = 64, Or = 4194304;
function Zn(e) {
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
function pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Zn(o) : (s &= a, s !== 0 && (r = Zn(s)));
  } else a = n & ~l, a !== 0 ? r = Zn(a) : s !== 0 && (r = Zn(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ot(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function qd(e, t) {
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
function ef(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - ot(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = qd(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Vs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vu() {
  var e = zr;
  return zr <<= 1, !(zr & 4194240) && (zr = 64), e;
}
function ls(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n;
}
function tf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ot(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Di(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ne = 0;
function wu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xu, Ri, _u, Su, ku, Us = !1, Fr = [], bt = null, Dt = null, Rt = null, dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), Tt = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Tr(t), t !== null && Ri(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function rf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return bt = Qn(bt, e, t, n, r, l), !0;
    case "dragenter":
      return Dt = Qn(Dt, e, t, n, r, l), !0;
    case "mouseover":
      return Rt = Qn(Rt, e, t, n, r, l), !0;
    case "pointerover":
      var s = l.pointerId;
      return dr.set(s, Qn(dr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return s = l.pointerId, fr.set(s, Qn(fr.get(s) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ju(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = fu(n), t !== null) {
          e.blockedOn = t, ku(e.priority, function() {
            _u(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Tr(n), t !== null && Ri(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Da(e, t, n) {
  Jr(e) && n.delete(t);
}
function lf() {
  Us = !1, bt !== null && Jr(bt) && (bt = null), Dt !== null && Jr(Dt) && (Dt = null), Rt !== null && Jr(Rt) && (Rt = null), dr.forEach(Da), fr.forEach(Da);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Us || (Us = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, lf)));
}
function pr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < Fr.length) {
    Wn(Fr[0], e);
    for (var n = 1; n < Fr.length; n++) {
      var r = Fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (bt !== null && Wn(bt, e), Dt !== null && Wn(Dt, e), Rt !== null && Wn(Rt, e), dr.forEach(t), fr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) ju(n), n.blockedOn === null && Tt.shift();
}
var Cn = Et.ReactCurrentBatchConfig, ml = !0;
function sf(e, t, n, r) {
  var l = ne, s = Cn.transition;
  Cn.transition = null;
  try {
    ne = 1, zi(e, t, n, r);
  } finally {
    ne = l, Cn.transition = s;
  }
}
function af(e, t, n, r) {
  var l = ne, s = Cn.transition;
  Cn.transition = null;
  try {
    ne = 4, zi(e, t, n, r);
  } finally {
    ne = l, Cn.transition = s;
  }
}
function zi(e, t, n, r) {
  if (ml) {
    var l = Qs(e, t, n, r);
    if (l === null) ms(e, t, r, hl, n), ba(e, r);
    else if (rf(l, e, t, n, r)) r.stopPropagation();
    else if (ba(e, r), t & 4 && -1 < nf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Tr(l);
        if (s !== null && xu(s), s = Qs(e, t, n, r), s === null && ms(e, t, r, hl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else ms(e, t, r, null, n);
  }
}
var hl = null;
function Qs(e, t, n, r) {
  if (hl = null, e = Pi(r), e = Yt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = fu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return hl = e, null;
}
function Eu(e) {
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
      switch (Gd()) {
        case bi:
          return 1;
        case gu:
          return 4;
        case fl:
        case Kd:
          return 16;
        case yu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Oi = null, qr = null;
function Cu() {
  if (qr) return qr;
  var e, t = Oi, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++) ;
  return qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function el(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ar() {
  return !0;
}
function Ra() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ar : Ra, this.isPropagationStopped = Ra, this;
  }
  return ue(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ar);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ar);
  }, persist: function() {
  }, isPersistent: Ar }), t;
}
var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fi = Ge(An), Ir = ue({}, An, { view: 0, detail: 0 }), of = Ge(Ir), ss, is, Hn, Rl = ue({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ai, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (ss = e.screenX - Hn.screenX, is = e.screenY - Hn.screenY) : is = ss = 0, Hn = e), ss);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : is;
} }), za = Ge(Rl), uf = ue({}, Rl, { dataTransfer: 0 }), cf = Ge(uf), df = ue({}, Ir, { relatedTarget: 0 }), as = Ge(df), ff = ue({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pf = Ge(ff), mf = ue({}, An, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hf = Ge(mf), gf = ue({}, An, { data: 0 }), Oa = Ge(gf), yf = {
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
}, vf = {
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
}, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
}
function Ai() {
  return xf;
}
var _f = ue({}, Ir, { key: function(e) {
  if (e.key) {
    var t = yf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ai, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Sf = Ge(_f), kf = ue({}, Rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fa = Ge(kf), jf = ue({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ai }), Ef = Ge(jf), Cf = ue({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nf = Ge(Cf), If = ue({}, Rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Tf = Ge(If), Lf = [9, 13, 27, 32], $i = _t && "CompositionEvent" in window, tr = null;
_t && "documentMode" in document && (tr = document.documentMode);
var Mf = _t && "TextEvent" in window && !tr, Nu = _t && (!$i || tr && 8 < tr && 11 >= tr), Aa = " ", $a = !1;
function Iu(e, t) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(t.keyCode) !== -1;
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
function Tu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function Pf(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ($a = !0, Aa);
    case "textInput":
      return e = t.data, e === Aa && $a ? null : e;
    default:
      return null;
  }
}
function bf(e, t) {
  if (pn) return e === "compositionend" || !$i && Iu(e, t) ? (e = Cu(), qr = Oi = Mt = null, pn = !1, e) : null;
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
      return Nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Df = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Df[e.type] : t === "textarea";
}
function Lu(e, t, n, r) {
  au(r), t = gl(t, "onChange"), 0 < t.length && (n = new Fi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var nr = null, mr = null;
function Rf(e) {
  Vu(e, 0);
}
function zl(e) {
  var t = gn(e);
  if (eu(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var Mu = !1;
if (_t) {
  var os;
  if (_t) {
    var us = "oninput" in document;
    if (!us) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"), us = typeof Ua.oninput == "function";
    }
    os = us;
  } else os = !1;
  Mu = os && (!document.documentMode || 9 < document.documentMode);
}
function Qa() {
  nr && (nr.detachEvent("onpropertychange", Pu), mr = nr = null);
}
function Pu(e) {
  if (e.propertyName === "value" && zl(mr)) {
    var t = [];
    Lu(t, mr, e, Pi(e)), du(Rf, t);
  }
}
function Of(e, t, n) {
  e === "focusin" ? (Qa(), nr = t, mr = n, nr.attachEvent("onpropertychange", Pu)) : e === "focusout" && Qa();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(mr);
}
function Af(e, t) {
  if (e === "click") return zl(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function Vf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : Vf;
function hr(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Es.call(t, l) || !ct(e[l], t[l])) return !1;
  }
  return !0;
}
function Wa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ha(e, t) {
  var n = Wa(e);
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
    n = Wa(n);
  }
}
function bu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Du() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function Vi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Uf(e) {
  var t = Du(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Ha(n, s);
        var a = Ha(
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
var Qf = _t && "documentMode" in document && 11 >= document.documentMode, mn = null, Ws = null, rr = null, Hs = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hs || mn == null || mn !== ul(r) || (r = mn, "selectionStart" in r && Vi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rr && hr(rr, r) || (rr = r, r = gl(Ws, "onSelect"), 0 < r.length && (t = new Fi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function $r(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: $r("Animation", "AnimationEnd"), animationiteration: $r("Animation", "AnimationIteration"), animationstart: $r("Animation", "AnimationStart"), transitionend: $r("Transition", "TransitionEnd") }, cs = {}, Ru = {};
_t && (Ru = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function Ol(e) {
  if (cs[e]) return cs[e];
  if (!hn[e]) return e;
  var t = hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ru) return cs[e] = t[n];
  return e;
}
var zu = Ol("animationend"), Ou = Ol("animationiteration"), Fu = Ol("animationstart"), Au = Ol("transitionend"), $u = /* @__PURE__ */ new Map(), Ga = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  $u.set(e, t), sn(t, [e]);
}
for (var ds = 0; ds < Ga.length; ds++) {
  var fs = Ga[ds], Wf = fs.toLowerCase(), Hf = fs[0].toUpperCase() + fs.slice(1);
  Qt(Wf, "on" + Hf);
}
Qt(zu, "onAnimationEnd");
Qt(Ou, "onAnimationIteration");
Qt(Fu, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Au, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Ka(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qd(r, t, void 0, e), e.currentTarget = null;
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, d = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ka(l, o, d), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, d = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ka(l, o, d), s = u;
      }
    }
  }
  if (dl) throw e = $s, dl = !1, $s = null, e;
}
function le(e, t) {
  var n = t[Xs];
  n === void 0 && (n = t[Xs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Uu(t, e, 2, !1), n.add(r));
}
function ps(e, t, n) {
  var r = 0;
  t && (r |= 4), Uu(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Vr]) {
    e[Vr] = !0, Yo.forEach(function(n) {
      n !== "selectionchange" && (Bf.has(n) || ps(n, !1, e), ps(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || (t[Vr] = !0, ps("selectionchange", !1, t));
  }
}
function Uu(e, t, n, r) {
  switch (Eu(t)) {
    case 1:
      var l = sf;
      break;
    case 4:
      l = af;
      break;
    default:
      l = zi;
  }
  n = l.bind(null, t, n, e), l = void 0, !As || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ms(e, t, n, r, l) {
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
        if (a = Yt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  du(function() {
    var d = s, h = Pi(n), g = [];
    e: {
      var m = $u.get(e);
      if (m !== void 0) {
        var y = Fi, w = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Sf;
            break;
          case "focusin":
            w = "focus", y = as;
            break;
          case "focusout":
            w = "blur", y = as;
            break;
          case "beforeblur":
          case "afterblur":
            y = as;
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
            y = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ef;
            break;
          case zu:
          case Ou:
          case Fu:
            y = pf;
            break;
          case Au:
            y = Nf;
            break;
          case "scroll":
            y = of;
            break;
          case "wheel":
            y = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Fa;
        }
        var x = (t & 4) !== 0, E = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var j = p.stateNode;
          if (p.tag === 5 && j !== null && (p = j, f !== null && (j = cr(c, f), j != null && x.push(yr(c, j, p)))), E) break;
          c = c.return;
        }
        0 < x.length && (m = new y(m, w, null, n, h), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Os && (w = n.relatedTarget || n.fromElement) && (Yt(w) || w[St])) break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = d, w = w ? Yt(w) : null, w !== null && (E = an(w), w !== E || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = d), y !== w)) {
          if (x = za, j = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Fa, j = "onPointerLeave", f = "onPointerEnter", c = "pointer"), E = y == null ? m : gn(y), p = w == null ? m : gn(w), m = new x(j, c + "leave", y, n, h), m.target = E, m.relatedTarget = p, j = null, Yt(h) === d && (x = new x(f, c + "enter", w, n, h), x.target = p, x.relatedTarget = E, j = x), E = j, y && w) t: {
            for (x = y, f = w, c = 0, p = x; p; p = cn(p)) c++;
            for (p = 0, j = f; j; j = cn(j)) p++;
            for (; 0 < c - p; ) x = cn(x), c--;
            for (; 0 < p - c; ) f = cn(f), p--;
            for (; c--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = cn(x), f = cn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && Ya(g, m, y, x, !1), w !== null && E !== null && Ya(g, E, w, x, !0);
        }
      }
      e: {
        if (m = d ? gn(d) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var I = zf;
        else if (Va(m)) if (Mu) I = $f;
        else {
          I = Ff;
          var P = Of;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (I = Af);
        if (I && (I = I(e, d))) {
          Lu(g, I, n, h);
          break e;
        }
        P && P(e, m, d), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && Ps(m, "number", m.value);
      }
      switch (P = d ? gn(d) : window, e) {
        case "focusin":
          (Va(P) || P.contentEditable === "true") && (mn = P, Ws = d, rr = null);
          break;
        case "focusout":
          rr = Ws = mn = null;
          break;
        case "mousedown":
          Hs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hs = !1, Ba(g, n, h);
          break;
        case "selectionchange":
          if (Qf) break;
        case "keydown":
        case "keyup":
          Ba(g, n, h);
      }
      var S;
      if ($i) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else pn ? Iu(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Nu && n.locale !== "ko" && (pn || C !== "onCompositionStart" ? C === "onCompositionEnd" && pn && (S = Cu()) : (Mt = h, Oi = "value" in Mt ? Mt.value : Mt.textContent, pn = !0)), P = gl(d, C), 0 < P.length && (C = new Oa(C, e, null, n, h), g.push({ event: C, listeners: P }), S ? C.data = S : (S = Tu(n), S !== null && (C.data = S)))), (S = Mf ? Pf(e, n) : bf(e, n)) && (d = gl(d, "onBeforeInput"), 0 < d.length && (h = new Oa("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: d }), h.data = S));
    }
    Vu(g, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, s = l.stateNode;
    l.tag === 5 && s !== null && (l = s, s = cr(e, n), s != null && r.unshift(yr(e, s, l)), s = cr(e, t), s != null && r.push(yr(e, s, l))), e = e.return;
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, d = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && d !== null && (o = d, l ? (u = cr(n, s), u != null && a.unshift(yr(n, u, o))) : l || (u = cr(n, s), u != null && a.push(yr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Gf = /\r\n?/g, Kf = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gf, `
`).replace(Kf, "");
}
function Ur(e, t, n) {
  if (t = Xa(t), Xa(e) !== t && n) throw Error(L(425));
}
function yl() {
}
var Bs = null, Gs = null;
function Ks(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ys = typeof setTimeout == "function" ? setTimeout : void 0, Yf = typeof clearTimeout == "function" ? clearTimeout : void 0, Za = typeof Promise == "function" ? Promise : void 0, Xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Za < "u" ? function(e) {
  return Za.resolve(null).then(e).catch(Zf);
} : Ys;
function Zf(e) {
  setTimeout(function() {
    throw e;
  });
}
function hs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  pr(t);
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
function Ja(e) {
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
var $n = Math.random().toString(36).slice(2), pt = "__reactFiber$" + $n, vr = "__reactProps$" + $n, St = "__reactContainer$" + $n, Xs = "__reactEvents$" + $n, Jf = "__reactListeners$" + $n, qf = "__reactHandles$" + $n;
function Yt(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ja(e); e !== null; ) {
        if (n = e[pt]) return n;
        e = Ja(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Tr(e) {
  return e = e[pt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Fl(e) {
  return e[vr] || null;
}
var Zs = [], yn = -1;
function Wt(e) {
  return { current: e };
}
function se(e) {
  0 > yn || (e.current = Zs[yn], Zs[yn] = null, yn--);
}
function re(e, t) {
  yn++, Zs[yn] = e.current, e.current = t;
}
var Ut = {}, Te = Wt(Ut), Fe = Wt(!1), en = Ut;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n) l[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ae(e) {
  return e = e.childContextTypes, e != null;
}
function vl() {
  se(Fe), se(Te);
}
function qa(e, t, n) {
  if (Te.current !== Ut) throw Error(L(168));
  re(Te, t), re(Fe, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, zd(e) || "Unknown", l));
  return ue({}, n, r);
}
function wl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, en = Te.current, re(Te, e), re(Fe, Fe.current), !0;
}
function eo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? (e = Qu(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, se(Fe), se(Te), re(Te, e)) : se(Fe), re(Fe, n);
}
var yt = null, Al = !1, gs = !1;
function Wu(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function ep(e) {
  Al = !0, Wu(e);
}
function Ht() {
  if (!gs && yt !== null) {
    gs = !0;
    var e = 0, t = ne;
    try {
      var n = yt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, Al = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), hu(bi, Ht), l;
    } finally {
      ne = t, gs = !1;
    }
  }
  return null;
}
var vn = [], wn = 0, xl = null, _l = 0, Ye = [], Xe = 0, tn = null, vt = 1, wt = "";
function Gt(e, t) {
  vn[wn++] = _l, vn[wn++] = xl, xl = e, _l = t;
}
function Hu(e, t, n) {
  Ye[Xe++] = vt, Ye[Xe++] = wt, Ye[Xe++] = tn, tn = e;
  var r = vt;
  e = wt;
  var l = 32 - ot(r) - 1;
  r &= ~(1 << l), n += 1;
  var s = 32 - ot(t) + l;
  if (30 < s) {
    var a = l - l % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, vt = 1 << 32 - ot(t) + l | n << l | r, wt = s + e;
  } else vt = 1 << s | n << l | r, wt = e;
}
function Ui(e) {
  e.return !== null && (Gt(e, 1), Hu(e, 1, 0));
}
function Qi(e) {
  for (; e === xl; ) xl = vn[--wn], vn[wn] = null, _l = vn[--wn], vn[wn] = null;
  for (; e === tn; ) tn = Ye[--Xe], Ye[Xe] = null, wt = Ye[--Xe], Ye[Xe] = null, vt = Ye[--Xe], Ye[Xe] = null;
}
var We = null, Qe = null, ie = !1, it = null;
function Bu(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function to(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Qe = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: vt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Qe = null, !0) : !1;
    default:
      return !1;
  }
}
function Js(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qs(e) {
  if (ie) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!to(e, t)) {
        if (Js(e)) throw Error(L(418));
        t = zt(n.nextSibling);
        var r = We;
        t && to(e, t) ? Bu(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, We = e);
      }
    } else {
      if (Js(e)) throw Error(L(418));
      e.flags = e.flags & -4097 | 2, ie = !1, We = e;
    }
  }
}
function no(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Qr(e) {
  if (e !== We) return !1;
  if (!ie) return no(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ks(e.type, e.memoizedProps)), t && (t = Qe)) {
    if (Js(e)) throw Gu(), Error(L(418));
    for (; t; ) Bu(e, t), t = zt(t.nextSibling);
  }
  if (no(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = zt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = We ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gu() {
  for (var e = Qe; e; ) e = zt(e.nextSibling);
}
function Mn() {
  Qe = We = null, ie = !1;
}
function Wi(e) {
  it === null ? it = [e] : it.push(e);
}
var tp = Et.ReactCurrentBatchConfig;
function Bn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[s] : o[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ro(e) {
  var t = e._init;
  return t(e._payload);
}
function Ku(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = $t(f, c), f.index = 0, f.sibling = null, f;
  }
  function s(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, c, p, j) {
    return c === null || c.tag !== 6 ? (c = ks(p, f.mode, j), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function u(f, c, p, j) {
    var I = p.type;
    return I === fn ? h(f, c, p.props.children, j, p.key) : c !== null && (c.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Nt && ro(I) === c.type) ? (j = l(c, p.props), j.ref = Bn(f, c, p), j.return = f, j) : (j = al(p.type, p.key, p.props, null, f.mode, j), j.ref = Bn(f, c, p), j.return = f, j);
  }
  function d(f, c, p, j) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = js(p, f.mode, j), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
  }
  function h(f, c, p, j, I) {
    return c === null || c.tag !== 7 ? (c = qt(p, f.mode, j, I), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function g(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = ks("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case br:
          return p = al(c.type, c.key, c.props, null, f.mode, p), p.ref = Bn(f, null, c), p.return = f, p;
        case dn:
          return c = js(c, f.mode, p), c.return = f, c;
        case Nt:
          var j = c._init;
          return g(f, j(c._payload), p);
      }
      if (Xn(c) || Vn(c)) return c = qt(c, f.mode, p, null), c.return = f, c;
      Wr(f, c);
    }
    return null;
  }
  function m(f, c, p, j) {
    var I = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return I !== null ? null : o(f, c, "" + p, j);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          return p.key === I ? u(f, c, p, j) : null;
        case dn:
          return p.key === I ? d(f, c, p, j) : null;
        case Nt:
          return I = p._init, m(
            f,
            c,
            I(p._payload),
            j
          );
      }
      if (Xn(p) || Vn(p)) return I !== null ? null : h(f, c, p, j, null);
      Wr(f, p);
    }
    return null;
  }
  function y(f, c, p, j, I) {
    if (typeof j == "string" && j !== "" || typeof j == "number") return f = f.get(p) || null, o(c, f, "" + j, I);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case br:
          return f = f.get(j.key === null ? p : j.key) || null, u(c, f, j, I);
        case dn:
          return f = f.get(j.key === null ? p : j.key) || null, d(c, f, j, I);
        case Nt:
          var P = j._init;
          return y(f, c, p, P(j._payload), I);
      }
      if (Xn(j) || Vn(j)) return f = f.get(p) || null, h(c, f, j, I, null);
      Wr(c, j);
    }
    return null;
  }
  function w(f, c, p, j) {
    for (var I = null, P = null, S = c, C = c = 0, U = null; S !== null && C < p.length; C++) {
      S.index > C ? (U = S, S = null) : U = S.sibling;
      var D = m(f, S, p[C], j);
      if (D === null) {
        S === null && (S = U);
        break;
      }
      e && S && D.alternate === null && t(f, S), c = s(D, c, C), P === null ? I = D : P.sibling = D, P = D, S = U;
    }
    if (C === p.length) return n(f, S), ie && Gt(f, C), I;
    if (S === null) {
      for (; C < p.length; C++) S = g(f, p[C], j), S !== null && (c = s(S, c, C), P === null ? I = S : P.sibling = S, P = S);
      return ie && Gt(f, C), I;
    }
    for (S = r(f, S); C < p.length; C++) U = y(S, f, C, p[C], j), U !== null && (e && U.alternate !== null && S.delete(U.key === null ? C : U.key), c = s(U, c, C), P === null ? I = U : P.sibling = U, P = U);
    return e && S.forEach(function(k) {
      return t(f, k);
    }), ie && Gt(f, C), I;
  }
  function x(f, c, p, j) {
    var I = Vn(p);
    if (typeof I != "function") throw Error(L(150));
    if (p = I.call(p), p == null) throw Error(L(151));
    for (var P = I = null, S = c, C = c = 0, U = null, D = p.next(); S !== null && !D.done; C++, D = p.next()) {
      S.index > C ? (U = S, S = null) : U = S.sibling;
      var k = m(f, S, D.value, j);
      if (k === null) {
        S === null && (S = U);
        break;
      }
      e && S && k.alternate === null && t(f, S), c = s(k, c, C), P === null ? I = k : P.sibling = k, P = k, S = U;
    }
    if (D.done) return n(
      f,
      S
    ), ie && Gt(f, C), I;
    if (S === null) {
      for (; !D.done; C++, D = p.next()) D = g(f, D.value, j), D !== null && (c = s(D, c, C), P === null ? I = D : P.sibling = D, P = D);
      return ie && Gt(f, C), I;
    }
    for (S = r(f, S); !D.done; C++, D = p.next()) D = y(S, f, C, D.value, j), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? C : D.key), c = s(D, c, C), P === null ? I = D : P.sibling = D, P = D);
    return e && S.forEach(function(_) {
      return t(f, _);
    }), ie && Gt(f, C), I;
  }
  function E(f, c, p, j) {
    if (typeof p == "object" && p !== null && p.type === fn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          e: {
            for (var I = p.key, P = c; P !== null; ) {
              if (P.key === I) {
                if (I = p.type, I === fn) {
                  if (P.tag === 7) {
                    n(f, P.sibling), c = l(P, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (P.elementType === I || typeof I == "object" && I !== null && I.$$typeof === Nt && ro(I) === P.type) {
                  n(f, P.sibling), c = l(P, p.props), c.ref = Bn(f, P, p), c.return = f, f = c;
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            p.type === fn ? (c = qt(p.props.children, f.mode, j, p.key), c.return = f, f = c) : (j = al(p.type, p.key, p.props, null, f.mode, j), j.ref = Bn(f, c, p), j.return = f, f = j);
          }
          return a(f);
        case dn:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = js(p, f.mode, j), c.return = f, f = c;
          }
          return a(f);
        case Nt:
          return P = p._init, E(f, c, P(p._payload), j);
      }
      if (Xn(p)) return w(f, c, p, j);
      if (Vn(p)) return x(f, c, p, j);
      Wr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = ks(p, f.mode, j), c.return = f, f = c), a(f)) : n(f, c);
  }
  return E;
}
var Pn = Ku(!0), Yu = Ku(!1), Sl = Wt(null), kl = null, xn = null, Hi = null;
function Bi() {
  Hi = xn = kl = null;
}
function Gi(e) {
  var t = Sl.current;
  se(Sl), e._currentValue = t;
}
function ei(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Nn(e, t) {
  kl = e, Hi = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (Hi !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
    if (kl === null) throw Error(L(308));
    xn = e, kl.dependencies = { lanes: 0, firstContext: e };
  } else xn = xn.next = e;
  return t;
}
var Xt = null;
function Ki(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function Xu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ki(t)) : (n.next = l.next, l.next = n), t.interleaved = n, kt(e, r);
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Yi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Zu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ee & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, kt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ki(r)) : (t.next = l.next, l.next = t), r.interleaved = t, kt(e, n);
}
function tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
  }
}
function lo(e, t) {
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
function jl(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var s = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, d = u.next;
    u.next = null, a === null ? s = d : a.next = d, a = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== a && (o === null ? h.firstBaseUpdate = d : o.next = d, h.lastBaseUpdate = u));
  }
  if (s !== null) {
    var g = l.baseState;
    a = 0, h = d = u = null, o = s;
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
              g = ue({}, g, m);
              break e;
            case 2:
              It = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else y = { eventTime: y, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (d = h = y, u = g) : h = h.next = y, a |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = g), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    rn |= a, e.lanes = a, e.memoizedState = g;
  }
}
function so(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(L(191, l));
      l.call(r);
    }
  }
}
var Lr = {}, ht = Wt(Lr), wr = Wt(Lr), xr = Wt(Lr);
function Zt(e) {
  if (e === Lr) throw Error(L(174));
  return e;
}
function Xi(e, t) {
  switch (re(xr, t), re(wr, e), re(ht, Lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ds(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ds(t, e);
  }
  se(ht), re(ht, t);
}
function bn() {
  se(ht), se(wr), se(xr);
}
function Ju(e) {
  Zt(xr.current);
  var t = Zt(ht.current), n = Ds(t, e.type);
  t !== n && (re(wr, e), re(ht, n));
}
function Zi(e) {
  wr.current === e && (se(ht), se(wr));
}
var ae = Wt(0);
function El(e) {
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
var ys = [];
function Ji() {
  for (var e = 0; e < ys.length; e++) ys[e]._workInProgressVersionPrimary = null;
  ys.length = 0;
}
var nl = Et.ReactCurrentDispatcher, vs = Et.ReactCurrentBatchConfig, nn = 0, oe = null, me = null, ve = null, Cl = !1, lr = !1, _r = 0, np = 0;
function je() {
  throw Error(L(321));
}
function qi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, s) {
  if (nn = s, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? ip : ap, e = n(r, l), lr) {
    s = 0;
    do {
      if (lr = !1, _r = 0, 25 <= s) throw Error(L(301));
      s += 1, ve = me = null, t.updateQueue = null, nl.current = op, e = n(r, l);
    } while (lr);
  }
  if (nl.current = Nl, t = me !== null && me.next !== null, nn = 0, ve = me = oe = null, Cl = !1, t) throw Error(L(300));
  return e;
}
function ta() {
  var e = _r !== 0;
  return _r = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? oe.memoizedState = ve = e : ve = ve.next = e, ve;
}
function et() {
  if (me === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? oe.memoizedState : ve.next;
  if (t !== null) ve = t, me = e;
  else {
    if (e === null) throw Error(L(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ve === null ? oe.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ws(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = me, l = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = s.next, s.next = a;
    }
    r.baseQueue = l = s, n.pending = null;
  }
  if (l !== null) {
    s = l.next, r = r.baseState;
    var o = a = null, u = null, d = s;
    do {
      var h = d.lane;
      if ((nn & h) === h) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (o = u = g, a = r) : u = u.next = g, oe.lanes |= h, rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== s);
    u === null ? a = r : u.next = o, ct(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, oe.lanes |= s, rn |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xs(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== l);
    ct(s, t.memoizedState) || (Oe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function qu() {
}
function ec(e, t) {
  var n = oe, r = et(), l = t(), s = !ct(r.memoizedState, l);
  if (s && (r.memoizedState = l, Oe = !0), r = r.queue, na(rc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, kr(9, nc.bind(null, n, r, l, t), void 0, null), we === null) throw Error(L(349));
    nn & 30 || tc(n, t, l);
  }
  return l;
}
function tc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function nc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, lc(t) && sc(e);
}
function rc(e, t, n) {
  return n(function() {
    lc(t) && sc(e);
  });
}
function lc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function sc(e) {
  var t = kt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function io(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = sp.bind(null, oe, e), [t.memoizedState, e];
}
function kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ic() {
  return et().memoizedState;
}
function rl(e, t, n, r) {
  var l = ft();
  oe.flags |= e, l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function $l(e, t, n, r) {
  var l = et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (me !== null) {
    var a = me.memoizedState;
    if (s = a.destroy, r !== null && qi(r, a.deps)) {
      l.memoizedState = kr(t, n, s, r);
      return;
    }
  }
  oe.flags |= e, l.memoizedState = kr(1 | t, n, s, r);
}
function ao(e, t) {
  return rl(8390656, 8, e, t);
}
function na(e, t) {
  return $l(2048, 8, e, t);
}
function ac(e, t) {
  return $l(4, 2, e, t);
}
function oc(e, t) {
  return $l(4, 4, e, t);
}
function uc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function cc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $l(4, 4, uc.bind(null, t, e), n);
}
function ra() {
}
function dc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function fc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function pc(e, t, n) {
  return nn & 21 ? (ct(n, t) || (n = vu(), oe.lanes |= n, rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function rp(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = vs.transition;
  vs.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, vs.transition = r;
  }
}
function mc() {
  return et().memoizedState;
}
function lp(e, t, n) {
  var r = At(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, hc(e)) gc(t, n);
  else if (n = Xu(e, t, n, r), n !== null) {
    var l = Me();
    ut(n, e, r, l), yc(n, t, r);
  }
}
function sp(e, t, n) {
  var r = At(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hc(e)) gc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, ct(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ki(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Xu(e, t, l, r), n !== null && (l = Me(), ut(n, e, r, l), yc(n, t, r));
  }
}
function hc(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function gc(e, t) {
  lr = Cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Di(e, n);
  }
}
var Nl = { readContext: qe, useCallback: je, useContext: je, useEffect: je, useImperativeHandle: je, useInsertionEffect: je, useLayoutEffect: je, useMemo: je, useReducer: je, useRef: je, useState: je, useDebugValue: je, useDeferredValue: je, useTransition: je, useMutableSource: je, useSyncExternalStore: je, useId: je, unstable_isNewReconciler: !1 }, ip = { readContext: qe, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: ao, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rl(
    4194308,
    4,
    uc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lp.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: io, useDebugValue: ra, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = io(!1), t = e[0];
  return e = rp.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, l = ft();
  if (ie) {
    if (n === void 0) throw Error(L(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(L(349));
    nn & 30 || tc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, ao(rc.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, kr(9, nc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = we.identifierPrefix;
  if (ie) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = np++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ap = {
  readContext: qe,
  useCallback: dc,
  useContext: qe,
  useEffect: na,
  useImperativeHandle: cc,
  useInsertionEffect: ac,
  useLayoutEffect: oc,
  useMemo: fc,
  useReducer: ws,
  useRef: ic,
  useState: function() {
    return ws(Sr);
  },
  useDebugValue: ra,
  useDeferredValue: function(e) {
    var t = et();
    return pc(t, me.memoizedState, e);
  },
  useTransition: function() {
    var e = ws(Sr)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: qu,
  useSyncExternalStore: ec,
  useId: mc,
  unstable_isNewReconciler: !1
}, op = { readContext: qe, useCallback: dc, useContext: qe, useEffect: na, useImperativeHandle: cc, useInsertionEffect: ac, useLayoutEffect: oc, useMemo: fc, useReducer: xs, useRef: ic, useState: function() {
  return xs(Sr);
}, useDebugValue: ra, useDeferredValue: function(e) {
  var t = et();
  return me === null ? t.memoizedState = e : pc(t, me.memoizedState, e);
}, useTransition: function() {
  var e = xs(Sr)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: qu, useSyncExternalStore: ec, useId: mc, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = ue({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ti(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), l = At(e), s = xt(r, l);
  s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ut(t, e, l, r), tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Me(), l = At(e), s = xt(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ut(t, e, l, r), tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Me(), r = At(e), l = xt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ot(e, l, r), t !== null && (ut(t, e, r, n), tl(t, e, r));
} };
function oo(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, s) : !0;
}
function vc(e, t, n) {
  var r = !1, l = Ut, s = t.contextType;
  return typeof s == "object" && s !== null ? s = qe(s) : (l = Ae(t) ? en : Te.current, r = t.contextTypes, s = (r = r != null) ? Ln(e, l) : Ut), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function uo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function ni(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Yi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = qe(s) : (s = Ae(t) ? en : Te.current, l.context = Ln(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ti(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Vl.enqueueReplaceState(l, l.state, null), jl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Rd(r), r = r.return;
    while (r);
    var l = n;
  } catch (s) {
    l = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function _s(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ri(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var up = typeof WeakMap == "function" ? WeakMap : Map;
function wc(e, t, n) {
  n = xt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Tl || (Tl = !0, pi = r), ri(e, t);
  }, n;
}
function xc(e, t, n) {
  n = xt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ri(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ri(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function co(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new up();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = kp.bind(null, e, t, n), t.then(e, e));
}
function fo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function po(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var cp = Et.ReactCurrentOwner, Oe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Yu(t, null, n, r) : Pn(t, e.child, n, r);
}
function mo(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return Nn(t, l), r = ea(e, t, n, r, s, l), n = ta(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ie && n && Ui(t), t.flags |= 1, Le(e, t, r, l), t.child);
}
function ho(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !da(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, _c(e, t, s, r, l)) : (e = al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(a, r) && e.ref === t.ref) return jt(e, t, l);
  }
  return t.flags |= 1, e = $t(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function _c(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (hr(s, r) && e.ref === t.ref) if (Oe = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
    else return t.lanes = e.lanes, jt(e, t, l);
  }
  return li(e, t, n, r, l);
}
function Sc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Sn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(Sn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, re(Sn, Ue), Ue |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, re(Sn, Ue), Ue |= r;
  return Le(e, t, l, n), t.child;
}
function kc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function li(e, t, n, r, l) {
  var s = Ae(n) ? en : Te.current;
  return s = Ln(t, s), Nn(t, l), n = ea(e, t, n, r, s, l), r = ta(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ie && r && Ui(t), t.flags |= 1, Le(e, t, n, l), t.child);
}
function go(e, t, n, r, l) {
  if (Ae(n)) {
    var s = !0;
    wl(t);
  } else s = !1;
  if (Nn(t, l), t.stateNode === null) ll(e, t), vc(t, n, r), ni(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = qe(d) : (d = Ae(n) ? en : Te.current, d = Ln(t, d));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    g || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== d) && uo(t, a, r, d), It = !1;
    var m = t.memoizedState;
    a.state = m, jl(t, r, a, l), u = t.memoizedState, o !== r || m !== u || Fe.current || It ? (typeof h == "function" && (ti(t, n, h, r), u = t.memoizedState), (o = It || oo(t, n, o, r, m, u, d)) ? (g || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = d, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Zu(e, t), o = t.memoizedProps, d = t.type === t.elementType ? o : lt(t.type, o), a.props = d, g = t.pendingProps, m = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = qe(u) : (u = Ae(n) ? en : Te.current, u = Ln(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== g || m !== u) && uo(t, a, r, u), It = !1, m = t.memoizedState, a.state = m, jl(t, r, a, l);
    var w = t.memoizedState;
    o !== g || m !== w || Fe.current || It ? (typeof y == "function" && (ti(t, n, y, r), w = t.memoizedState), (d = It || oo(t, n, d, r, m, w, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = d) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return si(e, t, n, r, s, l);
}
function si(e, t, n, r, l, s) {
  kc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && eo(t, n, !1), jt(e, t, s);
  r = t.stateNode, cp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pn(t, e.child, null, s), t.child = Pn(t, null, o, s)) : Le(e, t, o, s), t.memoizedState = r.state, l && eo(t, n, !0), t.child;
}
function jc(e) {
  var t = e.stateNode;
  t.pendingContext ? qa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qa(e, t.context, !1), Xi(e, t.containerInfo);
}
function yo(e, t, n, r, l) {
  return Mn(), Wi(l), t.flags |= 256, Le(e, t, n, r), t.child;
}
var ii = { dehydrated: null, treeContext: null, retryLane: 0 };
function ai(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ec(e, t, n) {
  var r = t.pendingProps, l = ae.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(ae, l & 1), e === null)
    return qs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Wl(a, r, 0, null), e = qt(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ai(n), t.memoizedState = ii, e) : la(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return dp(e, t, a, r, o, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = $t(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? s = $t(o, s) : (s = qt(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? ai(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = ii, r;
  }
  return s = e.child, e = s.sibling, r = $t(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function la(e, t) {
  return t = Wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Hr(e, t, n, r) {
  return r !== null && Wi(r), Pn(t, e.child, null, n), e = la(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _s(Error(L(422))), Hr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Wl({ mode: "visible", children: r.children }, l, 0, null), s = qt(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pn(t, e.child, null, a), t.child.memoizedState = ai(a), t.memoizedState = ii, s);
  if (!(t.mode & 1)) return Hr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(L(419)), r = _s(s, r, void 0), Hr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Oe || o) {
    if (r = we, r !== null) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, kt(e, l), ut(r, e, l, -1));
    }
    return ca(), r = _s(Error(L(421))), Hr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Qe = zt(l.nextSibling), We = t, ie = !0, it = null, e !== null && (Ye[Xe++] = vt, Ye[Xe++] = wt, Ye[Xe++] = tn, vt = e.id, wt = e.overflow, tn = t), t = la(t, r.children), t.flags |= 4096, t);
}
function vo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ei(e.return, t, n);
}
function Ss(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Cc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (Le(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && vo(e, n, t);
      else if (e.tag === 19) vo(e, n, t);
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
  if (re(ae, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && El(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ss(t, !1, l, n, s);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && El(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ss(t, !0, n, null, s);
      break;
    case "together":
      Ss(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fp(e, t, n) {
  switch (t.tag) {
    case 3:
      jc(t), Mn();
      break;
    case 5:
      Ju(t);
      break;
    case 1:
      Ae(t.type) && wl(t);
      break;
    case 4:
      Xi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      re(Sl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (re(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ec(e, t, n) : (re(ae, ae.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      re(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Cc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(ae, ae.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sc(e, t, n);
  }
  return jt(e, t, n);
}
var Nc, oi, Ic, Tc;
Nc = function(e, t) {
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
oi = function() {
};
Ic = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Zt(ht.current);
    var s = null;
    switch (n) {
      case "input":
        l = Ls(e, l), r = Ls(e, r), s = [];
        break;
      case "select":
        l = ue({}, l, { value: void 0 }), r = ue({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = bs(e, l), r = bs(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
    }
    Rs(n, r);
    var a;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var o = l[d];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (or.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (o = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== o && (u != null || o != null)) if (d === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (s || (s = []), s.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (or.hasOwnProperty(d) ? (u != null && d === "onScroll" && le("scroll", e), s || o === u || (s = [])) : (s = s || []).push(d, u));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Tc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!ie) switch (e.tailMode) {
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
function pp(e, t, n) {
  var r = t.pendingProps;
  switch (Qi(t), t.tag) {
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
      return Ae(t.type) && vl(), Ee(t), null;
    case 3:
      return r = t.stateNode, bn(), se(Fe), se(Te), Ji(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (gi(it), it = null))), oi(e, t), Ee(t), null;
    case 5:
      Zi(t);
      var l = Zt(xr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ic(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ee(t), null;
        }
        if (e = Zt(ht.current), Qr(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[pt] = t, r[vr] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Jn.length; l++) le(Jn[l], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le(
                "error",
                r
              ), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Ca(r, s), le("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, le("invalid", r);
              break;
            case "textarea":
              Ia(r, s), le("invalid", r);
          }
          Rs(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Ur(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Ur(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : or.hasOwnProperty(a) && o != null && a === "onScroll" && le("scroll", r);
          }
          switch (n) {
            case "input":
              Dr(r), Na(r, s, !0);
              break;
            case "textarea":
              Dr(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = yl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ru(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[pt] = t, e[vr] = r, Nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = zs(n, r), n) {
              case "dialog":
                le("cancel", e), le("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jn.length; l++) le(Jn[l], e);
                l = r;
                break;
              case "source":
                le("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                le(
                  "error",
                  e
                ), le("load", e), l = r;
                break;
              case "details":
                le("toggle", e), l = r;
                break;
              case "input":
                Ca(e, r), l = Ls(e, r), le("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ue({}, r, { value: void 0 }), le("invalid", e);
                break;
              case "textarea":
                Ia(e, r), l = bs(e, r), le("invalid", e);
                break;
              default:
                l = r;
            }
            Rs(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? iu(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && lu(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ur(e, u) : typeof u == "number" && ur(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (or.hasOwnProperty(s) ? u != null && s === "onScroll" && le("scroll", e) : u != null && Ii(e, s, u, a));
            }
            switch (n) {
              case "input":
                Dr(e), Na(e, r, !1);
                break;
              case "textarea":
                Dr(e), Ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? kn(e, !!r.multiple, s, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = yl);
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
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (n = Zt(xr.current), Zt(ht.current), Qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (s = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
            case 3:
              Ur(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r;
      }
      return Ee(t), null;
    case 13:
      if (se(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128)) Gu(), Mn(), t.flags |= 98560, s = !1;
        else if (s = Qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(L(317));
            s[pt] = t;
          } else Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), s = !1;
        } else it !== null && (gi(it), it = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? he === 0 && (he = 3) : ca())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return bn(), oi(e, t), e === null && gr(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return Gi(t.type._context), Ee(t), null;
    case 17:
      return Ae(t.type) && vl(), Ee(t), null;
    case 19:
      if (se(ae), s = t.memoizedState, s === null) return Ee(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Gn(s, !1);
      else {
        if (he !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = El(e), a !== null) {
            for (t.flags |= 128, Gn(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return re(ae, ae.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && fe() > Rn && (t.flags |= 128, r = !0, Gn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = El(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Gn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !ie) return Ee(t), null;
        } else 2 * fe() - s.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Gn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = fe(), t.sibling = null, n = ae.current, re(ae, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return ua(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function mp(e, t) {
  switch (Qi(t), t.tag) {
    case 1:
      return Ae(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bn(), se(Fe), se(Te), Ji(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zi(t), null;
    case 13:
      if (se(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(L(340));
        Mn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return se(ae), null;
    case 4:
      return bn(), null;
    case 10:
      return Gi(t.type._context), null;
    case 22:
    case 23:
      return ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1, Ce = !1, hp = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ce(e, t, r);
  }
  else n.current = null;
}
function ui(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var wo = !1;
function gp(e, t) {
  if (Bs = ml, e = Du(), Vi(e)) {
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
        var a = 0, o = -1, u = -1, d = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var y; g !== n || l !== 0 && g.nodeType !== 3 || (o = a + l), g !== s || r !== 0 && g.nodeType !== 3 || (u = a + r), g.nodeType === 3 && (a += g.nodeValue.length), (y = g.firstChild) !== null; )
            m = g, g = y;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++d === l && (o = a), m === s && ++h === r && (u = a), (y = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gs = { focusedElem: e, selectionRange: n }, ml = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, E = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), E);
            f.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(L(163));
      }
    } catch (j) {
      ce(t, t.return, j);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return w = wo, wo = !1, w;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && ui(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ul(e, t) {
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
function ci(e) {
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
function Lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[vr], delete t[Xs], delete t[Jf], delete t[qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
  else if (r !== 4 && (e = e.child, e !== null)) for (di(e, t, n), e = e.sibling; e !== null; ) di(e, t, n), e = e.sibling;
}
function fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fi(e, t, n), e = e.sibling; e !== null; ) fi(e, t, n), e = e.sibling;
}
var _e = null, st = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
}
function Pc(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(Dl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ce || _n(n, t);
    case 6:
      var r = _e, l = st;
      _e = null, Ct(e, t, n), _e = r, st = l, _e !== null && (st ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (st ? (e = _e, n = n.stateNode, e.nodeType === 8 ? hs(e.parentNode, n) : e.nodeType === 1 && hs(e, n), pr(e)) : hs(_e, n.stateNode));
      break;
    case 4:
      r = _e, l = st, _e = n.stateNode.containerInfo, st = !0, Ct(e, t, n), _e = r, st = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && ui(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!Ce && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ce(n, t, o);
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
function _o(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hp()), t.forEach(function(r) {
      var l = Ep.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            _e = o.stateNode, st = !1;
            break e;
          case 3:
            _e = o.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            _e = o.stateNode.containerInfo, st = !0;
            break e;
        }
        o = o.return;
      }
      if (_e === null) throw Error(L(160));
      Pc(s, a, l), _e = null, st = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (d) {
      ce(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bc(t, e), t = t.sibling;
}
function bc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nt(t, e), dt(e), r & 4) {
        try {
          sr(3, e, e.return), Ul(3, e);
        } catch (x) {
          ce(e, e.return, x);
        }
        try {
          sr(5, e, e.return);
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 1:
      nt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (nt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && tu(l, s), zs(o, a);
          var d = zs(o, s);
          for (a = 0; a < u.length; a += 2) {
            var h = u[a], g = u[a + 1];
            h === "style" ? iu(l, g) : h === "dangerouslySetInnerHTML" ? lu(l, g) : h === "children" ? ur(l, g) : Ii(l, h, g, d);
          }
          switch (o) {
            case "input":
              Ms(l, s);
              break;
            case "textarea":
              nu(l, s);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? kn(l, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? kn(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : kn(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[vr] = s;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 6:
      if (nt(t, e), dt(e), r & 4) {
        if (e.stateNode === null) throw Error(L(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if (nt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        pr(t.containerInfo);
      } catch (x) {
        ce(e, e.return, x);
      }
      break;
    case 4:
      nt(t, e), dt(e);
      break;
    case 13:
      nt(t, e), dt(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (aa = fe())), r & 4 && _o(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (d = Ce) || h, nt(t, e), Ce = d) : nt(t, e), dt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (R = e, h = e.child; h !== null; ) {
          for (g = R = h; R !== null; ) {
            switch (m = R, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sr(4, m, m.return);
                break;
              case 1:
                _n(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    ce(r, n, x);
                  }
                }
                break;
              case 5:
                _n(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ko(g);
                  continue;
                }
            }
            y !== null ? (y.return = m, R = y) : ko(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                l = g.stateNode, d ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = g.stateNode, u = g.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = su("display", a));
              } catch (x) {
                ce(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (x) {
              ce(e, e.return, x);
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
      nt(t, e), dt(e), r & 4 && _o(e);
      break;
    case 21:
      break;
    default:
      nt(
        t,
        e
      ), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ur(l, ""), r.flags &= -33);
          var s = xo(e);
          fi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = xo(e);
          di(e, o, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yp(e, t, n) {
  R = e, Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Br;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Ce;
        o = Br;
        var d = Ce;
        if (Br = a, (Ce = u) && !d) for (R = l; R !== null; ) a = R, u = a.child, a.tag === 22 && a.memoizedState !== null ? jo(l) : u !== null ? (u.return = a, R = u) : jo(l);
        for (; s !== null; ) R = s, Dc(s), s = s.sibling;
        R = l, Br = o, Ce = d;
      }
      So(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, R = s) : So(e);
  }
}
function So(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ce || Ul(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && so(t, s, r);
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
              so(t, a, n);
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
                var h = d.memoizedState;
                if (h !== null) {
                  var g = h.dehydrated;
                  g !== null && pr(g);
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
            throw Error(L(163));
        }
        Ce || t.flags & 512 && ci(t);
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function ko(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function jo(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ul(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var s = t.return;
          try {
            ci(t);
          } catch (u) {
            ce(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ci(t);
          } catch (u) {
            ce(t, a, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, R = o;
      break;
    }
    R = t.return;
  }
}
var vp = Math.ceil, Il = Et.ReactCurrentDispatcher, sa = Et.ReactCurrentOwner, Je = Et.ReactCurrentBatchConfig, ee = 0, we = null, pe = null, Se = 0, Ue = 0, Sn = Wt(0), he = 0, jr = null, rn = 0, Ql = 0, ia = 0, ir = null, Re = null, aa = 0, Rn = 1 / 0, gt = null, Tl = !1, pi = null, Ft = null, Gr = !1, Pt = null, Ll = 0, ar = 0, mi = null, sl = -1, il = 0;
function Me() {
  return ee & 6 ? fe() : sl !== -1 ? sl : sl = fe();
}
function At(e) {
  return e.mode & 1 ? ee & 2 && Se !== 0 ? Se & -Se : tp.transition !== null ? (il === 0 && (il = vu()), il) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Eu(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < ar) throw ar = 0, mi = null, Error(L(185));
  Nr(e, n, r), (!(ee & 2) || e !== we) && (e === we && (!(ee & 2) && (Ql |= n), he === 4 && Lt(e, Se)), $e(e, r), n === 1 && ee === 0 && !(t.mode & 1) && (Rn = fe() + 500, Al && Ht()));
}
function $e(e, t) {
  var n = e.callbackNode;
  ef(e, t);
  var r = pl(e, e === we ? Se : 0);
  if (r === 0) n !== null && Pa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pa(n), t === 1) e.tag === 0 ? ep(Eo.bind(null, e)) : Wu(Eo.bind(null, e)), Xf(function() {
      !(ee & 6) && Ht();
    }), n = null;
    else {
      switch (wu(r)) {
        case 1:
          n = bi;
          break;
        case 4:
          n = gu;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = yu;
          break;
        default:
          n = fl;
      }
      n = Uc(n, Rc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rc(e, t) {
  if (sl = -1, il = 0, ee & 6) throw Error(L(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = pl(e, e === we ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
  else {
    t = r;
    var l = ee;
    ee |= 2;
    var s = Oc();
    (we !== e || Se !== t) && (gt = null, Rn = fe() + 500, Jt(e, t));
    do
      try {
        _p();
        break;
      } catch (o) {
        zc(e, o);
      }
    while (!0);
    Bi(), Il.current = s, ee = l, pe !== null ? t = 0 : (we = null, Se = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (l = Vs(e), l !== 0 && (r = l, t = hi(e, l))), t === 1) throw n = jr, Jt(e, 0), Lt(e, r), $e(e, fe()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wp(l) && (t = Ml(e, r), t === 2 && (s = Vs(e), s !== 0 && (r = s, t = hi(e, s))), t === 1)) throw n = jr, Jt(e, 0), Lt(e, r), $e(e, fe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Kt(e, Re, gt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = aa + 500 - fe(), 10 < t)) {
            if (pl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Me(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ys(Kt.bind(null, e, Re, gt), t);
            break;
          }
          Kt(e, Re, gt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - ot(r);
            s = 1 << a, a = t[a], a > l && (l = a), r &= ~s;
          }
          if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ys(Kt.bind(null, e, Re, gt), r);
            break;
          }
          Kt(e, Re, gt);
          break;
        case 5:
          Kt(e, Re, gt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return $e(e, fe()), e.callbackNode === n ? Rc.bind(null, e) : null;
}
function hi(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Ml(e, t), e !== 2 && (t = Re, Re = n, t !== null && gi(t)), e;
}
function gi(e) {
  Re === null ? Re = e : Re.push.apply(Re, e);
}
function wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], s = l.getSnapshot;
        l = l.value;
        try {
          if (!ct(s(), l)) return !1;
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
  for (t &= ~ia, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ot(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Eo(e) {
  if (ee & 6) throw Error(L(327));
  In();
  var t = pl(e, 0);
  if (!(t & 1)) return $e(e, fe()), null;
  var n = Ml(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vs(e);
    r !== 0 && (t = r, n = hi(e, r));
  }
  if (n === 1) throw n = jr, Jt(e, 0), Lt(e, t), $e(e, fe()), n;
  if (n === 6) throw Error(L(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kt(e, Re, gt), $e(e, fe()), null;
}
function oa(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ee = n, ee === 0 && (Rn = fe() + 500, Al && Ht());
  }
}
function ln(e) {
  Pt !== null && Pt.tag === 0 && !(ee & 6) && In();
  var t = ee;
  ee |= 1;
  var n = Je.transition, r = ne;
  try {
    if (Je.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, Je.transition = n, ee = t, !(ee & 6) && Ht();
  }
}
function ua() {
  Ue = Sn.current, se(Sn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Yf(n)), pe !== null) for (n = pe.return; n !== null; ) {
    var r = n;
    switch (Qi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vl();
        break;
      case 3:
        bn(), se(Fe), se(Te), Ji();
        break;
      case 5:
        Zi(r);
        break;
      case 4:
        bn();
        break;
      case 13:
        se(ae);
        break;
      case 19:
        se(ae);
        break;
      case 10:
        Gi(r.type._context);
        break;
      case 22:
      case 23:
        ua();
    }
    n = n.return;
  }
  if (we = e, pe = e = $t(e.current, null), Se = Ue = t, he = 0, jr = null, ia = Ql = rn = 0, Re = ir = null, Xt !== null) {
    for (t = 0; t < Xt.length; t++) if (n = Xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = l, r.next = a;
      }
      n.pending = r;
    }
    Xt = null;
  }
  return e;
}
function zc(e, t) {
  do {
    var n = pe;
    try {
      if (Bi(), nl.current = Nl, Cl) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Cl = !1;
      }
      if (nn = 0, ve = me = oe = null, lr = !1, _r = 0, sa.current = null, n === null || n.return === null) {
        he = 1, jr = t, pe = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = Se, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, h = o, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = fo(a);
          if (y !== null) {
            y.flags &= -257, po(y, a, o, s, t), y.mode & 1 && co(s, d, t), t = y, u = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              co(s, d, t), ca();
              break e;
            }
            u = Error(L(426));
          }
        } else if (ie && o.mode & 1) {
          var E = fo(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), po(E, a, o, s, t), Wi(Dn(u, o));
            break e;
          }
        }
        s = u = Dn(u, o), he !== 4 && (he = 2), ir === null ? ir = [s] : ir.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = wc(s, u, t);
              lo(s, f);
              break e;
            case 1:
              o = u;
              var c = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var j = xc(s, o, t);
                lo(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ac(n);
    } catch (I) {
      t = I, pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Oc() {
  var e = Il.current;
  return Il.current = Nl, e === null ? Nl : e;
}
function ca() {
  (he === 0 || he === 3 || he === 2) && (he = 4), we === null || !(rn & 268435455) && !(Ql & 268435455) || Lt(we, Se);
}
function Ml(e, t) {
  var n = ee;
  ee |= 2;
  var r = Oc();
  (we !== e || Se !== t) && (gt = null, Jt(e, t));
  do
    try {
      xp();
      break;
    } catch (l) {
      zc(e, l);
    }
  while (!0);
  if (Bi(), ee = n, Il.current = r, pe !== null) throw Error(L(261));
  return we = null, Se = 0, he;
}
function xp() {
  for (; pe !== null; ) Fc(pe);
}
function _p() {
  for (; pe !== null && !Hd(); ) Fc(pe);
}
function Fc(e) {
  var t = Vc(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? Ac(e) : pe = t, sa.current = null;
}
function Ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mp(n, t), n !== null) {
        n.flags &= 32767, pe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, pe = null;
        return;
      }
    } else if (n = pp(n, t, Ue), n !== null) {
      pe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Kt(e, t, n) {
  var r = ne, l = Je.transition;
  try {
    Je.transition = null, ne = 1, Sp(e, t, n, r);
  } finally {
    Je.transition = l, ne = r;
  }
  return null;
}
function Sp(e, t, n, r) {
  do
    In();
  while (Pt !== null);
  if (ee & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (tf(e, s), e === we && (pe = we = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gr || (Gr = !0, Uc(fl, function() {
    return In(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Je.transition, Je.transition = null;
    var a = ne;
    ne = 1;
    var o = ee;
    ee |= 4, sa.current = null, gp(e, n), bc(n, e), Uf(Gs), ml = !!Bs, Gs = Bs = null, e.current = n, yp(n), Bd(), ee = o, ne = a, Je.transition = s;
  } else e.current = n;
  if (Gr && (Gr = !1, Pt = e, Ll = l), s = e.pendingLanes, s === 0 && (Ft = null), Yd(n.stateNode), $e(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Tl) throw Tl = !1, e = pi, pi = null, e;
  return Ll & 1 && e.tag !== 0 && In(), s = e.pendingLanes, s & 1 ? e === mi ? ar++ : (ar = 0, mi = e) : ar = 0, Ht(), null;
}
function In() {
  if (Pt !== null) {
    var e = wu(Ll), t = Je.transition, n = ne;
    try {
      if (Je.transition = null, ne = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Ll = 0, ee & 6) throw Error(L(331));
        var l = ee;
        for (ee |= 4, R = e.current; R !== null; ) {
          var s = R, a = s.child;
          if (R.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (R = d; R !== null; ) {
                  var h = R;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, s);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, R = g;
                  else for (; R !== null; ) {
                    h = R;
                    var m = h.sibling, y = h.return;
                    if (Lc(h), h === d) {
                      R = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, R = m;
                      break;
                    }
                    R = y;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var E = x.sibling;
                    x.sibling = null, x = E;
                  } while (x !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, R = a;
          else e: for (; R !== null; ) {
            if (s = R, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                sr(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, R = f;
              break e;
            }
            R = s.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          a = R;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, R = p;
          else e: for (a = c; R !== null; ) {
            if (o = R, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ul(9, o);
              }
            } catch (I) {
              ce(o, o.return, I);
            }
            if (o === a) {
              R = null;
              break e;
            }
            var j = o.sibling;
            if (j !== null) {
              j.return = o.return, R = j;
              break e;
            }
            R = o.return;
          }
        }
        if (ee = l, Ht(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(Dl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, Je.transition = t;
    }
  }
  return !1;
}
function Co(e, t, n) {
  t = Dn(n, t), t = wc(e, t, 1), e = Ot(e, t, 1), t = Me(), e !== null && (Nr(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Co(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Co(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = Dn(n, e), e = xc(t, e, 1), t = Ot(t, e, 1), e = Me(), t !== null && (Nr(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function kp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Se & n) === n && (he === 4 || he === 3 && (Se & 130023424) === Se && 500 > fe() - aa ? Jt(e, 0) : ia |= n), $e(e, t);
}
function $c(e, t) {
  t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or = 4194304)) : t = 1);
  var n = Me();
  e = kt(e, t), e !== null && (Nr(e, t, n), $e(e, n));
}
function jp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), $c(e, n);
}
function Ep(e, t) {
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
      throw Error(L(314));
  }
  r !== null && r.delete(t), $c(e, n);
}
var Vc;
Vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Oe = !1, fp(e, t, n);
    Oe = !!(e.flags & 131072);
  }
  else Oe = !1, ie && t.flags & 1048576 && Hu(t, _l, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ll(e, t), e = t.pendingProps;
      var l = Ln(t, Te.current);
      Nn(t, n), l = ea(null, t, r, e, l, n);
      var s = ta();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (s = !0, wl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Yi(t), l.updater = Vl, t.stateNode = l, l._reactInternals = t, ni(t, r, e, n), t = si(null, t, r, !0, s, n)) : (t.tag = 0, ie && s && Ui(t), Le(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Np(r), e = lt(r, e), l) {
          case 0:
            t = li(null, t, r, e, n);
            break e;
          case 1:
            t = go(null, t, r, e, n);
            break e;
          case 11:
            t = mo(null, t, r, e, n);
            break e;
          case 14:
            t = ho(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(L(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), li(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), go(e, t, r, l, n);
    case 3:
      e: {
        if (jc(t), e === null) throw Error(L(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, Zu(e, t), jl(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = Dn(Error(L(423)), t), t = yo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Dn(Error(L(424)), t), t = yo(e, t, r, n, l);
          break e;
        } else for (Qe = zt(t.stateNode.containerInfo.firstChild), We = t, ie = !0, it = null, n = Yu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mn(), r === l) {
            t = jt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ju(t), e === null && qs(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Ks(r, l) ? a = null : s !== null && Ks(r, s) && (t.flags |= 32), kc(e, t), Le(e, t, a, n), t.child;
    case 6:
      return e === null && qs(t), null;
    case 13:
      return Ec(e, t, n);
    case 4:
      return Xi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), mo(e, t, r, l, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, a = l.value, re(Sl, r._currentValue), r._currentValue = a, s !== null) if (ct(s.value, a)) {
          if (s.children === l.children && !Fe.current) {
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
                  var d = s.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), d.pending = u;
                  }
                }
                s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ei(
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
            if (a = s.return, a === null) throw Error(L(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), ei(a, n, t), a = s.sibling;
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
      return l = t.type, r = t.pendingProps.children, Nn(t, n), l = qe(l), r = r(l), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = lt(r, t.pendingProps), l = lt(r.type, l), ho(e, t, r, l, n);
    case 15:
      return _c(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), ll(e, t), t.tag = 1, Ae(r) ? (e = !0, wl(t)) : e = !1, Nn(t, n), vc(t, r, l), ni(t, r, l, n), si(null, t, r, !0, e, n);
    case 19:
      return Cc(e, t, n);
    case 22:
      return Sc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Uc(e, t) {
  return hu(e, t);
}
function Cp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new Cp(e, t, n, r);
}
function da(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Np(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Li) return 11;
    if (e === Mi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function al(e, t, n, r, l, s) {
  var a = 2;
  if (r = e, typeof e == "function") da(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case fn:
      return qt(n.children, l, s, t);
    case Ti:
      a = 8, l |= 8;
      break;
    case Cs:
      return e = Ze(12, n, t, l | 2), e.elementType = Cs, e.lanes = s, e;
    case Ns:
      return e = Ze(13, n, t, l), e.elementType = Ns, e.lanes = s, e;
    case Is:
      return e = Ze(19, n, t, l), e.elementType = Is, e.lanes = s, e;
    case Jo:
      return Wl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Xo:
          a = 10;
          break e;
        case Zo:
          a = 9;
          break e;
        case Li:
          a = 11;
          break e;
        case Mi:
          a = 14;
          break e;
        case Nt:
          a = 16, r = null;
          break e;
      }
      throw Error(L(130, e == null ? e : typeof e, ""));
  }
  return t = Ze(a, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qt(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function Wl(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = Jo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ks(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function js(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ip(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ls(0), this.expirationTimes = ls(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ls(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function fa(e, t, n, r, l, s, a, o, u) {
  return e = new Ip(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ze(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yi(s), e;
}
function Tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qc(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Qu(e, n, t);
  }
  return t;
}
function Wc(e, t, n, r, l, s, a, o, u) {
  return e = fa(n, r, !0, e, l, s, a, o, u), e.context = Qc(null), n = e.current, r = Me(), l = At(n), s = xt(r, l), s.callback = t ?? null, Ot(n, s, l), e.current.lanes = l, Nr(e, l, r), $e(e, r), e;
}
function Hl(e, t, n, r) {
  var l = t.current, s = Me(), a = At(l);
  return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(l, t, a), e !== null && (ut(e, l, a, s), tl(e, l, a)), a;
}
function Pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function No(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  No(e, t), (e = e.alternate) && No(e, t);
}
function Lp() {
  return null;
}
var Hc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ma(e) {
  this._internalRoot = e;
}
Bl.prototype.render = ma.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Hl(e, t, null, null);
};
Bl.prototype.unmount = ma.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Hl(null, e, null, null);
    }), t[St] = null;
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && ju(e);
  }
};
function ha(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Io() {
}
function Mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var d = Pl(a);
        s.call(d);
      };
    }
    var a = Wc(t, r, e, 0, null, !1, !1, "", Io);
    return e._reactRootContainer = a, e[St] = a.current, gr(e.nodeType === 8 ? e.parentNode : e), ln(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var d = Pl(u);
      o.call(d);
    };
  }
  var u = fa(e, 0, !1, null, null, !1, !1, "", Io);
  return e._reactRootContainer = u, e[St] = u.current, gr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Hl(t, u, n, r);
  }), u;
}
function Kl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Pl(a);
        o.call(u);
      };
    }
    Hl(t, a, e, l);
  } else a = Mp(n, t, e, l, r);
  return Pl(a);
}
xu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Di(t, n | 1), $e(t, fe()), !(ee & 6) && (Rn = fe() + 500, Ht()));
      }
      break;
    case 13:
      ln(function() {
        var r = kt(e, 1);
        if (r !== null) {
          var l = Me();
          ut(r, e, 1, l);
        }
      }), pa(e, 1);
  }
};
Ri = function(e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Me();
      ut(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = At(e), n = kt(e, t);
    if (n !== null) {
      var r = Me();
      ut(n, e, t, r);
    }
    pa(e, t);
  }
};
Su = function() {
  return ne;
};
ku = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
Fs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ms(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Fl(r);
            if (!l) throw Error(L(90));
            eu(r), Ms(r, l);
          }
        }
      }
      break;
    case "textarea":
      nu(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
uu = oa;
cu = ln;
var Pp = { usingClientEntryPoint: !1, Events: [Tr, gn, Fl, au, ou, oa] }, Kn = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bp = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || Lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber) try {
    Dl = Kr.inject(bp), mt = Kr;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(L(200));
  return Tp(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!ha(e)) throw Error(L(299));
  var n = !1, r = "", l = Hc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = fa(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new ma(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
  return e = pu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return ln(e);
};
Be.hydrate = function(e, t, n) {
  if (!Gl(t)) throw Error(L(200));
  return Kl(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!ha(e)) throw Error(L(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Hc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, l, !1, s, a), e[St] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Bl(t);
};
Be.render = function(e, t, n) {
  if (!Gl(t)) throw Error(L(200));
  return Kl(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Gl(e)) throw Error(L(40));
  return e._reactRootContainer ? (ln(function() {
    Kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[St] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = oa;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Gl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Kl(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Bc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bc);
    } catch (e) {
      console.error(e);
    }
}
Bc(), Bo.exports = Be;
var ze = Bo.exports, Gc, To = ze;
Gc = To.createRoot, To.hydrateRoot;
window.api = K;
const Dp = async () => {
  const e = await K.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, ol = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await K.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!s.ok)
    throw new Error(`Failed to fetch images: ${s.statusText}`);
  return await s.json();
}, Kc = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Rp = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await K.fetchApi(n);
  return r.ok ? await r.json() : [];
}, zp = async () => {
  const e = await K.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Yc = async () => {
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
}, Op = async (e, t) => {
  if (!(await K.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Lo = async (e, t) => {
  if (!(await K.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Fp = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await K.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, yi = async (e) => {
  const t = await K.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Ap = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await K.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, vi = async (e, t = !1) => {
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
}, wi = async (e) => {
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
}, Xc = async (e) => {
  const t = await K.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return (await t.json()).data;
}, $p = async (e, t, n = !1, r) => {
  const l = await K.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Vp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await K.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Up = async (e, t, n) => {
  const r = await K.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Qp = async (e) => {
  const t = await K.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Wp = async () => {
  if (!(await K.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Hp = async () => {
  const e = await K.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Bp = async (e, t) => {
  if (!(await K.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, Mo = async (e) => {
  if (!(await K.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Gp = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  })).ok)
    throw new Error("Failed to update favorite");
}, ga = async () => {
  const e = await K.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Kp = async (e) => {
  const t = await K.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Yp = async (e) => {
  if (!(await K.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Xp = async (e, t) => {
  const n = await K.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Zp = async (e, t) => {
  if (!(await K.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, xi = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, Jp = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, qp = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Zc = { exports: {} }, Yl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em = v, tm = Symbol.for("react.element"), nm = Symbol.for("react.fragment"), rm = Object.prototype.hasOwnProperty, lm = em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) rm.call(t, r) && !sm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: tm, type: e, key: s, ref: a, props: l, _owner: lm.current };
}
Yl.Fragment = nm;
Yl.jsx = Jc;
Yl.jsxs = Jc;
Zc.exports = Yl;
var i = Zc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var im = {
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
const am = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), B = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...d
    }, h) => v.createElement(
      "svg",
      {
        ref: h,
        ...im,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${am(e)}`, o].join(" "),
        ...d
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
const om = B("AlertTriangle", [
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
const um = B("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = B("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = B("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = B("ArrowUpDown", [
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
const ed = B("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = B("Box", [
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
const fm = B("Calendar", [
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
const pm = B("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = B("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = B("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = B("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = B("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = B("Download", [
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
const gm = B("Folder", [
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
const ym = B("Info", [
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
const ld = B("LayoutGrid", [
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
const vm = B("LayoutList", [
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
const wm = B("Link2Off", [
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
const xm = B("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = B("Maximize", [
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
const Sm = B("Minimize", [
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
const km = B("MoreVertical", [
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
const sd = B("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = B("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = B("PlusCircle", [
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
const ya = B("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = B("RefreshCw", [
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
const zn = B("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = B("Settings", [
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
const Nm = B("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = B("Star", [
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
const on = B("Tag", [
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
const On = B("Trash2", [
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
const Im = B("Type", [
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
const Tm = B("Upload", [
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
const Ie = B("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let bl = !1;
const Lm = (e) => {
  bl = e, bl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Mm = (...e) => {
  bl && console.log("[Meld]", ...e);
}, Pm = (...e) => {
  bl && console.warn("[Meld]", ...e);
}, bm = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: Mm,
  warn: Pm,
  error: bm,
  init: Lm
}, Dm = {
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
function Rm(e, t) {
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
        new Map(o.map((d) => [d.id, d])).values()
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
        const d = new Set(e.selectedIds);
        return d.add(t.payload), {
          ...e,
          selectedIds: d,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), s = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (l === -1 || s === -1) return e;
      const [a, o] = [
        Math.min(l, s),
        Math.max(l, s)
      ], u = new Set(e.selectedIds);
      for (let d = a; d <= o; d++)
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
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (d) => d.id === e.viewerImageId
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
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (d) => d.id === e.viewerImageId
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
const id = v.createContext(void 0), zm = ({
  children: e
}) => {
  const [t, n] = v.useReducer(Rm, Dm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = v.useCallback(
    async (y, w, x) => {
      const E = t.settings["gallery.max_load_count"], f = 200;
      let c = y;
      for (; c < Math.min(w, E) && x === l.current; )
        try {
          const p = Math.min(f, E - c);
          V.log("Background fetch: starting chunk", {
            offset: c,
            limit: p
          });
          const j = await ol(
            c,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (x !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), c += j.images.length, j.images.length === 0 || c >= j.total))
            break;
          await new Promise((I) => setTimeout(I, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), w = ++l.current;
    try {
      const x = t.searchQuery.trim() !== "", E = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: x,
        fetchLimit: E,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await ol(
        0,
        E,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), c = performance.now() - y;
      V.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: c.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > E && s(E, f.total, w);
    } catch (x) {
      V.error("refreshImages: fetch failed", x), n({
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
      const w = r.current, x = t.searchQuery.trim() !== "", E = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: E,
        isSearch: x
      });
      const f = await ol(
        w,
        E,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), c = performance.now() - y;
      V.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: c.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (w) {
      V.error("loadMoreImages: fetch failed", w), n({
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
      const y = await Hp();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      V.error("Failed to load favorites", y);
    }
  }, []), d = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), x = t.images.filter(
      (E) => t.selectedIds.has(E.id)
    ).some(
      (E) => E.parent_id || E.has_children
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
      const x = (await wi(y)).restored_ids || y;
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
        await Op(y, w), n({ type: "SET_SETTINGS", payload: { [y]: w } });
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
        V.log("fetchFullImageDetails: fetching full data", { id: y });
        const x = await Kc(y);
        return n({ type: "UPDATE_IMAGE", payload: x }), x;
      } catch (x) {
        throw V.error("Failed to fetch image details", x), x;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const w = await Yc();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        V.error("Failed to load settings", w);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const y = () => {
      a();
    }, w = (E) => {
      const f = E.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, x = (E) => {
      const f = E.detail;
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
    id.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: d,
        restoreSelected: h,
        updateSetting: g,
        fetchFullImageDetails: m
      },
      children: e
    }
  );
}, Ve = () => {
  const e = v.useContext(id);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Om = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ve(), [s, a] = v.useState("gallery"), [o, u] = v.useState(""), [d, h] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", m = v.useRef(null), y = v.useRef(null), w = v.useMemo(
    () => e.images.filter((E) => e.viewScope === "trash" ? E.exists !== !1 || e.settings["gallery.trash.show_missing"] : E.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && E.has_children)),
    [e.images, e.settings, e.viewScope]
  ), x = v.useMemo(
    () => w.slice(0, d),
    [w, d]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), v.useEffect(() => {
    const E = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [e.activeModal.type, e.selectedIds.size, t]), v.useEffect(() => {
    const E = new IntersectionObserver(
      (c) => {
        if (c[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < w.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), h((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
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
    return f && E.observe(f), () => {
      f && E.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    w.length,
    e.pagination.limit,
    e.images.length
  ]), v.useEffect(() => {
    const E = e.viewerImageId ?? y.current;
    if (E !== null && w.some((c) => c.id === E)) {
      const c = w.findIndex((j) => j.id === E);
      if (c >= d) {
        h(
          Math.ceil((c + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${E}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    w,
    d,
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
    localLimit: d,
    displayedImages: w,
    visibleImages: x,
    isSearchActive: g,
    loadMoreRef: m
  };
}, Fm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = v.useState(!1), s = v.useRef(null);
  return v.useEffect(() => {
    const a = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = s.current;
    return o && a.observe(o), () => {
      o && a.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, Am = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ve(), l = e.selectedIds.size;
  if (l === 0) return null;
  const s = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (d) => e.selectedIds.has(d.id)
    ), u = /* @__PURE__ */ new Set();
    for (const d of o)
      if (d.tags)
        for (const h of d.tags)
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
                  Er,
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
                  on,
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
              /* @__PURE__ */ i.jsx(Ie, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, ad = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Ve(), a = v.useRef(!0);
  v.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = v.useRef(l.viewerImageId);
  v.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = v.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), d = v.useCallback(
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
      let E = !1;
      for (let f = x + 1; f < w.length; f++)
        if (!m.has(w[f].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: w[f].id, mode: l.viewerMode }
          }), E = !0;
          break;
        }
      if (!E) {
        for (let f = x - 1; f >= 0; f--)
          if (!m.has(w[f].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: w[f].id, mode: l.viewerMode }
            }), E = !0;
            break;
          }
      }
      E || s({ type: "CLOSE_VIEWER" });
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
      if (d(y), await vi(e, n), !a.current) return;
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
        const E = await yi(x);
        if (!a.current) return;
        for (const f of E)
          y.add(f.id);
      }
      const w = m.filter(
        (x) => y.has(x.id)
      );
      if (d(y), await vi(Array.from(y), n), !a.current) return;
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
              /* @__PURE__ */ i.jsx(On, { size: 20, color: "var(--meld-danger-color)" }),
              n ? "Permanent Deletion" : "Move to Trash"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: u,
                children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
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
                        om,
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
}, Ne = (e) => {
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
}, od = () => {
  const { dispatch: e } = Ve(), [t, n] = v.useState(() => {
    const k = localStorage.getItem("meld-import-config"), _ = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (k)
      try {
        const N = JSON.parse(k);
        return { ..._, ...N, tags: [] };
      } catch {
        return _;
      }
    return _;
  });
  v.useEffect(() => {
    const { tags: k, ..._ } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(_));
  }, [t]);
  const [r, l] = v.useState([]), [s, a] = v.useState([]), [o, u] = v.useState(0), [d, h] = v.useState(!1), [g, m] = v.useState([]), [y, w] = v.useState(""), [x, E] = v.useState(!1), [f, c] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const _ = await Dp();
        n((N) => N.custom_path ? N : { ...N, custom_path: _ });
      } catch (_) {
        V.error("Failed to fetch home directory:", _);
      }
    })();
  }, []), v.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const N = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${N}", Type: "${t.type}"`
      ), t.type === "custom" && !N) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      h(!0);
      const A = N, b = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const G = await $p(
          t.type,
          N,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${G.folders.length} folders, ${G.images.length} images.`
        ), l(G.folders), a(G.images), u(null);
        const xe = G.folders.map((T) => T.name);
        xe.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${xe.length} folders...`
        ), Vp(
          b,
          A,
          xe,
          k.signal
        ).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            ($) => $.map((Q) => {
              const q = T[Q.name];
              return q ? { ...Q, count: q.count, preview: q.preview } : Q;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", T);
        })), V.log("Step 3: Path image count starting..."), Up(b, A, k.signal).then((T) => {
          if (k.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 3: Path image count failed:", T);
        });
      } catch (G) {
        if (G.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", G), l([]), a([]), u(0);
      } finally {
        k.signal.aborted || h(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    E(!0);
    try {
      const k = await ga();
      m(k);
    } catch (k) {
      V.error("Failed to fetch tags:", k);
    } finally {
      E(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const k = (_) => {
      _.key === "Escape" && (_.preventDefault(), _.stopImmediatePropagation(), f ? c(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [f, e]);
  const j = v.useMemo(() => g.filter(
    (k) => k.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(k.name)
  ), [g, y, t.tags]), I = (k) => {
    const _ = k.trim();
    _ && !t.tags.includes(_) && (n({ ...t, tags: [...t.tags, _] }), w(""));
  }, P = (k) => {
    n({ ...t, tags: t.tags.filter((_) => _ !== k) });
  }, S = (k) => {
    k.key === "Enter" && y.trim() && (k.preventDefault(), I(y.trim()));
  }, C = async () => {
    try {
      await Qp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (k) {
      V.error("Failed to start scan:", k), alert(`Failed to start scan: ${k}`);
    }
  }, U = (k) => {
    if (t.type === "custom") {
      const _ = t.custom_path.includes("\\") ? "\\" : "/", N = t.custom_path.endsWith(_) ? `${t.custom_path}${k}` : `${t.custom_path}${_}${k}`;
      n({ ...t, custom_path: N });
    } else {
      const _ = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: _ });
    }
  }, D = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", _ = t.custom_path.split(k);
      if (_.length > 1) {
        _.pop();
        let N = _.join(k);
        N === "" && k === "/" && (N = "/"), n({ ...t, custom_path: N });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
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
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ i.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
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
                          onChange: (k) => n({
                            ...t,
                            type: k.target.value,
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
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
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
                          onChange: (k) => n({
                            ...t,
                            link_strategy: k.target.value,
                            auto_link_parent: k.target.value !== "none"
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
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => P(k),
                            children: /* @__PURE__ */ i.jsx(Ie, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: y,
                            onChange: (k) => w(k.target.value),
                            onKeyDown: S
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => I(y),
                            children: /* @__PURE__ */ i.jsx(ya, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? y && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : j.map((k) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => I(k.name),
                          children: k.name
                        },
                        k.id
                      )) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: C,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ i.jsx(jm, { size: 16 }),
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
                            /* @__PURE__ */ i.jsx(nd, { size: 16 }),
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
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
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
                    /* @__PURE__ */ i.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && s.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(k.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ne(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(gm, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(rd, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((k) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => c(k),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: Ne(k),
                              alt: k.filename,
                              title: k.filename
                            }
                          )
                        },
                        k.filename
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
              onClick: (k) => {
                k.stopPropagation(), c(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => c(null),
                          children: /* @__PURE__ */ i.jsx(Ie, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: Ne(f),
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
}, ud = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ve(), [l, s] = v.useState([]), [a, o] = v.useState(!0), [u, d] = v.useState(!1), h = t.images.find((c) => c.id === e), g = v.useCallback(async () => {
    o(!0);
    try {
      const c = t.settings["gallery.suggest_phash_threshold"], p = await Fp(e, c);
      s(p);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    g();
  }, [g]);
  const m = async (c) => {
    if (c == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!h || c === h.parent_id) && !(h.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Lo(e, c), await Kc(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (p) {
        console.error("Failed to link parent:", p);
      }
  }, y = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Lo(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (c) {
        console.error("Failed to remove source:", c), alert("Failed to remove source image.");
      }
  }, w = async (c) => {
    o(!0);
    try {
      const p = await Ap(c), { id: j } = await Xc({
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
  }, x = (c) => {
    c.preventDefault(), c.stopPropagation(), d(!1);
    const p = c.dataTransfer.files[0];
    p != null && p.type.startsWith("image/") && w(p);
  };
  if (!h) return null;
  const E = l.filter((c) => c.is_source_match), f = l.filter((c) => !c.is_source_match);
  return ze.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
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
                children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
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
                        /* @__PURE__ */ i.jsx(xm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Ne({
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
                      children: /* @__PURE__ */ i.jsx(wm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
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
                  /* @__PURE__ */ i.jsx(Tm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              E.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: E.map((c) => {
                  const p = c.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(c.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Ne(c), alt: c.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
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
                    c.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                f.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: f.map((c) => {
                  const p = c.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(c.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Ne(c), alt: c.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
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
                                  Math.round((64 - c.distance) / 64 * 100),
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
                    c.id
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
}, $m = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ve(), [r, l] = v.useState("General"), [s, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [d, h] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, m] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, w] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, E] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, c] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, j] = v.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [I, P] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [S, C] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [U, D] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    k,
    _
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    N,
    A
  ] = v.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: s,
    setLocalSettings: a,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const O = Object.keys(s).filter(
        (Y) => s[Y] !== e.settings[Y] && !o[Y]
      );
      if (O.length > 0)
        for (const Y of O)
          await n(Y, s[Y]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (O, Y) => {
      a((te) => ({
        ...te,
        [O]: !Y
      }));
    },
    handleNumberChange: (O, Y, te, tt) => {
      O === "gallery.initial_load_count" ? h(Y) : O === "gallery.max_load_count" ? m(Y) : O === "gallery.lineage_max_depth" ? w(Y) : O === "viewer.thumbnail_window_size" ? E(Y) : O === "gallery.trash_retention_days" ? c(Y) : O === "gallery.auto_link_phash_threshold" ? j(Y) : O === "gallery.suggest_phash_threshold" ? P(Y) : O === "viewer.details.max_positive_prompt_lines" ? C(Y) : O === "viewer.details.max_negative_prompt_lines" ? D(Y) : O === "fullscreen.details.max_positive_prompt_lines" ? _(Y) : O === "fullscreen.details.max_negative_prompt_lines" && A(Y);
      const De = Number.parseInt(Y, 10);
      if (!Number.isNaN(De)) {
        let Ke = De;
        te !== void 0 && Ke < te && (Ke = te), tt !== void 0 && Ke > tt && (Ke = tt), a((z) => ({
          ...z,
          [O]: Ke
        }));
      }
    },
    handleNumberBlur: (O) => {
      O.key === "gallery.initial_load_count" ? h(
        s["gallery.initial_load_count"].toString()
      ) : O.key === "gallery.max_load_count" ? m(s["gallery.max_load_count"].toString()) : O.key === "gallery.lineage_max_depth" ? w(
        s["gallery.lineage_max_depth"].toString()
      ) : O.key === "viewer.thumbnail_window_size" ? E(
        s["viewer.thumbnail_window_size"].toString()
      ) : O.key === "gallery.trash_retention_days" ? c(
        s["gallery.trash_retention_days"].toString()
      ) : O.key === "gallery.auto_link_phash_threshold" ? j(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : O.key === "gallery.suggest_phash_threshold" ? P(
        s["gallery.suggest_phash_threshold"].toString()
      ) : O.key === "viewer.details.max_positive_prompt_lines" ? C(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : O.key === "viewer.details.max_negative_prompt_lines" ? D(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : O.key === "fullscreen.details.max_positive_prompt_lines" ? _(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : O.key === "fullscreen.details.max_negative_prompt_lines" && A(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      );
    },
    handleResetShortcuts: () => {
      a((O) => ({
        ...O,
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
    validateShortcut: (O) => O.trim() ? O.trim().split(/\s+/).every((te) => !!(te === "next" || te === "prev" || te === "delete" || te.startsWith("tag:") && te.length > 4 || te.startsWith("-tag:") && te.length > 5 || te.startsWith("tag-toggle:") && te.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: g,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: I,
    maxPositivePromptLinesInput: S,
    maxNegativePromptLinesInput: U,
    fullscreenMaxPositivePromptLinesInput: k,
    fullscreenMaxNegativePromptLinesInput: N
  };
}, F = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__control", children: n })
] }), bo = ({
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
      F,
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
      F,
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
      F,
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
      F,
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
  ] }), d = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      F,
      {
        label: "Show Detail by Default",
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
      {
        label: "Show Source",
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
      F,
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
      F,
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
      F,
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
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    !o && u(),
    d()
  ] });
}, Vm = ({
  localSettings: e,
  handleToggle: t,
  handleNumberChange: n,
  handleNumberBlur: r,
  setLocalSettings: l,
  handleViewTrash: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o,
  lineageMaxDepthInput: u,
  trashRetentionDaysInput: d,
  autoLinkPhashThresholdInput: h,
  suggestPhashThresholdInput: g
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    /* @__PURE__ */ i.jsx(
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
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
      F,
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
      F,
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
    F,
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
] }), Um = ({
  localSettings: e,
  handleToggle: t
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    F,
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
    F,
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
  ),
  /* @__PURE__ */ i.jsx(
    F,
    {
      label: "Real-time Search",
      description: "Perform search automatically while typing without pressing Enter.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.realtime_search"],
            onChange: () => t(
              "search.realtime_search",
              e["search.realtime_search"]
            )
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  )
] }), Qm = ({
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
      o.map((u, d) => /* @__PURE__ */ i.jsx(
        F,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
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
        F,
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
      F,
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
}, Wm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    F,
    {
      label: "Show Filename/Path",
      description: "Choose how to display the filename or path on the card.",
      children: /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "meld-select",
          value: e["sidebar.show_filename"],
          onChange: (r) => t((l) => ({
            ...l,
            "sidebar.show_filename": r.target.value
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
    F,
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
    F,
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
    F,
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
    F,
    {
      label: "Show Model Name",
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
    F,
    {
      label: "Show Positive Prompt",
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
    F,
    {
      label: "Show Negative Prompt",
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
  /* @__PURE__ */ i.jsx(F, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
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
] }), Do = ({
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
  const d = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
      {
        label: "Show by Default",
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
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
      F,
      {
        label: "Show Source",
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
      F,
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
      F,
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
      F,
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
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    !u && d(),
    h()
  ] });
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
    handleNumberBlur: d,
    handleResetShortcuts: h,
    handleViewTrash: g,
    validateShortcut: m,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: w,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: E,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: c,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: I,
    fullscreenMaxPositivePromptLinesInput: P,
    fullscreenMaxNegativePromptLinesInput: S
  } = $m(), C = [
    { id: "General", label: "General" },
    { id: "Sidebar", label: "Sidebar" },
    { id: "Search", label: "Search" },
    { id: "View", label: "View" },
    { id: "View Details", label: "View Details" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Full Screen Detail", label: "Full Screen Detail" },
    { id: "Shortcuts", label: "Shortcuts" }
  ], U = () => {
    switch (e) {
      case "General":
        return /* @__PURE__ */ i.jsx(
          Vm,
          {
            localSettings: n,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            setLocalSettings: r,
            handleViewTrash: g,
            initialLoadCountInput: y,
            maxLoadCountInput: w,
            lineageMaxDepthInput: x,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: c,
            suggestPhashThresholdInput: p
          }
        );
      case "Sidebar":
        return /* @__PURE__ */ i.jsx(
          Wm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o
          }
        );
      case "Search":
        return /* @__PURE__ */ i.jsx(
          Um,
          {
            localSettings: n,
            handleToggle: o
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: E,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: I
          }
        );
      case "View Details":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: E,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: I,
            showDetailsOnly: !0
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          bo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: P,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen Detail":
        return /* @__PURE__ */ i.jsx(
          bo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: P,
            maxNegativePromptLinesInput: S,
            showDetailsOnly: !0
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Qm,
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
        onClick: (D) => D.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: a,
                children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: C.map((D) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === D.id ? "active" : ""}`,
                onClick: () => t(D.id),
                children: D.label
              },
              D.id
            )) }) }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: U() })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, at = "none", dd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Ve(), [s, a] = v.useState([]), [o, u] = v.useState(t), [d, h] = v.useState(""), [g, m] = v.useState(!0), [y, w] = v.useState(!1), x = v.useRef(null), E = e.length > 1, f = v.useCallback(async () => {
    m(!0);
    try {
      const S = await ga();
      a(S);
    } catch (S) {
      console.error("Failed to fetch tags:", S);
    } finally {
      m(!1);
    }
  }, []);
  v.useEffect(() => {
    f();
  }, [f]), v.useEffect(() => {
    x.current && x.current.focus();
    const S = (C) => {
      C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), C.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, {
      capture: !0
    });
  }, [n]);
  const c = v.useMemo(() => s.filter(
    (S) => S.name.toLowerCase().includes(d.toLowerCase()) && !o.includes(S.name)
  ), [s, d, o]), p = (S) => {
    const C = S.trim();
    if (C.toLowerCase() === at) {
      alert(
        `Tag name '${at}' is reserved for search and cannot be used.`
      );
      return;
    }
    C && !o.includes(C) && (u([...o, C]), h(""));
  }, j = (S) => {
    u(o.filter((C) => C !== S));
  }, I = async () => {
    w(!0);
    try {
      if (E) {
        const S = o.filter((U) => !t.includes(U)), C = t.filter(
          (U) => !o.includes(U)
        );
        await xi(e, S, C);
      } else
        await Zp(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (S) {
      console.error("Failed to update tags:", S), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, P = (S) => {
    S.key === "Enter" && d.trim() ? (S.preventDefault(), S.stopPropagation(), p(d.trim())) : S.key === "Escape" && (S.preventDefault(), S.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return ze.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (S) => {
          S.stopPropagation(), n();
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(on, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: E ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Ie, { size: 20 }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            E && /* @__PURE__ */ i.jsx(
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
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: E ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((S) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                S,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => j(S),
                    children: /* @__PURE__ */ i.jsx(Ie, { size: 12 })
                  }
                )
              ] }, S)) })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: x,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: d,
                    onChange: (S) => h(S.target.value),
                    onKeyDown: P
                  }
                ),
                d.trim() && !o.includes(d.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(d),
                    children: [
                      /* @__PURE__ */ i.jsx(ya, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : c.length === 0 ? d ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : c.map((S) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(S.name),
                  children: S.name
                },
                S.id
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
                onClick: I,
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
}, Hm = () => {
  const { state: e, dispatch: t } = Ve();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "parent_selection" && ze.createPortal(
      /* @__PURE__ */ i.jsx(ud, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ze.createPortal(/* @__PURE__ */ i.jsx(od, {}), document.body),
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
        ad,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, Bm = ({ image: e }) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ve(), l = t.selectedIds.has(e.id), a = (t.settings["gallery.view_mode"] || "grid_details") === "grid_only", [o, u] = v.useState(null), [d, h] = v.useState(!1), [g, m] = v.useState(null), [y, w] = v.useState(!1), x = v.useRef(null), E = async (_, N, A = !1) => {
    try {
      await navigator.clipboard.writeText(_), A ? (w(!0), setTimeout(() => w(!1), 2e3)) : (m(N), setTimeout(() => m(null), 2e3));
    } catch (b) {
      console.error("Failed to copy text: ", b);
    }
  };
  v.useEffect(() => {
    const _ = (A) => {
      A.key === "Escape" && (o ? u(null) : h(!1));
    }, N = (A) => {
      x.current && !x.current.contains(A.target) && h(!1);
    };
    return window.addEventListener("keydown", _), d && document.addEventListener("mousedown", N), () => {
      window.removeEventListener("keydown", _), document.removeEventListener("mousedown", N);
    };
  }, [d, o]);
  const f = (_) => {
    const N = t.settings["gallery.lineage_max_depth"];
    if (N === 0) return [];
    if (_.ancestors && _.ancestors.length > 0)
      return _.ancestors.slice(0, N).map((T) => ({
        id: T.id,
        imgSrc: Ne(T)
      }));
    const A = _.parent_id;
    if (!A || !_.parent_filename) return [];
    const b = t.images.find((T) => T.id === A);
    let G = null;
    if (b ? G = Ne(b) : G = Ne({
      filename: _.parent_filename,
      subfolder: _.parent_subfolder || "",
      type: _.parent_type
    }), !G) return [];
    const xe = {
      id: A || null,
      imgSrc: G
    };
    if (b && N > 1) {
      const T = f(b);
      return [xe, ...T].slice(0, N);
    }
    return [xe];
  }, c = f(e), j = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, I = Ne(e), P = (_) => {
    _.shiftKey ? (_.preventDefault(), _.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : _.ctrlKey || _.metaKey || t.selectedIds.size > 0 ? (_.preventDefault(), _.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, S = (_) => {
    _.shiftKey ? (_.preventDefault(), _.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : _.ctrlKey || _.metaKey || t.selectedIds.size > 0 ? (_.preventDefault(), _.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, C = (_) => {
    (_.shiftKey || _.ctrlKey || _.metaKey || t.selectedIds.size > 0) && _.preventDefault();
  }, U = (_) => {
    (_.key === "Enter" || _.key === " ") && (_.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, D = async () => {
    try {
      const _ = await Jp(e.id);
      if (!_.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        _.workflow
      ), V.log("Workflow restored successfully from Meld");
    } catch (_) {
      V.error("Error restoring workflow:", _), alert("Failed to restore workflow.");
    }
  }, k = async () => {
    try {
      const _ = await qp(e.id), N = "MeldUnifiedLoader", A = window.app, G = window.LiteGraph.createNode(N);
      if (!G) {
        console.error(`Node type ${N} not found.`), alert(
          `Node type ${N} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const xe = {
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
      if (G.widgets) {
        for (const [q, O] of Object.entries(xe)) {
          const Y = _[q];
          if (Y != null) {
            const te = G.widgets.find(
              (tt) => tt.name === O
            );
            te && (te.value = Y);
          }
        }
        const Q = G.widgets.find(
          (q) => q.name === "control_after_generate"
        );
        Q && (Q.value = "fixed");
      }
      const T = A.canvas.ds.offset, $ = A.canvas.ds.scale;
      G.pos = [(-T[0] + 400) / $, (-T[1] + 300) / $], A.graph.add(G), A.canvas.selectNode(G), A.canvas.centerOnNode(G);
    } catch (_) {
      console.error("Error adding Unified Loader:", _), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-image-card ${l ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--grid-only" : ""}`,
      onClick: S,
      onMouseDown: C,
      onKeyDown: U,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: I,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: C,
            onClick: (_) => {
              _.stopPropagation(), P(_);
            }
          }
        ) }),
        !a && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && j,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && c.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: c.map(
              (_, N) => _.imgSrc && /* @__PURE__ */ i.jsx(
                "img",
                {
                  src: _.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (A) => {
                    A.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: _.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: N === 0 ? "Source" : N === 1 ? "Grand-Source" : `Ancestor (S${N + 1})`,
                  alt: "source thumb"
                },
                _.id || N
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
              onClick: async (_) => {
                _.stopPropagation();
                const N = await r(e.id);
                u({
                  title: "Model",
                  text: N.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${g === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (_) => {
                      _.stopPropagation();
                      const N = await r(e.id);
                      E(N.model_name || "-", "Model");
                    },
                    children: g === "Model" ? "Copied!" : "Model"
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
              onClick: async (_) => {
                _.stopPropagation();
                const N = await r(e.id);
                u({
                  title: "Positive Prompt",
                  text: N.positive_prompt || N.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${g === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (_) => {
                      _.stopPropagation();
                      const N = await r(e.id);
                      E(
                        N.positive_prompt || N.positive || "-",
                        "Positive"
                      );
                    },
                    children: g === "Positive" ? "Copied!" : "Positive"
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
              onClick: async (_) => {
                _.stopPropagation();
                const N = await r(e.id);
                u({
                  title: "Negative Prompt",
                  text: N.negative_prompt || N.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${g === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (_) => {
                      _.stopPropagation();
                      const N = await r(e.id);
                      E(
                        N.negative_prompt || N.negative || "-",
                        "Negative"
                      );
                    },
                    children: g === "Negative" ? "Copied!" : "Negative"
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
              onClick: (_) => {
                _.stopPropagation(), n({
                  type: "OPEN_MODAL",
                  payload: {
                    type: "tag_edit",
                    imageIds: [e.id],
                    tags: e.tags || []
                  }
                });
              },
              children: [
                /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((_, N) => /* @__PURE__ */ i.jsx(
                  "span",
                  {
                    className: "meld-image-card__tag",
                    children: _
                  },
                  `${_}-${N}`
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
        !a && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu-container", ref: x, children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (_) => {
                _.stopPropagation(), h(!d);
              },
              title: "Menu",
              children: /* @__PURE__ */ i.jsx(km, { size: 16 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (_) => {
                _.stopPropagation(), k();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ i.jsx(Po, { size: 16 })
            }
          ),
          d && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), k(), h(!1);
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
                onClick: (_) => {
                  _.stopPropagation(), D(), h(!1);
                },
                children: [
                  /* @__PURE__ */ i.jsx(um, { size: 14 }),
                  /* @__PURE__ */ i.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), h(!1);
                },
                children: [
                  /* @__PURE__ */ i.jsx(Em, { size: 14 }),
                  /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (_) => {
                  _.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), h(!1);
                },
                children: [
                  /* @__PURE__ */ i.jsx(on, { size: 14 }),
                  /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        o && ze.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-prompt-popup-overlay",
              onClick: (_) => {
                _.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-prompt-popup-content",
                  onClick: (_) => _.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-prompt-popup-header", children: [
                      /* @__PURE__ */ i.jsx("span", { children: o.title }),
                      /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            y ? /* @__PURE__ */ i.jsx(
                              td,
                              {
                                size: 18,
                                style: { color: "var(--meld-success-color)" }
                              }
                            ) : /* @__PURE__ */ i.jsx(
                              mm,
                              {
                                className: "meld-prompt-popup-copy",
                                size: 18,
                                onClick: () => E(o.text, "", !0)
                              }
                            ),
                            /* @__PURE__ */ i.jsx(
                              Ie,
                              {
                                className: "meld-prompt-popup-close",
                                size: 18,
                                onClick: () => u(null)
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-prompt-popup-text", children: o.text })
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
}, Gm = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, [d, h] = v.useState(!1), [g, m] = v.useState(
    u["viewer.show_details_by_default"]
  ), [y, w] = v.useState(null), x = y ?? u["viewer.show_thumbnails"], [E, f] = v.useState(!1), [c, p] = v.useState(!1), [j, I] = v.useState(null), [P, S] = v.useState(null), [C, U] = v.useState(
    null
  ), D = v.useRef(null), k = v.useRef(!0);
  v.useEffect(() => (k.current = !0, () => {
    k.current = !1;
  }), []);
  const _ = v.useRef(l);
  v.useEffect(() => {
    _.current = l;
  }, [l]);
  const N = a === "lineage" ? o : s.filter(
    (z) => z.exists !== !1 && !(u["gallery.hide_parent_images"] && z.has_children)
  ), A = l === null ? -1 : N.findIndex((z) => z.id === l), b = (a === "lineage" && o.length > 0 ? o : s).find((z) => z.id === l), G = v.useCallback(
    async (z = !1) => {
      if (!b) return;
      const X = d ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!z && X === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [b.id],
            hasLineage: !!(b.parent_id || b.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const M = e.viewScope === "trash", Z = /* @__PURE__ */ new Set([b.id]);
        if (X === "lineage") {
          const W = await yi(b.id);
          for (const J of W)
            Z.add(J.id);
        }
        if (!k.current || _.current === null) return;
        if (N.length > Z.size) {
          let W = !1;
          for (let J = A + 1; J < N.length; J++)
            if (!Z.has(N[J].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: N[J].id, mode: a }
              }), W = !0;
              break;
            }
          if (!W) {
            for (let J = A - 1; J >= 0; J--)
              if (!Z.has(N[J].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: N[J].id, mode: a }
                }), W = !0;
                break;
              }
          }
          W || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await vi(Array.from(Z), M), !M) {
          const W = N.filter(
            (J) => Z.has(J.id)
          );
          I(W), S(null);
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
      b,
      d,
      u,
      e.viewScope,
      N,
      A,
      a,
      t
    ]
  ), xe = v.useCallback(() => {
    b && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [b.id],
        tags: b.tags || []
      }
    });
  }, [b, t]), T = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: d } });
  }, [t, d]), $ = v.useCallback(async () => {
    const z = d ? u["fullscreen.loop"] : u["viewer.loop"];
    if (A === 0 && a === "gallery" && e.pagination.hasMore && !c && z) {
      p(!0);
      try {
        const X = e.pagination.limit, M = e.pagination.total, Z = Math.max(0, M - X), W = await ol(
          Z,
          X,
          e.searchQuery
        );
        if (!k.current || (t({ type: "APPEND_IMAGES", payload: W }), _.current === null)) return;
        if (W.images.length > 0) {
          const J = W.images[W.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: J.id, mode: "gallery" }
          });
        }
      } catch (X) {
        console.error("Failed to jump to end:", X);
      } finally {
        p(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: d } });
  }, [
    A,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    c,
    d
  ]), Q = v.useCallback(
    (z) => {
      z && "stopPropagation" in z && z.stopPropagation();
      const X = D.current;
      X && (document.fullscreenElement ? document.exitFullscreen() : X.requestFullscreen().catch((M) => {
        console.error(
          `Error attempting to enable full-screen mode: ${M.message}`
        );
      }));
    },
    []
  ), q = v.useCallback(async () => {
    if (b)
      try {
        const z = b.id;
        N.length > 1 ? T() : t({ type: "CLOSE_VIEWER" });
        const M = (await wi([z])).restored_ids || [z];
        t({ type: "REMOVE_IMAGES", payload: M });
      } catch (z) {
        t({
          type: "SET_ERROR",
          payload: z instanceof Error ? z.message : String(z)
        });
      }
  }, [b, N.length, T, t]), O = v.useCallback(async () => {
    if (!j || j.length === 0) return;
    const z = j.map((M) => M.id), X = z[0];
    try {
      const M = await wi(z);
      if (!k.current) return;
      if (t({ type: "ADD_IMAGES", payload: j }), e.viewScope === "trash") {
        const Z = M.restored_ids || z;
        t({ type: "REMOVE_IMAGES", payload: Z });
      }
      if (I(null), !k.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: X, mode: a }
      });
    } catch (M) {
      t({
        type: "SET_ERROR",
        payload: M instanceof Error ? M.message : String(M)
      });
    }
  }, [j, t, a, e.viewScope]), Y = v.useCallback(async () => {
    if (j && j.length > 0)
      await O();
    else if (P && P.type === "tags") {
      const { imageId: z, addTags: X, removeTags: M } = P;
      try {
        await xi([z], X, M);
        const Z = (a === "lineage" ? o : s).find((W) => W.id === z);
        if (Z) {
          const W = [...Z.tags];
          for (const ge of X)
            W.includes(ge) || W.push(ge);
          const J = W.filter((ge) => !M.includes(ge));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Z, tags: J }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: z, mode: a }
          });
        }
        S(null);
      } catch (Z) {
        t({
          type: "SET_ERROR",
          payload: Z instanceof Error ? Z.message : String(Z)
        });
      }
    }
  }, [
    j,
    P,
    O,
    s,
    o,
    a,
    t
  ]), te = v.useCallback(
    async (z) => {
      if (!z || !b) return;
      const X = b.id, M = [...b.tags], Z = z.split(/\s+/), W = [], J = [];
      let ge = !1, un = !1, Mr = !1;
      for (const ye of Z)
        if (ye.startsWith("tag:")) {
          const de = ye.substring(4);
          de && !M.includes(de) && !W.includes(de) && W.push(de);
        } else if (ye.startsWith("-tag:")) {
          const de = ye.substring(5);
          de && M.includes(de) && !J.includes(de) && J.push(de);
        } else if (ye.startsWith("tag-toggle:")) {
          const de = ye.substring(11);
          de && (M.includes(de) ? J.includes(de) || J.push(de) : W.includes(de) || W.push(de));
        } else ye === "next" ? ge = !0 : ye === "prev" ? un = !0 : ye === "delete" && (Mr = !0);
      if (W.length > 0 || J.length > 0)
        try {
          await xi([X], W, J);
          const ye = [...M];
          for (const Bt of W)
            ye.includes(Bt) || ye.push(Bt);
          const de = ye.filter((Bt) => !J.includes(Bt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...b, id: X, tags: de }
          }), S({
            type: "tags",
            imageId: X,
            addTags: [...J],
            removeTags: [...W]
          }), I(null);
        } catch (ye) {
          console.error("Failed to update tags via shortcut:", ye);
        }
      Mr ? G(!0) : ge ? T() : un && $();
    },
    [b, t, T, $, G]
  );
  v.useEffect(() => {
    const z = (M) => {
      var de, Bt, va;
      if (l === null) return;
      const Z = ((de = document.activeElement) == null ? void 0 : de.tagName) === "INPUT" || ((Bt = document.activeElement) == null ? void 0 : Bt.tagName) === "TEXTAREA" || ((va = document.activeElement) == null ? void 0 : va.isContentEditable), W = M.key === "Delete" || M.key === "Backspace", J = M.key === "ArrowRight" || M.key === "ArrowLeft", ge = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        M.key
      ), un = M.key === "Escape", Mr = (M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z" || M.code === "KeyZ"), ye = /^[0-9]$/.test(M.key) && !M.ctrlKey && !M.metaKey && !M.altKey && M.code !== "KeyZ";
      if (W || J || ge || un || Mr || ye)
        if (Z)
          if (un) {
            if (e.activeModal.type !== "none") {
              M.preventDefault(), M.stopPropagation();
              return;
            }
            M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
          } else
            return;
        else {
          if (un && e.activeModal.type !== "none") {
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
        T();
      else if (M.key === "ArrowLeft")
        $();
      else if (M.key === "f" || M.key === "F")
        Q(M);
      else if (M.key === "i" || M.key === "I")
        m((Zl) => !Zl);
      else if (M.key === "t" || M.key === "T")
        xe();
      else if ((M.key === "r" || M.key === "R") && e.viewScope === "trash")
        q();
      else if (M.key === "Delete")
        G();
      else if ((M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z"))
        Y();
      else if (ye && !Z) {
        const Zl = `viewer.shortcut.${M.key}`, Jl = u[Zl];
        typeof Jl == "string" && Jl && (U(M.key), setTimeout(() => {
          k.current && U(null);
        }, 500), te(Jl));
      }
    };
    window.addEventListener("keydown", z, { capture: !0 });
    const X = () => {
      const M = !!document.fullscreenElement;
      h(M), m(M ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", X), () => {
      window.removeEventListener("keydown", z, { capture: !0 }), document.removeEventListener("fullscreenchange", X);
    };
  }, [
    l,
    t,
    Q,
    T,
    $,
    u,
    G,
    e.activeModal.type,
    Y,
    xe,
    q,
    e.viewScope,
    te
  ]), v.useEffect(() => {
    l !== null && r(l).catch((z) => {
      console.error("Failed to fetch full image details for viewer:", z);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (f(!0), yi(l).then((z) => {
      k.current && t({ type: "SET_LINEAGE", payload: z });
    }).catch((z) => {
      console.error("Failed to fetch lineage:", z);
    }).finally(() => {
      k.current && f(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || A !== -1 && A >= N.length - 15 && n();
  }, [
    l,
    N.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    A
  ]);
  const tt = v.useMemo(() => {
    if (!x || A === -1) return [];
    const z = u["viewer.thumbnail_window_size"], X = Math.floor(z / 2);
    let M = Math.max(0, A - X);
    const Z = Math.min(N.length, M + z);
    return Z === N.length && (M = Math.max(0, Z - z)), N.slice(M, Z).map((W, J) => ({
      img: W,
      absIndex: M + J
    }));
  }, [N, A, u, x]), De = v.useCallback(
    (z) => {
      const X = u["gallery.lineage_max_depth"];
      if (X === 0) return [];
      if (z.ancestors && z.ancestors.length > 0)
        return z.ancestors.slice(0, X).map((ge) => ({
          id: ge.id,
          imgSrc: Ne(ge)
        }));
      const M = z.parent_id;
      if (!M || !z.parent_filename) return [];
      const Z = s.find((ge) => ge.id === M);
      let W = null;
      if (Z ? W = Ne(Z) : W = Ne({
        filename: z.parent_filename,
        subfolder: z.parent_subfolder || "",
        type: z.parent_type
      }), !W) return [];
      const J = {
        id: M || null,
        imgSrc: W
      };
      if (Z && X > 1) {
        const ge = De(Z);
        return [J, ...ge].slice(0, X);
      }
      return [J];
    },
    [u, s]
  ), Ke = v.useMemo(() => b ? De(b) : [], [b, De]);
  return v.useEffect(() => {
    var z, X;
    if (l !== null) {
      if (x) {
        const M = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        M && M.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((z = document.activeElement) == null ? void 0 : z.tagName) === "CANVAS" && document.activeElement.blur(), (X = D.current) == null || X.focus();
    }
  }, [l, x]), v.useEffect(() => {
    if (l === null || N.length === 0) return;
    const z = N.findIndex(
      (W) => W.id === l
    );
    if (z === -1) return;
    const X = (W) => Ne(W), M = [
      z + 1,
      z + 2,
      z - 1
    ], Z = setTimeout(() => {
      for (const W of M)
        if (W >= 0 && W < N.length) {
          const J = N[W], ge = new Image();
          ge.src = X(J);
        }
    }, 150);
    return () => clearTimeout(Z);
  }, [l, N]), {
    isFullscreen: d,
    showDetails: g,
    setShowDetails: m,
    showThumbnails: x,
    setShowThumbnailsOverride: w,
    isLoadingLineage: E,
    isJumping: c,
    activeShortcutKey: C,
    lastDeletedImages: j,
    setLastDeletedImages: I,
    overlayRef: D,
    handleNext: T,
    handlePrevious: $,
    handleDelete: G,
    handleTagEdit: xe,
    handleRestore: q,
    handleUndo: Y,
    toggleFullscreen: Q,
    currentIndex: A,
    currentThumbnails: N,
    image: b,
    windowedThumbnails: tt,
    parentChain: Ke
  };
}, Km = ({
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
}) }) : null, Ym = ({
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
), fd = v.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ne(e);
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
              children: s ? /* @__PURE__ */ i.jsx(ed, { size: 12 }) : /* @__PURE__ */ i.jsx(qc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
fd.displayName = "ThumbnailItem";
const Xm = ({
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
    fd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Er, { className: "animate-spin", size: 20 }) })
] }) }), Zm = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ve(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: d,
    isJumping: h,
    activeShortcutKey: g,
    setLastDeletedImages: m,
    overlayRef: y,
    handleNext: w,
    handlePrevious: x,
    handleTagEdit: E,
    handleRestore: f,
    toggleFullscreen: c,
    image: p,
    windowedThumbnails: j,
    parentChain: I
  } = Gm({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  if (!p) return null;
  const { viewerImageId: P, viewerMode: S } = e, C = Ne(p), U = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
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
                U && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: f,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ i.jsx(Er, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ i.jsx(ld, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: E,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ i.jsx(on, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!s),
                      type: "button",
                      title: s ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ i.jsx(ym, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: c,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(Sm, { size: 20 }) : /* @__PURE__ */ i.jsx(_m, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
                    }
                  )
                ] }),
                U && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: x,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ i.jsx(nd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Er, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: C,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                U && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(rd, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  Ym,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: U,
                    parentChain: I,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  Xm,
                  {
                    windowedThumbnails: j,
                    viewerImageId: P,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: S
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Km,
                  {
                    settings: e.settings,
                    activeShortcutKey: g
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            ad,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: m
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(ud, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(od, {}),
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
}, Jm = () => {
  const { state: e, dispatch: t } = Ve(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Wp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, s = n.progress.phase === "linking", { current: a, total: o } = n.progress, u = o > 0 ? a / o : 0, d = s ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        style: { width: `${d}%` }
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
        children: /* @__PURE__ */ i.jsx(Nm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(pm, { size: 14, className: "meld-success-icon" }),
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
}, qm = () => {
  const { state: e, refreshFavorites: t } = Ve(), [n, r] = v.useState(!1), [l, s] = v.useState(null), [a, o] = v.useState(null), [u, d] = v.useState(""), [h, g] = v.useState("");
  v.useEffect(() => {
    if (l) {
      const E = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(E);
    }
  }, [l]);
  const m = v.useCallback(
    async (E, f, c) => {
      E.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${c}"?`;
      if (window.confirm(p))
        try {
          await Mo(f), await t();
        } catch (j) {
          V.error("Failed to delete favorite", j);
        }
    },
    [t]
  ), y = v.useCallback(
    (E, f) => {
      E.stopPropagation(), o(f), d(f.name), g(f.query);
    },
    []
  ), w = v.useCallback(async () => {
    if (!(!a || !u.trim() || !h.trim()))
      try {
        r(!0), await Gp(
          a.id,
          u,
          h
        ), await t(), o(null), s("Favorite updated.");
      } catch (E) {
        V.error("Failed to update favorite", E), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, h, t]), x = v.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((c) => c.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await Mo(f.id), await t(), s("Favorite removed.");
        } catch (c) {
          V.error("Failed to delete favorite:", c);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Bp(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (f) {
      V.error("Failed to save favorite:", f);
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
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: m,
    handleEditFavorite: y,
    handleSaveEditFavorite: w,
    handleSaveFavorite: x,
    setToastMessage: s
  };
}, eh = () => {
  const { state: e, dispatch: t } = Ve(), [n, r] = v.useState(e.searchQuery), [l, s] = v.useState([]), [a, o] = v.useState(!1), [u, d] = v.useState([]), [h, g] = v.useState(-1), m = v.useRef(null), y = v.useRef(e.searchQuery), w = n !== y.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      d([]);
      return;
    }
    !n && !e.searchQuery ? zp().then((S) => {
      d(S);
    }) : d([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    r(e.searchQuery), y.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var S;
    (S = m.current) == null || S.focus();
  }, []);
  const x = v.useCallback(
    (S, C = !0) => {
      y.current !== S && (V.log("SearchBar: triggering search", { query: S }), t({ type: "SET_SEARCH_QUERY", payload: S }), C && o(!1), y.current = S);
    },
    [t]
  );
  v.useEffect(() => {
    const S = setTimeout(async () => {
      if (n === y.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), o(!1);
        return;
      }
      const C = n.split(/\s+/), U = C[C.length - 1];
      if (U) {
        const D = U.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (D) {
          const k = D[1].toLowerCase(), _ = D[2], N = await Rp(_, k);
          s(N), o(N.length > 0), g(-1);
        } else
          s([]), o(!1);
      } else
        s([]), o(!1);
    }, 300);
    return () => clearTimeout(S);
  }, [n, e.settings["search.input_suggest"]]);
  const E = v.useCallback(
    (S) => {
      var G;
      const C = n.split(/\s+/), D = (C.pop() || "").match(/^([-!])/), k = D ? D[1] : "", A = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(S.type) ? S.value : `"${S.value}"`, b = `${[
        ...C,
        `${k}${S.type}:${A}`
      ].join(" ").trim()} `;
      r(b), s([]), o(!1), (G = m.current) == null || G.focus();
    },
    [n]
  ), f = (S) => {
    S.key === "Enter" ? x(n) : S.key === "Tab" ? a && h >= 0 && (E(l[h]), S.preventDefault()) : S.key === "ArrowDown" ? a && (g((C) => Math.min(C + 1, l.length - 1)), S.preventDefault()) : S.key === "ArrowUp" ? a && (g((C) => Math.max(C - 1, -1)), S.preventDefault()) : S.key === "Escape" && o(!1);
  }, c = v.useCallback(() => {
    r(""), x("");
  }, [x]), p = v.useCallback(
    (S, C) => {
      const k = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(S) ? C : `"${C}"`, _ = `${S}:${k}`;
      r(_), x(_);
    },
    [x]
  ), j = v.useCallback(
    (S) => {
      r(S), S || x("");
    },
    [x]
  ), I = v.useCallback(() => {
    if (n === y.current) return;
    const S = n.split(/\s+/), C = S[S.length - 1];
    C != null && C.match(
      /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
    ) && o(!0);
  }, [n]), P = v.useCallback(() => {
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
    applySuggestion: E,
    clearSearch: c,
    applySearchSuggestion: p,
    handleInputChange: j,
    handleInputFocus: I,
    handleInputBlur: P
  };
}, th = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = v.useState(!1), [a, o] = v.useState(!1), [u, d] = v.useState(!1);
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
                  children: /* @__PURE__ */ i.jsx(sd, { size: 14 })
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
                  onMouseEnter: () => d(!0),
                  onMouseLeave: () => d(!1),
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
}, Ro = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(on, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(dm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(Im, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(fm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(ed, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(qc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(cm, { size: 12 });
    default:
      return null;
  }
}, nh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: o,
  applySearchSuggestion: u,
  favorites: d,
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
      children: t.map((E, f) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (c) => {
            c.preventDefault(), l(E);
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
                children: Ro(E.type)
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
                children: E.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: E.value === at ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: E.value === at ? "bold" : "normal"
                },
                children: E.value === at ? E.type === "tag" ? `Untagged (${at})` : `No ${E.type} (${at})` : E.value
              }
            )
          ] })
        },
        `${E.type}:${E.value}`
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
      children: o.map((E) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u(E.type, E.value),
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
                children: Ro(E.type)
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
                children: E.type
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
                children: E.value
              }
            )
          ]
        },
        `${E.type}:${E.value}`
      ))
    }
  ), x = () => s || d.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(_i, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: d.map((E) => /* @__PURE__ */ i.jsx(
              th,
              {
                fav: E,
                onSelect: h,
                onEdit: g,
                onDelete: m
              },
              E.id
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
}, rh = () => {
  const { state: e } = Ve(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    selectedIndex: a,
    setSelectedIndex: o,
    inputRef: u,
    isQueryChanged: d,
    handleSearch: h,
    handleKeyDown: g,
    applySuggestion: m,
    clearSearch: y,
    applySearchSuggestion: w,
    handleInputChange: x,
    handleInputFocus: E,
    handleInputBlur: f
  } = eh(), {
    isSaving: c,
    toastMessage: p,
    editingFavorite: j,
    setEditingFavorite: I,
    editFavoriteName: P,
    setEditFavoriteName: S,
    editFavoriteQuery: C,
    setEditFavoriteQuery: U,
    handleDeleteFavorite: D,
    handleEditFavorite: k,
    handleSaveEditFavorite: _,
    handleSaveFavorite: N
  } = qm(), A = v.useRef(null);
  return v.useEffect(() => {
    j && A.current && A.current.focus();
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
                          background: d ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: d ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: d ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (b) => {
                          b.currentTarget.style.transform = "translateY(-1px)", d ? (b.currentTarget.style.filter = "brightness(1.15)", b.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : b.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (b) => {
                          b.currentTarget.style.transform = "none", d ? (b.currentTarget.style.filter = "none", b.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : b.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (b) => {
                          b.currentTarget.style.transform = "translateY(1px)", b.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (b) => {
                          b.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            zn,
                            {
                              size: 16,
                              color: d ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: d ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          d && /* @__PURE__ */ i.jsx(
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
                        onChange: (b) => x(b.target.value),
                        onKeyDown: g,
                        onBlur: f,
                        onFocus: E,
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
                        onClick: N,
                        disabled: c,
                        title: e.favorites.some((b) => b.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          _i,
                          {
                            size: 16,
                            color: e.favorites.some((b) => b.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((b) => b.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ i.jsx(Ie, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                nh,
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
                  onSelectFavorite: (b) => {
                    n(b), h(b);
                  },
                  onEditFavorite: k,
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
              onClick: () => I(null),
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ i.jsx(_i, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => I(null),
                          children: /* @__PURE__ */ i.jsx(Ie, { size: 20 })
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
                                    ref: A,
                                    type: "text",
                                    value: P,
                                    onChange: (b) => S(b.target.value),
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
                                    onKeyDown: (b) => {
                                      b.key === "Enter" && _(), b.key === "Escape" && I(null);
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
                                    value: C,
                                    onChange: (b) => U(b.target.value),
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
                                    onKeyDown: (b) => {
                                      b.key === "Enter" && !b.shiftKey && (b.preventDefault(), _()), b.key === "Escape" && I(null);
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
                          onClick: () => I(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: _,
                          disabled: c || !P.trim() || !C.trim(),
                          children: c ? "Saving..." : "Save Changes"
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
}, lh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, s] = v.useState(!0), [a, o] = v.useState(""), [u, d] = v.useState(""), [h, g] = v.useState(!1), [m, y] = v.useState(null), [w, x] = v.useState(""), [E, f] = v.useState(!1), c = v.useRef(null), p = v.useCallback(async () => {
    s(!0);
    try {
      const k = await ga();
      r(k);
    } catch (k) {
      console.error("Failed to fetch tags:", k);
    } finally {
      s(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    m !== null && c.current && (c.current.focus(), c.current.select());
  }, [m]);
  const j = async (k) => {
    k.preventDefault();
    const _ = u.trim();
    if (!(!_ || h)) {
      if (_.toLowerCase() === at) {
        alert(
          `Tag name '${at}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((N) => N.name.toLowerCase() === _.toLowerCase())) {
        alert(`Tag "${_}" already exists.`);
        return;
      }
      g(!0);
      try {
        await Kp(_), d(""), await p();
      } catch (N) {
        console.error("Failed to add tag:", N);
      } finally {
        g(!1);
      }
    }
  }, I = async (k, _) => {
    if (confirm(`Are you sure you want to delete tag "${_}"?`))
      try {
        await Yp(k), await p();
      } catch (N) {
        console.error("Failed to delete tag:", N);
      }
  }, P = (k) => {
    y(k.id), x(k.name);
  }, S = () => {
    y(null), x("");
  }, C = async (k) => {
    k.preventDefault();
    const _ = w.trim();
    if (!_ || m === null || E) return;
    if (_.toLowerCase() === at) {
      alert(
        `Tag name '${at}' is reserved for search and cannot be used.`
      );
      return;
    }
    const N = n.find((A) => A.id === m);
    if (N && N.name === _) {
      S();
      return;
    }
    if (n.some(
      (A) => A.id !== m && A.name.toLowerCase() === _.toLowerCase()
    )) {
      alert(`Tag "${_}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Xp(m, _), S(), await p();
    } catch (A) {
      console.error("Failed to rename tag:", A), alert(A instanceof Error ? A.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, U = (k) => {
    t(`tag:${k}`);
  }, D = v.useMemo(() => n.filter(
    (k) => k.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ i.jsx(on, { size: 16 }),
        /* @__PURE__ */ i.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ i.jsx(Ie, { size: 16 })
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
            onChange: (k) => d(k.target.value),
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
              /* @__PURE__ */ i.jsx(ya, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (k) => o(k.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((k) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: m === k.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: C,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: c,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (_) => x(_.target.value),
                onKeyDown: (_) => _.key === "Escape" && S()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: E || !w.trim(),
                children: /* @__PURE__ */ i.jsx(td, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: S,
                disabled: E,
                children: /* @__PURE__ */ i.jsx(Ie, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-tag-item__name", children: k.name }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => U(k.name),
              children: /* @__PURE__ */ i.jsx(zn, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => P(k),
              children: /* @__PURE__ */ i.jsx(sd, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => I(k.id, k.name),
              children: /* @__PURE__ */ i.jsx(On, { size: 14 })
            }
          )
        ] })
      ] }) }, k.id)) })
    ] })
  ] });
}, sh = () => {
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
    displayedImages: d,
    visibleImages: h,
    isSearchActive: g,
    loadMoreRef: m
  } = Om();
  return V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
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
              /* @__PURE__ */ i.jsx(On, { size: 14 }),
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
                  /* @__PURE__ */ i.jsx(Ie, { size: 14 }),
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
                children: /* @__PURE__ */ i.jsx(zn, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(vm, { size: 14 }) : /* @__PURE__ */ i.jsx(ld, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(on, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(hm, { size: 14 })
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
                  Er,
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
                children: /* @__PURE__ */ i.jsx(Cm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(rh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(Jm, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          lh,
          {
            onClose: () => s("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), s("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: h.map((y) => /* @__PURE__ */ i.jsx("div", { "data-image-id": y.id, children: /* @__PURE__ */ i.jsx(Fm, { height: 150, children: /* @__PURE__ */ i.jsx(Bm, { image: y }) }) }, y.id))
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
                u >= d.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(Am, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(Zm, {}),
        /* @__PURE__ */ i.jsx(Hm, {})
      ]
    }
  );
};
zo.registerExtension({
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
const Xl = document.createElement("link");
Xl.rel = "stylesheet";
Xl.type = "text/css";
Xl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Xl);
let Yr = null, rt = null;
zo.registerExtension({
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
      const n = await Yc();
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
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
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
                  await Xc({
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
            V.log("render called", {
              el: n,
              galleryRoot: Yr,
              galleryContainer: rt
            }), rt || (V.log("galleryContainer not found, creating new one"), rt = document.createElement("div"), rt.id = "meld-gallery-container", rt.style.height = "100%", rt.style.width = "100%", rt.style.display = "flex", rt.style.flexDirection = "column"), n.contains(rt) || (V.log("Appending galleryContainer to el"), n.appendChild(rt)), Yr ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), Yr = Gc(rt), Yr.render(
              Sa.createElement(
                zm,
                null,
                Sa.createElement(sh)
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
